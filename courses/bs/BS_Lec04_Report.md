# BS-Lec04: When to Hold, Buy, Pyramid & Sell using Technicals for Long Term
# 1. LECTURE HEADER
- **Lecture ID:** BS-Lec04
- **Title:** When to Hold, Buy, Pyramid & Sell using Technicals for Long Term (VSTOP, ADX, Parabolic SAR, RSI, Comparative Strength & OBV)
- **Duration:** [00:00:00–00:22:08]
- **PPT used:** None (transcript only)
- **Prerequisites referenced:**
  - Earlier course classes: Volatility Stop (VSTOP), ADX, TradingView setup (RSI 50 support/resistance), Comparative Strength, and On Balance Volume (OBV) (5–10 minute class).
  - Last class (BS-Lec03): Moving averages combined with VSTOP for satellite portfolio purchases [00:04:09–00:04:42].
# 2. KEY LEARNINGS
- **Core entry checklist (monthly charts):** Trigger a buy only when two basic conditions align—ADX is above 20 and Volatility Stop (VSTOP) is positive (green) [00:04:42].
- **Parabolic SAR role & standalone ban:** Parabolic SAR is a time-and-price trailing stop-and-reverse indicator that cannot measure trend strength; never use it standalone for buying or selling because it causes whipsaws and high portfolio churn [00:02:40].
- **Parabolic SAR settings & pyramiding rule:** Set Parabolic SAR increment to 0.04 or 0.05 (0.05 multiplier reiterated in recap); pyramid up only when VSTOP is green, ADX > 20, and Parabolic SAR dots are below the candles and pointing upwards rather than in sideways consolidation [00:07:26].
- **Tranche allocation discipline:** Build a target position (e.g., 3%–6% allocation) in 2 to 4 tranches rather than 10–12 tranches, because over-tranching into a fundamentally weakening downtrend pushes the average buying price too high [00:10:16].
- **Exit rule & VSTOP multipliers:** Use VSTOP turning negative/red for exits rather than Parabolic SAR (which shakes investors out during consolidations); use a 2.0x VSTOP multiplier for cyclical businesses and 2.5x for compounder businesses with lower earnings volatility [00:15:17].
- **Monthly vs. weekly timeframe selection:** Use monthly charts for 3–5+ year core compounders, and use weekly charts for earlier entry signals (or buy on weekly and sell on monthly, provided the system is backtested and followed consistently) [00:14:06].
- **Weekly probability boosters (RSI & Comparative Strength):** Improve entry probability by checking weekly charts for RSI crossing above 50 with high volumes (50 acts as support in uptrends and resistance in downtrends) and Comparative Relative Strength outperforming the benchmark (Nifty 50 or Nifty Bank) [00:18:43].
- **On Balance Volume (OBV) confirmation:** Pair ADX > 20, RSI > 50, and positive Comparative Strength with rising OBV (positive-volume days outweighing negative-volume days) to confirm smart-money / high-volume participation [00:20:33].
# 3. LECTURE MAP

| Stage # | Stage Title | Timestamp Range | Slides | Core Concepts | Examples/Companies Used | TVGP Tag |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Session Scope & Technical Toolkit Overview | [00:00:00–00:01:09] |  | Buying vs. averaging up (pyramiding) vs. selling (next class); toolkit: VSTOP, ADX, Parabolic SAR, RSI, OBV |  |  |
| 2 | Parabolic SAR Mechanics, Limitations & TradingView Setup | [00:01:09–00:04:09] |  | Trailing stop-and-reverse (SAR) dots below/above candles; whipsaws & churn if used standalone; TradingView setup (ADX & DI, VSTOP length 2, Parabolic SAR) |  |  |
| 3 | Core Buying & Pyramiding Checklist (Monthly Charts) | [00:04:09–00:08:29] |  | ADX > 20 + VSTOP positive to buy; Parabolic SAR (0.04/0.05 increment) pointing up to pyramid; why averaging up keeps average cost below CMP; core compounders on monthly charts |  |  |
| 4 | Case Studies: Tranche Pyramiding & Compounder vs. Cyclical Multipliers | [00:08:29–00:15:17] |  | 2–4 tranche discipline (avoid 10–12 tranches); riding consolidations with VSTOP; VSTOP multiplier 2.0 (cyclicals) vs. 2.5 (compounders); monthly vs. weekly entry/exit |  |  |
| 5 | Recap of Entry, Pyramiding & Exit Rules | [00:15:17–00:16:16] |  | Consolidated rules: Entry (VSTOP + ADX > 20), Pyramiding (VSTOP green + ADX > 20 + SAR 0.05 pointing up), Exit (VSTOP; 2.0x cyclical vs. 2.5x compounder) |  |  |
| 6 | Multi-Timeframe Probability Boosters: RSI, Comparative Strength & OBV | [00:16:16–00:21:09] |  | Weekly confirmation of monthly entries; RSI crossing 50 with volume; Comparative Relative Strength vs. Nifty 50 / Nifty Bank; OBV smart-money volume check; 4–5 signal confluence |  |  |
| 7 | Homework Assignments & Closing | [00:21:09–00:22:08] |  | Practice applying monthly/weekly VSTOP (2x & 2.5x), ADX, RSI, CS, and OBV on 4 charts; session closing |  |  |

# 4. CONCEPT FLOW
Stage 1: Session Scope & 5-Tool Kit → Stage 2: Parabolic SAR Mechanics & Standalone Limitation → Stage 3: Monthly Buy & Pyramid Checklist (ADX > 20 + VSTOP + SAR) → Stage 4: Multi-Stock Case Studies, 2–4 Tranche Discipline & 2.0x/2.5x Multipliers → Stage 5: Consolidated Entry/Pyramid/Exit Rules Recap → Stage 6: Weekly Probability Boosters (RSI > 50, Comparative Strength, OBV) → Stage 7: Homework Chart Application & Closing


<!-- SOIC_AUDIO_BANNER_START -->
::: info 📝 Lecture Audio Transcript
*Interactive audio transcript will be linked when transcript file is added.*
:::
<!-- SOIC_AUDIO_BANNER_END -->
---

## 5. DETAILED STAGE-BY-STAGE NOTES

