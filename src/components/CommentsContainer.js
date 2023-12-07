import React from 'react'
import CommentList from './CommentList'
import { commentsList } from '../utils/commentsMockData'

const CommentsContainer = () => {
  return (
    <div><CommentList comments={commentsList} /></div>
  )
}

export default CommentsContainer