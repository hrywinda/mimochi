<template>
  <div class="home">
    <div class="home__cover-section">
      <div data-aos="fade-down" data-aos-duration="1000" :class="['banner-desc basis-full']">
        <div class="title">For all your furry family members</div>
        <div class="desc">{{ desc }}</div>
        <div class="btn-product cursor-pointer" @click="$router.push('/products')">
          <button class="btn-primary">Our Product</button>
        </div>
      </div>
      <div class="animal-img basis-full" data-aos="fade-down" data-aos-duration="1000">
        <img class="transform scale-51" src="/home/cat-yellow.svg" alt="dog" />
      </div>
    </div>
    <div class="home__welcome-section mt-[150px]">
      <div class="wrapper rounded-3xl">
        <div class="left-content basis-full">
          <div class="img-welcome mb-3" data-aos="fade-right">
            <img src="/home/undraw_friends.svg" alt="" />
          </div>
          <div class="subtitle text-left" data-aos="fade-right">Welome to Mimochi Petshop</div>
        </div>
        <div class="right-content basis-full">
          <div class="heading-1 text-left mb-4 text-gray-600" data-aos="fade-left"
            >“your perfect furry friends”</div
          >
          <div class="text-xl text-left" data-aos="fade-left">{{ desc }}</div>
        </div>
      </div>
    </div>
    <div class="home__services">
      <div class="heading-1" data-aos="fade-down">See our all services</div>
      <div class="services-items mt-14">
        <div
          data-aos="fade-down"
          :data-aos-offset="item.duration"
          class="item"
          v-for="(item, index) in services"
          :key="index"
          @mouseover="item.hovered = true"
          @mouseleave="item.hovered = false"
          @click="gotoDetailPage(item.key)"
        >
          <div class="card-img mb-8">
            <img
              :class="item.hovered ? '' : 'icon-base'"
              :src="item.hovered ? item.animatedIcon : item.img"
              alt=""
            />
          </div>
          <div>
            <div class="heading-2 mb-4">{{ item.title }}</div>
            <div class="mb-4">{{ item.desc }}</div>
            <div class="font-black cursor-pointer">More Details</div>
          </div>
        </div>
      </div>
      <div class="service-desc mt-14" data-aos="fade-right">
        "Discover a world of pet happiness at our PetShop website! Explore a wide selection of
        products and services for your beloved furry friends. From premium pet food to stylish
        accessories and expert pet care, we've got everything you need to keep your pets wagging
        their tails with joy."
      </div>
    </div>
    <div class="home__testimoni">
      <div class="heading-1 text-left mb-8" data-aos="fade-down">Amazing Feedback</div>
      <TestimonialSlider :slides="slides" data-aos="fade-up" />
    </div>
    <div class="home__clients">
      <div class="heading-1 mb-8" data-aos="fade-down">Our Clients</div>
      <div class="img-row">
        <div class="img-column" v-for="(item, index) in imageGallery" :key="index">
          <div
            class="wrapper"
            v-for="(img, index) in item.images"
            :key="index"
            data-aos="fade-up"
            :data-aos-duration="3000 + index"
          >
            <img :src="img" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="home__contact-us">
      <div
        class="text-4xl font-bold basis-1/2 text-left"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        Safety and quality for your pet,we take care of your pet 24/7
      </div>
      <div class="btn-contact-us" data-aos="fade-down" data-aos-duration="2000">
        <button class="btn-secondary" @click="$router.push('/contact-us')">Contact Us</button>
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialSlider from "@/components/TestimonialSlider/index.vue";
import AnimationText from "@/mixins/animated.js";
export default {
  name: "HomePage",
  components: {
    TestimonialSlider,
  },
  props: {
    msg: String,
  },
  mixins: [AnimationText],
  data() {
    return {
      hovered: false,
      desc: "Discover a world of pet happiness at our PetShop website! Explore a wide selection of products and services for your beloved furry friends. From premium pet food to stylish accessories and expert pet care, we have got everything you need to keep your pets wagging their tails with joy.",
      services: [
        {
          key: "gromming",
          title: "Grooming",
          img: "/icons/soap.png",
          animatedIcon: "/icons/animated/soap.gif",
          desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
          hovered: false,
          duration: 200,
        },
        {
          key: "adopt",
          title: "Adoption",
          img: "/icons/eco-house.png",
          animatedIcon: "/icons/animated/eco-house.gif",
          desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
          hovered: false,
          duration: 200,
        },
        {
          key: "pethotel",
          title: "Pet Hotel",
          img: "/icons/hotel.png",
          animatedIcon: "/icons/animated/hotel.gif",
          desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
          hovered: false,
          duration: 200,
        },
        {
          key: "vetenary",
          title: "Veterinary",
          img: "/icons/veterinary.png",
          animatedIcon: "/icons/animated/veterinary.gif",
          desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
          hovered: false,
          duration: 200,
        },
      ],
      imageGallery: [
        {
          images: [
            "/home/vertical_image_5.jpg",
            "/home/horizontal_image_1.jpg",
            "/home/horizontal_image_5.jpg",
          ],
        },
        {
          images: [
            "/home/horizontal_image_2.jpg",
            "/home/horizontal_image_1.jpg",
            "/home/vertical_image_5.jpg",
          ],
        },
        {
          images: [
            "/home/vertical_image_5.jpg",
            "/home/horizontal_image_1.jpg",
            "/home/horizontal_image_5.jpg",
          ],
        },
        {
          images: [
            "/home/horizontal_image_2.jpg",
            "/home/horizontal_image_1.jpg",
            "/home/vertical_image_5.jpg",
          ],
        },
      ],
      slides: [
        {
          title: "Incredibly Friendly Staff",
          text: "I've been bringing my furry friend to this pet shop for over a year now, and I couldn't be happier with their service. The staff is incredibly friendly and knowledgeable. They not only provide top-notch grooming services but also offer valuable advice on pet care. My dog always comes out looking and feeling great, and I trust this pet shop wholeheartedly.",
          footer: "Lili Aneth - Dog' owners",
          urlImg: "/about-us/team_1.jpg",
        },
        {
          title: "Wonderful PetShop",
          text: "I can't express how grateful I am for the wonderful team at this pet shop. From the moment I stepped in, I could tell they truly care about animals. They have a wide range of quality pet products, and their grooming service is exceptional. My cat is quite picky, but they handled her with patience and care. I recommend this pet shop to all pet owners!",
          footer: "Edi Kurniawan, Head of Marketing Moladin",
          urlImg: "/about-us/team_2.png",
        },
        {
          title: "Fantastic Grooming result",
          text: "I've tried several pet shops in the area, and this one stands out by far. The staff here goes above and beyond to accommodate both pets and owners. They've managed to create a stress-free environment, which my dog absolutely loves. The grooming service is fantastic, and they always make sure to understand my preferences. I appreciate their dedication to making every visit enjoyable.",
          footer: "Fanny Octafiani, Brand Marketing Specialist of Realfood",
          urlImg: "/about-us/team_3.jpg",
        },
        {
          title: "Trustworthy pet shop",
          text: "Finding a trustworthy pet shop was a priority for me, and I'm so glad I discovered this gem. The staff is incredibly knowledgeable about different breeds and their needs. They've helped me choose the right food, toys, and accessories for my new puppy. The grooming service is exceptional, and my pup leaves looking adorable every time. This pet shop has definitely won my loyalty.",
          footer: "Riyad Jasa Putra, Local Activation Manager of Frisian Flag",
          urlImg: "/about-us/team_1.jpg",
        },
      ],
    };
  },
  methods: {
    gotoDetailPage(key) {
      this.$router.push({ path: `/services/${key}` });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
