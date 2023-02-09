// 这是食物的插件

;(function(){

    var Food = function(options = {}){
        // 给食物的实例添加属性
        this.width = options.width || 20 ;
        this.height = options.height || 20 ;
        this.position = options.position || 'absolute';
        this.backgroundColor = options.backgroundColor || 'orange';
        this.x = options.x || 0 ;
        this.y = options.y || 0 ;
    };

    // 设置方法
    Food.prototype.render = function(map){
        // 生成新的食物之前，先删除掉旧的食物
        removeOldFood(map)

        // 渲染之前，先让x和y坐标变为随机数
        this.x = utils.getRandom(0,map.offsetWidth / this.width -1) * this.width;
        this.y = utils.getRandom(0,map.offsetHeight / this.height -1) * this.height;

        // 创建一个div，并且将实例身上的属性值全部设置为这个div的样式，最后将div放到地图中
        var div = document.createElement('div');
        div.style.backgroundColor = this.backgroundColor;
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.position = this.position;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        map.appendChild(div);
        // 将食物放入地图中的时候，就进行记录 => dom节点放到了地图中
        foodList.push(div);
    };

    // 这个数组就保存所有的食物
    var foodList = []
    function removeOldFood(map){
        // 移出dom节点 => 移出dom节点不代表原本存在于内存中的数据也被删除了
        // 所以在移出了dom之后，也需要将内存中保存的数据一并删掉
        // 所以foodList里面永远只会保留一个数据 => dom节点
        foodList.forEach(v=>map.removeChild(v));
        // 清除数据
        foodList.pop();
    }

    window.Food = Food;

})();

// 获取地图对象map
// var oMap = document.getElementById('map');
// var food = new Food();
// food.render(oMap)