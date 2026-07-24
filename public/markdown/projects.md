# Projects

### Fox Corp / Roku Acquisition Event Study
*Python, statsmodels, yfinance, scipy, SEC EDGAR*

- Constructed a two-sided CAR event study of Fox Corp's $22B Roku acquisition using a 251-day OLS estimation window; sourced exact disclosure timestamps from EDGAR and identified a FOXA-specific 8-K confound.
- Estimated CARs of -25.7% for FOXA (p < 0.001) and +12.6% for ROKU (p = 0.002); the ~38pp spread and ROKU's pre-event move were consistent with acquirer overpayment and information leakage.

---

### Affirm vs Klarna BNPL Credit Stress Test
*Python, scipy, Monte Carlo, SEC filings*

- Built a per-$100 exposure stress test from primary SEC filings, fitting a Beta distribution via MLE to Affirm's NCO history and documenting a conservative proxy for Klarna's limited post-IPO data.
- Quantified a 4.3x fragility gap: Affirm held a ~5.4pp buffer to breakeven versus Klarna's ~1.2pp, driven by Affirm's interest-bearing revenue cushion.

---

### OpenClaw
*Python, RAG, vector database, WhatsApp API, self-hosted*

- Built and deployed a self-hosted RAG assistant for natural-language queries over private documents, designing the ingestion, chunking, embedding, vector-search, and WhatsApp integration pipeline.
