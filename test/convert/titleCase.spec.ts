import {expect} from 'chai';
import {TitleCase} from '../../src';

describe('Helpers.Convert.TitleCase', () => {
    it('Should return "Tests Are Good"', () => {
        expect(TitleCase('tests are good')).to.be.equal('Tests Are Good');
    });
    it('Should return "1" when passing "1"', () => {
        expect(TitleCase('1')).to.be.equal('1');
    });
    it('Should return "" when passing empty', () => {
        expect(TitleCase((undefined as any))).to.be.equal('');
    });
});