// Write a function that receives list of neighborhoods and then some people, who are going to live in it. 
// The input will come as array of strings. The first element will be the list of neighborhoods separated by ", ". 
// The rest of the elements will be a neighborhood followed by a name of a person in the format:
//  "{neighborhood} - {person}". Add the person to the neighborhood only if the neighborhood is in the list of neighborhoods. 
//  At the end print the neighborhoods sorted by the count of inhabitants in descending order. Print them in the following format: 
// "{neighborhood}: {inhabitants count}
// --{1st inhabitant}
// --{2nd inhabitant}
// …"


function neighborhoods(input) {
    let map = new Map();
    let neighborhoods = input.shift().split(', ');
  
    for (let neighborhood of neighborhoods) {
      map.set(neighborhood, []);
    }
  
    while (input.length > 0) {
      let current = input.shift().split(' - ');
      let neighborhood = current[0];
      let person = current[1];
      if (neighborhoods.includes(neighborhood)) {
        map.get(neighborhood).push(person);
      }
    }
  
    let sorted = Array.from(map)
      .sort((a, b) => {return b[1].length - a[1].length;});
  
    for (let neighborhood of sorted) {
      let neighborhoodName = neighborhood[0];
      let persons = neighborhood[1];
      console.log(`${neighborhoodName}: ${persons.length}`);
      for (let j = 0; j < persons.length; j++) {
        console.log(`--${persons[j]}`);
      }
    }
  }

  neighborhoods(['Abbey Street, Herald Street, Bright Mews',
  'Bright Mews - Garry',
  'Bright Mews - Andrea',
  'Invalid Street - Tommy',
  'Abbey Street - Billy']
  )