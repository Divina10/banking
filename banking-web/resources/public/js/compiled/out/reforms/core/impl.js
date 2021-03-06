// Compiled by ClojureScript 1.7.107 {}
goog.provide('reforms.core.impl');
goog.require('cljs.core');
goog.require('reforms.binding.core');
goog.require('reforms.core.options');
goog.require('reforms.core.react_keys');
goog.require('clojure.string');
goog.require('goog.ui.IdGenerator');
reforms.core.impl.spinner;

reforms.core.impl.feedback_icon;
reforms.core.impl.extend_attrs = (function reforms$core$impl$extend_attrs(attrs,extensions){
return cljs.core.merge_with.call(null,(function() { 
var G__26551__delegate = function (vals){
var result = (function (){var vals_SINGLEQUOTE_ = cljs.core.remove.call(null,cljs.core.nil_QMARK_,vals);
if(cljs.core.truth_(cljs.core.some.call(null,((function (vals_SINGLEQUOTE_){
return (function (p1__26548_SHARP_){
if(!((p1__26548_SHARP_ == null))){
if((false) || (p1__26548_SHARP_.cljs$core$Fn$)){
return true;
} else {
if((!p1__26548_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,p1__26548_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,p1__26548_SHARP_);
}
});})(vals_SINGLEQUOTE_))
,vals_SINGLEQUOTE_))){
return ((function (vals_SINGLEQUOTE_){
return (function() { 
var G__26552__delegate = function (args){
return cljs.core.last.call(null,cljs.core.map.call(null,((function (vals_SINGLEQUOTE_){
return (function (f){
return cljs.core.apply.call(null,f,args);
});})(vals_SINGLEQUOTE_))
,vals_SINGLEQUOTE_));
};
var G__26552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26553__i = 0, G__26553__a = new Array(arguments.length -  0);
while (G__26553__i < G__26553__a.length) {G__26553__a[G__26553__i] = arguments[G__26553__i + 0]; ++G__26553__i;}
  args = new cljs.core.IndexedSeq(G__26553__a,0);
} 
return G__26552__delegate.call(this,args);};
G__26552.cljs$lang$maxFixedArity = 0;
G__26552.cljs$lang$applyTo = (function (arglist__26554){
var args = cljs.core.seq(arglist__26554);
return G__26552__delegate(args);
});
G__26552.cljs$core$IFn$_invoke$arity$variadic = G__26552__delegate;
return G__26552;
})()
;
;})(vals_SINGLEQUOTE_))
} else {
return clojure.string.join.call(null," ",vals_SINGLEQUOTE_);
}
})();
return result;
};
var G__26551 = function (var_args){
var vals = null;
if (arguments.length > 0) {
var G__26555__i = 0, G__26555__a = new Array(arguments.length -  0);
while (G__26555__i < G__26555__a.length) {G__26555__a[G__26555__i] = arguments[G__26555__i + 0]; ++G__26555__i;}
  vals = new cljs.core.IndexedSeq(G__26555__a,0);
} 
return G__26551__delegate.call(this,vals);};
G__26551.cljs$lang$maxFixedArity = 0;
G__26551.cljs$lang$applyTo = (function (arglist__26556){
var vals = cljs.core.seq(arglist__26556);
return G__26551__delegate(vals);
});
G__26551.cljs$core$IFn$_invoke$arity$variadic = G__26551__delegate;
return G__26551;
})()
,attrs,extensions);
});
reforms.core.impl.override_attrs = (function reforms$core$impl$override_attrs(old,new$){
return cljs.core.merge_with.call(null,(function (old__$1,new$__$1){
if(cljs.core.map_QMARK_.call(null,old__$1)){
return reforms$core$impl$override_attrs.call(null,old__$1,new$__$1);
} else {
return new$__$1;

}
}),old,new$);
});
reforms.core.impl.merge_attrs = (function reforms$core$impl$merge_attrs(defaults,overrides,extensions){
var $ = overrides;
var $__$1 = reforms.core.impl.override_attrs.call(null,defaults,$);
return reforms.core.impl.extend_attrs.call(null,$__$1,extensions);
});
reforms.core.impl.parse_args = (function reforms$core$impl$parse_args(var_args){
var args26557 = [];
var len__19638__auto___26561 = arguments.length;
var i__19639__auto___26562 = (0);
while(true){
if((i__19639__auto___26562 < len__19638__auto___26561)){
args26557.push((arguments[i__19639__auto___26562]));

var G__26563 = (i__19639__auto___26562 + (1));
i__19639__auto___26562 = G__26563;
continue;
} else {
}
break;
}

var G__26559 = args26557.length;
switch (G__26559) {
case 3:
return reforms.core.impl.parse_args.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return reforms.core.impl.parse_args.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return reforms.core.impl.parse_args.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26557.length)].join('')));

}
});

