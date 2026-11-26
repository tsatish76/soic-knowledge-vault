# BS-Lec03 – Step 1A: Skeleton & Lecture Map
## 1. LECTURE HEADER
- **Lecture ID:** BS-Lec03
- **Title:** How Relative Strength Combined with VStop Is Used to Buy Stocks
- **Duration:** [00:00:00–00:16:44]
- **PPT used:** None (transcript only; no matching slide deck PDF in `01_Sources`)
- **Prerequisites referenced:** Volatility Stop (VStop), ADX, Reverse DCF


## 2. KEY LEARNINGS
- **Relative Strength (RS) dual use case:** Relative Strength is used in both momentum investing and value investing to identify stocks or asset classes performing relatively better than a relevant benchmark index or sector peers, distinct from RSI (which is a momentum oscillator) [00:00:00–00:02:32].
- **Three-factor buy confluence:** A buying opportunity aligns when (a) the Comparative Relative Strength (CRS) line diverges upward above the benchmark line, (b) Volatility Stop (VStop) turns green / starts trending upward, and (c) trading volumes are high [00:05:10–00:05:59].
- **Asymmetric Buy vs. Sell roles:** Speaker's view: VStop works for selling/exiting, whereas Relative Strength is primarily a buying and pyramiding-up indicator rather than a selling indicator [00:05:59, 00:10:26].
- **Value & mean-reversion timing:** In deep-value or mean-reversion strategies, once a fundamentally improving business is identified, CRS crossing above the benchmark index signals that technicals have started confirming the turnaround (e.g., Equitas Small Finance Bank and South Indian Bank vs. Bank Nifty) [00:05:10–00:08:11].
- **Pyramiding up during consolidation:** When VStop does not trigger an exit on a compounder (e.g., SRF vs. Nifty 50) but RS shifts to underperformance, the stock may enter consolidation; setting a TradingView alert for when CRS crosses back above the benchmark marks the point to pyramid up [00:08:39–00:09:58].
- **StockEdge RS screening filters:** Under StockEdge Premium Analytics → Price Scans → Relative Strength Scans, three key screens are used: *Relative strength going above zero* (over the last 55 trading days / ~2 months), *Strongly outperforming benchmark index*, and *Increasing relative strength* [00:10:52–00:13:44].
- **Weekly and monthly timeframes for long-term investors:** Long-term investors should evaluate CRS and VStop on weekly and monthly charts (e.g., PB FinTech showing weekly VStop + RS divergence while monthly VStop had not yet triggered a buy; HDFC Bank vs. ICICI Bank diverging upward over 2 months after ~2 years of underperformance) [00:12:16–00:13:15, 00:14:40–00:15:16].
- **TradingView indicator & alert workflow:** Use the TradingView indicator *Comparative Relative Strength* (listed as by `VIT VLKV` [?]), compare against a sector/broad benchmark (e.g., `Nifty Bank` / `Nifty Bees` or `Nifty 50`) or peer stock, and set crossing alerts (pop-up or email) to automate tracking [00:03:41–00:04:41, 00:07:05–00:07:37, 00:16:14].


## 3. LECTURE MAP

| **Stage #** | **Stage Title** | **Timestamp Range** | **Slides** | **Core Concepts** | **Examples/Companies Used** | **TVGP Tag** |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Introduction & Core Concept of Relative Strength | [00:00:00–00:03:03] | None | RS definition for momentum & value investing; RS vs. RSI; outperforming benchmarks & sector peers | Cricket 10 openers analogy; 4 houses in a storm analogy; NASDAQ, S&P 500 | Not TVGP-specific |
| 2 | Applying Comparative Relative Strength on TradingView (Equitas & South Indian Bank) | [00:03:03–00:08:39] | None | TradingView CRS indicator setup; 3-factor buy confluence (RS + VStop + Volume); setting CRS crossing alerts; mean-reversion / deep-value timing | Equitas Small Finance Bank vs. Bank Nifty (`Nifty Bees`); AU Small Finance Bank (mentioned); South Indian Bank (2018–2022) | Not TVGP-specific |
| 3 | Pyramiding Up, Consolidation & Exit Signals (SRF & Dixon) | [00:08:39–00:10:52] | None | Using RS vs. Nifty 50 to spot consolidation and pyramid up when VStop holds; combining Reverse DCF + VStop + RS for exits; VStop for selling vs. RS for buying | SRF vs. Nifty 50 (2018–2022); Dixon Technologies | [TVGP: Valuation] (Reverse DCF reference) |
| 4 | Screening Stocks with Relative Strength on StockEdge | [00:10:52–00:14:40] | None | StockEdge RS Price Scans (55-day RS > 0, strongly outperforming benchmark, increasing RS); weekly vs. monthly chart confirmation; Excel export to TradingView watchlist | Jindal Stainless; Mahindra CI auto [?]; PB FinTech (₹1,290 listing, ₹425/₹384 low); Varun Beverages; Carbohydrate Universal [?] | Not TVGP-specific |
| 5 | Stock-to-Stock Comparison & Session Wrap-Up | [00:14:40–00:16:44] | None | Comparing two peer stocks via CRS on weekly/monthly charts for leadership shifts; 5-point session recap; indicator confirmation & homework | HDFC Bank vs. ICICI Bank (2020–2022+) | Not TVGP-specific |



