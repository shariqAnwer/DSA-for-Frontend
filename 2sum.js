// function twoSum(arr, target) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++ ) {
//             if(arr[i] + arr[j] == target) return [i, j];
//         }
//     }
// }

// function twoSum(ar, target) {
//     let map = new Map();
//     for(let i = 0; i < ar.length; i++) {
//         let complement = target - ar[i];
//         if(map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(ar[i], i);
//     }
//     return -1;  // Return -1 if no pair found.
// }
function twoSum(ar, target) {
  let map = new Map;
  for(let i = 0; i < ar.length; i++) {
    let comp = target - ar[i];
    if(map.has(comp)){
        return [map.get(comp), i]
    }
    
    map.set(ar[i], i)
  }
  return map
}
let arr = [2, 11, 7, 15];
let target = 9;
//output - [0, 1]
console.log(twoSum(arr, target));
