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
    const isGoal = actor.gender;

    function isMaleFemal(){
     return (isGoal == 2 ? "Male" : "female");
    }
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (

  <div className="w-full max-w-[48rem] flex-row"> 
     <div
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={ `https://image.tmdb.org/t/p/original${actor.profile_path} `} 
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <div variant="h6" color="gray" className="mb-4 uppercase">
        {actor.name}
        </div>
        <div variant="h4" color="blue-gray" className="mb-2">
        <h1>Gender: {isMaleFemal(actor.gender)}</h1>
        <h1>{actor.popularity}</h1>

        </div>

        <div color="gray" className="mb-8 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </div>
        <a href="#" className="inline-block">
          <div variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </a>
      </div>
  <p>{actor.name}</p>
  <h1>Gender: {isMaleFemal(actor.gender)}</h1>
  <h1>{actor.popularity}</h1>
  <h1>{actor.birthday}</h1>
  <h1>{actor.biography}</h1>


</div>
   // return <actorinfo actor = {actor}/>;
   );
}