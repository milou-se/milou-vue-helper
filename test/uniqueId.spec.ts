import {uniqueId} from '../src/helpers/uniqueId/uniqueId';
import {expect} from 'chai';

describe('Common.Helpers.Guid', () => {
    before((done) => {
        done();
    });
    it('Should return a random string', () => {
        const guid1 = uniqueId();
        const guid2 = uniqueId();
        expect(guid1).to.not.equal(guid2);
    });
    it('Should return a random string with four dashes in it', () => {
        expect((uniqueId().match(/-/g) || []).length).to.equal(4);
    });
});