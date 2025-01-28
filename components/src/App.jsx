import { motion } from "motion/react";
import { useState } from "react";

const members = [
  {
    name: "Leslie Alexander",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dries Vincent",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Courtney Henry",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Foster",
    img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const App = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleSelecteMember = (member) => {
    setSelectedMember(member);
    setIsSheetOpen(false);
  };

  return (
    <div className="h-screen grid place-items-center bg-white">
      <div>
        {!isSheetOpen ? (
          <motion.button
            onClick={() => setIsSheetOpen(true)}
            disabled={selectedMember}
            whileHover={"hover"}
            className="bg-stone-800 size-[3.3rem] overflow-hidden  grid place-items-center p-2 rounded-xl"
          >
            {/* <CloudSVG /> */}
            <div className="size-[2.4rem] relative rounded-full">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="object-cover w-full rounded-full h-full"
              />
              {/* <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3 }}
                className="absolute w-full rounded-full border-2 border-white h-full  left-0 top-0"
              /> */}
              <div className="absolute w-full rounded-full   h-full  left-0 top-0">
                {/* <ProgressLoading /> */}
              </div>
            </div>
          </motion.button>
        ) : (
          <motion.div
            initial={{ scale: 0, opacity: 0, filter: "blur(24px)" }}
            animate={{ scale: 1, opacity: 1, filter: "none" }}
            transition={{
              type: "spring",
              duration: 0.3,
              stiffness: 110,
              damping: 14,
            }}
            exit={{ scale: 0, opacity: 0, filter: "blur(24px)" }}
            className="w-[18rem] relative z-10 space-y-1  bg-gray-200 p-3.5  rounded-3xl"
          >
            {members.map((member, i) => {
              return (
                <motion.button
                  key={i}
                  onHoverStart={() => setHoveredIndex(i)}
                  whileHover={{ x: -28 }}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                    stiffness: 70,
                  }}
                  onClick={() => handleSelecteMember(member)}
                  className="w-full z-10 flex items-center px-2 py-1  relative  rounded-xl  gap-x-2 font-semibold text-sm"
                >
                  <div className="size-[2.5rem] rounded-full bg-gray-100 border">
                    <img
                      src={member.img}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {member.name}
                </motion.button>
              );
            })}
            {hoveredIndex !== null && (
              <motion.div
                layoutId="active-item"
                initial={{ opacity: 0, x: 0 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  top: "var(--hovered-top)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-[110%] absolute bg-white -z-10 shadow-md rounded-xl"
                style={{
                  "--hovered-top": `${hoveredIndex * 3.25 + 0.3}rem`,
                  height: "3.5rem",
                  left: "-5%",
                }}
              />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

const CloudSVG = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-cloud-upload"
      variants={"hover"}
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <motion.path
        d="M12 13v8"
        variants={{
          hover: {
            y: -2,
            scale: 1.1,
            transition: { yoyo: Number.POSITIVE_INFINITY, duration: 0.5 },
          },
        }}
      />
      <motion.path
        d="m8 17 4-4 4 4"
        variants={{
          hover: {
            y: -2,
            scale: 1.1,
            transition: { yoyo: Number.POSITIVE_INFINITY, duration: 0.5 },
          },
        }}
      />
    </motion.svg>
  );
};

const ProgressLoading = () => {
  const size = 40;
  const strokeWidth = 4;
  const percentage = 75;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-gray-200"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-blue-500"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
        {percentage}%
      </div>
    </div>
  );
};

export default App;
