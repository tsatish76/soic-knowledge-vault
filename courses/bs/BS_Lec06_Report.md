# 1. LECTURE HEADER
- **Lecture ID**: BS-Lec06
- **Title**: Volumes — Power of Volumes Study: 20-MA of Volume and On-Balance Volume (OBV)
- **Duration**: [00:00:00–00:16:35]
- **PPT used**: Not available (content grounded in transcript only)
- **Prerequisites referenced**: BS-Lec01–Lec05 (Stage Analysis, V-Stop, ADX > 20, Parabolic SAR pyramiding, Golden Crossover)
# 2. KEY LEARNINGS
- **Asymmetric volume rule for Stage 2 vs. Stage 4**: Like an airplane needing maximum engine power to take off or a climber needing effort to climb a hill, Stage 2 breakouts require surging volume ("weight of the evidence"), whereas Stage 4 declines can begin even on **very low volumes** ("to fall down it just takes one leg") [00:00:49–00:02:11, 00:14:55].
- **Three core volume tools**: Combine raw **Volume** (shares traded in a period), the **20-period Moving Average of Volume** (`MA Length = 20` on TradingView), and **On-Balance Volume (OBV)** [00:02:11–00:02:43, 00:05:05–00:06:17].
- **Index inclusions and breakouts show up in volume bars**: Varun Beverages spiked from `₹1,249` to `₹1,410` on `30 Nov` upon MSCI index inclusion, while Laurus Labs broke out of a `₹106–108` base to `₹707` on rising volume [00:02:43–00:04:30].
- **Confirm volume surges against promoter buying and lifetime highs**: On Linc Pen [? verify], volume bars well above the 20-MA + green V-Stop aligned with `~₹1.62 crore` (`₹2–3 crore` [?]) in promoter open-market buys inside a `₹300–400 crore` mcap; on Equitas, check for lifetime-high weekly volumes (`13–20 Feb 2023` [? verify]) [00:05:40–00:09:03].
- **Focus on OBV slope, not absolute OBV value**: OBV cumulatively adds volume when `Close > Prior Close` and subtracts volume when `Close < Prior Close`; an upward slope confirms smart-money accumulation, while a downward slope flags distribution [00:09:03–00:12:17].
- **V-Stop exits faster than OBV during slow distribution**: In Laurus Labs, V-Stop triggered an exit before OBV's slope turned downward; integrate OBV + 20-MA volume as confirmation alongside `V-Stop` + `ADX > 20` + Parabolic SAR [00:12:17–00:14:20].
# 3. LECTURE MAP

| **Stage #** | **Stage Title** | **Timestamp Range** | **Slides** | **Core Concepts** | **Examples/Companies Used** | **TVGP Tag** |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Volume's Role in Stage Analysis & Asymmetric Hill Rule | [00:00:00–00:02:11] | Not available | Stage 1–4 volume behavior; airplane takeoff analogy; Stage 4 falling on low volume vs. Stage 2 needing high volume | Airplane runway & climbing a hill analogies | — |
| 2 | Volume Bars & Stage 2 Institutional Breakouts | [00:02:11–00:04:30] | Not available | Volume definition; 3 volume tools (Volume, OBV, Volume MA); MSCI index inflow; golden crossover + volume | Varun Beverages (30 Nov MSCI, ₹1,249→₹1,410); Equitas; Laurus Labs (₹106–108→₹707) | — |
| 3 | 20-Period Moving Average of Volume on TradingView | [00:04:30–00:09:03] | Not available | TradingView `MA Length = 20` volume setup; price-volume action + V-Stop; promoter buying triangulation; lifetime-high volume check | Linc Pen [?] (~₹1.62 Cr promoter buy, ₹300–400 Cr mcap); Equitas (13–20 Feb 2023 [?]) | [TVGP: Promoter] |
| 4 | On-Balance Volume (OBV) Formula, Slope & Case Studies | [00:09:03–00:14:20] | Not available | Cumulative OBV formula; reading OBV slope (up = accumulation, down = distribution); probabilistic stacking with V-Stop, ADX > 20, Parabolic SAR | Equitas; Laurus Labs (Warburg Pincus sale at ₹66 on 4 May, subsequent Stage 2 & V-Stop exit) | — |
| 5 | Balaji Amines Volume Decay, Stage 2 Screening & Closing | [00:14:20–00:16:35] | Not available | Volume dropping below 20-MA post-2021; Stage 2 breakout screening rule; preview of final summary class | Balaji Amines [?] | — |

