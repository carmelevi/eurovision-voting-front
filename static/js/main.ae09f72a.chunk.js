(this["webpackJsonpeurovision-voting"]=this["webpackJsonpeurovision-voting"]||[]).push([[0],{121:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=(n(121),n(16)),s=n(45),o=n(193),l=n(3),u=function(e){var t=e.page;return Object(l.jsx)(o.a,{id:"main_page",display:"block",m:0,children:t})},j=n(191),d=n(192),b=n(38),h=n(43),O=n(4),x=n(162),p=n(164),m=n(165),g=n(76),f=n(196),v=n(170),y=n(171),w=n(132),k=n(172),S=n(173),C=n(166),F=n(167),N=n(168),P=n(169),E=n(161),I=n(23),T=240,D=Object(E.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"linear-gradient(45deg , white, lightgray 10%, blue, darkblue)"},appBarShift:{width:"calc(100% - ".concat(T,"px)"),marginLeft:T,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2),color:"gray"},hide:{display:"none"},drawer:{width:T,flexShrink:0},drawerPaper:{width:T},drawerHeader:Object(h.a)(Object(h.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1},buttons:{display:"flex",aligncontent:"center",m:"1"}}}));function B(e){var t=e.pages,n=e.setPage,r=D(),c=Object(I.a)(),s=Object(a.useState)(!1),u=Object(i.a)(s,2),j=u[0],d=u[1],h=function(){d(!1)};return Object(l.jsxs)(o.a,{className:r.root,children:[Object(l.jsx)(x.a,{position:"fixed",className:Object(O.a)(r.appBar,Object(b.a)({},r.appBarShift,j)),children:Object(l.jsxs)(p.a,{children:[Object(l.jsx)(m.a,{color:"inherit","aria-label":"open drawer",onClick:function(){d(!0)},edge:"start",className:Object(O.a)(r.menuButton,j&&r.hide),children:Object(l.jsx)(C.a,{})}),Object(l.jsx)(g.a,{variant:"h6",className:r.title,children:"STUZOVISION"}),Object(l.jsx)(o.a,{color:"#FFD700",children:Object(l.jsx)(F.a,{})})]})}),Object(l.jsxs)(f.a,{className:r.drawer,variant:"persistent",anchor:"left",open:j,classes:{paper:r.drawerPaper},children:[Object(l.jsx)("div",{className:r.drawerHeader,children:Object(l.jsx)(m.a,{onClick:h,children:"ltr"===c.direction?Object(l.jsx)(N.a,{}):Object(l.jsx)(P.a,{})})}),Object(l.jsx)(v.a,{}),Object(l.jsx)(y.a,{children:t.map((function(e){return Object(l.jsxs)(w.a,{button:!0,onClick:function(){h(),n(Object(l.jsx)(e.page,{}))},children:[Object(l.jsx)(k.a,{children:e.icon}),Object(l.jsx)(S.a,{primary:e.label})]},e.key)}))})]})]})}var L=n(34);function R(e){var t=e.children;return Object(l.jsx)(L.a,{maxSnack:6,autoHideDuration:5e3,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:t})}var V=n(74),A=n(21),H=n.n(A),W=n(44),z=n(181),G=n(182),M=n(179),Q=n(199),Y=n(178),_=n(174),q=n(197),J=n(194),K=n(177),U=function(e){var t=e.selectKey,n=e.addFinalScore,r=Object(a.useState)(""),c=Object(i.a)(r,2),s=c[0],o=c[1];return Object(l.jsxs)(_.a,{fullWidth:!0,style:{minWidth:"100px"},children:[Object(l.jsx)(q.a,{id:"demo-simple-select-label",children:"Score"}),Object(l.jsxs)(J.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s,label:"Score",onChange:function(e){return function(e){var a=e.value;o(a),n({key:t,score:a})}({value:e.target.value})},children:[Object(l.jsx)(K.a,{value:"0",children:"0"}),Object(l.jsx)(K.a,{value:"1",children:"1"}),Object(l.jsx)(K.a,{value:"2",children:"2"}),Object(l.jsx)(K.a,{value:"3",children:"3"}),Object(l.jsx)(K.a,{value:"4",children:"4"}),Object(l.jsx)(K.a,{value:"5",children:"5"}),Object(l.jsx)(K.a,{value:"6",children:"6"}),Object(l.jsx)(K.a,{value:"7",children:"7"}),Object(l.jsx)(K.a,{value:"8",children:"8"}),Object(l.jsx)(K.a,{value:"10",children:"10"}),Object(l.jsx)(K.a,{value:"12",children:"DOUZE POINTS"})]})]})},Z=n(62);function X(e){var t=e.item,n=e.addFinalScore,r=e.index;return Object(l.jsx)(Z.b,{draggableId:t.key,index:r,children:function(e){return Object(l.jsxs)(w.a,Object(h.a)(Object(h.a)({alignItems:"flex-start",innerRef:e.innerRef},e.draggableProps),{},{children:[Object(l.jsx)(k.a,Object(h.a)(Object(h.a)({},e.dragHandleProps),{},{children:Object(l.jsx)(Y.a,{})})),Object(l.jsx)(M.a,{children:Object(l.jsx)(Q.a,{src:t.flag})}),Object(l.jsx)(S.a,{primary:t.country,secondary:Object(l.jsx)(a.Fragment,{children:Object(l.jsx)(g.a,{sx:{display:"inline"},component:"span",variant:"body2",children:t.song})})}),Object(l.jsx)(o.a,{children:Object(l.jsx)(U,{selectKey:t.key,addFinalScore:n})})]}))}},t.key)}function $(e){var t=e.items,n=e.addFinalScore,r=Object(a.useState)(t),c=Object(i.a)(r,2),s=c[0],o=c[1];return Object(l.jsx)(Z.a,{onDragEnd:function(e){if(e.destination){var t=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),c=Object(i.a)(r,1)[0];return a.splice(n,0,c),a}(s,e.source.index,e.destination.index);o(t)}},children:Object(l.jsx)(Z.c,{droppableId:"droppable",children:function(e){return Object(l.jsxs)(y.a,{innerRef:e.innerRef,sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[s.map((function(e,t){return Object(l.jsx)(X,{item:e,addFinalScore:n,index:t},e.key)})),e.placeholder]})}})})}var ee=n(180),te=Object(E.a)({root:{background:"linear-gradient(45deg, #F7DC25 30%, #F9F959 90%)",borderRadius:3,border:0,color:"black",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(206, 206, 19, .4)"},label:{textTransform:"capitalize"}}),ne=function(e){var t=e.handleSubmit,n=e.buttonName,a=te();return Object(l.jsx)(o.a,{display:"flex",aligncontent:"center",m:1,children:Object(l.jsx)(ee.a,{className:a.root,variant:"outlined",onClick:t,children:n})})},ae=n(200),re=Object(E.a)((function(){return{root:{backgroundColor:"#F9F9F9"}}})),ce=function(e){var t=e.value,n=e.setValue,a=e.label,r=e.type,c=void 0===r?"text":r,i=e.width,s=void 0===i?300:i,u=re();return Object(l.jsx)(o.a,{display:"flex",aligncontent:"center",m:1,children:Object(l.jsx)(ae.a,{className:u.root,style:{width:s},value:t,onChange:function(e){return n(e.target.value)},label:a,variant:"outlined",type:c})})},ie="https://7ee1-85-64-238-249.ngrok-free.app";function se(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(W.a)(H.a.mark((function e(t){var n,a,r,c,i,s,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.method,r=void 0===a?"POST":a,c=t.headers,i=void 0===c?{"Content-Type":"application/json"}:c,s=t.body,e.next=3,fetch(n,{method:r,headers:i,body:s&&JSON.stringify(s)});case 3:if((o=e.sent).ok){e.next=10;break}return e.t0=Error,e.next=8,o.text();case 8:throw e.t1=e.sent,new e.t0(e.t1);case 10:return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(W.a)(H.a.mark((function e(t){var n,a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.scores,(a=t.name)&&""!==a){e.next=3;break}throw new Error("Name must be provided");case 3:return e.next=5,se({url:"".concat(ie,"/api/v1/eurovision/").concat(a),method:"POST",body:n});case 5:return r=e.sent,e.abrupt("return",r.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(){return de.apply(this,arguments)}function de(){return(de=Object(W.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se({url:"".concat(ie,"/api/v1/eurovision/songs"),method:"GET"});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(){return he.apply(this,arguments)}function he(){return(he=Object(W.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se({url:"".concat(ie,"/api/v1/eurovision"),method:"GET"});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Oe=new V.a,xe=["bitch","butch","sexy","femboy","queer","trade","daddy","queen","faggot","otter","twunk","hunk","puppy"],pe=function(e){var t=e.setVoted,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],u=r[1],j=Object(a.useState)({}),d=Object(i.a)(j,2),b=d[0],h=d[1],O=Object(s.useQuery)("songs",je),x=O.data,p=O.isLoading,m=O.isSuccess,g=O.isError,f=O.error;function v(){return(v=Object(W.a)(H.a.mark((function e(){var n,a,r,i,s;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le({scores:b,name:c});case 3:n=e.sent,a=n.is_valid,r=n.error,i=r.miss,s=r.dup,a?(Oe.set("voted",!0,{path:"/",maxAge:7200}),t(!0),Object(L.b)({message:"Successfully send scores",variant:"success"})):(i&&i.forEach((function(e){var t=xe[Math.floor(Math.random()*xe.length)];Object(L.b)({message:"You missed number ".concat(e," ").concat(t),variant:"error"})})),s&&s.forEach((function(e){var t=xe[Math.floor(Math.random()*xe.length)];Object(L.b)({message:"You duplicated number ".concat(e," ").concat(t),variant:"error"})}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),Object(L.b)({message:e.t0.message,variant:"error"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function y(){return(y=Object(W.a)(H.a.mark((function e(t){var n,a,r,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.key,a=t.score,r=b,(c=Number(a))?r[n]=c:delete r[n],h(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return g&&Object(L.b)({message:f.message||"Failed to get songs",variant:"error"}),Object(l.jsx)(z.a,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(ce,{value:c,setValue:u,label:"Name"}),m&&Object(l.jsx)($,{items:x,addFinalScore:function(e){return y.apply(this,arguments)}}),p&&Object(l.jsx)(G.a,{}),Object(l.jsx)(ne,{handleSubmit:function(){return v.apply(this,arguments)},buttonName:"Submit Scores"},"submitScores")]})})},me=n(184),ge=n(183),fe=Object(E.a)((function(){return{root:{maxWidth:304,margin:"auto",boxShadow:"none",padding:24,borderRadius:20,marginTop:24,backgroundColor:"#00008B",align:"center"}}}));function ve(e){var t=e.children,n=fe();return Object(l.jsx)(ge.a,{className:n.root,children:t})}var ye={media:{}},we=function(){return Object(l.jsx)(z.a,{children:Object(l.jsxs)(o.a,{flexDirection:"column",m:1,display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Helvetica Neue",color:"darkblue",children:[Object(l.jsx)("h1",{children:"\u05d1\u05d9\u05d7\u05d3 \u05e2\u05d3\u05df \u05ea\u05e0\u05e6\u05d7"}),Object(l.jsx)(ve,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(me.a,{component:"img",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Yellow_ribbon.svg/640px-Yellow_ribbon.svg.png",alt:"Flag",style:ye.media})})}),Object(l.jsx)("h1",{children:"\u05e1\u05ea\u05d5\u05de\u05d5\u05ea \u05d6\u05d5\u05e0\u05d5\u05ea"})]})})},ke=new V.a,Se=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return n||ke.get("voted")?Object(l.jsx)(o.a,{m:0,children:Object(l.jsx)(we,{})}):Object(l.jsx)(o.a,{m:0,children:Object(l.jsx)(pe,{setVoted:r})})},Ce=n(98),Fe=n.n(Ce),Ne=n(185),Pe=n(100),Ee=n(186),Ie=n(187),Te=n(188),De=n(189),Be=n(190),Le=Object(E.a)({table:{minWidth:"40px"},firstPlace:{backgroundColor:"#F6EE07"},secondPlace:{backgroundColor:"#D4D3CA"},thirdPlace:{backgroundColor:"#ECA244"}}),Re=function(e){var t=e.rows,n=e.columns,a=Le(),r=function(e){switch(e){case 0:return a.firstPlace;case 1:return a.secondPlace;case 2:return a.thirdPlace}};return Object(l.jsx)(o.a,{display:"flex",aligncontent:"center",m:1,children:Object(l.jsx)(Ne.a,{component:Pe.a,children:Object(l.jsxs)(Ee.a,{className:a.table,"aria-label":"simple table",children:[Object(l.jsx)(Ie.a,{children:Object(l.jsxs)(Te.a,{children:[Object(l.jsx)(De.a,{children:"#"}),n.map((function(e){return Object(l.jsx)(De.a,{children:e.label},e.key)}))]})}),Object(l.jsx)(Be.a,{children:t.map((function(e,t){return Object(l.jsxs)(Te.a,{className:r(t),children:[Object(l.jsx)(De.a,{component:"th",scope:"row",children:t+1}),n.map((function(n){return Object(l.jsx)(De.a,{children:e[n.key]},"".concat(n.key,"-").concat(t))}))]},t)}))})]})})})},Ve=[{label:"Country Name",key:"country"},{label:"Song Name",key:"song"},{label:"Score",key:"score"}],Ae=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),u=Object(i.a)(c,2),j=u[0],d=u[1],b=Object(s.useQuery)("songs",be,{refetchInterval:1e3}),h=b.data,O=b.isLoading,x=b.isSuccess,p=b.isError,m=b.error;return x&&function(e){var t=e.oldScores,n=e.newScores;return!Fe.a.isEqual(t,n)}({oldScores:n,newScores:h})&&r(h),p&&Object(L.b)({message:m.message||"Failed to get songs",variant:"error"}),Object(l.jsx)(z.a,{children:Object(l.jsxs)(o.a,{flexDirection:"column",m:1,display:"flex",justifyContent:"center",alignItems:"center",children:[Object(l.jsx)(ce,{value:j,setValue:d,label:"Name"}),O&&Object(l.jsx)(G.a,{}),x&&"stuza"===j&&Object(l.jsx)(Re,{rows:n,columns:Ve})]})})},He=new s.QueryClient,We=[{label:"Stuzot Voting",page:Se,key:"voting",icon:Object(l.jsx)(j.a,{},"vote-icon")},{label:"Admin page",page:Ae,key:"admin",icon:Object(l.jsx)(d.a,{},"admin-icon")}];function ze(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){null===n&&r(Object(l.jsx)(Se,{}))}),[n]),Object(l.jsx)(R,{children:Object(l.jsx)(s.QueryClientProvider,{client:He,children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(o.a,{children:Object(l.jsx)(B,{pages:We,setPage:r})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(u,{page:n})]})})})}var Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,203)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};c.a.render(Object(l.jsx)(ze,{}),document.getElementById("root")),Ge()}},[[128,1,2]]]);
//# sourceMappingURL=main.ae09f72a.chunk.js.map