/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-04 21:43:39
 * @version $Id$
 */
import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from "vuex-persistedstate";
import shop from '@/vuex/shop/shop'
import cart from '@/vuex/cart/cart'
import user from '@/vuex/user/user'
import search from '@/vuex/search/search'
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state:{
    ...shop.state,
    ...cart.state,
    ...user.state,
    ...search.state,
  },
  getters:{
    ...shop.getters,
  },
  mutations:{
    ...shop.mutations,
    ...cart.mutations,
    ...user.mutations,
    ...search.mutations
  },
  actions:{
    ...shop.actions,
    ...search.actions
  }/* ,
  plugins:[persistedState()] */
});
export default store;
