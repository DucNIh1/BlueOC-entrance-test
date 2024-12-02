import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./redux/actions/postAction";
import AddPost from "./components/AddPost";

function App() {
  const [openAdd, setOpenAdd] = useState(false);

  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  if (loading) {
    return (
      <div className="animate-spin w-40 h-40 border-[6px] rounded-full border-blue-500 border-t-transparent mt-60 mx-auto"></div>
    );
  }

  if (error) {
    return (
      <div className="">
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <>
      <div className="flex gap-5 mx-auto justify-center mt-20">
        <button
          onClick={() => setOpenAdd(true)}
          className=" bg-blue-500 px-6 py-2 text-white font-medium rounded-xl block   hover:bg-blue-800"
        >
          Add posts
        </button>
        <button
          onClick={() => dispatch(fetchPosts())}
          className=" bg-white px-6 py-2 hover:text-white font-medium rounded-xl block border border-blue-500 text-blue-800   hover:bg-blue-800"
        >
          Fetch Posts
        </button>
      </div>

      {/* FORM ADD POST */}
      {openAdd && <AddPost setOpenAdd={setOpenAdd} />}

      {/* LIST POSTS */}
      <div className="w-full max-w-xl rounded-xl shadow-md mx-auto p-5 mt-20 bg-slate-100">
        <h1 className="text-center my-10 text-3xl font-bold">All Posts</h1>
        {posts && posts.length > 0 ? (
          <>
            <ul className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
              {posts?.map((post, index) => (
                <li
                  className="shadow-sm bg-white py-2 px-4 rounded-xl text-slate-950 font-lg"
                  key={index}
                >
                  <span className="text-xl font-semibold block mb-1">
                    {post?.title}
                  </span>
                  <span>{post?.body}</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h1 className="text-center text-lg text-blue-800">
            Please click on the Fetch Posts button to load posts!!
          </h1>
        )}
      </div>
    </>
  );
}

export default App;
