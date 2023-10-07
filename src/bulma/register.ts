/** 
 * @fileoverview TypeScript file converting JavaScript code and adding documentation and type annotations.
 */

import App from '@liberu-ui/ui/src/core/app';
import MissingKey from './components/navbar/MissingKeys.vue';
import KeyCollector from './components/settings/KeyCollector.vue';
import LanguageSelector from './components/settings/LanguageSelector.vue';

/**
 * Registers the MissingKey component as a navbar item with a given order.
 * 
 * @param {string} itemName - The name/id of the navbar item.
 * @param {object} component - The component to be registered as a navbar item.
 * @param {number} order - The order of the navbar item.
 */
App.registerNavbarItem('missing-key', MissingKey, 100);

/**
 * Registers the LanguageSelector component as a settings item with a given order.
 * 
 * @param {string} itemName - The name/id of the settings item.
 * @param {object} component - The component to be registered as a settings item.
 * @param {number} order - The order of the settings item.
 */
App.registerSettingsItem('language-selector', LanguageSelector, 100);

/**
 * Registers the KeyCollector component as a settings item with a given order.
 * 
 * @param {string} itemName - The name/id of the settings item.
 * @param {object} component - The component to be registered as a settings item.
 * @param {number} order - The order of the settings item.
 */
App.registerSettingsItem('key-collector', KeyCollector, 600);