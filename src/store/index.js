import { createStore } from 'vuex';
import TvShowsService from "../services/TvShowsService";

export default createStore({
  state: {
    pageNo: 0,
    homeshows: [],
    homeshowsdetails: {},
    allFilterVal: {
      Genre: '',
      Country: '',
      Network: ''
    },
    historyHomeshows: [],
    loading: false,
    error: false,
    fromRoute : ''

  },
  mutations: {
    MUTATE_HOME_RESPONSE(state, res) {
      console.log("Data:", res);
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
    MUTATE_TVSHOW_DETAILS(state, res) {
      state.homeshowsdetails = res
    },
    MUTATE_SET_HOMESHOWS(state, res) {
      state.homeshows = res;
    },
    MUTATE_FILTER(state, { type, value }) {
      state.allFilterVal[type] = value;
    },
    MUTATE_ROUTE_FROM(state, route) {
      state.fromRoute = route;
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
        commit('MUTATE_HOME_RESPONSE', payload);
      } catch (err) {
        console.log(err);
      }
      commit('MUTATE_LOADING', false);
    },
    ACTION_SORT({ state, commit }, type) {
      let sortData = []
      if (type === 'Popularity') {
        sortData = state.homeshows.sort((a, b) => b.rating.average - a.rating.average);
      } else if (type === 'Runtime') {
        sortData = state.homeshows.sort(function (a, b) { return b.runtime - a.runtime });
      } else {
        sortData = state.homeshows.sort((a, b) => new Date(b.premiered) - new Date(a.premiered));
      }
      commit('MUTATE_SET_HOMESHOWS', sortData);
    },
    ACTION_FILTER({ state, commit }, { type, value }) {
      console.log("Action :", type, value)
      let filteredData = [];
      if (value === '' || state.allFilterVal[type] && state.allFilterVal[type] !== value) {
        filteredData = state.historyHomeshows;
        commit('MUTATE_FILTER', { type, value });
        Object.keys(state.allFilterVal).forEach((item) => {
          if (state.allFilterVal[item]) {
            filteredData = filteringLogic(item, filteredData, state.allFilterVal[item]);
          }
        });
      } 
      else {
        commit('MUTATE_FILTER', { type, value });
        filteredData = filteringLogic(type, state.homeshows, value);
      }
      commit('MUTATE_SET_HOMESHOWS', filteredData);
    },
    ACTION_ROUTE_FROM ({commit}, route){
      commit('MUTATE_ROUTE_FROM', route)
    }
  }
});
const filteringLogic = (item, showsArray, value) => {
  switch (item) {
    case 'Country':
      return showsArray.filter(data => data?.network?.country?.name.includes(value))
    case 'Genre':
      return showsArray.filter(data => data?.genres?.includes(value))
    case 'Network':
      return showsArray.filter(data => data?.network?.name?.includes(value))
    default:
      return;
  }
}