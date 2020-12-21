import { expect } from 'chai';
import { StripHTML } from '../../src/helpers/html/stripHtml';

describe('Helpers.html.stripHtml', () => {
    before((done) => {
        done();
    });
    it('Should return Test as text', () => {
        expect(StripHTML('<h1>Test</h1>')).to.equal('Test');
    });
});