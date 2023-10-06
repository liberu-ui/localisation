import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./localisation', false, /.*\.js$/));
const Router = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'localisation',
    component: Router,
    meta: {
        breadcrumb: 'localisation',
        route: 'system.localisation.index',
    },
    children: routes,
};
