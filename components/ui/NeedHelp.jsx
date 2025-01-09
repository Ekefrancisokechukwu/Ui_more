import {
  ChevronLeft,
  ChevronRight,
  Headset,
  Mail,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const buttonVariant = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
};

const iconVariant = {
  initial: { rotate: 0 },
  hover: { rotate: [0, 15, -15, 0] },
};

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function NeedHelp() {
  const [report, setReport] = useState(false);
  const [activeView, setActiveView] = useState("options");

  const handleBackClick = () => {
    if (activeView === "ticket") {
      setActiveView("options");
    } else {
      setReport(false);
    }
  };

  return (
    <div className="h-screen grid place-items-center bg-white">
      {report ? (
        <>
          {activeView == "options" ? (
            <motion.div
              layoutId="help-panel"
              animate={report ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-[25rem] border rounded-2xl p-5"
            >
              <div className="flex items-center  justify-between  ">
                <motion.h1
                  layoutId="header-h1"
                  layout="preserve-aspect"
                  className="font-bold text-neutral-600"
                >
                  Need Help?
                </motion.h1>
                <motion.button
                  layoutId="action-icon"
                  onClick={() => setReport(false)}
                  className="size-[2rem] grid place-items-center rounded-full text-neutral-600 hover:bg-gray-100"
                >
                  <X size={18} />
                </motion.button>
              </div>
              <p className="mt-3 font-semibold text-sm text-neutral-600">
                We're here to help 24/7. Choose your preferred contact method
                below.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  {
                    icon: Mail,
                    title: "Raise a ticket",
                    description: "Get a reply within 24 hours",
                    action: () => setActiveView("ticket"),
                  },
                  {
                    icon: MessageCircle,
                    title: "Live Chat",
                    description: "2-3 minute wait time",
                  },
                  {
                    icon: Phone,
                    title: "Talk to us",
                    description: "Receive an instant callback",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={item.action}
                    role="button"
                    tabIndex={0}
                    className="flex border cursor-pointer bg-gray-50 px-3 py-2 rounded-xl items-center gap-x-3"
                  >
                    <div className="size-[2.5rem] border grid place-items-center text-gray-600 rounded-full bg-white">
                      {<item.icon size={18} />}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {item.title}
                      </p>
                      <span className="font-semibold text-sm text-gray-500 ">
                        {item.description}
                      </span>
                    </div>
                    <span className="ms-auto text-gray-600">
                      <ChevronRight size={16} />
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div
              layoutId="help-panel"
              layout="position"
              className="w-[25rem] border rounded-2xl p-5"
            >
              <motion.button
                layoutId="action-icon"
                onClick={handleBackClick}
                className="size-[2rem] grid place-items-center rounded-full text-neutral-600 bg-gray-50 hover:bg-gray-100"
              >
                <ChevronLeft size={18} />
              </motion.button>

              <motion.h1
                layoutId="header-h1"
                className="font-bold mt-3 text-neutral-600"
              >
                Raise a ticket
              </motion.h1>
              <p className="mt-3 font-semibold text-sm  text-neutral-600">
                We typically reply within 24 hours. Please provide as much
              </p>
              <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
                className="mt-5 space-y-4"
              >
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-y-1"
                >
                  <label
                    htmlFor="Email"
                    className="text-sm font-semibold text-neutral-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    className="px-1.5 py-1 rounded-lg w-full border outline-none"
                  />
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-y-1"
                >
                  <label
                    htmlFor="messsage"
                    className="text-sm font-semibold text-neutral-600"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="messsage"
                    className="w-full outline-none resize-none h-24 p-2 border rounded-lg "
                  ></textarea>
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  className="w-full px-2 py-2 rounded-full text-white bg-black/95 !mt-6"
                >
                  Submit
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </>
      ) : (
        <motion.button
          onClick={() => setReport(true)}
          animate={report ? { opacity: 0 } : { opacity: 1 }}
          layout="position"
          layoutId="help-panel"
          variants={buttonVariant}
          initial="initial"
          whileHover="hover"
          className="border py-3 px-4 rounded-full font-semibold text-sm text-neutral-600 flex items-center gap-2"
        >
          <motion.div layoutId="action-icon" variants={iconVariant}>
            <Headset size={18} />
          </motion.div>
          <motion.h1 layoutId="header-h1">Need Help</motion.h1>
        </motion.button>
      )}
    </div>
  );
}

export default NeedHelp;
