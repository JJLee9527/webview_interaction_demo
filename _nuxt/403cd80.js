(window.webpackJsonp=window.webpackJsonp||[]).push([[40,6],{308:function(t,e,n){"use strict";var o=n(3),r=n(70).find,c=n(141),l="find",d=!0;l in[]&&Array(1).find((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},327:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALiSURBVHgB7dq9cRpRFEDhJ49nIMMZHcgZZFYkOkAd0IFcgdwNqkCEZCizIqsDOjAoIZN9V17PsoP5saTknvMl7KAZJffwePvYs/X66bkI60MRmgHAGQCcAcAZAJwBwBkAnAHAGQCcAcAZAJwBwBkAnAHAGQCcAcAZAJwBwBkAnAHAGQCcAcAZAJwBwBkAnAHAGQCcAcAZAJwBwBkAnAHAGQCcAcAZAJwBwBkAnAHAGQCcAcAZAJwBwBkAnAHAGQCcAcAZAJwBwBkAnAGcYLX6WW5vp9VrFgZwpBj6dDoty+WyzGazksXHkszj448yn8/LZrMpr3Fz8+3vdT381WpVer1eGY/HJYt0K8BisXj18Juaww+TyeR3BJ9KFulWgHpQzU/w//+v7eGHTMMP7gH+ob3sZ2UAO7SHH8t+VgbQsmv42Zb9JgNooA0/GMAfxOGHdHcBu9RnA51Op4xGozIYDLf+Th1+SB9ADL8+uYvzgfq6joA8/JA6gObwLy9H1evDw/fS7/era/rwQ9oA2sOPpT8Mh4NqyA7/RdpN4K7hB4e/LfVXQHv4oX28G6/xC99g8BLAoQ1jNmkDODT8+OSfn3+u9gTNn3f3bRgzShvAoeHXy3632y3394utCOoNY/v9jBDnAPu+8+tQYtihvXJkjyB9AMds+GLgFxdfqutOp7v1fqjjyChdAPue5Nm3228Ovil7BGlvA9/yVq+9n8gkZQDe5x8vXQAO/zRn6/XTc0li1zN8bymCur7+WjJJswK89/DjvKA+H8gkzV1A3Ku77J8uzVdArAB3d7NydTV2+CdItQfQ6XwmEM4A4AwAzgDgDADOAOAMAM4A4AwAzgDgDADOAOAMAM4A4AwAzgDgDADOAOAMAM4A4AwAzgDgDADOAOAMAM4A4AwAzgDgDADOAOAMAM4A4AwAzgDgDADOAOAMAM4A4AwAzgDgDADOAOAMAM4A4AwAzgDgDADOAOAMAO4XfS5sZDUBo1UAAAAASUVORK5CYII="},330:function(t,e,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("1b06282a",content,!0,{sourceMap:!1})},333:function(t,e,n){"use strict";n.r(e);var o={props:{photo:{type:String||Object,required:!0,default:function(){return n(327)}},name:{type:String,required:!1,default:"照片"},followed:{type:Boolean,required:!1,default:!1}}},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"photo relative"},[n("img",{staticClass:"w-full h-full rounded-full",attrs:{src:t.photo,alt:t.name}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.followed,expression:"followed"}],staticClass:"\n      w-4\n      h-4\n      bg-white\n      rounded-full\n      shadow-lv1\n      absolute\n      right-0\n      bottom-0\n      flex\n      justify-center\n      items-center\n    "},[n("i",{staticClass:"icon icon-heart_solid text-xs text-secondary-indigo-600"})])])}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,n){"use strict";n(330)},341:function(t,e,n){var o=n(47)((function(i){return i[1]}));o.push([t.i,".swiper-container{\n  overflow:visible\n}\n.swiper-slide{\n  width:auto\n}",""]),o.locals={},t.exports=o},344:function(t,e,n){"use strict";n.r(e);n(21),n(14),n(18),n(29),n(19),n(30);var o=n(118);var r=n(178),c=n(87);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(r.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(7),A=(n(35),n(308),n(51),n(212),n(13),n(59),n(31));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{},data:function(){return{pageTitle:"門市商品",initiatorSwiperOptions:{loop:!1,slidesPerView:"auto",spaceBetween:8},activeIndex:0,groups:[],initiators:[],filteredInitiators:[],storeInfo:{},beloved:!1,storeAttentions:[],initiatorAttentions:[]}},head:function(){return{titleTemplate:this.pageTitle,meta:[{hid:this.$route.name,name:this.pageTitle,content:"description"}]}},computed:v(v(v({},Object(A.d)("store",{storeSelected:"storeSelected",storeStoreInfo:"storeInfo"})),Object(A.d)("member",["signinState"])),Object(A.d)("groups",["groupsByStore"])),created:function(){this.setStoreData(),this.validateRefreshToken()},mounted:function(){this.$setNavbarNew(this.pageTitle,null,{icon:"icon-user-circle",url:"/member"})},methods:v(v(v(v({onCardClicked:function(){}},Object(A.b)("groups",["getGroupsByStore"])),Object(A.b)("store",["storeInfoGet"])),Object(A.b)("member",["addMemberAttentions","validateRefreshToken","getMemberAttentions","removeMemberAttention"])),{},{setStoreData:function(){var t=this,e=this.$route.params.sid,n=localStorage.getItem("pxec.groupbuying.store.current");switch(!0){case null!=n&&JSON.parse(n).store_number===e:this.storeInfo=JSON.parse(n);break;default:this.storeInfoGet({storeNumbers:e}).then((function(e){switch(!0){case"0000"===e.code:t.storeInfo=t.storeStoreInfo[0],console.log(e.data);break;default:console.log(e)}}))}this.getGroupsByStore(e).then((function(e){switch(!0){case"0000"===e.code:t.groups=l(t.groupsByStore.group_products),t.initiators=t.groupsByStore.store_initiators,t.setAttentionData()}}))},setAttentionData:function(){var t=this;this.getMemberAttentions().then((function(e){switch(!0){case"0000"===e.code:t.storeAttentions=e.data.find((function(t){return 1===t.attention_type})).attentions,t.filterBelovedStore(),t.initiatorAttentions=e.data.find((function(t){return 2===t.attention_type})).attentions,t.filterBelovedInitiators()}}))},onButtonClicked:function(t){this.$router.push("/groups/"+t.product_id)},splicedInitiators:function(t){return t.map((function(t){return t})).splice(0,3)},filterBelovedStore:function(){var t=this.$route.params.sid,e=this.storeAttentions.find((function(e){return e.attention_id===t}));switch(!0){case null!=e:this.beloved=!0}},filterBelovedInitiators:function(){var t=this,e=[];console.log("ready to iterate");for(var n=function(i){var n=t.initiators[i],o=t.initiatorAttentions.find((function(e){return e.attention_id===t.initiators[i].initiator_id.toString()}));switch(!0){case null==o:n.followed=!1,e.push(n);break;default:n.followed=!0,e.splice(0,0,n)}},i=0;i<this.initiators.length;i++)n(i);this.filteredInitiators=e,console.log(this.filteredInitiators)},onBookmarkClicked:function(){var t=this;if(this.signinState)switch(!0){case!0===this.beloved:this.removeMemberAttention({attention_type:1,attention_id:this.$route.params.sid}).then((function(e){"0000"===e.code&&(t.beloved=!1)})).catch((function(e){t.$setAlert(e)}));break;default:this.addMemberAttentions({attention_type:1,attention_id:this.storeInfo.store_number,nick_name:"",shop_name:this.storeInfo.name,shop_address:this.storeInfo.city+this.storeInfo.area+this.storeInfo.address,picture:""}).then((function(e){"0000"===e.code&&(t.beloved=!0)})).catch((function(e){t.$setAlert(e)}))}},onInitiatorClicked:function(t){var e=t.initiator_id;switch(!0){case void 0!==e:this.$router.push("/initiator/"+e)}}})},w=(n(340),n(12)),component=Object(w.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("section",{staticClass:"store-info mobile:my-6 px-4"},[n("div",{staticClass:"wrapper flex justify-between items-end"},[n("div",{staticClass:"left"},[n("div",{staticClass:"label text-xs text-secondary-gray-500"},[t._v("團購門市")]),t._v(" "),n("div",{staticClass:"store-name text-2xl font-bold"},[t._v("\n          "+t._s(t.storeInfo.name)+"\n        ")])]),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"actions flex items-center gap-2"},[n("v-button-oval",{on:{click:function(e){return t.onBookmarkClicked()}}},[n("i",{staticClass:"text-2xl",class:{"icon-bookmark":!t.beloved,"icon-bookmark_solid":t.beloved}})]),t._v(" "),n("v-button-oval",[n("i",{staticClass:"icon icon-share text-2xl"})])],1)])])]),t._v(" "),n("section",{staticClass:"initiators mobile:mb-6 px-4"},[n("swiper",{attrs:{options:t.initiatorSwiperOptions}},t._l(t.filteredInitiators,(function(e,o){return n("swiper-slide",{key:o},[n("v-button",{staticClass:"flex flex-col items-center w-18",attrs:{variant:"transparent"},on:{click:function(n){return t.onInitiatorClicked(e)}}},[n("avatar-small",{staticClass:"w-14 h-14 mb-2",attrs:{photo:e.picture?e.picture:"/assets/img/demo-photo.png",followed:e.followed}}),t._v(" "),n("div",{staticClass:"\n              name\n              w-16\n              truncate\n              overflow-ellipsis\n              text-center text-xs text-secondary-gray-500\n            "},[t._v("\n            "+t._s(e.nick_name)+"\n          ")])],1)],1)})),1)],1),t._v(" "),n("section",{staticClass:"px-4"},[n("div",{staticClass:"wrapper flex flex-col"},t._l(t.groups,(function(e,o){return n("v-card-flat",{key:o},[n("div",{staticClass:"wrapper flex-col"},[n("div",{staticClass:"thumbnail relative w-full mb-4"},[n("div",{staticClass:"img-container-square w-full pt-10/10 relative"},[n("img",{staticClass:"\n                  absolute\n                  w-full\n                  h-full\n                  object-cover\n                  top-0\n                  left-0\n                  rounded-md\n                ",attrs:{src:e.pic_list[0],alt:e.product_name}})])]),t._v(" "),n("div",{staticClass:"content relative flex flex-col"},[n("div",{staticClass:"body flex flex-col mb-4"},[n("div",{staticClass:"title text-lg font-bold mb-2"},[t._v("\n                "+t._s(e.product_name)+"\n              ")]),t._v(" "),n("div",{staticClass:"\n                  description\n                  text-sm text-secondary-gray-500\n                  line-clamp-2\n                  max-h-10\n                  h-auto\n                  w-full\n                  mb-2\n                "},[t._v("\n                "+t._s(e.sales_focus)+"\n              ")]),t._v(" "),n("div",{staticClass:"price text-base font-bold text-secondary-money-600"},[t._v("\n                NT$"+t._s(e.price)+"\n              ")])]),t._v(" "),n("div",{staticClass:"footer flex justify-between items-center"},[n("div",{staticClass:"left text-secondary-gray-500 flex items-center"},[n("div",{staticClass:"initiators flex flex-row-reverse"},t._l(t.splicedInitiators(e.initiators),(function(t,e){return n("div",{key:"initiator-"+e,staticClass:"avatar w-4 relative flex-shrink-0 overflow-visible"},[n("v-button-oval",{attrs:{variant:"small"}},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.picture?t.picture:"/assets/img/demo-photo.png",alt:""}})])],1)})),0),t._v(" "),n("div",{staticClass:"label ml-6"},[t._v("\n                  + "+t._s(e.initiators.length-3)+"\n                ")])]),t._v(" "),n("div",{staticClass:"right"},[n("v-button",{staticClass:"\n                    bg-gradient-to-r\n                    from-gradient-blue-start\n                    to-gradient-blue-end\n                    text-xs text-white\n                    border border-secondary-indigo-500\n                    h-8\n                    px-4\n                    flex-shrink-0\n                    rounded-md\n                  ",on:{click:function(n){return t.onButtonClicked(e)}}},[t._v("立即參與")])],1)])])])])})),1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AvatarSmall:n(333).default})}}]);