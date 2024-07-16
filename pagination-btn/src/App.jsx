import { motion } from "framer-motion";
import { useState } from "react";

const steps = Array.from({ length: 6 }, (_, i) => i);

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(Math.min(currentStep + 1, steps.length));
  };
  const prevStep = () => {
    setCurrentStep(Math.max(currentStep - 1, 1));
  };

  return (
    <div className="h-screen grid place-items-center container  ">
      <div className="flex items-center gap-x-3">
        <button
          onClick={prevStep}
          className="font-semibold focus:ring-2 ring-neutral-200 transition-all duration-300 hover:bg-neutral-100  border px-3 py-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="flex items-center gap-x-1">
          {steps.map((_, i) => {
            const activeStep = currentStep === i + 1;

            return (
              <motion.button
                key={i}
                onClick={() => setCurrentStep(i + 1)}
                style={{ color: activeStep && "#fff" }}
                className={`font-semibold  z-10 relative rounded-md text-sm inline-block transition-all px-3 py-1.5 border duration-300  ${
                  activeStep && "ring-2  ring-neutral-200"
                }`}
              >
                {i + 1}
                {activeStep && (
                  <motion.div
                    layoutId="button"
                    className="absolute  rounded-md bg-indigo-600 w-full h-full inset-0 -z-10"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
        <button
          onClick={nextStep}
          className="font-semibold focus:ring-2 ring-neutral-200 transition-all duration-300 hover:bg-neutral-100  border px-3 py-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
