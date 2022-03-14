import React , {useState , useEffect} from "react";
import './App.css';
import TableComponent from './components/TableComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container , ProgressBar } from 'react-bootstrap';
import Increment from "./components/Increment";
import FormComp from "./components/FormComp";


function App() {
const [show , setShow] = useState(true);
const [count , setCount] = useState(0);

//replicating ComponentDidMount using UseEffect hook
useEffect(() => {
  console.log("componentdidmount component updated")
}, [])  //dependency array empty (replicating useEffect hook)

//replicating ComponentDidUpdate using UseEffect hook
useEffect(()=> {
console.log("count updated  (count / show ")
},[count , show])   //we can pass the state here in dependency if any state update is done we can use that state only

// //replicating ComponentWillUnmount using UseEffect hook (used this in tableComponent.js)
// useEffect(() => {
//   // console.log("componentwillUnmount")
//   return () => {

//   }
// },[])

  return (
    <div className="App">
      <Container>
      {/* {show && <TableComponent />} */}
      {/* <Button variant='dark' onClick={() => {setShow(!show)}}>    {show ? "Hide" : "Show"}  </Button> */}
      {/* <h1>{count}</h1> */}
      {/* <ProgressBar now={count} /> */}
      {/* <Button onClick={() => {setCount(count + 1)}} style={{marginRight : "10px"}}>INCREMENT</Button> */}
      {/* <Increment count={count} setCount={setCount}/> */}
      {/* <Button onClick={() => {setCount(count - 1)}}>DECREMENT</Button> */}
      <FormComp />
      </Container>

     
      
    </div>
  );
}

export default App;
