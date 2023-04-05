const data = require('../data').data
const counting = require('../services/counting')

describe('CountingTest', () => {
    it('should display in their name for each country and person the number of people and the number of animals', () => {
        const resultExpected = { 
            name: 'Dillauti [5]',
            people:
            [ 
                { 
                    name: 'Winifred Graham [6]',
                    animals:
                        [ 
                            { name: 'Anoa' },
                            { name: 'Duck' },
                            { name: 'Narwhal' },
                            { name: 'Badger' },
                            { name: 'Cobra' },
                            { name: 'Crow' } 
                        ] 
                },
                { 
                    name: 'Blanche Viciani [8]',
                    animals:
                        [ 
                            { name: 'Barbet' },
                            { name: 'Rhea' },
                            { name: 'Snakes' },
                            { name: 'Antelope' },
                            { name: 'Echidna' },
                            { name: 'Crow' },
                            { name: 'Guinea Fowl' },
                            { name: 'Deer Mouse' } 
                        ] 
                }
            ]
        }
        const result = counting.count(data)
        expect(result[0].name).toEqual(resultExpected.name)
        expect(result[0].people).toEqual(expect.arrayContaining(resultExpected.people))
    });
})