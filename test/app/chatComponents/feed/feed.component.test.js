// We need the ChatHeaderComponent and the ChatService modules
var feedComp = require('src/app/chatComponents/feed/feed.component');
var cServ = require('src/app/services/dechat/chat.service');

// We need to load the assert module
var assert = require('assert');

// Now we define the tests
describe('Feed', function() { 
    it('The attribute ready must be true when created', function() {
        var feed = new feedComp.feedComponent(new cServ.ChatService());
        assert.equal(feed.ready, true);
    });  
});