# BS-Lec04 – Detailed Stage Breakdown: Stages 1–4
## BS-Lec04 – Stage 1: Session Scope & Technical Toolkit Overview  [00:00:00–00:01:09]
### a) What this stage answers
Which technical indicators are used together to decide when to buy and when to pyramid (average up) in long-term core holdings, and what is deferred to the next session?
### b) Detailed explanation
The session focuses on two core portfolio actions using technical analysis for long-term investors: **when to buy** and **when to average up (pyramid)** [00:00:00–00:00:32]. A dedicated framework for **when to sell** is scheduled for the next class, although the exit rule using Volatility Stop is also integrated into the case studies later in this session [00:00:00–00:00:32].

To make buying and pyramiding decisions objective, five technical tools are combined across the lecture [00:00:00–00:01:09]:

- **Volatility Stop (VSTOP)** and **ADX** (already covered in the first class of the course) [00:00:00–00:00:32].
- **Parabolic SAR** (the new variable introduced in this session for pyramiding) [00:00:32–00:01:09].
- **RSI (Relative Strength Index)** and **OBV (On Balance Volume)**, which are introduced toward the end of the session as additional probability boosters for purchase decisions [00:00:32–00:01:09].
### c) Examples & case studies
None stated in this stage.
### d) Formulas, metrics & thresholds (if any)
None stated in this stage.
### e) Visual aid
```
Core Tools (Covered Earlier): VSTOP + ADX
        ↓
New Pyramiding Tool: Parabolic SAR
        ↓
Probability Boosters (End of Session): RSI + OBV
```
### f) Speaker's cautions & common mistakes
None stated.


## BS-Lec04 – Stage 2: Parabolic SAR Mechanics, Limitations & TradingView Setup  [00:01:09–00:04:09]
### a) What this stage answers
How does Parabolic SAR work, why must it never be used as a standalone buy or sell indicator, and how is the three-indicator chart layout configured on TradingView?
### b) Detailed explanation
**Parabolic SAR mechanics:** Parabolic SAR is a price-following technical indicator that uses a **trailing stop and reverse (SAR)** method to determine trade direction, potential reversals, and suitable entry or exit points [00:01:09–00:02:12]. Visually on a chart, it plots a series of dots [00:02:12–00:02:40]:

- When the dots are **below** the candlesticks, it signals a bullish/buy phase where an investor can enter [00:02:12–00:02:40].
- When the dots are **above** the candlesticks, it signals that a bearish phase has started [00:02:12–00:02:40].

**Why standalone usage fails:** Because Parabolic SAR is purely **time- and price-based**, it is **not good at measuring the strength of a trend** [00:03:04–00:03:35]. Using it alone causes the indicator to react to minor price fluctuations, which leads to frequent **whipsaws**, repeated **stop-outs**, and high **portfolio churn** [00:01:09–00:01:40, 00:02:40–00:03:04]. Therefore, it must always be paired with a trend-following indicator [00:01:09–00:01:40]. Specifically, in this framework, Parabolic SAR is used **only to average up (pyramid)**—never as a standalone buy trigger and never as an exit trigger [00:01:40–00:02:12, 00:07:54–00:08:29].

**TradingView setup:** On TradingView, investors can click the question-mark icon next to Parabolic SAR to inspect its full description and calculation [00:02:40–00:03:35]. To configure the workspace for buying and pyramiding, open three indicators simultaneously [00:03:35–00:04:09]:

- **ADX** (specifically `ADX & DI`) [00:03:35–00:04:09].
- **VSTOP (Volatility Stop)** with the multiplier length set to **2** [00:04:09–00:04:09].
- **Parabolic SAR** (the second option in the TradingView search list) [00:03:35–00:04:09].
### c) Examples & case studies
- **Example:** Investopedia & TradingView description [00:02:12–00:03:35]
- **Context:** Demonstrating the formal definition and mathematical calculation of Parabolic SAR.
- **Data/details:** Trailing stop-and-reverse (SAR) method; time- and price-based calculation shown via TradingView's description tooltip.
- **Walkthrough:** The speaker references Investopedia for the full textbook definition and opens TradingView's built-in description (`?` icon) to emphasize that even the platform's own documentation warns against using Parabolic SAR standalone.
- **Takeaway:** Parabolic SAR cannot measure trend strength and must only be used alongside trend-following indicators.
### d) Formulas, metrics & thresholds (if any)

| **Metric / Filter** | **Definition or Expression** | **Speaker's Benchmark / Threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| Parabolic SAR Dot Position | Trailing stop-and-reverse (SAR) dots relative to candlesticks | Dots below candles = bullish; dots above candles = bearish | Indicates price direction/reversals, but not trend strength | [00:02:12–00:02:40] |
| VSTOP Length / Multiplier | Volatility Stop indicator setting on TradingView | Length = 2 | Base Volatility Stop setting added to chart layout | [00:04:09] |

### e) Visual aid
None required.
### f) Speaker's cautions & common mistakes
- **Never use Parabolic SAR standalone:** Using it alone to generate buy or sell signals causes heavy whipsaws, repeated stop-outs, and excessive portfolio churn because it cannot measure trend strength [00:01:09–00:01:40, 00:02:40–00:03:35].


## BS-Lec04 – Stage 3: Core Buying & Pyramiding Checklist (Monthly Charts)  [00:04:09–00:08:29]
### a) What this stage answers
What exact conditions trigger an initial buy versus a pyramiding (averaging-up) tranche on monthly charts for core compounder stocks, and why does averaging up protect an investor's cost basis?
### b) Detailed explanation
While the previous class (`BS-Lec03`) covered using moving averages with VSTOP for **satellite portfolio** purchases, this stage focuses on **monthly charts** for **core portfolio compounders** [00:04:09–00:04:42, 00:07:54–00:08:29].

**1. Initial Buying Checklist (2 basic conditions):** To initiate a buy in a stock, two core conditions must be met simultaneously [00:04:42–00:05:16]:

- **ADX > 20** (confirming trend strength) [00:04:42–00:05:16].
- **VSTOP is positive (green)** [00:04:42–00:05:16].

**2. Pyramiding (Averaging-Up) Checklist:** Once the initial entry is triggered, the investor averages up only when **all three** conditions align [00:04:42–00:05:48, 00:07:26–00:07:54]:

