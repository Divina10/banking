// Compiled by ClojureScript 1.7.107 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async26704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26704 = (function (fn_handler,f,meta26705){
this.fn_handler = fn_handler;
this.f = f;
this.meta26705 = meta26705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26706,meta26705__$1){
var self__ = this;
var _26706__$1 = this;
return (new cljs.core.async.t_cljs$core$async26704(self__.fn_handler,self__.f,meta26705__$1));
});

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26706){
var self__ = this;
var _26706__$1 = this;
return self__.meta26705;
});

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26705","meta26705",1613058670,null)], null);
});

cljs.core.async.t_cljs$core$async26704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26704";

cljs.core.async.t_cljs$core$async26704.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cljs.core.async/t_cljs$core$async26704");
});

cljs.core.async.__GT_t_cljs$core$async26704 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async26704(fn_handler__$1,f__$1,meta26705){
return (new cljs.core.async.t_cljs$core$async26704(fn_handler__$1,f__$1,meta26705));
});

}

return (new cljs.core.async.t_cljs$core$async26704(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args26709 = [];
var len__19638__auto___26712 = arguments.length;
var i__19639__auto___26713 = (0);
while(true){
if((i__19639__auto___26713 < len__19638__auto___26712)){
args26709.push((arguments[i__19639__auto___26713]));

var G__26714 = (i__19639__auto___26713 + (1));
i__19639__auto___26713 = G__26714;
continue;
} else {
}
break;
}

var G__26711 = args26709.length;
switch (G__26711) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26709.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args26716 = [];
var len__19638__auto___26719 = arguments.length;
var i__19639__auto___26720 = (0);
while(true){
if((i__19639__auto___26720 < len__19638__auto___26719)){
args26716.push((arguments[i__19639__auto___26720]));

var G__26721 = (i__19639__auto___26720 + (1));
i__19639__auto___26720 = G__26721;
continue;
} else {
}
break;
}

var G__26718 = args26716.length;
switch (G__26718) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26716.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26723 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26723);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26723,ret){
return (function (){
return fn1.call(null,val_26723);
});})(val_26723,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26724 = [];
var len__19638__auto___26727 = arguments.length;
var i__19639__auto___26728 = (0);
while(true){
if((i__19639__auto___26728 < len__19638__auto___26727)){
args26724.push((arguments[i__19639__auto___26728]));

var G__26729 = (i__19639__auto___26728 + (1));
i__19639__auto___26728 = G__26729;
continue;
} else {
}
break;
}

var G__26726 = args26724.length;
switch (G__26726) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26724.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19483__auto___26731 = n;
var x_26732 = (0);
while(true){
if((x_26732 < n__19483__auto___26731)){
(a[x_26732] = (0));

var G__26733 = (x_26732 + (1));
x_26732 = G__26733;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26734 = (i + (1));
i = G__26734;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26738 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26738 = (function (alt_flag,flag,meta26739){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26739 = meta26739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26740,meta26739__$1){
var self__ = this;
var _26740__$1 = this;
return (new cljs.core.async.t_cljs$core$async26738(self__.alt_flag,self__.flag,meta26739__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26740){
var self__ = this;
var _26740__$1 = this;
return self__.meta26739;
});})(flag))
;

cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26738.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26739","meta26739",-126093836,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26738";

cljs.core.async.t_cljs$core$async26738.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cljs.core.async/t_cljs$core$async26738");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26738 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26738(alt_flag__$1,flag__$1,meta26739){
return (new cljs.core.async.t_cljs$core$async26738(alt_flag__$1,flag__$1,meta26739));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26738(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26744 = (function (alt_handler,flag,cb,meta26745){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26745 = meta26745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26746,meta26745__$1){
var self__ = this;
var _26746__$1 = this;
return (new cljs.core.async.t_cljs$core$async26744(self__.alt_handler,self__.flag,self__.cb,meta26745__$1));
});

cljs.core.async.t_cljs$core$async26744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26746){
var self__ = this;
var _26746__$1 = this;
return self__.meta26745;
});

cljs.core.async.t_cljs$core$async26744.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26745","meta26745",1090805293,null)], null);
});

cljs.core.async.t_cljs$core$async26744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26744";

cljs.core.async.t_cljs$core$async26744.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cljs.core.async/t_cljs$core$async26744");
});

cljs.core.async.__GT_t_cljs$core$async26744 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26744(alt_handler__$1,flag__$1,cb__$1,meta26745){
return (new cljs.core.async.t_cljs$core$async26744(alt_handler__$1,flag__$1,cb__$1,meta26745));
});

}

