
const mongojs = require('mongojs')

var Web3 = require('web3')

let web3 = new Web3('ws://localhost:8546');

const mongoInterface = require('./mongo-interface')





module.exports = {

  async init()
  {
    mongoInterface.init('ethwalletbot')
  },


  async generateNewWallet(uid){
    var acct = web3.eth.accounts.create();

    await mongoInterface.insertOne('wallets',{uid: uid, acct: acct})
    //save to mongo

    return acct;
  },

  async deleteWallet(uid){


   var result =   await mongoInterface.deleteMany('wallets',{uid: uid})
    //save to mongo

    return  result;
  },


  async findExistingWalletByUserID(uid)
  {
    //find in mongo
    //var result = await db.ethwallets.findOne({uid:uid})
    var result = await mongoInterface.findOne('wallets',{uid: uid})

      console.log('result',result)

      return result;
  }


}
