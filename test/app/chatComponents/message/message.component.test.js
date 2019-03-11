// We need the ChatHeaderComponent and the ChatService modules
var messageComp = require('src/app/chatComponents/message/message.component');
var cServ = require('src/app/services/dechat/chat.service');

// We need to load the assert module
var assert = require('assert');

// Now we define the tests
describe('Message', function() { 
    it('The attribute ready must be 'true' when created', function() {
        var message = new messageComp.feedComponent(new cServ.ChatService());
        assert.equal(message.ready, true);
    });  
});
