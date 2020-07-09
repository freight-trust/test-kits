const ethers = require('ethers')
const admin = new ethers.Wallet('<____WALLET____>')
admin.signMessage('Authentification nonce').then(signature =>{
  console.log(signature)
}).catch(error => {
  console.log(error)
})
