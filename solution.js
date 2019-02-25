const data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

const minMax = array => {
	const sortedArray = array.slice().sort()
	const min = sortedArray[0]
	const max = sortedArray[sortedArray.length - 1]
	return { min, max }
}

const diff = ({ min, max }) => max - min

const checksum = data =>
	data.reduce((acc, row) => acc + diff(minMax(row)), 0)

// answer: 8828
checksum(data)
