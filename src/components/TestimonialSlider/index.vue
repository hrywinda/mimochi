<template>
  <div class="testimonial-slider">
    <agile :initialSlide="1" :autoplay="false" :navButtons="false" :dots="true">
      <div v-for="(slide, index) in slides" :key="index" class="slide-wrapper">
        <div class="left-content">
          <div class="heading-2 mb-4">"{{ slide.title }}" </div>
          <div v-if="slide.text" class="heading-2 font-light" :style="textStyle">
            {{ slide.text }}
          </div>
          <div v-if="slide.footer" class="footer text-sm text-gray-500 mt-4" :style="footerStyle">
            {{ slide.footer }}
          </div>
        </div>
        <div class="right-content">
          <img :src="slide.urlImg" alt="" />
        </div>
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile';

export default {
  name: 'TestimonialSlider',
  components: {
    'agile': VueAgile,
  },
  props: {
    slides: {
      type: Array,
      required: false,
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: true,
    },
    textStyle: {
      required: false,
      type: Object,
      default: () => {
        return {
          'font-size': '16px',
        };
      },
    },
    footerStyle: {
      required: false,
      type: Object,
      default: () => {
        return {
          'font-size': '16px',
        };
      },
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
