import {GenerateUniqueId} from '../../src';
import {expect} from 'chai';

describe('Helpers.Generate.GenerateUniqueId', () => {
    before((done) => {
        done();
    });
    it('Should return a random string', () => {
        const guid1 = GenerateUniqueId();
        const guid2 = GenerateUniqueId();
        expect(guid1).to.not.equal(guid2);
    });
    it('Should return a random string with four dashes in it', () => {
        expect((GenerateUniqueId().match(/-/g) || []).length).to.equal(4);
    });
});