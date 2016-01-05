//
// Tests to explain the usage of promises with q
//
// https://github.com/kriskowal/q
// https://strongloop.com/strongblog/promises-in-node-js-with-q-an-alternative-to-callbacks/

var q = require('q');

var chai = require("chai");
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('q', function () {
    
    var asyncEcho = function (echo) {
        var deferred = q.defer();
        setTimeout(function () {
            deferred.resolve(echo);
        }, 100);
        return deferred.promise;
    }
    
    var asyncReject = function () {
        var deferred = q.defer();
        setTimeout(function () {
            deferred.reject(new Error('expected rejection'));
        }, 100);
        return deferred.promise;
    }
    
    it('should echo promise', function (done) {
        expect(asyncEcho('Ken')).to.eventually.eql('Ken').notify(done);
    });
    
    it('should reject promise', function (done) {
        expect(asyncReject()).to.be.rejected.notify(done);
    });
    
    it('should reject promise with error', function (done) {
        expect(asyncReject()).to.be.rejectedWith(Error, 'expected rejection').notify(done);
    });

    it('should await both promises', function (done) {
        var ken = asyncEcho('Ken');
        var awesome = asyncEcho('Awesome');
        q.all([ken, awesome]).spread(function (a, b) {
            expect(a + b).to.eql('KenAwesome');
            done();
        });
    });
    
    it('should await both promises', function () {
        var ken = asyncEcho('Ken');
        var awesome = asyncEcho('Awesome');
        return Promise.all([
            expect(ken).to.eventually.eql('Ken'),
            expect(awesome).to.eventually.eql('Awesome')
        ]);
    });
    
});
