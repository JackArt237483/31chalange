//Найти максимальное число а качестве двух аргументов

function maxAchievableNumber(num, t) {
   const minVal = Math.min(num, t);

   return num + t - minVal;
}

// Test cases
console.log(maxAchievableNumber(4, 3));
console.log(maxAchievableNumber(3, 5));

function maxAchievableNumber(num, t) {

  const minVal = Math.min(num, t);
  const diff = num - t;

  if (diff >= 0) {
    return num + t;
  } else if ((t - num) % 2 === 0) {
    return num + t;
  } else {
    return num + t - 1;
  }
}

// Test cases
console.log(maxAchievableNumber(4, 1));
console.log(maxAchievableNumber(3, 4));

