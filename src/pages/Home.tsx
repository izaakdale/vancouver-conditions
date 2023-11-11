import { useEffect, useState } from 'react';
import { FullSnowReport } from '../types/SnowReport';
import SkiResort from '../components/SkiResort';

export default function Home() {
  
  const [message, setMessage] = useState<FullSnowReport>();

  useEffect(() => {
    let url = import.meta.env.VITE_BACKEND_WEBSOCKET_ADDR;
    const ws = new WebSocket(url);

    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      setMessage(json);
    };

    return () => {
      if (ws.readyState === ws.OPEN) {
        ws.close();
      }
    };
  }, []);

  if(!message) {
    return <div className="">loading...</div>
  }

  return <div className='flex w-full justify-center space-x-8'>
    {message ? 
    <div className="w-full p-4 text-gray-300">
      <SkiResort {...message}/>
    </div> : 
    ''}

  </div>;

}
