// Compiled by ClojureScript 1.7.107 {}
goog.provide('reforms.validation');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('reforms.binding.core');
goog.require('clojure.string');
reforms.validation.valid_QMARK_;
reforms.validation.find_validation_error = (function reforms$validation$find_validation_error(kork,errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__26236_SHARP_){
return new cljs.core.Keyword(null,"korks","korks",-1343842342).cljs$core$IFn$_invoke$arity$1(p1__26236_SHARP_).call(null,kork);
}),errors));
} else {
return null;
}
});
reforms.validation.sequable_QMARK_ = (function reforms$validation$sequable_QMARK_(x){
try{cljs.core.seq.call(null,x);

return true;
}catch (e26238){if((e26238 instanceof Error)){
var _ = e26238;
return false;
} else {
throw e26238;

}
}});
reforms.validation.present_QMARK_ = (function reforms$validation$present_QMARK_(x){
if(cljs.core.truth_((function (){var and__18568__auto__ = x;
if(cljs.core.truth_(and__18568__auto__)){
return (cljs.core.not.call(null,(function (){var and__18568__auto____$1 = typeof x === 'string';
if(and__18568__auto____$1){
return clojure.string.blank_QMARK_.call(null,x);
} else {
return and__18568__auto____$1;
}
})())) && (cljs.core.not.call(null,(function (){var and__18568__auto____$1 = reforms.validation.sequable_QMARK_.call(null,x);
if(cljs.core.truth_(and__18568__auto____$1)){
return cljs.core.empty_QMARK_.call(null,x);
} else {
return and__18568__auto____$1;
}
})()));
} else {
return and__18568__auto__;
}
})())){
return true;
} else {
return null;
}
});
reforms.validation._STAR_validation_errors_STAR_ = null;
reforms.validation.validating_field = (function reforms$validation$validating_field(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26241 = arguments.length;
var i__19639__auto___26242 = (0);
while(true){
if((i__19639__auto___26242 < len__19638__auto___26241)){
args__19645__auto__.push((arguments[i__19639__auto___26242]));

var G__26243 = (i__19639__auto___26242 + (1));
i__19639__auto___26242 = G__26243;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((1) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((1)),(0))):null);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19646__auto__);
});

reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic = (function (field_fn,args){
if(cljs.core.not_any_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244),null], null), null),args)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The validating version uses :validation-error-fn internally."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-any?","not-any?",-2114707554,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244),null], null), null),new cljs.core.Symbol(null,"args","args",-1338879193,null))))].join('')));
}

return cljs.core.apply.call(null,field_fn,cljs.core.conj.call(null,cljs.core.vec.call(null,args),new cljs.core.Keyword(null,"valid?","valid?",-212412379),(function (korks){
return reforms.validation.valid_QMARK_.call(null,korks,reforms.validation._STAR_validation_errors_STAR_);
}),new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244),(function (korks){
var temp__4657__auto__ = reforms.validation.find_validation_error.call(null,korks,reforms.validation._STAR_validation_errors_STAR_);
if(cljs.core.truth_(temp__4657__auto__)){
var err = temp__4657__auto__;
return new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(err);
} else {
return null;
}
})));
});

reforms.validation.validating_field.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_field.cljs$lang$applyTo = (function (seq26239){
var G__26240 = cljs.core.first.call(null,seq26239);
var seq26239__$1 = cljs.core.next.call(null,seq26239);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic(G__26240,seq26239__$1);
});
/**
 * Used by [reforms.validation/validating-fields] macro.
 */
reforms.validation.validating_fields_fn = (function reforms$validation$validating_fields_fn(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26251 = arguments.length;
var i__19639__auto___26252 = (0);
while(true){
if((i__19639__auto___26252 < len__19638__auto___26251)){
args__19645__auto__.push((arguments[i__19639__auto___26252]));

var G__26253 = (i__19639__auto___26252 + (1));
i__19639__auto___26252 = G__26253;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((1) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((1)),(0))):null);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19646__auto__);
});

reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic = (function (validation_errors,fields){
var _STAR_validation_errors_STAR_26246 = reforms.validation._STAR_validation_errors_STAR_;
reforms.validation._STAR_validation_errors_STAR_ = validation_errors;

try{return cljs.core.doall.call(null,(function (){var iter__19352__auto__ = ((function (_STAR_validation_errors_STAR_26246){
return (function reforms$validation$iter__26247(s__26248){
return (new cljs.core.LazySeq(null,((function (_STAR_validation_errors_STAR_26246){
return (function (){
var s__26248__$1 = s__26248;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26248__$1);
if(temp__4657__auto__){
var s__26248__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26248__$2)){
var c__19350__auto__ = cljs.core.chunk_first.call(null,s__26248__$2);
var size__19351__auto__ = cljs.core.count.call(null,c__19350__auto__);
var b__26250 = cljs.core.chunk_buffer.call(null,size__19351__auto__);
if((function (){var i__26249 = (0);
while(true){
if((i__26249 < size__19351__auto__)){
var field = cljs.core._nth.call(null,c__19350__auto__,i__26249);
cljs.core.chunk_append.call(null,b__26250,field.call(null));

var G__26254 = (i__26249 + (1));
i__26249 = G__26254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26250),reforms$validation$iter__26247.call(null,cljs.core.chunk_rest.call(null,s__26248__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26250),null);
}
} else {
var field = cljs.core.first.call(null,s__26248__$2);
return cljs.core.cons.call(null,field.call(null),reforms$validation$iter__26247.call(null,cljs.core.rest.call(null,s__26248__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_validation_errors_STAR_26246))
,null,null));
});})(_STAR_validation_errors_STAR_26246))
;
return iter__19352__auto__.call(null,fields);
})());
}finally {reforms.validation._STAR_validation_errors_STAR_ = _STAR_validation_errors_STAR_26246;
}});

reforms.validation.validating_fields_fn.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_fields_fn.cljs$lang$applyTo = (function (seq26244){
var G__26245 = cljs.core.first.call(null,seq26244);
var seq26244__$1 = cljs.core.next.call(null,seq26244);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic(G__26245,seq26244__$1);
});
/**
 * Returns a validation error for a key sequence.
 * 
 * Arguments:
 * 
 * - korks         - key sequence the error refers to
 * - error-message - string containing the error message
 */
reforms.validation.validation_error = (function reforms$validation$validation_error(korks,error_message){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"korks","korks",-1343842342),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.seq.call(null,korks)),new cljs.core.Keyword(null,"error-message","error-message",1756021561),error_message], null);
});
/**
 * Validates data and returns a list of errors.
 * 
 * Arguments:
 * 
 * - data      - data to validate
 * - validators - seq of validators to use
 */
reforms.validation.validate = (function reforms$validation$validate(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26258 = arguments.length;
var i__19639__auto___26259 = (0);
while(true){
if((i__19639__auto___26259 < len__19638__auto___26258)){
args__19645__auto__.push((arguments[i__19639__auto___26259]));

var G__26260 = (i__19639__auto___26259 + (1));
i__19639__auto___26259 = G__26260;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((1) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((1)),(0))):null);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19646__auto__);
});

reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic = (function (data,validators){
return cljs.core.doall.call(null,cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.keep.call(null,(function (p1__26255_SHARP_){
return p1__26255_SHARP_.call(null,data);
}),validators))));
});

reforms.validation.validate.cljs$lang$maxFixedArity = (1);

reforms.validation.validate.cljs$lang$applyTo = (function (seq26256){
var G__26257 = cljs.core.first.call(null,seq26256);
var seq26256__$1 = cljs.core.next.call(null,seq26256);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic(G__26257,seq26256__$1);
});
/**
 * Returns true if there are no errors.
 * 
 * Arguments:
 * 
 * - errors - result of validation
 * - kork   - (optional) match against this key seq
 */
reforms.validation.valid_QMARK_ = (function reforms$validation$valid_QMARK_(var_args){
var args26261 = [];
var len__19638__auto___26264 = arguments.length;
var i__19639__auto___26265 = (0);
while(true){
if((i__19639__auto___26265 < len__19638__auto___26264)){
args26261.push((arguments[i__19639__auto___26265]));

var G__26266 = (i__19639__auto___26265 + (1));
i__19639__auto___26265 = G__26266;
continue;
} else {
}
break;
}

var G__26263 = args26261.length;
switch (G__26263) {
case 1:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26261.length)].join('')));

}
});

reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (errors){
return ((errors == null)) || (cljs.core.empty_QMARK_.call(null,errors));
});

reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (kork,errors){
return (reforms.validation.find_validation_error.call(null,kork,errors) == null);
});

reforms.validation.valid_QMARK_.cljs$lang$maxFixedArity = 2;
/**
 * Complement of [[valid?]]
 */
reforms.validation.invalid_QMARK_ = cljs.core.complement.call(null,reforms.validation.valid_QMARK_);
/**
 * Renders errors as unordered list.
 * 
 * Arguments:
 * 
 * - errors - results of validation
 */
reforms.validation.render_errors = (function reforms$validation$render_errors(errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("error validation"),cljs.core.str(((cljs.core.seq.call(null,errors))?" validation-failed":null))].join('')], null),(function (){var iter__19352__auto__ = (function reforms$validation$render_errors_$_iter__26272(s__26273){
return (new cljs.core.LazySeq(null,(function (){
var s__26273__$1 = s__26273;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26273__$1);
if(temp__4657__auto__){
var s__26273__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26273__$2)){
var c__19350__auto__ = cljs.core.chunk_first.call(null,s__26273__$2);
var size__19351__auto__ = cljs.core.count.call(null,c__19350__auto__);
var b__26275 = cljs.core.chunk_buffer.call(null,size__19351__auto__);
if((function (){var i__26274 = (0);
while(true){
if((i__26274 < size__19351__auto__)){
var failure = cljs.core._nth.call(null,c__19350__auto__,i__26274);
cljs.core.chunk_append.call(null,b__26275,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null));

var G__26276 = (i__26274 + (1));
i__26274 = G__26276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26275),reforms$validation$render_errors_$_iter__26272.call(null,cljs.core.chunk_rest.call(null,s__26273__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26275),null);
}
} else {
var failure = cljs.core.first.call(null,s__26273__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null),reforms$validation$render_errors_$_iter__26272.call(null,cljs.core.rest.call(null,s__26273__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19352__auto__.call(null,errors);
})()], null);
} else {
return null;
}
});
/**
 * Equality validator.
 * 
 * Example:
 * 
 *     (equal [:user :password1] [:user :password2] "Passwords do not match"]
 */
reforms.validation.equal = (function reforms$validation$equal(korks1,korks2,error_message){
return (function (data){
var lhs = (function (){var or__18580__auto__ = cljs.core.get_in.call(null,data,korks1);
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return "";
}
})();
var rhs = (function (){var or__18580__auto__ = cljs.core.get_in.call(null,data,korks2);
if(cljs.core.truth_(or__18580__auto__)){
return or__18580__auto__;
} else {
return "";
}
})();
if(cljs.core._EQ_.call(null,lhs,rhs)){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks2], null),error_message);
}
});
});
/**
 * Presence validator.
 * 
 *   Example:
 * 
 *    (present [:user :login] "Enter the login"]
 */
reforms.validation.present = (function reforms$validation$present(korks,error_message){
return (function (data){
var x = cljs.core.get_in.call(null,data,korks);
if(cljs.core.truth_(reforms.validation.present_QMARK_.call(null,x))){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
}
});
});
/**
 * Regex validator.
 * 
 *   Example:
 * 
 *    (matches [:user :email] #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" "Invalid email address"]
 */
