//蛇的插件
var map = document.getElementById('map');
;(function(){

    var Snake = function(options = {}){
        this.position = options.position  || 'absolute';
        //蛇节的大小
        this.width = options.width || 20;
        this.height = options.height || 20;
        //设置蛇头的走向，主要用于，监听键盘事件的时候，判断走向
        this.direction = options.direction || 'right';
        //蛇的身体：第一个元素是蛇头，默认初始为3节，x和y分别表示：距离左侧和上侧有几个蛇节的长度
        this.body = [
            {   x:3,
                y:2,
                backgroundColor:'red'
            },
            {   x:2,
                y:2,
                backgroundColor:'#1CDD05'
            },
            {   x:1,
                y:2,
                backgroundColor:'#1CDD05'
            }
        ]
    };

    var snakeList = [];
    //渲染蛇
    Snake.prototype.render = function(map){

        removeSnake(map)

        //遍历每一个蛇节，因为蛇初始化有3节
        this.body.forEach(v =>{
            var div = document.createElement('div');
            div.style.position = this.position;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = v.x * this.width + 'px';
            div.style.top = v.y * this.height + 'px';
            div.style.backgroundColor = v.backgroundColor;
            map.appendChild(div);
            snakeList.push(div);
        })
    }

    function removeSnake(map){
        for(var i = snakeList.length - 1; i >=0 ;i--){
            // 删除每一个旧的div
            map.removeChild(snakeList[i]);
            // 从数组中删除数据
            snakeList.splice(i,1);
        }
    }

     //蛇移动
     Snake.prototype.move = function (food,map){
        // 控制蛇身的移动 => 当前蛇节移动到上一个蛇节的位置
        // 因为无法预估蛇身体的长度，所以干脆从最大的长度开始递减，因为要除去蛇头，所以要减去1
        // this.body.length - 1 是数组的最后一个成员，
        // 而 i > 0 的意思就是不会遍历到下标为0的成员，仅仅遍历到下标为1截止
        for(var i = this.body.length - 1; i > 0;i--){
            this.body[i].x = this.body[i -1].x;
            this.body[i].y = this.body[i -1].y;
        };

     //控制蛇头移动的方向
     var head = this.body[0];
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;

     }

    //判断蛇头与食物的坐标是否重合
    var headX = head.x * this.width,
        headY = head.y * this.height;

    if(headX == food.x && headY == food.y){

        var last = this.body[this.body.length - 1];

        this.body.push({
            x:last.x,
            y:last.y,
            backgroundColor:last.backgroundColor

        });

        food.render(map)
    }

    }
    window.Snake = Snake;

})();
