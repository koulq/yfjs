!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){function b(a,b,c){var d,e=a.getWrapperElement();return d=e.appendChild(document.createElement("div")),d.className=c?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof b?d.innerHTML=b:d.appendChild(b),d}function c(a,b){a.state.currentNotificationClose&&a.state.currentNotificationClose(),a.state.currentNotificationClose=b}a.defineExtension("openDialog",function(d,e,f){function g(a){if("string"==typeof a)l.value=a;else{if(j)return;j=!0,i.parentNode.removeChild(i),k.focus(),f.onClose&&f.onClose(i)}}f||(f={}),c(this,null);var h,i=b(this,d,f.bottom),j=!1,k=this,l=i.getElementsByTagName("input")[0];return l?(f.value&&(l.value=f.value,!1!==f.selectValueOnOpen&&l.select()),f.onInput&&a.on(l,"input",function(a){f.onInput(a,l.value,g)}),f.onKeyUp&&a.on(l,"keyup",function(a){f.onKeyUp(a,l.value,g)}),a.on(l,"keydown",function(b){f&&f.onKeyDown&&f.onKeyDown(b,l.value,g)||((27==b.keyCode||!1!==f.closeOnEnter&&13==b.keyCode)&&(l.blur(),a.e_stop(b),g()),13==b.keyCode&&e(l.value,b))}),!1!==f.closeOnBlur&&a.on(l,"blur",g),l.focus()):(h=i.getElementsByTagName("button")[0])&&(a.on(h,"click",function(){g(),k.focus()}),!1!==f.closeOnBlur&&a.on(h,"blur",g),h.focus()),g}),a.defineExtension("openConfirm",function(d,e,f){function g(){j||(j=!0,h.parentNode.removeChild(h),k.focus())}c(this,null);var h=b(this,d,f&&f.bottom),i=h.getElementsByTagName("button"),j=!1,k=this,l=1;i[0].focus();for(var m=0;m<i.length;++m){var n=i[m];!function(b){a.on(n,"click",function(c){a.e_preventDefault(c),g(),b&&b(k)})}(e[m]),a.on(n,"blur",function(){--l,setTimeout(function(){l<=0&&g()},200)}),a.on(n,"focus",function(){++l})}}),a.defineExtension("openNotification",function(d,e){function f(){i||(i=!0,clearTimeout(g),h.parentNode.removeChild(h))}c(this,f);var g,h=b(this,d,e&&e.bottom),i=!1,j=e&&void 0!==e.duration?e.duration:5e3;return a.on(h,"click",function(b){a.e_preventDefault(b),f()}),j&&(g=setTimeout(f,j)),f})});