//>>built
define("./declare ./accessorSupport/Properties ./accessorSupport/get ./accessorSupport/introspection ./accessorSupport/set ./accessorSupport/watch".split(" "),function(c,e,h,f,k,g){e=e["default"];c.before(function(a,b){c.hasMixin(a,d)&&f.processPrototype(b)});c.after(function(a){c.hasMixin(a,d)&&(f.processClass(a),Object.defineProperties(a.prototype,{initialized:{get:function(){return this.__accessor__&&this.__accessor__.initialized||!1}},destroyed:{get:function(){return this.__accessor__&&this.__accessor__.destroyed||
!1}}}))});var d=c(null,{declaredClass:"esri.core.Accessor","-chains-":{initialize:"after",destroy:"before"},constructor:function(){if(this.constructor===d)throw Error("[accessor] cannot instanciate Accessor. This can be fixed by creating a subclass of Accessor");if(Object.defineProperty(this,"__accessor__",{value:new e(this)}),0<arguments.length&&this.normalizeCtorArgs){for(var a=[],b=0;b<arguments.length;b++)a.push(arguments[b]);this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,a)}},__accessor__:null,
postscript:function(a){var b,c=this.__accessor__;a=c.ctorArgs||a;null!=this.getDefaults&&(b=this.getDefaults(a||{}),this.set(b));c.initialize();a&&(this.set(a),c.ctorArgs=null);this.initialize()},initialize:function(){},destroy:function(){if(this.destroyed)try{throw Error("instance is already destroyed");}catch(a){console.warn(a.stack)}else g.removeTarget(this),this.__accessor__.destroy()},get:function(a){return h.get(this,a)},hasOwnProperty:function(a){return this.__accessor__?this.__accessor__.has(a):
Object.prototype.hasOwnProperty.call(this,a)},keys:function(){return this.__accessor__?this.__accessor__.keys():[]},set:function(a,b){return k.set(this,a,b),this},watch:function(a,b,c){return g.watch(this,a,b,c)},_clearOverride:function(a){return this.__accessor__.clearOverride(a)},_override:function(a,b){return this.__accessor__.override(a,b)},_isOverridden:function(a){return this.__accessor__.isOverridden(a)},notifyChange:function(a){this.__accessor__.propertyInvalidated(a)},_get:function(a){return this.__accessor__.internalGet(a)},
_set:function(a,b){return this.__accessor__.internalSet(a,b)}});return d});