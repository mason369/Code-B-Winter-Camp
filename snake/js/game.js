var map = document.getElementById('map');

;(function () {

	var Game = function (map) {

		this.food = new Food;
		this.snake = new Snake;
		this.map = map;
		that = this;
	};

	Game.prototype.start = function () {
		this.food.render(this.map);
		this.snake.render(this.map);
		runSnake()

		//开始游戏逻辑
		//1.让蛇移动起来 => 因为蛇每隔一段时间就需要自动移动一段距离，所以需要用到setInterval()
		//2.当蛇遇到边界，则游戏结束
		//3.通过键盘可以控制蛇的移动方向
		//4.当蛇遇到食物，做相应的处理 => 食物得重新生成，蛇变长一节

		//当蛇遇到了食物，就是判断蛇头的坐标与食物的坐标是否一致，发生了两件事情
		//蛇的身体变长了一节:在蛇的body对象中新增加了一个对象，且位置就是最后一个元素的位置
		//地图上生成新的食物:

		//蛇移动的函数
		function runSnake() {
			//开启一个定时器
			//setInterval属于window的，也就是说windoe在调用它，所以this指向window
			var timer = setInterval(() => {
				//控制蛇的移动,因为this指向window，所以无法通过this访问到蛇的move方法
				//我们可以通过在构造函数中，将this提前保存至变量that这种方法，便于我们获得this
				that.snake.move(that.food, that.map);
				that.snake.render(that.map);
				//边界判断：当蛇遇到边界
				var maxX = that.map.offsetWidth / that.snake.width,
					maxY = that.map.offsetHeight / that.snake.height,

					headX = that.snake.body[0].x,
					headY = that.snake.body[0].y;

				if (headX < 0 || headX >= maxX) {
					alert('game over');
					clearInterval(timer)
				}

				if (headY < 0 || headY >= maxY) {
					alert('游戏结束');
					clearInterval(timer)
				}

			}, 100)
		}

		//集中管理键盘事件
		function bindKey() {
			document.addEventListener('keydown', handleKey)
		};

		bindKey();

		//绘制地图格子
		function drawMap() {
			for (var i = 0; i < 35; i++) {
				for (var j = 0; j < 35; j++) {
					var oDiv = document.createElement('div');
					oDiv.style.width = '20px';
					oDiv.style.height = '20px';
					oDiv.style.border = '1px solid #000';
					oDiv.style.position = 'absolute';
					oDiv.style.left = i * 20 + 'px';
					oDiv.style.top = j * 20 + 'px';
					map.appendChild(oDiv);
				}
			}
		}

		//调用
		drawMap();


		//函数处理逻辑
		function handleKey(e) {
			//1.获取你按了哪个键盘
			var keyResult = e.keyCode;
			//判断按下了哪个键
			switch (keyResult) {
				case 87:
					that.snake.direction = 'top'
					break;

				case 83:
					that.snake.direction = 'bottom'
					break;

				case 65:
					that.snake.direction = 'left'
					break;

				case 68:
					that.snake.direction = 'right'
					break;
			}
		}
	};

	window.Game = Game;

})();

//  var map = 0;
var oMap = document.getElementById('map');
var game = new Game(oMap);
game.start();
//添加游戏重新开始的功能（刷新页面）
var oBtn = document.getElementById('restart');
oBtn.onclick = function () {
	location.reload();

}
