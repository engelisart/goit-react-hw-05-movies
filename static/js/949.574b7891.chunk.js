"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[949],{81:function(n,e,t){t.d(e,{XT:function(){return o},au:function(){return p},bq:function(){return c},fh:function(){return s},q5:function(){return f}});var r=t(861),a=t(757),u=t.n(a),i=t(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.headers.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTk5MjJjNzA2ZDE5YjU4NWVmYzM5YmZiNmJlOWMzMiIsInN1YiI6IjY1NzliYjA0NGQyM2RkMDBlM2RlZDBkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlEJ_PeigLekgUaWj3EVoTX8j3ZhU3kLk8FJev0lAtQ",i.Z.defaults.headers.Accept="application/json",i.Z.defaults.params={include_adult:!0};var c=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie",{params:{query:e,page:1}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},949:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,u,i=t(861),c=t(439),o=t(757),s=t.n(o),p=t(81),f=t(791),l=t(168),d=t(867),h=d.ZP.form(r||(r=(0,l.Z)(["\n  margin: 10px;\n  width: 250px;\n  display: flex;\n  border: 0.051em solid #8b878784;\n  & input {\n    width: 200px;\n    height: 25px;\n    border: 0 solid grey;\n    outline: none;\n    text-align: center;\n  }\n  & input:hover {\n    border-color: #75adde;\n    background-color: #e4edf5;\n  }\n\n  & button {\n    height: 25px;\n    width: 50px;\n    border: 0 solid grey;\n    background-color: #233b47;\n    color: white;\n    font-size: 11px;\n  }\n"]))),x=t(184),v=function(n){var e=n.handleChangeMovie,t=(0,f.useState)(""),r=(0,c.Z)(t,2),a=r[0],u=r[1];return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(h,{onSubmit:function(n){n.preventDefault(),e(a)},children:[(0,x.jsx)("input",{type:"text",name:"search",placeholder:"",value:a,onChange:function(n){u(n.target.value)},autoComplete:"off"}),(0,x.jsx)("button",{children:"Search"})]})})},m=t(87),g=(d.ZP.h1(a||(a=(0,l.Z)(["\n  margin: 0;\n  margin-left: 30px;\n  font-size: 40px;\n  font-weight: 700;\n"]))),d.ZP.ul(u||(u=(0,l.Z)(["\n  padding-top: 10px;\n  padding-left: 80px;\n\n  font-size: 20px;\n  font-weight: 400;\n\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"])))),Z=function(){var n=(0,f.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)([]),u=(0,c.Z)(a,2),o=u[0],l=u[1];(0,f.useEffect)((function(){var n=function(){var n=(0,i.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.XT)(t);case 2:e=n.sent,l(e.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[t]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v,{handleChangeMovie:function(n){r(n)}}),(0,x.jsx)("ul",{children:o.map((function(n){return(0,x.jsx)(g,{children:(0,x.jsx)(m.rU,{to:"/movies/".concat(n.id),children:n.title||n.name})},n.id)}))})]})}}}]);
//# sourceMappingURL=949.574b7891.chunk.js.map