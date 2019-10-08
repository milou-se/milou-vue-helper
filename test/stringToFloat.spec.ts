import {expect} from 'chai';
import {StringToFloat} from '../src/helpers/stringToFloat/stringToFloat';

describe('Common.Helpers.StringToFloat', () => {
    it('Convert string to float', () => {
        expect(StringToFloat('0,1')).to.equal(0.1);
    });
});
