require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember mistake hope produce bottom ghost'; 
let testAccounts = [
"0x0b7032f187021db4a35d2dae7724b72ab3505bdb381473946f263a12d27ed0e8",
"0xda5d4cea55462b032cb5f57a3c84d92dbb76c97d13d4259a19dd14c91a0f1014",
"0x05a2a9148d2f0ec10fa049bcd7d8c19db5a2fc5550da2f51d9f210fb5b5debcf",
"0x0de1227ac35c9b71c308769d76f3e2341515284e8cc95a65dfd206dec5edd3ac",
"0x285791042c8ad7aec6e837b60859ce6b460577ecd9d3f92c2f8913517bda0763",
"0x5de4542cfa7377c21061a6b6df01dd79c7e143845a81d7815ca2f83afba5c6b9",
"0x42582d0e71f74c931bd78abcfb6862c783c4d9012af9c68357e4ddc5d95f99e4",
"0x45b081cc0663da3c008bf3eae661d38e9f717c446374b2a07bbbd449586ac35a",
"0x8e7fc6e410fb345371b0f16f2dc7023ffa0fdc1d3473086921367955f8291bad",
"0x0e5a7af441a044a69c0c7cca122bea1f0b44792164943364cbb5a0ccbf69e6f8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
