import os
import glob
import re
import shutil
import zipfile
import xml.etree.ElementTree as ET

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COURSES_DIR = os.path.join(ROOT_DIR, 'courses')
NS = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'

def docx_to_markdown(docx_path):
    with zipfile.ZipFile(docx_path) as z:
        tree = ET.fromstring(z.read('word/document.xml'))
    body = tree.find(NS + 'body')
    lines = []
    for elem in list(body):
        tag = elem.tag.replace(NS, '')
        if tag == 'p':
            pPr = elem.find(NS + 'pPr')
            pStyle = 'None'
            if pPr is not None and pPr.find(NS + 'pStyle') is not None:
                pStyle = pPr.find(NS + 'pStyle').attrib.get(NS + 'val', 'None')
            
            runs = []
            for r in elem.findall(NS + 'r'):
                rPr = r.find(NS + 'rPr')
                is_bold = rPr is not None and rPr.find(NS + 'b') is not None
                is_italic = rPr is not None and rPr.find(NS + 'i') is not None
                t = ''.join(r.itertext())
                if is_bold and is_italic:
                    t = f'***{t}***'
                elif is_bold:
                    t = f'**{t}**'
                elif is_italic:
                    t = f'*{t}*'
                runs.append(t)
            text = ''.join(runs).strip()
            # replace Google Docs code fence markers
            text = text.replace('\uec03', '```').replace('\uec02', '```')
            
            if pStyle == 'Heading1':
                lines.append(f'# {text}')
            elif pStyle == 'Heading2':
                lines.append(f'## {text}')
            elif pStyle == 'Heading3':
                lines.append(f'### {text}')
            elif pStyle == 'Heading4':
                lines.append(f'#### {text}')
            elif text:
                lines.append(text)
            else:
                lines.append('')
        elif tag == 'tbl':
            rows = []
            for tr in elem.findall(NS + 'tr'):
                cells = []
                for tc in tr.findall(NS + 'tc'):
                    tc_text = ' '.join(''.join(tc.itertext()).split()).strip()
                    cells.append(tc_text)
                rows.append(cells)
            if rows:
                lines.append('')
                lines.append('| ' + ' | '.join(rows[0]) + ' |')
                lines.append('| ' + ' | '.join(['---'] * len(rows[0])) + ' |')
                for r in rows[1:]:
                    lines.append('| ' + ' | '.join(r) + ' |')
                lines.append('')
    return '\n'.join(lines)

def escape_currency_dollar_signs(content):
    """
    Escapes standalone currency dollar signs ($1 Billion, $250 billion, $50,000, $100/kg)
    while preserving genuine LaTeX math expressions like $\\text{ROCE} = ...$ and $$\\text{PE} ...$$.
    """
    # Replace cases like $1 Billion, $250 billion, $50,000, $100, $70–$100M, etc.
    # Pattern: a dollar sign not preceded by backslash, followed immediately by digits or numbers+letters,
    # or followed by /kg, etc.
    content = re.sub(r'(?<!\\)\$(\d[\d,\.]*(?:\s*(?:billion|million|Billion|Million|k|M|Cr|crore|kg|/kg|/tonne))?)', r'\\$\1', content, flags=re.IGNORECASE)
    content = re.sub(r'(?<!\\)\$(\/kg)', r'\\$\1', content)
    content = re.sub(r'(?<!\\)\$(\/tonne)', r'\\$\1', content)
    content = re.sub(r'(?<!\\)\$\s*<\s*(\d)', r'\\$ < \1', content)
    return content

def merge_lecture_parts(file_1a, files_1b, file_1c):
    with open(file_1a, 'r', encoding='utf-8') as f:
        content_1a = f.read()
    
    # Strip generation plan section
    match = re.search(r'#+\s*5[\\.]*\s*GENERATION PLAN.*?(?=(\n#|\Z))', content_1a, re.DOTALL | re.IGNORECASE)
    if match:
        content_1a = content_1a[:match.start()].strip()
    
    parts = [content_1a, '', '---', '', '## 5. DETAILED STAGE-BY-STAGE NOTES', '']
    
    for f_1b in files_1b:
        with open(f_1b, 'r', encoding='utf-8') as f:
            parts.append(f.read().strip())
            parts.append('')
            parts.append('---')
            parts.append('')
    
    with open(file_1c, 'r', encoding='utf-8') as f:
        parts.append(f.read().strip())
    
    merged = '\n'.join(parts)
    return escape_currency_dollar_signs(merged)

