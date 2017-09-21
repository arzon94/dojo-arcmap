//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/Accessor ../../../core/HandleRegistry ./TilingScheme ./terrainUtils".split(" "),function(d,n,k,g,e,l,m,f,h){d=function(d){function c(){var a=d.call(this)||this;return a._changeHandles=new m,a}return k(c,d),c.prototype.normalizeCtorArgs=function(a){return this._layers=a.layers,this._extentHelper=a.extentHelper,this._manifold=a.manifold,{viewSpatialReference:a.viewSpatialReference}},
c.prototype.initialize=function(){var a=this;this._changeHandles.add(this._layers.on("change",function(){return a._update()}));this._changeHandles.add(this._extentHelper.watch("layerViewsExtent",function(){return a._setAdHocTilingScheme()}));this._update();this.tilingSchemeLocked||this._setAdHocTilingScheme()},c.prototype.destroy=function(){this._changeHandles.destroy();this._changeHandles=null},c.prototype._update=function(){var a=this;if(this._waitTask=null,!this.tilingSchemeLocked){var b=this._layers.find(function(b){return h.isTiledLayer(b)?
b.isResolved()&&!a._isTileInfoSupported(h.getTileInfo(b),b.fullExtent)?!1:!b.isRejected():void 0});if(b)if(b.isResolved()){var c=new f(h.getTileInfo(b)),b=h.getKnownTiledServiceLevelCap(b.url);1/0>b&&c.capMaxLod(b);this._lockTilingScheme(c)}else this._updateWhen(b)}},c.prototype._updateWhen=function(a){var b=this,c=a.always(function(){c===b._waitTask&&b._update()});this._waitTask=c},c.prototype._lockTilingScheme=function(a){var b=this;if("spherical"===this._manifold){var c=a.levels.length-1;a=a.spatialReference.isWebMercator?
f.makeWebMercatorAuxiliarySphere(c):f.makeWGS84WithTileSize(a.pixelSize[0],c)}this.tilingSchemeLocked=!0;this.tilingScheme=a;this._extentHelper.tilingScheme=this.tilingScheme;this._updateTiledLayerExtent();this._changeHandles.removeAll();this._changeHandles.add(this._extentHelper.watch("tiledLayersExtent",function(){return b._updateTiledLayerExtent()}))},c.prototype._updateTiledLayerExtent=function(){this.extent=this._extentHelper.tiledLayersExtent},c.prototype._setAdHocTilingScheme=function(){if("spherical"===
this._manifold)this.tilingScheme=this._extentHelper.spatialReference.isWebMercator?f.WebMercatorAuxiliarySphere:f.makeWGS84WithTileSize(256),this.extent=this._extentHelper.layerViewsExtent;else{var a=this._extentHelper.layerViewsExtent;a&&(this.tilingScheme=f.fromExtent(a,this._extentHelper.spatialReference),this.extent=a)}},c.prototype._isTileInfoSupported=function(a,b){return null==h.checkIfTileInfoSupportedForView(a,b,this.viewSpatialReference,this._manifold)},c}(e.declared(l));return g([e.property()],
d.prototype,"tilingScheme",void 0),g([e.property()],d.prototype,"extent",void 0),g([e.property({value:!1})],d.prototype,"tilingSchemeLocked",void 0),g([e.property()],d.prototype,"viewSpatialReference",void 0),d=g([e.subclass()],d)});