<template>
  <component :is="layout" />
  <div v-if="scrolling" @click="goTop" class="scroll-top">
    <i class="fa-solid fa-arrow-up"></i>
  </div>
</template>

<script setup>
import "@/assets/main.css";
import ListLayout from "@/layouts/ListLayout";
import DetailsLayout from "@/layouts/DetailsLayout";

import { ref, watch, markRaw } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const layout = ref(null);
const scrolling = ref(false);

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

watch(route, (to) => {
  if (to.meta.layout == "ListLayout") {
    layout.value = markRaw(ListLayout);
  } else {
    layout.value = markRaw(DetailsLayout);
  }
});
</script>
