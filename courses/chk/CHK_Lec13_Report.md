### 1. LECTURE HEADER

<!-- SOIC_AUDIO_BANNER_START -->
::: tip 🎧 Interactive Audio Transcript & Reader
Listen to this lecture in audio mode with synchronized text highlighting, keyword search & citations:  
👉 **[Open Interactive Transcript & Audio Player (1:10:48) →](/transcripts/chk/CHK_Lec13)**
:::
<!-- SOIC_AUDIO_BANNER_END -->

* **Lecture ID**: SOIC-Lec13
* **Title**: Financial Modelling & Forward Valuations: Building P&L Models, Bull/Base/Bear Scenarios, and AI-Driven Financial Analysis
* **Duration**: [[00:00:06–01:10:48](/transcripts/chk/CHK_Lec13?t=6)]
* **PPT used**: No (only transcript available in selected sources)
* **Prerequisites referenced**: Masterclass in using AI / AI Section below L6 [[00:56:01–00:57:52](/transcripts/chk/CHK_Lec13?t=3361)], earlier valuation session on Sequent Scientific and VR Logistics [[00:51:50](/transcripts/chk/CHK_Lec13?t=3110)], and previous class on Return on Assets (ROA) tree [[00:59:46](/transcripts/chk/CHK_Lec13?t=3586)].

---

### 2. KEY LEARNINGS

* **Income Statement Anatomy & Forward Projection Formula**: The income statement follows the structural sequence: Revenue (Sales) − Cost of Goods Sold (COGS/Raw Materials) = Gross Profit; Gross Profit − SG&A (wages, electricity, rent) = EBITDA; EBITDA − Depreciation & Amortization = EBIT; EBIT + Other Income − Interest (Finance Costs) = PBT; PBT − Taxes (e.g., standard 25% corporate tax rate) = PAT [[00:00:06–00:05:02](/transcripts/chk/CHK_Lec13?t=6)]. Rule of thumb: "Roughly right in finance is more important than being 100% right" [[00:05:45](/transcripts/chk/CHK_Lec13?t=345)].
* **EBITDA Margin Discrepancy Adjustment**: In SJS Enterprises Q3 FY26, reported EBITDA margin was 29.3% vs. management's claimed 30.5% due to a one-off gratuity provision mandated by new government labor codes; non-recurring regulatory provisions must be stripped out to evaluate sustainable core EBITDA margins [[00:07:05–00:08:50](/transcripts/chk/CHK_Lec13?t=425)].
* **Outperformance Multiplier for Niche Growth Leaders**: When forecasting top-line growth for auto decal/sticker manufacturer SJS Enterprises (benefiting from vehicle premiumisation), apply a 2.5x to 3x multiplier on underlying auto industry growth (8–9%) to derive a conservative 20% sales growth assumption (8% × 2.5x) [[00:10:12–00:10:44](/transcripts/chk/CHK_Lec13?t=612), [00:28:31–00:29:08](/transcripts/chk/CHK_Lec13?t=1711)].
* **Depreciation & Other Income Modeling Heuristics**: Model depreciation as a stable percentage of sales (e.g., SJS historical baseline of 5.3%–5.92% of sales, assuming regular capex of ₹80–100 crore) rather than tracking complex fixed asset schedules; project Other Income by applying a 7% yield on accumulated net cash balance (e.g., ₹320–360 crore cash pile generating ~₹22.4–25.2 crore other income) [[00:14:47–00:15:59](/transcripts/chk/CHK_Lec13?t=887), [00:33:28–00:35:36](/transcripts/chk/CHK_Lec13?t=2008)].
* **Forward P/E & PEG Valuation Mechanics**: Calculate Year-2 forward P/E by dividing current Market Cap (₹5,192–5,262 crore) by Year-2 projected PAT (₹249 crore) = 20.88x; calculate 2-year forward PEG ratio by dividing current P/E (33x) by 2-year PAT CAGR (20.8%) = 1.58x [[00:41:21–00:43:45](/transcripts/chk/CHK_Lec13?t=2481)].
* **3-Scenario Matrix Framework (Stock Scans Calculator)**: Evaluate stock return odds across three scenarios using varying PAT growth rates and exit P/E multiples (e.g., SJS 2-year forward: Bull case 25% PAT growth @ 40x P/E = 36% CAGR return; Base case 18% PAT growth @ 30x P/E = 11.52% CAGR; Bear case 15% PAT growth @ 25x P/E = 0.79% CAGR) [[00:44:59–00:45:21](/transcripts/chk/CHK_Lec13?t=2699)].
* **AI-Prompted Financial Model Generation Workflow**: Generate interconnected, formula-linked Excel models by supplying Claude LLM with two structured inputs: (1) screenshot/PDF of the latest annual/quarterly financial results, and (2) PDF transcript of the latest earnings con call, using a custom prompt with blue editable assumption cells [[00:52:37–00:55:27](/transcripts/chk/CHK_Lec13?t=3157), [00:57:52–00:59:14](/transcripts/chk/CHK_Lec13?t=3472)].
* **Banking & NBFC ROA Tree Modeling Framework**: For financial institutions (e.g., CreditAccess Grameen), construct financial models using a specialized Return on Assets (ROA) tree prompt in Claude, feeding consolidated financial result PDFs and quarterly con call transcripts to project asset yield, NIMs, credit costs, and book value multiples [[00:59:46–01:02:37](/transcripts/chk/CHK_Lec13?t=3586)].
* **Bear Market Psychological & Allocation Discipline**: Real wealth in stock markets is built during bear market panics; maintain high emotional quotient (EQ) and discipline by studying behavioral finance principles (Speaker's view: read James Montier's 150-page "The Little Book of Behavioral Finance") [[01:10:13–01:10:48](/transcripts/chk/CHK_Lec13?t=4213)].

---

### 3. LECTURE MAP

