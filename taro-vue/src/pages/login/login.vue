<template>
  <div class="login">
    <nut-button block type="success" @click="login">登录</nut-button>
  </div>
</template>

<script setup>
import Taro from '@tarojs/taro';

const login = async () => {
  const { userInfo } = await Taro.getUserProfile({
    desc: '',
  });
  Taro.setStorageSync('login.userInfo', userInfo);
  Taro.navigateTo({
    url: '/pages/index/index',
  })
}
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.g-button {
  flex-grow: 1;
  margin: 0 24rpx;
}
</style>
