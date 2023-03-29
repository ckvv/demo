<template>
  <view class="chat-item" :style="{flexDirection: !reverse ? 'row' : 'row-reverse'}">
      <image class="avatar" :src="src"></image>
      <text class="content" :selectable="false"> {{ content }} </text>
  </view>
</template>

<script setup>
defineProps({
  src: String,
  content: String,
  reverse: {
    type: Boolean,
    default: false,
  }
})
</script>

<style>
.chat-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 40rpx;
}

.avatar {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    flex-shrink: 0;
    margin: 0 12rpx;
    background-color: #ffffff;
}

.content {
    padding: 16rpx;
    background-color: #ffffff;
    border-radius: 24rpx;
    max-width: 460rpx;
}
</style>