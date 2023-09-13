<template>
  <div class="services">
    <div class="services__banner">
      <img src="/services/banner-2.jpg" alt="" />
      <div :class="['heading text-black title basis-full']">
        All service for<br />
        your furry friends</div
      >
    </div>
    <div class="services__cards" id="serviceCategory">
      <div class="items cursor-pointer">
        <div class="item-card" v-for="(item, index) in services" :key="index">
          <img :src="item.img" alt="" />
          <!-- <div class="heading-2 text-title text-white">{{ item.title }}</div> -->
          <router-link :to="item.path" class="heading-2 text-title text-white">{{
            item.title
          }}</router-link>
        </div>
      </div>
    </div>
    <div class="service__category">
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
          img: "/services/yellow-dog.jpg",
          path: "/services/pethotel",
        },
        {
          title: "Pet Taxi",
          img: "/services/orange-dog.jpg",
          path: "/services/vetenary",
        },
      ],
    };
  },
  mounted() {
    const el = document.getElementById("serviceCategory");
    el.scrollIntoView({ behavior: "smooth" });
    console.log("smooth");
  },
  methods: {
    scrollToItem(id) {
      const el = document.getElementById(id);
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
