// // pages/task/task.js
// Page({

//     /**
//      * 页面的初始数据
//      */
//     data: {
//         nbFrontColor: '#000000',
//         nbBackgroundColor: '#ffffff',
//         items: [
//             { name: 'study', value: '学习', checked: 'true', text: '既然选择了学习，那就不要玩手机' },
//             { name: 'work', value: '工作', text: '努力工作为了更好的未来!' },
//         ],
//     },
//     radioChange: function(e) {
//         console.log('radio发生change事件，携带value值为：', e.detail.value)
//     },

//     // 是否选中


//     /**
//      * 生命周期函数--监听页面加载
//      */
//     onLoad: function(options) {
//         this.setData({
//             nbTitle: '新标题',
//             nbLoading: true,
//             nbFrontColor: '#ffffff',
//             nbBackgroundColor: '#000000',
//         })
//     },

//     /**
//      * 生命周期函数--监听页面初次渲染完成
//      */
//     onReady: function() {

//     },

//     /**
//      * 生命周期函数--监听页面显示
//      */
//     onShow: function() {

//     },

//     /**
//      * 生命周期函数--监听页面隐藏
//      */
//     onHide: function() {

//     },

//     /**
//      * 生命周期函数--监听页面卸载
//      */
//     onUnload: function() {

//     },

//     /**
//      * 页面相关事件处理函数--监听用户下拉动作
//      */
//     onPullDownRefresh: function() {

//     },

//     /**
//      * 页面上拉触底事件的处理函数
//      */
//     onReachBottom: function() {

//     },

//     /**
//      * 用户点击右上角分享
//      */
//     onShareAppMessage: function() {

//     }
// })

//index.js
const app = getApp()
Page({
    data: {
        navbar: ['未完成', '已完成'],
        currentTab: 0,
    },
    //切换bar
    navbarTap: function(e) {
        this.setData({
                currentTab: e.currentTarget.dataset.idx
            })
            //全局变量
        app.globalData.currentTab = e.currentTarget.dataset.idx;
    },
    onShow() {
        this.setData({
            currentTab: app.globalData.currentTab
        }) 
    },

})