# 4. CONCEPT FLOW
```
Stage 1: Stage 1–4 Volume Behaviour (High Volume Needed to Climb; Low Volume Enough to Fall)
   ↓
Stage 2: Raw Volume Bars & Stage 2 Breakouts (Varun Beverages, Equitas, Laurus Labs)
   ↓
Stage 3: 20-Period Volume Moving Average + V-Stop + Promoter Buying (Linc Pen, Equitas)
   ↓
Stage 4: On-Balance Volume (OBV) Cumulative Formula & Slope (Accumulation vs. Distribution)
   ↓
Stage 5: Volume Decay Warning (Balaji Amines) & Stage 2 Breakout Screening Checklist
```


<!-- SOIC_AUDIO_BANNER_START -->
::: info 📝 Lecture Audio Transcript
*Interactive audio transcript will be linked when transcript file is added.*
:::
<!-- SOIC_AUDIO_BANNER_END -->
---

## 5. DETAILED STAGE-BY-STAGE NOTES

# BS-Lec06 – Stage 1: Volume's Role in Stage Analysis & Asymmetric Hill Rule  [00:00:00–00:02:11]
## a) What this stage answers
How does volume behave across Stage 1 to Stage 4, and why is volume asymmetry critical for distinguishing Stage 2 breakouts from Stage 4 declines?
## b) Detailed explanation
Stage Analysis Volume Cycle: Building on the Stage Analysis framework taught in the second class, price and volume follow a four-stage progression [00:00:00–00:00:49]:

- **Stage 1 (Base):** The trend is typically sideways, and volumes begin picking up before the stock breaks out.
- **Stage 2 (Markup phase):** The stock breaks out and volumes keep increasing in the direction of the breakout.
- **Stage 3 (Distribution):** The trend flattens as distribution sets in.
- **Stage 4 (Markdown phase):** The decline phase begins.

**Engine Power & Takeoff Analogy:** Maximum volume ideally appears when moving something stationary into a flying state—like an airplane sitting on a runway that requires massive engine power to take off [00:00:49–00:01:15]. In equities, volume is that engine power. When volumes are very high at a breakout and continue expanding in the direction of the breakout, it confirms that smart money and institutions are purchasing the stock heavily [00:01:15].

Asymmetric Hill Rule (Stage 2 vs. Stage 4): Unlike Stage 2 breakouts, a brutal Stage 4 decline can begin even on very low volumes [00:01:15–00:01:40]. To climb a hill takes a great deal of effort, whereas to fall down takes only one leg (one push). Even when a Stage 4 decline starts on high volumes, volume indicators help detect that Stage 4 is beginning [00:01:40].

**Weight of the Evidence:** Having already covered indicators for when to buy, sell, and pyramid up, this session focuses on volume because price shows what is happening in a company, while volume is the weight of the evidence—revealing whether a price rise is genuinely backed by participation or not [00:01:40–00:02:11].
## c) Examples & case studies
- **Example:** Airplane takeoff on a runway [00:00:49–00:01:15]
  - **Context:** Explaining why maximum volume appears at the start of a Stage 2 breakout.
  - **Data/details:** Stationary aircraft → takeoff requires peak engine power.
  - **Walkthrough:** Just as a plane needs maximum thrust to leave the runway, a stock moving from a sideways Stage 1 base into a Stage 2 markup needs surging volume.
  - **Takeaway:** High breakout volume followed by rising volume in the breakout direction signals institutional/smart-money entry.
- **Example:** Climbing a hill vs. falling down [00:01:15–00:01:40]
  - **Context:** Contrasting volume requirements in Stage 2 uptrends versus Stage 4 downtrends.
  - **Data/details:** Climbing requires sustained effort; falling requires just one leg.
  - **Walkthrough:** Upward price moves need heavy buying volume, whereas downward Stage 4 breaks can occur even on very low volume.
  - **Takeaway:** Never dismiss a Stage 4 breakdown simply because volume is low.
## d) Formulas, metrics & thresholds (if any)
None stated.
## e) Visual aid
```
Stage 1 (Sideways Base) → Volume Surge ("Takeoff Engine Power") → Stage 2 Breakout & Markup (Rising Volume) → Stage 3 (Flat / Distribution) → Stage 4 Markdown (Can start on Low OR High Volume)
```
## f) Speaker's cautions & common mistakes
- Do not assume a Stage 4 decline requires high volume; a brutal Stage 4 can begin on very low volume [00:01:15–00:01:40].
- Do not judge a rally by price alone without checking whether volume ("the weight of the evidence") supports the move [00:01:40–00:02:11].
# BS-Lec06 – Stage 2: Volume Bars & Stage 2 Institutional Breakouts  [00:02:11–00:04:30]
## a) What this stage answers
What are the three core volume tools, and how do raw volume bars signal institutional entry during Stage 2 breakouts?
## b) Detailed explanation
Three Core Volume Tools: The session introduces three indicators for analyzing volume [00:02:11–00:02:43]:

