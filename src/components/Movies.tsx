import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { MoviesResponse } from "../modals/MoviesResponse";
import { moviesApiResolvers } from "../resolvers/moviesResolvers";
import Thumbnail from "./Thumbnail";

interface MoviesProps {
  moviesRes: MoviesResponse;
  genre: string | string[] | undefined;
}

const Movies: React.FC<MoviesProps> = (props: MoviesProps) => {
  // console.log(props);
  const [movies, setMovies] = useState(props.moviesRes?.results);
  const [page, setPage] = useState(props.moviesRes?.page);
  const [genre, setGenre] = useState(props.genre);
  useEffect(() => {
    setMovies(props.moviesRes?.results);
    setPage(props.moviesRes?.page);
    setGenre(props.genre);
  }, [props.genre]);

  !genre ? setGenre("fetchTrending") : null;

  const fetchMovies = async () => {
    // console.log("fetching");
    await moviesApiResolvers(genre, page + 1)
      .then((res) => {
        if (Array.isArray(res.data.results)) {
          // console.log({
          //   movies: movies,
          //   newMovies: res.data.results,
          // });
          setMovies(movies.concat(res.data.results));
          setPage(page + 1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchMovies}
      hasMore={props.moviesRes?.page < props.moviesRes?.total_pages}
      loader={<h3 className="w-100 text-center">Loading...</h3>}
      endMessage={<h4>Nothing more to show</h4>}
    >
      <div className="my-10 flex-wrap justify-center px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
        {movies.map((movie: any) => (
          <Thumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Movies;
