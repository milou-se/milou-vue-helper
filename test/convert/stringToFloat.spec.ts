import {expect} from 'chai';
import {StringToFloat} from '../../src';

describe('Helpers.Convert.StringToFloat', () => {
    it('Convert string to float', () => {
        expect(StringToFloat('0,1')).to.equal(0.1);
    });
});
