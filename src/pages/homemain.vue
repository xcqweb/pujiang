<template>
  <div id="mainhome">
    <transition name="slide-fade">
        <div class="header" v-show='headerStatus' v-on:mouseenter="headerEnter" v-on:mouseleave="headerLeave">
            <headerBody></headerBody>
        </div>
    </transition>
    <div class="headmock" v-on:mouseenter="headerEnter"></div>
    <router-view class='mockrouter' 
    :placeName = 'placeName' 
    :placeAttractions = 'placeAttractions' 
    ></router-view>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import headerBody from '@/pages/home/header.vue'
export default {
        data() {
            return {
                headerStatus:false,
                allComponents: [],
                componentName: '',
                topComponents:[
                    {name:'vtopOne',id:'one',title:'浦江客流人数分析'},
                    {name:'vprofies',id:'two',title:'景区概况'},
                    {name:'vtopThree',id:'three',title:''},
                    {name:'vcontentment',id:'four',title:'游客满意度'},
                ],
                bottomComponents:[
                    {name:'vtimeOn',id:'one',title:'客流实时监测'},
                    {name:'vchartMap',id:'two',title:'国内游客来源地'},
                    {name:'vrinking',id:'three',title:'游客来源排行榜'},
                    {name:'vpercenPie',id:'four',title:'营销推广'},
                    {name:'vvideo',id:'five',title:'视频监控'},
                ],
                text:'headerBody',
            }
        },
        components: {
                headerBody,
        },
        computed: { 
          ...mapGetters({
              placeName: 'version/name',
              placeAttractions:'version/placeAttractions',
              comment:'version/comment',
            }),
        },
        methods: {
            console(){
                console.log(this.components)
            },
            headerEnter(){
                this.headerStatus=true;
            },
            headerLeave(){
                this.headerStatus=false;
            },
            
        },
        mounted() {
        }
    }
</script>

<style lang="less" type="text/less" scoped >
/*h1标题颜色，当前颜色白*/
@hColor:#efeefd;
/*文本内容颜色*/
@textColor:#8687c0;
@headerBackColor:#133596;
@topBottomColor:#163387;
@borderColor:#49d9fe;
@borderLen: 18px;
.slide-fade-enter-active {
  transition: all 0.36s cubic-bezier(0,0,.12,1.06);
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(0,0,.12,1.06);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-100%);

}
#mainhome{
    width:100vw;
    height: 100vh;
    position: relative;
    background-color: #0d1f6d;
    .header{
        position:fixed;
        width: 100%;
        height: 120/1080*100%;
        background-color: rgba(19,53,150,0.1);
        z-index: 2500;
    }
    .headmock{
        width: 100%;
        height: 20px;
        visibility:unset;
        z-index:777;
    }
    .mockrouter{
        margin-top:0;
    }
}
</style>
