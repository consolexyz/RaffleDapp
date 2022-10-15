require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require('hardhat-deploy');

/** @type import('hardhat/config').HardhatUserConfig */


const GOERIL_RPC_URL = process.env.GOERIL_RPC_URL;
const PRIVATE_KEY= process.env.PRIVATE_KEY;
const ETHERSCAN = process.env.ETHERSCAN;


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat:{
      chainId: 31337,
      blockConfirmations:1,
    },
    goerli:{
      chainId:5,
      blockConfirmations:6,
      url: GOERIL_RPC_URL,
      accounts:  [PRIVATE_KEY],
    }
  },
  solidity: "0.8.17",
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    }
  },
  etherscan: {
    // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
        goerli: ETHERSCAN,
        // polygon: POLYGONSCAN_API_KEY,
    },
},
};
