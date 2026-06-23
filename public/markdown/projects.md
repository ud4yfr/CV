# Projects

### Fox Corp / Roku Acquisition Event Study
*Python, statsmodels, yfinance, scipy, SEC EDGAR*

Constructed a two-sided CAR event study of Fox Corp's $22B Roku acquisition, fitting an OLS market model over a 251-day estimation window to isolate announcement-period abnormal returns for both the acquirer and target. Sourced exact disclosure timestamps from EDGAR SGML headers; identified a FOXA-specific 8-K four days prior as a confound, motivating the [-1,+1] primary window. Estimated CARs of -25.7% for FOXA (t = -8.48, p < 0.001) and +12.6% for ROKU (t = 3.12, p = 0.002) — the ~38pp spread consistent with acquirer overpayment and pre-announcement information leakage.

---

### Affirm vs Klarna BNPL Credit Stress Test
*Python, scipy, Monte Carlo, SEC filings*

Built a per-$100-of-exposure unit economics framework to stress-test Affirm and Klarna's retained loan books against rising delinquency, sourcing all inputs from primary SEC filings (Affirm 10-Q, Klarna 20-F, F-1). Fitted a Beta distribution via MLE to Affirm's 7-quarter NCO history; applied a 2x wider proxy for Klarna given a single post-IPO data point. Quantified a 4.3x fragility gap: Affirm holds ~5.4pp buffer to breakeven, Klarna ~1.2pp — attributed to Affirm's 71% interest-bearing book generating a revenue cushion that absorbs credit losses while Klarna's fee-only model does not.

---

### OpenClaw
*Python, RAG, vector DB, WhatsApp API, self-hosted*

Built a self-hosted retrieval-augmented generation (RAG) assistant with WhatsApp integration for natural-language queries over a private document corpus. Designed the full ingestion and retrieval pipeline — chunking, embedding, vector search — and deployed it on self-managed infrastructure.

---

## Homelab

### Self-Hosted Infrastructure
*Proxmox, LXC, Docker, Tailscale, Nginx, Pi-hole*

Built and maintain a self-hosted homelab on a Lenovo ThinkCentre M720q running Proxmox as the hypervisor with Docker containers and LXC for isolated services. Everything is networked over Tailscale for secure remote access from anywhere — campus, travel, wherever.

### Services Running
- **Pi-hole** — network-wide ad blocking and DNS filtering
- **Nginx Reverse Proxy** — routes traffic to internal services with SSL
- **Docker Compose stacks** — self-hosted apps, dev environments, and automation tooling
- **Tailscale mesh network** — zero-config VPN connecting all devices securely

The whole setup is about owning my own infrastructure, keeping things private, and learning how real systems work at the network and OS level — not just writing code that runs on someone else's cloud.
