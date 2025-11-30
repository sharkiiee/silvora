import { IconSparkles } from "@tabler/icons-react";
import { useState, useEffect } from "react";

const messages = [
  "Your Interactive Headline",
  "Up to 30% Off + Extra 5% Off on 2 or more jewellery designs",
  "Silvoria by Sarthak",
];

export default function InteractiveHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative">
      <h1 className="interactive-headline box rounded-b-md bg-indigo-500 text-center text-sm text-white">
        <IconSparkles className="inline-block w-4 pr-1" />
        <span className="inline-block transition-all">{messages[index]}</span>
      </h1>
    </div>
  );
}
