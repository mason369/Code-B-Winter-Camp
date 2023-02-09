// game为中介者，负责渲染food对象及蛇对象，并且开始游戏

;(function(){

    var Game = function(map){
        this.food = new Food;
        this.snake = new Snake;
        this.map = map;
    };

    // 开始游戏
    Game.prototype.start = function(){
        this.food.render(this.map);
        this.snake.render(this.map);
        this.snake.move();
        this.snake.render(this.map);
        this.snake.move();
        this.snake.render(this.map);
        this.snake.move();
        this.snake.render(this.map);
    };

    window.Game = Game;

})();

var oMap = document.getElementById('map');
var game = new Game(map);
game.start();


