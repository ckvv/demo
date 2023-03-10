<template>
  <view class="home">
    <view class="chat-list-wrapper">
      <scroll-view class="chat-list" :scroll-y="true" :scrollIntoView="`key_${chatList.length}`">
        <chat-item v-for="(item, index) in chatList" :id="`key_${index + 1}`" :src="item.src" :reverse="item.reverse"
          :content="item.content">
        </chat-item>
      </scroll-view>
    </view>
    <chat-input :userInfo="userInfo" @send="sendMsg"></chat-input>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Taro from '@tarojs/taro';
import ChatInput from '@/compoents/chat-input.vue'
import ChatItem from '@/compoents/chat-item.vue'
import { tianqi } from '@/apis/tianqi.js';
import kefu from '@/images/客服.png';

const chatList = ref([]);
const userInfo = ref();

const sendMsg = (data) => {
  chatList.value.push(data)
  setTimeout(async () => {
    chatList.value.push({
      src: kefu,
      content: await tianqi(data.content)
    })
  }, 500);
}

onMounted(() => {
  userInfo.value = Taro.getStorageSync('login.userInfo');

  if (!userInfo.value) {
    Taro.navigateTo({
      url: '/pages/login/login',
    });
  } else {
    chatList.value.push({
      src: kefu,
      content: `你好 "${userInfo.value.nickName}", 输入城市名我会返回该城市最近七天的天气。`
    })
  }
})
</script>

<style>
.home {
  padding: 12px;
  height: 100%;
  overflow: hidden;
}

.chat-list-wrapper {
  height: calc(100% - 160rpx);
}

.chat-list {
  height: 100%;
}
</style>