reforms.validation.matches = (function reforms$validation$matches(korks,re,error_message){
return (function (data){
var x = cljs.core.get_in.call(null,data,korks);
if(cljs.core.truth_(cljs.core.re_matches.call(null,re,x))){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
}
});
});
/**
 * Predicate-based validator.
 * 
 *   Example:
 * 
 *   (is-true [:user :email] #(nil? (find-by-email %)) "Email already exists"]
 */
reforms.validation.is_true = (function reforms$validation$is_true(korks,f,error_message){
return (function (data){
if(cljs.core.truth_(f.call(null,cljs.core.get_in.call(null,data,korks)))){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
}
});
});
/**
 * Generates an error. Useful for errors not coming from data but from external sources such as Ajax or RPC.
 * 
 * Example:
 * 
 *     (force-error [:server-error] "Problem connecting to the REST API server")
 */
reforms.validation.force_error = (function reforms$validation$force_error(korks,error_message){
return (function (_){
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
});
});
/**
 * Generates a 'no error' placeholder.
 */
reforms.validation.no_error = (function reforms$validation$no_error(){
return (function (_){
return null;
});
});
/**
 * Groups validators using 'and' boolean logic.
 */
reforms.validation.all = (function reforms$validation$all(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26278 = arguments.length;
var i__19639__auto___26279 = (0);
while(true){
if((i__19639__auto___26279 < len__19638__auto___26278)){
args__19645__auto__.push((arguments[i__19639__auto___26279]));

var G__26280 = (i__19639__auto___26279 + (1));
i__19639__auto___26279 = G__26280;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic = (function (validators){
return (function (data){
return cljs.core.apply.call(null,reforms.validation.validate,data,validators);
});
});

reforms.validation.all.cljs$lang$maxFixedArity = (0);

reforms.validation.all.cljs$lang$applyTo = (function (seq26277){
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26277));
});
/**
 * Validates data and saves the result. **A stateful method.**
 * 
 * Arguments:
 * 
 * - cursor          - the data to validate
 * - ui-state-cursor - this is where validation result will be stored
 * - validators      - a seq of validators
 */
reforms.validation.validate_BANG_ = (function reforms$validation$validate_BANG_(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26284 = arguments.length;
var i__19639__auto___26285 = (0);
while(true){
if((i__19639__auto___26285 < len__19638__auto___26284)){
args__19645__auto__.push((arguments[i__19639__auto___26285]));

var G__26286 = (i__19639__auto___26285 + (1));
i__19639__auto___26285 = G__26286;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((2) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((2)),(0))):null);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19646__auto__);
});

reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cursor,ui_state_cursor,validators){
var validation_errors = cljs.core.apply.call(null,reforms.validation.validate,reforms.binding.core.deref.call(null,cursor),validators);
reforms.binding.core.reset_BANG_.call(null,ui_state_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation-errors","validation-errors",-13445981)], null),validation_errors);

return reforms.validation.valid_QMARK_.call(null,validation_errors);
});

reforms.validation.validate_BANG_.cljs$lang$maxFixedArity = (2);

reforms.validation.validate_BANG_.cljs$lang$applyTo = (function (seq26281){
var G__26282 = cljs.core.first.call(null,seq26281);
var seq26281__$1 = cljs.core.next.call(null,seq26281);
var G__26283 = cljs.core.first.call(null,seq26281__$1);
var seq26281__$2 = cljs.core.next.call(null,seq26281__$1);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26282,G__26283,seq26281__$2);
});
/**
 * Returns validation errors saved by [[validate!]] into ui-state-cursor.
 */
