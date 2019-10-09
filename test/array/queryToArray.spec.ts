import {expect} from 'chai';
import {QueryToArray} from '../../src';

describe('Helpers.Array.QueryToArray', () => {
    it('Should return an array', () => {
        expect(Array.isArray(QueryToArray('test=test&test2=test2'))).to.be.true;
    });
});