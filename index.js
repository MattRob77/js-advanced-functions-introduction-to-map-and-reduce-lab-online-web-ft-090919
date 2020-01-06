// Your code here
function mapToNegativize (arr) {
  let newArr = []
  arr.forEach((num) => {
    newArr.push(num * -1)
  })
  return newArr
}

function mapToNoChange(arr) { 
  return arr 
} 

function mapToDouble (arr) {
    let newArr = []
    arr.forEach((num) => {
        newArr.push(num * 2)
    })
    return newArr
} 

function mapToSquare (arr) {
    let newArr = []
    arr.forEach((num) => {
        newArr.push(num * num)
    })
    return newArr
}