reforms.core.impl.parse_args.cljs$core$IFn$_invoke$arity$3 = (function (args,opt_args,result){
while(true){
var vec__26560 = cljs.core.first.call(null,opt_args);
var opt_pred = cljs.core.nth.call(null,vec__26560,(0),null);
var def = cljs.core.nth.call(null,vec__26560,(1),null);
var arg = cljs.core.first.call(null,args);
if((arg == null)){
return result;
} else {
if((opt_pred == null)){
var G__26565 = cljs.core.rest.call(null,args);
var G__26566 = opt_args;
var G__26567 = cljs.core.conj.call(null,result,arg);
args = G__26565;
opt_args = G__26566;
result = G__26567;
continue;
} else {
if(cljs.core.truth_(opt_pred.call(null,arg))){
var G__26568 = cljs.core.rest.call(null,args);
var G__26569 = cljs.core.rest.call(null,opt_args);
var G__26570 = cljs.core.conj.call(null,result,arg);
args = G__26568;
opt_args = G__26569;
result = G__26570;
continue;
} else {
var G__26571 = args;
var G__26572 = cljs.core.rest.call(null,opt_args);
var G__26573 = cljs.core.conj.call(null,result,def);
args = G__26571;
opt_args = G__26572;
result = G__26573;
continue;

}
}
}
break;
}
});

reforms.core.impl.parse_args.cljs$core$IFn$_invoke$arity$2 = (function (args,opt_args){
return reforms.core.impl.parse_args.call(null,args,opt_args,cljs.core.PersistentVector.EMPTY);
});

reforms.core.impl.parse_args.cljs$core$IFn$_invoke$arity$1 = (function (args){
return reforms.core.impl.parse_args.call(null,args,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});

reforms.core.impl.parse_args.cljs$lang$maxFixedArity = 3;
reforms.core.impl.resolve_args = (function reforms$core$impl$resolve_args(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26582 = arguments.length;
var i__19639__auto___26583 = (0);
while(true){
if((i__19639__auto___26583 < len__19638__auto___26582)){
args__19645__auto__.push((arguments[i__19639__auto___26583]));

var G__26584 = (i__19639__auto___26583 + (1));
i__19639__auto___26583 = G__26584;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((3) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((3)),(0))):null);
return reforms.core.impl.resolve_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19646__auto__);
});

reforms.core.impl.resolve_args.cljs$core$IFn$_invoke$arity$variadic = (function (ks,ext_attrs,args,p__26579){
var vec__26580 = p__26579;
var opt_args = cljs.core.nth.call(null,vec__26580,(0),null);
var vec__26581 = reforms.core.impl.parse_args.call(null,args,(function (){var or__18580__auto__ = opt_args;
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null)], null);
}
})());
var attrs = cljs.core.nth.call(null,vec__26581,(0),null);
var rest_args = cljs.core.nthnext.call(null,vec__26581,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.merge_attrs.call(null,cljs.core.reduce.call(null,((function (vec__26581,attrs,rest_args,vec__26580,opt_args){
return (function (attrs__$1,crn_attrs){
return reforms.core.impl.merge_attrs.call(null,attrs__$1,crn_attrs,cljs.core.PersistentArrayMap.EMPTY);
});})(vec__26581,attrs,rest_args,vec__26580,opt_args))
,cljs.core.map.call(null,((function (vec__26581,attrs,rest_args,vec__26580,opt_args){
return (function (p1__26574_SHARP_){
return reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26574_SHARP_,new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null));
});})(vec__26581,attrs,rest_args,vec__26580,opt_args))
,ks)),attrs,ext_attrs),rest_args], null);
});

