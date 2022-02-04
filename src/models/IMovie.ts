export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// adult: false
// backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
// genre_ids: (3) [28, 12, 878]
// id: 634649
// media_type: "movie"
// original_language: "en"
// original_title: "Spider-Man: No Way Home"
// overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
// popularity: 16819.659
// poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
// release_date: "2021-12-15"
// title: "Spider-Man: No Way Home"
// video: false
// vote_average: 8.4
// vote_count: 6856
