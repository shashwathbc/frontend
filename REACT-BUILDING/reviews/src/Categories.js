import React from 'react'

const Categories = ({cat}) => {
  return (
     <div className="btn-container">
         {
             cat.map((cat , i)=> {
                 return(
                     <button
                     type='button'
                     className='filter-btn'
                     key={i}
                     onClick={()=> {}}>
                         {cat}
                     </button>
                 )
             })
         }
         </div>
  )
}

export default Categories