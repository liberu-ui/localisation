import { RouteImporter } from '@liberu-ui/ui/src/modules/importers/routeImporter';

/**
 * Retrieves the routes for the system module.
 *
 * @returns {Array<RouteConfig>} The routes for the system module.
 */
const getSystemRoutes = (): Array<RouteConfig> => {
  // Import the routeImporter function from '@liberu-ui/ui/src/modules/importers/routeImporter'
  const routeImporterFunction: RouteImporter = routeImporter;

  // Import all the .ts files in the './system' directory
  const routeContext = require.context('./system', false, /.*\.ts$/);

  // Use the routeImporter function to import the routes from the route context
  const routes = routeImporterFunction(routeContext);

  return routes;
};

/**
 * The route configuration for the system module.
 */
const systemRoutes: RouteConfig = {
  path: '/system',
  children: getSystemRoutes(),
};

export default systemRoutes;