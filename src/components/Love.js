import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import "./HeroSection.css";
import {AiOutlineHeart} from 'react-icons/ai';
import {AiTwotoneHeart} from 'react-icons/ai';
//  import Table from 'react-bootstrap/Table';
import Pro from "./Pro";
// import dataDummy from './data.js'
// import Dummy from './dummy'
import Prob from "./Prob";

export default function Love({data} ) {
   
 

  return (
    <>

<Header />
   
        <div className="list">
        <p className="HeroHeading">
        DSA Sheet by Love Babbar
        </p>
        <div className="hr">
        <hr />
        </div>
      </div>
       

     
    {/* {dataDummy.map(obj => <Dummy data={obj} />)} */}
    {/* {data.map(obj => <Dummy data={obj} />)}  */}
     {/* {dataDummy.map(obj => 
       <Dummy data={obj} />)
      } */}

     {/* {data.map(obj => 
       <Pro data={obj} />)
      } */}

       {data.map(obj => 
       <Pro data={obj} />)
      }



    {/* {data.map((user) => (
        <div className="user">{user.topicName}</div>
      ))} */}
      
    </>

  );
}
