import React from "react"
import {ReactDOM} from "react"
import {useState , useEffect} from 'react'

function App(){
    const API_URL = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';
    const [reqType , setReqType]= useState('actor');
    const [items,setItem] = useState([]);
    useEffect(()=>{

    },[reqType])
    return (
        <h1> this is my first APP</h1>
    );
}
export default App;