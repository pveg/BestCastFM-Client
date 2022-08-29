import { Text } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function NavImage() {
  return (
    <Text
      className="text-center"
      h1
      size={60}
      css={{
        textGradient: "45deg, $yellow600 -20%, $red600 100%",
      }}
      weight="bold"
    >
      BestCastFM
    </Text>
  );
}
