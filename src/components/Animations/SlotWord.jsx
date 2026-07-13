import { useEffect, useState } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomChar() {
  return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
}

function SlotLetter({ finalChar, delay }) {
  const [char, setChar] = useState(randomChar());
  const [done, setDone] = useState(false);

  useEffect(() => {
    let interval;
    let timeout;

    // start spinning after delay
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setChar(randomChar());
      }, 60);

      // stop spinning after random duration
      timeout = setTimeout(() => {
        clearInterval(interval);
        setChar(finalChar);
        setDone(true);
      }, 800 + Math.random() * 600);
    }, delay);

    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [finalChar, delay]);

  return (
    <span
      className={`inline-block text-center text-2xl font-bold transition-all duration-300 ${done ? "text-gray-500" : "text-gray-400"
        }`}
    >
      {char}
    </span>
  );
}

export default function SlotWord({ word = "ARFM" }) {
  return (
    <div className="flex gap-1 font-mono rounded-xl">
      {word.split("").map((letter, i) => (
        <SlotLetter key={i} finalChar={letter} delay={i * 150} />
      ))}
    </div>
  );
}