const arr = [
    [409, 194, 207, 470, 178],
    [454, 235, 333, 511, 103],
    [474, 293, 525, 372, 408],
    [428, 4321, 2786, 6683, 3921],
    [265, 262, 6206, 2207, 5712]
  ]
  

function max(arr) {
    return arr.reduce(function(a, b){
        return Math.max(a, b)
    })
}

function min(arr) {
    return arr.reduce(function(a, b){
        return Math.min(a, b)
    })
}

function checkSum_1(arr) {
    let checkSum = 0;
    arr.forEach(function(item) {
        checkSum += (max(item) - min(item))
    })
    
    return checkSum
}