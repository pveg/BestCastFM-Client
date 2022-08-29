import { Text } from "@nextui-org/react";
import {Link} from "react-router-dom"

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
      <Link to="/">
      BestCastFM
      </Link>
    </Text>
  );
}