- **VSTOP** remains positive (green) [00:06:50–00:07:26].
- **ADX** remains above 20 [00:06:50–00:07:26].
- **Parabolic SAR** (with increment set to **0.04 or 0.05**) gives an entry and its dots are **pointing upwards**—not moving flat in a sideways consolidation [00:04:42–00:05:48, 00:07:26–00:07:54].

**3. Exit Rule:** For selling, only **VSTOP** is used (when VSTOP turns negative/red); Parabolic SAR is ignored for exits [00:05:16–00:05:48, 00:07:54–00:08:29].

**4. Chart Hygiene & Why Averaging Up Works:** On TradingView, the speaker turns off `DI+` and `DI-` inside the `ADX & DI` indicator so the ADX line is clearly visible against the 20 threshold, and thickens the Parabolic SAR dots for readability [00:05:48–00:06:50]. Speaker's view: the beauty of averaging up in a trending stock is that **your average buying price always remains lower than the current market price (CMP)**, unlike averaging down into a falling stock [00:06:50–00:07:26].
### c) Examples & case studies
- **Example:** Divi's Laboratories [00:05:48–00:07:54]
- **Context:** Demonstrating how to configure indicators on a monthly chart and spot the exact initial buy trigger vs. valid pyramiding zones over the prior 5–6 years.
- **Data/details:** Parabolic SAR increment set to `0.04` or `0.05`; ADX crosses above `20` and reaches `> 30` (almost `35`) alongside very high volumes and positive VSTOP.
- **Walkthrough:** First, Parabolic SAR is hidden and `DI+`/`DI-` are turned off to isolate the ADX line and VSTOP. The initial buy triggers when high volume arrives with VSTOP positive and ADX above 20 (climbing to ~35). Next, Parabolic SAR is unhidden to identify pyramiding zones: tranches are added only when Parabolic SAR dots are below the candles and visibly trending upwards, skipping periods where dots move sideways in consolidation.
- **Takeaway:** Combine VSTOP (positive) + ADX (> 20) for the first buy, then use upward-sloping Parabolic SAR (0.04/0.05) only to pyramid during active uptrends.
### d) Formulas, metrics & thresholds (if any)

| **Metric / Filter** | **Definition or Expression** | **Speaker's Benchmark / Threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| Initial Buy Signal (Monthly) | VSTOP + ADX | VSTOP = Positive (green) AND ADX > 20 | Triggers initial entry in a core compounder | [00:04:42–00:05:16] |
| Parabolic SAR Increment | Step/increment setting in TradingView | 0.04 or 0.05 | Controls sensitivity of SAR dots for pyramiding | [00:05:16–00:05:48] |
| Pyramiding Signal (Monthly) | VSTOP + ADX + Parabolic SAR | VSTOP = Positive AND ADX > 20 AND SAR dots pointing upwards | Triggers add-on tranches; skip sideways SAR consolidation | [00:07:26–00:07:54] |

### e) Visual aid

| **Action** | **VSTOP** | **ADX** | **Parabolic SAR (0.04 / 0.05)** |
| --- | --- | --- | --- |
| **Initial Buy** | Positive (Green) | > 20 | Not required |
| **Pyramid (Average Up)** | Positive (Green) | > 20 | Dots below candles & pointing upwards (not sideways) |
| **Exit / Sell** | Turns Negative (Red) | Ignored | Ignored (prevents whipsaw shakeouts) |

### f) Speaker's cautions & common mistakes
- **Do not pyramid during sideways consolidation:** Even if Parabolic SAR dots are below candles, avoid adding tranches when the dots are flat/sideways; wait until they clearly point upwards [00:07:26–00:07:54].
- **Do not use Parabolic SAR for exits:** Using SAR for selling will cause whipsaw shakeouts out of long-term compounders [00:07:54–00:08:29].


## BS-Lec04 – Stage 4: Case Studies: Tranche Pyramiding & Compounder vs. Cyclical Multipliers  [00:08:29–00:15:17]
### a) What this stage answers
How many tranches should an investor use to build a target allocation, how does VSTOP protect against premature exits during consolidations, and how do VSTOP multipliers (2.0x vs. 2.5x) and chart timeframes (monthly vs. weekly) differ between cyclicals and compounders?
### b) Detailed explanation
**1. Tranche Allocation Discipline (2 to 4 Tranches Max):** When building a target position—such as a 3%, 4%, 5%, or 6% portfolio allocation—the speaker advises splitting purchases into **2 to 4 tranches** (for example, two tranches of 2.5% each for a 5% position, or three tranches of 2% each for a 6% position) [00:08:29–00:08:52, 00:10:16–00:11:03]. Speaker's view: **never split a position into 10–12 tranches** [00:10:16–00:11:30]. If a company develops fundamental weakness and enters a downtrend, over-tranching pushes the average buying price much higher and leaves the investor vulnerable [00:10:16–00:11:30].

**2. Riding Consolidations & Exit Discipline:** While Parabolic SAR frequently flips negative during normal price consolidations, **VSTOP** keeps the investor in the trend until a genuine trend reversal occurs [00:09:46–00:10:16, 00:12:06–00:12:41]. Speaker's view: capturing just **two or three** major compounder winners using this framework is enough to build a life-changing fortune [00:08:29–00:08:52].

**3. VSTOP Multiplier Selection (2.0x vs. 2.5x):**

- **2.0x Multiplier (Cyclicals):** Use a **2.0x** VSTOP multiplier for cyclical businesses or companies with higher earnings/price volatility so exits trigger more responsively [00:14:32–00:15:17].
- **2.5x Multiplier (Compounders):** Use a **2.5x** VSTOP multiplier for structural compounder businesses where earnings volatility is lower, allowing the investor to ride out multi-year consolidations [00:12:41–00:13:13, 00:15:17].

**4. Monthly vs. Weekly Timeframes:**

