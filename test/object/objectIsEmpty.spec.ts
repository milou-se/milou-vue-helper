import {expect} from 'chai';
import {ObjectIsEmpty} from '../../src';

describe('Helpers.Object.ObjectIsEmpty', () => {
    it('Expect an empty object to return true', () => {
        expect(ObjectIsEmpty({})).to.be.true;
    });
    it('Expect a none empty object return false', () => {
        expect(ObjectIsEmpty({test: 'test'})).to.be.false;
    });
});
