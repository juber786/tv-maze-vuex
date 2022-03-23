<template>
  <section class="main-block">
    <div v-if="loading" class="overlay">
      <div class="loader"></div>
    </div>
    <div class="container-fluid">
      <div class="content-holder">
        <div class="filter-holder">
          <SideFilter />
        </div>
        <div class="card-sort-holder">
          <SortData />
          <div class="card-wrapper">
            <div class="container-field">
              <Cards />
              <div v-if="tvShows.length" class="row">
                 <div class="col-md-12">
                  <VueTailwindPagination
                    v-if="!loading"
                    :current="currentPage"
                    :total="total"
                    :per-page="perPage"
                    @page-changed="onPageClick($event)"
                  />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div v-if="scrolling" @click="goTop" class="scroll-top">
    <i class="fa-solid fa-arrow-up"></i>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import Cards from "./Cards.vue";
import SideFilter from "./SideFilter.vue";
import SortData from "./SortData.vue";
const store = useStore();
const currentPage = ref(1);
const perPage = ref(2);
const total = ref(100);
const scrolling = ref(false);
const loading = computed(() => store.state.loading);
const tvShows = computed(() => store.state.homeshows);

function onPageClick(page) {
  goTop();
  this.currentPage = page;
  store.commit("MUTATE_PAGE_NO", page);
  store.dispatch("ACTION_HOME");
  console.log(page)
}
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (scrolling.value = true)
    : (scrolling.value = false);
}
function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

<style scoped>
/* LoaderCSS */
.loader {
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  position: absolute;
  transform: translate(50%, 50%);
  top: 50%;
  left: 50%;
  z-index: 2000;
}

.overlay {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media only screen and (max-width: 768px) {
  .content-holder {
    flex-direction: column;
  }
  .filter-holder {
    flex-basis: 100%;
    max-width: 100%;
  }
  .card-sort-holder {
    flex-basis: 100%;
    max-width: 100%;
  }
}
</style>
