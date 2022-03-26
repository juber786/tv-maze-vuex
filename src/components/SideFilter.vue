<template>
  <div class="filter-block">
    <div class="filter-content">
      <h2 class="filter-head">Filters</h2>
      <div v-for="select in selectItems" :key="select.id">
        <SlectTypes :filterType="select" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import SlectTypes from "./SlectTypes.vue";

const selectItems = reactive([
  {
    id: 1,
    typename: "Genre",
    selected: "",
    options: [
      { name: "Select", val: "" },
      { name: "Comedy", val: "Comedy" },
      { name: "Crime", val: "Crime" },
      { name: "Drama", val: "Drama" },
    ],
  },
  {
    id: 2,
    typename: "Country",
    selected: "",
    options: [
      { name: "Select", val: "" },
      { name: "United States", val: "United States" },
      { name: "United Kingdom", val: "United Kingdom" },
      { name: "Brazil", val: "Brazil" },
    ],
  },
  {
    id: 3,
    typename: "Network",
    selected: "",
    options: [
      { name: "Select", val: "" },
      { name: "FOX", val: "FOX" },
      { name: "The CW", val: "The CW" },
      { name: "NBC", val: "NBC" },
    ],
  },
]);

// import { useStore } from "vuex";
// const store = useStore();
// import { ref } from "vue";
// const selectedGenre = ref("");
// const selectedCountry = ref("");
// const selectedNetwork = ref("");
// function filterData(val, type) {
//   // dispatch  homeshow homeshowhistory => clearFilter new action name
//   store.commit("MUTATE_SET_HOMESHOWS", { val, type });
// }
</script>

<style>
@media only screen and (max-width: 768px) {
  /* .filter-content{
     position: absolute;
     width: calc(100% - 38px);
     z-index: 100; display: none;
  } */
}
</style>