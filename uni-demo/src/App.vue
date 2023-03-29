<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
* {
  box-sizing: border-box;
  word-wrap: break-word;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #e8e8e8;
}

.g-input {
  height: 80rpx;
  min-height: 80rpx;
  border-radius: 10rpx;
}

.g-button {
  height: 80rpx;
  line-height: 80rpx;
  color: color(rec2020 0.42053 0.979780 0.00579);
}
</style>
