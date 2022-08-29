import { Text } from "@nextui-org/react";
import { motion } from "framer-motion";

function ContentInfo() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ duration: 2, times: [0, 0.2, 1] }}
    >
      <Text
        className="text-center"
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Listen to
      </Text>
      <Text
        className="text-center"
        h1
        size={60}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}
        weight="bold"
      >
        your favorite
      </Text>
      <Text
        className="text-center"
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        Podcasts
      </Text>
    </motion.div>
  );
}

export default ContentInfo;
