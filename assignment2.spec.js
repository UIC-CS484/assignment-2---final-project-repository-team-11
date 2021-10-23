
var testingFunction = require('./routes/submit.js');


describe("testing assignment2 strength of password functionality", ()=>{
    
    
    //Testing the strength of a password
    test("Testing strength of password ",  ()=>
    {
        var value = testingFunction.validate("xyZ123_r");
        expect(value).toMatch("true");
    });
    
    //Erraneous Input
    test("Entering an incorrect password", ()=>{
    
        var value = testingFunction.validate("weakPassword");
        expect(aValue).toMatch("false");
    })

});