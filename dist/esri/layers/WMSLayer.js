//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators dojo/_base/lang ../core/Collection ../core/HandleRegistry ../core/promiseUtils ../core/accessorSupport/write ../core/CollectionFlattener ../geometry/Extent ../geometry/SpatialReference ../request ../Graphic ../PopupTemplate ./Layer ./mixins/OperationalLayer ./mixins/PortalLayer ./support/wmsUtils ./support/WMSSublayer ./support/ExportWMSImageParameters".split(" "),function(d,
F,t,b,e,g,u,l,v,m,w,x,y,k,z,A,B,C,D,n,p,E){function q(d,e,a){var f=[],c=new Map;return d.forEach(function(d){var b=new p;(b.read(d,e),a&&-1===a.indexOf(b.name)&&(b.visible=!1),c[b.id]=b,null!=d.parentLayerId&&-1!==d.parentLayerId)?(d=c[d.parentLayerId],d.sublayers||(d.sublayers=[]),d.sublayers.unshift(b)):f.unshift(b)}),f}d=function(d){function b(a,b){var c=d.call(this)||this;return c._sublayersHandles=new l,c.allSublayers=new w({root:c,rootCollectionNames:["sublayers"],getChildrenFunction:function(a){return a.sublayers}}),
c.customParameters=null,c.customLayerParameters=null,c.copyright=null,c.description=null,c.fullExtent=null,c.fullExtents=null,c.featureInfoFormat=null,c.featureInfoUrl=null,c.imageFormat=null,c.imageMaxHeight=2048,c.imageMaxWidth=2048,c.imageTransparency=!0,c.legendEnabled=!0,c.mapUrl=null,c.maxScale=0,c.minScale=0,c.operationalLayerType="WMS",c.spatialReference=null,c.spatialReferences=null,c.sublayers=null,c.type="wms",c.version=null,c.watch("sublayers",function(a,b){b&&(b.forEach(function(a){a.layer=
null}),c._sublayersHandles.removeAll(),c._sublayersHandles=null);a&&(a.forEach(function(a){a.parent=c;a.layer=c}),c._sublayersHandles||(c._sublayersHandles=new l),c._sublayersHandles.add([a.on("after-add",function(a){a=a.item;a.parent=c;a.layer=c}),a.on("after-remove",function(a){a=a.item;a.parent=null;a.layer=null})]))},!0),c}return t(b,d),b.prototype.normalizeCtorArgs=function(a,b){return"string"==typeof a?g.mixin({url:a},b):a},b.prototype.load=function(){var a=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]}).then(function(){return a._fetchService()})),
this},b.prototype.readFullExtentFromItemOrWebMap=function(a,b,c){a=b.extent;b=b.spatialReferences;return new x(b&&0<b.length?{xmin:a[0][0],ymin:a[0][1],xmax:a[1][0],ymax:a[1][1],spatialReference:b[0]}:{xmin:a[0][0],ymin:a[0][1],xmax:a[1][0],ymax:a[1][1]})},b.prototype.writeFullExtent=function(a,b,c,d){b.extent=[[a.xmin,a.ymin],[a.xmax,a.ymax]]},b.prototype.readSpatialReferenceFromItemOrDocument=function(a,b,c){return new y(b.spatialReferences[0])},b.prototype.writeSpatialReferences=function(a,b,c,
d){var e=this.spatialReference&&this.spatialReference.wkid;a&&e?(b.spatialReferences=a.filter(function(a){return a!==e}),b.spatialReferences.unshift(e)):b.spatialReferences=a},b.prototype.readSublayersFromItemOrWebMap=function(a,b,c){return q(b.layers,c,b.visibleLayers)},b.prototype.readSublayers=function(a,b,c){return q(b.layers,c)},b.prototype.writeSublayers=function(a,b,c,d){b.layers=[];b.allLayers=[];var e=new Map;a=a.flatten(function(a){return(a=a.sublayers)&&a.toArray()}).toArray();a.forEach(function(a){"number"==
typeof a.parent.id&&(e.has(a.parent.id)?e.get(a.parent.id).push(a.id):e.set(a.parent.id,[a.id]))});a.forEach(function(a){var c=g.mixin({sublayer:a},d),f=a.write({parentLayerId:"number"==typeof a.parent.id?a.parent.id:-1},c);if(e.has(a.id)&&(f.sublayerIds=e.get(a.id)),b.allLayers.push(f),!a.sublayers&&a.name)a=a.write({},c),delete a.id,b.layers.push(a)});b.visibleLayers=a.filter(function(a){return a.visible&&!a.sublayers}).map(function(a){return a.name})},b.prototype.createExportImageParameters=function(a){this._exportWMSImageParameters=
new E({layer:this,extent:a});return this._exportWMSImageParameters.toJSON()},b.prototype.fetchImage=function(a,b,c,d){var e=this.parsedUrl.path;a=g.mixin({width:b,height:c},this.createExportImageParameters(a));return a=this._mixCustomParameters(a),k(e,{query:a,responseType:"image",allowImageDataAccess:d&&d.allowImageDataAccess||!1}).then(function(a){return a.data})},b.prototype.fetchFeatureInfo=function(a,b,c,d,e){var f=this,r=n.getPopupLayers(this._exportWMSImageParameters.visibleSublayers);if(!this.featureInfoUrl||
!r)return null;b=g.mixin({query_layers:r,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:b,height:c},"1.3.0"===this.version?{I:d,J:e}:{x:d,y:e});var h=g.mixin(this.createExportImageParameters(a),b);return h=this._mixCustomParameters(h),k(this.featureInfoUrl,{query:h,responseType:"text/html"}).then(function(a){var b=f.featureInfoUrl,b=b+(-1===b.indexOf("?")?"?":""),c;for(c in h)b+="?"===b.substring(b.length-1,b.length)?"":"\x26",b+=c+"\x3d"+h[c];return new z({popupTemplate:new A({title:f.title,
content:'\x3ciframe src\x3d"'+b+'" frameborder\x3d"0" marginwidth\x3d"0" marginheight\x3d"0"\x3e'+a.data+"\x3cframe\x3e"})})})},b.prototype.findSublayerById=function(a){return this.allSublayers.find(function(b){return b.id===a})},b.prototype._fetchService=function(){var a=this;return v.resolve().then(function(){return a.resourceInfo?{ssl:!1,data:a.resourceInfo}:(a.parsedUrl.query&&a.parsedUrl.query.service&&(a.parsedUrl.query.SERVICE=a.parsedUrl.query.service,delete a.parsedUrl.query),a.parsedUrl.query&&
a.parsedUrl.query.request&&(a.parsedUrl.query.REQUEST=a.parsedUrl.query.service,delete a.parsedUrl.query.request),k(a.parsedUrl.path,{query:g.mixin({SERVICE:"WMS",REQUEST:"GetCapabilities"},a.parsedUrl.query,a.customParameters),responseType:"xml"}))}).then(function(b){b.ssl&&(a.url=a.url.replace(/^http:/i,"https:"));a.resourceInfo||(b.data=n.parseCapabilities(b.data));b.data&&a.read(b.data,{origin:"service"})})},b.prototype._mixCustomParameters=function(a){if(!this.customLayerParameters&&!this.customParameters)return a;
var b=g.mixin({},this.customParameters,this.customLayerParameters),c;for(c in b)a[c.toLowerCase()]=b[c];return a},b}(e.declared(B,C,D));return b([e.shared({"2d":"../views/2d/layers/WMSLayerView2D"})],d.prototype,"viewModulePaths",void 0),b([e.property({readOnly:!0})],d.prototype,"allSublayers",void 0),b([e.property({json:{read:{source:"customParameters"}}})],d.prototype,"customParameters",void 0),b([e.property({json:{read:{source:"customLayerParameters"}}})],d.prototype,"customLayerParameters",void 0),
b([e.property()],d.prototype,"copyright",void 0),b([e.property()],d.prototype,"description",void 0),b([e.property({json:{origins:{service:{read:{source:"extent"}}}}})],d.prototype,"fullExtent",void 0),b([e.reader(["web-map","portal-item"],"fullExtent",["extent"])],d.prototype,"readFullExtentFromItemOrWebMap",null),b([e.writer(["web-map","portal-item"],"fullExtent")],d.prototype,"writeFullExtent",null),b([e.property()],d.prototype,"fullExtents",void 0),b([e.property({json:{write:{ignoreOrigin:!0}}})],
d.prototype,"featureInfoFormat",void 0),b([e.property({json:{write:{ignoreOrigin:!0}}})],d.prototype,"featureInfoUrl",void 0),b([e.property({json:{read:{source:"supportedImageFormatTypes",reader:function(b,d){return(b=d.supportedImageFormatTypes)&&-1<b.indexOf("image/png")?"image/png":b&&b[0]}}}})],d.prototype,"imageFormat",void 0),b([e.property({json:{read:{source:"maxImageHeight"},write:{target:"maxHeight"}}})],d.prototype,"imageMaxHeight",void 0),b([e.property({json:{read:{source:"maxImageWidth"},
write:{target:"maxHeight"}}})],d.prototype,"imageMaxWidth",void 0),b([e.property()],d.prototype,"imageTransparency",void 0),b([e.property({type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"}}})],d.prototype,"legendEnabled",void 0),b([e.property({json:{write:{ignoreOrigin:!0}}})],d.prototype,"mapUrl",void 0),b([e.property({json:{write:{overridePolicy:function(b,d,a){return m.willPropertyWrite(this,"maxScale",{},a)?{ignoreOrigin:!0}:void 0}}}})],d.prototype,"maxScale",void 0),
b([e.property({json:{write:{overridePolicy:function(b,d,a){return m.willPropertyWrite(this,"minScale",{},a)?{ignoreOrigin:!0}:void 0}}}})],d.prototype,"minScale",void 0),b([e.property()],d.prototype,"operationalLayerType",void 0),b([e.property({json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],d.prototype,"spatialReference",void 0),b([e.reader(["web-map","portal-item"],"spatialReference",["spatialReferences"])],d.prototype,"readSpatialReferenceFromItemOrDocument",null),
b([e.property({json:{read:"spatialReferences",write:{ignoreOrigin:!0}}})],d.prototype,"spatialReferences",void 0),b([e.writer(["web-map","portal-item"],"spatialReferences")],d.prototype,"writeSpatialReferences",null),b([e.property({type:u.ofType(p)})],d.prototype,"sublayers",void 0),b([e.reader(["web-map","portal-item"],"sublayers",["layers","visibleLayers"])],d.prototype,"readSublayersFromItemOrWebMap",null),b([e.reader("service","sublayers",["layers"])],d.prototype,"readSublayers",null),b([e.writer(["web-map",
"portal-item"],"sublayers")],d.prototype,"writeSublayers",null),b([e.property({json:{read:!1},readOnly:!0,value:"wms"})],d.prototype,"type",void 0),b([e.property({json:{write:{ignoreOrigin:!0}}})],d.prototype,"version",void 0),d=b([e.subclass("esri.layers.WMSLayer")],d)});