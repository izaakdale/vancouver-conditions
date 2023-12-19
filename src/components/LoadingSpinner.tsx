import { FaRegSnowflake } from "react-icons/fa";
import "./LoadingSpinner.css"

export default function LoadingSpinner() {
  return (
    <div className='flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-0'>
      <div className=''>
        <FaRegSnowflake className='text-6xl text-white loader z-50'/>
      </div>
    </div>
  )
}
