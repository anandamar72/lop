import React from 'react'
import urls from "../Data/urls";
import Header from './Header';
import {useState} from "react"
import {
    Badge,
    Table,
    Button,
    Form,
    FloatingLabel,
    Alert,
    Card,
    Image,
  } from "react-bootstrap";
function Striver() {
    const [topic, setTopic] = useState("all");
     var data = {};
   var problems = urls.data;
 
 
   const [userData, setUserData] = useState({});

 for(let i=0;i<userData.length;i++)
 {
    let index=userData[i].problem.index;
    let problemName=userData[i].problem.name;

 }
  for(let i=0;i<problems.length;i++)
 {
       const topic=problems[i].topic;
       const list=problems[i].data;
       data[topic]={};
       data[topic]["problems"]=[];
      for(let j=0;j<list.length;j++)
      {
      data[topic]["problems"].push({
        url:list[j],
        topic,
       });
      }
 }


 

    return (
    <>  
      <Header />
    <div>Striver</div>
        <div>
        <Table hover striped responsive  >
              <thead style={{ borderTop: "1px solid #dee2e6" }}>
                <th>ID</th>
                <th>Problem</th>
                <th>Verdict</th>
              </thead>
               <tbody>
                {/* {userData[topic].problems.map((problem, idx) => (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>
                      <a target="_blank" rel="noreferrer" href={problem.url}>
                        {problem.url}
                      </a>
                    </td>
                     
                  </tr>
                ))} */}
              </tbody>
            </Table>
        </div>

    </>

  )
}

export default Striver;