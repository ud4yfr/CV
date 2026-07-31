import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("application shell", () => {
  it("does not let third-party analytics block the application entry", () => {
    const html = readFileSync(resolve(process.cwd(), "index.html"), "utf8");
    const umamiTag = html.match(
      /<script[^>]+src="https:\/\/umami\.taild0419d\.ts\.net\/script\.js"[^>]*>/
    )?.[0];

    expect(umamiTag).toContain("async");
    expect(umamiTag).not.toContain("defer");
  });
});
