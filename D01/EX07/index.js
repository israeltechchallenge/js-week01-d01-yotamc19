function getRandomInt(max) {
  //your code
  return Math.floor(Math.random() * max);
}

function moduloEx7() {
  //your code
  const number = getRandomInt(100);
  const comparer = getRandomInt(100);
  let str = ``;
  if (number > comparer) {
    str = `The number ${number} is bigger than ${comparer}`;
    if (number % comparer !== 0)
      str += `. But the modulo of ${number} % ${comparer} is ${number % comparer}`;
  }
  else if (number === comparer)
    str = `The number ${number} is equal to ${comparer}`;
  else
    str = `The number ${number} is less than ${comparer}`;

  document.getElementById(`output`).innerText = str;
}

moduloEx7(6, 5);