import { describe, expect, it } from "vitest";

import {
  getCompactDockIconSize,
  getCompactWindowMetrics,
  isCompactViewport
} from "./responsive";

describe("responsive macOS layout", () => {
  it("uses compact mode for portrait phones and coarse-pointer phone landscape", () => {
    expect(isCompactViewport(390, 844, true)).toBe(true);
    expect(isCompactViewport(844, 390, true)).toBe(true);
    expect(isCompactViewport(844, 390, false)).toBe(false);
    expect(isCompactViewport(1280, 800, false)).toBe(false);
  });

  it("fits app windows between the menu bar and dock", () => {
    expect(getCompactWindowMetrics(390, 844, 50)).toEqual({
      width: 390,
      height: 739,
      x: 390,
      y: 0
    });

    expect(getCompactWindowMetrics(844, 390, 50)).toEqual({
      width: 844,
      height: 285,
      x: 844,
      y: 0
    });
  });

  it("shrinks dock icons enough to keep every app visible", () => {
    expect(getCompactDockIconSize(390, 8, 50)).toBe(39);
    expect(getCompactDockIconSize(320, 8, 50)).toBe(31);
    expect(getCompactDockIconSize(844, 8, 50)).toBe(50);
  });
});
