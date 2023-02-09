// utils 在企业中是一个工具函数 
// 在这里，我们将utils作为一个工具对象，在对象中放入随机函数

// utils作为一个对象，将来很有可能会添加其他的工具类函数，所以抽离为一个对象
// 随机数函数直接去MDN上面搜索Math.random()即可
var utils = {
    // 放随机函数 => MDN上直接复制即可
       getRandom: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
      }
}