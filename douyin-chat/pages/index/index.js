import userInfoBehavior from "../../behaviors/user-info";
import { tianqi } from '../../apis/tianqi';

Component({
  behaviors: [userInfoBehavior],
  data: {
    scrollTop: '',
    chatList: [],
  },
  methods: {
    chatPush(data) {
      this.setData({
        chatList: [...this.data.chatList, data]
      });
    },
    async sendMsg(e) {
      this.chatPush(e.detail);

      setTimeout(async () => {
        this.chatPush({
          src: '/images/客服.png',
          content: await tianqi(e.detail.content)
        });

        this.setData({
          scrollTop: this.data.scrollTop + 500,
        })
      }, 500);
    },
  },
  lifetimes: {
    ready() {
      const userInfo = this.data.userInfo;
      this.setData({
        userInfo: userInfo,
        chatList: [{
          src: '/images/客服.png',
          content: `你好 "${userInfo.nickName}", 输入城市名我会返回该城市最近七天的天气。`
        }]
      });
    },
  },
  pageLifetimes: {
    show() {
      if(!this.data.userInfo) {
        tt.navigateTo({
            url: '/pages/login/login',
        });
      }
    },
  },
})
