import React from 'react'

function MoviesDropdown() {
  
  return (
    <div>
 <ul id="movies-dropdown">
  <li value="top-rated">Top Rated</li>
  <li value="popular">Popular</li>
  <li value="latest">Latest</li>
  <li value="now-playing">Now Playing</li>
  <li value="upcoming">Upcoming</li>
</ul>
      
    </div>
  )
}

export default MoviesDropdown;
