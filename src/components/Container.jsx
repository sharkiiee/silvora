export default function Container({ children, ...props }) {
  return <div className="m-auto max-w-7xl" style={{ ...props }}>{children}</div>;
}