webpackJsonp([6],{bvw2:function(t,e){},uuvY:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"NewsDetail",data:function(){return{model:""}},created:function(){var t=this;return this.$http.get("/api/news/detail/"+this.$route.params.id).then(function(e){200==e.status&&(""!==e.data?(t.model=e.data,document.title=t.model.title+" | Eraop"):t.$router.push({name:"notfound"}))})}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mainNewsDetail"}},[a("div",{staticClass:"inner-padding"},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-container-head"},[a("h3",{staticClass:"news-detail-title text-dark bold"},[t._v(t._s(this.$common.isCN()?t.model.title:t.model.title_key))])]),t._v(" "),a("div",{staticClass:"section-container-content"},[a("p",[t._v("项目工期："),a("span",[t._v(t._s(t.model.period))])]),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.model.content)}})]),t._v(" "),a("div",{staticClass:"clearfix"})])])])},staticRenderFns:[]};var s=a("VU/8")(n,i,!1,function(t){a("bvw2")},"data-v-5b7bbba0",null);e.default=s.exports}});
//# sourceMappingURL=NewsDetail.fececc066dc91bad4b82.js.map