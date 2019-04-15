require ('babel-register') ({
    ignore: /node_modules\/(?!openzeppelin-solidity\/test\/helpers)/
});
require ('babel-polyfill');

// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!
module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '1' // Match any network id
        },
        // This network section is needed for travis-ci, do not remove
        ganache: { host: "172.18.0.2", port: 8545, network_id: "*"},
        // This network section is needed for travis-ci, do not remove
        enigma: {
            host: "localhost",
            port: 8546,
            network_id: "3"
        }
    },
compilers: {
    solc: {
      version: "0.4.24" // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
    }
}
