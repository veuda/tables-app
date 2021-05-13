<template>
  <div class="about">
    <div class="display">
      <div>
        {{ this.number }} x {{ this.$route.params.id }} = {{ this.result }}
      </div>
      <div class="wrapper">
        <div class="answer-grid">
          <div class="answer-slot" v-for="i in 9" :key="i"></div>
        </div>
      </div>
      <div class="wrapper">
        <div class="answer-grid">
          <div class="answer" v-for="j in score" :key="j"></div>
        </div>
      </div>
      <div class="timer" v-if="this.timer !== null">
        Temps : {{ convert(this.timer) }}
      </div>
    </div>
    <div class="keyboard">
      <div>
        <div class="grid">
          <span class="number" v-for="num in keyboardNumbers" :key="num" @click="choseNumber(num)">{{ num }}</span>
          <span></span>
          <span class="number" @click="choseNumber(0)">0</span>
          <span class="number" @click="deleteNumber">&larr;</span>
        </div>
      </div>
    </div>
    <div class="start">
      <button class="button" @click="next()" v-if="this.index < 8">SUIVANT</button>
      <button class="button" @click="stop()" v-if="this.index === 8 && this.end === null">FIN</button>
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
      keyboardNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      shuffledNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      number: null,
      index: 0,
      result: '',
      score: null,
      start: null,
      end: null,
      timer: null
    }
  },
  methods: {
    next () {
      if (parseInt(this.result) === this.number * this.$route.params.id) {
        this.index += 1
        this.score += 1
        this.number = this.shuffledNumbers[this.index]
        this.result = ''
      } else {
        this.result = ''
      }
    },
    choseNumber (number) {
      if (this.timer !== null) return
      this.result = this.result + number.toString()
    },
    deleteNumber () {
      if (this.timer !== null) return
      const numbers = this.result.split('')
      numbers.pop()
      this.result = numbers.join('')
    },
    stop () {
      this.score += 1
      this.end = Date.now()
      this.timer = this.end - this.start
    },
    convert (timer) {
      if (timer > 60000) {
        return Math.floor(timer / 1000 / 60) + 'm' + Math.floor(timer / 1000 % 60) + 's'
      } else {
        return (timer / 1000).toFixed(2) + ' s'
      }
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
  height: 160px;
  padding-top: 1.2rem;
  .timer {
  font-size: 1rem;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    margin: 0.5rem 0;
    .answer-grid {
      display: grid;
      grid-template-columns: repeat(9, 10px);
      gap: 1rem;
      .answer-slot {
        height: 10px;
        width: 10px;
        background: rgb(220, 220, 220);
        border-radius: 50%;
      }
      .answer {
        height: 10px;
        width: 10px;
        background: rgb(94, 194, 119);
        border-radius: 50%;
        margin-top: -18px;
      }
    }
  }
}
.keyboard {
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
}
</style>
