import { shallowMount  } from '@vue/test-utils'
import SlectTypes from '@/components/SlectTypes.vue'




describe('SlectTypes.vue', () => {

    let wrapper = shallowMount(SlectTypes);
    
    it("component exists", () => {
          expect(wrapper.exists()).toBe(true);
         
    });
   
   
})
