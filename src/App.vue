<template>
    <div v-if="loading" class="overlay">
      <div class="loader"></div>
    </div>
    

   <TvShowHeader />
   <section class="main-block">
         <div class="container-fluid">
            <div class="content-holder">
            <div class="filter-holder">
               <SideFilter />
            </div>
            <div class="card-sort-holder">
               
               <SortData />
               <div class="card-wrapper">
                  <div class="container-field">
                     <router-view></router-view>
                  </div>
            </div>
         </div>
         </div>
      </div>
  </section>
   
</template>

<script setup>
import '@/assets/main.css';
import { computed} from "vue";
import { useStore} from "vuex"
import TvShowHeader from './components/TvShowHeader.vue'
import SideFilter from "./components/SideFilter.vue";
import SortData from "./components/SortData.vue";
const store = useStore();
const loading = computed(() => store.state.loading);

</script>

<style>

</style>
