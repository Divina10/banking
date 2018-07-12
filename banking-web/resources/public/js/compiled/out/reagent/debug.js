// Compiled by ClojureScript 1.7.107 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__25713__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25714__i = 0, G__25714__a = new Array(arguments.length -  0);
while (G__25714__i < G__25714__a.length) {G__25714__a[G__25714__i] = arguments[G__25714__i + 0]; ++G__25714__i;}
  args = new cljs.core.IndexedSeq(G__25714__a,0);
} 
return G__25713__delegate.call(this,args);};
G__25713.cljs$lang$maxFixedArity = 0;
G__25713.cljs$lang$applyTo = (function (arglist__25715){
var args = cljs.core.seq(arglist__25715);
return G__25713__delegate(args);
});
G__25713.cljs$core$IFn$_invoke$arity$variadic = G__25713__delegate;
return G__25713;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25716__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25717__i = 0, G__25717__a = new Array(arguments.length -  0);
while (G__25717__i < G__25717__a.length) {G__25717__a[G__25717__i] = arguments[G__25717__i + 0]; ++G__25717__i;}
  args = new cljs.core.IndexedSeq(G__25717__a,0);
} 
return G__25716__delegate.call(this,args);};
G__25716.cljs$lang$maxFixedArity = 0;
G__25716.cljs$lang$applyTo = (function (arglist__25718){
var args = cljs.core.seq(arglist__25718);
return G__25716__delegate(args);
});
G__25716.cljs$core$IFn$_invoke$arity$variadic = G__25716__delegate;
return G__25716;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1531355029712