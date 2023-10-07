/**
 * @file This file contains the TypeScript code for the LocalisationEditTexts component configuration.
 */

import { RouteConfig } from 'vue-router';
import LocalisationEditTexts from '../../../pages/localisation/EditTexts.vue';

/**
 * Represents the LocalisationEditTexts component configuration.
 */
const localisationEditTextsConfig: RouteConfig = {
  /**
   * The name of the component.
   */
  name: 'system.localisation.editTexts',

  /**
   * The URL path for the component.
   */
  path: 'editTexts',

  /**
   * The component to be rendered.
   */
  component: LocalisationEditTexts,

  /**
   * The metadata associated with the component.
   */
  meta: {
    /**
     * The breadcrumb text for the component.
     */
    breadcrumb: 'edit texts',

    /**
     * The title for the component.
     */
    title: 'Edit Texts',
  },
};

export default localisationEditTextsConfig;