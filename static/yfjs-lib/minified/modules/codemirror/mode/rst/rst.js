!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror"),require("../python/python"),require("../stex/stex"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../python/python","../stex/stex","../../addon/mode/overlay"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("rst",function(b,c){var d=/^\*\*[^\*\s](?:[^\*]*[^\*\s])?\*\*/,e=/^\*[^\*\s](?:[^\*]*[^\*\s])?\*/,f=/^``[^`\s](?:[^`]*[^`\s])``/,g=/^(?:[\d]+(?:[\.,]\d+)*)/,h=/^(?:\s\+[\d]+(?:[\.,]\d+)*)/,i=/^(?:\s\-[\d]+(?:[\.,]\d+)*)/,j="[Hh][Tt][Tt][Pp][Ss]?://",k="(?:[\\d\\w.-]+)\\.(?:\\w{2,6})",l="(?:/[\\d\\w\\#\\%\\&\\-\\.\\,\\/\\:\\=\\?\\~]+)*",m=new RegExp("^"+j+k+l),n={token:function(a){if(a.match(d)&&a.match(/\W+|$/,!1))return"strong";if(a.match(e)&&a.match(/\W+|$/,!1))return"em";if(a.match(f)&&a.match(/\W+|$/,!1))return"string-2";if(a.match(g))return"number";if(a.match(h))return"positive";if(a.match(i))return"negative";if(a.match(m))return"link";for(;!(null==a.next()||a.match(d,!1)||a.match(e,!1)||a.match(f,!1)||a.match(g,!1)||a.match(h,!1)||a.match(i,!1)||a.match(m,!1)););return null}},o=a.getMode(b,c.backdrop||"rst-base");return a.overlayMode(o,n,!0)},"python","stex"),a.defineMode("rst-base",function(b){function c(a){var b=Array.prototype.slice.call(arguments,1);return a.replace(/{(\d+)}/g,function(a,c){return void 0!==b[c]?b[c]:a})}function d(b,c){var f=null;if(b.sol()&&b.match(Y,!1))k(c,i,{mode:n,local:a.startState(n)});else if(b.sol()&&b.match(A))k(c,e),f="meta";else if(b.sol()&&b.match(z))k(c,d),f="header";else if(m(c)==L||b.match(L,!1))switch(l(c)){case 0:k(c,d,j(L,1)),b.match(/^:/),f="meta";break;case 1:k(c,d,j(L,2)),b.match(t),f="keyword",b.current().match(/^(?:math|latex)/)&&(c.tmp_stex=!0);break;case 2:k(c,d,j(L,3)),b.match(/^:`/),f="meta";break;case 3:if(c.tmp_stex&&(c.tmp_stex=void 0,c.tmp={mode:o,local:a.startState(o)}),c.tmp){if("`"==b.peek()){k(c,d,j(L,4)),c.tmp=void 0;break}f=c.tmp.mode.token(b,c.tmp.local);break}k(c,d,j(L,4)),b.match(y),f="string";break;case 4:k(c,d,j(L,5)),b.match(/^`/),f="meta";break;case 5:k(c,d,j(L,6)),b.match(r);break;default:k(c,d)}else if(m(c)==M||b.match(M,!1))switch(l(c)){case 0:k(c,d,j(M,1)),b.match(/^`/),f="meta";break;case 1:k(c,d,j(M,2)),b.match(y),f="string";break;case 2:k(c,d,j(M,3)),b.match(/^`:/),f="meta";break;case 3:k(c,d,j(M,4)),b.match(t),f="keyword";break;case 4:k(c,d,j(M,5)),b.match(/^:/),f="meta";break;case 5:k(c,d,j(M,6)),b.match(r);break;default:k(c,d)}else if(m(c)==N||b.match(N,!1))switch(l(c)){case 0:k(c,d,j(N,1)),b.match(/^:/),f="meta";break;case 1:k(c,d,j(N,2)),b.match(t),f="keyword";break;case 2:k(c,d,j(N,3)),b.match(/^:/),f="meta";break;case 3:k(c,d,j(N,4)),b.match(r);break;default:k(c,d)}else if(m(c)==G||b.match(G,!1))switch(l(c)){case 0:k(c,d,j(G,1)),b.match(Q),f="variable-2";break;case 1:k(c,d,j(G,2)),b.match(/^_?_?/)&&(f="link");break;default:k(c,d)}else if(b.match(H))k(c,d),f="quote";else if(b.match(I))k(c,d),f="quote";else if(b.match(J))k(c,d),b.peek()&&!b.peek().match(/^\W$/)||(f="link");else if(m(c)==K||b.match(K,!1))switch(l(c)){case 0:!b.peek()||b.peek().match(/^\W$/)?k(c,d,j(K,1)):b.match(K);break;case 1:k(c,d,j(K,2)),b.match(/^`/),f="link";break;case 2:k(c,d,j(K,3)),b.match(y);break;case 3:k(c,d,j(K,4)),b.match(/^`_/),f="link";break;default:k(c,d)}else b.match(X)?k(c,g):b.next()&&k(c,d);return f}function e(b,c){var g=null;if(m(c)==D||b.match(D,!1))switch(l(c)){case 0:k(c,e,j(D,1)),b.match(Q),g="variable-2";break;case 1:k(c,e,j(D,2)),b.match(R);break;case 2:k(c,e,j(D,3)),b.match(S),g="keyword";break;case 3:k(c,e,j(D,4)),b.match(T),g="meta";break;default:k(c,d)}else if(m(c)==C||b.match(C,!1))switch(l(c)){case 0:k(c,e,j(C,1)),b.match(O),g="keyword",b.current().match(/^(?:math|latex)/)?c.tmp_stex=!0:b.current().match(/^python/)&&(c.tmp_py=!0);break;case 1:k(c,e,j(C,2)),b.match(P),g="meta",(b.match(/^latex\s*$/)||c.tmp_stex)&&(c.tmp_stex=void 0,k(c,i,{mode:o,local:a.startState(o)}));break;case 2:k(c,e,j(C,3)),(b.match(/^python\s*$/)||c.tmp_py)&&(c.tmp_py=void 0,k(c,i,{mode:n,local:a.startState(n)}));break;default:k(c,d)}else if(m(c)==B||b.match(B,!1))switch(l(c)){case 0:k(c,e,j(B,1)),b.match(U),b.match(V),g="link";break;case 1:k(c,e,j(B,2)),b.match(W),g="meta";break;default:k(c,d)}else b.match(E)?(k(c,d),g="quote"):b.match(F)?(k(c,d),g="quote"):(b.eatSpace(),b.eol()?k(c,d):(b.skipToEnd(),k(c,f),g="comment"));return g}function f(a,b){return h(a,b,"comment")}function g(a,b){return h(a,b,"meta")}function h(a,b,c){return a.eol()||a.eatSpace()?(a.skipToEnd(),c):(k(b,d),null)}function i(a,b){return b.ctx.mode&&b.ctx.local?a.sol()?(a.eatSpace()||k(b,d),null):b.ctx.mode.token(a,b.ctx.local):(k(b,d),null)}function j(a,b,c,d){return{phase:a,stage:b,mode:c,local:d}}function k(a,b,c){a.tok=b,a.ctx=c||{}}function l(a){return a.ctx.stage||0}function m(a){return a.ctx.phase}var n=a.getMode(b,"python"),o=a.getMode(b,"stex"),p="\\s+",q="(?:\\s*|\\W|$)",r=new RegExp(c("^{0}",q)),s="(?:[^\\W\\d_](?:[\\w!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)",t=new RegExp(c("^{0}",s)),u="(?:[^\\W\\d_](?:[\\w\\s!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)",v=c("(?:{0}|`{1}`)",s,u),w="(?:[^\\s\\|](?:[^\\|]*[^\\s\\|])?)",x="(?:[^\\`]+)",y=new RegExp(c("^{0}",x)),z=new RegExp("^([!'#$%&\"()*+,-./:;<=>?@\\[\\\\\\]^_`{|}~])\\1{3,}\\s*$"),A=new RegExp(c("^\\.\\.{0}",p)),B=new RegExp(c("^_{0}:{1}|^__:{1}",v,q)),C=new RegExp(c("^{0}::{1}",v,q)),D=new RegExp(c("^\\|{0}\\|{1}{2}::{3}",w,p,v,q)),E=new RegExp(c("^\\[(?:\\d+|#{0}?|\\*)]{1}",v,q)),F=new RegExp(c("^\\[{0}\\]{1}",v,q)),G=new RegExp(c("^\\|{0}\\|",w)),H=new RegExp(c("^\\[(?:\\d+|#{0}?|\\*)]_",v)),I=new RegExp(c("^\\[{0}\\]_",v)),J=new RegExp(c("^{0}__?",v)),K=new RegExp(c("^`{0}`_",x)),L=new RegExp(c("^:{0}:`{1}`{2}",s,x,q)),M=new RegExp(c("^`{1}`:{0}:{2}",s,x,q)),N=new RegExp(c("^:{0}:{1}",s,q)),O=new RegExp(c("^{0}",v)),P=new RegExp(c("^::{0}",q)),Q=new RegExp(c("^\\|{0}\\|",w)),R=new RegExp(c("^{0}",p)),S=new RegExp(c("^{0}",v)),T=new RegExp(c("^::{0}",q)),U=new RegExp("^_"),V=new RegExp(c("^{0}|_",v)),W=new RegExp(c("^:{0}",q)),X=new RegExp("^::\\s*$"),Y=new RegExp("^\\s+(?:>>>|In \\[\\d+\\]:)\\s");return{startState:function(){return{tok:d,ctx:j(void 0,0)}},copyState:function(b){var c=b.ctx,d=b.tmp;return c.local&&(c={mode:c.mode,local:a.copyState(c.mode,c.local)}),d&&(d={mode:d.mode,local:a.copyState(d.mode,d.local)}),{tok:b.tok,ctx:c,tmp:d}},innerMode:function(a){return a.tmp?{state:a.tmp.local,mode:a.tmp.mode}:a.ctx.mode?{state:a.ctx.local,mode:a.ctx.mode}:null},token:function(a,b){return b.tok(a,b)}}},"python","stex"),a.defineMIME("text/x-rst","rst")});