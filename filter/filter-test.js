import 'locus'
import { expect } from 'chai'
describe('filter tests', () => {

  it.skip('should pick the even numbers ', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(results).to.deep.equal([2, 4, 6, 8, 10]);
  });

  it.skip('should pick the odd numbers ', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(results).to.deep.equal([1, 3, 5, 7, 9]);
  });

  it.skip('should pick words with three characters', () => {
    const words = ["pill", "bad", "finger", "cat", "blue", "dog", "table", "red"];


    expect(results).to.deep.equal(["bad", "cat", "dog", "red"]);
  });

  it.skip('should pick arrays only', () => {
    const elements = ["CAT", ["dog"], 23, [56, 3, 8], "AIMLESS", 43, "butter"];


    expect(results).to.deep.equal([["dog"], [56, 3, 8]]);
  });

  it.skip('should remove specific array from object', () => {
    const human = { name: 'yung-jhun', songs:[['cool song 1', 50], ['cool song 2', 100], ['cool song 3', 90]] };
    const saying = 'cool song 2';

    expect(human.songs).to.deep.equal([['cool song 1', 50], ['cool song 3', 90]]);
  });

  it.skip('should filter based off of strings from user ', () => {
    const userString = 'su';
    const messages = [{ user:'louisa', message: 'haaaaa' },
                      { user:'yung-jhun', message: 'kewl dude' },
                      { user: 'alter-nate', message:'suh kewl' },
                      { user:'meeka', message: 'adfasuhlkj' },
                      { user: 'robbie', message: 'im super loud' }];


    expect(results).to.deep.equal([{ user: 'alter-nate', message:'suh kewl' },
                                   { user:'meeka', message: 'adfasuhlkj' },
                                   { user: 'robbie', message: 'im super loud' }]);
  });

  it.skip('should return the correct ids', () => {
    const data = [{ account: 'person 1', id: '00112' },
                  { account: 'person 2', id: '00045' },
                  { account: 'person 3', id: '12309' },
                  { account: 'person 4', id: '55931' },
                  { account: 'person 5', id: '90215' }];

    const ids = ['00112', '90215', '12309'];

    expect(results).to.deep.equal([{ account: 'person 1', id: '00112'},
                                   { account: 'person 3', id: '12309'},
                                   { account: 'person 5', id: '90215'}]);
  });
});
