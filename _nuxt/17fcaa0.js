(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{236:function(t,e,n){var content=n(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("0477f79e",content,!0,{sourceMap:!1})},237:function(t,e,n){"use strict";n.r(e);n(238);var r=n(1).a.extend({props:{level:{type:Number,required:!1,default:1},text:{type:String,required:!1,default:"heading"}},methods:{headingTag:function(t){return"h".concat(t)}}}),c=(n(241),n(8)),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)(this.headingTag(this.level),{tag:"component",staticClass:"heading",class:"heading_level"+this.level},[this._v("\n  "+this._s(this.text)+"\n")])}),[],!1,null,"3aa31abc",null);e.default=component.exports},238:function(t,e,n){"use strict";var r=n(13),c=n(4),l=n(71),o=n(16),d=n(14),f=n(33),v=n(163),_=n(70),h=n(5),x=n(72),m=n(105).f,N=n(40).f,A=n(19).f,I=n(239).trim,C=c.Number,E=C.prototype,w="Number"==f(x(E)),H=function(t){var e,n,r,c,l,o,d,code,f=_(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=I(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+f}for(o=(l=f.slice(2)).length,d=0;d<o;d++)if((code=l.charCodeAt(d))<48||code>c)return NaN;return parseInt(l,r)}return+f};if(l("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var y,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(w?h((function(){E.valueOf.call(n)})):"Number"!=f(n))?v(new C(H(e)),n,S):H(e)},T=r?m(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),z=0;T.length>z;z++)d(C,y=T[z])&&!d(S,y)&&A(S,y,N(C,y));S.prototype=E,E.constructor=S,o(c,"Number",S)}},239:function(t,e,n){var r=n(15),c="["+n(240)+"]",l=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},240:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},241:function(t,e,n){"use strict";n(236)},242:function(t,e,n){(e=n(26)(!1)).push([t.i,".heading[data-v-3aa31abc]{color:#6d6e70}.heading_level1[data-v-3aa31abc]{font-size:2.5rem;font-weight:700}.heading_level2[data-v-3aa31abc]{font-size:2rem;border-bottom:4px solid #7cc7e8}.heading_level2[data-v-3aa31abc],.heading_level3[data-v-3aa31abc]{font-weight:700;padding-bottom:10px;text-align:center}.heading_level3[data-v-3aa31abc]{font-size:1.75rem;border-bottom:1.5px solid #7cc7e8}.heading_level4[data-v-3aa31abc]{font-size:1.5rem;font-weight:700;border-left:2px solid #7cc7e8;padding-left:6px}.heading_level5[data-v-3aa31abc]{font-size:1.25rem;font-weight:700}.heading_level6[data-v-3aa31abc]{font-size:1rem;font-weight:400}",""]),t.exports=e},248:function(t,e,n){var content=n(262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("0b0cd846",content,!0,{sourceMap:!1})},261:function(t,e,n){"use strict";n(248)},262:function(t,e,n){(e=n(26)(!1)).push([t.i,".content[data-v-13ccae28]{max-width:1230px;padding:20px 15px;margin-right:auto;margin-left:auto}.content__text[data-v-13ccae28]{font-size:1.5rem}.content__area[data-v-13ccae28]{padding:2rem;border:1px solid #d4d4d5}",""]),t.exports=e},272:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(237),l=r.a.extend({layout:"components",components:{AppHeading:c.default},data:function(){return{}}}),o=(n(261),n(8)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("article",[n("section",{staticClass:"content"},[n("AppHeading",{staticClass:"content__title",attrs:{level:2,text:"見出し"}}),t._v(" "),n("p",{staticClass:"content__text"},[t._v("見出しの一覧です。")]),t._v(" "),n("AppHeading",{staticClass:"content__title",attrs:{level:3,text:"見出し（h1〜h6）"}}),t._v(" "),n("div",{staticClass:"content__area"},[n("AppHeading",{staticClass:"content__title",attrs:{level:1,text:"見出し1"}}),t._v(" "),n("AppHeading",{staticClass:"content__title",attrs:{level:2,text:"見出し2"}}),t._v(" "),n("AppHeading",{staticClass:"content__title",attrs:{level:3,text:"見出し3"}}),t._v(" "),n("AppHeading",{staticClass:"content__title",attrs:{level:4,text:"見出し4"}}),t._v(" "),n("AppHeading",{staticClass:"content__title",attrs:{level:5,text:"見出し5"}}),t._v(" "),n("AppHeading",{staticClass:"content__title",attrs:{level:6,text:"見出し6"}})],1)],1)])])}),[],!1,null,"13ccae28",null);e.default=component.exports;installComponents(component,{AppHeading:n(237).default})}}]);