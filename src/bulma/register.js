import Vue from 'vue';
import App from '@enso-ui/ui/src/core/app';
import MissingKey from './components/navbar/MissingKeys.vue';
import KeyCollector from './components/settings/KeyCollector.vue';
import LanguageSelector from './components/settings/LanguageSelector.vue';

Vue.component('navbar-missing-key', MissingKey);
Vue.component('setting-key-collector', KeyCollector);
Vue.component('setting-language-selector', LanguageSelector);
App.registerNavbarItem('navbar-missing-key', 10);
App.registerSettingsItem('setting-language-selector', 100);
App.registerSettingsItem('setting-key-collector', 600);
