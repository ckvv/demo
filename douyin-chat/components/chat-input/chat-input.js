Component({
    properties: {
        userInfo: Object,
    },
    data: {
        content: "",
    },
    methods: {
        handleInput(e) {
            this.setData({
                content: e.detail.value,
            });
        },
        sendMsg() {
            if (!this.data.content.trim()) {
                tt.showModal({
                    title: '请输入内容后点击发送',
                });
                return;
            }
            const chatData = {
                src: this.data.userInfo.avatarUrl,
                content: this.data.content,
                reverse: true,
            };
            this.setData({
                content: "",
            })

            this.triggerEvent('send', chatData);
        },
    },
});
