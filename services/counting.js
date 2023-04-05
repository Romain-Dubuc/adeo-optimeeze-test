/**
 * This functions allows to count the number of people and the number of animals they have, then write it in the name field
 * @param {array} data A databank of countries containing people containing animals
 * @returns Data updated with the correct numbers
 */
function count(data) {
    return data.map(mapCountingCountry)
}

/**
 * Update the name of the country object with the number of people it has
 * @param {object} country An object that contains a name and an array of people
 * @returns Country updated
 */
function mapCountingCountry(country) {
    const nbrPeople = country.people.length
    return {
        name: country.name + ` [${nbrPeople}]`,
        people: country.people.map(mapCountingPerson)
    }
}

/**
 * Update person name with the number of animals they own
 * @param {object} person An object that contains a name and an array of animals
 * @returns Person updated
 */
function mapCountingPerson(person) {
    const nbrAnimals = person.animals.length
    return {
        ...person,
        name: person.name + ` [${nbrAnimals}]`
    }
}

module.exports = {
    count
}