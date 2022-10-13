require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */


const GOERIL_RPC_URL = process.env.GOERIL_RPC_URL;
const PRIVATE_KEY= process.env.GOERLI_PRIVATE_KEY;


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat:{
      chainId: 31337,
      blockConfirmations:1,
    },
    goeril:{
      chainId:5,
      blockConfirmations:6,
      url: GOERIL_RPC_URL,
      accounts: PRIVATE_KEY,
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
  }
};
