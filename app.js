const filtering = require('./services/filtering')
const data = require('./data').data
const filterParameterRegex = /--filter=(\w+)/
let newData = data

// Check if the user executes the program with a parameter
if (process.argv.length !== 3) {
    console.error('This program must have only 1 parameter (--filter or --count)')
    return
}

// Get the program parameter
const programParameter = process.argv.pop()

// Check if the user gives a correct parameter
if (!programParameter.includes('--filter') && programParameter !== ('--count')) {
    console.error('The parameter must be --filter or --count')
    return
}

// Execute counting service
if (programParameter === '--count') {
    console.log('COUNTING')
    return
}

// Check if the `filter` parameter has correctly filled in
if (!filterParameterRegex.test(programParameter)) {
    console.error('The `filter` parameter must be set with a string (e.g. --filter=ry)')
    return
}

// Execute filtering service
if (filterParameterRegex.test(programParameter)) {
    const filterValue = filterParameterRegex.exec(programParameter)[1]
    newData = filtering.filterCoutries(newData, filterValue)
}

// Display new data only if the array is not empty
if (newData) {
    console.dir(newData, { depth: null })
}