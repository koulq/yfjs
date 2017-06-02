!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function b(a){for(var b={},c=a.split(" "),d=0;d<c.length;++d)b[c[d]]=!0;return b}a.defineMode("asn.1",function(a,b){function c(a,b){var c=a.next();if('"'==c||"'"==c)return b.tokenize=d(c),b.tokenize(a,b);if(/[\[\]\(\){}:=,;]/.test(c))return h=c,"punctuation";if("-"==c&&a.eat("-"))return a.skipToEnd(),"comment";if(/\d/.test(c))return a.eatWhile(/[\w\.]/),"number";if(t.test(c))return a.eatWhile(t),"operator";a.eatWhile(/[\w\-]/);var e=a.current();return j.propertyIsEnumerable(e)?"keyword":k.propertyIsEnumerable(e)?"variable cmipVerbs":l.propertyIsEnumerable(e)?"atom compareTypes":m.propertyIsEnumerable(e)?"comment status":n.propertyIsEnumerable(e)?"variable-3 tags":o.propertyIsEnumerable(e)?"builtin storage":p.propertyIsEnumerable(e)?"string-2 modifier":q.propertyIsEnumerable(e)?"atom accessTypes":"variable"}function d(a){return function(b,c){for(var d,e=!1,f=!1;null!=(d=b.next());){if(d==a&&!e){var g=b.peek();g&&("b"!=(g=g.toLowerCase())&&"h"!=g&&"o"!=g||b.next()),f=!0;break}e=!e&&"\\"==d}return(f||!e&&!r)&&(c.tokenize=null),"string"}}function e(a,b,c,d,e){this.indented=a,this.column=b,this.type=c,this.align=d,this.prev=e}function f(a,b,c){var d=a.indented;return a.context&&"statement"==a.context.type&&(d=a.context.indented),a.context=new e(d,b,c,null,a.context)}function g(a){var b=a.context.type;return")"!=b&&"]"!=b&&"}"!=b||(a.indented=a.context.indented),a.context=a.context.prev}var h,i=a.indentUnit,j=b.keywords||{},k=b.cmipVerbs||{},l=b.compareTypes||{},m=b.status||{},n=b.tags||{},o=b.storage||{},p=b.modifier||{},q=b.accessTypes||{},r=b.multiLineStrings,s=!1!==b.indentStatements,t=/[\|\^]/;return{startState:function(a){return{tokenize:null,context:new e((a||0)-i,0,"top",!1),indented:0,startOfLine:!0}},token:function(a,b){var d=b.context;if(a.sol()&&(null==d.align&&(d.align=!1),b.indented=a.indentation(),b.startOfLine=!0),a.eatSpace())return null;h=null;var e=(b.tokenize||c)(a,b);if("comment"==e)return e;if(null==d.align&&(d.align=!0),";"!=h&&":"!=h&&","!=h||"statement"!=d.type)if("{"==h)f(b,a.column(),"}");else if("["==h)f(b,a.column(),"]");else if("("==h)f(b,a.column(),")");else if("}"==h){for(;"statement"==d.type;)d=g(b);for("}"==d.type&&(d=g(b));"statement"==d.type;)d=g(b)}else h==d.type?g(b):s&&(("}"==d.type||"top"==d.type)&&";"!=h||"statement"==d.type&&"newstatement"==h)&&f(b,a.column(),"statement");else g(b);return b.startOfLine=!1,e},electricChars:"{}",lineComment:"--",fold:"brace"}}),a.defineMIME("text/x-ttcn-asn",{name:"asn.1",keywords:b("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),cmipVerbs:b("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),compareTypes:b("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),status:b("current deprecated mandatory obsolete"),tags:b("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),storage:b("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminAtring TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),modifier:b("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),accessTypes:b("not-accessible accessible-for-notify read-only read-create read-write"),multiLineStrings:!0})});