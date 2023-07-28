<template>
  <view class="index">
    <van-button type="primary" open-type="share" :dataset="999">分享</van-button>
  </view>
</template>

<script setup>
import { useShareAppMessage } from '@tarojs/taro';
import './index.scss';

useShareAppMessage((event) => {
  console.log(event.target);

  return {
    title: 'title',
    path: 'path',
  }
})
</script>