## 4. CONCEPT FLOW
Stage 1: Core RS Concept (Outperforming Benchmark/Peers) → Stage 2: TradingView CRS Setup + VStop + Volume (Buy Confluence & Alerts for Turnarounds) → Stage 3: RS for Pyramiding Up During Consolidation & Asymmetric Roles (VStop = Sell, RS = Buy/Pyramid) → Stage 4: Systematic Discovery via StockEdge RS Scans (55-day > 0 & Strong Outperformance → TradingView Watchlist) → Stage 5: Stock-to-Stock CRS Comparison (Leadership Shifts on Weekly/Monthly Charts) & Recap


<!-- SOIC_AUDIO_BANNER_START -->
::: info 📝 Lecture Audio Transcript
*Interactive audio transcript will be linked when transcript file is added.*
:::
<!-- SOIC_AUDIO_BANNER_END -->
---

## 5. DETAILED STAGE-BY-STAGE NOTES

## BS-Lec03 – Stage 1: Introduction & Core Concept of Relative Strength  [00:00:00–00:03:03]
### a) What this stage answers
What is Relative Strength (RS), how does it differ from RSI, and why is it useful for both momentum and value investors?
### b) Detailed explanation
#### Defining Relative Strength for Momentum & Value
Opening the class on Relative Strength, the speaker clarifies that **Relative Strength (RS)** is used in **both momentum investing and value investing** [00:00:00–00:00:29]. It measures how a stock or asset class performs relative to the broader market, a benchmark index (such as NASDAQ or S&P 500 `"SNB 500"` in the US, or Nifty/sector indices in India), or peer stocks within the same sector [00:00:29, 00:02:32].
#### RS vs. RSI
The speaker explicitly distinguishes **Relative Strength (RS)** from **RSI (Relative Strength Index)**: **RSI** is a momentum oscillator, whereas **RS** is a comparative strategy identifying stocks outperforming a benchmark or peers [00:01:56–00:02:32]. (An Investopedia definition of Relative Strength is referenced on screen [00:01:56–00:02:32].)
### c) Examples & case studies
- **Example 1: 10 Cricket Openers Analogy**  [00:00:29–00:01:18] [Slide not available]

  - **Context**: Explaining relative comparison across peers.
  - **Data/details**: 10 openers with batting averages of 70, 50, 40, 20, 60, etc.
  - **Walkthrough**: Comparing all 10 side by side immediately identifies the opener averaging 70 runs per innings as the strongest relative performer.
  - **Takeaway**: Relative Strength ranks candidates against peers rather than judging them in isolation.

- **Example 2: Four Houses in a Storm Analogy**  [00:01:18–00:01:56] [Slide not available]

  - **Context**: Showing how market downturns reveal relative resilience.
  - **Data/details**: 4 houses hit by a storm — 2 collapse, 1 partly breaks, 1 stands intact.
  - **Walkthrough**: The house that remains standing has the strongest foundation relative to the others.
  - **Takeaway**: Stocks that hold up better during market storms demonstrate superior relative strength.
### d) Formulas, metrics & thresholds (if any)
None stated.
### e) Visual aid
None needed.
### f) Speaker's cautions & common mistakes
- Confusing **Relative Strength (RS)** (benchmark/peer outperformance) with **RSI** (a momentum oscillator) [00:01:56].


