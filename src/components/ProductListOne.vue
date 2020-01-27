<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.id">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice()">Reduce Price</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'reducePrice'
    ]),
  },
  computed: {
    products(){
      return this.$store.state.products;
    },

    saleProducts(){
      return this.$store.getters.saleProducts;
    },
  }
}
</script>

<style scoped>
  #product-list-one {
    background-color: rgb(178, 60, 247);
    padding: 10px 20px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 30px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    margin-bottom: 10px;
    background-color: white;
    width: 42%;
    display: inline-block;
    margin: 10px;
  }
  .name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .price {
    color: gray;
  }
</style>


