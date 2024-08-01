import React from 'react'
import { useState, useEffect,useRef } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../data'
import { views_convertor } from '../data'
import moment from 'moment'
import { Link } from 'react-router-dom'
const Rightvideo = ({windowWidth}) => {
    const [data, setData] = useState([])
    const { categoryId } = useParams()
    const [rec, setRec] = useState()
    let ref1=useRef()

    useEffect(() => {
        getdata();
    }, [categoryId])

    const getdata = async () => {
        let uri = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
        let req = await fetch(uri);
        let res = await req.json();
        setData(res.items)
        // console.log(res)

    }

    useEffect(() => {
     
        if(windowWidth<1010){
            ref1.current.style.display='none';
        }else{
            ref1.current.style.display='';
        }

    }, [windowWidth])
    




    return (
        <div ref={ref1} className='w-[30vw] flex flex-col gap-[5px] border'>
            {
                data.map((value, index) => {
                    return (
                        <Link to={`/video/${categoryId}/${value.id}`} className='w-[100%]  flex gap-[10px] py-[5px] pl-[6px] rounded-lg hover:bg-slate-800 cursor-pointer'>
                            <div>
                                <img className='w-[250px] h-[150px] rounded-md   object-cover !important' src={value.snippet.thumbnails.high.url} />
                            </div>
                            <div className='font-semibold text-[0.9vw] mt-[10px] w-[60%]' style={{ lineHeight: '20px' }}>
                                <div className='mb-[10px]'>{value.snippet.title}</div>
                                <div className='font-light text-[0.8vw]'>{value.snippet.channelTitle}</div>
                                <div className='font-light text-[0.8vw]'>{views_convertor(value.statistics.viewCount)} views &bull;   {moment(value.snippet.publishedAt).fromNow()} </div>
                            </div>

                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Rightvideo