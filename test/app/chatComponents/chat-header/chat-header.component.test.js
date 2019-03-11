// We need the ChatHeaderComponent and the ChatService modules
var cHeadComp = require('src/app/chatComponents/chat-header/chat-header.component');
var cServ = require('src/app/services/dechat/chat.service');

// We need to load the assert module
var assert = require('assert');

// Now we define the tests
describe('Chat-Header', function() { 
    it('Should have an empty message when created', function() {
        var chatHead = new cHeadComp.ChatHeaderComponent(new cServ.ChatService());
        assert.equal(chatHead.ready, true);
    });  
});
