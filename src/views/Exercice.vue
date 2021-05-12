<template>
  <div class="about">
    <div class="display">
      {{ this.number }} x {{ this.$route.params.id }} = {{ this.chiffre }}
    </div>
    <div class="timer" :class="[ timer !== null ? 'is-visible' : '']">
      Temps : {{ convert(this.timer) }}
    </div>
    <div class="keyboard">
      <div>
        <div class="grid">
          <span class="number" :class="{ 'is-active' : isActive === num }" v-for="num in numbers" :key="num" @click="choseNumber(num)">{{ num }}</span>
          <span></span>
          <span class="number" @click="choseNumber(0)">0</span>
          <span class="number" @click="deleteNumber">R</span>
        </div>
      </div>
    </div>
    <div class="start">
      <button class="button" @click="next()" v-if="this.index < 8">SUIVANT</button>
      <button class="button" @click="stop()" v-if="this.index === 8 && this.end === null">STOP</button>
      <router-link to="/" v-if="this.end !== null">
        <a class="button">NOUVELLE TABLE</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercice',
  data () {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      shuffledNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      number: null,
      index: 0,
      chiffre: '',
      start: null,
      end: null,
      timer: null,
      isActive: null
    }
  },
  methods: {
    next () {
      if (parseInt(this.chiffre) === this.number * this.$route.params.id) {
        this.index += 1
        this.number = this.shuffledNumbers[this.index]
        this.chiffre = ''
      } else {
        this.chiffre = ''
      }
    },
    choseNumber (number) {
      this.isActive = number
      this.chiffre = this.chiffre + number.toString()
      setTimeout(() => {
        this.isActive = null
      }, 100)
    },
    deleteNumber () {
      const numbers = this.chiffre.split('')
      numbers.pop()
      this.chiffre = numbers.join('')
    },
    stop () {
      this.end = Date.now()
      this.timer = this.end - this.start
      console.log(this.timer)
    },
    convert (timer) {
      return (timer / 1000).toFixed(2) + ' s'
    }
  },
  created () {
    this.shuffledNumbers = this.shuffledNumbers.sort((a, b) => 0.5 - Math.random())
    this.number = this.shuffledNumbers[0]
  },
  mounted () {
    this.start = Date.now()
  }
}
</script>

<style lang="scss" scoped>
.display {
  font-size: 2rem;
  height: 100px;
  line-height: 100px;
}
.timer {
  height: 30px;
  visibility: hidden;
}
.timer.is-visible {
  visibility: visible;
}
.keyboard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 330px);
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