- **Volume** itself (the number of shares bought and sold in a particular time period, such as a trading day).
- **Moving Average of Volumes** (how to calculate and apply it).
- **On-Balance Volume (OBV)**.

**Reading Raw Volume Bars:** Using Screener and TradingView volume bars beneath the price chart, high volume bars paired with a favourable price direction indicate a bullish trend driven by institutional inflows [00:02:43–00:03:48]. When a stock emerges from consolidation—such as with a Golden Crossover—or breaks out of a multi-year base, volume bars expanding in the direction of rising prices confirm that institutions and smart money are entering [00:03:48–00:04:30].
## c) Examples & case studies
- **Example:** Varun Beverages [00:02:43–00:03:48]
  - **Context:** Demonstrating an institutional volume spike on Screener.
  - **Data/details:** Volume bar spiked on **30th November** following **MSCI index inclusion**; price rose from **₹1,249 to ₹1,410** in no time before entering a consolidation phase. The stock had already been in Stage 2 for quite some time.
  - **Walkthrough:** MSCI inclusion triggered heavy institutional buying, visible as a tall volume bar alongside rapid price appreciation.
  - **Takeaway:** High volume bars aligned with favourable price direction signal bullish institutional participation.
- **Example:** Equitas [00:03:48–00:04:15]
  - **Context:** Fresh Stage 2 breakout after consolidation.
  - **Data/details:** Golden Crossover after a consolidation phase.
  - **Walkthrough:** Following consolidation and a Golden Crossover, both volume bars and price began increasing together.
  - **Takeaway:** Rising volume bars in the direction of price expansion indicate smart-money/institutional entry.
- **Example:** Laurus Labs [00:03:48–00:04:30]
  - **Context:** Classic multi-year Stage 2 base breakout and markup.
  - **Data/details:** Over the last five years, broke out of a **₹106–₹108** base and continued its Stage 2 markup up to **₹707**.
  - **Walkthrough:** Rising price accompanied by rising volume bars confirmed sustained institutional buying throughout the Stage 2 markup.
  - **Takeaway:** Base breakouts backed by expanding volume bars can power multi-bagger Stage 2 trends.
## d) Formulas, metrics & thresholds (if any)

| Metric/Formula/Screen Filter | Definition or Expression | Speaker's benchmark/threshold | Interpretation | Timestamp |
| --- | --- | --- | --- | --- |
| Volume | Number of shares bought and sold in a given time period (e.g., 1 trading day) | High / rising bars in the direction of price increase | Confirms bullish trend and institutional / smart-money entry | [00:02:11–00:02:43, 00:03:48] |

## e) Visual aid

| Company | Catalyst / Setup | Price / Data Cited | Volume Signal |
| --- | --- | --- | --- |
| Varun Beverages | MSCI index inclusion (30 Nov) | ₹1,249 → ₹1,410 (then consolidation) | Tall institutional volume bar |
| Equitas | Consolidation → Golden Crossover | Fresh Stage 2 breakout | Volume bars rising with price |
| Laurus Labs | 5-year Stage 2 markup | Base ₹106–₹108 → ₹707 | Rising volume bars confirming markup |

## f) Speaker's cautions & common mistakes
None stated.
# BS-Lec06 – Stage 3: 20-Period Moving Average of Volume on TradingView  [00:04:30–00:09:03]  [TVGP: Promoter]
## a) What this stage answers
How do you configure a 20-period Moving Average of Volume on TradingView and combine it with V-Stop, promoter buying, and lifetime-high volume checks?
## b) Detailed explanation
TradingView 20-MA Volume Setup: Having already covered price indicators and Volatility Stop (V-Stop) in earlier classes, the speaker demonstrates adding Volume on TradingView [00:04:30–00:05:40]:

- Open the `Volume` indicator, go to Settings/Style, enable the **Volume Moving Average** with **MA Length = 20** (measuring the average of the last 20 volume bars), thicken the MA line, and enlarge/customize growing and falling bar styles for clarity.

