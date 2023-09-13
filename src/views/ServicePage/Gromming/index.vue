<template>
  <div class="gromming">
    <div class="gromming__service-banner">
      <img class="category-img" src="/services/adopt.png" alt="" />
      <div class="service-title text-white subtitle max-w-min text-left">{{
        "01 Gromming Service"
      }}</div>
    </div>
    <div class="gromming__description">
      <div class="benefit">
        <div class="heading-1 gromming-text mb-6">{{ "When yo must groom your pet ?" }}</div>
        <div>{{ desc }}, {{ desc }}, {{ desc }}</div>
      </div>
    </div>
    <div class="gromming__options">
      <div class="heading-1 gromming-text mb-6 text-left">Gromming Options</div>
      <div class="gromming-variant">
        <div class="gromming-items" v-for="(item, index) in grommingOptions" :key="index">
          <div class="text-8xl text-white font-bold mb-4">{{ "0" + (index + 1) }}</div>
          <div class="heading-2 text-white mb-4">{{ item.title }}</div>
          <div class="text-sm text-white"
            >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione
          </div>
        </div>
      </div>
    </div>
    <div class="gromming__testimoni">
      <div class="heading-1 text-left mb-8 text-white" data-aos="fade-down">Amazing Feedback</div>
      <TestimonialSlider :slides="slides" data-aos="fade-up" />
    </div>
    <div class="gromming__closing">
      <div class="heading-1 gromming-text"
        >So what you wait? <br />
        call us for gromming your furry friend</div
      >
    </div>
    <div> </div>
  </div>
</template>

<script>
import TestimonialSlider from "@/components/TestimonialSlider/index.vue";
export default {
  name: "GrommingPage",
  components: {
    TestimonialSlider,
  },
  data() {
    return {
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
      grommingOptions: [
        {
          title: "Basic Gromming",
        },
        {
          title: "Gromming Kutu",
        },
        {
          title: "Gromming Jamur",
        },
        {
          title: "Gromming Lengkap",
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
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
