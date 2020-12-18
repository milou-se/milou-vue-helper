import Vue from 'vue';

export function AppendComponent(component: Vue, target?: HTMLElement | Element): Vue {
    const mountTarget = (target || document.body).appendChild(document.createElement('div'));
    component.$mount(mountTarget);
    return component;
}
