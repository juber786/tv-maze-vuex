<template>
  <div>
    <label>{{ props.filterType.typename }}</label>
    <select
      @change="(e) => filterData(e.target.value, props.filterType.typename)"
      class="form-control"
      :value="activeSelectedValue"
    >
      <option
        v-for="(option, index) in props.filterType.options"
        :key="index"
        :value="option.val"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useStore } from "vuex";
const activeSelectedValue = ref("");
const store = useStore();
const props = defineProps({
  filterType: Object,
});
async function filterData(val, type) {
  activeSelectedValue.value = val;
  console.log("Filter :", { value: val, type })
  //Set all filter value
  // creat a mutation to save filter
  // dispatch  homeshow homeshowhistory => clearFilter new action name
  
  await store.dispatch("ACTION_FILTER", { value: val, type });
}
</script>

<style>
</style>