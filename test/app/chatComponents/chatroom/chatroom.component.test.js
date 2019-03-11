// We need the ChatroomComponent and the ChatService modules
var chatComp = require('src/app/chatComponents/chatroom/chatroom.component');
var cServ = require('src/app/services/dechat/chat.service');

// We need to load the assert module
var assert = require('assert');

// Now we define the tests
describe('Chatroom', function() { 
    it('Should have an atribute ready, that confirms that it has been well created', function() {
        var chatroom = new chatComp.ChatroomComponent(new cServ.ChatService());
        assert.equal(chatroom.ready, true);
    });  
});
