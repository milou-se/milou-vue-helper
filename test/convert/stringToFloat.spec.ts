import {expect} from 'chai';
import {StringToFloat} from '../../src/helpers/convert/stringToFloat';

describe('Helpers.Convert.StringToFloat', () => {
    it('Convert string to float', () => {
        expect(StringToFloat('0,1')).to.equal(0.1);
    });
});
