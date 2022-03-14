import React from 'react'
import { Button } from 'react-bootstrap'

const Increment = ({count , setCount}) => {
  return (
    <div>
         <Button onClick={() => {setCount(count + 1)}} style={{marginRight : "10px"}}>INCREMENT</Button>
    </div>
  )
}

export default Increment