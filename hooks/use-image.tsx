import { useState } from "react";
import getRandomImage from "../utils/get-random-image";

// get random image
// along with loading state - gives a user feedback something is happening
export default function useImage(): [boolean, any] {
  const [isLoading, setLoading] = useState(false);

  // size is either square or landscape, default to landsacpe
  const fetchNewImage = async (size: string) => {
    setLoading(true);
    const result = await fetch(getRandomImage(size));

    if (result.status === 200) {
      setLoading(false);
      return result.url;
    } else {
      setLoading(false);
    }
  };

  return [isLoading, fetchNewImage];
}
