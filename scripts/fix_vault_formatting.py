import os
import re
import glob

def clean_math_expression(inner):
    """
    Decide whether an inner LaTeX math expression should be:
    1. Cleaned into plain text / unicode (e.g. ranges, comparisons, arrows, symbols)
    2. Converted to proper MathJax $...$ formula
    """
    s = inner.strip()
    
    # Extract any markdown links or timestamps embedded inside the math
    trailing_link = ""
    link_m = re.search(r'(\\quad\s*)?(\[\[.*?\]\]|\(.*?\))', s)
    if link_m:
        trailing_link = " " + link_m.group(2).strip()
        s = s[:link_m.start()].strip()

    # 1. Arrows
    if s in [r'\rightarrow', r'\to', r'\longrightarrow']:
        return '→' + trailing_link
    if s in [r'\leftarrow', r'\gets']:
        return '←' + trailing_link
    if s in [r'\leftrightarrow']:
        return '↔' + trailing_link
    if s == r'\div':
        return '÷' + trailing_link
    if s == r'\times':
        return '×' + trailing_link
    if s in [r'\ge', r'\geq']:
        return '≥' + trailing_link
    if s in [r'\le', r'\leq']:
        return '≤' + trailing_link
    if s in ['>', '<', '=']:
        return s + trailing_link

    # 2. Simple variables and terms: \(PAT\), \(EPS\), \(ROE\), \(r\), \(X_1 \to Y_2\)
    if s in ['PAT', 'EPS', 'CFO', 'CFI', 'CFF', 'PBT', 'PV', 'MAT', 'ROE', 'ROA', 'r', 'n', 'g']:
        return s + trailing_link
    if s in [r'X_1 \to Y_2', r'X_1 \rightarrow Y_2']:
        return 'X₁ → Y₂' + trailing_link
    if s in ['X_1', 'X1']:
        return 'X₁' + trailing_link
    if s in ['Y_2', 'Y2']:
        return 'Y₂' + trailing_link
    if s in [r'\text{EV/EBITDA}', 'EV/EBITDA']:
        return 'EV/EBITDA' + trailing_link
    if s in [r'\text{ROCE } \& \text{ ROE}', 'ROCE & ROE']:
        return 'ROCE & ROE' + trailing_link
    if s in [r'\% \ge \text{P/E}', r'% \ge P/E', r'\% \ge P/E']:
        return '% ≥ P/E' + trailing_link

    # 3. Pure signed numbers or percentages: +100.0\%, -50\%, 10\%, 10--12\%
    if re.match(r'^[+-]?\d+(?:\.\d+)?(?:\\%|%)(?:\s*(?:[–—\-]+|to)\s*[+-]?\d+(?:\.\d+)?(?:\\%|%))?$', s):
        res = s.replace(r'\%', '%').replace('--', '–')
        return res + trailing_link

    # 4. Multipliers: 10\times, 14\text{x}–14.5\text{x}, 100\text{x}–300\text{x}, 2.5\text{x}
    m_mult = re.match(r'^(?:([<>]=?|\\ge|\\le)\s*)?(\d+(?:\.\d+)?)(?:\\text\{x\}|\s*x|\\times)(?:\s*[–—\-]+\s*(\d+(?:\.\d+)?)(?:\\text\{x\}|\s*x|\\times))?$', s)
    if m_mult:
        sym = m_mult.group(1) or ''
        if sym in [r'\ge', r'\geq']: sym = '≥ '
        elif sym in [r'\le', r'\leq']: sym = '≤ '
        elif sym: sym = sym + ' '
        v1 = m_mult.group(2)
        v2 = m_mult.group(3)
        res = f"{sym}{v1}x–{v2}x" if v2 else f"{sym}{v1}x"
        return res + trailing_link

    # 5. Simple inequalities and comparison thresholds:
    # e.g. <20\%–25\%, >50\%, \ge 4\%, \le 10\%, >100\text{k}, >50
    m_ineq = re.match(r'^(?:([<>]=?|\\ge|\\le)\s*)([+-]?\d+(?:\.\d+)?(?:\\%|%|\w+)?(?:\s*[–—\-]+\s*[+-]?\d+(?:\.\d+)?(?:\\%|%|\w+)?)?)$', s)
    if m_ineq:
        sym = m_ineq.group(1)
        if sym in [r'\ge', r'\geq']: sym = '≥ '
        elif sym in [r'\le', r'\leq']: sym = '≤ '
        else: sym = sym + ' '
        val = m_ineq.group(2).replace(r'\%', '%').replace('--', '–')
        val = re.sub(r'\\text\{(\w+)\}', r'\1', val)
        return f"{sym}{val}" + trailing_link

    # 6. Specific financial ratios with simple inequality comparisons ONLY (NOT equations):
    # \text{P/B} < 1.0\text{x}–1.3\text{x}, \text{ROA} > 1.0\%–1.15\%, \text{ROE} > 14\%–15\%, \text{EV/EBITDA} > 6\text{x}, \text{PEG} \le 1.5\text{x}
    m_ratio = re.match(r'^(?:\\text\{)?([A-Za-z0-9_/]+)(?:\})?\s*([<>]|\\ge|\\le|\\leq|\\geq)\s*(?:(?:\\text\{)?([0-9.]+(?:x|\\text\{x\}|%|\\%|)(?:\s*[–—\-]+\s*[0-9.]+(?:x|\\text\{x\}|%|\\%|))?)(?:\})?)$', s)
    if m_ratio:
        ratio_name = m_ratio.group(1)
        sym = m_ratio.group(2).replace(r'\ge', '≥').replace(r'\le', '≤').replace(r'\geq', '≥').replace(r'\leq', '≤')
        val = m_ratio.group(3).replace(r'\%', '%').replace('--', '–')
        val = re.sub(r'\\text\{(\w+)\}', r'\1', val)
        val = val.replace(r'\times', 'x')
        return f"{ratio_name} {sym} {val}" + trailing_link

    # 7. Otherwise, it is a genuine mathematical formula!
    math_content = s
    # Ensure ₹ is properly wrapped in \text{₹} so MathJax does not crash
    math_content = re.sub(r'(?<!\\text\{)₹', r'\\text{₹}', math_content)
    # Clean up double escaped backslashes e.g. \\text -> \text
    math_content = re.sub(r'\\\\([a-zA-Z]+)', r'\\\1', math_content)
    # Clean escaped operators
    math_content = math_content.replace(r'\=', '=').replace(r'\+', '+').replace(r'\-', '-')
    
    return f"${math_content}${trailing_link}"


