import Container from "./Container";
export default function Hero() {
  return (
      <div className="bg-black h-screen text-white">
        <div className="border scale-y-150 border-white p-4 font-instrumentalItalic text-4xl font-medium capitalize text-stone-400">
        {/* <div className="border border-white p-4 font-instrumentalItalic text-4xl font-medium capitalize text-stone-400"> */}
          <p>
            Your everyday <span className="text-stone-200">Glow</span>, in
            Silver
          </p>
          <p>
            Crafted with <span className="text-stone-200">Love</span>
          </p>
        </div>
        <button >Shop Now</button>
      </div>
  );
}
