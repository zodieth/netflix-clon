import { Movie } from "../../typings";
import { useState } from "react";
import Modal from "./Modal";

interface Props {
  // movie: Movie | DocumentData[]
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(true);

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={handleClick}
    >
      {showModal && <Modal pelicula={movie} />}
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        // fill
        alt="thumbnail"
      />
    </div>
  );
}

export default Thumbnail;
