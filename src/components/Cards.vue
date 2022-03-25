<template>
  <div v-if="props.tvShows.length" class="row">
      <div class="col-md-3 col-6" v-for="show in props.tvShows" :key="show.id">
        <div class="cards-block" @click="showDetails(show.id)">
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
              <div><i class="fas fa-clock fa-fw ml-3"></i> {{ show.runtime }}</div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div v-else-if="!loading && !props.tvShows.length" class="row">
      <div class="col-md-12">
          <div class="alert alert-danger text-center">No Data Found</div>
      </div>
  </div>
  
  
</template>

<script setup>
import { useStore, } from "vuex";
import { computed, defineProps } from "vue";
import { useRouter} from "vue-router";
const router = useRouter();
const store = useStore();
// const tvShows = computed(() => store.state.homeshows);
const loading = computed(() => store.state.loading);


const props = defineProps({
  tvShows: Array,
});
function showDetails(id){
   router.push({ path: `/tvShow/id=${id}`});
    
}
</script>
