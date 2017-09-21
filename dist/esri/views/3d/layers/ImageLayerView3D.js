//>>built
define("../../../core/HandleRegistry ../../../core/promiseUtils ../../layers/LayerView ../../../geometry/Extent ./support/overlayImageUtils ../lib/glMatrix ../webgl-engine/Stage ../webgl-engine/lib/Texture ../webgl-engine/lib/RenderGeometry ../webgl-engine/materials/Material ../webgl-engine/lib/Util".split(" "),function(p,q,r,t,h,k,f,u,v,w,l){var x=l.assert,y=k.mat4d,m=k.vec4d;return r.createSubclass({declaredClass:"esri.views.3d.layers.ImageLayerView3D",properties:{suspended:{dependsOn:["view.scale",
"layer.minScale","layer.maxScale"]}},constructor:function(){this._extents=[];this._images=[];this._handles=new p},initialize:function(){this.drawingOrder=this.view.getDrawingOrder(this.layer.uid);this._handles.add(this.watch("suspended",function(a){if(a)this.clear(),this.emit("draped-data-change");else{a=this._extents.length;for(var b=0;a>b;b++)this._fetch(b)}}.bind(this)));this._handles.add([this.watch("fullOpacity",this._opacityChangeHandler.bind(this)),this.layer.watch("exportImageParameters.version",
this._layerExportParametersChangeHandler.bind(this)),this.layer.on("redraw",this._layerRedrawHandler.bind(this))],"layer")},destroy:function(){this.clear();this._handles.destroy()},_handles:null,_images:null,supportsDraping:!0,hasDraped:!0,drawingOrder:0,_drawingOrderSetter:function(a){if(a!==this._get("drawingOrder")){this._set("drawingOrder",a);var b={};this._images.forEach(function(e){e&&e.material&&(e.material.setRenderPriority(a),b[e.material.getId()]=!0)});l.objectEmpty(b)||(this.view._stage.getTextureGraphicsRenderer().updateRenderOrder(b),
this.emit("draped-data-change"))}},canResume:function(){if(!this.inherited(arguments))return!1;var a=this.layer.minScale,b=this.layer.maxScale;if(0<a||0<b){var e=this.view.scale;if(b>e||0<a&&e>a)return!1}return!0},setDrapingExtent:function(a,b,e,d){var c=(b[2]-b[0])/(b[3]-b[1]);d=1.0001<c?[d,d/c]:.9999>c?[d*c,d]:[d,d];var c=this.layer.imageMaxWidth,n=this.layer.imageMaxHeight;d[0]>c&&(d[1]=Math.floor(d[1]*c/d[0]),d[0]=c);d[1]>n&&(d[0]=Math.floor(d[0]*n/d[1]),d[1]=c);this._extents[a]={extent:b,spatialReference:e,
imageSize:d};this.suspended||this._fetch(a)},getGraphicsFromStageObject:function(a,b){return q.reject()},clear:function(){for(var a in this._images)this._clearImage(a)},_fetch:function(a){var b=this._extents[a],e=b.extent,d=new t(e[0],e[1],e[2],e[3],b.spatialReference),c=this._images[a];c||(c=this._images[a]={texture:null,material:null,rendergeometry:null,canvas:null,pixelData:null,worldExtent:m.create(e),loading:!0});c.promise&&c.promise.cancel();c.loading=!0;c.promise=this.layer.fetchImage(d,b.imageSize[0],
b.imageSize[1],{allowImageDataAccess:!0}).then(function(b){c.canvas=document.createElement("canvas");c.pixelData=b.pixelData;m.set(e,c.worldExtent);b=c.canvas;var d=b.getContext("2d"),g=this.layer.applyFilter(c.pixelData).pixelBlock;b.width=g.width;b.height=g.height;var f=d.createImageData(g.width,g.height),g=g.getAsRGBA();f.data.set(g);d.putImageData(f,0,0);this._createStageObjects(a,b);0===a&&this._images[1]&&this._images[1].rendergeometry&&this._createStageObjects(1,null);this._evaluateUpdatingState();
this.emit("draped-data-change")}.bind(this)).always(function(){c.loading=!1;c.promise=null;this._evaluateUpdatingState()}.bind(this));this._evaluateUpdatingState()},_updateImage:function(a){var b=this._images[a];if(b&&b.pixelData){var e=b.canvas,d=e.getContext("2d"),c=this.layer.applyFilter(b.pixelData).pixelBlock,f=d.createImageData(c.width,c.height),h=c.getAsRGBA();e.width=c.width;e.height=c.height;f.data.set(h);d.putImageData(f,0,0);this._createStageObjects(a,b.canvas)}this.emit("draped-data-change")},
_clearImage:function(a){a=this._images[a];var b=this.view._stage;a&&(a.loading&&null!=a.promise&&a.promise.cancel(),a.rendergeometry&&b.getTextureGraphicsRenderer().removeRenderGeometries([a.rendergeometry]),a.texture&&b.remove(f.ModelContentType.TEXTURE,a.texture.getId()),a.material&&b.remove(f.ModelContentType.MATERIAL,a.material.getId()),a.rendergeometry=a.texture=a.material=a.pixelData=a.canvas=a.loading=!1)},_layerRedrawHandler:function(){for(var a=0;a<this._images.length;a++)this._updateImage(a)},
_layerExportParametersChangeHandler:function(){for(var a=0;a<this._extents.length;a++)this._extents[a]&&this._fetch(a)},_opacityChangeHandler:function(a){this._images.forEach(function(b){b&&b.material&&b.material.setParameterValues({opacity:a})}.bind(this));this.emit("draped-data-change")},_evaluateUpdatingState:function(){this.notifyChange("updating")},isUpdating:function(){var a=!1,b;for(b in this._images)if(this._images[b].loading){a=!0;break}return a},_createStageObjects:function(a,b){var e=this.view._stage,
d=e.getTextureGraphicsRenderer(),c=this._images[a];b?(c.texture&&e.remove(f.ModelContentType.TEXTURE,c.texture.getId()),c.texture=new u(b,"imageLayer",{width:b.width,height:b.height,wrapClamp:!0}),e.add(f.ModelContentType.TEXTURE,c.texture)):x(c.texture);c.material?b&&c.material.setParameterValues({textureId:c.texture.getId()}):(c.material=new w({ambient:[1,1,1],diffuse:[0,0,0],transparent:!0,opacity:this.fullOpacity,textureId:c.texture.getId()},"imageLayer"),c.material.setRenderPriority(this.drawingOrder),
e.add(f.ModelContentType.MATERIAL,c.material));if(0===a)a=h.createGeometryForExtent(c.worldExtent,-1);else{if(1!==a)return void console.error("ImageLayerView3D._createStageObjects: Invalid extent idx");a=this._images[0].worldExtent;if(!a)return;a=h.createOuterImageGeometry(a,c.worldExtent,-1)}b=new v(a);b.material=c.material;b.origin={vec3:[0,0,0],id:"0_0"};b.transformation=y.identity();b.name="imageLayer";b.uniqueName="imageLayer#"+a.id;d.addRenderGeometries([b]);c.rendergeometry&&d.removeRenderGeometries([c.rendergeometry]);
c.rendergeometry=b}})});