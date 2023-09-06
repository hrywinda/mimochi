<template>
  <div class="app-container">
    <HeaderSection :isSticky="isSticky" />
    <router-view />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from './components/Header/index.vue'
import FooterSection from './components/Footer/index.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection
  },
  setup() {
    const isSticky = ref(false);

    const handleScroll = () => {
      if (event.deltaY > 0) {
        isSticky.value = true; // Scrolling down
      } else if (event.deltaY < 0) {
        isSticky.value = false; // Scrolling up
      }
    };

    // const handleScroll2 = () => {
    //   console.log('handleScroll2')
    // }

    onMounted(() => {
      window.scrollTo(0, 0)
      const el = document.getElementById('app')
      el.scrollIntoView({behavior: 'smooth'})
      window.addEventListener('wheel', handleScroll);

    });

    onBeforeUnmount(() => {
      window.removeEventListener('wheel', handleScroll);
    });

    return {isSticky};
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f6f4eb;
}
</style>
