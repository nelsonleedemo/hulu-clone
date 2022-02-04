import React from "react";
import { IMovie } from "../models/IMovie";
import { ITv } from "../models/ITv";
import Thumbnail from "./Thumbnail";

interface MoviesProps {
  data: Array<IMovie | ITv>;
}

const Movies: React.FC<MoviesProps> = ({ data }) => {
  //   console.log(data);
  return (
    <div className="my-10 flex-wrap justify-center px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      {data?.map((movie: any) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
