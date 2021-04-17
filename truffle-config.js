const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "roast panic stadium average ill manual master pair mind infant decade flame";

module.exports = {
  networks: {
     development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      // gas: 2000000
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/2ac1f90812764b18980c1b16c32734d0")
      },
      network_id: 3
    }
  },
  compilers: {
    solc: {
        version: '0.5.12',
        settings: { // See the solidity docs for advice about optimization and evmVersion
            optimizer: {
                enabled: true,
                runs: 200,
            },
            evmVersion: 'byzantium',
        },
    },
  },
};

