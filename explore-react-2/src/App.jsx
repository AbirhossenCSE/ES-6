
import './App.css'
import Counter from './Counter';
import Team from './Team';
import User from './user';

function App() {
  function handleClick(){
    alert('Button Clicked')
  };
  const handleClick2 = () =>{
    alert('Button 2 Clicled')
  };

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concepts</h1>
      <User></User>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert('Button 3 clicked')}}>Click 3</button>
      
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
