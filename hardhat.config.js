require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.4",
  networks: {
    base: {
      url: "https://mainnet.base.org",
      accounts: ["0xYOUR_PRIVATE_KEY"]
    }
  }
};
