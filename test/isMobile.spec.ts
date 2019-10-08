import {expect} from 'chai';
import {IsMobile} from '../src/helpers/isMobile/isMobile';

describe('Common.Helpers.IsMobile', () => {
    it('Return false as PhantomJS is not a mobile user-agent', () => {
        expect(IsMobile()).to.be.false;
    });
    it('Return true when sending a ipad user-agent', () => {
        expect(IsMobile('(iPad; CPU OS 9_3_2 like Mac OS X)')).to.be.true;
    });
});
