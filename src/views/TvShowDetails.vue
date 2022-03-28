<template>
  <div v-if="loading" class="overlay">
    <div class="loader"></div>
  </div>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-md-12">
        <div v-if="!loading && showDetails">
          <div class="showDetails row">
            <div class="col-md-12 mb-3">
              <router-link class="back" :to="fromRoute">
                {{ fromRoute === "/" ? "Back to List" : "Back to Search" }}
              </router-link>
            </div>
            <div class="col-md-3">
              <img
                v-if="showDetails.image && showDetails.image.medium"
                class="showimg"
                :src="showDetails.image.medium"
              />
            </div>
            <div class="col-md-9">
              <div class="content-section">
                <div class="top-sec-det">
                  <h3 class="title mb-3">{{ showDetails.name }}</h3>

                  <div class="rating">
                    <div>
                      <span class="lang1">{{ showDetails.language }}</span>
                    </div>
                    <div v-if="showDetails.rating?.average">
                      <i class="fas fa-star fa-fw"></i>
                      {{ showDetails.rating.average }}
                    </div>

                    <div class="no-rating" v-else>
                      <i class="fas fa-star fa-fw"></i>
                    </div>
                    <div>
                      <i class="fas fa-clock fa-fw ml-3"></i>
                      {{ showDetails.runtime }}
                    </div>
                  </div>

                  <div v-if="showDetails.genres">
                    <span
                      class="mo-typeL"
                      v-for="(genre, index) in showDetails.genres"
                      :key="index"
                      >{{ genre }}&nbsp;</span
                    >
                  </div>
                </div>
                <div class="mt-3" v-html="showDetails.summary"></div>

                <div class="text-sm mt-3">
                  <b>Country : </b>
                  <span v-if="showDetails.network">
                    {{ showDetails.network.country.name }} &nbsp;</span
                  >
                </div>
                <div class="text-sm">
                  <b>Url : </b>
                  <a :href="showDetails.url">{{ showDetails.url }} &nbsp;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const store = useStore();
const route = useRoute();
const fromRoute = computed(() => store.state.fromRoute);
const showDetails = computed(() => store.state.homeshowsdetails);
const loading = computed(() => store.state.loading);
//  store.dispatch('SEARCH_DATA', to.query.key);
onMounted(() => {
  store.dispatch("ACTION_TVSHOW_DETAILS", route.params.id);
});
</script>
<style scoped>
.title {
  font-size: 27px;
  font-weight: bold;
}
.showimg {
  width: 100%;
  box-shadow: 0px 2px 8px #999;
}
.showDetails {
  display: flex;
  flex-direction: row;
}
.text-sm {
  border-bottom: 1px solid #ddd;
  padding: 8px 0px;
}
.Bwidth b {
  width: 110px;
  display: inline-block;
}
.back {
  color: #45ab9f;
}
.no-rating i {
  color: #ccc !important;
}

.content-section {
  background: #f1f1f1;
  padding: 20px;
}

.top-sec-det {
  border-bottom: 1px dashed #999;
  padding-bottom: 25px;
}

.mo-typeL {
  background: #999;
  color: #fff;
  padding: 3px;
  margin-right: 5px;
  font-size: 14px;
}
.rating {
  font-size: 14px;
  margin-bottom: 15px;
}
.rating i {
  color: #45ab9f;
}
.lang1 {
  font-size: 13px;
  background: #45ab9f;
  padding: 5px;
  color: #fff;
  margin-right: 15px;
}
</style>
