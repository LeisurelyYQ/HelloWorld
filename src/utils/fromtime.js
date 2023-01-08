export default {
    // 转换年月日的方法
    toYMD(res) {
        const time = new Date(res * 1000)
        let week = ''
        switch (time.getDay()) {
            case 0:
                week = '周日'
                break;
            case 1:
                week = '周一'
                break;
            case 2:
                week = '周二'
                break;
            case 3:
                week = '周三'
                break;
            case 4:
                week = '周四'
                break;
            case 5:
                week = '周五'
                break;
            case 6:
                week = '周六'
                break;
            default:
                break;
        }
        // 获取的几月几号，周几
        // 反引号包裹，用作模板字符串来使用。

        return `${week} ${time.getMonth() + 1}月${time.getDate()}日`
    },
    // 几月几号
    toMD(res) {
        const time = new Date(res * 1000)
        return `${time.getMonth() + 1}月${time.getDate()}日`
    },
    toMH(res) {
        const time = new Date(res * 1000)
        // 这个获取的小时
        let HH = time.getHours() ? '0' + time.getHours() : time.getHours()
        // 这一个获取的是分钟
        let MM = time.getMinutes() ? '0' + time.getMinutes() : time.getMinutes()
        return `${HH}:${MM}`
    },
    //      // 2022年12月20日
    toYME(res) {
        let time = new Date(res * 1000)
        return `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDate()}日`
    }

}