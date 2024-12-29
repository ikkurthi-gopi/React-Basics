import React from 'react'

const Arrayadding = () => {
    let array1 = [1,2,3,4,5]
    let array2 = [6,7,8,9]
   let adding = [...array1,...array2]
  return (
    <div>
      {adding}
      {console.log(adding)}
    </div>
  )
}

export default Arrayadding
