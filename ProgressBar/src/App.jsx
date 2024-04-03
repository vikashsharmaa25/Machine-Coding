import React, { useEffect, useState } from "react";
import Progress from "./cmponents/Progress";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => val + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center p-10">Progress bar</h1>
        <Progress value={value} />
      </div>
    </>
  );
}

export default App;
