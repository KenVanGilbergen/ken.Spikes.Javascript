var chai = require("chai");
var expect = chai.expect;

describe('replace', function () {
   
    it('will only replace the first match', function () {
        var s = "bob";
        expect(s.replace('b','l')).to.equal('lob');
    });

    it('will replace all matches', function () {
        var s = "bob";
        expect(s.replace(/b/g, 'l')).to.equal('lol');
    });

});
