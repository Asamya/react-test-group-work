import backwards from "./backwards";

describe('unit test :: backwards', () => {
    it('takes a string an gives back the mirrored string', () => {
        // Given
        const givenString = 'neuefische rocks';

        // When
        const actual = backwards(givenString);

        // Then
        expect(actual).toMatch('skcor ehcsifeuen');
    })
})