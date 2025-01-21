import { useEffect } from "react";

export const useClickoutside = (ref, callback) => {
  useEffect(() => {
    const handleClose = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClose);
    document.addEventListener("touchstart", handleClose);

    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("touchstart", handleClose);
    };
  }, [callback, ref]);

  return null;
};