**Price-Volume Action + V-Stop Confluence:** When a volume bar rises substantially above its 20-MA, it signals entry of smart money, a large investor, or institutions [00:05:40–00:06:17]. On weekly charts, V-Stop starts trending upwards right around that volume surge; on monthly charts, V-Stop turns green the following month [00:06:17]. Together, rising price, a bullish trend, and above-MA volume constitute classic **price-volume action** [00:06:17–00:06:50].

**Monthly Confirmation & Promoter Deal-Flow Triangulation [TVGP: Promoter]:** Monthly charts show even more clearly when volumes stay consistently above the 20-MA, pointing to sustained buying by large investors or insiders [00:06:50]. Checking insider/promoter deal flow alongside the chart verifies whether promoters themselves are buying in the open market [00:06:50–00:07:25].

Screeners & Lifetime-High Volume Check: TradingView screeners (taught in the TradingView class) can surface these setups [00:08:00]. When reviewing a breakout where price and volume are rising, pause the chart and take a broader view: check whether those weekly/monthly bars represent the **lifetime-high volume** for that stock [00:08:29]. If yes, it further raises the probability of early smart-money entry even before lagging indicators like V-Stop confirm [00:08:29–00:09:03].
## c) Examples & case studies
- **Example:** Linc Pen [?] [00:05:05–00:07:25]
  - **Context:** Combining 20-MA volume breakout with weekly/monthly V-Stop and promoter open-market buying [TVGP: Promoter].
  - **Data/details:** Volume surged well above the 20-MA on weekly and monthly charts; weekly V-Stop trended upwards and monthly V-Stop turned green the next month [00:05:40–00:06:50]. Deal flow showed promoter purchases in **Sep 2022, Nov 2022, Dec 2022, and Feb 2023**, totaling **~₹1.62 crore** (also cited as **₹2–3 crore [?]**) in a company with a **₹300–400 crore** market cap [00:06:50–00:07:25].
  - **Walkthrough:** Sustaining volume above the 20-MA reflected steady insider accumulation, which was verified by checking promoter open-market deal flow.
  - **Takeaway:** Above-20-MA volume + green V-Stop + meaningful promoter buying relative to market cap is a high-conviction bullish confirmation.
- **Example:** Equitas [00:08:00–00:09:03]
  - **Context:** Checking for lifetime-high weekly volumes during a breakout.
  - **Data/details:** Weekly trading days from **13th Feb 2023 to 20th Feb 2023 [? verify]** (speaker initially said "20th February 2020" before stating "from 13th Feb 2023 to 20th Feb 2023").
  - **Walkthrough:** Pause the weekly chart when price and volume rise together and check if those bars are the highest-ever volume in the stock's history.
  - **Takeaway:** Lifetime-high volume bars raise the probability of predicting smart-money-led trends ahead of V-Stop confirmation.
## d) Formulas, metrics & thresholds (if any)

| Metric/Formula/Screen Filter | Definition or Expression | Speaker's benchmark/threshold | Interpretation | Timestamp |
| --- | --- | --- | --- | --- |
| Volume Moving Average (20-MA) | Average of the last 20 volume bars (MA Length = 20) | Volume bar substantially above 20-MA | Indicates smart-money, institutional, or insider accumulation | [00:05:05–00:06:17] |
| Lifetime-High Volume Check | Comparing current weekly/monthly volume bar against full chart history | Highest-ever volume bar | Early high-probability signal of smart-money entry | [00:08:29–00:09:03] |

## e) Visual aid
- Add `Volume` on TradingView → open Settings/Style.
- Enable `Volume MA` with `MA Length = 20` and thicken the MA line.
- Confirm volume bars rise substantially above the 20-MA alongside rising price.
- Cross-check `V-Stop` turning green (weekly first, monthly next) + lifetime-high volume + promoter deal flow.
## f) Speaker's cautions & common mistakes
- V-Stop and other trend indicators can trigger slightly later on monthly charts [00:06:17, 00:08:29]; check weekly charts and raw volume vs. 20-MA to spot accumulation earlier.
# BS-Lec06 – Stage 4: On-Balance Volume (OBV) Formula, Slope & Case Studies  [00:09:03–00:14:20]
## a) What this stage answers
How is On-Balance Volume (OBV) calculated, why must you focus on its slope rather than absolute values, and how does it pair with V-Stop, ADX, and Parabolic SAR?
## b) Detailed explanation
OBV Definition & Formula: On-Balance Volume (OBV) is a cumulative price-volume indicator [00:09:03–00:10:42]:

- When `Current Closing Price > Prior Closing Price`: `OBV = Previous OBV + Current Volume`.
- When `Current Closing Price < Prior Closing Price`: `OBV = Previous OBV - Current Volume`.

