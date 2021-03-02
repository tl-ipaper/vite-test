import { mount } from '@vue/test-utils'
import App from '@evolved/App.vue';

describe('App', () => {
    it('can be mounted', () => {
        const wrapper = mount(App);

        expect(wrapper).toBeTruthy();
    });
});
