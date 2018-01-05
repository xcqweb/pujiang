//JS控制图片按比例缩放并不超过一定宽度和高度
//图片按比例缩放
function DrawImage(ImgD, iwidth, iheight) {
    var flag = false;
    var image = new Image();
    //var iwidth = 620;            //定义允许图片宽度，当宽度大于这个值时等比例缩小
    //var iheight = 360;            //定义允许图片高度，当宽度大于这个值时等比例缩小
    var minwidth = iwidth  //图片最小宽度小于定义百分比；
    var minheight = iheight //图片最小高度小于定义百分比
    image.src = ImgD.src;
    if (image.width > 0 && image.height > 0) {         //假如图片长宽都不为零
        flag = true;
        if (image.height / image.width >= iheight / iwidth) {       //通过正弦值判断图片缩放后是否偏高
            if (image.height > iheight) {        //如果图片比设定的要高
                ImgD.height = iheight;
                ImgD.width = (image.width * iheight) / image.height;
            } else {

                //假如图片width<70%(设定)&&heitht<70%(设定)
                if (image.height < minheight) {

                    ImgD.height = minheight;
                    ImgD.width = (image.width * minheight) / image.height;
                }
                else {
                    ImgD.width = image.width;
                    ImgD.height = image.height;
                }

            }

            //                    ImgD.alt = image.width + "×" + image.height;
        }

        else {           //如果图片比例 小于 设定的比例
            if (image.width > iwidth) {
                ImgD.width = iwidth;
                ImgD.height = (image.height * iwidth) / image.width;
            } else {

                //假如图片width<70%(设定)&&heitht<70%(设定)
                if (image.width <= minwidth) {

                    ImgD.width = minwidth;
                    ImgD.height = (image.height * minwidth) / image.width;
                }
                else {
                    ImgD.width = image.width;
                    ImgD.height = image.height;
                }

            }
            //                    ImgD.alt = image.width + "×" + image.height;
        }
    }
}