import { useState } from 'react';
import MatchManager from '../models/managers/MatchManager';
import RandomManager from '../models/managers/RandomManager';
import PlayerChoiceVo from '../models/ValueObjects/PlayerChoiceVo';
import ScoreVo from '../models/ValueObjects/ScoreVo';
import playerChoiceVo from '../models/ValueObjects/PlayerChoiceVo';





const useMatch = () => {
  const [score, setScore] = useState(new ScoreVo(0,0));
  const [matchWinner, setMatchWinner] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const matchManager = MatchManager();
  const randomManager = RandomManager();

  const startMatch = (playerChoice) => {
    
    const player = new PlayerChoiceVo("humanPlayer", playerChoice);
    const computer = new PlayerChoiceVo("computerPlayer", randomManager.returnComputerChoice());
    const matchWinner = matchManager.checkWinner(player,computer)
    const newScore = matchManager.updateScore(matchWinner, score)
    setScore(newScore)
    setMatchWinner(matchWinner)
    setPlayerChoice(playerChoice)
    setComputerChoice(computer.choice)
      };
  return {
    score,
    playerChoice,
    computerChoice, 
    matchWinner,
    startMatch
  };
};
export default useMatch;