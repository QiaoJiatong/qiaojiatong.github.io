import{_ as u}from"./index-b7a88358.js";const r={name:"myIcons",data(){return{activeName:"first",iconsData:["#icon-users","#icon-money","ShoppingCart","House","Document","Position","Lock","#icon-component","Grid","#icon-i","HelpFilled","Histogram","#icon-routes","ChatDotSquare","#icon-table","WarnTriangleFilled","QuestionFilled"],elementIconsData:["Unlock","Plus","Minus","CirclePlus","Search","Female","Male","House","Setting","ChatDotRound","Message","Delete","UserFilled","Microphone","Location","OfficeBuilding","Food","Goblet","Calendar","Goods","Handbag","Phone","PriceTag","Pouring","ShoppingCart","Umbrella","AlarmClock"]}},methods:{copyIcon(n){const o=`"<icon-font :icon-name="${n}"/>"`;this.$copyText(o).then(function(){ElementPlus.ElMessage({showClose:!0,message:"复制成功",type:"success"})},function(){ElementPlus.ElMessage("复制失败")})},handleClick(n,o){console.log(n,o)}}},m={class:"common-layout"};function d(n,o,V,p,c,t){const l=Vue.resolveComponent("icon-font"),a=Vue.resolveComponent("el-tab-pane"),s=Vue.resolveComponent("el-tabs");return Vue.openBlock(),Vue.createElementBlock("div",m,[Vue.createVNode(s,{modelValue:c.activeName,"onUpdate:modelValue":o[0]||(o[0]=e=>c.activeName=e),class:"demo-tabs",onTabClick:t.handleClick},{default:Vue.withCtx(()=>[Vue.createVNode(a,{label:"myIcons",name:"first",class:"icons-box"},{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(c.iconsData,e=>(Vue.openBlock(),Vue.createElementBlock("div",{key:e,class:"icons-icon"},[Vue.createVNode(l,{"icon-name":e,onClick:i=>t.copyIcon(e)},null,8,["icon-name","onClick"]),Vue.createElementVNode("div",null,Vue.toDisplayString(e),1)]))),128))]),_:1}),Vue.createVNode(a,{label:"ElementIcons",name:"second",class:"icons-box"},{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(c.elementIconsData,e=>(Vue.openBlock(),Vue.createElementBlock("div",{key:e,class:"icons-icon"},[Vue.createVNode(l,{"icon-name":e,onClick:i=>t.copyIcon(e)},null,8,["icon-name","onClick"]),Vue.createElementVNode("div",null,Vue.toDisplayString(e),1)]))),128))]),_:1})]),_:1},8,["modelValue","onTabClick"])])}const k=u(r,[["render",d],["__scopeId","data-v-8934fc37"]]);export{k as default};
