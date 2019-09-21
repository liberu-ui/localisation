import routeImporter from '@core-modules/importers/routeImporter';

const routes = routeImporter(require.context('./system', false, /.*\.js$/));

export default {
    path: '/system',
    children: routes,
};
