import React from "react";
import { Rnd } from "react-rnd";
import {
  minMarginX,
  minMarginY,
  appBarHeight,
  getCompactWindowMetrics,
  isCompactViewport
} from "~/utils";

const FullIcon = ({ size }: { size: number }) => (
  <svg
    className="icon"
    viewBox="0 0 13 13"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
  >
    <path d="M9.26 12.03L.006 2.73v9.3H9.26zM2.735.012l9.3 9.3v-9.3h-9.3z" />
  </svg>
);

const ExitFullIcon = ({ size }: { size: number }) => (
  <svg
    className="icon"
    viewBox="0 0 19 19"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
  >
    <path d="M18.373 9.23L9.75.606V9.23h8.624zM.6 9.742l8.623 8.624V9.742H.599z" />
  </svg>
);

interface TrafficProps {
  id: string;
  max: boolean;
  compact?: boolean;
  aspectRatio?: number;
  setMax: (id: string, target?: boolean) => void;
  setMin: (id: string) => void;
  close: (id: string) => void;
}

interface WindowProps extends TrafficProps {
  title: string;
  min: boolean;
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  x?: number;
  y?: number;
  z: number;
  focus: (id: string) => void;
  children: React.ReactNode;
}

interface WindowState {
  width: number;
  height: number;
  x: number;
  y: number;
}

const TrafficLights = ({
  id,
  close,
  aspectRatio,
  max,
  compact = false,
  setMax,
  setMin
}: TrafficProps) => {
  const disableMax = aspectRatio !== undefined || compact;

  const closeWindow = (e: React.MouseEvent | React.TouchEvent): void => {
    e.stopPropagation();
    close(id);
  };

  return (
    <div className="traffic-lights flex flex-row absolute left-0 space-x-2 pl-2 mt-1.5">
      <button
        className="window-btn bg-red-500 dark:bg-red-400"
        onClick={closeWindow}
        onTouchEnd={closeWindow}
      >
        <span className="icon i-gg:close text-[9px]" />
      </button>
      <button
        className={`window-btn ${max ? "bg-c-400" : "bg-yellow-500 dark:bg-yellow-400"}`}
        onClick={() => setMin(id)}
        onTouchEnd={() => setMin(id)}
        disabled={max}
      >
        <span className={`icon i-fe:minus text-[10px] ${max ? "invisible" : ""}`} />
      </button>
      <button
        className={`window-btn ${
          disableMax ? "bg-c-400" : "bg-green-500 dark:bg-green-400"
        }`}
        onClick={() => setMax(id)}
        onTouchEnd={() => setMax(id)}
        disabled={disableMax}
      >
        {!disableMax && (max ? <ExitFullIcon size={9} /> : <FullIcon size={6} />)}
      </button>
    </div>
  );
};

const Window = (props: WindowProps) => {
  const dockSize = useStore((state) => state.dockSize);
  const { winWidth, winHeight } = useWindowSize();
  const coarsePointer =
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  const compact = isCompactViewport(winWidth, winHeight, coarsePointer);
  const compactMetrics = getCompactWindowMetrics(winWidth, winHeight, dockSize);

  const initWidth = Math.min(winWidth, props.width || 640);
  const initHeight = Math.min(winHeight, props.height || 400);

  const [state, setState] = useState<WindowState>({
    width: initWidth,
    height: initHeight,
    // "+ winWidth" because of the boundary for windows
    x: winWidth + (winWidth - initWidth) / 2 + (props.x || 0),
    // "- minMarginY" because of the boundary for windows
    y: (winHeight - initHeight - dockSize - minMarginY) / 2 + (props.y || 0)
  });

  useEffect(() => {
    setState((current) => ({
      ...current,
      width: Math.min(winWidth, current.width),
      height: Math.min(winHeight, current.height)
    }));
  }, [winWidth, winHeight]);

  const round = props.max || compact ? "rounded-none" : "rounded-lg";
  const minimized = props.min
    ? "opacity-0 invisible transition-opacity duration-300"
    : "";
  const border = props.max || compact ? "" : "border border-gray-500/30";
  const width = compact ? compactMetrics.width : props.max ? winWidth : state.width;
  const height = compact ? compactMetrics.height : props.max ? winHeight : state.height;
  const disableMax = props.aspectRatio !== undefined || compact;

  const children = React.cloneElement(props.children as React.ReactElement, {
    width,
    compact
  });

  return (
    <Rnd
      bounds="parent"
      size={{
        width: width,
        height: height
      }}
      position={{
        x: compact
          ? compactMetrics.x
          : props.max
            ? winWidth // because of boundary
            : Math.min(
                // "winWidth * 2" because of the boundary for windows
                winWidth * 2 - minMarginX,
                Math.max(
                  // "+ winWidth" because we add a boundary for windows
                  winWidth - state.width + minMarginX,
                  state.x
                )
              ),
        y: compact
          ? compactMetrics.y
          : props.max
            ? -minMarginY // because of boundary
            : Math.min(
                // "- minMarginY" because of the boundary for windows
                winHeight - minMarginY - (dockSize + 15 + minMarginY),
                Math.max(0, state.y)
              )
      }}
      onDragStop={(e, d) => {
        setState({ ...state, x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setState({
          ...state,
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          ...position
        });
      }}
      minWidth={compact ? width : props.minWidth ? props.minWidth : 200}
      minHeight={compact ? height : props.minHeight ? props.minHeight : 150}
      dragHandleClassName="window-bar"
      disableDragging={props.max || compact}
      enableResizing={!props.max && !compact}
      lockAspectRatio={compact ? false : props.aspectRatio}
      lockAspectRatioExtraHeight={
        !compact && props.aspectRatio ? appBarHeight : undefined
      }
      style={{ zIndex: props.z }}
      onMouseDown={() => props.focus(props.id)}
      className={`overflow-hidden ${compact ? "compact-window" : ""} ${round} ${border} shadow-lg shadow-black/30 ${minimized}`}
      id={`window-${props.id}`}
    >
      <div
        className="window-bar relative flex h-6 items-center justify-center text-center bg-c-200"
        onDoubleClick={() => !disableMax && props.setMax(props.id)}
      >
        <TrafficLights
          id={props.id}
          max={props.max}
          compact={compact}
          aspectRatio={props.aspectRatio}
          setMax={props.setMax}
          setMin={props.setMin}
          close={props.close}
        />
        <span className="font-semibold text-c-700">{props.title}</span>
      </div>
      <div className="innner-window w-full overflow-y-hidden">{children}</div>
    </Rnd>
  );
};

export default Window;
