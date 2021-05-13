<template>
  <div class="about">
    <div class="main">
      <div>
        <div v-for="num in numbers" :key="num">
          <div>{{ num }} x {{ number }} = {{ number * num }}</div>
        </div>
      </div>
    </div>
    <div class="countdown">
      <div class="number green">{{ countDown }}</div>
    </div>
    <!-- <div class="start">
      <router-link :to="`/exercice/${this.number}`">
        <a class="button">COMMENCER</a>
      </router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      number: 0,
      countDown: 20
    }
  },
  methods: {
    countDownTimer () {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
      if (this.countDown === 0) this.$router.push(`/exercice/${this.number}`)
    }
  },
  created () {
    this.number = this.$route.params.id
  },
  mounted () {
    this.countDownTimer()
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
.countdown {
  height: 160px;
  padding-top: 15px;
  .number {
    font-size: 2rem;
    line-height: 70px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .green {
    border: 1px solid #000;
    animation: fade 20.2s ease-in-out;
  }
}
.start {
  height: 160px;
  line-height: 160px;
  a {
    text-decoration: none;
  }
  .button {
    border: none;
    border-radius: 0.3rem;
    font-size: 1.5rem;
    background: rgb(94, 194, 119);
    color: #fff;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
}
@keyframes fade {
  0%    { opacity: 1; }
  4.99%   { opacity: 0; }
  5%    { opacity: 1; }
  9.99%   { opacity: 0; }
  10%   { opacity: 1; }
  14.99%  { opacity: 0; }
  15%   { opacity: 1; }
  19.99%  { opacity: 0; }
  20%   { opacity: 1; }
  24.99%  { opacity: 0; }
  25%   { opacity: 1; }
  29.99%  { opacity: 0; }
  30%   { opacity: 1; }
  34.99%  { opacity: 0; }
  35%   { opacity: 1; }
  39.99%  { opacity: 0; }
  40%   { opacity: 1; }
  44.99%  { opacity: 0; }
  45%   { opacity: 1; }
  49.99%  { opacity: 0; }
  50%   { opacity: 1; }
  54.99%  { opacity: 0; }
  55%   { opacity: 1; }
  59.99%  { opacity: 0; }
  60%   { opacity: 1; }
  64.99%  { opacity: 0; }
  65%   { opacity: 1; }
  69.99%  { opacity: 0; }
  70%   { opacity: 1; }
  74.99%  { opacity: 0; }
  75%   { opacity: 1; }
  79.99%  { opacity: 0; }
  80%   { opacity: 1; }
  84.99%  { opacity: 0; }
  85%   { opacity: 1; }
  89.99%  { opacity: 0; }
  90%   { opacity: 1; }
  94.99%  { opacity: 0; }
  95%   { opacity: 1; }
  100%    { opacity: 0; }
}
</style>
