import { useEffect, useState } from "react";

const Progress = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="text-center w-[50%] mx-auto rounded-full relative border">
      <div
        className="absolute inset-0 bg-red-500 overflow-hidden rounded-full"
        style={{ width: `${percent}%`, zIndex: -1 }}
      ></div>
      <span className="text-white z-50 flex items-center justify-center w-full h-full">
        {percent.toFixed()} %
      </span>
    </div>
  );
};

export default Progress;
