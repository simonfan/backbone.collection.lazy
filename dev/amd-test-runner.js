/**
 * This script loads the test configurations from a separate file
 * and then loads each of the tests.
 */

console.log('Loading BackboneCollectionLazy qUnit configurations.');

define(['text!amd-test-config.json','underscore'], function(testConfigString, undef) {

    console.log('Loading BackboneCollectionLazy qUnit tests.');

    var config = JSON.parse(testConfigString),

        // the tests base url
        testsBaseUrl = config.testsBaseUrl || 'tests',

        // map the test names to array of test urls.
        tests = _.map(config.tests, function(testName, index) {
            return testsBaseUrl + '/' + testName;
        });

    // require the tests
    return require(tests, function() {
        console.log('Initializing BackboneCollectionLazy qUnit tests.');

        // tests were already run in the main tests file

        // QUnit was set not to autostart inline in tests.html
        // finally start the QUnit engine.
        QUnit.load();

        // after all tests have been loaded, run each of them in the order they were defined.
        _.each(arguments, function(testcase, index) {
            testcase();
        });


        QUnit.start();


    })
});
