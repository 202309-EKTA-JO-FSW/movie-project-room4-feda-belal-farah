import React from "react"
import { useState } from "react"
import Geners from "./Geners"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faTv } from "@fortawesome/free-solid-svg-icons"
import Search from "./Search"
import MoviesDropdown from "./MoviesDropdown"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [click2, setClick2] = useState(false)

  const handleCLick = () => {
    setClick(!click)
  }

  const handleCLick2 = () => {
    setClick2(!click2)
  }

  return (
    <nav className="nav">
      <div className="logo-search">
        <div className="logo">
          <Link href="/">Re:Movie</Link>
          <FontAwesomeIcon icon={faTv} className="tv-icon" />
        </div>

        <Search className="search" />
      </div>

      <div className="gma">
        <div onClick={handleCLick} className="geners">
          Genres
          <FontAwesomeIcon icon={faAngleDown} className="genres-icon" />
          {click && <Geners />}
        </div>

        <div onClick={handleCLick2} className="movies">
          Movies
          <FontAwesomeIcon icon={faAngleDown} className="genres-icon" />
          {click2 && <MoviesDropdown />}
        </div>

        <div className="actors">
          <Link href="./actors">Actors</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
