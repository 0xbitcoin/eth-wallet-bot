
const mongojs = require('mongojs')

var Web3 = require('web3')

let web3 = new Web3('ws://localhost:8546');

const db = mongojs('ethwalletbot', ['ethwallets'])


module.exports = {


  async generateNewWallet(uid){
    var acct = web3.eth.accounts.create();

    await db.insert({uid: uid, acct: acct})
    //save to mongo

    return acct;
  }


  async findExistingWalletByUserID(uid)
  {
    //find in mongo
    var result = await db.findOne({uid:uid})
    console.log('existing',result)
  }


}
