import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [post, setPost] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
      title: title,
      desc: desc,
    };

    setPost([...post, newPost]);

    setTitle("");
    setDesc("");
  }

  return (
    <div className="min-h-screen bg-linear-to-bl from-[#5c472d] to-[#F5EAD5] p-6">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">

        {/* LEFT — POST FORM */}
        <div className="w-full lg:w-[35%]">
          <div className="bg-[#f5ead5] rounded-2xl p-6 shadow-lg sticky top-40">

            <h2 className="text-2xl font-bold text-[#4a3a25] mb-6">
              Create Post
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >

              <input
                type="text"
                placeholder="Post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white
                           border border-[#c9b58f] outline-none
                           focus:border-[#8b7048]"
              />

              <textarea
                placeholder="Write something..."
                rows="6"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white
                           border border-[#c9b58f] outline-none
                           focus:border-[#8b7048] resize-none"
              />

              <button
                type="submit"
                className="bg-[#5c472d] text-white py-3 rounded-lg
                           font-semibold hover:bg-[#453520]
                           transition duration-300"
              >
                Add Post
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT — POSTS */}
        <div className="w-full lg:w-[65%]">

          <h2 className="text-2xl font-bold text-[#4a3a25] mb-6">
            Posts
          </h2>

          <div className="flex flex-wrap gap-6">

            {post.length === 0 ? (
              <p className="text-[#4a3a25]">
                No posts yet. Create your first post!
              </p>
            ) : (
              post.map((elem, ids) => {

                return (
                  <div
                    key={ids}
                    className="w-full sm:w-[calc(50%-12px)]
                               min-h-56 bg-[#f5ead5]
                               rounded-xl shadow-md p-6
                               border border-[#a98d5c]"
                  >

                    <h1 className="text-xl font-bold text-[#4a3a25] mb-3">
                      {elem.title}
                    </h1>

                    <p className="text-[#66533a] leading-relaxed">
                      {elem.desc}
                    </p>

                  </div>
                );

              })
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default App;