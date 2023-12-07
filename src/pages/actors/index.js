import Link from "next/link"
import { useState, useEffect } from "react"
import ActorImages from "./ActorImages"

export default function Actors() {
  const [popularPeople, setPopularPeople] = useState([])
  //** Retrive Populer People  */
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2NlNGFkM2I2YjVhNDQ2NTI4ZTMwYmUzZTliZDJlZCIsInN1YiI6IjY1NjRiYTNlZWRlYjQzMDBhZDBmY2ZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8PwMEOd_beX4PBjmIXuJtNEaGQqabKX_-WZzvNlGIW4",
    },
  }
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularPeople(data.results)
      })
      .catch((error) => {
        console.error("Error fetching  popularPeople path:", error)
      })
  }, [])

  //** Diplay Populer People using Tailwind CSS  */
  return (
    <div className="flex flex-col gap-4 justify-center items-start bg-[#040D12]">
      <h1 className="border-2 rounded-[10px] mx-[8%] mt-12 border-[#93b1a6] shadow-[#93b1a6] shadow-[0_0_50px_-15px] w-fit p-3 text-3xl font-bold text-[#93b1a6]">
        Popular People
      </h1>
      <div className=" grid grid-cols-5 gap-14 px-[10%] my-20 movie-cover bg-[#040D12] ">
        {popularPeople.map((person) => (
          <div key={person.id}>
            <Link href={`/actors/${person.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                alt={`${person.name} profile`}
                className="w-full rounded-lg mb-4 hover:shadow-[0px_0px_22px_#93B1A6] transition-all duration-300"
              />
            </Link>

            <section className="flex flex-col gap-[2px] place-content-between w-[100%]">
              <Link href={`/actors/${person.id}`}>
                <h2 className="movie-title font-bold text-xl text-[#93b1a6] max-w-[220px] h-auto">
                  {person.name}
                </h2>
                <figcaption className="release-date italic text-gray-500  w-auto">
                  {person.knownFor}
                </figcaption>
              </Link>
            </section>
          </div>
        ))}
      </div>
    </div>
  )
}
