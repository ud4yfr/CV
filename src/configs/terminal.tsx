import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, I'm Uday — Data Science & Economics student at Rutgers. I build
              production AI systems and point them at real business problems — multi-agent
              LLM pipelines, self-hosted infrastructure, end-to-end automations. Strong
              foundation in data analysis, statistics, and quantitative problem-solving. I
              also run a homelab and play guitar and synth.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Self-Hosted Infra / Homelab / Guitar / Football / Basketball / Music Production / Synth"
      },
      {
        id: "about-stack",
        title: "stack.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              <span>
                <span className="text-green-300">languages:</span> Python, R, Stata,
                JavaScript
              </span>
              <span>
                <span className="text-green-300">frameworks:</span> FastAPI, React,
                statsmodels
              </span>
              <span>
                <span className="text-green-300">ai/ml:</span> LLM pipelines, multi-agent
                systems, RAG, n8n, OpenRouter
              </span>
              <span>
                <span className="text-green-300">stats:</span> OLS, event studies, DiD,
                MLE, Monte Carlo
              </span>
              <span>
                <span className="text-green-300">databases:</span> Supabase, vector DBs
              </span>
              <span>
                <span className="text-green-300">infra:</span> Docker, Proxmox, LXC,
                Nginx, Tailscale
              </span>
            </div>
          </div>
        )
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a className="text-blue-300" href="mailto:udayadityapatil.99@gmail.com">
                udayadityapatil.99@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/ud4yfr"
                target="_blank"
                rel="noreferrer"
              >
                @ud4yfr
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/uday-patil-954854231/"
                target="_blank"
                rel="noreferrer"
              >
                Uday Patil
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "projects",
    title: "projects",
    type: "folder",
    children: [
      {
        id: "proj-booknorbit",
        title: "booknorbit.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-300 font-bold">
              BookNOrbit — AI Engineer Intern
            </div>
            <div className="mt-1">
              Develop and maintain customer-facing websites and internal admin dashboards
              across multiple client projects. Diagnose and resolve bugs across frontend
              and backend workflows, ship feature improvements, and implement operational
              tooling and workflow automations.
            </div>
          </div>
        )
      },
      {
        id: "proj-workoptional",
        title: "workoptional.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-300 font-bold">
              WorkOptional.ai — Forward Deployed Engineer Intern
            </div>
            <div className="mt-1">
              Built RevenuesRocket — an AI marketing agent for a Thai wellness platform
              automating content across 6 social channels, 2 messaging apps, and 3
              languages. HITL approval dashboard, UTM attribution via Buffer, GoHighLevel,
              and Google Calendar API. Six Beehiiv drip campaigns (30 emails) and
              multi-section landing page through launch readiness.
            </div>
          </div>
        )
      },
      {
        id: "proj-runway",
        title: "runway.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-300 font-bold">Runway — Growth Intern</div>
            <div className="mt-1">
              Drove organic acquisition for a 100,000+ user SaaS platform through a
              structured LinkedIn strategy — 5+ posts/week optimized for reach and
              early-hour engagement.
            </div>
          </div>
        )
      },
      {
        id: "proj-foxroku",
        title: "fox-roku-event-study.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-300 font-bold">
              Fox Corp / Roku Acquisition Event Study
            </div>
            <div className="text-gray-400 text-sm mt-0.5">
              Python, statsmodels, yfinance, scipy, SEC EDGAR
            </div>
            <div className="mt-1">
              Two-sided CAR event study of Fox Corp's $22B Roku acquisition. 251-day OLS
              estimation window with EDGAR-sourced disclosure timestamps. CARs: -25.7%
              FOXA (p &lt; 0.001) and +12.6% ROKU (p = 0.002). ~38pp spread consistent
              with acquirer overpayment and information leakage.
            </div>
          </div>
        )
      },
      {
        id: "proj-bnpl",
        title: "affirm-klarna-stress-test.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-300 font-bold">
              Affirm vs Klarna BNPL Credit Stress Test
            </div>
            <div className="text-gray-400 text-sm mt-0.5">
              Python, scipy, Monte Carlo, SEC filings
            </div>
            <div className="mt-1">
              Per-$100 exposure stress test from primary SEC filings. Beta MLE on Affirm's
              NCO history. 4.3x fragility gap: Affirm ~5.4pp buffer to breakeven vs Klarna
              ~1.2pp — driven by Affirm's interest-bearing revenue cushion.
            </div>
          </div>
        )
      },
      {
        id: "proj-openclaw",
        title: "openclaw.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-300 font-bold">OpenClaw — RAG + WhatsApp</div>
            <div className="mt-1">
              Self-hosted RAG assistant for natural-language queries over private
              documents. Designed the ingestion, chunking, embedding, vector-search, and
              WhatsApp integration pipeline.
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.py",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>{" "}
          <span className="text-blue-400">agents_running</span>:
        </div>
        <div>
          <span className="text-blue-400 ml-9">revenue</span>
          <span className="text-yellow-400"> += 1</span>
        </div>
      </div>
    )
  },
  {
    id: "system-info",
    title: ".system-info",
    type: "file",
    content: (
      <div className="py-1 font-mono">
        <div className="text-green-400">uday@homelab</div>
        <div>-----------------</div>
        <div>
          <span className="text-cyan-300">OS:</span> Proxmox VE 8.x / Ubuntu Server
        </div>
        <div>
          <span className="text-cyan-300">Shell:</span> zsh + oh-my-zsh
        </div>
        <div>
          <span className="text-cyan-300">Editor:</span> VS Code / Cursor
        </div>
        <div>
          <span className="text-cyan-300">Network:</span> Tailscale mesh
        </div>
        <div>
          <span className="text-cyan-300">Containers:</span> Docker + LXC
        </div>
        <div>
          <span className="text-cyan-300">Reverse Proxy:</span> Nginx
        </div>
        <div>
          <span className="text-cyan-300">Uptime:</span> 99.7%
        </div>
      </div>
    )
  }
];

export default terminal;
