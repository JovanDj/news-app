(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Nid4:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("YImT"),o=u("fS5t"),d=u("9AJC"),a=u("pMnS"),s=u("Ip0R"),c=u("gIcY"),r=u("vZwA"),p=u("lFuy"),m=u("pugT"),f=function(){function l(l){this.everythingService=l,this.showSpinner=!1,this.everythingSub=new m.a,this.pageSize="10",this.form=new c.k({}),this.model={topic:"",category:["general"],language:["en"],page:"1",pageSize:"10"},this.fields=[{fieldGroupClassName:"row",fieldGroup:[{className:"col-md-3 offset-md-3",key:"q",type:"input",templateOptions:{type:"text",label:"Topic",placeholder:"Enter topic",required:!0}},{className:"col-md-3",key:"language",type:"select",templateOptions:{label:"Language",multiple:!0,options:[{label:"Arabic",value:"ar"},{label:"German",value:"de"},{label:"English",value:"en"},{label:"Spanish",value:"es"},{label:"French",value:"fr"},{label:"Hebrew",value:"he"},{label:"Italian",value:"it"},{label:"Dutch",value:"nl"},{label:"Norwegian",value:"no"},{label:"Portuguese",value:"pt"},{label:"Russian",value:"ru"},{label:"Swedish",value:"se"},{label:"???",value:"ud"},{label:"Chinese",value:"zh"}]}}]}]}return l.prototype.getEverything=function(l){var n=this;this.everythingSub=this.everythingService.getEverything(l).subscribe(function(l){n.all=l})},l.prototype.ngOnInit=function(){},l.prototype.ngOnDestroy=function(){this.everythingSub&&this.everythingSub.unsubscribe()},l}(),g=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["Number of articles: ",""])),e["\u0275ppd"](2,1)],null,function(l,n){var u=n.component,t=e["\u0275unv"](n,1,0,l(n,2,0,e["\u0275nov"](n.parent,0),u.all.totalResults));l(n,1,0,t)})}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,12,"div",[["class","sk-circle"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"div",[["class","sk-circle1 sk-child"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,0,"div",[["class","sk-circle2 sk-child"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"div",[["class","sk-circle3 sk-child"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,0,"div",[["class","sk-circle4 sk-child"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,0,"div",[["class","sk-circle5 sk-child"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,0,"div",[["class","sk-circle6 sk-child"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,0,"div",[["class","sk-circle7 sk-child"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,0,"div",[["class","sk-circle8 sk-child"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,0,"div",[["class","sk-circle9 sk-child"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,0,"div",[["class","sk-circle10 sk-child"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,0,"div",[["class","sk-circle11 sk-child"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,0,"div",[["class","sk-circle12 sk-child"]],null,null,null,null,null))],null,null)}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,26,"div",[["class","articles"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,24,"div",[["class","row py-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"div",[["class","col-md-7"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,0,"img",[["alt","Article image"],["class","img-fluid img-thumbnail rounded mx-auto d-block border border-light"]],[[8,"src",4],[8,"title",0]],null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,20,"div",[["class","col-md-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,5,"h5",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,2,"span",[["class","badge badge-light pull-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,["",""])),e["\u0275ppd"](9,1),(l()(),e["\u0275eld"](10,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),e["\u0275ted"](11,null,["",""])),(l()(),e["\u0275eld"](12,0,null,null,2,"p",[["class","mb-2 p-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](14,null,["Source: ",""])),(l()(),e["\u0275eld"](15,0,null,null,2,"p",[["class","mb-2 p-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](17,null,["Author: ",""])),(l()(),e["\u0275eld"](18,0,null,null,3,"p",[["class","mb-2 p-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](20,null,["",""])),e["\u0275ppd"](21,2),(l()(),e["\u0275eld"](22,0,null,null,1,"p",[["class","mb-2 p-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](23,null,["",""])),(l()(),e["\u0275eld"](24,0,null,null,1,"a",[["class","btn btn-outline-primary btn-link"]],[[8,"href",4]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Read the article"])),(l()(),e["\u0275eld"](26,0,null,null,0,"hr",[],null,null,null,null,null))],null,function(l,n){l(n,3,0,n.context.$implicit.url),l(n,4,0,n.context.$implicit.urlToImage,n.context.$implicit.title);var u=e["\u0275unv"](n,8,0,l(n,9,0,e["\u0275nov"](n.parent.parent,0),n.context.index+1));l(n,8,0,u),l(n,10,0,n.context.$implicit.url),l(n,11,0,n.context.$implicit.title),l(n,14,0,n.context.$implicit.source.name),l(n,17,0,n.context.$implicit.author);var t=e["\u0275unv"](n,20,0,l(n,21,0,e["\u0275nov"](n.parent.parent,1),n.context.$implicit.publishedAt,"mediumDate"));l(n,20,0,t),l(n,23,0,n.context.$implicit.description),l(n,24,0,n.context.$implicit.url)})}function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"section",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](2,278528,null,0,s.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.all.articles)},null)}function y(l){return e["\u0275vid"](0,[e["\u0275pid"](0,s.DecimalPipe,[e.LOCALE_ID]),e["\u0275pid"](0,s.DatePipe,[e.LOCALE_ID]),(l()(),e["\u0275eld"](2,0,null,null,14,"section",[["class","container py-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,13,"header",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](5,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](6,0,null,null,10,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e["\u0275nov"](l,8).onSubmit(u)&&t),"reset"===n&&(t=!1!==e["\u0275nov"](l,8).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.getEverything(i.model)&&t),t},null,null)),e["\u0275did"](7,16384,null,0,c.B,[],null,null),e["\u0275did"](8,540672,null,0,c.l,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,c.d,null,[c.l]),e["\u0275did"](10,16384,null,0,c.r,[[4,c.d]],null,null),(l()(),e["\u0275eld"](11,0,null,null,5,"formly-form",[],null,null,null,i.c,i.a)),e["\u0275did"](12,966656,null,0,r.f,[r.g,r.j,r.d,[2,c.s],[2,c.l],[3,r.f]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"]},null),(l()(),e["\u0275eld"](13,0,null,0,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,2,"div",[["class","col-md-6 offset-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Submit"])),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](18,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](20,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,5,0,u.all),l(n,8,0,u.form),l(n,12,0,u.model,u.form,u.fields),l(n,18,0,u.showSpinner),l(n,20,0,null!=u.all)},function(l,n){var u=n.component;l(n,6,0,e["\u0275nov"](n,10).ngClassUntouched,e["\u0275nov"](n,10).ngClassTouched,e["\u0275nov"](n,10).ngClassPristine,e["\u0275nov"](n,10).ngClassDirty,e["\u0275nov"](n,10).ngClassValid,e["\u0275nov"](n,10).ngClassInvalid,e["\u0275nov"](n,10).ngClassPending),l(n,15,0,u.form.invalid)})}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-everything",[],null,null,null,y,g)),e["\u0275did"](1,245760,null,0,f,[p.a],null,null)],function(l,n){l(n,1,0)},null)}var C=e["\u0275ccf"]("app-everything",f,w,{},{},[]),O=u("4GxJ"),S=u("D1ZJ"),x=u("arP9"),I=u("PCNd"),R=u("ZYCi"),N=function(){return function(){}}();u.d(n,"EverythingModuleNgFactory",function(){return A});var A=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.e,o.b,o.a,o.d,o.e,o.f,o.c,o.j,o.g,o.k,o.h,o.l,o.i,d.a,d.b,d.g,d.c,d.d,d.e,d.f,a.a,C]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[e.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,c.g,c.g,[]),e["\u0275mpd"](4608,c.C,c.C,[]),e["\u0275mpd"](4608,r.d,r.d,[r.i]),e["\u0275mpd"](4608,r.j,r.j,[]),e["\u0275mpd"](4608,r.g,r.g,[r.d,r.j]),e["\u0275mpd"](4608,O.u,O.u,[e.ComponentFactoryResolver,e.Injector,O.S,O.v]),e["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),e["\u0275mpd"](1073742336,c.z,c.z,[]),e["\u0275mpd"](1073742336,c.v,c.v,[]),e["\u0275mpd"](1073742336,r.h,r.h,[]),e["\u0275mpd"](1073742336,S.a,S.a,[]),e["\u0275mpd"](1073742336,O.c,O.c,[]),e["\u0275mpd"](1073742336,O.f,O.f,[]),e["\u0275mpd"](1073742336,O.g,O.g,[]),e["\u0275mpd"](1073742336,O.k,O.k,[]),e["\u0275mpd"](1073742336,O.m,O.m,[]),e["\u0275mpd"](1073742336,c.m,c.m,[]),e["\u0275mpd"](1073742336,O.r,O.r,[]),e["\u0275mpd"](1073742336,O.s,O.s,[]),e["\u0275mpd"](1073742336,O.w,O.w,[]),e["\u0275mpd"](1073742336,O.A,O.A,[]),e["\u0275mpd"](1073742336,O.B,O.B,[]),e["\u0275mpd"](1073742336,O.E,O.E,[]),e["\u0275mpd"](1073742336,O.H,O.H,[]),e["\u0275mpd"](1073742336,O.K,O.K,[]),e["\u0275mpd"](1073742336,O.O,O.O,[]),e["\u0275mpd"](1073742336,O.P,O.P,[]),e["\u0275mpd"](1073742336,O.Q,O.Q,[]),e["\u0275mpd"](1073742336,O.x,O.x,[]),e["\u0275mpd"](1073742336,x.ClickOutsideModule,x.ClickOutsideModule,[]),e["\u0275mpd"](1073742336,I.a,I.a,[]),e["\u0275mpd"](1073742336,R.n,R.n,[[2,R.t],[2,R.k]]),e["\u0275mpd"](1073742336,N,N,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,r.i,function(){return[{types:[{name:"formly-group",component:r.k}]},{types:[{name:"input",component:S.c,wrappers:["form-field"]},{name:"checkbox",component:S.b,wrappers:["form-field"],defaultOptions:{templateOptions:{indeterminate:!0,hideLabel:!0}}},{name:"radio",component:S.e,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:S.f,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:S.g,wrappers:["form-field"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:S.d,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:S.k},{name:"description",component:S.h},{name:"validation-message",component:S.l},{name:"fieldset",component:S.i},{name:"addons",component:S.m},{name:"form-field",component:S.j}],manipulators:[{class:S.o,method:"run"},{class:S.p,method:"run"},{class:S.q,method:"run"},{class:S.r,method:"run"}]}]},[]),e["\u0275mpd"](1024,R.i,function(){return[[{path:"",component:f}]]},[])])})}}]);