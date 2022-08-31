import { Loading } from "@nextui-org/react";
import axios from "axios";
import Episodes from "./Episodes";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PodcastDetails(props) {
  const [episodes, setEpisodes] = useState(null);
  const { podcastId } = useParams();

  const getEpisodes = async () => {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/podcasts/${podcastId}`
      );
      console.log(response.data);
      setEpisodes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <>
      {!episodes && (
        <div className="flex items-center justify-around mt-8">
          <Loading className="" type="points" />
        </div>
      )}

      {episodes && <Episodes results={episodes} />}
    </>
  );
}

export default PodcastDetails;