reforms.validation.validation_errors = (function reforms$validation$validation_errors(ui_state_cursor){
return reforms.binding.core.get_in.call(null,ui_state_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation-errors","validation-errors",-13445981)], null));
});
/**
 * Wrapper for [[reforms.core/html5-input]] adding support for validation.
 */
reforms.validation.html5_input = (function reforms$validation$html5_input(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26288 = arguments.length;
var i__19639__auto___26289 = (0);
while(true){
if((i__19639__auto___26289 < len__19638__auto___26288)){
args__19645__auto__.push((arguments[i__19639__auto___26289]));

var G__26290 = (i__19639__auto___26289 + (1));
i__19639__auto___26289 = G__26290;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.html5_input,args);
});

reforms.validation.html5_input.cljs$lang$maxFixedArity = (0);

reforms.validation.html5_input.cljs$lang$applyTo = (function (seq26287){
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26287));
});
/**
 * Wrapper for [[reforms.core/password]] adding support for validation.
 */
reforms.validation.password = (function reforms$validation$password(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26292 = arguments.length;
var i__19639__auto___26293 = (0);
while(true){
if((i__19639__auto___26293 < len__19638__auto___26292)){
args__19645__auto__.push((arguments[i__19639__auto___26293]));

var G__26294 = (i__19639__auto___26293 + (1));
i__19639__auto___26293 = G__26294;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.password,args);
});

reforms.validation.password.cljs$lang$maxFixedArity = (0);

reforms.validation.password.cljs$lang$applyTo = (function (seq26291){
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26291));
});
/**
 * Wrapper for [[reforms.core/text]] adding support for validation.
 */
reforms.validation.text = (function reforms$validation$text(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26296 = arguments.length;
var i__19639__auto___26297 = (0);
while(true){
if((i__19639__auto___26297 < len__19638__auto___26296)){
args__19645__auto__.push((arguments[i__19639__auto___26297]));

var G__26298 = (i__19639__auto___26297 + (1));
i__19639__auto___26297 = G__26298;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.text,args);
});

reforms.validation.text.cljs$lang$maxFixedArity = (0);

reforms.validation.text.cljs$lang$applyTo = (function (seq26295){
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26295));
});
/**
 * Wrapper for [[reforms.core/textarea]] adding support for validation.
 */
reforms.validation.textarea = (function reforms$validation$textarea(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26300 = arguments.length;
var i__19639__auto___26301 = (0);
while(true){
if((i__19639__auto___26301 < len__19638__auto___26300)){
args__19645__auto__.push((arguments[i__19639__auto___26301]));

var G__26302 = (i__19639__auto___26301 + (1));
i__19639__auto___26301 = G__26302;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.textarea,args);
});

reforms.validation.textarea.cljs$lang$maxFixedArity = (0);

reforms.validation.textarea.cljs$lang$applyTo = (function (seq26299){
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26299));
});
/**
 * Wrapper for [[reforms.core/checkbox]] adding support for validation.
 */
reforms.validation.checkbox = (function reforms$validation$checkbox(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26304 = arguments.length;
var i__19639__auto___26305 = (0);
while(true){
if((i__19639__auto___26305 < len__19638__auto___26304)){
args__19645__auto__.push((arguments[i__19639__auto___26305]));

var G__26306 = (i__19639__auto___26305 + (1));
i__19639__auto___26305 = G__26306;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.checkbox,args);
});

reforms.validation.checkbox.cljs$lang$maxFixedArity = (0);

reforms.validation.checkbox.cljs$lang$applyTo = (function (seq26303){
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26303));
});
/**
 * Wrapper for [[reforms.core/select]] adding support for validation.
 */
reforms.validation.select = (function reforms$validation$select(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26308 = arguments.length;
var i__19639__auto___26309 = (0);
while(true){
if((i__19639__auto___26309 < len__19638__auto___26308)){
args__19645__auto__.push((arguments[i__19639__auto___26309]));

var G__26310 = (i__19639__auto___26309 + (1));
i__19639__auto___26309 = G__26310;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.select,args);
});

reforms.validation.select.cljs$lang$maxFixedArity = (0);

reforms.validation.select.cljs$lang$applyTo = (function (seq26307){
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26307));
});
/**
 * Wrapper for [[reforms.core/button]] adding support for validation.
 */
