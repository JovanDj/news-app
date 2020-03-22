function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var i=[],n=!0,a=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(i.push(c.value),!t||i.length!==t);n=!0);}catch(s){a=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{KppW:function(e,t,i){"use strict";i.r(t);var n,a,r=i("tyNb"),c=i("2Vo4"),o=i("itXk"),s=i("lJxs"),l=i("/uUt"),u=i("eIep"),b=i("vkgz"),p=i("tk/3"),d=i("z6cu"),f=i("UXun"),h=i("JIr8"),g=i("AytR"),m=i("fXoL"),v=((a=function(){function e(t){_classCallCheck(this,e),this.http=t,this.URL=g.a.baseUrl+"/top-headlines"}return _createClass(e,[{key:"getHeadlines",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=(new p.d).set("q",e.topic).set("pageSize",e.pageSize.toString()).set("page",t.toString()).set("category",e.category).set("country",e.country);return this.http.get(this.URL,{params:i}).pipe(Object(f.a)(),Object(h.a)((function(e){return Object(d.a)(e)})))}}]),e}()).\u0275fac=function(e){return new(e||a)(m.Zb(p.b))},a.\u0275prov=m.Ib({token:a,factory:a.\u0275fac,providedIn:"root"}),a),y={headlines:{articles:[],status:"",totalResults:0},searchCriteria:{category:"general",pageSize:10,country:"us",topic:"",page:1},page:1,loading:!1},R=((n=function(){function e(t){var i=this;_classCallCheck(this,e),this.headlinesService=t,this.store=new c.a(y),this.state$=this.store.asObservable(),this.headlines$=this.state$.pipe(Object(s.a)((function(e){return e.headlines})),Object(l.a)()),this.searchCriteria$=this.state$.pipe(Object(s.a)((function(e){return e.searchCriteria})),Object(l.a)()),this.page$=this.state$.pipe(Object(s.a)((function(e){return e.page})),Object(l.a)()),this.loading$=this.state$.pipe(Object(s.a)((function(e){return e.loading})),Object(l.a)()),this.vm$=Object(o.a)(this.headlines$,this.searchCriteria$,this.page$,this.loading$).pipe(Object(s.a)((function(e){var t=_slicedToArray(e,4);return{headlines:t[0],searchCriteria:t[1],page:t[2],loading:t[3]}}))),Object(o.a)(this.searchCriteria$,this.page$).pipe(Object(u.a)((function(e){var t=_slicedToArray(e,2),n=t[0],a=t[1];return i.headlinesService.getHeadlines(n,a)})),Object(b.a)((function(e){i.updateState(Object.assign(Object.assign({},y),{headlines:e,loading:!1}))}))).subscribe()}return _createClass(e,[{key:"updateHeadlines",value:function(e){this.updateState(y=Object.assign(Object.assign({},y),{headlines:e,loading:!0}))}},{key:"updateSearchCriteria",value:function(e){this.updateState(y=Object.assign(Object.assign({},y),{searchCriteria:e,loading:!0}))}},{key:"pageIncrease",value:function(){var e=++y.page;this.updateState(y=Object.assign(Object.assign({},y),{page:e,loading:!0}))}},{key:"pageDecrease",value:function(){var e=--y.page;this.updateState(y=Object.assign(Object.assign({},y),{page:e,loading:!0}))}},{key:"updateState",value:function(e){this.store.next(y=e)}}]),e}()).\u0275fac=function(e){return new(e||n)(m.Zb(v))},n.\u0275prov=m.Ib({token:n,factory:n.\u0275fac,providedIn:"root"}),n),Q=i("3Pt+"),C=i("7o/Q"),_=i("D0XW"),O=function(){function e(t,i){_classCallCheck(this,e),this.dueTime=t,this.scheduler=i}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new k(e,this.dueTime,this.scheduler))}}]),e}(),k=function(e){function t(e,i,n){var a;return _classCallCheck(this,t),(a=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).dueTime=i,a.scheduler=n,a.debouncedSubscription=null,a.lastValue=null,a.hasValue=!1,a}return _inherits(t,e),_createClass(t,[{key:"_next",value:function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(z,this.dueTime,this))}},{key:"_complete",value:function(){this.debouncedNext(),this.destination.complete()}},{key:"debouncedNext",value:function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}},{key:"clearDebounce",value:function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}]),t}(C.a);function z(e){e.debouncedNext()}var j,S=((j=function(){function e(t){var i=this;_classCallCheck(this,e),this.fb=t,this.minPageSize=1,this.maxPageSize=100,this.defaultPageSize=10,this.multiple=!0,this.receiveHeadlines=new m.n,this.formInit(),this.form.valueChanges.pipe(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_.a;return function(i){return i.lift(new O(e,t))}}(400),Object(l.a)(),Object(b.a)((function(e){i.receiveHeadlines.emit(e)}))).subscribe()}return _createClass(e,[{key:"formInit",value:function(){this.form=this.fb.group({topic:[""],category:["general"],country:["us"],pageSize:[this.defaultPageSize,Q.n.compose([Q.n.min(this.minPageSize),Q.n.max(this.maxPageSize)])]})}}]),e}()).\u0275fac=function(e){return new(e||j)(m.Mb(Q.b))},j.\u0275cmp=m.Gb({type:j,selectors:[["app-headlines-form"]],outputs:{receiveHeadlines:"receiveHeadlines"},decls:57,vars:6,consts:[["validate","",3,"formGroup"],[1,"container"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["for","topic"],["formControlName","topic","type","text","id","topic","placeholder","Enter topic:",1,"form-control"],["for","category-select"],["value","general","formControlName","category","id","category-select",1,"form-control",3,"multiple"],["value","general","selected",""],["value","business"],["value","entertainment"],["value","gaming"],["value","music"],["value","politics"],["value","health-and-medical"],["value","science-and-nature"],["value","sport"],["value","technology"],["for","country-select"],["value","us","formControlName","country","id","country-select",1,"form-control",3,"multiple"],["value","us","selected",""],["value","ae"],["value","ar"],["value","rs"],["value","de"],["value","gb"],["value","hu"],["value","ro"],["for","page-size"],["type","number","formControlName","pageSize","id","page-size","placeholder","Page size:",1,"form-control",3,"min","max","value"]],template:function(e,t){1&e&&(m.Rb(0,"form",0),m.Rb(1,"div",1),m.Rb(2,"div",2),m.Rb(3,"div",3),m.Rb(4,"div",4),m.Rb(5,"label",5),m.Bc(6,"Topic: "),m.Qb(),m.Nb(7,"input",6),m.Qb(),m.Rb(8,"div",4),m.Rb(9,"label",7),m.Bc(10,"Category: "),m.Qb(),m.Rb(11,"select",8),m.Rb(12,"option",9),m.Bc(13,"General"),m.Qb(),m.Rb(14,"option",10),m.Bc(15,"Business"),m.Qb(),m.Rb(16,"option",11),m.Bc(17,"Entertainment"),m.Qb(),m.Rb(18,"option",12),m.Bc(19,"Gaming"),m.Qb(),m.Rb(20,"option",13),m.Bc(21,"Music"),m.Qb(),m.Rb(22,"option",14),m.Bc(23,"Politics"),m.Qb(),m.Rb(24,"option",15),m.Bc(25,"Health and medical"),m.Qb(),m.Rb(26,"option",16),m.Bc(27,"Science and nature"),m.Qb(),m.Rb(28,"option",17),m.Bc(29,"Sport"),m.Qb(),m.Rb(30,"option",18),m.Bc(31,"Technology"),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Rb(32,"div",3),m.Rb(33,"div",4),m.Rb(34,"label",19),m.Bc(35,"Country: "),m.Qb(),m.Rb(36,"select",20),m.Rb(37,"option",21),m.Bc(38,"United States of America"),m.Qb(),m.Rb(39,"option",22),m.Bc(40,"United Arab Emirates"),m.Qb(),m.Rb(41,"option",23),m.Bc(42,"Argentina"),m.Qb(),m.Rb(43,"option",24),m.Bc(44,"Serbia"),m.Qb(),m.Rb(45,"option",25),m.Bc(46,"Germany"),m.Qb(),m.Rb(47,"option",26),m.Bc(48,"United Kingdom of Great Britain and Northern Ireland"),m.Qb(),m.Rb(49,"option",27),m.Bc(50,"Hungary"),m.Qb(),m.Rb(51,"option",28),m.Bc(52,"Romania"),m.Qb(),m.Qb(),m.Qb(),m.Rb(53,"div",4),m.Rb(54,"label",29),m.Bc(55,"Page size"),m.Qb(),m.Nb(56,"input",30),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Qb()),2&e&&(m.lc("formGroup",t.form),m.zb(11),m.lc("multiple",t.multiple),m.zb(25),m.lc("multiple",t.multiple),m.zb(20),m.lc("min",t.minPageSize)("max",t.maxPageSize)("value",t.defaultPageSize))},directives:[Q.p,Q.i,Q.d,Q.a,Q.h,Q.c,Q.m,Q.j,Q.o,Q.k],styles:[""],changeDetection:0}),j),w=i("ofXK");function P(e,t){1&e&&(m.Rb(0,"h1"),m.Bc(1,"Please wait"),m.Qb())}function B(e,t){if(1&e&&(m.Rb(0,"article",11),m.Rb(1,"div",2),m.Rb(2,"div",12),m.Rb(3,"a",13),m.Nb(4,"img",14),m.Qb(),m.Qb(),m.Rb(5,"div",15),m.Rb(6,"div",16),m.Rb(7,"h5",17),m.Rb(8,"span",18),m.Bc(9),m.gc(10,"number"),m.Qb(),m.Rb(11,"a",13),m.Bc(12),m.Qb(),m.Qb(),m.Rb(13,"div",19),m.Rb(14,"p"),m.Rb(15,"strong"),m.Bc(16),m.Qb(),m.Qb(),m.Rb(17,"p"),m.Rb(18,"strong"),m.Bc(19),m.Qb(),m.Qb(),m.Rb(20,"p"),m.Rb(21,"strong"),m.Bc(22),m.gc(23,"date"),m.Qb(),m.Qb(),m.Qb(),m.Rb(24,"p",20),m.Bc(25),m.Qb(),m.Rb(26,"a",21),m.Bc(27,"Read the article"),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Nb(28,"hr"),m.Qb()),2&e){var i=t.$implicit,n=t.index;m.lc("id",i.title),m.zb(3),m.lc("href",i.url,m.uc),m.zb(1),m.lc("src",i.urlToImage,m.uc)("title",i.title)("alt",i.title),m.zb(5),m.Cc(m.hc(10,13,n+1)),m.zb(2),m.lc("href",i.url,m.uc),m.zb(1),m.Cc(i.title),m.zb(4),m.Dc("Source: ",i.source.name,""),m.zb(3),m.Dc("Author: ",i.author,""),m.zb(3),m.Cc(m.ic(23,15,i.publishedAt,"mediumDate")),m.zb(3),m.Cc(i.description),m.zb(1),m.lc("href",i.url,m.uc)}}function I(e,t){if(1&e){var i=m.Sb();m.Rb(0,"button",22),m.dc("click",(function(){m.tc(i);var e=m.fc(2),t=m.sc(1);return e.pageDecrease(t)})),m.Bc(1," Load less "),m.Qb()}}function x(e,t){if(1&e){var i=m.Sb();m.Rb(0,"button",23),m.dc("click",(function(){m.tc(i);var e=m.fc(2),t=m.sc(1);return e.pageIncrease(t)})),m.Bc(1," Load more "),m.Qb()}}function $(e,t){if(1&e&&(m.Pb(0),m.zc(1,P,2,0,"h1",5),m.Rb(2,"section",null,6),m.zc(4,B,29,18,"article",7),m.Qb(),m.Rb(5,"div",8),m.zc(6,I,2,0,"button",9),m.zc(7,x,2,0,"button",10),m.Qb(),m.Ob()),2&e){var i=t.ngIf;m.zb(1),m.lc("ngIf",i.loading),m.zb(3),m.lc("ngForOf",i.headlines.articles),m.zb(2),m.lc("ngIf",i.page>1),m.zb(1),m.lc("ngIf",i.headlines.articles.length===i.searchCriteria.pageSize)}}var T,H,A=[{path:"",component:(T=function(){function e(t){_classCallCheck(this,e),this.headlinesFacade=t,this.vm$=t.vm$}return _createClass(e,[{key:"receiveHeadlines",value:function(e){this.headlinesFacade.updateSearchCriteria(e)}},{key:"pageIncrease",value:function(e){e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),this.headlinesFacade.pageIncrease()}},{key:"pageDecrease",value:function(e){e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),this.headlinesFacade.pageDecrease()}}]),e}(),T.\u0275fac=function(e){return new(e||T)(m.Mb(R))},T.\u0275cmp=m.Gb({type:T,selectors:[["app-headlines"]],decls:7,vars:3,consts:[[1,"py-5"],["form",""],[1,"row"],[1,"col-xs-12","col-sm-10","offset-sm-1","col-md-6","offset-md-3"],[3,"receiveHeadlines"],[4,"ngIf"],["headlines_section",""],["class","articles",3,"id",4,"ngFor","ngForOf"],[1,"page-buttons"],["type","button","class","btn btn-primary float-left",3,"click",4,"ngIf"],["type","button","class","btn btn-primary float-right",3,"click",4,"ngIf"],[1,"articles",3,"id"],[1,"col-md-7"],[3,"href"],["loading","lazy",1,"img-fluid","img-thumbnail","rounded","mx-auto","d-block","border","border-light",3,"src","title","alt"],[1,"col-md-5"],[1,"article"],[1,"text-center","d-flex","justify-content-between","align-items-center","mb-2"],[1,"badge","badge-dark","align-self-start"],[1,"mb-2"],[1,"mb-2","lead"],[1,"btn","btn-outline-primary",3,"href"],["type","button",1,"btn","btn-primary","float-left",3,"click"],["type","button",1,"btn","btn-primary","float-right",3,"click"]],template:function(e,t){1&e&&(m.Rb(0,"section",0,1),m.Rb(2,"div",2),m.Rb(3,"div",3),m.Rb(4,"app-headlines-form",4),m.dc("receiveHeadlines",(function(e){return t.receiveHeadlines(e)})),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.zc(5,$,8,4,"ng-container",5),m.gc(6,"async")),2&e&&(m.zb(5),m.lc("ngIf",m.hc(6,1,t.vm$)))},directives:[S,w.m,w.l],pipes:[w.b,w.f,w.e],styles:['.sk-circle[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]:before{background-color:#fff}img[_ngcontent-%COMP%]:before{content:"We\'re sorry, this image is broken :(";display:block;margin-bottom:10px}.article[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between;height:100%}.article[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}'],changeDetection:0}),T)}],N=((H=function e(){_classCallCheck(this,e)}).\u0275mod=m.Kb({type:H}),H.\u0275inj=m.Jb({factory:function(e){return new(e||H)},imports:[[r.g.forChild(A)],r.g]}),H),D=i("PCNd");i.d(t,"HeadlinesModule",(function(){return V}));var M,V=((M=function e(){_classCallCheck(this,e)}).\u0275mod=m.Kb({type:M}),M.\u0275inj=m.Jb({factory:function(e){return new(e||M)},imports:[[D.a,N]]}),M)}}]);