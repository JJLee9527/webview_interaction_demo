(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{308:function(t,e,o){"use strict";var r=o(3),n=o(70).find,c=o(141),l="find",d=!0;l in[]&&Array(1).find((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},326:function(t,e,o){var r=o(3),n=o(211).values;r({target:"Object",stat:!0},{values:function(t){return n(t)}})},332:function(t,e,o){"use strict";o.r(e);o(21),o(14),o(18),o(29),o(19),o(30);var r=o(34),n=o(7),c=(o(326),o(308),o(13),o(59),o(35),o(92),o(31)),l=o(0),d=o.n(l);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{},props:{},data:function(){return{showCities:!0,showAreas:!1,showStores:!1,cityPicked:"",areaPicked:"",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',storePicked:null,activeIndex:0,mapCenter:{lat:25.075,lng:121.558},markerCenter:{lat:25.075,lng:121.558},mapData:[],popupMessage:null,icon:d.a.icon({iconUrl:"/assets/img/location-marker_solid.svg",iconSize:[32,37],iconAnchor:[16,37]}),popupOptions:{offset:[0,-24]}}},computed:m(m({},Object(c.d)("store",{storeCities:"cities",storeAreas:"areas",storeStores:"stores",storeSelected:"storeSelected"})),Object(c.d)(["currentOS","currentLocation"])),created:function(){var t=this;this.$getCurrentOS(),this.initMapMarkers().then((function(){t.validateSelectedStore()}))},mounted:function(){},methods:m(m({},Object(c.c)("store",["setNewStore"])),{},{onZoomUpdate:function(t){},onCenterUpdate:function(t){this.mapCenter=t,this.markerCenter.lat=t.lat,this.markerCenter.lng=t.lng},onSubmitted:function(){this.setNewStore(this.storePicked),this.$emit("selected",this.storePicked)},initMapMarkers:function(){var t=this;return this.$axios.$get("/assets/document/stores.geojson").then((function(e){t.mapData=Object.values(e.features)}))},validateSelectedStore:function(){var t=this,e={},o=0,n=0;switch(console.log(this.storeSelected),console.log(Object(r.a)(Object.values(this.mapData))),!0){case null!==this.storeSelected&&void 0!==this.storeSelected:e=this.mapData.find((function(e){return e.properties.store_number.toString()===t.storeSelected.store_number})),console.log(e),o=e[0].geometry.coordinates[1],n=e[0].geometry.coordinates[0],this.mapCenter=[o,n]}},onMarkerClicked:function(marker){console.log(marker),this.openPopup([marker.geometry.coordinates[1],marker.geometry.coordinates[0]],marker.properties.name),this.storePicked=marker.properties},openPopup:function(t,e){this.popupMessage=e,this.$refs.features.mapObject.openPopup(t)},onRelocateClicked:function(){var t=this;this.$putLocation(),setTimeout((function(){switch(!0){case!t.currentLocation==={}:case t.currentLocation.lat===t.currentLocation.lng===0:break;default:t.mapCenter={lat:t.currentLocation.lat,lng:t.currentLocation.lng}}}),800)}})},v=o(12),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"store-selection-panel"},[o("section",{staticClass:"store-selection mb-20 relative top-0 left-0 z-10"},[o("client-only",[o("l-map",{ref:"myMap",staticStyle:{height:"600px"},attrs:{zoom:16,center:t.mapCenter,options:{zoomControl:!1}},on:{"update:center":t.onCenterUpdate,"update:zoom":t.onZoomUpdate}},[o("l-tile-layer",{attrs:{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:t.attribution}}),t._v(" "),o("l-layer-group",{ref:"features"},[o("l-marker-cluster",t._l(t.mapData,(function(marker,e){return o("l-marker",{key:"mark"+e,attrs:{"lat-lng":[marker.geometry.coordinates[1],marker.geometry.coordinates[0]],icon:t.icon},on:{click:function(e){return t.onMarkerClicked(marker)}}})})),1),t._v(" "),o("l-popup",{attrs:{options:t.popupOptions}},[o("span",{staticClass:"text-base font-bold"},[t._v("\n              "+t._s(t.popupMessage))])])],1),t._v(" "),o("l-control-zoom",{attrs:{position:"topright"}}),t._v(" "),o("l-control",{attrs:{position:"topright"}},[o("v-button",{staticClass:"w-8 h-8 rounded-full bg-primary-red-800 text-white",attrs:{variant:"custom"},on:{click:function(e){return t.onRelocateClicked()}}},[o("i",{staticClass:"icon-location-marker text-white text-base"})])],1)],1)],1)],1),t._v(" "),o("section",{staticClass:"\n      select-panel\n      w-full\n      overflow-x-auto\n      fixed\n      bottom-0\n      left-0\n      right-0\n      z-20\n    "},[null!==t.storePicked?o("div",{staticClass:"wrapper flex flex-col p-4"},[o("div",{staticClass:"\n          wrapper\n          p-4\n          rounded-lg\n          border border-secondary-gray-100\n          bg-white\n          shadow-lv1\n        "},[o("div",{staticClass:"name text-lg font-bold"},[t._v("\n          "+t._s(t.storePicked.name||"")+"\n        ")]),t._v(" "),o("div",{staticClass:"address text-sm text-secondary-gray-400"},[t._v("\n          "+t._s(t.storePicked.city+t.storePicked.area+t.storePicked.address||"")+"\n        ")]),t._v(" "),o("div",{staticClass:"info text-sm text-secondary-gray-400"})])]):t._e(),t._v(" "),o("div",{staticClass:"wrapper py-4 px-4 bg-white w-full"},[o("v-button-md",{staticClass:"w-full",attrs:{disabled:null===t.storePicked},on:{click:function(e){return t.onSubmitted()}}},[t._v("確認送出")])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);