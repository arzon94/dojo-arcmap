//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ./Symbol3D ./support/Symbol3DVerticalOffset ./callouts/calloutUtils ../core/accessorSupport/decorators".split(" "),function(b,l,g,c,d,h,k,e,a){b=f=function(b){function a(a){a=b.call(this)||this;return a.verticalOffset=null,a.callout=null,a.type="point-symbol-3d",a}return g(a,b),a.prototype.supportsCallout=function(){if(1!==(this.symbolLayers?this.symbolLayers.length:0))return!1;switch(this.symbolLayers.getItemAt(0).type){case "icon":case "text":case "object":return!0}return!1},
a.prototype.hasVisibleCallout=function(){return e.hasVisibleCallout(this)},a.prototype.hasVisibleVerticalOffset=function(){return e.hasVisibleVerticalOffset(this)},a.prototype.clone=function(){return new f({verticalOffset:d.clone(this.verticalOffset),callout:d.clone(this.callout),styleOrigin:d.clone(this.styleOrigin),symbolLayers:d.clone(this.symbolLayers),thumbnail:d.clone(this.thumbnail)})},a}(a.declared(h));c([a.property({type:k["default"],json:{write:!0}})],b.prototype,"verticalOffset",void 0);
c([a.property(e.calloutProperty)],b.prototype,"callout",void 0);c([a.property()],b.prototype,"type",void 0);c([a.shared(["icon","object","text"])],b.prototype,"_allowedLayerTypes",void 0);b=f=c([a.subclass("esri.symbols.PointSymbol3D")],b);var f;return b});