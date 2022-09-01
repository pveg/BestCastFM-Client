import React from "react";
import { motion } from "framer-motion";
import { Grid, Text } from "@nextui-org/react";
import { Card1 } from "../../components/ContentInfo/ContentCards";
import { Card2 } from "../../components/ContentInfo/Card2";
import { Card3 } from "../../components/ContentInfo/Card3";

function HowItWorks() {
  return (
<div>
    <div className="flex items-center flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, times: [0, 0.2, 1] }}
        className="flex items-center flex-col w-96"
      >
        <Text
          h3
          css={{
            textGradient: "45deg, $blue600 -20%, $yellow600 100%",
          }}
          className="text-center"
        >
          Create an Account and start searching for you favorite podcasts
        </Text>
          <Text
            h5
            css={{
              textGradient: "45deg, $purple600 -20%, $red600 100%",
            }} className="text-center mt-4"
          >
            Click on See Episodes and choose the episode to listen{" "}
          </Text>
      </motion.div>
    </div>
    <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={4}>
          <Card1 />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card2 />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card3 />
        </Grid>
      </Grid.Container>
</div>
  )
}

export default HowItWorks