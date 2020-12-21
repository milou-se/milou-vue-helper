import { expect } from 'chai';
import { Language } from '../../src/helpers/html/language';
import { SetCookie } from '../../src/helpers/cookie/setCookie';
import { GetCookie } from '../../src/helpers/cookie/getCookie';
import { DeleteCookie } from '../../src/helpers/cookie/deleteCookie';

describe('Helpers.cookie', () => {
    before((done) => {
        SetCookie('test', 'test value');
        done();
    });
    it('Should return "test value"', () => {
        expect(GetCookie('test')).to.equal('test value');
    });
    it('Should return null', () => {
        DeleteCookie('test');
        expect(GetCookie('test')).to.be.null;
    });
});