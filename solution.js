const data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

/* --- ES5 / Easier --- */
function checksum (data) {
	var result = 0;

	for (var row of data) {
		var sortedRow = row.slice().sort((a, b) => a - b);
		var min = sortedRow[0];
		var max = sortedRow[sortedRow.length -1];
		var difference = max - min;
		result += difference;
	}
	
	return result;
}


/* --- ES6 / Harder --- */
const minMax = row => {
	const sortedArray = row.slice().sort((a, b) => a - b)
	const min = sortedArray[0]
	const max = sortedArray[sortedArray.length - 1]
	return { min, max }
}

const diff = ({ min, max }) => max - min

const checksum = data =>
	data.reduce((acc, row) => acc + diff(minMax(row)), 0)

// answer: 13131
checksum(data)
