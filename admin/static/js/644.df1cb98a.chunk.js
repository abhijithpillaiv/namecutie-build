(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[644],{53480:function(e){e.exports={port:"http://localhost:9000/"}},16106:function(e,n,r){"use strict";r.r(n);var i=r(70885),s=r(72791),t=r(27271),l=r(33250),a=r(74569),c=r.n(a),o=r(53480),d=r.n(o),u=r(80184);n.default=function(){var e=(0,s.useState)(null),n=(0,i.Z)(e,2),r=n[0],a=n[1];return s.useEffect((function(){c().get(d().port+"api/admin/getNames/Girl").then((function(e){a(e)}))}),[]),(0,u.jsx)(u.Fragment,{children:r?(0,u.jsx)(t.Z,{gender:"GIRLS",props:r.data}):(0,u.jsx)(l.Z,{})})}},27271:function(e,n,r){"use strict";r.d(n,{Z:function(){return C}});var i=r(28683),s=r(70885),t=r(72791),l=r(24846),a=r(33250),c=r(96048),o=r.n(c),d=r(16871),u=r(53480),x=r.n(u),h=r(78983),f=r(17540),j=r(75845),m=r(32642),g=r(15463),p=r(74569),b=r.n(p),N=r(80184),C=function(e){var n=e.gender,r=e.props,c=(0,d.s0)(),u=function(e){c("/names/editName/"+e)},p=function(e,n,i,s){Z(!1),window.confirm("Do you want to delete "+n+" ?")?b().get(x().port+"api/admin/deleteName/"+i).then((function(n){r.splice(e,1),D.currentData.splice(s,1),Z(!0)})):Z(!0)},C=function(e){Z(!1),c("/names/singleName/"+e),Z(!0)},v=(0,t.useState)(!0),_=(0,s.Z)(v,2),k=_[0],Z=_[1],w=(0,t.useState)(null),y=(0,s.Z)(w,2),S=y[0],L=y[1],P=(0,t.useState)({data:r.map((function(e,n){return{name:e.name,meaning:e.meaning,like:e.like,gender:e.gender,_id:e._id,propIndex:n}})),offset:0,numberPerPage:10,pageCount:0,currentData:[]}),z=(0,s.Z)(P,2),D=z[0],I=z[1];(0,t.useEffect)((function(){I((function(e){return(0,i.Z)((0,i.Z)({},e),{},{pageCount:e.data.length/e.numberPerPage,currentData:e.data.slice(D.offset,D.offset+D.numberPerPage)})}))}),[D.numberPerPage,D.offset]);var R=null;return S?(0,N.jsx)("div",{children:(0,N.jsx)(h.rb,{children:(0,N.jsx)(h.xH,{className:"mb-0",children:(0,N.jsxs)(h.sl,{children:[(0,N.jsxs)(h.YR,{className:"flex-nowrap",children:[(0,N.jsx)(h.wV,{id:"addon-wrapping",children:(0,N.jsx)(l.Z,{icon:f.j})}),(0,N.jsx)(h.jO,{onChange:function(e){return L(e.target.value)},placeholder:"Search","aria-label":"Search","aria-describedby":"addon-wrapping"})]}),(0,N.jsxs)(h.b7,{children:[(0,N.jsx)("div",{style:{fontFamily:"sans-serif",fontSize:"x-large",textAlign:"center",fontWeight:"bold",color:"blue"},children:n}),(0,N.jsx)("br",{}),(0,N.jsxs)(h.Sx,{style:{cursor:"pointer"},align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,N.jsx)(h.V,{color:"light",children:(0,N.jsxs)(h.T6,{children:[(0,N.jsx)(h.is,{children:"Name"}),(0,N.jsx)(h.is,{children:"Meaning"}),(0,N.jsx)(h.is,{children:"Likes"}),(0,N.jsx)(h.is,{children:"Edit/Delete"})]})}),(0,N.jsx)(h.NR,{children:r?r.sort((function(e,n){return e.select===n.select?e.name.toLowerCase()>n.name.toLowerCase()?1:-1:"true"===e.select?-1:1})).filter((function(e){return(""===S||e.name.toString().toLowerCase().includes(S.toString().toLowerCase()))&&(R=e),R})).map((function(e,n){return(0,N.jsxs)(h.T6,{"v-for":"item in tableItems",children:[(0,N.jsx)(h.NN,{onClick:function(){return C(e._id)},children:(0,N.jsx)("div",{children:e.name})}),(0,N.jsx)(h.NN,{onClick:function(){return C(e._id)},children:(0,N.jsx)("strong",{children:e.meaning})}),(0,N.jsxs)(h.NN,{onClick:function(){return C(e._id)},children:[(0,N.jsx)(l.Z,{icon:j.s,size:"sm"}),(0,N.jsxs)("span",{style:{fontSize:"small"},children:["   ",e.like]})]}),(0,N.jsxs)(h.NN,{children:[(0,N.jsx)(l.Z,{onClick:function(){return u(e._id)},style:{color:"blue",cursor:"pointer"},icon:m.C,size:"lg"}),(0,N.jsx)(l.Z,{onClick:function(){return p(e.propIndex,e.name,e._id,n)},style:{color:"red",cursor:"pointer",marginLeft:"20px"},icon:g.x,size:"lg"})]})]},n)})):null})]})]})]})})})}):k&&D.currentData?(0,N.jsxs)("div",{children:[(0,N.jsx)(h.rb,{children:(0,N.jsx)(h.xH,{className:"mb-0",children:(0,N.jsxs)(h.sl,{children:[(0,N.jsxs)(h.YR,{className:"flex-nowrap",children:[(0,N.jsx)(h.wV,{id:"addon-wrapping",children:(0,N.jsx)(l.Z,{icon:f.j})}),(0,N.jsx)(h.jO,{onChange:function(e){return L(e.target.value)},placeholder:"Search","aria-label":"Search","aria-describedby":"addon-wrapping"})]}),(0,N.jsxs)(h.b7,{children:[(0,N.jsx)("div",{style:{fontFamily:"sans-serif",fontSize:"x-large",textAlign:"center",fontWeight:"bold",color:"blue"},children:n}),(0,N.jsx)("br",{}),(0,N.jsxs)(h.Sx,{style:{cursor:"pointer"},align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,N.jsx)(h.V,{color:"light",children:(0,N.jsxs)(h.T6,{children:[(0,N.jsx)(h.is,{children:"Name"}),(0,N.jsx)(h.is,{children:"Meaning"}),(0,N.jsx)(h.is,{children:"Likes"}),(0,N.jsx)(h.is,{children:"Edit/Delete"})]})}),(0,N.jsx)(h.NR,{children:D.currentData.map((function(e,n){return(0,N.jsxs)(h.T6,{"v-for":"item in tableItems",children:[(0,N.jsx)(h.NN,{onClick:function(){return C(e._id)},children:(0,N.jsx)("div",{children:e.name})}),(0,N.jsx)(h.NN,{onClick:function(){return C(e._id)},children:(0,N.jsx)("strong",{children:e.meaning})}),(0,N.jsxs)(h.NN,{onClick:function(){return C(e._id)},children:[(0,N.jsx)(l.Z,{icon:j.s,size:"sm"}),(0,N.jsxs)("span",{style:{fontSize:"small"},children:["   ",e.like]})]}),(0,N.jsxs)(h.NN,{children:[(0,N.jsx)(l.Z,{onClick:function(){return u(e._id)},style:{color:"blue",cursor:"pointer"},icon:m.C,size:"lg"}),(0,N.jsx)(l.Z,{onClick:function(){return p(e.propIndex,e.name,e._id,n)},style:{color:"red",cursor:"pointer",marginLeft:"20px"},icon:g.x,size:"lg"})]})]},n)}))})]})]})]})})}),(0,N.jsx)(o(),{previousLabel:"previous",nextLabel:"next",breakLabel:"...",pageCount:D.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var n=e.selected*D.numberPerPage;I((0,i.Z)((0,i.Z)({},D),{},{offset:n}))},containerClassName:"pagination",activeClassName:"activez"})]}):(0,N.jsx)(a.Z,{})}},33250:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});r(72791);var i=r.p+"static/media/lodr.01b22d1dc21e0c6111cd.gif",s=r(80184);function t(){return(0,s.jsx)("img",{style:{height:"100px",width:"auto"},src:i,alt:"lodr"})}}}]);
//# sourceMappingURL=644.df1cb98a.chunk.js.map