**Focus Strictly on the Slope:** The speaker emphasizes repeatedly—**"focus on the slope"**—rather than the absolute OBV value [00:10:42–00:11:15]:

- **Upward-sloping OBV + rising price:** Confirms smart money / institutions are accumulating (`accumulation by stronger hands`) [00:10:42–00:11:48, 00:13:45].
- **Stagnant / sideways OBV:** Provides no directional indication [00:11:48–00:12:17].
- **Downward-sloping OBV + falling price (especially on high volume):** Indicates **distribution** [00:11:48, 00:13:14–00:13:45].

**Probabilistic Framework Integration:** All indicators are probabilistic [00:12:17]. Combine the core system—**V-Stop positive + ADX > 20** for entry, Parabolic SAR for pyramiding up—with OBV and Volume > 20-MA to confirm smart-money participation [00:12:17–00:12:44].

**V-Stop Exits Faster Than OBV:** Because distribution can happen slowly, **V-Stop often triggers an exit much before OBV's slope turns downward** [00:13:14–00:13:45]. Use OBV slope to confirm accumulation and Stage 2 breakouts, while relying on V-Stop for exits [00:13:14–00:14:20].
## c) Examples & case studies
- **Example:** Equitas [00:11:15–00:12:17]
  - **Context:** Reading OBV slope across uptrends, consolidations, and downtrends.
  - **Walkthrough:** Showed upward-sloping OBV during institutional accumulation, flat/sideways OBV giving no signal during sideways price action, and downward-sloping OBV during high-volume declines.
  - **Takeaway:** Track the directional slope of OBV rather than its raw level.
- **Example:** Laurus Labs [00:12:44–00:13:45]
  - **Context:** Institutional block sale, subsequent Stage 2 accumulation, and exit timing.
  - **Data/details:** **Warburg Pincus** sold at **₹66 on 4th May** [00:12:44], driving the OBV slope sharply down ("OBV has been taken to the cleaners"). Later, once institutions entered, V-Stop turned positive, volumes increased, and OBV began shaping upwards. At the eventual top, V-Stop signaled an exit well before OBV's slope turned down.
  - **Takeaway:** OBV slope confirms strong-hand accumulation in Stage 2, while V-Stop protects profits earlier during slow distribution.
## d) Formulas, metrics & thresholds (if any)

| Metric/Formula/Screen Filter | Definition or Expression | Speaker's benchmark/threshold | Interpretation | Timestamp |
| --- | --- | --- | --- | --- |
| On-Balance Volume (OBV) | If Close > Prior Close: Prev OBV + Current Volume; If Close < Prior Close: Prev OBV - Current Volume | Upward slope = accumulation; downward slope = distribution; flat = neutral | Confirms smart-money volume backing Stage 2 breakouts | [00:09:41–00:11:48] |

## e) Visual aid
None stated.
## f) Speaker's cautions & common mistakes
- Do not focus on absolute OBV numbers or treat a stagnant/flat OBV as a signal; focus strictly on the **slope** [00:10:42–00:12:17].
- Do not wait for OBV to slope downward before exiting—slow distribution means V-Stop triggers an exit much earlier [00:13:14].
# BS-Lec06 – Stage 5: Balaji Amines Volume Decay, Stage 2 Screening & Closing  [00:14:20–00:16:35]
## a) What this stage answers
How does volume decay below the 20-MA look after a major run, and how do you screen for fresh Stage 2 breakouts using volume and OBV?
## b) Detailed explanation
Price and Volume as the Foundation: Technical analysis is fundamentally the study of price and volume; every other indicator is merely a derivative of those two inputs [00:14:20–00:14:55].

**Volume Decay Below 20-MA & Hill Analogy Revisited:** When volumes flatten and drop below the 20-period Volume MA, buying interest has faded [00:14:55]. Speaker reiterates the hill rule: for a stock (or person) to fall from a hill, only a push is needed (low volume), whereas climbing the hill requires large-volume buying [00:14:55–00:15:29].

Stage 2 Breakout Screening Pattern: Even when screening fundamentally strong stocks, look for a consolidation followed by a breakout on very high volumes—specifically where **OBV's slope is shaping upwards** and **volume bars cross above the 20-MA** [00:15:29–00:16:01]. This proves volume ("the weight of the evidence") is supporting trend strength.

