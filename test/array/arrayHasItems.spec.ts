import {expect} from 'chai';
import {ArrayHasItems} from '../../src';

describe('Helpers.Array.ArrayHasItems', () => {
    it('Should return true when array have items of string', () => {
        expect(ArrayHasItems(['Item 1', 'Item 2'])).to.be.true;
    });
    it('Should return true when array have items of number', () => {
        expect(ArrayHasItems([1, 2])).to.be.true;
    });
    it('Should return true when array have items of objects', () => {
        expect(ArrayHasItems([{}, {}])).to.be.true;
    });
    it('Should return false when array have no items', () => {
        expect(ArrayHasItems([])).to.be.false;
    });
    it('Should return false when not an array', () => {
        expect(ArrayHasItems(('' as any))).to.be.false;
    });
});