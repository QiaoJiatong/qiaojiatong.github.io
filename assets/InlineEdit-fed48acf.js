import{e as d,r as n,o as s,c as k,w as l,a as t,h as u,l as p,t as m}from"./index-545757bf.js";const v={key:0,style:{display:"flex"}},S={key:1},A={__name:"InlineEdit",setup(h){const c=d(["#99A9BF","#F7BA2A","#FF9900"]),_=d([{date:"2016-05-03",name:"Joe",title:"No. 189, Los Angeles",editStatus:!1,type:"China",status:"draft",imp:"3",remark:"",reviewer:"Jack"},{date:"2016-05-01",name:"Tom",title:"No. 189, Grove, Los Angeles",editStatus:!1,type:"USA",status:"published",imp:"4",remark:"",reviewer:"Larry"},{date:"2016-05-04",name:"marry",title:"No. 189, Grove St, ",editStatus:!1,type:"EuroZone",status:"draft",imp:"1",remark:"",reviewer:"Mary"},{date:"2016-05-01",name:"Tom",title:"No. 189, Grove St,Angeles",editStatus:!1,type:"Japan",status:"published",imp:"2",remark:"",reviewer:"Frank"}]),f=r=>{r.editStatus=!r.editStatus};return(r,V)=>{const a=n("el-table-column"),w=n("el-rate"),y=n("el-input"),i=n("el-button"),b=n("el-table");return s(),k(b,{data:_.value,class:"InlineEdit-table"},{default:l(()=>[t(a,{type:"index",label:"ID",width:"50"}),t(a,{prop:"date",label:"Date",width:"100"}),t(a,{prop:"name",label:"Name",width:"100"}),t(a,{prop:"imp",label:"Imp",width:"180"},{default:l(e=>[t(w,{modelValue:e.row.imp,"onUpdate:modelValue":o=>e.row.imp=o,colors:c.value,style:{"pointer-events":"none"}},null,8,["modelValue","onUpdate:modelValue","colors"])]),_:1}),t(a,{prop:"status",label:"Status"}),t(a,{prop:"title",label:"Title"},{default:l(e=>[e.row.editStatus?(s(),u("div",v,[t(y,{type:"text",modelValue:e.row.title,"onUpdate:modelValue":o=>e.row.title=o},null,8,["modelValue","onUpdate:modelValue"]),t(i,{text:"",type:"danger",onClick:o=>e.row.editStatus=!1},{default:l(()=>[p(" cancel ")]),_:2},1032,["onClick"])])):(s(),u("div",S,m(e.row.title),1))]),_:1}),t(a,{label:"Actions"},{default:l(e=>[t(i,{text:"",type:"primary",onClick:o=>f(e.row)},{default:l(()=>[p(m(e.row.editStatus===!1?"Edit":"OK"),1)]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])}}};export{A as default};