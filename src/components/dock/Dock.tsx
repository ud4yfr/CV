import { useMotionValue } from "framer-motion";
import { apps } from "~/configs";
import { getCompactDockIconSize, isCompactViewport } from "~/utils";

interface DockProps {
  open: (id: string) => void;
  showApps: {
    [key: string]: boolean;
  };
  showLaunchpad: boolean;
  toggleLaunchpad: (target: boolean) => void;
  hide: boolean;
}

export default function Dock({
  open,
  showApps,
  showLaunchpad,
  toggleLaunchpad,
  hide
}: DockProps) {
  const { dockSize, dockMag } = useStore((state) => ({
    dockSize: state.dockSize,
    dockMag: state.dockMag
  }));
  const { winWidth, winHeight } = useWindowSize();
  const coarsePointer =
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  const compact = isCompactViewport(winWidth, winHeight, coarsePointer);
  const effectiveDockSize = compact
    ? getCompactDockIconSize(winWidth, apps.length, dockSize)
    : dockSize;

  const openApp = (id: string) => {
    if (id === "launchpad") toggleLaunchpad(!showLaunchpad);
    else open(id);
  };

  const mouseX = useMotionValue<number | null>(null);

  return (
    <div
      className={`dock fixed inset-x-0 mx-auto ${hide ? "z-0" : "z-50"}`}
      w="full sm:max"
      overflow="x-auto sm:x-visible"
    >
      <ul
        className={`flex w-max min-w-full space-x-2 px-2 backdrop-blur-2xl bg-c-white/20 sm:min-w-0 ${
          compact ? "justify-center" : ""
        }`}
        border="~ c-400/40 rounded-none sm:rounded-xl"
        onMouseMove={(e) => mouseX.set(e.nativeEvent.x)}
        onMouseLeave={() => mouseX.set(null)}
        style={{
          height: `${(effectiveDockSize + 15) / 16}rem`
        }}
      >
        {apps.map((app) => (
          <DockItem
            key={`dock-${app.id}`}
            id={app.id}
            title={app.title}
            img={app.img}
            mouseX={mouseX}
            desktop={app.desktop}
            openApp={openApp}
            isOpen={app.desktop && showApps[app.id]}
            link={app.link}
            dockSize={effectiveDockSize}
            dockMag={dockMag}
          />
        ))}
      </ul>
    </div>
  );
}
