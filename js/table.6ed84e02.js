(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["table"],{"3f0e":function(n,t,e){"use strict";e.r(t);var u=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"about"},[e("div",{staticClass:"main"},[e("div",n._l(n.numbers,(function(t){return e("div",{key:t},[e("div",[n._v(n._s(t)+" x "+n._s(n.number)+" = "+n._s(n.number*t))])])})),0)]),e("div",{staticClass:"countdown"},[e("div",{staticClass:"number"},[n._v(n._s(n.countDown))])])])},i=[],s={data:function(){return{numbers:[1,2,3,4,5,6,7,8,9],number:0,countDown:20}},methods:{countDownTimer:function(){var n=this;this.countDown>0&&setTimeout((function(){n.countDown-=1,n.countDownTimer()}),1e3),0===this.countDown&&this.$router.push("/exercice/".concat(this.number))}},mounted:function(){this.number=this.$route.params.id,this.countDownTimer()}},o=s,c=(e("c503"),e("2877")),r=Object(c["a"])(o,u,i,!1,null,"5f4efe0c",null);t["default"]=r.exports},c503:function(n,t,e){"use strict";e("e6f5")},e6f5:function(n,t,e){}}]);
//# sourceMappingURL=table.6ed84e02.js.map