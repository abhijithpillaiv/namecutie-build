(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[658],{53480:function(e){e.exports={port:"http://localhost:9000/"}},76818:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var s=t(70885),a=t(72791),r=t(74569),l=t.n(r),i=t(78983),c=t(53480),o=t.n(c),u=t(33250),d=t(69998),m=t(80184),h=t(34045);function f(){var e=(0,a.useState)(null),n=(0,s.Z)(e,2),t=n[0],r=n[1],c=(0,a.useState)(null),f=(0,s.Z)(c,2),p=f[0],x=f[1],j=(0,a.useState)(!1),g=(0,s.Z)(j,2),v=g[0],b=g[1];(0,a.useEffect)((function(){t&&(b(!0),N())}),[t]);var N=function(e){for(var n=0;n<t.length;n++){for(var s=[],a=0;a<100;a++)t[n][a]&&s.push(t[n][a]);console.log(s),l().post(o().port+"api/admin/addName",{name:t[n].Name,gender:t[n].Gender,meaning:t[n].Meaning,ethni:s,like:0}).then((function(){}))}alert("Names added successfully"),b(!1)};return v?(0,m.jsx)(u.Z,{}):(0,m.jsxs)("div",{children:[(0,m.jsx)(d.Z,{edit:0,props:0}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsxs)("form",{children:[(0,m.jsx)("label",{htmlFor:"upload",children:"Upload Excel File"}),(0,m.jsx)("input",{onChange:function(e){x(e)},type:"file",name:"upload",id:"upload"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("br",{})," ",(0,m.jsx)(i.u5,{color:"success",onClick:function(){if(p.target.files){var e=new FileReader;e.onload=function(e){var n=e.target.result,t=h.read(n,{type:"array"}),s=t.SheetNames[0],a=t.Sheets[s],l=h.utils.sheet_to_json(a);r(l)},e.readAsArrayBuffer(p.target.files[0])}},children:"Upload File"})]})]})]})}},69998:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var s=t(42982),a=t(70885),r=t(72791),l=t(74569),i=t.n(l),c=t(78983),o=t(53480),u=t.n(o),d=t(33250),m=t(15463),h=t(8301),f=t(24846),p=t(16871),x=t(80184);function j(e){var n=e.edit,t=e.props,l=(0,r.useState)(!0),o=(0,a.Z)(l,2),j=o[0],g=o[1],v=(0,r.useState)(""),b=(0,a.Z)(v,2),N=b[0],Z=b[1],y=(0,r.useState)(""),_=(0,a.Z)(y,2),k=_[0],C=_[1],S=(0,r.useState)([]),w=(0,a.Z)(S,2),F=w[0],U=w[1],L=(0,r.useState)(""),E=(0,a.Z)(L,2),G=E[0],q=E[1],B=(0,r.useState)(""),O=(0,a.Z)(B,2),R=O[0],z=O[1],A=(0,r.useState)(""),M=(0,a.Z)(A,2),J=M[0],V=M[1],X=(0,p.s0)();(0,r.useEffect)((function(){n?(U(t.data.ethni),Z(t.data.name),q(t.data.gender),C(t.data.meaning),z(t.data._id),g(!1)):g(!1)}),[n]);var Y=function(){n?(g(!0),i().post(u().port+"api/admin/editName",{name:N,gender:G,meaning:k,ethni:F,like:0,id:R}).then((function(){alert("Names edited successfully"),g(!1),X(-1)}))):(g(!0),i().post(u().port+"api/admin/addName",{name:N,gender:G,meaning:k,ethni:F,like:0}).then((function(){alert("Name added successfully"),D(),g(!1)})))},D=function(){Z(""),q(""),C(""),U([]),q("")};return j?(0,x.jsx)(d.Z,{}):(0,x.jsxs)(c.lx,{children:[(0,x.jsxs)(c.rb,{className:"mb-3",children:[(0,x.jsx)(c.L8,{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Name"}),(0,x.jsx)(c.b7,{sm:10,children:(0,x.jsx)(c.jO,{required:!0,value:N,onChange:function(e){return Z(e.target.value)},type:"name",id:"name"})})]}),(0,x.jsxs)(c.rb,{className:"mb-3",children:[(0,x.jsx)(c.L8,{htmlFor:"meaning",className:"col-sm-2 col-form-label",children:"Meaning"}),(0,x.jsx)(c.b7,{sm:10,children:(0,x.jsx)(c.jO,{required:!0,value:k,onChange:function(e){return C(e.target.value)},type:"text",id:"meaning"})})]}),(0,x.jsxs)("fieldset",{className:"row mb-3",children:[(0,x.jsx)("legend",{className:"col-form-label col-sm-2 pt-0",children:"Gender"}),(0,x.jsx)(c.b7,{sm:5,children:(0,x.jsxs)(c.LX,{required:!0,size:"sm",value:G,onChange:function(e){return q(e.target.value)},className:"mb-3","aria-label":"Small select example",children:[(0,x.jsx)("option",{value:"",children:"add New option"}),(0,x.jsx)("option",{value:"Boy",children:"Boy"}),(0,x.jsx)("option",{value:"Girl",children:"Girl"}),(0,x.jsx)("option",{value:"Unisex",children:"Unisex"})]})})]}),(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(c.L8,{htmlFor:"ethnic",className:"col-sm-2 col-form-label",children:"Ethnic"}),F?F.map((function(e,n){return(0,x.jsxs)("span",{children:[e,"  ",(0,x.jsx)(f.Z,{style:{cursor:"pointer",color:"red"},onClick:function(n){return function(e){e&&U((function(n){return n.filter((function(n){return n!==e}))}))}(e)},icon:m.x})," , "]},n)})):null,(0,x.jsxs)(c.YR,{size:"sm",className:"mt-3 mb-3",children:[(0,x.jsx)(c.jO,{placeholder:"add new value",value:J,onChange:function(e){return V(e.target.value)},type:"text"}),(0,x.jsxs)(c.wV,{style:{cursor:"pointer"},onClick:function(){J&&U((function(e){return[].concat((0,s.Z)(e),[J])})),V("")},children:["Click to add ",(0,x.jsx)(f.Z,{icon:h.J})]})]})]}),n?(0,x.jsx)(c.u5,{color:"success",onClick:Y,children:"Update"}):N&&k&&G?(0,x.jsx)(c.u5,{onClick:Y,color:"success",children:"Upload"}):(0,x.jsx)(c.u5,{color:"success",children:"Upload"}),(0,x.jsxs)("span",{style:{paddingLeft:"100px"},children:[" ",(0,x.jsx)(c.u5,{color:"primary",onClick:D,children:"Reset"})]})]})}},33250:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});t(72791);var s=t.p+"static/media/lodr.01b22d1dc21e0c6111cd.gif",a=t(80184);function r(){return(0,a.jsx)("img",{style:{height:"100px",width:"auto"},src:s,alt:"lodr"})}}}]);
//# sourceMappingURL=658.d7733a7a.chunk.js.map