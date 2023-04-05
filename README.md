# Javascript developer test

## Commands

To filter on animal names you can use this command :
```shell script
$ node app.js --filter=<Filter value>
```

To display the number of people each country has and the number of animals each person has, you can use this command :
```shell script
$ node app.js --count
```

You can also use `--count` and `--filter` parameters at the same time, like this :
```shell script
$ node app.js --count --filter=ry
```

To execute tests, you have to get project libs, if you don't have it use this command :
```shell script
$ npm ci
```
And after you can execute tests with this one :
```shell script
$ npm test
```

## Project structure

### App.js

`App.js` is the entry point of this project, its job is to check the given parameters and execute the correct service

### Services

The `services` directory contains all methods to filter/count the data and the method to check parameters

### Tests

This directory contains all the tests of this project

## Subject

### Filter

Your job is to write a command-line interface in Node.js. 
This program has to filter a list of elements containing a pattern.

Details:
- In the following file `data.js`, there are `Countries` containing `People` containing `Animals`.
- Only animals containing the pattern passed as argument (e.g. `ry`) are displayed. The order should be kept intact.
- Empty array after filtering are NOT returned.

Sample of running the command, and its output:

```shell script
$ node app.js --filter=ry
[
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
```

### Count

The next goal is to print the counts of People and Animals by counting the number of children and appending it in the name, eg. `Satanwi [2]`.

Sample of running the command, and its output:

```shell script
node app.js --count
[ { name: 'Dillauti [5]',
    people:
     [ { name: 'Winifred Graham [6]',
         animals:
          [ { name: 'Anoa' },
            { name: 'Duck' },
            { name: 'Narwhal' },
            { name: 'Badger' },
            { name: 'Cobra' },
            { name: 'Crow' } ] },
       { name: 'Blanche Viciani [8]',
         animals:
          [ { name: 'Barbet' },
            { name: 'Rhea' },
            { name: 'Snakes' },
            { name: 'Antelope' },
            { name: 'Echidna' },
            { name: 'Crow' },
            { name: 'Guinea Fowl' },
            { name: 'Deer Mouse' } ] },
      ...
...
]
```

### Requirements

- The code must be available in a GIT repository
- No library/modules should be used, except for the testing library

### Appreciation

We will be really attentive to:

- Code readability, structure and consistency
- Tests, and how they are written
