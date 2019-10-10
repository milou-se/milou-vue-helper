import {expect} from 'chai';
import {UrlQueryParam} from '../../src';

describe('Helpers.Url.UrlQueryParam', () => {
    it('Should get Pontus from param name', () => {
        expect(UrlQueryParam('name', 'phone=07xxxxxx&name=Pontus')).to.be.equal('Pontus');
    });
    it('Should get "" from param name2', () => {
        expect(UrlQueryParam('name2', 'phone=07xxxxxx&name=Pontus')).to.be.equal('');
    });
});