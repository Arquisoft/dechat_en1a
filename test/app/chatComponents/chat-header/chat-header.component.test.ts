// We need the ChatHeaderComponent and the ChatService modules
const cHeadComp = require('src/app/chatComponents/chat-header/chat-header.component');
const cServ = require('src/app/services/dechat/chat.service');

// We need to load the assert module
let assert = require('assert');

// Now we define the tests
describe('Chat-Header', function() {
    it('Should have an empty message when created', function() {
        let chatHead = new cHeadComp.ChatHeaderComponent(new cServ.ChatService());
        assert.equal(chatHead.ready, true);
    });
});
