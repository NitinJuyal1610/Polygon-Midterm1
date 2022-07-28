import React from "react";
import { useContext } from "react";
import { Web3Context } from "../context/Web3Context";
import { useNavigate } from "react-router";
import { useEffect } from "react";
const Connect = () => {
  const { connectedAccount, connectWallet } = useContext(Web3Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (connectedAccount) {
      navigate("/post");
    }
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-violet-600">
      <button
        type="button"
        onClick={() => connectWallet()}
        className=" font-bold bg-indigo-700  shadow-md text-white text-lg active:shadow-none leading-6 font-medium py-3 px-7 rounded-lg"
      >
        Connect
      </button>
    </div>
  );
};

export default Connect;
