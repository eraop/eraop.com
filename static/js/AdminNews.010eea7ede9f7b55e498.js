webpackJsonp([12],{wnDH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("zL8q"),i=n.MessageBox.confirm,l=(n.MessageBox,n.MessageBox.alert,n.Message),o={name:"AdminNews",data:function(){return{total:0,pageSize:this.PAGE_SIZE,pageIndex:1,list:[],loading:!0,multipleSelection:[]}},components:{ElRow:n.Row,ElCol:n.Col,ElTable:n.Table,ElTableColumn:n.TableColumn,ElButton:n.Button,ElMessageBox:n.MessageBox,ElMessage:n.Message,ElLoading:n.Loading},created:function(){this.getPage()},methods:{pageChange:function(e){this.pageIndex=e,this.getPage(),document.body.scrollTop=0,document.documentElement.scrollTop=0},getPage:function(){var e=this;return this.loading=!0,this.$http.get("/api/news/list",{params:{pageIndex:this.pageIndex,pageSize:this.pageSize}}).then(function(t){200==t.status&&(e.list=t.data.items,e.total=t.data.total,e.pageSize=t.data.pageSize,e.pageIndex=t.data.pageIndex,setTimeout(function(){e.loading=!1},1e3))})},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},handleEdit:function(e){this.$router.push({name:"admin_news_edit",params:{id:e}})},handleDelete:function(e,t){var a=this;i("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$http.get("/api/admin/news/deleteOne?id="+e).then(function(e){200==e.status?(a.getPage(),l({type:"success",message:"删除成功"})):l.error("删除失败，稍后再试")})})},addNews:function(){this.$router.push({name:"admin_news_add"})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.addNews}},[a("i",{staticClass:"fa fa-plus"}),e._v(" 新增")])]),e._v(" "),a("cw-loading",{attrs:{loading:e.loading}}),e._v(" "),a("el-table",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{label:"发布时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatTime")(t.row.create_date)))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"姓名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.row.id)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.row.id,a)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticStyle:{"margin-top":"20px"}},[a("cw-pager",{attrs:{total:e.total,"current-page":e.pageIndex,"page-size":e.pageSize},on:{"page-change":e.pageChange}})],1),e._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},staticRenderFns:[]},r=a("VU/8")(o,s,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=AdminNews.010eea7ede9f7b55e498.js.map