def clean_block_math(content):
    """
    Unescapes block math equations:
    - \\[ ... \\] or \\\\[ ... \\\\] where interior is a real equation -> $$ ... $$
    - \\$\\$ ... \\$\\$ -> $$ ... $$
    """
    # 1. Unescape \$\$ ... \$\$
    content = re.sub(r'\\\$[ \t]*\\\$([^\$]+?)\\\$[ \t]*\\\$', r'$$\n\1\n$$', content)
    
    # 2. Convert \\[ ... \\] or \\\\[ ... \\\\] with actual math to $$ ... $$
    def block_replacer(match):
        inner = match.group(1).strip()
        # If it's just a timestamp or short text like [00:01:23] or [? verify], keep as bracket
        if re.match(r'^\d{1,2}:\d{2}(?::\d{2})?', inner) or inner.startswith('?') or inner.startswith('TVGP') or inner.startswith('Slide'):
            return f"[{inner}]"
        if any(k in inner for k in [r'\frac', r'\text', r'\times', r'\div', '=', r'\sum', r'\sqrt', '+', '-']):
            inner = re.sub(r'(?<!\\text\{)₹', r'\\text{₹}', inner)
            inner = re.sub(r'\\\\([a-zA-Z]+)', r'\\\1', inner)
            inner = inner.replace(r'\=', '=').replace(r'\+', '+').replace(r'\-', '-')
            return f"\n$$\n{inner}\n$$\n"
        return f"[{inner}]"
    
    content = re.sub(r'\\{1,2}\[(.*?)\\{1,2}\]', block_replacer, content)
    
    return content


