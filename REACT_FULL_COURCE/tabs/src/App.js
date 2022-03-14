import './App.css';
import React, { Component } from 'react'
import Tabs from './Components/Tabs';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        tabNames : ["Home" , "Aboyt" , "Features"]  
    }
  }
  render() {
    return (
      <div className='app'>
        <div className="browser">
            <Tabs tabNames={this.state.tabNames} />
          <div className="viewport">Pages Go Here</div>
        </div>
      </div>
    )
  }
}