## BS-Lec03 – Stage 2: Applying Comparative Relative Strength on TradingView (Equitas & South Indian Bank)  [00:03:03–00:08:39]
### a) What this stage answers
How do you set up Comparative Relative Strength (CRS) on TradingView, combine it with V-Stop and volume for buying, and automate alerts?
### b) Detailed explanation
#### TradingView CRS Setup & 3-Factor Buy Confluence
On **TradingView**, add the indicator **`Comparative Relative Strength`**, then open its settings and select a benchmark index—such as **Nifty Bank / Bank Nifty** (`Nifty Bees`) [00:03:41–00:04:41].

- **Gray line above blue line (trending upward)**: Stock is **outperforming** the benchmark [00:04:41–00:05:10].
- **Gray line below blue line**: Stock is **underperforming** the benchmark [00:04:41].

The speaker's **3-factor buy confluence** combines [00:05:10–00:06:30]:

- **CRS diverging upward** above the benchmark line
- **V-Stop trending upward** (green)
- **High trading volumes** confirming institutional participation

Crucially, **RS is a buying indicator, NOT a selling indicator** [00:05:59].
#### Automating Alerts for Mean-Reversion / Deep-Value Turnarounds
For deep-value or mean-reversion strategies, once you identify a fundamentally improving business, click the **clock (Alert)** icon on TradingView and set a crossing alert (`CRS Bank Nifty` crossing, via pop-up or dedicated email) [00:07:05–00:08:11]. You receive a notification the moment technicals confirm the fundamental turnaround [00:07:37].
### c) Examples & case studies
- **Example 1: Equitas Small Finance Bank vs. Bank Nifty**  [00:03:03–00:05:59]

  - **Context**: Timing a turnaround entry after governance uncertainty clears.
  - **Data/details**: Faced fundamental headwinds when its MD resigned; underperformed Bank Nifty (CRS below blue line) until the MD chose to continue and tailwinds emerged.
  - **Walkthrough**: V-Stop triggered a buy, volumes surged, and CRS crossed back above the blue Bank Nifty line—all 3 buy signals aligned.
  - **Takeaway**: Wait for CRS divergence + V-Stop + volume rather than catching a falling knife during underperformance.

- **Example 2: South Indian Bank vs. Bank Nifty (2018–2022)**  [00:05:59–00:08:39]

  - **Context**: Avoiding 4 years of dead money before a deep-value turnaround.
  - **Data/details**: From **2018 to 2022**, CRS gave no sustained buy signal (save one brief blip) until it decisively crossed above Bank Nifty alongside green V-Stop and high volumes.
  - **Takeaway**: Pairing CRS alerts with deep-value research prevents sitting in underperformers for years.
### d) Formulas, metrics & thresholds (if any)

| **Metric/Formula/Screen Filter** | **Definition or Expression** | **Speaker's benchmark/threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| 3-Factor Buy Confluence | `CRS > Benchmark` + `V-Stop Green` + `High Volume` | All 3 aligned | High-probability buy setup (especially for turnarounds) | [00:05:10–00:06:30] |

### e) Visual aid
```
3-Factor Buy Confluence:
  1. CRS Line Crosses Above Benchmark (e.g., Bank Nifty)
  2. V-Stop Turns Green / Trends Upward
  3. High Volume Confirms Institutional Buying
     → Action: Buy / Set TradingView Email Alert
```
### f) Speaker's cautions & common mistakes
- Using Relative Strength as a standalone selling indicator instead of a buying/confirmation tool [00:05:59].


