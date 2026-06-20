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
              Hi, I'm Uday — sophomore at Rutgers studying Data Science & Economics. I
              build production AI systems — multi-agent pipelines, automation backends,
              self-hosted infra. Python, FastAPI, Supabase. I also run a homelab and play
              guitar and synth.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "AI Agents / LLM Orchestration / Backend Engineering / Self-Hosted Infra / Music Production / Synth"
      },
      {
        id: "about-stack",
        title: "stack.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              <span>
                <span className="text-green-300">languages:</span> Python, R, JavaScript,
                TypeScript
              </span>
              <span>
                <span className="text-green-300">frameworks:</span> FastAPI, React, httpx
              </span>
              <span>
                <span className="text-green-300">ai/ml:</span> OpenRouter, LLM pipelines,
                n8n, Apify
              </span>
              <span>
                <span className="text-green-300">databases:</span> Supabase, Postgres,
                vector DBs
              </span>
              <span>
                <span className="text-green-300">infra:</span> Docker, Proxmox, LXC,
                Nginx, Tailscale
              </span>
              <span>
                <span className="text-green-300">tools:</span> Git, Linux, Docker Compose,
                Railway
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
        id: "proj-workoptional",
        title: "workoptional.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-300 font-bold">
              WorkOptional.ai — Forward Deployed Engineer Intern
            </div>
            <div className="mt-1">
              Built RevenuesRocket — a full AI marketing agent for a Thai wellness
              platform (Sabai) automating content across 6 social channels and 2 messaging
              apps in 3 languages. Two-pass validation pipeline (15 deterministic checks +
              LLM judgment), history-aware variety enforcement, HITL approval dashboard,
              and UTM attribution via Buffer, GoHighLevel, and Google Calendar API.
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
              Driving organic user acquisition for a 32,000-user SaaS platform through a
              structured LinkedIn content strategy — 5+ posts/week optimized against
              platform algorithm signals for reach and early-hour engagement.
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
              Self-hosted retrieval-augmented generation assistant with WhatsApp
              integration for natural-language queries over a private document corpus.
              Designed the full ingestion and retrieval pipeline: chunking, embedding,
              vector search, deployed on self-managed infra.
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
