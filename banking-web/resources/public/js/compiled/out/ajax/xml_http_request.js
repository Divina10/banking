// Compiled by ClojureScript 1.7.107 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__25566,handler){
var map__25567 = p__25566;
var map__25567__$1 = ((((!((map__25567 == null)))?((((map__25567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25567):map__25567);
var uri = cljs.core.get.call(null,map__25567__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__25567__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__25567__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__25567__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__25567__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__25567__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__25567__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__25567,map__25567__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__25565_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__25565_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__25567,map__25567__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___25575 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___25575)){
var response_type_25576 = temp__4657__auto___25575;
this$__$1.responseType = cljs.core.name.call(null,response_type_25576);
} else {
}

var seq__25569_25577 = cljs.core.seq.call(null,headers);
var chunk__25570_25578 = null;
var count__25571_25579 = (0);
var i__25572_25580 = (0);
while(true){
if((i__25572_25580 < count__25571_25579)){
var vec__25573_25581 = cljs.core._nth.call(null,chunk__25570_25578,i__25572_25580);
var k_25582 = cljs.core.nth.call(null,vec__25573_25581,(0),null);
var v_25583 = cljs.core.nth.call(null,vec__25573_25581,(1),null);
this$__$1.setRequestHeader(k_25582,v_25583);

var G__25584 = seq__25569_25577;
var G__25585 = chunk__25570_25578;
var G__25586 = count__25571_25579;
var G__25587 = (i__25572_25580 + (1));
seq__25569_25577 = G__25584;
chunk__25570_25578 = G__25585;
count__25571_25579 = G__25586;
i__25572_25580 = G__25587;
continue;
} else {
var temp__4657__auto___25588 = cljs.core.seq.call(null,seq__25569_25577);
if(temp__4657__auto___25588){
var seq__25569_25589__$1 = temp__4657__auto___25588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25569_25589__$1)){
var c__19383__auto___25590 = cljs.core.chunk_first.call(null,seq__25569_25589__$1);
var G__25591 = cljs.core.chunk_rest.call(null,seq__25569_25589__$1);
var G__25592 = c__19383__auto___25590;
var G__25593 = cljs.core.count.call(null,c__19383__auto___25590);
var G__25594 = (0);
seq__25569_25577 = G__25591;
chunk__25570_25578 = G__25592;
count__25571_25579 = G__25593;
i__25572_25580 = G__25594;
continue;
} else {
var vec__25574_25595 = cljs.core.first.call(null,seq__25569_25589__$1);
var k_25596 = cljs.core.nth.call(null,vec__25574_25595,(0),null);
var v_25597 = cljs.core.nth.call(null,vec__25574_25595,(1),null);
this$__$1.setRequestHeader(k_25596,v_25597);

var G__25598 = cljs.core.next.call(null,seq__25569_25589__$1);
var G__25599 = null;
var G__25600 = (0);
var G__25601 = (0);
seq__25569_25577 = G__25598;
chunk__25570_25578 = G__25599;
count__25571_25579 = G__25600;
i__25572_25580 = G__25601;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__18580__auto__ = body;
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1531355029443