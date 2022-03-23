<template>
  
    <div class="header-wrapper"> 
       <div>
         <img class="logo-img" src="../assets/tvm-header-logo.png" />
       </div>
       <div class="search">
                <input type="text" class="searchTerm" v-model="searchtext" placeholder="Search Tv Shows">
                <button type="submit" @click="searchData" class="searchButton">
                   <i class="fa fa-search"></i>
                </button>
       </div>
    </div>
   

</template>
<script setup>
   import { ref  } from "vue";
   import { useRouter, useRoute } from 'vue-router'
   const route = useRoute()
   const router = useRouter()
   const searchtext = ref('');
  
   function searchData(){
     console.log(searchtext)
     if( route.path == "/" || route.query.key !== searchtext.value){
         router.push({ path: "/Search", query: { key: searchtext.value } });
     }
   }
</script>
<style>
.header-wrapper{ padding:10px; display: flex; justify-content:space-between; text-align: left; background: #222; border-bottom:3px solid #45ab9f; }
.logo-img{ width: 200px;}

/* .menuWrapper {
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
}
.menu {
  margin-bottom: 0px;
  padding: 0px;
  margin-bottom: 25px;
  margin-top: 10px;
}
.menu li {
  list-style-type: none;
  display: inline-block;
  margin-right: 25px;
}
.menu li a {
  display: block;
}
.router-link-active {
  background: #222;
  padding: 4px;
  color: #fff;
  border-radius: 5px;
}
.router-link-active:hover {
  color: #fff;
  text-decoration: none;
} */

.search {
  justify-content: right;
  margin-top: 12px;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 200px;
  border: 1px solid #45ab9f;
  border-right: none;
  padding: 5px 5px 5px 15px;
  height: 36px;
  border-radius: 36px 0 0 36px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #00B4CC;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #45ab9f;
  background: #45ab9f;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap{
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


@media only screen and (max-width: 768px){
.logo-img { width:100px; margin-top: 5px;}
.search{ margin-top: 5px;}
}

</style>
