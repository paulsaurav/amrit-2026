import { useEffect, useState } from 'react';

const lines = [
  'Department of Computer Science',
  'Assam University, Silchar',
  '24–26 December 2026 (25th Excluded)',
];

export default function HeroTitleBlock() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white font-poppins text-left mx-auto max-w-fit leading-tight">
      <h1 className="text-[40px] md:text-[56px] font-extrabold text-center">
        AMRIT–2026
      </h1>

      <div className="relative h-[40px] md:h-[48px] mt-1">
        <div
          key={index}
          className="absolute animate-flipText text-[20px] md:text-[28px] font-bold whitespace-nowrap"
        >
          {lines[index]}
        </div>
      </div>
    </div>
  );
}
