import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';
import Dashboard from '../views/Dashboard.vue';
import SearchDetails from '../views/SearchDetails.vue';
import TvShowDetails from '../views/TvShowDetails.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter: (to, from) => {
            // reject the navigation
            if (from.path === '/Search') {
                store.dispatch('SEARCH_DATA', '');
                let getSearch = document.getElementsByClassName('searchTerm')[0];
                getSearch.value = '';
            }
            return true;
        },
        meta: {
            layout: 'ListLayout',
        },
    },
    {
        path: '/Search',
        name: 'SearchDetails',
        component: SearchDetails,
        beforeEnter: (to, from) => {
            // reject the navigation
            if (!from.matched.length && to.query.key) {
                store.dispatch('SEARCH_DATA', to.query.key);
            }
            return true;
        },
        meta: {
            layout: 'ListLayout',
        },
    },
    {
        path: '/tvShow/id=:id',
        name: 'TvShowsDetails',
        component: TvShowDetails,
        beforeEnter: (to, from) => {
            store.dispatch('ACTION_ROUTE_FROM', from.fullPath);
        },
        meta: {
            layout: 'DetailsLayout',
        },
    }





]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

export default router;
