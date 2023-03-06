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
import { useEffect, useState } from "react";
import { fetchMoviesApi, fetchProducts } from "../app/actionsCreators";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import useAuth from "../app/hooks/useAuth";
import Modal from "../components/Modal";
import Plans from "./Plans";
import useSubscription from "../app/hooks/useSubscription";
import useList from "../app/hooks/useList";
import { Movie } from "../../typings";
import { DocumentData } from "firebase/firestore";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesApi());
    dispatch(fetchProducts());
  }, [dispatch]);

  const moviesState = useAppSelector((state: any) => state.movies);
  const planState = useAppSelector((state: any) => state.products);

  const { loading, user } = useAuth();
  const subscription = useSubscription(user);
  const list = useList(user?.uid);

  if (loading || subscription === null) return null;

  if (!subscription) return <Plans products={planState.allProducts} />;

  console.log(list);

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <main className="lg:space-y24 relative pl-4 pb-24 lg:pl-16">
        <Banner netflixOriginals={moviesState?.allMovies.netflixOriginals} />
        <section className="md:space-y-24">
          <Row
            title="Trending Now"
            movies={moviesState.allMovies.trendingNow}
          />
          <Row title="Top Rated" movies={moviesState.allMovies.topRated} />
          <Row
            title="Action Thrillers"
            movies={moviesState.allMovies.actionMovies}
          />
          {/* My List */}
          {list.length > 0 && <Row title="My List" movies={list} />}
          <Row title="Comedies" movies={moviesState.allMovies.comedyMovies} />
          <Row
            title="Scary Movies"
            movies={moviesState.allMovies.horrorMovies}
          />
          <Row
            title="Romance Movies"
            movies={moviesState.allMovies.romanceMovies}
          />
          <Row
            title="Documentaries"
            movies={moviesState.allMovies.documentaries}
          />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
