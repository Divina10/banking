// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31494__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31495__i = 0, G__31495__a = new Array(arguments.length -  0);
while (G__31495__i < G__31495__a.length) {G__31495__a[G__31495__i] = arguments[G__31495__i + 0]; ++G__31495__i;}
  args = new cljs.core.IndexedSeq(G__31495__a,0);
} 
return G__31494__delegate.call(this,args);};
G__31494.cljs$lang$maxFixedArity = 0;
G__31494.cljs$lang$applyTo = (function (arglist__31496){
var args = cljs.core.seq(arglist__31496);
return G__31494__delegate(args);
});
G__31494.cljs$core$IFn$_invoke$arity$variadic = G__31494__delegate;
return G__31494;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31497){
var map__31500 = p__31497;
var map__31500__$1 = ((((!((map__31500 == null)))?((((map__31500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31500):map__31500);
var message = cljs.core.get.call(null,map__31500__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31500__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18580__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18568__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18568__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18568__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22838__auto___31713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___31713,ch){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___31713,ch){
return (function (state_31683){
var state_val_31684 = (state_31683[(1)]);
if((state_val_31684 === (7))){
var inst_31679 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
var statearr_31685_31714 = state_31683__$1;
(statearr_31685_31714[(2)] = inst_31679);

(statearr_31685_31714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (1))){
var state_31683__$1 = state_31683;
var statearr_31686_31715 = state_31683__$1;
(statearr_31686_31715[(2)] = null);

(statearr_31686_31715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (4))){
var inst_31600 = (state_31683[(7)]);
var inst_31600__$1 = (state_31683[(2)]);
var state_31683__$1 = (function (){var statearr_31687 = state_31683;
(statearr_31687[(7)] = inst_31600__$1);

return statearr_31687;
})();
if(cljs.core.truth_(inst_31600__$1)){
var statearr_31688_31716 = state_31683__$1;
(statearr_31688_31716[(1)] = (5));

} else {
var statearr_31689_31718 = state_31683__$1;
(statearr_31689_31718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (13))){
var state_31683__$1 = state_31683;
var statearr_31690_31720 = state_31683__$1;
(statearr_31690_31720[(2)] = null);

(statearr_31690_31720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (6))){
var state_31683__$1 = state_31683;
var statearr_31692_31721 = state_31683__$1;
(statearr_31692_31721[(2)] = null);

(statearr_31692_31721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (3))){
var inst_31681 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31683__$1,inst_31681);
} else {
if((state_val_31684 === (12))){
var inst_31607 = (state_31683[(8)]);
var inst_31667 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31607);
var inst_31668 = cljs.core.first.call(null,inst_31667);
var inst_31669 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31668);
var inst_31670 = console.warn("Figwheel: Not loading code with warnings - ",inst_31669);
var state_31683__$1 = state_31683;
var statearr_31693_31722 = state_31683__$1;
(statearr_31693_31722[(2)] = inst_31670);

(statearr_31693_31722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (2))){
var state_31683__$1 = state_31683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31683__$1,(4),ch);
} else {
if((state_val_31684 === (11))){
var inst_31663 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
var statearr_31694_31723 = state_31683__$1;
(statearr_31694_31723[(2)] = inst_31663);

(statearr_31694_31723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (9))){
var inst_31606 = (state_31683[(9)]);
var inst_31665 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31606,opts);
var state_31683__$1 = state_31683;
if(cljs.core.truth_(inst_31665)){
var statearr_31695_31724 = state_31683__$1;
(statearr_31695_31724[(1)] = (12));

} else {
var statearr_31696_31725 = state_31683__$1;
(statearr_31696_31725[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (5))){
var inst_31606 = (state_31683[(9)]);
var inst_31600 = (state_31683[(7)]);
var inst_31602 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31603 = (new cljs.core.PersistentArrayMap(null,2,inst_31602,null));
var inst_31604 = (new cljs.core.PersistentHashSet(null,inst_31603,null));
var inst_31605 = figwheel.client.focus_msgs.call(null,inst_31604,inst_31600);
var inst_31606__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31605);
var inst_31607 = cljs.core.first.call(null,inst_31605);
var inst_31611 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31606__$1,opts);
var state_31683__$1 = (function (){var statearr_31697 = state_31683;
(statearr_31697[(9)] = inst_31606__$1);

(statearr_31697[(8)] = inst_31607);

return statearr_31697;
})();
if(cljs.core.truth_(inst_31611)){
var statearr_31698_31731 = state_31683__$1;
(statearr_31698_31731[(1)] = (8));

} else {
var statearr_31699_31732 = state_31683__$1;
(statearr_31699_31732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (14))){
var inst_31673 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
var statearr_31700_31734 = state_31683__$1;
(statearr_31700_31734[(2)] = inst_31673);

(statearr_31700_31734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (10))){
var inst_31675 = (state_31683[(2)]);
var state_31683__$1 = (function (){var statearr_31701 = state_31683;
(statearr_31701[(10)] = inst_31675);

return statearr_31701;
})();
var statearr_31702_31735 = state_31683__$1;
(statearr_31702_31735[(2)] = null);

(statearr_31702_31735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (8))){
var inst_31607 = (state_31683[(8)]);
var inst_31613 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31614 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31607);
var inst_31615 = cljs.core.async.timeout.call(null,(1000));
var inst_31660 = [inst_31614,inst_31615];
var inst_31661 = (new cljs.core.PersistentVector(null,2,(5),inst_31613,inst_31660,null));
var state_31683__$1 = state_31683;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31683__$1,(11),inst_31661);
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
});})(c__22838__auto___31713,ch))
;
return ((function (switch__22773__auto__,c__22838__auto___31713,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22774__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22774__auto____0 = (function (){
var statearr_31709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31709[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22774__auto__);

(statearr_31709[(1)] = (1));

return statearr_31709;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22774__auto____1 = (function (state_31683){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_31683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e31710){if((e31710 instanceof Object)){
var ex__22777__auto__ = e31710;
var statearr_31711_31740 = state_31683;
(statearr_31711_31740[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31741 = state_31683;
state_31683 = G__31741;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22774__auto__ = function(state_31683){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22774__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22774__auto____1.call(this,state_31683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22774__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22774__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___31713,ch))
})();
var state__22840__auto__ = (function (){var statearr_31712 = f__22839__auto__.call(null);
(statearr_31712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___31713);

return statearr_31712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___31713,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31753_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31753_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_31770 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31770){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_31768 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31769 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31768,_STAR_print_newline_STAR_31769,base_path_31770){
return (function() { 
var G__31775__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31778__i = 0, G__31778__a = new Array(arguments.length -  0);
while (G__31778__i < G__31778__a.length) {G__31778__a[G__31778__i] = arguments[G__31778__i + 0]; ++G__31778__i;}
  args = new cljs.core.IndexedSeq(G__31778__a,0);
} 
return G__31775__delegate.call(this,args);};
G__31775.cljs$lang$maxFixedArity = 0;
G__31775.cljs$lang$applyTo = (function (arglist__31781){
var args = cljs.core.seq(arglist__31781);
return G__31775__delegate(args);
});
G__31775.cljs$core$IFn$_invoke$arity$variadic = G__31775__delegate;
return G__31775;
})()
;})(_STAR_print_fn_STAR_31768,_STAR_print_newline_STAR_31769,base_path_31770))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31769;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31768;
}}catch (e31763){if((e31763 instanceof Error)){
var e = e31763;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31770], null));
} else {
var e = e31763;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31770))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31790){
var map__31797 = p__31790;
var map__31797__$1 = ((((!((map__31797 == null)))?((((map__31797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31797):map__31797);
var opts = map__31797__$1;
var build_id = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31797,map__31797__$1,opts,build_id){
return (function (p__31800){
var vec__31801 = p__31800;
var map__31802 = cljs.core.nth.call(null,vec__31801,(0),null);
var map__31802__$1 = ((((!((map__31802 == null)))?((((map__31802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31802):map__31802);
var msg = map__31802__$1;
var msg_name = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31801,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__31801,map__31802,map__31802__$1,msg,msg_name,_,map__31797,map__31797__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31801,map__31802,map__31802__$1,msg,msg_name,_,map__31797,map__31797__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31797,map__31797__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31817){
var vec__31818 = p__31817;
var map__31819 = cljs.core.nth.call(null,vec__31818,(0),null);
var map__31819__$1 = ((((!((map__31819 == null)))?((((map__31819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31819):map__31819);
var msg = map__31819__$1;
var msg_name = cljs.core.get.call(null,map__31819__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31818,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31825){
var map__31837 = p__31825;
var map__31837__$1 = ((((!((map__31837 == null)))?((((map__31837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31837):map__31837);
var on_compile_warning = cljs.core.get.call(null,map__31837__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31837__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31837,map__31837__$1,on_compile_warning,on_compile_fail){
return (function (p__31839){
var vec__31840 = p__31839;
var map__31841 = cljs.core.nth.call(null,vec__31840,(0),null);
var map__31841__$1 = ((((!((map__31841 == null)))?((((map__31841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31841):map__31841);
var msg = map__31841__$1;
var msg_name = cljs.core.get.call(null,map__31841__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31840,(1));
var pred__31843 = cljs.core._EQ_;
var expr__31844 = msg_name;
if(cljs.core.truth_(pred__31843.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31844))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31843.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31844))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31837,map__31837__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto__,msg_hist,msg_names,msg){
return (function (state_32073){
var state_val_32074 = (state_32073[(1)]);
if((state_val_32074 === (7))){
var inst_32004 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32075_32134 = state_32073__$1;
(statearr_32075_32134[(2)] = inst_32004);

(statearr_32075_32134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (20))){
var inst_32033 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32073__$1 = state_32073;
if(cljs.core.truth_(inst_32033)){
var statearr_32076_32135 = state_32073__$1;
(statearr_32076_32135[(1)] = (22));

} else {
var statearr_32077_32136 = state_32073__$1;
(statearr_32077_32136[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (27))){
var inst_32045 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32046 = figwheel.client.heads_up.display_warning.call(null,inst_32045);
var state_32073__$1 = state_32073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32073__$1,(30),inst_32046);
} else {
if((state_val_32074 === (1))){
var inst_31990 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32073__$1 = state_32073;
if(cljs.core.truth_(inst_31990)){
var statearr_32078_32142 = state_32073__$1;
(statearr_32078_32142[(1)] = (2));

} else {
var statearr_32079_32145 = state_32073__$1;
(statearr_32079_32145[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (24))){
var inst_32061 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32080_32147 = state_32073__$1;
(statearr_32080_32147[(2)] = inst_32061);

(statearr_32080_32147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (4))){
var inst_32069 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32073__$1,inst_32069);
} else {
if((state_val_32074 === (15))){
var inst_32021 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32022 = figwheel.client.format_messages.call(null,inst_32021);
var inst_32023 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32024 = figwheel.client.heads_up.display_error.call(null,inst_32022,inst_32023);
var state_32073__$1 = state_32073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32073__$1,(18),inst_32024);
} else {
if((state_val_32074 === (21))){
var inst_32063 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32081_32153 = state_32073__$1;
(statearr_32081_32153[(2)] = inst_32063);

(statearr_32081_32153[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (31))){
var inst_32052 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32073__$1 = state_32073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32073__$1,(34),inst_32052);
} else {
if((state_val_32074 === (32))){
var state_32073__$1 = state_32073;
var statearr_32082_32154 = state_32073__$1;
(statearr_32082_32154[(2)] = null);

(statearr_32082_32154[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (33))){
var inst_32057 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32083_32158 = state_32073__$1;
(statearr_32083_32158[(2)] = inst_32057);

(statearr_32083_32158[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (13))){
var inst_32011 = (state_32073[(2)]);
var inst_32012 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32013 = figwheel.client.format_messages.call(null,inst_32012);
var inst_32014 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32015 = figwheel.client.heads_up.display_error.call(null,inst_32013,inst_32014);
var state_32073__$1 = (function (){var statearr_32084 = state_32073;
(statearr_32084[(7)] = inst_32011);

return statearr_32084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32073__$1,(14),inst_32015);
} else {
if((state_val_32074 === (22))){
var inst_32035 = figwheel.client.heads_up.clear.call(null);
var state_32073__$1 = state_32073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32073__$1,(25),inst_32035);
} else {
if((state_val_32074 === (29))){
var inst_32059 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32087_32161 = state_32073__$1;
(statearr_32087_32161[(2)] = inst_32059);

(statearr_32087_32161[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (6))){
var inst_32000 = figwheel.client.heads_up.clear.call(null);
var state_32073__$1 = state_32073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32073__$1,(9),inst_32000);
} else {
if((state_val_32074 === (28))){
var inst_32050 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32073__$1 = state_32073;
if(cljs.core.truth_(inst_32050)){
var statearr_32090_32162 = state_32073__$1;
(statearr_32090_32162[(1)] = (31));

} else {
var statearr_32091_32163 = state_32073__$1;
(statearr_32091_32163[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (25))){
var inst_32037 = (state_32073[(2)]);
var inst_32038 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32039 = figwheel.client.heads_up.display_warning.call(null,inst_32038);
var state_32073__$1 = (function (){var statearr_32094 = state_32073;
(statearr_32094[(8)] = inst_32037);

return statearr_32094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32073__$1,(26),inst_32039);
} else {
if((state_val_32074 === (34))){
var inst_32054 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32095_32167 = state_32073__$1;
(statearr_32095_32167[(2)] = inst_32054);

(statearr_32095_32167[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (17))){
var inst_32065 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32097_32170 = state_32073__$1;
(statearr_32097_32170[(2)] = inst_32065);

(statearr_32097_32170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (3))){
var inst_32006 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32073__$1 = state_32073;
if(cljs.core.truth_(inst_32006)){
var statearr_32099_32171 = state_32073__$1;
(statearr_32099_32171[(1)] = (10));

} else {
var statearr_32100_32172 = state_32073__$1;
(statearr_32100_32172[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (12))){
var inst_32067 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32101_32176 = state_32073__$1;
(statearr_32101_32176[(2)] = inst_32067);

(statearr_32101_32176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (2))){
var inst_31994 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32073__$1 = state_32073;
if(cljs.core.truth_(inst_31994)){
var statearr_32102_32179 = state_32073__$1;
(statearr_32102_32179[(1)] = (5));

} else {
var statearr_32103_32180 = state_32073__$1;
(statearr_32103_32180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (23))){
var inst_32043 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32073__$1 = state_32073;
if(cljs.core.truth_(inst_32043)){
var statearr_32104_32181 = state_32073__$1;
(statearr_32104_32181[(1)] = (27));

} else {
var statearr_32105_32184 = state_32073__$1;
(statearr_32105_32184[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (19))){
var inst_32030 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32031 = figwheel.client.heads_up.append_message.call(null,inst_32030);
var state_32073__$1 = state_32073;
var statearr_32106_32188 = state_32073__$1;
(statearr_32106_32188[(2)] = inst_32031);

(statearr_32106_32188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (11))){
var inst_32019 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32073__$1 = state_32073;
if(cljs.core.truth_(inst_32019)){
var statearr_32107_32194 = state_32073__$1;
(statearr_32107_32194[(1)] = (15));

} else {
var statearr_32108_32195 = state_32073__$1;
(statearr_32108_32195[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (9))){
var inst_32002 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32110_32198 = state_32073__$1;
(statearr_32110_32198[(2)] = inst_32002);

(statearr_32110_32198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (5))){
var inst_31996 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32073__$1 = state_32073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32073__$1,(8),inst_31996);
} else {
if((state_val_32074 === (14))){
var inst_32017 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32111_32201 = state_32073__$1;
(statearr_32111_32201[(2)] = inst_32017);

(statearr_32111_32201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (26))){
var inst_32041 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32112_32204 = state_32073__$1;
(statearr_32112_32204[(2)] = inst_32041);

(statearr_32112_32204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (16))){
var inst_32028 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32073__$1 = state_32073;
if(cljs.core.truth_(inst_32028)){
var statearr_32114_32208 = state_32073__$1;
(statearr_32114_32208[(1)] = (19));

} else {
var statearr_32115_32209 = state_32073__$1;
(statearr_32115_32209[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (30))){
var inst_32048 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32116_32210 = state_32073__$1;
(statearr_32116_32210[(2)] = inst_32048);

(statearr_32116_32210[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (10))){
var inst_32009 = figwheel.client.heads_up.clear.call(null);
var state_32073__$1 = state_32073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32073__$1,(13),inst_32009);
} else {
if((state_val_32074 === (18))){
var inst_32026 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32117_32216 = state_32073__$1;
(statearr_32117_32216[(2)] = inst_32026);

(statearr_32117_32216[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32074 === (8))){
var inst_31998 = (state_32073[(2)]);
var state_32073__$1 = state_32073;
var statearr_32118_32219 = state_32073__$1;
(statearr_32118_32219[(2)] = inst_31998);

(statearr_32118_32219[(1)] = (7));


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
});})(c__22838__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22773__auto__,c__22838__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22774__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22774__auto____0 = (function (){
var statearr_32122 = [null,null,null,null,null,null,null,null,null];
(statearr_32122[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22774__auto__);

(statearr_32122[(1)] = (1));

return statearr_32122;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22774__auto____1 = (function (state_32073){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_32073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e32123){if((e32123 instanceof Object)){
var ex__22777__auto__ = e32123;
var statearr_32124_32225 = state_32073;
(statearr_32124_32225[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32229 = state_32073;
state_32073 = G__32229;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22774__auto__ = function(state_32073){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22774__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22774__auto____1.call(this,state_32073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22774__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22774__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto__,msg_hist,msg_names,msg))
})();
var state__22840__auto__ = (function (){var statearr_32125 = f__22839__auto__.call(null);
(statearr_32125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto__);

return statearr_32125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto__,msg_hist,msg_names,msg))
);

return c__22838__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22838__auto___32310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto___32310,ch){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto___32310,ch){
return (function (state_32285){
var state_val_32286 = (state_32285[(1)]);
if((state_val_32286 === (1))){
var state_32285__$1 = state_32285;
var statearr_32287_32313 = state_32285__$1;
(statearr_32287_32313[(2)] = null);

(statearr_32287_32313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32286 === (2))){
var state_32285__$1 = state_32285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32285__$1,(4),ch);
} else {
if((state_val_32286 === (3))){
var inst_32283 = (state_32285[(2)]);
var state_32285__$1 = state_32285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32285__$1,inst_32283);
} else {
if((state_val_32286 === (4))){
var inst_32273 = (state_32285[(7)]);
var inst_32273__$1 = (state_32285[(2)]);
var state_32285__$1 = (function (){var statearr_32292 = state_32285;
(statearr_32292[(7)] = inst_32273__$1);

return statearr_32292;
})();
if(cljs.core.truth_(inst_32273__$1)){
var statearr_32293_32315 = state_32285__$1;
(statearr_32293_32315[(1)] = (5));

} else {
var statearr_32294_32316 = state_32285__$1;
(statearr_32294_32316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32286 === (5))){
var inst_32273 = (state_32285[(7)]);
var inst_32275 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32273);
var state_32285__$1 = state_32285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32285__$1,(8),inst_32275);
} else {
if((state_val_32286 === (6))){
var state_32285__$1 = state_32285;
var statearr_32295_32317 = state_32285__$1;
(statearr_32295_32317[(2)] = null);

(statearr_32295_32317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32286 === (7))){
var inst_32281 = (state_32285[(2)]);
var state_32285__$1 = state_32285;
var statearr_32296_32318 = state_32285__$1;
(statearr_32296_32318[(2)] = inst_32281);

(statearr_32296_32318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32286 === (8))){
var inst_32277 = (state_32285[(2)]);
var state_32285__$1 = (function (){var statearr_32297 = state_32285;
(statearr_32297[(8)] = inst_32277);

return statearr_32297;
})();
var statearr_32298_32319 = state_32285__$1;
(statearr_32298_32319[(2)] = null);

(statearr_32298_32319[(1)] = (2));


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
});})(c__22838__auto___32310,ch))
;
return ((function (switch__22773__auto__,c__22838__auto___32310,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22774__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22774__auto____0 = (function (){
var statearr_32302 = [null,null,null,null,null,null,null,null,null];
(statearr_32302[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22774__auto__);

(statearr_32302[(1)] = (1));

return statearr_32302;
});
var figwheel$client$heads_up_plugin_$_state_machine__22774__auto____1 = (function (state_32285){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_32285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e32307){if((e32307 instanceof Object)){
var ex__22777__auto__ = e32307;
var statearr_32308_32327 = state_32285;
(statearr_32308_32327[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32333 = state_32285;
state_32285 = G__32333;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22774__auto__ = function(state_32285){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22774__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22774__auto____1.call(this,state_32285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22774__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22774__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto___32310,ch))
})();
var state__22840__auto__ = (function (){var statearr_32309 = f__22839__auto__.call(null);
(statearr_32309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto___32310);

return statearr_32309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto___32310,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto__){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto__){
return (function (state_32361){
var state_val_32362 = (state_32361[(1)]);
if((state_val_32362 === (1))){
var inst_32356 = cljs.core.async.timeout.call(null,(3000));
var state_32361__$1 = state_32361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32361__$1,(2),inst_32356);
} else {
if((state_val_32362 === (2))){
var inst_32358 = (state_32361[(2)]);
var inst_32359 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32361__$1 = (function (){var statearr_32363 = state_32361;
(statearr_32363[(7)] = inst_32358);

return statearr_32363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32361__$1,inst_32359);
} else {
return null;
}
}
});})(c__22838__auto__))
;
return ((function (switch__22773__auto__,c__22838__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22774__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22774__auto____0 = (function (){
var statearr_32367 = [null,null,null,null,null,null,null,null];
(statearr_32367[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22774__auto__);

(statearr_32367[(1)] = (1));

return statearr_32367;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22774__auto____1 = (function (state_32361){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_32361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e32368){if((e32368 instanceof Object)){
var ex__22777__auto__ = e32368;
var statearr_32369_32371 = state_32361;
(statearr_32369_32371[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32372 = state_32361;
state_32361 = G__32372;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22774__auto__ = function(state_32361){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22774__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22774__auto____1.call(this,state_32361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22774__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22774__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto__))
})();
var state__22840__auto__ = (function (){var statearr_32370 = f__22839__auto__.call(null);
(statearr_32370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto__);

return statearr_32370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto__))
);

return c__22838__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__18568__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18568__auto__)){
return ("CustomEvent" in window);
} else {
return and__18568__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj32376 = {"detail":url};
return obj32376;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32377){
var map__32384 = p__32377;
var map__32384__$1 = ((((!((map__32384 == null)))?((((map__32384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32384):map__32384);
var ed = map__32384__$1;
var formatted_exception = cljs.core.get.call(null,map__32384__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32384__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32384__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32386_32394 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32387_32395 = null;
var count__32388_32396 = (0);
var i__32389_32397 = (0);
while(true){
if((i__32389_32397 < count__32388_32396)){
var msg_32398 = cljs.core._nth.call(null,chunk__32387_32395,i__32389_32397);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32398);

var G__32399 = seq__32386_32394;
var G__32400 = chunk__32387_32395;
var G__32401 = count__32388_32396;
var G__32402 = (i__32389_32397 + (1));
seq__32386_32394 = G__32399;
chunk__32387_32395 = G__32400;
count__32388_32396 = G__32401;
i__32389_32397 = G__32402;
continue;
} else {
var temp__4657__auto___32403 = cljs.core.seq.call(null,seq__32386_32394);
if(temp__4657__auto___32403){
var seq__32386_32404__$1 = temp__4657__auto___32403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32386_32404__$1)){
var c__19383__auto___32405 = cljs.core.chunk_first.call(null,seq__32386_32404__$1);
var G__32406 = cljs.core.chunk_rest.call(null,seq__32386_32404__$1);
var G__32407 = c__19383__auto___32405;
var G__32408 = cljs.core.count.call(null,c__19383__auto___32405);
var G__32409 = (0);
seq__32386_32394 = G__32406;
chunk__32387_32395 = G__32407;
count__32388_32396 = G__32408;
i__32389_32397 = G__32409;
continue;
} else {
var msg_32410 = cljs.core.first.call(null,seq__32386_32404__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32410);

var G__32411 = cljs.core.next.call(null,seq__32386_32404__$1);
var G__32412 = null;
var G__32413 = (0);
var G__32414 = (0);
seq__32386_32394 = G__32411;
chunk__32387_32395 = G__32412;
count__32388_32396 = G__32413;
i__32389_32397 = G__32414;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32415){
var map__32421 = p__32415;
var map__32421__$1 = ((((!((map__32421 == null)))?((((map__32421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32421):map__32421);
var w = map__32421__$1;
var message = cljs.core.get.call(null,map__32421__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18568__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18568__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18568__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32446 = cljs.core.seq.call(null,plugins);
var chunk__32447 = null;
var count__32448 = (0);
var i__32449 = (0);
while(true){
if((i__32449 < count__32448)){
var vec__32450 = cljs.core._nth.call(null,chunk__32447,i__32449);
var k = cljs.core.nth.call(null,vec__32450,(0),null);
var plugin = cljs.core.nth.call(null,vec__32450,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32453 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32446,chunk__32447,count__32448,i__32449,pl_32453,vec__32450,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32453.call(null,msg_hist);
});})(seq__32446,chunk__32447,count__32448,i__32449,pl_32453,vec__32450,k,plugin))
);
} else {
}

var G__32457 = seq__32446;
var G__32458 = chunk__32447;
var G__32459 = count__32448;
var G__32460 = (i__32449 + (1));
seq__32446 = G__32457;
chunk__32447 = G__32458;
count__32448 = G__32459;
i__32449 = G__32460;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32446);
if(temp__4657__auto__){
var seq__32446__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32446__$1)){
var c__19383__auto__ = cljs.core.chunk_first.call(null,seq__32446__$1);
var G__32461 = cljs.core.chunk_rest.call(null,seq__32446__$1);
var G__32462 = c__19383__auto__;
var G__32463 = cljs.core.count.call(null,c__19383__auto__);
var G__32464 = (0);
seq__32446 = G__32461;
chunk__32447 = G__32462;
count__32448 = G__32463;
i__32449 = G__32464;
continue;
} else {
var vec__32451 = cljs.core.first.call(null,seq__32446__$1);
var k = cljs.core.nth.call(null,vec__32451,(0),null);
var plugin = cljs.core.nth.call(null,vec__32451,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32465 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32446,chunk__32447,count__32448,i__32449,pl_32465,vec__32451,k,plugin,seq__32446__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32465.call(null,msg_hist);
});})(seq__32446,chunk__32447,count__32448,i__32449,pl_32465,vec__32451,k,plugin,seq__32446__$1,temp__4657__auto__))
);
} else {
}

var G__32468 = cljs.core.next.call(null,seq__32446__$1);
var G__32469 = null;
var G__32470 = (0);
var G__32471 = (0);
seq__32446 = G__32468;
chunk__32447 = G__32469;
count__32448 = G__32470;
i__32449 = G__32471;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args32472 = [];
var len__19638__auto___32479 = arguments.length;
var i__19639__auto___32480 = (0);
while(true){
if((i__19639__auto___32480 < len__19638__auto___32479)){
args32472.push((arguments[i__19639__auto___32480]));

var G__32482 = (i__19639__auto___32480 + (1));
i__19639__auto___32480 = G__32482;
continue;
} else {
}
break;
}

var G__32474 = args32472.length;
switch (G__32474) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32472.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19645__auto__ = [];
var len__19638__auto___32514 = arguments.length;
var i__19639__auto___32515 = (0);
while(true){
if((i__19639__auto___32515 < len__19638__auto___32514)){
args__19645__auto__.push((arguments[i__19639__auto___32515]));

var G__32518 = (i__19639__auto___32515 + (1));
i__19639__auto___32515 = G__32518;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32507){
var map__32508 = p__32507;
var map__32508__$1 = ((((!((map__32508 == null)))?((((map__32508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32508):map__32508);
var opts = map__32508__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32498){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32498));
});

//# sourceMappingURL=client.js.map?rel=1531355035475