//
// Tests to explain the usage of jsons
//

var q = require('q');

var chai = require("chai");
var expect = chai.expect;
chaiJsonEqual = require('chai-json-equal');
chai.use(chaiJsonEqual);

describe('json', function () {
    
    var dummy = { hello: 'world', data: [1, 2, 3] };
    var jsonString = '{"hello":"world","data":[1,2,3]}';

    it('JSON.stringify', function () {
        expect(jsonString).to.eql(JSON.stringify(dummy));
    });
    
    it('JSON.parse', function () {
        expect(JSON.parse(jsonString)).to.eql(dummy);
    });
    
    it.skip('jsonEqual', function () {
        expect(jsonString).to.jsonEqual(dummy);
    });

});
