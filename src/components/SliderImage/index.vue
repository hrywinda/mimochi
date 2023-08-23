<template>
  <div class="slider-image">
    <agile :initialSlide="1" :autoplay="autoplay" :navButtons="false" :dots="true">
      <div v-for="(item, index) in data" :key="index" class="slide-wrapper">
        <div class="image-person" v-for="(img, index) in item.slides" :key="index">
          <img :src="img.img" alt="" />
          <div class="font-black mt-5 mb-1">{{ img.title }}</div>
          <div class="font-light">{{ img.subtitle }}</div>
        </div>

      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile';

export default {
  name: 'SliderImage',
  components: {
    'agile': VueAgile,
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