- **Monthly charts:** Best suited for core compounder businesses where the investor intends to stay invested for a **3-, 4-, or 5+ year journey** [00:13:36–00:14:06].
- **Weekly charts:** Provide **earlier entry signals** (and swifter exits) [00:13:36–00:14:32]. Some investors combine timeframes by **buying on weekly charts and selling on monthly charts**; however, the speaker stresses that whichever system an investor chooses, they must **backtest it** and stick to it consistently without switching rules mid-trade [00:14:06–00:14:52].
### c) Examples & case studies
- **Example 1:** Dixon Technologies [00:07:54–00:09:46]

  - **Context:** Building a 3% core allocation in 3 tranches on a monthly chart.
  - **Data/details:** Initial ADX > 20 and VSTOP entry on the 20th July [? verify] candle around `₹1,100–₹1,146`; 3 tranches deployed over 3 months between `₹1,100` and `₹1,700`; average buy price `~₹1,400`; VSTOP red exit triggered near `₹3,800`; return `~1.5x–1.7x` (`1.5 or 1.7 bagger` [? verify]).
  - **Walkthrough:** ADX crosses above 20 with VSTOP positive near ₹1,100–₹1,146. With both VSTOP and Parabolic SAR pointing upwards over the next three months, the 3% allocation is built in three tranches between ₹1,100 and ₹1,700 (averaging ~₹1,400). Parabolic SAR is then ignored for exits, and the position is held until VSTOP turns red around ₹3,800.
  - **Takeaway:** Structured 3-tranche pyramiding keeps the average cost near ₹1,400 while VSTOP captures the full run to ₹3,800.

- **Example 2:** Laurus Labs [00:09:46–00:12:06]

  - **Context:** Building a 4%–6% allocation using up to 4 tranches and exiting on VSTOP.
  - **Data/details:** ADX > 20 + VSTOP entry near `₹183`; 4th (max) tranche added at `₹314`; full position average cost `₹220–₹250`; VSTOP exit triggered near `₹500–₹520`.
  - **Walkthrough:** Entry triggers at ~₹183 when ADX crosses 20 and VSTOP is positive. The investor adds tranches up to a maximum of 4 tranches (capping at ₹314) for an average cost of ₹220–₹250, avoiding 10–12 tranches. Even if Parabolic SAR turns negative briefly, the position is held until VSTOP triggers the exit at ₹500–₹520.
  - **Takeaway:** Capping pyramiding at 3–4 tranches prevents an inflated cost basis while VSTOP secures a clean exit at ₹500–₹520.

- **Example 3:** PI Industries [00:12:06–00:13:36]

  - **Context:** Demonstrating how a 2.5x VSTOP multiplier helps investors ride long-term compounders through multi-year consolidations.
  - **Data/details:** Initial entry at `₹111` (ADX > 20); Parabolic SAR gave an early false exit around `₹689–₹700`, whereas VSTOP (2.0x) exited in `2018` at `₹837`; with a `2.5x` VSTOP multiplier, from `2013` until `March 2020` (COVID crash), VSTOP triggered **only once in 12–13 years**.
  - **Walkthrough:** After entering at ₹111, Parabolic SAR would have shaken the investor out at ₹689–₹700. VSTOP held through the consolidation to ₹837 in 2018, and switching the multiplier to 2.5x for a compounder kept the investor in the stock almost uninterrupted from 2013 to March 2020.
  - **Takeaway:** Use a 2.5x VSTOP multiplier for low-volatility compounders to avoid getting shaken out during normal consolidations.

- **Example 4:** PG Electroplast [00:13:36–00:14:06]

  - **Context:** Illustrating weekly vs. monthly chart trade-offs.
  - **Data/details:** Weekly chart view.
  - **Walkthrough:** On a weekly chart, VSTOP hits and exits are much swifter than on a monthly chart. Monthly charts are preferable when holding a compounder for a 3–5 year journey.
  - **Takeaway:** Match chart timeframe to holding horizon—weekly for faster signals, monthly for 3–5+ year core compounders.

- **Example 5:** Equitas Small Finance Bank [00:14:06–00:15:17]

  - **Context:** Comparing weekly vs. monthly entry timing and applying the 2.0x cyclical multiplier.
  - **Data/details:** Weekly chart entry on `5th December` at `₹56`; monthly chart entry at `₹51–₹52` or `₹56–₹57` with ADX > 20 and Parabolic SAR pointing up; VSTOP multiplier set to `2.0x` (cyclical business).
  - **Walkthrough:** Weekly charts trigger the entry early on 5th December at ₹56, while the monthly chart triggers in a similar zone (₹51–₹57) with ADX > 20 and upward Parabolic SAR. Because Equitas is a cyclical business, a 2.0x VSTOP multiplier is applied.
  - **Takeaway:** Weekly charts offer slightly earlier entries (and can be paired with monthly exits if backtested), while cyclicals require a tighter 2.0x VSTOP multiplier.
### d) Formulas, metrics & thresholds (if any)

| **Metric / Filter** | **Definition or Expression** | **Speaker's Benchmark / Threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| Tranche Count | Number of buy/pyramid installments | 2 to 4 tranches (max) | Builds target 3%–6% allocation without inflating average cost | [00:08:29–00:08:52, 00:10:16–00:11:03] |
| VSTOP Multiplier (Cyclicals) | Volatility Stop multiplier setting | 2.0x | Tighter trailing stop for cyclical or volatile earnings businesses | [00:14:32–00:15:17] |
| VSTOP Multiplier (Compounders) | Volatility Stop multiplier setting | 2.5x | Wider trailing stop to ride consolidations in steady compounders | [00:12:41–00:13:13, 00:15:17] |

### e) Visual aid

| **Business Type** | **Recommended VSTOP Multiplier** | **Preferred Timeframe** | **Rationale** |
| --- | --- | --- | --- |
| **Core Compounder** (e.g., PI Industries) | **2.5x** | Monthly (3–5+ yr horizon) | Lower earnings volatility; avoids shakeouts during consolidations |
| **Cyclical Business** (e.g., Equitas SFB) | **2.0x** | Weekly (early entry) / Monthly | Higher cyclicality; requires tighter exit protection |

### f) Speaker's cautions & common mistakes
- **Avoid 10–12 tranches:** Splitting an allocation into 10–12 small tranches risks raising your average buying price sharply if a fundamental downtrend begins [00:10:16–00:11:30].
- **Do not switch timeframes arbitrarily:** If using a hybrid system (e.g., buy on weekly, sell on monthly), backtest it first and follow it consistently [00:14:06–00:14:52].

Batch complete: 1-4.

---

# BS-Lec04 – Detailed Stage Breakdown: Stages 5–7
# BS-Lec04 – Stage 5: Recap of Entry, Pyramiding & Exit Rules [00:15:17–00:16:16]
## a) What this stage answers
What are the exact consolidated rules for entering, pyramiding up, and exiting a core stock under this technical analysis framework?
## b) Detailed explanation
Before introducing probability-boosting indicators, the speaker recaps the core three-part rulebook established in earlier stages (see Stage 3 and Stage 4) [00:15:17–00:16:16]:

