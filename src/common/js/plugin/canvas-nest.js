/**
 * canvas api
 *
 * stroke();//绘制
 * fill();//填充
 *
 * 
 * **线条api
 * moveTo(x,y);
 * lineTo(x,y);
 *
 * **封闭api
 * beginPath();
 * closePath();
 *
 * **弧api(弧api+封闭api=圆)
 * arc(x,y,r,startDeg,endDeg,antiClockWise);
 *
 * **矩形api
 *  只描边
 *ctx.strokeRect(左上角 x 坐标, 左上角 y 坐标, 宽度, 高度);
 * 只填充
 *ctx.fillRect(左上角 x 坐标, 左上角 y 坐标, 宽度, 高度);
 *清除矩形像素
 *ctx.clearRect(左上角 x 坐标, 左上角 y 坐标, 宽度, 高度);
 * 
 *
 * **文字api
 *
 * ctx.font = '30px Verdana';
 * ctx.strokeText("Hello Coding!", 23, 33);
 * ctx.fillText("Hello Coding!", 23, 66);
 *
 * **图片api
 *指定绘制位置
 *ctx.drawImage(image, x, y);
 *指定绘制位置和图像宽高
 *ctx.drawImage(image, x, y, width, height);
 *指定剪裁区域、绘制位置和图像宽高
 *ctx.drawImage(image, sx, sy, swidth, sheight, x, y, width, height);
 *image:   要使用的 Image、Canvas 或 Video
 *sx:      可选，开始剪切的 x 坐标
 *sy:      可选，开始剪切的 y 坐标
 *swidth:  可选，被剪切图像的宽度
 *sheight: 可选，被剪切图像的高度
 *x:       在画布上放置图像的 x 坐标
 *y:       在画布上放置图像的 y 坐标
 *width:   可选，要使用的图像的宽度
 *height:  可选，要使用的图像的高度
 *
 *
 *
 * **画布设置api
 *
 * ctx.lineWidth='34';
 * 
 * ctx.translate(往右移动的量, 往下移动的量);//移动画布(移动坐标系)
 * ctx.rotate(顺时针旋转的角度);//旋转画布，旋转中心为坐标系原点
 * ctx.scale(横向放大倍数, 纵向放大倍数);//以坐标系原点为中心缩放画布
 * 
 * ctx.globalAlpha(零到一的小数);//设置绘制透明度，如果 fillStyle 等属性设置了透明度则会叠加
 * 
 * ctx.globalCompositeOperation = 'lighter';//设置全局组合操作
 * 
 * ctx.save();//保存当前设置
 * ctx.restore();//恢复上次保存的设置
 *
 *
 * **其他
 * getImageData()
 * putImageData()
 * toDataUrl()
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 
 *
 * 
 */
var Nest = function () {
    //封装方法，压缩之后减少文件大小
    function get_attribute(node, attr, default_value) {
        return node.getAttribute(attr) || default_value;
    }
    //封装方法，压缩之后减少文件大小
    function get_by_tagname(name) {
        return document.getElementsByTagName(name);
    }
    //获取配置参数
    function get_config_option() {
        var scripts = get_by_tagname("script"),
            script_len = scripts.length,
            script = scripts[script_len - 1]; //当前加载的script
        return {
            l: script_len, //长度，用于生成id用
            z: get_attribute(script, "zIndex", 22), //z-index
            o: get_attribute(script, "opacity", 0.5), //opacity
            c: get_attribute(script, "color", "255,255,255"), //color
            n: get_attribute(script, "count", 99) //count
        };
    }
    //设置canvas的高宽
    function set_canvas_size() {
        canvas_width = the_canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 
        canvas_height = the_canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    //绘制过程
    function draw_canvas() {
        context.clearRect(0, 0, canvas_width, canvas_height);
        //随机的线条和当前位置联合数组
        var e, i, d, x_dist, y_dist, dist; //临时节点
        //遍历处理每一个点
        random_lines.forEach(function(r, idx) {
            r.x += r.xa, 
            r.y += r.ya, //移动
            r.xa *= r.x > canvas_width || r.x < 0 ? -1 : 1, 
            r.ya *= r.y > canvas_height || r.y < 0 ? -1 : 1, //碰到边界，反向反弹
            context.fillRect(r.x - 0.5, r.y - 0.5, 1, 1); //绘制一个宽高为1的点
            //从下一个点开始
            for (i = idx + 1; i < all_array.length; i++) {
                e = all_array[i];
                //不是当前点
                if (null !== e.x && null !== e.y) {
                        x_dist = r.x - e.x, //x轴距离 l
                        y_dist = r.y - e.y, //y轴距离 n
                        dist = x_dist * x_dist + y_dist * y_dist; //总距离, m
                    dist < e.max && (e === current_point && dist >= e.max / 2 && (r.x -= 0.03 * x_dist, r.y -= 0.03 * y_dist), //靠近的时候加速
                        d = (e.max - dist) / e.max, 
                        context.beginPath(), 
                        context.lineWidth = d / 2, 
                        context.strokeStyle = "rgba(" + config.c + "," + (d + 0.2) + ")", 
                        context.moveTo(r.x, r.y), 
                        context.lineTo(e.x, e.y), 
                        context.stroke());
                }
            }
        }), frame_func(draw_canvas);
    }
    //创建画布，并添加到body中
    var the_canvas = document.createElement("canvas"), //画布
        config = get_config_option(), //配置
        canvas_id = "c_n" + config.l, //canvas id
        context = the_canvas.getContext("2d"), canvas_width, canvas_height, 
        frame_func = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(func) {
            window.setTimeout(func, 1000 / 45);
        }, random = Math.random, 
        current_point = {
            x: null, //当前鼠标x
            y: null, //当前鼠标y
            max: 20000
        },
        all_array;
    the_canvas.id = canvas_id;
    the_canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + config.z + ";opacity:" + config.o;
    document.getElementById('loginmain').appendChild(the_canvas);
    // get_by_tagname("body")[0].appendChild(the_canvas);
    //初始化画布大小

    set_canvas_size(), window.onresize = set_canvas_size;
    //当时鼠标位置存储，离开的时候，释放当前位置信息
    window.onmousemove = function(e) {
        e = e || window.event, current_point.x = e.clientX, current_point.y = e.clientY;
    }, window.onmouseout = function() {
        current_point.x = null, current_point.y = null;
    };
    //随机生成config.n条线位置信息
    for (var random_lines = [], i = 0; config.n > i; i++) {
        var x = random() * canvas_width, //随机位置
            y = random() * canvas_height,
            xa = 2 * random() - 1, //随机运动方向
            ya = 2 * random() - 1;
        random_lines.push({
            x: x,
            y: y,
            xa: xa,
            ya: ya,
            max: 6000 //沾附距离
        });
    }
    all_array = random_lines.concat([current_point]);
    //0.1秒后绘制
    setTimeout(function() {
        draw_canvas();
    }, 100);
}
export default Nest