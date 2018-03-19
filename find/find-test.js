import { expect } from 'chai';

describe('find tests', () => {
  it.skip('should find the correct string in the array', () => {
    const collectionOfNames = [ 'leta', 'cody', 'yung-jhun', 'brittany'];

    // your code goes here
    
    expect(foundName).toEqual('leta');
  });

  it.skip('should find the correct number within the array', () => {
    const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7 ];

    // your code goes here
  
    expect(correctNumber).toEqual(7);
  });
  
  it('should return the correct object', () => {
    const [ {
              name: 'leta', 
              clone: true
              alter-ego: {
                name: 'letacodes'
              }, 
            },
            { 
              name: 'leta', 
              clone: false
              alter-ego: {
                name: 'letacodes'
              }, 
            },
            {
              name: 'yung-jhun', 
              clone: true
              alter-ego: {
                name: 'suxatcoding'
              }, 
            },  
            {
              name: 'brittany', 
              clone: false, 
              alter-ego: {
                name: 'metal-brittany'
              }
            }
          ]

    // your code goes here
    
    expect(realLeta).to.deep.equal({ 
              name: 'leta', 
              clone: false
              alter-ego: {
                name: 'letacodes'
              }, 
            })
  })
});
