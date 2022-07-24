import React from 'react'
import Header from './Header'
import Pro from './Pro'

function Practise({data}) {
  return (
     <>
       <Header />
       
       <div className="list">
        <p className="HeroHeading">
        DSA Sheet by Love Babbar
        </p>
        <hr />
      </div>
       

         {data.map(obj => 
       <Pro data={obj} />)
      }

 
      
     </>
  )
}

export default Practise