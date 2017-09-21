//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/Accessor ../../core/Evented ../../core/Identifiable ../../core/Promise ../../core/HandleRegistry ../../core/Logger".split(" "),function(b,p,f,e,d,g,h,k,l,m,n){b=function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;return a.handles=new m,a.parent=null,a.view=null,a}return f(c,b),c.prototype.initialize=function(){var a=this;this.addResolvingPromise(this.layer);
this.otherwise(function(b){if("layerview:create-error"!==b.name){var c=a.layer&&a.layer.id||"no id",d=a.layer&&a.layer.title||"no title";n.getLogger(a.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+d+"', id: '"+c+"')",b)}})},c.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(c.prototype,"layer",{get:function(){return this._get("layer")},set:function(a){this.handles.remove("layer");a&&this.handles.add(a.on("refresh",this.refresh.bind(this)),
"layer");this._set("layer",a)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(a){return void 0===a?void this._clearOverride("visible"):void this._override("visible",
a)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"fullOpacity",{get:function(){var a=this.get("layer.opacity"),a=null!=a?a:1,b=this.get("parent.fullOpacity");return a*(null!=b?b:1)},enumerable:!0,configurable:!0}),c.prototype.refresh=function(){},c.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},c.prototype.isUpdating=function(){return!1},c}(d.declared(g,h,k,l));return e([d.property({value:null})],
b.prototype,"layer",null),e([d.property()],b.prototype,"parent",void 0),e([d.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],b.prototype,"suspended",null),e([d.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],b.prototype,"updating",null),e([d.property()],b.prototype,"view",void 0),e([d.property({dependsOn:["layer.visible"]})],b.prototype,"visible",null),e([d.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],b.prototype,"fullOpacity",
null),b=e([d.subclass("esri.views.layers.LayerView")],b)});