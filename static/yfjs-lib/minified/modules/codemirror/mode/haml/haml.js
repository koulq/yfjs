!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../ruby/ruby")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../ruby/ruby"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("haml",function(b){function c(a){return function(b,c){return b.peek()==a&&1==c.rubyState.tokenize.length?(b.next(),c.tokenize=e,"closeAttributeTag"):d(b,c)}}function d(a,b){return a.match("-#")?(a.skipToEnd(),"comment"):g.token(a,b.rubyState)}function e(a,b){var e=a.peek();if("comment"==b.previousToken.style&&b.indented>b.previousToken.indented)return a.skipToEnd(),"commentLine";if(b.startOfLine){if("!"==e&&a.match("!!"))return a.skipToEnd(),"tag";if(a.match(/^%[\w:#\.]+=/))return b.tokenize=d,"hamlTag";if(a.match(/^%[\w:]+/))return"hamlTag";if("/"==e)return a.skipToEnd(),"comment"}if((b.startOfLine||"hamlTag"==b.previousToken.style)&&("#"==e||"."==e))return a.match(/[\w-#\.]*/),"hamlAttribute";if(b.startOfLine&&!a.match("--\x3e",!1)&&("="==e||"-"==e))return b.tokenize=d,b.tokenize(a,b);if("hamlTag"==b.previousToken.style||"closeAttributeTag"==b.previousToken.style||"hamlAttribute"==b.previousToken.style){if("("==e)return b.tokenize=c(")"),b.tokenize(a,b);if("{"==e&&!a.match(/^\{%.*/))return b.tokenize=c("}"),b.tokenize(a,b)}return f.token(a,b.htmlState)}var f=a.getMode(b,{name:"htmlmixed"}),g=a.getMode(b,"ruby");return{startState:function(){return{htmlState:f.startState(),rubyState:g.startState(),indented:0,previousToken:{style:null,indented:0},tokenize:e}},copyState:function(b){return{htmlState:a.copyState(f,b.htmlState),rubyState:a.copyState(g,b.rubyState),indented:b.indented,previousToken:b.previousToken,tokenize:b.tokenize}},token:function(a,b){if(a.sol()&&(b.indented=a.indentation(),b.startOfLine=!0),a.eatSpace())return null;var c=b.tokenize(a,b);if(b.startOfLine=!1,c&&"commentLine"!=c&&(b.previousToken={style:c,indented:b.indented}),a.eol()&&b.tokenize==d){a.backUp(1);var f=a.peek();a.next(),f&&","!=f&&(b.tokenize=e)}return"hamlTag"==c?c="tag":"commentLine"==c?c="comment":"hamlAttribute"==c?c="attribute":"closeAttributeTag"==c&&(c=null),c}}},"htmlmixed","ruby"),a.defineMIME("text/x-haml","haml")});