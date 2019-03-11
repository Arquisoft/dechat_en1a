// We need the ChatFormComponent and the ChatService modules
const cFormComp = require('../../../../src/app/chatComponents/chat-form/chat-form.component').ChatFormComponent;
const cServ = require('../../../../src/app/services/dechat/chat.service').ChatService;

// We need to load the assert module
var assert = require('assert');

// Now we define the tests
describe('Chat-Form', function() { 
    it('Should have an empty message when created', function() {
        var chatForm = new cFormComp(new cServ());
        assert.equal(chatForm.message, "");
    });  
});
