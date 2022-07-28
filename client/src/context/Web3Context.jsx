import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/constants";
export const Web3Context = React.createContext();

const { ethereum } = window;

const getEthererumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );

  return transactionContract;
};

export const Web3Provider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please Install metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setConnectedAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
      console.log(accounts);
    } catch (error) {
      throw new Error("No ethereum object.");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please Install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setConnectedAccount(accounts[0]);
      console.log("connected", accounts);
    } catch {
      console.log(err);
      throw new Error("No ethereum object.");
    }
  };

  const addMessage = async (message) => {
    try {
      const contract = getEthererumContract();
      const transaction = await contract.addMessage(message, {
        gasPrice: ethers.utils.parseUnits("50", "gwei"),
        gasLimit: 1000000,
      });
      const transactionReceipt = await transaction.wait();
      if (transactionReceipt.status !== 1) {
        alert("error message");
        return;
      }
      console.log(transactionReceipt);
    } catch (e) {
      console.log(e);
      throw new Error("No ethereum object.");
    }
  };

  const getMessage = async () => {
    try {
      const contract = getEthererumContract();

      const data = await contract.getmessages();
      return data;
    } catch (e) {
      console.log(e);
      throw new Error("No ethereum object.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        connectedAccount,
        addMessage,
        getMessage,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
