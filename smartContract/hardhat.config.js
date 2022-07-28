require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: `${process.env.VITE_ALCHEMY_URL}`,
      accounts: [process.env.VITE_PRIVATE_KEY],
    },
  },
};
