import React, { useState } from 'react'

const Post = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [post, setPost] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return

    if (editIndex !== null) {
      // Update existing post
      const updatedPosts = [...post]
      updatedPosts[editIndex] = { title, desc }
      setPost(updatedPosts)
      setEditIndex(null)
    } else {
      // Add new post
      setPost([...post, { title, desc }])
    }

    setTitle('')
    setDesc('')
  }

  const handleEdit = (index) => {
    setTitle(post[index].title)
    setDesc(post[index].desc)
    setEditIndex(index)
  }

  const handleDelete = (index) => {
    const updatedPosts = post.filter((_, i) => i !== index)
    setPost(updatedPosts)
    
    // Reset form if deleting currently edited post
    if (editIndex === index) {
      setTitle('')
      setDesc('')
      setEditIndex(null)
    }
  }

  const handleCancelEdit = () => {
    setTitle('')
    setDesc('')
    setEditIndex(null)
  }

 return (
    <div className="min-h-screen bg-[url('assets/background.png')] bg-cover bg-center bg-fixed text-gray-800">
      
      {/* 🌟 Top Navigation Bar */}
      <nav className="w-full bg-white/40 backdrop-blur-md border-b border-white/60 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#d9833e] to-[#f3bd8b] flex items-center justify-center text-white font-black text-xl shadow-md shadow-orange-500/20">
              G
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900">
              Goalify<span className="text-[#d9833e]">.</span>
            </span>
          </div>

          {/* Nav Right Stats / Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/80 shadow-sm">
              <span className="text-xs font-semibold text-gray-500">Total Goals:</span>
              <span className="text-sm font-bold text-[#c97532]">{post.length}</span>
            </div>

            <button className="px-5 py-2 text-sm font-semibold text-gray-700 bg-white/70 hover:bg-white rounded-full border border-white/80 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer">
              Profile
            </button>
          </div>

        </div>
      </nav>

      {/* 🚀 Main Layout Content */}
      <main className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Side: Create / Edit Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/3 rounded-3xl border border-white/80 bg-white/60 backdrop-blur-md shadow-xl p-8 sticky top-24"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              {editIndex !== null ? 'Edit Goal ✏️' : 'Create Goal ✨'}
            </h2>
          </div>

          <input
            type="text"
            placeholder="Write Your title here.."
            className="w-full mb-4 bg-transparent outline-none text-2xl font-bold text-gray-800 placeholder:text-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Write Your description here.."
            className="w-full mb-8 bg-transparent outline-none text-gray-600 placeholder:text-gray-400 border-b border-amber-200/80 pb-3"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#e5a065] via-[#df9353] to-[#cc7b3b] text-white font-semibold py-3.5 rounded-2xl hover:brightness-105 transition-all duration-300 shadow-lg shadow-orange-900/15 border border-white/30 active:scale-95 cursor-pointer"
            >
              {editIndex !== null ? 'Update Goal' : 'Post'}
            </button>

            {editIndex !== null && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-4 py-3.5 bg-white/70 text-gray-700 font-medium rounded-2xl border border-amber-100 hover:bg-white transition-all cursor-pointer shadow-sm"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* Right Side: Goals Grid Cards */}
        <div className="w-full lg:w-2/3">
          {post.length === 0 ? (
            <div className="w-full rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 p-12 text-center text-gray-500">
              <p className="text-lg font-medium">Abhi koi goal add nahi kiya gaya hai.</p>
              <p className="text-sm text-gray-400 mt-1">Left side form se apna pehla goal create karein!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {post.map((elem, index) => (
                <div
                  key={index}
                  className={`rounded-3xl bg-white/65 backdrop-blur-md border shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 ${
                    editIndex === index ? 'border-amber-400 ring-2 ring-amber-300/40' : 'border-white/70'
                  }`}
                >
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 break-words">
                      {elem.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed break-words">
                      {elem.desc}
                    </p>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="flex items-center justify-end gap-2 pt-4 border-t border-amber-100/50">
                    <button 
                      type="button"
                      onClick={() => handleEdit(index)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100/80 rounded-xl transition-all active:scale-95 cursor-pointer border border-amber-200/40"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </button>

                    <button 
                      type="button"
                      onClick={() => handleDelete(index)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100/80 rounded-xl transition-all active:scale-95 cursor-pointer border border-rose-100"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>
    </div>
  )
}

export default Post