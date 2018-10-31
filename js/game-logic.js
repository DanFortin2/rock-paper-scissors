// All code should be written in this file.

//Player 1 and 2  move types ex. Rock Paper or Scissors
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

//Player 1 and 2  move values ex. between 1-99 but all three cannot be more or less than 99
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

let playerOneScore;
let playerTwoScore;

//Set players moves based on input
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  //total count of move values
  let totalValues = moveOneValue + moveTwoValue + moveThreeValue;
  //all three values cannot be less then 99, cannot be undefined and cannot be less then one
  if (totalValues >= 3 && totalValues <= 99 && !moveOneValue < 1 && !moveTwoValue < 1 && !moveThreeValue < 1 && (moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') && (moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') && (moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors')) {
    if (player === 'Player One') {
      //choice one for type and score
      if (moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') {
        playerOneMoveOneType = moveOneType;
      } else {
        return;
      };

      if (moveOneValue >= 1 && moveOneValue <= 97) {
        playerOneMoveOneValue = moveOneValue;
      } else {
        return;
      };

      //choice two for type and score
      if (moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') {
        playerOneMoveTwoType = moveTwoType;
      } else {
        return;
      };
      if (moveTwoValue >= 1 && moveTwoValue <= 97) {
        playerOneMoveTwoValue = moveTwoValue;
      } else {
        return;
      };

      //choice three  for type and score
      if (moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors') {
        playerOneMoveThreeType = moveThreeType;
      } else {
        return;
      };

      if (moveThreeValue >= 1 && moveThreeValue <= 97) {
        playerOneMoveThreeValue = moveThreeValue;
      } else {
        return;
      };

    } else if (player === 'Player Two') {

      //choice one for type and score
      if (moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') {
        playerTwoMoveOneType = moveOneType;
      } else {
        return;
      };
      if (moveOneValue >= 1 && moveOneValue <= 97) {
        playerTwoMoveOneValue = moveOneValue;
      } else {
        return;
      };

      //choice two for type and score
      if (moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') {
        playerTwoMoveTwoType = moveTwoType;
      } else {
        return;
      };
      if (moveTwoValue >= 1 && moveTwoValue <= 97) {
        playerTwoMoveTwoValue = moveTwoValue;
      } else {
        return;
      };

      //choice three  for type and score
      if (moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors') {
        playerTwoMoveThreeType = moveThreeType;
      } else {
        return;
      };
      if (moveThreeValue >= 1 && moveThreeValue <= 97) {
        playerTwoMoveThreeValue = moveThreeValue;
      } else {
        return;
      };

    } else {
      return;
    }
  }
};

