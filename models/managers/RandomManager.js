function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const RandomManager = () => {
    function returnComputerChoice(){
        const numberChoice = getRandomInt(3)
        return choice =  numberChoice == 0 ? "rock" : numberChoice == 1 ? "paper" : numberChoice == 2 ? "scissors" : null
    }

    return { returnComputerChoice };
};

module.exports = RandomManager