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

define(["../../layers/LayerView","../../../geometry/Extent","../../../core/HandleRegistry","../../../layers/support/ExportImageParameters","./support/overlayImageUtils","./support/projectExtentUtils","../lib/glMatrix","../webgl-engine/Stage","../webgl-engine/lib/Texture","../webgl-engine/lib/RenderGeometry","../webgl-engine/materials/Material","../webgl-engine/lib/Util"],function(e,t,a,i,r,n,s,l,o,h,d,m){var g=m.assert,u=s.mat4d,c=s.vec4d,f=(m.VertexAttrConstants,e.createSubclass({declaredClass:"esri.views.3d.layers.DynamicLayerView3D",supportsDraping:!0,hasDraped:!0,drawingOrder:0,_updatingOverlay:!1,_handles:null,_exportImageParameters:null,_imageVersion:null,constructor:function(){this._extents=[],this._images=[],this.fullExtentInViewSpatialReference=null,this._handles=new a},initialize:function(){this.drawingOrder=this.view.getDrawingOrder(this.layer.uid),this._handles.add(this.watch("suspended",function(e){if(e)this.clear(),this.emit("draped-data-change");else for(var t=this._extents.length,a=0;t>a;a++)this.fetch(a)}.bind(this))),this._exportImageParameters=new i({layer:this.layer});var e=this.notifyChange.bind(this,"suspended");this._handles.add([this.watch("fullOpacity",this._opacityChangeHandler.bind(this)),this.layer.watch("minScale",e),this.layer.watch("maxScale",e),this._exportImageParameters.watch("version",function(e){this._imageVersion!==e&&(this._imageVersion=e,this._refetch())}.bind(this))],"layer"),this.view.resourceController.registerIdleFrameWorker(this,{idleBegin:function(){this._hasScaleRange()&&this.notifyChange("suspended")}});var t=n.toView(this).then(function(e){this.fullExtentInViewSpatialReference=e}.bind(this));t&&this.addResolvingPromise(t)},destroy:function(){this.clear(),this._handles.destroy(),this.view.resourceController.deregisterIdleFrameWorker(this),this._exportImageParameters&&(this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null)},getPopupData:function(e){var t=this.view.scale,a=this.layer.allSublayers.filter(function(e){var a=0===e.minScale||t<=e.minScale,i=0===e.maxScale||t>=e.maxScale;return e.popupTemplate&&e.visible&&a&&i});return a.map(function(t){var a=t.createQuery();return a.geometry=e,a.outFields=this.getTemplateOutFields(t.popupTemplate),t.queryFeatures(a).then(function(e){return e.features})},this)},getTemplateOutFields:function(e){if(!e||!e.fieldInfos)return["*"];var t=[];return e.fieldInfos.forEach(function(e){var a=e.fieldName&&e.fieldName.toLowerCase();a&&"shape"!==a&&0!==a.indexOf("relationships/")&&t.push(e.fieldName)}),t},setDrapingExtent:function(e,t,a,i){var r,n=(t[2]-t[0])/(t[3]-t[1]);r=n>1.0001?[i,i/n]:.9999>n?[i*n,i]:[i,i];var s=this.layer.imageMaxWidth,l=this.layer.imageMaxHeight;r[0]>s&&(r[1]=Math.floor(r[1]*s/r[0]),r[0]=s),r[1]>l&&(r[0]=Math.floor(r[0]*l/r[1]),r[1]=l),this._extents[e]={extent:t,spatialReference:a,imageSize:r},this.suspended||this.fetch(e)},fetch:function(e){if(!this.suspended){var a=this._extents[e],i=a.extent,r=new t(i[0],i[1],i[2],i[3],a.spatialReference);this._exportImageParameters.scale!==this.view.scale&&(this._exportImageParameters.scale=this.view.scale),this._imageVersion=this._exportImageParameters.version,this._images[e]||(this._images[e]={texture:null,material:null,rendergeometry:null,loadingPromise:null,image:null,worldExtent:c.create(i)});var n=this._images[e];n.loadingPromise&&n.loadingPromise.cancel(),n.loadingPromise=this.layer.fetchImage(r,a.imageSize[0],a.imageSize[1],{allowImageDataAccess:!0}),n.loadingPromise.then(function(t){n.loadingPromise=null,n.image=t,c.set(i,n.worldExtent),this._createStageObjects(e,t),0===e&&this._images[1]&&this._images[1].rendergeometry&&this._createStageObjects(1,null),this._evaluateUpdatingState(),this.emit("draped-data-change")}.bind(this)).otherwise(function(e){e&&"CancelError"===e.name||(n.loadingPromise=null,this._evaluateUpdatingState())}.bind(this)),this._evaluateUpdatingState()}},clear:function(){for(var e in this._images)this.clearImage(e)},clearImage:function(e){var t=this._images[e];t&&(t.rendergeometry&&(this.view._stage.getTextureGraphicsRenderer().removeRenderGeometries([t.rendergeometry]),t.rendergeometry=null),t.texture&&(this.view._stage.remove(l.ModelContentType.TEXTURE,t.texture.getId()),t.texture=null),t.material&&(this.view._stage.remove(l.ModelContentType.MATERIAL,t.material.getId()),t.material=null),t.loadingPromise&&(t.loadingPromise.cancel(),t.loadingPromise=null),t.image=null)},canResume:function(){if(!this.inherited(arguments))return!1;var e=this.layer.minScale,t=this.layer.maxScale;if(e>0||t>0){var a=this.view.scale;if(t>a||e>0&&a>e)return!1}return!0},_refetch:function(){for(var e=0;e<this._extents.length;e++)this._extents[e]&&this.fetch(e)},_drawingOrderSetter:function(e){if(e!==this._get("drawingOrder")){this._set("drawingOrder",e);var t={};this._images.forEach(function(a){a&&a.material&&(a.material.setRenderPriority(e),t[a.material.getId()]=!0)}),m.objectEmpty(t)||(this.view._stage.getTextureGraphicsRenderer().updateRenderOrder(t),this.emit("draped-data-change"))}},_hasScaleRange:function(){return this.get("layer.minScale")>0||this.get("layer.maxScale")>0},_opacityChangeHandler:function(e){this._images.forEach(function(t){t&&t.material&&t.material.setParameterValues({opacity:e})}.bind(this)),this.emit("draped-data-change")},_evaluateUpdatingState:function(){this.notifyChange("updating")},isUpdating:function(){if(this._updatingOverlay)return!0;for(var e in this._images){var t=this._images[e];if(t.loadingPromise)return!0}return!1},_createStageObjects:function(e,t){var a=this.view._stage,i=a.getTextureGraphicsRenderer(),n=this._images[e];t?(n.texture&&a.remove(l.ModelContentType.TEXTURE,n.texture.getId()),n.texture=new o(t,"dynamicMapLayer",{width:t.width,height:t.height,wrapClamp:!0}),a.add(l.ModelContentType.TEXTURE,n.texture)):g(n.texture),n.material?t&&n.material.setParameterValues({textureId:n.texture.getId()}):(n.material=new d({ambient:[1,1,1],diffuse:[0,0,0],transparent:!0,opacity:this.fullOpacity,textureId:n.texture.getId(),receiveSSAO:!1},"dynamicMapLayer"),n.material.setRenderPriority(this.drawingOrder),a.add(l.ModelContentType.MATERIAL,n.material));var s,m=-1;if(0===e)s=r.createGeometryForExtent(n.worldExtent,m);else{if(1!==e)return void console.error("DynamicLayerView3D._createStageObjects: Invalid extent idx");var c=this._images[0].worldExtent;if(!c)return;s=r.createOuterImageGeometry(c,n.worldExtent,m)}var f=new h(s);f.material=n.material,f.origin={vec3:[0,0,0],id:"0_0"},f.transformation=u.identity(),f.name="dynamicMapLayer",f.uniqueName="dynamicMapLayer#"+s.id,i.addRenderGeometries([f]),n.rendergeometry&&i.removeRenderGeometries([n.rendergeometry]),n.rendergeometry=f}}));return f});