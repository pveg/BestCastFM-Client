import { Card, Grid, Text, Button } from "@nextui-org/react";
import { HeartFavorite } from "../../components/HeartFavorite/HeartFavorite";

function Episodes(props) {
  const { results } = props;
  console.log(results);

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
          {results.author}
        </Text>
      </div>
      {results.episodes.map((elem, i) => {
        return (
          <div key={i} className="mb-4 flex justify-center items-center">
            <Card css={{ p: "$6", mw: "400px" }}>
              <div className="flex justify-end -mb-4">
                <Button
                  id={elem.collectionId}
                  className="flex justify-around"
                  auto
                  color="error"
                  icon={<HeartFavorite fill="currentColor" filled />}
                />
              </div>
              <Card.Header className="mt-4 flex items-center">
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
