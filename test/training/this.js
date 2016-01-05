//
// Tests to explain the usage of this in javascript
//
// http://book.mixu.net/node/ch4.html
// http://stackoverflow.com/questions/2698831/that-self-or-me-which-one-to-prefer-in-javascript
// http://ngauthier.com/2012/04/var-self-equals-lame.html

var _ = require('lodash-node');
var expect = require('chai').expect;

describe('this', function () {
    
    it('when wrongly scoped should return not defined on timeout', function (done) {
        var obj = {
            id: 'whatever',
            printId: function () {
                expect(typeof this.id).to.eq('undefined');
                done();
            }
        };
        setTimeout(obj.printId, 100);
    });
    
    it('when scoped should return id on timeout', function (done) {
        var obj = {
            id: 'whatever',
            printId: function () {
                expect(this.id).equal('whatever');
                done();
            }
        };
        setTimeout(_.bind(obj.printId, obj), 100);
    });
    
    it('when wrongly scoped should return not defined', function (done) {
        var obj = {
            id: 'whatever',
            printId: function () {
                expect(typeof this.id).to.eq('undefined');
                done();
            }
        };
        var callback = obj.printId;
        callback();
    });

    it('when scoped should return id', function (done) {
        var obj = {
            id: 'whatever',
            printId: function () {
                expect(this.id).equal('whatever');
                done();
            }
        };
        var callback = function () { obj.printId(); };
        callback();
    });

    it('when using this correctly it should return item', function (done) {
        var obj = {
            items: ["an-item"],
            process: function() {
                var me = this; // me is less characters and more safe when there is a global window object
                this.items.forEach(function(item) {
                    me.print(item);
                });
            },
            print: function (item) {
                expect(item).equal('an-item');
                done();
            }
        };
        obj.process();
    });

});
