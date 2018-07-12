// Compiled by ClojureScript 1.7.107 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__25415_25419 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__25416_25420 = null;
var count__25417_25421 = (0);
var i__25418_25422 = (0);
while(true){
if((i__25418_25422 < count__25417_25421)){
var k_25423 = cljs.core._nth.call(null,chunk__25416_25420,i__25418_25422);
var v_25424 = (b[k_25423]);
(a[k_25423] = v_25424);

var G__25425 = seq__25415_25419;
var G__25426 = chunk__25416_25420;
var G__25427 = count__25417_25421;
var G__25428 = (i__25418_25422 + (1));
seq__25415_25419 = G__25425;
chunk__25416_25420 = G__25426;
count__25417_25421 = G__25427;
i__25418_25422 = G__25428;
continue;
} else {
var temp__4657__auto___25429 = cljs.core.seq.call(null,seq__25415_25419);
if(temp__4657__auto___25429){
var seq__25415_25430__$1 = temp__4657__auto___25429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25415_25430__$1)){
var c__19383__auto___25431 = cljs.core.chunk_first.call(null,seq__25415_25430__$1);
var G__25432 = cljs.core.chunk_rest.call(null,seq__25415_25430__$1);
var G__25433 = c__19383__auto___25431;
var G__25434 = cljs.core.count.call(null,c__19383__auto___25431);
var G__25435 = (0);
seq__25415_25419 = G__25432;
chunk__25416_25420 = G__25433;
count__25417_25421 = G__25434;
i__25418_25422 = G__25435;
continue;
} else {
var k_25436 = cljs.core.first.call(null,seq__25415_25430__$1);
var v_25437 = (b[k_25436]);
(a[k_25436] = v_25437);

var G__25438 = cljs.core.next.call(null,seq__25415_25430__$1);
var G__25439 = null;
var G__25440 = (0);
var G__25441 = (0);
seq__25415_25419 = G__25438;
chunk__25416_25420 = G__25439;
count__25417_25421 = G__25440;
i__25418_25422 = G__25441;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args25442 = [];
var len__19638__auto___25445 = arguments.length;
var i__19639__auto___25446 = (0);
while(true){
if((i__19639__auto___25446 < len__19638__auto___25445)){
args25442.push((arguments[i__19639__auto___25446]));

var G__25447 = (i__19639__auto___25446 + (1));
i__19639__auto___25446 = G__25447;
continue;
} else {
}
break;
}

var G__25444 = args25442.length;
switch (G__25444) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25442.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__25449 = (i + (2));
var G__25450 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__25449;
ret = G__25450;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25451_25455 = cljs.core.seq.call(null,v);
var chunk__25452_25456 = null;
var count__25453_25457 = (0);
var i__25454_25458 = (0);
while(true){
if((i__25454_25458 < count__25453_25457)){
var x_25459 = cljs.core._nth.call(null,chunk__25452_25456,i__25454_25458);
ret.push(x_25459);

var G__25460 = seq__25451_25455;
var G__25461 = chunk__25452_25456;
var G__25462 = count__25453_25457;
var G__25463 = (i__25454_25458 + (1));
seq__25451_25455 = G__25460;
chunk__25452_25456 = G__25461;
count__25453_25457 = G__25462;
i__25454_25458 = G__25463;
continue;
} else {
var temp__4657__auto___25464 = cljs.core.seq.call(null,seq__25451_25455);
if(temp__4657__auto___25464){
var seq__25451_25465__$1 = temp__4657__auto___25464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25451_25465__$1)){
var c__19383__auto___25466 = cljs.core.chunk_first.call(null,seq__25451_25465__$1);
var G__25467 = cljs.core.chunk_rest.call(null,seq__25451_25465__$1);
var G__25468 = c__19383__auto___25466;
var G__25469 = cljs.core.count.call(null,c__19383__auto___25466);
var G__25470 = (0);
seq__25451_25455 = G__25467;
chunk__25452_25456 = G__25468;
count__25453_25457 = G__25469;
i__25454_25458 = G__25470;
continue;
} else {
var x_25471 = cljs.core.first.call(null,seq__25451_25465__$1);
ret.push(x_25471);

var G__25472 = cljs.core.next.call(null,seq__25451_25465__$1);
var G__25473 = null;
var G__25474 = (0);
var G__25475 = (0);
seq__25451_25455 = G__25472;
chunk__25452_25456 = G__25473;
count__25453_25457 = G__25474;
i__25454_25458 = G__25475;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25476_25480 = cljs.core.seq.call(null,v);
var chunk__25477_25481 = null;
var count__25478_25482 = (0);
var i__25479_25483 = (0);
while(true){
if((i__25479_25483 < count__25478_25482)){
var x_25484 = cljs.core._nth.call(null,chunk__25477_25481,i__25479_25483);
ret.push(x_25484);

var G__25485 = seq__25476_25480;
var G__25486 = chunk__25477_25481;
var G__25487 = count__25478_25482;
var G__25488 = (i__25479_25483 + (1));
seq__25476_25480 = G__25485;
chunk__25477_25481 = G__25486;
count__25478_25482 = G__25487;
i__25479_25483 = G__25488;
continue;
} else {
var temp__4657__auto___25489 = cljs.core.seq.call(null,seq__25476_25480);
if(temp__4657__auto___25489){
var seq__25476_25490__$1 = temp__4657__auto___25489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25476_25490__$1)){
var c__19383__auto___25491 = cljs.core.chunk_first.call(null,seq__25476_25490__$1);
var G__25492 = cljs.core.chunk_rest.call(null,seq__25476_25490__$1);
var G__25493 = c__19383__auto___25491;
var G__25494 = cljs.core.count.call(null,c__19383__auto___25491);
var G__25495 = (0);
seq__25476_25480 = G__25492;
chunk__25477_25481 = G__25493;
count__25478_25482 = G__25494;
i__25479_25483 = G__25495;
continue;
} else {
var x_25496 = cljs.core.first.call(null,seq__25476_25490__$1);
ret.push(x_25496);

var G__25497 = cljs.core.next.call(null,seq__25476_25490__$1);
var G__25498 = null;
var G__25499 = (0);
var G__25500 = (0);
seq__25476_25480 = G__25497;
chunk__25477_25481 = G__25498;
count__25478_25482 = G__25499;
i__25479_25483 = G__25500;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25501_25505 = cljs.core.seq.call(null,v);
var chunk__25502_25506 = null;
var count__25503_25507 = (0);
var i__25504_25508 = (0);
while(true){
if((i__25504_25508 < count__25503_25507)){
var x_25509 = cljs.core._nth.call(null,chunk__25502_25506,i__25504_25508);
ret.push(x_25509);

var G__25510 = seq__25501_25505;
var G__25511 = chunk__25502_25506;
var G__25512 = count__25503_25507;
var G__25513 = (i__25504_25508 + (1));
seq__25501_25505 = G__25510;
chunk__25502_25506 = G__25511;
count__25503_25507 = G__25512;
i__25504_25508 = G__25513;
continue;
} else {
var temp__4657__auto___25514 = cljs.core.seq.call(null,seq__25501_25505);
if(temp__4657__auto___25514){
var seq__25501_25515__$1 = temp__4657__auto___25514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25501_25515__$1)){
var c__19383__auto___25516 = cljs.core.chunk_first.call(null,seq__25501_25515__$1);
var G__25517 = cljs.core.chunk_rest.call(null,seq__25501_25515__$1);
var G__25518 = c__19383__auto___25516;
var G__25519 = cljs.core.count.call(null,c__19383__auto___25516);
var G__25520 = (0);
seq__25501_25505 = G__25517;
chunk__25502_25506 = G__25518;
count__25503_25507 = G__25519;
i__25504_25508 = G__25520;
continue;
} else {
var x_25521 = cljs.core.first.call(null,seq__25501_25515__$1);
ret.push(x_25521);

var G__25522 = cljs.core.next.call(null,seq__25501_25515__$1);
var G__25523 = null;
var G__25524 = (0);
var G__25525 = (0);
seq__25501_25505 = G__25522;
chunk__25502_25506 = G__25523;
count__25503_25507 = G__25524;
i__25504_25508 = G__25525;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args25526 = [];
var len__19638__auto___25537 = arguments.length;
var i__19639__auto___25538 = (0);
while(true){
if((i__19639__auto___25538 < len__19638__auto___25537)){
args25526.push((arguments[i__19639__auto___25538]));

var G__25539 = (i__19639__auto___25538 + (1));
i__19639__auto___25538 = G__25539;
continue;
} else {
}
break;
}

var G__25528 = args25526.length;
switch (G__25528) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25526.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__25529 = obj;
G__25529.push(kfn.call(null,k),vfn.call(null,v));

return G__25529;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x25530 = cljs.core.clone.call(null,handlers);
x25530.forEach = ((function (x25530,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__25531 = cljs.core.seq.call(null,coll);
var chunk__25532 = null;
var count__25533 = (0);
var i__25534 = (0);
while(true){
if((i__25534 < count__25533)){
var vec__25535 = cljs.core._nth.call(null,chunk__25532,i__25534);
var k = cljs.core.nth.call(null,vec__25535,(0),null);
var v = cljs.core.nth.call(null,vec__25535,(1),null);
f.call(null,v,k);

var G__25541 = seq__25531;
var G__25542 = chunk__25532;
var G__25543 = count__25533;
var G__25544 = (i__25534 + (1));
seq__25531 = G__25541;
chunk__25532 = G__25542;
count__25533 = G__25543;
i__25534 = G__25544;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25531);
if(temp__4657__auto__){
var seq__25531__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25531__$1)){
var c__19383__auto__ = cljs.core.chunk_first.call(null,seq__25531__$1);
var G__25545 = cljs.core.chunk_rest.call(null,seq__25531__$1);
var G__25546 = c__19383__auto__;
var G__25547 = cljs.core.count.call(null,c__19383__auto__);
var G__25548 = (0);
seq__25531 = G__25545;
chunk__25532 = G__25546;
count__25533 = G__25547;
i__25534 = G__25548;
continue;
} else {
var vec__25536 = cljs.core.first.call(null,seq__25531__$1);
var k = cljs.core.nth.call(null,vec__25536,(0),null);
var v = cljs.core.nth.call(null,vec__25536,(1),null);
f.call(null,v,k);

var G__25549 = cljs.core.next.call(null,seq__25531__$1);
var G__25550 = null;
var G__25551 = (0);
var G__25552 = (0);
seq__25531 = G__25549;
chunk__25532 = G__25550;
count__25533 = G__25551;
i__25534 = G__25552;
continue;
}
} else {
return null;
}
}
break;
}
});})(x25530,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x25530;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args25553 = [];
var len__19638__auto___25559 = arguments.length;
var i__19639__auto___25560 = (0);
while(true){
if((i__19639__auto___25560 < len__19638__auto___25559)){
args25553.push((arguments[i__19639__auto___25560]));

var G__25561 = (i__19639__auto___25560 + (1));
i__19639__auto___25560 = G__25561;
continue;
} else {
}
break;
}

var G__25555 = args25553.length;
switch (G__25555) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25553.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit25556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit25556 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta25557){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta25557 = meta25557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit25556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25558,meta25557__$1){
var self__ = this;
var _25558__$1 = this;
return (new cognitect.transit.t_cognitect$transit25556(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta25557__$1));
});

cognitect.transit.t_cognitect$transit25556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25558){
var self__ = this;
var _25558__$1 = this;
return self__.meta25557;
});

cognitect.transit.t_cognitect$transit25556.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit25556.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit25556.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit25556.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit25556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta25557","meta25557",1782926616,null)], null);
});

cognitect.transit.t_cognitect$transit25556.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit25556.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit25556";

cognitect.transit.t_cognitect$transit25556.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cognitect.transit/t_cognitect$transit25556");
});

cognitect.transit.__GT_t_cognitect$transit25556 = (function cognitect$transit$__GT_t_cognitect$transit25556(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25557){
return (new cognitect.transit.t_cognitect$transit25556(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25557));
});

}

return (new cognitect.transit.t_cognitect$transit25556(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__18580__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1531355029346