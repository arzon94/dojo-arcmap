//>>built
define("require exports ./LODInfo ./TileKey ./TileSpan ./TileCoverage".split(" "),function(x,y,u,n,q,v){var w=function(){function g(a,b,c,d,e,r,p,l){this.x=a;this.ymin=b;this.ymax=c;this.invM=d;this.leftAdjust=e;this.rightAdjust=r;this.leftBound=p;this.rightBound=l}return g.create=function(a,b){a[1]>b[1]&&(l=[b,a],a=l[0],b=l[1]);l=a[0];a=a[1];var c=b[0];b=b[1];var d=c-l,e=b-a,e=0!==e?d/e:0,r=(Math.ceil(a)-a)*e,p=(Math.floor(a)-a)*e;return new g(l,Math.floor(a),Math.ceil(b),e,0>d?r:p,0>d?p:r,0>d?c:
l,0>d?l:c);var l},g.prototype.incrRow=function(){this.x+=this.invM},g.prototype.getLeftCol=function(){return Math.max(this.x+this.leftAdjust,this.leftBound)},g.prototype.getRightCol=function(){return Math.min(this.x+this.rightAdjust,this.rightBound)},g}(),h=[[0,0],[0,0],[0,0],[0,0]];return function(){function g(a,b){var c=this;this.tileInfo=a;this.fullExtent=b;this.scales=[];this._lodInfos=null;this._infoByScale={};this._infoByLevel={};var d=a.lods.slice();d.sort(function(a,b){return b.scale-a.scale});
var e=this._lodInfos=d.map(function(c){return u.create(a,c,b)});d.forEach(function(a,b){c._infoByLevel[a.level]=e[b];c._infoByScale[a.scale]=e[b];c.scales[b]=a.scale},this);this._wrap=a.spatialReference.isWrappable}return g.prototype.getTileBounds=function(a,b){var c=this._infoByLevel[b.level];return c?c.getTileBounds(a,b):a},g.prototype.getTileCoords=function(a,b){var c=this._infoByLevel[b.level];return c?c.getTileCoords(a,b):a},g.prototype.getTileCoverage=function(a){var b,c,d,e=this.getClosestInfoForScale(a.scale),
g=v.pool.acquire(e),p=this._wrap;b=+(1/0);var l=-(1/0),n=g.spans;h[0][0]=h[0][1]=h[1][1]=h[3][0]=0;h[1][0]=h[2][0]=a.size[0];h[2][1]=h[3][1]=a.size[1];for(var f=0;f<h.length;f++){var k=h[f];a.toMap(k,k);k[0]=e.getColumnForX(k[0]);k[1]=e.getRowForY(k[1])}a=[];k=3;for(f=0;4>f;f++){if(h[f][1]!==h[k][1]){var m=w.create(h[f],h[k]);b=Math.min(m.ymin,b);l=Math.max(m.ymax,l);void 0===a[m.ymin]&&(a[m.ymin]=[]);a[m.ymin].push(m)}k=f}if(null==b||null==l||100<l-b)return null;for(k=[];l>b;){null!=a[b]&&(k=k.concat(a[b]));
c=+(1/0);d=-(1/0);for(f=k.length-1;0<=f;f--)m=k[f],c=Math.min(c,m.getLeftCol()),d=Math.max(d,m.getRightCol());if(c=Math.floor(c),d=Math.floor(d),b>=e.first[1]&&b<=e.last[1])if(p)if(e.size[0]<e.worldSize[0])for(m=Math.floor(d/e.worldSize[0]),f=Math.floor(c/e.worldSize[0]);m>=f;f++)n.push(new q(b,Math.max(e.getFirstColumnForWorld(f),c),Math.min(e.getLastColumnForWorld(f),d)));else n.push(new q(b,c,d));else c>e.last[0]||d<e.first[0]||(c=Math.max(c,e.first[0]),d=Math.min(d,e.last[0]),n.push(new q(b,c,
d)));b+=1;for(f=k.length-1;0<=f;f--)m=k[f],m.ymax>=b?m.incrRow():k.splice(f,1)}return g},g.prototype.getTileIdAtParent=function(a,b){b=n.pool.acquire(b);var c=this._infoByLevel[b.level];if(a.resolution<c.resolution)throw Error("Cannot calculate parent tile. destination LOD's resolution "+a.resolution+" is not a parent resolution of "+c.resolution);return a.resolution===c.resolution?b.id:n.getId(a.level,Math.floor(b.row*c.resolution/a.resolution+.01),Math.floor(b.col*c.resolution/a.resolution+.01),
b.world)},g.prototype.getTileParentId=function(a){a=n.pool.acquire(a);var b=this._lodInfos.indexOf(this._infoByLevel[a.level])-1;if(0>b)return n.pool.release(a),null;b=this.getTileIdAtParent(this._lodInfos[b],a);return n.pool.release(a),b},g.prototype.getTileResolution=function(a){return(a=this._infoByLevel[a.level])?a.resolution:-1},g.prototype.getTileScale=function(a){return(a=this._infoByLevel[a.level])?a.scale:-1},g.prototype.intersects=function(a,b){var c=n.pool.acquire(b);b=this._infoByLevel[c.level];
var d=a.lodInfo;if(d.resolution>b.resolution){var e=n.pool.acquire(this.getTileIdAtParent(d,c)),g=d.denormalizeCol(e.col,e.world);b=a.spans.some(function(a){return a.row===e.row&&a.colFrom<=g&&a.colTo>=g});return n.pool.release(c),n.pool.release(e),b}if(d.resolution<b.resolution){var h=a.spans.reduce(function(a,b){return a[0]=Math.min(a[0],b.row),a[1]=Math.max(a[1],b.row),a[2]=Math.min(a[2],b.colFrom),a[3]=Math.max(a[3],b.colTo),a},[+(1/0),-(1/0),+(1/0),-(1/0)]);a=h[0];var l=h[1],q=h[2],h=h[3],f=
b.denormalizeCol(c.col,c.world),k=d.getColumnForX(b.getXForColumn(f)),m=d.getRowForY(b.getYForRow(c.row)),f=d.getColumnForX(b.getXForColumn(f+1))-1;b=d.getRowForY(b.getYForRow(c.row+1))-1;return n.pool.release(c),!(k>h||q>f||m>l||a>b)}var t=d.denormalizeCol(c.col,c.world);b=a.spans.some(function(a){return a.row===c.row&&a.colFrom<=t&&a.colTo>=t});return n.pool.release(c),b},g.prototype.getClosestInfoForScale=function(a){var b=this.scales;return this._infoByScale[a]?this._infoByScale[a]:(a=b.reduce(function(b,
d,e,g){return Math.abs(d-a)<Math.abs(b-a)?d:b},b[0]),this._infoByScale[a])},g}()});