Course Wrap-Up & Next Class Preview: Announces that the next (final) class will summarize the entire technical analysis course [00:16:01–00:16:35].
## c) Examples & case studies
- **Example:** Balaji Amines [?] [00:14:20–00:15:29]
  - **Context:** Illustrating Stage 2 volume expansion followed by post-2021 volume decay.
  - **Data/details:** Weekly V-Stop started trending alongside rising OBV and rising volumes; from the **end of 2021** [00:14:55], volumes flattened and fell below the 20-period moving average.
  - **Walkthrough:** Compared the active Stage 2 markup (expanding OBV and volume) against the post-2021 phase where volume dropped below the 20-MA.
  - **Takeaway:** Volumes flattening and falling below the 20-MA signal waning institutional buying after a major run.
## d) Formulas, metrics & thresholds (if any)

| Metric/Formula/Screen Filter | Definition or Expression | Speaker's benchmark/threshold | Interpretation | Timestamp |
| --- | --- | --- | --- | --- |
| Stage 2 Breakout Volume Screen | Consolidation breakout + Volume > 20-MA + OBV slope upwards | Both volume > 20-MA and upward OBV slope present | Confirms strong-hand / smart-money backing for Stage 2 breakout | [00:15:29–00:16:01] |

## e) Visual aid
- Fundamentally strong stock consolidates [00:15:29].
- Price breaks out on very high volume (`Volume > 20-MA`) [00:15:29–00:16:01].
- `OBV` slope shapes upwards [00:16:01].
- Core trend filters align (`V-Stop` green + `ADX > 20`; `Parabolic SAR` for pyramiding) [00:12:17].
## f) Speaker's cautions & common mistakes
- Do not confuse a post-peak, below-20-MA volume environment (such as post-2021 Balaji Amines [?]) with active accumulation; climbing requires heavy buying volume, while falling takes only a push [00:14:55–00:15:29].

Batch complete: 1-5.

---

# BS-Lec06 – Close-Out: Master Lists, Self-Test & Coverage Check
## 6. CONSOLIDATED FORMULA & METRIC SHEET

| **Metric / Screen** | **Formula / Filter Condition** | **Speaker's Benchmark** | **When to Use** | **Stage** | **Timestamp** |
| --- | --- | --- | --- | --- | --- |
| **Volume** | Number of shares bought and sold in a given time period (e.g., 1 trading day) | High / rising bars in the direction of price increase | Confirming institutional / smart-money participation on breakouts | Stage 2 | [00:02:11–00:02:43, 00:03:48] |
| **20-Period Volume Moving Average (20-MA)** | Moving average of the last 20 volume bars (`MA Length = 20` on TradingView) | Volume bars substantially above 20-MA | Detecting smart-money, institutional, or insider accumulation; flagging volume decay when bars fall below 20-MA | Stage 3, Stage 5 | [00:05:05–00:06:17, 00:14:55] |
| **Lifetime-High Volume Check** | Current weekly/monthly volume bar compared against full chart history | Highest-ever volume bar on the chart | Early high-probability signal of smart-money entry ahead of lagging indicators like V-Stop | Stage 3 | [00:08:29–00:09:03] |
| **On-Balance Volume (OBV)** | If Current Close > Prior Close: `Prev OBV + Current Volume`; If Current Close < Prior Close: `Prev OBV - Current Volume` | Focus on **slope**: upward = accumulation; downward = distribution; flat/stagnant = no signal | Confirming strong-hand accumulation in Stage 2 and spotting distribution | Stage 4 | [00:09:03–00:12:17] |
| **Stage 2 Breakout Volume Screen** | Consolidation breakout + `Volume > 20-MA` + `OBV slope upwards` | Both `Volume > 20-MA` and upward OBV slope present alongside rising price | Screening fundamentally strong stocks for fresh Stage 2 breakouts | Stage 5 | [00:15:29–00:16:01] |
| **Combined Probabilistic Entry & Exit Stack** | `V-Stop positive` + `ADX > 20` (entry); `Parabolic SAR` (pyramid); `Volume > 20-MA` + `OBV slope up` (confirmation); `V-Stop` (exit) | V-Stop exits faster than OBV during slow distribution | Full probabilistic trend-following + volume confirmation system | Stage 4 | [00:12:17–00:14:20] |