def clean_escaped_dollars(content):
    """
    Cleans up inline escaped math: \$...$
    """
    # 1. Simple arrows
    content = re.sub(r'\\\$(\\{1,2}(?:rightarrow|to))\\\$', '→', content)
    # 2. Simple terms like \$\text{D/E}\$
    content = re.sub(r'\\\$(\\{1,2}text\{D/E\}|D/E)\\\$', 'D/E', content)
    
    # 3. Escaped math blocks \$...$
    def unescape_math(m):
        inner = m.group(1).strip()
        if inner in ['rightarrow', r'\rightarrow', 'to', r'\to']:
            return '→'
        if inner in [r'\text{D/E}', 'D/E']:
            return 'D/E'
        # clean internal escapes
        inner = inner.replace(r'\=', '=').replace(r'\+', '+').replace(r'\-', '-')
        inner = re.sub(r'\\\\([a-zA-Z]+)', r'\\\1', inner)
        inner = re.sub(r'(?<!\\text\{)₹', r'\\text{₹}', inner)
        return f"${inner}$"
    
    content = re.sub(r'\\\$([^\$]+?)\\\$', unescape_math, content)
    return content


def process_file_math(content):
    """
    Process both inline and block math
    """
    # 1. Clean block math first
    content = clean_block_math(content)
    
    # 2. Clean escaped dollars
    content = clean_escaped_dollars(content)
    
    # 3. Clean inline math \( ... \) and \\( ... \\)
    pattern = re.compile(r'\\{1,2}\((.*?)\\{1,2}\)', re.DOTALL)
    content = pattern.sub(lambda m: clean_math_expression(m.group(1)), content)
    
    # 4. Clean up any escaped ampersands that look like entities e.g. P\&L; -> P&L;
    content = re.sub(r'P\\&L;', 'P&L;', content)
    content = re.sub(r'Q\\&A;', 'Q&A;', content)
    
    # 5. Clean up any accidental stranded LaTeX commands outside $...$ in prose
    def clean_stranded_text(line):
        if '$' in line or line.strip().startswith('```'):
            return line
        line = re.sub(r'\\text\{([^}]+)\}', r'\1', line)
        line = line.replace(r'\div', '÷').replace(r'\times', '×').replace(r'\ge', '≥').replace(r'\le', '≤')
        return line
        
    lines = [clean_stranded_text(l) for l in content.splitlines()]
    content = '\n'.join(lines)
    
    return content


