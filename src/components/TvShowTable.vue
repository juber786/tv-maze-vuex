<template>
  <div class="table-res">
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">Genres</th>
          <th scope="col">Reating</th>
          <th scope="col">Vew Details</th>
        </tr>
      </thead>
      <tbody v-if="shows.length">
        <tr v-for="(show, index) in shows" :key="show.id">
          <td>{{ index+1 }}</td>
          <td>
            <img
              v-if="show.image && show.image.medium"
              class="imgSm"
              :src="show.image.medium"
            />
          </td>
          <td>{{ show.name }}</td>
          <td>
            <span v-for="(genre, index) in show.genres" :key="index"
              >{{ genre }} &nbsp;
            </span>
          </td>
          <td>{{ show.rating.average }}</td>
          <td>
            <!-- <router-link title="View Details" :to="'/tvShow/id=' + show.id">
              View Details</router-link
            > -->
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="6">
            <div class="alert alert-danger text-center">No Data Found</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

import { mapGetters } from "vuex";
import * as types from "../store/types";
export default {
  name: "TvShowTable",
  
  computed: {
    ...mapGetters({
      shows: types.GET_TV_SHOWS
    })
  },
  methods(){
   
  }
};
</script>
<style>
.imgSm {
  width: 50px;
}
.table-res table td {
  vertical-align: middle !important;
}
.table-res {
  width: 100%;
  overflow: auto;
}

@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  .table-res tr:nth-of-type(odd) {
    background: #eee;
  }
  /* Force table to not be like tables anymore */
  .table-res table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  .table-res thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  .table-res tr {
    border: 1px solid #ccc;
  }

  .table-res td {
    /* Behave  like a "row" */
    border: none;

    position: relative;
    padding-left: 50% !important;
  }

  .table-res td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }

  /*
	Label the data
	*/
  .table-res td:nth-of-type(1):before {
    content: "#";
    font-weight: bold;
  }
  .table-res td:nth-of-type(2):before {
    content: "Photo";
    font-weight: bold;
  }
  .table-res td:nth-of-type(3):before {
    content: "Name";
    font-weight: bold;
  }
  .table-res td:nth-of-type(4):before {
    content: "Genres";
    font-weight: bold;
  }
  .table-res td:nth-of-type(5):before {
    content: "Reating";
    font-weight: bold;
  }
  .table-res td:nth-of-type(6):before {
    content: "Vew Details";
    font-weight: bold;
  }
}
</style>