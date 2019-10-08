import {expect} from 'chai';
import {FloatToString} from '../../src/helpers/convert/floatToString';

describe('Helpers.Convert.FloatToString', () => {
    it('Convert float to string', () => {
        expect(FloatToString(0.1, 1)).to.equal('0,1');
    });
});
