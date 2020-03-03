/*
QUESTÃO I

Dado um array de números inteiros, retorne os índices dos
dois números de forma que eles se somem a um alvo
específico.

Você pode assumir que cada entrada teria exatamente uma
solução, e você não pode usar o mesmo elemento duas
vezes.

EXEMPLO

Dado nums = [2, 7, 11, 15], alvo = 9,
Como nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]
 */

//Solution
function findIndexs(array, target) {
  if (!array || !array.length) {
    throw "Array cannot be null or empty!";
  }

  if (!target) {
    throw "Target cannot be 0 or null!";
  }

  const valuesLesserThanTargetArray = array.filter(n => n < target);
  const valuesLesserThanTargetArrayLength = valuesLesserThanTargetArray.length;

  for (let i = 0; i < valuesLesserThanTargetArrayLength; i++) {
    for (let j = 0; j < valuesLesserThanTargetArrayLength; j++) {
      if (i === j) {
        continue;
      }

      const n1 = valuesLesserThanTargetArray[i];
      const n2 = valuesLesserThanTargetArray[j];

      if (n1 + n2 === target) {
        return [array.indexOf(n1), array.indexOf(n2)];
      }
    }
  }
}

//Tests
(() => {
  const array = [];
  let failed = false;

  try {
    findIndexs(array);
  } catch (e) {
    failed = true;
  }

  reportTestResult("Given empty array should throw exception", failed);
})();

(() => {
  const array = null;
  let failed = false;

  try {
    findIndexs(array);
  } catch (e) {
    failed = true;
  }

  reportTestResult("Given null array should throw exception", failed);
})();

(() => {
  const array = [1, 23, 56, 92];
  const target = 0;
  let failed = false;

  try {
    findIndexs(array, target);
  } catch (e) {
    failed = true;
  }

  reportTestResult("Given target 0 should throw exception", failed);
})();

(() => {
  const array = [96, 565, 2142, 25];
  const target = null;
  let failed = false;

  try {
    findIndexs(array, target);
  } catch (e) {
    failed = true;
  }

  reportTestResult("Given target null should throw exception", failed);
})();

(() => {
  const array = [2, 7, 11, 15];
  const target = 9;

  const indexs = findIndexs(array, target);

  const result =
    indexs && indexs.length == 2 && indexs[0] === 0 && indexs[1] === 1;

  reportTestResult(
    "Given [2, 7, 11, 15] and target 9 result should be [0,1]",
    result
  );
})();

(() => {
  const array = [15, 241, 232, 25, 87, 98];
  const target = 123;

  const indexs = findIndexs(array, target);

  const result =
    indexs && indexs.length == 2 && indexs[0] === 3 && indexs[1] === 5;

  reportTestResult(
    "Given [15, 241, 232, 25, 87, 98] and target 123 result should be [3,5]",
    result
  );
})();

(() => {
  const array = [4, 8, 15, 16, 23, 42];
  const target = 38;

  const indexs = findIndexs(array, target);

  const result =
    indexs && indexs.length == 2 && indexs[0] === 2 && indexs[1] === 4;

  reportTestResult(
    "Given [4, 8, 15, 16, 23, 42] and target 38 result should be [2,4]",
    result
  );
})();

//Helpers
function reportTestResult(testName, passed) {
  if (passed) {
    console.log("\x1b[32m%s\x1b[0m", `${testName} passed!`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `${testName} failed!`);
  }
}
