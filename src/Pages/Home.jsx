import React from 'react'
import Sidebar from '../Components/Sidebar'
import Card from '../Components/Card'
import { useState, useEffect } from 'react'
import { API_KEY } from '../data'
import { useContext } from 'react';
import Context from '../Context/Context';
const Home = () => {
  const [data, setData] = useState([])
  const [category, setCategory] = useState(0)
  let value=useContext(Context)


  useEffect(() => {

    getdata();
  }, [category])

  const getdata = async () => {
    let uri = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
    let req = await fetch(uri);
    let res = await req.json();
    setData(res.items)

  }

  return (
    <div className=' inline-flex mt-[30px] text-white pb-[20px] '>
      <Sidebar category={category} setCategory={setCategory} />

      <div className={` min-h-screen card overflow-scroll justify-center flex flex-wrap px-[7px] gap-x-[15px] gap-y-[20px] ${!value.menu? 'ml-[150px]':'ml-[50px]'} `}>

        {
          data.map((value, index) => {
            return (

              <Card key={index} value={value} />
            )

          })
        }

      </div>

    </div>
  )
}

export default Home