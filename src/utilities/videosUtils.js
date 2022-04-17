import axios from "axios";
import { videos } from "./apiUrls";

const setVideos = async () => {
  try {
    const { data } = await axios.get(videos);
    return data.videos;
  } catch (error) {
    console.error(error);
  }
};

export { setVideos };
