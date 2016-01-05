//
// Tests to explain the usage of scope in javascript
//
// http://dmitrysoshnikov.com/ecmascript/javascript-the-core/

var q = require('q');

var chai = require("chai");
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('scope', function () {

    it('scope nesting', function() {
        var a = 'foo';
        function grandparent() {
            var b = 'bar';
            function parent() {
                function nested() {
                    expect(a).to.eql('foo');
                    expect(b).to.eql('bar');
                }
                nested();
            }
            parent();
        }
        grandparent();
    });

    it('scope nesting with redefining', function() {
        var a = "foo";
        function grandparent() {
            var b = "bar";
            function parent() {
                var b = "b redefined!";
                function nested() {
                    expect(a).to.eql('foo');
                    expect(b).to.eql('b redefined!');
                }
                nested();
            }
            parent();
        }
        grandparent();
    });
    
    it('array should be generated correctly', function () {
        var a = [];
        for (var i = 0; i < 5; i++) {
            a.push(i);
        }
        expect(a).to.eql([0, 1, 2, 3, 4]);
    });
    
    it('array should not be generated correctly', function (done) {
        var a = [];
        for (var i = 0; i < 5; i++) {
            setTimeout(function () {
                a.push(i);
            }, 100);
        }
        setTimeout(function () {
            expect(a).to.eql([5, 5, 5, 5, 5]);
            done();
        }, 1000);
    });
    
    it('array should be generated correctly when using forEach', function (done) {
        var a = [];
        [0, 1, 2, 3, 4].forEach(
            function (element, index, array) {
                setTimeout(function() {
                    a.push(index);
                }, 100);
            }
        );
        setTimeout(function () {
            expect(a).to.eql([0, 1, 2, 3, 4]);
            done();
        }, 1000);
    });
    
    it('array should handle closure', function (done) {
        var promises = [];
        var a = [];
        for (var i = 0; i < 5; i++) {
            (function () {
                var j = i;
                var deferred = q.defer();
                setTimeout(function() {
                    a.push(j);
                    deferred.resolve();
                }, 100);
                promises.push(deferred.promise);
            })();
        }
        q.all(promises).then(function () {
            expect(a).to.eql([0, 1, 2, 3, 4]);
            done();
        });
    });

});
