import { minMarginY } from "./constants";

export const isCompactViewport = (
  width: number,
  height: number,
  coarsePointer: boolean
): boolean => width < 640 || (height <= 500 && coarsePointer);

export const getCompactDockIconSize = (
  viewportWidth: number,
  appCount: number,
  preferredSize: number
): number => {
  const horizontalPadding = 16;
  const totalGapWidth = Math.max(0, appCount - 1) * 8;
  const availableSize = Math.floor(
    (viewportWidth - horizontalPadding - totalGapWidth) / appCount
  );

  return Math.min(preferredSize, Math.max(1, availableSize));
};

export const getCompactWindowMetrics = (
  width: number,
  height: number,
  dockSize: number
) => ({
  width,
  height: Math.max(0, height - minMarginY - (dockSize + 15) - 8),
  // App windows live in a 300%-wide boundary shifted left by one viewport.
  x: width,
  y: 0
});
