<template>
  <div class="adopt">
    <div class="adopt__service-banner">
      <img class="category-img" src="/services/adopt.png" alt="" />
      <div class="service-title text-white subtitle max-w-min text-left">
        02 <br />
        Pet Adoption
      </div>
    </div>
    <div class="adopt__description">
      <div class="benefit">
        <div class="heading-1 adopt-text mb-6">Why adopt a pet ?</div>
        <div>{{ desc }}, {{ desc }}, {{ desc }}</div>
      </div>
    </div>
    <div class="adopt__reason">
      <div class="heading-1 title-reason text-gray-700 text-left">Why adopt from us ?</div>
      <div class="adopt-variant">
        <div class="adopt-items" v-for="(item, index) in adoptOptions" :key="index">
          <img :src="item.img" alt="" />
          <div class="text-lg font-bold mt-4 text-gray-700 mb-4">{{ item.title }}</div>
          <div class="text-sm text-gray-700"
            >Nemo enim ipsam voluptatem quia voluptas sit aspernatur
          </div>
        </div>
      </div>
    </div>
    <div class="adopt__story">
      <div class="left-content basis-full">
        <div class="title-section text-left">
          <div class="adopt-text heading-1 mb-8"
            >Pet <br />
            Adoption <br />
            Story</div
          >
          <div class="text-sm mb-14">{{ desc }}</div>
          <div class="stories-wrapper" v-for="(item, index) in leftStories" :key="index">
            <img :src="item.img" alt="" />
            <div class="bottom-section">
              <div class="heading-2 adopt-text">{{ item.title }}</div>
              <div class="text-sm"
                >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-content basis-full">
        <div class="stories-wrapper" v-for="(item, index) in rightStories" :key="index">
          <img :src="item.img" alt="" />
          <div class="bottom-section">
            <div class="heading-2 adopt-text">{{ item.title }}</div>
            <div class="text-sm"
              >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="adopt__closing">
      <div class="heading-1 text-white">Interested for pet adoption ? </div>
      <div class="text-lg text-white">feel free for <u>contact us !</u></div>
    </div>
    <div> </div>
  </div>
</template>

<script>
export default {
  name: "AdoptPage",
  components: {},
  data() {
    return {
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
      adoptOptions: [
        {
          title: "155++ Cat  adoption",
          img: "/services/icons8-cat.png",
        },
        {
          title: "90++ Dog adoption",
          img: "/services/icons8-dog.png",
        },
        {
          title: "Free Gift",
          img: "/services/icons8-gift.png",
        },
        {
          title: "Free Vaksin",
          img: "/services/icons8-vaccine.png",
        },
        {
          title: "Help furry friends",
          img: "/services/icons8-pet-heart.png",
        },
      ],
      leftStories: [
        {
          title: "Stella, Margaret with Sonwie",
          img: "/services/stories-2.jpg",
        },
        {
          title: "Rachel and Putih dog",
          img: "/services/stories-1.jpg",
        },
      ],
      rightStories: [
        {
          title: "Rachel , Lili with ginger cat",
          img: "/services/stories-4.jpg",
        },
        {
          title: "Rachel and Putih dog",
          img: "/services/stories-5.jpg",
        },
        {
          title: "Rachel and Putih dog",
          img: "/services/stories-3.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
