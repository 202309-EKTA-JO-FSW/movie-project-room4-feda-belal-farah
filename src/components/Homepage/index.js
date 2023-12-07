import { useState } from "react"
import MovieCard from "../MovieCard"

function Homepage({ movieDataToday, movieDataWeek }) {
  const [currentData, setCurrentData] = useState(movieDataToday)
  return (
    <main
      className={`w-full h-auto bg-[#040D12] flex flex-col items-center overflow-hidden`}
    >
      <header
        className="bg-[#102c2c] flex justify-center items-center w-screen relative rounded-b-lg shadow-[0px_50px_300px_-150px] shadow-[#93B1A6]
      before:bg-[url(https://cdn1.vectorstock.com/i/1000x1000/06/85/cinema-seamless-background-with-line-icons-vector-21000685.jpg)] before:absolute before:inset-0 before:opacity-10"
      >
        <div className="text-[#93B1A6] text-6xl flex items-center justify-center gap-2 font-bold h-[400px] sm:scale-50 max-[640px]:scale-[0.25] lg:scale-100">
          <p className="place-self-start pt-32 ">Welcome to </p>
          <br />
          <h1>
            <strong className="hover:animate-move-out hover:text-[120px] animate-move-in bg-clip-text text-transparent bg-glow text-[90px] transition-all duration-500 ease-out ">
              Re:Movie
            </strong>
          </h1>
          <br /> <p className="place-self-end pb-32 ">web surfer !!</p>
        </div>
      </header>
      <article>
        <nav className="flex bg-inherit text-[#93B1A6] mt-9 shadow-[#93b1a6] shadow-[0_0_50px_-15px] w-fit ml-8 rounded-l-[10px] rounded-r-[35px]">
          <h2 className=" font-bold text-lg border-l-2 border-y-2 text-[#93b1a6] w-56 border-[#93b1a6] flex items-center pl-6 rounded-l-[10px]">
            Trending Movies
          </h2>
          <form
            onChange={(e) => {
              switch (e.target.value) {
                case "movieDataToday":
                  setCurrentData(movieDataToday)

                  break

                case "movieDataWeek":
                  setCurrentData(movieDataWeek)
                  break
              }
            }}
            className={`select-wrapper px-1 border-2 border-[#93b1a6] overflow-hidden h-14 flex items-center gap-2 rounded-[35px] text-[#93b1a6] -translate-x-6 -mr-6`}
          >
            <input
              type="radio"
              id="today"
              value="movieDataToday"
              name="trending"
              className="hidden peer/1"
              defaultChecked
            />
            <label
              htmlFor="today"
              className={`flex items-center justify-center cursor-pointer  rounded-[35px] peer-checked/1:bg-[#93b1a6] peer-checked/1:text-[#040D12] px-2 font-bold text-lg  h-5/6 transition-all duration-500`}
            >
              Today
            </label>
            <input
              type="radio"
              id="week"
              value="movieDataWeek"
              name="trending"
              className="hidden peer/2"
            />
            <label
              htmlFor="week"
              className={`flex items-center justify-center cursor-pointer rounded-[35px] peer-checked/2:bg-[#93b1a6] peer-checked/2:text-[#040D12] px-2 font-bold text-lg h-5/6 text-center transition-all duration-500`}
            >
              This Week
            </label>
          </form>
        </nav>
        <section className="grid lg:grid-cols-5 sm:grid-cols-4 max-[640px]:grid-cols-3 items-start justify-items-center gap-20 py-20 w-full">
          {currentData.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
      </article>
    </main>
  )
}

export default Homepage
