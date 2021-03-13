Page({
    data: {
        //存储计时器
        setInter: '',
        tenmin: 0,
        min: 0,
        tensec: 0,
        sec: 0,

        active: false,
        click: false
    },
    onLoad: function() {

    },
    // 计时器开始
    //开始计时
    startSetInter: function() {

        var that = this;

        //将计时器赋值给setInter
        that.data.setInter = setInterval(
            function() {
                var tenmin = that.data.tenmin;
                var min = that.data.min;
                var tensec = that.data.tensec;
                var sec = that.data.sec;
                // var time = tenmin + min + ":" + tensec + sec;
                if (min == 9 && tensec == 5 && sec == 9) {
                    tenmin += 1;
                    min = 0;
                    sec = 0;
                    tensec = 0;
                } else {
                    if (sec == 9 && tensec == 5) {
                        min += 1;
                        sec = 0;
                        tensec = 0;
                    } else {
                        if (sec == 9) {
                            sec = 0;
                            tensec += 1;
                        } else {
                            sec += 1;
                        }
                    }
                }
                that.setData({ tensec: tensec });
                that.setData({ tenmin: tenmin });
                that.setData({ sec: sec });
                that.setData({ min: min });
                // setInterval = 'setInterval==' + that.data.tenmin + that.data.min + ":" + that.data.tensec + that.data.sec
                // console.log(setInterval);
            }, 1000);
        that.setData({
            active: true,
            tenmin: 0,
            tensec: 0,
            sec: 0,
            min: 0,
        })

    },
    //停止计时
    endSetInter: function() {
        var that = this;
        //清除计时器  即清除setInter
        clearInterval(that.data.setInter)
        that.setData({
            active: false
        })
    },
    onHide: function() {

    },
    onUnload: function() {
        var that = this;
        //清除计时器  即清除setInter
        clearInterval(that.data.setInter)
    },

    // 计时器结束

    // Onclick: function() {
    //     var click = false;
    //     if (Onclick) {
    //         click = true;
    //     } else {
    //         click = false;
    //     }
    //     console.log("1");
    // }

})