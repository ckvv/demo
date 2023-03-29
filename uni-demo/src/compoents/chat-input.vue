<template>
  <view class="chat-input">
    <input class="g-input" v-model="content" @confirm="sendMsg" type="text" placeholder="请输入内容" />
    <button class="g-button" @click="sendMsg" type="primary">发送</button>
  </view>
</template>

<script setup>
import { ref } from 'vue';
// import Taro from '@tarojs/taro';

const emits = defineEmits(['send']);
const props = defineProps(['userInfo']);

const content = ref('');

const sendMsg = () => {
  if (!content.value.trim()) {
    uni.showModal({
      title: '请输入内容后点击发送',
    });
    return;
  }
  const { userInfo } = props;
  const chatData = {
    src: userInfo.avatarUrl,
    content: content.value,
    reverse: true,
  };

  content.value = '';
  emits('send', chatData);
};
</script>

<style>
.chat-input {
  display: flex;
  margin: 12px 0;
}

.g-input {
  flex-grow: 1;
  padding: 0 24rpx;
  background-color: rgba(244, 245, 246, 1);
}

.g-button {
  flex-grow: 0;
  margin: 0 0 0 24rpx;
  flex-shrink: 0;
}
</style>