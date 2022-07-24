// import React from 'react'

// export default function Dummy({data}) {
//   return (
//     <>
//     <h1>{data.name}</h1>
//     <ul>
//         {data.arr.map(elem => <li>{elem}</li>)}
//     </ul>
//     </>
//   )
// }

import React from 'react'
import data from './data'

function dummy({data}) {
  return (
   <>
    <h1>{data.name}</h1>
   </>
  )
}

export default dummy