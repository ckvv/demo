export async function tianqi(city) {
    return new Promise((resolve, reject) => {
        tt.request({
            url: `https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=&city=${city}`,
            header: {},
            data: {},
            method: 'GET',
            dataType: "json",
            success: (res) => {
                const { data: { errmsg, data } } = res;
                console.log(res)
                resolve(errmsg || `${data.map(({ date, narrative }) => `${date} ${narrative}`).join('\n')}`);
            },
            fail: (err) => {
                reject(err);
            },
        });
    })
}
