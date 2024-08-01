import React from 'react'
import Videoleft from '../Components/Videoleft'
import Rightvideo from '../Components/Rightvideo'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
const Video = () => {
  let {videoId,categoryId}=useParams()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {   
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);


      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [windowWidth]);
 
  return (
    <div className='flex px-[15px] pt-[20px] gap-[20px] mt-[40px] '>
      <Videoleft videoId={videoId} windowWidth={windowWidth}  />
      <Rightvideo categoryId={categoryId} windowWidth={windowWidth} />
    </div>
  )
}

export default Video