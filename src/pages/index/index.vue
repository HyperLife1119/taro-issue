<template>
  <view class="index">
    <van-field :readonly="true" :value="msg" label="姓名" maxlength="30" />
    <van-button class="my-cls" type="primary">按钮</van-button>
    <van-datetime-picker type="datetime" :filter="filter" />
  </view>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const msg = ref('Hello world')
    const filter = (type: string, options: number[]) => {
      if (type === 'minute') {
        return options.filter(option => option % 5 === 0);
      }
      return options;
    };
    return {
      msg,
      filter
    }
  }
}
</script>

<style>
.my-cls button {
  font-size: 50px;
}
</style>
