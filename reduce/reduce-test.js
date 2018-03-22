import 'locus'
import { expect } from 'chai'

describe('map tests', () => {

  it.skip('should add all the numbers together', () => {
    const numbers = [32, 1, 21, 5, 81, 333];

    // your code goes here
    
    expect(results).to.equal(473);
  });

  it.skip('should subtract all the numbers', () => {
    const numbers = [28, 12, 38, 1, 91];
    
    // your code goes here
    
    expect(results).to.equal(-170);
  });

  it.skip('should multiply a list of numbers', ()=> {
    const numbers = [2, 3, 5, 7];

    //initial value is 1
    //Your code goes here
  
    expect(results).to.equal(210);
  });

  it.skip('subtrack the smallest number' , () => {
    const elements = [[8, 5, 3], [1, 9, 11], [4, 7, 2], [19, 34, 6]];

    // initial value is going to be 100
    // your code goes here
    
    expect(results).to.equal(88);
  });

  it.skip('all second values add together', () => {
    const elements = [["a", 1], ["b", 9], ["c", 21]];

    // your code goes here
    
    expect(results).to.equal(31);
  });

  it.skip('divide 560 by a set of numbers ', () => {
    const numbers = [2, 2, 2, 5, 7];

    // inital value is 560
    // your code goes here
  
    expect(results).equal(2);
  });

  it.skip('capitalize keywords in a phrase', () => {
    const keywords = ["fish", "blue"];
    const saying = 'one fish two fish red fish blue fish';

    // your code goes here
    
    expect(results).to.equal('one FISH two FISH red FISH BLUE FISH');
  });

  it.skip('find smallest key and value inside of the object', () => {
    const arrayOfObjects = { a: 100, b: 200, c: 300, d: 600 };

    // your code goes here
    
    expect(smallestValue).to.deep.equal({a:100});
  });
});