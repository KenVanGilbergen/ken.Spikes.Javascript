//
// Tests to show some 'type' conversions
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
//

var chai = require("chai");
var expect = chai.expect;

describe('types', function () {

    it('implicit undefined', function () {
        var a;
        expect(typeof a).to.eq('undefined');
        expect(a).be.undefined;
    });
    
    it('explicit undefined', function () {
        var a = undefined;
        expect(typeof a).to.eq('undefined');
        expect(a).be.undefined;
    });
    
    it('null', function () {
        var a = null;
        expect(typeof a).to.eq('object'); // !! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
        expect(a).be.null;
    });
    
    it('string', function () {
        var a = "foobar";
        expect(typeof a).to.eq('string');
    });
    
    it('number', function () {
        var a = 42;
        expect(typeof a).to.eq('number');
    });
    
    it('boolean', function () {
        var a = true;
        expect(typeof a).to.eq('boolean');
        expect(a).be.true;
    });
    
    it('json', function () {
        var a = { b: "c" };
        expect(typeof a).to.eq('object');
    });
    
    it('array', function () {
        var a = [];
        expect(typeof a).to.eq('object');
        expect(a).be.empty;
    });
    
    it('symbol', function () {
        var a = Symbol("foo");
        var b = Symbol("foo");
        expect(typeof a).to.eq('symbol');
        expect(a === b).be.false;
        expect(a === b).be.false;
    });
    
    it('explicit coercion Number()', function () {
        var a = "42";
        var b = Number(a);
        
        expect(a).to.eql("42");
        expect(b).to.eql(42);
    });
    
    it('explicit coercion String()', function () {
        var a = 42;
        var b = String(a);
        
        expect(a).to.eql(42);
        expect(b).to.eql("42");
    });
    
    it('implicit coercion loose equals', function () {
        var a = "42";
        var b = Number(a);
        
        expect(a == b).be.true;
    });
    
    it('explicit toFixed rounding', function () {
        var number = 12.3456;
        var roundIt = number.toFixed(2);
        expect(roundIt).to.eql("12.35");
    });
    
    it('const from ES2015', function () {
        const c = 12.34;
        expect(c).to.eql(12.34);
    });

});
