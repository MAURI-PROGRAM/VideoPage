import { useState, useEffect } from "react";
import videojson from "../../initialState.json";

const useInitialState = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("API")
      .then((response) => response.json())
      .then((data) => {
        return;
      });
    setVideos(videojson?.initalState);
  }, []);
  return videos;
};

export default useInitialState;
