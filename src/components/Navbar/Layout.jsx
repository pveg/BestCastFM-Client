import { Content } from "./Content.jsx"
import { Box } from "./Box.jsx";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
      position: "relative",
      overflow: "visible scroll",
    }}
  >
    {children}
    <Content />
  </Box>
);