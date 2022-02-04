import React from "react";
import { IMovie } from "../models/IMovie";
import Image from "next/image";
import { TMDB_IMAGE_BASE_URL } from "../constants";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { ITv } from "../models/ITv";

interface ThumbnailProps {
  movie: IMovie & ITv;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ movie }) => {
  //   console.log(movie);
  //   console.log(TMDB_IMAGE_BASE_URL)
  return (
    <div className="group transform cursor-pointer p-2 transition duration-200 ease-in hover:z-50 sm:hover:scale-105">
      <Image
        layout="responsive"
        placeholder="blur"
        blurDataURL="/assets/images/image-placeholder.png"
        alt="Movie cover photos"
        src={`${TMDB_IMAGE_BASE_URL}${
          movie.backdrop_path || movie.poster_path
        }`}
        height={1080}
        width={1920}
      />

      <div className="p-2">
        <p className="max-w-md truncate">{movie.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.original_title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.media_type && `${movie.media_type} ▪`}{" "}
          {movie.release_date || movie.first_air_date} ▪{" "}
          <ThumbUpIcon className="mx-2 h-5" /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
