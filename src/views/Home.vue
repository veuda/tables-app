<template>
  <div class="home">
    <div class="title">
      Choisir une table
    </div>
    <div class="tables">
      <div>
        <div class="grid">
          <span class="number" :class="[ number === num ? 'is-active' : '' ]" @click="setNumber(num)" v-for="num in numbers" :key="num">{{ num }}</span>
        </div>
      </div>
    </div>
    <div class="start">
      <router-link :to="`/table/${this.number}`">
        <button class="button" v-if="this.number !== 0">COMMENCER</button>
        <button class="button-disabled" v-else disabled>COMMENCER</button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      number: 0
    }
  },
  methods: {
    setNumber (number) {
      this.number = number
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .title {
    height: 160px;
    line-height: 160px;
    font-size: 2rem;
  }
  .tables {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 320px);
    .grid {
      display: grid;
      grid-template-columns: 70px 70px 70px;
      gap: 1rem;
      .number {
        line-height: 70px;
        font-size: 2rem;
        border: 1px solid #000;
        border-radius: 50%;
        cursor: pointer;
      }
      .number.is-active {
        color: #fff;
        background: rgb(94, 194, 119);
        border: 1px solid rgb(94, 194, 119);
      }
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
      padding: .5rem 1rem;
      cursor: pointer;
    }
    .button-disabled {
      border: none;
      border-radius: 0.3rem;
      font-size: 1.5rem;
      background: rgb(165, 207, 175);
      color: #fff;
      padding: .5rem 1rem;
      cursor: default;
    }
  }
}
</style>
