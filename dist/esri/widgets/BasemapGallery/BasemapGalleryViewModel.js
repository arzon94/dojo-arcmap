//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ./support/basemapCompatibilityUtils ../../core/accessorSupport/decorators ../../core/watchUtils ../../support/basemapUtils ./support/BasemapGalleryItem ./support/LocalBasemapsSource ./support/PortalBasemapsSource ../../core/Accessor ../../core/Collection ../../core/HandleRegistry ../../portal/Portal".split(" "),function(b,v,n,e,p,d,f,q,g,r,h,t,k,u,l){var m=k.ofType(g);b=function(b){function c(a){a=
b.call(this)||this;return a._handles=new u,a.activeBasemap=null,a.items=new m,a.source=new h({portal:l.getDefault()}),a.view=null,a}return n(c,b),c.prototype.initialize=function(){var a=this;this._handles.add([f.init(this,["compatibilityFunction","state"],function(){return a._updateItems()}),f.on(this,"source.basemaps","change",function(){return a._updateItems()})])},c.prototype.destroy=function(){this._handles.destroy();this._handles=null},Object.defineProperty(c.prototype,"compatibilityFunction",
{get:function(){return void 0===this._get("compatibilityFunction")?"3d"===this.get("view.type")?p.default3DCompatibility:void 0:this._get("compatibilityFunction")},set:function(a){this._set("compatibilityFunction",a)},enumerable:!0,configurable:!0}),c.prototype.castSource=function(a){return Array.isArray(a)||k.isCollection(a)?new r({basemaps:a}):a&&a.isInstanceOf&&a.isInstanceOf(l)?new h({portal:a}):a&&"basemaps"in a&&"state"in a&&"refresh"in a?a:null},Object.defineProperty(c.prototype,"state",{get:function(){return this.get("view.ready")&&
this.source?"ready":"disabled"},enumerable:!0,configurable:!0}),c.prototype.basemapEquals=function(a,b){return q.contentEquals(a,b)},c.prototype.refresh=function(){this._updateItems()},c.prototype._updateItems=function(){if("disabled"!==this.state){var a=this.get("source.basemaps"),b=this.view,c=this.compatibilityFunction;this.items.removeAll().forEach(function(a){return a.destroy()});this.items.addMany(a.map(function(a){return new g({basemap:a,compatibilityFunction:c,view:b})}))}},c}(d.declared(t));
return e([d.property({aliasOf:"view.map.basemap"})],b.prototype,"activeBasemap",void 0),e([d.property({dependsOn:["view.type"]})],b.prototype,"compatibilityFunction",null),e([d.property({readOnly:!0,type:m})],b.prototype,"items",void 0),e([d.property()],b.prototype,"source",void 0),e([d.cast("source")],b.prototype,"castSource",null),e([d.property({readOnly:!0,dependsOn:["view.ready"]})],b.prototype,"state",null),e([d.property()],b.prototype,"view",void 0),b=e([d.subclass("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],
b)});