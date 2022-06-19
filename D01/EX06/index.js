function moduloEx6(number, comparer) {
  //your code
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

moduloEx6(6, 5);