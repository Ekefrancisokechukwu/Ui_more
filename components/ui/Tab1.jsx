import { BookOpen, Clapperboard, Github, Shapes } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const navs = [
  {
    label: "docs",
    icon: <BookOpen size={18} />,
  },
  {
    label: "examples",
    icon: <Shapes size={18} />,
  },
  {
    label: "showcase",
    icon: <Clapperboard size={18} />,
  },
  {
    label: "star",
    icon: <Github size={18} />,
  },
  {
    label: "follow",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        className="bi bi-twitter-x"
        viewBox="0 0 16 16"
      >
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
      </svg>
    ),
  },
];

const Tab1 = () => {
  const [selected, setSelected] = useState(navs[0]);

  return (
    <nav className="p-1 border rounded-xl flex items-center ">
      {navs.map((nav, i) => {
        return (
          <button
            key={i}
            onClick={() => setSelected(nav)}
            className="relative z-10 flex rounded-lg  items-center flex-col py-2  px-5"
          >
            {nav.icon}
            <span className="text-xs font-semibold capitalize">
              {nav.label}
            </span>
            {selected.label === nav.label && (
              <motion.div
                layoutId="pill-tab"
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-gray-100 absolute inset-0 -z-10 rounded-lg"
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};
export default Tab1;
