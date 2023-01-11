
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {increment,decrement,reset} from './reduxx/counterSlice';





function App() {
    const {counter} = useSelector(state=>state.counter);
    const Dispatch = useDispatch(); 



  return (
    <div className="App">
     <h1>Counter Workshop</h1>
     <h2>Counter={counter}</h2>
     <button onClick={()=>Dispatch(increment())} >+</button>
     <button  onClick={()=> Dispatch(decrement())} >-</button>
     <button   onClick={()=> Dispatch(reset())}> reset</button>
    </div>
  );
}

export default App;