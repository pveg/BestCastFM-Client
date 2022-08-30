import {
  Card,
  Grid,
  Text,
  Button,
  Row,
  Link,
  Loading,
} from "@nextui-org/react";
import { useRef, useState } from "react";
import PodcastDetails from "./PodcastDetails";
import { HeartFavorite } from "../../components/HeartFavorite/HeartFavorite";

export const CardResults = (props) => {
  const { results } = props;

  const ref = useRef(null);
  const [podcastId, setPodcastId] = useState(null);

  const handleClick = (e) => {
    setPodcastId(e.currentTarget.id);
    console.log(podcastId);
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
                <div className='flex justify-end -mb-8'>
                <Button className='flex justify-around'
                        auto
                        color="error"
                        icon={<HeartFavorite fill="currentColor" filled />}
                      />
                </div>
                  <Card.Header className="mt-4">
                    <img className="w-32" alt="nextui logo" src={elem.image} />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                          {elem.title_original}
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{ py: "$2" }}></Card.Body>
                  <Card.Footer>
                    <div className='flex flex-row justify-around align-center'>
                      <Link
                        ref={ref}
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
      <PodcastDetails id={podcastId} />
    </>
  );
};
