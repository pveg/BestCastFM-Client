export const CardResults = (props) => {
  const { results } = props;
  console.log(results);

  return (
    <>
      <div>
        {results.map((elem) => {
          return (
            <>
              <h1>{elem.title_original}</h1>
            </>
          );
        })}
      </div>
    </>
  );
};
