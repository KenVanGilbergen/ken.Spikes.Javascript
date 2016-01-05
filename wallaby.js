module.exports = function () {
    return {
        files: [
            //{ "pattern" : "lib/**/lib/*.cs", "instrument": false },
            //{ "pattern" : "lib/**/lib/*.dll", "instrument": false },
            'lib/**/*.js'
        ],
        
        tests: [
            'test/**/*.js'
        ],
        
        env: {
            type: 'node',
            runner: 'node',
            params: {
                runner: '--harmony --harmony_arrow_functions'
            }
        },
        "testFramework": "mocha",
        bootstrap: function (wallaby) {
            var runner = wallaby.testFramework;
            //console.log(runner);

            //runner.ui('tdd');
            runner.ui('bdd');
            
            runner.timeout(5000);
            
            // https://mochajs.org/#reporters
            //runner.reporter('tap');
            //runner.reporter('spec');
            //runner.reporter('dot');
            //runner.reporter('list');
            //runner.reporter('progress');
            //runner.reporter('nyan');
            //runner.reporter('xunit');
            runner.reporter('min');
        }
    };
};