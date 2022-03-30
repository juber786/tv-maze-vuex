import { mount } from '@vue/test-utils'
import TvShowHeader from '@/components/TvShowHeader.vue'
import store from '../store/_test_/index.js'
import { useRouter } from 'vue-router'

jest.mock('vue-router', () => ({
    useRouter: jest.fn(() => ({
        push: () => { }
    }))
}))
store.dispatch = jest.fn();
const push = jest.fn()
useRouter.mockImplementationOnce(() => ({
    push
}))
describe('TvShowHeader.vue', () => {
    let wrapper = mount(TvShowHeader, {
        global: {
            plugins: [store]
        }
    });

    it("component exists", () => {
        expect(wrapper.exists()).toBe(true);
    });
    
    it("On button click should be call search data method ", async () => {
        wrapper.vm.searchtext = 'checkmate';
        await wrapper.find('button').trigger('click');
        expect(store.dispatch).toHaveBeenCalledWith("SEARCH_DATA", "checkmate");
        expect(push).toHaveBeenCalledTimes(1)
        expect(push).toHaveBeenCalledWith({"path": "/Search", "query": {"key": "checkmate"}});
    });


})