| Stage # | Stage Title | Timestamp Range | Slides | Core Concepts | Examples/Companies Used | TVGP Tag |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Anatomy of an Income Statement & Forward P&L Fundamentals** | [[00:00:06–00:05:45](/transcripts/chk/CHK_Lec13?t=6)] | [N/A - No PPT selected] | Sales/top-line, COGS, Gross Profit, SG&A, EBITDA & EBITDA margin, Depreciation (straight-line), EBIT, Finance cost/Interest, PBT, Taxes (25%), PAT; Forward P&L modeling logic; Rule of thumb: "Roughly right in finance is more important than being 100% right." | Samosa shop analogy (Sales ₹5, COGS ₹2, SG&A ₹1, EBITDA ₹2, 40% margin, ₹10 chair depreciated over 10 yrs) | [TVGP: Valuation] |
| **2** | **SJS Enterprises Case Study – Earnings Reading & Margin Discrepancy** | [[00:05:45–00:12:37](/transcripts/chk/CHK_Lec13?t=345)] | [N/A - No PPT selected] | Con call analysis, automotive decals/stickers business, premiumisation trend, 3x industry outperformance, labor code gratuity provision discrepancy (29.3% reported vs 30.5% adjusted), sustainable margin guidance (28–29%), capex guidance (₹100 Cr / ₹40 Cr). | SJS Enterprises, Mahindra, Hero, Whirlpool, Samsung, Hyundai, Spark Minda, John Deere, Rappee, Urban Company | [TVGP: Growth] |
| **3** | **Deconstructing Brokerage Models & Establishing Baseline Assumptions** | [[00:12:37–00:18:18](/transcripts/chk/CHK_Lec13?t=757)] | [N/A - No PPT selected] | Historical P&L growth analysis (17% minimum growth during auto downcycles), Monarch Network Capital broker report assumptions, depreciation as % of sales (5.3%–5.92%), debt-free interest expense (₹4 Cr), cash balance (₹220–230 Cr) generating other income, target market cap and forward P/E. | SJS Enterprises, Monarch Network Capital | [TVGP: Valuation] |
| **4** | **Step-by-Step Manual Spreadsheet Modeling for SJS Enterprises (FY25–FY26)** | [[00:18:18–00:28:31](/transcripts/chk/CHK_Lec13?t=1098)] | [N/A - No PPT selected] | Estimating Q4 FY26 sales (₹270 Cr, +10% over Q3 base), Q4 EBITDA (₹78 Cr at 29% margin), PBT & PAT calculations; Full year FY26 revenue (₹966 Cr), EBITDA (₹280 Cr), PAT (₹173–176 Cr); 25% tax rate application. | SJS Enterprises | [TVGP: Valuation] |
| **5** | **Multi-Year Forward Growth Projection & Cash Flow Dynamics (FY27–FY28)** | [[00:28:31–00:41:21](/transcripts/chk/CHK_Lec13?t=1711)] | [N/A - No PPT selected] | Industry growth (8%) × 2.5x multiplier = 20% sales growth for FY27 (₹1,160 Cr sales) and 15% for FY28 (₹1,333 Cr sales); Cash flow conversion (80% EBITDA to CFO), FCFF calculation (CFO minus ₹100 Cr capex), cash pile accumulation (₹320–360 Cr) yielding 7% Other Income (₹22.4–25.2 Cr); FY28 PAT projection (₹249–255 Cr). | SJS Enterprises, TVS Motors, Maruti, Hyundai | [TVGP: Valuation] |
| **6** | **Valuation Metrics – Forward P/E, PAT CAGR & 2-Year PEG Ratio Calculation** | [[00:41:21–00:44:59](/transcripts/chk/CHK_Lec13?t=2481)] | [N/A - No PPT selected] | Market Cap (₹5,192–5,262 Cr), FY28 Forward P/E = 20.88x; PAT CAGR calculation = 20.74% (from ₹176 Cr to ₹249 Cr over 2 years); 2-year Forward PEG ratio = Current P/E (33x) / 20.8% PAT growth = 1.58x. | SJS Enterprises | [TVGP: Valuation] |
| **7** | **Bull, Base, and Bear Scenario Analysis Framework (Stock Scans Calculator)** | [[00:44:59–00:48:40](/transcripts/chk/CHK_Lec13?t=2699)] | [N/A - No PPT selected] | 3-scenario payoff matrix (Bull: 25% PAT growth @ 40x P/E = 36% CAGR; Base: 18% growth @ 30x P/E = 11.52% CAGR; Bear: 15% growth @ 25x P/E = 0.79% CAGR); Evaluating risk-reward odds; Quick estimation vs detailed manual spreadsheets. | SJS Enterprises, Interarch Building Products | [TVGP: Valuation] |
| **8** | **Student Homework Assignment & Guidance Hints** | [[00:48:40–00:52:37](/transcripts/chk/CHK_Lec13?t=2920)] | [N/A - No PPT selected] | Valuation homework rules; Manorama Industries (guided ₹1,300 Cr sales + 30% growth in FY27, 27% EBITDA margin); Gravita India (capacity expansion from 333k to 733k tons, >25% volume growth, 11% EBITDA margin, P/E multiples 20x/25x/35x); Utilizing credit rating reports when management guidance is absent. | Manorama Industries, Gravita India, Sequent Scientific, VR Logistics | [TVGP: Growth] |
| **9** | **Automated AI Financial Modeling via Claude Custom Prompts** | [[00:52:37–00:59:46](/transcripts/chk/CHK_Lec13?t=3157)] | [N/A - No PPT selected] | Speaker Naman introduces custom Claude prompt for financial modeling; Inputting financial results PDF/screenshot and con call transcript; Formula-linked Excel sheet generation; Editable parameters in blue cells; Comparison of Claude vs ChatGPT/Gemini for financial output accuracy. | Interarch Building Products | [TVGP: Valuation] |
| **10** | **AI Modeling for Banking & Financial Institutions (ROA Tree Framework)** | [[00:59:46–01:03:33](/transcripts/chk/CHK_Lec13?t=3586)] | [N/A - No PPT selected] | Banking/NBFC valuation prompt utilizing Return on Assets (ROA) tree framework; Feeding consolidated financial results PDF and quarterly con call transcript; Outputting balance sheet assumptions, NIMs, credit costs, and book value multiples. | CreditAccess Grameen | [TVGP: Valuation] |
| **11** | **Upcoming Course Plan, DCF/Reverse DCF Preview & Concluding Guidance** | [[01:03:33–01:10:48](/transcripts/chk/CHK_Lec13?t=3813)] | [N/A - No PPT selected] | Reverse DCF tool on Stock Scans (implied growth rate for 12% target return); Upcoming live sector sessions (Commercial Vehicles, Gold Lenders, Aerospace); In-person SOIC meetups (Mumbai, Delhi, Bangalore); Bear market psychology and emotional control (James Montier's book recommendation); Budget incentive impact on digital payment companies. | Sansehra Engineering, TD Power, Intellect Design, CSB Bank, Payment/PIDF Scheme beneficiaries | [TVGP: Valuation] |

---

### 4. CONCEPT FLOW

```text
Stage 1: Income Statement Anatomy & Mechanics [[00:00:06–00:05:45](/transcripts/chk/CHK_Lec13?t=6)]
   │
   ▼
Stage 2: Qualitative Guidance & Con Call Extraction (SJS Case Study) [[00:05:45–00:12:37](/transcripts/chk/CHK_Lec13?t=345)]
   │
   ├─────────────────────────────────────────────────────────────────────────┐
   ▼                                                                         ▼
Stage 3: Baseline Assumptions & Broker Deconstruction [[00:12:37–00:18:18](/transcripts/chk/CHK_Lec13?t=757)]   Stage 8: Homework Framework & Application (Manorama/Gravita) [[00:48:40–00:52:37](/transcripts/chk/CHK_Lec13?t=2920)]
   │
   ▼
Stage 4: Step-by-Step Quarterly & Annual P&L Projection [[00:18:18–00:28:31](/transcripts/chk/CHK_Lec13?t=1098)]
   │
   ▼
Stage 5: Multi-Year Sales Growth & Cash Flow Modeling [[00:28:31–00:41:21](/transcripts/chk/CHK_Lec13?t=1711)]
   │
   ▼
Stage 6: Forward P/E, PAT CAGR & PEG Valuation Metrics [[00:41:21–00:44:59](/transcripts/chk/CHK_Lec13?t=2481)]
   │
   ├─────────────────────────────────────────────────────────────────────────┐
   ▼                                                                         ▼
Stage 7: Bull/Base/Bear Scenario Matrix (Stock Scans) [[00:44:59–00:48:40](/transcripts/chk/CHK_Lec13?t=2699)]   Stage 9: Automated AI Financial Modeling (Claude Prompts) [[00:52:37–00:59:46](/transcripts/chk/CHK_Lec13?t=3157)]
                                                                             │
                                                                             ▼
                                                                            Stage 10: Specialized Banking ROA Tree Modeling [[00:59:46–01:03:33](/transcripts/chk/CHK_Lec13?t=3586)]
                                                                             │
                                                                             ▼
                                                                            Stage 11: Advanced Valuation (Reverse DCF) & Bear Market EQ [[01:03:33–01:10:48](/transcripts/chk/CHK_Lec13?t=3813)]
```

---

### 5. GENERATION PLAN

* **Batch 1 = Stages 1–4 [[00:00:06–00:28:31](/transcripts/chk/CHK_Lec13?t=6)]**: Fundamentals of Income Statement anatomy, con call transcript reading and margin adjustments, brokerage model deconstruction, and step-by-step quarterly/annual P&L spreadsheet creation for SJS Enterprises.
* **Batch 2 = Stages 5–7 [[00:28:31–00:48:40](/transcripts/chk/CHK_Lec13?t=1711)]**: Multi-year forward growth projections (FY27–FY28), cash flow to firm (FCFF) modeling, forward P/E and PEG ratio valuation calculations, and the Bull/Base/Bear scenario matrix on Stock Scans.
* **Batch 3 = Stages 8–11 [[00:48:40–01:10:48](/transcripts/chk/CHK_Lec13?t=2920)]**: Student homework assignments (Gravita and Manorama), automated AI financial modeling using custom Claude prompts, specialized banking/NBFC ROA tree models, Reverse DCF introduction, and bear market behavioral discipline.

---

### STAGE 1: Anatomy of an Income Statement & Forward P&L Fundamentals [[00:00:06–00:05:45](/transcripts/chk/CHK_Lec13?t=6)] [TVGP: Valuation]

#### a) What this stage answers
How is a company's income statement structured line-by-line, and how can an investor project forward earnings (PBT/PAT) from top-line sales guidance and cost assumptions?

#### b) Detailed explanation
The income statement represents the core engine of financial modeling. Building forward earnings projections requires breaking down corporate financial statements into their sequential line items, starting from top-line sales revenue down to bottom-line net profit [[00:00:06–00:05:02](/transcripts/chk/CHK_Lec13?t=6)].

##### Line-by-Line Waterfall
1. **Sales / Top Line**: Top-line revenue represents total sales generated by the business [[00:00:06](/transcripts/chk/CHK_Lec13?t=6)].
2. **Cost of Goods Sold (COGS / Raw Material Cost)**: Subtracting raw material expenditures from sales yields **Gross Profit** [[00:00:39](/transcripts/chk/CHK_Lec13?t=39)].
3. **Selling, General & Administrative (SG&A) Expenses**: Subtracting SG&A costs—which include employee salaries, wages, electricity bills, rent, and operational overheads—from Gross Profit yields **EBITDA** (Earnings Before Interest, Taxes, Depreciation, and Amortization) [[00:01:12–00:02:41](/transcripts/chk/CHK_Lec13?t=72)].
4. **Depreciation & Amortization (D&A)**: Depreciation is a non-cash expense representing the straight-line allocation of a fixed asset's capital outlay over its useful economic lifespan [[00:03:15](/transcripts/chk/CHK_Lec13?t=195)]. Subtracting depreciation from EBITDA yields **EBIT** (Earnings Before Interest and Taxes) [[00:03:15](/transcripts/chk/CHK_Lec13?t=195)].
5. **Other Income & Interest Expense**: Other Income represents non-core cash earnings (e.g., interest earned on balance sheet cash or government incentives) and is added to operating earnings [[00:04:31](/transcripts/chk/CHK_Lec13?t=271)]. Finance costs/interest expenses incurred on debt are subtracted from EBIT to arrive at **Profit Before Tax (PBT)** [[00:03:51–00:05:02](/transcripts/chk/CHK_Lec13?t=231)].
6. **Taxes & Profit After Tax (PAT)**: Subtracting corporate taxes from PBT yields **PAT** (Profit After Tax or bottom line) [[00:03:51–00:05:02](/transcripts/chk/CHK_Lec13?t=231)].

##### Forward P&L Projection Logic
When a company provides forward sales guidance (e.g., 15–20% sales growth from a base of ₹100), along with guidance on EBITDA margins, planned capital expenditures (capex), and debt borrowings, an investor can systematically project every P&L line item forward to estimate net profits 2 years out [[00:01:12](/transcripts/chk/CHK_Lec13?t=72), [00:05:02](/transcripts/chk/CHK_Lec13?t=302)]. 

Speaker's view: "Roughly right in finance is more important than being 100% right" [roughly right on a finance is more important than be 100% right] because forward modeling relies on intelligent assumptions rather than exact accounting precision [[00:05:45](/transcripts/chk/CHK_Lec13?t=345)].

#### c) Examples & case studies
* **Example**: Samosa Shop Business Model [[00:00:39–00:02:41](/transcripts/chk/CHK_Lec13?t=39)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Demonstrating line-by-line income statement math and EBITDA margin calculation.
  * **Data/details**: Samosa selling price = ₹5; Raw material (maida [flour] + potatoes [aloo] + frying oil) = ₹2 per samosa; Gross profit = ₹3 (₹5 − ₹2); SG&A (employee salaries + electricity + rent) = ₹1 per samosa; EBITDA = ₹2 per samosa (₹3 − ₹1).
  * **Walkthrough**: Selling price forms top-line sales (₹5). Subtracting raw material cost (₹2) yields Gross Profit of ₹3. Subtracting SG&A expenses (₹1) leaves ₹2 EBITDA per samosa [2 rupees EBITDA bantai per samosa]. Dividing EBITDA (₹2) by Sales (₹5) yields an EBITDA margin of 40% (₹2 ÷ ₹5) [[00:02:41](/transcripts/chk/CHK_Lec13?t=161)].
  * **Takeaway**: Operating margins are easily calculated once top-line revenue and unit-level operational expenses are separated.
* **Example**: Straight-Line Office Chair Depreciation [[00:03:15](/transcripts/chk/CHK_Lec13?t=195)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Explaining the concept and necessity of non-cash depreciation.
  * **Data/details**: Office chair purchase cost = ₹10; Useful economic life = 10 years; Annual straight-line depreciation = ₹1 per year.
  * **Walkthrough**: An office chair costing ₹10 provides economic utility over 10 years. Expensing the full ₹10 in Year 1 would artificially cause reported profits to evaporate in the income statement. Straight-line depreciation expensing deducts ₹1 per year for 10 years matching asset utility [[00:03:15](/transcripts/chk/CHK_Lec13?t=195)].
  * **Takeaway**: Depreciation spreads capital costs over an asset's useful life without reflecting ongoing cash outflows in subsequent years.
* **Example**: Debt Interest Cost Deduction [[00:03:51](/transcripts/chk/CHK_Lec13?t=231)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Demonstrating how leverage/debt impacts pre-tax profitability.
  * **Data/details**: Debt taken = ₹100; Finance cost/interest is subtracted from EBIT to arrive at PBT.
  * **Walkthrough**: Interest on debt is deducted directly from EBIT to calculate PBT before tax rate application [[00:03:51](/transcripts/chk/CHK_Lec13?t=231)].
  * **Takeaway**: Debt interest obligations reduce taxable income and final net bottom-line profit.

#### d) Formulas, metrics & thresholds
| Metric / Formula | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| :--- | :--- | :--- | :--- | :--- |
| **Gross Profit** | Sales − COGS (Raw Material Costs) | Unit price − Unit material cost (e.g., ₹5 − ₹2 = ₹3) | Measures product-level markup before overheads | [[00:00:39–00:01:12](/transcripts/chk/CHK_Lec13?t=39)] |
| **EBITDA** | Gross Profit − SG&A Expenses | Operating profit before D&A, interest, and taxes | Measures core operating profitability | [[00:01:12–00:02:41](/transcripts/chk/CHK_Lec13?t=72)] |
| **EBITDA Margin (%)** | (EBITDA ÷ Sales) × 100 | Samosa benchmark = (₹2 ÷ ₹5) × 100 = 40% | Key efficiency metric for forward P&L modeling | [[00:02:41](/transcripts/chk/CHK_Lec13?t=161)] |
| **EBIT** | EBITDA − Depreciation & Amortization | Operating profit after fixed asset wear-and-tear | Operating earnings available to service debt and tax | [[00:03:15](/transcripts/chk/CHK_Lec13?t=195)] |
| **Profit Before Tax (PBT)** | EBIT + Other Income − Finance Costs (Interest) | Pre-tax corporate earnings base | Earnings base prior to tax deduction | [[00:03:51–00:05:02](/transcripts/chk/CHK_Lec13?t=231)] |
| **Profit After Tax (PAT)** | PBT − Taxes [or PBT × (1 − Tax Rate)] | Corporate tax rate ~25% standard baseline | Final bottom-line net income available to equity holders | [[00:03:51–00:05:02](/transcripts/chk/CHK_Lec13?t=231)] |

#### e) Visual aid
**Step-by-Step Process List: Income Statement Waterfall Structure**
1. **Top Line / Sales Revenue** [[00:00:06](/transcripts/chk/CHK_Lec13?t=6)]
2. *Minus* **Cost of Goods Sold (COGS / Raw Materials)** [[00:00:39](/transcripts/chk/CHK_Lec13?t=39)]
3. = **Gross Profit** [[00:00:39](/transcripts/chk/CHK_Lec13?t=39)]
4. *Minus* **Selling, General & Administrative (SG&A) Expenses** [[00:01:12](/transcripts/chk/CHK_Lec13?t=72)]
5. = **EBITDA (Operating Profit)** [[00:01:12](/transcripts/chk/CHK_Lec13?t=72)]
6. *Minus* **Depreciation & Amortization** [[00:03:15](/transcripts/chk/CHK_Lec13?t=195)]
7. = **EBIT** [[00:03:15](/transcripts/chk/CHK_Lec13?t=195)]
8. *Plus* **Other Income** *Minus* **Interest / Finance Costs** [[00:03:51](/transcripts/chk/CHK_Lec13?t=231), [00:04:31](/transcripts/chk/CHK_Lec13?t=271)]
9. = **Profit Before Tax (PBT)** [[00:03:51](/transcripts/chk/CHK_Lec13?t=231)]
10. *Minus* **Corporate Taxes** [[00:03:51](/transcripts/chk/CHK_Lec13?t=231)]
11. = **Profit After Tax (PAT / Bottom Line)** [[00:03:51](/transcripts/chk/CHK_Lec13?t=231)]

#### f) Speaker's cautions & common mistakes
* **Expensing Full Capex Outlay**: Expensing the entire purchase price of a long-term asset in Year 1 instead of depreciating it over its useful life, artificially distorting reported net profit [[00:03:15](/transcripts/chk/CHK_Lec13?t=195)].
* **False Precision Trap**: Trying to be 100% mathematically precise in financial modeling. Speaker's view: Being roughly right in financial modeling is superior to aiming for 100% exactness because forward projections are inherently estimation-based [[00:05:45](/transcripts/chk/CHK_Lec13?t=345)].

---

### STAGE 2: SJS Enterprises Case Study – Earnings Reading & Margin Discrepancy [[00:05:45–00:12:37](/transcripts/chk/CHK_Lec13?t=345)] [TVGP: Growth]

#### a) What this stage answers
How do investors extract realistic growth and margin guidance from quarterly conference call transcripts and reconcile reported financial discrepancies?

#### b) Detailed explanation
Extracting forward assumptions requires reading earnings conference call transcripts to identify key operational drivers, management guidance, and non-recurring accounting items [[00:05:45–00:12:37](/transcripts/chk/CHK_Lec13?t=345)].

##### Business Model & Premiumisation Trend
SJS Enterprises manufactures aesthetic chrome-plated logos, stickers, decals, and badges for automotive (2-wheelers and 4-wheelers) and consumer appliance OEMs [[00:10:12](/transcripts/chk/CHK_Lec13?t=612)]. The core business driver is vehicle premiumisation: next-generation vehicles carry higher value-added content per vehicle [[00:10:44–00:11:15](/transcripts/chk/CHK_Lec13?t=644)]. Consequently, even when underlying auto industry volume grows modestly at 2–3%, SJS grows significantly faster due to the increasing aesthetic "feel-good factor" and value addition per vehicle [[00:11:15](/transcripts/chk/CHK_Lec13?t=675)].

##### Industry Outperformance Multiplier
SJS has delivered 25 consecutive quarters of growth [[00:05:45](/transcripts/chk/CHK_Lec13?t=345)]. In Q3 FY26, SJS recorded 46% YoY revenue growth in its automotive segment—outperforming the auto industry's 15% growth rate by 3x [[00:07:05](/transcripts/chk/CHK_Lec13?t=425)]. Management guides that SJS consistently outperforms underlying auto industry growth by 2.5x to 3x [[00:09:23](/transcripts/chk/CHK_Lec13?t=563), [00:10:12](/transcripts/chk/CHK_Lec13?t=612)].

##### Reconciling Reported vs. Adjusted EBITDA Margins
In Q3 FY26 earnings calls, management cited an EBITDA margin of 30.5% and a PAT margin of 18.5% [[00:07:05](/transcripts/chk/CHK_Lec13?t=425)]. However, reported financial aggregators (e.g., Screener) listed reported EBITDA margin at 29.3% [[00:07:05](/transcripts/chk/CHK_Lec13?t=425)]. 

This discrepancy stems from a one-off, non-recurring provision for employee gratuity mandated by the Indian government's new Labor Code [[00:08:17](/transcripts/chk/CHK_Lec13?t=497)]. Stripping out this one-time statutory labor impact reveals an adjusted, sustainable EBITDA margin of 30.5% [[00:08:17](/transcripts/chk/CHK_Lec13?t=497)]. Management updated its sustainable EBITDA margin guidance to 28–29% (up from previous guidance of 26–27%) [[00:11:52–00:12:00](/transcripts/chk/CHK_Lec13?t=712)].

##### Balance Sheet & Capex Guidance
SJS maintains ₹220 crore in balance sheet cash [[00:12:00](/transcripts/chk/CHK_Lec13?t=720)]. Capex expenditure is planned at ₹100 crore in the current year and ₹40 crore next year [[00:11:15](/transcripts/chk/CHK_Lec13?t=675)]. Client additions include Rappee [?] (2-wheelers) and Urban Company (water purifiers), alongside expanding relationships with Mahindra, Hero, Whirlpool, Samsung, Hyundai, Spark Minda, Wave [?], and John Deere [[00:07:05](/transcripts/chk/CHK_Lec13?t=425)].

#### c) Examples & case studies
* **Example**: SJS Enterprises Q3 FY26 Earnings Conference Call [[00:05:45–00:12:37](/transcripts/chk/CHK_Lec13?t=345)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Live deconstruction of an earnings transcript to extract forward modeling inputs.
  * **Data/details**: 25 consecutive growth quarters; Q3 auto revenue growth = 46% (3x industry growth of 15%); Standalone revenue growth = 26%; Q3 reported EBITDA margin = 29.3%; Adjusted EBITDA margin = 30.5%; PAT margin = 18.5% (9-month FY26 PAT exceeded full-year FY25 PAT); Historical downside growth floor = 17% (achieved in FY23 auto downcycle); Capex guidance = ₹100 crore current year, ₹40 crore next year; Cash balance = ₹220 crore.
  * **Walkthrough**: The transcript is examined to extract five explicit inputs:
    1. Sales Outperformance: 2.5x to 3.0x industry growth [[00:09:23](/transcripts/chk/CHK_Lec13?t=563)].
    2. Sustainable Margin Guidance: 28%–29% EBITDA margin [[00:12:00](/transcripts/chk/CHK_Lec13?t=720)].
    3. Planned Capex Outlay: ₹100 crore [[00:11:15](/transcripts/chk/CHK_Lec13?t=675)].
    4. Balance Sheet Liquidity: ₹220 crore cash generating ~6–7% other income [[00:12:00](/transcripts/chk/CHK_Lec13?t=720)].
    5. Downside Floor: 17% revenue CAGR historically maintained even during auto downcycles [[00:10:44](/transcripts/chk/CHK_Lec13?t=644)].
  * **Takeaway**: Con call transcripts provide qualitative guidance needed to ground financial model parameters.

#### d) Formulas, metrics & thresholds
| Metric / Formula | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| :--- | :--- | :--- | :--- | :--- |
| **Industry Outperformance Multiplier** | SJS Revenue Growth ÷ Auto Industry Growth | 2.5x to 3.0x industry growth baseline | Quantifies premiumisation pricing power over industry cycles | [[00:07:05](/transcripts/chk/CHK_Lec13?t=425), [00:09:23](/transcripts/chk/CHK_Lec13?t=563)] |
| **Adjusted EBITDA Margin** | (Reported EBITDA + Non-recurring Labor Provision) ÷ Sales | 30.5% adjusted vs 29.3% reported | Isolates core sustainable operational profitability | [[00:08:17](/transcripts/chk/CHK_Lec13?t=497)] |
| **Sustainable EBITDA Guidance Band** | Forward margin guidance range from management | 28.0%–29.0% (upgraded from 26.0%–27.0%) | Establishes base EBITDA margin parameter for model | [[00:11:52–00:12:00](/transcripts/chk/CHK_Lec13?t=712)] |
| **Historical Downside Growth Floor** | Minimum revenue growth recorded in downcycle | 17.0% minimum growth (achieved in FY23) | Conservative downside revenue floor for modeling | [[00:10:44](/transcripts/chk/CHK_Lec13?t=644)] |

#### e) Visual aid
**Decision Checklist: Reconciling Reported vs. Management Earnings Guidance**
* [x] **Extract Reported Margins**: Note reported EBITDA margin from financial aggregator tables (e.g., SJS reported = 29.3%) [[00:07:05](/transcripts/chk/CHK_Lec13?t=425)].
* [x] **Identify Non-Recurring Impact**: Search con call for statutory/one-off charges (e.g., Labor Code gratuity provision impact) [[00:08:17](/transcripts/chk/CHK_Lec13?t=497)].
* [x] **Classify Expense Sustainability**: Determine whether the charge is recurring or one-time (Labor Code provision = one-off non-recurring) [[00:08:17](/transcripts/chk/CHK_Lec13?t=497)].
* [x] **Calculate Core Adjusted Margin**: Add back non-recurring items to calculate core EBITDA margin (e.g., adjusted = 30.5%) [[00:08:17](/transcripts/chk/CHK_Lec13?t=497)].
* [x] **Cross-Check Management Guidance**: Validate forward sustainable margin expectations with management guidance (28%–29%) [[00:12:00](/transcripts/chk/CHK_Lec13?t=720)].

#### f) Speaker's cautions & common mistakes
* **Blindly Accepting Reported Screener Margins**: Taking reported EBITDA margins (29.3%) at face value without reading con call notes, missing that a non-recurring statutory labor code provision temporarily depressed reported margins below core operational performance (30.5%) [[00:08:17–00:08:50](/transcripts/chk/CHK_Lec13?t=497)].

---

### STAGE 3: Deconstructing Brokerage Models & Establishing Baseline Assumptions [[00:12:37–00:18:18](/transcripts/chk/CHK_Lec13?t=757)] [TVGP: Valuation]

#### a) What this stage answers
How do institutional brokerage models structure assumptions for depreciation, interest, and taxes, and how can individual investors deconstruct them to build simple, robust forward models?

#### b) Detailed explanation
Deconstructing institutional broker research reports helps investors understand how professional analysts map management guidance into forward P&L models [[00:12:37–00:18:18](/transcripts/chk/CHK_Lec13?t=757)].

##### Deconstructing Monarch Network Capital Broker Model
Analyzing an institutional update on SJS Enterprises published by Monarch Network Capital reveals specific modeling techniques [[00:13:00–00:13:38](/transcripts/chk/CHK_Lec13?t=780)]:
* **Sales Growth & Margins**: Monarch assumed a forward sales growth rate of 17%–18% and EBITDA margins of 27.2%–27.6% [[00:14:11](/transcripts/chk/CHK_Lec13?t=851)].
* **Depreciation Modeling Heuristic**: Rather than constructing complex balance sheet fixed-asset schedules, depreciation is modeled as a percentage of sales [[00:14:47](/transcripts/chk/CHK_Lec13?t=887)]. Historically, SJS depreciation was ₹44.7 crore on ₹760 crore sales in FY25 (5.8% of sales) and ₹53 crore on ₹959 crore sales in FY26 (5.5% of sales) [[00:14:47](/transcripts/chk/CHK_Lec13?t=887)]. Given an ongoing annual capex run-rate of ₹80–100 crore, setting forward depreciation at 5.5% of sales (within the historical 5.3%–5.8% band) simplifies modeling while remaining roughly right [[00:14:47–00:15:59](/transcripts/chk/CHK_Lec13?t=887)].
* **Interest & Other Income**: Interest expense is set flat at ₹4 crore because SJS is net debt-free [[00:15:59](/transcripts/chk/CHK_Lec13?t=959)]. Other Income is projected to double over 2 years due to yield generated on the ₹220–230+ crore balance sheet cash pile [[00:15:59](/transcripts/chk/CHK_Lec13?t=959)].
* **Tax Rate**: Effective tax rate is set at 24.5% based on management guidance [[00:16:29](/transcripts/chk/CHK_Lec13?t=989)].

##### Valuation Output Analysis
Monarch projects SJS PAT to grow from ₹171 crore to ₹242 crore in FY28 [[00:16:29](/transcripts/chk/CHK_Lec13?t=989)]. At today's market capitalization of ₹5,192 crore, the FY28 forward P/E ratio stands at 21.6x (₹5,192 Cr ÷ ₹242 Cr) [[00:17:00](/transcripts/chk/CHK_Lec13?t=1020)]. SJS currently trades at a trailing P/E of 33x [[00:17:00](/transcripts/chk/CHK_Lec13?t=1020)]. If the stock retains its 33x P/E multiple in FY28 on ₹240 crore PAT, its target market capitalization would reach ~₹8,000 crore [[00:17:40](/transcripts/chk/CHK_Lec13?t=1060)].

#### c) Examples & case studies
* **Example**: Monarch Network Capital Institutional Broker Model on SJS Enterprises [[00:13:00–00:17:40](/transcripts/chk/CHK_Lec13?t=780)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Deconstructing professional analyst assumptions for forward P&L projections.
  * **Data/details**: FY25 Sales = ₹760 Cr, Depreciation = ₹44.7 Cr (5.8% of sales); FY26 Sales = ₹959 Cr, Depreciation = ₹53 Cr (5.5% of sales); Broker sales growth assumption = 17%–18%; Broker EBITDA margin assumption = 27.2%–27.6%; Annual capex = ₹80–100 Cr; Interest = ₹4 Cr; Cash balance = ₹220–230 Cr; Tax rate = 24.5%; FY28 projected PAT = ₹242 Cr; Current market cap = ₹5,192 Cr; Implied FY28 forward P/E = 21.6x; Target market cap at 33x P/E = ~₹8,000 Cr.
  * **Walkthrough**: Analysts tie capex outlays to depreciation via percentage-of-sales heuristics, and map projected FY28 net profit back to current market cap to evaluate forward valuation multiples.
  * **Takeaway**: Broker reports provide useful benchmark assumptions for independent modeling.

#### d) Formulas, metrics & thresholds
| Metric / Formula | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| :--- | :--- | :--- | :--- | :--- |
| **Depreciation as % of Sales** | (Annual Depreciation ÷ Sales) × 100 | SJS historical = 5.3% to 5.8% (5.5% baseline) | Simplifies fixed asset depreciation modeling | [[00:14:47–00:15:25](/transcripts/chk/CHK_Lec13?t=887)] |
| **FY28 Forward P/E** | Current Market Cap ÷ Projected FY28 PAT | ₹5,192 Cr ÷ ₹242 Cr = 21.6x | Evaluates future earnings multiple at today's price | [[00:17:00](/transcripts/chk/CHK_Lec13?t=1020)] |
| **Target Market Cap** | Projected PAT × Target P/E Multiple | ₹240 Cr PAT × 33x P/E = ₹7,920 Cr (~₹8,000 Cr) | Projects upside market cap target | [[00:17:40](/transcripts/chk/CHK_Lec13?t=1060)] |

#### e) Visual aid
**Comparison Table: Brokerage Assumptions vs. Model Simplifications**

| Line Item | Monarch Broker Assumption | Speaker's Model Baseline | Timestamp |
| :--- | :--- | :--- | :--- |
| **Sales Growth Rate** | 17%–18% YoY | 20% (2.5x auto industry growth) | [[00:14:11](/transcripts/chk/CHK_Lec13?t=851), [00:29:08](/transcripts/chk/CHK_Lec13?t=1748)] |
| **EBITDA Margin** | 27.2%–27.6% | 29.0% (latest con call guidance) | [[00:14:11](/transcripts/chk/CHK_Lec13?t=851), [00:27:02](/transcripts/chk/CHK_Lec13?t=1622)] |
| **Depreciation** | Fixed asset schedule calculation | 5.5% of sales (5.3%–5.8% historical) | [[00:14:47–00:15:59](/transcripts/chk/CHK_Lec13?t=887)] |
| **Interest Expense** | ₹4 crore | ₹4 crore (flat, net debt-free) | [[00:15:59](/transcripts/chk/CHK_Lec13?t=959)] |
| **Tax Rate** | 24.5% | 25.0% (standard corporate tax rate) | [[00:16:29](/transcripts/chk/CHK_Lec13?t=989), [00:26:16](/transcripts/chk/CHK_Lec13?t=1576)] |

#### f) Speaker's cautions & common mistakes
* **Over-Complicating Fixed Asset Depreciation**: Over-complicating depreciation calculations via multi-line balance sheet schedules when taking a historical percentage of sales (e.g., 5.5%) gets models roughly right much faster [[00:15:59](/transcripts/chk/CHK_Lec13?t=959)].

---

### STAGE 4: Step-by-Step Manual Spreadsheet Modeling for SJS Enterprises (FY25–FY26) [[00:18:18–00:28:31](/transcripts/chk/CHK_Lec13?t=1098)] [TVGP: Valuation]

#### a) What this stage answers
How do you build a manual spreadsheet model line-by-line using actual quarterly run-rates to project full-year FY26 PAT and forward P/E?

#### b) Detailed explanation
Constructing a manual spreadsheet model requires establishing historical baseline actuals, analyzing recent quarterly run-rates, applying seasonality factors, and executing line-by-line P&L math [[00:18:18–00:28:31](/transcripts/chk/CHK_Lec13?t=1098)].

##### FY25 Baseline Actuals Input
* **Sales**: ₹760 crore [[00:18:18](/transcripts/chk/CHK_Lec13?t=1098)].
* **EBITDA**: ₹195 crore at a 25.7% EBITDA margin (₹760 Cr × 25.7%) [[00:19:19](/transcripts/chk/CHK_Lec13?t=1159)].
* **Other Income**: ₹8 crore [[00:19:19](/transcripts/chk/CHK_Lec13?t=1159)].
* **Depreciation**: ₹45 crore, representing 5.92% of sales [[00:19:19–00:20:00](/transcripts/chk/CHK_Lec13?t=1159)].
* **Interest Expense**: ₹6 crore (declining to ₹4 crore in FY26) [[00:20:00](/transcripts/chk/CHK_Lec13?t=1200)].
* **PBT & Tax**: PBT = ₹153 crore; Tax rate = 22.3% reported (24.5% guidance); PAT = ₹119 crore (₹153 Cr × [1 − 0.223]) [[00:20:40](/transcripts/chk/CHK_Lec13?t=1240)].

##### FY26 Quarterly Run-Rate & Q4 Projection
Actual quarterly growth rates recorded in FY26: Q1 sales growth = 11%, Q2 growth = 25%, Q3 growth = 36% (Q3 sales = ₹244 crore) [[00:21:18](/transcripts/chk/CHK_Lec13?t=1278)]. 

Historically, Q4 sales at SJS are consistently ~10% higher than Q3 sales due to export seasonality and GST factors [[00:21:18–00:22:18](/transcripts/chk/CHK_Lec13?t=1278), [00:24:00](/transcripts/chk/CHK_Lec13?t=1440)].
* **Projected Q4 Sales**: ₹244 crore (Q3 base) × 1.10 = ₹270 crore (representing ~35% YoY growth over Q4 FY25 sales of ₹201 crore) [[00:22:18](/transcripts/chk/CHK_Lec13?t=1338)].
* **Projected Q4 EBITDA**: At 29% EBITDA margin, Q4 EBITDA = ₹270 crore × 0.29 = ₹78.3 crore (~₹78 crore) [[00:22:51–00:23:18](/transcripts/chk/CHK_Lec13?t=1371)].
* **Projected Q4 PBT**: Adding ₹4 crore Other Income, subtracting ₹1 crore Interest and ₹14 crore Depreciation yields Q4 PBT = ₹78 Cr + ₹4 Cr − ₹1 Cr − ₹14 Cr = ₹67 crore [[00:23:18](/transcripts/chk/CHK_Lec13?t=1398)].
* **Projected Q4 PAT**: At a 25.3% tax rate, Q4 PAT = ₹67 Cr × (1 − 0.25) = ₹50 crore [[00:24:00–00:24:54](/transcripts/chk/CHK_Lec13?t=1440)].

##### Full Year FY26 Consolidated P&L Construction
* **Sales**: Q1 (₹210 Cr) + Q2 (₹242 Cr) + Q3 (₹244 Cr) + Projected Q4 (₹270 Cr) = ₹966 crore total sales [[00:26:29](/transcripts/chk/CHK_Lec13?t=1589)].
* **EBITDA**: Full-year EBITDA at ~29% margin = ~₹280 crore [[00:27:02](/transcripts/chk/CHK_Lec13?t=1622)].
* **Other Income**: ₹16 crore (₹4 Cr per quarter) [[00:27:02–00:27:30](/transcripts/chk/CHK_Lec13?t=1622)].
* **Depreciation**: 5.92% of sales = ₹57.18 crore [[00:27:30](/transcripts/chk/CHK_Lec13?t=1650)].
* **Interest Expense**: ₹4 crore (₹1 Cr per quarter) [[00:27:30](/transcripts/chk/CHK_Lec13?t=1650)].
* **PBT**: EBITDA (₹280 Cr) + Other Income (₹16 Cr) − Depreciation (₹57.18 Cr) − Interest (₹4 Cr) = ₹235 crore [[00:27:30–00:28:10](/transcripts/chk/CHK_Lec13?t=1650)].
* **PAT**: PBT (₹235 Cr) × (1 − 0.25 tax rate) = ₹173 to ₹176 crore PAT [[00:25:35](/transcripts/chk/CHK_Lec13?t=1535), [00:28:10–00:28:31](/transcripts/chk/CHK_Lec13?t=1690)].

##### FY26 Forward Valuation Multiple
Dividing SJS's current market capitalization of ₹5,262 crore by the projected FY26 PAT of ₹173 crore yields an estimated FY26 forward P/E ratio of 30x (₹5,262 Cr ÷ ₹173 Cr) [[00:25:35](/transcripts/chk/CHK_Lec13?t=1535)].

#### c) Examples & case studies
* **Example**: SJS Enterprises Full FY26 P&L Spreadsheet Construction [[00:18:18–00:28:31](/transcripts/chk/CHK_Lec13?t=1098)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Building a live forward financial model from scratch using quarterly transcript data.
  * **Data/details**: FY25 actuals: Sales ₹760 Cr, EBITDA ₹195 Cr (25.7%), PBT ₹153 Cr, PAT ₹119 Cr. FY26 Q1–Q3 actuals + Q4 estimate (₹270 Cr sales, ₹78 Cr EBITDA, ₹67 Cr PBT, ₹50 Cr PAT). Full FY26: Revenue ₹966 Cr, EBITDA ₹280 Cr (29%), Other Income ₹16 Cr, Depreciation ₹57.18 Cr, Interest ₹4 Cr, PBT ₹235 Cr, PAT ₹173–176 Cr. Market cap = ₹5,262 Cr; Forward P/E = 30x.
  * **Walkthrough**: Input quarterly actuals, apply 10% Q3-to-Q4 seasonal bump, apply 29% EBITDA margin, deduct 5.92% depreciation, subtract ₹4 Cr interest, apply 25% tax rate, and compute full-year PAT of ₹173–176 Cr.
  * **Takeaway**: Step-by-step quarterly modeling establishes a sound annual earnings baseline for valuation.

#### d) Formulas, metrics & thresholds
| Metric / Formula | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| :--- | :--- | :--- | :--- | :--- |
| **Q4 Projected Sales** | Q3 Sales × 1.10 (10% seasonal Q3-to-Q4 increase) | ₹244 Cr × 1.10 = ₹270 Cr | Reflects Q4 export seasonality floor | [[00:21:52–00:22:18](/transcripts/chk/CHK_Lec13?t=1312)] |
| **FY26 Total Sales** | Q1 + Q2 + Q3 + Projected Q4 Sales | ₹210 Cr + ₹242 Cr + ₹244 Cr + ₹270 Cr = ₹966 Cr | Full year top-line sales baseline | [[00:26:29](/transcripts/chk/CHK_Lec13?t=1589)] |
| **FY26 Total PBT** | EBITDA + Other Income − Depreciation − Interest | ₹280 Cr + ₹16 Cr − ₹57.18 Cr − ₹4 Cr = ₹235 Cr | Total pre-tax corporate earnings | [[00:28:10](/transcripts/chk/CHK_Lec13?t=1690)] |
| **FY26 Total PAT** | PBT × (1 − Tax Rate) | ₹235 Cr × (1 − 0.25) = ₹176 Cr (~₹173–176 Cr) | Bottom-line earnings baseline | [[00:28:10–00:28:31](/transcripts/chk/CHK_Lec13?t=1690)] |
| **FY26 Forward P/E** | Current Market Cap ÷ FY26 PAT | ₹5,262 Cr ÷ ₹173 Cr = 30.4x (~30x) | Baseline annual valuation multiple | [[00:25:35](/transcripts/chk/CHK_Lec13?t=1535)] |

#### e) Visual aid
**Text Flow Diagram: FY26 Step-by-Step P&L Modeling Flow**
`Q1–Q3 Actual Sales (₹696 Cr) + Q4 Projected Sales (₹270 Cr)` → `Full FY26 Sales (₹966 Cr)` → `EBITDA at 29% Margin (₹280 Cr)` → `+ Other Income (₹16 Cr) − Depreciation (₹57.18 Cr) − Interest (₹4 Cr)` → `PBT (₹235 Cr)` → `PAT at 25% Tax Rate (₹173–176 Cr)` → `FY26 Forward P/E at ₹5,262 Cr Market Cap = 30x`

#### f) Speaker's cautions & common mistakes
* **Addition Error in Mental Math**: In initial mental math, adding quarterly PAT numbers incorrectly (95 + 43 + 35 + 50 = 181 Cr [? verify]); self-correcting live to the accurate sum of ₹173 crore [[00:24:54–00:25:35](/transcripts/chk/CHK_Lec13?t=1494)].
* **Decimal Precision Distractions**: Minor decimal variations (e.g., ₹173 Cr vs ₹176 Cr) occur due to tax rate rounding; being roughly right within a ₹1–2 crore range is sufficient for investment decision-making [[00:25:35](/transcripts/chk/CHK_Lec13?t=1535), [00:28:31](/transcripts/chk/CHK_Lec13?t=1711)].

---

Batch complete: Batch 1 = Stages 1–4 [[00:00:06–00:28:31](/transcripts/chk/CHK_Lec13?t=6)]. Next: Stages 5–7

### STAGE 5: Multi-Year Forward Growth Projection & Cash Flow Dynamics (FY27–FY28) [[00:28:31–00:41:21](/transcripts/chk/CHK_Lec13?t=1711)] [TVGP: Valuation]

#### a) What this stage answers
How do you project top-line sales, EBITDA, free cash flows, interest/other income, and bottom-line PAT 2 years forward (FY27–FY28) using conservative outperformance multipliers and cash flow yield heuristics?

#### b) Detailed explanation
Multi-year forward modeling requires expanding the baseline annual P&L into future years by establishing conservative top-line growth assumptions, modeling cash flow conversion, and accounting for cash balance accumulation [[00:28:31–00:41:21](/transcripts/chk/CHK_Lec13?t=1711)].

##### Multi-Year Sales Growth Assumptions
To forecast SJS Enterprises' FY27 revenue, begin with the underlying auto OEM sector growth benchmark. Management commentary from TVS Motors, Maruti Suzuki, and Hyundai indicates projected auto industry volume growth of 8%–9% [[00:28:31](/transcripts/chk/CHK_Lec13?t=1711)]. Although SJS has historically outperformed industry growth by 3x across 26 consecutive quarters, applying a conservative 2.5x outperformance multiplier is prudent [[00:28:31–00:29:08](/transcripts/chk/CHK_Lec13?t=1711)]. 

* **FY27 Sales Growth**: 8% (industry baseline) × 2.5x (multiplier) = 20% sales growth assumption [[00:29:08](/transcripts/chk/CHK_Lec13?t=1748)]. Applying 20% growth to FY26 sales (₹966 crore) yields **FY27 projected sales of ₹1,160 crore** (₹966 Cr × 1.20) [[00:29:08–00:29:50](/transcripts/chk/CHK_Lec13?t=1748)].
* **FY28 Sales Growth**: Assuming auto industry growth moderates to 6%, applying the 2.5x multiplier yields a 15% sales growth assumption (6% × 2.5x) [[00:37:53](/transcripts/chk/CHK_Lec13?t=2273)]. Applying 15% growth to FY27 sales (₹1,160 crore) yields **FY28 projected sales of ₹1,333 crore** (₹1,160 Cr × 1.15) [[00:37:53](/transcripts/chk/CHK_Lec13?t=2273)].

##### EBITDA Margin Persistence
Management con call guidance confirms sustainable EBITDA margins in the range of 28%–29% (upward revised from 26%–27%) [[00:29:50–00:30:22](/transcripts/chk/CHK_Lec13?t=1790)]. Maintaining a 29% EBITDA margin assumption yields:
* **FY27 EBITDA**: ₹1,160 crore × 29% = **₹336.16 crore** [[00:30:22](/transcripts/chk/CHK_Lec13?t=1822)].
* **FY28 EBITDA**: ₹1,333 crore × 29% = **₹386.57 crore** (~₹386.6 crore) [[00:37:53](/transcripts/chk/CHK_Lec13?t=2273)].

##### Cash Flow Conversion & Other Income Heuristic
SJS is a low-capex, high-cash-conversion business, converting 80%–83% of its EBITDA into Cash Flow from Operations (CFO) [[00:30:22–00:31:44](/transcripts/chk/CHK_Lec13?t=1822)]. 
* **Cash Flow Generation**: On FY26 EBITDA of ₹280 crore, CFO equals ₹224 crore (₹280 Cr × 0.80) [[00:31:44](/transcripts/chk/CHK_Lec13?t=1904)]. Subtracting planned annual capex of ₹100 crore yields Free Cash Flow to Firm (FCFF) of ~₹124–169 crore per year [[00:31:44–00:34:34](/transcripts/chk/CHK_Lec13?t=1904)].
* **Accumulated Cash Pile**: SJS held ₹203 crore in net balance sheet cash as of 9M FY26 [[00:35:12](/transcripts/chk/CHK_Lec13?t=2112), [00:36:42](/transcripts/chk/CHK_Lec13?t=2202)]. Adding annual net free cash flows builds a net cash balance of ₹320–360 crore by FY27 [[00:33:28](/transcripts/chk/CHK_Lec13?t=2008), [00:35:36](/transcripts/chk/CHK_Lec13?t=2136)].
* **Other Income Modeling**: Applying a conservative 7% yield on a ₹360 crore cash pile generates **₹25.2 crore in Other Income** for FY27 (modeled conservatively at ₹22–25.2 crore) [[00:33:28](/transcripts/chk/CHK_Lec13?t=2008), [00:35:36](/transcripts/chk/CHK_Lec13?t=2136)]. For FY28, Other Income is assumed to grow by 15% as cash continues to accumulate on the balance sheet [[00:37:53](/transcripts/chk/CHK_Lec13?t=2273)].

##### Depreciation, Interest & Tax Assumptions
* **Depreciation**: Fixed at the historical rate of 5.92% of sales. FY27 depreciation = ₹68.67 crore (5.92% of ₹1,160 Cr); FY28 depreciation = ₹78.9 crore (5.92% of ₹1,333 Cr) [[00:35:36](/transcripts/chk/CHK_Lec13?t=2136), [00:38:56](/transcripts/chk/CHK_Lec13?t=2336)].
* **Interest Expense**: Maintained flat at ₹4 crore per year (₹1 Cr per quarter) because the company remains net debt-free [[00:34:06](/transcripts/chk/CHK_Lec13?t=2046), [00:38:56](/transcripts/chk/CHK_Lec13?t=2336)].
* **Tax Rate**: Set at the standard corporate tax rate of 25% [[00:36:16](/transcripts/chk/CHK_Lec13?t=2176), [00:38:56](/transcripts/chk/CHK_Lec13?t=2336)].

##### Bottom-Line PAT Projections
* **FY27 PBT & PAT**: PBT = EBITDA (₹336.16 Cr) + Other Income (₹25.2 Cr) − Depreciation (₹68.67 Cr) − Interest (₹4 Cr) = ₹288.69 crore (~₹289 Cr) [[00:37:00–00:37:32](/transcripts/chk/CHK_Lec13?t=2220)]. At a 25% tax rate, **FY27 PAT = ₹216.5 crore** (~₹216–218 Cr) [[00:37:32](/transcripts/chk/CHK_Lec13?t=2252)].
* **FY28 PBT & PAT**: PBT = EBITDA (₹386.6 Cr) + Other Income (₹29 Cr) − Depreciation (₹78.9 Cr) − Interest (₹4 Cr) = ₹332.7 crore [[00:38:56](/transcripts/chk/CHK_Lec13?t=2336), [00:40:38](/transcripts/chk/CHK_Lec13?t=2438)]. At a 25% tax rate, **FY28 PAT = ₹249–255 crore** [[00:38:56–00:40:38](/transcripts/chk/CHK_Lec13?t=2336)].

##### Comparison with Brokerage Forecasts
Monarch Network Capital projected FY28 SJS PAT at ₹242 crore (growing from ₹171 Cr) [[00:39:43](/transcripts/chk/CHK_Lec13?t=2383)]. The manual model's projected FY28 PAT of ₹249–255 crore is ~3%–4% higher because it incorporates management's upgraded 29% EBITDA margin guidance versus Monarch's conservative 27.5% margin assumption [[00:39:43](/transcripts/chk/CHK_Lec13?t=2383)].

#### c) Examples & case studies
* **Example**: Auto OEM Con Calls (TVS Motors, Maruti Suzuki, Hyundai) [[00:28:31](/transcripts/chk/CHK_Lec13?t=1711)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Establishing baseline sector growth parameters for auto component suppliers.
  * **Data/details**: TVS Motors, Maruti Suzuki, and Hyundai all guided for 8%–9% overall auto industry volume growth.
  * **Walkthrough**: Auto OEM volume expectations are aggregated to establish a realistic auto industry base growth rate (8%), which is then multiplied by supplier-specific outperformance factors.
  * **Takeaway**: Cross-referencing OEM con call guidance provides grounded top-line sector benchmarks.
* **Example**: SJS Enterprises FY27 & FY28 Multi-Year Forward Model [[00:28:31–00:41:21](/transcripts/chk/CHK_Lec13?t=1711)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Full 2-year forward P&L projection and cash pile yield modeling.
  * **Data/details**: Sales: FY26 = ₹966 Cr, FY27 = ₹1,160 Cr (+20%), FY28 = ₹1,333 Cr (+15%). EBITDA margin = 29% (FY27 EBITDA = ₹336.16 Cr, FY28 EBITDA = ₹386.6 Cr). Cash pile = ₹360 Cr at 7% yield → Other Income = ₹25.2 Cr (FY27). Depreciation = 5.92% of sales (FY27 = ₹68.67 Cr, FY28 = ₹78.9 Cr). Interest = ₹4 Cr. Tax = 25%. Projected PAT: FY27 = ₹216 Cr, FY28 = ₹249–255 Cr. Monarch broker FY28 PAT = ₹242 Cr.
  * **Walkthrough**: Top-line outperformance builds operational cash flows, accumulating balance sheet cash that earns a 7% yield, providing an added booster to pre-tax earnings.
  * **Takeaway**: Cash-generative, capital-light businesses compound net earnings through both operating growth and rising non-operating cash yields.

#### d) Formulas, metrics & thresholds
| Metric / Formula | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| :--- | :--- | :--- | :--- | :--- |
| **Forward Revenue Growth (%)** | Industry Growth % × Outperformance Multiplier | 8.0% industry × 2.5x multiplier = 20.0% FY27 growth | Quantifies market share expansion and premiumisation gains | [[00:29:08](/transcripts/chk/CHK_Lec13?t=1748)] |
| **Cash Flow from Operations (CFO)** | EBITDA × CFO Conversion Rate (%) | EBITDA × 80.0% conversion baseline | Measures cash generation efficiency of operating profits | [[00:30:22–00:31:44](/transcripts/chk/CHK_Lec13?t=1822)] |
| **Free Cash Flow to Firm (FCFF)** | CFO − Capital Expenditures (Capex) | ₹224 Cr CFO − ₹100 Cr Capex = ₹124 Cr FCFF | Net cash surplus added to balance sheet liquidity | [[00:32:16](/transcripts/chk/CHK_Lec13?t=1936)] |
| **Other Income Yield** | Accumulated Cash Balance × Treasury Yield (%) | ₹360 Cr cash pile × 7.0% yield = ₹25.2 Cr | Treasury return generated on net cash holdings | [[00:33:28](/transcripts/chk/CHK_Lec13?t=2008), [00:35:36](/transcripts/chk/CHK_Lec13?t=2136)] |
| **FY28 Projected PAT** | FY28 PBT × (1 − Tax Rate) | ₹332.7 Cr PBT × (1 − 0.25) = ₹249.5 Cr (~₹249–255 Cr) | Final 2-year forward net earnings anchor | [[00:38:56–00:40:38](/transcripts/chk/CHK_Lec13?t=2336)] |

#### e) Visual aid
**Comparison Table: Multi-Year Forward P&L Modeling Progression (SJS Enterprises)**

| Line Item (₹ in Crore) | FY25 Actual | FY26 Estimated | FY27 Projected | FY28 Projected | Timestamp |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Top-Line Sales** | ₹760.0 | ₹966.0 | ₹1,160.0 (+20%) | ₹1,333.0 (+15%) | [[00:18:18](/transcripts/chk/CHK_Lec13?t=1098), [00:26:29](/transcripts/chk/CHK_Lec13?t=1589), [00:29:08](/transcripts/chk/CHK_Lec13?t=1748), [00:37:53](/transcripts/chk/CHK_Lec13?t=2273)] |
| **EBITDA Margin (%)** | 25.7% | 29.0% | 29.0% | 29.0% | [[00:19:19](/transcripts/chk/CHK_Lec13?t=1159), [00:27:02](/transcripts/chk/CHK_Lec13?t=1622), [00:29:50](/transcripts/chk/CHK_Lec13?t=1790), [00:37:53](/transcripts/chk/CHK_Lec13?t=2273)] |
| **EBITDA** | ₹195.0 | ₹280.0 | ₹336.2 | ₹386.6 | [[00:19:19](/transcripts/chk/CHK_Lec13?t=1159), [00:27:02](/transcripts/chk/CHK_Lec13?t=1622), [00:30:22](/transcripts/chk/CHK_Lec13?t=1822), [00:37:53](/transcripts/chk/CHK_Lec13?t=2273)] |
| **Other Income** | ₹8.0 | ₹16.0 | ₹25.2 | ₹29.0 | [[00:19:19](/transcripts/chk/CHK_Lec13?t=1159), [00:27:02](/transcripts/chk/CHK_Lec13?t=1622), [00:35:36](/transcripts/chk/CHK_Lec13?t=2136), [00:37:53](/transcripts/chk/CHK_Lec13?t=2273)] |
| **Depreciation (5.92%)** | ₹45.0 | ₹57.2 | ₹68.7 | ₹78.9 | [[00:19:19](/transcripts/chk/CHK_Lec13?t=1159), [00:27:30](/transcripts/chk/CHK_Lec13?t=1650), [00:35:36](/transcripts/chk/CHK_Lec13?t=2136), [00:38:56](/transcripts/chk/CHK_Lec13?t=2336)] |
| **Interest Expense** | ₹6.0 | ₹4.0 | ₹4.0 | ₹4.0 | [[00:20:00](/transcripts/chk/CHK_Lec13?t=1200), [00:27:30](/transcripts/chk/CHK_Lec13?t=1650), [00:34:06](/transcripts/chk/CHK_Lec13?t=2046), [00:38:56](/transcripts/chk/CHK_Lec13?t=2336)] |
| **Profit Before Tax (PBT)**| ₹153.0 | ₹235.0 | ₹288.7 | ₹332.7 | [[00:20:40](/transcripts/chk/CHK_Lec13?t=1240), [00:28:10](/transcripts/chk/CHK_Lec13?t=1690), [00:37:00](/transcripts/chk/CHK_Lec13?t=2220), [00:40:38](/transcripts/chk/CHK_Lec13?t=2438)] |
| **Profit After Tax (PAT)** | ₹119.0 | ₹173.0–176.0 | ₹216.0 | ₹249.0–255.0 | [[00:20:40](/transcripts/chk/CHK_Lec13?t=1240), [00:28:10](/transcripts/chk/CHK_Lec13?t=1690), [00:37:32](/transcripts/chk/CHK_Lec13?t=2252), [00:38:56](/transcripts/chk/CHK_Lec13?t=2336)] |

#### f) Speaker's cautions & common mistakes
* **Over-Projecting Non-Operating Income**: Counting aggressive non-operating income additions into core earnings without discounting for tax adjustments or potential cash deployment in M&A [[00:37:00](/transcripts/chk/CHK_Lec13?t=2220)].
* **Spurious Precision**: Getting bogged down in single-decimal variations when setting multi-year assumptions; being roughly right within a 3%–4% error margin is sufficient [[00:39:43](/transcripts/chk/CHK_Lec13?t=2383), [00:40:38](/transcripts/chk/CHK_Lec13?t=2438)].

---

### STAGE 6: Valuation Metrics – Forward P/E, PAT CAGR & 2-Year PEG Ratio Calculation [[00:41:21–00:44:59](/transcripts/chk/CHK_Lec13?t=2481)] [TVGP: Valuation]

#### a) What this stage answers
How do you calculate a stock's forward P/E ratio, 2-year PAT CAGR, and 2-year forward PEG ratio from projected earnings models?

#### b) Detailed explanation
Translating forward P&L projections into actionable stock selection criteria requires connecting projected net profits back to current market capitalization through forward valuation multiples [[00:41:21–00:44:59](/transcripts/chk/CHK_Lec13?t=2481)].

##### FY28 Forward P/E Calculation
* Current Market Capitalization (SJS Enterprises) = ₹5,200–5,262 crore [[00:41:21](/transcripts/chk/CHK_Lec13?t=2481)].
* Projected FY28 PAT = ₹249 crore [[00:41:21](/transcripts/chk/CHK_Lec13?t=2481)].
* **FY28 Forward P/E Ratio**: Dividing current market cap by projected FY28 PAT yields an FY28 forward P/E multiple of **20.88x** (₹5,200 Cr ÷ ₹249 Cr) [[00:41:21](/transcripts/chk/CHK_Lec13?t=2481)].

##### Multi-Period Forward Multiple Tracking
Investors should calculate and track forward valuation multiples across four distinct time horizons for every business owned in a portfolio: Trailing Twelve Months (TTM), FY26, FY27, and FY28 [[00:41:57](/transcripts/chk/CHK_Lec13?t=2517)]. Maintaining multi-period forward models across owned stocks (e.g., commodity exchanges, gold lenders) clarifies whether expected cumulative earnings growth (e.g., 30%–40% bottom-line expansion) justifies holding through short-term market volatility [[00:41:57](/transcripts/chk/CHK_Lec13?t=2517)].

##### 2-Year PAT CAGR Calculation
* Base Year PAT (FY26) = ₹176 crore [[00:43:01](/transcripts/chk/CHK_Lec13?t=2581)].
* Year-2 Projected PAT (FY28) = ₹249 crore [[00:43:01](/transcripts/chk/CHK_Lec13?t=2581)].
* **2-Year PAT CAGR**: Applying the compound annual growth rate formula $[$ (\text{End PAT} / \text{Start PAT}) via a financial calculator yields a **2-year PAT CAGR of 20.74%** (~20.8%) [[00:42:22–00:43:01](/transcripts/chk/CHK_Lec13?t=2542)].

##### 2-Year Forward PEG Ratio Calculation
SJS currently trades at a trailing P/E multiple of 33x [[00:43:45](/transcripts/chk/CHK_Lec13?t=2625)]. 
* **2-Year Forward PEG Formula**: $\text{PEG Ratio} = \text{Current Trailing P/E Multiple} \div \text{Forward PAT CAGR$ (\%).
* **SJS PEG Calculation**: Dividing current trailing P/E (33x) by the 2-year forward PAT CAGR (20.8%) yields a **2-year forward PEG ratio of 1.58x** (33 ÷ 20.8) [[00:43:45](/transcripts/chk/CHK_Lec13?t=2625)].

##### Interpreting Forward PEG Ratios
A forward PEG ratio of 1.58x indicates fair valuation with moderate growth pricing [[00:44:31](/transcripts/chk/CHK_Lec13?t=2671)]. If the stock price undergoes a modest 5%–10% correction, the forward PEG ratio compresses below 1.5x, establishing an attractive margin of safety for entry [[00:44:31](/transcripts/chk/CHK_Lec13?t=2671)].

#### c) Examples & case studies
* **Example**: SJS Enterprises 2-Year Forward Valuation & PEG Calculation [[00:41:21–00:44:31](/transcripts/chk/CHK_Lec13?t=2481)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Computing forward P/E multiples, earnings growth CAGR, and forward PEG ratio.
  * **Data/details**: Market cap = ₹5,200 Cr; Base PAT (FY26) = ₹176 Cr; FY28 PAT = ₹249 Cr; Current P/E = 33x; FY28 Forward P/E = 20.88x; 2-year PAT CAGR = 20.74%; 2-year Forward PEG = 1.58x.
  * **Walkthrough**: Input ₹176 Cr starting PAT and ₹249 Cr ending PAT into a financial calculator over a 2-year horizon to derive a 20.74% CAGR. Divide trailing P/E (33x) by 20.8% CAGR to calculate a PEG ratio of 1.58x.
  * **Takeaway**: Forward PEG combines valuation multiples and earnings growth speed into a single comparable metric.
* **Example**: Portfolio Multi-Period Model Tracking (Commodity Exchange & Gold Lender) [[00:41:57](/transcripts/chk/CHK_Lec13?t=2517)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Managing multi-horizon forward valuation models across portfolio holdings.
  * **Data/details**: Maintaining forward P/E tracking matrices across LTM, FY26, FY27, and FY28 horizons for owned portfolio positions.
  * **Walkthrough**: Explicitly modeling 30%–40% cumulative profit expansion across a 2–3 year forward window provides conviction to hold core positions during broader market drawdowns.
  * **Takeaway**: Systematic forward P/E modeling across multiple time horizons prevents panic during market pullbacks.

#### d) Formulas, metrics & thresholds
| Metric / Formula | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| :--- | :--- | :--- | :--- | :--- |
| **Forward P/E Ratio** | Current Market Cap ÷ Projected Forward PAT | ₹5,200 Cr ÷ ₹249 Cr = 20.88x FY28 P/E | Evaluates future earnings multiple at today's price | [[00:41:21](/transcripts/chk/CHK_Lec13?t=2481)] |
| **Earnings CAGR (%)** | $[$ (\text{Ending PAT} \div \text{Starting PAT}) | $[$ (249 \div 176) CAGR | Quantifies compound annual bottom-line growth velocity | [[00:43:01](/transcripts/chk/CHK_Lec13?t=2581)] |
| **2-Year Forward PEG Ratio** | Trailing P/E Multiple ÷ Forward PAT CAGR (%) | 33 ÷ 20.8% growth = 1.58x PEG ratio | Benchmark: PEG < 1.5x provides strong margin of safety | [[00:43:45–00:44:31](/transcripts/chk/CHK_Lec13?t=2625)] |

#### e) Visual aid
**Step-by-Step Process List: Valuation Metrics Calculation Flow**
1. **Identify Current Market Cap**: Check current stock price and market capitalization (e.g., SJS = ₹5,200 Cr) [[00:41:21](/transcripts/chk/CHK_Lec13?t=2481)].
2. **Retrieve Projected Forward PAT**: Take Year-2 projected net profit from model (e.g., FY28 PAT = ₹249 Cr) [[00:41:21](/transcripts/chk/CHK_Lec13?t=2481)].
3. **Compute Forward P/E**: Divide Market Cap by Year-2 PAT (₹5,200 Cr ÷ ₹249 Cr = 20.88x) [[00:41:21](/transcripts/chk/CHK_Lec13?t=2481)].
4. **Calculate 2-Year PAT CAGR**: Run financial calculator on Base PAT (₹176 Cr) vs Year-2 PAT (₹249 Cr) → 20.74% CAGR [[00:43:01](/transcripts/chk/CHK_Lec13?t=2581)].
5. **Compute Forward PEG Ratio**: Divide current trailing P/E (33x) by 2-year PAT CAGR (20.8%) = 1.58x PEG [[00:43:45](/transcripts/chk/CHK_Lec13?t=2625)].
6. **Evaluate Margin of Safety**: Assess if PEG < 1.5x or if a 5%–10% price correction is needed for optimal risk-reward entry [[00:44:31](/transcripts/chk/CHK_Lec13?t=2671)].

#### f) Speaker's cautions & common mistakes
* **Relying Solely on Trailing P/E**: Evaluating stocks purely on static trailing P/E multiples without accounting for forward bottom-line growth velocity [[00:41:57](/transcripts/chk/CHK_Lec13?t=2517)].
* **Ignoring PEG Expansion**: Buying stocks where trailing P/E has expanded significantly faster than underlying earnings growth, driving forward PEG above reasonable thresholds (>1.5–2.0x) [[00:44:31](/transcripts/chk/CHK_Lec13?t=2671)].

---

### STAGE 7: Bull, Base, and Bear Scenario Analysis Framework (Stock Scans Calculator) [[00:44:59–00:48:40](/transcripts/chk/CHK_Lec13?t=2699)] [TVGP: Valuation]

#### a) What this stage answers
How do you construct a 3-scenario payoff matrix (Bull, Base, Bear) using varying earnings growth rates and exit P/E multiples to evaluate investment odds?

#### b) Detailed explanation
To stress-test investment ideas and evaluate risk-reward asymmetry, investors construct a 3-scenario payoff matrix (Bull, Base, Bear) over a 2-year exit horizon using automated valuation tools (e.g., Stock Scans Earnings Valuation Calculator) [[00:44:31–00:45:21](/transcripts/chk/CHK_Lec13?t=2671)].

##### SJS Enterprises 3-Scenario Matrix
* **Bull Case**: Assumes robust operating leverage and market share gains.
  * PAT Growth: 25% per annum [[00:44:59](/transcripts/chk/CHK_Lec13?t=2699)].
  * Exit P/E Multiple: 40x (chosen conservatively below SJS's historical peak P/E of 44x) [[00:44:59–00:45:21](/transcripts/chk/CHK_Lec13?t=2699)].
  * FY28 Projected PAT: ₹244 crore [[00:45:21](/transcripts/chk/CHK_Lec13?t=2721)].
  * **Projected Stock Return**: **36.0% CAGR** [[00:45:21](/transcripts/chk/CHK_Lec13?t=2721)].
* **Base Case**: Assumes steady baseline execution.
  * PAT Growth: 18% per annum [[00:44:59](/transcripts/chk/CHK_Lec13?t=2699)].
  * Exit P/E Multiple: 30x [[00:44:59](/transcripts/chk/CHK_Lec13?t=2699)].
  * FY28 Projected PAT: ₹218 crore [[00:45:21](/transcripts/chk/CHK_Lec13?t=2721)].
  * **Projected Stock Return**: **11.52% CAGR** [[00:45:21](/transcripts/chk/CHK_Lec13?t=2721)].
* **Bear Case**: Assumes growth deceleration and multiple compression.
  * PAT Growth: 15% per annum [[00:44:59](/transcripts/chk/CHK_Lec13?t=2699)].
  * Exit P/E Multiple: 25x (reflecting valuation multiple contraction) [[00:44:59](/transcripts/chk/CHK_Lec13?t=2699)].
  * FY28 Projected PAT: ₹207 crore [[00:45:21](/transcripts/chk/CHK_Lec13?t=2721)].
  * **Projected Stock Return**: **0.79% CAGR** [[00:45:21](/transcripts/chk/CHK_Lec13?t=2721)].

##### Interarch Building Products Scenario Assessment
* **Bull Case**: Revenue growth = 30%, PAT growth incorporating operating leverage, Exit P/E = 35x (below past peak P/E of 34–35x) [[00:46:33–00:47:10](/transcripts/chk/CHK_Lec13?t=2793)].
* **Base Case**: Revenue growth = 20%, PAT growth = 20%, Exit P/E = 25x [[00:46:33–00:47:10](/transcripts/chk/CHK_Lec13?t=2793)].
* **Bear Case**: Revenue growth = 15%, PAT growth = 15%, Exit P/E = 20x [[00:46:33–00:47:10](/transcripts/chk/CHK_Lec13?t=2793)].

##### Evaluating Asymmetric Odds & Workflow Rules
Comparing the Bull case upside (+36% CAGR) against the Bear case downside (+0.79% CAGR) allows investors to evaluate whether risk-reward odds are heavily skewed in their favor before executing a trade [[00:47:10–00:47:41](/transcripts/chk/CHK_Lec13?t=2830)].

Speaker's Workflow Rule: Always build manual line-by-line Excel models first to understand granular business drivers; use quick scenario calculators second to evaluate odds rapidly across multiple companies [[00:48:06](/transcripts/chk/CHK_Lec13?t=2886)].

#### c) Examples & case studies
* **Example**: SJS Enterprises 3-Scenario Payoff Matrix [[00:44:59–00:46:18](/transcripts/chk/CHK_Lec13?t=2699)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Stress-testing 2-year forward return expectations for SJS Enterprises across Bull, Base, and Bear scenarios.
  * **Data/details**: Horizon = 2 years. Bull case: 25% PAT growth, 40x exit P/E → ₹244 Cr PAT, 36.0% stock CAGR return. Base case: 18% PAT growth, 30x exit P/E → ₹218 Cr PAT, 11.52% stock CAGR return. Bear case: 15% PAT growth, 25x exit P/E → ₹207 Cr PAT, 0.79% stock CAGR return. Historical peak P/E = 44x.
  * **Walkthrough**: Input growth rates and exit multiples into the Stock Scans tool to compute expected annual stock return CAGRs for each scenario.
  * **Takeaway**: Scenario matrices clearly quantify asymmetric risk-reward profiles.
* **Example**: Interarch Building Products Scenario Stress-Testing [[00:46:33–00:47:41](/transcripts/chk/CHK_Lec13?t=2793)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Rapidly assessing scenario odds for Interarch Building Products.
  * **Data/details**: Bull case: 30% revenue growth, 35x exit P/E. Base case: 20% revenue growth, 25x exit P/E. Bear case: 15% revenue growth, 20x exit P/E. Historical peak P/E = 34x.
  * **Walkthrough**: Stress-test returns under multiple compression to check whether downside risk remains acceptable if growth slows.
  * **Takeaway**: Accounting for multiple compression in bear scenarios prevents overpaying for cyclical or lumpy growth businesses.

#### d) Formulas, metrics & thresholds
| Metric / Formula | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| :--- | :--- | :--- | :--- | :--- |
| **Bull Case Stock CAGR (%)** | Bull PAT Growth (25%) @ Bull Exit Multiple (40x) | SJS benchmark = +36.0% CAGR | Upper-bound return potential under optimal execution | [[00:45:21](/transcripts/chk/CHK_Lec13?t=2721)] |
| **Base Case Stock CAGR (%)** | Base PAT Growth (18%) @ Base Exit Multiple (30x) | SJS benchmark = +11.52% CAGR | Baseline expected stock return under standard execution | [[00:45:21](/transcripts/chk/CHK_Lec13?t=2721)] |
| **Bear Case Stock CAGR (%)** | Bear PAT Growth (15%) @ Bear Exit Multiple (25x) | SJS benchmark = +0.79% CAGR | Downside floor return under growth slowdown and multiple contraction | [[00:45:21](/transcripts/chk/CHK_Lec13?t=2721)] |

#### e) Visual aid
**Decision Table: 3-Scenario Payoff Matrix Comparison**

| Scenario Parameter | Bull Case Scenario | Base Case Scenario | Bear Case Scenario | Timestamp |
| :--- | :--- | :--- | :--- | :--- |
| **SJS Annual PAT Growth (%)** | 25.0% | 18.0% | 15.0% | [[00:44:59](/transcripts/chk/CHK_Lec13?t=2699)] |
| **SJS Exit P/E Multiple** | 40.0x | 30.0x | 25.0x | [[00:44:59–00:45:21](/transcripts/chk/CHK_Lec13?t=2699)] |
| **SJS Projected FY28 PAT** | ₹244.0 crore | ₹218.0 crore | ₹207.0 crore | [[00:45:21](/transcripts/chk/CHK_Lec13?t=2721)] |
| **SJS Projected Stock CAGR** | **+36.0% CAGR** | **+11.52% CAGR** | **+0.79% CAGR** | [[00:45:21](/transcripts/chk/CHK_Lec13?t=2721)] |
| **Interarch Revenue Growth** | 30.0% | 20.0% | 15.0% | [[00:46:33](/transcripts/chk/CHK_Lec13?t=2793)] |
| **Interarch Exit P/E Multiple**| 35.0x | 25.0x | 20.0x | [[00:46:33](/transcripts/chk/CHK_Lec13?t=2793)] |

#### f) Speaker's cautions & common mistakes
* **Skipping Manual Excel Spreadsheet Modeling**: Jumping straight to automated scenario calculators without first building line-by-line manual models in Excel to understand operational P&L drivers [[00:48:06](/transcripts/chk/CHK_Lec13?t=2886)].
* **Anchor Bias on Exit Multiples**: Assigning unrealistically high exit P/E multiples in bear cases without modeling multiple compression when earnings growth decelerates [[00:47:10](/transcripts/chk/CHK_Lec13?t=2830)].

---

Batch complete: Batch 2 = Stages 5–7 [[00:28:31–00:48:40](/transcripts/chk/CHK_Lec13?t=1711)]. Next: Stages 8–11

### STAGE 8: Student Homework Assignment & Guidance Hints [[00:48:40–00:52:37](/transcripts/chk/CHK_Lec13?t=2920)] [TVGP: Growth]

#### a) What this stage answers
How do investors apply management guidance, volume growth targets, and capacity expansions to build forward P&L models and scenario matrices for unstudied companies?

#### b) Detailed explanation
Applying forward financial modeling techniques across new businesses requires extracting explicit guidance from company presentations, quarterly con calls, or credit rating reports to populate top-line, margin, and valuation parameters [[00:48:40–00:52:37](/transcripts/chk/CHK_Lec13?t=2920)].

##### Manorama Industries Homework Framework
* **Top-Line Guidance**: Management guided for sales of ₹1,300 crore in the current year, followed by 30% revenue growth in FY27 as new capital expenditure goes live, and 25%–30% growth in FY28 [[00:48:48](/transcripts/chk/CHK_Lec13?t=2928)].
* **EBITDA Margin Guidance**: Guided EBITDA margin stands at 27% [[00:48:48](/transcripts/chk/CHK_Lec13?t=2928)].
* **Valuation Task**: Apply a 27% EBITDA margin to projected FY27 and FY28 sales, calculate projected PAT on FY28, calculate forward growth rates and PEG ratios, and stress-test returns across a 3-scenario matrix using exit P/E multiples of 35x (Bull), 30x (Base), and 25x (Bear) [[00:48:48](/transcripts/chk/CHK_Lec13?t=2928)].

##### Gravita India Homework Framework
* **Capacity Expansion Guidance**: Recycling capacity is expanding from 333,000 tons to 733,000 tons [[00:48:48](/transcripts/chk/CHK_Lec13?t=2928)].
* **Volume & Margin Guidance**: Management guided for annual volume growth exceeding 25% per annum alongside an 11% EBITDA margin [[00:48:48–00:49:59](/transcripts/chk/CHK_Lec13?t=2928)].
* **Valuation Task**: Multiply volume growth and margin guidance to compute EBITDA and PAT, and evaluate risk-reward odds using exit P/E multiples of 35x (Bull), 25x (Base), and 20x (Bear) [[00:49:59](/transcripts/chk/CHK_Lec13?t=2999)].
* **P/E Multiple Benchmarking Rationale**: Historical P/E multiples guide exit multiple selection. Gravita historically traded at a peak P/E of 67x, while Interarch Building Products traded at a peak P/E of 34x [[00:49:59–00:50:28](/transcripts/chk/CHK_Lec13?t=2999)]. Setting conservative exit multiples (20x–35x) below past valuation peaks ensures a margin of safety [[00:49:59–00:50:28](/transcripts/chk/CHK_Lec13?t=2999)].

##### Fallback Heuristic for Unguided Companies
When evaluating companies that provide no explicit forward management guidance, extract forward growth rate assumptions directly from credit rating agency rationale documents (e.g., CRISIL or ICRA rating reports) [[00:50:44–00:51:19](/transcripts/chk/CHK_Lec13?t=3044)].

#### c) Examples & case studies
* **Example**: Manorama Industries Forward Valuation Assignment [[00:48:48](/transcripts/chk/CHK_Lec13?t=2928)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Structuring a forward P&L model from explicit management guidance.
  * **Data/details**: Current year sales = ₹1,300 Cr; FY27 sales growth guidance = 30%; FY28 sales growth guidance = 25%–30%; EBITDA margin guidance = 27%; Scenario exit P/E multiples = 35x (Bull), 30x (Base), 25x (Bear).
  * **Walkthrough**: Apply 30% top-line growth to ₹1,300 Cr current sales to project FY27 sales (₹1,690 Cr), then apply 25%–30% growth to project FY28 sales (~₹2,112–2,197 Cr). Apply 27% EBITDA margin, deduct depreciation and tax to calculate FY28 PAT, and evaluate 3-scenario returns.
  * **Takeaway**: Explicit top-line and margin guidance allows straightforward multi-year PAT and PEG calculation.
* **Example**: Gravita India Capacity Expansion Model [[00:48:48–00:50:28](/transcripts/chk/CHK_Lec13?t=2928)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Translating physical capacity expansion into forward financial projections.
  * **Data/details**: Capacity expansion = 333,000 tons to 733,000 tons; Volume growth guidance = >25% per annum; EBITDA margin = 11%; Scenario exit P/E multiples = 35x (Bull), 25x (Base), 20x (Bear); Historical peak P/E = 67x.
  * **Walkthrough**: Model top-line sales growth driven by >25% annual volume expansion, apply 11% EBITDA margin, and test exit multiples (20x–35x) anchored below historical peak P/E (67x).
  * **Takeaway**: Capacity expansions validate top-line volume growth assumptions.

#### d) Formulas, metrics & thresholds
| Metric / Formula | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| :--- | :--- | :--- | :--- | :--- |
| **Manorama FY27 Sales Projection** | Current Sales (₹1,300 Cr) × 1.30 (+30% guidance) | ₹1,690 Cr projected FY27 sales | Top-line sales base as new capex goes live | [[00:48:48](/transcripts/chk/CHK_Lec13?t=2928)] |
| **Gravita Capacity Expansion Ratio** | Target Capacity ÷ Base Capacity | 733,000 tons ÷ 333,000 tons = 2.2x capacity | Physical capacity runway supporting >25% volume CAGR | [[00:48:48](/transcripts/chk/CHK_Lec13?t=2928)] |
| **Conservative Exit Multiple Selection** | Historical Peak P/E × Safety Discount | Benchmark: Discount peak P/E (e.g., 67x → 35x max) | Prevents overestimating exit valuations in bull scenarios | [[00:49:59–00:50:28](/transcripts/chk/CHK_Lec13?t=2999)] |

#### e) Visual aid
**Decision Checklist: Assigning Model Parameters for New Companies**
* [x] **Check Management Guidance**: Search con call transcripts for explicit top-line growth and EBITDA margin targets (e.g., Manorama 30% sales growth, 27% margin) [[00:48:48](/transcripts/chk/CHK_Lec13?t=2928)].
* [x] **Check Capacity Additions**: Verify physical capex additions and volume expansion targets (e.g., Gravita 333k to 733k tons) [[00:48:48](/transcripts/chk/CHK_Lec13?t=2928)].
* [x] **Fallback to Credit Rating Reports**: If management provides no guidance, extract forward revenue CAGRs from CRISIL/ICRA credit reports [[00:51:19](/transcripts/chk/CHK_Lec13?t=3079)].
* [x] **Review Historical P/E Range**: Identify historical peak P/E multiples (e.g., Gravita 67x, Interarch 34x) [[00:49:59–00:50:28](/transcripts/chk/CHK_Lec13?t=2999)].
* [x] **Set Scenario Exit Multiples**: Set Bull, Base, and Bear exit multiples conservatively below past peaks (e.g., 35x Bull, 25x Base, 20x Bear) [[00:49:59](/transcripts/chk/CHK_Lec13?t=2999)].

#### f) Speaker's cautions & common mistakes
* **Over-Estimating Exit Multiples**: Modeling exit P/E multiples at historical valuation peaks (e.g., using 67x P/E for Gravita) rather than discounting them conservatively (e.g., 20x–35x) to build in a margin of safety [[00:50:28](/transcripts/chk/CHK_Lec13?t=3028)].

---

### STAGE 9: Automated AI Financial Modeling via Claude Custom Prompts [[00:52:37–00:59:46](/transcripts/chk/CHK_Lec13?t=3157)] [TVGP: Valuation]

#### a) What this stage answers
How can investors leverage custom prompts in Claude LLM to automatically generate formula-linked Excel models from quarterly financial statements and con call transcripts?

#### b) Detailed explanation
Automating financial modeling using Large Language Models (LLMs) requires feeding structured source documents into AI platforms designed for formulaic math [[00:52:37–00:59:46](/transcripts/chk/CHK_Lec13?t=3157)].

##### Limitations of Standard AI Tools (ChatGPT / Gemini)
Standard LLMs like ChatGPT or Gemini often produce static, non-formula-linked table outputs. These outputs lack consistency, cannot be customized dynamically, and frequently fail when attempting to construct multi-row financial spreadsheets [[00:52:37](/transcripts/chk/CHK_Lec13?t=3157), [01:03:33](/transcripts/chk/CHK_Lec13?t=3813)].

##### The Claude Financial Modeling Workflow
Speaker Naman introduced a specialized custom prompt for Claude that compiles complete, formula-linked Excel financial models [[00:52:37](/transcripts/chk/CHK_Lec13?t=3157)]:
1. **Required Input Documents**:
   * Latest quarterly or annual financial results (PDF or screenshot of the consolidated income statement) [[00:53:17](/transcripts/chk/CHK_Lec13?t=3197), [00:55:05](/transcripts/chk/CHK_Lec13?t=3305)].
   * Latest earnings conference call transcript (PDF) [[00:52:37](/transcripts/chk/CHK_Lec13?t=3157), [00:53:17](/transcripts/chk/CHK_Lec13?t=3197)].
2. **AI Processing Logic**: Claude extracts historical financial actuals, summarizes management's qualitative con call commentary, explains the underlying logic behind each assumption, and builds an interconnected 2–3 year forward P&L model [[00:53:17–00:53:48](/transcripts/chk/CHK_Lec13?t=3197)].
3. **Editable Blue Cells & Dynamic Sensitivity**: Output models feature blue-highlighted assumption cells (e.g., sales growth %, tax rate %, EBITDA margin %). Changing any blue cell dynamically updates all linked downstream rows, including PBT, PAT, and scenario returns across Bull, Base, and Bear cases [[00:54:09](/transcripts/chk/CHK_Lec13?t=3249), [00:58:31](/transcripts/chk/CHK_Lec13?t=3511), [00:59:14](/transcripts/chk/CHK_Lec13?t=3554)].

##### Live Case Demonstration: Interarch Building Products
Uploading Interarch's Q2 financial statement screenshot and con call transcript into Claude generated a complete 3-year formula-linked model within minutes [[00:54:29–00:58:31](/transcripts/chk/CHK_Lec13?t=3269)]. The AI model projected FY28 PAT at ~₹191 crore (based on conservative automated assumptions) versus the speaker's manual assumption of ₹210–220 crore [[00:57:52–00:58:31](/transcripts/chk/CHK_Lec13?t=3472)].

#### c) Examples & case studies
* **Example**: Claude AI Custom Prompt Financial Model on Interarch Building Products [[00:52:37–00:59:14](/transcripts/chk/CHK_Lec13?t=3157)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Automating a formula-linked Excel model using custom LLM prompts.
  * **Data/details**: Inputs uploaded = Interarch Q2 financial results screenshot + Q2 con call transcript PDF; Output = 3-year formula-linked Excel sheet with blue editable assumption cells; AI-projected PAT = ~₹191 crore vs manual analyst assumption = ₹210–220 crore.
  * **Walkthrough**: Upload financial statements and con call transcripts into Claude, execute the custom prompt, inspect the AI's con call summary and blue assumption cells, and adjust revenue growth or tax parameters to auto-update scenario outcomes.
  * **Takeaway**: AI automates spreadsheet construction, allowing analysts to focus on refining underlying qualitative assumptions.

#### d) Formulas, metrics & thresholds
| Metric / Formula | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Model Projection Horizon** | Maximum forward forecasting window | 2 to 3 years max (restrict cyclical businesses to 2 years) | Prevents compounding errors in cyclical sector models | [[00:53:17](/transcripts/chk/CHK_Lec13?t=3197)] |
| **Consolidated vs Standalone File Selection** | Entity selection for AI document upload | Always upload Consolidated financial result PDFs | Captures full financial impact of operating subsidiaries | [[00:55:05](/transcripts/chk/CHK_Lec13?t=3305), [01:02:05](/transcripts/chk/CHK_Lec13?t=3725)] |

#### e) Visual aid
**Text Flow Diagram: Claude AI Financial Modeling Workflow**
`Upload Consolidated Results PDF/Screenshot + Con Call Transcript PDF` → `Execute Custom Claude Financial Modeling Prompt` → `AI Synthesizes Con Call Insights & Explains Assumptions` → `AI Generates Interconnected, Formula-Linked Excel Model` → `User Refines Blue Assumption Cells (Sales Growth %, Tax %, Margins)` → `Automated Real-Time Scenario P&L & PAT Output`

#### f) Speaker's cautions & common mistakes
* **Prompting Without Source Files**: Asking LLMs to generate financial models directly from the internet without providing source PDFs/screenshots, introducing severe hallucination risks and confusing standalone vs. consolidated metrics [[00:55:05–00:55:27](/transcripts/chk/CHK_Lec13?t=3305)].
* **Over-Extending Forward Years on Cyclical Stocks**: Requesting AI models beyond 2 years for highly cyclical businesses, compounding forecasting errors [[00:53:17](/transcripts/chk/CHK_Lec13?t=3197)].

---

### STAGE 10: AI Modeling for Banking & Financial Institutions (ROA Tree Framework) [[00:59:46–01:03:33](/transcripts/chk/CHK_Lec13?t=3586)] [TVGP: Valuation]

#### a) What this stage answers
How do you construct an automated AI financial model for banks and NBFCs using a specialized Return on Assets (ROA) tree framework?

#### b) Detailed explanation
Financial institutions (banks and NBFCs) cannot be evaluated using standard non-financial P&L metrics like EBITDA margins or COGS. They require specialized balance sheet and Return on Assets (ROA) tree modeling [[00:59:46–01:03:33](/transcripts/chk/CHK_Lec13?t=3586)].

##### Structural Differences in Banking Models
Modeling a bank or NBFC requires deconstructing its earnings via an ROA tree:
* **Core Drivers**: Net Interest Margin (NIM), Cost of Funds, Yield on Advances, Fee/Other Income as % of Assets, Operating Expenses (Opex) as % of Assets, Provisions/Credit Costs as % of Assets, Return on Assets (ROA), Return on Equity (ROE), and Leverage Multipliers [[00:59:46–01:01:32](/transcripts/chk/CHK_Lec13?t=3586)].
* **Valuation Anchor**: Price-to-Book Value (P/BV) multiples rather than P/E multiples [[01:01:32](/transcripts/chk/CHK_Lec13?t=3692)].

##### Specialized Banking Prompt & Workflow
To model financial institutions, Speaker Naman developed a dedicated banking ROA tree prompt in Claude [[00:59:46–01:00:24](/transcripts/chk/CHK_Lec13?t=3586)]:
1. **Required Input Documents**: Consolidated quarterly financial results PDF and investor presentation / earnings con call transcript PDF [[01:00:24–01:01:32](/transcripts/chk/CHK_Lec13?t=3624)].
2. **Execution**: The prompt instructs Claude to deconstruct balance sheet growth, yield spreads, asset quality provisions, and net interest income, compiling an ROA tree and book value projection matrix [[01:01:32–01:02:37](/transcripts/chk/CHK_Lec13?t=3692)].

##### Live Case Demonstration: CreditAccess Grameen
Uploading CreditAccess Grameen's Q3 FY26 financial results PDF and investor presentation into Claude generated a complete ROA tree and book value projection spreadsheet with customizable assumptions within 4–5 minutes [[01:00:24–01:02:37](/transcripts/chk/CHK_Lec13?t=3624)].

#### c) Examples & case studies
* **Example**: CreditAccess Grameen Banking ROA Tree AI Model [[00:59:46–01:02:37](/transcripts/chk/CHK_Lec13?t=3586)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Generating an ROA tree financial model for a microfinance NBFC.
  * **Data/details**: Inputs uploaded = CreditAccess Grameen Q3 FY26 financial results PDF + investor presentation PDF; Output = ROA tree Excel model with balance sheet assumptions, asset quality metrics, credit costs, and Price-to-Book projections.
  * **Walkthrough**: Load consolidated PDFs into Claude, run the banking ROA prompt, and review the generated ROA tree breakdown (NIM − Opex − Credit Costs = ROA).
  * **Takeaway**: Specialized banking prompts allow automated balance sheet and book value modeling for financial lenders.

#### d) Formulas, metrics & thresholds
| Metric / Formula | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| :--- | :--- | :--- | :--- | :--- |
| **Return on Assets (ROA) Tree** | $\text{NIM} + \text{Other Income} - \text{Opex %} - \text{Credit Costs %}$ | Core profitability equation for banks and NBFCs | Deconstructs net yield generated per unit of total assets | [[00:59:46–01:01:32](/transcripts/chk/CHK_Lec13?t=3586)] |
| **Book Value Multiple (P/BV)** | Current Market Price ÷ Book Value Per Share | Primary valuation metric for financial lenders | Measures premium/discount paid relative to net asset backing | [[01:01:32](/transcripts/chk/CHK_Lec13?t=3692)] |

#### e) Visual aid
**Text Flow Diagram: ROA Tree Deconstruction Flow for Lenders**
`Yield on Advances − Cost of Funds` → `Net Interest Margin (NIM %)` → `+ Non-Interest/Fee Income %` → `− Operating Expenses (Opex %)` → `− Provisioning & Credit Costs %` → `Return on Assets (ROA %)` → `× Leverage (Assets ÷ Equity)` → `Return on Equity (ROE %) & Book Value Growth`

#### f) Speaker's cautions & common mistakes
* **Applying Non-Financial Metrics to Banks**: Trying to model banks or NBFCs using standard manufacturing P&L structures (e.g., EBITDA or gross margins) instead of ROA trees, credit cost provisioning, and book value multiples [[00:59:46](/transcripts/chk/CHK_Lec13?t=3586), [01:01:32](/transcripts/chk/CHK_Lec13?t=3692)].
* **Uploading Standalone Statements**: Uploading standalone financial PDFs for financial holding companies or lenders with operating subsidiaries, omitting subsidiary credit risks and consolidated asset growth [[01:02:05](/transcripts/chk/CHK_Lec13?t=3725)].

---

### STAGE 11: Upcoming Course Plan, DCF/Reverse DCF Preview & Concluding Guidance [[01:03:33–01:10:48](/transcripts/chk/CHK_Lec13?t=3813)] [TVGP: Valuation]

#### a) What this stage answers
How do investors calculate implied market growth expectations using Reverse DCF, and what behavioral finance principles maintain discipline during bear market drawdowns?

#### b) Detailed explanation
Advanced equity evaluation requires pairing quantitative valuation tools (e.g., Reverse DCF) with behavioral discipline during market corrections [[01:03:33–01:10:48](/transcripts/chk/CHK_Lec13?t=3813)].

##### Reverse DCF Mechanics & Purpose
Discounted Cash Flow (DCF) models can be complex to construct manually in spreadsheets [[01:04:15](/transcripts/chk/CHK_Lec13?t=3855)]. However, utilizing the automated Reverse DCF tool on Stock Scans simplifies valuation analysis [[01:04:45](/transcripts/chk/CHK_Lec13?t=3885)]:
* **Core Function**: Given a targeted hurdle rate of return (e.g., 12% required annual return), Reverse DCF calculates the exact implied PAT growth rate that is currently priced into the stock price [[01:04:45](/transcripts/chk/CHK_Lec13?t=3885)].
* **Investment Decision Rule**: If the market price implies a low required PAT growth rate (e.g., 8%) for a company capable of growing PAT at 20%, a substantial margin of safety exists [[01:04:45](/transcripts/chk/CHK_Lec13?t=3885)].

##### Bear Market Psychology & Behavioral Discipline
Speaker's View: "Real money is made in a bear market only" [real money is made in a bear market only] [[01:10:13](/transcripts/chk/CHK_Lec13?t=4213)]. During market drawdowns, panic and fear cause investors to sell high-quality businesses that were previously considered attractive at higher valuations [[01:10:13](/transcripts/chk/CHK_Lec13?t=4213)]. 

To build emotional quotient (EQ) and resist panic selling, investors should study behavioral finance principles. Speaker recommendation: Read James Montier's 150-page book, *"The Little Book of Behavioral Finance"*, to navigate bear market anxiety and capitalize on mispriced opportunities [[01:10:13](/transcripts/chk/CHK_Lec13?t=4213)].

##### Budget Incentive Impact on Payment Companies
Policy changes highlighted in annual government budgets can create strong operational tailwinds. For instance, budget allocations increased government incentives for digital payments companies by 2.5x (even after the PIDF scheme), significantly boosting their revenue outlook [[01:10:48](/transcripts/chk/CHK_Lec13?t=4248)].

##### Upcoming Live Sector Sessions & Offline Meetups
* **Upcoming Live Sector Case Studies**: Commercial Vehicles (CVs), Aerospace (Sansehra Engineering), Gold Lenders, CDMO/Recyclers (Gravita India), IT/Software (Intellect Design), and Power equipment (TD Power) [[01:05:48–01:06:49](/transcripts/chk/CHK_Lec13?t=3948)].
* **In-Person SOIC Meetups**: Scheduled across Mumbai (28th), Bangalore, Delhi, and Chennai (noting Chennai hall pricing constraint: 200-person halls quoted at ₹12 lakh / ₹5,000–6,000 per person due to wedding season demand) [[01:07:46–01:08:45](/transcripts/chk/CHK_Lec13?t=4066)].

#### c) Examples & case studies
* **Example**: Stock Scans Reverse DCF Tool Demonstration [[01:04:45–01:05:17](/transcripts/chk/CHK_Lec13?t=3885)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Calculating implied market growth expectations using Reverse DCF.
  * **Data/details**: Required hurdle rate = 12% target return; Input = current stock price and cash flow base; Output = implied annual PAT growth percentage expected by the market.
  * **Walkthrough**: Input the current stock price and set the target return hurdle at 12%. The tool computes the implied growth rate embedded in the valuation, allowing analysts to compare implied growth against grounded management guidance.
  * **Takeaway**: Reverse DCF reveals what growth rate the market is pricing into a stock.
* **Example**: Digital Payments Budget Incentive Tailwind [[01:10:48](/transcripts/chk/CHK_Lec13?t=4248)] [Slide N: image not legible — content taken from transcript]
  * **Context**: Identifying regulatory and budget policy tailwinds.
  * **Data/details**: PIDF scheme + Union Budget policy update → digital payment company government incentives increased by 2.5x.
  * **Walkthrough**: Assess budgetary announcements to identify sectors benefiting from direct subsidy or incentive expansions.
  * **Takeaway**: Regulatory and budgetary incentive expansions provide policy-driven growth tailwinds.

#### d) Formulas, metrics & thresholds
| Metric / Formula | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| :--- | :--- | :--- | :--- | :--- |
| **Reverse DCF Implied Growth Rate** | Growth rate parameter where $\text{DCF Value} = \text{Current Market Price}$ | Target hurdle rate = 12.0% required annual return | Quantifies growth expectation currently priced in by market | [[01:04:45](/transcripts/chk/CHK_Lec13?t=3885)] |
| **Digital Payment Incentive Multiplier** | Post-Budget Incentive ÷ Pre-Budget Incentive | 2.5x increase in government subsidy incentives | Quantifies policy tailwind for payment aggregators | [[01:10:48](/transcripts/chk/CHK_Lec13?t=4248)] |

#### e) Visual aid
**Decision Checklist: Navigating Bear Markets & Evaluating New Ideas**
* [x] **Calculate Implied Market Growth**: Run Reverse DCF at a 12% hurdle rate to determine priced-in growth expectations [[01:04:45](/transcripts/chk/CHK_Lec13?t=3885)].
* [x] **Check Policy & Budget Tailwinds**: Identify government subsidy or incentive increases (e.g., 2.5x payment incentive boost) [[01:10:48](/transcripts/chk/CHK_Lec13?t=4248)].
* [x] **Maintain Behavioral EQ**: Avoid panic selling during drawdowns; re-read behavioral finance literature (James Montier's book) [[01:10:13](/transcripts/chk/CHK_Lec13?t=4213)].
* [x] **Focus on Bear Market Asymmetry**: Identify high-quality growth businesses trading at compressed multiples during broader drawdowns [[01:10:13](/transcripts/chk/CHK_Lec13?t=4213)].

#### f) Speaker's cautions & common mistakes
* **Succumbing to Bear Market Panic**: Allowing emotional fear during market corrections to dictate investment decisions, leading to selling quality businesses at distressed valuations instead of building long-term positions [[01:10:13](/transcripts/chk/CHK_Lec13?t=4213)].
* **Ignoring Priced-In Growth Expectations**: Buying growth stocks without running a Reverse DCF to check whether the stock price already discounts unrealistic growth expectations [[01:04:45](/transcripts/chk/CHK_Lec13?t=3885)].

---

Batch complete: Batch 3 = Stages 8–11 [[00:48:40–01:10:48](/transcripts/chk/CHK_Lec13?t=2920)]. Next: All stages complete.