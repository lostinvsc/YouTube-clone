import { Link } from 'react-router-dom';
import React, { useState, useEffect,useRef,useContext } from 'react';
import Context from '../Context/Context';
import { views_convertor } from '../data';
import moment from 'moment';
const Card = ({value}) => {
    const conn=useContext(Context)
    const ref=useRef()
    const [first, setfirst] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {   
        if(windowWidth<1282 && windowWidth>=1110){
          ref.current.style.width='26vw';
        }   
        else if(windowWidth>=1282){
          ref.current.style.width='28vw';
        }   
        else if(windowWidth<1110 && windowWidth>=920){
          ref.current.style.width='40vw';
        }   
        else if(windowWidth<920 && windowWidth>=770){
          ref.current.style.width='38vw';
        }   
        else if(windowWidth<770 && windowWidth>=693){
          ref.current.style.width='37vw';
        }   
        else if(windowWidth<693 && windowWidth>=590 ){
          ref.current.style.width='70vw';
        }   
        else if(windowWidth<590){
            conn.setMenu(conn.menu=true)
          ref.current.style.width='80vw';
        }   
          
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        setfirst(first + 1)

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);
    return (
        <Link ref={ref} to={`/video/${value.snippet.categoryId}/${value.id}`} className={`relative flex flex-col hover:bg-gray-900 rounded-[20px] cursor-pointer ${!conn.menu?'w-[28vw]':''}`}> 
            <div>
                <img className={`rounded-[20px] w-[100%] `} src={value.snippet.thumbnails.high.url} />
            </div>
            <div className='ml-[10px]  mt-[5px] flex flex-col gap-[5px] '>
                <p className='mb-[4px] font-bold '>{value.snippet.title}</p>
                <div className="cname text-thin text-md ">{value.snippet.channelTitle}</div>
                <div className="views text-xs font-light">{views_convertor(value.statistics.viewCount)} views &bull;
                    { moment(value.snippet.publishedAt).fromNow() }
                     </div>
            </div>
        </Link>
    )
}

export default Card
