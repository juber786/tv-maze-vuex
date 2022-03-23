<template>
  <div class="sort-by">
    <div class="sort-title">Sort By :</div>
    <div class="sort-option">
      <ul>
        <li>
          <a
            @click="sortData('Popularity')"
            :class="popularitySel ? 'selected-sort' : ''"
            href="javascript:;"
            >Popularity</a
          >
        </li>
        <li>
          <a
            @click="sortData('Runtime')"
            :class="runtimeSel ? 'selected-sort' : ''"
            href="javascript:;"
            >Run Time</a
          >
        </li>
        <li>
          <a
            @click="sortData('Premiered')"
            :class="premieredSel ? 'selected-sort' : ''"
            href="javascript:;"
            >Premiered</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
//    const tabSelected = computed(() => true)
import { useStore } from "vuex";
const store = useStore();
const popularitySel = ref(false);
const runtimeSel = ref(false);
const premieredSel = ref(false);

function sortData(type) {
  if (type === "Popularity") {
    popularitySel.value = true;
    runtimeSel.value = false;
    premieredSel.value = false;
    store.commit("MUTATE_BY_SORT", type);
  } else if (type === "Runtime") {
    runtimeSel.value = true;
    popularitySel.value = false;
    premieredSel.value = false;
    store.commit("MUTATE_BY_SORT", type);
  } else {
    premieredSel.value = true;
    runtimeSel.value = false;
    popularitySel.value = false;
    store.commit("MUTATE_BY_SORT", type);
  }
}
</script>
<style>
/* .showF{
     display: none;
    }
  @media only screen and (max-width: 768px) {
    
    .showF{
      position: absolute;
      right:15px; display:block;
    }
 } */
</style>