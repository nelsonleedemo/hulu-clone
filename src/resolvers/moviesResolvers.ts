import axios from "axios";
import { movies } from "../utils/movies";

export const moviesResolvers = async (
  genre: string | string[] | undefined
) => {
  console.log(genre)
  console.log(typeof genre)

  if (typeof genre != "string")
    return {
      props: {
        error: "Genre is not a string",
      },
    };

  try {
    const moviesReq = await axios.get(
      `https://api.themoviedb.org/3${
        movies[genre]?.url || movies.fetchTrending.url
      }`
    );

    console.log('success get movie')

    return {
      props: {
        results: moviesReq.data,
      },
    };
  } catch (err) {
    console.log(err);
    console.log('fail get movie')


    return {
      props: {
        error: "Something went wrong",
      },
    };
  }
};
