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
        if (matchVo.status == "draw"){
            return new ScoreVo(scoreVo.computerScore,scoreVo.playerScore)
        }
        else if (matchVo.status == "loses"){
            return new ScoreVo(scoreVo.computerScore+1,scoreVo.playerScore)
        }
        else if (matchVo.status == "wins"){
            return new ScoreVo(scoreVo.computerScore,scoreVo.playerScore+1)
        }

    }

    return { checkWinner, updateScore };
};

module.exports = MatchManager