<template>
  <div id="app" style="width:900px; margin: 30px auto">
    <product-list-one/>
    <product-list-two/>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne';
import ProductListTwo from './components/ProductListTwo';
export default {
  name: 'app',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo,
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
