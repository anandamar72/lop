import React from 'react'
import Header from './Header'
import Pro from './Pro'
import "./HeroSection.css";

function Practise({data}) {
  return (
     <>
       <Header />
       
       <div className="list">
        <p className="HeroHeading">
        Basic DSA Problems
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