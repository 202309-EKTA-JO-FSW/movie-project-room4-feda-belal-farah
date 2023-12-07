import Footer from "@/components/Footer/Footer"
import MovieCard from "@/components/MovieCard"
import Link from "next/link"

function Movies({ movieData, trailerData, credits, relatedMovies }) {
  const youtubeUrl = trailerData[0].key
  function directorFinder() {
    const directorsArray = credits.crew.reduce((accumulator, current) => {
      if (current.job === `Director`) {
        accumulator.push(current.name)
      }
      return accumulator
    }, [])
    return directorsArray.map((name, ind) =>
      ind < directorsArray.length - 1 ? `${name}, ` : `${name}.`,
    )
  }

  function productionCompanies() {
    return movieData.production_companies.map((comp, ind) => {
      if (ind < movieData.production_companies.length - 1)
        return (
          <span className="flex items-center gap-1">
            {comp.name}{" "}
            {comp.logo_path && (
              <img
                src={`https://image.tmdb.org/t/p/original${comp.logo_path}`}
                alt={comp.name}
                className="h-8 bg-[#93b1a6]"
              />
            )}
            ,{` `}
          </span>
        )
      else
        return (
          <span className="flex items-center gap-1">
            {comp.name}{" "}
            {comp.logo_path && (
              <img
                src={`https://image.tmdb.org/t/p/original${comp.logo_path}`}
                alt={comp.name}
                className="h-8 bg-[#93b1a6]"
              />
            )}
            .
          </span>
        )
    })
  }

  function languages(lang, ind) {
    if (ind < movieData.spoken_languages.length - 1)
      return `${lang.english_name}, `
    else return `${lang.english_name}.`
  }

  function mainActors() {
    return (
      <ul className="grid grid-cols-3 gap-4 my-10">
        {credits.cast.slice(0, 6).map((actor) => (
          <Link href={`/actors/${actor.id}`}>
            <li className="flex flex-col items-center gap-2 mb-[60px] ">
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                  alt={`${actor.name} picture`}
                  className="hover:shadow-[0px_0px_22px_#93B1A6] transition-all duration-300 rounded-lg w-[198px]"
                />
              )}
              <p className="movie-title font-bold text-xl text-[#93b1a6] max-w-[220px] h-auto">
                {actor.name}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    )
  }

  function relatedMoviesList() {
    return relatedMovies.slice(0, 6).map((movie) => (
      <li className="scale-90">
        <MovieCard movie={movie} />
      </li>
    ))
  }

  return (
    <main className="grid grid-cols-6 mx-[10%]">
      <header className="col-span-6 mt-2">
        <h1 className="my-12 ml-10 text-5xl font-bold text-[#93b1a6]">
          {movieData.title}
        </h1>
      </header>
      <aside className="col-span-2 ">
        <img
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
          alt="Movie poster"
          className="w-3/4 rounded-xl border-[3px] border-[#93b1a6] shadow-[0_0_20px_-5px] shadow-[#93b1a6]"
        />
      </aside>
      <section className="info-section col-span-4 mt-24">
        <ul>
          <li className="py-1 text-[#93b1a6] font-semibold text-lg ">
            Release Date:{" "}
            <span className="text-md font-normal">
              {movieData.release_date}
            </span>
          </li>
          <li className="py-1 text-[#93b1a6] font-semibold text-lg ">
            Runtime:{" "}
            <span className="text-md font-normal italic">
              {Math.floor(movieData.runtime / 60)}Hours {movieData.runtime % 60}
              Minutes
            </span>
          </li>
          <li className="py-1 text-[#93b1a6] font-semibold text-lg ">
            Language:{" "}
            <span className="text-md font-normal">
              {movieData.spoken_languages.map(languages)}
            </span>
          </li>
          <li className="py-1 text-[#93b1a6] font-semibold text-lg ">
            Director:{" "}
            <span className="text-md font-normal">{directorFinder()}</span>
          </li>
          <li className="py-1 text-[#93b1a6] font-semibold text-lg procuction-company flex items-center flex-wrap gap-2">
            Production Companies: {productionCompanies()}
          </li>
          <article className="py-1 text-[#93b1a6] font-semibold text-lg ">
            Overview:{" "}
            <span className="text-md font-normal">{movieData.overview}</span>
          </article>
        </ul>
      </section>
      <section
        className="credit-section col-span-3 my-16
        hover:shadow-[#93b1a6] hover:shadow-[-6px_6px_0px_-0px] hover:translate-x-[3px] hover:-translate-y-[3px] transition-all duration-150 rounded-3xl"
      >
        <h2 className="text-3xl font-semibold text-[#93b1a6] ml-10">Actors</h2>
        {mainActors()}
      </section>
      <section
        className="related-movies-section col-span-3 my-16 
      hover:shadow-[#93b1a6] hover:shadow-[-6px_6px_0px_-0px] hover:translate-x-[3px] hover:-translate-y-[3px] transition-all duration-150 rounded-3xl"
      >
        <h2 className="text-3xl font-semibold text-[#93b1a6] ml-10 mb-[18px]">
          Related Movies
        </h2>
        <ul className="grid grid-cols-3 justify-items-center">
          {relatedMoviesList()}
        </ul>
      </section>
      <section className="trailer-section col-span-6 justify-self-center">
        <h2 className="text-3xl font-semibold text-[#93b1a6] mb-[18px] flex justify-center">
          Related Movies
        </h2>
        <iframe
          width="1000"
          height="600"
          src={`https://www.youtube.com/embed/${youtubeUrl}?si=FRo6Ud8O3Z7b09ez`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="border-2 rounded-xl my-10 border-[#93b1a6]"
        ></iframe>
      </section>
    </main>
  )
}

export default Movies

export async function getServerSideProps(context) {
  const {
    query: { movieId },
  } = context
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2NlNGFkM2I2YjVhNDQ2NTI4ZTMwYmUzZTliZDJlZCIsInN1YiI6IjY1NjRiYTNlZWRlYjQzMDBhZDBmY2ZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8PwMEOd_beX4PBjmIXuJtNEaGQqabKX_-WZzvNlGIW4",
    },
  }
  // Fetch data from external API
  const resMovie = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options,
  )
  const movieData = await resMovie.json()

  const resCredits = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options,
  )
  const credits = await resCredits.json()

  const resTrailer = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    options,
  )
  const dataTrailer = await resTrailer.json()

  const trailerData = dataTrailer.results

  const resRelatedMovies = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,
    options,
  )
  const dataRelatedMovies = await resRelatedMovies.json()

  const relatedMovies = dataRelatedMovies.results

  // Pass data to the page via props
  return { props: { movieData, trailerData, credits, relatedMovies } }
}