- **Initial Entry Rule:** Trigger a buy when **VSTOP is positive (green)** and **ADX crosses above 20** [00:15:17–00:15:47]. VSTOP being positive together with ADX above 20 is the bare minimum requirement to buy a security using this framework [00:15:47–00:16:16].
- **Pyramiding (Averaging-Up) Rule:** Add tranches only when **all three** conditions align simultaneously: **VSTOP is green**, **ADX is greater than 20**, and **Parabolic SAR** (set at a **0.05** multiplier/increment) is also shaping/pointing upwards [00:15:17–00:16:16]. Never pyramid up when VSTOP is negative [00:15:47–00:16:16].
- **Exit Rule:** Use **VSTOP** (turning negative/red) for exits, selecting the multiplier according to business quality and earnings predictability [00:15:17–00:15:47]:
  - **2.0x multiplier:** For **cyclical businesses** or businesses with higher cyclicality [00:15:17–00:15:47].
  - **2.5x multiplier:** For **compounder businesses** where earnings volatility is lower [00:15:17–00:15:47].
## c) Examples & case studies
None stated in this stage.
## d) Formulas, metrics & thresholds (if any)

| Metric / Filter | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| --- | --- | --- | --- | --- |
| Initial Entry | VSTOP + ADX | VSTOP = Positive (green) AND ADX > 20 | Bare minimum requirement to initiate a buy | [00:15:17–00:16:16] |
| Pyramiding Setup | VSTOP + ADX + Parabolic SAR | VSTOP = Green AND ADX > 20 AND Parabolic SAR (0.05) pointing upwards | Conditions required to add tranches; never pyramid if VSTOP is negative | [00:15:17–00:16:16] |
| Exit Multiplier | VSTOP Multiplier | 2.0x (cyclicals) / 2.5x (compounders) | Tighter exit for high cyclicality; wider stop for low earnings-volatility compounders | [00:15:17–00:15:47] |

## e) Visual aid
- **Entry:** VSTOP (Positive/Green) + ADX (> 20) → Initiate position
- **Pyramid:** VSTOP (Green) + ADX (> 20) + Parabolic SAR (0.05, pointing upwards) → Add tranches
- **Exit:** VSTOP turns negative (2.0x for cyclicals; 2.5x for compounders) → Sell
## f) Speaker's cautions & common mistakes
- **Never pyramid when VSTOP is negative:** VSTOP remaining positive alongside ADX > 20 is the non-negotiable minimum requirement; do not average up if VSTOP has turned negative [00:15:47–00:16:16].
# BS-Lec04 – Stage 6: Multi-Timeframe Probability Boosters: RSI, Comparative Strength & OBV [00:16:16–00:21:09]
## a) What this stage answers
How can an investor use weekly-chart confluence across RSI, Comparative Strength, and On Balance Volume (OBV) to improve the probability of monthly entry signals?
## b) Detailed explanation
Because technical setups are inherently probability-based, investors can improve their odds by checking weekly charts for secondary confirmation whenever a monthly chart signals an entry area [00:16:16–00:17:52, 00:19:33–00:20:04]. The speaker layers three additional indicators onto the weekly chart:

**1. RSI (Relative Strength Index) Crossing 50:**
RSI is a **momentum oscillator** that measures the strength of price momentum [00:16:16–00:16:53]. On a weekly chart, the speaker applies the **RSI 50** rule (covered in the earlier TradingView class): in an uptrend, **50 acts as support**, whereas in a downtrend, **50 acts as resistance** [00:16:53–00:17:23]. When RSI crosses above 50 **along with higher volumes**, and simultaneously ADX moves above 20 and VSTOP starts trending positively, three signals align to confirm the entry [00:16:53–00:17:23].

2. Comparative Strength (Comparative Relative Strength):
On TradingView, investors can add the Comparative Relative Strength indicator (such as the one taught in the earlier class, or the "Bharat Trader" option) and set the benchmark index to Nifty 50 or Nifty Bank—depending on which index the stock competes against [00:17:52–00:19:01]. When the weekly Comparative Strength line begins **outperforming** the benchmark index at the same time that RSI crosses 50, ADX exceeds 20, and VSTOP gives an entry, four independent signals point toward an entry [00:18:43–00:19:33].

3. Price-Volume Action via On Balance Volume (OBV):
Covered in the earlier 5–10 minute class, On Balance Volume (OBV) tracks the cumulative balance between positive-volume ("plus volume") days and negative-volume days [00:20:04–00:20:33]. When OBV rises—meaning positive-volume days are increasing significantly faster than negative-volume days—it signals **higher volume participation and the entry of smart money** compared to normal trading days [00:20:04–00:20:33].

Multi-Indicator Confluence:
When all four or five pointers—**VSTOP positive, ADX > 20, RSI > 50, positive Comparative Strength, and rising OBV**—align on the weekly chart alongside the monthly setup, it provides a high-probability confirmation to enter the stock [00:20:33–00:21:09].
## c) Examples & case studies
- **Example:** Banking stock (Equitas Small Finance Bank / bank chart from Stage 4) vs. Nifty Bank [00:18:43–00:19:33]
- **Context:** Demonstrating 4-signal weekly confluence using Comparative Relative Strength against an industry benchmark.
- **Data/details:** Benchmark set to Nifty Bank (Bank Nifty); weekly RSI crosses above 50 and reaches 72.1 at the time of recording; ADX > 20; VSTOP positive.
- **Walkthrough:** Switching to the weekly chart and setting the Comparative Relative Strength benchmark to Nifty Bank shows the stock beginning to outperform Bank Nifty. At the same point, RSI crosses above 50 (standing at 72.1 currently), ADX moves above 20, and VSTOP signals an entry—aligning all four signals on the weekly timeframe.
- **Takeaway:** Checking weekly RSI (> 50) and Comparative Strength (outperforming the relevant benchmark) alongside ADX and VSTOP reinforces monthly entry conviction.
## d) Formulas, metrics & thresholds (if any)