reforms.core.impl.resolve_args.cljs$lang$maxFixedArity = (3);

reforms.core.impl.resolve_args.cljs$lang$applyTo = (function (seq26575){
var G__26576 = cljs.core.first.call(null,seq26575);
var seq26575__$1 = cljs.core.next.call(null,seq26575);
var G__26577 = cljs.core.first.call(null,seq26575__$1);
var seq26575__$2 = cljs.core.next.call(null,seq26575__$1);
var G__26578 = cljs.core.first.call(null,seq26575__$2);
var seq26575__$3 = cljs.core.next.call(null,seq26575__$2);
return reforms.core.impl.resolve_args.cljs$core$IFn$_invoke$arity$variadic(G__26576,G__26577,G__26578,seq26575__$3);
});
reforms.core.impl.parse_options = (function reforms$core$impl$parse_options(args){
var vec__26586 = cljs.core.split_with.call(null,cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.partition_all.call(null,(2),args));
var options = cljs.core.nth.call(null,vec__26586,(0),null);
var rest_args = cljs.core.nth.call(null,vec__26586,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,cljs.core.identity,options)),cljs.core.mapcat.call(null,cljs.core.identity,(function (){var or__18580__auto__ = rest_args;
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())], null);
});
reforms.core.impl.attrs_QMARK_ = (function reforms$core$impl$attrs_QMARK_(arg){
return (cljs.core.not.call(null,reforms.binding.core.valid_QMARK_.call(null,arg))) && (cljs.core.map_QMARK_.call(null,arg));
});
/**
 * Converts an option converted to string to be used in <select> tag back to its
 * representation as in options (it's often a keyword).
 * 
 * Example:
 * 
 * (unstr-option ":foo"
 *              [:foo "foobar" :foo2 "zoobar"]) ;; => :foo
 */
reforms.core.impl.unstr_option = (function reforms$core$impl$unstr_option(s,options){
var m = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function reforms$core$impl$unstr_option_$_str__GT_orig(p__26590){
var vec__26592 = p__26590;
var k = cljs.core.nth.call(null,vec__26592,(0),null);
var _v = cljs.core.nth.call(null,vec__26592,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(k)].join(''),k], null);
}),options));
var or__18580__auto__ = m.call(null,s);
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return s;
}
});
reforms.core.impl.deprecated = (function reforms$core$impl$deprecated(msg){
if(cljs.core.truth_(console)){
return console.warn("[reforms] Warning:",msg);
} else {
return null;
}
});
reforms.core.impl._p = (function reforms$core$impl$_p(xs){
return xs;
});
reforms.core.impl.gen_dom_id = (function reforms$core$impl$gen_dom_id(var_args){
var args26593 = [];
var len__19638__auto___26597 = arguments.length;
var i__19639__auto___26598 = (0);
while(true){
if((i__19639__auto___26598 < len__19638__auto___26597)){
args26593.push((arguments[i__19639__auto___26598]));

var G__26599 = (i__19639__auto___26598 + (1));
i__19639__auto___26598 = G__26599;
continue;
} else {
}
break;
}

var G__26595 = args26593.length;
switch (G__26595) {
case 1:
return reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 0:
return reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26593.length)].join('')));

}
});

reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$1 = (function (path){
return clojure.string.join.call(null,"-",cljs.core.map.call(null,(function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$))?true:false):false)){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str(x)].join('');
}
}),path));
});

reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$2 = (function (cursor,korks){
return reforms.core.impl.gen_dom_id.call(null,cljs.core.concat.call(null,reforms.binding.core.path.call(null,cursor),korks));
});

reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$0 = (function (){
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});

