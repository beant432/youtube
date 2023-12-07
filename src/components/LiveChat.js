import React, { useEffect ,useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMesssages } from '../utils/chatSlice';
import { generateRandomMessages, generateRandomNames } from '../utils/helper';

const LiveChat = () => {
    const dispatch=useDispatch();
    const chatMessage=useSelector(store=>store.chat.messages);
    const [liveMessage, setLiveMessage]=useState("");
    useEffect(()=>{
     const i= setInterval(()=>{
      dispatch(addMesssages({name:generateRandomNames(), message:generateRandomMessages(20)}));
     },1500)

     return ()=>{
        clearInterval(i);
     }
    },[]);
  return (
    <div className='w-2/6'>
    <div className=' ml-4 px-3 border h-[600px] border-gray-100 bg-slate-100 overflow-y-scroll rounded-lg py-4 flex flex-col-reverse'>
   {chatMessage.map((c, index)=><ChatMessage name={c.name} message={c.message} key={index}/>)};</div>    
    <form className='m-2 w-full' onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMesssages({name:"Beant", message:liveMessage}));
      setLiveMessage('');
    }}>
    <input type="text" className='border border-gray-100 bg-gray-100 h-10 p-2' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
    <button className='p-2 mx-2 bg-blue-200 rounded w-20'>Send</button></form>
    </div>
  )
}

export default LiveChat