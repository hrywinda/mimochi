<template>
  <div class="services">
    <div class="services__banner">
      <img src="/services/banner-2.jpg" alt="" />
      <div class="text-container heading">
        <span class="title"> All service for your</span><br />
        <span class="title text-animation" id="phrase">{{ currentPhrase }}</span>
      </div>
    </div>
    <div class="services__cards" id="targetRef">
      <div class="items cursor-pointer">
        <router-link
          :to="item.path"
          v-for="(item, index) in services"
          :key="index"
          @click="scrollToElement()"
        >
          <div class="item-card">
            <img :src="item.img" alt="" />
            <div class="heading-2 service-title text-title text-white">{{ item.title }}</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="service__category" id="service-category">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicePage",
  components: {},
  data() {
    return {
      services: [
        {
          title: "Pet Grooming",
          img: "/services/yellow_dog.jpeg",
          path: "/services/gromming",
        },
        {
          title: "Adoption",
          img: "/services/green-cat.jpg",
          path: "/services/adopt",
        },
        {
          title: "Pet Hotel",
          img: "/services/orange-dog.jpg",
          path: "/services/pethotel",
        },
        {
          title: "Vetenary",
          img: "/services/blue-kitty.jpg",
          path: "/services/vetenary",
        },
      ],
      phrases: ["furry friends", "lovely pets", "furry family"],
      currentPhraseIndex: 0,
      currentPhrase: "All service for your furry friends",
    };
  },
  mounted() {
    setInterval(this.changePhrase, 2000);
    this.changePhrase();
    window.scrollTo(0, 0, { behavior: "smooth" });
  },
  methods: {
    scrollToElement() {
      const element = document.getElementById("service-category");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    changePhrase() {
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      this.currentPhrase = this.phrases[this.currentPhraseIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
