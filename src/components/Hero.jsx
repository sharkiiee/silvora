import { IconShoppingCartSearch } from "@tabler/icons-react";
export default function Hero() {
  return (
    <div className="h-screen bg-black text-white">
      {/* <div className="border scale-y-150 border-white p-4 font-instrumentalItalic text-4xl font-medium capitalize text-stone-400"> */}
      <div className="border border-white p-4 font-instrumentalItalic text-4xl font-medium capitalize text-stone-400">
        <p>
          Your everyday <span className="text-stone-200">Glow</span>, in Silver
        </p>
        <p>
          Crafted with <span className="text-stone-200">Love</span>
        </p>
      </div>
      <button className="m-2 rounded-md bg-indigo-500 px-3 py-1 text-sm font-medium text-white shadow-[inset_0_2px_0_#818cf8] transition-all duration-300 ease-in-out hover:bg-indigo-600 ">
        <div className="inline-block translate-y-[1px] ">
          Shop Now
        </div>{" "}
        <IconShoppingCartSearch className="inline-block h-4 w-5 pr-1" />
      </button>
      <button className="m-2 border-[1px] border-white rounded-md px-3 py-1 text-sm font-medium text-white shadow- transition-all duration-300 ease-in-out">
        View Collection
      </button>
    </div>
  );
}
