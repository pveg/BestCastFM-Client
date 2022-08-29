import React from "react";
import { motion } from "framer-motion";

function IconBG() {
  return (
    <div className="w-96 -mb-4">
      <motion.img
        initial={{ scale: 1 }}
        animate={{ y: [0, 80, 0] }}
        transition={{ duration: 2, times: [0, 0.2, 1] }}
        src="https://res.cloudinary.com/daknbj7xw/image/upload/v1661761515/BestCastFM/final_pffaks.png"
        alt=""
      />
    </div>
  );
}

export default IconBG;
