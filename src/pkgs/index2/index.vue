<template>
  <view class="index">
    {{ count.length }}
    <button @tap="count.push(1)">+1</button>
  </view>
</template>

<script>
import { ref } from 'vue'

export default {
  data: () => (
    { count: [] }
  )
}
</script>

<style>
</style>