## BS-Lec03 – Stage 3: Pyramiding Up, Consolidation & Exit Signals (SRF & Dixon)  [00:08:39–00:10:52]  [TVGP: Valuation]
### a) What this stage answers
How does Relative Strength guide pyramiding up during compounder consolidations, and how does it contrast with V-Stop on exits?
### b) Detailed explanation
#### Pyramiding Up When V-Stop Holds
For high-quality compounders where **V-Stop** has **not** triggered an exit, switching CRS to compare against **Nifty 50** (when no sector index exists, e.g., chemicals) shows when the stock enters relative consolidation after multi-year outperformance [00:08:39–00:09:28]. Setting an alert for when CRS crosses back above Nifty 50 marks the exact point to **pyramid up** into the existing winner [00:09:03–00:09:58]. (The speaker pauses at [00:09:28] to ask learners to write down **5 key learnings** so far.)
#### Asymmetric Roles: V-Stop Sells, RS Buys/Pyramids
Speaker's view: **V-Stop works for selling**, whereas **RS is used for buying and pyramiding up** [00:10:26]. When Reverse DCF valuations become extreme alongside V-Stop exit triggers and high-volume selling, RS simultaneously confirms massive underperformance [00:09:58–00:10:26].
### c) Examples & case studies
- **Example 1: SRF vs. Nifty 50 (2018–2022)**  [00:08:39–00:09:58]

  - **Context**: Using CRS for pyramiding when V-Stop stays intact.
  - **Data/details**: SRF outperformed Nifty 50 for ~4 years (**2018–2022**) before shifting to underperformance while V-Stop remained on hold.
  - **Takeaway**: Hold core position via V-Stop, and set a CRS-above-Nifty-50 alert to pyramid up when outperformance resumes.

- **Example 2: Dixon Technologies (Reverse DCF + V-Stop + RS)**  [00:09:58–00:10:26]

  - **Context**: Full exit alignment across valuation and technicals.
  - **Data/details**: **Reverse DCF** showed **15–20 years** of growth already priced in (`[TVGP: Valuation]`), **V-Stop** triggered an exit, high-volume selling hit, and CRS showed massive underperformance vs. Nifty.
  - **Takeaway**: Combine Reverse DCF + V-Stop for exits, and reserve RS for entries and pyramiding.
### d) Formulas, metrics & thresholds (if any)
None stated.
### e) Visual aid
None needed.
### f) Speaker's cautions & common mistakes
- Ignoring Reverse DCF overvaluation (15–20 years of growth baked in) when V-Stop and high-volume selling trigger [00:09:58–00:10:26].


## BS-Lec03 – Stage 4: Screening Stocks with Relative Strength on StockEdge  [00:10:52–00:14:40]
### a) What this stage answers
How can investors systematically discover outperforming stocks using StockEdge's Relative Strength scans and TradingView confirmation?
### b) Detailed explanation
#### StockEdge Relative Strength Scans
Logging into **StockEdge** (Premium Analytics → **Price Scans** → **Relative Strength Scans**), the speaker highlights three discovery screens [00:10:52–00:14:10]:

- **Relative strength going above zero**: Over the last **55 trading days** (~2 months), flags stocks turning positive vs. the index [00:11:28].
- **Strongly outperforming benchmark index**: Highlights sustained multi-year outperformers (allows toggling constant dates) [00:11:28–00:14:10].
- **Increasing relative strength**: Secondary momentum scan (no qualifying stocks at the time of demo) [00:13:44].

Export the filtered list to **Excel** and upload it as a watchlist into **TradingView** to check Weekly and Monthly V-Stop + RS charts [00:14:10–00:14:40]. Even if Weekly RS and Weekly V-Stop turn positive, **do not treat a stock as a full Monthly buy until Monthly V-Stop also triggers** [00:12:16–00:13:15].
### c) Examples & case studies
- **Example 1: PB FinTech (Weekly vs. Monthly Signal Mismatch)**  [00:12:03–00:13:15]

  - **Context**: Checking a StockEdge scan hit on TradingView across Weekly and Monthly timeframes.
  - **Data/details**: Listed at **₹1,290**, fell to **₹425** / **₹384** low; Weekly V-Stop and Weekly RS turned upward, and Monthly RS crossed Nifty for the first time since listing—yet **Monthly V-Stop had NOT given a buy signal**.
  - **Takeaway**: Confirm Monthly V-Stop alongside RS divergence before calling a full long-term buy.

- **Example 2: Jindal Stainless, Mahindra CIE Auto, Varun Beverages & Carborundum Universal ("Carbohydrate Universal" [?])**  [00:11:28–00:14:10]

  - **Context**: Live hits on *Strongly outperforming benchmark index*.
  - **Data/details**: **Varun Beverages** appeared consistently for **2–3 years**; **Carborundum Universal** appeared for a long stretch; **Jindal Stainless** and **Mahindra CIE Auto** (`"Mahindra CI auto"`) also surfaced.
  - **Takeaway**: Persistent appearance in StockEdge's RS outperformance scan flags durable fundamental winners.