def convert_lecture_index_to_cards(content, subcourse):
    """
    Converts 6-column markdown table in '2. LECTURE INDEX' into responsive card grid
    """
    pattern = re.compile(r'(###?\s*2\\?\.\s*LECTURE INDEX.*?\n)(?:\|.*?\|[\r\n]+)+', re.DOTALL)
    m = pattern.search(content)
    if not m:
        return content
    
    header = re.sub(r'\\([.!])', r'\1', m.group(1).strip())
    table_text = m.group(0)[len(m.group(1)):].strip()
    lines = [l.strip() for l in table_text.splitlines() if l.strip().startswith('|')]
    if len(lines) < 3:
        return content
    
    cards = []
    for line in lines[2:]:  # skip header and delimiter row
        cols = [c.strip() for c in line.strip('|').split('|')]
        if len(cols) >= 5:
            lec_id = re.sub(r'[*_`]', '', cols[0]).strip()
            title = re.sub(r'[*_`]', '', cols[1]).strip().replace(r'\!', '!').replace(r'\(', '(').replace(r'\)', ')')
            duration = cols[2].strip()
            focus = cols[3].strip().replace(r'\!', '!').replace(r'\(', '(').replace(r'\)', ')')
            pillars_raw = cols[4].strip()
            pillars = [p.strip() for p in re.split(r'[,/]', pillars_raw) if p.strip()]
            report_raw = cols[5].strip() if len(cols) > 5 else ''
            
            # Extract lecture number
            num_m = re.search(r'(\d+)', lec_id) or re.search(r'(\d+)', report_raw)
            lec_num = num_m.group(1).zfill(2) if num_m else '01'
            report_link = f'./{subcourse.upper()}_Lec{lec_num}_Report'
            transcript_link = f'/transcripts/{subcourse.lower()}/{subcourse.upper()}_Lec{lec_num}'
            
            # Clean math and text inside title and focus
            title = clean_math_expression_in_text(title)
            focus = clean_math_expression_in_text(focus)
            
            cards.append({
                'id': lec_id,
                'title': title,
                'duration': duration,
                'focus': focus,
                'pillars': pillars,
                'report_link': report_link,
                'transcript_link': transcript_link
            })
    
    html = f"{header}\n\n<div class=\"lecture-grid\">\n"
    for c in cards:
        html += '  <div class="lecture-card">\n'
        html += '    <div class="lecture-header">\n'
        html += f'      <span class="lecture-id">{c["id"]}</span>\n'
        if c['duration']:
            html += f'      <span class="lecture-duration">⏱️ {c["duration"]}</span>\n'
        for p in c['pillars']:
            html += f'      <span class="lecture-pillar">{p}</span>\n'
        html += '    </div>\n'
        html += f'    <h4 class="lecture-title"><a href="{c["report_link"]}">{c["title"]}</a></h4>\n'
        html += f'    <p class="lecture-focus">{c["focus"]}</p>\n'
        html += '    <div class="lecture-links">\n'
        html += f'      <a class="lecture-btn primary" href="{c["report_link"]}">📖 Read Report →</a>\n'
        html += f'      <a class="lecture-btn secondary" href="{c["transcript_link"]}">🎙️ Transcript</a>\n'
        html += '    </div>\n'
        html += '  </div>\n'
    html += '</div>\n\n'
    
    return content[:m.start()] + html + content[m.end():]


def clean_math_expression_in_text(text):
    return re.sub(r'\\{1,2}\((.*?)\\{1,2}\)', lambda m: clean_math_expression(m.group(1)), text)


def main():
    print("🚀 Starting SOIC Vault Formatting & Math Overhaul...")
    
    # 1. Process all summary files for Lecture Index card conversion
    subcourses = {
        'chk': 'courses/chk/CHK_Subcourse_Summary.md',
        'cc': 'courses/cc/CC_SubCourse_Summary.md',
        'fa': 'courses/fa/FA_SubCourse_Summary.md',
        'vp': 'courses/vp/VP_Subcourse_Summary.md',
        'bf': 'courses/bf/BF_SubCourse_Summary.md'
    }
    
    for sub, path in subcourses.items():
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            converted = convert_lecture_index_to_cards(content, sub)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(converted)
            print(f"  ✓ Transformed Lecture Index to Cards: {path}")

    # 2. Process all markdown files for math and text formatting
    all_files = glob.glob('courses/**/*.md', recursive=True) + glob.glob('transcripts/**/*.md', recursive=True) + glob.glob('*.md')
    modified_count = 0
    
    for file_path in all_files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = process_file_math(content)
        
        # Also clean up any lingering '```Foundation'
        if '```Foundation' in new_content:
            new_content = new_content.replace('```Foundation', '```text')
            
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            modified_count += 1
            
    print(f"  ✓ Cleaned math & LaTeX syntax across {modified_count} markdown files.")

if __name__ == '__main__':
    main()
