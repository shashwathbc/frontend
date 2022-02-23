import React from 'react'

export default function HelloWorld2({greetTo , greetAlsoTo}) {        
  
  return (
    <div>
        {/* <h1>Hello {greetTo}  {greetAlsoTo ? "and " + greetAlsoTo : " "}</h1> */}
        {/* //or */}
        {/* <h1>Hello {greetTo}  {greetAlsoTo && "and " + greetAlsoTo}</h1> */}
        {/* //or */}
        <h1>Hello {greetTo}  {greetAlsoTo &&  `and  ${greetAlsoTo}  `}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ad commodi quasi iusto. Mollitia, tempore! Quia rem fugiat voluptates doloremque sed reprehenderit provident voluptas. Repudiandae, maiores facere aliquid cupiditate corporis accusantium voluptatibus officia, sint illo maxime consequuntur nam voluptatem 
        suscipit reiciendis odit est mollitia voluptates? Obcaecati tempore eos harum accusantium!</p>
    </div>
  )
}
