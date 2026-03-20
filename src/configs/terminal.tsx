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
              Hi, I'm Uday — sophomore at Rutgers studying Economics & Data Science. I
              build multi-agent AI systems, automation pipelines, and backend services
              with Python, FastAPI, and Supabase. I also run a homelab and play guitar and
              synth.
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
              WorkOptional.ai — AI Systems Engineer
            </div>
            <div className="mt-1">
              6-agent Python/FastAPI marketing automation system. UTM attribution across 6
              platforms, AI feedback loops with confidence scoring, multi-tenant Supabase
              schema with RLS. Deployed on Railway.
            </div>
          </div>
        )
      },
      {
        id: "proj-realestate",
        title: "realestate-agent.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-300 font-bold">
              Real Estate Intelligence Agent
            </div>
            <div className="mt-1">
              Apify + n8n + OpenRouter pipeline that scrapes listings, generates automated
              summaries and weekly market reports.
            </div>
          </div>
        )
      },
      {
        id: "proj-coldemail",
        title: "cold-email-agent.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-300 font-bold">Personalized Cold Email Agent</div>
            <div className="mt-1">
              n8n + OpenRouter workflow that generates personalized outreach emails and
              handles automated sequencing and sending.
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
