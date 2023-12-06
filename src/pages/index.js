import Image from "next/image"
import Homepage from "@/components/Homepage"
import Navbar from "@/components/Navbar/Navbar"

export default function Home() {
  return (
    <main>
      <Navbar  />
      <Homepage movieDataToday={movieDataToday} movieDataWeek={movieDataWeek} />


    </main>
  )
}

export async function getServerSideProps() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2NlNGFkM2I2YjVhNDQ2NTI4ZTMwYmUzZTliZDJlZCIsInN1YiI6IjY1NjRiYTNlZWRlYjQzMDBhZDBmY2ZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8PwMEOd_beX4PBjmIXuJtNEaGQqabKX_-WZzvNlGIW4",
    },
  }
  // Fetch data from external API
  const resDay = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options,
  )
  const dataDay = await resDay.json()
  const resWeek = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
    options,
  )
  const dataWeek = await resWeek.json()

  const movieDataToday = dataDay.results
  const movieDataWeek = dataWeek.results
  // Pass data to the page via props
  return { props: { movieDataToday, movieDataWeek } }
}
