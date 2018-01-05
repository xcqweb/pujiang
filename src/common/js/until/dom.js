

export default {
     /*DOM*/
    //检测对象是否有哪个类名
    hasClass: function (obj, classStr) {
        var arr = obj.className.split(/\s+/); //这个正则表达式是因为class可以有多个,判断是否包含
        return (arr.indexOf(classStr) == -1) ? false : true;
    },
    //添加类名
    addClass: function (obj, classStr) {
        if (!this.hasClass(obj, classStr)) {
            obj.className += " " + classStr;
        }
    },
    //删除类名
    removeClass: function (obj, classStr) {
        if (this.hasClass(obj, classStr)) {
            var reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)');
            obj.className = obj.className.replace(reg, '');
        }
    },
    //替换类名("被替换的类名","替换的类名")
    replaceClass: function (obj, newName, oldName) {
        this.removeClass(obj, oldName);
        this.addClass(obj, newName);
    },
    //获取兄弟节点
    siblings: function (obj) {
        var a = [];//定义一个数组，用来存o的兄弟元素
        var p = obj.previousSibling;
        while (p) {//先取o的哥哥们 判断有没有上一个哥哥元素，如果有则往下执行 p表示previousSibling
            if (p.nodeType === 1) {
                a.push(p);
            }
            p = p.previousSibling//最后把上一个节点赋给p
        }
        a.reverse()//把顺序反转一下 这样元素的顺序就是按先后的了
        var n = obj.nextSibling;//再取o的弟弟
        while (n) {//判断有没有下一个弟弟结点 n是nextSibling的意思
            if (n.nodeType === 1) {
                a.push(n);
            }
            n = n.nextSibling;
        }
        return a;
    },
    //设置样式
    css: function (obj, json) {
        for (var attr in json) {
            obj.style[attr] = json[attr];
        }
    },
    //设置文本内容
    html: function (obj) {
        if (arguments.length == 0) {
            return this.innerHTML;
        }
        else if (arguments.length == 1) {
            this.innerHTML = arguments[0];
        }
    },
    //显示隐藏
    show: function (obj) {
        obj.style.display = "";
    },
    hide: function (obj) {
        obj.style.display = "none";
    }
}