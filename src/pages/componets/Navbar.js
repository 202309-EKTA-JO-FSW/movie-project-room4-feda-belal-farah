import React from 'react'
import { useState } from 'react'
import Geners from './Geners'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Search from './Search'


const Navbar = () => {

    const[click, setClick] = useState(false);
    const[click2, setClick2] = useState(false);

    const handleCLick = () =>{
        setClick(!click)
    }

    const handleCLick2 = () =>{
        setClick2(!click2)
    }

  return (
    <>
    <nav >
        <div className='logo'>
        <Link href='/' >
            Re:movie
        </Link>
        </div>

        <Search className='search'/>
       
        <div onClick={handleCLick} className='geners'>
            Genres
        <FontAwesomeIcon icon={faAngleDown} className='genres-icon'/>
        {click &&(<Geners />)}
        </div>

        <div onClick={handleCLick2} className='movies'>
            Movies
        <FontAwesomeIcon icon={faAngleDown} className='genres-icon' />
        {click2 &&(
         <ul className="dropdown-menu">
         <li>
            <Link href='/' >Top rated</Link>
         </li>
         <li>
            <Link href='/' >Popular</Link>
         </li>
         <li>
            <Link href='/' >Latest</Link>
         </li>
         <li>
            <Link href='/' >Now playing</Link>
         </li>
         <li>
            <Link href='/' >Upcoming</Link>
         </li>
       </ul>
        )}
        </div>

        <div className='actors'>
        <Link href='./actors' >
            Actors
        </Link>
        </div>
    </nav>

    </>
  )
}

export default Navbar
