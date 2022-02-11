// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { FieldError } from "../../modals/FieldError";
import { MoviesResponse } from "../../modals/MoviesResponse";
import { moviesDictionary } from "../../utils/moviesDictionary";
import { toErrorMap } from "../../utils/toErrorMap";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MoviesResponse | FieldError>
) {
  const genre = req.query.genre;
  const page = req.query.page;

  if (typeof genre != "string") {
    const errorMap = toErrorMap([{ field: "genre", message: "not string" }]);
    return {
      error: errorMap,
    };
  }

  const moviesRes = await axios
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
    .then((result) => {
      console.log("success get movie");
      res.status(200).json(result.data);
      // return res.data;
    })
    .catch((err) => {
      console.log("fail get movie");
      // console.log(err);

      res.status(500).json({
        field: err.name,
        message: err.message,
      });
    });

  // res.status(200).json(moviesRes);
}
