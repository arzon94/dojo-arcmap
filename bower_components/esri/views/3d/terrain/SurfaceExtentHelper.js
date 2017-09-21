// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","dojo/_base/lang","../../../core/Accessor","../../../core/arrayUtils","../../../core/HandleRegistry","../../../geometry/support/webMercatorUtils","../../../views/3d/support/aaBoundingRect","./terrainUtils","./TerrainConst"],function(e,t,n,r,i,a,l,s,o,p,c,u,y){function f(e){return u.isTiledLayer(e)}function d(e,t){return e&&!e.spatialReference.equals(t)&&(e=p.canProject(e.spatialReference,t)?p.project(e,t):null),e}Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(){var t=e.call(this)||this;return t._changeListeners=new o,t}return n(t,e),t.prototype.initialize=function(){var e=this;this._changeListeners.add([this._layerViews.on("change",function(){return e.notifyChange("stencilEnabledExtents")})])},t.prototype.destroy=function(){this._changeListeners.destroy(),this._changeListeners=null},Object.defineProperty(t.prototype,"layerViewsExtent",{get:function(){return this._computeLayerViewsExtent()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tiledLayersExtent",{get:function(){return this._computeTiledLayersExtent()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stencilEnabledExtents",{get:function(){return this._computeStencilEnabledExtents(this._layerViews,this.spatialReference)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"spatialReference",{set:function(e){this.tilingScheme||this._set("spatialReference",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tilingScheme",{set:function(e){this._set("tilingScheme",e),this._set("spatialReference",e.spatialReference)},enumerable:!0,configurable:!0}),t.prototype.normalizeCtorArgs=function(e){return e=a.mixin({},e),this._layers=e.layers,delete e.layers,this._layerViews=e.layerViews,delete e.layerViews,e},t.prototype._computeStencilEnabledExtents=function(e,t){for(var n=[],r=0,i=e.items;r<i.length;r++){var a=i[r],l=a.layer;if("IntegratedMeshLayer"===l.operationalLayerType&&null!=t){var s=d(l.fullExtent,t);null!=s&&n.push([s.xmin,s.ymin,s.xmax,s.ymax])}}return n},t}(i.declared(l));r([i.property({readOnly:!0})],h.prototype,"layerViewsExtent",null),r([i.property({readOnly:!0,dependsOn:["spatialReference","tilingScheme"]})],h.prototype,"tiledLayersExtent",null),r([i.property({readOnly:!0,dependsOn:["spatialReference"]})],h.prototype,"stencilEnabledExtents",null),r([i.property()],h.prototype,"spatialReference",null),r([i.property()],h.prototype,"tilingScheme",null),r([i.property()],h.prototype,"defaultTiledLayersExtent",void 0),h=r([i.subclass()],h);var E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype._computeLayerViewsExtent=function(){return this._getGlobalExtent()},t.prototype._computeTiledLayersExtent=function(){return this._getGlobalExtent()},t.prototype._getGlobalExtent=function(){return this.spatialReference.isWebMercator?y.WEBMERCATOR_WORLD_EXTENT:y.GEOGRAPHIC_WORLD_EXTENT},t}(i.declared(h));r([i.property({dependsOn:["spatialReference"]})],E.prototype,"layerViewsExtent",void 0),E=r([i.subclass()],E),t.SurfaceExtentHelperGlobal=E;var x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.initialize=function(){var e=this;this._changeListeners.add([this._layers.on("change",function(){return e.notifyChange("tiledLayersExtent")}),this._layerViews.on("change",function(){return e.notifyChange("layerViewsExtent")})])},t.prototype._computeLayerViewsExtent=function(){var e=c.create(c.NEGATIVE_INFINITY),t=this.spatialReference;this._layerViews.forEach(function(n){if(n.isResolved()){var r=n.fullExtentInViewSpatialReference||n.layer.fullExtent;r=d(r,t),r&&c.expand(e,r)}});var n=c.allFinite(e)?e:null,r=this._get("layerViewsExtent");return s.equals(n,r)?r:n},t.prototype._computeTiledLayersExtent=function(){var e=this.tilingScheme;if(!e)return null;var t=this.spatialReference,n=c.create(c.NEGATIVE_INFINITY);this._layers.forEach(function(r){f(r)&&e.compatibleWith(u.getTileInfo(r))&&r.fullExtent&&r.fullExtent.spatialReference.equals(t)&&c.expand(n,r.fullExtent)}),this.defaultTiledLayersExtent&&c.expand(n,this.defaultTiledLayersExtent);var r=c.allFinite(n)?n:null,i=this._get("tiledLayersExtent");return s.equals(r,i)?i:r},t}(i.declared(h));x=r([i.subclass()],x),t.SurfaceExtentHelperLocal=x});