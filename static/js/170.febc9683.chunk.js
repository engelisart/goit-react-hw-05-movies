"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{81:function(n,e,r){r.d(e,{XT:function(){return s},au:function(){return p},bq:function(){return c},fh:function(){return u},q5:function(){return d}});var t=r(861),a=r(757),i=r.n(a),o=r(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.headers.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTk5MjJjNzA2ZDE5YjU4NWVmYzM5YmZiNmJlOWMzMiIsInN1YiI6IjY1NzliYjA0NGQyM2RkMDBlM2RlZDBkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlEJ_PeigLekgUaWj3EVoTX8j3ZhU3kLk8FJev0lAtQ",o.Z.defaults.headers.Accept="application/json",o.Z.defaults.params={include_adult:!0};var c=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/all/day");case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie",{params:{query:e,page:1}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},170:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t,a,i,o,c,s,u,p=r(861),d=r(439),l=r(757),x=r.n(l),f=r(689),h=r(81),v=r(791),b=r(168),m=r(867),Z=r(87),w=m.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),g=m.ZP.button(a||(a=(0,b.Z)(["\n  width: 100px;\n  height: 25px;\n  margin: 10px 0 20px 40px;\n\n  border-radius: 5px;\n  border: none;\n\n  font-size: 15px;\n  font-weight: 500;\n  background-color: #433333;\n  color: white;\n  cursor: pointer;\n"]))),j=m.ZP.div(i||(i=(0,b.Z)(["\n  padding: 20px;\n  display: flex;\n  gap: 25px;\n\n  border-bottom: 3px solid #bababa;\n  -webkit-box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);\n"]))),k=m.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 10px;\n"]))),y=m.ZP.div(c||(c=(0,b.Z)(["\n  border-bottom: 3px solid #bababa;\n  -webkit-box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  padding-top: 25px;\n"]))),J=m.ZP.h4(s||(s=(0,b.Z)(["\n  padding: 0 0 10px 30px;\n  color: black;\n"]))),I=(0,m.ZP)(Z.OL)(u||(u=(0,b.Z)(["\n  padding: 0 0 10px 30px;\n  color: black;\n"]))),z=r(184),_=function(){var n=(0,f.UO)().movieId,e=(0,v.useState)(),r=(0,d.Z)(e,2),t=r[0],a=r[1],i=(0,f.s0)();return(0,v.useEffect)((function(){var e=function(){var e=(0,p.Z)(x().mark((function e(){var r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.fh)(n);case 2:r=e.sent,a(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(w,{children:[(0,z.jsx)(g,{onClick:function(){i(-1)},children:"Go Back"}),(0,z.jsxs)(j,{children:[(0,z.jsx)("img",{src:null!==t&&void 0!==t&&t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(null===t||void 0===t?void 0:t.poster_path):"https://placehold.co/300x440",alt:(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name),width:"300px"}),(0,z.jsxs)(k,{children:[(0,z.jsx)("h2",{children:(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)}),(0,z.jsxs)("p",{children:["User score : ",null===t||void 0===t?void 0:t.vote_average.toFixed(1),"/10"]}),(0,z.jsx)("h3",{children:"Overview"}),(0,z.jsx)("p",{children:null===t||void 0===t?void 0:t.overview}),(0,z.jsx)("h3",{children:"Genres"}),(0,z.jsx)("p",{children:null===t||void 0===t?void 0:t.genres.map((function(n){return"".concat(n.name," ")}))})]})]}),(0,z.jsxs)(y,{children:[(0,z.jsx)(J,{children:"Additional information"}),(0,z.jsx)(I,{to:"cast",children:"Cast"}),(0,z.jsx)(I,{to:"reviews",children:"Reviews"})]}),(0,z.jsx)(f.j3,{})]})})}}}]);
//# sourceMappingURL=170.febc9683.chunk.js.map