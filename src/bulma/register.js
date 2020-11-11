import Vue from 'vue';
import App from '@enso-ui/ui/src/core/app';
import MissingKey from './components/navbar/MissingKeys.vue';
import KeyCollector from './components/settings/KeyCollector.vue';
import LanguageSelector from './components/settings/LanguageSelector.vue';

Vue.component('navbar-missing-key', MissingKey);
Vue.component('navbar-key-collector', KeyCollector);
Vue.component('navbar-language-selector', LanguageSelector);
App.registerNavbarItem('navbar-missing-key', 10);
App.registerSettingsItem('navbar-key-collector', 30);
App.registerSettingsItem('navbar-language-selector', 10);
