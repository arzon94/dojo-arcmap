//>>built
define(["require","exports","./TerrainConst","../../webgl/Texture","../../vectorTiles/VectorTileDisplayObject"],function(g,h,d,e,f){return function(){function b(a){this.waitingAgents=[];this.rawData=this.requestPromise=this.loadingAgent=this.upsampleFromTile=this.tilemapRequest=this.tilemap=this.data=null;this.pendingUpdates=0;this.elevationBounds=void 0;this.init(a)}return b.prototype.init=function(a){this.waitingAgents.length=0;this.rawData=this.requestPromise=this.loadingAgent=this.upsampleFromTile=
this.tilemapRequest=this.tilemap=this.data=null;this.pendingUpdates=0;a===d.LayerClass.ELEVATION&&(this.elevationBounds=null)},b.prototype.releaseResources=function(){this.waitingAgents.length=0;this.rawData=this.requestPromise=this.loadingAgent=this.upsampleFromTile=this.tilemapRequest=this.tilemap=null;this.pendingUpdates=0;var a=this.data;a&&(a instanceof e?a.dispose():a instanceof f&&a.dispose())},b.makeEmptyLayerInfo=function(a,c){return c?(c.init(a),c):new b(a)},b}()});