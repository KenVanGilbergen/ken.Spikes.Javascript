//
// Tests to show some v8 weirdness, but still according to the standard
//

var chai = require("chai");
var expect = chai.expect;

describe('v8', function () {

    it('V8 sorts properties in numeric order', function() {
        var a = [];
        var dummy = { 'foo': '"bar', '2': '2', '1': '1' };
        for (var i in dummy) {
            a.push(i);
        };
        expect(a).to.eql(['1', '2', 'foo']);
    });
    
    it('V8 keeps order when using an array', function () {
        var a = [];
        var dummy = [{ 'key': 'bar' } , { 'key': '2' }, {'key': '1' } ];
        for (var i in dummy) {
            a.push(dummy[i].key);
        };
        expect(a).to.eql(['bar', '2', '1']);
    });

});
