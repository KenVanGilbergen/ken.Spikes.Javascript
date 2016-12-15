// https://hackernoon.com/who-said-javascript-easy-f4a1d5b399b8#.4a0gtez0f

var chai = require("chai");
var expect = chai.expect;

describe('closures', function () {
   
    it('no argument returns now', function () {
	    const greeters = [];
        for (var i = 0; i < 10 ; i++) {
	        greeters.push(function() { return i });
        }

	    expect(greeters[0]()).to.equal(10);
        expect(greeters[1]()).to.equal(10);
        expect(greeters[2]()).to.equal(10);
    });

});
