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
    it ('should have the shoud library installed and running for fluent testing', function () {
        true.should.eql (true);
    })
})