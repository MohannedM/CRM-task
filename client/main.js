import Vue from 'vue';
import Vuetify from 'vuetify';
import vuelidate from 'vuelidate';
import 'vuetify/dist/vuetify.min.css' 
Vue.use(Vuetify);
Vue.use(vuelidate)

import store from '/imports/ui/store.js';

import 'vuetify/dist/vuetify.min.css'

import App from '/client/App.vue';

import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';

const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior
});

import '/imports/ui/routes.js';

Meteor.startup(() => {
  const router = routerFactory.create();

  new Vue({
    router,
    store,
    ...App
  }).$mount('#app');
});
