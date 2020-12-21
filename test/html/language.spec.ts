import { expect } from 'chai';
import { Language } from '../../src/helpers/html/language';

describe('Helpers.html.language', () => {
    before((done) => {
        done();
    });
    it('Should return sv as language', () => {
        expect(Language()).to.equal('sv');
    });
    it('Should return en as language', () => {
        document.documentElement.setAttribute('lang', 'en-US');
        expect(Language()).to.equal('en');
    });
});