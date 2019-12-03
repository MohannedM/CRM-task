import Vue from 'vue';
import Vuex from 'vuex';
import { Orders } from "../../lib/collections.js";
Meteor.subscribe('allOrders');

// console.log(Orders.find({}))
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: []
  },
  // mutations:{
  //   setOrders: (state, orders) =>{
  //     state.orders = orders
  //   }
  // },
  // actions:{
  //   getOrders: ({commit}) => {
  //     const orders = Orders.find({}).fetch();
  //     commit('setOrders');
  //   }
  // },
  // getters: {
  // orders: state => {
  //   return state.orders
  // }
// }
});
