/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let result, firstPerson, secondPerson, thirdPerson, PersonsInTriangles = 0, NumberOfPersons = preferences.length;
  
  function checkValidity (person) {
    return (NumberOfPersons >= person) && (person > 0);
  }
  
  for (let i = 0; i < NumberOfPersons; i++) {
    if (checkValidity (preferences[i])) {
      firstPerson = preferences[i]; 
      if (checkValidity (preferences[firstPerson - 1])) {
        secondPerson = preferences[firstPerson - 1];
        if (checkValidity (preferences[secondPerson - 1])) {
          thirdPerson = preferences[secondPerson - 1];
          if ((i + 1) === thirdPerson) {
            PersonsInTriangles++;
          }
        }
      }
    }
  }
  return Math.floor(PersonsInTriangles / 3);
};
