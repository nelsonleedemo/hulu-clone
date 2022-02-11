import axios, { AxiosError } from "axios";
import { MoviesResponse } from "../modals/MoviesResponse";
import { moviesDictionary } from "../utils/moviesDictionary";
import { toErrorMap } from "../utils/toErrorMap";

export const moviesApiResolvers = async (
  genre: string | string[] | undefined,
  page: number
) => {
  return await axios
    .get<MoviesResponse>(`/api/movies`, {
      params: {
        genre: genre,
        page: page,
      },
    })
    .then((res) => {
      console.log("success get movie");
      return res;
    })
    .catch((err) => {
      // console.log(err);
      console.log("fail get movie");
      // console.log(err);

      return err;
    });
};

export const moviesResolvers = async (
  genre: string | string[] | undefined,
  page: number
) => {
  if (typeof genre != "string") {
    const errorMap = toErrorMap([{ field: "genre", message: "not string" }]);
    return {
      error: errorMap,
    };
  }

  console.log({ page: page });

  return await axios
    .get(
      `https://api.themoviedb.org/3${
        moviesDictionary[genre]?.url || moviesDictionary.fetchTrending.url
      }`,
      {
        params: {
          page: page,
        },
      }
    )
    .then((res) => {
      console.log("success get movie");
      return res.data;
    })
    .catch((err: Error | AxiosError) => {
      // console.log(err);
      console.log("fail get movie");
      // console.log(err);

      return {
        error: toErrorMap([{ field: err.name, message: err.message }]),
      };
    });
  // .finally(() => {
  //   console.log(request);
  // });
};
