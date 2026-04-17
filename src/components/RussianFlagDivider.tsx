export default function RussianFlagDivider() {
  return (
    <div className="w-full flex flex-col" style={{ height: 6 }}>
      <div className="flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent)" }} />
      <div className="flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(0,57,166,0.25), transparent)" }} />
      <div className="flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(213,43,30,0.25), transparent)" }} />
    </div>
  );
}
