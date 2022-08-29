import { Card, Col, Text } from "@nextui-org/react";
import { useInView } from "framer-motion";
import { useRef } from "react";


export const Card3 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

return (
  <Card ref={ref}>
    <Card.Header  style={{
          transform: isInView ? "none" : "translateX(+200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
         
        </Text>
        <Text h2 className="text-center" css={{
          textGradient: "45deg, $blue600 -20%, $yellow600 50%",
        }}>
          The best podcasts
        </Text>
      </Col>
    </Card.Header>
    <Card.Image  style={{
          transform: isInView ? "none" : "translateX(+100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      src="https://res.cloudinary.com/daknbj7xw/image/upload/v1661803755/BestCastFM/Podcast-cover-art_imflht.webp"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
);
}