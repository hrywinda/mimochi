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
        @click="navigatePage(item.path, label)"
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
        {
          label: 'Products',
          path: '/products',
        },
      ],
    },
    isSticky:{
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    navigatePage(path, label){
      if(label !== 'Services') {
        this.$router.push({ path: path})
      }else {
        const id = 'gromming'
        this.$router.push({ name: 'service-items', params: { id : id } });
      }

    }

  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
