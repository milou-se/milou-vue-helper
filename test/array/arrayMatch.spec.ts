import {expect} from 'chai';
import {ArrayMatch} from '../../src';

describe('Helpers.Array.ArrayMatch', () => {
    it('Should return true if arrays are equal', () => {
        expect(ArrayMatch(['Item 1'], ['Item 1'])).to.be.true;
    });
    it('Should return false if arrays are not equal', () => {
        expect(ArrayMatch(['Item 1'], ['Item 2'])).to.be.false;
    });
    it('Should return false if arrays are in different order', () => {
        expect(ArrayMatch(['Item 1', 'Item 2'], ['Item 2', 'Item 1'])).to.be.false;
    });
    it('Should return false if arrays are not equal by casing', () => {
        expect(ArrayMatch(['item 1'], ['Item 1'])).to.be.false;
    });
});