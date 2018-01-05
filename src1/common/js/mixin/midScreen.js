/**
 * 
 * @authors Rico Wang
 * @date    2017-10-24 14:54:43
 * 
 * 
 */
let midScreen =  {
    
        methods:{
             reCom(item){
                let name = item.name;
               item.name = ''; 
               setTimeout(function(){  item.name =  name;},0)
               return item
           },
            midBig:function(item){
                item.icon = false;  
                item.styleObject = {
                    position:'fixed',
                    top:'50%',
                    left:'50%',
                    height:'90%',
                    width:'60%',
                    zIndex:'99',
                    transform: 'scale(1) translate(-50%,-50%)',
                    border:'1200px solid rgba(0, 0, 0, .5)',
                    backgroundClip:' padding-box',
                    overflow: 'hidden',
                }
                this.reCom(item)
            },
            closeMid:function(item){
                item.icon = true;  
                item.styleObject = {
                }
               this.reCom(item)
            },
        },
        mounted () {
    
        }
    }
    export default midScreen

    /*
    <div class="rightScope">
            <div class="item" 
                v-for='item in rightComponents' 
                >>>>>
                @dblclick='midBig(item)'  
                v-bind:style="item.styleObject"  
                <<<<
                :class="item.id">
                <h1>{{item.title}}</h1>
                <span @click='cutover(item,rightComponents)' 
                   >>> >
                    v-if="item.icon
                    <<<<
                    ">
                    <img :src="cutoverImg"/>
                </span>
                 >>>>>
                <span class="close" @click='closeMid(item)' v-if="!item.icon"></span>
                <<<<<<
                <div class="border" v-if='item.show'>
                    <componet
                    :is='item.name' 
                    :key="item.id"  
                    :place='updateData.turist' 
                    :commentProp = 'comment' 
                    :placeAttractionsProps = 'updateData.turist' 
                    :inItemsProps = 'inItems' 
                    ></componet>
                </div>
            </div>
        </div>

        css
        .close {
            position: absolute;
            top: 1rem;
            right: 2rem;
            width: 40px !important;
            height: 40px !important;
            background-image: url("../images/back.png");
            background-size: 100% 100%;
            background-position: center;
            z-index: 133;
            cursor: pointer;
        }
    */