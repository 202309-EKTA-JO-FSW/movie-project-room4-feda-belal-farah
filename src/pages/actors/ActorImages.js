import React from "react"
import { useState, useEffect } from 'react'

export default function ActorImages({personId}){
//** Retrive Populer People Image */

const [image , setImage]=useState(null);
const optionsiamge = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2NlNGFkM2I2YjVhNDQ2NTI4ZTMwYmUzZTliZDJlZCIsInN1YiI6IjY1NjRiYTNlZWRlYjQzMDBhZDBmY2ZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8PwMEOd_beX4PBjmIXuJtNEaGQqabKX_-WZzvNlGIW4'
    }
  };
 useEffect(()=>{
    (fetch(`https://api.themoviedb.org/3/person/${personId}/images`, optionsiamge)
    )
    .then((res)=>res.json())
    .then((data)=>{
        setImage(data.profiles)

    })
    .catch(error => {
        console.error('Error fetching image path:', error);
      });
 },  []);
 
 //** Display Populer People Image */

  return (
    <div className="container-ActorDetails-image">
    {image && image.length > 0 && (
    <ol key={image[0].id}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/original${image[0].file_path}`}/>
                </div>
    </ol>
    )}
 </div>
);
};
