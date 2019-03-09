// We need the chatFormComponent and the chatService
const chatFormComponent = require ('../../../../src/app/chatComponents/chat-form/chat-form.component').ChatFormComponent;
const chatService = require('../../../../src/app/services/dechat/chat.service').ChatService;

// We need to load the assert module
var assert = require('assert');

// Now we define the tests
describe('Chat-Form', function() { 
    it('Should have an empty message when created', function() {
        var chatForm = new chatFormComponent(new chatService());
        assert.equal(chatForm.message, "");
    });  
});
