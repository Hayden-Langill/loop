let number = 16
let guess = 0

while (guess != number) {
  guess = prompt('Guess my age!')
  guess = parseInt(guess)
  if (guess > number) {
    alert('Number is to big')
  } else if (guess < number) {
    alert('Number is to small')
  }
}

alert('Game over')
