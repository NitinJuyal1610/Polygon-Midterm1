import React from "react";
import { useContext, useState, useEffect } from "react";
import { Web3Context } from "../context/Web3Context";
const Post = () => {
  const { addMessage, getMessage } = useContext(Web3Context);
  const [current, setCurrent] = useState("");
  const [prevMessages, setPrevMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return async () => {
      const data = await getMessage();
      setPrevMessages(data);
    };
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-start p-5 bg-violet-600">
      <div className="flex flex-col w-1/2 font-mono">
        <div className="flex min-w-full">
          <input
            type="text"
            name="message"
            value={current}
            className="rounded-tl-lg p-2 text-stone-400 min-w-full h-14 shadow-md"
            onChange={(e) => setCurrent(e.target.value)}
          />
          <button
            onClick={async () => {
              setLoading(true);
              await addMessage(current);
              setCurrent("");
              setLoading(false);
              const data = await getMessage();
              setPrevMessages(data);
            }}
            className=" font-bold bg-indigo-700  shadow-md text-white text-lg active:shadow-none leading-6 font-medium py-2 px-5 rounded-r-xl"
          >
            Post
          </button>
        </div>
        <div className="flex justify-center flex-col overflow-y-auto">
          {!loading ? (
            prevMessages.map((msg, i) => (
              <div
                key={i}
                className="p-2 min-w-full py-4 leading-5 min-w-full bg-blue-400/30 border-b-[1px] border-b-[#38bdf8] font-bold leading-5"
              >
                <p className="text-fuchsia-100">{msg}</p>
              </div>
            ))
          ) : (
            <div
              style={{ borderTopColor: "transparent" }}
              className="w-16 mt-2 mx-auto h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
