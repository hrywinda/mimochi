<template>
  <div class="contact-us">
    <div class="contact-us__header">
      <HeaderSection />
    </div>
    <div class="contact-us__content">
      <div class="left basis-full">
        <img src="/home/saly-1.svg" alt="" />
      </div>
      <div class="right basis-full text-left">
        <div class="title">Get In Touch</div>
        <div>We are here for you, how can I help ?</div>
        <div class="desc mb-8">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem.
        </div>
        <div class="form-group">
          <form>
            <div class="input-wrapper mb-8" v-for="(item, index) in formContactUs" :key="index">
              <label class="mb-4 label-input" for="name">{{ item.label }}</label>
              <InputText :id="item.label" :placeholder="item.placeholder" />
            </div>
          </form>
          <button class="btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSection from '@/components/Header/index.vue';
import InputText from '@/components/InputText/index.vue';

export default {
  name: 'ContactUs',
  components: {
    HeaderSection,
    InputText,
  },
  data() {
    return {
      formContactUs: [
        {
          label: 'Name',
          placeholder: 'Your Name',
        },
        {
          label: 'Email',
          placeholder: 'ex: hrywinda@gmail.com',
        },
        {
          label: 'How can we help you?',
          placeholder: 'Description',
        },
      ],
    };
  },
  methods: {
    submitForm() {
      console.log(this.name, this.email, this.message);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
