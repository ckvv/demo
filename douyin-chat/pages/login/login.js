const getUserProfile = async () => {
  return new Promise((resolve, reject) => {
    tt.getUserProfile({
      success(data) {
        resolve(data);
      },
      fail(err) {
        tt.showModal({
          title: `调用 login 失败: ${err.errMsg}`
        });
        reject(err)
      }
    });
  });
};

Page({
  onLoad: function () {
  },
  login: async function () {
    const { userInfo } = await getUserProfile();
    tt.setStorageSync('login.userInfo', userInfo);
    tt.navigateTo({
      url: '/pages/index/index',
      success: (res) => {

      },
      fail: (res) => {

      },
    });
  }
});