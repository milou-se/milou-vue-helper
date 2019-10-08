import {capitalize} from '../src/helpers/capitalize/capitalize';
import {expect} from 'chai';

mocha.ui('bdd');
describe('Common.Capitalize', () => {
    it('First letter should be capitalized', () => {
        expect(capitalize('test')).to.be.equal('Test');
    });
    it('Null string should be empty', () => {
        const undefinedVar: any = null
        expect(capitalize(undefinedVar)).to.be.empty;
    });
})
;
