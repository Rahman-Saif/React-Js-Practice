
import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [ipAddress,setIpaddress]=useState('');
  const [loading,setLoading]=useState(false);

  const fetchRes=async()=>{
    setLoading(true);
    try{
      const response=await axios.get(`https://api.ipify.org?format=json`);
      setIpaddress(response.data.ip)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <h1>IP Address Finder!</h1>
      <button onClick={fetchRes} disabled={loading}>
        {loading ? 'Fetching':'Get My Ip Address'}
      </button>
      {ipAddress && (<span>Your IP Address is {ipAddress}</span>)}
    </>
  )
}

export default App
