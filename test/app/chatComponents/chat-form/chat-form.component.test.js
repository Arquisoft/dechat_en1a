// We need the ChatFormComponent and the ChatService modules
var cFormComp = require('src/app/chatComponents/chat-form/chat-form.component');
var cServ = require('src/app/services/dechat/chat.service');

// We need to load the assert module
var assert = require('assert');

// Now we define the tests
describe('Chat-Form', function() { 
    it('The attribute ready must be 'true' when created', function() {
        var chatForm = new cFormComp.ChatFormComponent(new cServ.ChatService());
        assert.equal(chatForm.message, "");
    });  
});
