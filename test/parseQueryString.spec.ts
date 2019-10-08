import {expect} from 'chai';
import {ParseQueryString} from '../src/helpers/parseQueryString/parseQueryString';

describe('Common.Helpers.ParseQueryString', () => {
    it('Expect an object with property b', () => {
        expect(ParseQueryString('?a=1&b=2&c=3').b).to.be.equal('2');
    });
    it('Expect object', () => {
        expect(typeof ParseQueryString()).to.be.equal('object');
    });
});
