<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-md-12">
        <div v-if="!loading && showDetails">
          <div class="showDetails row">
            <div class="col-md-12 mb-3">
              <router-link class="back" to="/"> Back To List </router-link>
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
                 <h3 class="title mb-3">{{ showDetails.name }}</h3>
                 <div v-if="showDetails.genres">
                  <span
                    class="mo-typeL"
                    v-for="(genre, index) in showDetails.genres"
                    :key="index"
                    >{{ genre }}&nbsp;</span
                    >
                 </div>
                 
               
              </div>
            </div>
            {{showDetails}}
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
const showDetails = computed(() => store.state.homeshowsdetails);
//  store.dispatch('SEARCH_DATA', to.query.key);
onMounted(() => {
  store.dispatch("ACTION_TVSHOW_DETAILS", route.params.id);
});
</script>
<style>
.title {
  font-size: 30px;
  font-weight: bold;
}
.showimg {
  width: 100%;
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

.content-section {
  background: #f1f1f1;
  padding: 20px;
}

.mo-typeL{ background: #fff; padding:5px; margin-right: 5px;}
</style>
