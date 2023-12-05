import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';


//** Retrive actorDetails */

const POST_URL = "https://api.themoviedb.org/3/person/popular?language=en-US&page=1"
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2NlNGFkM2I2YjVhNDQ2NTI4ZTMwYmUzZTliZDJlZCIsInN1YiI6IjY1NjRiYTNlZWRlYjQzMDBhZDBmY2ZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8PwMEOd_beX4PBjmIXuJtNEaGQqabKX_-WZzvNlGIW4'
    }
  };
 //
export async function getStaticPaths() {

    const response = await fetch (POST_URL, options);
    const actors = await response.json();
    const paths =actors.results.map((actor)=>(
        {
            params:{id: actor.id.toString()},
        
        } ));
    return {
      paths,
      fallback: false, // false or "blocking"
    };
}

const POST = "https://api.themoviedb.org/3/person"

export async function getStaticProps ({params}) {
    const {id}=params;
    const response = await fetch(`${POST}/${id}`, options);
    const actor = await response.json();
    return   {
         props:{ 
            actor,
         },
         };
  }
  export default function Actor ({actor}){
    const router = useRouter();
    const Gender = actor.gender;
    const biography = actor.biography;

    const [showDetails, setShowDetails] = useState(false);

    function isMaleFemal(){
     return (Gender == 2 ? "Male" : "Female");
    }
  if (router.isFallback) {
    return <div>Loading...</div>;
  }



  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const shortDetails = biography.substring(0, 100); // Displaying the first 100 characters

  return (
    <div className="bg-gray-900 text-white min-h-screen">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center lg:justify-start">
        <div className="lg:w-1/3">
          <img
             src={`https://image.tmdb.org/t/p/original${actor.profile_path} `}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-2/3 lg:pl-8 mt-6 lg:mt-0">
          <h1 className="text-4xl font-bold mb-4">{actor.name}</h1>
          <h1 className="text-1xl  mb-4">{isMaleFemal(actor.gender)}  Date Of Birth : {actor.birthday} </h1>

          <div className="bg-gray-800 rounded-lg p-4 shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Biography</h2>
            <p className="text-gray-300">{biography}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
  
}