import Link from "next/link"

function MovieCard({ movie }) {
  return (
    <div className="bg-inherit flex flex-col gap-2 justify-center items-start">
      <div className="movie-cover hover:shadow-[0px_0px_22px_#93B1A6] transition-all duration-300 rounded-lg">
        <Link href={`/movies/${movie.id}`}>
          {movie.poster_path && (
            <img
              className="rounded-lg"
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              alt="movie cover image"
            />
          )}
        </Link>
      </div>
      <section className="flex flex-col gap-[2px] place-content-between w-[100%]">
        <Link href={`/movies/${movie.id}`}>
          <h2 className="movie-title font-bold text-xl text-[#93b1a6] max-w-[220px] h-auto">
            {movie.title}
          </h2>
          <figcaption className="release-date italic text-gray-500  w-auto">
            {movie[`release_date`].slice(0, 7)}
          </figcaption>
        </Link>
      </section>
    </div>
  )
}

export default MovieCard
