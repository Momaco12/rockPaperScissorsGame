const MatchVo = require('../ValueObjects/MatchVo')
const ScoreVo = require('../ValueObjects/ScoreVo')


const MatchManager = () => {

    function checkWinner(playerChoiceVo, computerChoiceVo){
        if (playerChoiceVo.choice === computerChoiceVo.choice){
            return new MatchVo(playerChoiceVo.player, "draw")
        }
        else if (playerChoiceVo.choice === "rock" && computerChoiceVo.choice === "paper"){
            return new MatchVo(playerChoiceVo.player, "loses")
        }
        else if (playerChoiceVo.choice === "rock" && computerChoiceVo.choice === "scissors"){
            return new MatchVo(playerChoiceVo.player, "wins")
        }
        else if (playerChoiceVo.choice === "paper" && computerChoiceVo.choice === "scissors"){
            return new MatchVo(playerChoiceVo.player, "loses")
        }
        else if (playerChoiceVo.choice === "paper" && computerChoiceVo.choice === "rock"){
            return new MatchVo(playerChoiceVo.player, "wins")
        }
        else if (playerChoiceVo.choice === "scissors" && computerChoiceVo.choice === "rock"){
            return new MatchVo(playerChoiceVo.player, "loses")
        }
        else if (playerChoiceVo.choice === "scissors" && computerChoiceVo.choice === "paper"){
            return new MatchVo(playerChoiceVo.player, "wins")
        }
    }

    function updateScore(matchVo, scoreVo){
        let playerScore = scoreVo.playerScore
        let computerScore = scoreVo.computerScore

        if (matchVo.status === "wins") playerScore++
        if (matchVo.status === "loses") computerScore++

        return new ScoreVo(computerScore, playerScore)


    }

    return { checkWinner, updateScore };
};

module.exports = MatchManager