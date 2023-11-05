import { AiOutlineCalendar } from "react-icons/ai";
import { GiPencil } from "react-icons/gi";
import { motion } from "framer-motion";
const Tips = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/bg-tips.jpg)",
      }}
    >
      <div className="max-w-screen-xl mx-auto mb-12">
        <h1 className="text-5xl text-center">
          TRAVEL ESSENTIALS <span className="text-grn">TIPS</span>
        </h1>
        <div className="flex flex-col justify-center md:flex-row gap-10 py-20 p-4 md:px-5 lg:px-10">
          <div className="md:w-1/2">
            <motion.img
            whileHover={{
                rotate:-5,
                transition: { duration: 0.5 },
              }} src="/blog.jpg" alt="" />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="flex gap-6 mb-5">
              <motion.p
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                {" "}
                <AiOutlineCalendar className="inline-block"></AiOutlineCalendar>{" "}
                October 8, 2019
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                {" "}
                <GiPencil className="inline-block"></GiPencil> by Alisa Michaels
              </motion.p>
            </div>
            <h1 className="text-2xl mb-5">
              MOVING TROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut
              enim. ad minim veniam......{" "}
            </p>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="btn bg-grn text-white w-fit mt-5 hover:bg-grn"
            >
              Read More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
