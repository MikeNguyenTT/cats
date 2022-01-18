// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    error ? functionToRunWhenThingsAreDone(undefined) : functionToRunWhenThingsAreDone(data)
  });
};

module.exports = breedDetailsFromFile;