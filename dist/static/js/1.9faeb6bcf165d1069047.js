webpackJsonp([1],{1134:function(e,t,i){i(1162);var n=i(170)(i(1142),i(1172),"data-v-cd4880e6",null);e.exports=n.exports},1142:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(256),a=i.n(n),o=(i(53),i(425));t.default={name:"",data:function(){return{items:[{name:"总览",link:"/",status:"unchose"},{name:"产业监测平台",link:"/prodcut",status:"chose"},{name:"精准营销平台",link:"/precision",status:"chose"},{name:"应急指挥平台",link:"/souceShow",status:"chose"}],hash:""}},watch:{hash:function(e){this.changelink()}},computed:a()({},i.i(o.b)({title:"version/title"})),methods:{toggle:function(e,t){for(var i=0;i<this.items.length;i++)this.items[i].status="chose";e.status="unchose"},logout:function(){this.$router.push({path:"/login"})},changelink:function(){for(var e=0;e<this.items.length;e++)this.items[e].status="chose";switch(location.hash){case"#/":this.items[0].status="unchose";break;case"#/prodcut":this.items[1].status="unchose";break;case"#/precision":this.items[2].status="unchose";break;case"#/souceShow":this.items[3].status="unchose"}},keepStatus:function(){for(var e=0;e<this.items.length;e++)(this.hash=this.items[e].link)?this.items[e].status="unchose":this.items[index].status="chose"}},components:{},mounted:function(){var e=this;window.addEventListener("hashchange",function(t){e.hash=location.hash},!1),this.keepStatus()}}},1161:function(e,t,i){t=e.exports=i(1106)(),t.push([e.i,"a[data-v-cd4880e6]:active,a[data-v-cd4880e6]:hover,a[data-v-cd4880e6]:link,a[data-v-cd4880e6]:visited{text-decoration:none}.headertext[data-v-cd4880e6]{width:100%;height:100%;position:relative;box-shadow:0 2px 25px #000}.headertext p[data-v-cd4880e6]{position:absolute;top:30%;left:2%;font-size:1.8rem;color:#85e6ff}.headertext ul[data-v-cd4880e6]{position:absolute;top:20%;right:40px}.headertext ul li[data-v-cd4880e6]{float:left;margin-left:20px;cursor:pointer}.headertext ul li a[data-v-cd4880e6]{display:inline-block;width:100%;height:100%}.headertext ul li span[data-v-cd4880e6]{display:inline-block;width:36px;height:34px}.headertext ul li font[data-v-cd4880e6]{display:block;font-size:11px;margin-top:7px}.headertext ul li.chose a[data-v-cd4880e6]{color:#368df7!important}.headertext ul li.unchose a[data-v-cd4880e6]{color:#6dffeb!important}.headertext ul li:first-of-type .unchose[data-v-cd4880e6]{background-image:url("+i(1165)+");background-size:100% 100%}.headertext ul li:first-of-type .chose[data-v-cd4880e6]{background-image:url("+i(1166)+");background-size:100% 100%}.headertext ul li:nth-of-type(2) .unchose[data-v-cd4880e6]{background-image:url("+i(1163)+");background-size:100% 100%}.headertext ul li:nth-of-type(2) .chose[data-v-cd4880e6]{background-image:url("+i(1164)+");background-size:100% 100%}.headertext ul li:nth-of-type(3) .unchose[data-v-cd4880e6]{background-image:url("+i(1167)+");background-size:100% 100%}.headertext ul li:nth-of-type(3) .chose[data-v-cd4880e6]{background-image:url("+i(1168)+");background-size:100% 100%}.headertext ul li:nth-of-type(4) .unchose[data-v-cd4880e6]{background-image:url("+i(1169)+");background-size:100% 100%}.headertext ul li:nth-of-type(4) .chose[data-v-cd4880e6]{background-image:url("+i(1170)+");background-size:100% 100%}.headertext ul li:nth-of-type(5) span[data-v-cd4880e6]{background-image:url("+i(1171)+");background-size:100% 100%}.headertext ul li:nth-of-type(5) font[data-v-cd4880e6]{color:#ff719c!important}",""])},1162:function(e,t,i){var n=i(1161);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(1107)("61af9800",n,!0)},1163:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAYAAAA3WXuFAAACTElEQVRYhe3WXWjPURzH8dce0CxPbdJuqNGKjFJ2JWk3bswNo6i5cDM0uVEeokSWC8kSSlLydOUpog1x5SG12FKikEsrz1PTcPE7s58///9v///+thWf+nW+3/M9v3PefX/n/L6noOn7G6jEVMOrFy3KXxWjFm0oHGag3o26FhZizgiAgSLUjASQX/QfKElDDdSL83idbsBQAn1DPZZhUbpB+QRah0k4lwamAReCX5JukuI8wdzG0WA3oBR1sXgjTge7ApfSTZRNhrrxLE1sc8z+iuW4HvwNOBbsyWjF9MECdWE+qnAiJXYGD4M9I7Q9or2yCodD3wRRRZidaaGBAHWJysuT4B+IxXqwPdgluIm9we/G2RhMK+YmLZYE9AFL0BHr69CfkUN4GewmUYHeii2x8WNxETVJMElAX7AY94NfFYsdxzvsCX4ZtsXizdiFalyV4ZinKtMpW4l7wa7GnTDxY9GnKMDbEN8h+ixx7QxPVsqUobbQzsIt0T9mbeh7jyPBrsT6bBfOBeik6P9xA+WhbzXGpIxrxqihAKoXZaEi1leGpTG/BivyBZMElE6NoS3A/jyyILfSUYvLGI0F+cXJvZbVJQ/JTf/8BS1RIxLo6XBDxPSoGNcwD9OyeLEUpzLEr4jqXTZ63qK8s++UtYdnoBqXNLmowieq5WcRiJTrHvooysKf9EmGK2qSBnOnrhNlqiil/7PoGvtXgMZjt9+vFrmqHQcHA7RPf+3Kh9bgAe6mG5C0h2bmEaZPUzIFkzK0CRPzxwI6MwV/AKCrYNSLuc7bAAAAAElFTkSuQmCC"},1164:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAYAAAA3WXuFAAACS0lEQVRYhe3WX2jOURzH8ddmE8ufNskFRYo2d4tc4HbkgqK4UCiJEiuSf09xgXIpuZL8TbMUc+NPinLBzZBatpQIubPyr6k1uTjnab/Nnue359nPtuJTv873e77f3znv5/uc8zunYvGJzzAXs42t3rfn6j5WYQWuo3KMgfqWnOxeV4mGcQADE9A4HkAG6D9QmkYbqA938KlQQtXosfiFHbgrfGaeDpWUZYUOoR63C8A0RxiYVGiQrCr0BFei3YwaNCXiB3Ez2rNwsdBApVSoB28LxI4n7F5sx6PoH8G1aM9AC+aNFKgbq7EcrYNit/Ay2vmJ8lC7cCn2TYvv1hebaDhA3diA19E/l4j14lS0J+EGDke/B20JmBYsSpssDegbtqAz0depvyIX8CHa24QDeg92J/Inx7zGNJg0oJ/YhOfRn5+IteArTke/VljMeR3BfuGcvIplw4Gh+C7biWfRbhB2yXqhQm2owJcY3yv8LUnti09JKlahx7FdKKyN6ULFCNW5HO252FrqxOUAnRHWTyvqYt96TByUdxjVowG0RthBsxJ9tViV8BuxNiuYNKBC2hzbChzLkAXlHR0rhPVTjaXZ4pR/ljWlp5Snf/6ClqpxCfRmrCESelWFh1iJOSW8WIOzReIPhPOuFL1rz9V15XdZR3yGqylpg+PecAZqz9UN8MtdQ9+FKgylH7hf5rgjulNvFSo1+Ef1CBe3vwI0FQdim4U6cH4kQDnhxM9KG/FC/z3rD6WtoQUZwuQ1s1gwrUJHhYtZluoqFvwN6JBj2PIpKgoAAAAASUVORK5CYII="},1165:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAC9klEQVRYhc3YT2gcZRjH8c+OoVZQanUFq0kRPKlQ/x2EammqoIIWhKq3giCCQjcXe6sHDyoUL3YwXtpLW1C01D+HeihKukIgCCJoU08iTYIIWVBsewjipofnnXazJpvZZNr1B8PM7DvzPF/e95nnfZ6tNRbn9amteBbb8UC6vymNXcJ5/IJJfI3fexnL1ZfcD5WEyLAHDezo8dwtuBOP4RUs4jvk+BLtMo5W01P4CZ+tArOcatiJk/ghXa8L6AYcFEuzXj2EMziEDf0CbcLD+Bcv4c8KgAqN4XA/QLejiVMiHn7D3gqBfsWBskAb8AUexBZ8IpbtFN6pCGYUcxjGsTGtJcvXDXTQ0sAdxXvp+m18WyHMGTHz73c+VOvIQzsxIb6Mbr2Ar3AHfsTdFcDc2zE+mqs3uTpDNXywAgwcTQbm8SL+qRAGDo1pZZ1Ae8RnuZI24XORkaewv0IYImaf7wR6o4TxbfgoXef4tCKYQq8TMTSM2RJAhV7DEdyM73FfBTDENrMlw9N9wMCHeAQXxVJfqgCGiN9dGZ7oE+hGsTdtFrv6qxXAFHp0CPf3CQT34Dh2i1jajudWgfkrjc1ipuM8V5xz9YVaY3F+Tv95pdBbeFdk+NvwR/p9LzYmp+eT0wvLGeiuh2qNxfm/RR2zFrXxDL4p+XwmtqQRUdiNdB2byxZovRx8LIJ8TmTy4eSsOHc6vkvvovDCkPha1jpDEsTPYok2rsMOXMz0l4NW0q0VwMBshnMVGKpK5zLRHfxfNJnh9KApOnQ6E0mpOWgSNHP1mWK3Hx8oSmicq+XHSUwPjsV0YrgC1BZd6aDUyNXbLC3yJwxm6cZz9YniprvreFOUqNdLU8nnFXUDLYiS4ux1gDmL3bn6Qi8gaGGXaztTU8lHq3tgpd6+JYqtaxFT48n2f2B6ARHLtw9PqiYlTCdb+5LtZVXm/6EJ0QK9bG0ZvZne3ZZs9VTZAq2NE+nYKjqVx0U9PiJaIqK2mhUVxKTYJ2fKs3MZzDK4sFSrI1AAAAAASUVORK5CYII="},1166:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAC/0lEQVRYhc3YS2hcVRzH8c9cE1uoRB3BWoPgRsUnYlIkRRCJ6KJLK+KmBesDBTfSTZkgaBMfoOADurKmILirC6XiQpGgJUIn7oQ2bkT6UGEGlKaLiKOL/xmbXKd3Hrnt+IPDvWfuuf//957X/3+mMjHb0KfG8RAmcVuqb07PzuMUfsRxfIVfi4zVa9V19ZEeITLsxFO4v6DdVbge9+EJ/I3vcAhfoNXNUS9AD+CA6I1+VcFUKj/gZSwWvZB1MXgFZgaEyetOHBEfN9ov0Bjuwl94Fr+XANTWXrzVD9C1+AQfifnwM14sEegnvNEr0Cg+xB3YioNi2L7EOyXBPIaz2Ib3Juea64YvDzRj/Sragf3p/m18WyLMEewSE70j0BSe7mDoBTwq5tPz+KUkmJvTs72Tc82pPFAFr6ZrJ72bDDTwDP4sCaatA5NzzWwt0E6xLC+mMbG5bcZSgi8LhpizD68F2t2D8dvxero/hE9LgmlrN1QmZhvbxFf3qn34GFvwOW4pAYYIM/dmeLAPGHgNd2NFLILzJcAQ83dHpjhYdtKV+ABXi6j+Ugkwbd0zonOXd9NNeB97xFzajukuMH/gTCqn11zPtuv1WnW1MjHb+B43DAAFb4otYVSEnN/S77uwKTk9lZye62Qgnw9VJmYbyyKPGUQtPIlvemyfifg4nsqNuXJNrwlakYODeET0wnViuNrO8o63Ks7Bzo2I1TJoD0kQX4sh2rQBO7CSiXHeqMZKgIEzGZZLMFSWljNxOvi/6HiGhWFTrNFCJjalwpPAZdJivVY93Y72h4dJknSYC+nHUZwcGkr4PsoFoJbIp4elmXqt2mJ9Tn0M80OAma/Xqsfalfyp4xX9JWsb1VLy+a/yQKsipThxGWBOYE+9Vl0tAoKmSB8uZU8tJR/N/IOLne2bItm6FHNqPtn+D0wREDF8NTyunC3hZLJVS7Y7qtvfMcTqm8ZzBtvRF9O708lWoXpN0Fr4LJVxcVLZjltF4rUltVsR6cyyCNoLIjT1rH8A4gS6xxU8RN4AAAAASUVORK5CYII="},1167:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFHUlEQVRYha3YbYhe1REH8F+ebmNkSdVlBbUrSQyGmFDTUsRiKlQFJb6gRkNK61vBbSGl/WCFYt8iWkpQkdoPYl0EX0g0JsbSoDGUilaU1oo2BLdpwJawaVxtJLZpGro2ST/M3N3z3N777Eb6h8N5npk5M3PPmTNnzpl169/GHCeWYgWWYzHORH/yDmEMu/AqtuHtXspGBoe6/vfN0InZuAVrsKyHXH86uRjX4F7swIN4FBPTGerMwJmV2I2fT+NMG5bl2N2pqyd6zdBcjGB1C38nfp+GPkzayViE8/CZmvw8PIONGMbB43FoCNuxpEZ/Fz/DE/hry9gKn8aN+DZOL+ir09nLsLc+qGnJhvBazZnDuAPzsQ7/wg14CC/ijGwvJu2GlFmXY+5IHRWWpI3uiMas2i6bi9/WnNmF68VuWYAf4is4oZBZkP1fCtq/sQF3J30pNouArzCKL4wMDk0uX32GRmrOvC629yi+k/3Xas604YSUHcXt2S9PnRWWpM1JlA6t1B3AfxT55p8iEO/DnBk4Usccsf03pq4VqbvC6uH9eyd3X+XQbNxfCB0Wy3QAT2LVx3CkjlWp60DqLmPq/uH9e2eXDt0itmWFO8UUf8/0ueOASHgT+bsXVuL7qfvOgj4vfZh0aE3BHMNPRfCVg+rYggswgH3ZBpK2pce4tTgnbZQ7ak3l0FLdGfgB8bV3a85TH+GruA5v4FJ8KtulSbsuZT5qGN+Hu9LGAwV92fD+vUs7IsgqHMN6kdTaluomsZ0vFll6u5iZgfy9O3kbUrYJK9PG+rRZYUVHbMUKb2I8BzQlzU14CpfgBZH06pifvEtSdlODTCdtjKfNCss7uhNVlSMubFAC9+CTeCT7NpQy97TIVDbKvLS4T9QzFd7Jfp0oGUocE/HRL3dEgfHsL6rRZ+eYL2FWjfePmk04s89UcQUfZF9OYx2H8FILr43+cg99HxS/++txUn3FuJiRsv06eWsbePOz1elrc8yvGnjvN3nXEV9cYSD7DxtkF2a/s0lRCyrZsxt41cycUtAOdXQnp2pgUx08TyS0baZiphfGU/Yc3adAhT9lf1ZBG+uI8qLCedm/0mLku+IM+jqO9nDmaMoczjFNqGycX9B2dcTtoMLncBqe1Z2wKtyMK7BVFPHvNci8l7ytKXtzi0PP4lR8vqC92hHTWmGWyK578FyLok24Kg0uEKf4gWyrkrYVl2tOivA8/iwKvXJjbeuIeNlREL8l8smpLcpOxC/xuIi5zfh7ts0i+B/LDzqxYfxRceL3iXq7wo6RwaG3K+/KJDgkauNybZtwY37IPrHMp4mifaf2M4zI3H8Qp3sZ0A8yNV2PimWq45juQqoJp4uqcI44MHthO34gZvHHBX1P+jDp0ARua1Bwu1i6F6YxNBNsFwdqv1jauQXvtpHBoYnSIaKo2lhTcq1Y6ytFfXTkYzhyRMzGFanrF/hswd84Mjg0WdDVj45hUV5W+CJ+I46FH6WiLTN07Ii4qS4TV6f54qwrD+DRtDmJekV4UNwoXzNVBZyLt0R9/ZCoBs/A1enwIvwnZd8QBdorYifuSxvfxE9EVVlhDJeVdzL+96JYoe0q/Y6ohdebvqAfwJdFbC6s8UblVbr+HNPmEL0fG47gd6K42i1yEJxk6rHhfM01eddjw/G8Dx0UX/i0uLOVB+QnxO3igh7j69gjZqvXjWRG70NbxFd/Q3dGnyl25NhF0znDzF/QJvBwtv/rk14d/wUkt0ali5ti4gAAAABJRU5ErkJggg=="},1168:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFEklEQVRYha3Yf6jX5RUH8JffXXVcXLUbzBlat2Y63ViLTP9ICPrBSlKKpIhoGNpoBO5HvwaXhcRcPyb9IiyWhWNFmOWYNvttBf0guhBuzMhZtCG3NDJ0zaSb2h/nfO79fD99Pt/7TfaGh+fzPec855zv8zznPOd5xp32u499TczEWTgd03EcepO3H0PYgTexBe90UjY40Nf2u6dLJ8bjUizB7A5yvenkdJyH32Ib1mIdhscy1OrCmQV4FbeP4UwTZufYV1NXR3SaoUlYhUUN/LexFe9iX9KOwvdwCmZV5KdiDTbiOnz6dRyagkcxo0LfhQfxOD5sGFvgu1iMpZhcoi/C93EZPqgOqluyKdhUceYAfo+5uBef4WLchvVpcHJ+35a8z1J2bo49UNI3I21MqRofV4mySXiy4swOXCWi5Xj8ChdhQklmXvZvlGif4y+4E/8R0fmA2PAFtuOCwYG+keWrztCqijNviSnejqvxsoi2CcbGhJR9GT9PHYtSZ4EZaXMEZYcWaN/A/8Ll+B/ux02Y2IUjVUwU4X9/6ro8dRdYNGflnpHoKxwajxUloQNimfbiPiw8AkeqWJi69qbu8p5aMWflnvFlhy4VYVlglZji5cbOHXvFfvk8vzthAX6RustLNTV9GHFoSYk5ZHTzXdtB+Wbxr2eJdLArvxcmrwm/xslpY6hEX1I4NFN7Bl4jUvwN6vPUMK7BMvwdZ+Jb2c5M2rKUqTsqenB98taU6LPnrNwzsyUOygKHsUEktaalWi7CeT5eEQn0mGyPJm1+yixv0LEgbWxImwXOaolTu8A/sDsH1CXNTfhrGnwE02pkpiVvfspuqpFppY3dabPA6S3tiarIEfPUY7WIyDuyb0JZZnWDTGGjnJem94h6psC/s78Xf6ooOCwO0178ssLbnf3iGse2iqNkXIX334pNOK7HaHEFn2RfnsYq9uO1Bl4T/fUO+j4pffc21UNbRUiW22PJu7aGNy1blV6kjXU1vNo/3RL/uMC3s99XI9uf/dsNf6IOheyJNbxiZo4u0fa3tCenYmBdHTxVJLQtRvdMJ+xO2ZO1nwIF3s3+hBJtqCXKiwI/zr5cRpRxjTiDrsehDs4cSpkDOaYOhY1TS7QdLXE7KPBDfAdPaU9YBS7BOXgOV+KjGpmPkvdcyl7S4NBTOBY/KtHebIlpLTBOhO5OPN+g6I84Nw3Ow8/Eobo3v+cl7+yUrcMLItwv0p6At7TEftlWIi7FGel9Hb4pctQ9Ys89KYJgX3734278OWWrOIRbxZm2tETfNjjQ905xeK4VVxWizl3f4EwZi7Ptwk+S9rQ4ozphNf6ZzpQ39FpGp2udWKYqDmsvpOowWVSFE7tw5iVxCejHjSX6zvRhxKFh7RVjgZvFRn9xDEPd4CUxK72iFppU4q0YHOgbLjtEFFUbK0rOF2v9U3F7OHgEjhzEXbgidT2EH5T4GwcH+kYKuurRcZ0oLwvMFXXNNPxBRNfmLh07iL+J0L89dTwhAqbA9rQ5gmpF+Km4UW4yWgXMwrO4RUTOMrFvzkuHT8IXKbsV74mk94zY8D0iL/1GVJUFhnBZ+U7GVy+KBZqu0u+L9d9g7IL+GFwoclN/hbddXqW7fY75ABf46mNDP1aKzf5Wtve0PzacJI6gUxv0H9FjgxxwdSpYof2A/AbmZOsWO1NPpxtJV+9Dm8VGvEF7Ru8W23LsGWM5Q/cvaMN4ONv/9Umvii8B+F1C5qNnvacAAAAASUVORK5CYII="},1169:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAmCAYAAACh1knUAAADNUlEQVRYhb3Y34tUZRzH8dfMzpbuRSu6pNHCCl2UCeGFRJAQrRgF6VIZrNJFsC4W9g8UQQSBF3VZtLQEQWQI/TCyGwNLKYq6ydq6CILIUmPL0qQfWrtdfJ9xjtvszHPOuH3gMM+Z83w/z3s4z/l+v2dqu2aPy9St2IDrMYJrMYgBXMBvmMV3+BozOIQ/O5lODw2DRibEA3g5l7ig/RjPmVjPNPyxAgT8kDsxF+RdPFkS4kM8erlBJJC3M+eewHaczzXP3SMwL/bKm1jVZd5DOFXCuxQInMXmkjFLAgIr0tFJv6ZjSUBuxOPi3vd3mXsBr+EpfJVjnrNZBzElEtSODAhpzo4UM5U8egK5GcewG7UMgIWqpdhjyasSyBiOiHTeq0aS11hZkPvxBpZdBoimliXP7bkgm/DKItd6VR370hodQdaI3Z6zIauqP62xphPIC1jdxegR0QrMtLn2nmgPxsUjvJhWp7XagoxhaxeIT/Gc6DdGF8B8gntEndkvCmUnbVXYvPXC594ugURjNJrGswWYGdyNM+naNtyR4bd38qfv60WQbViXEdiPg21g7kxjuEvsgZysvS6tfRFkMiOoqeVtYJoN0CheV26zT0Jt1+zxwWSWE/w7PsAfaTyRxrASz4oedrl4RAcyPM/j6kYKyP0Fm/HxItdOY2fh/BZ8lOF5BTbVsTETghI9KE6WmLuxoVwtOSTSdDNHvIRv03gtHkzjftxXwnekIe5trm7AY4Xz9xeAPFHCq6iVZevJHvSJ8l5LIEWo5vd9IgNnq65cS7cPcxnz5kThzNUvDZGSc/U8XsTf6fwzrR+yQmReIplNlPA90cDnJQLGXfoKebvW7dkgil4VfVEXndN8RYOBRcZlNI8jdfG8H61ocq/WBi3zuBZ1dHpo+GSzMD2D2yqYTIgMCusrgjxNq+gdxIGKRut7gDgwPTT8ThGEyIrtuq6l0oxWJr4E5Iy4PYf/B4jDaa1mI/WfnvU0tuBhJd/mM3UqeW9Ja11UuxQ/J14T14qy/hbO9bD4ueSxM3lOaZOdO7Vzf+HVdPSJDXkTrsM14j+SK3FVmn82xfwsUsI3Ill+iX+60f4LoFej8M1JHfsAAAAASUVORK5CYII="},1170:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAmCAYAAACh1knUAAADNklEQVRYhb3YX2gcVRQG8N9ud2mCEqvQIhJB0FrQSqniilAQhDbgH1r8U6pFX4pQRIrEByW+C0FSBBUFFcEHKaJFK0qhAVFqTRRRUDT0QQQRTUWMtZLaYOrDuZsdls3unU3jB8Oe2Tnnu9/MnHvuuVNpTMzLxM3YjKsxjMsxhEEs4Ax+x8/4ATP4GP90I50eHQC1TBH34vlcxQUcwf4cx2om4W99iIBfch1zhXyCiZIivsAzF1oIHMSxTN9ZPCJyJwu5OQLn8Rhew2U9/J7EqRLcpYTAX9hdMmZVhBBT9pIePn/i9GoJuRaP407Ue/gu4AM8h5M55DnJOoRxfIRdGSIkn10pZjxxrEjIVkziIVQyBLSjkmInE1dfQkZwWJTzlWI4cY2UFXK3mKZrL4CIJtYmzrtyhTTwwjLXVooqXkxjdBWyAa/IS8h+UU9jbOgm5Fms70H0NLaJZb4dn4qk3K97eV+fxuooZATbe4j4Gq+LfuP+NjFfYZ9YZ46IhbIbtiskb7XwO9YjEK4XT4NogppiZvCwVjXdgdsy+MZuOXi2WhSyAxszAut4o4OYB5MNt4scyKnaG9PYS0L2ZgQ1MdBBzK/J3oZXlUv2vVBpTMwP4ZvM4Hl8jrPJHk02rBON0GAS20h2LyzghloKyL2D3fhymWtzeLRwfhPez+Cso1HFlkwRlOhBxezJxZaacmvJIXyoVSPewk/JvlKraaqLdiEXwzXxbnNxDQ4Uzj9rE/JECa4i1pVdT8bEE7wiHScK104U/h8WFTgbVdHW5eIwFjP8FvFOCd65mnJJNY438W86/1armg6JLSmsEUUuF7M1fFciYGc6mrhP6/VsxtsluIr4voopsRfpB4PL2GVwHlNV8Wqm+iS5Q/SlFeWmaxFT06MDs82F6WXc2gfJA7gx2Zv6FPISrUXvGI72SbRpBSKOTo8OTBaFEJunTl3XamEmjaldyGncg+P/g4jjaaylbWl7ZZ3DHjyl5G4+E6cS95401hI6dVGLovE5JGbFTtHwXNTn4H+LJ/CeWDDPdXLq1s6dw7vpWCM24dfhKrEVuFRsmi5O/mfEh7s/xJ3/KIrlSa1KvCz+A+2QpEUFnx3FAAAAAElFTkSuQmCC"},1171:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAADUElEQVRYhb3Ye6hUVRTH8c893VtaeukFlSXeHoSEFkERpNCLqD96kw+ISBiKkgicpCTor+wSFBNUQq8Bs3/KoCf+oQSlRH8kBWUPMExCi7K6ZZmZlvbHnrFz15y5d86dO/5gYNbae+3zPefsvc9au+/Qshd1qem4HPuxEftKRdcqo8z+LmHOxOs4pWF/gxvxy0QHzLoEuj8HA2fhnm4G7Bbo3ALf2d0MOBbQVKzEeqxo07fTG5qCYWzAg8aYKu0aTsIaXNiw5+IrvNUhQNQdWNL4Pwfn407sjR2L7nAQr+ZgmpoxQRg4PdhXYDUGxgPK8BzOC/4RvNMF0Fr8FXzz8cR4QHfjsuD7FtdjZxdAn+MW6cbyWqBav7kd0Ew8EAJ+xEJs7wKmqU8bY/0R/CtV64NFQCtwdM4+iLuwYxJgmvoS1eA7AfdFoNNwQ+j4AjZPIkxT67Su1ttV68fmgRbjqFyHPXiyBzBNDePfnD1dmqeHga4JAWvxew+BdkibZF7XNoEGpY0vr7d7CNNUfG3zVOt9GWajL9ewDx8fAaAPgj0NZ2SYFRq2Gv1+e6UR/Bx8QxmOD85dJQb9qcD3a4n4eK3BTOv3pMzTqeNQzj6Al0rEx+xyar/Wb8yUEgO+i0W4tQGzBltKxE8L9p5+rY9tqMSApMkZJ2gnKpq/uzJsC85ZUj7Ua83GMcG3LcPXWj94Vx4BoKsijFpldyZN4k2hcWGPYTJp7uX1frMB3gyN83BRD4GukyqUvN7IA23A96HDo7qv24p0HB4Ovi1qlU/yQAewKnSaK+VIk63HtebYteaffIL2slRZ5LXU/9XCZOgh3BR8G9Uq64uA/pEyt/0hYFjK8vpMXAONce4N/t1YnnfEJP8LqZCLWi6VRkMTgJkjpTNLgv8glqpVvhsLSOPCwwX++dLpRk1rzRaV4VI8K1W+FxTALMN7MbDdKnpGSmMfMTq1HZDS3cX4Qcq5t0unHRlOxjm4GCe2Gftv6dWtK2oca1mvlqqEVVpXBZyqkQeX0FbpdCQunsMa77DgI6lwfEpBHV5Cv0nT4OqxYOhs49uLx/A8bsMC6bV0os/wGl7Bn50ElNmJR/B04zcTl0jnQzOk3ZdUqeyUPtgfKpd9gv8A4aqh+mCKKcAAAAAASUVORK5CYII="},1172:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"headertext"},[i("p",[e._v(e._s(e.title))]),e._v(" "),i("ul",[e._l(e.items,function(t,n){return i("li",{class:t.status,on:{click:function(i){e.toggle(t,n)}}},[i("router-link",{attrs:{to:{path:t.link}}},[i("span",{class:t.status}),e._v(" "),i("font",[e._v(e._s(t.name))])],1)],1)}),e._v(" "),i("li",{on:{click:e.logout}},[i("span"),e._v(" "),i("font",[e._v("退出登录")])],1)],2)])},staticRenderFns:[]}},1212:function(module,__webpack_exports__,__webpack_require__){"use strict";for(var headerBody=function(e){new Promise(function(e){e()}).then(function(){e(__webpack_require__(1134))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},topBody=function(e){__webpack_require__.e(53).then(function(){e(__webpack_require__(1203))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},bottomBody=function(e){__webpack_require__.e(56).then(function(){e(__webpack_require__(1183))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},A1=function(e){__webpack_require__.e(19).then(function(){e(__webpack_require__(1209))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},A2=function(e){__webpack_require__.e(17).then(function(){e(__webpack_require__(1206))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},A3=function(e){__webpack_require__.e(51).then(function(){e(__webpack_require__(1210))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},A4=function(e){__webpack_require__.e(43).then(function(){e(__webpack_require__(1204))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},A5=function(e){__webpack_require__.e(18).then(function(){e(__webpack_require__(1208))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},A6=function(e){__webpack_require__.e(22).then(function(){e(__webpack_require__(1141))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},A7=function(e){__webpack_require__.e(52).then(function(){e(__webpack_require__(1207))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},A8=function(e){__webpack_require__.e(42).then(function(){e(__webpack_require__(1205))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},A9=function(e){__webpack_require__.e(34).then(function(){e(__webpack_require__(1211))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},B1=function(e){__webpack_require__.e(33).then(function(){e(__webpack_require__(1174))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},B2=function(e){__webpack_require__.e(20).then(function(){e(__webpack_require__(1177))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},B4=function(e){__webpack_require__.e(50).then(function(){e(__webpack_require__(1173))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},B5=function(e){__webpack_require__.e(28).then(function(){e(__webpack_require__(1178))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},B6=function(e){__webpack_require__.e(49).then(function(){e(__webpack_require__(1179))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},B7=function(e){__webpack_require__.e(23).then(function(){e(__webpack_require__(1180))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},B8=function(e){__webpack_require__.e(27).then(function(){e(__webpack_require__(1181))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},B9=function(e){__webpack_require__.e(41).then(function(){e(__webpack_require__(1182))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},B10=function(e){__webpack_require__.e(32).then(function(){e(__webpack_require__(1175))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},B16=function(e){__webpack_require__.e(21).then(function(){e(__webpack_require__(1176))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},C1=function(e){__webpack_require__.e(31).then(function(){e(__webpack_require__(1184))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},C2=function(e){__webpack_require__.e(39).then(function(){e(__webpack_require__(1187))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},C3=function(e){__webpack_require__.e(24).then(function(){e(__webpack_require__(1188))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},C4=function(e){__webpack_require__.e(30).then(function(){e(__webpack_require__(1189))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},C5=function(e){__webpack_require__.e(55).then(function(){e(__webpack_require__(1190))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},C6=function(e){__webpack_require__.e(38).then(function(){e(__webpack_require__(1191))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},C7=function(e){__webpack_require__.e(37).then(function(){e(__webpack_require__(1192))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},C8=function(e){__webpack_require__.e(36).then(function(){e(__webpack_require__(1193))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},C9=function(e){__webpack_require__.e(47).then(function(){e(__webpack_require__(1194))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},C10=function(e){__webpack_require__.e(48).then(function(){e(__webpack_require__(1185))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},C15=function(e){__webpack_require__.e(40).then(function(){e(__webpack_require__(1186))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},D1=function(e){__webpack_require__.e(46).then(function(){e(__webpack_require__(1195))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},D2=function(e){__webpack_require__.e(35).then(function(){e(__webpack_require__(1196))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},D3=function(e){__webpack_require__.e(29).then(function(){e(__webpack_require__(1197))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},D4=function(e){__webpack_require__.e(25).then(function(){e(__webpack_require__(1198))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},D5=function(e){__webpack_require__.e(45).then(function(){e(__webpack_require__(1199))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},D6=function(e){__webpack_require__.e(54).then(function(){e(__webpack_require__(1200))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},D7=function(e){__webpack_require__.e(44).then(function(){e(__webpack_require__(1201))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},D8=function(e){__webpack_require__.e(26).then(function(){e(__webpack_require__(1202))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)},status=["A1","A2","A3","A4","A5","A6","A7","A8","A9","B1","B2","B4","B5","B6","B7","B8","B9","B10","B16","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C15","D1","D2","D3","D4","D5","D6","D7","D8"],conponets={},i=0;i<status.length;i++){var index=status[i];conponets[index]=eval(index)}__webpack_exports__.a=conponets},1216:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAByElEQVQ4jX3UT4jNURTA8c973ihKKA3CQiZvJlmpYS1TpFF2asjChigLG8rCQiE1mg0SCyQLK03MrNgovYUtEmaUfwuZmY3Jn+dncc/P+82v996p07333HO/99x7z7mV7LV20ocRDGJd2D7hOe5h6r9nPQOVEmgVLuEwFrXdgj+4gbOYaQfagglsiPFXPMQbVDCAvVgT8++wWz17WwT14gXWYx5ncA2/StEsxglcRE/Atqlnc9VwuFyA7MJYG4iwjWIPfmMTzucR9eNlhH8M19sAdmIuos7lNC4EsK+KQwH5gJvRX1HSHjzFUAE0hm8xN1KVnhjGpRdZjpmSTmIZHuFA+M/HGHbUtPLkVbQ/Y7dOsh3P8LGwZm2t4JBFuxqzXUACUlyjFsYB1MM2LV3saBfQuWj7o/1SjTBhH/J0uCJldxObsbKksATD0W9U8SBC3IgjhV3vYH/AZ0sKJ6WSauJ+ntl3cRA/pJxpdDmW8JmUnv6qenY8P8opfMZSPMFR6f7KUotIJgIyJRXvgqLdisdSqZASdFwq2qr0GMOF+WkMlYs2l16tb6TS4VhN3JIK+3un/yiXunRng9K38ldKkwZu433LM4H+AaRpf0a5qLohAAAAAElFTkSuQmCC"},1232:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(53);t.default={name:"",data:function(){return{}},computed:{},methods:{},components:{}}},1234:function(e,t,i){t=e.exports=i(1106)(),t.push([e.i,".overlay[data-v-5cccabb8]{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.5);z-index:2200}.overlay .cutover[data-v-5cccabb8]{position:absolute;top:20%;left:20%;height:50%;width:60%;z-index:1400;background-color:#658df4}",""])},1237:function(e,t,i){var n=i(1234);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(1107)("472473d8",n,!0)},1240:function(e,t,i){i(1237);var n=i(170)(i(1232),i(1241),"data-v-5cccabb8",null);e.exports=n.exports},1241:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"overlay"},[i("div",{staticClass:"cutover"},[i("ul",[i("li")])])])}]}},1279:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=i(173),o=i.n(a),_=i(256),r=i.n(_),c=(i(53),i(425),i(250)),u=(i.n(c),i(1240)),p=i.n(u),s=i(1212),l=i(1134),d=i.n(l),h=i(255);t.default={props:["placeName"],data:function(){return{cutoverImg:i(1216),headerStatus:!1,allComponents:[],componentName:"",moudle:[{name:"B1",title:"富民指数分析"},{name:"B2",title:"客流预警"},{name:"B3",title:"旅游营销分析"},{name:"B4",title:"路况监控"},{name:"B5",title:"拥堵指数"},{name:"B6",title:"实时天气"},{name:"B7",title:"省内游客来源地"},{name:"B8",title:"村庄收益分析"},{name:"B9",title:"旅游营业分析"},{name:"B10",title:"交通预警"},{name:"C1",title:"出行方式分析"},{name:"C2",title:"年龄分析"},{name:"C3",title:"浦江客流热地图"},{name:"C4",title:"游客男女比例"},{name:"C5",title:"游客详细客源地分布"},{name:"C6",title:"游客关注点"},{name:"C7",title:"景区游客排行"},{name:"C8",title:"游客来源排行"},{name:"C9",title:"游客属性分析"},{name:"C10",title:"粉丝关注渠道分析"},{name:"C15",title:"餐饮排行"},{name:"D1",styleDlass:"游客餐饮消费分析"},{name:"D2",styleDlass:"游客餐饮消费分析"},{name:"D3",styleDlass:""},{name:"D4",title:"景区收益分析"},{name:"D5",styleDlass:"厕所使用率"},{name:"D6",styleDlass:"景区当前客流"},{name:"D7",styleDlass:"游客支付方式"},{name:"D8",styleDlass:"拥堵指数"},{name:"B11",title:"1"},{name:"B12",title:"2"},{name:"B13",title:"3"},{name:"B14",title:"4"},{name:"B15",title:"5"},{name:"C10",title:"10"},{name:"C11",title:"1"},{name:"C12",title:"2"},{name:"C13",title:"3"},{name:"C14",title:"4"},{name:"C15",title:"5"},{name:"C16",title:"6"},{name:"C17",title:"7"},{name:"C18",title:"8"},{name:"D9",styleDlass:"9"},{name:"D10",styleDlass:"10"},{name:"D11",styleDlass:"1"},{name:"D12",styleDlass:"2"},{name:"D13",styleDlass:"3"},{name:"D14",styleDlass:"4"},{name:"D15",styleDlass:"5"},{name:"D16",styleDlass:"6"},{name:"D17",styleDlass:"7"},{name:"D18",styleDlass:"8"}],current:[{name:"A1",title:this.placeName+"客流人数分析"},{name:"A2",title:"景区概况"},{name:"A3",title:""},{name:"A4",title:"游客满意度"},{name:"A5",title:"客流实时监测"},{name:"A6",title:"国内游客来源地"},{name:"B7",title:"游客来源排行榜"},{name:"A8",title:"营销推广"},{name:"A9",title:"视频监控"},{name:"",title:"视频监控"},{name:"",title:"视频监控"}],topComponents:[{name:"A1",id:"one",index:1,time:100,show:!1,title:this.placeName+"客流人数分析"},{name:"A2",id:"two",index:2,time:300,show:!1,title:"景区概况"},{name:"A3",id:"three",index:3,time:600,show:!1,title:""},{name:"A4",id:"four",index:4,time:900,show:!1,title:"游客满意度"}],bottomComponents:[{name:"A5",id:"one",index:1,time:1200,show:!1,title:"客流实时监测"},{name:"A6",id:"two",index:2,time:1500,show:!1,title:"国内游客来源地"},{name:"A7",id:"three",index:3,time:1800,show:!1,title:"游客来源排行榜"},{name:"A8",id:"four",index:4,time:2100,show:!1,title:"营销推广"},{name:"A9",id:"five",index:5,time:2400,show:!1,title:"视频监控"}],text:"headerBody",cutoverStatus:null}},components:r()({vmask:p.a,headerBody:d.a},s.a),methods:(n={console:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){console.log(this.components)}),headerEnter:function(){this.headerStatus=!0},headerLeave:function(){this.headerStatus=!1},add:function(){this.allComponents.push(this.componentName),this.componentName=""}},o()(n,"add",function(e,t){this.items.push({component:e,text:t})}),o()(n,"render",function(e){return e("div",this.allComponents.map(function(t){return e(t)}))}),o()(n,"cutover",function(e,t){var i=this;this.cutoverStatus=t,h.a.$on("cutoverMoudle",function(t){for(var n=i,a=t.numb.index-1,o=0,_=n.topComponents.length;o<_;o++)!function(){n.topComponents[o].name===t.item.name&&(n.topComponents[o].name=e.name,n.topComponents[o].title=e.title)}();for(var o=0,_=n.bottomComponents.length;o<_;o++)!function(){n.bottomComponents[o].name===t.item.name&&(n.bottomComponents[o].name=e.name,n.bottomComponents[o].title=e.title)}();i.cutoverStatus[a].name=t.item.name,i.cutoverStatus[a].title=t.item.title,h.a.$off("cutoverMoudle")}),$toast.open(e,this.current,this.moudle)}),o()(n,"cutoverMoudle",function(e){}),o()(n,"setLazy",function(){}),o()(n,"lazy",function(){}),n),mounted:function(){for(var e=this,t=e.topComponents.length,i=0;i<t;i++)!function(){var t=i;window.setTimeout(function(){e.topComponents[t].show=!0},e.topComponents[t].time)}();for(var n=e.bottomComponents.length,a=0;a<n;a++)!function(){var t=a;window.setTimeout(function(){e.bottomComponents[t].show=!0},e.bottomComponents[t].time)}()}}},1357:function(e,t,i){t=e.exports=i(1106)(),t.push([e.i,'.border[data-v-79ca824e]{position:absolute;width:100%;height:100%}.border[data-v-79ca824e]:before{position:absolute;bottom:0;left:0;width:18px;height:18px;border-bottom:2px solid #49d9fe;border-left:2px solid #49d9fe;content:" "}.border[data-v-79ca824e]:after{position:absolute;top:0;right:0;width:18px;height:18px;border-top:2px solid #49d9fe;border-right:2px solid #49d9fe;content:" "}#apphome[data-v-79ca824e]{width:100%;height:96%;background-color:#0d1f6d;position:relative}#apphome .header[data-v-79ca824e]{position:fixed;width:100%;height:13.88888889%;background-color:#133596;z-index:1500}#apphome .headmock[data-v-79ca824e]{width:100%;height:20px}#apphome .top[data-v-79ca824e]{position:relative;width:auto;height:46.48148148%;margin-bottom:.92592593%;margin-left:.83333333%;margin-right:.83333333%}#apphome .top h1[data-v-79ca824e]{position:absolute;top:1.3rem;left:2rem;z-index:2;color:#efeefd;font-size:1.1rem;font-weight:590}#apphome .top span[data-v-79ca824e]{position:absolute;top:8px;display:inline-block;z-index:2;cursor:pointer;width:.9375vw;height:auto;text-align:center}#apphome .top span img[data-v-79ca824e]{max-width:100%;max-height:100%;width:auto;height:auto}@media screen and (min-width:801px){#apphome .top span[data-v-79ca824e]{right:8px}}@media screen and (max-width:800px){#apphome .top span[data-v-79ca824e]{right:5%}}#apphome .top>div[data-v-79ca824e]{background-color:#163387;position:absolute}#apphome .top>div[data-v-79ca824e]:before{position:absolute;top:0;left:0;width:18px;height:18px;border-top:2px solid #49d9fe;border-left:2px solid #49d9fe;content:" "}#apphome .top>div[data-v-79ca824e]:after{position:absolute;bottom:0;right:0;width:18px;height:18px;border-bottom:2px solid #49d9fe;border-right:2px solid #49d9fe;content:" "}#apphome .top .one[data-v-79ca824e]{width:25%;height:100%;top:0;left:0}#apphome .top .two[data-v-79ca824e]{width:48.90625%;height:100%;top:0;left:25.83333333%}#apphome .top .three[data-v-79ca824e]{width:24.42708333%;height:47.74774775%;top:0;right:0}#apphome .top .four[data-v-79ca824e]{width:24.42708333%;height:47.74774775%;top:51.35135135%;right:0}#apphome .bottom[data-v-79ca824e]{position:relative;height:49.90740741%;margin-left:.83333333%}#apphome .bottom h1[data-v-79ca824e]{position:absolute;top:1.2rem;left:2rem;z-index:2;color:#efeefd;font-size:1.1rem}#apphome .bottom span[data-v-79ca824e]{position:absolute;top:8px;display:inline-block;z-index:2;cursor:pointer;width:.9375vw;height:auto;text-align:center}#apphome .bottom span img[data-v-79ca824e]{max-width:100%;max-height:100%;width:auto;height:auto}@media screen and (min-width:801px){#apphome .bottom span[data-v-79ca824e]{right:8px}}@media screen and (max-width:800px){#apphome .bottom span[data-v-79ca824e]{right:5%}}#apphome .bottom>div[data-v-79ca824e]{background-color:#163387;margin-right:.83333333%;position:absolute}#apphome .bottom>div[data-v-79ca824e]:before{position:absolute;top:0;left:0;width:18px;height:18px;border-top:2px solid #49d9fe;border-left:2px solid #49d9fe;content:" "}#apphome .bottom>div[data-v-79ca824e]:after{position:absolute;bottom:0;right:0;width:18px;height:18px;border-bottom:2px solid #49d9fe;border-right:2px solid #49d9fe;content:" "}#apphome .bottom .one[data-v-79ca824e]{height:100%;width:28.64583333%;left:0}#apphome .bottom .two[data-v-79ca824e]{height:100%;width:26.77083333%;left:29.47916667%}#apphome .bottom .three[data-v-79ca824e]{height:40.98360656%;width:17.03125%;left:57.08333333%}#apphome .bottom .four[data-v-79ca824e]{height:55.73770492%;width:17.03125%;left:57.08333333%;top:44.26229508%}#apphome .bottom .five[data-v-79ca824e]{height:100%;width:24.16666667%;right:0}',""])},1416:function(e,t,i){var n=i(1357);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(1107)("544bb968",n,!0)},1538:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"apphome"}},[i("div",{staticClass:"top"},e._l(e.topComponents,function(t){return i("div",{class:t.id},[i("h1",[e._v(e._s(t.title))]),e._v(" "),i("span",{on:{click:function(i){e.cutover(t,e.topComponents)}}},[i("img",{attrs:{src:e.cutoverImg}})]),e._v(" "),t.show?i("div",{staticClass:"border"},[i(t.name,{key:t.id,tag:"componet",attrs:{chosemMoudle:e.cutoverMoudle,lazyLoad:e.setLazy}})],1):e._e()])})),e._v(" "),i("div",{staticClass:"bottom"},e._l(e.bottomComponents,function(t){return i("div",{class:t.id},[i("h1",[e._v(e._s(t.title))]),e._v(" "),i("span",{on:{click:function(i){e.cutover(t,e.bottomComponents)}}},[i("img",{attrs:{src:e.cutoverImg}})]),e._v(" "),t.show?i("div",{staticClass:"border"},[i(t.name,{key:t.id,tag:"componet",attrs:{chosemMoudle:e.cutoverMoudle,lazyLoad:e.setLazy,placeName:e.placeName}})],1):e._e()])}))])},staticRenderFns:[]}},446:function(e,t,i){i(1416);var n=i(170)(i(1279),i(1538),"data-v-79ca824e",null);e.exports=n.exports}});