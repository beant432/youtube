import React from 'react'

const ButtonsList = () => {

    const buttons=['All', 'Gaming', 'Music', 'Live', 'Soccer', 'Cricket',  'Valentines', 'Cooking', 'Cricket'];
  return (

    <div className='text-left ml-3 flex flex-wrap mr-3 w-auto'>{buttons.map((button,index)=>{
        return(<button key={index} className='bg-gray-200  text-black m-2 p-2 rounded-lg w-24'>{button}</button>
        )})}</div>
  )
}

export default ButtonsList