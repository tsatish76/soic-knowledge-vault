# 1. LECTURE HEADER
- **Lecture ID**: BS-Lec02
- **Title**: Mastering ADX (Average Directional Index) + Volatility Stop for Trend Breakouts and Cyclical Timing
- **Duration**: [00:00:00–00:30:13]
- **PPT used**: Not available (content grounded in transcript only)
- **Prerequisites referenced**: BS-Lec01 (Volatility Stop / V-Stop, RSI, Comparative Relative Strength, Stage Analysis)
# 2. KEY LEARNINGS
- **Pair ADX with V-Stop for earnings-growth / momentum strategies**: Designed by J. Welles Wilder, **ADX (Average Directional Index)** is a trending indicator (`direction ÷ volatility`) suited to QoQ earnings-growth stocks, whereas deep-value strategies use mean-reverting indicators [00:00:16–00:01:26, 00:04:07].
- **ADX thresholds measure trend strength, not direction**: `0–25` (or `0–20`) = absent/weak trend; `>20` = trend emerging; `25–50` = strong trend; `50–75` = very strong; `75–100` = extremely strong ("super trend") [00:05:33–00:06:46].
- **Use `+DI` and `-DI` to read directional control**: On TradingView (`ADX and DI`), green (`+DI`) rising while red (`-DI`) falls confirms bullish directional candles; when `-DI` forms higher highs and `+DI` forms lower highs (e.g., Aarti Industries), downward pressure dominates [00:02:49–00:04:07, 00:08:25–00:10:49, 00:20:49].
- **ADX is a strong BUY filter, but a lagging SELL indicator**: Because ADX lags on exits, waiting for ADX < 20 sacrifices gains (e.g., Bhansali Engineering Polymers would drop from an 8-bagger at ₹187 to a 2–3 bagger at ₹60); always use **V-Stop** (`2.5` for compounders, `1.5–2.0` for cyclicals) for exits [00:09:40, 00:12:45–00:13:20, 00:20:16–00:20:49].
- **Require BOTH `ADX > 20/25` AND green V-Stop before buying**: ADX alone is inconclusive; `20` catches moves earlier with occasional whipsaws, while `25` reduces false breakouts (e.g., wait on Surya Roshni while ADX < 20) [00:17:31, 00:21:41–00:22:22, 00:25:52].
- **Use Weekly charts for 6–9 month cyclicals and low allocations in consolidations**: For cyclicals (HEG, Deepak Fertilizers, Gujarat Ambuja Exports), use Weekly charts with V-Stop `2.0`; during long ADX < 25 consolidations (e.g., Syngene's 22-month base), keep allocation small until breakout [00:14:41–00:16:55, 00:18:07, 00:26:26–00:27:43].
# 3. LECTURE MAP

| **Stage #** | **Stage Title** | **Timestamp Range** | **Slides** | **Core Concepts** | **Examples/Companies Used** | **TVGP Tag** |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ADX Overview, Trending vs. Mean-Reverting Strategies & Wilder's Formula | [00:00:00–00:05:04] | Not available | Recap of Lec01; trending vs. mean-reverting indicators; J. Welles Wilder; `+DI`, `-DI`, `DX`, and `ADX = direction ÷ volatility` | None | — |
| 2 | ADX Strength Ranges (0–25–50–75–100) & TradingView Setup | [00:05:04–00:08:25] | Not available | ADX numeric zones (0–25 weak, 25–50 strong, 50–75 very strong, 75–100 super trend); TradingView `ADX and DI` setup; Investopedia article | Bhansali Engineering Polymers (setup) | — |
| 3 | ADX + V-Stop Breakout Case Studies | [00:08:25–00:18:07] | Not available | Avoiding multi-year sideways traps; ADX as buy vs. lagging sell; `20` vs. `25` threshold; low allocation during 22-mo bases | Bhansali Engg (₹27→₹187, ADX 86); Navin Fluorine (₹118→₹802, ₹1,372); Syngene (22-mo base); Reliance (₹601→₹2,600) | [TVGP: Growth, Valuation] |
| 4 | Cyclical & Headwind Warnings + Combining ADX with V-Stop | [00:18:07–00:22:22] | Not available | Weekly charts for cyclicals; `-DI` higher highs warning; why ADX alone fails without green V-Stop | Gujarat Ambuja Exports (₹21.5/kg maize, ₹300 exit); Aarti Ind (₹23→₹767–847); Deepak Nitrite (₹1,967 exit) | [TVGP: Valuation] |
| 5 | Weekly Cyclical Setups & System Discipline | [00:22:22–00:28:15] | Not available | Weekly V-Stop `2.0` on 6–9 mo cyclicals; ADX `91.5` overheat; waiting when ADX < 20; opportunity cost of flat ADX | HEG (₹200→₹3,600–3,700, ADX 91.5); IIFL Finance (₹275/₹353); Equitas SFB (₹56); Surya Roshni; Deepak Fertilizers (₹220→₹711) | [TVGP: Valuation] |
| 6 | Homework Practice List, Narayana Hrudayalaya & Closing | [00:28:15–00:30:13] | Not available | Monthly ADX `60–61` trend riding; multi-stock backtesting homework; top 7 learnings assignment | Narayana Hrudayalaya (₹433, ADX 60–61); RK Forgings, Vinati Organics, Laurus [?], Sun Pharma, Rainbow Hospitals | — |

# 4. CONCEPT FLOW
```
Stage 1: ADX Mechanics (+DI / -DI / Direction ÷ Volatility)
   ↓
Stage 2: ADX Strength Zones (0–25–50–75–100) & TradingView Setup
   ↓
Stage 3: Monthly Breakout Case Studies (ADX = Buy, V-Stop = Exit)
   ↓
Stage 4: Headwind Warnings (-DI Rising) & Mandatory ADX + V-Stop Pairing
   ↓
Stage 5: Weekly Cyclical Execution (V-Stop 2.0) & Waiting Discipline (<20 ADX)
   ↓
Stage 6: Multi-Stock Practice Homework & Top 7 Learnings Assignment
```


<!-- SOIC_AUDIO_BANNER_START -->
::: info 📝 Lecture Audio Transcript
*Interactive audio transcript will be linked when transcript file is added.*
:::
<!-- SOIC_AUDIO_BANNER_END -->
---

## 5. DETAILED STAGE-BY-STAGE NOTES

## BS-Lec02 – Stage 1: ADX Overview, Trending vs. Mean-Reverting Strategies & Wilder's Formula  [00:00:00–00:05:04]
### a) What this stage answers
What is the Average Directional Index (ADX), how does it differ from mean-reverting indicators, and how do `+DI` and `-DI` measure directional movement?
### b) Detailed explanation
#### Trending vs. Mean-Reverting Indicators
Recapping `BS-Lec01` (Volatility Stop, Comparative Relative Strength, RSI), the speaker introduces **ADX (Average Directional Index)**—another indicator created by **J. Welles Wilder** (`"Mr. Veles Wilder"`) [00:00:00–00:01:26]. ADX is a **trending indicator** that measures trend direction/strength, contrasting with **mean-reverting indicators** used by deep-value investors [00:00:16–00:00:52]. For investors targeting companies with strong QoQ earnings growth, combining **ADX with Volatility Stop (V-Stop)** produces a high-signal framework [00:00:52–00:01:26].
#### How `+DI`, `-DI`, `DX` & `ADX` Are Calculated
Rather than getting bogged down in heavy math, the speaker explains the intuition using daily/weekly/monthly candles [00:01:26–00:05:04]:

- **Positive Directional Indicator (`+DI`)**: When today's candle high exceeds the previous candle's high, directional movement is positive (`+DI`) [00:02:02–00:03:00].
- **Negative Directional Indicator (`-DI`)**: When lows break below previous lows, directional movement is negative (`-DI`) [00:03:00–00:04:07].
- **Formula intuition**: `ADX = Direction ÷ Volatility`—specifically, `DX` is the absolute difference between `+DI` and `-DI`, and **ADX** is the moving average of `DX` [00:04:07–00:05:04].

When ADX crosses **20–25** and begins forming higher highs, super-performing stocks often emerge (typically trading with ADX > 25) [00:01:26–00:02:02].
### c) Examples & case studies
None stated (candle high/low walkthrough is conceptual).
### d) Formulas, metrics & thresholds (if any)

| **Metric/Formula/Screen Filter** | **Definition or Expression** | **Speaker's benchmark/threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| ADX Intuition | `Direction ÷ Volatility` (moving avg of `DX = \|+DI - -DI\|`) | Crosses **20–25**; super-performers **>25** | Measures strength of trend regardless of up/down | [00:01:26–00:04:35] |

### e) Visual aid
```
Higher Candle Highs → +DI (Green) | Lower Candle Lows → -DI (Red)
DX = |+DI - -DI| → Moving Average of DX = ADX (Direction ÷ Volatility)
```
### f) Speaker's cautions & common mistakes
- Overcomplicating ADX into pure mathematics instead of focusing on its practical trend-strength reading [00:04:07–00:04:35].


## BS-Lec02 – Stage 2: ADX Strength Ranges (0–25–50–75–100) & TradingView Setup  [00:05:04–00:08:25]
### a) What this stage answers
What do the numeric ADX zones (0–100) signify, and how is ADX configured on free TradingView?
### b) Detailed explanation
#### Numeric ADX Strength Zones
The speaker breaks down the ADX scale from 0 to 100 [00:05:04–00:06:46]:

- **0–25** (or **0–20**): Trend is **absent or weak** (sideways consolidation) [00:05:33–00:06:46].
- **>20**: Trend is starting to pick up [00:06:10].
- **25–50**: **Strong trend** picking up [00:06:10].
- **50–75**: **Very strong trend** [00:06:10].
- **75–100** (or **80+**): **Extremely strong / "super trend"**—the strongest trending stocks [00:05:33, 00:06:46].

ADX helps time fresh buys across cyclicals, compounders, and stocks emerging from consolidation [00:06:46]. (An Investopedia `"investor media"` article on ADX is recommended for optional reading [00:06:46–00:07:50].)
#### TradingView `ADX and DI` Setup
On the **free** version of TradingView (note: free allows limited indicators, so speaker switches/layers with V-Stop), search the public library for **`ADX and DI`** [00:07:50–00:08:25, 00:08:25–00:09:02]:

- **Dark Blue line**: **ADX**
- **Green line**: **`+DI`**
- **Red line**: **`-DI`**
- **Horizontal level**: Set at **20** or **25** [00:08:25–00:09:02].
### c) Examples & case studies
- **Example: Bhansali Engineering Polymers (Setup Preview)**  [00:07:50–00:08:25] [Slide not available]
  - **Context**: Opening `ADX and DI` on TradingView to demonstrate the three lines.
  - **Data/details**: Blue = ADX, Green = `+DI`, Red = `-DI`, horizontal reference at 20/25.
  - **Takeaway**: Visualizes trend strength and directional control at a glance.
### d) Formulas, metrics & thresholds (if any)

| **Metric/Formula/Screen Filter** | **Definition or Expression** | **Speaker's benchmark/threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| ADX Strength Scale | 0–100 trend-strength index | `0–25` weak/absent; `>20` emerging; `25–50` strong; `50–75` very strong; `75–100` super trend | Filters out sideways stocks and flags active trends | [00:05:33–00:06:46] |

### e) Visual aid

| **ADX Value** | **Trend Strength** | **Actionable Meaning** |
| --- | --- | --- |
| **0–20 / 0–25** | Absent / Weak | Sideways consolidation; avoid tying up full capital |
| **20–25** | Emerging | Watchlist alert; watch for `+DI > -DI` + green V-Stop |
| **25–50** | Strong Trend | Prime trend-following zone |
| **50–75** | Very Strong Trend | High-momentum compounding |
| **75–100** | Extremely Strong / Super Trend | Rare super-trend (watch for overheating, e.g., 86–91.5) |

### f) Speaker's cautions & common mistakes
None stated.


## BS-Lec02 – Stage 3: ADX + V-Stop Breakout Case Studies  [00:08:25–00:18:07]  [TVGP: Growth, Valuation]
### a) What this stage answers
How does combining ADX breakouts (`>20/25`) with V-Stop help investors avoid multi-year sideways consolidations, enter Stage 2 early, and size allocations?
### b) Detailed explanation
#### ADX as a Buy Filter vs. V-Stop as an Exit Filter
Through live monthly and weekly chart walkthroughs, the speaker establishes a critical rule: **ADX is a very good buy indicator, but NOT a good sell indicator** [00:12:45–00:13:20]. Because ADX is a lagging average, waiting for ADX to drop back below 20 gives back most of the multi-bagger gain; instead, **V-Stop** (`1.5–2.0` for super-cyclicals, `2.5` for compounders) must handle the exit [00:09:40, 00:12:45–00:13:20].
#### Choosing `20` vs. `25` & Allocation Sizing in Consolidations
Setting the ADX threshold at **20** catches trends earlier (with slightly more false breakouts/whipsaws), whereas **25** puts you squarely into super-trending zones [00:13:20, 00:17:31]. When a fundamentally strong, asset-heavy business sits in a prolonged consolidation with ADX < 25, the speaker keeps **low portfolio allocation** until ADX breaks out above 25 and V-Stop turns green alongside operating leverage [00:14:41–00:16:55].
### c) Examples & case studies
- **Example 1: Bhansali Engineering Polymers (ABS Cyclical — 7–8 Bagger)**  [00:08:25–00:13:20]

  - **Context**: Avoiding a 5-year sideways trap and capturing an ABS cycle breakout.
  - **Data/details**: Monthly chart; ADX stayed below 20 from **2011 until late 2016** (zero buy signal); late 2016 ADX > 20 + `+DI` (green) rising + `-DI` (red) falling + volume buildup → buy at **₹20–27** → ADX hit **86** → peaked at **₹187** (~7–8 bagger). Cyclical V-Stop `1.5–2.0` exited near peak, whereas waiting for ADX < 20 exited at **₹60** (leaving only 2–3 baggers).
  - **Takeaway**: Enter on ADX > 20 + `+DI` + volume; exit on V-Stop (`1.5–2.0`), not ADX.

- **Example 2: Navin Fluorine (Monthly ADX > 25 Compounder)**  [00:13:20–00:14:41]

  - **Context**: Riding structural breakouts and re-entries on Monthly charts.
  - **Data/details**: 2014 buy when ADX > 25 + V-Stop green at **₹118** → ADX stayed near **80** until May 2018 (**₹802**) → V-Stop exit → re-entered **1 February** at **₹1,372** when ADX > 25 again, still riding.
  - **Takeaway**: ADX > 25 + V-Stop cleanly captures both initial breakouts and second-leg re-entries.

- **Example 3: Syngene ("Xinjin") & Reliance Industries**  [00:14:41–00:18:07]

  - **Context**: Managing opportunity cost during 22-month consolidations vs. multi-year breakouts.
  - **Data/details**: **Syngene** (Weekly): prior breakout at ADX 26 (`₹305 → ₹628`), followed by **22 months** of consolidation (Mar 2021 – Jan 2023; ADX < 25 since 25 Oct 2021) while sitting on dead assets ahead of operating leverage → keep allocation low until ADX > 25 + V-Stop green. **Reliance Industries** (Monthly): ADX > 20/25 breakout from **₹601** (2023 `[?]` / prior breakout) → **₹2,600** (note COVID dip).
  - **Takeaway**: Keep small allocations in Stage 1 consolidations until ADX > 25 confirms operating leverage is playing out.
### d) Formulas, metrics & thresholds (if any)

| **Metric/Formula/Screen Filter** | **Definition or Expression** | **Speaker's benchmark/threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| ADX Breakout Threshold | Monthly/Weekly ADX crossing horizontal line | **>20** (earlier, more whipsaws) or **>25** (cleaner super-trend) | Buy trigger only when paired with `+DI > -DI` & V-Stop green | [00:13:20, 00:17:31] |
| Super-Cyclical V-Stop | `ATR × Multiplier` | **1.5–2.0** (e.g., Bhansali Engg) | Tighter exit than 2.5 to protect cyclical gains | [00:09:40] |

### e) Visual aid
None needed.
### f) Speaker's cautions & common mistakes
- Using ADX < 20 as your sell signal instead of V-Stop, which gives back 50%+ of multi-bagger profits [00:12:45–00:13:20].
- Over-allocating capital to asset-heavy consolidations before ADX crosses 25 [00:14:41–00:16:55].

Batch complete: 1-3.

---

## BS-Lec02 – Stage 4: Cyclical & Headwind Warnings + Combining ADX with V-Stop  [00:18:07–00:22:22]  [TVGP: Valuation]
### a) What this stage answers
How do `-DI` higher highs and V-Stop exits protect investors when sector headwinds hit, and why must ADX always be paired with V-Stop?
### b) Detailed explanation
#### Reading Headwinds via `-DI` & Lagging ADX
When a business hits raw-material or demand headwinds, **ADX lags**—it may still look elevated from the prior uptrend even as the stock rolls over [00:19:43–00:20:49]. Two signals warn you to exit:

- **Red `-DI` forming higher highs** while **green `+DI` forms lower highs** (showing sellers have seized directional control) [00:19:43–00:20:49].
- **V-Stop turning red** (using `2.5` for compounders or Weekly charts for cyclicals), which triggers the exit well before ADX falls below 20 [00:18:39, 00:20:16–00:21:41].
#### The Mandatory Pairing Rule (ADX + V-Stop)
**Never use ADX in isolation**—ADX alone cannot tell you whether a trend is bullish or bearish, and using `ADX > 20` risks whipsaws (`"Wipsov"`) [00:21:41–00:22:22]. The highest-probability buy setup occurs when **BOTH `ADX > 20/25` AND V-Stop turns green**; even if `ADX > 20` whipsaws, a green V-Stop keeps your downside capped in sideways consolidation [00:21:41–00:22:22]. Practice this combination on **300–400 charts** (or 500–1,000 charts) to build pattern recognition [00:21:23, 00:24:12].
### c) Examples & case studies
- **Example 1: Gujarat Ambuja Exports (Weekly Cyclical & Maize Prices)**  [00:18:07–00:19:43]

  - **Context**: Using Weekly charts for cyclical commodity processors facing input-cost spikes.
  - **Data/details**: Maize prices rose to **₹21.5/kg** (20 Jan 2020 `[? verify]`), hurting inventory procurement and results; stock formed lower highs for ~6 months; prior swing `₹79` (27 July) → `₹177–180` exit; later V-Stop exited near **₹300** (monthly even earlier).
  - **Takeaway**: Cyclical valuations swing rapidly—use Weekly V-Stop to exit when input costs turn adverse.

- **Example 2: Aarti Industries & Deepak Nitrite ("debug nitrite")**  [00:19:43–00:21:41]

  - **Context**: Showing how V-Stop exits before lagging ADX drops.
  - **Data/details**: **Aarti Industries** (Monthly, `2.5` V-Stop): rode **₹23** (13 Nov) → V-Stop exit at **₹767–847** (`767–770` / `847`), while `-DI` (red) made higher highs and `+DI` (green) made lower highs. **Deepak Nitrite**: V-Stop exited around **₹1,967** (`"20, 20, 1960 and 7 1967"`) as ADX trended down.
  - **Takeaway**: Do not wait for lagging ADX to fall—exit when V-Stop triggers and `-DI` takes over.
### d) Formulas, metrics & thresholds (if any)

| **Metric/Formula/Screen Filter** | **Definition or Expression** | **Speaker's benchmark/threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| Combined Buy Filter | `ADX > 20/25` + `V-Stop = Green` | `20` (earlier, minor whipsaws) or `25` (cleaner) | Mandatory pairing; never buy on ADX alone | [00:21:41–00:22:22] |

### e) Visual aid
```
Headwind Exit Signal:  V-Stop Red + -DI (Red) Making Higher Highs + +DI (Green) Making Lower Highs → EXIT
Combined Buy Signal:   ADX Crosses > 20/25 + +DI > -DI + V-Stop Turns Green → BUY
```
### f) Speaker's cautions & common mistakes
- Buying or holding solely on ADX without combining it with V-Stop, or ignoring rising `-DI` higher highs during headwinds [00:19:43–00:22:22].


## BS-Lec02 – Stage 5: Weekly Cyclical Setups & System Discipline  [00:22:22–00:28:15]  [TVGP: Valuation]
### a) What this stage answers
How do Weekly ADX + V-Stop (`2.0`) setups work across 6–9 month cyclical rallies, and what should investors do when ADX stays flat below 20?
### b) Detailed explanation
#### Weekly Charts & `2.0` Multiplier for Cyclicals
For deeply cyclical businesses whose cycles last **6–9 months**, use **Weekly candles** with **V-Stop = 2.0** (instead of 2.5) so exits are tighter and gains are protected [00:22:22–00:23:35, 00:26:26–00:27:43]. When ADX reaches extreme levels like **91.5**, it signals market overheating [00:23:35].
#### Respecting the System & Opportunity Cost
If ADX has **not** crossed 20 (even if `+DI` is turning positive and V-Stop looks upward), **wait and respect your system**—do not jump the gun [00:25:52–00:26:26]. Conversely, if ADX drops below 20 and stays flat, both the stock and V-Stop will stagnate; investors who dislike sitting through dead-money consolidations can sell to put capital to work elsewhere [00:27:43–00:28:15].
### c) Examples & case studies
- **Example 1: HEG (Weekly Cyclical — ADX 91.5)**  [00:22:22–00:24:12]

  - **Context**: Full cyclical ride using Weekly ADX > 24–25 and V-Stop `2.0`.
  - **Data/details**: Buy signal when ADX > 24–25 + V-Stop green at **₹200–205** → ADX surged to **91.5** (rare overheat) → V-Stop exited at **₹3,600–3,700** (note ADX < 20 happened earlier, V-Stop gave the clean exit).
  - **Takeaway**: Weekly V-Stop `2.0` + ADX > 25 captures explosive cyclical runs and exits before the crash.

- **Example 2: IIFL Finance, Equitas SFB, Surya Roshni & Deepak Fertilizers**  [00:24:12–00:27:43]

  - **Context**: Comparing active entries, waiting setups, and cyclical exits.
  - **Data/details**:
    - **IIFL Finance**: Weekly breakout `₹353`; Monthly ADX 24 entry `₹270–290` (`₹275`).
    - **Equitas SFB**: Weekly chart (short listing history) — ADX > 20 at **₹56** + V-Stop trending up.
    - **Surya Roshni**: `+DI` positive and V-Stop turning up, **but ADX < 20** → no buy signal yet (respect the system).
    - **Deepak Fertilizers**: Weekly cyclical (6–9 mo cycles, V-Stop `2.0`) — ADX > 20 buy at **₹220** → V-Stop exit at **₹711**.
  - **Takeaway**: Wait patiently for ADX > 20/25 confirmation (Surya Roshni), and exit cyclicals cleanly on Weekly V-Stop `2.0` (Deepak Fertilizers).
### d) Formulas, metrics & thresholds (if any)

| **Metric/Formula/Screen Filter** | **Definition or Expression** | **Speaker's benchmark/threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| Cyclical Weekly V-Stop | Weekly chart, `Multiplier = 2.0` | **6–9 month** cyclical duration | Tighter stop than `2.5` to lock in cyclical peaks | [00:23:00, 00:26:26–00:27:43] |
| ADX Overheat Zone | Extreme ADX reading | **91.5** (HEG) | Signals extreme trend overheat | [00:23:35] |

### e) Visual aid
None needed.
### f) Speaker's cautions & common mistakes
- Buying prematurely before ADX crosses 20 (e.g., Surya Roshni) [00:25:52–00:26:26].
- Failing to test the ADX + V-Stop pairing across 500–1,000 charts before deploying capital [00:24:12].


## BS-Lec02 – Stage 6: Homework Practice List, Narayana Hrudayalaya & Closing  [00:28:15–00:30:13]
### a) What this stage answers
Which stocks should learners backtest for homework, and what is the next step in the technical analysis curriculum?
### b) Detailed explanation
#### Monthly Trend Riding & Practice Homework
Demonstrating **Narayana Hrudayalaya**, the speaker shows a classic breakout from consolidation where Monthly ADX crossed 20–22 and V-Stop turned positive at **₹433**; ADX currently sits at **60–61** with minor consolidation (both ADX and V-Stop flattening briefly before resuming) [00:28:50–00:29:42].
#### Assignments & Next Topics
- **Backtest homework**: Apply ADX + V-Stop across **Ramkrishna Forgings** (weekly cyclical), **Vinati Organics** (`"Vinnitya Organics"`), **Laurus Labs** (`"lot of slabs"` `[?]`), **Sun Pharma**, **Rainbow Hospitals** (new entry), and **Lasa / Lara** (`"lara"` `[?]` — fundamental fraud case) [00:28:15–00:28:50].
- **Reflection assignment**: Post your **top 7 learnings** from the class in the comments/discussion forum [00:28:15, 00:29:42].
- **Upcoming**: Mean-reverting indicators will be covered later alongside ongoing long-term technical classes [00:29:42–00:30:13].
### c) Examples & case studies
- **Example: Narayana Hrudayalaya (Monthly ADX 60–61 Compounder)**  [00:28:50–00:29:42]
  - **Context**: Riding an ongoing compounder trend with Monthly `2.5` V-Stop and ADX.
  - **Data/details**: Breakout buy at **₹433** (ADX > 20–22 + V-Stop green); currently Monthly ADX at **60–61** forming higher highs after brief consolidation.
  - **Takeaway**: Combine ADX > 20–25 entry with `2.5` V-Stop to stay in strong structural trends.
### d) Formulas, metrics & thresholds (if any)
None stated.
### e) Visual aid
None needed.
### f) Speaker's cautions & common mistakes
None stated.

Batch complete: 4-6.

---

## 6. CONSOLIDATED FORMULA & METRIC SHEET

| **Metric/Screen** | **Formula/Filter Condition** | **Speaker's Benchmark** | **When to Use** | **Stage** | **Timestamp** |
| --- | --- | --- | --- | --- | --- |
| ADX Intuition | `Direction ÷ Volatility` (moving avg of `DX = \|+DI - -DI\|`) | Crosses **20–25**; super-performers **>25** | Measuring trend strength in earnings-growth stocks | Stage 1 | [00:01:26–00:04:35] |
| ADX Strength Scale | 0–100 trend-strength index | `0–25` weak/absent; `>20` emerging; `25–50` strong; `50–75` very strong; `75–100` super trend | Filtering out sideways consolidations | Stage 2 | [00:05:33–00:06:46] |
| Combined Buy Filter | `ADX > 20/25` + `+DI > -DI` + `V-Stop = Green` | `20` (earlier, minor whipsaws) or `25` (cleaner) | Mandatory pairing for fresh entries; never buy on ADX alone | Stages 3–4 | [00:17:31, 00:21:41–00:22:22] |
| Super-Cyclical / Weekly V-Stop | `ATR × Multiplier` | **1.5–2.0** (Weekly for 6–9 mo cyclicals) vs. **2.5** (Monthly compounders) | Tighter exit protection on cyclical swings | Stages 3, 5 | [00:09:40, 00:26:26–00:27:43] |
| ADX Overheat Zone | Extreme ADX reading | **91.5** (HEG), **86** (Bhansali), **80** (Navin) | Recognizing extreme trend maturity | Stages 3, 5 | [00:11:22, 00:13:57, 00:23:35] |



## 7. GLOSSARY
- **ADX (Average Directional Index)**: Trending indicator created by J. Welles Wilder measuring trend strength (`Direction ÷ Volatility`) on a 0–100 scale [00:00:16–00:05:04].
- **+DI (Positive Directional Indicator)**: Green line on TradingView `ADX and DI` measuring upward candle high expansion [00:02:49–00:04:07, 00:08:25].
- **-DI (Negative Directional Indicator)**: Red line on TradingView `ADX and DI` measuring downward candle low expansion; higher highs warn of seller control [00:03:39–00:04:07, 00:19:43–00:20:49].
- **DX**: Absolute difference between `+DI` and `-DI`; ADX is the moving average of DX [00:04:07].
- **Trending vs. Mean-Reverting Indicators**: Trending indicators (ADX, V-Stop) suit QoQ earnings-growth momentum; mean-reverting indicators suit deep-value strategies [00:00:16–00:00:52].
- **Whipsaw (`"Wipsov"`)**: False breakout above/below a threshold (more common at ADX 20 than 25) [00:22:22].


## 8. EXAMPLES INDEX

| **Company/Example** | **Sector** | **Concept Illustrated** | **Stage** | **Timestamp** |
| --- | --- | --- | --- | --- |
| Bhansali Engineering Polymers | Specialty Polymers (ABS) | Avoided 2011–16 base; ADX >20 at ₹27 → ADX 86, ₹187; ADX <20 lag vs. V-Stop 1.5–2.0 | Stages 2–3 | [00:07:50–00:13:20] |
| Navin Fluorine | Specialty Chemicals | Monthly ADX >25 at ₹118 → ₹802 (May 18); re-entry 1 Feb at ₹1,372 | Stage 3 | [00:13:20–00:14:41] |
| Syngene ("Xinjin") | Pharma / CRO | 22-mo consolidation (Mar 21–Jan 23; prior ₹305→₹628); low allocation until ADX >25 | Stage 3 | [00:14:41–00:16:55] |
| Reliance Industries | Conglomerate | Monthly ADX >20/25 breakout from ₹601 → ₹2,600 | Stage 3 | [00:16:55–00:18:07] |
| Gujarat Ambuja Exports | Agro Processing | Weekly cyclical; ₹21.5/kg maize headwind; ₹79→₹177–180 & ₹300 V-Stop exit | Stage 4 | [00:18:07–00:19:43] |
| Aarti Industries | Specialty Chemicals | Monthly 2.5 V-Stop exit ₹767–847 (from ₹23); `-DI` higher highs while ADX lagged | Stage 4 | [00:19:43–00:21:23] |
| Deepak Nitrite ("debug nitrite") | Specialty Chemicals | V-Stop exit around ₹1,967 | Stage 4 | [00:21:23–00:21:41] |
| HEG | Graphite Electrodes | Weekly V-Stop 2.0 + ADX >24–25 at ₹200–205 → ADX 91.5 → exit ₹3,600–3,700 | Stage 5 | [00:22:22–00:24:12] |
| IIFL Finance | NBFC / Lending | Weekly ADX breakout ₹353; Monthly ADX 24 entry ₹270–290 (₹275) | Stage 5 | [00:24:12–00:25:18] |
| Equitas Small Finance Bank | Banking | Weekly ADX >20 at ₹56 + V-Stop trending up | Stage 5 | [00:25:18–00:25:52] |
| Surya Roshni | Steel Pipes / Lighting | ADX <20 despite `+DI` rising → wait and respect system | Stage 5 | [00:25:52–00:26:26] |
| Deepak Fertilizers | Chemicals / Fertilizers | Weekly 6–9 mo cyclical (V-Stop 2.0); ADX >20 buy ₹220 → V-Stop exit ₹711 | Stage 5 | [00:26:26–00:27:43] |
| Narayana Hrudayalaya | Healthcare | Monthly ADX >20–22 + V-Stop buy ₹433; riding at ADX 60–61 | Stage 6 | [00:28:50–00:29:42] |
| RK Forgings, Vinati, Laurus [?], Sun Pharma, Rainbow, Lasa [?] | Multi-sector | Assigned backtesting homework charts | Stage 6 | [00:28:15–00:28:50] |



## 9. Q&A HIGHLIGHTS
No dedicated Q&A segment occurred; the session concluded with homework and discussion-forum prompts [00:28:15–00:30:13].


## 10. CONCLUSION & NEXT STEPS
- **Closing message**: Combine `ADX > 20/25` with green V-Stop (`2.5` for compounders, `2.0` weekly for cyclicals) as a disciplined buy/exit framework [00:27:08–00:29:42].
- **Homework**: Practice ADX + V-Stop on **300–400 to 500–1,000 charts** (including Ramkrishna Forgings, Vinati Organics, Laurus Labs [?], Sun Pharma, Rainbow Hospitals, Lasa [?]) and post **top 7 learnings** in the discussion forum [00:21:23, 00:24:12, 00:28:15–00:29:42].
- **Reading**: Investopedia article on ADX [00:06:46–00:07:50].
- **Upcoming topics**: Mean-reverting indicators and additional long-term technical classes [00:29:42–00:30:13].


## 11. SELF-TEST
- **What does ADX measure, and how do `+DI` and `-DI` differ?** *(Stage 1)*
  - **Answer**: ADX (`Direction ÷ Volatility`) measures trend strength (0–100), not direction; `+DI` (green) tracks upward high expansion while `-DI` (red) tracks downward low expansion.
- **List the ADX numeric zones from 0 to 100.** *(Stage 2)*
  - **Answer**: `0–25` absent/weak, `>20` emerging, `25–50` strong, `50–75` very strong, `75–100` extremely strong / super trend.
- **Applied: In Bhansali Engineering Polymers, ADX crossed 20 at ₹27, hit 86 near ₹187, and later fell below 20 around ₹60. Why should ADX NOT be used to sell?** *(Stage 3)*
  - **Answer**: ADX is a lagging average; waiting for ADX < 20 turns an 8-bagger into a 2–3 bagger, whereas V-Stop (`1.5–2.0`) exits near the peak.
- **Applied: In Aarti Industries, ADX was still elevated while `-DI` made higher highs and `+DI` made lower highs. What did V-Stop do?** *(Stage 4)*
  - **Answer**: Monthly `2.5` V-Stop triggered an exit around ₹767–847 (from ₹23) well before lagging ADX dropped.
- **Applied: Surya Roshni has `+DI` turning positive and V-Stop trending up, but ADX is below 20. Should you buy?** *(Stage 5)*
  - **Answer**: No—respect the system and wait until BOTH `ADX > 20/25` and V-Stop is green.
- **What timeframe and V-Stop multiplier does the speaker use for 6–9 month cyclicals like HEG and Deepak Fertilizers?** *(Stage 5)*
  - **Answer**: Weekly charts with `V-Stop = 2.0` (capturing HEG ₹200–205 → ₹3,600–3,700 and Deepak Fertilizers ₹220 → ₹711).


## 12. GAPS & VERIFICATION LIST
- **Concepts only briefly mentioned**:
  - Mean-reverting indicators for deep-value strategies (deferred to future sessions) [00:00:52, 00:29:42].
  - Note: Although the transcript title mentions *Moving Averages, ADX, RSI, Comparative Strength*, this 30-minute class covered ADX + V-Stop exclusively.
- **Items marked `[?]`, `[? verify]`, or `[? Hindi segment unclear]` to check against recording**:
  - `[00:17:31]` Reliance `₹601` breakout `"that is 23"` `[?]` — verify exact year/date of breakout.
  - `[00:18:07]` Gujarat Ambuja Exports maize price `₹21.5/kg` on `20 Jan 2020` `[? verify]` — verify exact year (2020 vs. 2023).
  - `[00:28:15]` `"lot of slabs"` (likely Laurus Labs) and `"lara"` (likely Lasa Supergenerics) `[?]`.
- **Slides not legible / skipped**:
  - No standalone PPT file for `BS-Lec02`; grounded solely in transcript.


## 13. COVERAGE CHECK
Full coverage confirmed: Stages 1–6 cover `[00:00:00–00:30:13]` continuously with zero timestamp gaps.
