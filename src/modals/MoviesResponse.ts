import { IMovie } from "./IMovie";
import { ITv } from "./ITv";

export interface MoviesResponse {
  page: number;
  results: Array<IMovie & ITv>;
  total_pages: number;
  total_results: number;
}
