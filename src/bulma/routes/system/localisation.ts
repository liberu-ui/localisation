```typescript
/**
 * Imports routes from the given context using routeImporter.
 * @param context The webpack context to import routes from.
 * @returns The imported routes.
 */
import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const importRoutes = (context: __WebpackModuleApi.RequireContext) => {
  return routeImporter(context);
};

/**
 * Asynchronously imports the Router component.
 * @returns A promise that resolves to the Router component.
 */
const importRouter = () => {
  return import('@liberu-ui/ui/src/bulma/pages/Router.vue');
};

/**
 * Represents a localisation route.
 */
export default {
  /**
   * The path for the localisation route.
   */
  path: 'localisation',
  /**
   * The component for the localisation route.
   */
  component: Router,
  /**
   * Metadata for the localisation route.
   */
  meta: {
    /**
     * The breadcrumb for the localisation route.
     */
    breadcrumb: 'localisation',
    /**
     * The route for the localisation route.
     */
    route: 'system.localisation.index',
  },
  /**
   * The children routes for the localisation route.
   */
  children: importRoutes(require.context('./localisation', false, /.*\.ts$/)),
};
```