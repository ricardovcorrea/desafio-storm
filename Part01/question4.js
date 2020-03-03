/*
QUESTÃO IV

Dados n inteiros não negativos representando um mapa de
elevação onde a largura de cada barra é 1, calcule quanta
água é capaz de reter após a chuva.

EXEMPLO

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/

//Solution
function measureRetainedWater(elevationMap) {
  if (!elevationMap || !elevationMap.length) {
    throw "Elevation Map Array cannot be null or empty!";
  }

  let retainedWater = 0;
  const elevationChart = {};
  const elevationMapLength = elevationMap.length;
  const maximumElevation = Math.max(...elevationMap);

  for (let i = 0; i < elevationMapLength; i++) {
    for (let j = 0; j < maximumElevation; j++) {
      elevationChart[j] = elevationChart[j] || [];

      const elevation = elevationMap[i];
      if (j < elevation) {
        elevationChart[j].push(1);
      } else {
        elevationChart[j].push(0);
      }
    }
  }

  for (let chartEntry of Object.entries(elevationChart)) {
    const [elevation, values] = chartEntry;

    const valuesWithoutExtremitiesZeroes = removeZerosFromExtremities(values);
    retainedWater += valuesWithoutExtremitiesZeroes.filter(v => v === 0).length;
  }

  return retainedWater;
}

function removeZerosFromExtremities(array) {
  const resultArray = [...array];

  while (resultArray[0] === 0) {
    resultArray.shift();
  };

  while (resultArray[resultArray.length - 1] === 0) {
    resultArray.pop();
  };

  return resultArray;
}

//Tests
(() => {
  const elevationMap = [];
  let failed = false;

  try {
    measureRetainedWater(elevationMap);
  } catch (e) {
    failed = true;
  }

  reportTestResult(
    "Given empty elevation map array should throw an exception",
    failed
  );
})();

(() => {
  const elevationMap = null;
  let failed = false;

  try {
    measureRetainedWater(elevationMap);
  } catch (e) {
    failed = true;
  }

  reportTestResult(
    "Given null elevation map array should throw an exception",
    failed
  );
})();

(() => {
  const elevationMap = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

  const retainedWater = measureRetainedWater(elevationMap);

  const result = retainedWater !== null && retainedWater === 6;

  reportTestResult(
    "Given [0,1,0,2,1,0,1,3,2,1,2,1] result should be 6",
    result
  );
})();

(() => {
  const elevationMap = [0, 1, 0, 3, 1, 0, 1, 3, 2, 1, 2, 1];

  const retainedWater = measureRetainedWater(elevationMap);

  const result = retainedWater !== null && retainedWater === 9;

  reportTestResult(
    "Given [0,1,0,3,1,0,1,3,2,1,2,1] result should be 9",
    result
  );
})();

(() => {
  const elevationMap = [3, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

  const retainedWater = measureRetainedWater(elevationMap);

  const result = retainedWater !== null && retainedWater === 14;

  reportTestResult(
    "Given [3, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] result should be 14",
    result
  );
})();

(() => {
  const elevationMap = [4, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 4];

  const retainedWater = measureRetainedWater(elevationMap);

  const result = retainedWater !== null && retainedWater === 27;

  reportTestResult(
    "Given [4, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 4] result should be 27",
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
