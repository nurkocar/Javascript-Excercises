// function positiveSum(arr) {
//     let total = 0
//     for (let i=0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         total += arr[i]
//       }
//     }
//     return total
//   }


function positiveSum(arr) {
    let total = 0
    for (num of arr){
      if (num > 0) {
        total += num
      }
    }
    return total
  }

console.log(positiveSum([1, -1, 3, -2, 9]))