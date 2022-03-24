import { createStore } from 'vuex';
import TvShowsService from "../services/TvShowsService";

export default createStore({
  state: {
    pageNo: 0,
    homeshows: [],
    homeshowsdetails: {},
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
    MUTATE_PAGE_NO(state, page) {
      state.pageNo = page
    },
    MUTATE_SEARCH_RESULT(state, res) {
      state.searchshows = res;
    },
    MUTATE_TVSHOW_DETAILS(state, res) {
      state.homeshowsdetails = res
    },
    MUTATE_SORT(state, res){
      state.searchshows = res;
    },
    MUTATE_FILTER(state, res) {
      console.log(res);
      state.homeshows = res;
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
      } catch (err) {
        console.log(err);
      }
      commit('MUTATE_LOADING', false);
    },
    async ACTION_TVSHOW_DETAILS({ state, commit }, id) {
      if (state.error) {
        commit('MUTATE_ERROR', false);
      }
      commit('MUTATE_LOADING', true);
      try {
        const resp = await TvShowsService.getTvShowDetails(id);
        commit('MUTATE_TVSHOW_DETAILS', resp);
      } catch (err) {
        console.log(err);
      }
      commit('MUTATE_LOADING', false);
    },
    async SEARCH_DATA({ state, commit }, payload) {
      if (state.error) {
        commit('MUTATE_ERROR', false);
      }
      commit('MUTATE_LOADING', true);
      try {
        if (payload) {
          const resp = await TvShowsService.getSearchResult(payload);
          payload = resp.map(val => val.show);
        }
       commit('MUTATE_SEARCH_RESULT', payload);
      } catch (err) {
        console.log(err);
      }
      commit('MUTATE_LOADING', false);
    },
    ACTION_SORT ({state, commit}, type){
      let sortData = []
      if (type === 'Popularity') {
        sortData = state.homeshows.sort((a, b) => b.rating.average - a.rating.average);
      } else if (type === 'Runtime') {
        sortData = state.homeshows.sort(function (a, b) { return b.runtime - a.runtime });
      } else {
        sortData = state.homeshows.sort((a, b) => new Date(b.premiered) - new Date(a.premiered));
      }
      commit('MUTATE_SORT', sortData);
    },
    ACTION_FILTER({state, commit}, select ) {
      let filteredData = []
      if(select.val == ''){
        state.homeshows = []
      }
      if (select.type === 'Genre') {
        filteredData = state.historyHomeshows.filter(data => data.genres && data.genres.includes(select.val))
      }
      if (select.type === 'Country') {
        filteredData = state.historyHomeshows.filter(data => data.network && data.network.country && data.network.country.name.includes(select.val))
      }
      if (select.type === 'Network') {
        filteredData = state.historyHomeshows.filter(data => data.network && data.network.name && data.network.name.includes(select.val))
      }
      commit('MUTATE_FILTER', filteredData);
    }
  }
});