def process_bf():
    print('Processing BF (Behavioural Finance)...')
    bf_dir = os.path.join(COURSES_DIR, 'bf')
    os.makedirs(os.path.join(bf_dir, 'review'), exist_ok=True)
    
    # 1. Convert SubCourse Summary
    summary_docx = os.path.join(bf_dir, '04_SubCourse_Summary', 'BF_Summary.md.docx')
    if os.path.exists(summary_docx):
        md_text = docx_to_markdown(summary_docx)
        out_summary = os.path.join(bf_dir, 'BF_SubCourse_Summary.md')
        with open(out_summary, 'w', encoding='utf-8') as f:
            f.write(md_text)
        print(f'  ✓ Converted {summary_docx} -> BF_SubCourse_Summary.md')
    
    # 2. Convert review docx files
    review_dir = os.path.join(bf_dir, '05_Review')
    if os.path.exists(review_dir):
        for f in glob.glob(os.path.join(review_dir, '*.docx')):
            base = os.path.basename(f).replace('.docx', '')
            md_text = docx_to_markdown(f)
            with open(os.path.join(bf_dir, 'review', base), 'w', encoding='utf-8') as out_f:
                out_f.write(md_text)
            print(f'  ✓ Converted {f} -> review/{base}')
    
    # 3. Move Summary References
    sum_ref = os.path.join(bf_dir, '03_Summary_References', 'BF_Summary_References.md')
    if os.path.exists(sum_ref):
        shutil.copy(sum_ref, os.path.join(bf_dir, 'BF_Summary_References.md'))
        print('  ✓ Copied BF_Summary_References.md to course root')
    
    # 4. Merge Lectures 01 to 04
    for lec in range(1, 5):
        prefix = f'BF_Lec0{lec}'
        file_1a = os.path.join(bf_dir, '02_Reports_Auto', f'{prefix}_1A.md')
        files_1b = sorted(glob.glob(os.path.join(bf_dir, '02_Reports_Auto', f'{prefix}_1B_*.md')))
        file_1c = os.path.join(bf_dir, '02_Reports_Auto', f'{prefix}_1C.md')
        
        if os.path.exists(file_1a) and os.path.exists(file_1c):
            merged = merge_lecture_parts(file_1a, files_1b, file_1c)
            out_report = os.path.join(bf_dir, f'{prefix}_Report.md')
            with open(out_report, 'w', encoding='utf-8') as out_f:
                out_f.write(merged)
            print(f'  ✓ Merged {prefix} -> {prefix}_Report.md ({len(merged)} bytes)')

def process_cc():
    print('\nProcessing CC (TVGP Crash Course)...')
    cc_dir = os.path.join(COURSES_DIR, 'cc')
    os.makedirs(os.path.join(cc_dir, 'review'), exist_ok=True)
    
    # 1. SubCourse Summary
    sum_md = os.path.join(cc_dir, '04_SubCourse_Summary', 'CC_Summary.md')
    if os.path.exists(sum_md):
        shutil.copy(sum_md, os.path.join(cc_dir, 'CC_SubCourse_Summary.md'))
        print('  ✓ Copied CC_Summary.md -> CC_SubCourse_Summary.md')
    
    # 2. Summary References
    sum_ref = os.path.join(cc_dir, '03_Summary_References', 'CC_Summary_References.md')
    if os.path.exists(sum_ref):
        shutil.copy(sum_ref, os.path.join(cc_dir, 'CC_Summary_References.md'))
        print('  ✓ Copied CC_Summary_References.md to course root')
        
    # 3. Review files
    review_dir = os.path.join(cc_dir, '05_Review')
    if os.path.exists(review_dir):
        for f in glob.glob(os.path.join(review_dir, '*.md')):
            shutil.copy(f, os.path.join(cc_dir, 'review', os.path.basename(f)))
        print('  ✓ Copied review files to cc/review/')
        
    # 4. Process Lectures 01 and 02 (already merged, escape currency)
    for lec in [1, 2]:
        prefix = f'CC_Lec0{lec}'
        src = os.path.join(cc_dir, '02_Reports_Auto', f'{prefix}_Report.md')
        if os.path.exists(src):
            with open(src, 'r', encoding='utf-8') as f:
                content = f.read()
            escaped = escape_currency_dollar_signs(content)
            dest = os.path.join(cc_dir, f'{prefix}_Report.md')
            with open(dest, 'w', encoding='utf-8') as f:
                f.write(escaped)
            print(f'  ✓ Escaped currency & moved {prefix}_Report.md')
            
    # 5. Merge Lectures 03 to 07
    for lec in range(3, 8):
        prefix = f'CC_Lec0{lec}'
        # CC_Lec0X_Report.md in 02_Reports_Auto is actually the 1A outline!
        file_1a = os.path.join(cc_dir, '02_Reports_Auto', f'{prefix}_Report.md')
        # exclude duplicate like CC_Lec03_1B_1-4(1).md
        files_1b = [
            f for f in sorted(glob.glob(os.path.join(cc_dir, '02_Reports_Auto', f'{prefix}_1B_*.md')))
            if not '(1)' in f
        ]
        file_1c = os.path.join(cc_dir, '02_Reports_Auto', f'{prefix}_1C.md')
        
        if os.path.exists(file_1a) and os.path.exists(file_1c):
            merged = merge_lecture_parts(file_1a, files_1b, file_1c)
            dest = os.path.join(cc_dir, f'{prefix}_Report.md')
            with open(dest, 'w', encoding='utf-8') as f:
                f.write(merged)
            print(f'  ✓ Merged {prefix} -> {prefix}_Report.md ({len(merged)} bytes)')

