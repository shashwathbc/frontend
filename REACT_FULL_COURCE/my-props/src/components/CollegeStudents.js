import React from 'react';
import "./collegeStudents.css";
import  img from "../../src/dev.jpg"

class CollegeStudents extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            s1 : [
                {
                   id : 1, 
                   name : "Shashwath" , 
                   bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, id." ,
                   cource : "FULL STACK DEVELOPER",
                   tech : "MERN STACK",
                   batch: 11

                },
                {
                    id : 2, 
                    name : "DevilsGate" , 
                    bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, id." ,
                    cource : "FULL STACK DEVELOPER",
                    tech : "MERN STACK",
                    batch: 11
 
                 },
                 {
                    id : 3, 
                    name : "GateOfDeath" , 
                    bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, id." ,
                    cource : "FULL STACK DEVELOPER",
                    tech : "MERN STACK",
                    batch: 11
 
                 }
            ]
        }
    }
    render(){
        // console.log(this.state)
        const {s1} = this.state
        
        return(
   <>
   { s1.map((s2) => 
            <div className='student' key={s2.id}>
            <h2>NAME: {s2.name}</h2>
            <h3>BIO : {s2.bio}</h3>
            <h3>TECH : {s2.tech}</h3>
            <h3>COURCE : {s2.cource}</h3>
            <h3>BATCH : {s2.batch}</h3>
        </div>
   )
    }
    <img src={img} alt="" />
</>
        )
    }
}

export default CollegeStudents