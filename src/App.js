import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  // function handleCountDown() {
  //   setCount((c) => c - 1);
  // }

  // function handleCountUp() {
  //   setCount((c) => c + 1);
  // }

  // function handleStepDown() {
  //   setStep((c) => c - step);
  // }

  // function handleStepUp() {
  //   setStep((c) => c + step);
  // }

  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: "10vh",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <p>Step : {step} </p>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: "10vh",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p>Count : {count} </p>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days from today was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {/* {count === 0 ? (
        ({ step }, (<p>Today is DATE</p>))
      ) : (
        <p>{count} days from today is Mon Jun 21 2027</p>
      )} */}
    </>
  );
}