| Metric / Filter | Definition or Expression | Speaker's Benchmark / Threshold | Interpretation | Timestamp |
| --- | --- | --- | --- | --- |
| RSI (Weekly) | Relative Strength Index (momentum oscillator) | Crosses above 50 with high volume (50 = support in uptrend, resistance in downtrend) | Confirms bullish momentum shift on weekly timeframe | [00:16:16–00:17:23] |
| Comparative Relative Strength | Stock performance relative to benchmark index (Nifty 50 or Nifty Bank) | Outperforming benchmark (line rising vs. index) | Confirms relative leadership against market or sector benchmark | [00:17:52–00:19:33] |
| On Balance Volume (OBV) | Cumulative balance of positive-volume days minus negative-volume days | Rising OBV (plus-volume days > negative-volume days) | Signals smart-money accumulation and above-normal volume inflow | [00:20:04–00:20:33] |
| Weekly Confluence Checklist | VSTOP + ADX + RSI + Comparative Strength + OBV | All 4–5 signals positive simultaneously | High-probability confirmation for a monthly entry area | [00:20:33–00:21:09] |

## e) Visual aid
Monthly Entry Area (VSTOP positive + ADX > 20)
↓ (Switch to Weekly Chart to boost probability)

- RSI crosses > 50 with higher volume
- Comparative Strength outperforms Nifty 50 / Nifty Bank
- On Balance Volume (OBV) rising (smart-money inflow)
↓
4–5 Signal Confluence → High-Probability Entry
## f) Speaker's cautions & common mistakes
- **Setups are probabilistic, not guarantees:** The speaker emphasizes that every technical setup—even with 4–5 aligned indicators—remains probability-based [00:19:33–00:20:04].
# BS-Lec04 – Stage 7: Homework Assignments & Closing [00:21:09–00:22:08]
## a) What this stage answers
Which four stocks must learners practice this technical framework on, and what specific entry, pyramiding, and exit questions should they answer?
## b) Detailed explanation
To close the session, the speaker asks learners to post their summary of learnings in the comment section and apply the full technical framework across **four practice charts** [00:21:09–00:22:08]:

- **Saregama:** Identify when the entry triggered via VSTOP and ADX on the **monthly chart**, check on the **weekly chart** when all 4–5 indicators turned positive, and test when selling triggered under both **2.0x** and **2.5x** VSTOP multipliers [00:21:09–00:21:41].
- **Eiffel finance [?]:** Identify when the entry and exit triggered on the chart [00:21:41–00:22:08].
- **Supreme Industries:** Apply the framework over the **last decade** to pinpoint historical entry and exit points [00:21:41–00:22:08].
- **Winnerty organics [?]:** Identify when the entry triggered, when pyramiding up occurred, and when exits triggered [00:22:08].

The speaker concludes by thanking participants, expressing confidence that when to buy, pyramid up, and exit is now clear, and signing off until the next class of SOIC Technical Analysis for Long-term Investors ("Jai Hind") [00:22:08].
## c) Examples & case studies
- **Example 1:** Saregama [00:21:09–00:21:41] — Homework chart to test monthly VSTOP + ADX entry, weekly 4–5 indicator confluence, and 2.0x vs. 2.5x VSTOP exits.
- **Example 2:** Eiffel finance [?] [00:21:41–00:22:08] — Homework chart to identify entry and exit triggers.
- **Example 3:** Supreme Industries [00:21:41–00:22:08] — Homework chart to trace 10-year entry and exit points.
- **Example 4:** Winnerty organics [?] [00:22:08] — Homework chart to trace entry, pyramiding, and exit triggers.
## d) Formulas, metrics & thresholds (if any)
None stated in this stage.
## e) Visual aid
None required.
## f) Speaker's cautions & common mistakes
None stated.

Batch complete: 5-7.

---

# BS-Lec04 – Close-out, Master Lists, Self-Test & Coverage Check
## 6. CONSOLIDATED FORMULA & METRIC SHEET

| **Metric / Screen** | **Formula / Filter Condition** | **Speaker's Benchmark** | **When to Use** | **Stage** | **Timestamp** |
| --- | --- | --- | --- | --- | --- |
| Parabolic SAR (Dot Position) | Trailing stop-and-reverse (SAR) dots plotted relative to candlesticks | Dots below candles = bullish; dots above candles = bearish | Never standalone; only to confirm active uptrend direction for pyramiding | Stage 2 | [00:02:12–00:02:40] |
| Parabolic SAR Increment | Step/increment setting on TradingView | 0.04 or 0.05 (0.05 reiterated in recap) | Configure when setting up monthly chart pyramiding | Stage 3, Stage 5 | [00:05:16–00:05:48], [00:15:17–00:15:47] |
| Initial Buy Signal (Monthly) | VSTOP + ADX & DI (with DI+/DI- hidden for clarity) | VSTOP = Positive (green) AND ADX > 20 | Bare minimum requirement to initiate a buy in core compounder stocks | Stage 3, Stage 5 | [00:04:42–00:05:16], [00:15:47–00:16:16] |
| Pyramiding (Averaging-Up) Signal | VSTOP + ADX + Parabolic SAR | VSTOP = Positive (green) AND ADX > 20 AND SAR dots below candles pointing upwards (not sideways) | Add tranches in an active uptrend; never pyramid if VSTOP is negative | Stage 3, Stage 5 | [00:07:26–00:07:54], [00:15:47–00:16:16] |
| Tranche Allocation Count | Number of buy/pyramid installments to reach target position (e.g., 3%–6%) | 2 to 4 tranches max (e.g., 2 × 2.5% or 3 × 2%); avoid 10–12 tranches | Position sizing during initial buy and pyramiding | Stage 4 | [00:08:29–00:08:52], [00:10:16–00:11:03] |
| VSTOP Exit Multiplier (Cyclicals) | Volatility Stop (VSTOP) length/multiplier setting on TradingView | 2.0x | Exit trigger (VSTOP turns negative/red) for cyclical or volatile-earnings businesses | Stage 2, Stage 4, Stage 5 | [00:04:09], [00:14:32–00:15:17] |
| VSTOP Exit Multiplier (Compounders) | Volatility Stop (VSTOP) length/multiplier setting on TradingView | 2.5x | Exit trigger (VSTOP turns negative/red) for low earnings-volatility compounders | Stage 4, Stage 5 | [00:12:41–00:13:13], [00:15:17–00:15:47] |
| RSI (Weekly) | Relative Strength Index (momentum oscillator) | Crosses above 50 with high volume (50 = support in uptrend, resistance in downtrend) | Weekly-chart probability booster alongside monthly entry area | Stage 6 | [00:16:16–00:17:23] |
| Comparative Relative Strength | Stock price performance relative to benchmark index (Nifty 50 or Nifty Bank) | Outperforming benchmark index (rising relative line) | Weekly-chart confirmation of market/sector leadership | Stage 6 | [00:17:52–00:19:33] |
| On Balance Volume (OBV) | Cumulative balance of positive-volume ("plus volume") days minus negative-volume days | Rising OBV (plus-volume days > negative-volume days) | Confirm smart-money / above-normal volume inflow on weekly chart | Stage 6 | [00:20:04–00:20:33] |
| Weekly Multi-Signal Confluence | VSTOP + ADX + RSI + Comparative Strength + OBV | All 4–5 signals positive simultaneously | High-probability confirmation for a monthly entry zone | Stage 6 | [00:20:33–00:21:09] |