### d) Formulas, metrics & thresholds (if any)

| **Metric/Formula/Screen Filter** | **Definition or Expression** | **Speaker's benchmark/threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| StockEdge RS > 0 Scan | Relative strength crossing above zero | Last **55 trading days** (~2 months) | Catches early turnaround/momentum shifts | [00:11:28] |

### e) Visual aid
```
StockEdge (Price Scans → RS > 0 [55d] / Strongly Outperforming)
   ↓
Export to Excel → Upload Watchlist to TradingView
   ↓
Verify Weekly & Monthly V-Stop + CRS + ADX Before Buying
```
### f) Speaker's cautions & common mistakes
- Buying immediately on a Weekly RS/V-Stop turn when Monthly V-Stop has not yet confirmed a buy (e.g., PB FinTech) [00:12:43–00:13:15].


## BS-Lec03 – Stage 5: Stock-to-Stock Comparison & Session Wrap-Up  [00:14:40–00:16:44]
### a) What this stage answers
How can CRS compare two individual peer stocks to spot leadership shifts, and what are the core takeaways of the session?
### b) Detailed explanation
#### Peer-to-Peer CRS Comparison
Beyond index benchmarks, CRS can compare **one stock directly against another stock** on Weekly or Monthly charts to detect sector leadership shifts [00:14:40–00:15:16].
#### 5-Point Recap & Indicator Confirmation
The speaker summarizes five core learnings: (1) what RS is, (2) comparing RS to indices and peer stocks, (3) combining RS with V-Stop to buy, (4) filtering stocks on StockEdge, and (5) setting CRS crossing alerts [00:15:16–00:15:44]. Confirming the exact TradingView indicator name—**`Comparative Relative Strength`** (listed as by `VIT VLKV` `[?]`)—the speaker asks learners to post **"yes"** and write down their **5 key learnings** in the comments [00:15:44–00:16:44].
### c) Examples & case studies
- **Example: HDFC Bank vs. ICICI Bank (Leadership Shift Check)**  [00:14:40–00:15:16]
  - **Context**: Using peer-to-peer CRS on Weekly/Monthly charts.
  - **Data/details**: Since **2020** (~2 years), HDFC Bank underperformed ICICI Bank; over the last **2 months**, the CRS line diverged upward in HDFC Bank's favor.
  - **Takeaway**: Stock-to-stock CRS spots potential leadership rotation between banking peers.
### d) Formulas, metrics & thresholds (if any)
None stated.
### e) Visual aid
None needed.
### f) Speaker's cautions & common mistakes
None stated.

Batch complete: 1-5.

---

# BS-Lec03 – Step 1C: Master Lists, Self-Test & Coverage Check
## 6. CONSOLIDATED FORMULA & METRIC SHEET

| **Metric/Screen** | **Formula/Filter Condition** | **Speaker's Benchmark** | **When to Use** | **Stage** | **Timestamp** |
| --- | --- | --- | --- | --- | --- |
| Comparative Relative Strength (CRS) | Stock price performance vs. Benchmark Index or Peer Stock (TradingView *Comparative Relative Strength* by VIT VLKV `[?]`) | Gray line > Blue line (trending upward) = outperforming; Gray < Blue = underperforming | Buying, pyramiding up, and spotting peer leadership shifts on Weekly/Monthly charts (not for selling) | Stage 2, 3, 5 | `[00:03:41–00:05:59, 00:14:40–00:16:14]` |
| 3-Factor Buy Confluence | CRS diverging upward above benchmark + V-Stop green (trending upward) + High trading volumes | All 3 aligned simultaneously | Timing turnaround, deep-value, or momentum entries (e.g., Equitas SFB, South Indian Bank) | Stage 2 | `[00:05:10–00:06:30]` |
| Pyramiding-Up Signal | V-Stop holds (no exit) + CRS crosses back above benchmark (e.g., Nifty 50) | CRS crossing above benchmark after consolidation | Adding to existing compounders after multi-year outperformance and sideways consolidation (e.g., SRF) | Stage 3 | `[00:08:39–00:09:58]` |
| Exit Alignment (Valuation + Technical) | Reverse DCF overvaluation + V-Stop exit + High-volume selling + CRS underperformance | Reverse DCF pricing in 15–20 years of growth + V-Stop sell | Exiting overvalued stocks (e.g., Dixon Technologies); V-Stop triggers exit, RS confirms underperformance | Stage 3 | `[00:09:58–00:10:26]` |
| StockEdge RS > 0 Scan | StockEdge → Premium Analytics → Price Scans → Relative Strength Scans → *Relative strength going above zero* | Last 55 trading days (~2 months) | Filtering early turnaround / momentum stocks turning positive vs. index | Stage 4 | `[00:10:52–00:11:28]` |
| StockEdge Strongly Outperforming Scan | StockEdge → Price Scans → Relative Strength Scans → *Strongly outperforming benchmark index* | Persistent appearance over 2–3 years (toggle constant dates) | Discovering durable multi-year outperformers (e.g., Varun Beverages, Carborundum Universal) | Stage 4 | `[00:11:28–00:14:10]` |
| StockEdge Increasing RS Scan | StockEdge → Price Scans → Relative Strength Scans → *Increasing relative strength* | Increasing relative strength trend | Secondary momentum discovery screen (0 hits during demo) | Stage 4 | `[00:13:44]` |
| Monthly vs. Weekly Confirmation Rule | Weekly V-Stop + Weekly RS vs. Monthly V-Stop | Do not treat as a full Monthly buy until Monthly V-Stop also triggers a buy | Evaluating StockEdge watchlist exports on TradingView (e.g., PB FinTech) | Stage 4 | `[00:12:16–00:13:15]` |



