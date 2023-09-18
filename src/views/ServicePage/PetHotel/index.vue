<template>
  <div class="pet-hotel">
    <div class="pet-hotel__service-banner">
      <img
        class="category-img"
        src="/services/Animal shelter-rafiki.svg"
        data-aos="fade-right"
        alt="pethotel-banner"
      />
      <div class="service-title text-white subtitle max-w-max text-left" data-aos="fade-left">
        03 <br />
        Pet Hotel <br />
        Service
      </div>
    </div>
    <div class="pet-hotel__description">
      <div class="benefit">
        <div class="heading-1 pet-hotel-text mb-6" data-aos="fade-down"
          >Pet Hotel Service by Mimochi</div
        >
        <div data-aos="fade-down">{{ desc }}, {{ desc }}, {{ desc }}</div>
      </div>
    </div>
    <div class="pet-hotel__facilities">
      <div class="wrapper">
        <div
          class="heading-2 text-left pet-hotel-text flex items-center"
          data-aos="fade-down"
          data-aos-duration="1000"
          >The facilities <br />
          you get
        </div>
        <div class="facilities-wrappper">
          <div
            class="facilities-item"
            v-for="(item, index) in facilities"
            :key="index"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img class="mb-4" :src="item.icon" alt="" />
            <div class="text-lg font-bold">{{ item.title }}</div>
            <div>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pet-hotel__pricelist">
      <div class="heading-2 pet-hotel-text" data-aos="fade-down">Our Package Service</div>
      <div class="text-sm" data-aos="fade-down">Choose your package suits for you pet friends</div>
      <div class="price-wrapper">
        <div
          class="price-item"
          v-for="(item, index) in priceList"
          :key="index"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="icon-price flex items-center justify-center gap-4 mb-2"
            ><img src="/services/icons8-paw.png" v-for="index in item.icon" :key="index" alt=""
          /></div>
          <div class="font-bold text-white">{{ item.title }}</div>
          <div class="text-white text-sm"
            ><ul v-for="(itemBenefit, index) in item.benefit" :key="index">{{
              itemBenefit
            }}</ul></div
          >
        </div>
      </div>
    </div>
    <div class="pet-hotel__closing">
      <div class="heading-1 text-white">Entrust your beloved fur friend to us !</div>
      <div class="mt-4 cursor-pointer" @click="$router.push('/contact-us')">
        <button class="pethotel-contact-us btn-secondary">Contact Us</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetHotel",
  components: {},
  data() {
    return {
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
      facilities: [
        {
          title: "Free Pick Up",
          icon: "/services/icons8-delivery.png",
        },
        {
          title: "Full AC Room",
          icon: "/services/icons8-ac.png",
        },
        {
          title: "Food set Cleaner",
          icon: "/services/icons8-pet-food.png",
        },
        {
          title: "Daily update foto/vidoe",
          icon: "/services/icons8-camera.png",
        },
        {
          title: "Toilet cleaner daily",
          icon: "/services/icons8-toilet-paper.png",
        },
      ],
      priceList: [
        {
          title: "Basic Gromming",
          icon: 1,
          benefit: [
            "free pickup",
            "full ac room",
            "food set cleaner",
            "daily update",
            "toilet cleaner",
          ],
        },
        {
          title: "Silver Gromming",
          icon: 2,
          benefit: [
            "free pickup",
            "full ac room",
            "food set cleaner",
            "daily update",
            "toilet cleaner",
          ],
        },
        {
          title: "Gold Gromming",
          icon: 3,
          benefit: [
            "free pickup",
            "full ac room",
            "food set cleaner",
            "daily update",
            "toilet cleaner",
          ],
        },
      ],
    };
  },
  methods: {
    gotoContactUs() {},
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