## 7. GLOSSARY
- **ADX (Average Directional Index):** Trend-following indicator (loaded on TradingView via "ADX & DI" with DI+ and DI- hidden) used to measure trend strength; ADX > 20 is the minimum threshold for buying and pyramiding [00:00:32–00:01:09, 00:03:35–00:06:50].
- **Averaging Up (Pyramiding):** Adding tranches to an existing winning position in an uptrend so the investor's average buying price remains below the current market price (CMP) [00:06:50–00:07:26].
- **Comparative Strength (Comparative Relative Strength):** TradingView indicator comparing a stock's price performance against a relevant benchmark index (such as Nifty 50 or Nifty Bank; "Bharat Trader" version also mentioned) to check outperformance [00:17:52–00:19:01].
- **Compounder Business:** A core portfolio business with lower earnings volatility suited for 3–5+ year holding periods on monthly charts using a 2.5x VSTOP multiplier [00:07:54–00:08:29, 00:13:36–00:15:47].
- **Cyclical Business:** A business with higher earnings cyclicality where a tighter 2.0x VSTOP multiplier is applied for exits [00:14:32–00:15:47].
- **DI+ / DI-:** Directional indicator lines inside TradingView's ADX & DI tool; turned off in this setup so the ADX line is clearly visible against the 20 level [00:06:14–00:06:50].
- **On Balance Volume (OBV):** Volume indicator tracking the cumulative balance between positive-volume ("plus volume") days and negative-volume days to spot smart-money accumulation [00:20:04–00:20:33].
- **Parabolic SAR (Stop and Reverse):** A time- and price-based trailing stop-and-reverse indicator that plots dots below (bullish) or above (bearish) candlesticks; cannot measure trend strength and is used solely for pyramiding (increment 0.04 or 0.05) [00:01:09–00:03:35, 00:05:16–00:05:48].
- **Portfolio Churn:** Excessive buying and selling triggered by whipsaw signals when using Parabolic SAR standalone [00:02:40–00:03:04].
- **RSI (Relative Strength Index):** Momentum oscillator measuring the strength of price momentum; on weekly charts, 50 acts as support in uptrends and resistance in downtrends [00:16:16–00:17:23].
- **Satellite Portfolio:** Portfolio bucket contrasted with core compounders; covered in the prior class (BS-Lec03) using moving averages with VSTOP [00:04:09–00:04:42].
- **Tranche:** An individual buy installment used to build a target portfolio allocation (recommended: 2 to 4 tranches max) [00:08:29–00:11:03].
- **Volatility Stop (VSTOP):** Trend-following trailing stop indicator (length/multiplier 2.0x for cyclicals, 2.5x for compounders) used for both initial entry confirmation (positive/green) and exits (negative/red) [00:00:00–00:00:32, 00:04:09, 00:12:41–00:15:47].
- **Whipsaw:** Rapid false buy/sell reversals causing repeated stop-outs when a price-following indicator like Parabolic SAR is used standalone [00:02:12–00:03:04, 00:07:54–00:08:29].
## 8. EXAMPLES INDEX

| **Company / Example** | **Sector** | **Concept Illustrated** | **Stage** | **Timestamp** |
| --- | --- | --- | --- | --- |
| Investopedia & TradingView Description | Financial Education / Platform | Formal definition, calculation tooltip, and standalone-usage warning for Parabolic SAR | Stage 2 | [00:02:12–00:03:35] |
| Divi's Laboratories | Pharmaceuticals | Monthly chart setup (DI+/DI- off), initial buy (ADX > 20 + VSTOP + high volume), and upward vs. sideways Parabolic SAR pyramiding | Stage 3 | [00:05:48–00:07:54] |
| Dixon Technologies | Electronics Manufacturing | 3% allocation built in 3 tranches (₹1,100–₹1,700, avg ~₹1,400) and VSTOP exit near ₹3,800 (~1.5x–1.7x [? verify]) | Stage 4 | [00:07:54–00:09:46] |
| Laurus Labs | Pharmaceuticals | Max 4-tranche discipline (₹183 entry, 4th tranche ₹314, avg ₹220–₹250) and VSTOP exit near ₹500–₹520 | Stage 4 | [00:09:46–00:12:06] |
| PI Industries | Agrochemicals | 2.5x VSTOP multiplier for compounders riding 2013–March 2020 with only one trigger in 12–13 years (vs. SAR shakeout at ₹689–₹700 and 2.0x exit at ₹837) | Stage 4 | [00:12:06–00:13:36] |
| PG Electroplast | Electronics Manufacturing | Weekly chart signals showing swifter exits vs. monthly charts for 3–5 year compounders | Stage 4 | [00:13:36–00:14:06] |
| Equitas Small Finance Bank | Banking / Financial Services | Weekly early entry (5th Dec at ₹56) vs. monthly entry (₹51–₹57), 2.0x cyclical VSTOP multiplier, and weekly 4-signal confluence vs. Nifty Bank (RSI at 72.1) | Stage 4, Stage 6 | [00:14:06–00:15:17], [00:18:43–00:19:33] |
| Saregama | Media & Entertainment | Homework chart: monthly VSTOP + ADX entry, weekly 4–5 signal confluence, and 2.0x vs. 2.5x VSTOP exits | Stage 7 | [00:21:09–00:21:41] |
| Eiffel finance [?] | Financial Services [?] | Homework chart: identify entry and exit triggers | Stage 7 | [00:21:41–00:22:08] |
| Supreme Industries | Plastics / Industrials | Homework chart: trace entry and exit points over the last decade | Stage 7 | [00:21:41–00:22:08] |
| Winnerty organics [?] | Chemicals [?] | Homework chart: trace entry, pyramiding, and exit triggers | Stage 7 | [00:22:08] |

