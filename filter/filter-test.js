import 'locus'
import { expect } from 'chai'
describe('filter tests', () => {

  it.skip('should return a new array of only even numbers ', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // your code goes here
    
    expect(results).to.deep.equal([2, 4, 6, 8, 10]);
  });

  it.skip('should return a new array of only odd numbers ', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
    // your code goes here
    
    expect(results).to.deep.equal([1, 3, 5, 7, 9]);
  });

  it.skip('should return a new array of words with three characters', () => {
    const words = ["pill", "bad", "finger", "cat", "blue", "dog", "table", "red"];

    // your code goes here
    
    expect(results).to.deep.equal(["bad", "cat", "dog", "red"]);
  });

  it.skip('should return a new array of arrays', () => {
    const elements = ["CAT", ["dog"], 23, [56, 3, 8], "AIMLESS", 43, "butter"];

    // your code goes here
    
    expect(results).to.deep.equal([["dog"], [56, 3, 8]]);
  });

  it.skip('should a new object with cool song 2 removed', () => {
    const human = {
                    name: 'yung-jhun', songs:[['cool song 1', 50], 
                                              ['cool song 2', 100], 
                                              ['cool song 3', 90]] 
                  };

    const saying = 'cool song 2';

    //your code goes here
    
    expect(human.songs).to.deep.equal([['cool song 1', 50], 
                                       ['cool song 3', 90]]);
  });

  it.skip('should filter message based off of strings from user ', () => {
    const userString = 'su';
    const messages = [{ user:'louisa', message: 'haaaaa' },
                      { user:'yung-jhun', message: 'kewl dude' },
                      { user: 'alter-nate', message:'suh kewl' },
                      { user:'meeka', message: 'adfasuhlkj' },
                      { user: 'robbie', message: 'im loud' }];

    // your code goes here


    expect(results).to.deep.equal([{ user: 'alter-nate', message:'suh kewl' },
                                   { user:'meeka', message: 'adfasuhlkj' },
                                   { user: 'robbie', message: 'im loud' }]);
  });

  it.skip('should return a new array with the correct ids', () => {
    const data = [{ account: 'person 1', id: '00112' },
                  { account: 'person 2', id: '00045' },
                  { account: 'person 3', id: '12309' },
                  { account: 'person 4', id: '55931' },
                  { account: 'person 5', id: '90215' }];

    const ids = ['00112', '90215', '12309'];

    // your code goes here

    expect(results).to.deep.equal([{ account: 'person 1', id: '00112'},
                                   { account: 'person 3', id: '12309'},
                                   { account: 'person 5', id: '90215'}]);
  });
});