reforms.core.impl.gen_dom_id.cljs$lang$maxFixedArity = 2;
reforms.core.impl.form_horizontal_QMARK_ = (function reforms$core$impl$form_horizontal_QMARK_(){
return reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null));
});
reforms.core.impl.label_column_class = (function reforms$core$impl$label_column_class(){
if(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))){
return reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"label-column-class","label-column-class",-1193482589)], null));
} else {
return null;
}
});
reforms.core.impl.input_column_class = (function reforms$core$impl$input_column_class(){
if(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))){
return reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"input-column-class","input-column-class",717499433)], null));
} else {
return null;
}
});
reforms.core.impl.input_column = (function reforms$core$impl$input_column(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26603 = arguments.length;
var i__19639__auto___26604 = (0);
while(true){
if((i__19639__auto___26604 < len__19638__auto___26603)){
args__19645__auto__.push((arguments[i__19639__auto___26604]));

var G__26605 = (i__19639__auto___26604 + (1));
i__19639__auto___26604 = G__26605;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((1) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((1)),(0))):null);
return reforms.core.impl.input_column.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19646__auto__);
});

reforms.core.impl.input_column.cljs$core$IFn$_invoke$arity$variadic = (function (key,elems){
if(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reforms.core.impl.input_column_class.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key], null)], null),elems));
} else {
return elems;
}
});

reforms.core.impl.input_column.cljs$lang$maxFixedArity = (1);

reforms.core.impl.input_column.cljs$lang$applyTo = (function (seq26601){
var G__26602 = cljs.core.first.call(null,seq26601);
var seq26601__$1 = cljs.core.next.call(null,seq26601);
return reforms.core.impl.input_column.cljs$core$IFn$_invoke$arity$variadic(G__26602,seq26601__$1);
});
reforms.core.impl.feedback_icon = (function reforms$core$impl$feedback_icon(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26608 = arguments.length;
var i__19639__auto___26609 = (0);
while(true){
if((i__19639__auto___26609 < len__19638__auto___26608)){
args__19645__auto__.push((arguments[i__19639__auto___26609]));

var G__26610 = (i__19639__auto___26609 + (1));
i__19639__auto___26609 = G__26610;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.core.impl.feedback_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.core.impl.feedback_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__26607 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback-icon","feedback-icon",1288816964)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__26607,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),attrs], null);
});

reforms.core.impl.feedback_icon.cljs$lang$maxFixedArity = (0);

reforms.core.impl.feedback_icon.cljs$lang$applyTo = (function (seq26606){
return reforms.core.impl.feedback_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26606));
});
reforms.core.impl.error_label = (function reforms$core$impl$error_label(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26614 = arguments.length;
var i__19639__auto___26615 = (0);
while(true){
if((i__19639__auto___26615 < len__19638__auto___26614)){
args__19645__auto__.push((arguments[i__19639__auto___26615]));

var G__26616 = (i__19639__auto___26615 + (1));
i__19639__auto___26615 = G__26616;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.core.impl.error_label.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.core.impl.error_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__26612 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-label","error-label",1393895243)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__26612,(0),null);
var vec__26613 = cljs.core.nth.call(null,vec__26612,(1),null);
var error = cljs.core.nth.call(null,vec__26613,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),attrs,error], null);
});

reforms.core.impl.error_label.cljs$lang$maxFixedArity = (0);

reforms.core.impl.error_label.cljs$lang$applyTo = (function (seq26611){
return reforms.core.impl.error_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26611));
});
reforms.core.impl.warning_label = (function reforms$core$impl$warning_label(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26620 = arguments.length;
var i__19639__auto___26621 = (0);
while(true){
if((i__19639__auto___26621 < len__19638__auto___26620)){
args__19645__auto__.push((arguments[i__19639__auto___26621]));

var G__26622 = (i__19639__auto___26621 + (1));
i__19639__auto___26621 = G__26622;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.core.impl.warning_label.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.core.impl.warning_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__26618 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warning-label","warning-label",-252042644)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__26618,(0),null);
var vec__26619 = cljs.core.nth.call(null,vec__26618,(1),null);
var warning = cljs.core.nth.call(null,vec__26619,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),attrs,warning], null);
});

reforms.core.impl.warning_label.cljs$lang$maxFixedArity = (0);

