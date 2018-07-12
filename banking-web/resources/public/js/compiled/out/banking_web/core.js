// Compiled by ClojureScript 1.7.107 {}
goog.provide('banking_web.core');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('banking_web.pages');
if(typeof banking_web.core.navbar_data !== 'undefined'){
} else {
banking_web.core.navbar_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"brand","brand",557863343),"E-Banking",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Login",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"url","url",276297046),"#/"], null)], null)], null);
}
banking_web.core.pages = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"home","home",-74557309),banking_web.pages.login], null);
banking_web.core.page = (function banking_web$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [banking_web.core.pages.call(null,session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
banking_web.core.defroute.call(null,"/",cljs.core.PersistentVector.EMPTY,session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)));
banking_web.core.init_BANG_ = (function banking_web$core$init_BANG_(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));

utils.mount_component.call(null,rcomp.navbar,banking_web.core.navbar_data,"navbar");

return utils.mount_component.call(null,banking_web.core.page,null,"app");
});
/**
 * figwheel reload initialization goes here
 */
banking_web.core.on_js_reload = (function banking_web$core$on_js_reload(){
return null;
});
banking_web.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1531355026479