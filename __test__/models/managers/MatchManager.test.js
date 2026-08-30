const matchManager = require('../../../models/managers/MatchManager');
const PlayerChoiceVo = require('../../../models/ValueObjects/PlayerChoiceVo')
const MatchVo = require('../../../models/ValueObjects/MatchVo');
const ScoreVo = require('../../../models/ValueObjects/ScoreVo');

describe('MatchManager', () => {
    test('the game is a draw with rock', () => {
        //GIVEN
        const playerChoiceVo = new PlayerChoiceVo("humanPlayer","rock")
        const computerChoiceVo = new PlayerChoiceVo("computerPlayer","rock")
        const manager = matchManager();

        //WHEN
        const result = manager.checkWinner(playerChoiceVo, computerChoiceVo)

        //THEN
        expect(result).toBeInstanceOf(MatchVo)
        expect(result.status).toBe("draw")
    });
    test('the game is a draw with paper', () => {
        //GIVEN
        const playerChoiceVo = new PlayerChoiceVo("humanPlayer","paper")
        const computerChoiceVo = new PlayerChoiceVo("computerPlayer","paper")
        const manager = matchManager();

        //WHEN
        const result = manager.checkWinner(playerChoiceVo, computerChoiceVo)

        //THEN
        expect(result).toBeInstanceOf(MatchVo)
        expect(result.status).toBe("draw")
    });
    test('the game is a draw with scissors', () => {
        //GIVEN
        const playerChoiceVo = new PlayerChoiceVo("humanPlayer","scissors")
        const computerChoiceVo = new PlayerChoiceVo("computerPlayer","scissors")
        const manager = matchManager();

        //WHEN
        const result = manager.checkWinner(playerChoiceVo, computerChoiceVo)

        //THEN
        expect(result).toBeInstanceOf(MatchVo)
        expect(result.status).toBe("draw")
    });
    test('player wins with rock against scissors', () => {
        //GIVEN
        const playerChoiceVo = new PlayerChoiceVo("humanPlayer","rock")
        const computerChoiceVo = new PlayerChoiceVo("computerPlayer","scissors")
        const manager = matchManager();

        //WHEN
        const result = manager.checkWinner(playerChoiceVo, computerChoiceVo)

        //THEN
        expect(result).toBeInstanceOf(MatchVo)
        expect(result.status).toBe("wins")
    });
    test('player loses with rock against paper', () => {
        //GIVEN
        const playerChoiceVo = new PlayerChoiceVo("humanPlayer","rock")
        const computerChoiceVo = new PlayerChoiceVo("computerPlayer","paper")
        const manager = matchManager();

        //WHEN
        const result = manager.checkWinner(playerChoiceVo, computerChoiceVo)

        //THEN
        expect(result).toBeInstanceOf(MatchVo)
        expect(result.status).toBe("loses")
    });
    test('player wins with paper against rock', () => {
        //GIVEN
        const playerChoiceVo = new PlayerChoiceVo("humanPlayer","paper")
        const computerChoiceVo = new PlayerChoiceVo("computerPlayer","rock")
        const manager = matchManager();

        //WHEN
        const result = manager.checkWinner(playerChoiceVo, computerChoiceVo)

        //THEN
        expect(result).toBeInstanceOf(MatchVo)
        expect(result.status).toBe("wins")
    });
    test('player loses with paper against scissors', () => {
        //GIVEN
        const playerChoiceVo = new PlayerChoiceVo("humanPlayer","paper")
        const computerChoiceVo = new PlayerChoiceVo("computerPlayer","scissors")
        const manager = matchManager();

        //WHEN
        const result = manager.checkWinner(playerChoiceVo, computerChoiceVo)

        //THEN
        expect(result).toBeInstanceOf(MatchVo)
        expect(result.status).toBe("loses")
    });
    test('player wins with scissors against paper', () => {
        //GIVEN
        const playerChoiceVo = new PlayerChoiceVo("humanPlayer","scissors")
        const computerChoiceVo = new PlayerChoiceVo("computerPlayer","paper")
        const manager = matchManager();

        //WHEN
        const result = manager.checkWinner(playerChoiceVo, computerChoiceVo)

        //THEN
        expect(result).toBeInstanceOf(MatchVo)
        expect(result.status).toBe("wins")
    });
    test('player loses with scissors against rock', () => {
        //GIVEN
        const playerChoiceVo = new PlayerChoiceVo("humanPlayer","scissors")
        const computerChoiceVo = new PlayerChoiceVo("computerPlayer","rock")
        const manager = matchManager();

        //WHEN
        const result = manager.checkWinner(playerChoiceVo, computerChoiceVo)

        //THEN
        expect(result).toBeInstanceOf(MatchVo)
        expect(result.status).toBe("loses")
    });
    test('updatescore handles draw outcome correctly', () => {
        //GIVEN
        const scoreVo = new ScoreVo(0,0)
        const matchVo = new MatchVo("humanPlayer","draw")
        const manager = matchManager();

        //WHEN
        const result = manager.updateScore(matchVo, scoreVo)
        console.log(result)
        //THEN
        expect(result).toBeInstanceOf(ScoreVo)
        expect(result.playerScore).toBe(scoreVo.playerScore)
        expect(result.computerScore).toBe(scoreVo.computerScore)
    });
    test('updatescore handles player wins outcome correctly', () => {
        //GIVEN
        const scoreVo = new ScoreVo(0,0)
        const matchVo = new MatchVo("humanPlayer","wins")
        const manager = matchManager();

        //WHEN
        const result = manager.updateScore(matchVo, scoreVo)
        console.log(result)
        //THEN
        expect(result).toBeInstanceOf(ScoreVo)
        expect(result.playerScore).toBe(scoreVo.playerScore+1)
        expect(result.computerScore).toBe(scoreVo.computerScore)
    });
    test('updatescore handles player loses outcome correctly', () => {
        //GIVEN
        const scoreVo = new ScoreVo(0,0)
        const matchVo = new MatchVo("humanPlayer","loses")
        const manager = matchManager();

        //WHEN
        const result = manager.updateScore(matchVo, scoreVo)
        console.log(result)
        //THEN
        expect(result).toBeInstanceOf(ScoreVo)
        expect(result.playerScore).toBe(scoreVo.playerScore)
        expect(result.computerScore).toBe(scoreVo.computerScore+1)
    });
});