reforms.validation.button = (function reforms$validation$button(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26312 = arguments.length;
var i__19639__auto___26313 = (0);
while(true){
if((i__19639__auto___26313 < len__19638__auto___26312)){
args__19645__auto__.push((arguments[i__19639__auto___26313]));

var G__26314 = (i__19639__auto___26313 + (1));
i__19639__auto___26313 = G__26314;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button,args);
});

reforms.validation.button.cljs$lang$maxFixedArity = (0);

reforms.validation.button.cljs$lang$applyTo = (function (seq26311){
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26311));
});
/**
 * Wrapper for [[reforms.core/button-primary]] adding support for validation.
 */
reforms.validation.button_primary = (function reforms$validation$button_primary(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26316 = arguments.length;
var i__19639__auto___26317 = (0);
while(true){
if((i__19639__auto___26317 < len__19638__auto___26316)){
args__19645__auto__.push((arguments[i__19639__auto___26317]));

var G__26318 = (i__19639__auto___26317 + (1));
i__19639__auto___26317 = G__26318;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button_primary,args);
});

reforms.validation.button_primary.cljs$lang$maxFixedArity = (0);

reforms.validation.button_primary.cljs$lang$applyTo = (function (seq26315){
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26315));
});
/**
 * Wrapper for [[reforms.core/button-default]] adding support for validation.
 */
reforms.validation.button_default = (function reforms$validation$button_default(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26320 = arguments.length;
var i__19639__auto___26321 = (0);
while(true){
if((i__19639__auto___26321 < len__19638__auto___26320)){
args__19645__auto__.push((arguments[i__19639__auto___26321]));

var G__26322 = (i__19639__auto___26321 + (1));
i__19639__auto___26321 = G__26322;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button_default,args);
});

reforms.validation.button_default.cljs$lang$maxFixedArity = (0);

reforms.validation.button_default.cljs$lang$applyTo = (function (seq26319){
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26319));
});
/**
 * Wrapper for [[reforms.core/datetime]] adding support for validation.
 */
reforms.validation.datetime = (function reforms$validation$datetime(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26324 = arguments.length;
var i__19639__auto___26325 = (0);
while(true){
if((i__19639__auto___26325 < len__19638__auto___26324)){
args__19645__auto__.push((arguments[i__19639__auto___26325]));

var G__26326 = (i__19639__auto___26325 + (1));
i__19639__auto___26325 = G__26326;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.datetime,args);
});

reforms.validation.datetime.cljs$lang$maxFixedArity = (0);

reforms.validation.datetime.cljs$lang$applyTo = (function (seq26323){
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26323));
});
/**
 * Wrapper for [[reforms.core/datetime-local]] adding support for validation.
 */
reforms.validation.datetime_local = (function reforms$validation$datetime_local(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26328 = arguments.length;
var i__19639__auto___26329 = (0);
while(true){
if((i__19639__auto___26329 < len__19638__auto___26328)){
args__19645__auto__.push((arguments[i__19639__auto___26329]));

var G__26330 = (i__19639__auto___26329 + (1));
i__19639__auto___26329 = G__26330;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.datetime_local,args);
});

reforms.validation.datetime_local.cljs$lang$maxFixedArity = (0);

reforms.validation.datetime_local.cljs$lang$applyTo = (function (seq26327){
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26327));
});
/**
 * Wrapper for [[reforms.core/date]] adding support for validation.
 */
