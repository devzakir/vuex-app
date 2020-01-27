import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      { id: 1, name: 'Banana Skin', price: 20, },
      { id: 2, name: 'Shiny Star', price: 40, },
      { id: 3, name: 'Green Shells', price: 60, },
      { id: 4, name: 'REd Shells', price: 80, },
    ],
  },

  getters: {
    saleProducts: state => {
        var saleProducts = state.products.map(product => {
          return {
            name: '**' + product.name+ '**',
            price: product.price/2,
          }
        });
        return saleProducts;
    }
  },

  mutations: {
    reducePrice(state){
      return state.products = state.products.map(product => {
        return {
          id: product.id,
          name: product.name,
          price: product.price -= 2
        }
      });
    }
  },

  actions: {
    reducePrice(context){
      setTimeout(() => {
        context.commit('reducePrice');
      }, 1000);
    }
  }
});
