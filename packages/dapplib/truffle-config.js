require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remember honey hockey enroll fresh spell'; 
let testAccounts = [
"0xe250f525025b7bc68f3190ea9c9bf17814cf2682791ceef4ddfaf3e7170f6d22",
"0x821d8d784a9e762e3d9ce7159ce53177006a84927e2cf20a16de2410376340ed",
"0x5fbf79ab62f8c4bd7ad84668267c6ea0fbf483683a69050c8a7b45486d8e471d",
"0xfb7818d082a1f1ad4cabb9f74d57222aaff9b5d9d41d5bfc1391e7671c9ef213",
"0x4456de3299ca3fad58d756bd80da22f50ec7b40214f1e156edcbe9fbcd255ae2",
"0x1bca272bf30e57fa21ee1e4060f1e5dcc0842fed81002726e52101501087b029",
"0x4eedc84caf69acbc1465f624ecced3f2a49c23c1ffc241f8f0b831bc553bc62f",
"0xc1fa2f56db779665d53ef74d7f64be78a57fbe8bf826c9ab895aa10c14fcbb63",
"0xa92959ef1121e782e7cba5f42041a0978b28f63b125a569e2cb8fcb4c4803057",
"0xe8e84d6ee864894b69d8f180c53bf15b4b7074e4c492c2b1ce756a55cc2bfa5c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

