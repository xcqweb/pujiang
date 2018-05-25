/*
 	@author --  xcq -- 2018-4-20
 * */

export default function (doc, win) {
    let docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        
        recalc = function () {
            let clientWidth = docEl.offsetWidth;
            let isIE = win.navigator.userAgent.indexOf('Trident');
            
            if (!clientWidth) return;
            if (clientWidth >= 1920) {
            	if(isIE>-1){
            		docEl.style.fontSize = '20px';
            	}else{
            		docEl.style.fontSize = '20px';
            	}
            } else {
            	if(isIE>-1){
            		docEl.style.fontSize = 12 * (clientWidth / 1560) + 'px';
            		alert(docEl.style.fontSize)
            	}else{
            		docEl.style.fontSize = 20 * (clientWidth / 1920) + 'px';
            	}
                
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
