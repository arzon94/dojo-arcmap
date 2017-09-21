//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./Layer ./FeatureLayer ./mixins/OperationalLayer ./mixins/PortalLayer ../core/Collection".split(" "),function(b,l,e,c,a,f,d,g,h,k){b=function(b){function a(){var a=b.call(this)||this;return a.title=null,a.type="map-notes",a}return e(a,b),Object.defineProperty(a.prototype,"fullExtent",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(a,
b){return a?a.union(b.fullExtent):b.fullExtent},null):null},enumerable:!0,configurable:!0}),a.prototype.readFeatureCollectionsFromItem=function(a,b,c){return b.layers.map(function(a){return(new d).read(a,c)})},a.prototype.readFeatureCollectionsFromWebMap=function(a,b,c){return b.featureCollection.layers.map(function(a){return(new d).read(a,c)})},a.prototype.load=function(){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]})),this},a}(a.declared(f,g,h));return c([a.shared({"2d":"../views/2d/layers/MapNotesLayerView2D"})],
b.prototype,"viewModulePaths",void 0),c([a.property()],b.prototype,"title",void 0),c([a.property({dependsOn:["featureCollections"],readOnly:!0})],b.prototype,"fullExtent",null),c([a.property({type:k.ofType(d)})],b.prototype,"featureCollections",void 0),c([a.reader("portal-item","featureCollections",["layers"])],b.prototype,"readFeatureCollectionsFromItem",null),c([a.reader("web-map","featureCollections",["featureCollection.layers"])],b.prototype,"readFeatureCollectionsFromWebMap",null),c([a.property({readOnly:!0,
json:{read:!1}})],b.prototype,"type",void 0),b=c([a.subclass("esri.layers.MapNotesLayer")],b)});