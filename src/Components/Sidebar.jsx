import React from 'react'
import { useContext } from 'react';
import Context from '../Context/Context';
const Sidebar = ({category,setCategory}) => {
    let value=useContext(Context)

    return (
        <div style={{height:'calc(100vh - 30px)'}}  className='fixed top-[30px] overflow-scroll pr-[10px] pb-[10px]'>

            <div className='flex flex-col gap-[15px] my-[20px]'>
                <div className='flex gap-[10px] text-sm items-center cursor-pointer' onClick={()=>{setCategory(0)}} >
                    <div><span onClick={()=>{setCategory(0)}}  className={`text-xl ml-[15px] mr-[6px] material-symbols-outlined cursor-pointer ${category==0?'underline decoration-red-600':''}`}>
                        home
                    </span></div>
                    <div className={`${value.menu?'hidden':''}`}>Home</div>
                </div>
                <div className='flex gap-[10px] text-sm items-center cursor-pointer' onClick={()=>{setCategory(20)}} >
                    <div><span onClick={()=>{setCategory(20)}} className={`text-xl ml-[15px] mr-[6px] material-symbols-outlined cursor-pointer ${category==20?'underline decoration-red-600':''}`}>
                        stadia_controller
                    </span></div>
                    <div className={`${value.menu?'hidden':''}`}>Gaming</div>
                </div>
                <div className='flex gap-[10px] text-sm items-center cursor-pointer' onClick={()=>{setCategory(2)}} >
                    <div><span onClick={()=>{setCategory(2)}} className={`text-xl ml-[15px] mr-[6px] material-symbols-outlined cursor-pointer ${category==2?'underline decoration-red-600':''}`}>
                        airport_shuttle
                    </span></div>
                    <div className={`${value.menu?'hidden':''}`}>Automobiles</div>
                </div>
                <div className='flex gap-[10px] text-sm items-center cursor-pointer' onClick={()=>{setCategory(17)}} >
                    <div><span onClick={()=>{setCategory(17)}} className={`text-xl ml-[15px] mr-[6px] material-symbols-outlined cursor-pointer ${category==17?'underline decoration-red-600':''}`}>
                        sports_soccer
                    </span></div>
                    <div className={`${value.menu?'hidden':''}`}>Sports</div>
                </div>
                <div className='flex gap-[10px] text-sm items-center cursor-pointer' onClick={()=>{setCategory(24)}} >
                    <div><span onClick={()=>{setCategory(24)}} className={`text-xl ml-[15px] mr-[6px] material-symbols-outlined cursor-pointer ${category==24?'underline decoration-red-600':''}`}>
                        live_tv
                    </span></div>
                    <div className={`${value.menu?'hidden':''}`}>Entertainment</div>
                </div>
                <div className='flex gap-[10px] text-sm items-center cursor-pointer' onClick={()=>{setCategory(28)}} >
                    <div><span onClick={()=>{setCategory(28)}} className={`text-xl ml-[15px] mr-[6px] material-symbols-outlined cursor-pointer ${category==28?'underline decoration-red-600':''}`}>
                        biotech
                    </span></div>
                    <div className={`${value.menu?'hidden':''}`}>Technology</div>
                </div>
                <div className='flex gap-[10px] text-sm items-center cursor-pointer' onClick={()=>{setCategory(10)}} >
                    <div><span onClick={()=>{setCategory(10)}} className={`text-xl ml-[15px] mr-[6px] material-symbols-outlined cursor-pointer ${category==10?'underline decoration-red-600':''}`}>
                        headphones
                    </span></div>
                    <div className={`${value.menu?'hidden':''}`}>Music</div>
                </div>
                <div className='flex gap-[10px] text-sm items-center cursor-pointer' onClick={()=>{setCategory(22)}} >
                    <div><span onClick={()=>{setCategory(22)}} className={`text-xl ml-[15px] mr-[6px] material-symbols-outlined cursor-pointer ${category==22?'underline decoration-red-600':''}`}>
                        layers
                    </span></div>
                    <div className={`${value.menu?'hidden':''}`}>Blog</div>
                </div>
                <div className='flex gap-[10px] text-sm items-center cursor-pointer' onClick={()=>{setCategory(25)}} >
                    <div><span onClick={()=>{setCategory(25)}} className={`text-xl ml-[15px] mr-[6px] material-symbols-outlined cursor-pointer ${category==25?'underline decoration-red-600':''}`}>
                        newspaper
                    </span></div>
                    <div className={`${value.menu?'hidden':''}`}>News</div>
                </div>
            </div>
            <hr className={`${value.menu?'hidden':'w-[130px]'}`}/>
            <ul className={`${value.menu?'hidden':'flex flex-col gap-[18px]'}`}>

                <li className='ml-[10px] mt-[10px]'>Subscribed</li>
                <li className='flex gap-[15px]  items-center'>
                    <div >
                        <img className='ml-[15px] rounded-full w-[30px] h-[30px]' src="../photos/1.jpg" alt="" />
                    </div>
                    <div className='text-sm'>Carry</div>
                </li>
                <li className='flex gap-[15px]  items-center'>
                    <div >
                        <img className='ml-[15px] rounded-full w-[30px] h-[30px]' src="../photos/2.jpg.avif" alt="" />
                    </div>
                    <div className='text-sm'>BB Ki Vines</div>
                </li>
                <li className='flex gap-[15px]  items-center'>
                    <div >
                        <img className='ml-[15px] rounded-full w-[30px] h-[30px]' src="../photos/3.jpg" alt="" />
                    </div>
                    <div className='text-sm'>Coding</div>
                </li>
                <li className='flex gap-[15px]  items-center'>
                    <div >
                        <img className='ml-[15px] rounded-full w-[30px] h-[30px]' src="../photos/4.jpg" alt="" />
                    </div>
                    <div className='text-sm'>Piyush Garg</div>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar