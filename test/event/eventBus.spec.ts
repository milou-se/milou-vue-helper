import { expect } from 'chai';
import EventBus from '../../src/helpers/event/eventBus';
import Vue from 'vue';

describe('Helpers.event.EventBus', () => {
    before((done) => {
        done();
    });
    it('Should return a instance of Vue', () => {

        expect(EventBus instanceof Vue ).is.true;
    });
});