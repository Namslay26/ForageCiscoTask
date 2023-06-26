import React from 'react';
import './App.css';
import Banner from './Banner';
import Component from './Component';
import axios from 'axios'

function App() {
  const [v4address, setv4address] = React.useState([])
  const [v6address, setv6address] = React.useState([])

  React.useEffect(()=>{
    async function getipv4(){
      const v4 = await axios.get("https://api.ipify.org");
      setv4address(v4.data);
      return v4.data;
    }
    const ipv4 = getipv4();
  },[])

  React.useEffect(()=>{
    async function getipv6(){
      const v6 = await axios.get("https://api64.ipify.org")
      setv6address(v6.data)
      return v6.data
    }
    const ipv6 = getipv6();
  },[])

  const [latencyInfo, setLatencyInfo] = React.useState();

  React.useEffect(() => {
    const ws = new WebSocket("ws://localhost:55455");

    ws.onmessage = function getInfo(e) {
      var serverTime = Number(e.data);
      var clientTime = new Date().getTime();
      const latency = (clientTime - serverTime) / 1000;
      setLatencyInfo(latency);
    };
  }, []);


  return (
    <div className="App">
      <Banner title={"Welcome to the title"}></Banner>
      <div className=" flex">
        <Component title="Your ip address:" children={<><span>{v4address}</span><br /><span>{v6address}</span></>}></Component>
        <Component title="Latency:" children={<><span>{latencyInfo} seconds</span></>}></Component>
        <div className='IPsection'>
        </div>
      </div>
    </div>
  );
}

export default App;
