import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./system', false, /.*\.js$/));

export default {
    path: '/system',
    children: routes,
};
