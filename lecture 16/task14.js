const marks = [45, 80, 60, 90, 30];

// Keep marks greater than 50
const filteredMarks = marks.filter(mark => mark > 50);

// Find average
const average =
  filteredMarks.reduce((sum, mark) => sum + mark, 0) / filteredMarks.length;

console.log(filteredMarks);
console.log("Average:", average);