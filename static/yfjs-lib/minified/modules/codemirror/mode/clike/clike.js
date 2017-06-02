!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function b(a){for(var b={},c=a.split(" "),d=0;d<c.length;++d)b[c[d]]=!0;return b}function c(a,b){return"function"==typeof a?a(b):a.propertyIsEnumerable(b)}function d(a,b){if(!b.startOfLine)return!1;for(;;){if(!a.skipTo("\\")){a.skipToEnd(),b.tokenize=null;break}if(a.next(),a.eol()){b.tokenize=d;break}}return"meta"}function e(a,b){return"variable-3"==b.prevToken&&"variable-3"}function f(a){return a.eatWhile(/[\w\.']/),"number"}function g(a,b){if(a.backUp(1),a.match(/(R|u8R|uR|UR|LR)/)){var c=a.match(/"([^\s\\()]{0,16})\(/);return!!c&&(b.cpp11RawStringDelim=c[1],b.tokenize=j,j(a,b))}return a.match(/(u8|u|U|L)/)?!!a.match(/["']/,!1)&&"string":(a.next(),!1)}function h(a){var b=/(\w+)::(\w+)$/.exec(a);return b&&b[1]==b[2]}function i(a,b){for(var c;null!=(c=a.next());)if('"'==c&&!a.eat('"')){b.tokenize=null;break}return"string"}function j(a,b){var c=b.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&");return a.match(new RegExp(".*?\\)"+c+'"'))?b.tokenize=null:a.skipToEnd(),"string"}function k(b,c){function d(a){if(a)for(var b in a)a.hasOwnProperty(b)&&e.push(b)}"string"==typeof b&&(b=[b]);var e=[];d(c.keywords),d(c.types),d(c.builtin),d(c.atoms),e.length&&(c.helperType=b[0],a.registerHelper("hintWords",b[0],e));for(var f=0;f<b.length;++f)a.defineMIME(b[f],c)}function l(a,b){for(var c=!1;!a.eol();){if(!c&&a.match('"""')){b.tokenize=null;break}c="\\"==a.next()&&!c}return"string"}function m(a){return function(b,c){for(var d,e=!1,f=!1;!b.eol();){if(!a&&!e&&b.match('"')){f=!0;break}if(a&&b.match('"""')){f=!0;break}d=b.next(),!e&&"$"==d&&b.match("{")&&b.skipTo("}"),e=!e&&"\\"==d&&!a}return!f&&a||(c.tokenize=null),"string"}}function n(a){return function(b,c){for(var d,e=!1,f=!1;!b.eol();){if(!e&&b.match('"')&&("single"==a||b.match('""'))){f=!0;break}if(!e&&b.match("``")){q=n(a),f=!0;break}d=b.next(),e="single"==a&&!e&&"\\"==d}return f&&(c.tokenize=null),"string"}}a.defineMode("clike",function(b,d){function e(a,b){var d=a.next();if(y[d]){var e=y[d](a,b);if(!1!==e)return e}if('"'==d||"'"==d)return b.tokenize=f(d),b.tokenize(a,b);if(D.test(d))return n=d,null;if(E.test(d)){if(a.backUp(1),a.match(F))return"number";a.next()}if("/"==d){if(a.eat("*"))return b.tokenize=g,g(a,b);if(a.eat("/"))return a.skipToEnd(),"comment"}if(G.test(d))return a.eatWhile(G),"operator";if(a.eatWhile(/[\w\$_\xa1-\uffff]/),C)for(;a.match(C);)a.eatWhile(/[\w\$_\xa1-\uffff]/);var h=a.current();return c(s,h)?(c(v,h)&&(n="newstatement"),c(w,h)&&(o=!0),"keyword"):c(t,h)?"variable-3":c(u,h)?(c(v,h)&&(n="newstatement"),"builtin"):c(x,h)?"atom":"variable"}function f(a){return function(b,c){for(var d,e=!1,f=!1;null!=(d=b.next());){if(d==a&&!e){f=!0;break}e=!e&&"\\"==d}return(f||!e&&!z)&&(c.tokenize=null),"string"}}function g(a,b){for(var c,d=!1;c=a.next();){if("/"==c&&d){b.tokenize=null;break}d="*"==c}return"comment"}function h(a,b,c,d,e){this.indented=a,this.column=b,this.type=c,this.align=d,this.prev=e}function i(a){return"statement"==a||"switchstatement"==a||"namespace"==a}function j(a,b,c){var d=a.indented;return a.context&&i(a.context.type)&&!i(c)&&(d=a.context.indented),a.context=new h(d,b,c,null,a.context)}function k(a){var b=a.context.type;return")"!=b&&"]"!=b&&"}"!=b||(a.indented=a.context.indented),a.context=a.context.prev}function l(a,b){return"variable"==b.prevToken||"variable-3"==b.prevToken||(!!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(a.string.slice(0,a.start))||void 0)}function m(a){for(;;){if(!a||"top"==a.type)return!0;if("}"==a.type&&"namespace"!=a.prev.type)return!1;a=a.prev}}var n,o,p=b.indentUnit,q=d.statementIndentUnit||p,r=d.dontAlignCalls,s=d.keywords||{},t=d.types||{},u=d.builtin||{},v=d.blockKeywords||{},w=d.defKeywords||{},x=d.atoms||{},y=d.hooks||{},z=d.multiLineStrings,A=!1!==d.indentStatements,B=!1!==d.indentSwitch,C=d.namespaceSeparator,D=d.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,E=d.numberStart||/[\d\.]/,F=d.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,G=d.isOperatorChar||/[+\-*&%=<>!?|\/]/,H=d.endStatement||/^[;:,]$/;return{startState:function(a){return{tokenize:null,context:new h((a||0)-p,0,"top",!1),indented:0,startOfLine:!0,prevToken:null}},token:function(a,b){var c=b.context;if(a.sol()&&(null==c.align&&(c.align=!1),b.indented=a.indentation(),b.startOfLine=!0),a.eatSpace())return null;n=o=null;var f=(b.tokenize||e)(a,b);if("comment"==f||"meta"==f)return f;if(null==c.align&&(c.align=!0),H.test(n))for(;i(b.context.type);)k(b);else if("{"==n)j(b,a.column(),"}");else if("["==n)j(b,a.column(),"]");else if("("==n)j(b,a.column(),")");else if("}"==n){for(;i(c.type);)c=k(b);for("}"==c.type&&(c=k(b));i(c.type);)c=k(b)}else if(n==c.type)k(b);else if(A&&(("}"==c.type||"top"==c.type)&&";"!=n||i(c.type)&&"newstatement"==n)){var g="statement";"newstatement"==n&&B&&"switch"==a.current()?g="switchstatement":"keyword"==f&&"namespace"==a.current()&&(g="namespace"),j(b,a.column(),g)}if("variable"==f&&("def"==b.prevToken||d.typeFirstDefinitions&&l(a,b)&&m(b.context)&&a.match(/^\s*\(/,!1))&&(f="def"),y.token){var h=y.token(a,b,f);void 0!==h&&(f=h)}return"def"==f&&!1===d.styleDefs&&(f="variable"),b.startOfLine=!1,b.prevToken=o?"def":f||n,f},indent:function(b,c){if(b.tokenize!=e&&null!=b.tokenize)return a.Pass;var f=b.context,g=c&&c.charAt(0);if(i(f.type)&&"}"==g&&(f=f.prev),y.indent){var h=y.indent(b,f,c);if("number"==typeof h)return h}var j=g==f.type,k=f.prev&&"switchstatement"==f.prev.type;if(d.allmanIndentation&&/[{(]/.test(g)){for(;"top"!=f.type&&"}"!=f.type;)f=f.prev;return f.indented}return i(f.type)?f.indented+("{"==g?0:q):!f.align||r&&")"==f.type?")"!=f.type||j?f.indented+(j?0:p)+(j||!k||/^(?:case|default)\b/.test(c)?0:p):f.indented+q:f.column+(j?0:1)},electricInput:B?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}});var o="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile",p="int long char short double float unsigned signed void size_t ptrdiff_t";k(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:b(o),types:b(p+" bool _Complex _Bool float_t double_t intptr_t intmax_t int8_t int16_t int32_t int64_t uintptr_t uintmax_t uint8_t uint16_t uint32_t uint64_t"),blockKeywords:b("case do else for if switch while struct"),defKeywords:b("struct"),typeFirstDefinitions:!0,atoms:b("null true false"),hooks:{"#":d,"*":e},modeProps:{fold:["brace","include"]}}),k(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:b(o+" asm dynamic_cast namespace reinterpret_cast try explicit new static_cast typeid catch operator template typename class friend private this using const_cast inline public throw virtual delete mutable protected alignas alignof constexpr decltype nullptr noexcept thread_local final static_assert override"),types:b(p+" bool wchar_t"),blockKeywords:b("catch class do else finally for if struct switch try while"),defKeywords:b("class namespace struct enum union"),typeFirstDefinitions:!0,atoms:b("true false null"),hooks:{"#":d,"*":e,u:g,U:g,L:g,R:g,0:f,1:f,2:f,3:f,4:f,5:f,6:f,7:f,8:f,9:f,token:function(a,b,c){if("variable"==c&&"("==a.peek()&&(";"==b.prevToken||null==b.prevToken||"}"==b.prevToken)&&h(a.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),k("text/x-java",{name:"clike",keywords:b("abstract assert break case catch class const continue default do else enum extends final finally float for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while"),types:b("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:b("catch class do else finally for if switch try while"),defKeywords:b("class interface package enum"),typeFirstDefinitions:!0,atoms:b("true false null"),endStatement:/^[;:]$/,hooks:{"@":function(a){return a.eatWhile(/[\w\$_]/),"meta"}},modeProps:{fold:["brace","import"]}}),k("text/x-csharp",{name:"clike",keywords:b("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:b("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:b("catch class do else finally for foreach if struct switch try while"),defKeywords:b("class interface namespace struct var"),typeFirstDefinitions:!0,atoms:b("true false null"),hooks:{"@":function(a,b){return a.eat('"')?(b.tokenize=i,i(a,b)):(a.eatWhile(/[\w\$_]/),"meta")}}}),k("text/x-scala",{name:"clike",keywords:b("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ : = => <- <: <% >: # @ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble :: #:: "),types:b("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:b("catch class do else finally for forSome if match switch try while"),defKeywords:b("class def object package trait type val var"),atoms:b("true false null"),indentStatements:!1,indentSwitch:!1,hooks:{"@":function(a){return a.eatWhile(/[\w\$_]/),"meta"},'"':function(a,b){return!!a.match('""')&&(b.tokenize=l,b.tokenize(a,b))},"'":function(a){return a.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"}},modeProps:{closeBrackets:{triples:'"'}}}),k("text/x-kotlin",{name:"clike",keywords:b("package as typealias class interface this super val var fun for is in This throw return break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix"),types:b("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),intendSwitch:!1,indentStatements:!1,multiLineStrings:!0,blockKeywords:b("catch class do else finally for if where try while enum"),defKeywords:b("class val var object package interface fun"),atoms:b("true false null this"),hooks:{'"':function(a,b){return b.tokenize=m(a.match('""')),b.tokenize(a,b)}},modeProps:{closeBrackets:{triples:'"'}}}),k(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:b("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:b("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:b("for while do if else struct"),builtin:b("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:b("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":d},modeProps:{fold:["brace","include"]}}),k("text/x-nesc",{name:"clike",keywords:b(o+"as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:b(p),blockKeywords:b("case do else for if switch while struct"),atoms:b("null true false"),hooks:{"#":d},modeProps:{fold:["brace","include"]}}),k("text/x-objectivec",{name:"clike",keywords:b(o+"inline restrict _Bool _Complex _Imaginery BOOL Class bycopy byref id IMP in inout nil oneway out Protocol SEL self super atomic nonatomic retain copy readwrite readonly"),types:b(p),atoms:b("YES NO NULL NILL ON OFF true false"),hooks:{"@":function(a){return a.eatWhile(/[\w\$]/),"keyword"},"#":d,indent:function(a,b,c){if("statement"==b.type&&/^@\w/.test(c))return b.indented}},modeProps:{fold:"brace"}}),k("text/x-squirrel",{name:"clike",keywords:b("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:b(p),blockKeywords:b("case catch class else for foreach if switch try while"),defKeywords:b("function local class"),typeFirstDefinitions:!0,atoms:b("true false null"),hooks:{"#":d},modeProps:{fold:["brace","include"]}});var q=null;k("text/x-ceylon",{name:"clike",keywords:b("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(a){var b=a.charAt(0);return b===b.toUpperCase()&&b!==b.toLowerCase()},blockKeywords:b("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:b("class dynamic function interface module object package value"),builtin:b("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:b("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(a){return a.eatWhile(/[\w\$_]/),"meta"},'"':function(a,b){return b.tokenize=n(a.match('""')?"triple":"single"),b.tokenize(a,b)},"`":function(a,b){return!(!q||!a.match("`"))&&(b.tokenize=q,q=null,b.tokenize(a,b))},"'":function(a){return a.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(a,b,c){if(("variable"==c||"variable-3"==c)&&"."==b.prevToken)return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})});