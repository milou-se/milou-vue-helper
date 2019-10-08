import {Capitalize} from '../../src/helpers/convert/capitalize';
import {expect} from 'chai';

mocha.ui('bdd');
describe('Helpers.Convert.Capitalize', () => {
    it('First letter should be capitalized', () => {
        expect(Capitalize('test')).to.be.equal('Test');
    });
    it('Null string should be empty', () => {
        const undefinedVar: any = null
        expect(Capitalize(undefinedVar)).to.be.empty;
    });
})
;
