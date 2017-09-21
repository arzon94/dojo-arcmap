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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","dojo/promise/all","./graphics/Graphics3DLayerViewCore","./graphics/graphicUtils","./support/LayerViewUpdatingPercentage","../../layers/LayerView","../../../renderers/support/renderingInfoUtils","../support/PromiseLightweight","../../../core/watchUtils","./support/projectExtentUtils","../../../core/Error","../../../core/promiseUtils","../../../layers/graphics/QueryEngine"],function(e,t,r,i,n,o,a,s,p,l,u,h,d,c,y,g,_){var m=1.2,f=function(e){function t(t){var r=e.call(this)||this;return r.controller=null,r.supportsDraping=!0,r._overlayUpdating=null,r._progressMaxNumNodes=0,r._eventHandles=[],r._controllerClientSideFiltering=!1,r._suspendResumeExtent=null,r.fullExtentInViewSpatialReference=null,r._isUpdating=!1,r._controllerCreated=!1,r}return r(t,e),Object.defineProperty(t.prototype,"drawingOrder",{set:function(e){this._layerViewCore.graphicsCore.setDrawingOrder(e),this._set("drawingOrder",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasDraped",{get:function(){return this._layerViewCore.graphicsCore.hasDraped},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this;this._layerViewCore=new a({owner:this,layer:this.layer,spatialIndexRequired:!0,frustumVisibilityEnabled:!0,scaleVisibilityEnabled:!0,labelingEnabled:this.labelingEnabled,elevationAlignmentEnabled:!0,verticalScaleEnabled:!0,highlightsEnabled:!0,updateSuspendResumeExtent:function(){return e.updateSuspendResumeExtent()},updateClippingExtent:function(t){return e.updateClippingExtent(t)}}),this.addResolvingPromise(this._layerViewCore.initialize()),this.drawingOrder=this.view.getDrawingOrder(this.layer.uid),this.initializeController(),this.addResolvingPromise(this.validateGeometryType());var t=c.toView(this).then(function(t){e.fullExtentInViewSpatialReference=t});t&&this.addResolvingPromise(t),this._evaluateUpdatingState()},t.prototype.destroy=function(){this._eventHandles.forEach(function(e){return e.remove()}),this._eventHandles=null,this.controller&&(this.controller.destroy(),this.controller=null),this._layerViewCore&&(this._layerViewCore.destroy(),this._layerViewCore=null),this.loadedGraphics=null},t.prototype.getRenderingInfo=function(e){var t=u.getRenderingInfo(e,{renderer:this.layer.renderer});if(t&&t.color){var r=t.color;r[0]=r[0]/255,r[1]=r[1]/255,r[2]=r[2]/255}return t},t.prototype.getGraphicsFromStageObject=function(e,t){var r=e.getMetadata().graphicId,i=null;this.loadedGraphics&&this.loadedGraphics.some(function(e){return e.uid===r?(i=e,!0):!1});var n=new h.Promise;return null!==i?n.done(i):n.reject(),n},t.prototype.getGraphics3DGraphics=function(){return this._layerViewCore.graphicsCore.getGraphics3DGraphics()},t.prototype.getGraphics3DGraphicsKeys=function(){return this._layerViewCore.graphicsCore.getGraphics3DGraphicsKeys()},t.prototype.getSymbolUpdateType=function(){return this._layerViewCore.graphicsCore.getSymbolUpdateType()},t.prototype.queryGraphics=function(){return this._queryEngine?this._queryEngine.queryFeatures():this._rejectQuery()},t.prototype.queryFeatures=function(e){return this._queryEngine?this._queryEngine.queryFeatures(e):this._rejectQuery()},t.prototype.queryObjectIds=function(e){return this._queryEngine?this._queryEngine.queryObjectIds(e):this._rejectQuery()},t.prototype.queryFeatureCount=function(e){return this._queryEngine?this._queryEngine.queryFeatureCount(e):this._rejectQuery()},t.prototype.queryExtent=function(e){return this._queryEngine?this._queryEngine.queryExtent(e):this._rejectQuery()},t.prototype.whenGraphicBounds=function(e){return this._layerViewCore.graphicsCore.whenGraphicBounds(e)},t.prototype.highlight=function(e,t){return this._layerViewCore.highlight(e,t,this.layer.objectIdField)},t.prototype._rejectQuery=function(){return g.reject(new y("FeatureLayerView3D","Not ready to execute query"))},t.prototype._notifySuspendedChange=function(){this.notifyChange("suspended")},t.prototype._notifyDrapedDataChange=function(){this.notifyChange("hasDraped"),this.emit("draped-data-change")},t.prototype.canResume=function(){return this.inherited(arguments)&&this._layerViewCore&&this._layerViewCore.canResume()},t.prototype._evaluateUpdatingState=function(){if(this._layerViewCore.elevationAlignment){var e=0;e+=this._layerViewCore.elevationAlignment.numNodesUpdating(),e+=this._layerViewCore.graphicsCore.numNodesUpdating();var t=!1;t=t||!this._controllerCreated,t=t||this.controller&&this.controller.updating,t=t||this._overlayUpdating,t=t||this._layerViewCore.graphicsCore.needsIdleUpdate(),t=t||!(this.view.basemapTerrain&&this.view.basemapTerrain.ready);var r=!1;r=r||e>0,r=r||t,r=r||this._layerViewCore.spatialIndex.isUpdating(),this._progressMaxNumNodes=Math.max(e,this._progressMaxNumNodes),0===e&&(this._progressMaxNumNodes=1),this._isUpdating=r,this.notifyChange("updating"),this._set("updatingPercentageValue",t?100:100*e/this._progressMaxNumNodes)}else this._isUpdating=!1,this.notifyChange("updating"),this._set("updatingPercentageValue",100)},t.prototype.isUpdating=function(){return this._isUpdating},t.prototype.initializeController=function(){var e=this,t=this.createController();d.whenTrueOnce(this.view,"basemapTerrain.ready",function(){o([e,t]).then(function(t){var r=t[1];e.controller=r,e._eventHandles.push(e.controller.watch("updating",function(){return e._evaluateUpdatingState()})),e.loadedGraphics=r.graphics,e._queryEngine=new _({features:e.loadedGraphics,objectIdField:e.layer.objectIdField}),e._evaluateUpdatingState()}).always(function(){e._controllerCreated=!0,e._evaluateUpdatingState()})})},t.prototype.updateClippingExtent=function(e){return this.controller?this._controllerClientSideFiltering?!1:this.controller.extent?(this.controller.extent=null,this._controllerClientSideFiltering=!0,!0):(this.controller.extent=e,!0):!1},t.prototype.updateSuspendResumeExtent=function(){var e=this._layerViewCore.graphicsCore.computedExtent;return this._suspendResumeExtent=s.enlargeExtent(e,this._suspendResumeExtent,m),this._suspendResumeExtent},t.prototype.validateGeometryType=function(){var e=this.layer;switch(e.geometryType){case"multipatch":case"multipoint":return g.reject(new y("featurelayerview3d:unsupported-geometry-type","Unsupported geometry type ${geometryType}",{geometryType:e.geometryType}))}},t.prototype.getStats=function(){var e=this._layerViewCore.graphicsCore.getGraphics3DGraphics(),t=4,r="null",i=this._suspendResumeExtent;i&&(r=[i[0],i[1],i[2],i[3]].map(function(e){return e.toPrecision(t)}).join(", "));var n="null",o=this._layerViewCore.graphicsCore.computedExtent;return o&&(n=[o.xmin,o.ymin,o.xmax,o.ymax].map(function(e){return e.toPrecision(t)}).join(", ")),{numCollection:this.loadedGraphics.length,numGraphics:Object.keys(e).length,numElevationUpdating:this._layerViewCore.elevationAlignment.numNodesUpdating(),numSpatialIndexUpdating:this._layerViewCore.spatialIndex.numNodesUpdating(),numGraphicsUpdating:this._layerViewCore.graphicsCore.numNodesUpdating(),visibilityFrustum:this._layerViewCore.frustumVisibility.canResume(),visibilityScale:this._layerViewCore.scaleVisibility.canResume(),resumeExtent:r,computedExtent:n,updating:this.updating,suspended:this.suspended}},t}(n.declared(l,p));return f.maximumFeatureCount=-1,i([n.property()],f.prototype,"drawingOrder",null),i([n.property()],f.prototype,"loadedGraphics",void 0),i([n.property()],f.prototype,"symbolsUpdating",void 0),i([n.property()],f.prototype,"hasDraped",null),i([n.property()],f.prototype,"controller",void 0),f=i([n.subclass("esri.views.3d.layers.GraphicsLayerView3DBase")],f)});