reforms.core.impl.warning_label.cljs$lang$applyTo = (function (seq26617){
return reforms.core.impl.warning_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26617));
});
reforms.core.impl.maybe_flatten = (function reforms$core$impl$maybe_flatten(xs){
if((cljs.core.seq.call(null,xs)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,xs)))){
return cljs.core.first.call(null,xs);
} else {
return xs;
}
});
reforms.core.impl.unlabeled_control = (function reforms$core$impl$unlabeled_control(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26626 = arguments.length;
var i__19639__auto___26627 = (0);
while(true){
if((i__19639__auto___26627 < len__19638__auto___26626)){
args__19645__auto__.push((arguments[i__19639__auto___26627]));

var G__26628 = (i__19639__auto___26627 + (1));
i__19639__auto___26627 = G__26628;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((2) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((2)),(0))):null);
return reforms.core.impl.unlabeled_control.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19646__auto__);
});

reforms.core.impl.unlabeled_control.cljs$core$IFn$_invoke$arity$variadic = (function (key,inline,xs){
return reforms.core.impl.maybe_flatten.call(null,(cljs.core.truth_(inline)?xs:cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"form-group","form-group",-267875328),key)], null)], null),cljs.core.concat.call(null,(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reforms.core.impl.label_column_class.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"label-column","label-column",350570745),key)], null)], null)], null):null),cljs.core.apply.call(null,reforms.core.impl.input_column,reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"input-column","input-column",-1380392064),key),xs))))));
});

reforms.core.impl.unlabeled_control.cljs$lang$maxFixedArity = (2);

reforms.core.impl.unlabeled_control.cljs$lang$applyTo = (function (seq26623){
var G__26624 = cljs.core.first.call(null,seq26623);
var seq26623__$1 = cljs.core.next.call(null,seq26623);
var G__26625 = cljs.core.first.call(null,seq26623__$1);
var seq26623__$2 = cljs.core.next.call(null,seq26623__$1);
return reforms.core.impl.unlabeled_control.cljs$core$IFn$_invoke$arity$variadic(G__26624,G__26625,seq26623__$2);
});
reforms.core.impl.labeled_control = (function reforms$core$impl$labeled_control(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26635 = arguments.length;
var i__19639__auto___26636 = (0);
while(true){
if((i__19639__auto___26636 < len__19638__auto___26635)){
args__19645__auto__.push((arguments[i__19639__auto___26636]));

var G__26637 = (i__19639__auto___26636 + (1));
i__19639__auto___26636 = G__26637;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((5) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((5)),(0))):null);
return reforms.core.impl.labeled_control.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__19646__auto__);
});

reforms.core.impl.labeled_control.cljs$core$IFn$_invoke$arity$variadic = (function (key,inline,form_group_class,label,dom_id,xs){
return reforms.core.impl.maybe_flatten.call(null,(cljs.core.truth_(inline)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,xs),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"for","for",-1323786319),dom_id,new cljs.core.Keyword(null,"class","class",-2030961996),"control-label",new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"control-label","control-label",1226436372),key)], null),label], null)):cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),form_group_class,new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"form-group","form-group",-267875328),key)], null)], null),cljs.core.concat.call(null,(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"for","for",-1323786319),dom_id,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("control-label "),cljs.core.str(reforms.core.impl.label_column_class.call(null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"control-label","control-label",1226436372))], null),label], null)], null):(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("control-label "),cljs.core.str(reforms.core.impl.label_column_class.call(null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"control-label","control-label",1226436372))], null)], null)], null):null
)),cljs.core.apply.call(null,reforms.core.impl.input_column,reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"input-column","input-column",-1380392064)),xs))))));
});

reforms.core.impl.labeled_control.cljs$lang$maxFixedArity = (5);

reforms.core.impl.labeled_control.cljs$lang$applyTo = (function (seq26629){
var G__26630 = cljs.core.first.call(null,seq26629);
var seq26629__$1 = cljs.core.next.call(null,seq26629);
var G__26631 = cljs.core.first.call(null,seq26629__$1);
var seq26629__$2 = cljs.core.next.call(null,seq26629__$1);
var G__26632 = cljs.core.first.call(null,seq26629__$2);
var seq26629__$3 = cljs.core.next.call(null,seq26629__$2);
var G__26633 = cljs.core.first.call(null,seq26629__$3);
var seq26629__$4 = cljs.core.next.call(null,seq26629__$3);
var G__26634 = cljs.core.first.call(null,seq26629__$4);
var seq26629__$5 = cljs.core.next.call(null,seq26629__$4);
return reforms.core.impl.labeled_control.cljs$core$IFn$_invoke$arity$variadic(G__26630,G__26631,G__26632,G__26633,G__26634,seq26629__$5);
});
reforms.core.impl.input_STAR_ = (function reforms$core$impl$input_STAR_(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26648 = arguments.length;
var i__19639__auto___26649 = (0);
while(true){
if((i__19639__auto___26649 < len__19638__auto___26648)){
args__19645__auto__.push((arguments[i__19639__auto___26649]));

var G__26650 = (i__19639__auto___26649 + (1));
i__19639__auto___26649 = G__26650;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((6) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((6)),(0))):null);
return reforms.core.impl.input_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__19646__auto__);
});

