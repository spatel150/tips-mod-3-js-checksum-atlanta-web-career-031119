const data = [
    [409, 194, 207, 470, 178],
    [454, 235, 333, 511, 103],
    [474, 293, 525, 372, 408],
    [428, 4321, 2786, 6683, 3921],
    [265, 262, 6206, 2207, 5712]
  ]
  

function checkSum(data) {

    let num = Math.floor(Math.abs(num))

    while (num > 0) {
        checkSum += num % 10;
        num = Math.floor(num / 10)
    }

    return checkSum;

}

checkSum(data)