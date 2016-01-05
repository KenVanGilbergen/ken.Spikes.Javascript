//
// Tests to explain the usage of mocha
//
// https://mochajs.org

describe('mocha', function () {
    
    before(function () {
        //console.log('before');
    });

    beforeEach(function () {
        //console.log('beforeEach');
    });

    it('should test something', function () {
        //console.log('test something');
    });

    describe('some testing region', function() {
        
        it('should test something for this region', function () {
            //console.log('test something for this region');
        });

    });
   
    after(function () {
        //console.log('after');
    });

});
