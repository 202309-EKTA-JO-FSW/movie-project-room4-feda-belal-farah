import Link from "next/link"
import React from "react"

function MoviesDropdown() {
  return (
    <div>
      <ul id="movies-dropdown">
        <li value="top-rated">
          <Link href={`/movies/TopRated/1`}>Top Rated</Link>
        </li>
        <li value="popular">
          <Link href={`/movies/Popular/1`}>Popular</Link>
        </li>
        <li value="now-playing">
          <Link href={`/movies/NowPlaying/1`}>Now Playing</Link>
        </li>
        <li value="upcoming">
          <Link href={`/movies/Upcoming/1`}>Upcoming</Link>
        </li>
      </ul>
    </div>
  )
}

export default MoviesDropdown
