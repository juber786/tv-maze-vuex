import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';
import Dashboard from '../components/Dashboard.vue';
import SearchDetails from '../components/SearchDetails.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter: (to, from) => {
            // reject the navigation
            if (from.path === '/Search') {
                store.dispatch('SEARCH_DATA', '');
            }
            return true;
        },
    },
    {
        path: '/Search',
        name: 'SearchDetails',
        component: SearchDetails,
        beforeEnter: (to, from) => {
            // reject the navigation
            console.log('...check..', to, from);
            if (!from.matched.length && to.query.key) {
                store.dispatch('SEARCH_DATA', to.query.key);
            }
            return true;
        },
    }
    // {
    //     path:'/tvShow/id=:id',
    //     name:'TvShowsDetails',
    //     component:TvShowsDetails
    // }
    // {
    //     path:'/tvShows',
    //     name:'TvShows',
    //     component:TvShows
    // },




]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

export default router;