## 7. GLOSSARY
- **Relative Strength (RS):** A strategy used in both momentum investing and value investing that focuses on stocks or asset classes performing relatively better than the broader market, a relevant benchmark index, or peer stocks `[00:00:00–00:00:29, 00:02:32]`.
- **RSI (Relative Strength Index):** A momentum oscillator; explicitly distinguished from Relative Strength (RS) `[00:01:56–00:02:32]`.
- **Comparative Relative Strength (CRS):** TradingView indicator (listed as by VIT VLKV `[?]`) comparing a stock's performance line (gray) against a selected benchmark index or peer stock (blue) `[00:03:41–00:04:41, 00:16:14]`.
- **Volatility Stop (V-Stop / VStop):** Technical trend-following indicator used alongside RS for buying (when green/trending upward) and as the primary indicator for selling/exiting `[00:03:03, 00:05:10, 00:10:26]`. (Formula/multiplier details: Used without definition in this lecture.)
- **Mean-Reversion / Deep-Value Strategy:** Approach where a fundamentally improving value stock is identified first, and CRS crossing above the benchmark signals that technicals have started confirming the turnaround `[00:07:37]`.
- **Pyramiding Up:** Adding to an existing position when V-Stop has not triggered an exit and CRS crosses back above the benchmark after consolidation `[00:09:03–00:09:58]`.
- **Reverse DCF:** Valuation check referenced for seeing how many years of growth are priced into a stock (e.g., 15–20 years in Dixon Technologies) `[00:09:58]`. (Formula: Used without definition in this lecture.)
- **ADX:** Mentioned as an indicator that can be paired with V-Stop when trending `[00:13:15]`. (Used without definition in this lecture.)
- **Nifty Bees:** Referenced in the transcript alongside Nifty Bank / Bank Nifty (`"bank Nifty or Nifty Bank which is also known as Nifty Bees"` `[? verify]`) `[00:04:08]`.
- **StockEdge:** Screening platform (Premium Analytics → Price Scans → Relative Strength Scans) used to filter stocks by RS and export lists to Excel for TradingView `[00:10:52–00:14:10]`.
- **MNC Tag:** Multinational corporation status noted for Mahindra CIE Auto `[00:11:28]`. (Used without definition.)


## 8. EXAMPLES INDEX

