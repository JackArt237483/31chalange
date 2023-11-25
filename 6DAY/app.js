//Найдите Слова, содержащие определленый Символ

function indicesOfWordsWithCharacter(words, x) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
      if (words[i].includes(x)) {
          result.push(i);
      }
  }

  return result;
}

// Example usage:
const example1 = indicesOfWordsWithCharacter(["leet", "code"], "e");
console.log(example1); // Output: [0, 1]

const example2 = indicesOfWordsWithCharacter(["abc", "bcd", "aaaa", "cbc"], "a");
console.log(example2); // Output: [0, 2]

const example3 = indicesOfWordsWithCharacter(["abc", "bcd", "aaaa", "cbc"], "z");
console.log(example3); // Output: []


function indicesOfWordsWithCharacter(words, x) {
  return words.reduce((result, word, index) => {
      if (word.includes(x)) {
          result.push(index);
      }
      return result;
  }, []);
}

const example4 = indicesOfWordsWithCharacter(["abc", "bcd", "aaaa", "cbc"], "a");
console.log(example2); // Output: [0, 2]
