/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
    data: {
        nav:[{
            title:"推荐"
        },{
            title:"热榜"
        }],
        navClickIndex:0,
        userInfo: {},
        hasUserInfo: false,
        canIUse: swan.canIUse('button.open-type.getUserInfo'),
        imgs: [
            "../../images/banner1.jpg",
            "../../images/banner2.jpeg",
            "../../images/banner3.jpeg"
        ],
        listContent:[0,1,2,3,4]
    },
    onLoad() {
        // 监听页面加载的生命周期函数
    },
    getUserInfo(e) {
        swan.login({
            success: () => {
                swan.getUserInfo({
                    success: (res) => {
                        this.setData({
                            userInfo: res.userInfo,
                            hasUserInfo: true
                        });
                    },
                    fail: () => {
                        this.setData({
                            userInfo: e.detail.userInfo,
                            hasUserInfo: true
                        });
                    }
                });
            },
            fail: () => {
                swan.showModal({
                    title: '未登录',
                    showCancel: false
                });
            }
        });
    },
    clickNav(data){
        console.log(data)
        let index = data.currentTarget.dataset.index
        console.log(index)
        this.setData({
            navClickIndex:index
        })
    },
})
