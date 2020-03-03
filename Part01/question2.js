/*
QUESTÃO II

Um bracket é considerado qualquer um dos seguintes caracteres: (, ), {, }, [ ou ].

Dois brackets são considerados um par combinado se o bracket de abertura (isto
é, (, [ou {) ocorre à esquerda de um bracket de fechamento (ou seja,),] ou} do
mesmo tipo exato. Existem três tipos de pares de brackets : [ ], { } e ( ).

Um par de brackets correspondente não é balanceado se o de abertura e o de
fechamento não corresponderem entre si. Por exemplo, { [ ( ] ) } não é balanceado
porque o conteúdo entre {e} não é balanceado. O primeiro bracket inclui o de
abertura, (, e o segundo inclui um bracket de fechamento desbalanceado,].

Dado sequencias de caracteres, determine se cada sequência de brackets é
balanceada. Se uma string estiver balanceada, retorne SIM. Caso contrário, retorne
NAO.
*/

//Solution
function isBalanced(bracketsString) {
  const closingBrackets = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
  }

  if(!bracketsString) {
    throw 'Brackets String cannot be Null or Empty';
  }
  
  const bracketsStringLenght = bracketsString.length;

  if(bracketsStringLenght % 2 == 1) {
    return 'NAO';
  }
  
  const firstHalfEnd = bracketsStringLenght / 2;
  const firstHalfArray = Array.from(bracketsString.slice(0, firstHalfEnd));
  const secondHalfArray = Array.from(bracketsString.slice(firstHalfEnd, bracketsStringLenght)).reverse();

  for(let i = 0;i < firstHalfArray.length; i++) {
    const openBracket = firstHalfArray[i];
    const closeBracket = secondHalfArray[i];

    if(closingBrackets[openBracket] !== closeBracket) {
      return 'NAO'
    }
  }

  return 'SIM';
}

//Tests
(() => {
  const bracketsString = '';
  let failed = false;

  try {
    isBalanced(bracketsString);
  } catch(e) {
    failed = true;
  }
  
  reportTestResult("Given empty brackets string should throw an exception", failed);
})();

(() => {
  const bracketsString = null;
  let failed = false;

  try {
    isBalanced(bracketsString);
  } catch(e) {
    failed = true;
  }
  
  reportTestResult("Given null brackets string should throw an exception", failed);
})();

(() => {
  const bracketsString = '{[()]}';

  const balanced = isBalanced(bracketsString);

  const result = balanced && balanced === 'SIM';

  reportTestResult(`Given ${bracketsString} result should be SIM`, result);
})();

(() => {
  const bracketsString = '{[(])}';

  const balanced = isBalanced(bracketsString);

  const result = balanced && balanced === 'NAO';

  reportTestResult(`Given ${bracketsString} result should be NAO`, result);
})();

(() => {
  const bracketsString = '{{[[(())]]}}';

  const balanced = isBalanced(bracketsString);

  const result = balanced && balanced === 'SIM';

  reportTestResult(`Given ${bracketsString} result should be SIM`, result);
})();

(() => {
  const bracketsString = '({[]}))';

  const balanced = isBalanced(bracketsString);

  const result = balanced && balanced === 'NAO';

  reportTestResult(`Given ${bracketsString} result should be NAO`, result);
})();

//Helpers
function reportTestResult(testName, passed) {
  if (passed) {
    console.log("\x1b[32m%s\x1b[0m", `${testName} passed!`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `${testName} failed!`);
  }
}
