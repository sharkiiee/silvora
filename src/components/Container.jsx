export default function Container({ children, ...props }) {
  return <div className="m-auto max-w-7xl border-stone-400 border-[1px] border-dotted" style={{ ...props }}>{children}</div>;
}