## 7. GLOSSARY
- **Volume:** The number of shares bought and sold in a particular time period (such as a single trading day) [00:02:11–00:02:43].
- **Weight of the evidence:** Speaker's description of volume—while price shows what is happening in a company, volume proves whether price moves are genuinely backed by participation [00:01:40–00:02:11, 00:16:01].
- **Moving Average of Volume (20-MA):** The rolling average of the last 20 volume bars (`MA Length = 20` on TradingView) used to benchmark whether current volume is elevated [00:05:40–00:06:17].
- **Price-Volume Action:** When price is rising, the trend is bullish, and volumes expand above the moving average to confirm the trend [00:06:17–00:06:50].
- **On-Balance Volume (OBV):** A cumulative volume indicator that adds a day's volume when the closing price rises above the prior close and subtracts it when the closing price falls below the prior close [00:09:03–00:10:42].
- **Stage 1 / Stage 2 / Stage 3 / Stage 4:** The four stage-analysis market phases—Stage 1 (sideways base), Stage 2 (markup/uptrend), Stage 3 (flat/distribution), and Stage 4 (markdown/downtrend) [00:00:00–00:00:49].
- **Accumulation vs. Distribution (OBV):** Accumulation by stronger hands is indicated by an upward-sloping OBV; distribution is indicated by a downward-sloping OBV [00:13:14–00:13:45].
- **MSCI Index Inclusion:** Addition of a stock to an MSCI index, which triggers large institutional inflows [00:03:15].
- **V-Stop (Volatility Stop):** Trend-following indicator used for entries and exits; used without redefinition from prior classes [00:04:30, 00:06:17].
- **ADX / Parabolic SAR / Golden Crossover:** Prior-course technical indicators referenced without redefinition [00:03:48, 00:12:17].
- **Screener / TradingView:** Platforms used to inspect volume bars, volume moving averages, OBV, and screeners [00:02:43, 00:04:30, 00:08:00].


## 8. EXAMPLES INDEX

| **Company / Example** | **Sector / Category** | **Concept Illustrated** | **Stage** | **Timestamp** |
| --- | --- | --- | --- | --- |
| **Airplane takeoff on runway** | Analogy | Maximum volume ("engine power") required to launch a stock from a stationary Stage 1 base into Stage 2 | Stage 1 | [00:00:49–00:01:15] |
| **Climbing a hill vs. falling down** | Analogy | Volume asymmetry: climbing (Stage 2) needs heavy effort/volume, whereas falling (Stage 4) can start on low volume ("one leg") | Stage 1, Stage 5 | [00:01:15–00:01:40, 00:14:55–00:15:29] |
| **Varun Beverages** | Beverages / FMCG | Tall volume bar on 30 Nov from MSCI index inclusion; price jumped ₹1,249 → ₹1,410 before consolidating | Stage 2 | [00:02:43–00:03:48] |
| **Equitas** | Banking / Finance | Consolidation → Golden Crossover with rising volume bars; lifetime-high weekly volume check (13–20 Feb 2023 [? verify]); OBV slope reading (up, flat, down) | Stage 2, Stage 3, Stage 4 | [00:03:48–00:04:15, 00:08:00–00:09:03, 00:11:15–00:12:17] |
| **Laurus Labs** | Pharmaceuticals | 5-year Stage 2 markup from ₹106–₹108 base to ₹707 on rising volume; Warburg Pincus sale at ₹66 on 4 May driving OBV down before institutional accumulation; V-Stop exiting faster than OBV | Stage 2, Stage 4 | [00:03:48–00:04:30, 00:12:44–00:13:45] |
| **Linc Pen [?]** | Stationery / Consumer | Volume > 20-MA + weekly/monthly V-Stop turning green corroborated by ~₹1.62 Cr (₹2–3 Cr [?]) promoter open-market buys in a ₹300–400 Cr mcap (Sep/Nov/Dec 2022, Feb 2023) | Stage 3 | [00:05:05–00:07:25] |
| **Balaji Amines [?]** | Specialty Chemicals | Stage 2 rising OBV and volumes vs. post-2021 volume flattening and decay below the 20-MA | Stage 5 | [00:14:20–00:15:29] |



## 9. Q&A HIGHLIGHTS
None — no audience Q&A took place in this session.


## 10. CONCLUSION & NEXT STEPS
- **Closing message:** Technical analysis is fundamentally the study of price and volume—everything else is a derivative of those two [00:14:20–00:14:55]. Volume acts as "the weight of the evidence" confirming whether a Stage 2 breakout is backed by smart money [00:01:40–00:02:11, 00:16:01].
- **Homework / Assignments:** None formally assigned in this session.
- **Tools / Screeners / Books recommended:** Screener [00:02:43], TradingView (Volume indicator with 20-MA, OBV, and screeners) [00:04:30–00:08:00].
- **Upcoming lecture topic:** The next (final) class will summarize the entire *SOIC Technical Analysis for Long-Term Investors* course [00:16:01–00:16:35].


