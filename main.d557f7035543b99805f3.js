(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(l,n,e){l.exports=e("zUnb")},AytR:function(l,n,e){"use strict";e.d(n,"a",function(){return t});var t={production:!0,hmr:!1,baseUrl:"https://newsapi.org/v2",token:"2c35501e6a3840d6bd4d7bb11cd57e0d"}},PuwV:function(l,n,e){"use strict";e.d(n,"a",function(){return r});var t=e("t/Na"),u=e("AytR"),r=function(){function l(l){this.http=l,this.URL=u.a.baseUrl+"/top-headlines"}return l.prototype.getHeadlines=function(l){var n=new t.g;n=n.append("topic",l.topic);for(var e=0,u=l.category;e<u.length;e++)n=n.append("category",u[e]);for(var r=0,o=l.country;r<o.length;r++)n=n.append("country",o[r]);return this.http.get(this.URL,{params:n})},l}()},XZcf:function(l,n,e){"use strict";e.d(n,"a",function(){return u});var t=e("AytR"),u=function(){function l(l){this.http=l,this.URL=t.a.baseUrl+"/sources"}return l.prototype.getSources=function(){return this.http.get(this.URL)},l}()},crnd:function(l,n,e){var t={"./everything/everything.module.ngfactory":["Nid4",0,6],"./headlines/headlines.module.ngfactory":["qwTI",0,5],"./sources/sources.module.ngfactory":["H/UL",0,7]};function u(l){var n=t[l];return n?Promise.all(n.slice(1).map(e.e)).then(function(){return e(n[0])}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+l+"'");throw n.code="MODULE_NOT_FOUND",n})}u.keys=function(){return Object.keys(t)},u.id="crnd",l.exports=u},lFuy:function(l,n,e){"use strict";e.d(n,"a",function(){return r});var t=e("AytR"),u=e("t/Na"),r=function(){function l(l){this.http=l,this.url=t.a.baseUrl+"/everything"}return l.prototype.getEverything=function(l){var n=new u.g;n=n.append("q",l.q);for(var e=0,t=l.language;e<t.length;e++)n=n.append("language",t[e]);return this.http.get(this.url,{params:n})},l}()},zUnb:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("AytR"),r=(e("rB/T"),function(){return function(){}}()),o=function(){return function(){}}(),a=e("pMnS"),i=e("ZYCi"),d=e("Ip0R"),c=function(){return function(){}}(),p=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function s(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,14,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,12,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,11,"div",[["class","jumbotron text-center my-5"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"h1",[["class","display-4"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["News app"])),(l()(),t["\u0275eld"](6,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Search for news from various sources"])),(l()(),t["\u0275eld"](8,0,null,null,0,"hr",[["class","my-4"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Lookup hottest headlines or search by topic in multiple languages and categories."])),(l()(),t["\u0275eld"](11,0,null,null,3,"p",[["class","lead"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,2,"a",[["class","btn btn-primary btn-lg"],["routerLink","/headlines"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,13).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](13,671744,null,0,i.m,[i.k,i.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),t["\u0275ted"](-1,null,["Try now!"]))],function(l,n){l(n,13,0,"/headlines")},function(l,n){l(n,12,0,t["\u0275nov"](n,13).target,t["\u0275nov"](n,13).href)})}function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-home",[],null,null,null,s,p)),t["\u0275did"](1,49152,null,0,c,[],null,null)],null,null)}var f=t["\u0275ccf"]("app-home",c,m,{},{},[]),v=e("9AJC"),h=e("4GxJ"),g=function(){function l(){this.isCollapsed=!0,this.title="News App",this.subtitle="Search for news from various sources"}return l.prototype.toggleDropdown=function(){this.isCollapsed=!this.isCollapsed},l.prototype.ngOnInit=function(){},l}(),k=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,38,"nav",[["class","navbar navbar-expand-lg navbar-dark bg-dark"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"a",[["class"," navbar-brand"],["routerLink",""]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](2,671744,null,0,i.m,[i.k,i.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275eld"](4,0,null,null,1,"span",[["class","navbar-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["",""])),(l()(),t["\u0275eld"](6,0,null,null,1,"button",[["aria-controls","collapse"],["class"," navbar-toggler"],["type","button"]],[[1,"aria-expanded",0]],[[null,"blur"],[null,"click"]],function(l,n,e){var t=!0,u=l.component;return"blur"===n&&(t=!1!==u.toggleDropdown()&&t),"click"===n&&(t=!1!==u.toggleDropdown()&&t),t},null,null)),(l()(),t["\u0275eld"](7,0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,30,"div",[["class","collapse navbar-collapse ml-auto"],["id","collapse"]],[[2,"collapse",null],[2,"show",null]],null,null,null,null)),t["\u0275did"](9,16384,null,0,h.l,[],{collapsed:[0,"collapsed"]},null),(l()(),t["\u0275eld"](10,0,null,null,28,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,5,"a",[["class","nav-link"],["routerLink","/home"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,13).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](13,671744,[[2,4]],0,i.m,[i.k,i.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](14,1720320,null,2,i.l,[i.k,t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,1,{links:1}),t["\u0275qud"](603979776,2,{linksWithHrefs:1}),(l()(),t["\u0275ted"](-1,null,["Home"])),(l()(),t["\u0275eld"](18,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](19,0,null,null,5,"a",[["class","nav-link"],["routerLink","/headlines"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,20).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](20,671744,[[4,4]],0,i.m,[i.k,i.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](21,1720320,null,2,i.l,[i.k,t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,3,{links:1}),t["\u0275qud"](603979776,4,{linksWithHrefs:1}),(l()(),t["\u0275ted"](-1,null,["Top headlines"])),(l()(),t["\u0275eld"](25,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](26,0,null,null,5,"a",[["class","nav-link"],["routerLink","/everything"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,27).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](27,671744,[[6,4]],0,i.m,[i.k,i.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](28,1720320,null,2,i.l,[i.k,t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,5,{links:1}),t["\u0275qud"](603979776,6,{linksWithHrefs:1}),(l()(),t["\u0275ted"](-1,null,["Everything"])),(l()(),t["\u0275eld"](32,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](33,0,null,null,5,"a",[["class","nav-link"],["routerLink","/sources"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,34).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](34,671744,[[8,4]],0,i.m,[i.k,i.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](35,1720320,null,2,i.l,[i.k,t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,7,{links:1}),t["\u0275qud"](603979776,8,{linksWithHrefs:1}),(l()(),t["\u0275ted"](-1,null,["Sources"]))],function(l,n){var e=n.component;l(n,2,0,""),l(n,9,0,e.isCollapsed),l(n,13,0,"/home"),l(n,14,0,"active"),l(n,20,0,"/headlines"),l(n,21,0,"active"),l(n,27,0,"/everything"),l(n,28,0,"active"),l(n,34,0,"/sources"),l(n,35,0,"active")},function(l,n){var e=n.component;l(n,1,0,t["\u0275nov"](n,2).target,t["\u0275nov"](n,2).href),l(n,3,0,e.title),l(n,5,0,e.subtitle),l(n,6,0,e.isCollapsed),l(n,8,0,!0,!t["\u0275nov"](n,9).collapsed),l(n,12,0,t["\u0275nov"](n,13).target,t["\u0275nov"](n,13).href),l(n,19,0,t["\u0275nov"](n,20).target,t["\u0275nov"](n,20).href),l(n,26,0,t["\u0275nov"](n,27).target,t["\u0275nov"](n,27).href),l(n,33,0,t["\u0275nov"](n,34).target,t["\u0275nov"](n,34).href)})}var L=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-navbar",[],null,null,null,y,k)),t["\u0275did"](1,114688,null,0,g,[],null,null),(l()(),t["\u0275eld"](2,0,null,null,2,"h1",[],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"noscript",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["This website requires Javascript to function."])),(l()(),t["\u0275eld"](5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](6,212992,null,0,i.o,[i.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(l,n){l(n,1,0),l(n,6,0)},null)}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-root",[],null,null,null,b,L)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)}var C=t["\u0275ccf"]("app-root",o,A,{},{},[]),R=e("ZYjt"),w=e("t/Na"),I=function(){function l(){}return l.prototype.intercept=function(l,n){var e=l.clone({headers:l.headers.set("X-Api-Key",u.a.token),responseType:"json"});return n.handle(e)},l}(),N=e("PuwV"),_=e("XZcf"),E=e("lFuy"),T=e("gIcY"),M=e("AtLt"),D=function(){return function(){}}(),O=function(){return function(){}}(),P=t["\u0275cmf"](r,[o],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,f,v.a,v.b,v.g,v.c,v.d,v.e,v.f,C]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](5120,t.LOCALE_ID,t["\u0275angular_packages_core_core_k"],[[3,t.LOCALE_ID]]),t["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](5120,t.IterableDiffers,t["\u0275angular_packages_core_core_i"],[]),t["\u0275mpd"](5120,t.KeyValueDiffers,t["\u0275angular_packages_core_core_j"],[]),t["\u0275mpd"](4608,R.b,R.k,[d.DOCUMENT]),t["\u0275mpd"](6144,t.Sanitizer,null,[R.b]),t["\u0275mpd"](4608,R.e,R.g,[]),t["\u0275mpd"](5120,R.c,function(l,n,e,t,u,r,o,a){return[new R.i(l,n,e),new R.n(t),new R.m(u,r,o,a)]},[d.DOCUMENT,t.NgZone,t.PLATFORM_ID,d.DOCUMENT,d.DOCUMENT,R.e,t["\u0275Console"],[2,R.f]]),t["\u0275mpd"](4608,R.d,R.d,[R.c,t.NgZone]),t["\u0275mpd"](135680,R.l,R.l,[d.DOCUMENT]),t["\u0275mpd"](4608,R.j,R.j,[R.d,R.l]),t["\u0275mpd"](6144,t.RendererFactory2,null,[R.j]),t["\u0275mpd"](6144,R.o,null,[R.l]),t["\u0275mpd"](4608,t.Testability,t.Testability,[t.NgZone]),t["\u0275mpd"](4608,w.i,w.o,[d.DOCUMENT,t.PLATFORM_ID,w.m]),t["\u0275mpd"](4608,w.p,w.p,[w.i,w.n]),t["\u0275mpd"](5120,w.a,function(l){return[l,new I]},[w.p]),t["\u0275mpd"](4608,w.l,w.l,[]),t["\u0275mpd"](6144,w.j,null,[w.l]),t["\u0275mpd"](4608,w.h,w.h,[w.j]),t["\u0275mpd"](6144,w.b,null,[w.h]),t["\u0275mpd"](4608,w.f,w.k,[w.b,t.Injector]),t["\u0275mpd"](4608,w.c,w.c,[w.f]),t["\u0275mpd"](4608,N.a,N.a,[w.c]),t["\u0275mpd"](4608,_.a,_.a,[w.c]),t["\u0275mpd"](4608,E.a,E.a,[w.c]),t["\u0275mpd"](5120,i.a,i.z,[i.k]),t["\u0275mpd"](4608,i.e,i.e,[]),t["\u0275mpd"](6144,i.f,null,[i.e]),t["\u0275mpd"](135680,i.p,i.p,[i.k,t.NgModuleFactoryLoader,t.Compiler,t.Injector,i.f]),t["\u0275mpd"](4608,i.d,i.d,[]),t["\u0275mpd"](5120,i.D,i.v,[i.k,d.ViewportScroller,i.g]),t["\u0275mpd"](5120,i.h,i.C,[i.A]),t["\u0275mpd"](5120,t.APP_BOOTSTRAP_LISTENER,function(l){return[l]},[i.h]),t["\u0275mpd"](4608,T.B,T.B,[]),t["\u0275mpd"](4608,h.u,h.u,[t.ComponentFactoryResolver,t.Injector,h.S,h.v]),t["\u0275mpd"](5120,M.d,M.h,[M.e,t.PLATFORM_ID]),t["\u0275mpd"](4608,M.b,M.b,[M.d]),t["\u0275mpd"](4608,M.c,M.c,[M.d]),t["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),t["\u0275mpd"](1024,t.ErrorHandler,R.q,[]),t["\u0275mpd"](1024,t.NgProbeToken,function(){return[i.u()]},[]),t["\u0275mpd"](512,i.A,i.A,[t.Injector]),t["\u0275mpd"](256,t.APP_ID,"serverApp",[]),t["\u0275mpd"](2048,R.p,null,[t.APP_ID]),t["\u0275mpd"](256,M.f,"/news-app/ngsw-worker.js",[]),t["\u0275mpd"](256,M.e,{enabled:!0},[]),t["\u0275mpd"](1024,t.APP_INITIALIZER,function(l,n,e,t,u,r,o,a,d){return[R.s(l),i.B(n),R.r(e,t,u),M.g(r,o,a,d)]},[[2,t.NgProbeToken],i.A,R.p,d.DOCUMENT,t.Injector,t.Injector,M.f,M.e,t.PLATFORM_ID]),t["\u0275mpd"](512,t.ApplicationInitStatus,t.ApplicationInitStatus,[[2,t.APP_INITIALIZER]]),t["\u0275mpd"](131584,t.ApplicationRef,t.ApplicationRef,[t.NgZone,t["\u0275Console"],t.Injector,t.ErrorHandler,t.ComponentFactoryResolver,t.ApplicationInitStatus]),t["\u0275mpd"](1073742336,t.ApplicationModule,t.ApplicationModule,[t.ApplicationRef]),t["\u0275mpd"](1073742336,R.a,R.a,[[3,R.a]]),t["\u0275mpd"](1073742336,w.e,w.e,[]),t["\u0275mpd"](1073742336,w.d,w.d,[]),t["\u0275mpd"](1073742336,D,D,[]),t["\u0275mpd"](1024,i.t,i.x,[[3,i.k]]),t["\u0275mpd"](512,i.r,i.c,[]),t["\u0275mpd"](512,i.b,i.b,[]),t["\u0275mpd"](256,i.g,{preloadingStrategy:i.e},[]),t["\u0275mpd"](1024,d.LocationStrategy,i.w,[d.PlatformLocation,[2,d.APP_BASE_HREF],i.g]),t["\u0275mpd"](512,d.Location,d.Location,[d.LocationStrategy]),t["\u0275mpd"](512,t.Compiler,t.Compiler,[]),t["\u0275mpd"](512,t.NgModuleFactoryLoader,t.SystemJsNgModuleLoader,[t.Compiler,[2,t.SystemJsNgModuleLoaderConfig]]),t["\u0275mpd"](1024,i.i,function(){return[[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",component:c},{path:"headlines",loadChildren:"./headlines/headlines.module#HeadlinesModule"},{path:"everything",loadChildren:"./everything/everything.module#EverythingModule"},{path:"sources",loadChildren:"./sources/sources.module#SourcesModule"},{path:"**",redirectTo:"home"}]]},[]),t["\u0275mpd"](1024,i.k,i.y,[t.ApplicationRef,i.r,i.b,d.Location,t.Injector,t.NgModuleFactoryLoader,t.Compiler,i.i,i.g,[2,i.q],[2,i.j]]),t["\u0275mpd"](1073742336,i.n,i.n,[[2,i.t],[2,i.k]]),t["\u0275mpd"](1073742336,O,O,[]),t["\u0275mpd"](1073742336,h.c,h.c,[]),t["\u0275mpd"](1073742336,h.f,h.f,[]),t["\u0275mpd"](1073742336,h.g,h.g,[]),t["\u0275mpd"](1073742336,h.k,h.k,[]),t["\u0275mpd"](1073742336,h.m,h.m,[]),t["\u0275mpd"](1073742336,T.y,T.y,[]),t["\u0275mpd"](1073742336,T.l,T.l,[]),t["\u0275mpd"](1073742336,h.r,h.r,[]),t["\u0275mpd"](1073742336,h.s,h.s,[]),t["\u0275mpd"](1073742336,h.w,h.w,[]),t["\u0275mpd"](1073742336,h.A,h.A,[]),t["\u0275mpd"](1073742336,h.B,h.B,[]),t["\u0275mpd"](1073742336,h.E,h.E,[]),t["\u0275mpd"](1073742336,h.H,h.H,[]),t["\u0275mpd"](1073742336,h.K,h.K,[]),t["\u0275mpd"](1073742336,h.O,h.O,[]),t["\u0275mpd"](1073742336,h.P,h.P,[]),t["\u0275mpd"](1073742336,h.Q,h.Q,[]),t["\u0275mpd"](1073742336,h.x,h.x,[]),t["\u0275mpd"](1073742336,M.a,M.a,[]),t["\u0275mpd"](1073742336,r,r,[]),t["\u0275mpd"](256,t["\u0275APP_ROOT"],!0,[]),t["\u0275mpd"](256,w.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,w.n,"X-XSRF-TOKEN",[])])});document.addEventListener("DOMContentLoaded",function(){u.a.production&&Object(t.enableProdMode)(),u.a.hmr?(console.error("HMR is not enabled for webpack-dev-server!"),console.log("Are you using the --hmr flag for ng serve?")):R.h().bootstrapModuleFactory(P)})}},[[0,1,8]]]);