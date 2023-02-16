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
import { useEffect } from "react";
import axios from "axios";
import { getServerSideProps, getAll } from "../controllers/getMovies";
import { fetchMoviesApi } from "../app/actionsCreators";

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

export default function HomePage(props: any) {
  useEffect(() => {
    fetchMoviesApi();
  }, []);

  // console.log(props);
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <main className="lg:space-y24 relative pl-4 pb-24 lg:pl-16">
        {/* <Banner netflixOriginals={netflixOriginals} /> */}
        {/* <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} /> */}
        {/* My List */}
        {/* {list.length > 0 && <Row title='My List' movies={list} />} */}
        {/* <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section> */}
      </main>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const [
//     netflixOriginals,
//     trendingNow,
//     topRated,
//     actionMovies,
//     comedyMovies,
//     horrorMovies,
//     romanceMovies,
//     documentaries,
//   ] = await Promise.all([
//     fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
//     fetch(requests.fetchTrending).then((res) => res.json()),
//     fetch(requests.fetchTopRated).then((res) => res.json()),
//     fetch(requests.fetchActionMovies).then((res) => res.json()),
//     fetch(requests.fetchComedyMovies).then((res) => res.json()),
//     fetch(requests.fetchHorrorMovies).then((res) => res.json()),
//     fetch(requests.fetchRomanceMovies).then((res) => res.json()),
//     fetch(requests.fetchDocumentaries).then((res) => res.json()),
//   ]);

//   return {
//     props: {
//       netflixOriginals: netflixOriginals.results,
//       trendingNow: trendingNow.results,
//       topRated: topRated.results,
//       actionMovies: actionMovies.results,
//       comedyMovies: comedyMovies.results,
//       horrorMovies: horrorMovies.results,
//       romanceMovies: romanceMovies.results,
//       documentaries: documentaries.results,
//     },
//   };
// };

// -------------------------------------------------------------------------------

// export default function HomePage() {
//   return (
//     <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
//       <Header />
//       <main className="lg:space-y24 relative pl-4 pb-24 lg:pl-16">
//         {/* <Banner netflixOriginals={netflixOriginals} /> */}
//         {/* <section className="md:space-y-24">
//           <Row title="Trending Now" movies={trendingNow} />
//           <Row title="Top Rated" movies={topRated} />
//           <Row title="Action Thrillers" movies={actionMovies} /> */}
//         {/* My List */}
//         {/* {list.length > 0 && <Row title='My List' movies={list} />} */}
//         {/* <Row title="Comedies" movies={comedyMovies} />
//           <Row title="Scary Movies" movies={horrorMovies} />
//           <Row title="Romance Movies" movies={romanceMovies} />
//           <Row title="Documentaries" movies={documentaries} />
//         </section> */}
//       </main>
//     </div>
//   );
// }
