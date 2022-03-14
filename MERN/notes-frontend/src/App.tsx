import React, { useState , useEffect } from "react";
import "./App.css";
// import axios from "axios";

import DUMMY_NOTES from "./interfaces/DUMMY_NOTES";

function App() {

  const [notesList , setnotesList] = useState<Array<any>>([])
 
//when state variable updates we will use this : 
  useEffect(() => {
    setnotesList(DUMMY_NOTES)
  },[])

 
  // const getNotes = async () => {
  //   try{
  //      const response = await axios.get("http://localhost:5000/notes")
  //      setnotesList( response.data.notes)
  //      console.log(response)
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  console.log(notesList)
  return (
    <div className="App">
      <div>Notes Application</div>
      {/* <div>
        <button onClick={getNotes}>Click Me!</button>
      </div> */}
      <div>
       {/* show detailes of first elemnet */}
       {/* <h1>{notesList[1]?.text}</h1> */}
       {/* <h2>{notesList[1]?.link}</h2> */}
       {notesList.map(notesLists => (
         <>
         <h1>{notesLists.text}</h1>
         <h2>{notesLists.link}</h2>  
         </>
       
       ))}
      </div>
    </div>
  );
}

export default App;
