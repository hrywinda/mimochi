<template>
  <footer>
    <div class="footer">
      <div class="top">
        <div class="icon-mimochi">
          <img src="/home/icon-footer.svg" alt="" />
        </div>
        <div class="items-footer">
          <ol>
            <li class="font-black text-base" v-for="(item, index) in items" :key="index">
              {{ item }}
            </li>
          </ol>
        </div>
        <div class="copy-right text-base">©mimochi.{{ getYear() }}.your perfect furry friend</div>
      </div>
      <div class="social-media">
        <img v-for="(item, index) in socialMedia" :key="index" :src="item" alt="" />
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
      items: ['Privacy Policy', 'Terms & Conditions', 'Site Maps'],
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
