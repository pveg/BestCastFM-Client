import {
  Card,
  Grid,
  Text,
  Button,
  Row,
  Link,
  Loading,
} from "@nextui-org/react";

export const CardResults = (props) => {
  const { results } = props;

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
              <div className="mb-4">
                <Card css={{ p: "$6", mw: "400px" }}>
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
                    <div>
                      <Link
                        className="flex items-center flex-col justify-around"
                        icon
                        color="primary"
                        target="_blank"
                        href={elem._id}
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
