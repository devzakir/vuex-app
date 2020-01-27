<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  computed: {
    products(){
      return this.$store.state.products;
    }
  }
}
</script>

<style scoped>
  #product-list-two {
    background-color: rgb(20, 231, 161);
    padding: 10px 20px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    margin-bottom: 10px;
    background-color: white;

  }

  .name {
    font-size: 18px;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  .price {
    color: gray;
  }
</style>
