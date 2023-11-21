// Final Value of Variable After Performing Operations

function finalValueAfterOperations(operations) {
  let X = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "++X" || operations[i] === "X++") {
      X++;
    } else if (operations[i] === "--X" || operations[i] === "X--") {
      X--;
    }
  }
  return X;
}

const operations1 = ["--X", "X++", "X++"];
console.log(finalValueAfterOperations(operations1));

const operations2 = ["++X", "++X", "X++"];
console.log(finalValueAfterOperations(operations2));

const operations3 = ["X++", "++X", "--X", "X--"];
console.log(finalValueAfterOperations(operations3));
