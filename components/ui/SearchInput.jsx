import { motion } from "framer-motion";
import { useState } from "react";

const SearchInput = () => {
  const [expand, setExpand] = useState(false);

  const variants = {
    collapse: {
      width: 0,
    },
    expand: {
      width: "25rem",
      marginLeft: ".6rem",
      transition: {
        type: "spring",
        duration: "0.3",
      },
    },
  };
  return (
    <div className="shadow-[0px_0.7px_5px_rgba(0,0,0,0.3)] px-3 flex  items-center rounded-3xl">
      <button onClick={() => setExpand(!expand)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
      <motion.input
        variants={variants}
        initial="collapse"
        animate={expand ? "expand" : "collapse"}
        transition={{ duration: "0.2" }}
        type="text"
        placeholder="Search..."
        className=" py-3   outline-none rounded-3xl"
      />
    </div>
  );
};
export default SearchInput;
