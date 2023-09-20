<template>
  <div class="carousel-product">
    <agile :initialSlide="0" :autoplay="autoplay" :navButtons="false" :dots="true">
      <div v-for="(item, index) in data" :key="index" class="slide-wrapper">
        <ProductCard v-for="(product, index) in item.slides" :key="index" :product="product" />
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
import ProductCard from "@/components/CardProduct";

export default {
  name: "SliderImage",
  components: {
    "agile": VueAgile,
    ProductCard,
  },
  props: {
    data: {
      type: Array,
      required: false,
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
