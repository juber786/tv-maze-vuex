<template>
  <div class="filter-block">
    <div class="filter-content">
      <h2 class="filter-head">Filters</h2>
      <div>
        <label>Genre</label>
        <select
          @change="filterData(selectedGenre, 'Genre')"
          class="form-control"
          v-model="selectedGenre"
        >
          <option value="">Select</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
        </select>
      </div>
      <div>
        <label>Country</label>
        <select
          @change="filterData(selectedCountry, 'Country')"
          class="form-control"
          v-model="selectedCountry"
        >
          <option value="">Select</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Brazil">Brazil</option>
          <option value="France">France</option>
        </select>
      </div>
      <div>
        <label>Network</label>
        <select
          @change="filterData(selectedNetwork, 'Network')"
          class="form-control"
          v-model="selectedNetwork"
        >
          <option value="">Select</option>
          <option value="FOX">FOX</option>
          <option value="The CW">The CW</option>
          <option value="NBC">NBC</option>
        </select>
      </div>
      <!-- <button class="btn btn-primary app-filter-btn"> <i class="fas fa-filter"></i> APPLY FILTER </button> -->
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
import { ref } from "vue";
const selectedGenre = ref("");
const selectedCountry = ref("");
const selectedNetwork = ref("");
function filterData(val, type) {
  if (type === "Genre") {
    selectedCountry.value = "";
    selectedNetwork.value = "";
  }
  if (type === "Country") {
    selectedGenre.value = "";
    selectedNetwork.value = "";
  }
  if (type === "Network") {
    selectedGenre.value = "";
    selectedNetwork.value = "";
  }
  store.commit("MUTATE_FILTER", { val, type });
}
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