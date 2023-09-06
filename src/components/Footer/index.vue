<template>
  <footer>
    <div class="footer">
      <div class="left">
        <div class="icon-mimochi">
          <img src="/home/icon-footer.svg" alt="" />
        </div>
        <div class="copy-right text-base">©mimochi.{{ getYear() }}.your perfect furry friend</div>
      </div>
      <div class="right">
        <div class="font-black text-base mb-4">Follow us on social media</div>
        <div class="social-media">
          <img v-for="(item, index) in socialMedia" :key="index" :src="item" alt="" />
         </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  props: {
    msg: String,
  },
  data() {
    return {
      socialMedia: ['/footer/instagram.png', '/footer/twitter.png', '/footer/tik-tok.png'],
    };
  },
  methods: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
