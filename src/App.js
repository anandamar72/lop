import React from "react";
import "./App.css";
 import Practise from "./components/Practise";
import Love from "./components/Love";
import Login from "./components/Login"; 
import SignUp from "./components/SignUp";
import HeroSection from "./components/HeroSection";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Striver from "./components/Striver";
import Favourite from "./components/Favourite";
import data from "./450DSAFinal"
const App = () => {
  return (
    // <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Practise data={data} />}>
          {/* <Practise /> */}
        </Route>
        <Route path="/Love" element={<Love data={data}/>}>
          </Route>
          <Route path="/Striver" element={<Striver />}>
          </Route>
          <Route path="/Favourite" element={<Favourite />}>
          </Route>
          <Route path="/Login" element={<Login />}>
          </Route>
          <Route path="/SignUp" element={<SignUp />}>
          </Route>
      </Routes>
      
     
      
    </Router>
  );
};

export default App;
