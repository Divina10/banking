// Compiled by ClojureScript 1.7.107 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33072_33104 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33073_33106 = null;
var count__33074_33107 = (0);
var i__33075_33108 = (0);
while(true){
if((i__33075_33108 < count__33074_33107)){
var f_33109 = cljs.core._nth.call(null,chunk__33073_33106,i__33075_33108);
cljs.core.println.call(null,"  ",f_33109);

var G__33110 = seq__33072_33104;
var G__33111 = chunk__33073_33106;
var G__33112 = count__33074_33107;
var G__33113 = (i__33075_33108 + (1));
seq__33072_33104 = G__33110;
chunk__33073_33106 = G__33111;
count__33074_33107 = G__33112;
i__33075_33108 = G__33113;
continue;
} else {
var temp__4657__auto___33118 = cljs.core.seq.call(null,seq__33072_33104);
if(temp__4657__auto___33118){
var seq__33072_33119__$1 = temp__4657__auto___33118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33072_33119__$1)){
var c__19383__auto___33120 = cljs.core.chunk_first.call(null,seq__33072_33119__$1);
var G__33121 = cljs.core.chunk_rest.call(null,seq__33072_33119__$1);
var G__33122 = c__19383__auto___33120;
var G__33123 = cljs.core.count.call(null,c__19383__auto___33120);
var G__33124 = (0);
seq__33072_33104 = G__33121;
chunk__33073_33106 = G__33122;
count__33074_33107 = G__33123;
i__33075_33108 = G__33124;
continue;
} else {
var f_33125 = cljs.core.first.call(null,seq__33072_33119__$1);
cljs.core.println.call(null,"  ",f_33125);

var G__33126 = cljs.core.next.call(null,seq__33072_33119__$1);
var G__33127 = null;
var G__33128 = (0);
var G__33129 = (0);
seq__33072_33104 = G__33126;
chunk__33073_33106 = G__33127;
count__33074_33107 = G__33128;
i__33075_33108 = G__33129;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33130 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18580__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33130);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33130)))?cljs.core.second.call(null,arglists_33130):arglists_33130));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33078 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33079 = null;
var count__33080 = (0);
var i__33081 = (0);
while(true){
if((i__33081 < count__33080)){
var vec__33082 = cljs.core._nth.call(null,chunk__33079,i__33081);
var name = cljs.core.nth.call(null,vec__33082,(0),null);
var map__33083 = cljs.core.nth.call(null,vec__33082,(1),null);
var map__33083__$1 = ((((!((map__33083 == null)))?((((map__33083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33083):map__33083);
var doc = cljs.core.get.call(null,map__33083__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33083__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33134 = seq__33078;
var G__33135 = chunk__33079;
var G__33136 = count__33080;
var G__33137 = (i__33081 + (1));
seq__33078 = G__33134;
chunk__33079 = G__33135;
count__33080 = G__33136;
i__33081 = G__33137;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33078);
if(temp__4657__auto__){
var seq__33078__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33078__$1)){
var c__19383__auto__ = cljs.core.chunk_first.call(null,seq__33078__$1);
var G__33141 = cljs.core.chunk_rest.call(null,seq__33078__$1);
var G__33142 = c__19383__auto__;
var G__33143 = cljs.core.count.call(null,c__19383__auto__);
var G__33144 = (0);
seq__33078 = G__33141;
chunk__33079 = G__33142;
count__33080 = G__33143;
i__33081 = G__33144;
continue;
} else {
var vec__33085 = cljs.core.first.call(null,seq__33078__$1);
var name = cljs.core.nth.call(null,vec__33085,(0),null);
var map__33086 = cljs.core.nth.call(null,vec__33085,(1),null);
var map__33086__$1 = ((((!((map__33086 == null)))?((((map__33086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33086):map__33086);
var doc = cljs.core.get.call(null,map__33086__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33086__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33145 = cljs.core.next.call(null,seq__33078__$1);
var G__33146 = null;
var G__33147 = (0);
var G__33148 = (0);
seq__33078 = G__33145;
chunk__33079 = G__33146;
count__33080 = G__33147;
i__33081 = G__33148;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1531355036162