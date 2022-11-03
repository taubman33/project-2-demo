import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Starships () {

   // we need to create a state for our data
   const [starShips, setStarships] = useState({})

   //we need to call an axios function
useEffect(()=> {
   const getData = async () =>{ 
    const response = await axios.get('https://swapi.dev/api/starships/9')
    console.log(response.data)
     //we need to set state of our data
    setStarships(response.data)
   }
   getData()

}, [])
  
   //we need to see the data

    console.log(starShips)

   //lets also make a guard operator
   //so if data takes a few seconds
   //our site doesnt break



if (!starShips) {
        return <h2> Loading please wait</h2>
    } else {

    return (
        <div>
            <h2>name: {starShips.name}</h2> 
            <h4> model: {starShips.model}</h4>

        </div>
    )
   }
}