reforms.validation.date = (function reforms$validation$date(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26332 = arguments.length;
var i__19639__auto___26333 = (0);
while(true){
if((i__19639__auto___26333 < len__19638__auto___26332)){
args__19645__auto__.push((arguments[i__19639__auto___26333]));

var G__26334 = (i__19639__auto___26333 + (1));
i__19639__auto___26333 = G__26334;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.date,args);
});

reforms.validation.date.cljs$lang$maxFixedArity = (0);

reforms.validation.date.cljs$lang$applyTo = (function (seq26331){
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26331));
});
/**
 * Wrapper for [[reforms.core/month]] adding support for validation.
 */
reforms.validation.month = (function reforms$validation$month(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26336 = arguments.length;
var i__19639__auto___26337 = (0);
while(true){
if((i__19639__auto___26337 < len__19638__auto___26336)){
args__19645__auto__.push((arguments[i__19639__auto___26337]));

var G__26338 = (i__19639__auto___26337 + (1));
i__19639__auto___26337 = G__26338;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.month,args);
});

reforms.validation.month.cljs$lang$maxFixedArity = (0);

reforms.validation.month.cljs$lang$applyTo = (function (seq26335){
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26335));
});
/**
 * Wrapper for [[reforms.core/time]] adding support for validation.
 */
reforms.validation.time = (function reforms$validation$time(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26340 = arguments.length;
var i__19639__auto___26341 = (0);
while(true){
if((i__19639__auto___26341 < len__19638__auto___26340)){
args__19645__auto__.push((arguments[i__19639__auto___26341]));

var G__26342 = (i__19639__auto___26341 + (1));
i__19639__auto___26341 = G__26342;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.time,args);
});

reforms.validation.time.cljs$lang$maxFixedArity = (0);

reforms.validation.time.cljs$lang$applyTo = (function (seq26339){
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26339));
});
/**
 * Wrapper for [[reforms.core/week]] adding support for validation.
 */
reforms.validation.week = (function reforms$validation$week(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26344 = arguments.length;
var i__19639__auto___26345 = (0);
while(true){
if((i__19639__auto___26345 < len__19638__auto___26344)){
args__19645__auto__.push((arguments[i__19639__auto___26345]));

var G__26346 = (i__19639__auto___26345 + (1));
i__19639__auto___26345 = G__26346;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.week,args);
});

reforms.validation.week.cljs$lang$maxFixedArity = (0);

reforms.validation.week.cljs$lang$applyTo = (function (seq26343){
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26343));
});
/**
 * Wrapper for [[reforms.core/number]] adding support for validation.
 */
reforms.validation.number = (function reforms$validation$number(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26348 = arguments.length;
var i__19639__auto___26349 = (0);
while(true){
if((i__19639__auto___26349 < len__19638__auto___26348)){
args__19645__auto__.push((arguments[i__19639__auto___26349]));

var G__26350 = (i__19639__auto___26349 + (1));
i__19639__auto___26349 = G__26350;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.number,args);
});

reforms.validation.number.cljs$lang$maxFixedArity = (0);

reforms.validation.number.cljs$lang$applyTo = (function (seq26347){
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26347));
});
/**
 * Wrapper for [[reforms.core/email]] adding support for validation.
 */
reforms.validation.email = (function reforms$validation$email(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26352 = arguments.length;
var i__19639__auto___26353 = (0);
while(true){
if((i__19639__auto___26353 < len__19638__auto___26352)){
args__19645__auto__.push((arguments[i__19639__auto___26353]));

var G__26354 = (i__19639__auto___26353 + (1));
i__19639__auto___26353 = G__26354;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.email,args);
});

reforms.validation.email.cljs$lang$maxFixedArity = (0);

reforms.validation.email.cljs$lang$applyTo = (function (seq26351){
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26351));
});
/**
 * Wrapper for [[reforms.core/url]] adding support for validation.
 */
