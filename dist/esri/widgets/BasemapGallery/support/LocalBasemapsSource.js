//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../Basemap ../../../core/Accessor ../../../core/Collection".split(" "),function(b,k,e,c,a,f,g,h){var d=h.ofType(f);b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;return a.basemaps=new d,a.state="ready",a}return e(a,b),a.prototype.refresh=function(){},a}(a.declared(g));return c([a.property({type:d})],b.prototype,"basemaps",
void 0),c([a.property({readOnly:!0})],b.prototype,"state",void 0),b=c([a.subclass("esri.widgets.BasemapGallery.support.LocalBasemapsSource")],b)});