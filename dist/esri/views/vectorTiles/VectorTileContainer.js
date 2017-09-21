//>>built
define("require exports ../../core/tsSupport/extendsHelper dojo/has ../../core/libs/gl-matrix/vec3 ../../core/libs/gl-matrix/mat4 ../2d/engine/Container ./renderers/Renderer ./GeometryUtils".split(" "),function(t,u,m,n,k,g,p,q,r){return function(h){function d(){var a=h.call(this)||this;return a.isInitialized=!1,a._displayWidth=0,a._displayHeight=0,a._tileCoordinateScale=k.create(),a._orientationVec=k.create(),a._displayScale=k.create(),a._orientationVec.set([0,0,1]),a._defaultTransform=g.create(),
a}return m(d,h),d.prototype.initialize=function(a,b,e,f){this._renderer=new q;this._renderer.initialize(a,b);this._tileInfoView=f;this._tileInfo=e;this.isInitialized=!0},d.prototype.destroy=function(){this._renderer&&(this._renderer.dispose(),this._renderer=null)},d.prototype.prepareChildrenRenderParameters=function(a){var b=a.state;return b&&this._tileInfo&&this.isInitialized?(a.displayLevel=this._tileInfo.scaleToZoom(b.scale),a.requiredLevel=this._tileInfoView.getClosestInfoForScale(b.scale).level,
a.renderer=this._renderer,a):a},d.prototype.renderChildren=function(a){if(0!==this.children.length&&this.isInitialized&&a&&a.state){this.sortChildren(function(a,b){return a.key.level-b.key.level});for(var b=this.children.length,e=1;b>=e;e++){var f=this.children[e-1];f.attached&&(f.stencilData.reference=e,f.stencilData.mask=255)}this._updateTilesTransform(a.state,this._tileInfoView.getClosestInfoForScale(a.state.scale).level);b=a.context;if(b.setDepthWriteEnabled(!0),this._renderer.setStateParams(a.state,
a.devicePixelRatio,a.displayLevel),this._renderer.drawClippingMasks(b,this.children),b.setStencilWriteMask(0),b.setBlendFunctionSeparate(1,771,1,771),b.setStencilOp(7680,7680,7681),b.setDepthFunction(515),b.setBlendingEnabled(!1),b.setStencilTestEnabled(!0),b.setDepthTestEnabled(!0),b.setDepthWriteEnabled(!0),a.drawphase=0,h.prototype.renderChildren.call(this,a),b.setDepthWriteEnabled(!1),b.setBlendingEnabled(!0),a.drawphase=1,h.prototype.renderChildren.call(this,a),a.drawphase=2,h.prototype.renderChildren.call(this,
a),b.setStencilTestEnabled(!1),b.setDepthTestEnabled(!1),n("esri-vector-tiles-debug"))for(a=0,e=this.children;a<e.length;a++)f=e[a],f.attached&&f.visible&&this._renderer.renderTileInfo(b,f);this._renderer.needsRedraw()&&this.requestRender()}},d.prototype.removeAllChildren=function(){for(var a=0;a<this.children.length;a++)this.children[a].dispose();h.prototype.removeAllChildren.call(this)},d.prototype._updateTilesTransform=function(a,b){var e=1/a.width,f=1/a.height,d=[0,0];this._calculateRelativeViewProjMat(this._tileInfo.lods[b].resolution,
a.resolution,a.rotation,this._tileInfo.size[1],4096,a.width,a.height,this._defaultTransform);for(var l=0,g=this.children;l<g.length;l++){var c=g[l];a.toScreen(d,c.coords);d[1]=a.height-d[1];c.tileTransform.displayCoord[0]=2*d[0]*e-1;c.tileTransform.displayCoord[1]=2*d[1]*f-1;c.key.level===b&&4096===c.coordRange?c.tileTransform.transform.set(this._defaultTransform):this._calculateRelativeViewProjMat(this._tileInfo.lods[c.key.level].resolution,a.resolution,a.rotation,this._tileInfo.size[1],c.coordRange,
a.width,a.height,c.tileTransform.transform)}},d.prototype._calculateRelativeViewProjMat=function(a,b,d,f,h,l,k,c){var e=.125;512!==f&&4096!==h&&(e=f/h);a=a/b*e;this._tileCoordinateScale.set([a,a,1]);(l!==this._displayWidth||k!==this._displayHeight)&&(this._displayScale.set([2/l,-2/k,1]),this._displayWidth=l,this._displayHeight=k);g.identity(c);g.scale(c,c,this._tileCoordinateScale);g.rotate(c,c,-d*r.C_DEG_TO_RAD,this._orientationVec);g.scale(c,c,this._displayScale);g.transpose(c,c)},d}(p)});