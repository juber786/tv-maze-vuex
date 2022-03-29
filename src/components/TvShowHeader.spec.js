import { shallowMount  } from '@vue/test-utils'
import TvShowHeader from '@/components/TvShowHeader.vue'
import store from '../store/_test_/index.js'
// import Vuex from "vuex";

// const localVue = createLocalVue()
// localVue.use(Vuex)

describe('TvShowHeader.vue', () => {
    
    let wrapper;
    let mockstore;
   
    beforeEach(() => {
          wrapper = shallowMount(TvShowHeader, {
            mockstore : store
       });
    });
    it("component exists", () => {
          expect(wrapper.exists()).toBe(true);
    });
    it("On button click should be call search data method ", async () => {
        console.log( ".......jj..", wrapper.find('button').text())
        await wrapper.find('button').trigger('click');
       
        wrapper.vm.searchData();
        
        await mockstore.dispatch("SEARCH_DATA");


        
        // expect(await mockstore.dispatch()).toHaveBeenCalled()
        // expect(await mockstore.actions.SEARCH_DATA()).toHaveBeenCalled();
        // await mockstore.dispatch('SEARCH_DATA');
        
     
        
       
        // // const storeDispatch = jest.spyOn(wrapper.vm.store, 'dispatch')
        // expect(wrapper.vm.store.dispatch).toHaveBeenCalled();
        // // expect(storeDispatch).toHaveBeenCalled();
        // expect(actions.SEARCH_DATA).toHaveBeenCalledWith('test');
    });

   
})
