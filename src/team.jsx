import { useState } from "react"

export default function Team() {
   const teamStyle = {
      border: '2px solid green',
      marginBottom: '15px'
   }

   const [count, setCount] = useState(11);

   const handleAdd = () => {
      const newCount = count + 1;
      setCount(newCount);
   }

   const handleReduce = () => {
      const newCount = count - 1;
      setCount(newCount);
   }

   return (
      <div style={teamStyle}>
         <h3>Player: {count} </h3>

         <button onClick={handleAdd}>Add</button>
         <button onClick={handleReduce}>Reduce</button>
      </div>
   )
}