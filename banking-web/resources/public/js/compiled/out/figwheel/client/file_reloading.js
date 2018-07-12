// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.reload_file_STAR_;

figwheel.client.file_reloading.resolve_ns;
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__33175_SHARP_,p2__33176_SHARP_){
var and__18568__auto__ = p1__33175_SHARP_;
if(cljs.core.truth_(and__18568__auto__)){
return p2__33176_SHARP_;
} else {
return and__18568__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18580__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18580__auto__){
return or__18580__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18580__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18580__auto__){
return or__18580__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18580__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19497__auto__,method_table__19493__auto__,prefer_table__19494__auto__,method_cache__19495__auto__,cached_hierarchy__19496__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33177){
var map__33178 = p__33177;
var map__33178__$1 = ((((!((map__33178 == null)))?((((map__33178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33178):map__33178);
var file = cljs.core.get.call(null,map__33178__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__33182){
var map__33183 = p__33182;
var map__33183__$1 = ((((!((map__33183 == null)))?((((map__33183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33183):map__33183);
var namespace = cljs.core.get.call(null,map__33183__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19497__auto__,method_table__19493__auto__,prefer_table__19494__auto__,method_cache__19495__auto__,cached_hierarchy__19496__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e33185){if((e33185 instanceof Error)){
var e = e33185;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33185;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(var_args){
var args33190 = [];
var len__19638__auto___33193 = arguments.length;
var i__19639__auto___33194 = (0);
while(true){
if((i__19639__auto___33194 < len__19638__auto___33193)){
args33190.push((arguments[i__19639__auto___33194]));

var G__33195 = (i__19639__auto___33194 + (1));
i__19639__auto___33194 = G__33195;
continue;
} else {
}
break;
}

var G__33192 = args33190.length;
switch (G__33192) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33190.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33203,callback){
var map__33206 = p__33203;
var map__33206__$1 = ((((!((map__33206 == null)))?((((map__33206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33206):map__33206);
var file_msg = map__33206__$1;
var request_url = cljs.core.get.call(null,map__33206__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33206,map__33206__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33206,map__33206__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33208){
var map__33211 = p__33208;
var map__33211__$1 = ((((!((map__33211 == null)))?((((map__33211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33211):map__33211);
var file_msg = map__33211__$1;
var namespace = cljs.core.get.call(null,map__33211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__33211__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18580__auto__ = meta_data;
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18568__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18568__auto__){
var or__18580__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
var or__18580__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18580__auto____$1)){
return or__18580__auto____$1;
} else {
var and__18568__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18568__auto____$1){
var or__18580__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18580__auto____$2){
return or__18580__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18568__auto____$1;
}
}
}
} else {
return and__18568__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33213,callback){
var map__33216 = p__33213;
var map__33216__$1 = ((((!((map__33216 == null)))?((((map__33216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33216):map__33216);
var file_msg = map__33216__$1;
var request_url = cljs.core.get.call(null,map__33216__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33216__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22838__auto___33309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___33309,out){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___33309,out){
return (function (state_33291){
var state_val_33292 = (state_33291[(1)]);
if((state_val_33292 === (1))){
var inst_33267 = cljs.core.nth.call(null,files,(0),null);
var inst_33268 = cljs.core.nthnext.call(null,files,(1));
var inst_33269 = files;
var state_33291__$1 = (function (){var statearr_33293 = state_33291;
(statearr_33293[(7)] = inst_33269);

(statearr_33293[(8)] = inst_33267);

(statearr_33293[(9)] = inst_33268);

return statearr_33293;
})();
var statearr_33294_33310 = state_33291__$1;
(statearr_33294_33310[(2)] = null);

(statearr_33294_33310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (2))){
var inst_33269 = (state_33291[(7)]);
var inst_33272 = (state_33291[(10)]);
var inst_33272__$1 = cljs.core.nth.call(null,inst_33269,(0),null);
var inst_33273 = cljs.core.nthnext.call(null,inst_33269,(1));
var inst_33275 = (inst_33272__$1 == null);
var inst_33276 = cljs.core.not.call(null,inst_33275);
var state_33291__$1 = (function (){var statearr_33295 = state_33291;
(statearr_33295[(11)] = inst_33273);

(statearr_33295[(10)] = inst_33272__$1);

return statearr_33295;
})();
if(inst_33276){
var statearr_33296_33313 = state_33291__$1;
(statearr_33296_33313[(1)] = (4));

} else {
var statearr_33297_33314 = state_33291__$1;
(statearr_33297_33314[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (3))){
var inst_33288 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33291__$1,inst_33288);
} else {
if((state_val_33292 === (4))){
var inst_33272 = (state_33291[(10)]);
var inst_33278 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33272);
var state_33291__$1 = state_33291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33291__$1,(7),inst_33278);
} else {
if((state_val_33292 === (5))){
var inst_33284 = cljs.core.async.close_BANG_.call(null,out);
var state_33291__$1 = state_33291;
var statearr_33298_33327 = state_33291__$1;
(statearr_33298_33327[(2)] = inst_33284);

(statearr_33298_33327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (6))){
var inst_33286 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
var statearr_33299_33329 = state_33291__$1;
(statearr_33299_33329[(2)] = inst_33286);

(statearr_33299_33329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (7))){
var inst_33273 = (state_33291[(11)]);
var inst_33280 = (state_33291[(2)]);
var inst_33281 = cljs.core.async.put_BANG_.call(null,out,inst_33280);
var inst_33269 = inst_33273;
var state_33291__$1 = (function (){var statearr_33300 = state_33291;
(statearr_33300[(7)] = inst_33269);

(statearr_33300[(12)] = inst_33281);

return statearr_33300;
})();
var statearr_33301_33333 = state_33291__$1;
(statearr_33301_33333[(2)] = null);

(statearr_33301_33333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22838__auto___33309,out))
;
return ((function (switch__22773__auto__,c__22838__auto___33309,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22774__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22774__auto____0 = (function (){
var statearr_33305 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33305[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22774__auto__);

(statearr_33305[(1)] = (1));

return statearr_33305;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22774__auto____1 = (function (state_33291){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_33291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e33306){if((e33306 instanceof Object)){
var ex__22777__auto__ = e33306;
var statearr_33307_33335 = state_33291;
(statearr_33307_33335[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33336 = state_33291;
state_33291 = G__33336;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22774__auto__ = function(state_33291){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22774__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22774__auto____1.call(this,state_33291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22774__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22774__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___33309,out))
})();
var state__22840__auto__ = (function (){var statearr_33308 = f__22839__auto__.call(null);
(statearr_33308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___33309);

return statearr_33308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___33309,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__33337,p__33338){
var map__33343 = p__33337;
var map__33343__$1 = ((((!((map__33343 == null)))?((((map__33343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33343):map__33343);
var opts = map__33343__$1;
var url_rewriter = cljs.core.get.call(null,map__33343__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__33344 = p__33338;
var map__33344__$1 = ((((!((map__33344 == null)))?((((map__33344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33344):map__33344);
var file_msg = map__33344__$1;
var file = cljs.core.get.call(null,map__33344__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33351){
var map__33355 = p__33351;
var map__33355__$1 = ((((!((map__33355 == null)))?((((map__33355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33355):map__33355);
var eval_body__$1 = cljs.core.get.call(null,map__33355__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33355__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18568__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18568__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18568__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e33357){var e = e33357;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33370,p__33371){
var map__33607 = p__33370;
var map__33607__$1 = ((((!((map__33607 == null)))?((((map__33607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33607):map__33607);
var opts = map__33607__$1;
var before_jsload = cljs.core.get.call(null,map__33607__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33607__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__33607__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__33608 = p__33371;
var map__33608__$1 = ((((!((map__33608 == null)))?((((map__33608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33608):map__33608);
var msg = map__33608__$1;
var files = cljs.core.get.call(null,map__33608__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__22838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files){
return (function (state_33755){
var state_val_33756 = (state_33755[(1)]);
if((state_val_33756 === (7))){
var inst_33627 = (state_33755[(7)]);
var inst_33626 = (state_33755[(8)]);
var inst_33624 = (state_33755[(9)]);
var inst_33625 = (state_33755[(10)]);
var inst_33632 = cljs.core._nth.call(null,inst_33625,inst_33627);
var inst_33633 = figwheel.client.file_reloading.eval_body.call(null,inst_33632);
var inst_33634 = (inst_33627 + (1));
var tmp33757 = inst_33626;
var tmp33758 = inst_33624;
var tmp33759 = inst_33625;
var inst_33624__$1 = tmp33758;
var inst_33625__$1 = tmp33759;
var inst_33626__$1 = tmp33757;
var inst_33627__$1 = inst_33634;
var state_33755__$1 = (function (){var statearr_33760 = state_33755;
(statearr_33760[(7)] = inst_33627__$1);

(statearr_33760[(8)] = inst_33626__$1);

(statearr_33760[(9)] = inst_33624__$1);

(statearr_33760[(11)] = inst_33633);

(statearr_33760[(10)] = inst_33625__$1);

return statearr_33760;
})();
var statearr_33761_33841 = state_33755__$1;
(statearr_33761_33841[(2)] = null);

(statearr_33761_33841[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (20))){
var inst_33669 = (state_33755[(12)]);
var inst_33670 = (state_33755[(13)]);
var inst_33674 = (state_33755[(14)]);
var inst_33677 = (state_33755[(15)]);
var inst_33675 = (state_33755[(16)]);
var inst_33680 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33682 = (function (){var all_files = inst_33669;
var files_SINGLEQUOTE_ = inst_33670;
var res_SINGLEQUOTE_ = inst_33674;
var res = inst_33675;
var files_not_loaded = inst_33677;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33669,inst_33670,inst_33674,inst_33677,inst_33675,inst_33680,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files){
return (function (p__33681){
var map__33762 = p__33681;
var map__33762__$1 = ((((!((map__33762 == null)))?((((map__33762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33762):map__33762);
var namespace = cljs.core.get.call(null,map__33762__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33762__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33669,inst_33670,inst_33674,inst_33677,inst_33675,inst_33680,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files))
})();
var inst_33683 = cljs.core.map.call(null,inst_33682,inst_33675);
var inst_33684 = cljs.core.pr_str.call(null,inst_33683);
var inst_33685 = figwheel.client.utils.log.call(null,inst_33684);
var inst_33686 = (function (){var all_files = inst_33669;
var files_SINGLEQUOTE_ = inst_33670;
var res_SINGLEQUOTE_ = inst_33674;
var res = inst_33675;
var files_not_loaded = inst_33677;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33669,inst_33670,inst_33674,inst_33677,inst_33675,inst_33680,inst_33682,inst_33683,inst_33684,inst_33685,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33669,inst_33670,inst_33674,inst_33677,inst_33675,inst_33680,inst_33682,inst_33683,inst_33684,inst_33685,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files))
})();
var inst_33687 = setTimeout(inst_33686,(10));
var state_33755__$1 = (function (){var statearr_33764 = state_33755;
(statearr_33764[(17)] = inst_33685);

(statearr_33764[(18)] = inst_33680);

return statearr_33764;
})();
var statearr_33765_33844 = state_33755__$1;
(statearr_33765_33844[(2)] = inst_33687);

(statearr_33765_33844[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (27))){
var state_33755__$1 = state_33755;
var statearr_33766_33847 = state_33755__$1;
(statearr_33766_33847[(2)] = false);

(statearr_33766_33847[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (1))){
var inst_33615 = (state_33755[(19)]);
var inst_33613 = before_jsload.call(null,files);
var inst_33614 = (function (){return ((function (inst_33615,inst_33613,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files){
return (function (p1__33364_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33364_SHARP_);
});
;})(inst_33615,inst_33613,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files))
})();
var inst_33615__$1 = cljs.core.filter.call(null,inst_33614,files);
var inst_33616 = cljs.core.not_empty.call(null,inst_33615__$1);
var state_33755__$1 = (function (){var statearr_33767 = state_33755;
(statearr_33767[(19)] = inst_33615__$1);

(statearr_33767[(20)] = inst_33613);

return statearr_33767;
})();
if(cljs.core.truth_(inst_33616)){
var statearr_33768_33850 = state_33755__$1;
(statearr_33768_33850[(1)] = (2));

} else {
var statearr_33769_33851 = state_33755__$1;
(statearr_33769_33851[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (24))){
var state_33755__$1 = state_33755;
var statearr_33770_33852 = state_33755__$1;
(statearr_33770_33852[(2)] = null);

(statearr_33770_33852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (39))){
var state_33755__$1 = state_33755;
var statearr_33771_33856 = state_33755__$1;
(statearr_33771_33856[(2)] = null);

(statearr_33771_33856[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (4))){
var inst_33661 = (state_33755[(2)]);
var inst_33662 = (function (){return ((function (inst_33661,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files){
return (function (p1__33365_SHARP_){
var and__18568__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33365_SHARP_);
if(cljs.core.truth_(and__18568__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33365_SHARP_));
} else {
return and__18568__auto__;
}
});
;})(inst_33661,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files))
})();
var inst_33663 = cljs.core.filter.call(null,inst_33662,files);
var state_33755__$1 = (function (){var statearr_33772 = state_33755;
(statearr_33772[(21)] = inst_33663);

(statearr_33772[(22)] = inst_33661);

return statearr_33772;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_33774_33857 = state_33755__$1;
(statearr_33774_33857[(1)] = (16));

} else {
var statearr_33775_33858 = state_33755__$1;
(statearr_33775_33858[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (15))){
var inst_33651 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33776_33859 = state_33755__$1;
(statearr_33776_33859[(2)] = inst_33651);

(statearr_33776_33859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (21))){
var state_33755__$1 = state_33755;
var statearr_33777_33861 = state_33755__$1;
(statearr_33777_33861[(2)] = null);

(statearr_33777_33861[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (31))){
var inst_33709 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33778_33862 = state_33755__$1;
(statearr_33778_33862[(2)] = inst_33709);

(statearr_33778_33862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (32))){
var inst_33697 = (state_33755[(23)]);
var inst_33714 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33697);
var state_33755__$1 = state_33755;
var statearr_33779_33863 = state_33755__$1;
(statearr_33779_33863[(2)] = inst_33714);

(statearr_33779_33863[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (40))){
var inst_33720 = (state_33755[(24)]);
var inst_33738 = (state_33755[(2)]);
var inst_33739 = cljs.core.not_empty.call(null,inst_33720);
var state_33755__$1 = (function (){var statearr_33780 = state_33755;
(statearr_33780[(25)] = inst_33738);

return statearr_33780;
})();
if(cljs.core.truth_(inst_33739)){
var statearr_33781_33864 = state_33755__$1;
(statearr_33781_33864[(1)] = (41));

} else {
var statearr_33782_33865 = state_33755__$1;
(statearr_33782_33865[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (33))){
var inst_33697 = (state_33755[(23)]);
var state_33755__$1 = state_33755;
var statearr_33783_33866 = state_33755__$1;
(statearr_33783_33866[(2)] = inst_33697);

(statearr_33783_33866[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (13))){
var inst_33637 = (state_33755[(26)]);
var inst_33641 = cljs.core.chunk_first.call(null,inst_33637);
var inst_33642 = cljs.core.chunk_rest.call(null,inst_33637);
var inst_33643 = cljs.core.count.call(null,inst_33641);
var inst_33624 = inst_33642;
var inst_33625 = inst_33641;
var inst_33626 = inst_33643;
var inst_33627 = (0);
var state_33755__$1 = (function (){var statearr_33784 = state_33755;
(statearr_33784[(7)] = inst_33627);

(statearr_33784[(8)] = inst_33626);

(statearr_33784[(9)] = inst_33624);

(statearr_33784[(10)] = inst_33625);

return statearr_33784;
})();
var statearr_33785_33867 = state_33755__$1;
(statearr_33785_33867[(2)] = null);

(statearr_33785_33867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (22))){
var inst_33677 = (state_33755[(15)]);
var inst_33690 = (state_33755[(2)]);
var inst_33691 = cljs.core.not_empty.call(null,inst_33677);
var state_33755__$1 = (function (){var statearr_33786 = state_33755;
(statearr_33786[(27)] = inst_33690);

return statearr_33786;
})();
if(cljs.core.truth_(inst_33691)){
var statearr_33787_33868 = state_33755__$1;
(statearr_33787_33868[(1)] = (23));

} else {
var statearr_33788_33869 = state_33755__$1;
(statearr_33788_33869[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (36))){
var state_33755__$1 = state_33755;
var statearr_33789_33870 = state_33755__$1;
(statearr_33789_33870[(2)] = null);

(statearr_33789_33870[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (41))){
var inst_33720 = (state_33755[(24)]);
var inst_33741 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33720);
var inst_33742 = cljs.core.pr_str.call(null,inst_33741);
var inst_33743 = [cljs.core.str("not required: "),cljs.core.str(inst_33742)].join('');
var inst_33744 = figwheel.client.utils.log.call(null,inst_33743);
var state_33755__$1 = state_33755;
var statearr_33790_33871 = state_33755__$1;
(statearr_33790_33871[(2)] = inst_33744);

(statearr_33790_33871[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (43))){
var inst_33747 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33791_33872 = state_33755__$1;
(statearr_33791_33872[(2)] = inst_33747);

(statearr_33791_33872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (29))){
var state_33755__$1 = state_33755;
var statearr_33792_33873 = state_33755__$1;
(statearr_33792_33873[(2)] = true);

(statearr_33792_33873[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (6))){
var inst_33658 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33793_33874 = state_33755__$1;
(statearr_33793_33874[(2)] = inst_33658);

(statearr_33793_33874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (28))){
var inst_33712 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33712)){
var statearr_33794_33875 = state_33755__$1;
(statearr_33794_33875[(1)] = (32));

} else {
var statearr_33795_33876 = state_33755__$1;
(statearr_33795_33876[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (25))){
var inst_33750 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33755__$1,inst_33750);
} else {
if((state_val_33756 === (34))){
var inst_33718 = (state_33755[(28)]);
var inst_33717 = (state_33755[(2)]);
var inst_33718__$1 = cljs.core.get.call(null,inst_33717,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33719 = cljs.core.get.call(null,inst_33717,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_33720 = cljs.core.get.call(null,inst_33717,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33721 = cljs.core.not_empty.call(null,inst_33718__$1);
var state_33755__$1 = (function (){var statearr_33796 = state_33755;
(statearr_33796[(29)] = inst_33719);

(statearr_33796[(24)] = inst_33720);

(statearr_33796[(28)] = inst_33718__$1);

return statearr_33796;
})();
if(cljs.core.truth_(inst_33721)){
var statearr_33797_33877 = state_33755__$1;
(statearr_33797_33877[(1)] = (35));

} else {
var statearr_33798_33878 = state_33755__$1;
(statearr_33798_33878[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (17))){
var inst_33663 = (state_33755[(21)]);
var state_33755__$1 = state_33755;
var statearr_33799_33883 = state_33755__$1;
(statearr_33799_33883[(2)] = inst_33663);

(statearr_33799_33883[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (3))){
var state_33755__$1 = state_33755;
var statearr_33800_33887 = state_33755__$1;
(statearr_33800_33887[(2)] = null);

(statearr_33800_33887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (12))){
var inst_33654 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33801_33888 = state_33755__$1;
(statearr_33801_33888[(2)] = inst_33654);

(statearr_33801_33888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (2))){
var inst_33615 = (state_33755[(19)]);
var inst_33623 = cljs.core.seq.call(null,inst_33615);
var inst_33624 = inst_33623;
var inst_33625 = null;
var inst_33626 = (0);
var inst_33627 = (0);
var state_33755__$1 = (function (){var statearr_33802 = state_33755;
(statearr_33802[(7)] = inst_33627);

(statearr_33802[(8)] = inst_33626);

(statearr_33802[(9)] = inst_33624);

(statearr_33802[(10)] = inst_33625);

return statearr_33802;
})();
var statearr_33803_33889 = state_33755__$1;
(statearr_33803_33889[(2)] = null);

(statearr_33803_33889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (23))){
var inst_33669 = (state_33755[(12)]);
var inst_33670 = (state_33755[(13)]);
var inst_33674 = (state_33755[(14)]);
var inst_33677 = (state_33755[(15)]);
var inst_33675 = (state_33755[(16)]);
var inst_33697 = (state_33755[(23)]);
var inst_33693 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33696 = (function (){var all_files = inst_33669;
var files_SINGLEQUOTE_ = inst_33670;
var res_SINGLEQUOTE_ = inst_33674;
var res = inst_33675;
var files_not_loaded = inst_33677;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33669,inst_33670,inst_33674,inst_33677,inst_33675,inst_33697,inst_33693,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files){
return (function (p__33695){
var map__33804 = p__33695;
var map__33804__$1 = ((((!((map__33804 == null)))?((((map__33804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33804):map__33804);
var meta_data = cljs.core.get.call(null,map__33804__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33669,inst_33670,inst_33674,inst_33677,inst_33675,inst_33697,inst_33693,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files))
})();
var inst_33697__$1 = cljs.core.group_by.call(null,inst_33696,inst_33677);
var inst_33699 = (inst_33697__$1 == null);
var inst_33700 = cljs.core.not.call(null,inst_33699);
var state_33755__$1 = (function (){var statearr_33806 = state_33755;
(statearr_33806[(30)] = inst_33693);

(statearr_33806[(23)] = inst_33697__$1);

return statearr_33806;
})();
if(inst_33700){
var statearr_33807_33892 = state_33755__$1;
(statearr_33807_33892[(1)] = (26));

} else {
var statearr_33808_33893 = state_33755__$1;
(statearr_33808_33893[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (35))){
var inst_33718 = (state_33755[(28)]);
var inst_33723 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33718);
var inst_33724 = cljs.core.pr_str.call(null,inst_33723);
var inst_33725 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33724)].join('');
var inst_33726 = figwheel.client.utils.log.call(null,inst_33725);
var state_33755__$1 = state_33755;
var statearr_33809_33895 = state_33755__$1;
(statearr_33809_33895[(2)] = inst_33726);

(statearr_33809_33895[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (19))){
var inst_33669 = (state_33755[(12)]);
var inst_33670 = (state_33755[(13)]);
var inst_33674 = (state_33755[(14)]);
var inst_33675 = (state_33755[(16)]);
var inst_33674__$1 = (state_33755[(2)]);
var inst_33675__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33674__$1);
var inst_33676 = (function (){var all_files = inst_33669;
var files_SINGLEQUOTE_ = inst_33670;
var res_SINGLEQUOTE_ = inst_33674__$1;
var res = inst_33675__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_33669,inst_33670,inst_33674,inst_33675,inst_33674__$1,inst_33675__$1,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files){
return (function (p1__33367_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33367_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_33669,inst_33670,inst_33674,inst_33675,inst_33674__$1,inst_33675__$1,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files))
})();
var inst_33677 = cljs.core.filter.call(null,inst_33676,inst_33674__$1);
var inst_33678 = cljs.core.not_empty.call(null,inst_33675__$1);
var state_33755__$1 = (function (){var statearr_33810 = state_33755;
(statearr_33810[(14)] = inst_33674__$1);

(statearr_33810[(15)] = inst_33677);

(statearr_33810[(16)] = inst_33675__$1);

return statearr_33810;
})();
if(cljs.core.truth_(inst_33678)){
var statearr_33811_33897 = state_33755__$1;
(statearr_33811_33897[(1)] = (20));

} else {
var statearr_33812_33898 = state_33755__$1;
(statearr_33812_33898[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (11))){
var state_33755__$1 = state_33755;
var statearr_33813_33899 = state_33755__$1;
(statearr_33813_33899[(2)] = null);

(statearr_33813_33899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (9))){
var inst_33656 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33814_33900 = state_33755__$1;
(statearr_33814_33900[(2)] = inst_33656);

(statearr_33814_33900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (5))){
var inst_33627 = (state_33755[(7)]);
var inst_33626 = (state_33755[(8)]);
var inst_33629 = (inst_33627 < inst_33626);
var inst_33630 = inst_33629;
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33630)){
var statearr_33815_33902 = state_33755__$1;
(statearr_33815_33902[(1)] = (7));

} else {
var statearr_33816_33903 = state_33755__$1;
(statearr_33816_33903[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (14))){
var inst_33637 = (state_33755[(26)]);
var inst_33646 = cljs.core.first.call(null,inst_33637);
var inst_33647 = figwheel.client.file_reloading.eval_body.call(null,inst_33646);
var inst_33648 = cljs.core.next.call(null,inst_33637);
var inst_33624 = inst_33648;
var inst_33625 = null;
var inst_33626 = (0);
var inst_33627 = (0);
var state_33755__$1 = (function (){var statearr_33817 = state_33755;
(statearr_33817[(7)] = inst_33627);

(statearr_33817[(31)] = inst_33647);

(statearr_33817[(8)] = inst_33626);

(statearr_33817[(9)] = inst_33624);

(statearr_33817[(10)] = inst_33625);

return statearr_33817;
})();
var statearr_33818_33905 = state_33755__$1;
(statearr_33818_33905[(2)] = null);

(statearr_33818_33905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (26))){
var inst_33697 = (state_33755[(23)]);
var inst_33702 = inst_33697.cljs$lang$protocol_mask$partition0$;
var inst_33703 = (inst_33702 & (64));
var inst_33704 = inst_33697.cljs$core$ISeq$;
var inst_33705 = (inst_33703) || (inst_33704);
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33705)){
var statearr_33819_33906 = state_33755__$1;
(statearr_33819_33906[(1)] = (29));

} else {
var statearr_33820_33907 = state_33755__$1;
(statearr_33820_33907[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (16))){
var inst_33663 = (state_33755[(21)]);
var inst_33665 = (function (){var all_files = inst_33663;
return ((function (all_files,inst_33663,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files){
return (function (p1__33366_SHARP_){
return cljs.core.update_in.call(null,p1__33366_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_33663,state_val_33756,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files))
})();
var inst_33666 = cljs.core.map.call(null,inst_33665,inst_33663);
var state_33755__$1 = state_33755;
var statearr_33821_33910 = state_33755__$1;
(statearr_33821_33910[(2)] = inst_33666);

(statearr_33821_33910[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (38))){
var inst_33719 = (state_33755[(29)]);
var inst_33732 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33719);
var inst_33733 = cljs.core.pr_str.call(null,inst_33732);
var inst_33734 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_33733)].join('');
var inst_33735 = figwheel.client.utils.log.call(null,inst_33734);
var state_33755__$1 = state_33755;
var statearr_33822_33912 = state_33755__$1;
(statearr_33822_33912[(2)] = inst_33735);

(statearr_33822_33912[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (30))){
var state_33755__$1 = state_33755;
var statearr_33823_33913 = state_33755__$1;
(statearr_33823_33913[(2)] = false);

(statearr_33823_33913[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (10))){
var inst_33637 = (state_33755[(26)]);
var inst_33639 = cljs.core.chunked_seq_QMARK_.call(null,inst_33637);
var state_33755__$1 = state_33755;
if(inst_33639){
var statearr_33824_33920 = state_33755__$1;
(statearr_33824_33920[(1)] = (13));

} else {
var statearr_33825_33921 = state_33755__$1;
(statearr_33825_33921[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (18))){
var inst_33669 = (state_33755[(12)]);
var inst_33670 = (state_33755[(13)]);
var inst_33669__$1 = (state_33755[(2)]);
var inst_33670__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_33669__$1);
var inst_33672 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33670__$1);
var state_33755__$1 = (function (){var statearr_33826 = state_33755;
(statearr_33826[(12)] = inst_33669__$1);

(statearr_33826[(13)] = inst_33670__$1);

return statearr_33826;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33755__$1,(19),inst_33672);
} else {
if((state_val_33756 === (42))){
var state_33755__$1 = state_33755;
var statearr_33827_33922 = state_33755__$1;
(statearr_33827_33922[(2)] = null);

(statearr_33827_33922[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (37))){
var inst_33719 = (state_33755[(29)]);
var inst_33729 = (state_33755[(2)]);
var inst_33730 = cljs.core.not_empty.call(null,inst_33719);
var state_33755__$1 = (function (){var statearr_33828 = state_33755;
(statearr_33828[(32)] = inst_33729);

return statearr_33828;
})();
if(cljs.core.truth_(inst_33730)){
var statearr_33829_33923 = state_33755__$1;
(statearr_33829_33923[(1)] = (38));

} else {
var statearr_33830_33924 = state_33755__$1;
(statearr_33830_33924[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (8))){
var inst_33624 = (state_33755[(9)]);
var inst_33637 = (state_33755[(26)]);
var inst_33637__$1 = cljs.core.seq.call(null,inst_33624);
var state_33755__$1 = (function (){var statearr_33831 = state_33755;
(statearr_33831[(26)] = inst_33637__$1);

return statearr_33831;
})();
if(inst_33637__$1){
var statearr_33832_33925 = state_33755__$1;
(statearr_33832_33925[(1)] = (10));

} else {
var statearr_33833_33926 = state_33755__$1;
(statearr_33833_33926[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files))
;
return ((function (switch__22773__auto__,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22774__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22774__auto____0 = (function (){
var statearr_33837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33837[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22774__auto__);

(statearr_33837[(1)] = (1));

return statearr_33837;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22774__auto____1 = (function (state_33755){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_33755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e33838){if((e33838 instanceof Object)){
var ex__22777__auto__ = e33838;
var statearr_33839_33927 = state_33755;
(statearr_33839_33927[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33928 = state_33755;
state_33755 = G__33928;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22774__auto__ = function(state_33755){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22774__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22774__auto____1.call(this,state_33755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22774__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22774__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files))
})();
var state__22840__auto__ = (function (){var statearr_33840 = f__22839__auto__.call(null);
(statearr_33840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto__);

return statearr_33840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto__,map__33607,map__33607__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33608,map__33608__$1,msg,files))
);

return c__22838__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33931,link){
var map__33934 = p__33931;
var map__33934__$1 = ((((!((map__33934 == null)))?((((map__33934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33934):map__33934);
var file = cljs.core.get.call(null,map__33934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__33934,map__33934__$1,file){
return (function (p1__33929_SHARP_,p2__33930_SHARP_){
if(cljs.core._EQ_.call(null,p1__33929_SHARP_,p2__33930_SHARP_)){
return p1__33929_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__33934,map__33934__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33950){
var map__33951 = p__33950;
var map__33951__$1 = ((((!((map__33951 == null)))?((((map__33951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33951):map__33951);
var match_length = cljs.core.get.call(null,map__33951__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33951__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33946_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33946_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args33954 = [];
var len__19638__auto___33958 = arguments.length;
var i__19639__auto___33959 = (0);
while(true){
if((i__19639__auto___33959 < len__19638__auto___33958)){
args33954.push((arguments[i__19639__auto___33959]));

var G__33960 = (i__19639__auto___33959 + (1));
i__19639__auto___33959 = G__33960;
continue;
} else {
}
break;
}

var G__33957 = args33954.length;
switch (G__33957) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33954.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33970){
var map__33973 = p__33970;
var map__33973__$1 = ((((!((map__33973 == null)))?((((map__33973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33973):map__33973);
var f_data = map__33973__$1;
var file = cljs.core.get.call(null,map__33973__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__33973__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18580__auto__ = request_url;
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33977,files_msg){
var map__34008 = p__33977;
var map__34008__$1 = ((((!((map__34008 == null)))?((((map__34008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34008):map__34008);
var opts = map__34008__$1;
var on_cssload = cljs.core.get.call(null,map__34008__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34010_34036 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__34011_34037 = null;
var count__34012_34038 = (0);
var i__34013_34039 = (0);
while(true){
if((i__34013_34039 < count__34012_34038)){
var f_34044 = cljs.core._nth.call(null,chunk__34011_34037,i__34013_34039);
figwheel.client.file_reloading.reload_css_file.call(null,f_34044);

var G__34045 = seq__34010_34036;
var G__34046 = chunk__34011_34037;
var G__34047 = count__34012_34038;
var G__34048 = (i__34013_34039 + (1));
seq__34010_34036 = G__34045;
chunk__34011_34037 = G__34046;
count__34012_34038 = G__34047;
i__34013_34039 = G__34048;
continue;
} else {
var temp__4657__auto___34049 = cljs.core.seq.call(null,seq__34010_34036);
if(temp__4657__auto___34049){
var seq__34010_34052__$1 = temp__4657__auto___34049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34010_34052__$1)){
var c__19383__auto___34053 = cljs.core.chunk_first.call(null,seq__34010_34052__$1);
var G__34054 = cljs.core.chunk_rest.call(null,seq__34010_34052__$1);
var G__34055 = c__19383__auto___34053;
var G__34056 = cljs.core.count.call(null,c__19383__auto___34053);
var G__34057 = (0);
seq__34010_34036 = G__34054;
chunk__34011_34037 = G__34055;
count__34012_34038 = G__34056;
i__34013_34039 = G__34057;
continue;
} else {
var f_34058 = cljs.core.first.call(null,seq__34010_34052__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34058);

var G__34059 = cljs.core.next.call(null,seq__34010_34052__$1);
var G__34060 = null;
var G__34061 = (0);
var G__34062 = (0);
seq__34010_34036 = G__34059;
chunk__34011_34037 = G__34060;
count__34012_34038 = G__34061;
i__34013_34039 = G__34062;
continue;
}
} else {
}
}
break;
}

var c__22838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto__,map__34008,map__34008__$1,opts,on_cssload){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto__,map__34008,map__34008__$1,opts,on_cssload){
return (function (state_34021){
var state_val_34022 = (state_34021[(1)]);
if((state_val_34022 === (1))){
var inst_34014 = cljs.core.async.timeout.call(null,(100));
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34021__$1,(2),inst_34014);
} else {
if((state_val_34022 === (2))){
var inst_34016 = (state_34021[(2)]);
var inst_34018 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_34019 = on_cssload.call(null,inst_34018);
var state_34021__$1 = (function (){var statearr_34024 = state_34021;
(statearr_34024[(7)] = inst_34016);

return statearr_34024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34021__$1,inst_34019);
} else {
return null;
}
}
});})(c__22838__auto__,map__34008,map__34008__$1,opts,on_cssload))
;
return ((function (switch__22773__auto__,c__22838__auto__,map__34008,map__34008__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22774__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22774__auto____0 = (function (){
var statearr_34028 = [null,null,null,null,null,null,null,null];
(statearr_34028[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__22774__auto__);

(statearr_34028[(1)] = (1));

return statearr_34028;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22774__auto____1 = (function (state_34021){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_34021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e34029){if((e34029 instanceof Object)){
var ex__22777__auto__ = e34029;
var statearr_34030_34067 = state_34021;
(statearr_34030_34067[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34070 = state_34021;
state_34021 = G__34070;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__22774__auto__ = function(state_34021){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22774__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22774__auto____1.call(this,state_34021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22774__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22774__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto__,map__34008,map__34008__$1,opts,on_cssload))
})();
var state__22840__auto__ = (function (){var statearr_34031 = f__22839__auto__.call(null);
(statearr_34031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto__);

return statearr_34031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto__,map__34008,map__34008__$1,opts,on_cssload))
);

return c__22838__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1531355036671