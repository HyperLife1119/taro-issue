<template>
  <view class="index">
    <van-field :readonly="true" :value="msg" label="姓名" maxlength="30" />
    <van-button class="my-cls" type="primary">按钮</van-button>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.scss'

export default {
  setup() {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
}
</script>

<style>
.my-cls button {
  font-size: 50px;
}
</style>
