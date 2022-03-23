<template>
  <section class="main-block">
    <div v-if="loading" class="overlay">
      <div class="loader"></div>
    </div>
    <div v-else class="container-fluid">
      <div class="back-list-wrap">
        <div class="row">
          <div class="col-md-12 text-center">
            <router-link to="/" class="back-list"> Back To List </router-link>
            <br />
            Search Results : <span class="count"> {{ tvShows.length }} </span>
          </div>
          <!-- <div class="col-md-6 text-right"></div> -->
        </div>
      </div>

      <div class="search-container">
        <div class="ser-items" v-for="show in tvShows" :key="show.id">
          <div class="cards-block">
            <span class="lang">{{ show.language }}</span>
            <img
              v-if="show.image && show.image.medium"
              class="imgSm"
              :src="show.image.medium"
            />
            <div class="card-details">
              <h2 class="card-title">{{ show.name }}</h2>
              <div v-if="show.genres.length">
                <span
                  class="mo-type"
                  v-for="(genre, index) in show.genres"
                  :key="index"
                  >{{ genre }}&nbsp;</span
                >
              </div>
              <div v-else><span class="mo-type">NA</span></div>

              <div class="rating">
                <div v-if="show.rating.average">
                  <i class="fas fa-star fa-fw"></i> {{ show.rating.average }}
                </div>

                <div class="no-rating" v-else>
                  <i class="fas fa-star fa-fw"></i>
                </div>
                <div>
                  <i class="fas fa-clock fa-fw ml-3"></i> {{ show.runtime }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const tvShows = computed(() => store.state.searchshows);
const loading = computed(() => store.state.loading);

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
  margin-bottom: 25px;
}
.back-list {
  color: #45ab9f;
  position: absolute;
  left: 15px;
  top: 15px;
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