//
// Tests to explain the usage of object
//

var q = require('q');

var chai = require("chai");
var expect = chai.expect;
chaiJsonEqual = require('chai-json-equal');
chai.use(chaiJsonEqual);

describe('object', function () {
    
    it('Object.keys(obj)', function () {
        var keys = Object.keys({ a: 'foo', b: 'bar' });
        expect(keys).to.eql(['a','b']);
        expect(keys.length).to.eql(2);
    });
    
    function Obj() {
        this.a = "value";
        this.b = false;
    };
    Obj.prototype.c = 'proto';
    var obj = new Obj();

    it('existence of properties', function() {
        expect(!!obj.nonexistent).be.false;
        expect(!!obj.a).be.true;
        expect(!!obj.b).be.false; // !
        expect(!!obj.c).be.true;
        expect(!!obj.toString).be.true;
    });
    
    it('in obj will check prototype', function () {
        expect('nonexistent' in obj).be.false;
        expect('a' in obj).be.true; 
        expect('b' in obj).be.true; 
        expect('c' in obj).be.true; 
        expect('toString' in obj).be.true;
    });
    
    it('hasOwnProperty will not check prototype', function () {
        expect(obj.hasOwnProperty('nonexistent')).be.false;
        expect(obj.hasOwnProperty('a')).be.true; 
        expect(obj.hasOwnProperty('b')).be.true; 
        expect(obj.hasOwnProperty('c')).be.false; // !
        expect(obj.hasOwnProperty('toString')).be.false;
    });

    it('function can be defined after calling them', function () {
        doSomething();
        expect(typeof doSomething).to.function;
        function doSomething() { return 'doSomething'; }
    });

    it('variables can not be defined after calling them', function () {
        expect(typeof doSomething).to.eq('undefined');
        var doSomething = function() { return 'doSomething'; };
    });


    it('call vs apply', function() {
        function testDummy(a, b) {
            expect(a).to.eql('a');
            expect(b).to.eql('b');
        }
        var obj1 = { id: "foo" };
        testDummy.call(obj1, 'a', 'b'); 
        var obj2 = { id: "bar" };
        testDummy.apply(obj2, ['a', 'b']); 
    });
    
    it('arguments', function () {
        function testDummy() {
            var expected = { '0': 'a', '1': 'b', '2': 5 };
            expect(arguments).jsonEqual(expected);
            expect(arguments.length).to.eql(3);
            var args = Array.prototype.slice.call(arguments);
            expect(args).to.eql(['a', 'b', 5]);
        }
        testDummy('a', 'b', 5); 
    });
    
    it('apply and arguments', function () {
        function smallest() {
            return Math.min.apply(Math, arguments);
        }
        expect(smallest(123, 42, 999)).to.eql(42);
    });

});
