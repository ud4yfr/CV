import { useEffect, useState } from "react";

const files = [
  { name: "about-me.md", path: "markdown/about-me.md" },
  { name: "experience.md", path: "markdown/experience.md" },
  { name: "skills.md", path: "markdown/skills.md" },
  { name: "projects.md", path: "markdown/projects.md" }
];

export default function VSCode() {
  const [activeFile, setActiveFile] = useState(0);
  const [openTabs, setOpenTabs] = useState<number[]>([0]);
  const [contents, setContents] = useState<Record<number, string>>({});

  useEffect(() => {
    files.forEach((f, i) => {
      fetch(f.path)
        .then((res) => res.text())
        .then((text) => setContents((prev) => ({ ...prev, [i]: text })));
    });
  }, []);

  const openFile = (i: number) => {
    setActiveFile(i);
    if (!openTabs.includes(i)) setOpenTabs([...openTabs, i]);
  };

  const closeTab = (e: React.MouseEvent, i: number) => {
    e.stopPropagation();
    const next = openTabs.filter((t) => t !== i);
    if (next.length === 0) return;
    setOpenTabs(next);
    if (activeFile === i) setActiveFile(next[next.length - 1]);
  };

  const lines = (contents[activeFile] || "").split("\n");

  return (
    <div className="size-full bg-[#1e1e1e] flex flex-col text-[#cccccc] select-none">
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-2 gap-4 shrink-0">
          <div className="w-7 h-7 flex items-center justify-center text-white border-l-2 border-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.5v-15L20.5 0zM14 22.5H2.5V7.5H7v0h7v15zm6-6H16V6h-7V1.5h8.5V16.5z" />
            </svg>
          </div>
          <div className="w-7 h-7 flex items-center justify-center text-[#858585]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1.12 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z" />
            </svg>
          </div>
          <div className="w-7 h-7 flex items-center justify-center text-[#858585]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 8.005 8.005 0 0 1-3.201 5.457V5.616a3.738 3.738 0 1 0-2 0v11.624a8.005 8.005 0 0 1-3.201-5.457 3.738 3.738 0 1 0-2.07.37A10.005 10.005 0 0 0 11 22.38V24h2v-1.62a10.005 10.005 0 0 0 5.27-9.88 3.738 3.738 0 0 0 2.737-4.278z" />
            </svg>
          </div>
          <div className="mt-auto w-7 h-7 flex items-center justify-center text-[#858585]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z" />
            </svg>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-48 bg-[#252526] border-r border-[#3c3c3c] flex flex-col shrink-0">
          <div className="h-9 flex items-center px-4 text-[11px] uppercase tracking-wider text-[#bbbbbb] font-semibold">
            Explorer
          </div>
          <div className="text-[11px] uppercase tracking-wider text-[#cccccc] font-bold px-4 py-1">
            ▾ markdown
          </div>
          {files.map((f, i) => (
            <div
              key={f.name}
              onClick={() => openFile(i)}
              className={`flex items-center gap-2 px-6 py-[3px] text-[13px] cursor-pointer ${
                activeFile === i
                  ? "bg-[#37373d] text-[#e8e8e8]"
                  : "text-[#aaa] hover:bg-[#2a2d2e]"
              }`}
            >
              <span className="text-[#519aba] text-[10px]">M↓</span>
              {f.name}
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="h-[35px] bg-[#252526] flex items-end shrink-0 overflow-x-auto">
            {openTabs.map((i) => (
              <div
                key={i}
                onClick={() => setActiveFile(i)}
                className={`h-full flex items-center px-3 gap-2 text-[12px] cursor-pointer shrink-0 ${
                  activeFile === i
                    ? "bg-[#1e1e1e] text-[#cccccc] border-t-2 border-t-[#007acc]"
                    : "bg-[#2d2d2d] text-[#888] border-r border-r-[#252526]"
                }`}
              >
                <span className="text-[#519aba] text-[10px]">M↓</span>
                {files[i].name}
                <span
                  onClick={(e) => closeTab(e, i)}
                  className="text-[10px] hover:text-white ml-1 opacity-60 hover:opacity-100"
                >
                  ✕
                </span>
              </div>
            ))}
          </div>

          {/* Breadcrumb */}
          <div className="h-6 bg-[#1e1e1e] flex items-center px-4 text-[11px] text-[#999] border-b border-[#3c3c3c] shrink-0">
            <span>CV</span>
            <span className="mx-1">›</span>
            <span>public</span>
            <span className="mx-1">›</span>
            <span>markdown</span>
            <span className="mx-1">›</span>
            <span className="text-[#cccccc]">{files[activeFile].name}</span>
          </div>

          {/* Code */}
          <div className="flex-1 overflow-auto flex">
            <div className="flex-1 py-1 font-mono text-[13px] leading-[20px]">
              {lines.map((line, i) => (
                <div key={i} className="flex hover:bg-[#2a2d2e]">
                  <span className="w-12 text-right pr-4 text-[#858585] select-none shrink-0 text-[12px]">
                    {i + 1}
                  </span>
                  <span
                    className={
                      line.startsWith("# ")
                        ? "text-[#569cd6] font-bold"
                        : line.startsWith("## ") || line.startsWith("### ")
                          ? "text-[#4ec9b0] font-semibold"
                          : line.startsWith("**")
                            ? "text-[#dcdcaa]"
                            : line.startsWith("- ")
                              ? "text-[#ce9178]"
                              : line.startsWith("*") && line.endsWith("*")
                                ? "text-[#808080] italic"
                                : line.match(/\[.*\]\(.*\)/)
                                  ? "text-[#9cdcfe]"
                                  : "text-[#d4d4d4]"
                    }
                  >
                    {line || "\u00A0"}
                  </span>
                </div>
              ))}
            </div>

            {/* Minimap */}
            <div className="w-14 bg-[#1e1e1e] border-l border-[#3c3c3c] shrink-0 py-1 overflow-hidden">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className="h-[3px] mx-2 my-[1px] rounded-sm"
                  style={{
                    width: `${Math.min(line.length * 0.7, 40)}px`,
                    backgroundColor: line.length > 0 ? "#d4d4d420" : "transparent"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] flex items-center px-3 text-[11px] text-white shrink-0">
        <div className="flex items-center gap-3">
          <span>⎇ main</span>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-4">
          <span>Ln {lines.length}, Col 1</span>
          <span>UTF-8</span>
          <span>Markdown</span>
        </div>
      </div>
    </div>
  );
}
