import {objectsAreEqual} from '../src/helpers/objectsAreEqual/objectsAreEqual';
import {expect} from 'chai';

mocha.ui('bdd');
describe('Common.NumberSeparator', () => {
    const object1 = {
        name: '1',
        id: '1'
    }
    const object11 = {
        name: '1',
        id: '1'
    }
    const object3 = {
        name: '3',
        id: '3',
        child: {
            name: '3'
        }
    }
    const object33 = {
        id: '3',
        name: '3',
        child: {
            name: '3'
        }
    }
    const object4 = {
        name: '3',
        id: '3',
        child: {
            name: '4'
        }
    }

    it('Non deep objects should be equal', () => {
        expect(objectsAreEqual(object1, object11)).to.be.true;
    });
    it('Non deep objects should NOT be equal', () => {
        expect(objectsAreEqual(object1, object3)).to.be.false;
    });
    it('Deep objects should be equal', () => {
        expect(objectsAreEqual(object3, object33)).to.be.true;
    });
    it('Deep objects should NOT be equal', () => {
        expect(objectsAreEqual(object33, object4)).to.be.false;
    });
})
;
