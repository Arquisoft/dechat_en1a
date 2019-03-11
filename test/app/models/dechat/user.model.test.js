// We need the User model class
const user = require('../../../../src/app/models/dechat/user.model').User;

// We need to load the assert module
var assert = require('assert');

// Now we define the tests
describe('User', function() { 
    it('Should have the same username as the one given as a parameter', function() {
        var testUser = new user("TestUser");
        assert.equal(testUser.userName, "TestUser");
    });  

    it('Should be created with Dummy username as default', function() {
        var testUser = new user();
        assert.equal(testUser.userName, "Dummy");
    });  
});
