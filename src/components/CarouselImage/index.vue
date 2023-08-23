<template>
  <div class="carousel" :style="[`background-image: url(${url})`]">
    <agile
    :initialSlide="0"
    :autoplay="autoplay"
    :navButtons="false"
    :dots="true"
    :speed="300"
    @after-change="showCurrentSlide($event)">
      <div v-for="(slide, index) in slides" :key="index">
        <div class="carousel-caption">
          <div class="text-white title">{{slide.title}}</div>
          <div class="text-white bold heading-2">{{slide.subtitle}}</div></div>
        </div>
    </agile>
  </div>
</template>

<script>

import { VueAgile } from 'vue-agile'

export default {
  name: 'CarouselImage',
  components: {
  'agile': VueAgile
  },
  props: {
    slides: {
      type: Array,
      required: false,
    },
    autoplay:{
      type: Boolean,
      required: false,
      default: true
    },
  },
  data() {
    return {
     url : ''
    }
  },
  mounted(){

  },
  computed:{

  },
  methods :{
    showCurrentSlide(event){
      this.url = this.slides[event.currentSlide].img
    }
  }
}
</script>

<style lang="scss">
@import "./index.scss";
</style>

<style scoped>
  .agile__slide {
    display: block;
    height: 678px;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
</style>
