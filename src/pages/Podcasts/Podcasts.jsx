import axios from "axios";
import { useState } from "react";
import { Input, Button, Loading } from "@nextui-org/react";
import { CardResults } from "./CardResults";

function SearchPodcasts() {
  const [podcasts, setPodcasts] = useState("");
  const [podcastResult, setPodcastResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handlePodcast = (e) => setPodcasts(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const getPodcasts = async () => {
      try {
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/podcasts`,
          { searchValue: podcasts }
        );
        console.log(response.data);
        setPodcastResult(response.data);
        setPodcasts("");
      } catch (error) {
        console.log(error);
      }
    };
    getPodcasts();
    setIsLoading(false);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <form
          className="flex justify-center items-center flex-col content-around"
          onSubmit={handleSubmit}
        >
          <label htmlFor="podcasts" />
          <Input
            className="text-center self-center"
            onChange={handlePodcast}
            placeholder="Search for a Podcast"
          />
          <Button className="mt-4" flat color="primary" auto type="submit">
            Search
          </Button>
        </form>
      </div>

      {isLoading && (
        <div className="flex items-center justify-around mt-8">
          <Loading className="" type="points" />
        </div>
      )}

      {podcastResult && <CardResults results={podcastResult.results} />}
    </>
  );
}

export default SearchPodcasts;
