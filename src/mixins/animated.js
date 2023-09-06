export default {
  data() {
    return {
      animationText: false,
    };
  },
  mounted() {
    this.animatedText();
  },
  methods:{
    animatedText(){
      this.animationText = true;
      setTimeout(() => {
        this.$nextTick(() => {
          this.animationText = false;
        });
      }, 2000);
    }
  }
};
