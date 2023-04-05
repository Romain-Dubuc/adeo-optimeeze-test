/**
 * This function allows to filter the name of animals with the given filter value 
 * @param {array} data A databank of countries containing people containing animals
 * @param {string} filterValue The value used to filter
 * @returns Countries filtered or null of the array is empty
 */
function filterCoutries(data, filterValue) {
    const newData = data
        .map((country) => mapFilteringCountry(country, filterValue)) // Update country object with the filter value
        .filter(country => country) // Remove null values

    // Check if after the filter there are still countries in the array
    if (newData.length >= 1) {
        // If there are countries, return the array
        return newData
    }

    // If not return a null value
    return null
}

/**
 * This function allows to update country object with the people animals name filtering
 * @param {object} country An object that contains a name and an array of people
 * @param {string} filterValue The value used to filter
 * @returns Country updated or null if the country object no longer contains people
 */
function mapFilteringCountry(country, filterValue) {
    const newPeople = country.people
        .map((person) => mapFilteringPerson(person, filterValue)) // Update person object with the filter value
        .filter(person => person) // Remove null values
    
    // Check if after the update there are still people in the array
    if (newPeople.length >= 1) {
        // If there are people, update the country object
        return {
            ...country,
            people: newPeople
        }
    }
    
    // If not return a null value
    return null
}

/**
 * This function filters the field animals of the person object and updates the person object
 * @param {object} person An object that contains a name and an array of animals
 * @param {string} filterValue The value used to filter
 * @returns Person updated or null if the person object no longer contains animals
 */
function mapFilteringPerson(person, filterValue) {
    const newAnimals = person.animals.filter((animal) => filterAnimal(animal, filterValue))

    // Check if after the update there are still animals in the array
    if (newAnimals.length >= 1) {
        // If there are animals, update the person object
        return {
            ...person,
            animals: newAnimals
        }
    }

    // If not return a null value
    return null
}

/**
 * Check if the animal name contains the filter value
 * @param {object} animal An object that contains the animal name
 * @param {string} filterValue The value used to filter
 * @returns True if the animal name contains the filter value else false
 */
function filterAnimal(animal, filterValue) {
    return animal.name.includes(filterValue)
}

module.exports = {
    filterCoutries
}