/** 
* This is a TypeScript code file with detailed documentation and type annotations for the given JavaScript code file. 
* The logic of the code has not been changed, only the type annotations have been added.
*/

import { ComponentOptions, Component } from 'vue';

interface Meta {
  breadcrumb: string;
  title: string;
}

interface RouteConfig extends ComponentOptions<Component> {
  meta: Meta;
}

const LocalisationIndex = () => import('../../../pages/localisation/Index.vue');

const routeConfig: RouteConfig = {
  name: 'system.localisation.index',
  path: '',
  component: LocalisationIndex,
  meta: {
    breadcrumb: 'index',
    title: 'Localisation',
  },
};

export default routeConfig;