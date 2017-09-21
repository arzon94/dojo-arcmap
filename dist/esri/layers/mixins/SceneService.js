//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../Layer ../../core/MultiOriginJSONSupport ./ArcGISService ./OperationalLayer ./PortalLayer ../../core/Error ../../core/urlUtils ../../core/promiseUtils ../../core/requireUtils ../../request dojo/_base/lang dojo/io-query ../../geometry/Extent ../../geometry/HeightModelInfo ../../geometry/SpatialReference ../support/arcgisLayerUrl".split(" "),function(p,d,q,e,
c,r,t,u,v,w,x,f,m,y,h,z,k,n,A,l,g){d=function(d){function c(){var a=null!==d&&d.apply(this,arguments)||this;return a.blendMode=null,a.spatialReference=null,a.fullExtent=null,a.heightModelInfo=null,a.version={major:Number.NaN,minor:Number.NaN,versionString:""},a.copyright=null,a.sublayerTitleMode="item-title",a.title=null,a.layerId=null,a}return q(c,d),c.prototype.readSpatialReference=function(a,b){return this._readSpatialReference(b)},c.prototype._readSpatialReference=function(a){if(null!=a.spatialReference)return l.fromJSON(a.spatialReference);
a=a.store;a=(a=a.indexCRS||a.geographicCRS)&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10);return null!=a?new l(a):null},c.prototype.readFullExtent=function(a,b){a=b.store;b=this._readSpatialReference(b);return null==b||null==a||null==a.extent?null:new n({xmin:a.extent[0],ymin:a.extent[1],xmax:a.extent[2],ymax:a.extent[3],spatialReference:b})},c.prototype.readVersion=function(a,b){a=b.store;b=null!=a.version?a.version.toString():"";a={major:Number.NaN,minor:Number.NaN,versionString:b};b=
b.split(".");return 2<=b.length&&(a.major=parseInt(b[0],10),a.minor=parseInt(b[1],10)),a},c.prototype.readCopyright=function(a,b){return b.copyrightText},c.prototype.readTitlePortalItem=function(a,b){return"item-title"!==this.sublayerTitleMode?void 0:a},c.prototype.readTitleService=function(a,b){a=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return g.titleFromUrlAndName(this.url,b.name);b=b.name||g.parse(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&
a&&(b=a+" - "+b),g.cleanTitle(b)},c.prototype.readLayerId=function(a,b){return b.id},Object.defineProperty(c.prototype,"url",{set:function(a){var b=f.urlToObject(a),c=g.parse(b.path);c&&null!=c.sublayer&&(this.layerId=c.sublayer,b=k.objectToQuery(b.query),a=c.url.path,b&&(a=a+"?"+b));for(;"/"===a[a.length-1];)a=a.slice(0,-1);this._set("url",a)},enumerable:!0,configurable:!0}),c.prototype.writeUrl=function(a,b){a&&f.isProtocolRelative(a)&&(a="https:"+a);a=a?f.normalize(a):a;var c=f.urlToObject(a);
null!=this.layerId&&c?(b.url=c.path+"/layers/"+this.layerId,c.query&&Object.keys(c.query)&&(b.url+="?"+k.objectToQuery(c.query))):a&&(b.url=a)},Object.defineProperty(c.prototype,"parsedUrl",{get:function(){var a=this._get("url");if(!a)return null;a=f.urlToObject(a);return null!=this.layerId&&g.match.test(a.path)&&(a.path=a.path+"/layers/"+this.layerId),a},enumerable:!0,configurable:!0}),c.prototype._addUrlToken=function(a){var b=z.mixin({},this.parsedUrl.query,{token:this.token}),b=k.objectToQuery(b);
return a+=b?"?"+b:""},c.prototype.readRootNode=function(a,b){return b.store.rootNode},c.prototype._verifyRootNodeAndUpdateExtent=function(){var a=this;return this._fetchRootNode().then(function(b){return a._updateExtentFromRootNode(b)})},c.prototype._updateExtentFromRootNode=function(a){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&null!=a&&Array.isArray(a.mbs)&&4===a.mbs.length){var b=a.mbs[2];a=a.mbs[3];this.fullExtent.zmin=b-a;this.fullExtent.zmax=b+a}},c.prototype._fetchRootNode=function(){if(!this.rootNode)return m.resolve();
var a=f.join(this.parsedUrl.path,this.rootNode);return h(this._addUrlToken(a),{query:{f:"json"},responseType:"json"}).then(function(a){return a.data}).otherwise(function(b){throw new x("sceneservice:root-node-missing","Root node missing.",{error:b,url:a});})},c.prototype._fetchService=function(){var a,b=this;return a=null==this.layerId&&/SceneServer\/*$/i.test(this.url)?this._fetchFirstLayerId().then(function(a){null!=a&&(b.layerId=a)}):m.resolve(),a.then(function(){return b._fetchServiceLayer()})},
c.prototype._fetchFirstLayerId=function(){return h(this._addUrlToken(this.url),{query:{f:"json"},callbackParamName:"callback",responseType:"json"}).then(function(a){return a.data&&Array.isArray(a.data.layers)&&0<a.data.layers.length?a.data.layers[0].id:void 0})},c.prototype._fetchServiceLayer=function(){var a=this;return h(this._addUrlToken(this.parsedUrl.path),{query:{f:"json"},responseType:"json"}).then(function(b){b.ssl&&(a.url=a.url.replace(/^http:/i,"https:"));b=b.data;a.read(b,{origin:"service",
url:a.parsedUrl});a._validateLayer(b)})},c.prototype._validateLayer=function(a){},c.prototype.createGraphicsController=function(a){var b=this;a.layer=this;a.addUrlToken=function(a){return b._addUrlToken(a)};var c=y.when(p,"../graphics/controllers/I3SOnDemandController").then(function(b){return new b(a)});return c.then(function(a){b.emit("graphics-controller-create",{graphicsController:a})}),c},c}(c.declared(r,u,t,v,w));return e([c.shared({id:{json:{origins:{service:{read:!1},portalItem:{read:!1}}}}})],
d.prototype,"properties",void 0),e([c.property({type:l})],d.prototype,"spatialReference",void 0),e([c.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],d.prototype,"readSpatialReference",null),e([c.property({type:n})],d.prototype,"fullExtent",void 0),e([c.property({type:A})],d.prototype,"heightModelInfo",void 0),e([c.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],d.prototype,"readFullExtent",null),e([c.property({readOnly:!0})],
d.prototype,"version",void 0),e([c.reader("version",["store.version"])],d.prototype,"readVersion",null),e([c.property({type:String})],d.prototype,"copyright",void 0),e([c.reader("copyright",["copyrightText"])],d.prototype,"readCopyright",null),e([c.property({type:String})],d.prototype,"sublayerTitleMode",void 0),e([c.property({type:String})],d.prototype,"title",void 0),e([c.reader("portal-item","title")],d.prototype,"readTitlePortalItem",null),e([c.reader("service","title",["name"])],d.prototype,
"readTitleService",null),e([c.property({type:Number})],d.prototype,"layerId",void 0),e([c.reader("service","layerId",["id"])],d.prototype,"readLayerId",null),e([c.property()],d.prototype,"url",null),e([c.writer("url")],d.prototype,"writeUrl",null),e([c.property({dependsOn:["layerId"]})],d.prototype,"parsedUrl",null),e([c.property()],d.prototype,"store",void 0),e([c.property({type:String})],d.prototype,"rootNode",void 0),e([c.reader("rootNode",["store.rootNode"])],d.prototype,"readRootNode",null),
d=e([c.subclass("esri.layers.mixins.SceneService")],d)});