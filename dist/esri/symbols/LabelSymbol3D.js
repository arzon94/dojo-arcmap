//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ./Symbol3D ./support/Symbol3DVerticalOffset ./callouts/calloutUtils ../core/accessorSupport/decorators".split(" "),function(b,l,g,c,d,h,k,e,a){b=f=function(b){function a(a){a=b.call(this)||this;return a.verticalOffset=null,a.callout=null,a.type="label-symbol-3d",a}return g(a,b),a.prototype.supportsCallout=function(){return!0},a.prototype.hasVisibleCallout=function(){return e.hasVisibleCallout(this)},
a.prototype.hasVisibleVerticalOffset=function(){return e.hasVisibleVerticalOffset(this)},a.prototype.clone=function(){return new f({styleOrigin:d.clone(this.styleOrigin),symbolLayers:d.clone(this.symbolLayers),thumbnail:d.clone(this.thumbnail),callout:d.clone(this.callout),verticalOffset:d.clone(this.verticalOffset)})},a}(a.declared(h));c([a.property({type:k["default"],json:{write:!0}})],b.prototype,"verticalOffset",void 0);c([a.property(e.calloutProperty)],b.prototype,"callout",void 0);c([a.property()],
b.prototype,"type",void 0);c([a.shared(["text"])],b.prototype,"_allowedLayerTypes",void 0);b=f=c([a.subclass("esri.symbols.LabelSymbol3D")],b);var f;return b});