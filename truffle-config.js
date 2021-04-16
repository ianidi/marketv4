module.exports = {
  networks: {
     development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  compilers: {
    solc: {
        version: '0.5.12',
        settings: { // See the solidity docs for advice about optimization and evmVersion
            optimizer: {
                enabled: true,
                runs: 100,
            },
            evmVersion: 'byzantium',
        },
    },
  },
};

