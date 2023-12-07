import React, { useState ,useMemo, useRef} from 'react'
import { findPrime } from '../utils/helper';

const DemoforHooks = () => {
    const [text , setText]=useState('');
    const [isDarkTheme , setDarkTheme]=useState(false);
    const [y , setY]=useState(0);

    const changeTheme=()=>{
      setDarkTheme(!isDarkTheme);
    }
    let x=0;
const prime=useMemo(()=>findPrime(text), [text]);
console.log('rendering...')

const ref=useRef(0);
  return (
    <div className='col-span-11 flex'>
    <div className={`m-4 p-4 border border-gray-300 w-96 h-96 ${isDarkTheme&& 'bg-slate-600 text-white'}`}>
    <button className="" onClick={()=>changeTheme()}>Change Theme </button>
        <input type="number" value={text} onChange={(e)=>setText(e.target.value)} className='m-2 p-2 border border-blue-100 '/>
        <span className='overflow-scroll w-72'>Prime number is {prime}</span>
    </div>
    <div className={`m-4 p-4 border border-gray-300 w-96 h-96 ${isDarkTheme&& 'bg-slate-600 text-white'} block`}>
   <div><button className="mr-2 border border-gray-100 bg-gray-200 p-2" onClick={()=>{x=x+1;  console.log(x);}}>Change X </button><span>Let x= {x}</span></div>
    <div><button className="mr-2 border border-gray-100 bg-gray-200 p-2" onClick={()=>setY(y+1)}>Change state</button><span>state= {y}</span></div>
    <div><button className="mr-2 border border-gray-100 bg-gray-200 p-2" onClick={()=>{ref.current=ref.current+1;console.log('ref- ' , ref.current);}}>Change ref</button><span>ref= {ref.current}</span></div>

    </div>
    </div>
  )
}

export default DemoforHooks