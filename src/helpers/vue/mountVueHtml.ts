import Vue from 'vue';

export function MountVueHtml(html: any, targetElement: Element) {
    const extend = Vue.extend({
        template: html
    });
    const vm = new extend().$mount(targetElement);
}
