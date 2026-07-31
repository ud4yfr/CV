export default function Battery() {
  const level = 0.29;

  return (
    <div className="battery-status hstack space-x-2">
      <span text-xs>{(level * 100).toFixed()}%</span>
      <div className="relative hstack" title="Portfolio battery">
        <span className="i-bi:battery text-2xl" />
        <div
          className="battery-level bg-yellow-500"
          style={{ width: `${0.1 + level * 0.96}rem` }}
        />
      </div>
    </div>
  );
}
