import { IconSparkles } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";
const messages = [
  "Your Interactive Headline",
  "Upto 30% Off + Extra 5% Off on 2 or more jewellery designs",
  "Silvoria by Sarthak",
];

export default function InteractiveHeadline() {
  let timerRef = useRef();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if (index === messages.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3000);

    return () => clearInterval(timerRef.current);
  }, [index]);
  return (
    <div className="relative">
    <h1 className="interactive-headline box rounded-b-md bg-indigo-500 text-center text-sm text-white box">
      <IconSparkles className="inline-block w-4 pr-1" />
      <p className="inline-block transition-all">{messages[index]}</p>
    </h1>
    <h1 className="interactive-headline rounded-b-md bg-indigo-500 text-center text-sm text-white box1">
      <IconSparkles className="inline-block w-4 pr-1" />
      <p className="inline-block transition-all">{messages[index]}</p>
    </h1>
    </div>


  );
}
