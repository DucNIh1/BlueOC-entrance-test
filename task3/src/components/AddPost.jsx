/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postAction";
import { toast } from "react-toastify";

const AddPost = ({ setOpenAdd }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addPost({ title, body }));
    toast.success("Added post successfully");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-35">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <form
          onSubmit={handleSubmit}
          className="bg-white px-5 py-10 rounded-xl  w-[500px] flex flex-col gap-5 relative"
        >
          <span
            onClick={() => setOpenAdd(false)}
            className=" absolute top-5 right-5 font-bold text-xl cursor-pointer text-red-500 hover:text-red-800"
          >
            X
          </span>

          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="border px-5 py-2 w-full outline-none rounded-xl focus:border-blue-500"
              name="title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="body">Body</label>
            <input
              value={body}
              onChange={(e) => setBody(e.target.value)}
              type="text"
              className="border px-5 py-2 w-full outline-none rounded-xl focus:border-blue-500"
              name="body"
            />
          </div>
          <button className="w-full bg-blue-500 px-6 py-2 text-white font-medium rounded-xl block mx-auto mt-5 hover:bg-blue-800">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
