webpackJsonp([43],{1204:function(t,e,a){a(1420);var i=a(170)(a(1284),a(1542),"data-v-9f4035ce",null);t.exports=i.exports},1284:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(a(53),a(262));e.default={name:"a4",data:function(){return{value:90,people:6862}},computed:{nub:function(){return i.a.string_until.addPoint(this.people)}},methods:{},components:{},mounted:function(){var t=this,e=document.getElementById("c"),a=e.getContext("2d"),i=document.getElementById("r"),n=i.value,o=0,r=e.width=250,c=e.height=250,l=c/2,s=l-32,d=r,f=0;a.lineWidth=2;var u=function(){a.beginPath(),a.strokeStyle="#1080d0",a.arc(l,l,s+5,0,2*Math.PI),a.stroke(),a.beginPath(),a.arc(l,l,s,0,2*Math.PI),a.clip()},p=function(t){a.save();var e=[];a.beginPath();for(var i=0;i<0+d;i+=20/d){var n=-Math.sin(.015*(0+i)+t),r=c*(1-o/100);e.push([i,r+6*n]),a.lineTo(i,r+6*n)}a.lineTo(d,c),a.lineTo(0,c),a.lineTo(e[0][0],e[0][1]),a.fillStyle="#6dffeb",a.fill(),a.restore()};!function e(){if(a.clearRect(0,0,r,c),n=t.value-10,u(),o<=n){var i=1;o+=i}if(o>n){var i=1;o-=i}p(f),f+=.09,requestAnimationFrame(e)}()}}},1361:function(t,e,a){e=t.exports=a(1106)(),e.push([t.i,"div[data-v-9f4035ce]{width:100%;height:100%;position:relative}.face[data-v-9f4035ce]{width:9%;height:18%;display:block;position:absolute;top:48.2%;left:23%;background-image:url("+a(1449)+");background-size:100% 100%;z-index:4}#c[data-v-9f4035ce]{width:25%;height:53%;display:block;position:absolute;top:30%;left:15%}.value[data-v-9f4035ce]{top:50%;right:25%;font-size:1.8rem;color:#6dffeb}.nub[data-v-9f4035ce],.value[data-v-9f4035ce]{width:50%;height:53%;display:block;position:absolute}.nub[data-v-9f4035ce]{top:52%;right:1%;font-size:1.5rem;color:#fff}.nub font[data-v-9f4035ce]{font-size:1rem}#r[data-v-9f4035ce]{display:block;margin:0 auto;display:none}#r[data-v-9f4035ce]:before{color:#000;content:attr(min);padding-right:10px}#r[data-v-9f4035ce]:after{color:#000;content:attr(max);padding-left:10px}",""])},1420:function(t,e,a){var i=a(1361);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(1107)("0e40be4a",i,!0)},1449:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAlCAYAAADIgFBEAAACCElEQVRYhe3YvWtTURjH8U/i9a1QdbCoVK2DIIj4LziYqYsviLgJ/iv+AU6Cg5OL1kHs0qmT6FxMoRTJUAdBqQFJ1VZoicM9N71ckubkrenQHzyEJM/5Pd9zkvOcnJTuzb2W001UcCU8X8Miqvmkdw8fidX9t2+i/ZNc4h3MFryuhVjAfDRBe3X1L+eIi4l5zYacfhXln8FUIgxjcgYZW8lgZiKSY3IGGTtT7p7TUqlfklj/DOZrRPLaAIWi/DOYxYjkmJxBxi5mMFXp9uqkBYVe06Oi/PN9Zl76UdzWpen1qa7+SWHA5xCj0p7+pWazOcLavamXrT1yHcJ00iFMJx3CdFJS+Fk4Vh2olTlQMAnO4QEu4xi28Qs/8SMX69joo0YJZ0Kd87gQHs9iAjv4jrkET+yeoplOBbiitgJkPQD/xr8wgWxyxzGJ05gKcbQL8CQeJ7gUN0FwAhdDDFvTZfwZgXE/2ijjy7gpgmplfBo3RdDHMlawOmaQVaxkfeYVNscEshnqt5peHS/sbtH90naoW8/DkC7Vy30E2g71Wl+R4nGwhGdojBikEeos5V9sdzbV8NRw7krtVA3+teIbxXtTpgaeS/9XuYvpIUB8w3t7TLITTKYqlnEDt3AdR3oA2JG2jg/BZ89LWjcYwWA5xEQAuipdrSmclJ5ZW9Jtui5dhVoA+RtL/h/ks3dbreVZ/wAAAABJRU5ErkJggg=="},1542:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"face"}),t._v(" "),a("canvas",{attrs:{id:"c"}}),t._v(" "),a("input",{attrs:{type:"range",id:"r",min:"0",max:"100",step:"1"}}),t._v(" "),a("span",{staticClass:"value"},[t._v(t._s(t.value)+"%")]),t._v(" "),a("span",{staticClass:"nub"},[t._v(t._s(t.nub)),a("font",[t._v("万人")])],1)])},staticRenderFns:[]}}});