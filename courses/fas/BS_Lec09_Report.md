# BS-Lec09 — Step 1A: Skeleton & Lecture Map

## 1. LECTURE HEADER
- **Lecture ID:** BS-Lec09
- **Title:** How to Correctly Use SOIC LTI Tool & Stage Analysis Tool
- **Duration:** [00:00:02–00:18:38]
- **PPT used:** None (live TradingView tool walkthrough; no PPT PDF in `01_Sources`)
- **Prerequisites referenced:** L3 of SOIC course (business valuation), earlier L4 technical analysis concepts (30-weekly EMA, RSI, ADX, V-Stop / volatility stop, relative strength, Parabolic SAR).


<!-- SOIC_AUDIO_BANNER_START -->
::: info 📝 Lecture Audio Transcript
*Interactive audio transcript will be linked when transcript file is added.*
:::
<!-- SOIC_AUDIO_BANNER_END -->
---

## 2. KEY LEARNINGS
- **Invite-Only TradingView Access:** After subscribing to SOIC LTI, users must submit their exact TradingView ID to receive access to both proprietary indicators (*SOIC Long Term Indicator* and *SOIC Stage Indicator*) under TradingView's "Invite-only scripts" section [00:00:54].
- **SOIC Stage Indicator Benchmark & Lookback:** Inspired by *Secrets for Profiting in Bull and Bear Markets*, the Stage Indicator compares a stock's relative strength against a user-selectable benchmark (default Nifty, or sector indices like a bank index) using a 52-week lookback on weekly charts and 12-month lookback on monthly charts; a green background signals Nifty outperformance and red signals underperformance [00:01:40–00:02:51].
- **V-Stop & High Settings:** Keep Volatility Stop (V-Stop) length at 10 with a multiplier of 2 or 2.5 (applicable on both weekly and monthly charts); the 52-period high setting plots a triangle whenever the stock hits a 52-week high [00:02:51–00:03:59, 00:10:25].
- **Stage Indicator Buy/Sell Rules (Shorter-Term / Cyclicals):** A buy triggers when both V-Stop and relative strength turn positive (usually accompanied by high volumes and rising 30-weekly EMA); a sell triggers when V-Stop turns negative along with falling relative strength—ideal for cyclical businesses (e.g., RK Forge, Ador Welding) on weekly charts [00:04:38–00:06:08, 00:08:24].
- **Time-Series Alignment (Monthly vs. Weekly):** For high-conviction stocks, combine monthly chart conviction with weekly chart timing (rising 30-weekly EMA, building volumes, positive V-Stop, increasing relative strength) to optimize entry odds [00:06:40–00:07:16].
- **SOIC LTI Default Inputs:** Use 14-period RSI with buy signal at 45, Comparative Symbol length at 52 (weekly) / 12 (monthly), V-Stop length 10 with multiplier 2 or 2.5, Parabolic SAR (increment 0.02 [0.05? verify], max value 0.2), and 52-week / 12-month high setting [00:09:41–00:10:58].
- **Four LTI Buy Conditions & Parabolic SAR Averaging Up:** The four key buying signals in SOIC LTI are: (1) RSI crossing 45, (2) ADX crossing 20 (optional), (3) V-Stop turning positive, and (4) Relative Strength outperforming the benchmark; Parabolic SAR turns positive as flags only once all conditions align and is used to average up in tranches—provided L3 fundamentals/valuations remain reasonable [00:10:58–00:12:19].
- **ADX 20 vs. ADX 0 Trade-Off:** Because ADX averages positive and negative directional movement, prior downtrends can keep ADX below 20 and delay buy confirmations (e.g., Syngene); setting ADX to `0` disables it so RSI (45) + Relative Strength + V-Stop + Parabolic SAR drive entries, while ADX `20` acts as an optional late confirmation [00:12:19–00:14:43, 00:17:11].

---

## 3. LECTURE MAP

| Stage # | Stage Title | Timestamp Range | Slides | Core Concepts | Examples/Companies Used | TVGP Tag |
|---|---|---|---|---|---|---|
| 1 | Course Context & Invite-Only Script Access | 00:00:02–00:01:25 | None | SOIC LTI & Stage Indicator overview; TradingView ID requirement; Invite-only scripts access | Narayana Hrudayalaya (opened on weekly chart) | — |
| 2 | SOIC Stage Indicator — Relative Strength & Settings | 00:01:25–00:04:38 | None | Inspiration from *Secrets for Profiting in Bull and Bear Markets*; Comparative symbol & length (52 weekly / 12 monthly); Green vs. red background; V-Stop (length 10, multiplier 2 or 2.5); 52-week high triangle & style customization | Narayana Hrudayalaya | — |
| 3 | SOIC Stage Indicator — Buy/Sell Rules, Cyclicals & Case Studies | 00:04:38–00:08:57 | None | Buy trigger (V-Stop + RS positive + high volume); Sell trigger (V-Stop negative + falling RS); Weekly chart exits for cyclicals vs. monthly holding; Time-series analysis (monthly + weekly + 30-weekly EMA) | RK Forge, Ador Welding, Equitas Small Finance Bank [?], "living financial services" [?] | — |
| 4 | SOIC Long-Term Indicator (LTI) — Inputs & Default Settings | 00:08:57–00:10:58 | None | Clubbing course learnings into one LTI tool; RSI (14, buy signal 45, James Wilder [?]); ADX (0 to disable or 20); Comparative strength (52/12); V-Stop (10, 2/2.5); Parabolic SAR (0.02, 0.05, max 0.2); 52-week/12-month high | Apcotex [?], ICICI Bank | — |
| 5 | SOIC LTI — Parabolic SAR Averaging Up & 4 Buy Conditions | 00:10:58–00:12:19 | None | Parabolic SAR flags for averaging up in tranches; 4 key LTI buying conditions (RSI > 45, ADX > 20, V-Stop positive, RS > benchmark); Validating with L3 valuation | Four-tranche position example on ICICI Bank | [TVGP: Valuation] |
| 6 | ADX 20 vs. ADX 0 Trade-Off & Syngene Case Study | 00:12:19–00:14:43 | None | Why ADX lags after downtrends (average directional calculation); Disabling ADX (`0`) vs. keeping ADX `20` for late confirmation; Combining RSI, RS, V-Stop, Parabolic SAR, and volumes | Syngene [?] | — |
| 7 | Noise-Free Compounding Case Studies & Mixing Fundamentals | 00:14:43–00:17:11 | None | Noise-free compounding on monthly charts; Using LTI + valuation mindset to boost hit rates; Fundamental catalysts + technical buy triggers | Shivalik Bimetal, Divi's Laboratories [?], South Indian Bank | [TVGP: Valuation] |
| 8 | Summary of Settings, Membership Access & Closing | 00:17:11–00:18:38 | None | Recap of recommended settings (ADX 0 vs. 20); 1-year vs. 3-year SOIC membership inclusion; Invite-only scripts reminder; Closing | — | — |

