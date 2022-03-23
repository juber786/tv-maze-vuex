import { createStore } from 'vuex';
import TvShowsService from "../services/TvShowsService";

export default createStore({
  state: {
    pageNo: 0,
    homeshows: [],
    searchshows: [],
    historyHomeshows: [],
    loading: false,
    error: false,
   
  },
  mutations: {
    MUTATE_HOME_RESPONSE(state, res) {
      console.log(res);
      state.homeshows = res;
      state.historyHomeshows = res
    },
    MUTATE_LOADING(state, condition) {
      state.loading = condition;
    },
    MUTATE_ERROR(state, condition) {
      state.error = condition;
    },
    MUTATE_PAGE_NO(state, page){
      state.pageNo = page
    },
    MUTATE_SEARCH_RESULT(state, res) {
      
       let output =  res.map(val => val.show);
       console.log('Search Data', output);
       state.searchshows = output;
    },
    MUTATE_BY_SORT(state, type){
       if(type === 'Popularity'){
        state.homeshows = state.homeshows.sort((a, b) => b.rating.average - a.rating.average);
       }else if(type === 'Runtime'){
        state.homeshows = state.homeshows.sort(function(a, b){return b.runtime - a.runtime});
       }else {
        state.homeshows = state.homeshows.sort((a, b) => new Date(b.premiered) - new Date(a.premiered)); 
       }
    },
    MUTATE_FILTER(state, { val, type }){
      
      if(type === 'Genre'){
        state.homeshows = state.historyHomeshows.filter(data => data.genres && data.genres.includes(val))
      }
      else if(type === 'Country'){
        state.homeshows = state.historyHomeshows.filter(data => data.network && data.network.country && data.network.country.name.includes(val))
      }
      else{
        state.homeshows = state.historyHomeshows.filter(data => data.network && data.network.name && data.network.name.includes(val))
      }
     
    }
  },
  actions: {
    async ACTION_HOME({ state, commit }) {
      if (state.error) {
        commit('MUTATE_ERROR', false);
      }
      commit('MUTATE_LOADING', true);
      try {
        const resp = await TvShowsService.getTvShowByPage(state.pageNo);
        commit('MUTATE_HOME_RESPONSE', resp);
      } catch(err) {
        console.log(err);
      }
      commit('MUTATE_LOADING', false);
    },
    async SEARCH_DATA({ state, commit}, payload) {
      if (state.error) {
        commit('MUTATE_ERROR', false);
      }
      commit('MUTATE_LOADING', true);
      try {
        const resp = await TvShowsService.getSearchResult(payload);
        commit('MUTATE_SEARCH_RESULT', resp);
      } catch(err) {
        console.log(err);
      }
      commit('MUTATE_LOADING', false);
    }
  }
});
