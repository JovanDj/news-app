webpackJsonp([2],{"6BDg":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("WT6e"),t=function(){},a=e("NfKk"),d=e("aw/f"),i=e("4qxJ"),o=e("h4vs"),s=e("1Wt5"),c=e("qmzJ"),r=e("SYiH"),p=e("0DDR"),m=e("2MpB"),f=e("Xjw4"),b=e("7DMc"),g=e("Yi4Z"),v=e("tSZT"),h=function(){function l(l){this.req=l,this.form=new b.j({}),this.model={topic:"",category:["general"],country:["us"]},this.fields=[{fieldGroupClassName:"row",fieldGroup:[{className:"col-md-3 offset-md-3",key:"category",type:"select",templateOptions:{label:"Category",multiple:!0,options:[{label:"Business",value:"business"},{label:"Entertainment",value:"entertainment"},{label:"Gaming",value:"gaming"},{label:"General",value:"general"},{label:"Music",value:"music"},{label:"Politics",value:"politics"},{label:"Health and medical",value:"health-and-medical"},{label:"Science and nature",value:"science-and-nature"},{label:"Sport",value:"sport"},{label:"Technology",value:"technology"}]}},{className:"col-md-3",key:"country",type:"select",templateOptions:{label:"Country",multiple:!0,options:[{label:"United Arab Emirates",value:"ae"},{label:"Argentina",value:"ar"},{label:"Serbia",value:"rs"},{label:"Germany",value:"de"},{label:"United Kingdom of Great Britain and Northern Ireland",value:"gb"},{label:"United States of America",value:"us"},{label:"Hungary",value:"hu"},{label:"Romania",value:"ro"}]}},{className:"col-md-6 offset-md-3",key:"topic",type:"input",templateOptions:{type:"text",label:"Topic",placeholder:"Enter topic"}}]}]}return l.prototype.getHeadlines=function(l){var n=this;this.showSpinner=!0,console.log(l),this.headlinesSub=this.req.getHeadlines(l).subscribe(function(l){console.log(l),n.headlines=l,n.showSpinner=!1},function(l){console.log(l)})},l.prototype.ngOnInit=function(){},l.prototype.ngOnDestroy=function(){this.headlinesSub&&this.headlinesSub.unsubscribe()},l}(),k=u["\u0275crt"]({encapsulation:0,styles:[['.sk-circle[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]:before{background-color:#fff}img[_ngcontent-%COMP%]:before{content:"We\'re sorry, the image below is broken :(";display:block;margin-bottom:10px}img[_ngcontent-%COMP%]:after{content:"We\'re sorry, this image is broken :(";font-size:16px;font-family:FontAwesome;color:#646464;display:block;position:absolute;z-index:2;top:0;left:0;width:100%;height:100%;background-color:#fff}']],data:{}});function y(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["Number of articles: ",""])),u["\u0275ppd"](2,1)],null,function(l,n){var e=n.component;l(n,1,0,u["\u0275unv"](n,1,0,l(n,2,0,u["\u0275nov"](n.parent,0),e.headlines.articles.length)))})}function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,25,"div",[["class","sk-circle"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](2,0,null,null,0,"div",[["class","sk-circle1 sk-child"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](4,0,null,null,0,"div",[["class","sk-circle2 sk-child"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](6,0,null,null,0,"div",[["class","sk-circle3 sk-child"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](8,0,null,null,0,"div",[["class","sk-circle4 sk-child"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](10,0,null,null,0,"div",[["class","sk-circle5 sk-child"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](12,0,null,null,0,"div",[["class","sk-circle6 sk-child"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](14,0,null,null,0,"div",[["class","sk-circle7 sk-child"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](16,0,null,null,0,"div",[["class","sk-circle8 sk-child"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](18,0,null,null,0,"div",[["class","sk-circle9 sk-child"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](20,0,null,null,0,"div",[["class","sk-circle10 sk-child"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](22,0,null,null,0,"div",[["class","sk-circle11 sk-child"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](24,0,null,null,0,"div",[["class","sk-circle12 sk-child"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n"]))],null,null)}function w(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,49,"article",[["class","articles mb-1"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](2,0,null,null,46,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275eld"](4,0,null,null,41,"div",[["class","row py-1"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275eld"](6,0,null,null,6,"div",[["class","col-md-7 pb-1"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275eld"](8,0,null,null,3,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n            "])),(l()(),u["\u0275eld"](10,0,null,null,0,"img",[["class","img-fluid img-thumbnail rounded mx-auto d-block border border-light"],["on",""]],[[8,"src",4],[8,"title",0],[8,"alt",0]],null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275eld"](14,0,null,null,30,"div",[["class","col-md-5"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275eld"](16,0,null,null,8,"h5",[["class","text-center"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n            "])),(l()(),u["\u0275eld"](18,0,null,null,2,"span",[["class","badge badge-light pull-left"]],null,null,null,null,null)),(l()(),u["\u0275ted"](19,null,["",""])),u["\u0275ppd"](20,1),(l()(),u["\u0275ted"](-1,null,["\n            "])),(l()(),u["\u0275eld"](22,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),u["\u0275ted"](23,null,["",""])),(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275eld"](26,0,null,null,2,"p",[["class","mb-2 p-0"]],null,null,null,null,null)),(l()(),u["\u0275eld"](27,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](28,null,["Source: ",""])),(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275eld"](30,0,null,null,2,"p",[["class","mb-2 p-0"]],null,null,null,null,null)),(l()(),u["\u0275eld"](31,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](32,null,["Author: ",""])),(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275eld"](34,0,null,null,3,"p",[["class","mb-2 p-0"]],null,null,null,null,null)),(l()(),u["\u0275eld"](35,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](36,null,["",""])),u["\u0275ppd"](37,2),(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275eld"](39,0,null,null,1,"p",[["class","mb-2 p-0"]],null,null,null,null,null)),(l()(),u["\u0275ted"](40,null,["",""])),(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275eld"](42,0,null,null,1,"a",[["class","btn btn-outline-primary btn-link"]],[[8,"href",4]],null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Read the article"])),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275eld"](47,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275ted"](-1,null,["\n  "]))],null,function(l,n){l(n,8,0,n.context.$implicit.url),l(n,10,0,n.context.$implicit.urlToImage,n.context.$implicit.title,n.context.$implicit.title),l(n,19,0,u["\u0275unv"](n,19,0,l(n,20,0,u["\u0275nov"](n.parent.parent,0),n.context.index+1))),l(n,22,0,n.context.$implicit.url),l(n,23,0,n.context.$implicit.title),l(n,28,0,n.context.$implicit.source.name),l(n,32,0,n.context.$implicit.author),l(n,36,0,u["\u0275unv"](n,36,0,l(n,37,0,u["\u0275nov"](n.parent.parent,1),n.context.$implicit.publishedAt,"mediumDate"))),l(n,40,0,n.context.$implicit.description),l(n,42,0,n.context.$implicit.url)})}function O(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,4,"section",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275and"](16777216,null,null,1,null,w)),u["\u0275did"](3,802816,null,0,f.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275ted"](-1,null,["\n"]))],function(l,n){l(n,3,0,n.component.headlines.articles)},null)}function x(l){return u["\u0275vid"](0,[u["\u0275pid"](0,f.DecimalPipe,[u.LOCALE_ID]),u["\u0275pid"](0,f.DatePipe,[u.LOCALE_ID]),(l()(),u["\u0275ted"](-1,null,["\n"])),(l()(),u["\u0275eld"](3,0,null,null,29,"section",[["class","container-fluid my-5"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n\n  "])),(l()(),u["\u0275eld"](5,0,null,null,26,"header",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n\n    "])),(l()(),u["\u0275and"](16777216,null,null,1,null,y)),u["\u0275did"](8,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](-1,null,["\n\n    "])),(l()(),u["\u0275eld"](10,0,null,null,18,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,e){var t=!0,a=l.component;return"submit"===n&&(t=!1!==u["\u0275nov"](l,12).onSubmit(e)&&t),"reset"===n&&(t=!1!==u["\u0275nov"](l,12).onReset()&&t),"ngSubmit"===n&&(t=!1!==a.getHeadlines(a.model)&&t),t},null,null)),u["\u0275did"](11,16384,null,0,b.A,[],null,null),u["\u0275did"](12,540672,null,0,b.k,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,b.d,null,[b.k]),u["\u0275did"](14,16384,null,0,b.q,[b.d],null,null),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275eld"](16,0,null,null,11,"formly-form",[],null,null,null,a.c,a.a)),u["\u0275did"](17,966656,null,0,g.f,[g.g,g.j,g.d,[2,b.r],[2,b.k],[3,g.f]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"]},null),(l()(),u["\u0275ted"](-1,0,["\n        "])),(l()(),u["\u0275eld"](19,0,null,0,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275eld"](21,0,null,null,4,"div",[["class","col-md-6 offset-md-3"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n            "])),(l()(),u["\u0275eld"](23,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Submit"])),(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275ted"](-1,0,["\n      "])),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](30,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275ted"](-1,null,["\n"])),(l()(),u["\u0275ted"](-1,null,["\n\n"])),(l()(),u["\u0275and"](16777216,null,null,1,null,C)),u["\u0275did"](35,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](-1,null,["\n\n"])),(l()(),u["\u0275and"](16777216,null,null,1,null,O)),u["\u0275did"](38,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,8,0,void 0!==e.headlines),l(n,12,0,e.form),l(n,17,0,e.model,e.form,e.fields),l(n,35,0,e.showSpinner),l(n,38,0,void 0!=e.headlines)},function(l,n){var e=n.component;l(n,10,0,u["\u0275nov"](n,14).ngClassUntouched,u["\u0275nov"](n,14).ngClassTouched,u["\u0275nov"](n,14).ngClassPristine,u["\u0275nov"](n,14).ngClassDirty,u["\u0275nov"](n,14).ngClassValid,u["\u0275nov"](n,14).ngClassInvalid,u["\u0275nov"](n,14).ngClassPending),l(n,23,0,e.form.invalid)})}var I=u["\u0275ccf"]("app-headlines",h,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-headlines",[],null,null,null,x,k)),u["\u0275did"](1,245760,null,0,h,[v.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),D=e("CXHW"),R=e("3kwk"),S=e("gFLb"),M=e("nCuf"),N=e("qKow"),A=e("cG9e"),T=e("ZwZs"),F=e("DDfv"),j=e("lcaH"),E=e("gEbu"),P=e("7DGp"),$=e("WwnU"),H=e("hwnt"),L=e("c7mC"),K=e("K0TW"),W=e("ETCP"),_=e("aKiW"),B=e("v4DA"),G=e("tyH+"),q=e("XBw/"),U=e("RX2M"),z=e("F+yc"),Z=e("vfkA"),V=e("1Z2I"),J=e("yDyO"),X=e("K/oD"),Y=e("eCJc"),Q=e("/I96"),ll=e("qsK9"),nl=e("MSQt"),el=e("UyZi"),ul=e("Ep2y"),tl=e("WKBe"),al=e("A8b0"),dl=e("as+d"),il=e("62nT"),ol=e("kzcK"),sl=e("kuf4"),cl=e("fAE3"),rl=e("bfOx"),pl=function(){};e.d(n,"HeadlinesModuleNgFactory",function(){return ml});var ml=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[a.e,d.b,d.a,d.d,d.e,d.f,d.c,d.i,d.g,d.j,d.h,d.k,i.a,o.a,s.a,c.a,r.a,p.a,m.a,I]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[u.LOCALE_ID,[2,f["\u0275a"]]]),u["\u0275mpd"](4608,b.g,b.g,[]),u["\u0275mpd"](4608,b.B,b.B,[]),u["\u0275mpd"](4608,g.d,g.d,[g.i]),u["\u0275mpd"](4608,g.j,g.j,[]),u["\u0275mpd"](4608,g.g,g.g,[g.d,g.j]),u["\u0275mpd"](4608,D.a,D.a,[u.ApplicationRef,u.Injector,u.ComponentFactoryResolver,f.DOCUMENT]),u["\u0275mpd"](4608,R.a,R.a,[u.ComponentFactoryResolver,u.Injector,D.a]),u["\u0275mpd"](4608,S.a,S.a,[]),u["\u0275mpd"](4608,M.a,M.a,[]),u["\u0275mpd"](4608,N.a,N.a,[]),u["\u0275mpd"](4608,A.a,A.a,[]),u["\u0275mpd"](4608,T.a,T.a,[]),u["\u0275mpd"](4608,F.a,F.a,[]),u["\u0275mpd"](4608,j.a,j.b,[]),u["\u0275mpd"](4608,E.a,E.b,[]),u["\u0275mpd"](4608,P.b,P.a,[]),u["\u0275mpd"](4608,$.a,$.b,[]),u["\u0275mpd"](4608,H.a,H.a,[]),u["\u0275mpd"](4608,L.a,L.a,[]),u["\u0275mpd"](4608,K.a,K.a,[]),u["\u0275mpd"](4608,W.a,W.a,[]),u["\u0275mpd"](4608,_.a,_.a,[]),u["\u0275mpd"](4608,B.a,B.a,[]),u["\u0275mpd"](4608,G.a,G.a,[]),u["\u0275mpd"](512,f.CommonModule,f.CommonModule,[]),u["\u0275mpd"](512,b.y,b.y,[]),u["\u0275mpd"](512,b.u,b.u,[]),u["\u0275mpd"](512,g.h,g.h,[]),u["\u0275mpd"](512,q.a,q.a,[]),u["\u0275mpd"](512,U.a,U.a,[]),u["\u0275mpd"](512,z.a,z.a,[]),u["\u0275mpd"](512,Z.a,Z.a,[]),u["\u0275mpd"](512,V.a,V.a,[]),u["\u0275mpd"](512,J.a,J.a,[]),u["\u0275mpd"](512,X.a,X.a,[]),u["\u0275mpd"](512,Y.a,Y.a,[]),u["\u0275mpd"](512,Q.a,Q.a,[]),u["\u0275mpd"](512,b.l,b.l,[]),u["\u0275mpd"](512,ll.a,ll.a,[]),u["\u0275mpd"](512,nl.a,nl.a,[]),u["\u0275mpd"](512,el.a,el.a,[]),u["\u0275mpd"](512,ul.a,ul.a,[]),u["\u0275mpd"](512,tl.a,tl.a,[]),u["\u0275mpd"](512,al.a,al.a,[]),u["\u0275mpd"](512,dl.a,dl.a,[]),u["\u0275mpd"](512,il.a,il.a,[]),u["\u0275mpd"](512,ol.b,ol.b,[]),u["\u0275mpd"](512,sl.ClickOutsideModule,sl.ClickOutsideModule,[]),u["\u0275mpd"](512,ol.a,ol.a,[]),u["\u0275mpd"](512,cl.a,cl.a,[]),u["\u0275mpd"](512,rl.n,rl.n,[[2,rl.s],[2,rl.k]]),u["\u0275mpd"](512,pl,pl,[]),u["\u0275mpd"](512,t,t,[]),u["\u0275mpd"](1024,g.i,function(){return[{types:[{name:"formly-group",component:g.k}]},{types:[{name:"input",component:q.c,wrappers:["fieldset","label"]},{name:"checkbox",component:q.b,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:q.e,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:q.f,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:q.g,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:q.d,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:q.j},{name:"description",component:q.h},{name:"validation-message",component:q.k},{name:"fieldset",component:q.i},{name:"addons",component:q.l}],manipulators:[{class:q.m,method:"run"},{class:q.n,method:"run"},{class:q.o,method:"run"}]}]},[]),u["\u0275mpd"](1024,rl.i,function(){return[[{path:"",component:h}]]},[])])})}});