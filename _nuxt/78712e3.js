(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{254:function(t,e,n){var content=n(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("213291c6",content,!0,{sourceMap:!1})},255:function(t,e,n){"use strict";n.r(e);n(168);var r=n(1).a.extend({props:{level:{type:Number,required:!1,default:1},text:{type:String,required:!1,default:"heading"}},methods:{headingTag:function(t){return"h".concat(t)}}}),o=(n(258),n(8)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)(this.headingTag(this.level),{tag:"component",staticClass:"heading",class:"heading_level"+this.level},[this._v("\n  "+this._s(this.text)+"\n")])}),[],!1,null,"d1446b58",null);e.default=component.exports},256:function(t,e,n){var content=n(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0a1cfa89",content,!0,{sourceMap:!1})},257:function(t,e,n){var content=n(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("3bc31d52",content,!0,{sourceMap:!1})},258:function(t,e,n){"use strict";n(254)},259:function(t,e,n){(e=n(19)(!1)).push([t.i,".heading[data-v-d1446b58]{color:#6d6e70}.heading_level1[data-v-d1446b58]{font-size:2.5rem;font-weight:700}.heading_level2[data-v-d1446b58]{font-size:2rem;border-bottom:4px solid #7cc7e8}.heading_level2[data-v-d1446b58],.heading_level3[data-v-d1446b58]{font-weight:700;padding-bottom:10px;text-align:center}.heading_level3[data-v-d1446b58]{font-size:1.75rem;border-bottom:1.5px solid #7cc7e8}.heading_level4[data-v-d1446b58]{font-size:1.5rem;font-weight:700;border-left:2px solid #7cc7e8;padding-left:6px;margin-top:1rem;margin-bottom:1rem}.heading_level5[data-v-d1446b58]{font-size:1.25rem;font-weight:700}.heading_level6[data-v-d1446b58]{font-size:1rem;font-weight:400}",""]),t.exports=e},260:function(t,e,n){"use strict";n(256)},261:function(t,e,n){(e=n(19)(!1)).push([t.i,".breadcrumb__items[data-v-404bca43]{display:flex;list-style:none;padding:0}.breadcrumb__link[data-v-404bca43]{color:#7cc7e8;text-decoration:none}.breadcrumb__link[data-v-404bca43]:hover{text-decoration:underline}.breadcrumb__delimiter[data-v-404bca43]{margin-right:.5rem;margin-left:.5rem}",""]),t.exports=e},262:function(t,e,n){"use strict";n(257)},263:function(t,e,n){(e=n(19)(!1)).push([t.i,".page-links[data-v-2a085fe9]{display:flex;justify-content:space-between;padding:20px 15px;color:#7cc7e8}.page-links__link[data-v-2a085fe9]{color:#7cc7e8;text-decoration:none}.page-links__link[data-v-2a085fe9]:hover{text-decoration:underline}",""]),t.exports=e},264:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({props:{items:{type:Array,required:!0},delimiter:{type:String,default:">"}},data:function(){return{}},methods:{showDelimiter:function(t){return t!==this.items.length-1}}}),o=(n(260),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb"},[n("ul",{staticClass:"breadcrumb__items"},t._l(t.items,(function(e,r){return n("li",{key:e.text,staticClass:"breadcrumb__item"},[e.to?n("nuxt-link",{staticClass:"breadcrumb__link",attrs:{to:e.to}},[n("span",{staticClass:"breadcrumb__text"},[t._v(t._s(e.text))])]):e.href?n("a",{staticClass:"breadcrumb__link",attrs:{href:e.href,target:e.target}},[n("span",{staticClass:"breadcrumb__text"},[t._v(t._s(e.text))])]):n("span",{staticClass:"breadcrumb__text"},[t._v(t._s(e.text))]),t._v(" "),t.showDelimiter(r)?n("span",{staticClass:"breadcrumb__delimiter"},[t._v(t._s(t.delimiter))]):t._e()],1)})),0)])}),[],!1,null,"404bca43",null);e.default=component.exports},265:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({props:{prev:{type:Object,required:!1,default:null},next:{type:Object,required:!1,default:null}}}),o=(n(262),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-links"},[n("div",{staticClass:"page-links__item page-links__item--prev"},[t.prev?n("nuxt-link",{staticClass:"page-links__link page-links__link--prev",attrs:{to:t.prev.to}},[n("font-awesome-icon",{staticClass:"page-links__icon",attrs:{icon:["fas","arrow-left"]}}),t._v(" "),n("span",{staticClass:"page-links__title"},[t._v(t._s(t.prev.title))])],1):t._e()],1),t._v(" "),n("div",{staticClass:"page-links__item page-links__item--next"},[t.next?n("nuxt-link",{staticClass:"page-links__link page-links__link--next",attrs:{to:t.next.to}},[n("span",{staticClass:"page-links__title"},[t._v(t._s(t.next.title))]),t._v(" "),n("font-awesome-icon",{staticClass:"page-links__icon",attrs:{icon:["fas","arrow-right"]}})],1):t._e()],1)]):t._e()}),[],!1,null,"2a085fe9",null);e.default=component.exports},270:function(t,e,n){var content=n(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("af8982c8",content,!0,{sourceMap:!1})},275:function(t,e,n){"use strict";n(270)},276:function(t,e,n){(e=n(19)(!1)).push([t.i,".accordion__button[data-v-4c780024]{display:block;position:relative;width:100%;padding:10px 40px 10px 15px;text-align:left;font-size:1rem;cursor:pointer}.accordion__icon[data-v-4c780024]{position:absolute;top:0;right:0;padding:10px}.accordion__body[data-v-4c780024]{border:1px solid #d4d4d5;padding:15px}.accordion__body--transition[data-v-4c780024]{transition:height .4s ease-in-out;overflow:hidden}",""]),t.exports=e},277:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({props:{title:{type:String,required:!0},titleAlign:{type:String,required:!1,default:"left"},fade:{type:Boolean,required:!1,default:!1}},data:function(){return{isOpen:!1}},methods:{toggleAccordion:function(){this.isOpen=!this.isOpen},beforeEnter:function(t){this.fade&&(t.style.height="0")},enter:function(t){this.fade&&(t.style.height=t.scrollHeight+"px")},beforeLeave:function(t){this.fade&&(t.style.height=t.scrollHeight+"px")},leave:function(t){this.fade&&(t.style.height="0")}}}),o=(n(275),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"accordion"},[n("div",{staticClass:"accordion__title"},[n("button",{staticClass:"accordion__button",style:{"text-align":t.titleAlign},attrs:{type:"button"},on:{click:t.toggleAccordion}},[t._v("\n      "+t._s(t.title)+"\n      "),n("font-awesome-icon",{staticClass:"accordion__icon",attrs:{icon:t.isOpen?["fas","caret-up"]:["fas","caret-down"]}})],1)]),t._v(" "),n("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,"before-leave":t.beforeLeave,leave:t.leave}},[t.isOpen?n("div",{staticClass:"accordion__body",class:{"accordion__body--transition":t.fade}},[t._t("body")],2):t._e()])],1)}),[],!1,null,"4c780024",null);e.default=component.exports},282:function(t,e,n){var content=n(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("f2cd9776",content,!0,{sourceMap:!1})},303:function(t,e,n){"use strict";n(282)},304:function(t,e,n){(e=n(19)(!1)).push([t.i,".content[data-v-be3d152e]{max-width:1230px;padding:20px 15px;margin-right:auto;margin-left:auto}.content__text[data-v-be3d152e]{font-size:1.5rem}.content__area[data-v-be3d152e]{padding:2rem;border:1px solid #d4d4d5}",""]),t.exports=e},329:function(t,e,n){"use strict";n.r(e);n(18),n(74);var r=n(1).a.extend({layout:"components",data:function(){return{showFlashMessage:!0,breadcrumbItems:[{to:"/works",text:"作品集"},{to:"/works/components",text:"コンポーネント集"},{text:"アコーディオン"}]}},methods:{alert:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(text){alert(text)}))}}),o=(n(303),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("article",[n("section",{staticClass:"content"},[n("AppBreadcrumb",{attrs:{items:t.breadcrumbItems}}),t._v(" "),n("AppHeading",{staticClass:"content__title",attrs:{level:2,text:"アコーディオン"}}),t._v(" "),n("p",{staticClass:"content__text"},[t._v("アコーディオンの一覧です。")]),t._v(" "),n("section",[n("AppHeading",{attrs:{level:3,text:"基本形"}}),t._v(" "),n("div",{staticClass:"content__area"},[n("AppAccordion",{attrs:{title:"アコーディオン"},scopedSlots:t._u([{key:"body",fn:function(){return[n("div",[n("p",[t._v("アコーディオン中身")]),t._v(" "),n("p",[t._v("アコーディオン中身")]),t._v(" "),n("p",[t._v("アコーディオン中身")])])]},proxy:!0}])})],1)],1),t._v(" "),n("section",[n("AppHeading",{attrs:{level:3,text:"タイトルの表示位置"}}),t._v(" "),n("div",{staticClass:"content__area"},[n("AppAccordion",{attrs:{title:"タイトル中央寄せ","title-align":"center"},scopedSlots:t._u([{key:"body",fn:function(){return[n("div",[n("p",[t._v("アコーディオン中身")]),t._v(" "),n("p",[t._v("アコーディオン中身")]),t._v(" "),n("p",[t._v("アコーディオン中身")])])]},proxy:!0}])})],1)],1),t._v(" "),n("section",[n("AppHeading",{attrs:{level:3,text:"表示アニメーション"}}),t._v(" "),n("div",{staticClass:"content__area"},[n("AppAccordion",{attrs:{title:"ふわっと表示",fade:""},scopedSlots:t._u([{key:"body",fn:function(){return[n("div",[n("p",[t._v("アコーディオン中身")]),t._v(" "),n("p",[t._v("アコーディオン中身")]),t._v(" "),n("p",[t._v("アコーディオン中身")])])]},proxy:!0}])})],1)],1)],1),t._v(" "),n("section",[n("PageLinks",{attrs:{prev:{title:"コンポーネント集",to:"/works/components"},next:{title:"アバター",to:"/works/components/avatar"}}})],1)])])}),[],!1,null,"be3d152e",null);e.default=component.exports;installComponents(component,{AppBreadcrumb:n(264).default,AppHeading:n(255).default,AppAccordion:n(277).default,PageLinks:n(265).default})}}]);