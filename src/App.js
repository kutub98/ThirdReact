import logo from './logo.svg';
import './App.css';
import Countries from './Components/Countries/Countries';
import Post from './Components/Jasons/Post';
import Counter from './Components/Counter/Counter';
import ArrOb from './Components/ArrayObject/ArrOb';



function App() {
  return (
    <div className="App">
      <h1> Welcome to the world tour whole world! </h1>
      <Counter></Counter>
      <ArrOb></ArrOb>
    <Post></Post>
     <Countries></Countries>
     
    </div>
  );
}




export default App;
