"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{81:function(n,t,e){e.d(t,{XT:function(){return o},au:function(){return p},bq:function(){return c},fh:function(){return s},q5:function(){return l}});var r=e(861),a=e(757),u=e.n(a),i=e(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.headers.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTk5MjJjNzA2ZDE5YjU4NWVmYzM5YmZiNmJlOWMzMiIsInN1YiI6IjY1NzliYjA0NGQyM2RkMDBlM2RlZDBkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlEJ_PeigLekgUaWj3EVoTX8j3ZhU3kLk8FJev0lAtQ",i.Z.defaults.headers.Accept="application/json",i.Z.defaults.params={include_adult:!0};var c=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie",{params:{query:t,page:1}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},736:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,u,i=e(861),c=e(439),o=e(757),s=e.n(o),p=e(81),l=e(791),f=e(689),d=e(168),h=e(867),v=h.ZP.ul(r||(r=(0,d.Z)(["\n  padding: 20px;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-between;\n"]))),m=h.ZP.li(a||(a=(0,d.Z)(["\n  list-style: none;\n"]))),x=h.ZP.p(u||(u=(0,d.Z)(["\n  text-align: center;\n"]))),Z=e(184),w=function(){var n,t=(0,f.UO)().movieId,e=(0,l.useState)(),r=(0,c.Z)(e,2),a=r[0],u=r[1];return(0,l.useEffect)((function(){var n=function(){var n=(0,i.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.au)(t);case 2:e=n.sent,u(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(v,{children:null===a||void 0===a||null===(n=a.cast)||void 0===n?void 0:n.map((function(n){return(0,Z.jsxs)(m,{children:[null!==n&&void 0!==n&&n.profile_path?(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(null===n||void 0===n?void 0:n.profile_path),alt:null===n||void 0===n?void 0:n.name,width:"300px",height:"440px"}):(0,Z.jsx)("img",{src:"https://placehold.co/300x440",alt:null===n||void 0===n?void 0:n.name,width:"300px",height:"440px"}),(0,Z.jsx)(x,{children:null===n||void 0===n?void 0:n.name}),(0,Z.jsx)(x,{children:"Character : ".concat(null===n||void 0===n?void 0:n.character)})]},n.id)}))})})}}}]);
//# sourceMappingURL=736.e3312533.chunk.js.map