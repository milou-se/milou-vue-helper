import {expect} from 'chai';
import {IsMobile} from '../../src/helpers/browser/isMobile';

describe('Helpers.Browser.IsMobile', () => {
    it('Return false as Chrome Headless is not a mobile user-agent', () => {
        expect(IsMobile()).to.be.false;
    });
    it('Return true when sending a ipad user-agent', () => {
        expect(IsMobile('Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) GSA/33.0.164895372 Mobile/14G60 Safari/602.1')).to.be.true;
    });
});
