const client = require('../../client');
const { DisTube } = require('distube');

//create distube instance
const distube = new DisTube(client, {searchSongs: 5,
                                    searchCooldown: 30,
                                    leaveOnEmpty: true,
                                    leaveOnFinish: true,
                                    leaveOnStop: true,
                                    });



  
module.exports = distube;