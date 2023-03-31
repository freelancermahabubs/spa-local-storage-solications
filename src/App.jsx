
import "./App.css";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime, setWatchTime] = useState("")
  const handleWatchTime = (time) =>{
  const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"))
  if(previousWatchTime){
    const sum = previousWatchTime + time;
    localStorage.setItem("watchTime", sum)
    setWatchTime(sum)
  }
  else{
    localStorage.setItem("watchTime", time)
    setWatchTime(time)
  }
  };
  return (
    <div>
      <div className="header  m-auto mb-3 ">
        <Header></Header>
        <div className="main row">
          <div className="home-container col-md-8">
            <Home handleWatchTime = {handleWatchTime}/>
          </div>
          <div className="sideCart col-md-4 card">
            <SideCart watchTime = {watchTime}/>
          </div>
        </div>
      </div>
    
      <Contact></Contact>
      <ToastContainer/>
    </div>
  );
}

export default App;
