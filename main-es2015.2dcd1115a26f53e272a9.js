(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(l,n,u){l.exports=u("zUnb")},AytR:function(l,n,u){"use strict";u.d(n,"a",(function(){return e}));const e={production:!0,hmr:!1,baseUrl:"https://newsapi.org/v2",token:"cf7bdf691130477f8e5d45d896c0887e"}},PuwV:function(l,n,u){"use strict";u.d(n,"a",(function(){return c}));var e=u("IheW"),t=u("AytR"),r=u("z6cu"),s=u("JIr8");class c{constructor(l){this.http=l,this.URL=t.a.baseUrl+"/top-headlines"}getHeadlines(l,n=1){let u=new e.g;return u=(u=(u=(u=(u=u.set("q",l.topic)).set("pageSize",l.pageSize.toString())).set("page",n.toString())).append("category",l.category)).append("country",l.country),this.http.get(this.URL,{params:u}).pipe(Object(s.a)(l=>Object(r.a)(l)))}}},XZcf:function(l,n,u){"use strict";u.d(n,"a",(function(){return s}));var e=u("AytR"),t=u("z6cu"),r=u("JIr8");class s{constructor(l){this.http=l,this.URL=e.a.baseUrl+"/sources"}getSources(){return this.http.get(this.URL).pipe(Object(r.a)(l=>Object(t.a)(l)))}}},crnd:function(l,n){function u(l){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+l+"'");throw n.code="MODULE_NOT_FOUND",n}))}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="crnd"},zUnb:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=u("AytR");u("rB/T");class r{}var s=u("iInd");class c{constructor(l){this.router=l,this.showSpinner=!1,this.router.events.subscribe(l=>{l instanceof s.d&&gtag("config","G-PM7FDJJRD0",{page_path:l.urlAfterRedirects})})}}var a=u("pMnS"),i=u("SVse");class b{}var o=e.nb({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,12,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,11,"div",[["class","jumbotron bg-light text-center my-5"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,1,"h1",[["class","display-4"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["News app"])),(l()(),e.pb(5,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Search for news from various sources"])),(l()(),e.pb(7,0,null,null,0,"hr",[["class","my-4"]],null,null,null,null,null)),(l()(),e.pb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Lookup hottest headlines or search by topic in multiple languages and categories."])),(l()(),e.pb(10,0,null,null,3,"p",[["class","lead"]],null,null,null,null,null)),(l()(),e.pb(11,0,null,null,2,"a",[["class","btn btn-primary btn-lg"],["routerLink","/headlines"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,12).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ob(12,671744,null,0,s.o,[s.l,s.a,i.k],{routerLink:[0,"routerLink"]},null),(l()(),e.Ib(-1,null,["Try now!"]))],(function(l,n){l(n,12,0,"/headlines")}),(function(l,n){l(n,11,0,e.Bb(n,12).target,e.Bb(n,12).href)}))}function d(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-home",[],null,null,null,p,o)),e.ob(1,49152,null,0,b,[],null,null)],null,null)}var h=e.lb("app-home",b,d,{},{},[]),z=u("9AJC"),k=u("G0yt");class v{constructor(){this.isCollapsed=!0,this.title="News App",this.subtitle="Breaking news, huge number of sources"}toggleDropdown(){this.isCollapsed=!this.isCollapsed}ngOnInit(){}}var f=e.nb({encapsulation:0,styles:[[".navbar-collapse[_ngcontent-%COMP%]{flex-grow:0}"]],data:{}});function g(l){return e.Kb(2,[(l()(),e.pb(0,0,null,null,32,"nav",[["class","navbar navbar-expand-lg navbar-dark bg-dark sticky-top d-flex justify-content-between"]],null,null,null,null,null)),e.ob(1,16384,null,0,k.bb,[],null,null),(l()(),e.pb(2,0,null,null,30,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,1,"a",[["class","m-0 navbar-brand"],["href","index.html"]],null,null,null,null,null)),(l()(),e.Ib(4,null,["",""])),(l()(),e.pb(5,0,null,null,1,"span",[["class","navbar-text d-none d-sm-inline"]],null,null,null,null,null)),(l()(),e.Ib(6,null,["",""])),(l()(),e.pb(7,0,null,null,1,"button",[["aria-controls","collapse"],["class"," navbar-toggler"],["type","button"]],[[1,"aria-expanded",0]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.toggleDropdown()&&e),e}),null,null)),(l()(),e.pb(8,0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(l()(),e.pb(9,0,null,null,23,"div",[["class","collapse navbar-collapse"],["id","collapse"]],[[2,"collapse",null],[2,"show",null]],null,null,null,null)),e.ob(10,16384,null,0,k.l,[],{collapsed:[0,"collapsed"]},null),(l()(),e.pb(11,0,null,null,21,"ul",[["class","navbar-nav"]],null,null,null,null,null)),(l()(),e.pb(12,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e.pb(13,0,null,null,5,"a",[["class","nav-link"],["routerLink","/home"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,14).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ob(14,671744,[[2,4]],0,s.o,[s.l,s.a,i.k],{routerLink:[0,"routerLink"]},null),e.ob(15,1720320,null,2,s.n,[s.l,e.k,e.C,[2,s.m],[2,s.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,1,{links:1}),e.Gb(603979776,2,{linksWithHrefs:1}),(l()(),e.Ib(-1,null,["Home"])),(l()(),e.pb(19,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e.pb(20,0,null,null,5,"a",[["class","nav-link"],["routerLink","/headlines"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,21).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ob(21,671744,[[4,4]],0,s.o,[s.l,s.a,i.k],{routerLink:[0,"routerLink"]},null),e.ob(22,1720320,null,2,s.n,[s.l,e.k,e.C,[2,s.m],[2,s.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,3,{links:1}),e.Gb(603979776,4,{linksWithHrefs:1}),(l()(),e.Ib(-1,null,["Top headlines"])),(l()(),e.pb(26,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e.pb(27,0,null,null,5,"a",[["class","nav-link"],["routerLink","/sources"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,28).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ob(28,671744,[[6,4]],0,s.o,[s.l,s.a,i.k],{routerLink:[0,"routerLink"]},null),e.ob(29,1720320,null,2,s.n,[s.l,e.k,e.C,[2,s.m],[2,s.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,5,{links:1}),e.Gb(603979776,6,{linksWithHrefs:1}),(l()(),e.Ib(-1,null,["Sources"]))],(function(l,n){l(n,10,0,n.component.isCollapsed),l(n,14,0,"/home"),l(n,15,0,"active"),l(n,21,0,"/headlines"),l(n,22,0,"active"),l(n,28,0,"/sources"),l(n,29,0,"active")}),(function(l,n){var u=n.component;l(n,4,0,u.title),l(n,6,0,u.subtitle),l(n,7,0,u.isCollapsed),l(n,9,0,!0,!e.Bb(n,10).collapsed),l(n,13,0,e.Bb(n,14).target,e.Bb(n,14).href),l(n,20,0,e.Bb(n,21).target,e.Bb(n,21).href),l(n,27,0,e.Bb(n,28).target,e.Bb(n,28).href)}))}var m=e.nb({encapsulation:0,styles:[[""]],data:{}});function y(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,12,"div",[["class","sk-circle"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,0,"div",[["class","sk-circle1 sk-child"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,0,"div",[["class","sk-circle2 sk-child"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,0,"div",[["class","sk-circle3 sk-child"]],null,null,null,null,null)),(l()(),e.pb(4,0,null,null,0,"div",[["class","sk-circle4 sk-child"]],null,null,null,null,null)),(l()(),e.pb(5,0,null,null,0,"div",[["class","sk-circle5 sk-child"]],null,null,null,null,null)),(l()(),e.pb(6,0,null,null,0,"div",[["class","sk-circle6 sk-child"]],null,null,null,null,null)),(l()(),e.pb(7,0,null,null,0,"div",[["class","sk-circle7 sk-child"]],null,null,null,null,null)),(l()(),e.pb(8,0,null,null,0,"div",[["class","sk-circle8 sk-child"]],null,null,null,null,null)),(l()(),e.pb(9,0,null,null,0,"div",[["class","sk-circle9 sk-child"]],null,null,null,null,null)),(l()(),e.pb(10,0,null,null,0,"div",[["class","sk-circle10 sk-child"]],null,null,null,null,null)),(l()(),e.pb(11,0,null,null,0,"div",[["class","sk-circle11 sk-child"]],null,null,null,null,null)),(l()(),e.pb(12,0,null,null,0,"div",[["class","sk-circle12 sk-child"]],null,null,null,null,null))],null,null)}function w(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-navbar",[],null,null,null,g,f)),e.ob(1,114688,null,0,v,[],null,null),(l()(),e.pb(2,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,y)),e.ob(4,16384,null,0,i.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.ob(6,212992,null,0,s.q,[s.b,e.N,e.j,[8,null],e.h],null,null)],(function(l,n){var u=n.component;l(n,1,0),l(n,4,0,u.showSpinner),l(n,6,0)}),null)}function L(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-root",[],null,null,null,w,m)),e.ob(1,49152,null,0,c,[s.l],null,null)],null,null)}var j=e.lb("app-root",c,L,{},{},[]),A=u("cUpR"),K=u("IheW");class B{constructor(){}intercept(l,n){const u=l.clone({headers:l.headers.set("Authorization",t.a.token)});return n.handle(u)}}var I=u("PuwV"),C=u("XZcf"),R=u("z6cu"),S=u("JIr8");class U{constructor(l){this.http=l,this.url=t.a.baseUrl+"/everything"}getEverything(l){let n=new K.g;n=n.append("q",l.q);for(const u of l.language)n=n.append("language",u);return this.http.get(this.url,{params:n}).pipe(Object(S.a)(l=>Object(R.a)(l)))}}var O=u("s7LF"),q=u("3pDu");class x{}const D=()=>Promise.all([u.e(1),u.e(7)]).then(u.bind(null,"qwTI")).then(l=>l.HeadlinesModuleNgFactory),J=()=>Promise.all([u.e(1),u.e(8)]).then(u.bind(null,"H/UL")).then(l=>l.SourcesModuleNgFactory);class M{}var N=e.mb(r,[c],(function(l){return e.yb([e.zb(512,e.j,e.Y,[[8,[a.a,h,z.a,z.b,z.f,z.g,z.c,z.d,z.e,j]],[3,e.j],e.w]),e.zb(5120,e.t,e.jb,[[3,e.t]]),e.zb(4608,i.o,i.n,[e.t,[2,i.B]]),e.zb(5120,e.gb,e.kb,[e.y]),e.zb(5120,e.r,e.hb,[]),e.zb(5120,e.s,e.ib,[]),e.zb(4608,A.b,A.k,[i.d]),e.zb(6144,e.F,null,[A.b]),e.zb(4608,A.e,A.g,[]),e.zb(5120,A.c,(function(l,n,u,e,t,r,s,c){return[new A.i(l,n,u),new A.n(e),new A.m(t,r,s,c)]}),[i.d,e.y,e.A,i.d,i.d,A.e,e.Z,[2,A.f]]),e.zb(4608,A.d,A.d,[A.c,e.y]),e.zb(135680,A.l,A.l,[i.d]),e.zb(4608,A.j,A.j,[A.d,A.l,e.c]),e.zb(6144,e.D,null,[A.j]),e.zb(6144,A.o,null,[A.l]),e.zb(4608,e.L,e.L,[e.y]),e.zb(4608,K.i,K.o,[i.d,e.A,K.m]),e.zb(4608,K.p,K.p,[K.i,K.n]),e.zb(5120,K.a,(function(l){return[l,new B]}),[K.p]),e.zb(4608,K.l,K.l,[]),e.zb(6144,K.j,null,[K.l]),e.zb(4608,K.h,K.h,[K.j]),e.zb(6144,K.b,null,[K.h]),e.zb(4608,K.f,K.k,[K.b,e.q]),e.zb(4608,K.c,K.c,[K.f]),e.zb(4608,I.a,I.a,[K.c]),e.zb(4608,C.a,C.a,[K.c]),e.zb(4608,U,U,[K.c]),e.zb(5120,s.a,s.A,[s.l]),e.zb(4608,s.f,s.f,[]),e.zb(6144,s.g,null,[s.f]),e.zb(135680,s.r,s.r,[s.l,e.v,e.i,e.q,s.g]),e.zb(4608,s.e,s.e,[]),e.zb(5120,s.F,s.w,[s.l,i.t,s.h]),e.zb(5120,s.i,s.D,[s.B]),e.zb(5120,e.b,(function(l){return[l]}),[s.i]),e.zb(4608,O.s,O.s,[]),e.zb(4608,k.u,k.u,[e.j,e.q,k.jb,k.v]),e.zb(5120,q.e,q.h,[q.c,e.A]),e.zb(4608,q.b,q.b,[q.e]),e.zb(4608,q.d,q.d,[q.e]),e.zb(1073742336,i.c,i.c,[]),e.zb(1024,e.l,A.q,[]),e.zb(1024,e.x,(function(){return[s.v()]}),[]),e.zb(512,s.B,s.B,[e.q]),e.zb(256,e.c,"serverApp",[]),e.zb(2048,A.p,null,[e.c]),e.zb(256,q.f,"/news-app/ngsw-worker.js",[]),e.zb(256,q.c,{enabled:!0},[]),e.zb(1024,e.d,(function(l,n,u,e,t,r,c,a,i){return[A.s(l),s.C(n),A.r(u,e,t),q.g(r,c,a,i)]}),[[2,e.x],s.B,A.p,i.d,e.q,e.q,q.f,q.c,e.A]),e.zb(512,e.e,e.e,[[2,e.d]]),e.zb(131584,e.g,e.g,[e.y,e.Z,e.q,e.l,e.j,e.e]),e.zb(1073742336,e.f,e.f,[e.g]),e.zb(1073742336,A.a,A.a,[[3,A.a]]),e.zb(1073742336,K.e,K.e,[]),e.zb(1073742336,K.d,K.d,[]),e.zb(1073742336,x,x,[]),e.zb(1024,s.u,s.y,[[3,s.l]]),e.zb(512,s.t,s.c,[]),e.zb(512,s.b,s.b,[]),e.zb(256,s.h,{preloadingStrategy:s.f,onSameUrlNavigation:"reload",anchorScrolling:"enabled"},[]),e.zb(1024,i.k,s.x,[i.r,[2,i.a],s.h]),e.zb(512,i.j,i.j,[i.k,i.r]),e.zb(512,e.i,e.i,[]),e.zb(512,e.v,e.I,[e.i,[2,e.J]]),e.zb(1024,s.j,(function(){return[[{path:"",component:b},{path:"headlines",loadChildren:D},{path:"sources",loadChildren:J},{path:"**",redirectTo:""}]]}),[]),e.zb(1024,s.l,s.z,[e.g,s.t,s.b,i.j,e.q,e.v,e.i,s.j,s.h,[2,s.s],[2,s.k]]),e.zb(1073742336,s.p,s.p,[[2,s.u],[2,s.l]]),e.zb(1073742336,M,M,[]),e.zb(1073742336,k.c,k.c,[]),e.zb(1073742336,k.f,k.f,[]),e.zb(1073742336,k.g,k.g,[]),e.zb(1073742336,k.k,k.k,[]),e.zb(1073742336,k.m,k.m,[]),e.zb(1073742336,O.r,O.r,[]),e.zb(1073742336,O.g,O.g,[]),e.zb(1073742336,k.r,k.r,[]),e.zb(1073742336,k.s,k.s,[]),e.zb(1073742336,k.w,k.w,[]),e.zb(1073742336,k.A,k.A,[]),e.zb(1073742336,k.D,k.D,[]),e.zb(1073742336,k.G,k.G,[]),e.zb(1073742336,k.J,k.J,[]),e.zb(1073742336,k.M,k.M,[]),e.zb(1073742336,k.R,k.R,[]),e.zb(1073742336,k.U,k.U,[]),e.zb(1073742336,k.V,k.V,[]),e.zb(1073742336,k.W,k.W,[]),e.zb(1073742336,k.x,k.x,[]),e.zb(1073742336,q.a,q.a,[]),e.zb(1073742336,r,r,[]),e.zb(256,e.X,!0,[]),e.zb(256,K.m,"XSRF-TOKEN",[]),e.zb(256,K.n,"X-XSRF-TOKEN",[])])}));document.addEventListener("DOMContentLoaded",()=>{t.a.production&&Object(e.R)(),t.a.hmr?(console.error("HMR is not enabled for webpack-dev-server!"),console.log("Are you using the --hmr flag for ng serve?")):(()=>A.h().bootstrapModuleFactory(N))()})}},[[0,0,6]]]);