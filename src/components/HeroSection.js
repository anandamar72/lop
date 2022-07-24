import './HeroSection.css'
import React, { useEffect, useState } from "react";
import  { Component } from 'react';
import Header from './Header'; 

function HeroSection()  {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
 
  let totalNumber = 30;
  var totalSection=10;
// const [num,setNum]=useState(0);

var list = [];
var num=  [];
const lowEnd=1;
const highEnd=30;
 
for (var i = lowEnd; i <= highEnd; i++) {
    list.push(false);
}
for (var i = 1; i <= totalSection; i++) {
  num.push(0);
}
   const [checkNum,setCheckNum]=useState(num);
   const [checkBoxState, setcheckBoxState] = useState(list);


     
     
  //  const HanldeCheck = (index) =>   {
    function HanldeCheck(section,index)
    {
   
  var templist = checkBoxState;
  var tempNum  = checkNum ;
  if(templist[index]) 
  {
    // setNum(num-1);
    tempNum[section]=tempNum[section]-1;
      setCheckNum(tempNum);
  }
  else 
  {
    tempNum[section]=tempNum[section]+1;
     setCheckNum(tempNum);
  }
 
  console.log(checkNum);
  templist[index] = !templist[index];
  setcheckBoxState(templist);
  
};

// const [count,SetCount]=useState()
 
return (
    <>
    <Header />
          <div className="list">
        <p className="HeroHeading">Practice Problems : From Basic To Advance </p>
        <hr />
        {/* Problems starts from here  */}
        <div className="center2" >
          <button className="center1" onClick={() => setShow1(!show1)}>
            <div className="sol">
              Arrays
            </div>
           
            {/* <div className="solve"> */}
             
              {/* <p>{checkNum[0]} / {totalNumber}  </p> */}
             
            {/* </div> */}
          </button>


          {
            show1 ? <table className="table">
              <thead>
                <th>S.No</th>
                <th >Problems</th>
                <th>Status</th>

              </thead>
              <tbody>
                <tr>
                  <td data-label="S.No"> 1 </td>

                  <td data-label="Problems"><a href="https://leetcode.com/problems/reverse-linked-list/" target="_blank" rel="noreferrer">Reverse linked list</a></td>
                 <td data-label="Status"><input className='Stat' type="checkbox"
                 onClick={ () =>   HanldeCheck(0,0)
                }/>
                </td>
                </tr>
                <tr>
           
                   <td data-label="S.No"> 2 </td>

                   <td data-label="Problems"><a href="https://leetcode.com/problems/reverse-linked-list/" target="_blank" rel="noreferrer">Reverse linked list</a></td>

                 <td data-label="Status"><input className='Stat' type="checkbox"
                  onClick={ () => HanldeCheck(0,1)
                
                }/>
                 </td>
                 </tr>
               </tbody>
             </table> : null
          }

        {/* ////////////////////////////////                     */}
  <center>
         <button className="center1" onClick={() => setShow2(!show2)}>
             <div className="sol">
                Binary Search
            </div>
             <div className="solve">
               <p>{(checkNum[1])} / {totalNumber}  </p>
             </div>
           </button>


          {
            show2 ? <table className="table">
              <thead>
                <th>S.No</th>
                <th>Problems</th>
                <th>Status</th>

              </thead>
              <tbody>
                <tr>
                  <td data-label="S.No"> 1 </td>

                  <td data-label="Problems"><a href="https://leetcode.com/problems/reverse-linked-list/" target="_blank" rel="noreferrer">Reverse linked list</a></td>

                <td data-label="Status"><input className='Stat' type="checkbox"
                
                onClick={ () =>   HanldeCheck(1,0)
                }/>
                </td>
                </tr>
                <tr>
           
                  <td data-label="S.No"> 2 </td>
 
                  <td data-label="Problems"><a href="https://leetcode.com/problems/reverse-linked-list/" target="_blank" rel="noreferrer">Reverse linked list</a></td>

                <td data-label="Status"><input className='Stat' type="checkbox"
                 onClick={ () => HanldeCheck(1,1)
                
                }/>
                </td>
                </tr>
              </tbody>
            </table> : null
          }
           </center>
        </div>
      </div>
    </>
  );

}


export default HeroSection;


// export default function HeroSection ()
// {
//     var list=[];
//     for(let i=0;i<=10;i++)
//     {
//            list.push(i);
//     }
     
//     const [check,setCheck]=useState(list);

//     list=check;
//     list[0]=9;
//     // setCheck(list);
//     console.log(check);
//     console.log(list);

//     console.log(check[0]);
//     console.log(list[0]);


// }