//based off round numbers and moves selected return winner
const getRoundWinner = (roundNumber) => {
  //Round 1
  if (roundNumber === 1 && !playerOneMoveOneValue < 1 && !playerTwoMoveOneValue < 1 && !playerOneMoveOneValue < 97 && !playerTwoMoveOneValue < 97 && (playerOneMoveOneType === 'rock' || playerOneMoveOneType === 'paper' || playerOneMoveOneType === 'scissors') && (playerTwoMoveOneType === 'rock' || playerTwoMoveOneType === 'paper' || playerTwoMoveOneType === 'scissors')) {
    //different scenarios where different types are picked who wins
    if (playerOneMoveOneType === 'rock') {
      if(playerTwoMoveOneType === 'paper') {
        return `Player Two`;
      } else if (playerTwoMoveOneType === 'scissors') {
        return `Player One`;
      } else if (playerTwoMoveOneType === 'rock') {
        if (playerOneMoveOneValue < playerTwoMoveOneValue) {
          return `Player Two`;
        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
          return `Player One`;
        } else if (playerOneMoveOneValue === playerTwoMoveOneValue) {
          return `Tie`;
        }
      }
    } else if (playerOneMoveOneType === 'paper') {
      if(playerTwoMoveOneType === 'scissors') {
        return `Player Two`;
      } else if (playerTwoMoveOneType === 'rock') {
        return `Player One`;
      } else if (playerTwoMoveOneType === 'paper') {
        if (playerOneMoveOneValue < playerTwoMoveOneValue) {
          return `Player Two`;
        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
          return `Player One`;
        } else if (playerOneMoveOneValue === playerTwoMoveOneValue) {
          return `Tie`;
        }
      }
    } else if (playerOneMoveOneType === 'scissors') {
      if(playerTwoMoveOneType === 'rock') {
        return `Player Two`;
      } else if (playerTwoMoveOneType === 'paper') {
        return `Player One`;
      } else if (playerTwoMoveOneType === 'scissors') {
        if (playerOneMoveOneValue < playerTwoMoveOneValue) {
          return `Player Two`;
        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
          return `Player One`;
        } else if (playerOneMoveOneValue === playerTwoMoveOneValue) {
          return `Tie`;
        }
      }
    }
  //round two
} else if (roundNumber === 2  && !playerOneMoveTwoValue < 1 && !playerTwoMoveTwoValue < 1 && !playerOneMoveTwoValue < 97 && !playerTwoMoveTwoValue < 97 && (playerOneMoveTwoType === 'rock' || playerOneMoveTwoType === 'paper' || playerOneMoveTwoType === 'scissors') && (playerTwoMoveTwoType === 'rock' || playerTwoMoveTwoType === 'paper' || playerTwoMoveTwoType === 'scissors')) {
    debugger;
    //different scenarios where different types are picked who wins
    if (playerOneMoveTwoType === 'rock') {
      if(playerTwoMoveTwoType === 'paper') {
        return `Player Two`;
      } else if (playerTwoMoveTwoType === 'scissors') {
        return `Player One`;
      } else if (playerTwoMoveTwoType === 'rock') {
        if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
          return `Player Two`;
        } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
            console.log(playerOneScore);
          return `Player One`;
        } else if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
          return `Tie`;
        }
      }
    } else if (playerOneMoveTwoType === 'paper') {
      if(playerTwoMoveTwoType === 'scissors') {
        return `Player Two`;
      } else if (playerTwoMoveTwoType === 'rock') {
        return `Player One`;
      } else if (playerTwoMoveTwoType === 'paper') {
        if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
          return `Player Two`;
        } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
          return `Player One`;
        } else if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
          return `Tie`;
        }
      }
    } else if (playerOneMoveTwoType === 'scissors') {
      if(playerTwoMoveTwoType === 'rock') {
        return `Player Two`;
      } else if (playerTwoMoveTwoType === 'paper') {
        return `Player One`;
      } else if (playerTwoMoveTwoType === 'scissors') {
        if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
          return `Player Two`;
        } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
          return `Player One`;
        } else if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
          return `Tie`;
        }
      }
    }

  //round three
} else if (roundNumber === 3 && !playerOneMoveThreeValue < 1 && !playerTwoMoveThreeValue < 1 && !playerOneMoveThreeValue < 97 && !playerTwoMoveThreeValue < 97 && (playerOneMoveThreeType === 'rock' || playerOneMoveThreeType === 'paper' || playerOneMoveThreeType === 'scissors') && (playerTwoMoveThreeType === 'rock' || playerTwoMoveThreeType === 'paper' || playerTwoMoveThreeType === 'scissors')) {
    debugger;
    //different scenarios where different types are picked who wins
    if (playerOneMoveThreeType === 'rock') {
      if(playerTwoMoveThreeType === 'paper') {
        return `Player Two`;
      } else if (playerTwoMoveThreeType === 'scissors') {
        return `Player One`;
      } else if (playerTwoMoveThreeType === 'rock') {
        if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
          return `Player Two`;
        } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
          return `Player One`;
        } else if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
          return `Tie`;
        }
      }
    } else if (playerOneMoveThreeType === 'paper') {
      if(playerTwoMoveThreeType === 'scissors') {
        return `Player Two`;
      } else if (playerTwoMoveThreeType === 'rock') {
        return `Player One`;
      } else if (playerTwoMoveThreeType === 'paper') {
        if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
          return `Player Two`;
        } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
          return `Player One`;
        } else if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
          return `Tie`;
        }
      }
    } else if (playerOneMoveThreeType === 'scissors') {
      if(playerTwoMoveThreeType === 'rock') {
        return `Player Two`;
      } else if (playerTwoMoveThreeType === 'paper') {
        return `Player One`;
      } else if (playerTwoMoveThreeType === 'scissors') {
        if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
          return `Player Two`;
        } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
          return `Player One`;
        } else if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
          return `Tie`;
        }
      }
    }
  }  else {
    return null;
  }
};



