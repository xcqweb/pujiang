<template>
  <div id="app" >
    <div class="content">
     <keep-alive> 
        <router-view></router-view>
     </keep-alive> 
    </div>
  </div>
</template>

<script type="text/javascript">
import store from './vuex/index' 
import router from './router'
import echarts from 'echarts';
import Vue from 'vue'

Vue.mixin({
  mounted: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})
Vue.config.devtools = true;
export default {

  data(){
    return{
      // img: require('./assets/images/bg.png')
  }
  },
  components:{}
  ,
  store:store,

  methods:{},
  created(){
    
  }
}
</script>
<!--全局样式-->
<style lang="less">
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

 body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  background: #F2F7FA;
}
/*a:link { text-decoration: none;color: blue}
a:active { text-decoration:blink}
a:hover { text-decoration:underline;color: red} 
a:visited { text-decoration: none;color: green}*/
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
p,h1,span,font,a,li{
      font-family: "Microsoft YaHei","SF Pro SC","HanHei SC","PingFang SC",Arial,Helvetica,sans-serif,"SimSun";

}   
html{
  overflow-x: hidden;
  background: #F2F7FA;
  font-family:numberFont, "Microsoft YaHei","SF Pro SC","HanHei SC","PingFang SC",Arial,Helvetica,sans-serif,"SimSun",;
}
.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
@media screen and (max-width: 1079px) {html{font-size:10px;}}
@media screen and (min-width: 1080px) {html{font-size:12px;}}
@media screen and (min-width: 1270px) {html{font-size:14px;}}
@media screen and (min-width: 1460px) {html{font-size:16px;}}
@media screen and (min-width: 1599px) {html{font-size:18px;}}
@media screen and (min-width: 1910px) {html{font-size:20px;}}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0;
  width: 100%;
  @media screen and (min-width: 600px){
      height: 100vh;
  }
  @media screen and (max-width: 600px){
    min-height:100vh;
    height: auto;
  }
  
  //background-image: url('./assets/images/bg.png') ;
  background-repeat: repeat-y;
  background-size:100vw auto;

}
.content{
  width: 100%;
  height: 100%;
}

.backbtn {
  position: absolute;
  top: 2rem;
  right: 5.5rem;
  width: 3rem;
  height: 3rem;
  background-image: url("./assets/images/Group5@2x.png") ;

  -webkit-background-size: 100%;
  background-size: 100%;
  background-position: center;
  display: none;
  z-index: 999;
  cursor: pointer;
}
@font-face{
font-family: numberFont;
src: url('./assets/style/fonts/lcddd.ttf'),
}

/*div,font,span,p{
	font-family: numberFont;
}*/
</style>
