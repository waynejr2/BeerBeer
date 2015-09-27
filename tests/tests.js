/**
 * Created by wayne on 9/23/2015.
 * description:  ridiculous
 */

var should = require ('should');
var assert = require ('assert');

describe ('Test Framework', function () {
    it ('should have mocha installed and running.', function () {
        assert.equal (true, true );
    })
    it ('should have the should library installed and running for fluent testing', function () {
        true.should.eql (true);
    })
})

describe ('Asynchronous testing', function () {

    var result = false;

    beforeEach (function (done) {
        setTimeout (function () {
            result = true;
            //complete the async beforeEach
            done ();
        }, 200);
    });

    it ('should NOT be so are so this makes it easier', function (done) {
        result.should.eql (true);
        done ();
    })
})