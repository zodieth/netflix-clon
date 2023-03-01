/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import { Movie } from "../../typings";
import requests from "../utils/requests";
import { useEffect, useState } from "react";
import axios from "axios";
import { getServerSideProps, getAll } from "../controllers/getMovies";
import { fetchMoviesApi } from "../app/actionsCreators";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import useAuth from "../app/hooks/useAuth";
import Modal from "../components/Modal";
import Plans from "./Plans";

export default function HomePage() {
  const [showModal, setShowModal] = useState(true);
  const subscription = false;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesApi());
  }, []);

  const moviesState = useAppSelector((state: any) => state.movies);

  const { loading } = useAuth();

  if (loading || subscription === null) return null;

  if (!subscription) return <Plans />;

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <main className="lg:space-y24 relative pl-4 pb-24 lg:pl-16">
        <Banner netflixOriginals={moviesState.allMovies} />
        <section className="md:space-y-24">
          <Row
            title="Trending Now"
            movies={moviesState.allMovies[0]?.trendingNow}
          />
          <Row title="Top Rated" movies={moviesState.allMovies[0]?.topRated} />
          <Row
            title="Action Thrillers"
            movies={moviesState.allMovies[0]?.actionMovies}
          />
          {/* My List */}
          {/* {list.length > 0 && <Row title='My List' movies={list} />} */}
          <Row
            title="Comedies"
            movies={moviesState.allMovies[0]?.comedyMovies}
          />
          <Row
            title="Scary Movies"
            movies={moviesState.allMovies[0]?.horrorMovies}
          />
          <Row
            title="Romance Movies"
            movies={moviesState.allMovies[0]?.romanceMovies}
          />
          <Row
            title="Documentaries"
            movies={moviesState.allMovies[0]?.documentaries}
          />
        </section>
      </main>
      {/* {showModal && <Modal />} */}
    </div>
  );
}
