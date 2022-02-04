import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Movies from "../components/Movies";
import Nav from "../components/Nav";
import { moviesResolvers } from "../resolvers/moviesResolvers";
import { movies } from "../utils/movies";

interface HomeServerSideProps {
  // genre: string;
  // req: Request;
  // res: Response;
  results: any;
}

export default function Home(props: HomeServerSideProps) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      {/* <h1>Lets build Hulu 2.0</h1> */}

      <Header />

      <Nav />

      <Movies data={props.results?.results} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre;
  if (!genre) {
    return await moviesResolvers("fetchTrending");
  }

  return await moviesResolvers(genre);
};
