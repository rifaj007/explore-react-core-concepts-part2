import './App.css'
import Counter from './countery';
import Team from './team';
import Users from './users';
import Friends from './Friends';
import Posts from './Posts';

function App() {

   function handleClicked () {
      alert ('button Clicked');
   }

   const handleClicked2 = () => {
      alert ('Button 2 clicked')
   }
   
   const addFive = (num) => {
      alert (num + 5);
   }

  return (
    <>
      <h1>Vite + React</h1>
      
      <Posts></Posts>
      
      <Friends></Friends>

      <Users></Users>

      <Team></Team>


      <Counter></Counter>
      <button onClick={handleClicked}>Click Me</button>
      <button onClick={handleClicked2}>Button 2</button>
      <button onClick={() => {alert ('Button 3 clicked')}}>Button 3</button>
      <button onClick={() => addFive(5)}>Click to add Five</button>
    </>
  )
}

export default App
