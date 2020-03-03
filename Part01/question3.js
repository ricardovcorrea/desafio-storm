/*
QUESTÃO III

Digamos que você tenha um array para o qual o elemento i
é o preço de uma determinada ação no dia i.

Se você tivesse permissão para concluir no máximo uma
transação (ou seja, comprar uma e vender uma ação), crie
um algoritmo para encontrar o lucro máximo.

Note que você não pode vender uma ação antes de
comprar.

EXEMPLO

Input: [7,1,5,3,6,4]
Output: 5 (Comprou no dia 2 (preço
igual a 1) e vendeu no dia 5 (preço
igual a 6), lucro foi de 6 – 1 = 5

Input: [7,6,4,3,1]
Output: 0 (Nesse caso nenhuma
transação deve ser feita, lucro máximo
igual a 0)
*/

//Solution
function findBestProfit(stocksPrices) {
  if (!stocksPrices || !stocksPrices.length) {
    throw "Stocks prices cannot be null or empty";
  }

  const minStockPrice = Math.min(...stocksPrices);
  const minStockPriceIndex = stocksPrices.indexOf(minStockPrice);

  const stocksPricesAfterBuy = stocksPrices.slice(
    minStockPriceIndex + 1,
    stocksPrices.length
  );

  if (!stocksPricesAfterBuy.length) {
    return 0;
  }

  const maxStockPriceAfterBuy = Math.max(...stocksPricesAfterBuy);

  return maxStockPriceAfterBuy - minStockPrice;
}

//Tests
(() => {
  const stocksPrices = [];
  let failed = false;

  try {
    findBestProfit(stocksPrices);
  } catch (e) {
    failed = true;
  }

  reportTestResult(
    "Given empty stocks prices array should throw an exception",
    failed
  );
})();

(() => {
  const stocksPrices = null;
  let failed = false;

  try {
    findBestProfit(stocksPrices);
  } catch (e) {
    failed = true;
  }

  reportTestResult(
    "Given null stocks prices array should throw an exception",
    failed
  );
})();

(() => {
  const stocksPrices = [7, 1, 5, 3, 6, 4];

  const bestProfit = findBestProfit(stocksPrices);

  const result = bestProfit !== null && bestProfit === 5;

  reportTestResult("Given [7,1,5,3,6,4] result should be 5", result);
})();

(() => {
  const stocksPrices = [7, 6, 4, 3, 1];

  const bestProfit = findBestProfit(stocksPrices);

  const result = bestProfit !== null && bestProfit === 0;

  reportTestResult("Given [7,6,4,3,1] result should be 0", result);
})();

(() => {
  const stocksPrices = [4, 15, 42, 8, 5, 43];

  const bestProfit = findBestProfit(stocksPrices);

  const result = bestProfit !== null && bestProfit === 39;

  reportTestResult("Given [4,15,42,8,5,43] result should be 39", result);
})();

//Helpers
function reportTestResult(testName, passed) {
  if (passed) {
    console.log("\x1b[32m%s\x1b[0m", `${testName} passed!`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `${testName} failed!`);
  }
}
