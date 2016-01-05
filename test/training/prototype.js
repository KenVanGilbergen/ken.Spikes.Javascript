//
// Tests to show some prototype chaining vs classical inheritance
//
// Others:
// http://thanpol.as/javascript/Introducing-Inher-Inheritance-at-its-best/

var chai = require("chai");
var expect = chai.expect;
var util = require('util');

describe('prototype', function () {

    it('constructor', function () {
        
        function Foo(bar) {
            this.bar = bar;
            this.baz = 'baz'; 
        }
        Foo.prototype.fooBar = function () { };

        var object = new Foo('lala');
        
        expect(object.bar).to.eql('lala');
        expect(object.baz).to.eql('baz');

    });

    it('static variable', function() {
        
        var staticVariable = 0;
        function Foo() { staticVariable++; };
        Foo.prototype.Count = function() {
            return staticVariable;
        };
        
        var object1 = new Foo();
        expect(object1.Count()).to.eql(1);
        
        var object2 = new Foo();
        expect(object2.Count()).to.eql(2);
        
        expect(object1.Count()).to.eql(2);

    });

    it('primitives are added by value', function () {
        
        var Foo = function (name) { this.name = name; };
        Foo.prototype.data = 1; 
        Foo.prototype.showData = function () { return this.data; };
        
        var foo1 = new Foo("foo1");
        var foo2 = new Foo("foo2");
        expect(foo1.showData()).to.eql(1);
        expect(foo2.showData()).to.eql(1);
        
        foo1.data = 2;
        expect(foo1.showData()).to.eql(2);
        expect(foo2.showData()).to.eql(1);

    });
    
    it('non-primitives are added by reference', function () {
        
        var Foo = function (name) { this.name = name; };
        Foo.prototype.data = [1, 2, 3]; 
        Foo.prototype.showData = function() { return this.data; };
        
        var foo1 = new Foo("foo1");
        var foo2 = new Foo("foo2");
        expect(foo1.showData()).to.eql([1, 2, 3]);
        expect(foo2.showData()).to.eql([1, 2, 3]);
        
        foo1.data.push(4);
        expect(foo1.showData()).to.eql([1, 2, 3, 4]);
        expect(foo2.showData()).to.eql([1, 2, 3, 4]);

    });

    it('private variable', function () {
        
        var Foo = function(name) {
            this.name = name;
            this.data = [1, 2, 3];  
        };
        Foo.prototype.showData = function() { return this.data; };
        
        var foo1 = new Foo("foo1");
        var foo2 = new Foo("foo2");
        expect(foo1.showData()).to.eql([1, 2, 3]);
        expect(foo2.showData()).to.eql([1, 2, 3]);
        
        foo1.data.push(4);
        expect(foo1.showData()).to.eql([1, 2, 3, 4]);
        expect(foo2.showData()).to.eql([1, 2, 3]);

    });
    
    it('inheritance', function() {
        
        function Human(name) {
            this.name = name;
        };
        Human.prototype.bite = function (food) {
            if (!food) food = 'peer';
            return this.name + " bit " + food;
        };

        function Eva() {
            Human.apply(this, Array.prototype.slice.call(arguments));
        };
        Eva.prototype = new Human();
        Eva.prototype.bite = function() {
            return Human.prototype.bite.call(this, 'apple');
        };

        var eva = new Eva("Eve");
        expect(eva.bite()).to.eql('Eve bit apple');
        
        function Adam(name) {
            Human.call(this, name);
        }
        util.inherits(Adam, Human);
        
        var adam = new Adam("Adam");
        expect(adam.bite()).to.eql('Adam bit peer');
    });

});
