(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(t,e,n){"use strict";n(14);e.a=function(t,e){var n=function(t){return window.WKWebViewJavascriptBridge?t(window.WKWebViewJavascriptBridge):window.WKWVJBCallbacks?window.WKWVJBCallbacks.push(t):(window.WKWVJBCallbacks=[t],void window.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null))};e("getCurrentOS",(function(){var e="";switch(!0){case/iPhone|iPad|iPod/i.test(window.navigator.userAgent):t.store.commit("setCurrentOS","iOS"),e="iOS";break;case/Android/i.test(window.navigator.userAgent):t.store.commit("setCurrentOS","Android"),e="Android";break;default:t.store.commit("setCurrentOS","others"),e="others"}return e})),e("getLocation",(function(){var e=t.store.state.currentOS;switch(!0){case"iOS"===e:n((function(t){t.callHandler("getLocation",null)}));break;case"Android"===e&&void 0!==window.pxpayWeb:window.pxpayWeb.getLocation();break;default:alert("非手機環境，無功能")}})),e("putLocation",(function(){var e=t.store.state.currentOS;switch(!0){case"iOS"===e:n((function(e){e.callHandler("putLocation",null,(function(e){var n={lat:e.latitude,lng:e.longitude};t.store.commit("setCurrentLocation",n)}))}));break;case"Android"===e&&void 0!==window.pxpayWeb:window.pxpayWeb.putLocation((function(e){var n={lat:e.latitude,lng:e.longitude};t.store.commit("setCurrentLocation",n)}));break;default:navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var n={lat:e.coords.latitude,lng:e.coords.longitude};t.store.commit("setCurrentLocation",n)}))}})),e("startPayment",(function(){var e=t.store.state.currentOS;switch(!0){case"iOS"===e:n((function(t){t.callHandler("startPayment",null,(function(t){console.log(t)}))}));break;case"Android"===e&&window.pxpayWeb:window.pxpayWeb.startPayment((function(t){console.log(t)}));break;default:alert("非手機環境，無法執行")}})),e("getPayload",(function(){return new Promise((function(e,o){var r=t.store.state.currentOS;switch(!0){case"iOS"===r&&void 0!==window.webkit:n((function(t){t.callHandler("getPayload","",(function(t){e((function(){return t}))}))}));break;case"Android"===r&&void 0!==window.pxpayWeb:window.pxpayWeb.getPayload((function(t){e((function(){return t}))}));break;default:e((function(){return"非手機平台，無資料"}))}}))})),e("closeWebView",(function(){var e=t.store.state.currentOS;switch(!0){case"iOS"===e:n((function(t){t.callHandler("closeWebView",null)}));break;case"Android"===e&&void 0!==window.pxpayWeb:window.pxpayWeb.closeWebView();break;default:alert("非手機環境，無法關閉Webview")}})),e("shareMessage",(function(e){var o=t.store.state.currentOS;switch(!0){case"iOS"===o:n((function(t){t.callHandler("shareMessage",e)}));break;case"Android"===o&&void 0!==window.pxpayWeb:window.pxpayWeb.shareMessage(e);break;default:navigator.share(e)}}))}},165:function(t,e,n){n(166),t.exports=n(167)},214:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"actions",(function(){return c})),n.d(e,"getters",(function(){return l}));var o=function(){return{stagedPageUrl:"",showAlert:!1,alertMessage:"",pageTitle:"",navbarRight:"",navbarLeft:"",navbarBack:void 0,showBack:!0,backHome:!1,currentOS:"",currentLocation:{}}},r={toggleShowAlert:function(t,e){if(!0==("boolean"==typeof e))t.showAlert=e;else t.showAlert=!1},addAlertMessage:function(t,e){t.alertMessage=e},setPageTitle:function(t,title){t.pageTitle=title},setNavbarLeft:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!0==(null==e))t.navbarLeft=null;else t.navbarLeft={icon:e.icon||void 0,url:e.url||void 0}},setNavbarRight:function(t,e){if(!0==(null==e))t.navbarRight=null;else t.navbarRight={icon:e.icon?e.icon:void 0,url:e.url?e.url:void 0}},setNavbarBack:function(t,e){t.navbarBack=e},setShowBack:function(t,e){t.showBack=e},setNavbarShowBack:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.showBack=e},setNavbarBackHome:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.backHome=e},setCurrentOS:function(t,e){t.currentOS=e},setCurrentLocation:function(t,e){t.currentLocation=e}},c={},l={}}},[[165,5,1,6]]]);