---

## 4. CONCEPT FLOW

Stage 1: TradingView Invite-Only Access (SOIC Stage & LTI)
  → Stage 2: SOIC Stage Indicator Settings (RS Benchmark 52W/12M, V-Stop 10/2–2.5, 52W High)
    → Stage 3: Stage Indicator Buy/Sell Rules (Cyclicals on Weekly + Time-Series Monthly/Weekly Alignment)
      → Stage 4: Transition to SOIC LTI & Full Input Configuration (RSI 14/45, ADX 0 or 20, V-Stop, Parabolic SAR)
        → Stage 5: LTI 4 Buy Conditions & Parabolic SAR Flags for Tranche Averaging (+ L3 Valuation Check)
          → Stage 6: Resolving ADX Lag (ADX 0 vs. ADX 20 Confirmation on Syngene)
            → Stage 7: Noise-Free Monthly Compounding & Fundamental Catalyst Integration (Shivalik, Divi's, South Indian Bank)
              → Stage 8: Settings Recap, Membership Access & Session Close

---

---

## 5. DETAILED STAGE-BY-STAGE NOTES

# BS-Lec09 — Step 1B: Detailed Stage Breakdown (Stages 1–4)
## BS-Lec09 – Stage 1: Course Context & Invite-Only Script Access  [00:00:02–00:01:25]
### a) What this stage answers
How do subscribers access the SOIC Long-Term Indicator (LTI) and SOIC Stage Indicator on TradingView, and what is the scope of this walkthrough?
### b) Detailed explanation
The session introduces two proprietary TradingView indicators built for the SOIC technical analysis course: the **SOIC Long-Term Indicator (SOIC LTI)** and the **SOIC Stage Indicator** [00:00:02–00:00:22, 00:00:54–00:01:25]. The walkthrough covers what each indicator does, the custom tools and ratios configurable inside both, and the exact settings to follow, illustrated through multiple business case studies [00:00:02–00:00:54].

To access the tools after subscribing to SOIC LTI, users must submit their exact TradingView channel/ID name [00:00:54]. Once access is granted, both scripts appear inside TradingView under the **"Invite-only scripts"** section [00:00:22–00:00:54]. The speaker begins with the **SOIC Stage Indicator** first because it helps identify which stage a stock is currently in [00:00:54–00:01:25].
### c) Examples & case studies
- **Example:** Narayana Hrudayalaya (STT: "Narayana Hathayalai") [00:01:25]
- **Context:** Initial chart setup to demonstrate the SOIC Stage Indicator.
- **Data/details:** Weekly chart opened with the SOIC Stage Indicator already applied.
- **Walkthrough:** The speaker turns off the camera for full screen visibility and opens Narayana Hrudayalaya on a weekly timeframe to inspect Stage Indicator settings.
- **Takeaway:** Weekly charts serve as the starting canvas for demonstrating Stage Indicator configuration.
### d) Formulas, metrics & thresholds (if any)
None stated.
### e) Visual aid
Access workflow: `Subscribe to SOIC LTI` → `Submit exact TradingView ID` → `Open TradingView → Invite-only scripts` → `Apply SOIC Stage Indicator / SOIC Long-Term Indicator` [00:00:22–00:01:25]
### f) Speaker's cautions & common mistakes
- Ensure you enter your **exact** TradingView ID; otherwise, invite-only script access cannot be provisioned properly [00:00:54].


## BS-Lec09 – Stage 2: SOIC Stage Indicator — Relative Strength & Settings  [00:01:25–00:04:38]
### a) What this stage answers
How is the SOIC Stage Indicator constructed, and what benchmark, Volatility Stop (V-Stop), and display settings should be configured?
### b) Detailed explanation
The SOIC Stage Indicator is inspired by the book *Secrets for Profiting in Bull and Bear Markets* (STT: "the secret from profiting from bull and bear markets") [00:01:40]. It combines **Volatility Stop (V-Stop)** with **Relative Strength (RS)** against an underlying benchmark to show which market stage a stock is in [00:01:40].

- **Comparative Symbol & Lookback Length:**

  - By default, the benchmark is Nifty, but users can change the comparative symbol to any relevant index—for example, comparing a bank stock against a banking index [00:01:40–00:02:16].
  - On **weekly charts** (shorter-term time horizon), set the comparative strength length to **52** (representing 1 year = 52 weeks) [00:02:16].
  - On **monthly charts**, it automatically sets to **12** (representing 1 year = 12 months) [00:02:16].
  - **Background Color Interpretation:** Provided the company has sufficient listing history, a **green background** indicates the stock's relative strength is outperforming Nifty, whereas a **red background** indicates its relative strength is inferior to Nifty [00:02:16–00:02:51].

- **V-Stop Settings:**

  - Keep the V-Stop **length at 10** without changing it much [00:02:51].
  - Set the **multiplier to 2 or 2.5** [00:02:51–00:03:21].

- **High Settings & Style Customization:**

  - **High Settings** is a lookback period (52 weeks on weekly / 12 months on monthly) that plots a **triangle** whenever the stock hits a 52-week high [00:03:21].
  - Users can keep or remove the high-setting triangles under the **Style → Shapes** menu depending on visual preference [00:03:21–00:03:59].
  - Similarly, V-Stop visualization can be customized under Style (area, line, dotted area, or crosses) for cleaner chart readability [00:03:59–00:04:38].
### c) Examples & case studies
- **Example:** Narayana Hrudayalaya (STT: "Narendra and Narendra") [00:02:16–00:04:38]
- **Context:** Demonstrating relative strength background shading, V-Stop settings, and style customization.
- **Data/details:** Weekly chart; comparative length = 52; V-Stop length = 10, multiplier = 2 or 2.5.
- **Walkthrough:** The speaker shows the green background indicating Nifty outperformance, explains how to toggle off the 52-week high triangles, and switches the V-Stop plot style to a simpler line/cross format.
- **Takeaway:** Green background = outperforming the benchmark; red background = underperforming the benchmark.
### d) Formulas, metrics & thresholds (if any)

| **Metric/Formula/Screen Filter** | **Definition or Expression** | **Speaker's benchmark/threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| Comparative Strength Length | Lookback period vs. benchmark index (default Nifty) | 52 (weekly) / 12 (monthly) | Compares stock performance against last 1 year of benchmark | [00:02:16] |
| Relative Strength Background | Visual shading from comparative strength | Green = Outperforming; Red = Inferior | Green signals positive RS vs. benchmark; red signals underperformance | [00:02:16–00:02:51] |
| V-Stop (Volatility Stop) | Trailing volatility-based trend stop | Length = 10; Multiplier = 2 or 2.5 | Core trend filter; keep length at 10 without over-tweaking | [00:02:51–00:03:21] |
| High Settings | Lookback period for new highs | 52-week high (plots triangle) | Optional visual marker when stock hits a 52-week high | [00:03:21–00:03:59] |

### e) Visual aid
None.
### f) Speaker's cautions & common mistakes
- Do not over-tweak the V-Stop length; keep it at **10** with a multiplier of **2 or 2.5** [00:02:51–00:03:21].


## BS-Lec09 – Stage 3: SOIC Stage Indicator — Buy/Sell Rules, Cyclicals & Case Studies  [00:04:38–00:08:57]
### a) What this stage answers
What are the exact buy and sell rules for the SOIC Stage Indicator, when should it be used on weekly versus monthly charts, and how does multi-timeframe alignment improve entry odds?
### b) Detailed explanation
- **Buy & Sell Rules:**

  - **Buy Signal:** Triggers when **both** (1) V-Stop turns green/positive **and** (2) Relative Strength turns positive versus Nifty [00:04:38–00:05:04]. The speaker notes that valid buy triggers are usually followed or accompanied by **very high volumes** [00:05:04].
  - **Sell Signal:** Triggers when **V-Stop turns negative** along with **falling relative strength** of the stock [00:05:04–00:05:36].

- **Cyclicals vs. Long-Term Holding (Weekly vs. Monthly):**

  - For **cyclical businesses** where an explicit exit strategy is essential (because demand cycles are unpredictable), the SOIC Stage Indicator on **weekly charts** is highly effective—it stops you out during an accelerated downtrend or even a slightly sideways trend [00:05:36–00:06:08].
  - However, weekly signals are meant purely for shorter-term horizons [00:06:08]. On a **monthly chart**, the Stage Indicator behaves like the SOIC Long-Term Indicator and rarely issues exits unless something fundamentally bad happens [00:06:08]. Users can also set TradingView alerts on these triggers [00:06:08–00:06:40].

- **Time-Series Analysis (Combining Monthly & Weekly):**

  - Even when tracking a high-conviction stock on a **monthly chart**, checking the **weekly chart** helps optimize entry timing [00:06:40–00:07:16].
  - Look for **3–4 converging signals** on the weekly chart: (1) rising **30-weekly Exponential Moving Average (EMA)**, (2) slowly building **volumes**, (3) **positive V-Stop**, and (4) **increasing relative strength** [00:06:40–00:07:16, 00:08:24–00:08:57].
  - During consolidation, V-Stop moves sideways; once price accelerates with building volumes and relative strength, V-Stop begins forming higher highs and trending upward [00:07:45].
### c) Examples & case studies
- **Example:** RK Forge [00:05:36]

  - **Context:** Cyclical forging business needing an exit strategy.
  - **Data/details:** Weekly chart with SOIC Stage Indicator; potential US recessionary environment cited as macro uncertainty.
  - **Walkthrough:** Because it is unknown when forging companies will stop doing well, weekly V-Stop + RS sell signals protect downside.
  - **Takeaway:** Use weekly Stage Indicator exits to manage cycle risk in forging/export cyclicals.

- **Example:** Ador Welding [00:05:36]

  - **Context:** Cyclical capital-goods/welding business tied to Capex (STT: "Kpex") demand.
  - **Data/details:** Weekly chart with SOIC Stage Indicator.
  - **Walkthrough:** Since the duration of Capex demand cannot be predicted with certainty, the weekly Stage Indicator stops the investor out if an accelerated downtrend or sideways stagnation begins.
  - **Takeaway:** Weekly Stage Indicator provides disciplined exits when Capex cycles turn.

- **Example:** Equitas Small Finance Bank [?] (STT: "equity, equity small finance bank") [00:06:40]

  - **Context:** Demonstrating weekly buy trigger and multi-timeframe alignment.
  - **Data/details:** Buy triggered at **₹56** on the chart (V-Stop displayed as crosses).
  - **Walkthrough:** Shows the ₹56 buy trigger and explains checking weekly 30-EMA, building volumes, positive V-Stop, and rising RS alongside monthly conviction.
  - **Takeaway:** Combining monthly conviction with weekly time-series alignment improves entry odds.

- **Example:** "living financial services" [?] (STT: "living financial services") [00:07:45–00:08:57]

  - **Context:** Comparing weekly vs. monthly buy triggers and 30-weekly EMA alignment.
  - **Data/details:** Weekly chart buy triggered at **₹278**; monthly chart buy triggered from the upper candle at **₹196**.
  - **Walkthrough:** Demonstrates how monthly entries occur earlier/smoother (₹196) while weekly charts show the 30-weekly EMA turning up alongside V-Stop and RS (₹278).
  - **Takeaway:** Mixing 30-weekly EMA, V-Stop, and RS works well for shorter-term horizons, while monthly charts capture broader holds.
### d) Formulas, metrics & thresholds (if any)

| **Metric/Formula/Screen Filter** | **Definition or Expression** | **Speaker's benchmark/threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| Stage Indicator Buy Signal | V-Stop positive + Relative Strength positive vs. benchmark | Both positive (typically with high volumes) | Confirms stage transition into outperformance | [00:04:38–00:05:04] |
| Stage Indicator Sell Signal | V-Stop negative + Relative Strength falling | Both negative/falling | Triggers exit; ideal on weekly charts for cyclicals | [00:05:04–00:05:36] |
| Time-Series Alignment | 30-weekly EMA rising + Building volumes + V-Stop positive + RS rising | 3–4 conditions aligned on weekly chart | Optimizes entry odds for high-conviction monthly ideas | [00:06:40–00:07:16, 00:08:24] |

### e) Visual aid
Decision checklist for weekly Stage Indicator entries:

- Monthly conviction + business quality verified [00:06:40–00:07:16]
- 30-weekly EMA turning upward [00:06:40, 00:08:24]
- V-Stop positive and forming higher highs [00:04:38, 00:07:45]
- Relative Strength positive/increasing vs. benchmark [00:04:38, 00:06:40]
- Volumes building/high on breakout [00:05:04, 00:06:40]
### f) Speaker's cautions & common mistakes
- Weekly Stage Indicator exits are **purely for shorter-term horizons / cyclicals**; applying weekly exits to long-term compounders will shake you out during sideways consolidations [00:06:08].
- Technical alignment only optimizes odds—you must still evaluate the underlying business [00:07:16].


## BS-Lec09 – Stage 4: SOIC Long-Term Indicator (LTI) — Inputs & Default Settings  [00:08:57–00:10:58]
### a) What this stage answers
How do you configure the inputs of the SOIC Long-Term Indicator (LTI) on monthly and weekly charts?
### b) Detailed explanation
The speaker transitions to the **SOIC Long-Term Indicator (SOIC LTI)**, noting that the entire technical learnings of the course (4–5 core tools) are clubbed into this single indicator [00:08:57]. After briefly opening Apcotex [?] (STT: "Appcotex"), the speaker opens **ICICI Bank** on a **monthly chart** to walk through every input parameter [00:08:57–00:09:41]:

- **RSI:** Keep the default length at **14 periods** (referencing the creator of RSI, J. Welles Wilder — STT: "Mr. James Wilder [?]"). Set the **buy signal threshold to 45** [00:09:41].
- **ADX:** Optional filter. Set to **0** to disable/remove it, or set to **20** if you choose to use ADX confirmation (detailed trade-off explained in Stage 6) [00:09:41].
- **Comparative Symbol & Length:** Same logic as Stage Indicator—set length to **52** on weekly charts (52 weeks = 1 year) and **12** on monthly charts (12 months = 1 year) [00:09:41–00:10:25].
- **V-Stop Settings:** Keep length at **10** (even on monthly charts) and multiplier at **2 or 2.5** [00:10:25].
- **Parabolic SAR:** Set start/increment parameters as **0.02**, **0.05** [? verify: spoken as "0.02 0.05 as increment"], and **max value 0.2** [00:10:25].
- **High Settings:** Set to **52** on weekly charts (52-week high) and **12** on monthly charts (12-month high), both representing 1 year [00:10:25–00:10:58].
### c) Examples & case studies
- **Example:** Apcotex [?] (STT: "Appcotex") [00:08:57]

  - **Context:** Briefly opened before switching to ICICI Bank.
  - **Data/details:** None stated.
  - **Walkthrough:** Briefly mentioned only — not elaborated in the lecture.
  - **Takeaway:** None.

- **Example:** ICICI Bank (STT: "ICICI bang") [00:08:57–00:10:58]

  - **Context:** Used to demonstrate SOIC LTI input configuration on a monthly chart.
  - **Data/details:** Monthly chart with RSI (14, buy = 45), ADX (0 or 20), Comparative length = 12, V-Stop (10, 2 or 2.5), Parabolic SAR (0.02, 0.05 [? verify], max 0.2), High setting = 12.
  - **Walkthrough:** Speaker opens SOIC LTI → Inputs, sets each parameter, and clicks OK to apply the indicator to ICICI Bank's monthly chart.
  - **Takeaway:** Standardizing LTI inputs across monthly (12) and weekly (52) timeframes ensures consistent long-term signal generation.
### d) Formulas, metrics & thresholds (if any)

| **Metric/Formula/Screen Filter** | **Definition or Expression** | **Speaker's benchmark/threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| RSI (LTI) | 14-period Relative Strength Index | Length = 14; Buy Signal = 45 | Momentum threshold; crossing 45 is one of the 4 LTI buy conditions | [00:09:41] |
| ADX (LTI) | Average Directional Index | 0 (disabled) or 20 (enabled) | Optional trend-strength filter | [00:09:41] |
| Comparative Symbol Length | Benchmark lookback | 52 (weekly) / 12 (monthly) | 1-year relative strength comparison | [00:09:41–00:10:25] |
| V-Stop (LTI) | Volatility Stop | Length = 10; Multiplier = 2 or 2.5 | Same settings on both weekly and monthly charts | [00:10:25] |
| Parabolic SAR (LTI) | Stop and Reverse trend-following overlay | 0.02, 0.05 [? verify]; Max = 0.2 | Plots averaging-up flags once buy conditions align | [00:10:25–00:10:58] |
| High Settings (LTI) | 1-year new high marker | 52 (weekly) / 12 (monthly) | Marks 52-week / 12-month highs | [00:10:25–00:10:58] |

### e) Visual aid
None.
### f) Speaker's cautions & common mistakes
- Remember to adjust Comparative Symbol and High Settings between **52** (weekly) and **12** (monthly) so the lookback always equals one full year [00:10:25].

Batch complete: 1-4.

---

# BS-Lec09 – Step 1B: Detailed Stage Breakdown (Stages 5–8)
## BS-Lec09 – Stage 5: SOIC LTI — Parabolic SAR Averaging Up & 4 Buy Conditions  [00:10:58–00:12:19]  [TVGP: Valuation]
### a) What this stage answers
What are the four buying conditions in the SOIC Long-Term Indicator (LTI), and how should Parabolic SAR flags be used—together with L3 valuation checks—to average up in tranches?
### b) Detailed explanation
Once the SOIC LTI inputs are applied, **Parabolic SAR** appears on the chart as **flags** that prompt the investor to **average up** [00:10:58]. However, the speaker lays out a strict sequence combining technicals and fundamentals [00:11:09–00:12:19]:

- **Four Key LTI Buying Conditions:**
  - **RSI** crossing **45** [00:11:09]
  - **ADX** crossing **20** (optional; see Stage 6) [00:11:09]
  - **V-Stop** turning **positive** [00:11:44]
  - **Relative Strength** higher than **Nifty** (or the chosen benchmark) [00:11:44]
- **Parabolic SAR Gate:** Parabolic SAR turns positive **only after all four buying conditions are met**, and its sole role is for **averaging up** [00:11:44]. When a stock enters a sideways trend or minor downtrend, Parabolic SAR stops issuing averaging flags [00:11:09].
- **Mandatory L3 Valuation Check:** Before acting on any Parabolic SAR flag, validate the business using **L3 of the SOIC course** (business valuation). Only average up when **valuations remain reasonable**—never chase Parabolic SAR flags blindly [00:11:09, 00:11:44].
### c) Examples & case studies
- **Example: ICICI Bank (Four-Tranche Averaging Up)** [00:10:58–00:11:44]
  - **Context:** Demonstrating tranche-based position building on a monthly chart using SOIC LTI.
  - **Data/details:** Four distinct Parabolic SAR flags appeared during the uptrend, allowing **four tranches** to be built; when the stock shifted into a sideways or slight downtrend phase, Parabolic SAR stopped plotting flags.
  - **Takeaway:** Parabolic SAR automates tranche averaging during healthy uptrends and pauses automatically during consolidations, provided L3 valuations support adding.
### d) Formulas, metrics & thresholds (if any)

| **Metric/Formula/Screen Filter** | **Definition or Expression** | **Speaker's benchmark/threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| SOIC LTI 4 Buy Conditions | RSI > 45 + ADX > 20 (optional) + V-Stop positive + RS > Benchmark | All conditions aligned | Triggers LTI buy regime and activates Parabolic SAR | [00:11:09–00:11:44] |
| Parabolic SAR Averaging Gate | Parabolic SAR flags + L3 valuation check | Valuations must be reasonable | Signals tranche add-ons; never chase blindly without L3 | [00:10:58–00:12:19] |

### e) Visual aid
```
4 LTI Conditions Met (RSI > 45 + [ADX > 20] + V-Stop Positive + RS > Benchmark)
  → Parabolic SAR Flags Activate → Verify L3 Valuation is Reasonable → Average Up in Tranches
  (Sideways / Downtrend → Parabolic SAR Pauses → Stop Averaging)
```
### f) Speaker's cautions & common mistakes
- **Blindly chasing Parabolic SAR flags:** Never average up purely on Parabolic SAR without validating valuations via L3 of the SOIC course [00:11:09, 00:11:44].


## BS-Lec09 – Stage 6: ADX 20 vs. ADX 0 Trade-Off & Syngene Case Study  [00:12:19–00:14:43]
### a) What this stage answers
Why can ADX 20 delay buy signals after a downtrend, and when should you disable ADX (set to 0) versus keep it at 20?
### b) Detailed explanation
Although ADX 20 is part of the default LTI list, it can trigger **late buy entries** [00:12:19]. Because **ADX** is the average of positive directional movement (+DI) and negative directional movement (-DI), a prolonged prior downtrend keeps the directional average depressed even after **V-Stop** begins trending upward [00:12:57–00:13:29]. As a result, ADX < 20 will block a purchase despite strong reversal cues [00:12:57–00:13:29].

- **Using ADX = 0 (Disable ADX):** If your fundamental research is thorough and all business parameters check out, set **ADX to 0** [00:13:29–00:14:03]. Combining **RSI (>45) + Relative Strength + V-Stop + Parabolic SAR** (with building volumes) is more than sufficient to trigger timely entries [00:12:19, 00:13:29–00:14:03].
- **Using ADX = 20 (Late Confirmation):** Keep **ADX at 20** only if you want an extra confirmation filter proving that the average trend direction has decisively turned positive—knowing it makes the setup stronger but enters later [00:13:29–00:14:43].
### c) Examples & case studies
- **Example: Syngene [?] (STT: "singin")** [00:12:19–00:14:43]
  - **Context:** Showing how ADX 20 lags after consolidation while RSI, RS, V-Stop, Parabolic SAR, and volumes align.
  - **Data/details:** Consolidated with negative relative strength before RS turned positive again; volumes were building, Parabolic SAR was trending, and RSI > 45, yet ADX remained negative/below 20.
  - **Walkthrough:** Speaker switches ADX from 20 to **0** to remove the lag-induced confusion and allow the remaining four LTI signals to trigger.
  - **Takeaway:** Setting ADX to 0 prevents missing early post-consolidation entries when fundamentals and the other four LTI signals align.
### d) Formulas, metrics & thresholds (if any)

| **Metric/Formula/Screen Filter** | **Definition or Expression** | **Speaker's benchmark/threshold** | **Interpretation** | **Timestamp** |
| --- | --- | --- | --- | --- |
| ADX Setting in LTI | Average Directional Index toggle | **0** (disabled) or **20** (late confirmation) | 0 avoids post-downtrend lag; 20 confirms strong average direction | [00:12:19–00:14:43] |

### e) Visual aid
None.
### f) Speaker's cautions & common mistakes
- **Getting confused by lagging ADX:** Don't let ADX < 20 override strong fundamental work when RSI (>45), RS, V-Stop, Parabolic SAR, and volume are all positive; set ADX to 0 if needed [00:13:29–00:14:43].


## BS-Lec09 – Stage 7: Noise-Free Compounding Case Studies & Mixing Fundamentals  [00:14:43–00:17:11]  [TVGP: Valuation]
### a) What this stage answers
How does SOIC LTI deliver noise-free compounding on monthly charts, and how do fundamental catalysts and valuation discipline boost hit rates on both monthly and weekly timeframes?
### b) Detailed explanation
On **monthly charts**, SOIC LTI enables **noise-free compounding**: as long as the selling signal is not triggered and **volumes, relative strength, Parabolic SAR, V-Stop, and RSI (>45)** remain supportive, an investor can hold and average up peacefully without getting shaken out [00:14:43–00:15:25].

When technical LTI triggers are combined with **fundamental catalysts** and a **valuation mindset**, hit rates "go through the roof" and risk is tightly managed [00:16:04–00:16:37]. The speaker personally runs **ADX = 0** because Parabolic SAR and the other four indicators are already built into LTI, whereas ADX 20 provides a very late confirmation [00:16:37–00:17:11].
### c) Examples & case studies
- **Example 1: ICICI Bank (Monthly Noise-Free Compounding)** [00:14:43–00:15:25]

  - **Context:** Peaceful long-term averaging up on monthly charts when all LTI inputs remain positive.
  - **Takeaway:** Monthly LTI keeps investors in structural compounders without short-term noise.

- **Example 2: Shivalik Bimetal** [00:15:25]

  - **Context:** Demonstrating noise-free compounding on monthly charts while the sell signal stays intact.
  - **Takeaway:** Hold as long as LTI's monthly sell trigger does not fire.

- **Example 3: Divi's Laboratories [?] (STT: "TV's" / "TV's laboratories")** [00:15:25–00:16:04]

  - **Context:** Spotting a potential fundamental turnaround via LTI relative strength.
  - **Data/details:** Exited a prior downtrend and **relative strength recently turned positive**, potentially aided by a reduced prior-year base.
  - **Takeaway:** Use positive RS shifts as a cue to investigate business fundamentals—while maintaining a strict **valuation mindset** `[TVGP: Valuation]`.

- **Example 4: South Indian Bank** [00:16:04–00:16:37]

  - **Context:** Combining weekly LTI signals with a concrete fundamental catalyst after a prior stop-out.
  - **Data/details:** Previously stopped out by LTI; on **weekly charts**, a fresh buy triggered on the **first positive V-Stop candle** alongside Parabolic SAR, higher RS, good volumes, and fundamental news that a **new MD name had been filed with the RBI** (to be revealed soon).
  - **Takeaway:** Mixing LTI buy triggers with fundamental catalysts creates an "unstoppable" risk-management setup.
### d) Formulas, metrics & thresholds (if any)
None stated.
### e) Visual aid
None.
### f) Speaker's cautions & common mistakes
- **Skipping valuation discipline:** Even when LTI turns positive (e.g., Divi's Labs [?]), maintain a valuation mindset rather than relying on technicals alone [00:16:04].


## BS-Lec09 – Stage 8: Summary of Settings, Membership Access & Closing  [00:17:11–00:18:38]
### a) What this stage answers
What are the final recommended indicator configurations, and how is SOIC LTI access bundled with SOIC memberships?
### b) Detailed explanation
The speaker summarizes the two tools [00:17:11–00:17:36]:

- **SOIC Long-Term Indicator (LTI):** Combines **Comparative Strength + RSI (45) + V-Stop + Parabolic SAR**, with **ADX optional** (`0` recommended by the speaker, or `20` for late confirmation) [00:17:11–00:17:36].
- **SOIC Stage Analysis Indicator:** Combines **Relative Strength + Volatility Stop** [00:17:36].

For access [00:17:36–00:18:38]:

- **1-year SOIC members:** Available as a separate subscription [00:17:36–00:18:10].
- **3-year SOIC members:** Included in the membership [00:18:10].
- **TradingView location:** Accessed under **"Invite-only scripts"** [00:18:10].

The session closes with a request to drop `"helios"` [?] (likely `"yes"`) in the course/YouTube comments if doubts are clear [00:17:36–00:18:38].
### c) Examples & case studies
None stated.
### d) Formulas, metrics & thresholds (if any)
None stated.
### e) Visual aid
None.
### f) Speaker's cautions & common mistakes
None stated.

Batch complete: 5-8.

---

## 6. CONSOLIDATED FORMULA & METRIC SHEET

| **Metric/Screen** | **Formula/Filter Condition** | **Speaker's Benchmark** | **When to Use** | **Stage** | **Timestamp** |
| --- | --- | --- | --- | --- | --- |
| SOIC Stage Indicator Comparative Length | Rolling lookback vs. benchmark (Nifty / Sector Index) | **52** on Weekly charts; **12** on Monthly charts | Checking 1-year relative outperformance (Green = >Nifty, Red = <Nifty) | Stage 2 | [00:02:16–00:02:51] |
| V-Stop Settings (Stage & LTI) | `ATR × Multiplier` | **Length = 10**; **Multiplier = 2 or 2.5** | Both Weekly (cyclicals/shorter term) and Monthly (compounders) | Stages 2, 4 | [00:02:51–00:03:21, 00:10:25] |
| 52-Week High Settings | Lookback period for high-triangle marker | **52** (Weekly) / **12** (Monthly) | Highlighting 52-week high breakouts (optional visual) | Stages 2, 4 | [00:03:21–00:03:59, 00:10:25] |
| Stage Indicator Buy / Sell | `V-Stop` + `Relative Strength` | **Buy**: both positive (+ high vol); **Sell**: both negative | Weekly exits for cyclicals (RK Forge, Ador Welding) | Stage 3 | [00:04:38–00:06:08] |
| SOIC LTI RSI Input | 14-period RSI (`James Wilder` [?]) | **Length = 14**; **Buy signal = 45** | Core momentum/trend confirmation inside LTI | Stage 4 | [00:09:41–00:10:25] |
| SOIC LTI ADX Input | Average Directional Index | **0** (disabled, speaker's default) or **20** (late confirmation) | Optional confirmation; 0 avoids lag after downtrends | Stages 4, 6 | [00:09:41–00:10:25, 00:12:19–00:14:43, 00:17:11] |
| SOIC LTI Parabolic SAR | Increment / Max Value | **0.02** / **0.05** [? verify]; **Max = 0.2** | Flags appear only when all 4 buy conditions align; used to average up | Stages 4–5 | [00:10:25–00:12:19] |
| 4 LTI Buy Conditions | `RSI > 45` + `ADX > 20 (optional)` + `V-Stop > 0` + `RS > Benchmark` | All active conditions aligned (+ L3 valuation check) | Triggers Parabolic SAR flags for tranche averaging up | Stage 5 | [00:11:09–00:12:19] |



## 7. GLOSSARY
- **SOIC Stage Indicator**: Custom TradingView invite-only indicator inspired by *Secrets for Profiting in Bull and Bear Markets*, combining V-Stop, Relative Strength vs. benchmark, and 52-week high markers [00:01:25–00:03:59].
- **SOIC Long-Term Indicator (LTI)**: Custom TradingView invite-only indicator bundling RSI (14/45), optional ADX (20/0), Comparative RS (52/12), V-Stop (10, 2/2.5), Parabolic SAR (0.02/0.05, 0.2), and 52W high [00:08:57–00:10:58].
- **Invite-Only Scripts**: TradingView menu where custom SOIC indicators appear once a subscriber submits their exact TradingView ID [00:00:22–00:00:54, 00:18:10].
- **Parabolic SAR**: Trailing indicator plotted as flags in SOIC LTI that turn positive only when all buy conditions align, signaling tranche averaging-up zones [00:10:25–00:12:19].
- **Time-Series Analysis**: Aligning Monthly chart conviction with Weekly chart triggers (30-weekly EMA rising, building volumes, positive V-Stop, rising RS) to optimize entry odds [00:06:40–00:07:16].
- **Noise-Free Compounding**: Holding structural compounders on Monthly LTI charts without getting shaken out until a true sell signal triggers [00:14:43–00:15:25].


## 8. EXAMPLES INDEX

| **Company/Example** | **Sector** | **Concept Illustrated** | **Stage** | **Timestamp** |
| --- | --- | --- | --- | --- |
| Narayana Hrudayalaya ("Narayana Hathayalai") | Healthcare | SOIC Stage Indicator weekly setup (green background = >Nifty, V-Stop 2/2.5, 52W high) | Stages 1–2 | [00:01:25–00:04:38] |
| RK Forge (Ramkrishna Forgings) & Ador Welding | Forgings / Welding (Cyclicals) | Weekly Stage Indicator exits for cyclical demand/recession risks | Stage 3 | [00:05:36–00:06:08] |
| Equitas Small Finance Bank | Banking | Weekly buy triggered at ₹56; combining Monthly conviction with Weekly 30-WEMA + volume | Stage 3 | [00:06:08–00:07:16] |
| "Living financial services" [?] | BFSI | Stage Indicator buy at ₹278 (Weekly) and ₹196 (Monthly) | Stage 3 | [00:07:45–00:08:24] |
| Apcotex [?] & ICICI Bank | Specialty Chem / Banking | SOIC LTI Monthly inputs; 4-tranche Parabolic SAR averaging up on ICICI Bank | Stages 4–5 | [00:08:57–00:12:19] |
| Syngene [?] ("singin") | Pharma / CRO | Why ADX 20 lags after a downtrend; ADX 0 + RSI/RS/V-Stop/Parabolic SAR catches turn earlier | Stage 6 | [00:12:19–00:14:43] |
| Shivalik Bimetal, Divi's Labs ("TV's"), South Indian Bank | Precision Engg / Pharma / Banking | Noise-free Monthly compounding; Divi's RS positive; South Indian Bank Weekly buy + RBI MD news | Stage 7 | [00:15:25–00:17:11] |



## 9. Q&A HIGHLIGHTS
No dedicated open-floor Q&A block occurred; common subscriber setup questions were addressed inline:

- **How do new subscribers access SOIC LTI and Stage Indicator?** → Submit your exact TradingView channel ID; both appear under **Invite-only scripts** [00:00:22–00:00:54, 00:18:10].
- **Should ADX be set to 20 or 0 in SOIC LTI?** → Speaker personally uses **ADX = 0** (disabling ADX) because RSI 45 + RS + V-Stop + Parabolic SAR suffice without ADX's post-downtrend lag; **ADX = 20** is optional for late confirmation [00:12:19–00:14:43, 00:17:11].
- **Is SOIC LTI included in SOIC Membership?** → Included for **3-year** members; **1-year** members subscribe separately (still cheaper than paid TradingView plans since all indicators are bundled into one) [00:17:36–00:18:10].


## 10. CONCLUSION & NEXT STEPS
- **Closing message**: Combine SOIC LTI / Stage Indicator (`RSI 45`, `RS 52/12`, `V-Stop 10 / 2–2.5`, `Parabolic SAR`, optional `ADX 20`) with L3 fundamental/valuation discipline to manage risk and achieve noise-free compounding [00:16:04–00:17:36].
- **Books referenced**: *Secrets for Profiting in Bull and Bear Markets* (inspiration for Stage Indicator) and J. Welles Wilder's ("James Wilder" [?]) book on RSI [00:01:40, 00:09:41].
- **Action**: Drop `"helios"` (likely `"hell yes"`) in the course/YouTube comments if doubts are clear [00:17:36].


## 11. SELF-TEST
- **Where do subscribed SOIC LTI and Stage Indicator tools appear in TradingView, and what must you provide first?** *(Stage 1)*
  - **Answer**: Submit your exact TradingView ID, then open **Invite-only scripts**.
- **In the SOIC Stage Indicator, what comparative lookback lengths are used on Weekly vs. Monthly charts, and what do green vs. red backgrounds mean?** *(Stage 2)*
  - **Answer**: `52` on Weekly charts and `12` on Monthly charts (1-year lookback); green background = outperforming Nifty/benchmark, red = underperforming.
- **Applied: For cyclical stocks like RK Forge or Ador Welding, which chart timeframe and indicator should you use to exit?** *(Stage 3)*
  - **Answer**: Weekly SOIC Stage Indicator—sell when V-Stop turns negative alongside falling Relative Strength.
- **List the default SOIC LTI input settings taught by the speaker.** *(Stage 4)*
  - **Answer**: RSI length `14` (buy `45`), ADX `0` (or `20`), Comparative Symbol `52` (Weekly) / `12` (Monthly), V-Stop length `10` with multiplier `2` or `2.5`, Parabolic SAR (`0.02`, `0.05` [?], max `0.2`), and 52W/12M high.
- **What are the 4 LTI buy conditions, and what do Parabolic SAR flags signal?** *(Stage 5)*
  - **Answer**: `RSI > 45`, `ADX > 20` (optional), `V-Stop positive`, and `RS > benchmark`. Parabolic SAR flags turn positive only when all conditions align, signaling tranche averaging-up zones (validate with L3 valuations).
- **Applied: Why did the speaker set ADX to `0` on Syngene [?] instead of `20`?** *(Stage 6)*
  - **Answer**: Because ADX averages positive and negative directional movement, a prior downtrend keeps ADX < 20 and delays entries even after RSI, RS, V-Stop, and volumes turn positive.


## 12. GAPS & VERIFICATION LIST
- **Concepts only briefly mentioned**:
  - L3 valuation framework (referenced as prerequisite validation before averaging up on Parabolic SAR flags) [00:11:09, 00:12:19].
- **Items marked `[?]`, `[? verify]`, or `[? Hindi segment unclear]` to check against recording**:
  - `[00:07:45]` `"living financial services"` `[?]` — unclear company name (₹278 weekly / ₹196 monthly buy).
  - `[00:08:57]` `"Appcotex"` `[?]` — likely Apcotex Industries.
  - `[00:09:41]` `"Mr. James Wilder"` `[?]` — STT for J. Welles Wilder.
  - `[00:10:25]` Parabolic SAR settings `"0.02 0.05 as increment max value as 0.2"` `[? verify]` — verify whether start = `0.02` and increment = `0.05` (or `0.02`).
  - `[00:12:19]` `"singin"` `[?]` — likely Syngene.
  - `[00:15:25]` `"TV's laboratories"` `[?]` — STT for Divi's Laboratories.
  - `[00:17:36]` `"drop a helios"` `[?]` — STT for "drop a hell yes".
- **Slides not legible / skipped**:
  - No standalone PPT file in `01_Sources`; grounded solely in transcript.


## 13. COVERAGE CHECK
Full coverage confirmed: Stages 1–8 cover `[00:00:02–00:18:38]` continuously with zero timestamp gaps.
