const filtering = require('./services/filtering')
const counting = require('./services/counting')
const parameters = require('./services/parameters')
const data = require('./data').data
const nbrParameters = process.argv.length
let newData = data

// Check if the user executes the program with some parameters
if (nbrParameters < 3 || nbrParameters > 4) {
    console.error('This program must have 1 or 2 parameters (--filter and/or --count)')
    return
}

let programParameters = []
if (nbrParameters === 3) { // If there is only 1 parameter
    programParameters.push(process.argv.pop())
} else if (nbrParameters === 4) { // If There are 2 parameters
    programParameters = process.argv.slice(-2)
}

// Check if the user gives the correct parameters and get the positions of the parameters to use them
const parametersPositions = parameters.check(programParameters)
if (parametersPositions.count === -1 && parametersPositions.filter === -1) {
    return
}

// Execute filtering service
if (parametersPositions.filter >= 0) {
    const filterValue = parameters.filterParameterRegex.exec(programParameters[parametersPositions.filter])[1]
    newData = filtering.filterCoutries(newData, filterValue)
}

// Display new data only if the array is not empty
if (!newData) {
    return
}

// Execute counting service
if (parametersPositions.count >= 0) {
    newData = counting.count(newData)
}

console.dir(newData, { depth: null })