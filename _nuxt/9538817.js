(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{323:function(t,n,e){"use strict";e.r(n);e(302);var o=e(311),m=e.n(o),r={props:{animationData:{type:[Object,String],required:!0},loop:{type:[Boolean,Number],default:!1},autoPlay:{type:Boolean,default:!0},renderer:{type:String,default:"svg"},speed:{type:Number,default:1}},data:function(){return{anim:null}},watch:{animationData:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this,n={container:this.$refs.animation,renderer:this.renderer,loop:this.loop,autoplay:this.autoPlay,animationData:this.animationData};this.anim=m.a.loadAnimation(n),this.anim.addEventListener("loopComplete",(function(){t.$emit("loopComplete",t.anim)})),this.anim.addEventListener("complete",(function(){t.$emit("complete",t.anim)})),this.anim.addEventListener("enterFrame",(function(){t.$emit("enterFrame",t.anim)}))},play:function(){this.anim&&this.anim.play()},stop:function(){this.anim&&this.anim.stop()},pause:function(){this.anim&&this.anim.pause()},goToAndPlay:function(t,n){this.anim&&this.anim.goToAndPlay(t,n)},destroy:function(){this.anim&&this.anim.destroy()}}},l=e(12),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"animation"})}),[],!1,null,null,null);n.default=component.exports}}]);