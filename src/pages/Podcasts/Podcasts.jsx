import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import { CardResults } from "./CardResults";
import {HeartFavorite} from '../../components/HeartFavorite/HeartFavorite'

function SearchPodcasts() {
  const [podcasts, setPodcasts] = useState('');
  const [podcastResult, setPodcastResult] = useState(null)

  const handlePodcast = (e) => setPodcasts(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const getPodcasts = async () => {
      try {
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/podcasts`, {searchValue: podcasts}
          );
          console.log(response.data)
          setPodcastResult(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      setPodcasts('')
      getPodcasts();
    }
  return (
    <>
    <div className="flex justify-center items-center">
      <form className="flex justify-center items-center flex-col content-around" onSubmit={handleSubmit}>
      <label htmlFor="podcasts"/>
      <Input className="self-center" onChange={handlePodcast} placeholder="Search for a Podcast"/>
      <Button className="mt-4" flat color="primary" auto type="submit">Search</Button>
      </form>
    </div>

    {podcastResult && (
      <CardResults results={podcastResult.results} />
    )}
    </>
  );
}

export default SearchPodcasts;
