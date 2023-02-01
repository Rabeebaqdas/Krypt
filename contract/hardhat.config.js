

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0', // solidity version of smart contract
  networks : {
    ropsten : {
      url :"https://eth-ropsten.alchemyapi.io/v2/ALCHEMY_API_KEY", // alchemy url for the deployment of smart contract
      accounts : [''] //private key
    }
  }
}
