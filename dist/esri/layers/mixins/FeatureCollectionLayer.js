//>>built
define("../../core/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-style ../../geometry/SpatialReference ../../geometry/Extent ../../geometry/support/webMercatorUtils ../../renderers/SimpleRenderer ../../PopupTemplate ../FeatureLayer ../Layer".split(" "),function(m,f,d,h,n,p,q,k,g,r,t,u){return m([u],{declaredClass:"esri.layers.mixins.FeatureCollectionLayer",constructor:function(a,b){this.pointSymbol=b&&b.pointSymbol;this.polylineSymbol=b&&b.polylineSymbol;this.polygonSymbol=
b&&b.polygonSymbol;this._outSR=b&&(b.outSpatialReference||b.outSR)||new p({wkid:4326});this._options=f.mixin({},b)},parse:function(){console.error("parse function has not been implemented")},getFeatureLayers:function(){var a=[];return this._fLayers&&(a=a.concat(this._fLayers)),a},onRefresh:function(){},onOpacityChange:function(){},refresh:function(){this.loaded&&this._map&&!this._io&&this.visible&&this._createLayer()},_createLayer:function(a){var b=this;this._fireUpdateStart();a=this.parse(a);a.then(function(a){b._io=
null;b._initLayer(a)});a.then(null,function(a){b._io=null;a=f.mixin(Error(),a);a.message="Unable to load resource: "+b.url+" "+(a.message||"");b._fireUpdateEnd(a);b.onError(a)})},_initLayer:function(a){this.loaded&&this._removeInternalLayers();this.name=a.name;this.description=a.description;this.snippet=a.snippet;void 0!==a.visibility?this.defaultVisibility=this.visible=!!a.visibility:this.defaultVisibility=this.visible=!0;this.featureInfos=a.featureInfos;this.fullExtent=q.fromJSON(a.lookAtExtent);
this.copyright=a.author||a.copyright;var b;a=f.getObject("featureCollection.layers",!1,a);if(a&&0<a.length&&(this._fLayers=[],d.forEach(a,function(a,e){var c,l=f.getObject("featureSet.features",!1,a);l&&0<l.length&&(b=f.mixin({outFields:["*"],popupTemplate:a.popupInfo?new r(a.popupInfo):null,editable:!1},this._options),b.id&&(b.id=b.id+"_"+e),a.layerDefinition.capabilities="Query,Data",c=new t(a,b),c.geometryType&&(this["_"+c.geometryType]=c),this._fLayers.push(c))},this),0===this._fLayers.length&&
delete this._fLayers),this.items=[],this._point&&(this.items=this.items.concat(this._point.graphics),this.pointSymbol))a=new g({symbol:this.pointSymbol}),this._point.setRenderer(a);this._polyline&&(this.items=this.items.concat(this._polyline.graphics),this.polylineSymbol)&&(a=new g({symbol:this.polylineSymbol}),this._polyline.setRenderer(a));this._polygon&&(this.items=this.items.concat(this._polygon.graphics),this.polygonSymbol)&&(a=new g({symbol:this.polygonSymbol}),this._polygon.setRenderer(a));
this._fireUpdateEnd();this.loaded&&(this._addInternalLayers(),this.onRefresh())},_addInternalLayers:function(){var a=this._map;this._fireUpdateStart();var b,c=a.spatialReference,e=this._outSR;if(c.wkid)b=c.isWebMercator&&e.isWebMercator||c.wkid===e.wkid;else{if(!c.wkt)return;b=c.wkt===e.wkt}if(!b)if(c.isWebMercator&&4326===e.wkid)this._converter=k.geographicToWebMercator;else{if(!e.isWebMercator||4326!==c.wkid)return;this._converter=k.webMercatorToGeographic}(b=this._fLayers)&&0<b.length&&d.forEach(b,
function(b){if(this._converter){var c,e,d=b.graphics,f=d?d.length:0;for(c=0;f>c;c++)(e=d[c].geometry)&&d[c].setGeometry(this._converter(e))}a.addLayer(b)},this);this.setVisibility(this.visible);this._fireUpdateEnd()},_removeInternalLayers:function(){var a=this._map;a&&d.forEach(this.getFeatureLayers(),a.removeLayer,a)},setScaleRange:function(a,b){this.inherited(arguments);d.forEach(this.getFeatureLayers(),function(c){c.setScaleRange(a,b)});this._options.minScale=this.minScale;this._options.maxScale=
this.maxScale},setOpacity:function(a){this.opacity!=a&&(d.forEach(this.getFeatureLayers(),function(b){b.setOpacity(a)}),this._options.opacity=a,this.opacity=a,this.onOpacityChange(a))},onVisibilityChange:function(a){this._fireUpdateStart();d.forEach(this.getFeatureLayers(),function(b){b.setVisibility(a)});this._fireUpdateEnd()},_setMap:function(a,b){this.inherited(arguments);this._map=a;var c=this._div=h.create("div",null,b);return n.set(c,"position","absolute"),this._addInternalLayers(),this.evaluateSuspension(),
c},_unsetMap:function(a,b){this._io&&this._io.cancel();this._extChgHandle.remove();delete this._extChgHandle;this._removeInternalLayers();var c=this._div;c&&(b.removeChild(c),h.destroy(c));this._div=null;this.inherited(arguments)}})});