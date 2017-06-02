!function(a,b){if("function"==typeof define&&define.amd)define(["jquery"],b);else if("undefined"!=typeof exports)b(require("jquery"));else{var c={exports:{}};b(a.jQuery),a.switcher=c.exports}}(this,function(a){"use strict";function b(a){return a&&a.__esModule?a:{default:a}}function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d=b(a),e=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=d.default||window.jQuery||window.$,h=function(){function a(b){function d(a){return a&&"function"==typeof a.children&&a.children().length>0&&a.addClass(e._getClass("html-text")),a}var e=this,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,a),this.$element=g(b),this.options=g.extend({},g.fn.switcher.defaults,this._getElementOptions(),f),this.prevOptions={},this.$wrapper=g("<div>",{class:function(){var a=[];return a.push(e.options.state?"on":"off"),e.options.size&&a.push(e.options.size),e.options.disabled&&a.push("disabled"),e.options.readonly&&a.push("readonly"),e.options.indeterminate&&a.push("indeterminate"),e.options.inverse&&a.push("inverse"),e.$element.attr("id")&&a.push("id-"+e.$element.attr("id")),a.map(e._getClass.bind(e)).concat([e.options.baseClass],e._getClasses(e.options.wrapperClass)).join(" ")}}),this.$container=g("<div>",{class:this._getClass("container")}),this.$on=d(g("<span>",{html:this.options.onText,class:this._getClass("handle-on")+" "+this._getClass(this.options.onColor)})),this.$off=d(g("<span>",{html:this.options.offText,class:this._getClass("handle-off")+" "+this._getClass(this.options.offColor)})),this.$label=d(g("<span>",{html:this.options.labelText,class:this._getClass("label")})),this.$element.on("init.bs.switcher",this.options.onInit.bind(this,b)),this.$element.on("switchChange.bs.switcher",function(){for(var a=arguments.length,c=Array(a),d=0;d<a;d++)c[d]=arguments[d];!1===e.options.onSwitchChange.apply(b,c)&&(e.$element.is(":radio")?g('[name="'+e.$element.attr("name")+'"]').trigger("previousState.bs.switcher",!0):e.$element.trigger("previousState.bs.switcher",!0))}),this.$container=this.$element.wrap(this.$container).parent(),this.$wrapper=this.$container.wrap(this.$wrapper).parent(),this.$element.before(this.options.inverse?this.$off:this.$on).before(this.$label).before(this.options.inverse?this.$on:this.$off),this.options.indeterminate&&this.$element.prop("indeterminate",!0),this._init(),this._elementHandlers(),this._handleHandlers(),this._labelHandlers(),this._formHandler(),this._externalLabelHandler(),this.$element.trigger("init.bs.switcher",this.options.state)}return f(a,[{key:"setPrevOptions",value:function(){this.prevOptions=e({},this.options)}},{key:"state",value:function(a,b){return void 0===a?this.options.state:this.options.disabled||this.options.readonly||this.options.state&&!this.options.radioAllOff&&this.$element.is(":radio")?this.$element:(this.$element.is(":radio")?g('[name="'+this.$element.attr("name")+'"]').trigger("setPreviousOptions.bs.switcher"):this.$element.trigger("setPreviousOptions.bs.switcher"),this.options.indeterminate&&this.indeterminate(!1),this.$element.prop("checked",Boolean(a)).trigger("change.bs.switcher",b),this.$element)}},{key:"toggleState",value:function(a){return this.options.disabled||this.options.readonly?this.$element:this.options.indeterminate?(this.indeterminate(!1),this.state(!0)):this.$element.prop("checked",!this.options.state).trigger("change.bs.switcher",a)}},{key:"size",value:function(a){return void 0===a?this.options.size:(null!=this.options.size&&this.$wrapper.removeClass(this._getClass(this.options.size)),a&&this.$wrapper.addClass(this._getClass(a)),this._width(),this._containerPosition(),this.options.size=a,this.$element)}},{key:"animate",value:function(a){return void 0===a?this.options.animate:this.options.animate===Boolean(a)?this.$element:this.toggleAnimate()}},{key:"toggleAnimate",value:function(){return this.options.animate=!this.options.animate,this.$wrapper.toggleClass(this._getClass("animate")),this.$element}},{key:"disabled",value:function(a){return void 0===a?this.options.disabled:this.options.disabled===Boolean(a)?this.$element:this.toggleDisabled()}},{key:"toggleDisabled",value:function(){return this.options.disabled=!this.options.disabled,this.$element.prop("disabled",this.options.disabled),this.$wrapper.toggleClass(this._getClass("disabled")),this.$element}},{key:"readonly",value:function(a){return void 0===a?this.options.readonly:this.options.readonly===Boolean(a)?this.$element:this.toggleReadonly()}},{key:"toggleReadonly",value:function(){return this.options.readonly=!this.options.readonly,this.$element.prop("readonly",this.options.readonly),this.$wrapper.toggleClass(this._getClass("readonly")),this.$element}},{key:"indeterminate",value:function(a){return void 0===a?this.options.indeterminate:this.options.indeterminate===Boolean(a)?this.$element:this.toggleIndeterminate()}},{key:"toggleIndeterminate",value:function(){return this.options.indeterminate=!this.options.indeterminate,this.$element.prop("indeterminate",this.options.indeterminate),this.$wrapper.toggleClass(this._getClass("indeterminate")),this._containerPosition(),this.$element}},{key:"inverse",value:function(a){return void 0===a?this.options.inverse:this.options.inverse===Boolean(a)?this.$element:this.toggleInverse()}},{key:"toggleInverse",value:function(){this.$wrapper.toggleClass(this._getClass("inverse"));var a=this.$on.clone(!0),b=this.$off.clone(!0);return this.$on.replaceWith(b),this.$off.replaceWith(a),this.$on=b,this.$off=a,this.options.inverse=!this.options.inverse,this.$element}},{key:"onColor",value:function(a){return void 0===a?this.options.onColor:(this.options.onColor&&this.$on.removeClass(this._getClass(this.options.onColor)),this.$on.addClass(this._getClass(a)),this.options.onColor=a,this.$element)}},{key:"offColor",value:function(a){return void 0===a?this.options.offColor:(this.options.offColor&&this.$off.removeClass(this._getClass(this.options.offColor)),this.$off.addClass(this._getClass(a)),this.options.offColor=a,this.$element)}},{key:"onText",value:function(a){return void 0===a?this.options.onText:(this.$on.html(a),this._width(),this._containerPosition(),this.options.onText=a,this.$element)}},{key:"offText",value:function(a){return void 0===a?this.options.offText:(this.$off.html(a),this._width(),this._containerPosition(),this.options.offText=a,this.$element)}},{key:"labelText",value:function(a){return void 0===a?this.options.labelText:(this.$label.html(a),this._width(),this.options.labelText=a,this.$element)}},{key:"handleWidth",value:function(a){return void 0===a?this.options.handleWidth:(this.options.handleWidth=a,this._width(),this._containerPosition(),this.$element)}},{key:"labelWidth",value:function(a){return void 0===a?this.options.labelWidth:(this.options.labelWidth=a,this._width(),this._containerPosition(),this.$element)}},{key:"baseClass",value:function(a){return this.options.baseClass}},{key:"wrapperClass",value:function(a){return void 0===a?this.options.wrapperClass:(a||(a=g.fn.switcher.defaults.wrapperClass),this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")),this.$wrapper.addClass(this._getClasses(a).join(" ")),this.options.wrapperClass=a,this.$element)}},{key:"radioAllOff",value:function(a){if(void 0===a)return this.options.radioAllOff;var b=Boolean(a);return this.options.radioAllOff===b?this.$element:(this.options.radioAllOff=b,this.$element)}},{key:"onInit",value:function(a){return void 0===a?this.options.onInit:(a||(a=g.fn.switcher.defaults.onInit),this.options.onInit=a,this.$element)}},{key:"onSwitchChange",value:function(a){return void 0===a?this.options.onSwitchChange:(a||(a=g.fn.switcher.defaults.onSwitchChange),this.options.onSwitchChange=a,this.$element)}},{key:"destroy",value:function(){var a=this.$element.closest("form");return a.length&&a.off("reset.bs.switcher").removeData("bs-switcher"),this.$container.children().not(this.$element).remove(),this.$element.unwrap().unwrap().off(".bs.switcher").removeData("bs-switcher"),this.$element}},{key:"_getElementOptions",value:function(){return{state:this.$element.is(":checked"),size:this.$element.data("size"),animate:this.$element.data("animate"),disabled:this.$element.is(":disabled"),readonly:this.$element.is("[readonly]"),indeterminate:this.$element.data("indeterminate"),inverse:this.$element.data("inverse"),radioAllOff:this.$element.data("radio-all-off"),onColor:this.$element.data("on-color"),offColor:this.$element.data("off-color"),onText:this.$element.data("on-text"),offText:this.$element.data("off-text"),labelText:this.$element.data("label-text"),handleWidth:this.$element.data("handle-width"),labelWidth:this.$element.data("label-width"),baseClass:this.$element.data("base-class"),wrapperClass:this.$element.data("wrapper-class")}}},{key:"_width",value:function(){var a=this,b=this.$on.add(this.$off).add(this.$label).css("width",""),c="auto"===this.options.handleWidth?Math.round(Math.max(this.$on.width(),this.$off.width())):this.options.handleWidth;return b.width(c),this.$label.width(function(b,d){return"auto"!==a.options.labelWidth?a.options.labelWidth:d<c?c:d}),this._handleWidth=this.$on.outerWidth(),this._labelWidth=this.$label.outerWidth(),this.$container.width(2*this._handleWidth+this._labelWidth),this.$wrapper.css("width",this._handleWidth+this._labelWidth+"px")}},{key:"_containerPosition",value:function(){var a=this,b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.state;arguments[1];this.$container.css("margin-left",function(){var c=[0,"-"+a._handleWidth+"px"];return a.options.indeterminate?"-"+a._handleWidth/2+"px":b?a.options.inverse?c[1]:c[0]:a.options.inverse?c[0]:c[1]})}},{key:"_init",value:function(){var a=this,b=function(){a.setPrevOptions(),a._width(),a._containerPosition(),setTimeout(function(){if(a.options.animate)return a.$wrapper.addClass(a._getClass("animate"))},50)};if(this.$wrapper.is(":visible"))return void b();var c=window.setInterval(function(){if(a.$wrapper.is(":visible"))return b(),window.clearInterval(c)},50)}},{key:"_elementHandlers",value:function(){var a=this;return this.$element.on({"setPreviousOptions.bs.switcher":this.setPrevOptions.bind(this),"previousState.bs.switcher":function(){a.options=a.prevOptions,a.options.indeterminate&&a.$wrapper.addClass(a._getClass("indeterminate")),a.$element.prop("checked",a.options.state).trigger("change.bs.switcher",!0)},"change.bs.switcher":function(b,c){b.preventDefault(),b.stopImmediatePropagation();var d=a.$element.is(":checked");a._containerPosition(d),d!==a.options.state&&(a.options.state=d,a.$wrapper.toggleClass(a._getClass("off")).toggleClass(a._getClass("on")),c||(a.$element.is(":radio")&&g('[name="'+a.$element.attr("name")+'"]').not(a.$element).prop("checked",!1).trigger("change.bs.switcher",!0),a.$element.trigger("switchChange.bs.switcher",[d])))},"focus.bs.switcher":function(b){b.preventDefault(),a.$wrapper.addClass(a._getClass("focused"))},"blur.bs.switcher":function(b){b.preventDefault(),a.$wrapper.removeClass(a._getClass("focused"))},"keydown.bs.switcher":function(b){!b.which||a.options.disabled||a.options.readonly||37!==b.which&&39!==b.which||(b.preventDefault(),b.stopImmediatePropagation(),a.state(39===b.which))}})}},{key:"_handleHandlers",value:function(){var a=this;return this.$on.on("click.bs.switcher",function(b){return b.preventDefault(),b.stopPropagation(),a.state(!1),a.$element.trigger("focus.bs.switcher")}),this.$off.on("click.bs.switcher",function(b){return b.preventDefault(),b.stopPropagation(),a.state(!0),a.$element.trigger("focus.bs.switcher")})}},{key:"_labelHandlers",value:function(){var a=this,b={click:function(a){a.stopPropagation()},"mousedown.bs.switcher touchstart.bs.switcher":function(b){a._dragStart||a.options.disabled||a.options.readonly||(b.preventDefault(),b.stopPropagation(),a._dragStart=(b.pageX||b.originalEvent.touches[0].pageX)-parseInt(a.$container.css("margin-left"),10),a.options.animate&&a.$wrapper.removeClass(a._getClass("animate")),a.$element.trigger("focus.bs.switcher"))},"mousemove.bs.switcher touchmove.bs.switcher":function(b){if(null!=a._dragStart){var c=(b.pageX||b.originalEvent.touches[0].pageX)-a._dragStart;b.preventDefault(),c<-a._handleWidth||c>0||(a._dragEnd=c,a.$container.css("margin-left",a._dragEnd+"px"))}},"mouseup.bs.switcher touchend.bs.switcher":function(b){if(a._dragStart){if(b.preventDefault(),a.options.animate&&a.$wrapper.addClass(a._getClass("animate")),a._dragEnd){var c=a._dragEnd>-a._handleWidth/2;a._dragEnd=!1,a.state(a.options.inverse?!c:c)}else a.state(!a.options.state);a._dragStart=!1}},"mouseleave.bs.switcher":function(){a.$label.trigger("mouseup.bs.switcher")}};this.$label.on(b)}},{key:"_externalLabelHandler",value:function(){var a=this,b=this.$element.closest("label");b.on("click",function(c){c.preventDefault(),c.stopImmediatePropagation(),c.target===b[0]&&a.toggleState()})}},{key:"_formHandler",value:function(){var a=this.$element.closest("form");a.data("bs-switcher")||a.on("reset.bs.switcher",function(){window.setTimeout(function(){a.find("input").filter(function(){return g(this).data("bs-switcher")}).each(function(){return g(this).switcher("state",this.checked)})},1)}).data("bs-switcher",!0)}},{key:"_getClass",value:function(a){return this.options.baseClass+"-"+a}},{key:"_getClasses",value:function(a){return g.isArray(a)?a.map(this._getClass.bind(this)):[this._getClass(a)]}}]),a}();g.fn.switcher=function(a){function b(b,c){var e=g(c),f=e.data("bs-switcher"),i=f||new h(c,a);return f||e.data("bs-switcher",i),"string"==typeof a?i[a].apply(i,d):b}for(var c=arguments.length,d=Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];return Array.prototype.reduce.call(this,b,this)},g.fn.switcher.Constructor=h,g.fn.switcher.defaults={state:!0,size:null,animate:!0,disabled:!1,readonly:!1,indeterminate:!1,inverse:!1,radioAllOff:!1,onColor:"primary",offColor:"default",onText:"ON",offText:"OFF",labelText:"&nbsp",handleWidth:"auto",labelWidth:"auto",baseClass:"bootstrap-switch",wrapperClass:"wrapper",onInit:function(){},onSwitchChange:function(){}}});