// utils是一个工具对象，里面除了随机数函数之外，可能后期还会追加其他的工具函数
var utils = {
	getRandom: function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最
		小值;
	},
};
