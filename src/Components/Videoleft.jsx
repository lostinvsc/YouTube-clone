import React from 'react'
import { views_convertor } from '../data'
import { API_KEY } from '../data'
import moment from 'moment';
import { useState, useEffect, useRef } from 'react'
const Videoleft = ({ videoId, windowWidth }) => {
    const [apidata, setApidata] = useState()
    const [toggle, setToggle] = useState(false)
    const [chdata, setChdata] = useState()
    const [comments, setComments] = useState()
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    useEffect(() => {

        getdata();

    }, [videoId])

    const getdata = async () => {
        let uri = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        let req = await fetch(uri);
        let res = await req.json();
        setApidata(res.items[0])

        if (videoId) {

            let uri3 = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=65&videoId=${videoId}&key=${API_KEY}`;
            let req3 = await fetch(uri3);
            let res3 = await req3.json();
            setComments(res3.items)
            // console.log(comments)
            console.log(1)

        }

    }

    useEffect(() => {
        getchanneldata()
    }, [apidata])


    const getchanneldata = async () => {
        if (apidata) {

            let uri2 = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;
            let req2 = await fetch(uri2);
            let res2 = await req2.json();
            setChdata(res2.items[0])
        }
    }

    useEffect(() => {

        if (windowWidth < 1010 && windowWidth>850) {
            ref1.current.style.width = '100%';
            ref3.current.style.width='600px';
        }
         else if (windowWidth<=850 && windowWidth>456) {
            ref1.current.style.width = '100%';
            ref3.current.style.width='400px';
        }
        else if (windowWidth>=1010) {
            ref1.current.style.width = '65vw';
            // ref2.current.style.width='600px';
        }
        else if (windowWidth<=456) {
            // ref1.current.style.width = '65vw';
            // ref2.current.style.width='600px';
            // ref3.current.style.width='300px';
            ref3.current.style.width='300px';
        }

    }, [windowWidth])



    return (
        <div ref={ref1} className='leftvideo w-[65vw]'>


            <div>
                <div>

                    <iframe ref={ref2} className='videowidth w-[100%] h-[500px] rounded-lg' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='videotitle mt-[15px]'>
                    <p className='text-2xl font-semibold'>
                        {apidata && <div>{apidata.snippet.title}</div>}
                    </p>
                    <div className='flex flex-wrap justify-between items-center mt-[10px]'> 
                        <div>
                            {apidata && <div>{views_convertor(apidata.statistics.viewCount)} views &bull;  {moment(apidata.snippet.publishedAt).fromNow()} </div>}
                        </div>
                        <div className='flex flex-wrap items-center gap-[20px]'> 

                            <div className='flex flex-wrap  items-center text-sm'>
                                <span className="material-symbols-outlined  font-thin">
                                    thumb_up
                                </span><span> {apidata && <div>{views_convertor(apidata.statistics.likeCount)}</div>} </span>
                            </div>
                            <div className='flex flex-wrap  items-center text-sm'>
                                <span className="material-symbols-outlined  font-thin">
                                    thumb_down
                                </span><span>27</span>
                            </div>
                            <div className='flex flex-wrap  items-center text-sm gap-[7px]'>
                                <span className="material-symbols-outlined  font-thin">
                                    share
                                </span><span>Share</span>
                            </div>
                            <div className='flex flex-wrap  items-center text-sm gap-[7px] mr-[5px]'>
                                <span className="material-symbols-outlined  font-thin">
                                    bookmark
                                </span><span>Save</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <hr className='my-[20px]' />
            <div className="cinfo px-[10px]">
                <div className='flex flex-wrap  justify-between'>
                    <div className='flex flex-wrap  gap-[15px]'>
                        <div className="pic"><img className='rounded-full w-[40px] h-[40px]' src={chdata && chdata.snippet.thumbnails.default.url} /></div>
                        <div className="text flex flex-wrap  flex-col gap-[15px]"> 
                            <div >

                                <div className='font-semibold'>{apidata && <div>{apidata.snippet.channelTitle}</div>}</div>
                                <div className='font-thin text-sm'>{chdata && views_convertor(chdata.statistics.subscriberCount)} subscribers</div>
                            </div>
                            <div className='flex flex-wrap   flex-col font-thin'>
                                <p>{apidata && <p ref={ref3} className='w-[600px] ' >{!toggle ? apidata.snippet.description.slice(0, 300) : apidata.snippet.description}</p>}</p>
                                <div className='cursor-pointer font-bold' onClick={() => { setToggle(!toggle) }}>View  {!toggle ? 'More' : 'Less'} </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-red-500 px-[10px] w-fit h-fit py-[3px] text-white rounded-xl'>Subscribe</div>
                </div>
                <div className="comments pl-[55px]">
                    <hr className='mt-[20px] mb-[10px]' />
                    <div className='mb-[10px]'>{apidata && <div>{views_convertor(apidata.statistics.commentCount)} Comments</div>}</div>
                    <div className='flex flex-wrap flex-col gap-[35px]'> 

                        {comments && comments.map((value, index) => {


                            return (
                                <div key={index} className='comment flex flex-wrap  '> 
                                    <div className="img">

                                        <img className='rounded-full w-[40px] h-[40px] mr-[5px] mt-[5px]' src={value.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                                    </div>
                                    <div className='w-[90%]'>
                                        <div className='text-lg  flex flex-wrap  gap-[10px] items-center'> {value.snippet.topLevelComment.snippet.authorDisplayName.slice(1)}  &bull;<span className='font-thin text-sm'>1 day ago</span> </div>
                                        <p className=' font-light ml-[5px]  '> {value.snippet.topLevelComment.snippet.textDisplay.slice(0, 200)} </p>
                                        <div className='flex flex-wrap  items-center gap-[10px]'> <div className='flex flex-wrap items-center text-sm'> 
                                            <span className="material-symbols-outlined  font-thin">
                                                thumb_up
                                            </span><span>{views_convertor(value.snippet.topLevelComment.snippet.likeCount)}</span>
                                        </div>
                                            <div className='flex flex-wrap  items-center text-sm'>
                                                <span className="material-symbols-outlined  font-thin">
                                                    thumb_down
                                                </span><span>2</span>
                                            </div> </div>
                                    </div>
                                </div>
                            )
                        })
                        }

                    </div>

                </div>
            </div>


        </div>
    )

}

export default Videoleft