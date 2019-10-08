import {expect} from 'chai';
import {QueryToObject} from '../../src/helpers/object/queryToObject';

describe('Helpers.Object.QueryToObject', () => {
    it('Expect an object with property b', () => {
        expect(QueryToObject('?a=1&b=2&c=3').b).to.be.equal('2');
    });
    it('Expect object', () => {
        expect(typeof QueryToObject()).to.be.equal('object');
    });
});
