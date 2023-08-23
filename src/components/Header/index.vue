<template>
  <nav :class="['header', isSticky ? 'sticky' : '']" id="mimochi-header">
    <ol class="header__menu basis-full">
      <div class="icon-mimochi">
        <a href="/"><img src="/logo_mimochi.png" alt="" /></a>
      </div>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="['menu-item']"
        @click="$router.push(item.path)"
      >
        <router-link :to="item.path"
          ><span class="menu-label font-base">{{ item.label }}</span></router-link
        >
      </li>
    </ol>
    <div class="header__btn basis-full flex justify-end" @click="$router.push('/contact-us')">
      <button class="btn-primary rounded-lg text-base">Contact Us</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: {
    items: {
      type: Array,
      default: () => [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'About Us',
          path: '/about-us',
        },
        {
          label: 'Services',
          path: '/services',
        },
        // {
        //   label: 'Product',
        //   path: '/product',
        // },
      ],
    },
  },
  data() {
    return {
      isSticky: false,
    };
  },
  mounted() {
    console.log('Component mounted');
    // window.addEventListener("scroll", this.onScroll);
    window.addEventListener('scroll', (e) => this.onScroll(e));
  },
  beforeUnmount() {
    // The correct lifecycle hook is "beforeUnmount"
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      console.log('Scroll event');
      const header = document.getElementById('mimochi-header');
      const sticky = header.offsetTop;
      this.isSticky = window.pageYOffset > sticky;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
