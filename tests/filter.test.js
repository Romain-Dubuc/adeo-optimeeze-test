const data = require('../data').data
const filtering = require('../services/filtering')

describe('FilteringTests', () => {
    it('should display only animals that containing the pattern passed as an argument', () => {
        const resultExpected = [
            {
              name: 'Uzuzozne',
              people: [
                {
                  name: 'Lillie Abbott',
                  animals: [
                    {
                      name: 'John Dory'
                    }
                  ]
                }
              ]
            },
            {
              name: 'Satanwi',
              people: [
                {
                  name: 'Anthony Bruno',
                  animals: [
                    {
                      name: 'Oryx'
                    }
                  ]
                }
              ]
            }
        ]
        expect(filtering.filterCoutries(data, 'ry')).toMatchObject(resultExpected);
    });
    
    it('should keep the array order intact', () => {
        const resultNotExpected = [
            {
                name: 'Satanwi',
                people: [
                    {
                    name: 'Anthony Bruno',
                    animals: [
                        {
                        name: 'Oryx'
                        }
                    ]
                    }
                ]
            },
            {
              name: 'Uzuzozne',
              people: [
                {
                  name: 'Lillie Abbott',
                  animals: [
                    {
                      name: 'John Dory'
                    }
                  ]
                }
              ]
            },
        ]
        expect(filtering.filterCoutries(data, 'ry')).not.toMatchObject(resultNotExpected)
    });
    
    it('should not return an empty array after filtering', () => {
        expect(filtering.filterCoutries(data, 'toto')).toBeNull();
    });
})