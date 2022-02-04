import { useRouter } from "next/router";
import React from "react";
import { movies } from "../utils/movies";

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
    const router = useRouter();
  return (
    <nav className="relative">
      {/* looping thought array or list, need to give the elements a key for react to re-render */}
      <div className="flex space-x-10 overflow-x-scroll whitespace-nowrap px-10 text-2xl scrollbar-hide sm:space-x-20 sm:px-20">
        {Object.entries(movies).map(([key, { title, url }]) => (
          <h3
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="transform cursor-pointer transition duration-100 last:pr-24 hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h3>
        ))}
      </div>

      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Nav;
