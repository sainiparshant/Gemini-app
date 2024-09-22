import React, { useContext } from 'react'
import {Context} from '../../context/Context'
import './Main.css'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import SendIcon from '@mui/icons-material/Send';


export default function Main() {

  const{fetchData, recentPrompt,showresult,loading,resultData, setInput, input} = useContext(Context);
  return (
    <div className='main flex-1  min-h-screen pb-15vh relative'>
        <div className="nav flex justify-between items-center p-5 text-lg text-black ">
            <p className='font-semibold'>Gemini</p>
            <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="" className='size-10 rounded-full' />
        </div>
        <div className="main-container  max-w-[800px] m-auto">
          {!showresult 
          ? 
            <> 
               <div className="greet my-8 text-5xl text-[#c4c7c9] font-medium p-5">
                <p><span>Hello, Parshant</span></p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 text-sm text-[#585858] ">
                  <div className="card  hover:bg-[#dfe4ea] ">
                  <p>Suggest beautyful places to see on an upcoming road trip</p>
                  <ExploreOutlinedIcon className='absolute  rounded-[25%]  bottom-2 right-2'/>
                </div>
                <div className="card  hover:bg-[#dfe4ea] ">
                  <p>Briefly summarize this concept: urban planning</p>
                  <TipsAndUpdatesOutlinedIcon className='absolute rounded-[25%]  bottom-2 right-2'/>
                </div>
                <div className="card  hover:bg-[#dfe4ea] ">
                  <p>Brainstrom team bonding activities for our work retreat</p>
                  <MessageOutlinedIcon className='absolute rounded-[25%]  bottom-2 right-2'/>
                </div>
                <div className="card  hover:bg-[#dfe4ea] ">
                  <p>Improve the readiability for the following code</p>
                  <CodeOutlinedIcon className='absolute  rounded-[25%]  bottom-2 right-2'/>
                </div>
              </div>
            </>
            :
            <div className='result mx-0 my-[5%] min-h-[55vh] max-h-[55vh] overflow-y-scroll '>
                  <div className="result-title gap-5 flex items-center">
                  <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="" className='size-10 rounded-full' />
                    <p>{recentPrompt}</p>
                  </div>
                  <div className="result-data flex items-start  gap-5 mt-4">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s" alt="" className='size-10 rounded-full'  />
                    
                    {loading
                    ? <div className='loader w-[100%] flex flex-col gap-10'>
                        <hr />
                        <hr />
                        <hr />
                    </div> 
                    :  <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                   

                  </div>
            </div>
          }
          
            <div className="main-bottom  m-auto w-full max-w-[80%] sm:max-w-[95%] px-0 py-5">
              <div className="search-box flex items-center justify-between gap-x-2 bg-[#f0f4f9] px-5 py-2 rounded-full">
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here ' className='flex-1  bg-transparent outline-none border-none p-2 text-md' />
                <div className='flex items-center gap-2'>
                  <CollectionsOutlinedIcon className='cursor-pointer'/>
                  <MicNoneOutlinedIcon className='cursor-pointer'/>
                  <SendIcon className='cursor-pointer' onClick={() => fetchData()}/>
                </div>
              </div>

              <p className='text-[12px] mx-4 my-auto font-[300] text-center mt-1'>Gemini may display inaccurate info, including about people, so double-check its response. Your privacy and Gemin Apps</p>
          </div>
          </div>
        </div>
    
  ) 
}
