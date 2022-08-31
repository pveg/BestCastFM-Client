import { Card, Grid, Text, Link, Loading, Button } from "@nextui-org/react";
import { useRef, useState, useContext } from "react";
import PodcastDetails from "./PodcastDetails";
import { HeartFavorite } from "../../components/HeartFavorite/HeartFavorite";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";

export const CardResults = (props) => {
  const {results}  = props;
  console.log(results)
  const { user } = useContext(AuthContext);

  const refEpisodes = useRef(null);
  const refFavorites = useRef(null)
  const [podcastId, setPodcastId] = useState(null);
  const [favorite, setFavorite] = useState(null);

  const handleClick = (e) => {
    setPodcastId(e.currentTarget.id);
  };

  const handleFavorite = (e) => {
    setFavorite(e.currentTarget.id);
    console.log(favorite)

    const makeFavorite = async () => {
      try {
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/favorites/${user.username}/${favorite}`
        );
        console.log("successfully added to favorites!")
      } catch (error) {
        console.log(error.response.data.errorMessage)
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
            return (
              <div key={elem.id} className="mb-4">
                <Card css={{ p: "$6", mw: "400px" }}>
                  <div className="flex justify-end -mb-8">
                    <Button
                      ref={refFavorites}
                      onPress={handleFavorite}
                      id={elem.id}
                      className="flex justify-around"
                      auto
                      color="error"
                      icon={<HeartFavorite fill="currentColor" filled />}
                    />
                  </div>
                  <Card.Header className="mt-4">
                    <img className="w-32" alt="nextui logo" src={elem.artworkUrl600} />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                          {elem.collectionName}
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{ py: "$2" }}></Card.Body>
                  <Card.Footer>
                    <div className="flex flex-row justify-around align-center">
                      <Link
                        ref={refEpisodes}
                        id={elem.id}
                        onClick={handleClick}
                        className="flex items-center flex-col justify-around"
                        icon
                        color="primary"
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
{/*       <PodcastDetails id={podcastId} /> */}
    </>
  );
};
