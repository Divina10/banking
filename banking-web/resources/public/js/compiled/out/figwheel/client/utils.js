// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_;
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__33152_SHARP_,p2__33151_SHARP_){
return [cljs.core.str(p2__33151_SHARP_)].join('');
}));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args33157 = [];
var len__19638__auto___33163 = arguments.length;
var i__19639__auto___33164 = (0);
while(true){
if((i__19639__auto___33164 < len__19638__auto___33163)){
args33157.push((arguments[i__19639__auto___33164]));

var G__33165 = (i__19639__auto___33164 + (1));
i__19639__auto___33164 = G__33165;
continue;
} else {
}
break;
}

var G__33159 = args33157.length;
switch (G__33159) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33157.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__33160 = cljs.core._EQ_;
var expr__33161 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__33160.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__33161))){
return ((function (pred__33160,expr__33161){
return (function (p1__33153_SHARP_){
return console.warn(p1__33153_SHARP_);
});
;})(pred__33160,expr__33161))
} else {
if(cljs.core.truth_(pred__33160.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__33161))){
return ((function (pred__33160,expr__33161){
return (function (p1__33154_SHARP_){
return console.debug(p1__33154_SHARP_);
});
;})(pred__33160,expr__33161))
} else {
if(cljs.core.truth_(pred__33160.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__33161))){
return ((function (pred__33160,expr__33161){
return (function (p1__33155_SHARP_){
return console.error(p1__33155_SHARP_);
});
;})(pred__33160,expr__33161))
} else {
return ((function (pred__33160,expr__33161){
return (function (p1__33156_SHARP_){
return console.log(p1__33156_SHARP_);
});
;})(pred__33160,expr__33161))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=utils.js.map?rel=1531355036213