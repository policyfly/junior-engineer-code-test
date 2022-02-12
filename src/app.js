/**
 * Prompt: Implement a function that validates that the input Vehicles have the
 * following shape and all numbers will be sensible integers.
 * 
 * interface Vehicle {
 *   type: 'Truck' | 'Trailer' | 'Tractor'
 *   year: number
 *   value: number
 * }
 * 
 * @param {Vehicle[]} input 
 * @param {number} expectedCost The expected sum cost of all vehicles passed in
 * @param {number} expectedOldestYear The expected minimum year of all vehicles passed in
 * @return {boolean} A boolean indicating whether input matches expected{Cost,Year}
 */

// Implemented this function with the idea that it would give the user feedback of what is missing
function isValid (input, expectedCost, expectedOldestYear) {
  let errorMessage = "";

  // check whether the keys exists within the object
  if (!("type" in input)){
    errorMessage = "Input is missing vehicle type";
    return errorMessage;
  }

  else if (!("year" in input)){
    errorMessage = "Input is missing vehicle year";
    return errorMessage;
  }

  else if (!("value" in input)){
    errorMessage = "Input is missing vehicle value";
    return errorMessage;
  }

  else {
    // Check that the type is valid
    const acceptedValues = ["Truck", "Trailer", "Tractor"];

    if (!(acceptedValues.indexOf(input.type) > -1)){
      errorMessage = "The Vehicle type is incorrect";
      return errorMessage;
    }

    // Check that the year and value are sensible integers
    else if (!Number.isInteger(input.year) || input.year.toString().length !== 4){
      errorMessage = "Vehicle year must be an logical integer";
      return errorMessage;
    }

    else if (!Number.isInteger(input.value)){
      errorMesagge = "Vehicle value must be a logical integer";
      return errorMessage;
    }
    // Check if the input value and year are equal to expectedCost and expectedOldestYear
    else {
      return true ? (input.value === expectedCost) && (input.year === expectedOldestYear) : false
    }
  }
};

// Alternative function which would be cleaner code if user feedback is unnecessary
function isValidAlternative(input, expectedCost, expectedOldestYear){
  const expectedObjectKeys = ["type", "year", "value"];

  const hasAllKeys = expectedObjectKeys.every(item => input.hasOwnProperty(item));

  if (!hasAllKeys){
    throw "Object is missing a required key";
  }

  // Check that the type is valid
  const acceptedValues = ["Truck", "Trailer", "Tractor"];

  if (!(acceptedValues.indexOf(input.type) > -1)){
    throw "The Vehicle type is incorrect";
  }

  // Check that the year and value are sensible integers
  else if (!Number.isInteger(input.year) || input.year.toString().length !== 4){
    throw "Vehicle year must be an logical integer";
  }

  else if (!Number.isInteger(input.value)){
    throw "Vehicle value must be a logical integer";
  }
  // Check if the input value and year are equal to expectedCost and expectedOldestYear
  else {
    return true ? (input.value === expectedCost) && (input.year === expectedOldestYear) : false
  }
}

/**
 * Prompt: Implement a few tests to validate that your function works as expected
 */
function testMissingValueKey(){
  const input = {
    type: 'Vehicle',
    year: 2019
  }

  const expectedResult = "Input is missing vehicle value";

  const functionResult = isValid(input, 20000, 2020);
  return "Test Passed" ? expectedResult === functionResult : "Test Failed";
}

function testMissingTypeKey(input, expectedCost, expectedOldestyear){
  const input = {
    year: 2019,
    value: 20000
  }

  const expectedResult = "Input is missing vehicle type";

  const functionResult = isValid(input, 20000, 2020);
  return "Test Passed" ? expectedResult === functionResult : "Test Failed";
}

function testMissingYearKey(input, expectedCost, expectedOldestyear){
  const input = {
    type: "Vehicle",
    value: 20000
  }

  const expectedResult = "Input is missing vehicle year";

  const functionResult = isValid(input, 20000, 2020);
  return "Test Passed" ? expectedResult === functionResult : "Test Failed";
}

function testInvalidType(input, expectedCost, expectedOldestyear){
  const input = {
    type: "AH-64 Apache Helicopter",
    value: 20000,
    year: 2020
  }

  const expectedResult = "The Vehicle type is incorrect";

  const functionResult = isValid(input, 20000, 2020);
  return "Test Passed" ? expectedResult === functionResult : "Test Failed";
}

function testIncorrectYearLength(input, expectedCost, expectedOldestyear){
  const input = {
    type: "AH-64 Apache Helicopter",
    value: 20000,
    year: 202
  }

  const expectedResult = "Vehicle year must be an logical integer";
  const functionResult = isValid(input, 20000, 2020);
  return "Test Passed" ? expectedResult === functionResult : "Test Failed";
}

function testIncorrectYearType(input, expectedCost, expectedOldestyear){
  const input = {
    type: "AH-64 Apache Helicopter",
    value: 20000,
    year: "2020"
  }

  const expectedResult = "Vehicle year must be an logical integer";
  const functionResult = isValid(input, 20000, 2020);
  return "Test Passed" ? expectedResult === functionResult : "Test Failed";
}

function testIncorrectValueType(input, expectedCost, expectedOldestyear){
  const input = {
    type: "AH-64 Apache Helicopter",
    value: "20000",
    year: 2020
  }

  const expectedResult = "Vehicle value must be an logical integer";
  const functionResult = isValid(input, 20000, 2020);
  return "Test Passed" ? expectedResult === functionResult : "Test Failed";
}

function testCorrectInputAndValidation(input, expectedCost, expectedOldestyear){
  const input = {
    type: "AH-64 Apache Helicopter",
    value: 20000,
    year: 2020
  }

  const expectedResult = true;
  const functionResult = isValid(input, 20000, 2020);
  return "Test Passed" ? expectedResult === functionResult : "Test Failed";
}