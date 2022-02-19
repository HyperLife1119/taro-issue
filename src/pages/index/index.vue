<template>
  <list-view :loading="true"></list-view>

  <!-- 把下面这行注释打开，属性即可绑定成功 -->
  <!-- <van-loading v-if="false" type="spinner" size="85rpx" text-size="30rpx" :vertical="true"></van-loading> -->
</template>

<script lang="ts">
import { listView } from 'sun-mini-core/components/list-view';

export default {
  components: {
    listView
  },

  setup() {
    return {}
  }
}
</script>

<style>
page  {
 padding: 30rpx;
}
</style>