| **Company/Example** | **Sector** | **Concept Illustrated** | **Stage** | **Timestamp** |
| --- | --- | --- | --- | --- |
| 10 Cricket Openers Analogy | Analogy (Sports) | Relative ranking across peers (70 vs. 50/40/20/60 batting avg) | Stage 1 | `[00:00:29–00:01:18]` |
| Four Houses in a Storm Analogy | Analogy | Relative resilience during market downturns (1 standing vs. 2 collapsed, 1 partly broken) | Stage 1 | `[00:01:18–00:01:56]` |
| NASDAQ & S&P 500 ("SNB 500") | Broad Market Indices (US) | Benchmark comparison in RS | Stage 1 | `[00:02:32]` |
| Equitas Small Finance Bank vs. Bank Nifty | Banking (Small Finance Bank) | 3-factor buy confluence (CRS + V-Stop + high volume) after MD resignation/continuation | Stage 2 | `[00:03:03–00:05:59]` |
| AU Small Finance Bank | Banking (Small Finance Bank) | Briefly mentioned as a peer comparison candidate for Equitas SFB | Stage 2 | `[00:03:41]` |
| South Indian Bank vs. Bank Nifty | Banking | Mean-reversion / deep-value turnaround after 2018–2022 underperformance + TradingView alerts | Stage 2 | `[00:05:59–00:08:39]` |
| SRF vs. Nifty 50 | Chemicals | Pyramiding up after 4-year outperformance (2018–2022) and consolidation while V-Stop holds | Stage 3 | `[00:08:39–00:09:58]` |
| Dixon Technologies | Electronics / Consumer Durables | Exit alignment: Reverse DCF (15–20 yrs growth priced in) + V-Stop exit + high-volume selling + CRS underperformance | Stage 3 | `[00:09:58–00:10:26]` |
| Jindal Stainless | Metals (Steel) | Hit in StockEdge *Strongly outperforming benchmark index* scan | Stage 4 | `[00:11:28]` |
| Mahindra CIE Auto ("Mahindra CI auto" `[?]`) | Auto Ancillaries | Hit in StockEdge *Strongly outperforming benchmark index* scan (MNC tag) | Stage 4 | `[00:11:28]` |
| PB FinTech | Fintech / Insurance | Listed ₹1,290, fell to ₹425/₹384 `[? verify]`; Weekly V-Stop + RS positive, Monthly RS > Nifty, but Monthly V-Stop not yet a buy | Stage 4 | `[00:12:03–00:13:15]` |
| Varun Beverages | Beverages / FMCG | Consistent 2–3 year appearance in StockEdge *Strongly outperforming benchmark index* scan | Stage 4 | `[00:13:44]` |
| Carborundum Universal ("Carbohydrate Universal" `[?]`) | Industrials / Abrasives | Long-running appearance in StockEdge *Strongly outperforming benchmark index* scan | Stage 4 | `[00:13:44]` |
| HDFC Bank vs. ICICI Bank | Banking | Stock-to-stock CRS comparison on Weekly/Monthly charts showing leadership shift after ~2 years (since 2020) | Stage 5 | `[00:14:40–00:15:16]` |



## 9. Q&A HIGHLIGHTS
None stated — pre-recorded session with no audience Q&A.


## 10. CONCLUSION & NEXT STEPS
- **Session Closing:** Five-point recap covering (1) what RS is, (2) comparing RS to indices and peer stocks, (3) combining RS with V-Stop to buy, (4) filtering stocks on StockEdge, and (5) setting CRS crossing alerts, followed by confirming the TradingView indicator name (*Comparative Relative Strength* by VIT VLKV `[?]`) `[00:15:16–00:16:44]`.
- **Homework / Assignments:** Write down 5 key learnings on Comparative Relative Strength (and drop "yes" in the comments) `[00:09:28, 00:16:14]`.
- **Tools / Screeners Recommended:** TradingView (*Comparative Relative Strength* indicator + crossing alerts) `[00:03:41, 00:07:05, 00:16:14]`, Investopedia (RS definition) `[00:01:56]`, and StockEdge (Premium Analytics → Price Scans → Relative Strength Scans + Excel export to TradingView) `[00:10:52–00:14:10]`.
- **Upcoming Topics:** Next class of the SOIC Technical Analysis course for long-term investors (specific topic not named) `[00:16:44]`.


## 11. SELF-TEST (9 Questions)
- **Conceptual:** How does Relative Strength (RS) differ from RSI?
  - *Answer:* RS is a comparative strategy identifying stocks outperforming a benchmark or peers, whereas RSI is a momentum oscillator (Stage 1 `[00:01:56–00:02:32]`).
- **Conceptual:** What are the three signals in the speaker's buy confluence?
  - *Answer:* (1) CRS diverging upward above the benchmark line, (2) V-Stop turning green/trending upward, and (3) high trading volumes (Stage 2 `[00:05:10–00:06:30]`).
