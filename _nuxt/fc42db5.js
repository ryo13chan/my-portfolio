(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{236:function(e,t,n){var content=n(242);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("0477f79e",content,!0,{sourceMap:!1})},237:function(e,t,n){"use strict";n.r(t);n(238);var r=n(1).a.extend({props:{level:{type:Number,required:!1,default:1},text:{type:String,required:!1,default:"heading"}},methods:{headingTag:function(e){return"h".concat(e)}}}),o=(n(241),n(8)),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)(this.headingTag(this.level),{tag:"component",staticClass:"heading",class:"heading_level"+this.level},[this._v("\n  "+this._s(this.text)+"\n")])}),[],!1,null,"3aa31abc",null);t.default=component.exports},238:function(e,t,n){"use strict";var r=n(13),o=n(4),c=n(68),l=n(16),f=n(14),d=n(33),h=n(163),v=n(67),m=n(5),x=n(69),N=n(105).f,_=n(40).f,I=n(19).f,E=n(239).trim,w=o.Number,A=w.prototype,S="Number"==d(x(A)),T=function(e){var t,n,r,o,c,l,f,code,d=v(e,!1);if("string"==typeof d&&d.length>2)if(43===(t=(d=E(d)).charCodeAt(0))||45===t){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c("Number",!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var y,C=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof C&&(S?m((function(){A.valueOf.call(n)})):"Number"!=d(n))?h(new w(T(t)),n,C):T(t)},z=r?N(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;z.length>F;F++)f(w,y=z[F])&&!f(C,y)&&I(C,y,_(w,y));C.prototype=A,A.constructor=C,l(o,"Number",C)}},239:function(e,t,n){var r=n(15),o="["+n(240)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},240:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},241:function(e,t,n){"use strict";n(236)},242:function(e,t,n){(t=n(26)(!1)).push([e.i,".heading[data-v-3aa31abc]{color:#6d6e70}.heading_level1[data-v-3aa31abc]{font-size:2.5rem;font-weight:700}.heading_level2[data-v-3aa31abc]{font-size:2rem;border-bottom:4px solid #7cc7e8}.heading_level2[data-v-3aa31abc],.heading_level3[data-v-3aa31abc]{font-weight:700;padding-bottom:10px;text-align:center}.heading_level3[data-v-3aa31abc]{font-size:1.75rem;border-bottom:1.5px solid #7cc7e8}.heading_level4[data-v-3aa31abc]{font-size:1.5rem;font-weight:700;border-left:2px solid #7cc7e8;padding-left:6px}.heading_level5[data-v-3aa31abc]{font-size:1.25rem;font-weight:700}.heading_level6[data-v-3aa31abc]{font-size:1rem;font-weight:400}",""]),e.exports=t},245:function(e,t,n){var content=n(254);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("06940a6c",content,!0,{sourceMap:!1})},253:function(e,t,n){"use strict";n(245)},254:function(e,t,n){(t=n(26)(!1)).push([e.i,".content[data-v-10ac4422]{max-width:1230px;padding:20px 15px;margin-right:auto;margin-left:auto}",""]),e.exports=t},263:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(237),c=r.a.extend({components:{AppHeading:o.default},data:function(){return{}}}),l=(n(253),n(8)),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",[t("article",[t("section",{staticClass:"content"},[t("AppHeading",{attrs:{level:2,text:"Works"}})],1)])])}),[],!1,null,"10ac4422",null);t.default=component.exports;installComponents(component,{AppHeading:n(237).default})}}]);