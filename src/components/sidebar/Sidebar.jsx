import React, { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import { Context } from '../../context/Context';

export default function Sidebar() {
    const [extended, setExtended] = useState(true);
    const {fetchData, prevPrompts, setRecentPrompt , newChat} = useContext(Context)
    const loadPrompt = async (prompt) =>{
        setRecentPrompt(prompt)
        await fetchData(prompt)
    }

    return (
        <div className={`sidebar hidden flex sm:flex font-['Outfit']  flex-col justify-between min-h-screen bg-[#f0f4f9] px-[15px] py-[15px] ${extended ? 'w-[200px]' : 'w-[65px]'}`}>
            <div className='top cursor-pointer'>
                <MenuIcon sx={{ fontSize: 20 }} className='ml-2.5 block' onClick={() => setExtended(!extended)} />
                <div onClick={() => newChat()} className='new-chat mt-12 inline-flex items-center bg-[#e6eaf1] p-1 rounded w-full font-2'>
                    <AddIcon sx={{ fontSize: 20 }} />
                    {extended ? <p className='text-sm text-gray-500 ml-2'>New Chat</p> : null}
                </div>

                {extended ?
                    <div className="recent flex flex-col">
                        <p className='recent-title mt-7 mb-5'>Recent</p>
                        {
                            prevPrompts.map((item,index) =>{
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <div onClick={() => loadPrompt(item)} className='recent-entry flex text-sm gap-2 px-2 py-2 rounded-[10px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                                    <ChatBubbleOutlineIcon sx={{ fontSize: 20 }} />
                                    <p>{item.slice(0,18)}...</p>
                                </div>
                                )
                            })
                        }
                       
                    </div>
                    : null
                }
            </div>

            <div className='bottom flex flex-col'>
                <div className="bottom-items flex text-sm gap-2 px-2 py-2 rounded-[10px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] items-center">
                    <HelpOutlineIcon sx={{ fontSize: 20 }} />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-items flex text-sm gap-2 px-2 py-2 rounded-[10px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] items-center">
                    <HistoryIcon sx={{ fontSize: 20 }} />
                    {extended ? <p>History</p> : null}
                </div>
                <div className="bottom-items flex text-sm gap-2 px-2 py-2 rounded-[10px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                    <SettingsIcon sx={{ fontSize: 20 }} />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}
