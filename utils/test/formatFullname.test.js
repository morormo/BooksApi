const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(20)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
});

it('should return an error if "fullName" has less or more than two words', () => {
    expect(formatFullname('Lorem')).to.equal('Error');
    expect(formatFullname('Lorem Ipsum Dolor')).to.equal('Error');        
});

it('should return correct output for "fullname" arg that consists of two words', () => {
    expect(formatFullname('Lorem Ipsum')).to.equal('Lorem Ipsum');
    expect(formatFullname('LOREM IPSUM')).to.equal('Lorem Ipsum');
    expect(formatFullname('lorem ipsum')).to.equal('Lorem Ipsum');
});
});