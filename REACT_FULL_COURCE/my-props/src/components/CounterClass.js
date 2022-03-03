import React , {Component} from 'react';
import "./counterclass.css";

class CounterClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
    }

    incrementop = () => {
       console.log("Incrementing");
       this.setState((prevState) =>(
           {
               counter : prevState.counter + 1
           }
       ))
    }

    decrementop =() => {
        this.setState( 
            {
                counter : this.state.counter -1
            }
        )
    }

    callAnotherFunction = () => {
       this.incrementop()
       this.incrementop()
       this.incrementop()
    }

    render(){
        return(
            <div className='center'>
            <h1 style={{fontSize: "10em"}}>{this.state.counter}</h1>
            <button onClick={this.incrementop}>Increment</button> 
            <button onClick={this.decrementop}>Decrement</button> 
            <button onClick={this.callAnotherFunction}>CallingAnotherFunction</button> 
            </div>
           
        )
    }
}

export default CounterClass