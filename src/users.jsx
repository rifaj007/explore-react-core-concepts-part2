import { useEffect, useState } from "react"

export default function Users () {
   const [user, setUser] = useState([]);

   // use effect with dependency
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => console.log(data))
   }, [])

   return (
      <div>

      </div>
   )
}

/* 
* 1. declare a start to hold the data
* 2. use effect with call back and dependency array
* 3. use fetch to load data
*/