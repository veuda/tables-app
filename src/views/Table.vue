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
      <div class="number">{{ countDown }}</div>
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
  mounted () {
    this.number = this.$route.params.id
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
    border: 1px solid #000;
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
</style>
