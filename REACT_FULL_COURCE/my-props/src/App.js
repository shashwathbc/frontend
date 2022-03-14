// import React from "react";
// import HelloClass from "./components/HelloClass";
// // import HelloWorld from "./components/HelloWorld";
// // import HelloWorld2 from "./components/HelloWorld2";

// function App() {
//   return (
//     <div className="App">
//         {/* <HelloWorld greetTo="World" />
//        <HelloWorld greetTo="India" />
//        <HelloWorld greetTo="Africa"  greetAlsoTo="Australia" />
//         <br />
//         <br />
//         <br />
//         <br />
//        <HelloWorld2 greetTo="India "  />
//        <HelloWorld2 greetTo="Africa" />
//        <HelloWorld2 greetTo="Africa"  greetAlsoTo="Australia"/>  */}

//        {/* class based component exampke  */}
//        <HelloClass />
//     </div>
//   );
// }

// export default App;



import React from "react";
// import HelloClass from "./components/HelloClass";
import { Component } from "react";
// import CounterClass from "./components/CounterClass";
// import CollegeStudents from "./components/CollegeStudents";

import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from "./components/Bootstrap";

class App extends Component{
  // constructor(props){
  //   super(props)
  //   // console.log(this.props)
  // }
render(){
    return(
        <div className="App">
            {/* <HelloClass greetTo="World" /> */}
            {/* <HelloClass greetTo="India" />
            <HelloClass greetTo="Africa" /> */}

            {/* <CounterClass /> */}

            {/* <CollegeStudents /> */}

            <Bootstrap />
        </div>
    )
}
}


export default App