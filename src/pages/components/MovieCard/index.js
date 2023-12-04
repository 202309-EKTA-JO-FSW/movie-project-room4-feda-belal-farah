import Link from "next/link"

function MovieCard({ movie }) {
  return (
    <div className="bg-inherit flex flex-col gap-2 justify-center items-start">
      <div className="movie-cover hover:shadow-[0px_0px_22px_green] transition-all duration-300 rounded-lg">
        <Link href="#">
          <img
            className="rounded-lg"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            alt="movie cover image"
          />
        </Link>
      </div>
      <section className="flex flex-col gap-[2px] place-content-between w-[100%]">
        <Link href={`#`}>
          <h2 className="movie-title font-bold text-xl max-w-[220px] h-auto">
            {movie.title}
          </h2>
          <figcaption className="release-date italic text-gray-500  w-min">
            {movie[`release_date`].slice(0, 4)}
          </figcaption>
        </Link>
      </section>
    </div>
  )
}

export default MovieCard
