const V={key:0,style:{display:"flex"}},p={key:1},_={__name:"InlineEdit",setup(c){const n=Vue.ref(["#99A9BF","#F7BA2A","#FF9900"]),r=Vue.ref([{date:"2016-05-03",name:"Joe",title:"No. 189, Los Angeles",editStatus:!1,type:"China",status:"draft",imp:"3",remark:"",reviewer:"Jack"},{date:"2016-05-01",name:"Tom",title:"No. 189, Grove, Los Angeles",editStatus:!1,type:"USA",status:"published",imp:"4",remark:"",reviewer:"Larry"},{date:"2016-05-04",name:"marry",title:"No. 189, Grove St, ",editStatus:!1,type:"EuroZone",status:"draft",imp:"1",remark:"",reviewer:"Mary"},{date:"2016-05-01",name:"Tom",title:"No. 189, Grove St,Angeles",editStatus:!1,type:"Japan",status:"published",imp:"2",remark:"",reviewer:"Frank"}]),u=o=>{o.editStatus=!o.editStatus};return(o,m)=>{const t=Vue.resolveComponent("el-table-column"),i=Vue.resolveComponent("el-rate"),d=Vue.resolveComponent("el-input"),l=Vue.resolveComponent("el-button"),s=Vue.resolveComponent("el-table");return Vue.openBlock(),Vue.createBlock(s,{data:r.value,class:"InlineEdit-table"},{default:Vue.withCtx(()=>[Vue.createVNode(t,{type:"index",label:"ID",width:"50"}),Vue.createVNode(t,{prop:"date",label:"Date",width:"100"}),Vue.createVNode(t,{prop:"name",label:"Name",width:"100"}),Vue.createVNode(t,{prop:"imp",label:"Imp",width:"180"},{default:Vue.withCtx(e=>[Vue.createVNode(i,{modelValue:e.row.imp,"onUpdate:modelValue":a=>e.row.imp=a,colors:n.value,style:{"pointer-events":"none"}},null,8,["modelValue","onUpdate:modelValue","colors"])]),_:1}),Vue.createVNode(t,{prop:"status",label:"Status"}),Vue.createVNode(t,{prop:"title",label:"Title"},{default:Vue.withCtx(e=>[e.row.editStatus?(Vue.openBlock(),Vue.createElementBlock("div",V,[Vue.createVNode(d,{type:"text",modelValue:e.row.title,"onUpdate:modelValue":a=>e.row.title=a},null,8,["modelValue","onUpdate:modelValue"]),Vue.createVNode(l,{text:"",type:"danger",onClick:a=>e.row.editStatus=!1},{default:Vue.withCtx(()=>[Vue.createTextVNode(" cancel ")]),_:2},1032,["onClick"])])):(Vue.openBlock(),Vue.createElementBlock("div",p,Vue.toDisplayString(e.row.title),1))]),_:1}),Vue.createVNode(t,{label:"Actions"},{default:Vue.withCtx(e=>[Vue.createVNode(l,{text:"",type:"primary",onClick:a=>u(e.row)},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(e.row.editStatus===!1?"Edit":"OK"),1)]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])}}};export{_ as default};
