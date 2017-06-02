!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("xml",function(b,c){function d(a,b){function c(c){return b.tokenize=c,c(a,b)}var d=a.next();if("<"==d)return a.eat("!")?a.eat("[")?a.match("CDATA[")?c(g("atom","]]>")):null:a.match("--")?c(g("comment","--\x3e")):a.match("DOCTYPE",!0,!0)?(a.eatWhile(/[\w\._\-]/),c(h(1))):null:a.eat("?")?(a.eatWhile(/[\w\._\-]/),b.tokenize=g("meta","?>"),"meta"):(x=a.eat("/")?"closeTag":"openTag",b.tokenize=e,"tag bracket");if("&"==d){var f;return f=a.eat("#")?a.eat("x")?a.eatWhile(/[a-fA-F\d]/)&&a.eat(";"):a.eatWhile(/[\d]/)&&a.eat(";"):a.eatWhile(/[\w\.\-:]/)&&a.eat(";"),f?"atom":"error"}return a.eatWhile(/[^&<]/),null}function e(a,b){var c=a.next();if(">"==c||"/"==c&&a.eat(">"))return b.tokenize=d,x=">"==c?"endTag":"selfcloseTag","tag bracket";if("="==c)return x="equals",null;if("<"==c){b.tokenize=d,b.state=l,b.tagName=b.tagStart=null;var e=b.tokenize(a,b);return e?e+" tag error":"tag error"}return/[\'\"]/.test(c)?(b.tokenize=f(c),b.stringStartCol=a.column(),b.tokenize(a,b)):(a.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function f(a){var b=function(b,c){for(;!b.eol();)if(b.next()==a){c.tokenize=e;break}return"string"};return b.isInAttribute=!0,b}function g(a,b){return function(c,e){for(;!c.eol();){if(c.match(b)){e.tokenize=d;break}c.next()}return a}}function h(a){return function(b,c){for(var e;null!=(e=b.next());){if("<"==e)return c.tokenize=h(a+1),c.tokenize(b,c);if(">"==e){if(1==a){c.tokenize=d;break}return c.tokenize=h(a-1),c.tokenize(b,c)}}return"meta"}}function i(a,b,c){this.prev=a.context,this.tagName=b,this.indent=a.indented,this.startOfLine=c,(z.doNotIndent.hasOwnProperty(b)||a.context&&a.context.noIndent)&&(this.noIndent=!0)}function j(a){a.context&&(a.context=a.context.prev)}function k(a,b){for(var c;;){if(!a.context)return;if(c=a.context.tagName,!z.contextGrabbers.hasOwnProperty(c)||!z.contextGrabbers[c].hasOwnProperty(b))return;j(a)}}function l(a,b,c){return"openTag"==a?(c.tagStart=b.column(),m):"closeTag"==a?n:l}function m(a,b,c){return"word"==a?(c.tagName=b.current(),y="tag",q):(y="error",m)}function n(a,b,c){if("word"==a){var d=b.current();return c.context&&c.context.tagName!=d&&z.implicitlyClosed.hasOwnProperty(c.context.tagName)&&j(c),c.context&&c.context.tagName==d?(y="tag",o):(y="tag error",p)}return y="error",p}function o(a,b,c){return"endTag"!=a?(y="error",o):(j(c),l)}function p(a,b,c){return y="error",o(a,b,c)}function q(a,b,c){if("word"==a)return y="attribute",r;if("endTag"==a||"selfcloseTag"==a){var d=c.tagName,e=c.tagStart;return c.tagName=c.tagStart=null,"selfcloseTag"==a||z.autoSelfClosers.hasOwnProperty(d)?k(c,d):(k(c,d),c.context=new i(c,d,e==c.indented)),l}return y="error",q}function r(a,b,c){return"equals"==a?s:(z.allowMissing||(y="error"),q(a,b,c))}function s(a,b,c){return"string"==a?t:"word"==a&&z.allowUnquoted?(y="string",q):(y="error",q(a,b,c))}function t(a,b,c){return"string"==a?t:q(a,b,c)}var u=b.indentUnit,v=c.multilineTagIndentFactor||1,w=c.multilineTagIndentPastTag;null==w&&(w=!0);var x,y,z=c.htmlMode?{autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0}:{autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,caseFold:!1},A=c.alignCDATA;return d.isInText=!0,{startState:function(){return{tokenize:d,state:l,indented:0,tagName:null,tagStart:null,context:null}},token:function(a,b){if(!b.tagName&&a.sol()&&(b.indented=a.indentation()),a.eatSpace())return null;x=null;var c=b.tokenize(a,b);return(c||x)&&"comment"!=c&&(y=null,b.state=b.state(x||c,a,b),y&&(c="error"==y?c+" error":y)),c},indent:function(b,c,f){var g=b.context;if(b.tokenize.isInAttribute)return b.tagStart==b.indented?b.stringStartCol+1:b.indented+u;if(g&&g.noIndent)return a.Pass;if(b.tokenize!=e&&b.tokenize!=d)return f?f.match(/^(\s*)/)[0].length:0;if(b.tagName)return w?b.tagStart+b.tagName.length+2:b.tagStart+u*v;if(A&&/<!\[CDATA\[/.test(c))return 0;var h=c&&/^<(\/)?([\w_:\.-]*)/.exec(c);if(h&&h[1])for(;g;){if(g.tagName==h[2]){g=g.prev;break}if(!z.implicitlyClosed.hasOwnProperty(g.tagName))break;g=g.prev}else if(h)for(;g;){var i=z.contextGrabbers[g.tagName];if(!i||!i.hasOwnProperty(h[2]))break;g=g.prev}for(;g&&!g.startOfLine;)g=g.prev;return g?g.indent+u:0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:c.htmlMode?"html":"xml",helperType:c.htmlMode?"html":"xml"}}),a.defineMIME("text/xml","xml"),a.defineMIME("application/xml","xml"),a.mimeModes.hasOwnProperty("text/html")||a.defineMIME("text/html",{name:"xml",htmlMode:!0})});