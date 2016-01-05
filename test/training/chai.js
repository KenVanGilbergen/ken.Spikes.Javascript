//
// Tests to explain the usage of chai
//
// http://chaijs.com/
// http://chaijs.com/plugins/chai-as-promised

var q = require('q');

var chai = require("chai");
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chaiJsonEqual = require('chai-json-equal');
chai.use(chaiJsonEqual);

describe('chai', function () {
    
    it('should expect number correctly', function () {
        expect(42).to.eql(42);
    });
    
    it('should expect error', function () {
        expect(function() { throw 'foo'; }).to.throw();
    });

    describe('eql vs equal', function() {
        
        it('should expect number correctly', function () {
            expect(42).equal(42);
        });

        it('should expect object to contain similar values', function() {
            var foobar = { 'foo': 'bar' };
            var anotherFoobar = { 'foo': 'bar' };
            expect(foobar).to.eql(anotherFoobar);
        });

        it('should expect objects to be the same', function() {
            var foobar = { 'foo': 'bar' };
            var anotherFoobar = { 'foo': 'bar' };
            expect(foobar).not.equal(anotherFoobar);
            expect(foobar).equal(foobar);
        });

    });

    describe('defined vs undefined', function() {
        
        it('should not be defined', function () {
            expect(typeof never_declared).to.eq('undefined');
        });

        it('should not be defined more strict', function() {
            expect((typeof twinky === 'undefined') || twinky === null).be.true;
        });

    });
    
    describe('promises', function () {
        
        var doSomethingAsync = function (fail) {
            var deferred = q.defer();
            setTimeout(function () {
                if (fail) deferred.reject(new Error('failed deferred'));
                else deferred.resolve('foo');
            }, 100);
            return deferred.promise;
        }
        
        it('should work with promises', function (done) {
            doSomethingAsync().then(
                function (result) {
                    expect(result).to.eql('foo');
                    done();
                },
                function (err) {
                    done(err);
                }
            );
        });
        
        it('should work with promises when error', function (done) {
            doSomethingAsync(true).then(
                function() { done(new Error('promised should have failed')); },
                function(err) {
                    expect(err.message).to.eql('failed deferred');
                    done();
                });
        });
        
        it('should work with chai-as-promised', function (done) {
            expect(doSomethingAsync()).to.eventually.eql('foo').notify(done);
        });
        
    });

    describe('json', function() {
        
        var json = { '0': 'a', '1': 'b', '2': 5 };
        var jsonSame = { '0': 'a', '1': 'b', '2': 5 };
        var jsonAnother = { '0': 'd', '1': 'b', '2': 3 };

        it('eql', function() {
            expect(json).to.eql(jsonSame);
            expect(json).not.to.eql(jsonAnother);
        });

        it('chai-json-equal', function() {
            expect(json).jsonEqual(jsonSame);
            expect(json).not.jsonEqual(jsonAnother);
        });

    });

});
