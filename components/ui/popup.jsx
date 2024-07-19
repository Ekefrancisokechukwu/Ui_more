import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const conatainerRef = useRef(null);

  const handleClickOutside = (e) => {
    if (conatainerRef.current && !conatainerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const variants = {
    close: {
      scale: 0,
      opacity: 0,
    },
    open: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <div className="h-screen grid place-items-center">
      <div ref={conatainerRef} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md border hover:bg-neutral-100 duration-300 focus:ring-2 ring-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={variants}
              initial="close"
              animate={isOpen ? "open" : "close"}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                top: "50%",
                translateY: "-50%",
                transformOrigin: "left",
              }}
              transition={{ duration: 0.2 }}
              className="absolute shadow-xl rounded-lg  bg-white bottom-0  h-max  w-max   left-11"
            >
              <button
                onClick={closePopup}
                className="block text-sm w-full px-3 py-3 text-start hover:bg-gray-50 transition duration-300"
              >
                Account settings
              </button>
              <button
                onClick={closePopup}
                className="block text-sm w-full px-3 py-3 text-start hover:bg-gray-50 transition duration-300"
              >
                Support
              </button>
              <button
                onClick={closePopup}
                className="block text-sm w-full px-3 py-3 text-start hover:bg-gray-50 transition duration-300"
              >
                License
              </button>
              <button
                onClick={closePopup}
                className="block text-sm w-full px-3 py-3 text-start hover:bg-gray-50 transition duration-300"
              >
                Sign out
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Popup;
