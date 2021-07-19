const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((inputedId) => result.push(species.find(({ id }) => id === inputedId)));
  return result;
}

function getAnimalsOlderThan(animal, number) {
  return ((species.find(({ name }) => animal === name))
    .residents.every(({ age }) => age > number));
}

function getEmployeeByName(name) {
  if (name) {
    return employees.find(({ firstName, lastName }) => name === firstName || lastName === name);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(number) {
  return employees.some(({ managers }) => managers.some((element) => element === number));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(animal) {
  if (animal) {
    return species.find(({ name }) => animal === name).residents.length;
  }
  const result = {};
  species.forEach(({ name, residents }) => {
    result[name] = residents.length;
  });
  return result;
}

function calculateEntry(values) {
  if (values === undefined) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = values;
  const priceAdult = Adult * (prices.Adult);
  const priceChild = Child * (prices.Child);
  const priceSenior = Senior * (prices.Senior);
  return (priceAdult + priceChild + priceSenior);
}

function animalsByLocation() {
  const result = {};
  species.forEach(({ location, name }) => {
    if (result[location]) {
      result[location].push(name);
    } else {
      result[location] = [name];
    }
  });
  return result;
}

function getResidents(animal) {
  return species.find(({ name }) => animal === name).residents
    .map(({ name }) => name);
}

function getResidentsBySex(animal, inputedSex) {
  return species.find(({ name }) => animal === name).residents
    .filter(({ sex }) => inputedSex === sex)
    .map(({ name }) => name);
}

function animalsWithNames(object) {
  const animals = { ...object };
  Object.keys(object).forEach((location) => {
    animals[location] = object[location].map((element) => (({ [element]: getResidents(element) })));
  });
  return animals;
}

function animalsSortedByName(object) {
  const animals = { ...object };
  Object.keys(object).forEach((location) => {
    animals[location].forEach((animal, index) => {
      const name = Object.keys(animal)[0];
      const residents = Object.values(animal)[0];
      animals[location][index][name] = residents.sort();
    });
  });
  return animals;
}

function animalsSortedBySex(object, sex) {
  const animals = { ...object };
  Object.keys(object).forEach((location) => {
    animals[location] = object[location].map((element) =>
      (({ [element]: getResidentsBySex(element, sex) })));
  });
  return animals;
}

function getAnimalMap(options) {
  const base = animalsByLocation();
  if (!options || !options.includeNames) {
    return base;
  }
  const { sorted, sex } = options;
  let namedAnimals = animalsWithNames(base);
  if (sex) {
    namedAnimals = animalsSortedBySex(base, sex);
  }
  if (sorted) {
    return animalsSortedByName(namedAnimals);
  }
  return namedAnimals;
}

// const options = { includeNames: true, sorted: true };
console.dir(getAnimalMap(), { depth: null });

function showAllSchedule() {
  const result = {};
  Object.keys(hours).forEach((element) => {
    const { open, close } = hours[element];
    result[element] = `Open from ${open}am until ${close - 12}pm`;
    if (open === 0 || close === 0) {
      result[element] = 'CLOSED';
    }
  });
  return result;
}

function getSchedule(dayName) {
  const schedule = showAllSchedule();
  if (dayName) {
    return { [dayName]: schedule[dayName] };
  }
  return schedule;
}

function getOldestFromFirstSpecies(InputtedID) {
  const firstAnimalId = employees.find(({ id }) => InputtedID === id).responsibleFor[0];
  const residentsInfo = species.find(({ id }) => id === firstAnimalId).residents;
  let oldestOne = residentsInfo[0];
  residentsInfo.forEach((element) => {
    if (element.age > oldestOne.age) {
      oldestOne = element;
    }
  });
  return Object.values(oldestOne);
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((age) => {
    const increase = (((prices[age] / 100) * percentage));
    const finalPrice = Math.ceil((prices[age] + increase) * 100) / 100;
    prices[age] = finalPrice;
  });
  return prices;
}
function getAnimalById(array) {
  return array.map((id) => getSpeciesByIds(id)[0].name);
}

function getEmployeeCoverage(idOrName) {
  const result = {};
  if (idOrName) {
    const employer = employees.find(({ firstName, lastName, id }) => firstName === idOrName
      || lastName === idOrName
      || id === idOrName);
    const { firstName, lastName, responsibleFor } = employer;
    result[`${firstName} ${lastName}`] = getAnimalById(responsibleFor);
  } else {
    employees.forEach(({ firstName, lastName, responsibleFor }) => {
      result[`${firstName} ${lastName}`] = getAnimalById(responsibleFor);
    });
  }
  return result;
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
