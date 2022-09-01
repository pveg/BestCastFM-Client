import { Card, Grid, Text, Link, Loading, Button } from "@nextui-org/react";
import { useRef, useState, useContext } from "react";
import { HeartFavorite } from "../../components/HeartFavorite/HeartFavorite";
import { AuthContext } from "../../context/auth.context";
import { motion } from "framer-motion";
import axios from "axios";

export const CardResults = (props) => {
  const { results } = props;
  console.log(results);
  const { user } = useContext(AuthContext);

  const refFavorites = useRef(null);
  const [favorite, setFavorite] = useState(null);

  const handleFavorite = (e) => {
    setFavorite(e.currentTarget.id);
    console.log(e.currentTarget.id);

    const makeFavorite = async () => {
      try {
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/favorites/${user.username}/${favorite}`
        );
        console.log("successfully added to favorites!");
      } catch (error) {
        console.log(error.response.data.errorMessage);
      }
    };
    makeFavorite();
  };

  return (
    <>
      {!results && (
        <>
          <Loading type="points" />
        </>
      )}

      {results && (
        <div className="flex items-center flex-col mt-4">
          {results.map((elem) => {
            const toEpisodes = `/podcasts/${elem.collectionId}`;
            return (
              <div key={elem.id} className="mb-4 w-full flex justify-center">
                <Card css={{ p: "$6", mw: "400px" }}>
                  <motion.div
                    className="flex justify-end -mb-8"
                    whileTap={{ translateY: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      ref={refFavorites}
                      onPress={handleFavorite}
                      id={elem.collectionId}
                      className="flex justify-around"
                      auto
                      color="error"
                      icon={<HeartFavorite fill="currentColor" filled />}
                    />
                  </motion.div>
                  <Card.Header className="mt-4">
                    <img
                      className="w-32"
                      alt="nextui logo"
                      src={elem.artworkUrl600}
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                          {elem.collectionName}
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{ py: "$2" }}></Card.Body>
                  <Card.Footer className="flex justify-center">
                    <div className="flex flex-row justify-around align-center">
                      <Link
                        className="flex items-center flex-col justify-around"
                        icon
                        color="primary"
                        href={toEpisodes}
                      >
                        See Episodes
                      </Link>
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
