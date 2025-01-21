import { HandHeart, Heart, PartyPopper, Smile, ThumbsUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const reactions = [
  { reaction: "like", icon: <ThumbsUp size={20} color="#3B82F6" /> },
  { reaction: "celebrate", icon: <PartyPopper size={20} color="#14B8A6" /> },
  { reaction: "support", icon: <HandHeart size={20} color="#A3E635" /> },
  { reaction: "love", icon: <Heart size={20} color="#EF4444" /> },
  { reaction: "smile", icon: <Smile size={20} color="#EC4899" /> },
];

const Reaction = () => {
  const [open, setOpen] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);

  return (
    <div className="h-screen grid place-items-center bg-white">
      <motion.div
        onHoverStart={() => setOpen(true)}
        onHoverEnd={() => setOpen(false)}
        className="relative "
      >
        {open && (
          <motion.div
            onHoverStart={() => setOpen(true)}
            onHoverEnd={() => setOpen(false)}
            className="min-w-[5rem] border  z-30 flex items-center gap-x-2 absolute p-2.5 shadow-lg rounded-2xl left-0 -top-[4rem]"
          >
            {reactions.map((react, i) => {
              return (
                <motion.button
                  key={i}
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{
                    translateY: 0,
                    opacity: 1,
                    transition: { delay: `0.${i}` },
                  }}
                  transition={{ type: "spring" }}
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 1.1 }}
                  className="p-2  origin-bottom   bg-gray-100 rounded-lg"
                  onClick={() => setSelectedReaction(react)}
                >
                  {react.icon}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        <motion.button
          onClick={() => setSelectedReaction(null)}
          className="flex text-sm  w-[7rem] justify-center items-center rounded-md gap-x-3 font-semibold  px-4 py-1.5 hover:bg-gray-100 transition-all duration-500"
        >
          {selectedReaction ? (
            <motion.div
              key={selectedReaction.reaction}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.5 }}
              className="flex items-center gap-x-3"
            >
              {selectedReaction.icon} {selectedReaction.reaction}
            </motion.div>
          ) : (
            <>
              <ThumbsUp size={18} /> Like
            </>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};
export default Reaction;
