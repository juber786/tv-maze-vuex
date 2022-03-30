import { createStore } from 'vuex';

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
    fromRoute: ''
  },
  mutations: {
    MUTATE_HOME_RESPONSE: jest.fn(),
    MUTATE_LOADING: jest.fn(),
    MUTATE_ERROR: jest.fn(),
    MUTATE_PAGE_NO: jest.fn(),
    MUTATE_TVSHOW_DETAILS: jest.fn(),
    MUTATE_SET_HOMESHOWS: jest.fn(),
    MUTATE_FILTER: jest.fn(),
    MUTATE_ROUTE_FROM: jest.fn(),
  },
  actions: {
    ACTION_HOME: jest.fn(),
    ACTION_TVSHOW_DETAILS: jest.fn(),
    SEARCH_DATA: jest.fn(),
    ACTION_SORT: jest.fn(),
    ACTION_FILTER: jest.fn(),
    ACTION_ROUTE_FROM: jest.fn(),
  },
});