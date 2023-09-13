<template>
  <div class="vetenary">
    <div class="vetenary__service-banner">
      <img class="category-img" src="/services/vetenary.png" alt="" />
      <div class="service-title text-white subtitle max-w-max text-left">
        04 <br />Vetenary <br />Service</div
      >
    </div>
    <div class="vetenary__description">
      <div class="benefit">
        <div class="heading-1 vetenary-text mb-6">Mimochi Vetenary Service</div>
        <div>{{ desc }}, {{ desc }}, {{ desc }}</div>
      </div>
    </div>
    <div class="vetenary__service">
      <div class="heading-1 vetenary-text mb-6">Our Pet Service</div>
      <div class="vetenary-variant">
        <div class="vetenary-items" v-for="(item, index) in petService" :key="index">
          <img :src="item.icon" alt="" />
          <div class="heading-2 mt-4 mb-4 font-bold">{{ item.title }}</div>
          <div class="text-sm"
            >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione
          </div>
        </div>
      </div>
    </div>
    <div class="vetenary__mission">
      <div class="img-mission"><img src="/services/vetenary_mission.jpg" alt="" /></div>
      <div>
        <div class="heading-2 vetenary-text text-left mb-4">Our Mission</div>
        <div class="text-sm text-left">{{ desc }}</div>
      </div>
    </div>
    <div class="vetenary__doctors">
      <div class="heading-1 vetenary-text mb-6">Meets our Doctor</div>
      <div class="doctors-wrapper">
        <div class="doctor-item" v-for="(item, index) in doctors" :key="index">
          <img :src="item.img" alt="" />
          <div class="vetenary-text text-lg font-bold">{{ item.name }}</div>
          <div class="text-sm">{{ item.desc }}</div>
        </div>
      </div>
    </div>
    <div class="vetenary__closing">
      <div class="heading-1 text-white">We give our best service for your pet!</div>
      <div class="mt-4" @click="gotoContactUs">
        <button class="pethotel-contact-us btn-secondary">Contact Us</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VetenaryPage",
  components: {},
  data() {
    return {
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
      petService: [
        {
          title: "24 Doctor Consultation",
          icon: "/services/icons8-vet.png",
        },
        {
          title: "Pet Sterill",
          icon: "/services/icons8-sterill.png",
        },
        {
          title: "Vacinne",
          icon: "/services/icons8-pet-vaccine.png",
        },
        {
          title: "Birthing Process",
          icon: "/services/icons8-animal-care.png",
        },
      ],
      doctors: [
        {
          name: "Drh. Camelia",
          desc: "Dokter Hewan",
          img: "/services/doctor_1.jpg",
        },
        {
          name: "Drh. Yuri Anneth",
          desc: "Dokter Hewan Bedah",
          img: "/services/dr.-sam.jpg",
        },
        {
          name: "Drh. Fariz",
          desc: "Dokter Hewan Campuran",
          img: "/services/doctor_3.jpg",
        },
        {
          name: "Drh.  Erland",
          desc: "Dokter Hewan Campuran",
          img: "/services/doctor_4.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