//return overall game winner
const getGameWinner = () => {
  if (!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType || !playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType || !playerOneMoveOneValue || !playerOneMoveTwoValue || !playerOneMoveThreeValue || !playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
    return null;
  }

  playerOneScore = 0;
  playerTwoScore = 0;


  let roundWinnerOne = getRoundWinner(1);
  let roundWinnerTwo = getRoundWinner(2);
  let roundWinnerThree = getRoundWinner(3);

  trackWins(roundWinnerOne);
  trackWins(roundWinnerTwo);
  trackWins(roundWinnerThree);

  if (playerOneScore > playerTwoScore) {
    return `Player One`;
  } else if (playerOneScore < playerTwoScore) {
    return `Player Two`;
  } else if (playerOneScore === playerTwoScore) {
    return `Tie`;
  }
}

const trackWins = (winner) => {
  if (winner === 'Player One') {
    playerOneScore = (playerOneScore + 1) || 1;
  } else if (winner === 'Player Two') {
    playerTwoScore = (playerTwoScore + 1) || 1;
  }
}

/*
//Easy way to set random values for computer scroll down for second way
const setComputerMoves = () => {
  let compTypes = ['rock', 'paper', 'scissors']
  let randomType1 = Math.floor(Math.random() * compTypes.length);
  let randomType2 = Math.floor(Math.random() * compTypes.length);
  let randomType3 = Math.floor(Math.random() * compTypes.length);

  playerTwoMoveOneType = compTypes[randomType1];
  playerTwoMoveTwoType = compTypes[randomType2];
  playerTwoMoveThreeType = compTypes[randomType3];

  let randomValue = Math.floor(Math.random() * 97 + 1);
  playerTwoMoveOneValue = randomValue;

  let leftoverOne = 98 - randomValue;

  let randomValue2 = Math.floor(Math.random() * leftoverOne + 1);
  playerTwoMoveTwoValue = randomValue2;

  let randomValue3 = 99 - randomValue - randomValue2;
  playerTwoMoveThreeValue = randomValue3;
}
*/


//Fun and exciting way full of learning and magic
const setComputerMoves = () => {
  let compTypes = ['rock', 'paper', 'scissors']
  let randomType1 = Math.floor(Math.random() * compTypes.length);
  let randomType2 = Math.floor(Math.random() * compTypes.length);
  let randomType3 = Math.floor(Math.random() * compTypes.length);

  playerTwoMoveOneType = compTypes[randomType1];
  playerTwoMoveTwoType = compTypes[randomType2];
  playerTwoMoveThreeType = compTypes[randomType3];

  //create an empty array
  let numberArray1 = [];

  //count to 98 starting at 1 so max value can be 97. Array is 0 indexed
  for (i = 1; i < 98; i++) {
    numberArray1.push(i);
  }

  //set random value of array + 1 so it doesn't give a 0
  let randomValue = Math.floor(Math.random() * numberArray1.length + 1);
  playerTwoMoveOneValue = randomValue;

  //create a leftOver variable and set it to equal the first number array. add 2 so it will go to 99 and subtract the first random value
  let leftoverOne = numberArray1.length + 2 - randomValue;

  //create a new empty array and count to the leftover value and push it into the array
  let numberArrays2 = [];
  for (x = 1; x < leftoverOne; x++) {
    numberArrays2.push(x);
  }

  //create new random value and multiply it by the new number arrays length. Add 1 in case it rounds to 0
  let randomValue2 = Math.floor(Math.random() * numberArrays2.length + 1);
  playerTwoMoveTwoValue = randomValue2;


  //create final random variable that subtracts the lengh of the second array by the second random variable. Add 1 to avoid 0
  let randomValue3 = numberArrays2.length - randomValue2 + 1;
  playerTwoMoveThreeValue = randomValue3;
}
