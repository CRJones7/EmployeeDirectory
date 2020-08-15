(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{14:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(12),c=a.n(r),s=a(2),o={flexContainer:{display:"flex",justifyContent:"center"}};var i=function(e){return n.a.createElement("div",Object.assign({className:" flex-container container".concat(e.fluid?"-fluid":"")},e,{style:o.flexContainer}))};var m=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return n.a.createElement("div",Object.assign({className:t},e))},d={card:{marginBottom:30,display:"flex",justifyContent:"center",maxHeight:"700px",overflow:"scroll"},heading:{background:"#9a74db",minHeight:50,lineHeight:3.5,fontSize:80,color:"white",padding:"0 20px"}};var u=function(e){return n.a.createElement("div",{className:"card text-center",style:d.card},n.a.createElement("div",{className:"card-header"},n.a.createElement("h2",null,e.heading)),n.a.createElement("div",{className:"card-body"},e.children))};var b=function(e){return n.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))},f={tableHead:{backgroundColor:"#0077b6"},tableHeaders:{fontSize:"25px"},tableBody:{overflowX:"auto",justifyContent:"center",textAlign:"center",maxHeight:"500px",overflow:"scroll"},tableData:{paddingLeft:15,paddingRight:15,border:"1px solid #0077b6",borderCollapse:"collapse"}};var E=function(e){var t=e.employeeList;return n.a.createElement("div",{className:"card-body table employee-table"},t[0]?n.a.createElement("table",null,n.a.createElement("thead",{className:"tableHead",style:f.tableHead},n.a.createElement("tr",null,n.a.createElement("th",{className:"tableHeaders",style:f.tableHeaders}," Picture "),n.a.createElement("th",{className:"tableHeaders",style:f.tableHeaders}," Name "),n.a.createElement("th",{className:"tableHeaders",style:f.tableHeaders}," Email "),n.a.createElement("th",{className:"tableHeaders",style:f.tableHeaders}," Phone "),n.a.createElement("th",{className:"tableHeaders",style:f.tableHeaders}," Region "))),n.a.createElement("tbody",{className:"tableBody",style:f.tableBody},t.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",{className:"tableData",style:f.tableData},n.a.createElement("img",{src:e.picture.thumbnail,alt:"".concat(e.name.first," ").concat(e.name.last)})),n.a.createElement("td",{className:"tableData",style:f.tableData},"".concat(e.name.first," ").concat(e.name.last)),n.a.createElement("td",{className:"tableData",style:f.tableData},e.email),n.a.createElement("td",{className:"tableData",style:f.tableData},e.phone),n.a.createElement("td",{className:"tableData",style:f.tableData},e.location.timezone.description))})))):n.a.createElement("div",null,n.a.createElement("p",null,"Waiting for data to load")))},p=a(13),h=a.n(p),y=function(){return h.a.get("https://randomuser.me/api/?results=150")},g={Title:{fontSize:"60px",backgroundColor:"#0077b6",marginTop:0,marginBottom:30,height:"100px",display:"flex",justifyContent:"center"},head:{backgroundColor:"#023e8a",margin:0}};var v=function(){return n.a.createElement("div",{className:"card mt-4 head fluid",style:g.head},n.a.createElement("h2",{className:"Title fluid",style:g.Title},"Employee Directory"))};var N=function(){var e=Object(l.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)([]),o=Object(s.a)(c,2),d=o[0],f=o[1];function p(e){r(e),function(e,t){var a=t.filter((function(t){return t.name.first.includes(e)}));a.length>0&&f(a)}(a,d)}return Object(l.useEffect)((function(){0===d.length&&y().then((function(e){return e.data.results})).then((function(e){return f(e)}))}),[]),n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement(b,{className:"form-group"},n.a.createElement(m,{size:"12"},n.a.createElement(u,null,n.a.createElement("h2",null,"Search for an employee:"),n.a.createElement("input",{style:{height:"20%",width:"100%",textAlign:"center",marginBottom:"20px"},className:"form-control",type:"text",placeholder:"Enter Name",name:"employeeSearch",onChange:function(e){return p(e.target.value)}})))),n.a.createElement(i,{className:"mt-3 px-5"},n.a.createElement(b,null,n.a.createElement(u,null,0===!d.length?n.a.createElement("h4",null,"Waiting for Data to load"):n.a.createElement(E,{employeeList:d})))))};a(36);var x=function(){return n.a.createElement(N,null)};c.a.render(n.a.createElement(x,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d7e266f5.chunk.js.map