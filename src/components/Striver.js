import React from 'react'
import Header from './Header';
import "./HeroSection.css";
 import Pro1 from './Pro1';
 

function Striver({data}) {
 
    return (
    <>  
      <Header />
    <div className="list">
        <p className="HeroHeading">
       CP Sheet by Striver
        </p>
        <hr />
      </div> 
       

       {data.map(obj => 
       <Pro1 data={obj} />)
      } 
      
          </>

  )
}

export default Striver;