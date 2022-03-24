<template>
  <div v-for="select in props.selects" :key="select.id">
    <label>{{ select.typename }}</label>
    <select
      @change="filterData(select.selcted, select.typename)"
      class="form-control"
      v-model="select.selcted"
    >
      <option
        v-for="(option, index) in select.options"
        :key="index"
        :value="option.val"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps({
  selects: Array,
});

function filterData(val, type) {
  console.log(val, type);
  // dispatch  homeshow homeshowhistory => clearFilter new action name
  store.dispatch("ACTION_FILTER", { val, type });
}
</script>

<style>
</style>