<template>
  <div class="about">
    <div class="main">
      <div>
        <div class="line" v-for="num in numbers" :key="num">
          <div>{{ num }} x {{ number }} = {{ number * num }}</div>
        </div>
      </div>
    </div>
    <div class="start">
      <router-link :to="`/exercice/${this.number}`">
        <a class="button">COMMENCER</a>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      number: 0
    }
  },
  created () {
    this.number = this.$route.params.id
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
.start {
  height: 200px;
  line-height: 200px;
  background-color: #fff;
  a {
    text-decoration: none;
  }
  .button {
    border: none;
    border-radius: 0.3rem;
    font-size: 1.5rem;
    background: rgb(94, 194, 119);
    color: #fff;
    padding: .5rem 1rem;
  }
}
</style>
