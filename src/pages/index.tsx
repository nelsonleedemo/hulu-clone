import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Movies from "../components/Movies";
import Nav from "../components/Nav";
import { FieldError } from "../modals/FieldError";
import { MoviesResponse } from "../modals/MoviesResponse";
import { moviesResolvers } from "../resolvers/moviesResolvers";

interface HomeStaticProps {
  moviesRes: MoviesResponse & FieldError;
  page?: number;
}
// axiosLogger();

// const fetchMovies = async (
//   genre: string | string[] | undefined,
//   page: number
// ) => {
//   return await moviesResolvers(genre, page);
// };

export default function Home(props: HomeStaticProps) {
  // console.log(props);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Header />

      <Nav />

      {/* <Movies /> */}
      <Movies genre={router.query.genre} moviesRes={props.moviesRes} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre ? context.query.genre : "fetchTrending";

  return await moviesResolvers(genre, 1).then((moviesRes) => {
    console.log(moviesRes);
    return { props: { moviesRes } };
  });
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const genre = context.query.genre ? context.query.genre : "fetchTrending";
//   const page =
//     context.query.page && typeof context.query.page === "string"
//       ? parseInt(context.query.page)
//       : 1;

//   return await moviesResolvers(genre, page).then((moviesRes) => {
//     return { props: { moviesRes } };
//   });
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   let genre = context.params?.genre;
//   const page: number =
//     typeof context.params?.page === "string"
//       ? parseInt(context.params?.page)
//       : 1;
//   console.log(genre);
//   if (!genre) {
//     genre = "fetchTrending";
//   }

//   return await moviesResolvers(genre, page).then((moviesRes) => {
//     return { props: { moviesRes, page }, revalidate: 60 };
//   });
// };
