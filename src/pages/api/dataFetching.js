export async function dataFetching(context) {
  const pageNum = context[`query`].page
  const url = context.resolvedUrl
  const pageName = () => {
    switch (true) {
      case url.includes("Popular"):
        return "popular"
      case url.includes("NowPlaying"):
        return "now_playing"
      case url.includes("TopRated"):
        return "top_rated"
      case url.includes("Upcoming"):
        return "upcoming"
    }
  }
  console.log(pageName())
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2NlNGFkM2I2YjVhNDQ2NTI4ZTMwYmUzZTliZDJlZCIsInN1YiI6IjY1NjRiYTNlZWRlYjQzMDBhZDBmY2ZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8PwMEOd_beX4PBjmIXuJtNEaGQqabKX_-WZzvNlGIW4",
    },
  }
  // Fetch data from external API
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${pageName()}?language=en-US&page=${pageNum}`,
    options,
  )
  const data = await res.json()
  const movieData = data.results
  // Pass data to the page via props
  return { props: { movieData } }
}
