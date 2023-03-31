import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SideCart = ({watchTime}) => {
  const [time, setTime] = useState(watchTime);
  const [breakTime, setBreakTime] = useState(0);
  useEffect(()=>{
    const getWatchTimeFromStorage = localStorage.getItem("watchTime");
    setTime(getWatchTimeFromStorage)
    const getBreakTime = localStorage.getItem("breakTime");
    if(getBreakTime){
      setBreakTime(0)
    }
    else{
      setBreakTime(breakTime)
    }
  },[watchTime]);
  
  const handleBreakTime = (bt) =>{
    localStorage.setItem('breakTime', bt)
    setBreakTime(bt);
  };

  const handleComplete = () =>{
    toast("Wow so easy !")
  }
  return (
    <>
      <h1>My Cart</h1>
      <div className='mt-5 text-center'>
        <p>Total Watch Time</p>
        <input type="text" value={time} disabled />
      </div>
    <div className='flex my-3 mb-3'>
    <h5>Add Break Time</h5>
    <button onClick={()=> handleBreakTime(15)} className='w-25 btn-circle m-1 btn btn-info'>15</button>
      <button onClick={()=> handleBreakTime(20)} className='w-25 btn-circle m-1 btn btn-info bg-warning'>20</button>
      <button onClick={()=> handleBreakTime(25)} className='w-25 btn-circle m-1 btn btn-info bg-danger'>25</button>
    </div>
      <input type="text" value={breakTime} disabled />
      <button onClick={handleComplete} className='mt-5 btn btn-info w-100'>complete</button>
    </>
  );
};

export default SideCart;
