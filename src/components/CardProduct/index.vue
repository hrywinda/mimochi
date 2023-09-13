<template>
  <div class="item">
    <img class="img-product" :src="product.img" alt="" />
    <div class="content">
      <div class="item-title mb-2 text-sm"> {{ product.label }}</div>
      <div class="price font-bold">{{ product.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
