<template>
  <div class="login">
    <button type="primary" @click="login">登录</button>
  </div>
</template>

<script setup>
// https://uniapp.dcloud.net.cn/api/plugins/login.html#getuserprofile
const login = () => {
  uni.login({
    success: () => {
      uni.getUserInfo({
        success({ userInfo }) {
          uni.setStorageSync('login.userInfo', userInfo);
          uni.navigateTo({
            url: '/pages/index/index'
          })
        }
      });
    }
  });
}
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

button {
  flex-grow: 1;
  margin: 0 24rpx;
}
</style>