reforms.core.impl.input_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attrs,label,cursor,korks,p__26645,inner){
var map__26646 = p__26645;
var map__26646__$1 = ((((!((map__26646 == null)))?((((map__26646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26646):map__26646);
var placeholder = cljs.core.get.call(null,map__26646__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var valid_QMARK_ = cljs.core.get.call(null,map__26646__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var validation_error_fn = cljs.core.get.call(null,map__26646__$1,new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244));
var in_progress = cljs.core.get.call(null,map__26646__$1,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));
var warn_fn = cljs.core.get.call(null,map__26646__$1,new cljs.core.Keyword(null,"warn-fn","warn-fn",1867170594));
var help = cljs.core.get.call(null,map__26646__$1,new cljs.core.Keyword(null,"help","help",-439233446));
var inline = cljs.core.get.call(null,map__26646__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var large = cljs.core.get.call(null,map__26646__$1,new cljs.core.Keyword(null,"large","large",-196820544));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var valid = (function (){var or__18580__auto__ = (valid_QMARK_ == null);
if(or__18580__auto__){
return or__18580__auto__;
} else {
return valid_QMARK_.call(null,korks);
}
})();
var warning = (function (){var and__18568__auto__ = warn_fn;
if(cljs.core.truth_(and__18568__auto__)){
return warn_fn.call(null,reforms.binding.core.get_in.call(null,cursor,korks));
} else {
return and__18568__auto__;
}
})();
var base_key = reforms.core.react_keys.gen_key.call(null,cursor,korks);
return cljs.core.apply.call(null,reforms.core.impl.labeled_control,base_key,inline,clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__18580__auto__ = warning;
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return in_progress;
}
})())?"has-feedback":null),(cljs.core.truth_(valid)?null:"has-error"),(cljs.core.truth_(large)?"form-group-lg":null)], null)),label,dom_id,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"input","input",556931961),base_key)], null),attrs,(cljs.core.truth_(placeholder)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null):null))], null),inner)], null),(cljs.core.truth_(in_progress)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.spinner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control-feedback",new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"spinner","spinner",-646071217),base_key)], null))], null):(cljs.core.truth_(warning)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.feedback_icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon-warning","icon-warning",650510185)], null))),cljs.core.str(" form-control-feedback")].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"feedback-icon","feedback-icon",1288816964),base_key)], null))], null):null
)),(cljs.core.truth_(warning)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.warning_label.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"warning-label","warning-label",-252042644),base_key)], null),warning)], null):null),(function (){var temp__4657__auto__ = (function (){var and__18568__auto__ = validation_error_fn;
if(cljs.core.truth_(and__18568__auto__)){
return validation_error_fn.call(null,korks);
} else {
return and__18568__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var validation_error = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.error_label.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"erorr-label","erorr-label",-2006743391),base_key)], null),validation_error)], null);
} else {
return null;
}
})(),(cljs.core.truth_(help)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-block","p.help-block",-933389757),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"help-block","help-block",1988985632),base_key)], null),help], null)], null):null)));
});

reforms.core.impl.input_STAR_.cljs$lang$maxFixedArity = (6);

