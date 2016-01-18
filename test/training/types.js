//
// Tests to show some 'type' conversions
//
// http://www.ecma-international.org/ecma-262/5.1/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// http://es6-features.org/#SymbolType
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
        var obj = {
            a: 'foobar',
            b: 42
        };
        expect(typeof obj).to.eq('object');
        var b = "a";
        expect(obj[b]).to.eq('foobar');
        expect(obj["b"]).to.eq(42);
    });
    
    it('array', function () {
        var a = [];
        expect(typeof a).to.eq('object');
        expect(a).be.empty;
    });
    
    it('function', function () {
        var foo = function() { return 42; };
        expect(typeof foo).to.eq('function');
        expect(foo).be.function;
        expect(typeof foo()).be.number;
        expect(typeof foo.bar).be.string; // since foo is a function you can add properties, doesn't mean you should.
    });
   
    it('explicit coercion with String()', function () {
        var a = 42;
        var b = String(a);
        
        expect(a).to.eql(42);
        expect(b).to.eql("42");
    });
    
    it('explicit coercion with Number()', function () {
        var a = "42";
        var b = Number(a);
        
        expect(a).to.eql("42");
        expect(b).to.eql(42);
    });
    
    it('implicit coercion with Number()', function () {
        var a = "42";
        var b = a * 1;
        
        expect(b).be.number;
        expect(b).to.eql(42);
    });
    
    it('implicit coercion loose equals', function () {
        var a = "42";
        var b = Number(a);
        
        expect(a == b).be.true;
    });
    
    it('explicit rounding with toFixed()', function () {
        var number = 12.3456;
        var roundIt = number.toFixed(2);
        expect(roundIt).to.eql("12.35");
    });
    
    it('falsy coercion Boolean()', function () {
        expect(false).be.false;
        expect(Boolean('')).be.false;
        expect(Boolean(0)).be.false;
        expect(Boolean(-0)).be.false;
        expect(Boolean(NaN)).be.false;
        expect(Boolean(null)).be.false;
    });
    
    it('truthy coercion Boolean()', function () {
        expect(true).be.true;
        expect(Boolean('foo')).be.true;
        expect(Boolean(42)).be.true;
        expect(Boolean([])).be.true;
        expect(Boolean([1,2])).be.true;
        expect(Boolean({})).be.true;
        expect(Boolean({ a: 42 })).be.true;
        expect(Boolean(function foo() {})).be.true;
    });
    
    it('equality for value and coercion - loose', function () {
        expect("42" == 42).be.true;
        expect("42" == "42").be.true;
    });
    
    it('equality for value only - strict', function () {
        expect("42" === 42).be.false;
        expect("42" === "42").be.true;
    });
    
    it('const from ES2015', function () {
        const a = 12.34;
        expect(a).to.eql(12.34);
        expect(typeof a).to.eq('number');
    });
    
    it('symbol from ES2015', function () {
        var a = Symbol("foo");
        var b = Symbol("foo");
        expect(typeof a).to.eq('symbol');
        expect(a == b).be.false;
        expect(a === b).be.false;
    });

});
