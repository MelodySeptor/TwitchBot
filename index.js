require('./Loader/loaderManager.js')
var tmi = require('tmi.js')

//Options of channel
var options = {
    options:{
        debug: true
    },
    connection:{
        cluster:"aws",
        reconnect:true
    },
    identity:{
        username: "melody_septor",
        password: ""
        //http://twitchapps.com/tmi/
    },
    channels: ["melody_septor"]
}

//Start bot
var client = new tmi.client(options)
client.connect()

//Action to do on chat
client.on('chat', function(channel, user, message, self){
    console.log(user)
    if(message=="test"){
        client.action("melody_septor", "link aqui")
    }
    client.action("melody_septor", user['display-name'] + "test message with user")
})

//Action while its connected
client.on('connected', function(adress, port){
    client.action("melody_septor", "Bot connected.")
})