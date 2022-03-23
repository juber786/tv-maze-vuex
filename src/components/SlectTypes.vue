<template>
    <div>
        <label>Genre</label>
        <select
          @change="filterData(selectedGenre, 'Genre')"
          class="form-control"
          v-model="selectedGenre">
          <option value="">Select</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
        </select>
      </div>
</template>

<script setup>
    
</script>

<style>

</style>