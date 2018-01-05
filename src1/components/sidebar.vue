<template>
        <ul>
          <li class="level-one profile active"><span class="img profile"></span><span><router-link to="/profile"> 概览</router-link></span>
          </li>
          <li v-for= "sidebar in sidebars" class="level-one" v-bind:class="sidebar.onlystyle"  >
            <span class="img" v-bind:class="sidebar.onlystyle"></span>
            <span @click="toggle(sidebar)">{{sidebar.title}}<span class="toggle"> 
            </span></span>
            <ul v-if="sidebar.show">
              <li v-for="list in sidebar.lists"><router-link v-bind:to={path:list.link}>{{list.title}}</router-link></li>
            </ul>
            
          </li>
          <ul>
          </ul>
        </ul>
</template>
 
<script>
export default {
  data() {
    return {
      author: "微信公众号 jinkey-love 来自first组件.vue",
      articles: [],
      navs:[
         { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
      ],
      sidebars:[
          {
            title:'实时监控',
            show:false,
            onlystyle:{video:true},
            styles:{
              open:true,
              active:true,
            },
            link:'/',
            lists:[
                {title:'客流监测',link:'/touristWatch'},
                {title:'路况监控',link:'/loadWatch'},
                {title:'景区监控',link:'/attractionWatch'},
          ]
          },
          {
            title:'游客分析',
            onlystyle:{index_ana:true},
            show:false,
            link:'/',
            lists:[
                {title:'游客年龄和性别',link:'/touristAgeGender'},
                {title:'游客出行信息',link:'/touristOutInfo'},
                {title:'游客来源',link:'/touristFrom'},
                {title:'潜力游客属性',link:'/potentialTourist'},
          ]
          },
          {
            title:'收益分析',
            show:false,
            onlystyle:{income_ana:true},
            link:'/',
            lists:[
                {title:'消费营销分析',link:'/income'},
                {title:'村庄收益分析',link:'/village'},
          ]
          },
          {
            title:'富民指数',
            show:false,
            onlystyle:{count_ana:true},
            link:'/',
            lists:[
                {title:'指数分析',link:'/indexAnalysis'},

          ]
          },
          {
            title:'预警设置',
            show:false,
            onlystyle:{warning:true},
            lists:[
                {title:'景区人流预警器',link:'touristWarning'},
                {title:'交通情况预警',link:'trafficWarning'},
          ]
          },
          {
            title:'旅游数据统计',
            show:false,
            onlystyle:{decision:true},
            lists:[
                {title:'景点',link:'/attractions'},
                {title:'旅行社',link:'/travelAgency'},
                {title:'住宿',link:'/accommodation'},
                {title:'乡村旅行',link:'/villageStatis'},
          ]
          },
          {
            title:'管理',
            show:true,
            onlystyle:{admin:true},
            lists:[
                {title:'WiFi探针地图',link:'/watchmap'},
                {title:'修改密码',link:'/modifyPass'},
                {title:'退出登录',link:'/logout'},
          ]
          },


      ]
    }
  },
  methods: {
    toggle: function(item) {
            // console.log(item.show)
            item.show = !item.show;
            // console.log(item.show)
    }
  }
}
</script>
 
<style lang="less" scoped>
/*a:link { text-decoration: none;color: black}
a:active { text-decoration:black}
a:hover { text-decoration:underline;color: black} 
a:visited { text-decoration: none;color: black}*/
.sidebar:hover {
  /*overflow-y: scroll;*/
}
.sidebar .level-one {
  position: relative;
  list-style: none;
  margin-left: 38.3%;
  /*131px*/
  text-align: left;
}
.sidebar .level-one span {
  color: #333333;
  line-height: 42px;
}
.sidebar .level-one span .toggle {
  position: absolute;
  top: 20px;
  right: 16.67%;
  width: 9px;
  height: 7.7px;
  background-image: url("../assets/opened.png");
  background-size: 9px 7.7px;
  background-repeat: no-repeat;
}
.sidebar .level-one span.img {
  position: absolute;
  left: -62px;
  top: 16px;
  width: 14px;
  height: 14px;
  /*background-size:11px 14px;*/
  background-repeat: no-repeat;
}
.sidebar .level-one span.img.profile {
  width: 14px !important;
  top: 14px;
  background-image: url("../assets/概览.png");
}
.sidebar .level-one span.img.video {
  background-image: url("../assets/实时监控.png");
}
.sidebar .level-one span.img.index_ana {
  background-image: url("../assets/指数分析.png");
}
.sidebar .level-one span.img.income_ana {
  background-image: url("../assets/收益分析.png");
}
.sidebar .level-one span.img.count_ana {
  background-image: url("../assets/统计分析.png");
}
.sidebar .level-one span.img.decision {
  background-image: url("../assets/决策报告.png");
}
.sidebar .level-one span.img.warning {
  background-image: url("../assets/预警设置.png");
}
.sidebar .level-one span.img.admin {
  background-image: url("../assets/管理.png");
}
.sidebar .level-one ul {
  margin-top: 11px;
}
.sidebar .level-one li {
  list-style: none;
  font-size: 14px;
  color: #999999 ;
  margin-bottom: 19px;
}
.sidebar .profile {
  margin-bottom: 14px;
  height: 42px;
}
.sidebar .active {
  color: #2B90E2 !important;
}
.sidebar .active:before {
  content: " ";
  position: absolute;
  background-color: #70BFFF ;
  left: -68.3%;
  width: 20px;
  height: 100%;
}
</style>