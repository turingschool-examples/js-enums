require('mocha')
const expect = require('chai').expect

describe('map tests', () => {

  it('test you can upcase all strings' , () => {
    let words = ['meeka', 'jhun', 'brenna', 'steve']
    let upperCaseWords = words.map((word) => {
      return word.toUpperCase()
    })
    expect(upperCaseWords).to.deep.equal(['MEEKA','JHUN','BRENNA', 'STEVE'])
  })

  it.skip('should allow you to allow you to double numbers', () => {
    let numbers = [1,2,3,4,5,6]

    let doubleNumbers = numbers.map((number)=> {
      // your code goes here
    })
    expect(doubleNumbers).to.deep.equal([2,4,6,8,10,12]);
  });

  it.skip('should square the numbers', () => {
    let numbers = [1,2,3,4,5,6]

    // your code goes here

    expect(squareNumbers).to.deep.equal([1,4,9,16,25,36]);
  })

  it.skip('should reverse the strings', () => {
    let strings = ["alice", "bob", "charlie", "david", "eve"]

    // your code goes here.

    expect(reverseStrings).to
    .deep
    .equal(["ecila", "bob", "eilrahc", "divad", "eve"])
  })

  it.skip('should add key of swag to every  object', () => {
    let  arrayOfObjects = [{name:'jhun'}, {name: 'louisa'}]

    // your code goes here

    expect(newObjects[0].swag).to.deep.equal(true)
    expect(newObjects[1].swag).to.deep.equal(true)
  })

  it.skip('should return an array with the last letter of each string', () => {
    let names = ['meeka', 'jhun', 'brenna', 'steve']

    // your code goes here

    expect(lastLetters).to.deep.equal(['a', 'n', 'a', 'e'])
  });

  it.skip('should transform a large object into an array of objects', () => {
    let largeObject = {key1: {name: 'jhun', location: 'CA'}, key2: {name: 'brenna', location: 'MN'}, key3:{name: 'louisa', location: 'CO'}}

    // your code goes here
    expect(array).length.equal(3)
    expect(array).to.deep.equal([{id: 'key1', name: 'jhun', location: 'CA'}, {id: 'key2', name: 'brenna', location: 'MN'}, { id: 'key3', name: 'louisa', location: 'CO'}])
  });
});