return (new cljs.core.async.t_cljs$core$async26744(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26747_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26747_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26748_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26748_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18580__auto__ = wport;
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26749 = (i + (1));
i = G__26749;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18580__auto__ = ret;
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18568__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18568__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18568__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26755 = arguments.length;
var i__19639__auto___26756 = (0);
while(true){
if((i__19639__auto___26756 < len__19638__auto___26755)){
args__19645__auto__.push((arguments[i__19639__auto___26756]));

var G__26757 = (i__19639__auto___26756 + (1));
i__19639__auto___26756 = G__26757;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((1) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19646__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26752){
var map__26753 = p__26752;
var map__26753__$1 = ((((!((map__26753 == null)))?((((map__26753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26753):map__26753);
var opts = map__26753__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26750){
var G__26751 = cljs.core.first.call(null,seq26750);
var seq26750__$1 = cljs.core.next.call(null,seq26750);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26751,seq26750__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26758 = [];
var len__19638__auto___26808 = arguments.length;
var i__19639__auto___26809 = (0);
while(true){
if((i__19639__auto___26809 < len__19638__auto___26808)){
args26758.push((arguments[i__19639__auto___26809]));

var G__26810 = (i__19639__auto___26809 + (1));
i__19639__auto___26809 = G__26810;
continue;
} else {
}
break;
}

var G__26760 = args26758.length;
switch (G__26760) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26758.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22838__auto___26812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___26812){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___26812){
return (function (state_26784){
var state_val_26785 = (state_26784[(1)]);
if((state_val_26785 === (7))){
var inst_26780 = (state_26784[(2)]);
var state_26784__$1 = state_26784;
var statearr_26786_26813 = state_26784__$1;
(statearr_26786_26813[(2)] = inst_26780);

(statearr_26786_26813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (1))){
var state_26784__$1 = state_26784;
var statearr_26787_26814 = state_26784__$1;
(statearr_26787_26814[(2)] = null);

(statearr_26787_26814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (4))){
var inst_26763 = (state_26784[(7)]);
var inst_26763__$1 = (state_26784[(2)]);
var inst_26764 = (inst_26763__$1 == null);
var state_26784__$1 = (function (){var statearr_26788 = state_26784;
(statearr_26788[(7)] = inst_26763__$1);

return statearr_26788;
})();
if(cljs.core.truth_(inst_26764)){
var statearr_26789_26815 = state_26784__$1;
(statearr_26789_26815[(1)] = (5));

} else {
var statearr_26790_26816 = state_26784__$1;
(statearr_26790_26816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (13))){
var state_26784__$1 = state_26784;
var statearr_26791_26817 = state_26784__$1;
(statearr_26791_26817[(2)] = null);

(statearr_26791_26817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (6))){
var inst_26763 = (state_26784[(7)]);
var state_26784__$1 = state_26784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26784__$1,(11),to,inst_26763);
} else {
if((state_val_26785 === (3))){
var inst_26782 = (state_26784[(2)]);
var state_26784__$1 = state_26784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26784__$1,inst_26782);
} else {
if((state_val_26785 === (12))){
var state_26784__$1 = state_26784;
var statearr_26792_26818 = state_26784__$1;
(statearr_26792_26818[(2)] = null);

(statearr_26792_26818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (2))){
var state_26784__$1 = state_26784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26784__$1,(4),from);
} else {
if((state_val_26785 === (11))){
var inst_26773 = (state_26784[(2)]);
var state_26784__$1 = state_26784;
if(cljs.core.truth_(inst_26773)){
var statearr_26793_26819 = state_26784__$1;
(statearr_26793_26819[(1)] = (12));

} else {
var statearr_26794_26820 = state_26784__$1;
(statearr_26794_26820[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (9))){
var state_26784__$1 = state_26784;
var statearr_26795_26821 = state_26784__$1;
(statearr_26795_26821[(2)] = null);

(statearr_26795_26821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (5))){
var state_26784__$1 = state_26784;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26796_26822 = state_26784__$1;
(statearr_26796_26822[(1)] = (8));

} else {
var statearr_26797_26823 = state_26784__$1;
(statearr_26797_26823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (14))){
var inst_26778 = (state_26784[(2)]);
var state_26784__$1 = state_26784;
var statearr_26798_26824 = state_26784__$1;
(statearr_26798_26824[(2)] = inst_26778);

(statearr_26798_26824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (10))){
var inst_26770 = (state_26784[(2)]);
var state_26784__$1 = state_26784;
var statearr_26799_26825 = state_26784__$1;
(statearr_26799_26825[(2)] = inst_26770);

(statearr_26799_26825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (8))){
var inst_26767 = cljs.core.async.close_BANG_.call(null,to);
var state_26784__$1 = state_26784;
var statearr_26800_26826 = state_26784__$1;
(statearr_26800_26826[(2)] = inst_26767);

(statearr_26800_26826[(1)] = (10));


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
});})(c__22838__auto___26812))
;
return ((function (switch__22773__auto__,c__22838__auto___26812){
return (function() {
var cljs$core$async$state_machine__22774__auto__ = null;
var cljs$core$async$state_machine__22774__auto____0 = (function (){
var statearr_26804 = [null,null,null,null,null,null,null,null];
(statearr_26804[(0)] = cljs$core$async$state_machine__22774__auto__);

(statearr_26804[(1)] = (1));

return statearr_26804;
});
var cljs$core$async$state_machine__22774__auto____1 = (function (state_26784){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_26784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e26805){if((e26805 instanceof Object)){
var ex__22777__auto__ = e26805;
var statearr_26806_26827 = state_26784;
(statearr_26806_26827[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26828 = state_26784;
state_26784 = G__26828;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$state_machine__22774__auto__ = function(state_26784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22774__auto____1.call(this,state_26784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22774__auto____0;
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22774__auto____1;
return cljs$core$async$state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___26812))
})();
var state__22840__auto__ = (function (){var statearr_26807 = f__22839__auto__.call(null);
(statearr_26807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___26812);

return statearr_26807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___26812))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27012){
var vec__27013 = p__27012;
var v = cljs.core.nth.call(null,vec__27013,(0),null);
var p = cljs.core.nth.call(null,vec__27013,(1),null);
var job = vec__27013;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22838__auto___27195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___27195,res,vec__27013,v,p,job,jobs,results){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___27195,res,vec__27013,v,p,job,jobs,results){
return (function (state_27018){
var state_val_27019 = (state_27018[(1)]);
if((state_val_27019 === (1))){
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27018__$1,(2),res,v);
} else {
if((state_val_27019 === (2))){
var inst_27015 = (state_27018[(2)]);
var inst_27016 = cljs.core.async.close_BANG_.call(null,res);
var state_27018__$1 = (function (){var statearr_27020 = state_27018;
(statearr_27020[(7)] = inst_27015);

return statearr_27020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27018__$1,inst_27016);
} else {
return null;
}
}
});})(c__22838__auto___27195,res,vec__27013,v,p,job,jobs,results))
;
return ((function (switch__22773__auto__,c__22838__auto___27195,res,vec__27013,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0 = (function (){
var statearr_27024 = [null,null,null,null,null,null,null,null];
(statearr_27024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__);

(statearr_27024[(1)] = (1));

return statearr_27024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1 = (function (state_27018){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_27018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e27025){if((e27025 instanceof Object)){
var ex__22777__auto__ = e27025;
var statearr_27026_27196 = state_27018;
(statearr_27026_27196[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27197 = state_27018;
state_27018 = G__27197;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__ = function(state_27018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1.call(this,state_27018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___27195,res,vec__27013,v,p,job,jobs,results))
})();
var state__22840__auto__ = (function (){var statearr_27027 = f__22839__auto__.call(null);
(statearr_27027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___27195);

return statearr_27027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___27195,res,vec__27013,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27028){
var vec__27029 = p__27028;
var v = cljs.core.nth.call(null,vec__27029,(0),null);
var p = cljs.core.nth.call(null,vec__27029,(1),null);
var job = vec__27029;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19483__auto___27198 = n;
var __27199 = (0);
while(true){
if((__27199 < n__19483__auto___27198)){
var G__27030_27200 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27030_27200) {
case "compute":
var c__22838__auto___27202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27199,c__22838__auto___27202,G__27030_27200,n__19483__auto___27198,jobs,results,process,async){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (__27199,c__22838__auto___27202,G__27030_27200,n__19483__auto___27198,jobs,results,process,async){
return (function (state_27043){
var state_val_27044 = (state_27043[(1)]);
if((state_val_27044 === (1))){
var state_27043__$1 = state_27043;
var statearr_27045_27203 = state_27043__$1;
(statearr_27045_27203[(2)] = null);

(statearr_27045_27203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (2))){
var state_27043__$1 = state_27043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27043__$1,(4),jobs);
} else {
if((state_val_27044 === (3))){
var inst_27041 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27043__$1,inst_27041);
} else {
if((state_val_27044 === (4))){
var inst_27033 = (state_27043[(2)]);
var inst_27034 = process.call(null,inst_27033);
var state_27043__$1 = state_27043;
if(cljs.core.truth_(inst_27034)){
var statearr_27046_27204 = state_27043__$1;
(statearr_27046_27204[(1)] = (5));

} else {
var statearr_27047_27205 = state_27043__$1;
(statearr_27047_27205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (5))){
var state_27043__$1 = state_27043;
var statearr_27048_27206 = state_27043__$1;
(statearr_27048_27206[(2)] = null);

(statearr_27048_27206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (6))){
var state_27043__$1 = state_27043;
var statearr_27049_27207 = state_27043__$1;
(statearr_27049_27207[(2)] = null);

(statearr_27049_27207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (7))){
var inst_27039 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
var statearr_27050_27208 = state_27043__$1;
(statearr_27050_27208[(2)] = inst_27039);

(statearr_27050_27208[(1)] = (3));


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
});})(__27199,c__22838__auto___27202,G__27030_27200,n__19483__auto___27198,jobs,results,process,async))
;
return ((function (__27199,switch__22773__auto__,c__22838__auto___27202,G__27030_27200,n__19483__auto___27198,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0 = (function (){
var statearr_27054 = [null,null,null,null,null,null,null];
(statearr_27054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__);

(statearr_27054[(1)] = (1));

return statearr_27054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1 = (function (state_27043){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_27043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e27055){if((e27055 instanceof Object)){
var ex__22777__auto__ = e27055;
var statearr_27056_27209 = state_27043;
(statearr_27056_27209[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27210 = state_27043;
state_27043 = G__27210;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__ = function(state_27043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1.call(this,state_27043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__;
})()
;})(__27199,switch__22773__auto__,c__22838__auto___27202,G__27030_27200,n__19483__auto___27198,jobs,results,process,async))
})();
var state__22840__auto__ = (function (){var statearr_27057 = f__22839__auto__.call(null);
(statearr_27057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___27202);

return statearr_27057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(__27199,c__22838__auto___27202,G__27030_27200,n__19483__auto___27198,jobs,results,process,async))
);


break;
case "async":
var c__22838__auto___27211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27199,c__22838__auto___27211,G__27030_27200,n__19483__auto___27198,jobs,results,process,async){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (__27199,c__22838__auto___27211,G__27030_27200,n__19483__auto___27198,jobs,results,process,async){
return (function (state_27070){
var state_val_27071 = (state_27070[(1)]);
if((state_val_27071 === (1))){
var state_27070__$1 = state_27070;
var statearr_27072_27212 = state_27070__$1;
(statearr_27072_27212[(2)] = null);

(statearr_27072_27212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (2))){
var state_27070__$1 = state_27070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27070__$1,(4),jobs);
} else {
if((state_val_27071 === (3))){
var inst_27068 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27070__$1,inst_27068);
} else {
if((state_val_27071 === (4))){
var inst_27060 = (state_27070[(2)]);
var inst_27061 = async.call(null,inst_27060);
var state_27070__$1 = state_27070;
if(cljs.core.truth_(inst_27061)){
var statearr_27073_27213 = state_27070__$1;
(statearr_27073_27213[(1)] = (5));

} else {
var statearr_27074_27214 = state_27070__$1;
(statearr_27074_27214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (5))){
var state_27070__$1 = state_27070;
var statearr_27075_27215 = state_27070__$1;
(statearr_27075_27215[(2)] = null);

(statearr_27075_27215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (6))){
var state_27070__$1 = state_27070;
var statearr_27076_27216 = state_27070__$1;
(statearr_27076_27216[(2)] = null);

(statearr_27076_27216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (7))){
var inst_27066 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
var statearr_27077_27217 = state_27070__$1;
(statearr_27077_27217[(2)] = inst_27066);

(statearr_27077_27217[(1)] = (3));


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
});})(__27199,c__22838__auto___27211,G__27030_27200,n__19483__auto___27198,jobs,results,process,async))
;
return ((function (__27199,switch__22773__auto__,c__22838__auto___27211,G__27030_27200,n__19483__auto___27198,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0 = (function (){
var statearr_27081 = [null,null,null,null,null,null,null];
(statearr_27081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__);

(statearr_27081[(1)] = (1));

return statearr_27081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1 = (function (state_27070){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_27070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e27082){if((e27082 instanceof Object)){
var ex__22777__auto__ = e27082;
var statearr_27083_27218 = state_27070;
(statearr_27083_27218[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27219 = state_27070;
state_27070 = G__27219;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__ = function(state_27070){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1.call(this,state_27070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__;
})()
;})(__27199,switch__22773__auto__,c__22838__auto___27211,G__27030_27200,n__19483__auto___27198,jobs,results,process,async))
})();
var state__22840__auto__ = (function (){var statearr_27084 = f__22839__auto__.call(null);
(statearr_27084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___27211);

return statearr_27084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(__27199,c__22838__auto___27211,G__27030_27200,n__19483__auto___27198,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27220 = (__27199 + (1));
__27199 = G__27220;
continue;
} else {
}
break;
}

var c__22838__auto___27221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___27221,jobs,results,process,async){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___27221,jobs,results,process,async){
return (function (state_27106){
var state_val_27107 = (state_27106[(1)]);
if((state_val_27107 === (1))){
var state_27106__$1 = state_27106;
var statearr_27108_27222 = state_27106__$1;
(statearr_27108_27222[(2)] = null);

(statearr_27108_27222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27107 === (2))){
var state_27106__$1 = state_27106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27106__$1,(4),from);
} else {
if((state_val_27107 === (3))){
var inst_27104 = (state_27106[(2)]);
var state_27106__$1 = state_27106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27106__$1,inst_27104);
} else {
if((state_val_27107 === (4))){
var inst_27087 = (state_27106[(7)]);
var inst_27087__$1 = (state_27106[(2)]);
var inst_27088 = (inst_27087__$1 == null);
var state_27106__$1 = (function (){var statearr_27109 = state_27106;
(statearr_27109[(7)] = inst_27087__$1);

return statearr_27109;
})();
if(cljs.core.truth_(inst_27088)){
var statearr_27110_27223 = state_27106__$1;
(statearr_27110_27223[(1)] = (5));

} else {
var statearr_27111_27224 = state_27106__$1;
(statearr_27111_27224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27107 === (5))){
var inst_27090 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27106__$1 = state_27106;
var statearr_27112_27225 = state_27106__$1;
(statearr_27112_27225[(2)] = inst_27090);

(statearr_27112_27225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27107 === (6))){
var inst_27087 = (state_27106[(7)]);
var inst_27092 = (state_27106[(8)]);
var inst_27092__$1 = cljs.core.async.chan.call(null,(1));
var inst_27093 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27094 = [inst_27087,inst_27092__$1];
var inst_27095 = (new cljs.core.PersistentVector(null,2,(5),inst_27093,inst_27094,null));
var state_27106__$1 = (function (){var statearr_27113 = state_27106;
(statearr_27113[(8)] = inst_27092__$1);

return statearr_27113;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27106__$1,(8),jobs,inst_27095);
} else {
if((state_val_27107 === (7))){
var inst_27102 = (state_27106[(2)]);
var state_27106__$1 = state_27106;
var statearr_27114_27226 = state_27106__$1;
(statearr_27114_27226[(2)] = inst_27102);

(statearr_27114_27226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27107 === (8))){
var inst_27092 = (state_27106[(8)]);
var inst_27097 = (state_27106[(2)]);
var state_27106__$1 = (function (){var statearr_27115 = state_27106;
(statearr_27115[(9)] = inst_27097);

return statearr_27115;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27106__$1,(9),results,inst_27092);
} else {
if((state_val_27107 === (9))){
var inst_27099 = (state_27106[(2)]);
var state_27106__$1 = (function (){var statearr_27116 = state_27106;
(statearr_27116[(10)] = inst_27099);

return statearr_27116;
})();
var statearr_27117_27227 = state_27106__$1;
(statearr_27117_27227[(2)] = null);

(statearr_27117_27227[(1)] = (2));


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
});})(c__22838__auto___27221,jobs,results,process,async))
;
return ((function (switch__22773__auto__,c__22838__auto___27221,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0 = (function (){
var statearr_27121 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__);

(statearr_27121[(1)] = (1));

return statearr_27121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1 = (function (state_27106){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_27106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e27122){if((e27122 instanceof Object)){
var ex__22777__auto__ = e27122;
var statearr_27123_27228 = state_27106;
(statearr_27123_27228[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27229 = state_27106;
state_27106 = G__27229;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__ = function(state_27106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1.call(this,state_27106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___27221,jobs,results,process,async))
})();
var state__22840__auto__ = (function (){var statearr_27124 = f__22839__auto__.call(null);
(statearr_27124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___27221);

return statearr_27124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___27221,jobs,results,process,async))
);


var c__22838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto__,jobs,results,process,async){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto__,jobs,results,process,async){
return (function (state_27162){
var state_val_27163 = (state_27162[(1)]);
if((state_val_27163 === (7))){
var inst_27158 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
var statearr_27164_27230 = state_27162__$1;
(statearr_27164_27230[(2)] = inst_27158);

(statearr_27164_27230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (20))){
var state_27162__$1 = state_27162;
var statearr_27165_27231 = state_27162__$1;
(statearr_27165_27231[(2)] = null);

(statearr_27165_27231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (1))){
var state_27162__$1 = state_27162;
var statearr_27166_27232 = state_27162__$1;
(statearr_27166_27232[(2)] = null);

(statearr_27166_27232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (4))){
var inst_27127 = (state_27162[(7)]);
var inst_27127__$1 = (state_27162[(2)]);
var inst_27128 = (inst_27127__$1 == null);
var state_27162__$1 = (function (){var statearr_27167 = state_27162;
(statearr_27167[(7)] = inst_27127__$1);

return statearr_27167;
})();
if(cljs.core.truth_(inst_27128)){
var statearr_27168_27233 = state_27162__$1;
(statearr_27168_27233[(1)] = (5));

} else {
var statearr_27169_27234 = state_27162__$1;
(statearr_27169_27234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (15))){
var inst_27140 = (state_27162[(8)]);
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27162__$1,(18),to,inst_27140);
} else {
if((state_val_27163 === (21))){
var inst_27153 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
var statearr_27170_27235 = state_27162__$1;
(statearr_27170_27235[(2)] = inst_27153);

(statearr_27170_27235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (13))){
var inst_27155 = (state_27162[(2)]);
var state_27162__$1 = (function (){var statearr_27171 = state_27162;
(statearr_27171[(9)] = inst_27155);

return statearr_27171;
})();
var statearr_27172_27236 = state_27162__$1;
(statearr_27172_27236[(2)] = null);

(statearr_27172_27236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (6))){
var inst_27127 = (state_27162[(7)]);
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27162__$1,(11),inst_27127);
} else {
if((state_val_27163 === (17))){
var inst_27148 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
if(cljs.core.truth_(inst_27148)){
var statearr_27173_27237 = state_27162__$1;
(statearr_27173_27237[(1)] = (19));

} else {
var statearr_27174_27238 = state_27162__$1;
(statearr_27174_27238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (3))){
var inst_27160 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27162__$1,inst_27160);
} else {
if((state_val_27163 === (12))){
var inst_27137 = (state_27162[(10)]);
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27162__$1,(14),inst_27137);
} else {
if((state_val_27163 === (2))){
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27162__$1,(4),results);
} else {
if((state_val_27163 === (19))){
var state_27162__$1 = state_27162;
var statearr_27175_27239 = state_27162__$1;
(statearr_27175_27239[(2)] = null);

(statearr_27175_27239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (11))){
var inst_27137 = (state_27162[(2)]);
var state_27162__$1 = (function (){var statearr_27176 = state_27162;
(statearr_27176[(10)] = inst_27137);

return statearr_27176;
})();
var statearr_27177_27240 = state_27162__$1;
(statearr_27177_27240[(2)] = null);

(statearr_27177_27240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (9))){
var state_27162__$1 = state_27162;
var statearr_27178_27241 = state_27162__$1;
(statearr_27178_27241[(2)] = null);

(statearr_27178_27241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (5))){
var state_27162__$1 = state_27162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27179_27242 = state_27162__$1;
(statearr_27179_27242[(1)] = (8));

} else {
var statearr_27180_27243 = state_27162__$1;
(statearr_27180_27243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (14))){
var inst_27142 = (state_27162[(11)]);
var inst_27140 = (state_27162[(8)]);
var inst_27140__$1 = (state_27162[(2)]);
var inst_27141 = (inst_27140__$1 == null);
var inst_27142__$1 = cljs.core.not.call(null,inst_27141);
var state_27162__$1 = (function (){var statearr_27181 = state_27162;
(statearr_27181[(11)] = inst_27142__$1);

(statearr_27181[(8)] = inst_27140__$1);

return statearr_27181;
})();
if(inst_27142__$1){
var statearr_27182_27244 = state_27162__$1;
(statearr_27182_27244[(1)] = (15));

} else {
var statearr_27183_27245 = state_27162__$1;
(statearr_27183_27245[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (16))){
var inst_27142 = (state_27162[(11)]);
var state_27162__$1 = state_27162;
var statearr_27184_27246 = state_27162__$1;
(statearr_27184_27246[(2)] = inst_27142);

(statearr_27184_27246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (10))){
var inst_27134 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
var statearr_27185_27247 = state_27162__$1;
(statearr_27185_27247[(2)] = inst_27134);

(statearr_27185_27247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (18))){
var inst_27145 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
var statearr_27186_27248 = state_27162__$1;
(statearr_27186_27248[(2)] = inst_27145);

(statearr_27186_27248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (8))){
var inst_27131 = cljs.core.async.close_BANG_.call(null,to);
var state_27162__$1 = state_27162;
var statearr_27187_27249 = state_27162__$1;
(statearr_27187_27249[(2)] = inst_27131);

(statearr_27187_27249[(1)] = (10));


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
});})(c__22838__auto__,jobs,results,process,async))
;
return ((function (switch__22773__auto__,c__22838__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0 = (function (){
var statearr_27191 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__);

(statearr_27191[(1)] = (1));

return statearr_27191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1 = (function (state_27162){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_27162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e27192){if((e27192 instanceof Object)){
var ex__22777__auto__ = e27192;
var statearr_27193_27250 = state_27162;
(statearr_27193_27250[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27251 = state_27162;
state_27162 = G__27251;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__ = function(state_27162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1.call(this,state_27162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22774__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto__,jobs,results,process,async))
})();
var state__22840__auto__ = (function (){var statearr_27194 = f__22839__auto__.call(null);
(statearr_27194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto__);

return statearr_27194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto__,jobs,results,process,async))
);

return c__22838__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27252 = [];
var len__19638__auto___27255 = arguments.length;
var i__19639__auto___27256 = (0);
while(true){
if((i__19639__auto___27256 < len__19638__auto___27255)){
args27252.push((arguments[i__19639__auto___27256]));

var G__27257 = (i__19639__auto___27256 + (1));
i__19639__auto___27256 = G__27257;
continue;
} else {
}
break;
}

var G__27254 = args27252.length;
switch (G__27254) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27252.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27259 = [];
var len__19638__auto___27262 = arguments.length;
var i__19639__auto___27263 = (0);
while(true){
if((i__19639__auto___27263 < len__19638__auto___27262)){
args27259.push((arguments[i__19639__auto___27263]));

var G__27264 = (i__19639__auto___27263 + (1));
i__19639__auto___27263 = G__27264;
continue;
} else {
}
break;
}

var G__27261 = args27259.length;
switch (G__27261) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27259.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27266 = [];
var len__19638__auto___27319 = arguments.length;
var i__19639__auto___27320 = (0);
while(true){
if((i__19639__auto___27320 < len__19638__auto___27319)){
args27266.push((arguments[i__19639__auto___27320]));

var G__27321 = (i__19639__auto___27320 + (1));
i__19639__auto___27320 = G__27321;
continue;
} else {
}
break;
}

var G__27268 = args27266.length;
switch (G__27268) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27266.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22838__auto___27323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___27323,tc,fc){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___27323,tc,fc){
return (function (state_27294){
var state_val_27295 = (state_27294[(1)]);
if((state_val_27295 === (7))){
var inst_27290 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
var statearr_27296_27324 = state_27294__$1;
(statearr_27296_27324[(2)] = inst_27290);

(statearr_27296_27324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (1))){
var state_27294__$1 = state_27294;
var statearr_27297_27325 = state_27294__$1;
(statearr_27297_27325[(2)] = null);

(statearr_27297_27325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (4))){
var inst_27271 = (state_27294[(7)]);
var inst_27271__$1 = (state_27294[(2)]);
var inst_27272 = (inst_27271__$1 == null);
var state_27294__$1 = (function (){var statearr_27298 = state_27294;
(statearr_27298[(7)] = inst_27271__$1);

return statearr_27298;
})();
if(cljs.core.truth_(inst_27272)){
var statearr_27299_27326 = state_27294__$1;
(statearr_27299_27326[(1)] = (5));

} else {
var statearr_27300_27327 = state_27294__$1;
(statearr_27300_27327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (13))){
var state_27294__$1 = state_27294;
var statearr_27301_27328 = state_27294__$1;
(statearr_27301_27328[(2)] = null);

(statearr_27301_27328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (6))){
var inst_27271 = (state_27294[(7)]);
var inst_27277 = p.call(null,inst_27271);
var state_27294__$1 = state_27294;
if(cljs.core.truth_(inst_27277)){
var statearr_27302_27329 = state_27294__$1;
(statearr_27302_27329[(1)] = (9));

} else {
var statearr_27303_27330 = state_27294__$1;
(statearr_27303_27330[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (3))){
var inst_27292 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27294__$1,inst_27292);
} else {
if((state_val_27295 === (12))){
var state_27294__$1 = state_27294;
var statearr_27304_27331 = state_27294__$1;
(statearr_27304_27331[(2)] = null);

(statearr_27304_27331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (2))){
var state_27294__$1 = state_27294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27294__$1,(4),ch);
} else {
if((state_val_27295 === (11))){
var inst_27271 = (state_27294[(7)]);
var inst_27281 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27294__$1,(8),inst_27281,inst_27271);
} else {
if((state_val_27295 === (9))){
var state_27294__$1 = state_27294;
var statearr_27305_27332 = state_27294__$1;
(statearr_27305_27332[(2)] = tc);

(statearr_27305_27332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (5))){
var inst_27274 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27275 = cljs.core.async.close_BANG_.call(null,fc);
var state_27294__$1 = (function (){var statearr_27306 = state_27294;
(statearr_27306[(8)] = inst_27274);

return statearr_27306;
})();
var statearr_27307_27333 = state_27294__$1;
(statearr_27307_27333[(2)] = inst_27275);

(statearr_27307_27333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (14))){
var inst_27288 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
var statearr_27308_27334 = state_27294__$1;
(statearr_27308_27334[(2)] = inst_27288);

(statearr_27308_27334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (10))){
var state_27294__$1 = state_27294;
var statearr_27309_27335 = state_27294__$1;
(statearr_27309_27335[(2)] = fc);

(statearr_27309_27335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (8))){
var inst_27283 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
if(cljs.core.truth_(inst_27283)){
var statearr_27310_27336 = state_27294__$1;
(statearr_27310_27336[(1)] = (12));

} else {
var statearr_27311_27337 = state_27294__$1;
(statearr_27311_27337[(1)] = (13));

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
});})(c__22838__auto___27323,tc,fc))
;
return ((function (switch__22773__auto__,c__22838__auto___27323,tc,fc){
return (function() {
var cljs$core$async$state_machine__22774__auto__ = null;
var cljs$core$async$state_machine__22774__auto____0 = (function (){
var statearr_27315 = [null,null,null,null,null,null,null,null,null];
(statearr_27315[(0)] = cljs$core$async$state_machine__22774__auto__);

(statearr_27315[(1)] = (1));

return statearr_27315;
});
var cljs$core$async$state_machine__22774__auto____1 = (function (state_27294){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_27294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e27316){if((e27316 instanceof Object)){
var ex__22777__auto__ = e27316;
var statearr_27317_27338 = state_27294;
(statearr_27317_27338[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27339 = state_27294;
state_27294 = G__27339;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$state_machine__22774__auto__ = function(state_27294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22774__auto____1.call(this,state_27294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22774__auto____0;
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22774__auto____1;
return cljs$core$async$state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___27323,tc,fc))
})();
var state__22840__auto__ = (function (){var statearr_27318 = f__22839__auto__.call(null);
(statearr_27318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___27323);

return statearr_27318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___27323,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto__){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto__){
return (function (state_27386){
var state_val_27387 = (state_27386[(1)]);
if((state_val_27387 === (1))){
var inst_27372 = init;
var state_27386__$1 = (function (){var statearr_27388 = state_27386;
(statearr_27388[(7)] = inst_27372);

return statearr_27388;
})();
var statearr_27389_27404 = state_27386__$1;
(statearr_27389_27404[(2)] = null);

(statearr_27389_27404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (2))){
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27386__$1,(4),ch);
} else {
if((state_val_27387 === (3))){
var inst_27384 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27386__$1,inst_27384);
} else {
if((state_val_27387 === (4))){
var inst_27375 = (state_27386[(8)]);
var inst_27375__$1 = (state_27386[(2)]);
var inst_27376 = (inst_27375__$1 == null);
var state_27386__$1 = (function (){var statearr_27390 = state_27386;
(statearr_27390[(8)] = inst_27375__$1);

return statearr_27390;
})();
if(cljs.core.truth_(inst_27376)){
var statearr_27391_27405 = state_27386__$1;
(statearr_27391_27405[(1)] = (5));

} else {
var statearr_27392_27406 = state_27386__$1;
(statearr_27392_27406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (5))){
var inst_27372 = (state_27386[(7)]);
var state_27386__$1 = state_27386;
var statearr_27393_27407 = state_27386__$1;
(statearr_27393_27407[(2)] = inst_27372);

(statearr_27393_27407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (6))){
var inst_27375 = (state_27386[(8)]);
var inst_27372 = (state_27386[(7)]);
var inst_27379 = f.call(null,inst_27372,inst_27375);
var inst_27372__$1 = inst_27379;
var state_27386__$1 = (function (){var statearr_27394 = state_27386;
(statearr_27394[(7)] = inst_27372__$1);

return statearr_27394;
})();
var statearr_27395_27408 = state_27386__$1;
(statearr_27395_27408[(2)] = null);

(statearr_27395_27408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (7))){
var inst_27382 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27396_27409 = state_27386__$1;
(statearr_27396_27409[(2)] = inst_27382);

(statearr_27396_27409[(1)] = (3));


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
});})(c__22838__auto__))
;
return ((function (switch__22773__auto__,c__22838__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22774__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22774__auto____0 = (function (){
var statearr_27400 = [null,null,null,null,null,null,null,null,null];
(statearr_27400[(0)] = cljs$core$async$reduce_$_state_machine__22774__auto__);

(statearr_27400[(1)] = (1));

return statearr_27400;
});
var cljs$core$async$reduce_$_state_machine__22774__auto____1 = (function (state_27386){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_27386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e27401){if((e27401 instanceof Object)){
var ex__22777__auto__ = e27401;
var statearr_27402_27410 = state_27386;
(statearr_27402_27410[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27411 = state_27386;
state_27386 = G__27411;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22774__auto__ = function(state_27386){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22774__auto____1.call(this,state_27386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22774__auto____0;
cljs$core$async$reduce_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22774__auto____1;
return cljs$core$async$reduce_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto__))
})();
var state__22840__auto__ = (function (){var statearr_27403 = f__22839__auto__.call(null);
(statearr_27403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto__);

return statearr_27403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto__))
);

return c__22838__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27412 = [];
var len__19638__auto___27464 = arguments.length;
var i__19639__auto___27465 = (0);
while(true){
if((i__19639__auto___27465 < len__19638__auto___27464)){
args27412.push((arguments[i__19639__auto___27465]));

var G__27466 = (i__19639__auto___27465 + (1));
i__19639__auto___27465 = G__27466;
continue;
} else {
}
break;
}

var G__27414 = args27412.length;
switch (G__27414) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27412.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto__){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto__){
return (function (state_27439){
var state_val_27440 = (state_27439[(1)]);
if((state_val_27440 === (7))){
var inst_27421 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
var statearr_27441_27468 = state_27439__$1;
(statearr_27441_27468[(2)] = inst_27421);

(statearr_27441_27468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (1))){
var inst_27415 = cljs.core.seq.call(null,coll);
var inst_27416 = inst_27415;
var state_27439__$1 = (function (){var statearr_27442 = state_27439;
(statearr_27442[(7)] = inst_27416);

return statearr_27442;
})();
var statearr_27443_27469 = state_27439__$1;
(statearr_27443_27469[(2)] = null);

(statearr_27443_27469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (4))){
var inst_27416 = (state_27439[(7)]);
var inst_27419 = cljs.core.first.call(null,inst_27416);
var state_27439__$1 = state_27439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27439__$1,(7),ch,inst_27419);
} else {
if((state_val_27440 === (13))){
var inst_27433 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
var statearr_27444_27470 = state_27439__$1;
(statearr_27444_27470[(2)] = inst_27433);

(statearr_27444_27470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (6))){
var inst_27424 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
if(cljs.core.truth_(inst_27424)){
var statearr_27445_27471 = state_27439__$1;
(statearr_27445_27471[(1)] = (8));

} else {
var statearr_27446_27472 = state_27439__$1;
(statearr_27446_27472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (3))){
var inst_27437 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27439__$1,inst_27437);
} else {
if((state_val_27440 === (12))){
var state_27439__$1 = state_27439;
var statearr_27447_27473 = state_27439__$1;
(statearr_27447_27473[(2)] = null);

(statearr_27447_27473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (2))){
var inst_27416 = (state_27439[(7)]);
var state_27439__$1 = state_27439;
if(cljs.core.truth_(inst_27416)){
var statearr_27448_27474 = state_27439__$1;
(statearr_27448_27474[(1)] = (4));

} else {
var statearr_27449_27475 = state_27439__$1;
(statearr_27449_27475[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (11))){
var inst_27430 = cljs.core.async.close_BANG_.call(null,ch);
var state_27439__$1 = state_27439;
var statearr_27450_27476 = state_27439__$1;
(statearr_27450_27476[(2)] = inst_27430);

(statearr_27450_27476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (9))){
var state_27439__$1 = state_27439;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27451_27477 = state_27439__$1;
(statearr_27451_27477[(1)] = (11));

} else {
var statearr_27452_27478 = state_27439__$1;
(statearr_27452_27478[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (5))){
var inst_27416 = (state_27439[(7)]);
var state_27439__$1 = state_27439;
var statearr_27453_27479 = state_27439__$1;
(statearr_27453_27479[(2)] = inst_27416);

(statearr_27453_27479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (10))){
var inst_27435 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
var statearr_27454_27480 = state_27439__$1;
(statearr_27454_27480[(2)] = inst_27435);

(statearr_27454_27480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (8))){
var inst_27416 = (state_27439[(7)]);
var inst_27426 = cljs.core.next.call(null,inst_27416);
var inst_27416__$1 = inst_27426;
var state_27439__$1 = (function (){var statearr_27455 = state_27439;
(statearr_27455[(7)] = inst_27416__$1);

return statearr_27455;
})();
var statearr_27456_27481 = state_27439__$1;
(statearr_27456_27481[(2)] = null);

(statearr_27456_27481[(1)] = (2));


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
});})(c__22838__auto__))
;
return ((function (switch__22773__auto__,c__22838__auto__){
return (function() {
var cljs$core$async$state_machine__22774__auto__ = null;
var cljs$core$async$state_machine__22774__auto____0 = (function (){
var statearr_27460 = [null,null,null,null,null,null,null,null];
(statearr_27460[(0)] = cljs$core$async$state_machine__22774__auto__);

(statearr_27460[(1)] = (1));

return statearr_27460;
});
var cljs$core$async$state_machine__22774__auto____1 = (function (state_27439){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_27439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e27461){if((e27461 instanceof Object)){
var ex__22777__auto__ = e27461;
var statearr_27462_27482 = state_27439;
(statearr_27462_27482[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27483 = state_27439;
state_27439 = G__27483;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$state_machine__22774__auto__ = function(state_27439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22774__auto____1.call(this,state_27439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22774__auto____0;
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22774__auto____1;
return cljs$core$async$state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto__))
})();
var state__22840__auto__ = (function (){var statearr_27463 = f__22839__auto__.call(null);
(statearr_27463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto__);

return statearr_27463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto__))
);

return c__22838__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19235__auto__ = (((_ == null))?null:_);
var m__19236__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,_);
} else {
var m__19236__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19235__auto__ = (((m == null))?null:m);
var m__19236__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19236__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19235__auto__ = (((m == null))?null:m);
var m__19236__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,m,ch);
} else {
var m__19236__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19235__auto__ = (((m == null))?null:m);
var m__19236__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,m);
} else {
var m__19236__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27705 = (function (mult,ch,cs,meta27706){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27706 = meta27706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27707,meta27706__$1){
var self__ = this;
var _27707__$1 = this;
return (new cljs.core.async.t_cljs$core$async27705(self__.mult,self__.ch,self__.cs,meta27706__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27707){
var self__ = this;
var _27707__$1 = this;
return self__.meta27706;
});})(cs))
;

cljs.core.async.t_cljs$core$async27705.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27705.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27705.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27705.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27705.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27705.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27706","meta27706",-1162116305,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27705";

cljs.core.async.t_cljs$core$async27705.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cljs.core.async/t_cljs$core$async27705");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27705 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27705(mult__$1,ch__$1,cs__$1,meta27706){
return (new cljs.core.async.t_cljs$core$async27705(mult__$1,ch__$1,cs__$1,meta27706));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27705(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22838__auto___27926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___27926,cs,m,dchan,dctr,done){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___27926,cs,m,dchan,dctr,done){
return (function (state_27838){
var state_val_27839 = (state_27838[(1)]);
if((state_val_27839 === (7))){
var inst_27834 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27840_27927 = state_27838__$1;
(statearr_27840_27927[(2)] = inst_27834);

(statearr_27840_27927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (20))){
var inst_27739 = (state_27838[(7)]);
var inst_27749 = cljs.core.first.call(null,inst_27739);
var inst_27750 = cljs.core.nth.call(null,inst_27749,(0),null);
var inst_27751 = cljs.core.nth.call(null,inst_27749,(1),null);
var state_27838__$1 = (function (){var statearr_27841 = state_27838;
(statearr_27841[(8)] = inst_27750);

return statearr_27841;
})();
if(cljs.core.truth_(inst_27751)){
var statearr_27842_27928 = state_27838__$1;
(statearr_27842_27928[(1)] = (22));

} else {
var statearr_27843_27929 = state_27838__$1;
(statearr_27843_27929[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (27))){
var inst_27786 = (state_27838[(9)]);
var inst_27781 = (state_27838[(10)]);
var inst_27779 = (state_27838[(11)]);
var inst_27710 = (state_27838[(12)]);
var inst_27786__$1 = cljs.core._nth.call(null,inst_27779,inst_27781);
var inst_27787 = cljs.core.async.put_BANG_.call(null,inst_27786__$1,inst_27710,done);
var state_27838__$1 = (function (){var statearr_27844 = state_27838;
(statearr_27844[(9)] = inst_27786__$1);

return statearr_27844;
})();
if(cljs.core.truth_(inst_27787)){
var statearr_27845_27930 = state_27838__$1;
(statearr_27845_27930[(1)] = (30));

} else {
var statearr_27846_27931 = state_27838__$1;
(statearr_27846_27931[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (1))){
var state_27838__$1 = state_27838;
var statearr_27847_27932 = state_27838__$1;
(statearr_27847_27932[(2)] = null);

(statearr_27847_27932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (24))){
var inst_27739 = (state_27838[(7)]);
var inst_27756 = (state_27838[(2)]);
var inst_27757 = cljs.core.next.call(null,inst_27739);
var inst_27719 = inst_27757;
var inst_27720 = null;
var inst_27721 = (0);
var inst_27722 = (0);
var state_27838__$1 = (function (){var statearr_27848 = state_27838;
(statearr_27848[(13)] = inst_27756);

(statearr_27848[(14)] = inst_27720);

(statearr_27848[(15)] = inst_27719);

(statearr_27848[(16)] = inst_27721);

(statearr_27848[(17)] = inst_27722);

return statearr_27848;
})();
var statearr_27849_27933 = state_27838__$1;
(statearr_27849_27933[(2)] = null);

(statearr_27849_27933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (39))){
var state_27838__$1 = state_27838;
var statearr_27853_27934 = state_27838__$1;
(statearr_27853_27934[(2)] = null);

(statearr_27853_27934[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (4))){
var inst_27710 = (state_27838[(12)]);
var inst_27710__$1 = (state_27838[(2)]);
var inst_27711 = (inst_27710__$1 == null);
var state_27838__$1 = (function (){var statearr_27854 = state_27838;
(statearr_27854[(12)] = inst_27710__$1);

return statearr_27854;
})();
if(cljs.core.truth_(inst_27711)){
var statearr_27855_27935 = state_27838__$1;
(statearr_27855_27935[(1)] = (5));

} else {
var statearr_27856_27936 = state_27838__$1;
(statearr_27856_27936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (15))){
var inst_27720 = (state_27838[(14)]);
var inst_27719 = (state_27838[(15)]);
var inst_27721 = (state_27838[(16)]);
var inst_27722 = (state_27838[(17)]);
var inst_27735 = (state_27838[(2)]);
var inst_27736 = (inst_27722 + (1));
var tmp27850 = inst_27720;
var tmp27851 = inst_27719;
var tmp27852 = inst_27721;
var inst_27719__$1 = tmp27851;
var inst_27720__$1 = tmp27850;
var inst_27721__$1 = tmp27852;
var inst_27722__$1 = inst_27736;
var state_27838__$1 = (function (){var statearr_27857 = state_27838;
(statearr_27857[(14)] = inst_27720__$1);

(statearr_27857[(15)] = inst_27719__$1);

(statearr_27857[(16)] = inst_27721__$1);

(statearr_27857[(18)] = inst_27735);

(statearr_27857[(17)] = inst_27722__$1);

return statearr_27857;
})();
var statearr_27858_27937 = state_27838__$1;
(statearr_27858_27937[(2)] = null);

(statearr_27858_27937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (21))){
var inst_27760 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27862_27938 = state_27838__$1;
(statearr_27862_27938[(2)] = inst_27760);

(statearr_27862_27938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (31))){
var inst_27786 = (state_27838[(9)]);
var inst_27790 = done.call(null,null);
var inst_27791 = cljs.core.async.untap_STAR_.call(null,m,inst_27786);
var state_27838__$1 = (function (){var statearr_27863 = state_27838;
(statearr_27863[(19)] = inst_27790);

return statearr_27863;
})();
var statearr_27864_27939 = state_27838__$1;
(statearr_27864_27939[(2)] = inst_27791);

(statearr_27864_27939[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (32))){
var inst_27781 = (state_27838[(10)]);
var inst_27778 = (state_27838[(20)]);
var inst_27780 = (state_27838[(21)]);
var inst_27779 = (state_27838[(11)]);
var inst_27793 = (state_27838[(2)]);
var inst_27794 = (inst_27781 + (1));
var tmp27859 = inst_27778;
var tmp27860 = inst_27780;
var tmp27861 = inst_27779;
var inst_27778__$1 = tmp27859;
var inst_27779__$1 = tmp27861;
var inst_27780__$1 = tmp27860;
var inst_27781__$1 = inst_27794;
var state_27838__$1 = (function (){var statearr_27865 = state_27838;
(statearr_27865[(10)] = inst_27781__$1);

(statearr_27865[(20)] = inst_27778__$1);

(statearr_27865[(22)] = inst_27793);

(statearr_27865[(21)] = inst_27780__$1);

(statearr_27865[(11)] = inst_27779__$1);

return statearr_27865;
})();
var statearr_27866_27940 = state_27838__$1;
(statearr_27866_27940[(2)] = null);

(statearr_27866_27940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (40))){
var inst_27806 = (state_27838[(23)]);
var inst_27810 = done.call(null,null);
var inst_27811 = cljs.core.async.untap_STAR_.call(null,m,inst_27806);
var state_27838__$1 = (function (){var statearr_27867 = state_27838;
(statearr_27867[(24)] = inst_27810);

return statearr_27867;
})();
var statearr_27868_27941 = state_27838__$1;
(statearr_27868_27941[(2)] = inst_27811);

(statearr_27868_27941[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (33))){
var inst_27797 = (state_27838[(25)]);
var inst_27799 = cljs.core.chunked_seq_QMARK_.call(null,inst_27797);
var state_27838__$1 = state_27838;
if(inst_27799){
var statearr_27869_27942 = state_27838__$1;
(statearr_27869_27942[(1)] = (36));

} else {
var statearr_27870_27943 = state_27838__$1;
(statearr_27870_27943[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (13))){
var inst_27729 = (state_27838[(26)]);
var inst_27732 = cljs.core.async.close_BANG_.call(null,inst_27729);
var state_27838__$1 = state_27838;
var statearr_27871_27944 = state_27838__$1;
(statearr_27871_27944[(2)] = inst_27732);

(statearr_27871_27944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (22))){
var inst_27750 = (state_27838[(8)]);
var inst_27753 = cljs.core.async.close_BANG_.call(null,inst_27750);
var state_27838__$1 = state_27838;
var statearr_27872_27945 = state_27838__$1;
(statearr_27872_27945[(2)] = inst_27753);

(statearr_27872_27945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (36))){
var inst_27797 = (state_27838[(25)]);
var inst_27801 = cljs.core.chunk_first.call(null,inst_27797);
var inst_27802 = cljs.core.chunk_rest.call(null,inst_27797);
var inst_27803 = cljs.core.count.call(null,inst_27801);
var inst_27778 = inst_27802;
var inst_27779 = inst_27801;
var inst_27780 = inst_27803;
var inst_27781 = (0);
var state_27838__$1 = (function (){var statearr_27873 = state_27838;
(statearr_27873[(10)] = inst_27781);

(statearr_27873[(20)] = inst_27778);

(statearr_27873[(21)] = inst_27780);

(statearr_27873[(11)] = inst_27779);

return statearr_27873;
})();
var statearr_27874_27946 = state_27838__$1;
(statearr_27874_27946[(2)] = null);

(statearr_27874_27946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (41))){
var inst_27797 = (state_27838[(25)]);
var inst_27813 = (state_27838[(2)]);
var inst_27814 = cljs.core.next.call(null,inst_27797);
var inst_27778 = inst_27814;
var inst_27779 = null;
var inst_27780 = (0);
var inst_27781 = (0);
var state_27838__$1 = (function (){var statearr_27875 = state_27838;
(statearr_27875[(10)] = inst_27781);

(statearr_27875[(20)] = inst_27778);

(statearr_27875[(27)] = inst_27813);

(statearr_27875[(21)] = inst_27780);

(statearr_27875[(11)] = inst_27779);

return statearr_27875;
})();
var statearr_27876_27947 = state_27838__$1;
(statearr_27876_27947[(2)] = null);

(statearr_27876_27947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (43))){
var state_27838__$1 = state_27838;
var statearr_27877_27948 = state_27838__$1;
(statearr_27877_27948[(2)] = null);

(statearr_27877_27948[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (29))){
var inst_27822 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27878_27949 = state_27838__$1;
(statearr_27878_27949[(2)] = inst_27822);

(statearr_27878_27949[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (44))){
var inst_27831 = (state_27838[(2)]);
var state_27838__$1 = (function (){var statearr_27879 = state_27838;
(statearr_27879[(28)] = inst_27831);

return statearr_27879;
})();
var statearr_27880_27950 = state_27838__$1;
(statearr_27880_27950[(2)] = null);

(statearr_27880_27950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (6))){
var inst_27770 = (state_27838[(29)]);
var inst_27769 = cljs.core.deref.call(null,cs);
var inst_27770__$1 = cljs.core.keys.call(null,inst_27769);
var inst_27771 = cljs.core.count.call(null,inst_27770__$1);
var inst_27772 = cljs.core.reset_BANG_.call(null,dctr,inst_27771);
var inst_27777 = cljs.core.seq.call(null,inst_27770__$1);
var inst_27778 = inst_27777;
var inst_27779 = null;
var inst_27780 = (0);
var inst_27781 = (0);
var state_27838__$1 = (function (){var statearr_27881 = state_27838;
(statearr_27881[(10)] = inst_27781);

(statearr_27881[(20)] = inst_27778);

(statearr_27881[(29)] = inst_27770__$1);

(statearr_27881[(21)] = inst_27780);

(statearr_27881[(11)] = inst_27779);

(statearr_27881[(30)] = inst_27772);

return statearr_27881;
})();
var statearr_27882_27951 = state_27838__$1;
(statearr_27882_27951[(2)] = null);

(statearr_27882_27951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (28))){
var inst_27778 = (state_27838[(20)]);
var inst_27797 = (state_27838[(25)]);
var inst_27797__$1 = cljs.core.seq.call(null,inst_27778);
var state_27838__$1 = (function (){var statearr_27883 = state_27838;
(statearr_27883[(25)] = inst_27797__$1);

return statearr_27883;
})();
if(inst_27797__$1){
var statearr_27884_27952 = state_27838__$1;
(statearr_27884_27952[(1)] = (33));

} else {
var statearr_27885_27953 = state_27838__$1;
(statearr_27885_27953[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (25))){
var inst_27781 = (state_27838[(10)]);
var inst_27780 = (state_27838[(21)]);
var inst_27783 = (inst_27781 < inst_27780);
var inst_27784 = inst_27783;
var state_27838__$1 = state_27838;
if(cljs.core.truth_(inst_27784)){
var statearr_27886_27954 = state_27838__$1;
(statearr_27886_27954[(1)] = (27));

} else {
var statearr_27887_27955 = state_27838__$1;
(statearr_27887_27955[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (34))){
var state_27838__$1 = state_27838;
var statearr_27888_27956 = state_27838__$1;
(statearr_27888_27956[(2)] = null);

(statearr_27888_27956[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (17))){
var state_27838__$1 = state_27838;
var statearr_27889_27957 = state_27838__$1;
(statearr_27889_27957[(2)] = null);

(statearr_27889_27957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (3))){
var inst_27836 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27838__$1,inst_27836);
} else {
if((state_val_27839 === (12))){
var inst_27765 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27890_27958 = state_27838__$1;
(statearr_27890_27958[(2)] = inst_27765);

(statearr_27890_27958[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (2))){
var state_27838__$1 = state_27838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27838__$1,(4),ch);
} else {
if((state_val_27839 === (23))){
var state_27838__$1 = state_27838;
var statearr_27891_27959 = state_27838__$1;
(statearr_27891_27959[(2)] = null);

(statearr_27891_27959[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (35))){
var inst_27820 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27892_27960 = state_27838__$1;
(statearr_27892_27960[(2)] = inst_27820);

(statearr_27892_27960[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (19))){
var inst_27739 = (state_27838[(7)]);
var inst_27743 = cljs.core.chunk_first.call(null,inst_27739);
var inst_27744 = cljs.core.chunk_rest.call(null,inst_27739);
var inst_27745 = cljs.core.count.call(null,inst_27743);
var inst_27719 = inst_27744;
var inst_27720 = inst_27743;
var inst_27721 = inst_27745;
var inst_27722 = (0);
var state_27838__$1 = (function (){var statearr_27893 = state_27838;
(statearr_27893[(14)] = inst_27720);

(statearr_27893[(15)] = inst_27719);

(statearr_27893[(16)] = inst_27721);

(statearr_27893[(17)] = inst_27722);

return statearr_27893;
})();
var statearr_27894_27961 = state_27838__$1;
(statearr_27894_27961[(2)] = null);

(statearr_27894_27961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (11))){
var inst_27739 = (state_27838[(7)]);
var inst_27719 = (state_27838[(15)]);
var inst_27739__$1 = cljs.core.seq.call(null,inst_27719);
var state_27838__$1 = (function (){var statearr_27895 = state_27838;
(statearr_27895[(7)] = inst_27739__$1);

return statearr_27895;
})();
if(inst_27739__$1){
var statearr_27896_27962 = state_27838__$1;
(statearr_27896_27962[(1)] = (16));

} else {
var statearr_27897_27963 = state_27838__$1;
(statearr_27897_27963[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (9))){
var inst_27767 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27898_27964 = state_27838__$1;
(statearr_27898_27964[(2)] = inst_27767);

(statearr_27898_27964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (5))){
var inst_27717 = cljs.core.deref.call(null,cs);
var inst_27718 = cljs.core.seq.call(null,inst_27717);
var inst_27719 = inst_27718;
var inst_27720 = null;
var inst_27721 = (0);
var inst_27722 = (0);
var state_27838__$1 = (function (){var statearr_27899 = state_27838;
(statearr_27899[(14)] = inst_27720);

(statearr_27899[(15)] = inst_27719);

(statearr_27899[(16)] = inst_27721);

(statearr_27899[(17)] = inst_27722);

return statearr_27899;
})();
var statearr_27900_27965 = state_27838__$1;
(statearr_27900_27965[(2)] = null);

(statearr_27900_27965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (14))){
var state_27838__$1 = state_27838;
var statearr_27901_27966 = state_27838__$1;
(statearr_27901_27966[(2)] = null);

(statearr_27901_27966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (45))){
var inst_27828 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27902_27967 = state_27838__$1;
(statearr_27902_27967[(2)] = inst_27828);

(statearr_27902_27967[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (26))){
var inst_27770 = (state_27838[(29)]);
var inst_27824 = (state_27838[(2)]);
var inst_27825 = cljs.core.seq.call(null,inst_27770);
var state_27838__$1 = (function (){var statearr_27903 = state_27838;
(statearr_27903[(31)] = inst_27824);

return statearr_27903;
})();
if(inst_27825){
var statearr_27904_27968 = state_27838__$1;
(statearr_27904_27968[(1)] = (42));

} else {
var statearr_27905_27969 = state_27838__$1;
(statearr_27905_27969[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (16))){
var inst_27739 = (state_27838[(7)]);
var inst_27741 = cljs.core.chunked_seq_QMARK_.call(null,inst_27739);
var state_27838__$1 = state_27838;
if(inst_27741){
var statearr_27906_27970 = state_27838__$1;
(statearr_27906_27970[(1)] = (19));

} else {
var statearr_27907_27971 = state_27838__$1;
(statearr_27907_27971[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (38))){
var inst_27817 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27908_27972 = state_27838__$1;
(statearr_27908_27972[(2)] = inst_27817);

(statearr_27908_27972[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (30))){
var state_27838__$1 = state_27838;
var statearr_27909_27973 = state_27838__$1;
(statearr_27909_27973[(2)] = null);

(statearr_27909_27973[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (10))){
var inst_27720 = (state_27838[(14)]);
var inst_27722 = (state_27838[(17)]);
var inst_27728 = cljs.core._nth.call(null,inst_27720,inst_27722);
var inst_27729 = cljs.core.nth.call(null,inst_27728,(0),null);
var inst_27730 = cljs.core.nth.call(null,inst_27728,(1),null);
var state_27838__$1 = (function (){var statearr_27910 = state_27838;
(statearr_27910[(26)] = inst_27729);

return statearr_27910;
})();
if(cljs.core.truth_(inst_27730)){
var statearr_27911_27974 = state_27838__$1;
(statearr_27911_27974[(1)] = (13));

} else {
var statearr_27912_27975 = state_27838__$1;
(statearr_27912_27975[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (18))){
var inst_27763 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27913_27976 = state_27838__$1;
(statearr_27913_27976[(2)] = inst_27763);

(statearr_27913_27976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (42))){
var state_27838__$1 = state_27838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27838__$1,(45),dchan);
} else {
if((state_val_27839 === (37))){
var inst_27806 = (state_27838[(23)]);
var inst_27797 = (state_27838[(25)]);
var inst_27710 = (state_27838[(12)]);
var inst_27806__$1 = cljs.core.first.call(null,inst_27797);
var inst_27807 = cljs.core.async.put_BANG_.call(null,inst_27806__$1,inst_27710,done);
var state_27838__$1 = (function (){var statearr_27914 = state_27838;
(statearr_27914[(23)] = inst_27806__$1);

return statearr_27914;
})();
if(cljs.core.truth_(inst_27807)){
var statearr_27915_27977 = state_27838__$1;
(statearr_27915_27977[(1)] = (39));

} else {
var statearr_27916_27978 = state_27838__$1;
(statearr_27916_27978[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (8))){
var inst_27721 = (state_27838[(16)]);
var inst_27722 = (state_27838[(17)]);
var inst_27724 = (inst_27722 < inst_27721);
var inst_27725 = inst_27724;
var state_27838__$1 = state_27838;
if(cljs.core.truth_(inst_27725)){
var statearr_27917_27979 = state_27838__$1;
(statearr_27917_27979[(1)] = (10));

} else {
var statearr_27918_27980 = state_27838__$1;
(statearr_27918_27980[(1)] = (11));

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
}
}
});})(c__22838__auto___27926,cs,m,dchan,dctr,done))
;
return ((function (switch__22773__auto__,c__22838__auto___27926,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22774__auto__ = null;
var cljs$core$async$mult_$_state_machine__22774__auto____0 = (function (){
var statearr_27922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27922[(0)] = cljs$core$async$mult_$_state_machine__22774__auto__);

(statearr_27922[(1)] = (1));

return statearr_27922;
});
var cljs$core$async$mult_$_state_machine__22774__auto____1 = (function (state_27838){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_27838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e27923){if((e27923 instanceof Object)){
var ex__22777__auto__ = e27923;
var statearr_27924_27981 = state_27838;
(statearr_27924_27981[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27982 = state_27838;
state_27838 = G__27982;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22774__auto__ = function(state_27838){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22774__auto____1.call(this,state_27838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22774__auto____0;
cljs$core$async$mult_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22774__auto____1;
return cljs$core$async$mult_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___27926,cs,m,dchan,dctr,done))
})();
var state__22840__auto__ = (function (){var statearr_27925 = f__22839__auto__.call(null);
(statearr_27925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___27926);

return statearr_27925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___27926,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args27983 = [];
var len__19638__auto___27986 = arguments.length;
var i__19639__auto___27987 = (0);
while(true){
if((i__19639__auto___27987 < len__19638__auto___27986)){
args27983.push((arguments[i__19639__auto___27987]));

var G__27988 = (i__19639__auto___27987 + (1));
i__19639__auto___27987 = G__27988;
continue;
} else {
}
break;
}

var G__27985 = args27983.length;
switch (G__27985) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27983.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19235__auto__ = (((m == null))?null:m);
var m__19236__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,m,ch);
} else {
var m__19236__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19235__auto__ = (((m == null))?null:m);
var m__19236__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,m,ch);
} else {
var m__19236__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19235__auto__ = (((m == null))?null:m);
var m__19236__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,m);
} else {
var m__19236__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19235__auto__ = (((m == null))?null:m);
var m__19236__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,m,state_map);
} else {
var m__19236__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19235__auto__ = (((m == null))?null:m);
var m__19236__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,m,mode);
} else {
var m__19236__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19645__auto__ = [];
var len__19638__auto___28000 = arguments.length;
var i__19639__auto___28001 = (0);
while(true){
if((i__19639__auto___28001 < len__19638__auto___28000)){
args__19645__auto__.push((arguments[i__19639__auto___28001]));

var G__28002 = (i__19639__auto___28001 + (1));
i__19639__auto___28001 = G__28002;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((3) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19646__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27994){
var map__27995 = p__27994;
var map__27995__$1 = ((((!((map__27995 == null)))?((((map__27995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27995):map__27995);
var opts = map__27995__$1;
var statearr_27997_28003 = state;
(statearr_27997_28003[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__27995,map__27995__$1,opts){
return (function (val){
var statearr_27998_28004 = state;
(statearr_27998_28004[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27995,map__27995__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_27999_28005 = state;
(statearr_27999_28005[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27990){
var G__27991 = cljs.core.first.call(null,seq27990);
var seq27990__$1 = cljs.core.next.call(null,seq27990);
var G__27992 = cljs.core.first.call(null,seq27990__$1);
var seq27990__$2 = cljs.core.next.call(null,seq27990__$1);
var G__27993 = cljs.core.first.call(null,seq27990__$2);
var seq27990__$3 = cljs.core.next.call(null,seq27990__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27991,G__27992,G__27993,seq27990__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28169 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28170){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28170 = meta28170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28171,meta28170__$1){
var self__ = this;
var _28171__$1 = this;
return (new cljs.core.async.t_cljs$core$async28169(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28170__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28171){
var self__ = this;
var _28171__$1 = this;
return self__.meta28170;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28170","meta28170",1383635354,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28169";

cljs.core.async.t_cljs$core$async28169.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cljs.core.async/t_cljs$core$async28169");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28169 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28169(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28170){
return (new cljs.core.async.t_cljs$core$async28169(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28170));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28169(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22838__auto___28332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___28332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___28332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28269){
var state_val_28270 = (state_28269[(1)]);
if((state_val_28270 === (7))){
var inst_28187 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28271_28333 = state_28269__$1;
(statearr_28271_28333[(2)] = inst_28187);

(statearr_28271_28333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (20))){
var inst_28199 = (state_28269[(7)]);
var state_28269__$1 = state_28269;
var statearr_28272_28334 = state_28269__$1;
(statearr_28272_28334[(2)] = inst_28199);

(statearr_28272_28334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (27))){
var state_28269__$1 = state_28269;
var statearr_28273_28335 = state_28269__$1;
(statearr_28273_28335[(2)] = null);

(statearr_28273_28335[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (1))){
var inst_28175 = (state_28269[(8)]);
var inst_28175__$1 = calc_state.call(null);
var inst_28177 = (inst_28175__$1 == null);
var inst_28178 = cljs.core.not.call(null,inst_28177);
var state_28269__$1 = (function (){var statearr_28274 = state_28269;
(statearr_28274[(8)] = inst_28175__$1);

return statearr_28274;
})();
if(inst_28178){
var statearr_28275_28336 = state_28269__$1;
(statearr_28275_28336[(1)] = (2));

} else {
var statearr_28276_28337 = state_28269__$1;
(statearr_28276_28337[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (24))){
var inst_28222 = (state_28269[(9)]);
var inst_28243 = (state_28269[(10)]);
var inst_28229 = (state_28269[(11)]);
var inst_28243__$1 = inst_28222.call(null,inst_28229);
var state_28269__$1 = (function (){var statearr_28277 = state_28269;
(statearr_28277[(10)] = inst_28243__$1);

return statearr_28277;
})();
if(cljs.core.truth_(inst_28243__$1)){
var statearr_28278_28338 = state_28269__$1;
(statearr_28278_28338[(1)] = (29));

} else {
var statearr_28279_28339 = state_28269__$1;
(statearr_28279_28339[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (4))){
var inst_28190 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28190)){
var statearr_28280_28340 = state_28269__$1;
(statearr_28280_28340[(1)] = (8));

} else {
var statearr_28281_28341 = state_28269__$1;
(statearr_28281_28341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (15))){
var inst_28216 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28216)){
var statearr_28282_28342 = state_28269__$1;
(statearr_28282_28342[(1)] = (19));

} else {
var statearr_28283_28343 = state_28269__$1;
(statearr_28283_28343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (21))){
var inst_28221 = (state_28269[(12)]);
var inst_28221__$1 = (state_28269[(2)]);
var inst_28222 = cljs.core.get.call(null,inst_28221__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28223 = cljs.core.get.call(null,inst_28221__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28224 = cljs.core.get.call(null,inst_28221__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28269__$1 = (function (){var statearr_28284 = state_28269;
(statearr_28284[(9)] = inst_28222);

(statearr_28284[(12)] = inst_28221__$1);

(statearr_28284[(13)] = inst_28223);

return statearr_28284;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28269__$1,(22),inst_28224);
} else {
if((state_val_28270 === (31))){
var inst_28251 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28251)){
var statearr_28285_28344 = state_28269__$1;
(statearr_28285_28344[(1)] = (32));

} else {
var statearr_28286_28345 = state_28269__$1;
(statearr_28286_28345[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (32))){
var inst_28228 = (state_28269[(14)]);
var state_28269__$1 = state_28269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28269__$1,(35),out,inst_28228);
} else {
if((state_val_28270 === (33))){
var inst_28221 = (state_28269[(12)]);
var inst_28199 = inst_28221;
var state_28269__$1 = (function (){var statearr_28287 = state_28269;
(statearr_28287[(7)] = inst_28199);

return statearr_28287;
})();
var statearr_28288_28346 = state_28269__$1;
(statearr_28288_28346[(2)] = null);

(statearr_28288_28346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (13))){
var inst_28199 = (state_28269[(7)]);
var inst_28206 = inst_28199.cljs$lang$protocol_mask$partition0$;
var inst_28207 = (inst_28206 & (64));
var inst_28208 = inst_28199.cljs$core$ISeq$;
var inst_28209 = (inst_28207) || (inst_28208);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28209)){
var statearr_28289_28347 = state_28269__$1;
(statearr_28289_28347[(1)] = (16));

} else {
var statearr_28290_28348 = state_28269__$1;
(statearr_28290_28348[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (22))){
var inst_28229 = (state_28269[(11)]);
var inst_28228 = (state_28269[(14)]);
var inst_28227 = (state_28269[(2)]);
var inst_28228__$1 = cljs.core.nth.call(null,inst_28227,(0),null);
var inst_28229__$1 = cljs.core.nth.call(null,inst_28227,(1),null);
var inst_28230 = (inst_28228__$1 == null);
var inst_28231 = cljs.core._EQ_.call(null,inst_28229__$1,change);
var inst_28232 = (inst_28230) || (inst_28231);
var state_28269__$1 = (function (){var statearr_28291 = state_28269;
(statearr_28291[(11)] = inst_28229__$1);

(statearr_28291[(14)] = inst_28228__$1);

return statearr_28291;
})();
if(cljs.core.truth_(inst_28232)){
var statearr_28292_28349 = state_28269__$1;
(statearr_28292_28349[(1)] = (23));

} else {
var statearr_28293_28350 = state_28269__$1;
(statearr_28293_28350[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (36))){
var inst_28221 = (state_28269[(12)]);
var inst_28199 = inst_28221;
var state_28269__$1 = (function (){var statearr_28294 = state_28269;
(statearr_28294[(7)] = inst_28199);

return statearr_28294;
})();
var statearr_28295_28351 = state_28269__$1;
(statearr_28295_28351[(2)] = null);

(statearr_28295_28351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (29))){
var inst_28243 = (state_28269[(10)]);
var state_28269__$1 = state_28269;
var statearr_28296_28352 = state_28269__$1;
(statearr_28296_28352[(2)] = inst_28243);

(statearr_28296_28352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (6))){
var state_28269__$1 = state_28269;
var statearr_28297_28353 = state_28269__$1;
(statearr_28297_28353[(2)] = false);

(statearr_28297_28353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (28))){
var inst_28239 = (state_28269[(2)]);
var inst_28240 = calc_state.call(null);
var inst_28199 = inst_28240;
var state_28269__$1 = (function (){var statearr_28298 = state_28269;
(statearr_28298[(15)] = inst_28239);

(statearr_28298[(7)] = inst_28199);

return statearr_28298;
})();
var statearr_28299_28354 = state_28269__$1;
(statearr_28299_28354[(2)] = null);

(statearr_28299_28354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (25))){
var inst_28265 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28300_28355 = state_28269__$1;
(statearr_28300_28355[(2)] = inst_28265);

(statearr_28300_28355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (34))){
var inst_28263 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28301_28356 = state_28269__$1;
(statearr_28301_28356[(2)] = inst_28263);

(statearr_28301_28356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (17))){
var state_28269__$1 = state_28269;
var statearr_28302_28357 = state_28269__$1;
(statearr_28302_28357[(2)] = false);

(statearr_28302_28357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (3))){
var state_28269__$1 = state_28269;
var statearr_28303_28358 = state_28269__$1;
(statearr_28303_28358[(2)] = false);

(statearr_28303_28358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (12))){
var inst_28267 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28269__$1,inst_28267);
} else {
if((state_val_28270 === (2))){
var inst_28175 = (state_28269[(8)]);
var inst_28180 = inst_28175.cljs$lang$protocol_mask$partition0$;
var inst_28181 = (inst_28180 & (64));
var inst_28182 = inst_28175.cljs$core$ISeq$;
var inst_28183 = (inst_28181) || (inst_28182);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28183)){
var statearr_28304_28359 = state_28269__$1;
(statearr_28304_28359[(1)] = (5));

} else {
var statearr_28305_28360 = state_28269__$1;
(statearr_28305_28360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (23))){
var inst_28228 = (state_28269[(14)]);
var inst_28234 = (inst_28228 == null);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28234)){
var statearr_28306_28361 = state_28269__$1;
(statearr_28306_28361[(1)] = (26));

} else {
var statearr_28307_28362 = state_28269__$1;
(statearr_28307_28362[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (35))){
var inst_28254 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28254)){
var statearr_28308_28363 = state_28269__$1;
(statearr_28308_28363[(1)] = (36));

} else {
var statearr_28309_28364 = state_28269__$1;
(statearr_28309_28364[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (19))){
var inst_28199 = (state_28269[(7)]);
var inst_28218 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28199);
var state_28269__$1 = state_28269;
var statearr_28310_28365 = state_28269__$1;
(statearr_28310_28365[(2)] = inst_28218);

(statearr_28310_28365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (11))){
var inst_28199 = (state_28269[(7)]);
var inst_28203 = (inst_28199 == null);
var inst_28204 = cljs.core.not.call(null,inst_28203);
var state_28269__$1 = state_28269;
if(inst_28204){
var statearr_28311_28366 = state_28269__$1;
(statearr_28311_28366[(1)] = (13));

} else {
var statearr_28312_28367 = state_28269__$1;
(statearr_28312_28367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (9))){
var inst_28175 = (state_28269[(8)]);
var state_28269__$1 = state_28269;
var statearr_28313_28368 = state_28269__$1;
(statearr_28313_28368[(2)] = inst_28175);

(statearr_28313_28368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (5))){
var state_28269__$1 = state_28269;
var statearr_28314_28369 = state_28269__$1;
(statearr_28314_28369[(2)] = true);

(statearr_28314_28369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (14))){
var state_28269__$1 = state_28269;
var statearr_28315_28370 = state_28269__$1;
(statearr_28315_28370[(2)] = false);

(statearr_28315_28370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (26))){
var inst_28229 = (state_28269[(11)]);
var inst_28236 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28229);
var state_28269__$1 = state_28269;
var statearr_28316_28371 = state_28269__$1;
(statearr_28316_28371[(2)] = inst_28236);

(statearr_28316_28371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (16))){
var state_28269__$1 = state_28269;
var statearr_28317_28372 = state_28269__$1;
(statearr_28317_28372[(2)] = true);

(statearr_28317_28372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (38))){
var inst_28259 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28318_28373 = state_28269__$1;
(statearr_28318_28373[(2)] = inst_28259);

(statearr_28318_28373[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (30))){
var inst_28222 = (state_28269[(9)]);
var inst_28229 = (state_28269[(11)]);
var inst_28223 = (state_28269[(13)]);
var inst_28246 = cljs.core.empty_QMARK_.call(null,inst_28222);
var inst_28247 = inst_28223.call(null,inst_28229);
var inst_28248 = cljs.core.not.call(null,inst_28247);
var inst_28249 = (inst_28246) && (inst_28248);
var state_28269__$1 = state_28269;
var statearr_28319_28374 = state_28269__$1;
(statearr_28319_28374[(2)] = inst_28249);

(statearr_28319_28374[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (10))){
var inst_28175 = (state_28269[(8)]);
var inst_28195 = (state_28269[(2)]);
var inst_28196 = cljs.core.get.call(null,inst_28195,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28197 = cljs.core.get.call(null,inst_28195,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28198 = cljs.core.get.call(null,inst_28195,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28199 = inst_28175;
var state_28269__$1 = (function (){var statearr_28320 = state_28269;
(statearr_28320[(16)] = inst_28196);

(statearr_28320[(7)] = inst_28199);

(statearr_28320[(17)] = inst_28197);

(statearr_28320[(18)] = inst_28198);

return statearr_28320;
})();
var statearr_28321_28375 = state_28269__$1;
(statearr_28321_28375[(2)] = null);

(statearr_28321_28375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (18))){
var inst_28213 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28322_28376 = state_28269__$1;
(statearr_28322_28376[(2)] = inst_28213);

(statearr_28322_28376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (37))){
var state_28269__$1 = state_28269;
var statearr_28323_28377 = state_28269__$1;
(statearr_28323_28377[(2)] = null);

(statearr_28323_28377[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (8))){
var inst_28175 = (state_28269[(8)]);
var inst_28192 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28175);
var state_28269__$1 = state_28269;
var statearr_28324_28378 = state_28269__$1;
(statearr_28324_28378[(2)] = inst_28192);

(statearr_28324_28378[(1)] = (10));


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
});})(c__22838__auto___28332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22773__auto__,c__22838__auto___28332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22774__auto__ = null;
var cljs$core$async$mix_$_state_machine__22774__auto____0 = (function (){
var statearr_28328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28328[(0)] = cljs$core$async$mix_$_state_machine__22774__auto__);

(statearr_28328[(1)] = (1));

return statearr_28328;
});
var cljs$core$async$mix_$_state_machine__22774__auto____1 = (function (state_28269){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_28269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e28329){if((e28329 instanceof Object)){
var ex__22777__auto__ = e28329;
var statearr_28330_28379 = state_28269;
(statearr_28330_28379[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28380 = state_28269;
state_28269 = G__28380;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22774__auto__ = function(state_28269){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22774__auto____1.call(this,state_28269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22774__auto____0;
cljs$core$async$mix_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22774__auto____1;
return cljs$core$async$mix_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___28332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22840__auto__ = (function (){var statearr_28331 = f__22839__auto__.call(null);
(statearr_28331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___28332);

return statearr_28331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___28332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19235__auto__ = (((p == null))?null:p);
var m__19236__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19236__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19235__auto__ = (((p == null))?null:p);
var m__19236__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,p,v,ch);
} else {
var m__19236__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28381 = [];
var len__19638__auto___28384 = arguments.length;
var i__19639__auto___28385 = (0);
while(true){
if((i__19639__auto___28385 < len__19638__auto___28384)){
args28381.push((arguments[i__19639__auto___28385]));

var G__28386 = (i__19639__auto___28385 + (1));
i__19639__auto___28385 = G__28386;
continue;
} else {
}
break;
}

var G__28383 = args28381.length;
switch (G__28383) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28381.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19235__auto__ = (((p == null))?null:p);
var m__19236__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,p);
} else {
var m__19236__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19235__auto__ = (((p == null))?null:p);
var m__19236__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19235__auto__)]);
if(!((m__19236__auto__ == null))){
return m__19236__auto__.call(null,p,v);
} else {
var m__19236__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19236__auto____$1 == null))){
return m__19236__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28389 = [];
var len__19638__auto___28514 = arguments.length;
var i__19639__auto___28515 = (0);
while(true){
if((i__19639__auto___28515 < len__19638__auto___28514)){
args28389.push((arguments[i__19639__auto___28515]));

var G__28516 = (i__19639__auto___28515 + (1));
i__19639__auto___28515 = G__28516;
continue;
} else {
}
break;
}

var G__28391 = args28389.length;
switch (G__28391) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28389.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18580__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18580__auto__,mults){
return (function (p1__28388_SHARP_){
if(cljs.core.truth_(p1__28388_SHARP_.call(null,topic))){
return p1__28388_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28388_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18580__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28392 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28393){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28393 = meta28393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28394,meta28393__$1){
var self__ = this;
var _28394__$1 = this;
return (new cljs.core.async.t_cljs$core$async28392(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28393__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28394){
var self__ = this;
var _28394__$1 = this;
return self__.meta28393;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28392.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28392.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28392.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28392.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28392.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28392.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28392.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28392.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28393","meta28393",-446295712,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28392";

cljs.core.async.t_cljs$core$async28392.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cljs.core.async/t_cljs$core$async28392");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28392 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28392(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28393){
return (new cljs.core.async.t_cljs$core$async28392(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28393));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28392(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22838__auto___28518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___28518,mults,ensure_mult,p){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___28518,mults,ensure_mult,p){
return (function (state_28466){
var state_val_28467 = (state_28466[(1)]);
if((state_val_28467 === (7))){
var inst_28462 = (state_28466[(2)]);
var state_28466__$1 = state_28466;
var statearr_28468_28519 = state_28466__$1;
(statearr_28468_28519[(2)] = inst_28462);

(statearr_28468_28519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (20))){
var state_28466__$1 = state_28466;
var statearr_28469_28520 = state_28466__$1;
(statearr_28469_28520[(2)] = null);

(statearr_28469_28520[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (1))){
var state_28466__$1 = state_28466;
var statearr_28470_28521 = state_28466__$1;
(statearr_28470_28521[(2)] = null);

(statearr_28470_28521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (24))){
var inst_28445 = (state_28466[(7)]);
var inst_28454 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28445);
var state_28466__$1 = state_28466;
var statearr_28471_28522 = state_28466__$1;
(statearr_28471_28522[(2)] = inst_28454);

(statearr_28471_28522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (4))){
var inst_28397 = (state_28466[(8)]);
var inst_28397__$1 = (state_28466[(2)]);
var inst_28398 = (inst_28397__$1 == null);
var state_28466__$1 = (function (){var statearr_28472 = state_28466;
(statearr_28472[(8)] = inst_28397__$1);

return statearr_28472;
})();
if(cljs.core.truth_(inst_28398)){
var statearr_28473_28523 = state_28466__$1;
(statearr_28473_28523[(1)] = (5));

} else {
var statearr_28474_28524 = state_28466__$1;
(statearr_28474_28524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (15))){
var inst_28439 = (state_28466[(2)]);
var state_28466__$1 = state_28466;
var statearr_28475_28525 = state_28466__$1;
(statearr_28475_28525[(2)] = inst_28439);

(statearr_28475_28525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (21))){
var inst_28459 = (state_28466[(2)]);
var state_28466__$1 = (function (){var statearr_28476 = state_28466;
(statearr_28476[(9)] = inst_28459);

return statearr_28476;
})();
var statearr_28477_28526 = state_28466__$1;
(statearr_28477_28526[(2)] = null);

(statearr_28477_28526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (13))){
var inst_28421 = (state_28466[(10)]);
var inst_28423 = cljs.core.chunked_seq_QMARK_.call(null,inst_28421);
var state_28466__$1 = state_28466;
if(inst_28423){
var statearr_28478_28527 = state_28466__$1;
(statearr_28478_28527[(1)] = (16));

} else {
var statearr_28479_28528 = state_28466__$1;
(statearr_28479_28528[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (22))){
var inst_28451 = (state_28466[(2)]);
var state_28466__$1 = state_28466;
if(cljs.core.truth_(inst_28451)){
var statearr_28480_28529 = state_28466__$1;
(statearr_28480_28529[(1)] = (23));

} else {
var statearr_28481_28530 = state_28466__$1;
(statearr_28481_28530[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (6))){
var inst_28397 = (state_28466[(8)]);
var inst_28447 = (state_28466[(11)]);
var inst_28445 = (state_28466[(7)]);
var inst_28445__$1 = topic_fn.call(null,inst_28397);
var inst_28446 = cljs.core.deref.call(null,mults);
var inst_28447__$1 = cljs.core.get.call(null,inst_28446,inst_28445__$1);
var state_28466__$1 = (function (){var statearr_28482 = state_28466;
(statearr_28482[(11)] = inst_28447__$1);

(statearr_28482[(7)] = inst_28445__$1);

return statearr_28482;
})();
if(cljs.core.truth_(inst_28447__$1)){
var statearr_28483_28531 = state_28466__$1;
(statearr_28483_28531[(1)] = (19));

} else {
var statearr_28484_28532 = state_28466__$1;
(statearr_28484_28532[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (25))){
var inst_28456 = (state_28466[(2)]);
var state_28466__$1 = state_28466;
var statearr_28485_28533 = state_28466__$1;
(statearr_28485_28533[(2)] = inst_28456);

(statearr_28485_28533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (17))){
var inst_28421 = (state_28466[(10)]);
var inst_28430 = cljs.core.first.call(null,inst_28421);
var inst_28431 = cljs.core.async.muxch_STAR_.call(null,inst_28430);
var inst_28432 = cljs.core.async.close_BANG_.call(null,inst_28431);
var inst_28433 = cljs.core.next.call(null,inst_28421);
var inst_28407 = inst_28433;
var inst_28408 = null;
var inst_28409 = (0);
var inst_28410 = (0);
var state_28466__$1 = (function (){var statearr_28486 = state_28466;
(statearr_28486[(12)] = inst_28409);

(statearr_28486[(13)] = inst_28432);

(statearr_28486[(14)] = inst_28407);

(statearr_28486[(15)] = inst_28408);

(statearr_28486[(16)] = inst_28410);

return statearr_28486;
})();
var statearr_28487_28534 = state_28466__$1;
(statearr_28487_28534[(2)] = null);

(statearr_28487_28534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (3))){
var inst_28464 = (state_28466[(2)]);
var state_28466__$1 = state_28466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28466__$1,inst_28464);
} else {
if((state_val_28467 === (12))){
var inst_28441 = (state_28466[(2)]);
var state_28466__$1 = state_28466;
var statearr_28488_28535 = state_28466__$1;
(statearr_28488_28535[(2)] = inst_28441);

(statearr_28488_28535[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (2))){
var state_28466__$1 = state_28466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28466__$1,(4),ch);
} else {
if((state_val_28467 === (23))){
var state_28466__$1 = state_28466;
var statearr_28489_28536 = state_28466__$1;
(statearr_28489_28536[(2)] = null);

(statearr_28489_28536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (19))){
var inst_28397 = (state_28466[(8)]);
var inst_28447 = (state_28466[(11)]);
var inst_28449 = cljs.core.async.muxch_STAR_.call(null,inst_28447);
var state_28466__$1 = state_28466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28466__$1,(22),inst_28449,inst_28397);
} else {
if((state_val_28467 === (11))){
var inst_28407 = (state_28466[(14)]);
var inst_28421 = (state_28466[(10)]);
var inst_28421__$1 = cljs.core.seq.call(null,inst_28407);
var state_28466__$1 = (function (){var statearr_28490 = state_28466;
(statearr_28490[(10)] = inst_28421__$1);

return statearr_28490;
})();
if(inst_28421__$1){
var statearr_28491_28537 = state_28466__$1;
(statearr_28491_28537[(1)] = (13));

} else {
var statearr_28492_28538 = state_28466__$1;
(statearr_28492_28538[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (9))){
var inst_28443 = (state_28466[(2)]);
var state_28466__$1 = state_28466;
var statearr_28493_28539 = state_28466__$1;
(statearr_28493_28539[(2)] = inst_28443);

(statearr_28493_28539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (5))){
var inst_28404 = cljs.core.deref.call(null,mults);
var inst_28405 = cljs.core.vals.call(null,inst_28404);
var inst_28406 = cljs.core.seq.call(null,inst_28405);
var inst_28407 = inst_28406;
var inst_28408 = null;
var inst_28409 = (0);
var inst_28410 = (0);
var state_28466__$1 = (function (){var statearr_28494 = state_28466;
(statearr_28494[(12)] = inst_28409);

(statearr_28494[(14)] = inst_28407);

(statearr_28494[(15)] = inst_28408);

(statearr_28494[(16)] = inst_28410);

return statearr_28494;
})();
var statearr_28495_28540 = state_28466__$1;
(statearr_28495_28540[(2)] = null);

(statearr_28495_28540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (14))){
var state_28466__$1 = state_28466;
var statearr_28499_28541 = state_28466__$1;
(statearr_28499_28541[(2)] = null);

(statearr_28499_28541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (16))){
var inst_28421 = (state_28466[(10)]);
var inst_28425 = cljs.core.chunk_first.call(null,inst_28421);
var inst_28426 = cljs.core.chunk_rest.call(null,inst_28421);
var inst_28427 = cljs.core.count.call(null,inst_28425);
var inst_28407 = inst_28426;
var inst_28408 = inst_28425;
var inst_28409 = inst_28427;
var inst_28410 = (0);
var state_28466__$1 = (function (){var statearr_28500 = state_28466;
(statearr_28500[(12)] = inst_28409);

(statearr_28500[(14)] = inst_28407);

(statearr_28500[(15)] = inst_28408);

(statearr_28500[(16)] = inst_28410);

return statearr_28500;
})();
var statearr_28501_28542 = state_28466__$1;
(statearr_28501_28542[(2)] = null);

(statearr_28501_28542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (10))){
var inst_28409 = (state_28466[(12)]);
var inst_28407 = (state_28466[(14)]);
var inst_28408 = (state_28466[(15)]);
var inst_28410 = (state_28466[(16)]);
var inst_28415 = cljs.core._nth.call(null,inst_28408,inst_28410);
var inst_28416 = cljs.core.async.muxch_STAR_.call(null,inst_28415);
var inst_28417 = cljs.core.async.close_BANG_.call(null,inst_28416);
var inst_28418 = (inst_28410 + (1));
var tmp28496 = inst_28409;
var tmp28497 = inst_28407;
var tmp28498 = inst_28408;
var inst_28407__$1 = tmp28497;
var inst_28408__$1 = tmp28498;
var inst_28409__$1 = tmp28496;
var inst_28410__$1 = inst_28418;
var state_28466__$1 = (function (){var statearr_28502 = state_28466;
(statearr_28502[(12)] = inst_28409__$1);

(statearr_28502[(17)] = inst_28417);

(statearr_28502[(14)] = inst_28407__$1);

(statearr_28502[(15)] = inst_28408__$1);

(statearr_28502[(16)] = inst_28410__$1);

return statearr_28502;
})();
var statearr_28503_28543 = state_28466__$1;
(statearr_28503_28543[(2)] = null);

(statearr_28503_28543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (18))){
var inst_28436 = (state_28466[(2)]);
var state_28466__$1 = state_28466;
var statearr_28504_28544 = state_28466__$1;
(statearr_28504_28544[(2)] = inst_28436);

(statearr_28504_28544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28467 === (8))){
var inst_28409 = (state_28466[(12)]);
var inst_28410 = (state_28466[(16)]);
var inst_28412 = (inst_28410 < inst_28409);
var inst_28413 = inst_28412;
var state_28466__$1 = state_28466;
if(cljs.core.truth_(inst_28413)){
var statearr_28505_28545 = state_28466__$1;
(statearr_28505_28545[(1)] = (10));

} else {
var statearr_28506_28546 = state_28466__$1;
(statearr_28506_28546[(1)] = (11));

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
});})(c__22838__auto___28518,mults,ensure_mult,p))
;
return ((function (switch__22773__auto__,c__22838__auto___28518,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22774__auto__ = null;
var cljs$core$async$state_machine__22774__auto____0 = (function (){
var statearr_28510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28510[(0)] = cljs$core$async$state_machine__22774__auto__);

(statearr_28510[(1)] = (1));

return statearr_28510;
});
var cljs$core$async$state_machine__22774__auto____1 = (function (state_28466){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_28466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e28511){if((e28511 instanceof Object)){
var ex__22777__auto__ = e28511;
var statearr_28512_28547 = state_28466;
(statearr_28512_28547[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28548 = state_28466;
state_28466 = G__28548;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$state_machine__22774__auto__ = function(state_28466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22774__auto____1.call(this,state_28466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22774__auto____0;
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22774__auto____1;
return cljs$core$async$state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___28518,mults,ensure_mult,p))
})();
var state__22840__auto__ = (function (){var statearr_28513 = f__22839__auto__.call(null);
(statearr_28513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___28518);

return statearr_28513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___28518,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28549 = [];
var len__19638__auto___28552 = arguments.length;
var i__19639__auto___28553 = (0);
while(true){
if((i__19639__auto___28553 < len__19638__auto___28552)){
args28549.push((arguments[i__19639__auto___28553]));

var G__28554 = (i__19639__auto___28553 + (1));
i__19639__auto___28553 = G__28554;
continue;
} else {
}
break;
}

var G__28551 = args28549.length;
switch (G__28551) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28549.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28556 = [];
var len__19638__auto___28559 = arguments.length;
var i__19639__auto___28560 = (0);
while(true){
if((i__19639__auto___28560 < len__19638__auto___28559)){
args28556.push((arguments[i__19639__auto___28560]));

var G__28561 = (i__19639__auto___28560 + (1));
i__19639__auto___28560 = G__28561;
continue;
} else {
}
break;
}

var G__28558 = args28556.length;
switch (G__28558) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28556.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28563 = [];
var len__19638__auto___28634 = arguments.length;
var i__19639__auto___28635 = (0);
while(true){
if((i__19639__auto___28635 < len__19638__auto___28634)){
args28563.push((arguments[i__19639__auto___28635]));

var G__28636 = (i__19639__auto___28635 + (1));
i__19639__auto___28635 = G__28636;
continue;
} else {
}
break;
}

var G__28565 = args28563.length;
switch (G__28565) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28563.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22838__auto___28638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___28638,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___28638,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28604){
var state_val_28605 = (state_28604[(1)]);
if((state_val_28605 === (7))){
var state_28604__$1 = state_28604;
var statearr_28606_28639 = state_28604__$1;
(statearr_28606_28639[(2)] = null);

(statearr_28606_28639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (1))){
var state_28604__$1 = state_28604;
var statearr_28607_28640 = state_28604__$1;
(statearr_28607_28640[(2)] = null);

(statearr_28607_28640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (4))){
var inst_28568 = (state_28604[(7)]);
var inst_28570 = (inst_28568 < cnt);
var state_28604__$1 = state_28604;
if(cljs.core.truth_(inst_28570)){
var statearr_28608_28641 = state_28604__$1;
(statearr_28608_28641[(1)] = (6));

} else {
var statearr_28609_28642 = state_28604__$1;
(statearr_28609_28642[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (15))){
var inst_28600 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28610_28643 = state_28604__$1;
(statearr_28610_28643[(2)] = inst_28600);

(statearr_28610_28643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (13))){
var inst_28593 = cljs.core.async.close_BANG_.call(null,out);
var state_28604__$1 = state_28604;
var statearr_28611_28644 = state_28604__$1;
(statearr_28611_28644[(2)] = inst_28593);

(statearr_28611_28644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (6))){
var state_28604__$1 = state_28604;
var statearr_28612_28645 = state_28604__$1;
(statearr_28612_28645[(2)] = null);

(statearr_28612_28645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (3))){
var inst_28602 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28604__$1,inst_28602);
} else {
if((state_val_28605 === (12))){
var inst_28590 = (state_28604[(8)]);
var inst_28590__$1 = (state_28604[(2)]);
var inst_28591 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28590__$1);
var state_28604__$1 = (function (){var statearr_28613 = state_28604;
(statearr_28613[(8)] = inst_28590__$1);

return statearr_28613;
})();
if(cljs.core.truth_(inst_28591)){
var statearr_28614_28646 = state_28604__$1;
(statearr_28614_28646[(1)] = (13));

} else {
var statearr_28615_28647 = state_28604__$1;
(statearr_28615_28647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (2))){
var inst_28567 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28568 = (0);
var state_28604__$1 = (function (){var statearr_28616 = state_28604;
(statearr_28616[(7)] = inst_28568);

(statearr_28616[(9)] = inst_28567);

return statearr_28616;
})();
var statearr_28617_28648 = state_28604__$1;
(statearr_28617_28648[(2)] = null);

(statearr_28617_28648[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (11))){
var inst_28568 = (state_28604[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28604,(10),Object,null,(9));
var inst_28577 = chs__$1.call(null,inst_28568);
var inst_28578 = done.call(null,inst_28568);
var inst_28579 = cljs.core.async.take_BANG_.call(null,inst_28577,inst_28578);
var state_28604__$1 = state_28604;
var statearr_28618_28649 = state_28604__$1;
(statearr_28618_28649[(2)] = inst_28579);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28604__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (9))){
var inst_28568 = (state_28604[(7)]);
var inst_28581 = (state_28604[(2)]);
var inst_28582 = (inst_28568 + (1));
var inst_28568__$1 = inst_28582;
var state_28604__$1 = (function (){var statearr_28619 = state_28604;
(statearr_28619[(7)] = inst_28568__$1);

(statearr_28619[(10)] = inst_28581);

return statearr_28619;
})();
var statearr_28620_28650 = state_28604__$1;
(statearr_28620_28650[(2)] = null);

(statearr_28620_28650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (5))){
var inst_28588 = (state_28604[(2)]);
var state_28604__$1 = (function (){var statearr_28621 = state_28604;
(statearr_28621[(11)] = inst_28588);

return statearr_28621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28604__$1,(12),dchan);
} else {
if((state_val_28605 === (14))){
var inst_28590 = (state_28604[(8)]);
var inst_28595 = cljs.core.apply.call(null,f,inst_28590);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28604__$1,(16),out,inst_28595);
} else {
if((state_val_28605 === (16))){
var inst_28597 = (state_28604[(2)]);
var state_28604__$1 = (function (){var statearr_28622 = state_28604;
(statearr_28622[(12)] = inst_28597);

return statearr_28622;
})();
var statearr_28623_28651 = state_28604__$1;
(statearr_28623_28651[(2)] = null);

(statearr_28623_28651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (10))){
var inst_28572 = (state_28604[(2)]);
var inst_28573 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28604__$1 = (function (){var statearr_28624 = state_28604;
(statearr_28624[(13)] = inst_28572);

return statearr_28624;
})();
var statearr_28625_28652 = state_28604__$1;
(statearr_28625_28652[(2)] = inst_28573);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28604__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (8))){
var inst_28586 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28626_28653 = state_28604__$1;
(statearr_28626_28653[(2)] = inst_28586);

(statearr_28626_28653[(1)] = (5));


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
});})(c__22838__auto___28638,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22773__auto__,c__22838__auto___28638,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22774__auto__ = null;
var cljs$core$async$state_machine__22774__auto____0 = (function (){
var statearr_28630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28630[(0)] = cljs$core$async$state_machine__22774__auto__);

(statearr_28630[(1)] = (1));

return statearr_28630;
});
var cljs$core$async$state_machine__22774__auto____1 = (function (state_28604){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_28604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e28631){if((e28631 instanceof Object)){
var ex__22777__auto__ = e28631;
var statearr_28632_28654 = state_28604;
(statearr_28632_28654[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28655 = state_28604;
state_28604 = G__28655;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$state_machine__22774__auto__ = function(state_28604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22774__auto____1.call(this,state_28604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22774__auto____0;
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22774__auto____1;
return cljs$core$async$state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___28638,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22840__auto__ = (function (){var statearr_28633 = f__22839__auto__.call(null);
(statearr_28633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___28638);

return statearr_28633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___28638,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28657 = [];
var len__19638__auto___28713 = arguments.length;
var i__19639__auto___28714 = (0);
while(true){
if((i__19639__auto___28714 < len__19638__auto___28713)){
args28657.push((arguments[i__19639__auto___28714]));

var G__28715 = (i__19639__auto___28714 + (1));
i__19639__auto___28714 = G__28715;
continue;
} else {
}
break;
}

var G__28659 = args28657.length;
switch (G__28659) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28657.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22838__auto___28717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___28717,out){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___28717,out){
return (function (state_28689){
var state_val_28690 = (state_28689[(1)]);
if((state_val_28690 === (7))){
var inst_28668 = (state_28689[(7)]);
var inst_28669 = (state_28689[(8)]);
var inst_28668__$1 = (state_28689[(2)]);
var inst_28669__$1 = cljs.core.nth.call(null,inst_28668__$1,(0),null);
var inst_28670 = cljs.core.nth.call(null,inst_28668__$1,(1),null);
var inst_28671 = (inst_28669__$1 == null);
var state_28689__$1 = (function (){var statearr_28691 = state_28689;
(statearr_28691[(7)] = inst_28668__$1);

(statearr_28691[(9)] = inst_28670);

(statearr_28691[(8)] = inst_28669__$1);

return statearr_28691;
})();
if(cljs.core.truth_(inst_28671)){
var statearr_28692_28718 = state_28689__$1;
(statearr_28692_28718[(1)] = (8));

} else {
var statearr_28693_28719 = state_28689__$1;
(statearr_28693_28719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (1))){
var inst_28660 = cljs.core.vec.call(null,chs);
var inst_28661 = inst_28660;
var state_28689__$1 = (function (){var statearr_28694 = state_28689;
(statearr_28694[(10)] = inst_28661);

return statearr_28694;
})();
var statearr_28695_28720 = state_28689__$1;
(statearr_28695_28720[(2)] = null);

(statearr_28695_28720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (4))){
var inst_28661 = (state_28689[(10)]);
var state_28689__$1 = state_28689;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28689__$1,(7),inst_28661);
} else {
if((state_val_28690 === (6))){
var inst_28685 = (state_28689[(2)]);
var state_28689__$1 = state_28689;
var statearr_28696_28721 = state_28689__$1;
(statearr_28696_28721[(2)] = inst_28685);

(statearr_28696_28721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (3))){
var inst_28687 = (state_28689[(2)]);
var state_28689__$1 = state_28689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28689__$1,inst_28687);
} else {
if((state_val_28690 === (2))){
var inst_28661 = (state_28689[(10)]);
var inst_28663 = cljs.core.count.call(null,inst_28661);
var inst_28664 = (inst_28663 > (0));
var state_28689__$1 = state_28689;
if(cljs.core.truth_(inst_28664)){
var statearr_28698_28722 = state_28689__$1;
(statearr_28698_28722[(1)] = (4));

} else {
var statearr_28699_28723 = state_28689__$1;
(statearr_28699_28723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (11))){
var inst_28661 = (state_28689[(10)]);
var inst_28678 = (state_28689[(2)]);
var tmp28697 = inst_28661;
var inst_28661__$1 = tmp28697;
var state_28689__$1 = (function (){var statearr_28700 = state_28689;
(statearr_28700[(11)] = inst_28678);

(statearr_28700[(10)] = inst_28661__$1);

return statearr_28700;
})();
var statearr_28701_28724 = state_28689__$1;
(statearr_28701_28724[(2)] = null);

(statearr_28701_28724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (9))){
var inst_28669 = (state_28689[(8)]);
var state_28689__$1 = state_28689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28689__$1,(11),out,inst_28669);
} else {
if((state_val_28690 === (5))){
var inst_28683 = cljs.core.async.close_BANG_.call(null,out);
var state_28689__$1 = state_28689;
var statearr_28702_28725 = state_28689__$1;
(statearr_28702_28725[(2)] = inst_28683);

(statearr_28702_28725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (10))){
var inst_28681 = (state_28689[(2)]);
var state_28689__$1 = state_28689;
var statearr_28703_28726 = state_28689__$1;
(statearr_28703_28726[(2)] = inst_28681);

(statearr_28703_28726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (8))){
var inst_28668 = (state_28689[(7)]);
var inst_28670 = (state_28689[(9)]);
var inst_28661 = (state_28689[(10)]);
var inst_28669 = (state_28689[(8)]);
var inst_28673 = (function (){var cs = inst_28661;
var vec__28666 = inst_28668;
var v = inst_28669;
var c = inst_28670;
return ((function (cs,vec__28666,v,c,inst_28668,inst_28670,inst_28661,inst_28669,state_val_28690,c__22838__auto___28717,out){
return (function (p1__28656_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28656_SHARP_);
});
;})(cs,vec__28666,v,c,inst_28668,inst_28670,inst_28661,inst_28669,state_val_28690,c__22838__auto___28717,out))
})();
var inst_28674 = cljs.core.filterv.call(null,inst_28673,inst_28661);
var inst_28661__$1 = inst_28674;
var state_28689__$1 = (function (){var statearr_28704 = state_28689;
(statearr_28704[(10)] = inst_28661__$1);

return statearr_28704;
})();
var statearr_28705_28727 = state_28689__$1;
(statearr_28705_28727[(2)] = null);

(statearr_28705_28727[(1)] = (2));


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
});})(c__22838__auto___28717,out))
;
return ((function (switch__22773__auto__,c__22838__auto___28717,out){
return (function() {
var cljs$core$async$state_machine__22774__auto__ = null;
var cljs$core$async$state_machine__22774__auto____0 = (function (){
var statearr_28709 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28709[(0)] = cljs$core$async$state_machine__22774__auto__);

(statearr_28709[(1)] = (1));

return statearr_28709;
});
var cljs$core$async$state_machine__22774__auto____1 = (function (state_28689){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_28689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e28710){if((e28710 instanceof Object)){
var ex__22777__auto__ = e28710;
var statearr_28711_28728 = state_28689;
(statearr_28711_28728[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28729 = state_28689;
state_28689 = G__28729;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$state_machine__22774__auto__ = function(state_28689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22774__auto____1.call(this,state_28689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22774__auto____0;
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22774__auto____1;
return cljs$core$async$state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___28717,out))
})();
var state__22840__auto__ = (function (){var statearr_28712 = f__22839__auto__.call(null);
(statearr_28712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___28717);

return statearr_28712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___28717,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28730 = [];
var len__19638__auto___28779 = arguments.length;
var i__19639__auto___28780 = (0);
while(true){
if((i__19639__auto___28780 < len__19638__auto___28779)){
args28730.push((arguments[i__19639__auto___28780]));

var G__28781 = (i__19639__auto___28780 + (1));
i__19639__auto___28780 = G__28781;
continue;
} else {
}
break;
}

var G__28732 = args28730.length;
switch (G__28732) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28730.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22838__auto___28783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___28783,out){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___28783,out){
return (function (state_28756){
var state_val_28757 = (state_28756[(1)]);
if((state_val_28757 === (7))){
var inst_28738 = (state_28756[(7)]);
var inst_28738__$1 = (state_28756[(2)]);
var inst_28739 = (inst_28738__$1 == null);
var inst_28740 = cljs.core.not.call(null,inst_28739);
var state_28756__$1 = (function (){var statearr_28758 = state_28756;
(statearr_28758[(7)] = inst_28738__$1);

return statearr_28758;
})();
if(inst_28740){
var statearr_28759_28784 = state_28756__$1;
(statearr_28759_28784[(1)] = (8));

} else {
var statearr_28760_28785 = state_28756__$1;
(statearr_28760_28785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (1))){
var inst_28733 = (0);
var state_28756__$1 = (function (){var statearr_28761 = state_28756;
(statearr_28761[(8)] = inst_28733);

return statearr_28761;
})();
var statearr_28762_28786 = state_28756__$1;
(statearr_28762_28786[(2)] = null);

(statearr_28762_28786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (4))){
var state_28756__$1 = state_28756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28756__$1,(7),ch);
} else {
if((state_val_28757 === (6))){
var inst_28751 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
var statearr_28763_28787 = state_28756__$1;
(statearr_28763_28787[(2)] = inst_28751);

(statearr_28763_28787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (3))){
var inst_28753 = (state_28756[(2)]);
var inst_28754 = cljs.core.async.close_BANG_.call(null,out);
var state_28756__$1 = (function (){var statearr_28764 = state_28756;
(statearr_28764[(9)] = inst_28753);

return statearr_28764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28756__$1,inst_28754);
} else {
if((state_val_28757 === (2))){
var inst_28733 = (state_28756[(8)]);
var inst_28735 = (inst_28733 < n);
var state_28756__$1 = state_28756;
if(cljs.core.truth_(inst_28735)){
var statearr_28765_28788 = state_28756__$1;
(statearr_28765_28788[(1)] = (4));

} else {
var statearr_28766_28789 = state_28756__$1;
(statearr_28766_28789[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (11))){
var inst_28733 = (state_28756[(8)]);
var inst_28743 = (state_28756[(2)]);
var inst_28744 = (inst_28733 + (1));
var inst_28733__$1 = inst_28744;
var state_28756__$1 = (function (){var statearr_28767 = state_28756;
(statearr_28767[(8)] = inst_28733__$1);

(statearr_28767[(10)] = inst_28743);

return statearr_28767;
})();
var statearr_28768_28790 = state_28756__$1;
(statearr_28768_28790[(2)] = null);

(statearr_28768_28790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (9))){
var state_28756__$1 = state_28756;
var statearr_28769_28791 = state_28756__$1;
(statearr_28769_28791[(2)] = null);

(statearr_28769_28791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (5))){
var state_28756__$1 = state_28756;
var statearr_28770_28792 = state_28756__$1;
(statearr_28770_28792[(2)] = null);

(statearr_28770_28792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (10))){
var inst_28748 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
var statearr_28771_28793 = state_28756__$1;
(statearr_28771_28793[(2)] = inst_28748);

(statearr_28771_28793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (8))){
var inst_28738 = (state_28756[(7)]);
var state_28756__$1 = state_28756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28756__$1,(11),out,inst_28738);
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
});})(c__22838__auto___28783,out))
;
return ((function (switch__22773__auto__,c__22838__auto___28783,out){
return (function() {
var cljs$core$async$state_machine__22774__auto__ = null;
var cljs$core$async$state_machine__22774__auto____0 = (function (){
var statearr_28775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28775[(0)] = cljs$core$async$state_machine__22774__auto__);

(statearr_28775[(1)] = (1));

return statearr_28775;
});
var cljs$core$async$state_machine__22774__auto____1 = (function (state_28756){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_28756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e28776){if((e28776 instanceof Object)){
var ex__22777__auto__ = e28776;
var statearr_28777_28794 = state_28756;
(statearr_28777_28794[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28795 = state_28756;
state_28756 = G__28795;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$state_machine__22774__auto__ = function(state_28756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22774__auto____1.call(this,state_28756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22774__auto____0;
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22774__auto____1;
return cljs$core$async$state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___28783,out))
})();
var state__22840__auto__ = (function (){var statearr_28778 = f__22839__auto__.call(null);
(statearr_28778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___28783);

return statearr_28778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___28783,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28803 = (function (map_LT_,f,ch,meta28804){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28804 = meta28804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28805,meta28804__$1){
var self__ = this;
var _28805__$1 = this;
return (new cljs.core.async.t_cljs$core$async28803(self__.map_LT_,self__.f,self__.ch,meta28804__$1));
});

cljs.core.async.t_cljs$core$async28803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28805){
var self__ = this;
var _28805__$1 = this;
return self__.meta28804;
});

cljs.core.async.t_cljs$core$async28803.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28803.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28803.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28806 = (function (map_LT_,f,ch,meta28804,_,fn1,meta28807){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28804 = meta28804;
this._ = _;
this.fn1 = fn1;
this.meta28807 = meta28807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28808,meta28807__$1){
var self__ = this;
var _28808__$1 = this;
return (new cljs.core.async.t_cljs$core$async28806(self__.map_LT_,self__.f,self__.ch,self__.meta28804,self__._,self__.fn1,meta28807__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28808){
var self__ = this;
var _28808__$1 = this;
return self__.meta28807;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28806.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28796_SHARP_){
return f1.call(null,(((p1__28796_SHARP_ == null))?null:self__.f.call(null,p1__28796_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28806.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28804","meta28804",-733655994,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28803","cljs.core.async/t_cljs$core$async28803",990263431,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28807","meta28807",49108808,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28806";

cljs.core.async.t_cljs$core$async28806.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cljs.core.async/t_cljs$core$async28806");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28806 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28806(map_LT___$1,f__$1,ch__$1,meta28804__$1,___$2,fn1__$1,meta28807){
return (new cljs.core.async.t_cljs$core$async28806(map_LT___$1,f__$1,ch__$1,meta28804__$1,___$2,fn1__$1,meta28807));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28806(self__.map_LT_,self__.f,self__.ch,self__.meta28804,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18568__auto__ = ret;
if(cljs.core.truth_(and__18568__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18568__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28803.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28804","meta28804",-733655994,null)], null);
});

cljs.core.async.t_cljs$core$async28803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28803";

cljs.core.async.t_cljs$core$async28803.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cljs.core.async/t_cljs$core$async28803");
});

cljs.core.async.__GT_t_cljs$core$async28803 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28803(map_LT___$1,f__$1,ch__$1,meta28804){
return (new cljs.core.async.t_cljs$core$async28803(map_LT___$1,f__$1,ch__$1,meta28804));
});

}

return (new cljs.core.async.t_cljs$core$async28803(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28812 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28812 = (function (map_GT_,f,ch,meta28813){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28813 = meta28813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28814,meta28813__$1){
var self__ = this;
var _28814__$1 = this;
return (new cljs.core.async.t_cljs$core$async28812(self__.map_GT_,self__.f,self__.ch,meta28813__$1));
});

cljs.core.async.t_cljs$core$async28812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28814){
var self__ = this;
var _28814__$1 = this;
return self__.meta28813;
});

cljs.core.async.t_cljs$core$async28812.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28812.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28812.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28813","meta28813",-1407783321,null)], null);
});

cljs.core.async.t_cljs$core$async28812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28812";

cljs.core.async.t_cljs$core$async28812.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cljs.core.async/t_cljs$core$async28812");
});

cljs.core.async.__GT_t_cljs$core$async28812 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28812(map_GT___$1,f__$1,ch__$1,meta28813){
return (new cljs.core.async.t_cljs$core$async28812(map_GT___$1,f__$1,ch__$1,meta28813));
});

}

return (new cljs.core.async.t_cljs$core$async28812(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28818 = (function (filter_GT_,p,ch,meta28819){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28819 = meta28819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28820,meta28819__$1){
var self__ = this;
var _28820__$1 = this;
return (new cljs.core.async.t_cljs$core$async28818(self__.filter_GT_,self__.p,self__.ch,meta28819__$1));
});

cljs.core.async.t_cljs$core$async28818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28820){
var self__ = this;
var _28820__$1 = this;
return self__.meta28819;
});

cljs.core.async.t_cljs$core$async28818.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28818.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28818.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28818.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28819","meta28819",1158283700,null)], null);
});

cljs.core.async.t_cljs$core$async28818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28818";

cljs.core.async.t_cljs$core$async28818.cljs$lang$ctorPrWriter = (function (this__19178__auto__,writer__19179__auto__,opt__19180__auto__){
return cljs.core._write.call(null,writer__19179__auto__,"cljs.core.async/t_cljs$core$async28818");
});

cljs.core.async.__GT_t_cljs$core$async28818 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28818(filter_GT___$1,p__$1,ch__$1,meta28819){
return (new cljs.core.async.t_cljs$core$async28818(filter_GT___$1,p__$1,ch__$1,meta28819));
});

}

return (new cljs.core.async.t_cljs$core$async28818(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28821 = [];
var len__19638__auto___28865 = arguments.length;
var i__19639__auto___28866 = (0);
while(true){
if((i__19639__auto___28866 < len__19638__auto___28865)){
args28821.push((arguments[i__19639__auto___28866]));

var G__28867 = (i__19639__auto___28866 + (1));
i__19639__auto___28866 = G__28867;
continue;
} else {
}
break;
}

var G__28823 = args28821.length;
switch (G__28823) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28821.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22838__auto___28869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___28869,out){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___28869,out){
return (function (state_28844){
var state_val_28845 = (state_28844[(1)]);
if((state_val_28845 === (7))){
var inst_28840 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28846_28870 = state_28844__$1;
(statearr_28846_28870[(2)] = inst_28840);

(statearr_28846_28870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (1))){
var state_28844__$1 = state_28844;
var statearr_28847_28871 = state_28844__$1;
(statearr_28847_28871[(2)] = null);

(statearr_28847_28871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (4))){
var inst_28826 = (state_28844[(7)]);
var inst_28826__$1 = (state_28844[(2)]);
var inst_28827 = (inst_28826__$1 == null);
var state_28844__$1 = (function (){var statearr_28848 = state_28844;
(statearr_28848[(7)] = inst_28826__$1);

return statearr_28848;
})();
if(cljs.core.truth_(inst_28827)){
var statearr_28849_28872 = state_28844__$1;
(statearr_28849_28872[(1)] = (5));

} else {
var statearr_28850_28873 = state_28844__$1;
(statearr_28850_28873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (6))){
var inst_28826 = (state_28844[(7)]);
var inst_28831 = p.call(null,inst_28826);
var state_28844__$1 = state_28844;
if(cljs.core.truth_(inst_28831)){
var statearr_28851_28874 = state_28844__$1;
(statearr_28851_28874[(1)] = (8));

} else {
var statearr_28852_28875 = state_28844__$1;
(statearr_28852_28875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (3))){
var inst_28842 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28844__$1,inst_28842);
} else {
if((state_val_28845 === (2))){
var state_28844__$1 = state_28844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28844__$1,(4),ch);
} else {
if((state_val_28845 === (11))){
var inst_28834 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28853_28876 = state_28844__$1;
(statearr_28853_28876[(2)] = inst_28834);

(statearr_28853_28876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (9))){
var state_28844__$1 = state_28844;
var statearr_28854_28877 = state_28844__$1;
(statearr_28854_28877[(2)] = null);

(statearr_28854_28877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (5))){
var inst_28829 = cljs.core.async.close_BANG_.call(null,out);
var state_28844__$1 = state_28844;
var statearr_28855_28878 = state_28844__$1;
(statearr_28855_28878[(2)] = inst_28829);

(statearr_28855_28878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (10))){
var inst_28837 = (state_28844[(2)]);
var state_28844__$1 = (function (){var statearr_28856 = state_28844;
(statearr_28856[(8)] = inst_28837);

return statearr_28856;
})();
var statearr_28857_28879 = state_28844__$1;
(statearr_28857_28879[(2)] = null);

(statearr_28857_28879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (8))){
var inst_28826 = (state_28844[(7)]);
var state_28844__$1 = state_28844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28844__$1,(11),out,inst_28826);
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
});})(c__22838__auto___28869,out))
;
return ((function (switch__22773__auto__,c__22838__auto___28869,out){
return (function() {
var cljs$core$async$state_machine__22774__auto__ = null;
var cljs$core$async$state_machine__22774__auto____0 = (function (){
var statearr_28861 = [null,null,null,null,null,null,null,null,null];
(statearr_28861[(0)] = cljs$core$async$state_machine__22774__auto__);

(statearr_28861[(1)] = (1));

return statearr_28861;
});
var cljs$core$async$state_machine__22774__auto____1 = (function (state_28844){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_28844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e28862){if((e28862 instanceof Object)){
var ex__22777__auto__ = e28862;
var statearr_28863_28880 = state_28844;
(statearr_28863_28880[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28881 = state_28844;
state_28844 = G__28881;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$state_machine__22774__auto__ = function(state_28844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22774__auto____1.call(this,state_28844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22774__auto____0;
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22774__auto____1;
return cljs$core$async$state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___28869,out))
})();
var state__22840__auto__ = (function (){var statearr_28864 = f__22839__auto__.call(null);
(statearr_28864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___28869);

return statearr_28864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___28869,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28882 = [];
var len__19638__auto___28885 = arguments.length;
var i__19639__auto___28886 = (0);
while(true){
if((i__19639__auto___28886 < len__19638__auto___28885)){
args28882.push((arguments[i__19639__auto___28886]));

var G__28887 = (i__19639__auto___28886 + (1));
i__19639__auto___28886 = G__28887;
continue;
} else {
}
break;
}

var G__28884 = args28882.length;
switch (G__28884) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28882.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto__){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto__){
return (function (state_29054){
var state_val_29055 = (state_29054[(1)]);
if((state_val_29055 === (7))){
var inst_29050 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29056_29097 = state_29054__$1;
(statearr_29056_29097[(2)] = inst_29050);

(statearr_29056_29097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (20))){
var inst_29020 = (state_29054[(7)]);
var inst_29031 = (state_29054[(2)]);
var inst_29032 = cljs.core.next.call(null,inst_29020);
var inst_29006 = inst_29032;
var inst_29007 = null;
var inst_29008 = (0);
var inst_29009 = (0);
var state_29054__$1 = (function (){var statearr_29057 = state_29054;
(statearr_29057[(8)] = inst_29008);

(statearr_29057[(9)] = inst_29031);

(statearr_29057[(10)] = inst_29009);

(statearr_29057[(11)] = inst_29007);

(statearr_29057[(12)] = inst_29006);

return statearr_29057;
})();
var statearr_29058_29098 = state_29054__$1;
(statearr_29058_29098[(2)] = null);

(statearr_29058_29098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (1))){
var state_29054__$1 = state_29054;
var statearr_29059_29099 = state_29054__$1;
(statearr_29059_29099[(2)] = null);

(statearr_29059_29099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (4))){
var inst_28995 = (state_29054[(13)]);
var inst_28995__$1 = (state_29054[(2)]);
var inst_28996 = (inst_28995__$1 == null);
var state_29054__$1 = (function (){var statearr_29060 = state_29054;
(statearr_29060[(13)] = inst_28995__$1);

return statearr_29060;
})();
if(cljs.core.truth_(inst_28996)){
var statearr_29061_29100 = state_29054__$1;
(statearr_29061_29100[(1)] = (5));

} else {
var statearr_29062_29101 = state_29054__$1;
(statearr_29062_29101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (15))){
var state_29054__$1 = state_29054;
var statearr_29066_29102 = state_29054__$1;
(statearr_29066_29102[(2)] = null);

(statearr_29066_29102[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (21))){
var state_29054__$1 = state_29054;
var statearr_29067_29103 = state_29054__$1;
(statearr_29067_29103[(2)] = null);

(statearr_29067_29103[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (13))){
var inst_29008 = (state_29054[(8)]);
var inst_29009 = (state_29054[(10)]);
var inst_29007 = (state_29054[(11)]);
var inst_29006 = (state_29054[(12)]);
var inst_29016 = (state_29054[(2)]);
var inst_29017 = (inst_29009 + (1));
var tmp29063 = inst_29008;
var tmp29064 = inst_29007;
var tmp29065 = inst_29006;
var inst_29006__$1 = tmp29065;
var inst_29007__$1 = tmp29064;
var inst_29008__$1 = tmp29063;
var inst_29009__$1 = inst_29017;
var state_29054__$1 = (function (){var statearr_29068 = state_29054;
(statearr_29068[(8)] = inst_29008__$1);

(statearr_29068[(10)] = inst_29009__$1);

(statearr_29068[(11)] = inst_29007__$1);

(statearr_29068[(14)] = inst_29016);

(statearr_29068[(12)] = inst_29006__$1);

return statearr_29068;
})();
var statearr_29069_29104 = state_29054__$1;
(statearr_29069_29104[(2)] = null);

(statearr_29069_29104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (22))){
var state_29054__$1 = state_29054;
var statearr_29070_29105 = state_29054__$1;
(statearr_29070_29105[(2)] = null);

(statearr_29070_29105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (6))){
var inst_28995 = (state_29054[(13)]);
var inst_29004 = f.call(null,inst_28995);
var inst_29005 = cljs.core.seq.call(null,inst_29004);
var inst_29006 = inst_29005;
var inst_29007 = null;
var inst_29008 = (0);
var inst_29009 = (0);
var state_29054__$1 = (function (){var statearr_29071 = state_29054;
(statearr_29071[(8)] = inst_29008);

(statearr_29071[(10)] = inst_29009);

(statearr_29071[(11)] = inst_29007);

(statearr_29071[(12)] = inst_29006);

return statearr_29071;
})();
var statearr_29072_29106 = state_29054__$1;
(statearr_29072_29106[(2)] = null);

(statearr_29072_29106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (17))){
var inst_29020 = (state_29054[(7)]);
var inst_29024 = cljs.core.chunk_first.call(null,inst_29020);
var inst_29025 = cljs.core.chunk_rest.call(null,inst_29020);
var inst_29026 = cljs.core.count.call(null,inst_29024);
var inst_29006 = inst_29025;
var inst_29007 = inst_29024;
var inst_29008 = inst_29026;
var inst_29009 = (0);
var state_29054__$1 = (function (){var statearr_29073 = state_29054;
(statearr_29073[(8)] = inst_29008);

(statearr_29073[(10)] = inst_29009);

(statearr_29073[(11)] = inst_29007);

(statearr_29073[(12)] = inst_29006);

return statearr_29073;
})();
var statearr_29074_29107 = state_29054__$1;
(statearr_29074_29107[(2)] = null);

(statearr_29074_29107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (3))){
var inst_29052 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29054__$1,inst_29052);
} else {
if((state_val_29055 === (12))){
var inst_29040 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29075_29108 = state_29054__$1;
(statearr_29075_29108[(2)] = inst_29040);

(statearr_29075_29108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (2))){
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29054__$1,(4),in$);
} else {
if((state_val_29055 === (23))){
var inst_29048 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29076_29109 = state_29054__$1;
(statearr_29076_29109[(2)] = inst_29048);

(statearr_29076_29109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (19))){
var inst_29035 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29077_29110 = state_29054__$1;
(statearr_29077_29110[(2)] = inst_29035);

(statearr_29077_29110[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (11))){
var inst_29020 = (state_29054[(7)]);
var inst_29006 = (state_29054[(12)]);
var inst_29020__$1 = cljs.core.seq.call(null,inst_29006);
var state_29054__$1 = (function (){var statearr_29078 = state_29054;
(statearr_29078[(7)] = inst_29020__$1);

return statearr_29078;
})();
if(inst_29020__$1){
var statearr_29079_29111 = state_29054__$1;
(statearr_29079_29111[(1)] = (14));

} else {
var statearr_29080_29112 = state_29054__$1;
(statearr_29080_29112[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (9))){
var inst_29042 = (state_29054[(2)]);
var inst_29043 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29054__$1 = (function (){var statearr_29081 = state_29054;
(statearr_29081[(15)] = inst_29042);

return statearr_29081;
})();
if(cljs.core.truth_(inst_29043)){
var statearr_29082_29113 = state_29054__$1;
(statearr_29082_29113[(1)] = (21));

} else {
var statearr_29083_29114 = state_29054__$1;
(statearr_29083_29114[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (5))){
var inst_28998 = cljs.core.async.close_BANG_.call(null,out);
var state_29054__$1 = state_29054;
var statearr_29084_29115 = state_29054__$1;
(statearr_29084_29115[(2)] = inst_28998);

(statearr_29084_29115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (14))){
var inst_29020 = (state_29054[(7)]);
var inst_29022 = cljs.core.chunked_seq_QMARK_.call(null,inst_29020);
var state_29054__$1 = state_29054;
if(inst_29022){
var statearr_29085_29116 = state_29054__$1;
(statearr_29085_29116[(1)] = (17));

} else {
var statearr_29086_29117 = state_29054__$1;
(statearr_29086_29117[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (16))){
var inst_29038 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29087_29118 = state_29054__$1;
(statearr_29087_29118[(2)] = inst_29038);

(statearr_29087_29118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (10))){
var inst_29009 = (state_29054[(10)]);
var inst_29007 = (state_29054[(11)]);
var inst_29014 = cljs.core._nth.call(null,inst_29007,inst_29009);
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29054__$1,(13),out,inst_29014);
} else {
if((state_val_29055 === (18))){
var inst_29020 = (state_29054[(7)]);
var inst_29029 = cljs.core.first.call(null,inst_29020);
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29054__$1,(20),out,inst_29029);
} else {
if((state_val_29055 === (8))){
var inst_29008 = (state_29054[(8)]);
var inst_29009 = (state_29054[(10)]);
var inst_29011 = (inst_29009 < inst_29008);
var inst_29012 = inst_29011;
var state_29054__$1 = state_29054;
if(cljs.core.truth_(inst_29012)){
var statearr_29088_29119 = state_29054__$1;
(statearr_29088_29119[(1)] = (10));

} else {
var statearr_29089_29120 = state_29054__$1;
(statearr_29089_29120[(1)] = (11));

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
});})(c__22838__auto__))
;
return ((function (switch__22773__auto__,c__22838__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22774__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22774__auto____0 = (function (){
var statearr_29093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29093[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22774__auto__);

(statearr_29093[(1)] = (1));

return statearr_29093;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22774__auto____1 = (function (state_29054){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_29054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e29094){if((e29094 instanceof Object)){
var ex__22777__auto__ = e29094;
var statearr_29095_29121 = state_29054;
(statearr_29095_29121[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29122 = state_29054;
state_29054 = G__29122;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22774__auto__ = function(state_29054){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22774__auto____1.call(this,state_29054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22774__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22774__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto__))
})();
var state__22840__auto__ = (function (){var statearr_29096 = f__22839__auto__.call(null);
(statearr_29096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto__);

return statearr_29096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto__))
);

return c__22838__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29123 = [];
var len__19638__auto___29126 = arguments.length;
var i__19639__auto___29127 = (0);
while(true){
if((i__19639__auto___29127 < len__19638__auto___29126)){
args29123.push((arguments[i__19639__auto___29127]));

var G__29128 = (i__19639__auto___29127 + (1));
i__19639__auto___29127 = G__29128;
continue;
} else {
}
break;
}

var G__29125 = args29123.length;
switch (G__29125) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29123.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29130 = [];
var len__19638__auto___29133 = arguments.length;
var i__19639__auto___29134 = (0);
while(true){
if((i__19639__auto___29134 < len__19638__auto___29133)){
args29130.push((arguments[i__19639__auto___29134]));

var G__29135 = (i__19639__auto___29134 + (1));
i__19639__auto___29134 = G__29135;
continue;
} else {
}
break;
}

var G__29132 = args29130.length;
switch (G__29132) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29130.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29137 = [];
var len__19638__auto___29188 = arguments.length;
var i__19639__auto___29189 = (0);
while(true){
if((i__19639__auto___29189 < len__19638__auto___29188)){
args29137.push((arguments[i__19639__auto___29189]));

var G__29190 = (i__19639__auto___29189 + (1));
i__19639__auto___29189 = G__29190;
continue;
} else {
}
break;
}

var G__29139 = args29137.length;
switch (G__29139) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29137.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22838__auto___29192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___29192,out){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___29192,out){
return (function (state_29163){
var state_val_29164 = (state_29163[(1)]);
if((state_val_29164 === (7))){
var inst_29158 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29165_29193 = state_29163__$1;
(statearr_29165_29193[(2)] = inst_29158);

(statearr_29165_29193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (1))){
var inst_29140 = null;
var state_29163__$1 = (function (){var statearr_29166 = state_29163;
(statearr_29166[(7)] = inst_29140);

return statearr_29166;
})();
var statearr_29167_29194 = state_29163__$1;
(statearr_29167_29194[(2)] = null);

(statearr_29167_29194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (4))){
var inst_29143 = (state_29163[(8)]);
var inst_29143__$1 = (state_29163[(2)]);
var inst_29144 = (inst_29143__$1 == null);
var inst_29145 = cljs.core.not.call(null,inst_29144);
var state_29163__$1 = (function (){var statearr_29168 = state_29163;
(statearr_29168[(8)] = inst_29143__$1);

return statearr_29168;
})();
if(inst_29145){
var statearr_29169_29195 = state_29163__$1;
(statearr_29169_29195[(1)] = (5));

} else {
var statearr_29170_29196 = state_29163__$1;
(statearr_29170_29196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (6))){
var state_29163__$1 = state_29163;
var statearr_29171_29197 = state_29163__$1;
(statearr_29171_29197[(2)] = null);

(statearr_29171_29197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (3))){
var inst_29160 = (state_29163[(2)]);
var inst_29161 = cljs.core.async.close_BANG_.call(null,out);
var state_29163__$1 = (function (){var statearr_29172 = state_29163;
(statearr_29172[(9)] = inst_29160);

return statearr_29172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29163__$1,inst_29161);
} else {
if((state_val_29164 === (2))){
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29163__$1,(4),ch);
} else {
if((state_val_29164 === (11))){
var inst_29143 = (state_29163[(8)]);
var inst_29152 = (state_29163[(2)]);
var inst_29140 = inst_29143;
var state_29163__$1 = (function (){var statearr_29173 = state_29163;
(statearr_29173[(7)] = inst_29140);

(statearr_29173[(10)] = inst_29152);

return statearr_29173;
})();
var statearr_29174_29198 = state_29163__$1;
(statearr_29174_29198[(2)] = null);

(statearr_29174_29198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (9))){
var inst_29143 = (state_29163[(8)]);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29163__$1,(11),out,inst_29143);
} else {
if((state_val_29164 === (5))){
var inst_29140 = (state_29163[(7)]);
var inst_29143 = (state_29163[(8)]);
var inst_29147 = cljs.core._EQ_.call(null,inst_29143,inst_29140);
var state_29163__$1 = state_29163;
if(inst_29147){
var statearr_29176_29199 = state_29163__$1;
(statearr_29176_29199[(1)] = (8));

} else {
var statearr_29177_29200 = state_29163__$1;
(statearr_29177_29200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (10))){
var inst_29155 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29178_29201 = state_29163__$1;
(statearr_29178_29201[(2)] = inst_29155);

(statearr_29178_29201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (8))){
var inst_29140 = (state_29163[(7)]);
var tmp29175 = inst_29140;
var inst_29140__$1 = tmp29175;
var state_29163__$1 = (function (){var statearr_29179 = state_29163;
(statearr_29179[(7)] = inst_29140__$1);

return statearr_29179;
})();
var statearr_29180_29202 = state_29163__$1;
(statearr_29180_29202[(2)] = null);

(statearr_29180_29202[(1)] = (2));


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
});})(c__22838__auto___29192,out))
;
return ((function (switch__22773__auto__,c__22838__auto___29192,out){
return (function() {
var cljs$core$async$state_machine__22774__auto__ = null;
var cljs$core$async$state_machine__22774__auto____0 = (function (){
var statearr_29184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29184[(0)] = cljs$core$async$state_machine__22774__auto__);

(statearr_29184[(1)] = (1));

return statearr_29184;
});
var cljs$core$async$state_machine__22774__auto____1 = (function (state_29163){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_29163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e29185){if((e29185 instanceof Object)){
var ex__22777__auto__ = e29185;
var statearr_29186_29203 = state_29163;
(statearr_29186_29203[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29204 = state_29163;
state_29163 = G__29204;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$state_machine__22774__auto__ = function(state_29163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22774__auto____1.call(this,state_29163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22774__auto____0;
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22774__auto____1;
return cljs$core$async$state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___29192,out))
})();
var state__22840__auto__ = (function (){var statearr_29187 = f__22839__auto__.call(null);
(statearr_29187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___29192);

return statearr_29187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___29192,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29205 = [];
var len__19638__auto___29275 = arguments.length;
var i__19639__auto___29276 = (0);
while(true){
if((i__19639__auto___29276 < len__19638__auto___29275)){
args29205.push((arguments[i__19639__auto___29276]));

var G__29277 = (i__19639__auto___29276 + (1));
i__19639__auto___29276 = G__29277;
continue;
} else {
}
break;
}

var G__29207 = args29205.length;
switch (G__29207) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29205.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22838__auto___29279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___29279,out){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___29279,out){
return (function (state_29245){
var state_val_29246 = (state_29245[(1)]);
if((state_val_29246 === (7))){
var inst_29241 = (state_29245[(2)]);
var state_29245__$1 = state_29245;
var statearr_29247_29280 = state_29245__$1;
(statearr_29247_29280[(2)] = inst_29241);

(statearr_29247_29280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (1))){
var inst_29208 = (new Array(n));
var inst_29209 = inst_29208;
var inst_29210 = (0);
var state_29245__$1 = (function (){var statearr_29248 = state_29245;
(statearr_29248[(7)] = inst_29210);

(statearr_29248[(8)] = inst_29209);

return statearr_29248;
})();
var statearr_29249_29281 = state_29245__$1;
(statearr_29249_29281[(2)] = null);

(statearr_29249_29281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (4))){
var inst_29213 = (state_29245[(9)]);
var inst_29213__$1 = (state_29245[(2)]);
var inst_29214 = (inst_29213__$1 == null);
var inst_29215 = cljs.core.not.call(null,inst_29214);
var state_29245__$1 = (function (){var statearr_29250 = state_29245;
(statearr_29250[(9)] = inst_29213__$1);

return statearr_29250;
})();
if(inst_29215){
var statearr_29251_29282 = state_29245__$1;
(statearr_29251_29282[(1)] = (5));

} else {
var statearr_29252_29283 = state_29245__$1;
(statearr_29252_29283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (15))){
var inst_29235 = (state_29245[(2)]);
var state_29245__$1 = state_29245;
var statearr_29253_29284 = state_29245__$1;
(statearr_29253_29284[(2)] = inst_29235);

(statearr_29253_29284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (13))){
var state_29245__$1 = state_29245;
var statearr_29254_29285 = state_29245__$1;
(statearr_29254_29285[(2)] = null);

(statearr_29254_29285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (6))){
var inst_29210 = (state_29245[(7)]);
var inst_29231 = (inst_29210 > (0));
var state_29245__$1 = state_29245;
if(cljs.core.truth_(inst_29231)){
var statearr_29255_29286 = state_29245__$1;
(statearr_29255_29286[(1)] = (12));

} else {
var statearr_29256_29287 = state_29245__$1;
(statearr_29256_29287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (3))){
var inst_29243 = (state_29245[(2)]);
var state_29245__$1 = state_29245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29245__$1,inst_29243);
} else {
if((state_val_29246 === (12))){
var inst_29209 = (state_29245[(8)]);
var inst_29233 = cljs.core.vec.call(null,inst_29209);
var state_29245__$1 = state_29245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29245__$1,(15),out,inst_29233);
} else {
if((state_val_29246 === (2))){
var state_29245__$1 = state_29245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29245__$1,(4),ch);
} else {
if((state_val_29246 === (11))){
var inst_29225 = (state_29245[(2)]);
var inst_29226 = (new Array(n));
var inst_29209 = inst_29226;
var inst_29210 = (0);
var state_29245__$1 = (function (){var statearr_29257 = state_29245;
(statearr_29257[(7)] = inst_29210);

(statearr_29257[(10)] = inst_29225);

(statearr_29257[(8)] = inst_29209);

return statearr_29257;
})();
var statearr_29258_29288 = state_29245__$1;
(statearr_29258_29288[(2)] = null);

(statearr_29258_29288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (9))){
var inst_29209 = (state_29245[(8)]);
var inst_29223 = cljs.core.vec.call(null,inst_29209);
var state_29245__$1 = state_29245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29245__$1,(11),out,inst_29223);
} else {
if((state_val_29246 === (5))){
var inst_29213 = (state_29245[(9)]);
var inst_29218 = (state_29245[(11)]);
var inst_29210 = (state_29245[(7)]);
var inst_29209 = (state_29245[(8)]);
var inst_29217 = (inst_29209[inst_29210] = inst_29213);
var inst_29218__$1 = (inst_29210 + (1));
var inst_29219 = (inst_29218__$1 < n);
var state_29245__$1 = (function (){var statearr_29259 = state_29245;
(statearr_29259[(11)] = inst_29218__$1);

(statearr_29259[(12)] = inst_29217);

return statearr_29259;
})();
if(cljs.core.truth_(inst_29219)){
var statearr_29260_29289 = state_29245__$1;
(statearr_29260_29289[(1)] = (8));

} else {
var statearr_29261_29290 = state_29245__$1;
(statearr_29261_29290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (14))){
var inst_29238 = (state_29245[(2)]);
var inst_29239 = cljs.core.async.close_BANG_.call(null,out);
var state_29245__$1 = (function (){var statearr_29263 = state_29245;
(statearr_29263[(13)] = inst_29238);

return statearr_29263;
})();
var statearr_29264_29291 = state_29245__$1;
(statearr_29264_29291[(2)] = inst_29239);

(statearr_29264_29291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (10))){
var inst_29229 = (state_29245[(2)]);
var state_29245__$1 = state_29245;
var statearr_29265_29292 = state_29245__$1;
(statearr_29265_29292[(2)] = inst_29229);

(statearr_29265_29292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (8))){
var inst_29218 = (state_29245[(11)]);
var inst_29209 = (state_29245[(8)]);
var tmp29262 = inst_29209;
var inst_29209__$1 = tmp29262;
var inst_29210 = inst_29218;
var state_29245__$1 = (function (){var statearr_29266 = state_29245;
(statearr_29266[(7)] = inst_29210);

(statearr_29266[(8)] = inst_29209__$1);

return statearr_29266;
})();
var statearr_29267_29293 = state_29245__$1;
(statearr_29267_29293[(2)] = null);

(statearr_29267_29293[(1)] = (2));


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
});})(c__22838__auto___29279,out))
;
return ((function (switch__22773__auto__,c__22838__auto___29279,out){
return (function() {
var cljs$core$async$state_machine__22774__auto__ = null;
var cljs$core$async$state_machine__22774__auto____0 = (function (){
var statearr_29271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29271[(0)] = cljs$core$async$state_machine__22774__auto__);

(statearr_29271[(1)] = (1));

return statearr_29271;
});
var cljs$core$async$state_machine__22774__auto____1 = (function (state_29245){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_29245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e29272){if((e29272 instanceof Object)){
var ex__22777__auto__ = e29272;
var statearr_29273_29294 = state_29245;
(statearr_29273_29294[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29295 = state_29245;
state_29245 = G__29295;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$state_machine__22774__auto__ = function(state_29245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22774__auto____1.call(this,state_29245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22774__auto____0;
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22774__auto____1;
return cljs$core$async$state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___29279,out))
})();
var state__22840__auto__ = (function (){var statearr_29274 = f__22839__auto__.call(null);
(statearr_29274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___29279);

return statearr_29274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___29279,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29296 = [];
var len__19638__auto___29370 = arguments.length;
var i__19639__auto___29371 = (0);
while(true){
if((i__19639__auto___29371 < len__19638__auto___29370)){
args29296.push((arguments[i__19639__auto___29371]));

var G__29372 = (i__19639__auto___29371 + (1));
i__19639__auto___29371 = G__29372;
continue;
} else {
}
break;
}

var G__29298 = args29296.length;
switch (G__29298) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29296.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22838__auto___29374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___29374,out){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___29374,out){
return (function (state_29340){
var state_val_29341 = (state_29340[(1)]);
if((state_val_29341 === (7))){
var inst_29336 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
var statearr_29342_29375 = state_29340__$1;
(statearr_29342_29375[(2)] = inst_29336);

(statearr_29342_29375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (1))){
var inst_29299 = [];
var inst_29300 = inst_29299;
var inst_29301 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29340__$1 = (function (){var statearr_29343 = state_29340;
(statearr_29343[(7)] = inst_29301);

(statearr_29343[(8)] = inst_29300);

return statearr_29343;
})();
var statearr_29344_29376 = state_29340__$1;
(statearr_29344_29376[(2)] = null);

(statearr_29344_29376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (4))){
var inst_29304 = (state_29340[(9)]);
var inst_29304__$1 = (state_29340[(2)]);
var inst_29305 = (inst_29304__$1 == null);
var inst_29306 = cljs.core.not.call(null,inst_29305);
var state_29340__$1 = (function (){var statearr_29345 = state_29340;
(statearr_29345[(9)] = inst_29304__$1);

return statearr_29345;
})();
if(inst_29306){
var statearr_29346_29377 = state_29340__$1;
(statearr_29346_29377[(1)] = (5));

} else {
var statearr_29347_29378 = state_29340__$1;
(statearr_29347_29378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (15))){
var inst_29330 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
var statearr_29348_29379 = state_29340__$1;
(statearr_29348_29379[(2)] = inst_29330);

(statearr_29348_29379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (13))){
var state_29340__$1 = state_29340;
var statearr_29349_29380 = state_29340__$1;
(statearr_29349_29380[(2)] = null);

(statearr_29349_29380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (6))){
var inst_29300 = (state_29340[(8)]);
var inst_29325 = inst_29300.length;
var inst_29326 = (inst_29325 > (0));
var state_29340__$1 = state_29340;
if(cljs.core.truth_(inst_29326)){
var statearr_29350_29381 = state_29340__$1;
(statearr_29350_29381[(1)] = (12));

} else {
var statearr_29351_29382 = state_29340__$1;
(statearr_29351_29382[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (3))){
var inst_29338 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29340__$1,inst_29338);
} else {
if((state_val_29341 === (12))){
var inst_29300 = (state_29340[(8)]);
var inst_29328 = cljs.core.vec.call(null,inst_29300);
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29340__$1,(15),out,inst_29328);
} else {
if((state_val_29341 === (2))){
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29340__$1,(4),ch);
} else {
if((state_val_29341 === (11))){
var inst_29304 = (state_29340[(9)]);
var inst_29308 = (state_29340[(10)]);
var inst_29318 = (state_29340[(2)]);
var inst_29319 = [];
var inst_29320 = inst_29319.push(inst_29304);
var inst_29300 = inst_29319;
var inst_29301 = inst_29308;
var state_29340__$1 = (function (){var statearr_29352 = state_29340;
(statearr_29352[(11)] = inst_29320);

(statearr_29352[(12)] = inst_29318);

(statearr_29352[(7)] = inst_29301);

(statearr_29352[(8)] = inst_29300);

return statearr_29352;
})();
var statearr_29353_29383 = state_29340__$1;
(statearr_29353_29383[(2)] = null);

(statearr_29353_29383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (9))){
var inst_29300 = (state_29340[(8)]);
var inst_29316 = cljs.core.vec.call(null,inst_29300);
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29340__$1,(11),out,inst_29316);
} else {
if((state_val_29341 === (5))){
var inst_29301 = (state_29340[(7)]);
var inst_29304 = (state_29340[(9)]);
var inst_29308 = (state_29340[(10)]);
var inst_29308__$1 = f.call(null,inst_29304);
var inst_29309 = cljs.core._EQ_.call(null,inst_29308__$1,inst_29301);
var inst_29310 = cljs.core.keyword_identical_QMARK_.call(null,inst_29301,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29311 = (inst_29309) || (inst_29310);
var state_29340__$1 = (function (){var statearr_29354 = state_29340;
(statearr_29354[(10)] = inst_29308__$1);

return statearr_29354;
})();
if(cljs.core.truth_(inst_29311)){
var statearr_29355_29384 = state_29340__$1;
(statearr_29355_29384[(1)] = (8));

} else {
var statearr_29356_29385 = state_29340__$1;
(statearr_29356_29385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (14))){
var inst_29333 = (state_29340[(2)]);
var inst_29334 = cljs.core.async.close_BANG_.call(null,out);
var state_29340__$1 = (function (){var statearr_29358 = state_29340;
(statearr_29358[(13)] = inst_29333);

return statearr_29358;
})();
var statearr_29359_29386 = state_29340__$1;
(statearr_29359_29386[(2)] = inst_29334);

(statearr_29359_29386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (10))){
var inst_29323 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
var statearr_29360_29387 = state_29340__$1;
(statearr_29360_29387[(2)] = inst_29323);

(statearr_29360_29387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (8))){
var inst_29304 = (state_29340[(9)]);
var inst_29308 = (state_29340[(10)]);
var inst_29300 = (state_29340[(8)]);
var inst_29313 = inst_29300.push(inst_29304);
var tmp29357 = inst_29300;
var inst_29300__$1 = tmp29357;
var inst_29301 = inst_29308;
var state_29340__$1 = (function (){var statearr_29361 = state_29340;
(statearr_29361[(14)] = inst_29313);

(statearr_29361[(7)] = inst_29301);

(statearr_29361[(8)] = inst_29300__$1);

return statearr_29361;
})();
var statearr_29362_29388 = state_29340__$1;
(statearr_29362_29388[(2)] = null);

(statearr_29362_29388[(1)] = (2));


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
});})(c__22838__auto___29374,out))
;
return ((function (switch__22773__auto__,c__22838__auto___29374,out){
return (function() {
var cljs$core$async$state_machine__22774__auto__ = null;
var cljs$core$async$state_machine__22774__auto____0 = (function (){
var statearr_29366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29366[(0)] = cljs$core$async$state_machine__22774__auto__);

(statearr_29366[(1)] = (1));

return statearr_29366;
});
var cljs$core$async$state_machine__22774__auto____1 = (function (state_29340){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_29340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e29367){if((e29367 instanceof Object)){
var ex__22777__auto__ = e29367;
var statearr_29368_29389 = state_29340;
(statearr_29368_29389[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29390 = state_29340;
state_29340 = G__29390;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
cljs$core$async$state_machine__22774__auto__ = function(state_29340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22774__auto____1.call(this,state_29340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22774__auto____0;
cljs$core$async$state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22774__auto____1;
return cljs$core$async$state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___29374,out))
})();
var state__22840__auto__ = (function (){var statearr_29369 = f__22839__auto__.call(null);
(statearr_29369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___29374);

return statearr_29369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___29374,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1531355032633