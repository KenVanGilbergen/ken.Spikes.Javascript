//
// Tests to show working of arrays
//

var chai = require("chai");
var expect = chai.expect;

describe('array', function () {
   
    it('push - add as last item', function () {
        var a = [1, 2];
        a.push(3);
        expect(a).to.eql([1, 2, 3]);
    });
    
    it('pop - remove last item', function () {
        var a = [1, 2, 3];
        expect(a.pop()).to.eql(3);
        expect(a).to.eql([1, 2]);
    });
    
    it('unshift - insert as first item', function () {
        var a = [1, 2];
        a.unshift(3);
        expect(a).to.eql([3, 1, 2]);
    });
    
    it('shift - remove first item', function () {
        var a = [1, 2, 3];
        expect(a.shift(3)).to.eql(1);
        expect(a).to.eql([2, 3]);
    });
    
    it('Array.isArray', function () {
        var a = [1, 2, 3];
        var b = 'foo';
        expect(Array.isArray(a)).be.true;
        expect(Array.isArray(b)).be.false;
    });
    
    it('indexOf(searchElement[, fromIndex])', function () {
        var a = [1, 2, 3, 2, 1, "4"];
        expect(a.indexOf(2)).to.eql(1);
        expect(a.indexOf(2,2)).to.eql(3);
        expect(a.indexOf(5)).to.eql(-1);
        expect(a.indexOf(4)).to.eql(-1);

        var lookup = { 12: { foo: 'b' }, 13: { foo: 'a' }, 14: { foo: 'c' } };
        expect(Object.keys(lookup).indexOf(12) > -1).be.false;
        expect(Object.keys(lookup).indexOf('' + 12) > -1).be.true;
    });
    
    it('lastIndexOf(searchElement[, fromIndex])', function () {
        var a = [1, 2, 3, 2, 1];
        expect(a.lastIndexOf(2)).to.eql(3);
        expect(a.lastIndexOf(2,2)).to.eql(1);
        expect(a.lastIndexOf(5)).to.eql(-1);
    });
    
    it('filter(callback[, thisObject])', function () {
        var items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
        items = items.filter(function (item) {
            return (item.id % 2 == 0);
        });
        expect(items).to.eql([{ id: 2 }, { id: 4 }]);
    });

    // forEach(callback[, thisObject])
    // map(callback[, thisObject])
    // reduce(callback[, initialValue])
    // reduceRight(callback[, initialValue])
    // every(callback[, thisObject])

    it('some(callback[, thisObject])', function(done) {
        var types = ['text/html', 'text/css', 'text/javascript'];
        var string = 'text/javascript; encoding=utf-8';
        if (types.some(function(value) {
            return string.indexOf(value) > -1;
        })) {
            // string contains one of the content types.
            done();
        }
    });

    // sort([compareFunction])
    // concat(value1, value2, ..., valueN)
    // join(separator)
    // slice(begin[, end])
    // splice(index [, howMany][,element1[, ...[, elementN]]])
    // reverse

});
