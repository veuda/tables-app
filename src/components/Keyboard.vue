<template>
  <div class="tables">
    <div>
      <div class="grid">
        <span
          class="number"
          :class="[number === num ? 'is-active' : '']"
          @click="choseNumber(num)"
          v-for="num in numbers"
          :key="num"
          >{{ num }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Keybord'
}
</script>

<style>
</style>