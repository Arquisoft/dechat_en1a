// We need to load the assert module
var assert = require('assert');

// We need the chat-form and the chatService
import ChatFormComponent from '../../../../src/app/chatComponents/chat-form/chat-form.component';
import ChatService from '../../../../src/app/services/dechat/chat.service';

// Now we define the tests
describe('Chat-Form', function() { 
    it('Should have an empty message when created', function() {
        var chatForm = new ChatFormComponent(new ChatService());
        assert.equal(chatForm.message, "");
    });  
});