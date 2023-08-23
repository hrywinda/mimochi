<template>
  <div class="home">
    <HeaderSection />
    <div></div>
    <div class="home__cover-section">
      <div :class="['banner-desc basis-full', animationText ? 'lineUp' : '']">
        <div class="title">For all your furry family members</div>
        <div class="desc">{{ desc }}</div>
        <div class="btn-product">
          <button class="btn-primary">Our Product</button>
        </div>
      </div>
      <div class="animal-img basis-full">
        <img src="/home/saly-dog.svg" alt="dog" />
      </div>
    </div>
    <div class="home__welcome-section mt-[320px]">
      <div class="wrapper rounded-3xl">
        <div class="left-content basis-full">
          <div class="img-welcome mb-3">
            <img src="/home/undraw_friends.svg" alt="" />
          </div>
          <div class="subtitle text-left">Welome to Mimochi Petshop</div>
        </div>
        <div class="right-content basis-full">
          <div class="heading-1 text-left mb-4 text-gray-600">“your perfect furry friends”</div>
          <div class="text-xl text-left">{{ desc }}</div>
        </div>
      </div>
    </div>
    <div class="home__services">
      <div class="heading-1">See our all services</div>
      <div class="services-items mt-14">
        <div class="items" v-for="(item, index) in services" :key="index">
          <div class="card-img mb-8">
            <img class="" :src="item.img" alt="" />
          </div>
          <div>
            <div class="heading-2 mb-4">{{ item.title }}</div>
            <div class="mb-4">{{ item.desc }}</div>
            <div class="font-black cursor-pointer">More Details</div>
          </div>
        </div>
      </div>
      <div class="service-desc mt-14">
        "Discover a world of pet happiness at our PetShop website! Explore a wide selection of
        products and services for your beloved furry friends. From premium pet food to stylish
        accessories and expert pet care, we've got everything you need to keep your pets wagging
        their tails with joy."
      </div>
      <div class="btn-book mt-8">
        <button class="btn-primary rounded-lg">Book your day</button>
      </div>
    </div>
    <div class="home__testimoni">
      <div class="heading-1 text-left mb-8">Amazing Feedback</div>
      <TestimonialSlider :slides="slides" />
    </div>
    <div class="home__clients">
      <div class="heading-1 mb-8">Our Clients</div>
      <div class="img-row">
        <div class="img-column" v-for="(item, index) in imageGallery" :key="index">
          <div class="wrapper" v-for="(img, index) in item.images" :key="index"><img :src="img" alt="" /></div>
        </div>
      </div>
    </div>
    <div class="home__contact-us">
      <div class="text-4xl font-bold basis-1/2 text-left">
        Safety and quality for your pet,we take care of your pet 24/7
      </div>
      <div class="btn-contact-us">
        <button class="btn-secondary">Book your day</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSection from '@/components/Header/index.vue';
import TestimonialSlider from '@/components/TestimonialSlider/index.vue';
export default {
  name: 'HomePage',
  components: {
    HeaderSection,
    TestimonialSlider,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      desc: 'Discover a world of pet happiness at our PetShop website! Explore a wide selection of products and services for your beloved furry friends. From premium pet food to stylish accessories and expert pet care, we have got everything you need to keep your pets wagging their tails with joy.',
      services: [
        {
          title: 'Grooming',
          img: '/home/undraw_beach_day_cser.svg',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
        },
        {
          title: 'Home Service',
          img: '/home/undraw_at_home.svg',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
        },
        {
          title: 'Pet Hotel',
          img: '/home/undraw_building.svg',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
        },
        {
          title: 'Veterinary',
          img: '/home/undraw_medicine.svg',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
        },
      ],
      imageGallery: [
        {
          images: [
            '/home/vertical_image_5.jpg',
            '/home/horizontal_image_1.jpg',
            '/home/horizontal_image_5.jpg',
          ],
        },
        {
          images: [
            '/home/horizontal_image_2.jpg',
            '/home/horizontal_image_1.jpg',
            '/home/vertical_image_5.jpg',
          ],
        },
        {
          images: [
            '/home/vertical_image_5.jpg',
            '/home/horizontal_image_1.jpg',
            '/home/horizontal_image_5.jpg',
          ],
        },
        {
          images: [
            '/home/horizontal_image_2.jpg',
            '/home/horizontal_image_1.jpg',
            '/home/vertical_image_5.jpg',
          ],
        },
      ],
      slides: [
        {
          title: 'Best Grooming result',
          text: 'Media partner yang punya end to end service dengan kualitas yang outstanding! Salah satu poin kunci adalah: teknologi pengukuran dan report yg detail & insightful. Good job ADX Asia!',
          footer: 'Inesa Muliadi, Campaign Lead LinkAja',
          urlImg: '/about-us/team_1.jpg',
        },
        {
          title: 'Best Grooming result',
          text: 'The way ADX Asia can listen to our objectives is what we need. And serving real-time visibility progress for our thousand spots of branding should be the gold standard!',
          footer: 'Edi Kurniawan, Head of Marketing Moladin',
          urlImg: '/about-us/team_2.png',
        },
        {
          title: 'Best Grooming result',
          text: 'A brand campaign will be delivered well if it is accompanied by a good media partner. And a good media partner will give you a right data and a wonderful experience while exploring the great-advertising industry, and it\'s been proven with ADX Asia\'s work.',
          footer: 'Fanny Octafiani, Brand Marketing Specialist of Realfood',
          urlImg: '/about-us/team_3.jpg',
        },
        {
          title: 'Best Grooming result',
          text: 'It\'s been 2 years working with ADX, starting from events in Jakarta to almost all over Java. this proves that ADX has good responsibilities in various aspects. Fast response, good in weekly and monthly reporting and great problem solving made ADX becoming one of the most trusted partners we had.',
          footer: 'Riyad Jasa Putra, Local Activation Manager of Frisian Flag',
          urlImg: '/about-us/team_1.jpg',
        },
      ],
      animationText: false,
    };
  },
  mounted() {
    this.animationText = true;
    setTimeout(() => {
      this.$nextTick(() => {
        this.animationText = false;
      });
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
