const Discord = require("discord.js");
const config = require("./config.json");


const WalletHelper = require('./wallet-helper.js');




const client = new Discord.Client();

var prefix = '!';


client.on('message', async message   => {


  if (message.content.startsWith(`${prefix}wallet`)) {

      if (message.content === (`${prefix}wallet new`)) {


        //find existing wallet in mongo
        var author_id = message.author.id;
        console.log(author_id)

           var newWalletData = await WalletHelper.findExistingWalletByUserID();

          var newWalletData = await WalletHelper.generateNewWallet();





            try{
              await client.users.cache.get(author_id).send('A new ETH wallet has been generated.  Your Public address is '+newWalletData.address+'.  The Private key for this account is '+  newWalletData.privateKey );
              await message.channel.send('A new ETH wallet has been generated.  Your Public address is '+newWalletData.address+'.  The Private key has been DMed to you.');

            }catch(e){
              await message.channel.send('Could not DM you any wallet information! Edit your Privacy settings for this server to allow DMs.');

            }

        //    message.author.dm_channel.send('A new wallet has been generated.  Your Public address is '+newWalletData.address+'.  The Private key for this account is '+  newWalletData.address );

      }

      if (message.content === (`${prefix}wallet list`)) {
          	message.channel.send('Your wallet list....');
      }

      if (message.content.startsWith(`${prefix}wallet destroy`)) {

      //  var address = message.content.split()

          	message.channel.send('Your wallet list....');
      }

    //  client.users.cache.get('<id>').send('<message>');


  }

});




client.login(config.BOT_TOKEN);

console.log('eth wallet bot running!')

/*
!accounts

!info _____   -> DMs the user
*/
