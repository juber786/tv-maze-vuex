<template>
   <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-md-12">
        <div v-if="!loading && showDetails">
        
          <div class="showDetails row">
            <div class="col-md-12">
              <router-link to="/" > Back To List </router-link>
            </div>
            <div class="col-md-3">
              <img
                v-if="showDetails.image && showDetails.image.medium"
                class="showimg"
                :src="showDetails.image.medium"
              />
            </div>
            <div class="col-md-9">
              <h3 class="title mb-3">{{ showDetails.name }}</h3>
             
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
 import {useRoute} from "vue-router"
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
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
}
.showimg {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background: #ddd;
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
.back-list {
  color: #45ab9f;
  position: absolute;
  left: 15px;
  top: 15px;
  margin-bottom: 10px;
}
</style>
