import shoutThem from './shoutThem';

describe('unit test :: shoutthem', () => {
    it('takes an array and give back all uppercase and exclamation mark', () => {
        //Given
        const givenArray = ['Henny', 'Berni', 'Sven'];

        //When
        const actual = shoutThem(givenArray);

        // Then
        expect(actual).toEqual(['HENNY!', 'BERNI!', 'SVEN!']);
    })
})