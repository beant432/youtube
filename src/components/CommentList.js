import React from 'react'
import Comment from './Comment';

const CommentList = ({comments}) => {
  return (
    comments?.map((comment,index)=>
    <div key={index}>
    <Comment data={comment}/>
    <div className='ml-5 border-l-2'>
           <CommentList comments={comment?.replies} key={index}/>
   </div>
   </div>
   )
  )
}

export default CommentList