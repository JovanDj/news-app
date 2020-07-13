function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(e);if(t){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,a=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(i=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);i=!0);}catch(s){a=!0,r=s}finally{try{i||null==o.return||o.return()}finally{if(a)throw r}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{KppW:function(e,t,n){"use strict";n.r(t),n.d(t,"HeadlinesModule",(function(){return K}));var i,a,r=n("tyNb"),c=n("2Vo4"),o=n("itXk"),s=n("lJxs"),l=n("/uUt"),u=n("eIep"),b=n("vkgz"),p=n("tk/3"),f=n("z6cu"),h=n("UXun"),d=n("JIr8"),g=n("AytR"),y=n("fXoL"),m=((a=function(){function e(t){_classCallCheck(this,e),this.http=t,this.URL=g.a.baseUrl+"/top-headlines"}return _createClass(e,[{key:"getHeadlines",value:function(e){var t=(new p.d).set("q",e.topic).set("pageSize",e.pageSize.toString()).set("page",e.page.toString()).set("category",e.category).set("country",e.country);return this.http.get(this.URL,{params:t}).pipe(Object(h.a)(),Object(d.a)((function(e){return Object(f.a)(e)})))}}]),e}()).\u0275fac=function(e){return new(e||a)(y.Xb(p.b))},a.\u0275prov=y.Gb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),O={headlines:{articles:[],status:"",totalResults:0},searchCriteria:{category:"general",pageSize:10,country:"us",topic:"",page:1},loading:!1},v=((i=function(){function e(t){var n=this;_classCallCheck(this,e),this.headlinesService=t,this.store=new c.a(O),this.state$=this.store.asObservable(),this.state$.subscribe((function(e){return console.log(e)})),this.headlines$=this.state$.pipe(Object(s.a)((function(e){return e.headlines})),Object(l.a)()),this.searchCriteria$=this.state$.pipe(Object(s.a)((function(e){return e.searchCriteria})),Object(l.a)()),this.page$=this.state$.pipe(Object(s.a)((function(e){return e.searchCriteria.page})),Object(l.a)()),this.loading$=this.state$.pipe(Object(s.a)((function(e){return e.loading})),Object(l.a)()),this.vm$=Object(o.a)(this.headlines$,this.searchCriteria$,this.page$,this.loading$).pipe(Object(s.a)((function(e){var t=_slicedToArray(e,4);return{headlines:t[0],searchCriteria:t[1],page:t[2],loading:t[3]}}))),Object(o.a)(this.searchCriteria$).pipe(Object(u.a)((function(e){var t=_slicedToArray(e,1)[0];return console.log(t),n.headlinesService.getHeadlines(t)})),Object(b.a)((function(e){n.updateState(Object.assign(Object.assign({},O),{headlines:e,loading:!1}))}))).subscribe()}return _createClass(e,[{key:"updateHeadlines",value:function(e){this.updateState(Object.assign(Object.assign({},O),{headlines:e,loading:!0}))}},{key:"updateSearchCriteria",value:function(e){var t=Object.assign(Object.assign({},e),{page:O.searchCriteria.page});this.updateState(Object.assign(Object.assign({},O),{searchCriteria:t,loading:!0}))}},{key:"pageIncrease",value:function(){var e=O.searchCriteria.page+1;this.updateState(Object.assign(Object.assign({},O),{searchCriteria:Object.assign(Object.assign({},O.searchCriteria),{page:e})}))}},{key:"pageDecrease",value:function(){var e=O.searchCriteria.page-1;this.updateState(Object.assign(Object.assign({},O),{searchCriteria:Object.assign(Object.assign({},O.searchCriteria),{page:e})}))}},{key:"updateState",value:function(e){this.store.next(O=e)}}]),e}()).\u0275fac=function(e){return new(e||i)(y.Xb(m))},i.\u0275prov=y.Gb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),P=n("3Pt+"),C=n("7o/Q"),_=n("D0XW"),k=function(){function e(t,n){_classCallCheck(this,e),this.dueTime=t,this.scheduler=n}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new S(e,this.dueTime,this.scheduler))}}]),e}(),S=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i,a){var r;return _classCallCheck(this,n),(r=t.call(this,e)).dueTime=i,r.scheduler=a,r.debouncedSubscription=null,r.lastValue=null,r.hasValue=!1,r}return _createClass(n,[{key:"_next",value:function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(j,this.dueTime,this))}},{key:"_complete",value:function(){this.debouncedNext(),this.destination.complete()}},{key:"debouncedNext",value:function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}},{key:"clearDebounce",value:function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}]),n}(C.a);function j(e){e.debouncedNext()}var w,x,I=((w=function(){function e(t){var n=this;_classCallCheck(this,e),this.fb=t,this.minPageSize=1,this.maxPageSize=100,this.defaultPageSize=10,this.multiple=!0,this.formChange=new y.n,this.formInit(),this.form.valueChanges.pipe(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_.a;return function(n){return n.lift(new k(e,t))}}(400),Object(l.a)(),Object(b.a)((function(e){n.formChange.emit(e)}))).subscribe()}return _createClass(e,[{key:"formInit",value:function(){this.form=this.fb.group({topic:[""],category:["general"],country:["us"],pageSize:[this.defaultPageSize,P.n.compose([P.n.min(this.minPageSize),P.n.max(this.maxPageSize)])]})}}]),e}()).\u0275fac=function(e){return new(e||w)(y.Kb(P.b))},w.\u0275cmp=y.Eb({type:w,selectors:[["app-headlines-form"]],outputs:{formChange:"formChange"},decls:57,vars:6,consts:[["validate","",3,"formGroup"],[1,"container"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["for","topic"],["formControlName","topic","type","text","id","topic","name","topic","placeholder","Enter topic:",1,"form-control"],["for","category-select"],["value","general","formControlName","category","id","category-select",1,"form-control",3,"multiple"],["value","general","selected",""],["value","business"],["value","entertainment"],["value","gaming"],["value","music"],["value","politics"],["value","health-and-medical"],["value","science-and-nature"],["value","sport"],["value","technology"],["for","country-select"],["value","us","formControlName","country","id","country-select",1,"form-control",3,"multiple"],["value","us","selected",""],["value","ae"],["value","ar"],["value","rs"],["value","de"],["value","gb"],["value","hu"],["value","ro"],["for","page-size"],["type","number","formControlName","pageSize","id","page-size","placeholder","Page size:",1,"form-control",3,"min","max","value"]],template:function(e,t){1&e&&(y.Pb(0,"form",0),y.Pb(1,"div",1),y.Pb(2,"div",2),y.Pb(3,"div",3),y.Pb(4,"div",4),y.Pb(5,"label",5),y.yc(6,"Topic: "),y.Ob(),y.Lb(7,"input",6),y.Ob(),y.Pb(8,"div",4),y.Pb(9,"label",7),y.yc(10,"Category: "),y.Ob(),y.Pb(11,"select",8),y.Pb(12,"option",9),y.yc(13,"General"),y.Ob(),y.Pb(14,"option",10),y.yc(15,"Business"),y.Ob(),y.Pb(16,"option",11),y.yc(17,"Entertainment"),y.Ob(),y.Pb(18,"option",12),y.yc(19,"Gaming"),y.Ob(),y.Pb(20,"option",13),y.yc(21,"Music"),y.Ob(),y.Pb(22,"option",14),y.yc(23,"Politics"),y.Ob(),y.Pb(24,"option",15),y.yc(25,"Health and medical"),y.Ob(),y.Pb(26,"option",16),y.yc(27,"Science and nature"),y.Ob(),y.Pb(28,"option",17),y.yc(29,"Sport"),y.Ob(),y.Pb(30,"option",18),y.yc(31,"Technology"),y.Ob(),y.Ob(),y.Ob(),y.Ob(),y.Pb(32,"div",3),y.Pb(33,"div",4),y.Pb(34,"label",19),y.yc(35,"Country: "),y.Ob(),y.Pb(36,"select",20),y.Pb(37,"option",21),y.yc(38,"United States of America"),y.Ob(),y.Pb(39,"option",22),y.yc(40,"United Arab Emirates"),y.Ob(),y.Pb(41,"option",23),y.yc(42,"Argentina"),y.Ob(),y.Pb(43,"option",24),y.yc(44,"Serbia"),y.Ob(),y.Pb(45,"option",25),y.yc(46,"Germany"),y.Ob(),y.Pb(47,"option",26),y.yc(48,"United Kingdom of Great Britain and Northern Ireland"),y.Ob(),y.Pb(49,"option",27),y.yc(50,"Hungary"),y.Ob(),y.Pb(51,"option",28),y.yc(52,"Romania"),y.Ob(),y.Ob(),y.Ob(),y.Pb(53,"div",4),y.Pb(54,"label",29),y.yc(55,"Page size"),y.Ob(),y.Lb(56,"input",30),y.Ob(),y.Ob(),y.Ob(),y.Ob(),y.Ob()),2&e&&(y.ic("formGroup",t.form),y.xb(11),y.ic("multiple",t.multiple),y.xb(25),y.ic("multiple",t.multiple),y.xb(20),y.ic("min",t.minPageSize)("max",t.maxPageSize)("value",t.defaultPageSize))},directives:[P.p,P.i,P.d,P.a,P.h,P.c,P.m,P.j,P.o,P.k],styles:[""],changeDetection:0}),w),z=n("ofXK"),A=((x=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=y.Eb({type:x,selectors:[["app-article-description"]],inputs:{article:"article",i:"i"},decls:22,vars:13,consts:[[1,"article"],[1,"text-center","d-flex","justify-content-between","align-items-center","mb-2"],[1,"badge","badge-dark","align-self-start"],[3,"href"],[1,"mb-2"],[1,"mb-2","lead"],[1,"btn","btn-outline-primary",3,"href"]],template:function(e,t){1&e&&(y.Pb(0,"div",0),y.Pb(1,"h5",1),y.Pb(2,"span",2),y.yc(3),y.dc(4,"number"),y.Ob(),y.Pb(5,"a",3),y.yc(6),y.Ob(),y.Ob(),y.Pb(7,"div",4),y.Pb(8,"p"),y.Pb(9,"strong"),y.yc(10),y.Ob(),y.Ob(),y.Pb(11,"p"),y.Pb(12,"strong"),y.yc(13),y.Ob(),y.Ob(),y.Pb(14,"p"),y.Pb(15,"strong"),y.yc(16),y.dc(17,"date"),y.Ob(),y.Ob(),y.Ob(),y.Pb(18,"p",5),y.yc(19),y.Ob(),y.Pb(20,"a",6),y.yc(21,"Read the article"),y.Ob(),y.Ob()),2&e&&(y.xb(3),y.zc(y.ec(4,8,t.i+1)),y.xb(2),y.ic("href",t.article.url,y.rc),y.xb(1),y.zc(t.article.title),y.xb(4),y.Ac("Source: ",t.article.source.name,""),y.xb(3),y.Ac("Author: ",t.article.author,""),y.xb(3),y.zc(y.fc(17,10,t.article.publishedAt,"mediumDate")),y.xb(3),y.zc(t.article.description),y.xb(1),y.ic("href",t.article.url,y.rc))},pipes:[z.f,z.e],styles:[""]}),x);function T(e,t){if(1&e&&(y.Pb(0,"article",2),y.Pb(1,"div",3),y.Pb(2,"div",4),y.Pb(3,"a",5),y.Lb(4,"img",6),y.Ob(),y.Ob(),y.Pb(5,"div",7),y.Lb(6,"app-article-description",8),y.Ob(),y.Ob(),y.Lb(7,"hr"),y.Ob()),2&e){var n=t.$implicit,i=t.index;y.ic("id",n.title),y.xb(3),y.ic("href",n.url,y.rc),y.xb(1),y.ic("src",n.urlToImage,y.rc)("title",n.title)("alt",n.title),y.xb(2),y.ic("article",n)("i",i)}}var D,$=((D=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||D)},D.\u0275cmp=y.Eb({type:D,selectors:[["app-articles"]],inputs:{articles:"articles"},decls:2,vars:1,consts:[["id","articles"],["class","articles",3,"id",4,"ngFor","ngForOf"],[1,"articles",3,"id"],[1,"row"],[1,"col-md-7"],[3,"href"],["loading","lazy",1,"img-fluid","img-thumbnail","rounded","mx-auto","d-block","border","border-light",3,"src","title","alt"],[1,"col-md-5"],[3,"article","i"]],template:function(e,t){1&e&&(y.Pb(0,"section",0),y.wc(1,T,8,7,"article",1),y.Ob()),2&e&&(y.xb(1),y.ic("ngForOf",t.articles))},directives:[z.l,A],styles:[""]}),D);function R(e,t){if(1&e){var n=y.Qb();y.Pb(0,"button",3),y.ac("click",(function(){return y.qc(n),y.cc().onDeacraseClick()})),y.yc(1," Load less "),y.Ob()}}function L(e,t){if(1&e){var n=y.Qb();y.Pb(0,"button",4),y.ac("click",(function(){return y.qc(n),y.cc().onIncreaseClick()})),y.yc(1," Load more "),y.Ob()}}var N,E=((N=function(){function e(){_classCallCheck(this,e),this.pageIncrease=new y.n,this.pageDeacrease=new y.n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onIncreaseClick",value:function(){this.pageIncrease.emit()}},{key:"onDeacraseClick",value:function(){this.pageDeacrease.emit()}}]),e}()).\u0275fac=function(e){return new(e||N)},N.\u0275cmp=y.Eb({type:N,selectors:[["app-page-buttons"]],inputs:{page:"page",numberOfArticles:"numberOfArticles",pageSize:"pageSize"},outputs:{pageIncrease:"pageIncrease",pageDeacrease:"pageDeacrease"},decls:3,vars:2,consts:[[1,"page-buttons"],["type","button","class","btn btn-primary float-left",3,"click",4,"ngIf"],["type","button","class","btn btn-primary float-right",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary","float-left",3,"click"],["type","button",1,"btn","btn-primary","float-right",3,"click"]],template:function(e,t){1&e&&(y.Pb(0,"div",0),y.wc(1,R,2,0,"button",1),y.wc(2,L,2,0,"button",2),y.Ob()),2&e&&(y.xb(1),y.ic("ngIf",t.page>1),y.xb(1),y.ic("ngIf",t.numberOfArticles===t.pageSize))},directives:[z.m],styles:[""]}),N);function M(e,t){1&e&&(y.Pb(0,"h1"),y.yc(1,"Please wait"),y.Ob())}function V(e,t){if(1&e){var n=y.Qb();y.Nb(0),y.wc(1,M,2,0,"h1",5),y.Lb(2,"app-articles",6),y.Pb(3,"app-page-buttons",7),y.ac("pageIncrease",(function(){y.qc(n);var e=y.cc(),t=y.pc(1);return e.pageIncrease(t)}))("pageDeacrease",(function(){y.qc(n);var e=y.cc(),t=y.pc(1);return e.pageDecrease(t)})),y.Ob(),y.Mb()}if(2&e){var i=t.ngIf;y.xb(1),y.ic("ngIf",i.loading),y.xb(1),y.ic("articles",i.headlines.articles),y.xb(1),y.ic("page",i.searchCriteria.page)("pageSize",i.searchCriteria.pageSize)("numberOfArticles",i.headlines.articles.length)}}var H,F,U,G=[{path:"",component:(H=function(){function e(t){_classCallCheck(this,e),this.headlinesFacade=t,this.vm$=t.vm$}return _createClass(e,[{key:"onFormChange",value:function(e){this.headlinesFacade.updateSearchCriteria(e)}},{key:"pageIncrease",value:function(e){e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),this.headlinesFacade.pageIncrease()}},{key:"pageDecrease",value:function(e){e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),this.headlinesFacade.pageDecrease()}}]),e}(),H.\u0275fac=function(e){return new(e||H)(y.Kb(v))},H.\u0275cmp=y.Eb({type:H,selectors:[["app-headlines"]],decls:7,vars:3,consts:[[1,"py-5"],["form",""],[1,"row"],[1,"col-xs-12","col-sm-10","offset-sm-1","col-md-6","offset-md-3"],[3,"formChange"],[4,"ngIf"],[3,"articles"],[3,"page","pageSize","numberOfArticles","pageIncrease","pageDeacrease"]],template:function(e,t){1&e&&(y.Pb(0,"section",0,1),y.Pb(2,"div",2),y.Pb(3,"div",3),y.Pb(4,"app-headlines-form",4),y.ac("formChange",(function(e){return t.onFormChange(e)})),y.Ob(),y.Ob(),y.Ob(),y.Ob(),y.wc(5,V,4,5,"ng-container",5),y.dc(6,"async")),2&e&&(y.xb(5),y.ic("ngIf",y.ec(6,1,t.vm$)))},directives:[I,z.m,$,E],pipes:[z.b],styles:['.sk-circle[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]:before{background-color:#fff}img[_ngcontent-%COMP%]:before{content:"We\'re sorry, this image is broken :(";display:block;margin-bottom:10px}.article[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%}.article[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}'],changeDetection:0}),H)}],X=((F=function e(){_classCallCheck(this,e)}).\u0275mod=y.Ib({type:F}),F.\u0275inj=y.Hb({factory:function(e){return new(e||F)},imports:[[r.g.forChild(G)],r.g]}),F),q=n("PCNd"),K=((U=function e(){_classCallCheck(this,e)}).\u0275mod=y.Ib({type:U}),U.\u0275inj=y.Hb({factory:function(e){return new(e||U)},imports:[[q.a,X]]}),U)}}]);