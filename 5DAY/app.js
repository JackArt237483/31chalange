function numIdenticalPairs(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j] && i < j) {
              count++;
          }
      }
  }
  return count;
}

const nums1 = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums1)); // Output: 4

const nums2 = [1, 1, 1, 1];
console.log(numIdenticalPairs(nums2)); // Output: 6

const nums3 = [1, 2, 3];
console.log(numIdenticalPairs(nums3)); // Output: 0


function numIdenticalPairs(nums) {
  let count = 0;
  const numCount = {};

  for (let num of nums) {
       if (numCount[num]) {
          count += numCount[num];
      }

      numCount[num] = (numCount[num] || 0) + 1;
  }

  return count;
}


const nums4 = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums4)); // Ожидаемый вывод: 4

const nums5 = [1, 1, 1, 1];
console.log(numIdenticalPairs(nums5)); // Ожидаемый вывод: 6

const nums6 = [1, 2, 3];
console.log(numIdenticalPairs(nums6)); // Ожидаемый вывод: 0

const nums7 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log(numIdenticalPairs(nums7)); // Ожидаемый вывод: 2
