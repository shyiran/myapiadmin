(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a28db2a"],{7291:function(t,e,a){"use strict";a("7830")},7830:function(t,e,a){},a51a:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("Col",{attrs:{span:"24"}},[a("Card",[a("p",{staticStyle:{height:"32px"},attrs:{slot:"title"},slot:"title"},[a("Button",{attrs:{type:"warning",icon:"md-cloud-upload"},on:{click:t.alertUpload}},[t._v("上传")])],1),a("Alert",{attrs:{"show-icon":""}},[t._v("\n          "+t._s(t.apiInfo.info)+" | "+t._s(t.apiInfo.hash)+" | "+t._s(t.apiInfo.api_class)+"\n          "),a("Icon",{attrs:{slot:"icon",type:"ios-bulb-outline"},slot:"icon"}),a("span",{attrs:{slot:"desc"},slot:"desc"})],1),a("div",[a("Table",{attrs:{loading:t.listLoading,columns:t.columnsList,data:t.tableData,border:"","disabled-hover":""}})],1),a("div",{staticClass:"margin-top-15",staticStyle:{"text-align":"center"}},[a("Page",{attrs:{total:t.tableShow.listCount,current:t.tableShow.currentPage,"page-size":t.tableShow.pageSize,"show-elevator":"","show-sizer":"","show-total":""},on:{"on-change":t.changePage,"on-page-size-change":t.changeSize}})],1)],1)],1)],1),a("Modal",{attrs:{width:"668",styles:{top:"30px"}},on:{"on-visible-change":t.doCancel},model:{value:t.modalSetting.show,callback:function(e){t.$set(t.modalSetting,"show",e)},expression:"modalSetting.show"}},[a("p",{staticStyle:{color:"#2d8cf0"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"md-alert"}}),a("span",[t._v(t._s(t.formItem.id?"编辑":"新增")+"返回字段")])],1),a("Form",{ref:"myForm",attrs:{rules:t.ruleValidate,model:t.formItem,"label-width":80}},[a("FormItem",{attrs:{label:"字段名称",prop:"field_name"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入字段名称"},model:{value:t.formItem.field_name,callback:function(e){t.$set(t.formItem,"field_name",e)},expression:"formItem.field_name"}})],1),a("FormItem",{attrs:{label:"数据类型",prop:"data_type"}},[a("Select",{staticStyle:{width:"200px"},model:{value:t.formItem.data_type,callback:function(e){t.$set(t.formItem,"data_type",e)},expression:"formItem.data_type"}},t._l(t.tableShow.dataType,(function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(" "+t._s(e))])})),1)],1),a("FormItem",{attrs:{label:"是否必填"}},[a("RadioGroup",{model:{value:t.formItem.is_must,callback:function(e){t.$set(t.formItem,"is_must",e)},expression:"formItem.is_must"}},[a("Radio",{attrs:{label:"0"}},[t._v("不必填")]),a("Radio",{attrs:{label:"1"}},[t._v("必填")])],1)],1),"0"===t.formItem.is_must.toString()?a("FormItem",{attrs:{label:"默认值",prop:"default"}},[a("Input",{staticStyle:{width:"300px"},attrs:{disabled:""},model:{value:t.formItem.defaults,callback:function(e){t.$set(t.formItem,"defaults",e)},expression:"formItem.defaults"}}),a("Tag",{staticClass:"margin-left-5",attrs:{color:"error"}},[t._v(" 仅在字段非必填的情况下生效 ")])],1):t._e(),a("FormItem",{attrs:{label:"规则细节",prop:"range"}},[a("Input",{attrs:{disabled:"",type:"textarea",placeholder:"请输入符合要求的JSON字符串"},model:{value:t.formItem.range,callback:function(e){t.$set(t.formItem,"range",e)},expression:"formItem.range"}})],1),a("FormItem",{attrs:{label:"字段说明",prop:"info"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入字段描述"},model:{value:t.formItem.info,callback:function(e){t.$set(t.formItem,"info",e)},expression:"formItem.info"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticClass:"margin-right-10",attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),a("Button",{attrs:{type:"primary",loading:t.modalSetting.loading},on:{click:t.submit}},[t._v("确定")])],1)],1),a("Modal",{attrs:{width:"668",styles:{top:"30px"}},on:{"on-visible-change":t.doUploadCancel},model:{value:t.uploadModal.show,callback:function(e){t.$set(t.uploadModal,"show",e)},expression:"uploadModal.show"}},[a("p",{staticStyle:{color:"#2d8cf0"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"information-circled"}}),a("span",[t._v("上传返回字段")])],1),a("Form",{ref:"uploadForm",attrs:{rules:t.uploadValidate,model:t.uploadItem,"label-width":80}},[a("FormItem",{attrs:{label:"数据模板",prop:"jsonStr"}},[a("Input",{attrs:{autosize:{maxRows:10},type:"textarea",placeholder:"请务必包含code,msg,data全部返回数据"},model:{value:t.uploadItem.jsonStr,callback:function(e){t.$set(t.uploadItem,"jsonStr",e)},expression:"uploadItem.jsonStr"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticClass:"margin-right-10",attrs:{type:"text"},on:{click:t.cancelUpload}},[t._v("取消")]),a("Button",{attrs:{type:"primary",loading:t.uploadModal.loading},on:{click:t.submitUpload}},[t._v("确定")])],1)],1)],1)},n=[],i=(a("6b54"),a("a716")),s=function(t,e,a,o){return e("Button",{props:{type:"primary"},style:{margin:"0 5px"},on:{click:function(){t.formItem.id=a.id,t.formItem.field_name=a.show_name,t.formItem.data_type=a.data_type.toString(),t.formItem.defaults=a.default,t.formItem.range=a.range,t.formItem.is_must=a.is_must.toString(),t.formItem.info=a.info,t.modalSetting.show=!0,t.modalSetting.index=o}}},t.$t("edit_button"))},r=function(t,e,a,o){return e("Poptip",{props:{confirm:!0,title:"您确定要删除这条数据吗? ",transfer:!0},on:{"on-ok":function(){Object(i["b"])(a.id).then((function(e){a.loading=!1,t.tableData.splice(o,1),t.$Message.success(e.data.msg)}))}}},[e("Button",{style:{margin:"0 5px"},props:{type:"error",placement:"top",loading:a.isDeleting}},t.$t("delete_button"))])},l={name:"interface_response",data:function(){var t=this;return{hash:"",columnsList:[{title:"序号",type:"index",width:65,align:"center"},{title:"字段名称",align:"left",key:"show_name",width:200},{title:"数据类型",align:"center",width:100,render:function(e,a){var o=a.row.data_type;return e("Tag",{attrs:{color:"primary"}},t.tableShow.dataType[o])}},{title:"是否必须",align:"center",width:100,render:function(t,e){return 1===e.row.is_must?t("Tag",{attrs:{color:"error"}},"必填"):t("Tag",{attrs:{color:"primary"}},"可选")}},{title:"默认值",align:"center",key:"default",width:160},{title:"字段说明",align:"left",key:"info"},{title:"操作",align:"center",width:205,render:function(e,a){return e("div",[s(t,e,a.row,a.index),r(t,e,a.row,a.index)])}}],tableData:[],tableShow:{currentPage:1,pageSize:10,listCount:0,dataType:{}},apiInfo:{},modalSetting:{show:!1,loading:!1,index:0},uploadModal:{show:!1,loading:!1,index:0},formItem:{field_name:"",data_type:"2",defaults:"",range:"",is_must:"1",info:"",type:1,id:0},uploadItem:{jsonStr:"",type:1},ruleValidate:{field_name:[{required:!0,message:"字段名称不能为空",trigger:"blur"}]},uploadValidate:{jsonStr:[{required:!0,message:"数据模板不能为空",trigger:"blur"}]},listLoading:!1}},created:function(){this.hash=this.$route.params.hash.toString(),this.getList()},activated:function(){this.hash=this.$route.params.hash.toString(),this.getList()},methods:{alertUpload:function(){this.uploadModal.show=!0},submit:function(){this.formItem.hash=this.hash;var t=this;this.$refs["myForm"].validate((function(e){e&&(t.modalSetting.loading=!0,Object(i["c"])(t.formItem).then((function(e){t.$Message.success(e.data.msg),t.getList(),t.cancel()})).catch((function(){t.modalSetting.loading=!1})))}))},submitUpload:function(){this.uploadItem.hash=this.hash;var t=this;this.$refs["uploadForm"].validate((function(e){e&&(t.uploadModal.loading=!0,Object(i["f"])(t.uploadItem).then((function(e){t.$Message.success(e.data.msg),t.getList(),t.cancelUpload()})).catch((function(){t.uploadModal.loading=!1})))}))},cancel:function(){this.modalSetting.show=!1},cancelUpload:function(){this.uploadModal.show=!1},changePage:function(t){this.tableShow.currentPage=t,this.getList()},changeSize:function(t){this.tableShow.pageSize=t,this.getList()},search:function(){this.tableShow.currentPage=1,this.getList()},getList:function(){var t=this;t.listLoading=!0,Object(i["e"])({page:t.tableShow.currentPage,size:t.tableShow.pageSize,hash:t.hash}).then((function(e){t.tableData=e.data.data.list,t.tableShow.listCount=e.data.data.count,t.tableShow.dataType=e.data.data.dataType,t.apiInfo=e.data.data.apiInfo,t.listLoading=!1}))},doCancel:function(t){t||(this.formItem.id=0,this.formItem.defaults="",this.formItem.isMust="1",this.$refs["myForm"].resetFields(),this.modalSetting.loading=!1,this.modalSetting.index=0)},doUploadCancel:function(t){t||(this.uploadItem.jsonStr="",this.uploadModal.loading=!1)}}},d=l,u=(a("7291"),a("2877")),c=Object(u["a"])(d,o,n,!1,null,"4f5e7bbb",null);e["default"]=c.exports},a716:function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return r})),a.d(e,"e",(function(){return l})),a.d(e,"d",(function(){return d}));var o=a("66df"),n=function(t){return o["b"].request({url:"Fields/upload",method:"post",data:t})},i=function(t){return o["b"].request({url:"Fields/del",method:"get",params:{id:t}})},s=function(t){return o["b"].request({url:"Fields/add",method:"post",data:t})},r=function(t){return o["b"].request({url:"Fields/edit",method:"post",data:t})},l=function(t){return o["b"].request({url:"Fields/response",method:"get",params:t})},d=function(t){return o["b"].request({url:"Fields/request",method:"get",params:t})}}}]);