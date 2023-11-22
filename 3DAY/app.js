// задача суммирование элементов в массиве

// 1 action

function runningSum(nums) {
  let runningSumArray = [];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
      currentSum += nums[i];
      runningSumArray.push(currentSum);
  }

  return runningSumArray;
}

console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]

// 2 action

function runningSum(nums) {
  let currentSum = 0;
  let runningSumArray = [];

  for (const num of nums) {
      currentSum += num;
      runningSumArray.push(currentSum);
  }

  return runningSumArray;
}


console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]
