import React, { useState } from 'react'

const Post = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [post, setPost] = useState([])
  function handleSubmit(e) {
    e.preventDefault()
    const copyPost = [...post]
    copyPost.push({ title, description })
    console.log("copy", copyPost);
    console.log("post", post);
    setPost(copyPost)
    console.log('Title:', title)
    console.log('Description:', description)
  }

  function handleChange(e) {
    const { name, value } = e.target
    if (name === 'title') {
      setTitle(value)
    } else if (name === 'description') {
      setDescription(value)
    }
      setTitle("")
      setDescription("")
    
  }

  return (
    <>
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Enter title"
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
            name="description"
            placeholder="Enter description"
          value={description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Post