reforms.validation.url = (function reforms$validation$url(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26356 = arguments.length;
var i__19639__auto___26357 = (0);
while(true){
if((i__19639__auto___26357 < len__19638__auto___26356)){
args__19645__auto__.push((arguments[i__19639__auto___26357]));

var G__26358 = (i__19639__auto___26357 + (1));
i__19639__auto___26357 = G__26358;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.url,args);
});

reforms.validation.url.cljs$lang$maxFixedArity = (0);

reforms.validation.url.cljs$lang$applyTo = (function (seq26355){
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26355));
});
/**
 * Wrapper for [[reforms.core/search]] adding support for validation.
 */
reforms.validation.search = (function reforms$validation$search(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26360 = arguments.length;
var i__19639__auto___26361 = (0);
while(true){
if((i__19639__auto___26361 < len__19638__auto___26360)){
args__19645__auto__.push((arguments[i__19639__auto___26361]));

var G__26362 = (i__19639__auto___26361 + (1));
i__19639__auto___26361 = G__26362;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.search,args);
});

reforms.validation.search.cljs$lang$maxFixedArity = (0);

reforms.validation.search.cljs$lang$applyTo = (function (seq26359){
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26359));
});
/**
 * Wrapper for [[reforms.core/tel]] adding support for validation.
 */
reforms.validation.tel = (function reforms$validation$tel(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26364 = arguments.length;
var i__19639__auto___26365 = (0);
while(true){
if((i__19639__auto___26365 < len__19638__auto___26364)){
args__19645__auto__.push((arguments[i__19639__auto___26365]));

var G__26366 = (i__19639__auto___26365 + (1));
i__19639__auto___26365 = G__26366;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.tel,args);
});

reforms.validation.tel.cljs$lang$maxFixedArity = (0);

reforms.validation.tel.cljs$lang$applyTo = (function (seq26363){
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26363));
});
/**
 * Wrapper for [[reforms.core/color]] adding support for validation.
 */
reforms.validation.color = (function reforms$validation$color(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26368 = arguments.length;
var i__19639__auto___26369 = (0);
while(true){
if((i__19639__auto___26369 < len__19638__auto___26368)){
args__19645__auto__.push((arguments[i__19639__auto___26369]));

var G__26370 = (i__19639__auto___26369 + (1));
i__19639__auto___26369 = G__26370;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.color,args);
});

reforms.validation.color.cljs$lang$maxFixedArity = (0);

reforms.validation.color.cljs$lang$applyTo = (function (seq26367){
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26367));
});
/**
 * Renders errors for specified key seqs.
 * 
 *   Example:
 * 
 *    (error-alert [:user :name] [:my-custom-error])
 */
reforms.validation.error_alert = (function reforms$validation$error_alert(var_args){
var args__19645__auto__ = [];
var len__19638__auto___26372 = arguments.length;
var i__19639__auto___26373 = (0);
while(true){
if((i__19639__auto___26373 < len__19638__auto___26372)){
args__19645__auto__.push((arguments[i__19639__auto___26373]));

var G__26374 = (i__19639__auto___26373 + (1));
i__19639__auto___26373 = G__26374;
continue;
} else {
}
break;
}

var argseq__19646__auto__ = ((((0) < args__19645__auto__.length))?(new cljs.core.IndexedSeq(args__19645__auto__.slice((0)),(0))):null);
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(argseq__19646__auto__);
});

reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic = (function (korks){
return reforms.validation.render_errors.call(null,cljs.core.keep.call(null,(function (kork){
var temp__4657__auto__ = reforms.validation.find_validation_error.call(null,kork,reforms.validation._STAR_validation_errors_STAR_);
if(cljs.core.truth_(temp__4657__auto__)){
var err = temp__4657__auto__;
return err;
} else {
return null;
}
}),korks));
});

reforms.validation.error_alert.cljs$lang$maxFixedArity = (0);

reforms.validation.error_alert.cljs$lang$applyTo = (function (seq26371){
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26371));
});

//# sourceMappingURL=validation.js.map?rel=1531355031192