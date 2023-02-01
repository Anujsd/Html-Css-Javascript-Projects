const result = document.getElementById('result');
const clipboardBtn = document.getElementById('clipboard');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolEl = document.getElementById('symbol');
const numberEl = document.getElementById('number');
const generateBtn = document.getElementById('generate');

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
const getRandomLowercase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
const getRandomUppercase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
const getRandomSymbol = () => {
  const symbolStr = '~!@#$%^&*()_+`-=[]{};,.<>|';

  return symbolStr[Math.floor(Math.random() * symbolStr.length)];
};

const mappingObject = {
  lower: getRandomLowercase,
  upper: getRandomUppercase,
  symbol: getRandomSymbol,
  number: getRandomNumber,
};

const generatePassword = (length, upper, lower, symbol, number) => {
  let generatePassword = '';
  const typesCount = upper + lower + symbol + number;
  let typesArr = [{ upper }, { lower }, { symbol }, { number }].filter(
    (item) => Object.values(item)[0]
  );

  //shuffle array for more randomness
  typesArr.sort(() => Math.random() - 0.5);

  if (typesCount === 0) {
    return '';
  }
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatePassword += mappingObject[funcName]();
    });
  }

  const finalPassword = generatePassword.slice(0, length);
  return finalPassword;
};

generateBtn.addEventListener('click', () => {
  let length = +lengthEl.value;
  length = length > 20 ? 20 : length;
  const hasLowercase = lowercaseEl.checked;
  const hasSymbol = symbolEl.checked;
  const Hasnumber = numberEl.checked;
  const hasUppercase = uppercaseEl.checked;

  result.innerText = generatePassword(
    length,
    hasUppercase,
    hasLowercase,
    hasSymbol,
    Hasnumber
  );
});

clipboardBtn.addEventListener('click', () => {
  const password = result.innerText;
  if (!password) return '';
  navigator.clipboard.writeText(password);
  alert('Password Copied to Clipboard');
});
