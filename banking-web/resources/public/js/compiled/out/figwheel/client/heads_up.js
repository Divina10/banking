// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.clojure_symbol_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19645__auto__ = [];
var len__19638__auto___32767 = arguments.length;
var i__19639__auto___32768 = (0);
while(true){
if((i__19639__auto___32768 < len__19638__auto___32767)){
args__19645__auto__.push((arguments[i__19639__auto___32768]));

var G__32769 = (i__19639__auto___32768 + (1));
i__19639__auto___32768 = G__32769;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((2) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19646__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__32758_32770 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__32759_32771 = null;
var count__32760_32772 = (0);
var i__32761_32773 = (0);
while(true){
if((i__32761_32773 < count__32760_32772)){
var k_32774 = cljs.core._nth.call(null,chunk__32759_32771,i__32761_32773);
e.setAttribute(cljs.core.name.call(null,k_32774),cljs.core.get.call(null,attrs,k_32774));

var G__32775 = seq__32758_32770;
var G__32776 = chunk__32759_32771;
var G__32777 = count__32760_32772;
var G__32778 = (i__32761_32773 + (1));
seq__32758_32770 = G__32775;
chunk__32759_32771 = G__32776;
count__32760_32772 = G__32777;
i__32761_32773 = G__32778;
continue;
} else {
var temp__4657__auto___32779 = cljs.core.seq.call(null,seq__32758_32770);
if(temp__4657__auto___32779){
var seq__32758_32780__$1 = temp__4657__auto___32779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32758_32780__$1)){
var c__19383__auto___32781 = cljs.core.chunk_first.call(null,seq__32758_32780__$1);
var G__32782 = cljs.core.chunk_rest.call(null,seq__32758_32780__$1);
var G__32783 = c__19383__auto___32781;
var G__32784 = cljs.core.count.call(null,c__19383__auto___32781);
var G__32785 = (0);
seq__32758_32770 = G__32782;
chunk__32759_32771 = G__32783;
count__32760_32772 = G__32784;
i__32761_32773 = G__32785;
continue;
} else {
var k_32786 = cljs.core.first.call(null,seq__32758_32780__$1);
e.setAttribute(cljs.core.name.call(null,k_32786),cljs.core.get.call(null,attrs,k_32786));

var G__32787 = cljs.core.next.call(null,seq__32758_32780__$1);
var G__32788 = null;
var G__32789 = (0);
var G__32790 = (0);
seq__32758_32770 = G__32787;
chunk__32759_32771 = G__32788;
count__32760_32772 = G__32789;
i__32761_32773 = G__32790;
continue;
}
} else {
}
}
break;
}

var seq__32762_32791 = cljs.core.seq.call(null,children);
var chunk__32763_32792 = null;
var count__32764_32793 = (0);
var i__32765_32794 = (0);
while(true){
if((i__32765_32794 < count__32764_32793)){
var ch_32795 = cljs.core._nth.call(null,chunk__32763_32792,i__32765_32794);
e.appendChild(ch_32795);

var G__32796 = seq__32762_32791;
var G__32797 = chunk__32763_32792;
var G__32798 = count__32764_32793;
var G__32799 = (i__32765_32794 + (1));
seq__32762_32791 = G__32796;
chunk__32763_32792 = G__32797;
count__32764_32793 = G__32798;
i__32765_32794 = G__32799;
continue;
} else {
var temp__4657__auto___32800 = cljs.core.seq.call(null,seq__32762_32791);
if(temp__4657__auto___32800){
var seq__32762_32801__$1 = temp__4657__auto___32800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32762_32801__$1)){
var c__19383__auto___32802 = cljs.core.chunk_first.call(null,seq__32762_32801__$1);
var G__32803 = cljs.core.chunk_rest.call(null,seq__32762_32801__$1);
var G__32804 = c__19383__auto___32802;
var G__32805 = cljs.core.count.call(null,c__19383__auto___32802);
var G__32806 = (0);
seq__32762_32791 = G__32803;
chunk__32763_32792 = G__32804;
count__32764_32793 = G__32805;
i__32765_32794 = G__32806;
continue;
} else {
var ch_32807 = cljs.core.first.call(null,seq__32762_32801__$1);
e.appendChild(ch_32807);

var G__32808 = cljs.core.next.call(null,seq__32762_32801__$1);
var G__32809 = null;
var G__32810 = (0);
var G__32811 = (0);
seq__32762_32791 = G__32808;
chunk__32763_32792 = G__32809;
count__32764_32793 = G__32810;
i__32765_32794 = G__32811;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq32755){
var G__32756 = cljs.core.first.call(null,seq32755);
var seq32755__$1 = cljs.core.next.call(null,seq32755);
var G__32757 = cljs.core.first.call(null,seq32755__$1);
var seq32755__$2 = cljs.core.next.call(null,seq32755__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__32756,G__32757,seq32755__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19493__auto__,prefer_table__19494__auto__,method_cache__19495__auto__,cached_hierarchy__19496__auto__,hierarchy__19497__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19493__auto__,prefer_table__19494__auto__,method_cache__19495__auto__,cached_hierarchy__19496__auto__,hierarchy__19497__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19497__auto__,method_table__19493__auto__,prefer_table__19494__auto__,method_cache__19495__auto__,cached_hierarchy__19496__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_32812 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_32812.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_32812.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_32812.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_32812);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__32813,st_map){
var map__32818 = p__32813;
var map__32818__$1 = ((((!((map__32818 == null)))?((((map__32818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32818):map__32818);
var container_el = cljs.core.get.call(null,map__32818__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__32818,map__32818__$1,container_el){
return (function (p__32820){
var vec__32821 = p__32820;
var k = cljs.core.nth.call(null,vec__32821,(0),null);
var v = cljs.core.nth.call(null,vec__32821,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__32818,map__32818__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__32824,dom_str){
var map__32827 = p__32824;
var map__32827__$1 = ((((!((map__32827 == null)))?((((map__32827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32827):map__32827);
var c = map__32827__$1;
var content_area_el = cljs.core.get.call(null,map__32827__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__32830){
var map__32835 = p__32830;
var map__32835__$1 = ((((!((map__32835 == null)))?((((map__32835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32835):map__32835);
var content_area_el = cljs.core.get.call(null,map__32835__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto__){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto__){
return (function (state_32884){
var state_val_32885 = (state_32884[(1)]);
if((state_val_32885 === (1))){
var inst_32869 = (state_32884[(7)]);
var inst_32869__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32870 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32871 = ["10px","10px","100%","68px","1.0"];
var inst_32872 = cljs.core.PersistentHashMap.fromArrays(inst_32870,inst_32871);
var inst_32873 = cljs.core.merge.call(null,inst_32872,style);
var inst_32874 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32869__$1,inst_32873);
var inst_32875 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32869__$1,msg);
var inst_32876 = cljs.core.async.timeout.call(null,(300));
var state_32884__$1 = (function (){var statearr_32886 = state_32884;
(statearr_32886[(8)] = inst_32874);

(statearr_32886[(9)] = inst_32875);

(statearr_32886[(7)] = inst_32869__$1);

return statearr_32886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32884__$1,(2),inst_32876);
} else {
if((state_val_32885 === (2))){
var inst_32869 = (state_32884[(7)]);
var inst_32878 = (state_32884[(2)]);
var inst_32879 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32880 = ["auto"];
var inst_32881 = cljs.core.PersistentHashMap.fromArrays(inst_32879,inst_32880);
var inst_32882 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32869,inst_32881);
var state_32884__$1 = (function (){var statearr_32887 = state_32884;
(statearr_32887[(10)] = inst_32878);

return statearr_32887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32884__$1,inst_32882);
} else {
return null;
}
}
});})(c__22838__auto__))
;
return ((function (switch__22773__auto__,c__22838__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22774__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22774__auto____0 = (function (){
var statearr_32891 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32891[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22774__auto__);

(statearr_32891[(1)] = (1));

return statearr_32891;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22774__auto____1 = (function (state_32884){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_32884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e32892){if((e32892 instanceof Object)){
var ex__22777__auto__ = e32892;
var statearr_32893_32901 = state_32884;
(statearr_32893_32901[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32902 = state_32884;
state_32884 = G__32902;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22774__auto__ = function(state_32884){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22774__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22774__auto____1.call(this,state_32884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22774__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22774__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto__))
})();
var state__22840__auto__ = (function (){var statearr_32894 = f__22839__auto__.call(null);
(statearr_32894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto__);

return statearr_32894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto__))
);

return c__22838__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__32908 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__32908,(0),null);
var ln = cljs.core.nth.call(null,vec__32908,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__32914 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__32914,(0),null);
var file_line = cljs.core.nth.call(null,vec__32914,(1),null);
var file_column = cljs.core.nth.call(null,vec__32914,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32914,file_name,file_line,file_column){
return (function (p1__32911_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__32911_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__32914,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18580__auto__ = file_line;
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
var and__18568__auto__ = cause;
if(cljs.core.truth_(and__18568__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18568__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__32932 = figwheel.client.heads_up.ensure_container.call(null);
var map__32932__$1 = ((((!((map__32932 == null)))?((((map__32932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32932):map__32932);
var content_area_el = cljs.core.get.call(null,map__32932__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto__){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto__){
return (function (state_32980){
var state_val_32981 = (state_32980[(1)]);
if((state_val_32981 === (1))){
var inst_32963 = (state_32980[(7)]);
var inst_32963__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32964 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32965 = ["0.0"];
var inst_32966 = cljs.core.PersistentHashMap.fromArrays(inst_32964,inst_32965);
var inst_32967 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32963__$1,inst_32966);
var inst_32968 = cljs.core.async.timeout.call(null,(300));
var state_32980__$1 = (function (){var statearr_32982 = state_32980;
(statearr_32982[(7)] = inst_32963__$1);

(statearr_32982[(8)] = inst_32967);

return statearr_32982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32980__$1,(2),inst_32968);
} else {
if((state_val_32981 === (2))){
var inst_32963 = (state_32980[(7)]);
var inst_32970 = (state_32980[(2)]);
var inst_32971 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_32972 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_32973 = cljs.core.PersistentHashMap.fromArrays(inst_32971,inst_32972);
var inst_32974 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32963,inst_32973);
var inst_32975 = cljs.core.async.timeout.call(null,(200));
var state_32980__$1 = (function (){var statearr_32983 = state_32980;
(statearr_32983[(9)] = inst_32970);

(statearr_32983[(10)] = inst_32974);

return statearr_32983;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32980__$1,(3),inst_32975);
} else {
if((state_val_32981 === (3))){
var inst_32963 = (state_32980[(7)]);
var inst_32977 = (state_32980[(2)]);
var inst_32978 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32963,"");
var state_32980__$1 = (function (){var statearr_32984 = state_32980;
(statearr_32984[(11)] = inst_32977);

return statearr_32984;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32980__$1,inst_32978);
} else {
return null;
}
}
}
});})(c__22838__auto__))
;
return ((function (switch__22773__auto__,c__22838__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22774__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22774__auto____0 = (function (){
var statearr_32988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32988[(0)] = figwheel$client$heads_up$clear_$_state_machine__22774__auto__);

(statearr_32988[(1)] = (1));

return statearr_32988;
});
var figwheel$client$heads_up$clear_$_state_machine__22774__auto____1 = (function (state_32980){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_32980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e32989){if((e32989 instanceof Object)){
var ex__22777__auto__ = e32989;
var statearr_32990_32994 = state_32980;
(statearr_32990_32994[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32995 = state_32980;
state_32980 = G__32995;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22774__auto__ = function(state_32980){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22774__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22774__auto____1.call(this,state_32980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22774__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22774__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto__))
})();
var state__22840__auto__ = (function (){var statearr_32991 = f__22839__auto__.call(null);
(statearr_32991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto__);

return statearr_32991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto__))
);

return c__22838__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22838__auto__){
return (function (){
var f__22839__auto__ = (function (){var switch__22773__auto__ = ((function (c__22838__auto__){
return (function (state_33028){
var state_val_33029 = (state_33028[(1)]);
if((state_val_33029 === (1))){
var inst_33018 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_33028__$1 = state_33028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33028__$1,(2),inst_33018);
} else {
if((state_val_33029 === (2))){
var inst_33020 = (state_33028[(2)]);
var inst_33021 = cljs.core.async.timeout.call(null,(400));
var state_33028__$1 = (function (){var statearr_33030 = state_33028;
(statearr_33030[(7)] = inst_33020);

return statearr_33030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33028__$1,(3),inst_33021);
} else {
if((state_val_33029 === (3))){
var inst_33023 = (state_33028[(2)]);
var inst_33024 = figwheel.client.heads_up.clear.call(null);
var state_33028__$1 = (function (){var statearr_33031 = state_33028;
(statearr_33031[(8)] = inst_33023);

return statearr_33031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33028__$1,(4),inst_33024);
} else {
if((state_val_33029 === (4))){
var inst_33026 = (state_33028[(2)]);
var state_33028__$1 = state_33028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33028__$1,inst_33026);
} else {
return null;
}
}
}
}
});})(c__22838__auto__))
;
return ((function (switch__22773__auto__,c__22838__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22774__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22774__auto____0 = (function (){
var statearr_33035 = [null,null,null,null,null,null,null,null,null];
(statearr_33035[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22774__auto__);

(statearr_33035[(1)] = (1));

return statearr_33035;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22774__auto____1 = (function (state_33028){
while(true){
var ret_value__22775__auto__ = (function (){try{while(true){
var result__22776__auto__ = switch__22773__auto__.call(null,state_33028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22776__auto__;
}
break;
}
}catch (e33036){if((e33036 instanceof Object)){
var ex__22777__auto__ = e33036;
var statearr_33037_33045 = state_33028;
(statearr_33037_33045[(5)] = ex__22777__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33046 = state_33028;
state_33028 = G__33046;
continue;
} else {
return ret_value__22775__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22774__auto__ = function(state_33028){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22774__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22774__auto____1.call(this,state_33028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22774__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22774__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22774__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22774__auto__;
})()
;})(switch__22773__auto__,c__22838__auto__))
})();
var state__22840__auto__ = (function (){var statearr_33039 = f__22839__auto__.call(null);
(statearr_33039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22838__auto__);

return statearr_33039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22840__auto__);
});})(c__22838__auto__))
);

return c__22838__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1531355036075