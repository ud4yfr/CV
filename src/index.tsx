import React from "react";
import { createRoot } from "react-dom/client";

import DesktopPortfolio from "~/DesktopPortfolio";

import "@unocss/reset/tailwind.css";
import "uno.css";
import "katex/dist/katex.min.css";
import "~/styles/index.css";

export default function App() {
  return <DesktopPortfolio />;
}

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
