import React from 'react'

export const Post = ({post,deletePost,editPost}) => (
  <article className="post-excerpt">
    <h2>{post.title}</h2>
    <p>{post.body.substring(0, 100)}</p>
    <button onClick={()=>deletePost(post.id)}>Delete Post</button>
    <button onClick={()=>editPost(post.id)}>Edit Post</button>
  </article>
)