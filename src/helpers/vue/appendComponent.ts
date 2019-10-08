import Vue from 'vue';

export function AppendComponent(component: Vue, target?: string | Element): Vue {
    const mountTarget = $('<div></div>').appendTo(target || 'body');
    component.$mount(mountTarget[0]);
    return component;
}
