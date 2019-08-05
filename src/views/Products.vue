<template>
  <div>
    <h1>所有商品</h1>
    <hr />
    <div class="row text-center">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import { apiHelper } from '../utils/helpers'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.fetchApi()
  },
  methods: {
    async fetchApi() {
      this.products = await apiHelper
        .get('/products')
        .then(function(response) {
          // handle success
          return response.data
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
    }
  }
}
</script>