reforms.core.impl.input_STAR_.cljs$lang$applyTo = (function (seq26638){
var G__26639 = cljs.core.first.call(null,seq26638);
var seq26638__$1 = cljs.core.next.call(null,seq26638);
var G__26640 = cljs.core.first.call(null,seq26638__$1);
var seq26638__$2 = cljs.core.next.call(null,seq26638__$1);
var G__26641 = cljs.core.first.call(null,seq26638__$2);
var seq26638__$3 = cljs.core.next.call(null,seq26638__$2);
var G__26642 = cljs.core.first.call(null,seq26638__$3);
var seq26638__$4 = cljs.core.next.call(null,seq26638__$3);
var G__26643 = cljs.core.first.call(null,seq26638__$4);
var seq26638__$5 = cljs.core.next.call(null,seq26638__$4);
var G__26644 = cljs.core.first.call(null,seq26638__$5);
var seq26638__$6 = cljs.core.next.call(null,seq26638__$5);
return reforms.core.impl.input_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26639,G__26640,G__26641,G__26642,G__26643,G__26644,seq26638__$6);
});
reforms.core.impl.html5_input_STAR_ = (function reforms$core$impl$html5_input_STAR_(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26659 = arguments.length;
var i__19639__auto___26660 = (0);
while(true){
if((i__19639__auto___26660 < len__19638__auto___26659)){
args__19645__auto__.push((arguments[i__19639__auto___26660]));

var G__26661 = (i__19639__auto___26660 + (1));
i__19639__auto___26660 = G__26661;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((6) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((6)),(0))):null);
return reforms.core.impl.html5_input_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__19646__auto__);
});

reforms.core.impl.html5_input_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,label,placeholder,cursor,korks,type,opts){
if(cljs.core.truth_(placeholder)){
reforms.core.impl.deprecated.call(null,"Placeholders as positional arguments will be removed in the next major release; use :placeholder option instead.");
} else {
}

var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var input_attrs = reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null),attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (dom_id){
return (function (p1__26651_SHARP_){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,p1__26651_SHARP_.target.value);
});})(dom_id))
,new cljs.core.Keyword(null,"value","value",305978217),reforms.binding.core.get_in.call(null,cursor,korks)], null));
return reforms.core.impl.input_STAR_.call(null,new cljs.core.Keyword(null,"input","input",556931961),input_attrs,label,cursor,korks,opts);
});

reforms.core.impl.html5_input_STAR_.cljs$lang$maxFixedArity = (6);

reforms.core.impl.html5_input_STAR_.cljs$lang$applyTo = (function (seq26652){
var G__26653 = cljs.core.first.call(null,seq26652);
var seq26652__$1 = cljs.core.next.call(null,seq26652);
var G__26654 = cljs.core.first.call(null,seq26652__$1);
var seq26652__$2 = cljs.core.next.call(null,seq26652__$1);
var G__26655 = cljs.core.first.call(null,seq26652__$2);
var seq26652__$3 = cljs.core.next.call(null,seq26652__$2);
var G__26656 = cljs.core.first.call(null,seq26652__$3);
var seq26652__$4 = cljs.core.next.call(null,seq26652__$3);
var G__26657 = cljs.core.first.call(null,seq26652__$4);
var seq26652__$5 = cljs.core.next.call(null,seq26652__$4);
var G__26658 = cljs.core.first.call(null,seq26652__$5);
var seq26652__$6 = cljs.core.next.call(null,seq26652__$5);
return reforms.core.impl.html5_input_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26653,G__26654,G__26655,G__26656,G__26657,G__26658,seq26652__$6);
});
/**
 * A spinner.
 * 
 * Arguments:
 * 
 * [attrs]
 * 
 * attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 */
reforms.core.impl.spinner = (function reforms$core$impl$spinner(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26664 = arguments.length;
var i__19639__auto___26665 = (0);
while(true){
if((i__19639__auto___26665 < len__19638__auto___26664)){
args__19645__auto__.push((arguments[i__19639__auto___26665]));

var G__26666 = (i__19639__auto___26665 + (1));
i__19639__auto___26665 = G__26666;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.core.impl.spinner.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.core.impl.spinner.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__26663 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spinner","spinner",-646071217)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__26663,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),attrs], null);
});

reforms.core.impl.spinner.cljs$lang$maxFixedArity = (0);

reforms.core.impl.spinner.cljs$lang$applyTo = (function (seq26662){
return reforms.core.impl.spinner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26662));
});

//# sourceMappingURL=impl.js.map?rel=1531355031599