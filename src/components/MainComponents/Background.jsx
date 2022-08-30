import React from "react";
import IconBG from "./IconBG";
import ContentInfo from "../ContentInfo/ContentInfo";
import { Grid } from "@nextui-org/react";
import { Card1 } from "../ContentInfo/ContentCards";
import { Card2 } from "../ContentInfo/Card2";
import { Card3 } from "../ContentInfo/Card3";

function Background() {
  return (
    <>
    <div className="flex justify-center flex-col items-center">
      <IconBG />
      <ContentInfo />
    </div>
    <div className="mt-10">
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
    </>
  );
}

export default Background;
