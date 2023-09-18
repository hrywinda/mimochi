<template>
  <div class="about-us">
    <div class="banner-slider" data-aos="fade-down" data-aos-duration="1000">
      <CarouselImage :slides="imageGallery" />
    </div>
    <div class="about-us__first-section mt-[95px]">
      <div class="wrapper rounded-3xl">
        <div class="left-content basis-full">
          <div
            class="img-about-us"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <img class="transform scale-105" src="/about-us/cat family-rafiki.svg" alt="" />
          </div>
        </div>
        <div
          class="right-content basis-full"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <div class="paw-img mb-4">
            <img src="/about-us/pawprints.png" alt="" />
          </div>
          <div class="text-left">About us</div>
          <div class="heading-1 text-left mb-4">Who we are ?</div>
          <div class="text-xl text-left">{{ desc }}</div>
        </div>
      </div>
    </div>
    <div class="about-us__why-choose-us">
      <div class="wrapper">
        <div class="heading-1 mb-4" data-aos="fade-down" data-aos-offset="200">Why Choose us</div>
        <div class="mt-4" data-aos="fade-up" data-aos-offset="300">{{ desc }}</div>
        <div class="card-items">
          <div
            class="items"
            v-for="(item, index) in reason"
            :key="index"
            data-aos="zoom-in"
            :data-aos-offset="item.duration"
          >
            <div class="card-img"><img :src="item.img" alt="" /></div>
            <div>
              <div class="text-xl font-black mb-4">{{ item.title }}</div>
              <div class="mb-4">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-us__teams">
      <div class="heading-1 mb-8" data-aos="fade-down">Meets our Teams</div>
      <SliderImage :data="teams" data-aos="fade-up"></SliderImage>
      <div class="desc mt-8" data-aos="fade-up">
        <div class="font-bold text-lg">Meet ours proffesional team</div>
        <div class="text-lg">We have experience qualified team to take care your best friend</div>
        <div class="text-lg"
          >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</div
        >
      </div>
    </div>
    <div class="about-us__contact-us">
      <div class="left-content">
        <div class="top-item">
          <div class="dog-img" data-aos="fade-down" data-aos-duration="1000"
            ><img src="/about-us/dogi-1.jpg" alt=""
          /></div>
          <div class="paw-img" data-aos="zoom-in" data-aos-offset="300">
            <img src="/about-us/pawprints.png" alt="" />
          </div>
        </div>
        <div class="bottom-img" data-aos="fade-up" data-aos-duration="1000"
          ><img src="/about-us/cat-1.jpg" alt=""
        /></div>
      </div>
      <div class="right-content" data-aos="fade-down" data-aos-duration="1000">
        <div>Contact Us</div>
        <div class="heading-1 w-2/4 mb-4">Come for the care, Leave eith smile</div>
        <div>
          <div>Monday - Friday : 09.00 - 21.00</div>
          <div>Saturday - Sunday : 10.00 - 20.00</div>
          <div>08172636363</div>
          <div>Jl Raya Tanjung Duren No 10, Jakarta Barat</div>
        </div>
        <div class="mt-4" @click="gotoContactUs">
          <button class="btn-secondary">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselImage from "@/components/CarouselImage/index.vue";
import SliderImage from "@/components/SliderImage/index.vue";

export default {
  name: "AboutUs",
  components: {
    CarouselImage,
    SliderImage,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      desc: "Discover a world of pet happiness at our PetShop website! Explore a wide selection of products and services for your beloved furry friends. From premium pet food to stylish accessories and expert pet care, we have got everything you need to keep your pets wagging their tails with joy.",
      reason: [
        {
          title: "Personalized Care",
          img: "/icons/animated/personal-care.gif",
          desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
          duration: 300,
        },
        {
          title: "Trusted Team",
          img: "/icons/animated/teams.gif",
          desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
          duration: 350,
        },
        {
          title: "Peace of Mind",
          img: "/icons/animated/peaceful-mind.gif",
          desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
          duration: 400,
        },
        {
          title: "Nice Environment",
          img: "/icons/animated/nice-env.gif",
          desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
          duration: 450,
        },
      ],
      imageGallery: [
        {
          title: "Happy, healthy, humane.",
          subtitle: "“Your perfect furry friend”",
          img: "/home/horizontal_image_2.jpg",
        },
        {
          title: "Bigger. Better. Cheaper!",
          subtitle: "“All you need is love and treats…lots of treats.”",
          img: "/home/horizontal_image_3.jpg",
        },
        {
          title: "Fur, Fins, And Feathers.",
          subtitle: "“Bringing health and happiness to your pets!”",
          img: "/home/horizontal_image_5.jpg",
        },
      ],
      teams: [
        {
          slides: [
            {
              title: "Winda Haryani",
              subtitle: "Dog Grommer spesialist",
              img: "/about-us/team_1.jpg",
            },
            {
              title: "Raura Azzahra",
              subtitle: "Cat Grommer spesialist",
              img: "/about-us/team_4.jpg",
            },
            {
              title: "John Doe",
              subtitle: "Dog Grommer spesialist",
              img: "/about-us/team_3.jpg",
            },
          ],
        },
        {
          slides: [
            {
              title: "Sarah Sechan",
              subtitle: "Staff mimochi petshop",
              img: "/about-us/team_2.png",
            },
            {
              title: "Lilibeth Agatha",
              subtitle: "Dog Grommer spesialist",
              img: "/about-us/team_5.jpg",
            },
            {
              title: "Eliza Chan",
              subtitle: "Cat Grommer spesialist",
              img: "/about-us/team_6.jpg",
            },
          ],
        },
        {
          slides: [
            {
              title: "Putri Anne",
              subtitle: "Staff mimochi petshop",
              img: "/about-us/team_7.jpg",
            },
            {
              title: "Robert Downey",
              subtitle: "Dog Grommer spesialist",
              img: "/about-us/team_8.jpg",
            },
            {
              title: "Axel Rose",
              subtitle: "Cat Grommer spesialist",
              img: "/about-us/team_9.jpg",
            },
          ],
        },
      ],
    };
  },
  methods: {
    gotoContactUs() {
      this.$router.push("/contact-us");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
