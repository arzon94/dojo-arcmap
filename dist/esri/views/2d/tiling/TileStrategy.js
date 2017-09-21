//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","./TileKey"],function(y,z,A,n){var h=new n(0,0,0,0),f=new Map,g=[],k=[];return function(){function d(a){this._previousResolution=Number.POSITIVE_INFINITY;this.cachePolicy="keep";this.tileIndex=new Map;this.tiles=[];this.acquireTile=a.acquireTile;this.releaseTile=a.releaseTile;this.tileInfoView=a.tileInfoView;a.cachePolicy&&(this.cachePolicy=a.cachePolicy)}return d.prototype.destroy=function(){this.tileIndex.clear()},d.prototype.update=
function(a){var p=this,b=this.tileIndex,d=this.tileInfoView.getTileCoverage(a.state);if(d){var e=d.spans,q=d.lodInfo,t=q.level,c=a.state.resolution,l=!a.stationary&&c>this._previousResolution;this._previousResolution=c;this.tiles.length=0;f.clear();var u=0,v=0;if(0<e.length)for(var r=0;r<e.length;r++){a=e[r];for(var n=a.row,w=a.colTo,m=a.colFrom;w>=m;m++)u++,a=h.set(t,n,q.normalizeCol(m),q.getWorldForColumn(m)).id,b.has(a)?(c=b.get(a),c.attached?(f.set(a,c),v++):c.attached||l||this._addParentTile(a,
f)):(c=this.acquireTile(h),this.tileIndex.set(a,c),l||this._addParentTile(a,f))}var x=v===u;k.length=0;g.length=0;b.forEach(function(a,b){if(h.set(b),!f.has(b)){var c=p.tileInfoView.intersects(d,h);!c||!l&&x?"purge"===p.cachePolicy?g.push(b):(h.level>t||!c)&&g.push(b):a.attached?k.push(b):l&&g.push(b)}});for(e=0;e<k.length;e++)a=k[e],(c=b.get(a))&&c.attached&&f.set(a,c);for(e=0;e<g.length;e++)a=g[e],c=b.get(a),this.releaseTile(c),b["delete"](a);f.forEach(function(a){return p.tiles.push(a)});k.length=
0;g.length=0;f.clear()}},d.prototype._addParentTile=function(a,d){for(var b=null;a=this.tileInfoView.getTileParentId(a);)if(this.tileIndex.has(a)&&(b=this.tileIndex.get(a),b&&b.attached)){d.has(b.key.id)||d.set(b.key.id,b);break}},d}()});