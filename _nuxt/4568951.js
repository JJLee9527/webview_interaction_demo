(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{307:function(e,t,n){"use strict";n.r(t);n(21),n(14),n(18),n(29),n(19),n(30);var o=n(7),r=(n(57),n(70),n(48),n(58),n(140),n(92),n(33));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={components:{},data:function(){return{pxpayToken:"",message:""}},computed:l(l({},Object(r.d)(["currentOS"])),Object(r.d)("member",["signinState"])),created:function(){this.$getCurrentOS()},mounted:function(){this.message="準備登入",this.memberAuth()},methods:l(l({},Object(r.b)("member",["pxgroupLogin"])),{},{memberAuth:function(){switch(this.currentOS){case"Android":case"iOS":this.message="登入中...",this.memberAuthMobile();break;case"others":this.message="登入中...",this.memberAuthDesktop();break;default:this.message="好像遇到一點錯誤"}},memberAuthDesktop:function(){var e,param=this.$route.hash;if(""===param||!param.includes("access_token"))return this.message="未帶入登入資訊，無法登入圈團會員",void this.lazyClosing();this.message="初始化登入資訊",this.pxpayToken=param.split("&")[0].replace("#access_token=",""),e={pxpayAccessToken:this.pxpayToken,payload:null},this.memberLoginCombo(e)},memberAuthMobile:function(){var e=this,t={};this.$getPayload().then((function(n){switch(n){case""!==n:e.message="取得payload: "+n,t={payload:n,pxpayAccessToken:""},e.memberLoginCombo(t);break;default:e.message="請於PXPay中操作方可登入",e.lazyClosing()}})).catch((function(t){e.message=t+"pxpay functions:",e.lazyClosing()}))},memberLoginCombo:function(e){var t=this;this.pxgroupLogin(e).then((function(e){switch(!0){case"0000"===e.code:t.message="成功登入，即將前往商品列表",t.lazyClosing();break;case"3060"===e.code:t.message="PXPay token 過期，可繼續使用",t.lazyClosing()}}))},detectSigninState:function(){switch(!0){case!0===this.signinState:this.message="有登入資訊，即將前往商品頁",this.lazyClosing();break;default:this.message="無登入資訊，即將前往商品頁",this.lazyClosing()}},lazyClosing:function(){var e=this;setTimeout((function(){e.$emit("close")}),3e3)}})},h=n(12),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-screen h-screen bg-white fixed top-0 left-0"},[n("div",{staticClass:"loading-animation mt-40 mb-8"},[n("div",{directives:[{name:"gsap",rawName:"v-gsap.to",value:{rotation:720,duration:4,ease:"elastic.inOut(1, 0.3)"},expression:"{\n        rotation: 720,\n        duration: 4,\n        ease: 'elastic.inOut(1, 0.3)',\n      }",modifiers:{to:!0}}],staticClass:"block w-12 h-12 bg-secondary-indigo-600 rounded-lg mx-auto"})]),e._v(" "),n("div",{staticClass:"messages w-7/10 mx-auto text-center"},[n("p",[e._v("Current OS: "+e._s(e.currentOS))]),e._v(" "),n("p",[e._v(e._s(e.message))])])])}),[],!1,null,null,null);t.default=component.exports}}]);