def process_vp():
    print('\nProcessing VP (Corporate Valuation & Portfolio Strategy)...')
    vp_dir = os.path.join(COURSES_DIR, 'vp')
    
    # 1. Rename L3_* files to VP_* files in courses/vp/
    for f in glob.glob(os.path.join(vp_dir, 'L3_*.md')):
        base = os.path.basename(f)
        new_base = base.replace('L3_', 'VP_')
        new_path = os.path.join(vp_dir, new_base)
        
        with open(f, 'r', encoding='utf-8') as fp:
            content = fp.read()
        
        # update internal references
        content = content.replace('/courses/l3/', '/courses/vp/')
        content = content.replace('/courses/v&p/', '/courses/vp/')
        content = content.replace('/transcripts/l3/', '/transcripts/vp/')
        content = content.replace('Level3-Lec', 'VP-Lec')
        content = content.replace('L3_Lec', 'VP_Lec')
        content = content.replace('L3_Subcourse_Summary', 'VP_Subcourse_Summary')
        content = content.replace('L3_Summary_References', 'VP_Summary_References')
        
        with open(new_path, 'w', encoding='utf-8') as fp:
            fp.write(content)
        os.remove(f)
        print(f'  ✓ Renamed {base} -> {new_base}')

    # 2. Update courses/vp/index.md if exists
    idx_path = os.path.join(vp_dir, 'index.md')
    if os.path.exists(idx_path):
        with open(idx_path, 'r', encoding='utf-8') as f:
            idx_content = f.read()
        idx_content = idx_content.replace('/courses/l3/', '/courses/vp/')
        idx_content = idx_content.replace('/courses/v&p/', '/courses/vp/')
        idx_content = idx_content.replace('L3_Lec', 'VP_Lec')
        idx_content = idx_content.replace('L3_Summary_References', 'VP_Summary_References')
        with open(idx_path, 'w', encoding='utf-8') as f:
            f.write(idx_content)
        print('  ✓ Updated courses/vp/index.md internal links')

    # 3. Rename raw_transcripts/l3 -> raw_transcripts/vp
    raw_l3 = os.path.join(ROOT_DIR, 'raw_transcripts', 'l3')
    raw_vp = os.path.join(ROOT_DIR, 'raw_transcripts', 'vp')
    if os.path.exists(raw_l3):
        if os.path.exists(raw_vp):
            shutil.rmtree(raw_vp)
        os.rename(raw_l3, raw_vp)
        print('  ✓ Renamed raw_transcripts/l3 -> raw_transcripts/vp')
        
    # Rename transcripts in raw_transcripts/vp: L3_Lec -> VP_Lec
    for f in glob.glob(os.path.join(raw_vp, 'L3_*.txt')):
        new_name = os.path.join(raw_vp, os.path.basename(f).replace('L3_', 'VP_'))
        os.rename(f, new_name)
        print(f'  ✓ Renamed {os.path.basename(f)} -> {os.path.basename(new_name)}')

    # 4. Rename transcripts/l3 -> transcripts/vp
    ts_l3 = os.path.join(ROOT_DIR, 'transcripts', 'l3')
    ts_vp = os.path.join(ROOT_DIR, 'transcripts', 'vp')
    if os.path.exists(ts_l3):
        if os.path.exists(ts_vp):
            shutil.rmtree(ts_vp)
        os.rename(ts_l3, ts_vp)
        print('  ✓ Renamed transcripts/l3 -> transcripts/vp')
    for f in glob.glob(os.path.join(ts_vp, 'L3_*.md')):
        new_name = os.path.join(ts_vp, os.path.basename(f).replace('L3_', 'VP_'))
        os.rename(f, new_name)
        print(f'  ✓ Renamed {os.path.basename(f)} -> {os.path.basename(new_name)}')

    # 5. Rename public/data/transcripts/l3 -> public/data/transcripts/vp
    pub_l3 = os.path.join(ROOT_DIR, 'public', 'data', 'transcripts', 'l3')
    pub_vp = os.path.join(ROOT_DIR, 'public', 'data', 'transcripts', 'vp')
    if os.path.exists(pub_l3):
        if os.path.exists(pub_vp):
            shutil.rmtree(pub_vp)
        os.rename(pub_l3, pub_vp)
        print('  ✓ Renamed public/data/transcripts/l3 -> public/data/transcripts/vp')
    for f in glob.glob(os.path.join(pub_vp, 'L3_*.json')):
        new_name = os.path.join(pub_vp, os.path.basename(f).replace('L3_', 'VP_'))
        os.rename(f, new_name)
        print(f'  ✓ Renamed {os.path.basename(f)} -> {os.path.basename(new_name)}')

def clean_old_subfolders():
    print('\nCleaning old subfolders in courses/bf and courses/cc...')
    for c in ['bf', 'cc']:
        c_dir = os.path.join(COURSES_DIR, c)
        for folder in ['02_Reports_Auto', '03_Summary_References', '04_SubCourse_Summary', '05_Review']:
            p = os.path.join(c_dir, folder)
            if os.path.exists(p):
                shutil.rmtree(p)
                print(f'  ✓ Removed {p}')

if __name__ == '__main__':
    process_bf()
    process_cc()
    process_vp()
    clean_old_subfolders()
    print('\nAll courses standardized successfully!')
