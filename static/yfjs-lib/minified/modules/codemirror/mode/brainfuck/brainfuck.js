!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";var b="><+-.,[]".split("");a.defineMode("brainfuck",function(){return{startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(a,c){if(a.eatSpace())return null;a.sol()&&(c.commentLine=!1);var d=a.next().toString();return-1===b.indexOf(d)?(c.commentLine=!0,a.eol()&&(c.commentLine=!1),"comment"):!0===c.commentLine?(a.eol()&&(c.commentLine=!1),"comment"):"]"===d||"["===d?("["===d?c.left++:c.right++,"bracket"):"+"===d||"-"===d?"keyword":"<"===d||">"===d?"atom":"."===d||","===d?"def":void(a.eol()&&(c.commentLine=!1))}}}),a.defineMIME("text/x-brainfuck","brainfuck")});