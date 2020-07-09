require('dotenv').config()
const app = require('../../../src/app.js')
const Web3 = require('web3')
const ethers = require('ethers')
app.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/13063608568848709ccbad6633f87fc8'))

const admin = new ethers.Wallet('<____WALLET____>', app.web3)
// Configure the contracts
require('./contract_setup.js')(app, admin, process.env.controller, process.env.master, process.env.nft, process.env.universal)