- **Conceptual:** Should RS be used as a primary selling indicator?
  - *Answer:* No. Speaker's view: V-Stop works for selling, whereas RS is used for buying and pyramiding up (Stage 2–3 `[00:05:59, 00:10:26]`).
- **Applied (Equitas SFB / South Indian Bank):** Why did CRS crossing above Bank Nifty matter for South Indian Bank after 2018–2022?
  - *Answer:* It prevented sitting in 4 years of underperformance and confirmed—via TradingView crossing alerts—that technicals aligned with fundamental improvement (Stage 2 `[00:05:59–00:08:39]`).
- **Applied (SRF):** If V-Stop has not triggered an exit on SRF after 4 years of outperforming Nifty 50 (2018–2022) and CRS turns down, how should an investor use CRS?
  - *Answer:* Hold the core position while V-Stop holds, and set a TradingView alert for when CRS crosses back above Nifty 50 to pyramid up (Stage 3 `[00:08:39–00:09:58]`).
- **Applied (Dixon Technologies):** What combination of valuation and technicals aligned on Dixon Technologies' exit?
  - *Answer:* Reverse DCF priced in 15–20 years of growth, V-Stop triggered an exit, high-volume selling appeared, and CRS showed massive underperformance vs. Nifty (Stage 3 `[00:09:58–00:10:26]`).
- **Conceptual:** Which StockEdge scan flags stocks turning positive vs. the index over the last 55 trading days (~2 months)?
  - *Answer:* *Relative strength going above zero* under Price Scans → Relative Strength Scans (Stage 4 `[00:11:28]`).
- **Applied (PB FinTech):** PB FinTech (listed ₹1,290, fell to ₹425/₹384) showed Weekly V-Stop + Weekly RS turning up and Monthly RS crossing Nifty. Why was it still not a full buy?
  - *Answer:* Monthly V-Stop had not yet given a buy signal (Stage 4 `[00:12:16–00:13:15]`).
- **Conceptual:** How can CRS detect leadership shifts within the same sector?
  - *Answer:* By comparing one peer stock directly against another (e.g., HDFC Bank vs. ICICI Bank) on Weekly or Monthly charts (Stage 5 `[00:14:40–00:15:16]`).


## 12. GAPS & VERIFICATION LIST
- **Concepts only briefly mentioned:**
  - *AU Small Finance Bank:* Mentioned only as a peer comparison candidate for Equitas SFB — not elaborated `[00:03:41]`.
  - *ADX:* Briefly mentioned as an alternative pairing with V-Stop — not elaborated in this lecture `[00:13:15]`.
  - *Reverse DCF:* Referenced in Dixon Technologies (15–20 years growth priced in) without methodology details `[00:09:58]`.
  - *StockEdge "Increasing relative strength" scan:* Shown as a screen option but had zero qualifying stocks during the demo `[00:13:44]`.
- **Items marked `[?]`, `[? verify]`, or `[? Hindi segment unclear]`:**
  - `VIT VLKV [?]` — Author name of *Comparative Relative Strength* indicator on TradingView `[00:16:14]`.
  - `SNB 500` — STT error for S&P 500 `[00:02:32]`.
  - `Nifty Bees [? verify]` — Transcript states `"bank Nifty or Nifty Bank which is also known as Nifty Bees"` `[00:04:08]` (verify if speaker meant Bank BeES vs. Nifty BeES).
  - `Mahindra CI auto [?]` — STT for Mahindra CIE Auto `[00:11:28]`.
  - `Carbohydrate Universal [?]` — STT for Carborundum Universal `[00:13:44]`.
  - `drop a helios [?]` — Garbled STT at `[00:16:14]` (likely "drop a yes").
  - `long term initials [?]` — STT for "long term investors" `[00:16:44]`.
  - `PB FinTech ₹425 / ₹384 low [? verify]` — Verify exact low price and ₹1,290 listing figure against chart `[00:12:43]`.
- **Slides not legible / missing:**
  - No slide deck PDF available in `01_Sources` for BS-Lec03; content is grounded solely in the transcript.


## 13. COVERAGE CHECK
Full coverage confirmed (`[00:00:00–00:16:44]` covered across Stages 1–5 with zero timestamp gaps).
