const filterParameterRegex = /--filter=(\w+)/
const parameterPositionsError = {
    filter: -1,
    count: -1
}

/**
 * This function allows to check if the given parameters are correct
 * @param {string[]} parameters The parameters to check
 * @returns The index of `filter` and/or `count` parameters in the parameters array
 */
function check(parameters) {
    const parameterPositions = {
        filter: -1,
        count: -1
    }

    // For each parameter, check if it's correctly filled in and get its position in the array
    for (let indexParameter in parameters) {
        // Check if the user gives a correct parameter for the filter
        if (parameters[indexParameter].includes('--filter')) {
            // Check if the `filter` parameter has correctly filled in
            if (!filterParameterRegex.test(parameters[indexParameter])) {
                console.error('The `filter` parameter must be set with a string (e.g. --filter=ry)')
                return parameterPositionsError
            }
            parameterPositions.filter = indexParameter
        // Else if check for the count parameter
        } else if (parameters[indexParameter] === ('--count')) {
            parameterPositions.count = indexParameter
        } else {
            console.error('The parameters must be --filter and/or --count')
            return parameterPositionsError
        }
    }

    return parameterPositions 
}

module.exports = {
    check,
    filterParameterRegex
}