//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../Graphic ../../../core/Accessor ../../../core/Collection ../../../core/Promise".split(" "),function(d,k,e,c,a,f,b,g,h){d=g.ofType(f);b=function(b){function a(a){a=b.call(this)||this;return a.updating=!1,a}return e(a,b),a.prototype.normalizeCtorArgs=function(a){return this._set("layer",a.layer),this._set("layerView",a.layerView),this._set("graphics",
a.graphics),{}},a}(a.declared(b,h));return c([a.property({readOnly:!0})],b.prototype,"layer",void 0),c([a.property({readOnly:!0})],b.prototype,"layerView",void 0),c([a.property({type:d,readOnly:!0})],b.prototype,"graphics",void 0),c([a.property()],b.prototype,"updating",void 0),b=c([a.subclass("esri.layers.graphics.controllers.MemoryController")],b)});