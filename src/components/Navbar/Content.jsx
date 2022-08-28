import { Text, Spacer } from "@nextui-org/react"
import { Box } from "./Box.jsx"
import Nav from "./Nav.jsx";
import NavImage from "./NavImage.jsx";

export const Content = () => (
  <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
    <NavImage/>
    
  </Box>
);