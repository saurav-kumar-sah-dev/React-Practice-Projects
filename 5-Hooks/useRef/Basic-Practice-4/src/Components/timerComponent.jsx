import { useRef, useState } from "react";
import Styles from "./timerComponent.module.css";

export const TimerComponent = () => {
  const [time, setTime] = useState(0);
  const timer = useRef(null);

  function handleStartButton() {
    if (timer.current !== null) return;
    timer.current = setInterval(() => setTime((prev) => prev + 1), 1000);
  }

  function handleStopButton() {
    clearInterval(timer.current);
    timer.current = null;
  }

  function handleResetButton() {
    clearInterval(timer.current);
    timer.current = null;
    setTime(0);
  }

  return (
    <>
      <p className={Styles.timerText}>Time: {time} sec</p>
      <div className={Styles.buttonContainer}>
        <button className={Styles.divButton} onClick={handleStartButton}>
          Start
        </button>
        <button className={Styles.divButton} onClick={handleStopButton}>
          Stop
        </button>
        <button className={Styles.divButton} onClick={handleResetButton}>
          Reset
        </button>
      </div>
    </>
  );
};
