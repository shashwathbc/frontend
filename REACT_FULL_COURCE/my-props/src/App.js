import React from "react";
import HelloWorld from "./components/HelloWorld";
import HelloWorld2 from "./components/HelloWorld2";

function App() {
  return (
    <div className="App">
       <HelloWorld greetTo="World" />
       <HelloWorld greetTo="India" />
       <HelloWorld greetTo="Africa"  greetAlsoTo="Australia" />
        <br />
        <br />
        <br />
        <br />
       <HelloWorld2 greetTo="India "  />
       <HelloWorld2 greetTo="Africa" />
       <HelloWorld2 greetTo="Africa"  greetAlsoTo="Australia"/>
    </div>
  );
}

export default App;
