<template>
  <div class="back-list-wrap text-center">
    <router-link to="/" class="back-list"> Back To List </router-link>

    Search Results : <span class="count"> {{ tvShows.length }} </span>
  </div>
  <Cards v-if="tvShows" :tvShows="tvShows" />
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import Cards from "../components/Cards.vue";
const store = useStore();
const tvShows = computed(() => store.state.homeshows);
</script>
<style>
.search-container {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
}
.ser-items {
  flex: 0 0 18%;
}

.back-list-wrap {
  position: relative;
  margin-bottom: 10px;
}
.back-list {
  color: #45ab9f;
  position: absolute;
  left: 0px;
  top: 2px;
  margin-bottom: 10px;
}

.count {
  font-weight: bold;
  color: #45ab9f;
  font-size: 18px;
}

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
}
</style>