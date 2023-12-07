import { useRouter } from "next/router"
import MovieCard from "@/components/MovieCard"

export default function MoviesPageContent({ movieData }) {
  const {
    query: { page },
    route,
  } = useRouter()
  const pageName = () => {
    switch (true) {
      case route.includes("Popular"):
        return "Popular"
      case route.includes("NowPlaying"):
        return "Now Playing"
      case route.includes("TopRated"):
        return "Top Rated"
      case route.includes("Upcoming"):
        return "Upcoming"
    }
  }
  return (
    <main className={`w-full h-auto bg-[#040D12] px-[10%] pt-12`}>
      <h1 className="border-2 rounded-[10px] border-[#93b1a6] shadow-[#93b1a6] shadow-[0_0_50px_-15px] w-fit p-3 text-3xl font-bold text-[#93b1a6]">
        {pageName()} Movies
      </h1>
      <article className="grid lg:grid-cols-5 sm:grid-cols-4 items-start justify-items-center gap-10 py-20">
        {movieData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </article>
    </main>
  )
}
