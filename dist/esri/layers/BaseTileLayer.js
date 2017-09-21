//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../request ../core/Error ../geometry/Extent ../geometry/SpatialReference ./Layer ./support/TileInfo ../core/accessorSupport/decorators".split(" "),function(b,q,l,c,h,m,n,g,p,k,a){var f={id:"0/0/0",level:0,row:0,col:0,extent:null};b=function(b){function a(){var d=null!==b&&b.apply(this,arguments)||this;return d.tileInfo=k.create({spatialReference:g.WebMercator,size:256}),d.type="base-tile",d.fullExtent=
new n(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,g.WebMercator),d.spatialReference=g.WebMercator,d}return l(a,b),a.prototype.getTileBounds=function(d,a,b,e){e=e||[0,0,0,0];return f.level=d,f.row=a,f.col=b,f.extent=e,this.tileInfo.updateTileInfo(f),f.extent=null,e},a.prototype.getTileUrl=function(a,b,c){throw new m("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented");},a.prototype.fetchTile=function(a,b,c,e){a=this.getTileUrl(a,b,c);return"string"==
typeof a?h(a,{responseType:"image",allowImageDataAccess:e&&e.allowImageDataAccess||!1}).then(function(a){return a.data}):a.then(function(a){return h(a,{responseType:"image"})}).then(function(a){return a.data})},a}(a.declared(p));return c([a.shared({"2d":"../views/2d/layers/TiledLayerView2D","3d":"../views/3d/layers/TiledLayerView3D"})],b.prototype,"viewModulePaths",void 0),c([a.property({type:k})],b.prototype,"tileInfo",void 0),c([a.property({readOnly:!0,value:"base-tile"})],b.prototype,"type",void 0),
c([a.property()],b.prototype,"fullExtent",void 0),c([a.property()],b.prototype,"spatialReference",void 0),b=c([a.subclass("esri.layers.BaseTileLayer")],b)});