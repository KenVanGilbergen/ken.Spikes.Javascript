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
            
            //wallaby.testFramework.ui('tdd');
            wallaby.testFramework.ui('bdd');
            
            wallaby.testFramework.timeout(5000);
            
            // https://mochajs.org/#reporters
            //wallaby.testFramework.reported('tap');
            //wallaby.testFramework.reported('spec');
            //wallaby.testFramework.reported('dot');
            //wallaby.testFramework.reported('list');
            //wallaby.testFramework.reported('progress');
            //wallaby.testFramework.reported('nyan');
            //wallaby.testFramework.reported('xunit');
            wallaby.testFramework.reported('min');
        }
    };
};