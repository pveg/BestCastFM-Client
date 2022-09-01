import { Card, Grid, Text, Button } from "@nextui-org/react";
import { HeartFavorite } from "../../components/HeartFavorite/HeartFavorite";
import { useState } from "react";
import { motion } from "framer-motion";

function Episodes(props) {
  const [favoriteEpisode, setFavoriteEpisode] = useState(null);
  const { results } = props;
  console.log(results);

  const handleEpisode = (e) => {
    setFavoriteEpisode(e.target.id);
    console.log(favoriteEpisode);
  };

  return (
    <>
      <div className="flex items-center flex-col mt-4">
        <Text
          className="text-center"
          h3
          css={{
            textGradient: "45deg, $blue600 -20%, $yellow600 100%",
          }}
          weight="bold"
        >
          {results.title}
        </Text>
      </div>
      {results.episodes.map((elem, i) => {
        return (
          <div key={i} className="mb-4 flex justify-center items-center">
            <Card css={{ p: "$6", mw: "400px" }}>
              <motion.div
                className="flex justify-end -mb-8"
                whileTap={{ translateY: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={handleEpisode}
                  id={i}
                  className="flex justify-around"
                  auto
                  color="error"
                  icon={<HeartFavorite fill="currentColor" filled />}
                />
              </motion.div>
              <Card.Header className="mt-4 flex items-center">
                {elem.image && (
                  <img className="w-32" alt="nextui logo" src={elem.image} />
                )}
                <Grid.Container css={{ p: "$8", pr: "$8", pl: "$6" }}>
                  <Grid xs={12}>
                    <div>
                      <Text
                        className="text-center"
                        h4
                        css={{ lineHeight: "$xs" }}
                      >
                        {elem.title}
                      </Text>
                    </div>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Body css={{ py: "$2" }}></Card.Body>
              <Card.Footer className="flex items-center justify-center">
                <div>
                  <audio controls>
                    <source src={elem.enclosure.url} />
                  </audio>
                </div>
              </Card.Footer>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default Episodes;
