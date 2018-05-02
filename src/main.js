import 'babel-polyfill';

import Vue from 'nativescript-vue';

import * as application from 'application';
import ImagePicker from 'nativescript-imagepicker';
import { ImageCacheIt } from 'nativescript-image-cache-it';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';

import Home from './components/Home';

import store from './store';

import './styles.scss';

// Font icons
// TNSFontIcon.debug = true
TNSFontIcon.paths = {
  'fa': './font-awesome.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);

// Image picker
Vue.registerElement('ImagePicker', () => ImagePicker.ImagePicker);
Vue.registerElement('ImageCacheIt', () => ImageCacheIt);

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({

  render: h => h(Home),

  store,

}).$start();
