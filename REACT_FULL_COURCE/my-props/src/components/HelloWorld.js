import React from 'react'

// export default function HelloWorld(props) {        //({greetTo , greetAlsoTo})  // destructuring
export default function HelloWorld({greetTo , greetAlsoTo ="India"}) {        
    //if u dont want to get undefined:
    // const greetAlsoToHandle = props.greetAlsoTo ? props.greetAlsoTo : "" 
    //or
    // let greetAlsoToHandle
    // if(props.greetAlsoTo){
    //     greetAlsoToHandle = props.greetAlsoTo
    // }else{
    //     greetAlsoToHandle= "India"
    // }
    //or destructure
    // const {greetTo , greetAlsoTo} = props
    //destructure:

    // console.log(props)
    // console.log(greetTo , greetAlsoTo);
    // console.log(props.greetAlsoTo)
  return (
    <div>
        <h1>Hello {greetTo} and {greetAlsoTo}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ad commodi quasi iusto. Mollitia, tempore! Quia rem fugiat voluptates doloremque sed reprehenderit provident voluptas. Repudiandae, maiores facere aliquid cupiditate corporis accusantium voluptatibus officia, sint illo maxime consequuntur nam voluptatem 
        suscipit reiciendis odit est mollitia voluptates? Obcaecati tempore eos harum accusantium!</p>
    </div>
  )
}
