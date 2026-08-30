const randomManager = require('../../../models/managers/RandomManager');

describe('RandomManager', () => {
    test('return valid choices after 100 plays', () => {
        //GIVEN
        const manager = randomManager();
        const validChoices = ['rock', 'paper', 'scissors'];
        const choicesRecorded = new Set();


        
        
        for (let i = 0; i < 100; i++) {
            //WHEN
            const result = manager.returnComputerChoice();
            //THEN
            expect(validChoices).toContain(result);

            choicesRecorded.add(result);
        }


        expect(choicesRecorded.size).toBe(3);
        expect(choicesRecorded).toContain('rock');
        expect(choicesRecorded).toContain('paper');
        expect(choicesRecorded).toContain('scissors');
    });
    
});