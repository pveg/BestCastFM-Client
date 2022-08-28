import { Box } from "./Box.jsx";
import NavImage from "./NavImage.jsx";

export const Content = () => (
  <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
    <NavImage />

  </Box>
);
