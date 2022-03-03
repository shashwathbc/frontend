import React, { Component } from "react";

class HelloClass extends Component {
  constructor(props){
    super(props)
    
    this.state ={
      greetTo : "Welcome"
    }
  }

  changeGreetto = () => {
        console.log("I am CHANGING ")
        // this.state.greetTo = "INDIA"   cannot be done like this instesad use setState
        this.setState(
          {
            greetTo : "INDIA"
          }
        )  
  }

 
  render() {
    const {greetTo} = this.state
    return (
      <div>
        <h1>Hello {greetTo}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          ad commodi quasi iusto. Mollitia, tempore! Quia rem fugiat voluptates
          doloremque sed reprehenderit provident voluptas. Repudiandae, maiores
          facere aliquid cupiditate corporis accusantium voluptatibus officia,
          sint illo maxime consequuntur nam voluptatem suscipit reiciendis odit
          est mollitia voluptates? Obcaecati tempore eos harum accusantium!
        </p>
        <button onClick={this.changeGreetto}>Chnage GreetTo</button>
      </div>
    );
  }
}

export default HelloClass;
