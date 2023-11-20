import { useEffect, useState } from 'react';
import { SnowReport } from '../types/SnowReport';
import SkiResort from '../components/SkiResort';
import axios from 'axios';

export default function Home() {
  
  const [message, setMessage] = useState<SnowReport>();

  let url = import.meta.env.VITE_BACKEND_WEBSOCKET_ADDR;

  async function getData() {

    let resp = await axios.get(url+"/stub")
    if (resp) {
      setMessage(resp.data);
    } else {
      console.log("error");
    }
  }

  useEffect(() => {
    getData()
  }, []);

  if(!message) {
    return <div className="">loading...</div>
  }

  return <div className='flex flex-col w-full'>
    {message &&
      <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-2'>
        {message.data.map((resort,idx) => {
          return <SkiResort key={idx} {...resort}/>
        })}
      </ul>
    }
  </div>
}