## 11. SELF-TEST
- **Why does a Stage 2 breakout typically require high volume while a Stage 4 decline can start on low volume?**
  - *Answer:* Moving a stationary stock into a Stage 2 markup requires heavy "engine power" (institutional buying), whereas a Stage 4 drop needs only a push ("to fall down it just takes one leg") (Stage 1, Stage 5).
- **What are the three volume indicators taught in this session?**
  - *Answer:* Raw Volume, the 20-period Moving Average of Volume, and On-Balance Volume (OBV) (Stage 2, Stage 3, Stage 4).
- **Applied — Varun Beverages:** What catalyst caused the sharp volume spike on 30 November in Varun Beverages, and what price move followed?
  - *Answer:* MSCI index inclusion triggered institutional inflows, lifting the stock from ₹1,249 to ₹1,410 before a consolidation phase (Stage 2).
- **What TradingView `MA Length` setting is used for the Volume Moving Average, and what does a bar substantially above it signal?**
  - *Answer:* `MA Length = 20`; a volume bar substantially above the 20-MA signals entry of smart money, large investors, or institutions (Stage 3).
- **Applied — Linc Pen [?]:** How did promoter deal flow reinforce the 20-MA volume and V-Stop signals on Linc Pen [?]?
  - *Answer:* Promoters bought ~₹1.62 crore (cited as ₹2–3 crore [?]) across Sep, Nov, Dec 2022 and Feb 2023 in a ₹300–400 crore market-cap company while volume stayed above the 20-MA and V-Stop turned green (Stage 3).
- **Why should you pause and check if a weekly or monthly volume bar is a "lifetime-high volume"?**
  - *Answer:* Lifetime-high volume alongside rising price raises the probability of early smart-money entry before lagging indicators like V-Stop confirm (Stage 3).
- **Write the exact OBV calculation rule for up-close days vs. down-close days.**
  - *Answer:* If Current Close > Prior Close, `OBV = Previous OBV + Current Volume`; if Current Close < Prior Close, `OBV = Previous OBV - Current Volume` (Stage 4).
- **When reading OBV, why should you ignore the absolute value and focus only on the slope?**
  - *Answer:* An upward OBV slope confirms accumulation by strong hands, a downward slope signals distribution, and a flat/stagnant OBV provides no directional signal (Stage 4).
- **Applied — Laurus Labs:** In the Laurus Labs case study, which indicator triggered an exit first at the top—V-Stop or OBV—and why?
  - *Answer:* V-Stop triggered an exit well before OBV's slope turned downward because distribution can occur slowly (Stage 4).
- **What two volume conditions should appear together when screening fundamentally strong stocks for a Stage 2 breakout?**
  - *Answer:* Volume bars crossing above the 20-MA and OBV's slope shaping upwards following a consolidation (Stage 5).


## 12. GAPS & VERIFICATION LIST
- **Concepts only briefly mentioned:**
  - Golden Crossover (referenced on Equitas without re-explaining mechanics) [00:03:48].
  - TradingView screeners (referenced as taught in the earlier TradingView class) [00:08:00].
  - Core trend-following stack (`V-Stop` positive + `ADX > 20` + `Parabolic SAR` pyramiding) reviewed briefly as prior-class prerequisites [00:12:17].
- **Items marked `[?]`, `[? verify]` or `[? Hindi segment unclear]` to check against the recording:**
  - `Linc Pen [?]` (auto-transcribed as "link pen" / "link") and promoter purchase total `~₹1.62 crore` vs. `₹2–3 crore [?]` [00:05:05–00:07:25].
  - `Equitas` weekly lifetime-high volume date: speaker initially said `20th February 2020` before saying `from 13th Feb 2023 to 20th Feb 2023 [? verify]` [00:08:29].
  - `Balaji Amines [?]` (auto-transcribed as "Malaji Amines") [00:14:20].
  - Phonetic STT terms resolved from context (listed for recording verification): `Varun Beverages` ("one beverages" / "modern beverages" / "war on beverages") [00:02:43–00:03:15]; `Laurus Labs` ("Lawless Labs" / "Lora's Labs" / "Laura Slabs") [00:03:48, 00:04:15, 00:12:44]; `Warburg Pincus` ("Warburg pink") [00:12:44]; `Screener` ("Scenar" / "Skinner") [00:02:43].
- **Slides not legible / unavailable:**
  - PPT slides were not provided for BS-Lec06; all content is grounded solely in the transcript.


## 13. COVERAGE CHECK
Full coverage confirmed (`[00:00:00–00:16:35]` across Stages 1–5 with no timestamp gaps).
