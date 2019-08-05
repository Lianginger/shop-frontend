<template>
  <div class="col-sm-4">
    <div class="w-100">
      <div
        style="width: 100%;padding-bottom: 100%;background-position: center;background-repeat: no-repeat;background-size: cover"
        :style="{ 'background-image': 'url(' + product.image + ')' }"
      ></div>
    </div>
    <h3>{{product.name}}</h3>
    <h3>
      <span class="badge badge-success">$ {{product.price}}</span>
    </h3>

    <p>{{product.description}}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
