Page({
    data: {
        optimumShow: false,
        optimumsHeight: "auto",
        msg: "最低分数线就是一个兜底的，由于公务员这几年竞争比较激烈，所以那个分数线基本上没有用。至于比分数线高多少能进入面试，要看报考的岗位，一些热门岗位高个四五十分都是很可能的。"
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
    },
    onReady: function () {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function () {
        // 监听页面显示的生命周期函数
    },
    onHide: function () {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function () {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function () {
        // 监听用户下拉动作
    },
    onReachBottom: function () {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    clickOptimumMsg() {
        // 先把页面

        this.setData({
            optimumShow: true,
            optimumsHeight: '500rpx'
        })

        // this.getRect()


    },
    // 获取答案的高度
    // getRect: function () {
    //     let that = this
    //     swan.createSelectorQuery().select('#optimum').boundingClientRect(function (rect) {
    //         rect.id      // 节点的ID
    //         rect.dataset // 节点的dataset
    //         rect.left    // 节点的左边界坐标
    //         rect.right   // 节点的右边界坐标
    //         rect.top     // 节点的上边界坐标
    //         rect.bottom  // 节点的下边界坐标
    //         rect.width   // 节点的宽度
    //         rect.height  // 节点的高度
    //         console.log(rect)
    //         that.setData({
    //             optimumsHeight: 120 + 'rpx',
    //             // optimumShow: false,
    //         })
    //         setTimeout(function () {
    //             that.setData({
    //                 // optimumShow: true,
    //                 optimumsHeight: rect.height + 'px'
    //             })
    //         }, 250)

    //     }).exec()
    // },
});