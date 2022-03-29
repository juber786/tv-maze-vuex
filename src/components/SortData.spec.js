import { shallowMount  } from '@vue/test-utils'
import SortData from '@/components/SortData.vue'




describe('SortData.vue', () => {
    
    
    let wrapper = shallowMount(SortData);
   
    it("component exists", () => {
          expect(wrapper.exists()).toBe(true);
          wrapper.find('a').trigger('click');
          wrapper.vm.sortData('Popularity');
    });
   
   
})
