import React from 'react'
import PostListItems from './PostListItems'

const PostList = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full mb-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <PostListItems key={i} />
      ))}
    </div>
  )
}

export default PostList