## 9. Q&A HIGHLIGHTS
None — this session had no audience Q&A segment.
## 10. CONCLUSION & NEXT STEPS
- **Closing message:** The speaker wrapped up by thanking participants and expressing confidence that when to buy, when to pyramid up, and when to exit are now clear [00:22:08].
- **Homework / Assignments:**
  - Post a summary of key learnings in the comment section [00:21:09–00:21:41].
  - Apply the framework across four practice charts: **Saregama** (monthly VSTOP + ADX entry, weekly 4–5 indicator confluence, and 2.0x vs. 2.5x exits), **Eiffel finance [?]** (entry and exit triggers), **Supreme Industries** (10-year entry and exit points), and **Winnerty organics [?]** (entry, pyramiding, and exit triggers) [00:21:09–00:22:08].
- **Tools / Resources referenced:** TradingView (ADX & DI, Volatility Stop, Parabolic SAR, RSI, Comparative Relative Strength / Bharat Trader, On Balance Volume) and Investopedia (Parabolic SAR definition) [00:02:12–00:04:09, 00:16:16–00:20:33].
- **Upcoming topics:** A dedicated session on **when to sell** is scheduled for the next class [00:00:00–00:00:32].
## 11. SELF-TEST
- **Conceptual:** Why must Parabolic SAR never be used as a standalone buy or sell indicator?
  - *Answer:* Because it is purely time- and price-based and cannot measure trend strength, causing frequent whipsaws, stop-outs, and high portfolio churn (Stage 2).
- **Conceptual:** What are the two bare-minimum conditions required to trigger an initial buy on a monthly chart?
  - *Answer:* VSTOP must be positive (green) and ADX must be above 20 (Stage 3, Stage 5).
- **Conceptual:** What additional condition must Parabolic SAR satisfy before you can pyramid up into an existing position?
  - *Answer:* Parabolic SAR (increment 0.04 or 0.05) dots must be below the candlesticks and visibly pointing upwards—not moving flat in a sideways consolidation—while VSTOP remains green and ADX > 20 (Stage 3, Stage 5).
- **Conceptual:** Why does the speaker advise against splitting a target allocation into 10–12 tranches?
  - *Answer:* If fundamental weakness begins and a downtrend starts, over-tranching pushes the average buying price much higher; 2 to 4 tranches max is recommended (Stage 4).
- **Applied (Dixon Technologies):** In the Dixon Technologies case study, a 3% allocation was built in 3 tranches between ₹1,100 and ₹1,700 (average cost ~₹1,400) after ADX > 20 and VSTOP turned positive. Which indicator triggered the exit, and at what price?
  - *Answer:* VSTOP turning negative (red) triggered the exit near ₹3,800; Parabolic SAR was ignored for exits (Stage 4).
- **Applied (Laurus Labs):** In Laurus Labs, the initial buy triggered near ₹183 and the 4th (max) tranche was added at ₹314 for an average cost of ₹220–₹250. Where did VSTOP trigger the exit?
  - *Answer:* Near ₹500–₹520 (Stage 4).
- **Applied (PI Industries):** How did switching the VSTOP multiplier from 2.0x to 2.5x affect the PI Industries holding from 2013 to March 2020?
  - *Answer:* With 2.0x, VSTOP exited in 2018 at ₹837 (while Parabolic SAR gave an early exit at ₹689–₹700); with 2.5x for a compounder, VSTOP triggered only once in 12–13 years up to the March 2020 COVID crash (Stage 4).
- **Conceptual:** How should an investor choose between a 2.0x and a 2.5x VSTOP multiplier?
  - *Answer:* Use 2.0x for cyclical businesses with higher earnings volatility, and 2.5x for low earnings-volatility compounders (Stage 4, Stage 5).
- **Conceptual:** When combining monthly and weekly charts (e.g., buying on weekly and selling on monthly), what prerequisite does the speaker emphasize?
  - *Answer:* Backtest the chosen system first and follow it consistently without switching rules mid-trade (Stage 4).
- **Applied (Weekly Probability Boosters):** On a weekly chart for a banking stock (such as Equitas Small Finance Bank), which four to five signals align for high-probability entry confirmation?
  - *Answer:* VSTOP positive, ADX > 20, weekly RSI crossing above 50 with higher volume (reaching 72.1 in the example), Comparative Relative Strength outperforming Nifty Bank, and rising On Balance Volume (OBV) (Stage 6).
## 12. GAPS & VERIFICATION LIST
- **Concepts only briefly mentioned:**
  - Earlier course classes referenced without re-teaching: Volatility Stop (VSTOP) mechanics, ADX mechanics, TradingView RSI 50 class, Comparative Strength class, On Balance Volume (OBV) 5–10 minute class, and BS-Lec03 satellite portfolio moving-average + VSTOP framework [00:00:00–00:00:32, 00:04:09–00:04:42, 00:16:53–00:20:33].
  - Dedicated "when to sell" framework deferred to the next class [00:00:00–00:00:32].
- **Items marked `[?]`, `[? verify]`, or `[? Hindi segment unclear]` to check against recording:**
  - `[07:54–08:29]` Dixon Technologies initial entry date: `"20th July"` [? verify] — year not spoken in transcript.
  - `[09:22–09:46]` Dixon Technologies return multiple: `"1.5 or 1.7 bagger types"` [? verify] — spoken figure against ₹1,400 average cost and ₹3,800 exit.
  - `[21:41–22:08]` `"Eiffel finance [?]"` — likely phonetic STT error (possibly IIFL Finance); no PPT slides to verify.
  - `[22:08]` `"Winnerty organics [?]"` — likely phonetic STT error (possibly Vinati Organics); no PPT slides to verify.
- **Slides that were not legible:**
  - None — no PPT PDF was provided for this lecture (transcript only).
## 13. COVERAGE CHECK
Full coverage confirmed: Stages 1–7 span `[00:00:00]` through `[00:22:08]` with no uncovered timestamp gaps.
