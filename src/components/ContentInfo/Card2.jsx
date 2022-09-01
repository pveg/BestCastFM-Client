import { Card, Col, Text } from "@nextui-org/react";
import { useInView } from "framer-motion";
import { useRef } from "react";


export const Card2 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

return (
  <Card ref={ref}>
    <Card.Header  style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
         
        </Text>
        <div className="backdrop-blur-sm rounded-full h-20 flex items-center justify-center">
        <Text size={30} className="text-center font-bold drop-shadow-xl shadow-black" css={{
          textGradient: "45deg, $purple200 -20%, $red600 65%",
        }}>
        YOU LOVE
        </Text>
        </div>
      </Col>
    </Card.Header>
    <Card.Image  style={{
          transform: isInView ? "none" : "translateY(+100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      src="https://res.cloudinary.com/daknbj7xw/image/upload/v1661802458/BestCastFM/best-podasts-2021-1614985460_dcajlp.jpg"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
);
}