export default Behavior({
    data: {
        userInfo: {},
    },
    lifetimes: {
        attached() {
            const userInfo = tt.getStorageSync('login.userInfo');
            if(!userInfo) {
                tt.navigateTo({
                    url: '/pages/login/login',
                });
            }
            this.setData({
                userInfo: userInfo,
            });
        },
    }
});