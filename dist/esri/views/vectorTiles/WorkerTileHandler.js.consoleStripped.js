require({cache:{
'esri/views/vectorTiles/WorkerTile':function(){
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

define(["require","exports","dojo/Deferred","../../core/promiseUtils","../../core/executeAsync","../../core/ObjectPool","./VertexMemoryBuffer","./IndexMemoryBuffer","./TileParser","./BackgroundBucket","./FillBucket","./LineBucket","./SymbolBucket","./Placement","./GeometryUtils"],function(e,t,r,n,f,s,u,o,i,a,l,h,B,p,y){var x=function(){function e(){this.rotation=0,this.status=0,this._symbolBuckets=[],this.placementEngine=new p.PlacementEngine,this.polygonVertexBuffer=new u.PolygonMemoryBuffer,this.polygonOutlineVertexBuffer=new u.PolygonOutlineMemoryBuffer,this.polygonIndexBuffer=new o.TriangleElementMemoryBuffer,this.polygonOutlineIndexBuffer=new o.TriangleElementMemoryBuffer,this.lineVertexBuffer=new u.LineMemoryBuffer,this.lineIndexBuffer=new o.TriangleElementMemoryBuffer,this.markerVertexBuffer=new u.SymbolMemoryBuffer,this.markerIndexBuffer=new o.TriangleElementMemoryBuffer,this.textVertexBuffer=new u.SymbolMemoryBuffer,this.textIndexBuffer=new o.TriangleElementMemoryBuffer}return e.prototype.initialize=function(e,t,r,n){void 0===n&&(n=0),this.tileKey=e,this.refKey=t,this._workerTileHandler=r,this.rotation=n,this.placementEngine.setAngle(y.C_DEG_TO_RAD*n)},e.prototype.release=function(){this.tileKey=this.refKey="",this.status=0,this.rotation=0,this.polygonVertexBuffer.reset(),this.polygonOutlineVertexBuffer.reset(),this.polygonIndexBuffer.reset(),this.polygonOutlineIndexBuffer.reset(),this.lineVertexBuffer.reset(),this.lineIndexBuffer.reset(),this.markerVertexBuffer.reset(),this.markerIndexBuffer.reset(),this.textVertexBuffer.reset(),this.textIndexBuffer.reset(),this.placementEngine.reset(),this._symbolBuckets.length=0,this._workerTileHandler=null},e.prototype.setDataAndParse=function(e,t){var n=this,f=new r(function(e){n.status=6});return this._parse(e,t).then(function(e){n.status=4;for(var t=[2,n.polygonVertexBuffer.sizeInBytes,3,n.polygonOutlineVertexBuffer.sizeInBytes,6,n.polygonIndexBuffer.sizeInBytes,7,n.polygonOutlineIndexBuffer.sizeInBytes,0,n.lineVertexBuffer.sizeInBytes,8,n.lineIndexBuffer.sizeInBytes,4,n.markerVertexBuffer.sizeInBytes,9,n.markerIndexBuffer.sizeInBytes,5,n.textVertexBuffer.sizeInBytes,10,n.textIndexBuffer.sizeInBytes],r=new Uint32Array(t),s=[],u=e.length,o=0;u>o;o++){var i=e[o];if(i instanceof l)s.push(i.layerIndex),s.push(1),s.push(i.polygonIndexStart),s.push(i.polygonIndexCount),s.push(i.polygonOutlineIndexStart),s.push(i.polygonOutlineIndexCount);else if(i instanceof h)s.push(i.layerIndex),s.push(2),s.push(i.triangleIndexStart),s.push(i.triangleIndexCount),s.push(i.connectorStart),s.push(i.connectorCount);else if(i instanceof B){s.push(i.layerIndex),s.push(3),s.push(i.sdfMarker?1:0);var p=i.markerPageMap;s.push(p.size),p.forEach(function(e,t){s.push(t),s.push(e[0]),s.push(e[1])});var y=i.glyphsPageMap;s.push(y.size),y.forEach(function(e,t){s.push(t),s.push(e[0]),s.push(e[1])})}else i instanceof a&&(s.push(i.layerIndex),s.push(0))}var x=new Uint32Array(s),c=n.polygonVertexBuffer.toBuffer(),d=n.polygonOutlineVertexBuffer.toBuffer(),I=n.polygonIndexBuffer.toBuffer(),g=n.polygonOutlineIndexBuffer.toBuffer(),m=n.lineVertexBuffer.toBuffer(),k=n.lineIndexBuffer.toBuffer(),b=n.markerVertexBuffer.toBuffer(),v=n.markerIndexBuffer.toBuffer(),w=n.textVertexBuffer.toBuffer(),z=n.textIndexBuffer.toBuffer();f.resolve({data:{bufferDataInfo:r.buffer,bucketDataInfo:x.buffer,bufferData:[c,d,I,g,m,k,b,v,w,z]},buffers:[c,I,d,g,m,k,b,v,w,z,r.buffer,x.buffer]})}),f.promise},e.prototype.addBucket=function(e){this._symbolBuckets.push(e)},e.prototype.updateSymbols=function(e){var t=this,r=this._symbolBuckets;if(!r||0===r.length)return n.resolve({data:null});this.rotation=e;var s=this.placementEngine;s.reset(),s.setAngle(e/256*360*y.C_DEG_TO_RAD);var u=this.markerVertexBuffer;u.reset();var o=this.markerIndexBuffer;o.reset();var i=this.textVertexBuffer;i.reset();var a=this.textIndexBuffer;a.reset();var l=[],h=r.length,B=0;return f(function(){if(6===t.status||0===t.status)return!0;if(h>B){var e=r[B++].copy(u,o,i,a,s);e&&(l.push(e),e.updateSymbols())}return B>=h},5).then(function(){if(6===t.status||0===t.status||0===u.sizeInBytes&&0===o.sizeInBytes&&0===i.sizeInBytes&&0===a.sizeInBytes)return{data:null};var e=[4,u.sizeInBytes,9,o.sizeInBytes,5,i.sizeInBytes,10,a.sizeInBytes],r=new Uint32Array(e),n=[];h=l.length;for(var f=0;h>f;f++){var s=l[f];n.push(s.layerIndex),n.push(3),n.push(s.sdfMarker?1:0);var B=s.markerPageMap;n.push(B.size),B.forEach(function(e,t){n.push(t),n.push(e[0]),n.push(e[1])});var p=s.glyphsPageMap;n.push(p.size),p.forEach(function(e,t){n.push(t),n.push(e[0]),n.push(e[1])})}var y=new Uint32Array(n),x=u.toBuffer(),c=o.toBuffer(),d=i.toBuffer(),I=a.toBuffer();return{data:{bufferDataInfo:r.buffer,bucketDataInfo:y.buffer,bufferData:[x,c,d,I]},buffers:[x,c,d,I,r.buffer,y.buffer]}}).otherwise(function(e){return n.resolve({data:null})})},e.prototype.setObsolete=function(){this.status=6},e.prototype.getLayers=function(){return this._workerTileHandler.getLayers()},e.prototype.getWorkerTileHandler=function(){return this._workerTileHandler},e.prototype._parse=function(e,t){if(!e||0===e.byteLength)return n.resolve([]);this.status=2;var r=new i(e,this,t);return r.parse()},e}();return x.pool=new s(x),x});
},
'esri/core/executeAsync':function(){
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

define(["require","exports","dojo/Deferred","./now"],function(e,r,o,i){function n(e,r){var n;(!r||0>=r)&&(r=500);var t=new o(function(){n&&clearTimeout(n)}),u=function(){if(!t.isFulfilled()){for(var o=i(),f=!1;!f&&i()-o<r;)f=e()===!0;f?t.resolve():n=setTimeout(u,0)}};return n=setTimeout(u,0),t.promise}return n});
},
'esri/views/vectorTiles/VertexMemoryBuffer':function(){
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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./MemoryBuffer","./GeometryUtils"],function(t,r,n,o,e,u){Object.defineProperty(r,"__esModule",{value:!0});var i=function(t){function r(){return t.call(this,12)||this}return n(r,t),r.prototype.add=function(t,r,n,o,u,i,a){var h=this.array,s=this.index,f=e.i1616to32(t,r);h.push(f);var p=31;return f=e.i8888to32(Math.round(p*n),Math.round(p*o),Math.round(p*u),Math.round(p*i)),h.push(f),f=e.i1616to32(a,0),h.push(f),s},r}(e);r.LineMemoryBuffer=i;var a=function(t){function r(){return t.call(this,4)||this}return n(r,t),r.prototype.add=function(t,r){var n=this.index;return this.array.push(e.i1616to32(t,r)),n},r}(e);r.LineJoinMemoryBuffer=a;var h=function(t){function r(){return t.call(this,4)||this}return n(r,t),r.prototype.add=function(t,r){this.array.push(e.i1616to32(t,r))},r}(e);r.PolygonMemoryBuffer=h;var s=function(t){function r(){return t.call(this,8)||this}return n(r,t),r.prototype.add=function(t,r,n,o,u,i){var a=this.array,h=this.index,s=e.i1616to32(t,r);a.push(s);var f=15;return s=e.i8888to32(Math.round(f*n),Math.round(f*o),u,i),a.push(s),h},r}(e);r.PolygonOutlineMemoryBuffer=s;var f=function(t){function r(){return t.call(this,16)||this}return n(r,t),r.prototype.add=function(t,r,n,o,i,a,h,s,f,p){var d=this.array,c=this.index,y=e.i1616to32(t,r);return d.push(y),y=e.i1616to32(Math.round(32*n),Math.round(32*o)),d.push(y),y=e.i8888to32(i/4,a/4,0,0),d.push(y),y=e.i8888to32(Math.ceil(10*p),u.radToByte(h),10*s,10*Math.min(f,25)),d.push(y),c},r}(e);r.SymbolMemoryBuffer=f});
},
'esri/views/vectorTiles/MemoryBuffer':function(){
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

define(["require","exports"],function(e,t){var r=function(){function e(e){this._array=[],0>=e&&console.error("strideInBytes must be positive!"),this._stride=e}return Object.defineProperty(e.prototype,"array",{get:function(){return this._array},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"index",{get:function(){return 4*this._array.length/this._stride},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"itemSize",{get:function(){return this._stride},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sizeInBytes",{get:function(){return 4*this._array.length},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this.array.length=0},e.prototype.toBuffer=function(){var e=new Uint32Array(this._array);return e.buffer},e.i1616to32=function(e,t){return 65535&e|t<<16},e.i8888to32=function(e,t,r,n){return 255&e|(255&t)<<8|(255&r)<<16|n<<24},e.i8816to32=function(e,t,r){return 255&e|(255&t)<<8|r<<16},e}();return r});
},
'esri/views/vectorTiles/GeometryUtils':function(){
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

define(["require","exports"],function(_,n){function t(_,n){return _%=n,_>=0?_:_+n}function e(_){return t(_*n.C_RAD_TO_256,256)}function r(_){return t(_*n.C_DEG_TO_256,256)}function u(_){return Math.log(_)*T}function o(_){return _*_}function C(_,n,t){return Math.min(Math.max(_,n),t)}function I(_,n,t){return _*(1-t)+n*t}function i(_,n,t){return _>=n&&t>=_||_>=t&&n>=_}Object.defineProperty(n,"__esModule",{value:!0}),n.C_INFINITY=Number.POSITIVE_INFINITY,n.C_PI=Math.PI,n.C_2PI=2*n.C_PI,n.C_PI_BY_2=n.C_PI/2,n.C_RAD_TO_256=128/n.C_PI,n.C_256_TO_RAD=n.C_PI/128,n.C_DEG_TO_256=256/360,n.C_DEG_TO_RAD=n.C_PI/180,n.C_SQRT2=1.414213562,n.C_SQRT2_INV=1/n.C_SQRT2;var T=1/Math.LN2;n.positiveMod=t,n.radToByte=e,n.degToByte=r,n.log2=u,n.sqr=o,n.clamp=C,n.interpolate=I,n.between=i});
},
'esri/views/vectorTiles/IndexMemoryBuffer':function(){
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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./MemoryBuffer"],function(e,r,t,n,o){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){return e.call(this,12)||this}return t(r,e),r.prototype.add=function(e,r,t){var n=this.array;n.push(e),n.push(r),n.push(t)},r}(o);r.TriangleElementMemoryBuffer=u;var i=function(e){function r(){return e.call(this,4)||this}return t(r,e),r.prototype.add=function(e){this.array.push(e)},r}(o);r.PointElementMemoryBuffer=i});
},
'esri/views/vectorTiles/TileParser':function(){
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

define(["require","exports","dojo/promise/all","../../core/promiseUtils","../../core/executeAsync","../../core/pbf","./SourceLayerData","./Feature","./BackgroundBucket","./FillBucket","./LineBucket","./SymbolBucket","./TileClipper"],function(e,t,r,n,i,a,s,u,l,o,c,f,p){var h=function(){function e(e,t,r){this._pbfTile=new a(new Uint8Array(e),new DataView(e)),this._tile=t,this._connection=r,this._layers=t.getLayers();var n=t.tileKey.split("/").map(parseFloat),i=n[0],s=n[1],u=n[2];this._level=i;var l=t.refKey;if(l){var o=t.refKey.split("/").map(parseFloat)[0],c=i-o;if(c>0){var f=(1<<c)-1,h=s&f,v=u&f;this._tileClipper=new p.TileClipper(c,h,v)}}this._tileClipper||(this._tileClipper=new p.SimpleBuilder)}return e.prototype.parse=function(){for(var e,t=this,a=this._parseTileData(this._pbfTile),s=this._layers,l=s.length,o=this._level,c=[],f={},p=new Set,h=l-1;h>=0;h--)if(e=s[h],!(e.minzoom&&o<e.minzoom||e.maxzoom&&o>=e.maxzoom||e.layout&&"none"===e.layout.visibility))if(0!==e.type){var v=e.sourceLayer,_=a[v];if(_){p.add(v);var y=this._createBucket(e);if(y){y.layerIndex=h,y.layerExtent=_.extent;var B=f[v];B||(B=f[v]=[]),B.push(y)}}}else{var y=this._createBucket(e);c.push(y)}var g=10*(this._level+1),k=[],d=[],x=[],m=[],w=this._tileClipper,b=new Set,I={},F=[];p.forEach(function(e){return F.push(e)});var L=0,S=0,T=F.length;return i(function(){if(6===t._tile.status)return!0;switch(L){case 0:if(T>S){var e=F[S++],r=a[e],n=f[e];if(!n||0===n.length)break;for(var i=r.getData();i.next(2);){var s=new u(i.getMessage(),r),l=s.values;if(l){var o=l._minzoom;if(o&&o>=g)continue}for(var c=0,p=n;c<p.length;c++){var h=p[c];h.pushFeature(s)}}}else{var v=t._tile;for(var e in f)for(var n=f[e],_=0,y=n;_<y.length;_++){var h=y[_];h.hasFeatures()&&(3===h.layer.type?(k.push(h),v.addBucket(h)):h.layer.refLayerId?x.push(h):(d.push(h),m[h.layer.id]=h))}L=1,S=0,T=k.length}break;case 1:if(T>S){var B=k[S++];B.getResources(w,b,I)}else L=2}return 2===L},50).then(function(){if(6===t._tile.status)return[];var e,a=[],s=t._tile.getWorkerTileHandler();b.size>0&&(e=s.fetchSprites(b,t._connection),a.push(e));var u;for(var l in I){var o=I[l];o.size>0&&(u=s.fetchGlyphs(t._tile.tileKey,l,o,t._connection),a.push(u))}return r(a).then(function(e){if(6===t._tile.status)return[];var r=0,n=0,a=d.length;return i(function(){if(6===t._tile.status)return!0;switch(r){case 0:if(a>n){var e=d[n++];e.processFeatures(w,t._tile),c.push(e)}else r=1,n=0,a=x.length;break;case 1:for(var i=0,s=x;i<s.length;i++){var e=s[i],u=m[e.layer.refLayerId];u&&(u.assignBufferInfo(e),c.push(e))}r=2,n=0,a=k.length;break;case 2:if(a>n){var e=k[n++];e.processFeatures(w,t._tile),c.push(e)}else r=3}return 3===r},50).then(function(){return c.sort(function(e,t){return e.layerIndex-t.layerIndex}),c})}).otherwise(function(e){return n.reject(new Error(e))})}).otherwise(function(e){return n.reject(new Error(e))})},e.prototype._parseTileData=function(e){for(var t={};e.next();)switch(e.tag()){case 3:var r=new s(e.getMessage());t[r.name]=r;break;default:e.skip()}return t},e.prototype._createBucket=function(e){switch(e.type){case 0:return this._createBackgroundBucket(e);case 1:return this._createFillBucket(e);case 2:return this._createLineBucket(e);case 3:return this._createSymbolBucket(e)}},e.prototype._createBackgroundBucket=function(e){var t=new l(e,this._level);return t},e.prototype._createFillBucket=function(e){var t=this._tile,r=new o(e,this._level,t.polygonVertexBuffer,t.polygonIndexBuffer,t.polygonOutlineVertexBuffer,t.polygonOutlineIndexBuffer);return r},e.prototype._createLineBucket=function(e){var t=this._tile,r=new c(e,this._level,t.lineVertexBuffer,t.lineIndexBuffer);return r},e.prototype._createSymbolBucket=function(e){var t=this._tile,r=new f(e,this._level,t.markerVertexBuffer,t.markerIndexBuffer,t.textVertexBuffer,t.textIndexBuffer,t.placementEngine,t.getWorkerTileHandler());return r},e}();return h});
},
'esri/core/pbf':function(){
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

define(["require","exports"],function(t,e){var i=4294967296,r=function(){function t(t,e,i,r){this._tag=0,this._dataType=99,this._data=t,this._dataView=e,this._pos=i||0,this._end=r||t.byteLength}return t.prototype.clone=function(){return new t(this._data,this._dataView,this._pos,this._end)},t.prototype.next=function(t){for(;;){if(this._pos===this._end)return!1;var e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0},t.prototype.empty=function(){return this._pos>=this._end},t.prototype.tag=function(){return this._tag},t.prototype.getInt32=function(){return this._decodeVarint()},t.prototype.getInt64=function(){return this._decodeVarint()},t.prototype.getUInt32=function(){return this._decodeVarint()},t.prototype.getUInt64=function(){return this._decodeVarint()},t.prototype.getSInt32=function(){return this._decodeSVarint()},t.prototype.getSInt64=function(){return this._decodeSVarint()},t.prototype.getBool=function(){var t=0!==this._data[this._pos];return this._skip(1),t},t.prototype.getEnum=function(){return this._decodeVarint()},t.prototype.getFixed64=function(){var t=this._dataView,e=this._pos,r=t.getUint32(e,!0)+t.getUint32(e+4,!0)*i;return this._skip(8),r},t.prototype.getSFixed64=function(){var t=this._dataView,e=this._pos,r=t.getUint32(e,!0)+t.getInt32(e+4,!0)*i;return this._skip(8),r},t.prototype.getDouble=function(){var t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t},t.prototype.getFixed32=function(){var t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t},t.prototype.getSFixed32=function(){var t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t},t.prototype.getFloat=function(){var t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t},t.prototype.getString=function(){var t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i},t.prototype.getBytes=function(){var t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i},t.prototype.getMessage=function(){var e=this._getLength(),i=this._pos,r=new t(this._data,this._dataView,i,i+e);return this._skip(e),r},t.prototype.skip=function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}},t.prototype._skip=function(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t},t.prototype._decodeVarint=function(){var t,e=this._data,i=this._pos,r=0;if(this._end-i>=10){do{if(t=e[i++],r|=127&t,0===(128&t))break;if(t=e[i++],r|=(127&t)<<7,0===(128&t))break;if(t=e[i++],r|=(127&t)<<14,0===(128&t))break;if(t=e[i++],r|=(127&t)<<21,0===(128&t))break;if(t=e[i++],r+=268435456*(127&t),0===(128&t))break;if(t=e[i++],r+=34359738368*(127&t),0===(128&t))break;if(t=e[i++],r+=4398046511104*(127&t),0===(128&t))break;if(t=e[i++],r+=562949953421312*(127&t),0===(128&t))break;if(t=e[i++],r+=72057594037927940*(127&t),0===(128&t))break;if(t=e[i++],r+=0x8000000000000000*(127&t),0===(128&t))break;throw new Error("Varint too long!")}while(!1)}else{for(var n=1;i!==this._end&&(t=e[i],0!==(128&t));)++i,r+=(127&t)*n,n*=128;if(i===this._end)throw new Error("Varint overrun!");++i,r+=t*n}return this._pos=i,r},t.prototype._decodeSVarint=function(){var t=this._decodeVarint();return t%2?-(t+1)/2:t/2},t.prototype._getLength=function(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()},t.prototype._toString=function(t,e,i){var r="",n="";i=Math.min(this._end,i);for(var o=e;i>o;++o){var s=t[o];128&s?n+="%"+s.toString(16):(r+=decodeURIComponent(n)+String.fromCharCode(s),n="")}return n.length&&(r+=decodeURIComponent(n)),r},t.prototype._toBytes=function(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)},t}();return r});
},
'esri/views/vectorTiles/SourceLayerData':function(){
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

define(["require","exports"],function(e,t){var r=function(){function e(t){for(this.extent=4096,this.keys=[],this.values=[],this._pbfLayer=t.clone();t.next();)switch(t.tag()){case 1:this.name=t.getString();break;case 3:this.keys.push(t.getString());break;case 4:this.values.push(e._parseValue(t.getMessage()));break;case 5:this.extent=t.getUInt32();break;default:t.skip()}}return e.prototype.getData=function(){return this._pbfLayer},e._parseValue=function(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getInt64();case 5:return e.getUInt64();case 6:return e.getSInt64();case 7:return e.getBool();default:e.skip()}return null},e}();return r});
},
'esri/views/vectorTiles/Feature':function(){
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

define(["require","exports","./Geometry"],function(e,t,r){var s=function(){function e(e,t){this.values={};for(var r=t.keys,s=t.values;e.next();)switch(e.tag()){case 1:this.id=e.getUInt64();break;case 2:for(var a=e.getMessage(),n=this.values;!a.empty();){var o=a.getUInt32(),i=a.getUInt32();n[r[o]]=s[i]}break;case 3:this.type=e.getUInt32();break;case 4:this._pbfGeometry=e.getMessage();break;default:e.skip()}}return e.prototype.getGeometry=function(e){if(void 0!==this._geometry)return this._geometry;var t,s,a=this._pbfGeometry;e?e.reset(this.type):t=[];for(var n=1,o=0,i=0,u=0;!a.empty();){if(0===o){var h=a.getUInt32();n=7&h,o=h>>3}switch(o--,n){case 1:i+=a.getSInt32(),u+=a.getSInt32(),e?e.moveTo(i,u):(s&&t.push(s),s=[],s.push(new r.Point(i,u)));break;case 2:i+=a.getSInt32(),u+=a.getSInt32(),e?e.lineTo(i,u):s.push(new r.Point(i,u));break;case 7:e?e.close():s&&!s[0].equals(i,u)&&s.push(s[0].clone());break;default:throw new Error("Invalid path operation")}}var g;return e?g=e.result():(s&&t.push(s),g=t),this._geometry=g,g},e}();return s});
},
'esri/views/vectorTiles/Geometry':function(){
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

define(["require","exports"],function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(t,i){this.x=t,this.y=i}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.equals=function(t,i){return t===this.x&&i===this.y},t.prototype.isEqual=function(t){return t.x===this.x&&t.y===this.y},t.prototype.setCoords=function(t,i){this.x=t,this.y=i},t.prototype.normalize=function(){var t=this.x,i=this.y,n=Math.sqrt(t*t+i*i);this.x/=n,this.y/=n},t.prototype.rightPerpendicular=function(){var t=this.x;this.x=this.y,this.y=-t},t.prototype.move=function(t,i){this.x+=t,this.y+=i},t.prototype.assign=function(t){this.x=t.x,this.y=t.y},t.prototype.assignAdd=function(t,i){this.x=t.x+i.x,this.y=t.y+i.y},t.prototype.assignSub=function(t,i){this.x=t.x-i.x,this.y=t.y-i.y},t.prototype.rotate=function(t,i){var n=this.x,o=this.y;this.x=n*t-o*i,this.y=n*i+o*t},t.prototype.scale=function(t){this.x*=t,this.y*=t},t.prototype.length=function(){var t=this.x,i=this.y;return Math.sqrt(t*t+i*i)},t.distance=function(t,i){var n=i.x-t.x,o=i.y-t.y;return Math.sqrt(n*n+o*o)},t.add=function(i,n){return new t(i.x+n.x,i.y+n.y)},t.sub=function(i,n){return new t(i.x-n.x,i.y-n.y)},t}();i.Point=n});
},
'esri/views/vectorTiles/BackgroundBucket':function(){
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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./Bucket"],function(e,r,t,n,u){var o=function(e){function r(r,t){return e.call(this,r,t)||this}return t(r,e),r}(u);return o});
},
'esri/views/vectorTiles/Bucket':function(){
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

define(["require","exports"],function(t,e){var r=function(){function t(t,e){this.layerExtent=4096,this._features=[],this.layer=t,this.zoom=e,this._filter=t.getFeatureFilter()}return t.prototype.pushFeature=function(t){this._filter.filter(t)&&this._features.push(t)},t.prototype.hasFeatures=function(){return this._features.length>0},t.prototype.processFeatures=function(t,e){},t.prototype.assignBufferInfo=function(t){},t}();return r});
},
'esri/views/vectorTiles/FillBucket':function(){
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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./Bucket","./Geometry","../../core/libs/earcut/earcut"],function(e,t,n,r,o,i,l){var a=function(e){function t(t,n,r,o,i,l){var a=e.call(this,t,n)||this;return a.polygonVertexBuffer=r,a.polygonIndexBuffer=o,a.polygonOutlineVertexBuffer=i,a.polygonOutlineIndexBuffer=l,a}return n(t,e),Object.defineProperty(t.prototype,"polygonIndexStart",{get:function(){return this._triangleElementsStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"polygonIndexCount",{get:function(){return this._triangleElementsNum},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"polygonOutlineIndexStart",{get:function(){return this._outlineElementsStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"polygonOutlineIndexCount",{get:function(){return this._outlineElementsNum},enumerable:!0,configurable:!0}),t.prototype.assignBufferInfo=function(e){var t=e;t._triangleElementsStart=this._triangleElementsStart,t._triangleElementsNum=this._triangleElementsNum;var n=e.layer.hasPaintProperty("fill-outline-color");n?(t._outlineElementsStart=this._outlineElementsStart,t._outlineElementsNum=this._outlineElementsNum):(t._outlineElementsStart=0,t._outlineElementsNum=0)},t.prototype.processFeatures=function(e,t){this._triangleElementsStart=this.polygonIndexBuffer.index,this._triangleElementsNum=0,this._outlineElementsStart=this.polygonOutlineIndexBuffer.index,this._outlineElementsNum=0,e&&e.setExtent(this.layerExtent);for(var n=this.layer.getPaintValue("fill-pattern",this.zoom),r=this.layer.getPaintValue("fill-antialias",this.zoom)&&void 0===n,o=0,i=this._features;o<i.length;o++){var l=i[o],a=l.getGeometry(e);this._processFeature(a,r)}},t.prototype._processFeature=function(e,n){if(e){var r=e.length;if(n)for(var o=0;r>o;o++)this._processOutline(e[o]);for(var i,l=128,o=0;r>o;o++){var a=t._area(e[o]);a>l?(void 0!==i&&this._processFill(e,i),i=[o]):-l>a&&void 0!==i&&i.push(o)}void 0!==i&&this._processFill(e,i)}},t.prototype._processOutline=function(e){var t,n,r,o=this.polygonOutlineVertexBuffer,l=this.polygonOutlineIndexBuffer,a=l.index,u=new i.Point(0,0),s=new i.Point(0,0),d=new i.Point(0,0),f=-1,y=-1,p=-1,g=-1,h=-1,x=0,m=e.length;if(!(2>m)){for(var c=e[x],_=e[m-1];m&&_.isEqual(c);)--m,_=e[m-1];if(!(2>m-x)){for(var v=x;m>v;++v){v===x?(t=e[m-1],n=e[x],r=e[x+1],u.assignSub(n,t),u.normalize(),u.rightPerpendicular()):(t=n,n=r,r=v!==m-1?e[v+1]:e[x],u.assign(s)),s.assignSub(r,n),s.normalize(),s.rightPerpendicular();var E=u.x*s.y-u.y*s.x;d.assignAdd(u,s),d.normalize();var b=-d.x*-u.x+-d.y*-u.y,S=Math.abs(0!==b?1/b:1);S>8&&(S=8),E>=0?(p=o.add(n.x,n.y,u.x,u.y,0,1),-1===g&&(g=p),f>=0&&y>=0&&p>=0&&l.add(f,y,p),y=o.add(n.x,n.y,S*-d.x,S*-d.y,0,-1),-1===h&&(h=y),f>=0&&y>=0&&p>=0&&l.add(f,y,p),f=y,y=p,p=o.add(n.x,n.y,d.x,d.y,0,1),f>=0&&y>=0&&p>=0&&l.add(f,y,p),y=o.add(n.x,n.y,s.x,s.y,0,1),f>=0&&y>=0&&p>=0&&l.add(f,y,p)):(p=o.add(n.x,n.y,S*d.x,S*d.y,0,1),-1===g&&(g=p),f>=0&&y>=0&&p>=0&&l.add(f,y,p),y=o.add(n.x,n.y,-u.x,-u.y,0,-1),-1===h&&(h=y),f>=0&&y>=0&&p>=0&&l.add(f,y,p),f=y,y=p,p=o.add(n.x,n.y,-d.x,-d.y,0,-1),f>=0&&y>=0&&p>=0&&l.add(f,y,p),f=o.add(n.x,n.y,-s.x,-s.y,0,-1),f>=0&&y>=0&&p>=0&&l.add(f,y,p))}f>=0&&y>=0&&g>=0&&l.add(f,y,g),f>=0&&g>=0&&h>=0&&l.add(f,h,g),this._outlineElementsNum+=3*(l.index-a)}}},t.prototype._processFill=function(e,t){var n,r=t.length;r>1&&(n=[]);for(var o=0,i=0,a=t;i<a.length;i++){var u=a[i];0!==o&&n.push(o),o+=e[u].length}for(var s=2*o,d=new Float64Array(s),f=0,y=0,p=t;y<p.length;y++)for(var u=p[y],g=e[u],h=g.length,x=0;h>x;++x)d[f++]=g[x].x,d[f++]=g[x].y;var m=l(d,n,2),c=m.length;if(c>0){for(var _=this.polygonVertexBuffer.index,v=0;s>v;)this.polygonVertexBuffer.add(d[v++],d[v++]);for(var E=0;c>E;)this.polygonIndexBuffer.add(_+m[E++],_+m[E++],_+m[E++]);this._triangleElementsNum+=c}},t._area=function(e){for(var t=0,n=e.length-1,r=0;n>r;r++)t+=(e[r].x-e[r+1].x)*(e[r].y+e[r+1].y);return t+=(e[n].x-e[0].x)*(e[n].y+e[0].y),.5*t},t}(o);return a});
},
'esri/core/libs/earcut/earcut':function(){
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

define([],function(){"use strict";function n(n,t,x){x=x||2,B=n.length/x+(t?2*t.length:0),C=!1;var i=t&&t.length,u=i?t[0]*x:n.length,f=e(n,0,u,x,!0),o=[];if(!f)return o;var l,y,a,h,p,s,c;if(i&&(f=v(n,t,f,x)),C)return o;if(n.length>80*x){l=a=n[0],y=h=n[1];for(var Z=x;u>Z;Z+=x)p=n[Z],s=n[Z+1],l>p&&(l=p),y>s&&(y=s),p>a&&(a=p),s>h&&(h=s);c=Math.max(a-l,h-y)}return r(f,o,x,l,y,c),o}function e(n,e,t,r,x){var i,u;if(x===A(n,e,t,r)>0)for(i=e;t>i;i+=r)u=k(i,n[i],n[i+1],u);else for(i=t-r;i>=e;i-=r)u=k(i,n[i],n[i+1],u);return u&&d(u,u.next)&&(j(u),u=u.next),u}function t(n,e){if(!n)return n;e||(e=n);var t,r=n,x=0,i=B*B/2;do{if(t=!1,r.steiner||!d(r,r.next)&&0!==g(r.prev,r,r.next))r=r.next;else{if(j(r),r=e=r.prev,r===r.next)return null;t=!0}if(x++>i)return C=!0,null}while(t||r!==e);return e}function r(n,e,v,o,l,y,h){if(n){!h&&y&&a(n,o,l,y);for(var p,s,c=n;n.prev!==n.next;)if(p=n.prev,s=n.next,y?i(n,o,l,y):x(n))e.push(p.i/v),e.push(n.i/v),e.push(s.i/v),j(n),n=s.next,c=s.next;else{if(C)return;if(n=s,n===c){h?1===h?(n=u(n,e,v),r(n,e,v,o,l,y,2)):2===h&&f(n,e,v,o,l,y):r(t(n),e,v,o,l,y,1);break}}}}function x(n){var e=n.prev,t=n,r=n.next;if(g(e,t,r)>=0)return!1;for(var x=n.next.next,i=0;x!==n.prev;){if(c(e.x,e.y,t.x,t.y,r.x,r.y,x.x,x.y)&&g(x.prev,x,x.next)>=0)return!1;if(x=x.next,i++>B)return C=!0,!1}return!0}function i(n,e,t,r){var x=n.prev,i=n,u=n.next;if(g(x,i,u)>=0)return!1;for(var f=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,v=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,o=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,l=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,y=p(f,v,e,t,r),a=p(o,l,e,t,r),h=n.nextZ;h&&h.z<=a;){if(h!==n.prev&&h!==n.next&&c(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&g(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(h=n.prevZ;h&&h.z>=y;){if(h!==n.prev&&h!==n.next&&c(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&g(h.prev,h,h.next)>=0)return!1;h=h.prevZ}return!0}function u(n,e,t){var r=n;do{var x=r.prev,i=r.next.next;!d(x,i)&&w(x,r,r.next,i)&&b(x,i)&&b(i,x)&&(e.push(x.i/t),e.push(r.i/t),e.push(i.i/t),j(r),j(r.next),r=n=i),r=r.next}while(r!==n);return r}function f(n,e,x,i,u,f){var v=n;do{for(var o=v.next.next;o!==v.prev;){if(v.i!==o.i&&Z(v,o)){var l=m(v,o);return v=t(v,v.next),l=t(l,l.next),r(v,e,x,i,u,f),void r(l,e,x,i,u,f)}o=o.next}v=v.next}while(v!==n)}function v(n,r,x,i){var u,f,v,y,a,h=[];for(u=0,f=r.length;f>u;u++)v=r[u]*i,y=f-1>u?r[u+1]*i:n.length,a=e(n,v,y,i,!1),a===a.next&&(a.steiner=!0),h.push(s(a));for(h.sort(o),u=0;u<h.length;u++){if(!x)return null;l(h[u],x),x=t(x,x.next)}return x}function o(n,e){return n.x-e.x}function l(n,e){if(e=y(n,e)){var r=m(e,n);t(r,r.next)}}function y(n,e){var t,r=e,x=n.x,i=n.y,u=-(1/0);do{if(!r)return null;if(i<=r.y&&i>=r.next.y){var f=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(x>=f&&f>u){if(u=f,f===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==e);if(!t)return null;if(x===u)return t.prev;var v,o=t,l=t.x,y=t.y,a=1/0;for(r=t.next;r!==o;)x>=r.x&&r.x>=l&&c(y>i?x:u,i,l,y,y>i?u:x,i,r.x,r.y)&&(v=Math.abs(i-r.y)/(x-r.x),(a>v||v===a&&r.x>t.x)&&b(r,n)&&(t=r,a=v)),r=r.next;return t}function a(n,e,t,r){var x=n;do null===x.z&&(x.z=p(x.x,x.y,e,t,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next;while(x!==n);x.prevZ.nextZ=null,x.prevZ=null,h(x)}function h(n){var e,t,r,x,i,u,f,v,o=1;do{for(t=n,n=null,i=null,u=0;t;){for(u++,r=t,f=0,e=0;o>e&&(f++,r=r.nextZ,r);e++);for(v=o;f>0||v>0&&r;)0===f?(x=r,r=r.nextZ,v--):0!==v&&r?t.z<=r.z?(x=t,t=t.nextZ,f--):(x=r,r=r.nextZ,v--):(x=t,t=t.nextZ,f--),i?i.nextZ=x:n=x,x.prevZ=i,i=x;t=r}i.nextZ=null,o*=2}while(u>1);return n}function p(n,e,t,r,x){return n=32767*(n-t)/x,e=32767*(e-r)/x,n=16711935&(n|n<<8),n=252645135&(n|n<<4),n=858993459&(n|n<<2),n=1431655765&(n|n<<1),e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),n|e<<1}function s(n){var e=n,t=n;do e.x<t.x&&(t=e),e=e.next;while(e!==n);return t}function c(n,e,t,r,x,i,u,f){return(x-u)*(e-f)-(n-u)*(i-f)>=0&&(n-u)*(r-f)-(t-u)*(e-f)>=0&&(t-u)*(i-f)-(x-u)*(r-f)>=0}function Z(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!z(n,e)&&b(n,e)&&b(e,n)&&M(n,e)}function g(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function d(n,e){return n.x===e.x&&n.y===e.y}function w(n,e,t,r){return d(n,e)&&d(t,r)||d(n,r)&&d(t,e)?!0:g(n,e,t)>0!=g(n,e,r)>0&&g(t,r,n)>0!=g(t,r,e)>0}function z(n,e){var t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&w(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function b(n,e){return g(n.prev,n,n.next)<0?g(n,e,n.next)>=0&&g(n,n.prev,e)>=0:g(n,e,n.prev)<0||g(n,n.next,e)<0}function M(n,e){var t=n,r=!1,x=(n.x+e.x)/2,i=(n.y+e.y)/2;do t.y>i!=t.next.y>i&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==n);return r}function m(n,e){var t=new q(n.i,n.x,n.y),r=new q(e.i,e.x,e.y),x=n.next,i=e.prev;return n.next=e,e.prev=n,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function k(n,e,t,r){var x=new q(n,e,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function j(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function q(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A(n,e,t,r){for(var x=0,i=e,u=t-r;t>i;i+=r)x+=(n[u]-n[i])*(n[i+1]+n[u+1]),u=i;return x}var B,C;return n.deviation=function(n,e,t,r){var x=e&&e.length,i=x?e[0]*t:n.length,u=Math.abs(A(n,0,i,t));if(x)for(var f=0,v=e.length;v>f;f++){var o=e[f]*t,l=v-1>f?e[f+1]*t:n.length;u-=Math.abs(A(n,o,l,t))}var y=0;for(f=0;f<r.length;f+=3){var a=r[f]*t,h=r[f+1]*t,p=r[f+2]*t;y+=Math.abs((n[a]-n[p])*(n[h+1]-n[a+1])-(n[a]-n[h])*(n[p+1]-n[a+1]))}return 0===u&&0===y?0:Math.abs((y-u)/u)},n.flatten=function(n){for(var e=n[0][0].length,t={vertices:[],holes:[],dimensions:e},r=0,x=0;x<n.length;x++){for(var i=0;i<n[x].length;i++)for(var u=0;e>u;u++)t.vertices.push(n[x][i][u]);x>0&&(r+=n[x-1].length,t.holes.push(r))}return t},n});
},
'esri/views/vectorTiles/LineBucket':function(){
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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./Bucket","./LineTess","./style/StyleLayer"],function(e,t,r,i,o,s,n){var a=.05,l=.1,c=.5,u=2.3,d=20,f=0,h=function(e){function t(t,r,i,o){var n=e.call(this,t,r)||this;return n.extrudeVectorsDoubleBuffer=[s.allocExtrudeVectors(),s.allocExtrudeVectors()],n.firstExtrudeVectors=s.allocExtrudeVectors(),n.recycledTriangleBridge=s.allocTriangles(d),n.recycledTrianglePie=s.allocTriangles(d),n.lineVertexBuffer=i,n.lineIndexBuffer=o,n}return r(t,e),Object.defineProperty(t.prototype,"triangleIndexStart",{get:function(){return this.triangleElementsStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"triangleIndexCount",{get:function(){return this.triangleElementsCount},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"connectorStart",{get:function(){return 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"connectorCount",{get:function(){return 0},enumerable:!0,configurable:!0}),t.prototype.assignBufferInfo=function(e){var t=e;t.triangleElementsStart=this.triangleElementsStart,t.triangleElementsCount=this.triangleElementsCount},t.prototype.processFeatures=function(e,t){this.triangleElementsStart=this.lineIndexBuffer.index,this.triangleElementsCount=0,e&&e.setExtent(this.layerExtent);for(var r=new n.LineLayout(this.layer,this.zoom),i=0,o=this._features;i<o.length;i++){var s=o[i],a=s.getGeometry(e);this._processFeature(r,a)}},t.prototype._processFeature=function(e,t){if(t){var r,i=t.length;for(r=0;i>r;r++)this._processGeometry(t[r],e)}},t.prototype._processGeometry=function(e,t){if(!(e.length<2)){var r=.001,i=e[0],o=e[e.length-1],n=o.x-i.x,d=o.y-i.y,h=r*r>n*n+d*d;if(!(e.length<2)){for(var p=e[0],m=1;m<e.length;)n=e[m].x-p.x,d=e[m].y-p.y,r*r>n*n+d*d?e.splice(m,1):(p=e[m],++m);if(!(e.length<2)){this.vertices=e,this.verticesLen=e.length,this.isClosed=h,this.cap=t.cap,this.join=t.join,this.almostParallelRads=a,this.veryShallowRads=l,this.miterSafeRads=s.MITER_SAFE_RADS,this.miterLimitMag=Math.min(t.miterLimit,s.SYSTEM_MAG_LIMIT),this.roundLimitRads=Math.min(t.roundLimit,c),this.newRoundJoinsSafeRads=u;var x,y=this.lineIndexBuffer.index,v=f,g=void 0,E=this.verticesLen;for(x=0;E>x;++x){var b=e[x],P=g===this.extrudeVectorsDoubleBuffer[x%2]?this.extrudeVectorsDoubleBuffer[(x+1)%2]:this.extrudeVectorsDoubleBuffer[x%2];if(E>x||!h?(this._computeExtrudeVectors(P,x),this._writeGPUVertices(b.x,b.y,v,P),!P.capCenter||h&&x===E-1||this._writeGPUPieElements(P),h&&0===x&&s.copyExtrudeVectors(this.firstExtrudeVectors,P)):s.copyExtrudeVectors(P,this.firstExtrudeVectors),g&&this._writeGPUBridgeElements(g,P),E-1>x){var V=e[x+1],S=s.length([V.x-b.x,V.y-b.y]);v+=S}g=P}this.triangleElementsCount+=3*(this.lineIndexBuffer.index-y)}}}},t.prototype._computeExtrudeVectors=function(e,t){var r=this.vertices,i=this.verticesLen,o=this.isClosed,n=r[t],a=[void 0,void 0],l=[void 0,void 0];if(t>0&&i-1>t){var c=r[(t+i-1)%i],u=r[(t+1)%i];s.normalize(a,[n.x-c.x,n.y-c.y]),s.normalize(l,[u.x-n.x,u.y-n.y])}else if(0===t){var u=r[(t+1)%i];if(s.normalize(l,[u.x-n.x,u.y-n.y]),o){var d=r[i-2];s.normalize(a,[n.x-d.x,n.y-d.y])}else a=l}else{if(t!==i-1)return void console.error("Vertex index 'i' out of range.");var c=r[(t+i-1)%i];if(s.normalize(a,[n.x-c.x,n.y-c.y]),o){var f=r[1];s.normalize(l,[f.x-n.x,f.y-n.y])}else l=a}o||0!==t?o||t!==i-1?this._computeJoinExtrudeVectors(e,a,l):this._computeCapExtrudeVectors(e,a,l,s.CapPosition.END):this._computeCapExtrudeVectors(e,a,l,s.CapPosition.START)},t.prototype._computeCapExtrudeVectors=function(e,t,r,i){0===this.cap?s.buttCap(e,t,r):1===this.cap?s.roundCap(e,t,r,i,s.getNumberOfSlices(Math.PI),i===s.CapPosition.START?-1:1):2===this.cap?s.squareCap(e,t,r,i):(s.buttCap(e,t,r),console.error("Unknown cap type!"))},t.prototype._computeJoinExtrudeVectors=function(e,t,r){var i=s.getRads(t,r);if(i>Math.PI-this.almostParallelRads)s.rectJoin(e,t,r);else if(2===this.join||i<this.veryShallowRads)i<this.almostParallelRads?s.fastMiterJoin(e,t,r):i<this.miterSafeRads?s.miterJoin(e,t,r):s.bevelJoin(e,t,r,this.miterLimitMag);else if(0===this.join)s.bevelJoin(e,t,r,1);else if(1===this.join){var o=s.getNumberOfSlices(i),n=i<this.newRoundJoinsSafeRads;n?2>o||i<this.roundLimitRads?s.bevelJoin(e,t,r,1):s.roundJoin(e,t,r,o):s.unitRoundJoin(e,t,r,o)}},t.prototype._writeGPUVertices=function(e,t,r,i){var o;for(o=0;o<i.vectors.count;++o){var s=i.vectors.items[o].vector[0],n=i.vectors.items[o].vector[1],a=i.vectors.items[o].texCoords[0],l=i.vectors.items[o].texCoords[1],c=this.lineVertexBuffer.add(e,t,s,n,a,l,r);i.vectors.items[o].base=c}},t.prototype._writeGPUBridgeElements=function(e,t){s.bridge(this.recycledTriangleBridge,e,t);var r;for(r=0;r<this.recycledTriangleBridge.count;++r){var i=this.recycledTriangleBridge.items[r];this.lineIndexBuffer.add(i.v1.base,i.v2.base,i.v3.base)}},t.prototype._writeGPUPieElements=function(e){s.pie(this.recycledTrianglePie,e);var t;for(t=0;t<this.recycledTrianglePie.count;++t){var r=this.recycledTrianglePie.items[t];this.lineIndexBuffer.add(r.v1.base,r.v2.base,r.v3.base)}},t}(o);return h});
},
'esri/views/vectorTiles/LineTess':function(){
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

define(["require","exports"],function(t,o){function e(t){var o,e={items:new Array,count:0};for(o=0;t>o;++o)e.items.push({v1:{vector:[void 0,void 0],texCoords:[void 0,void 0]},v2:{vector:[void 0,void 0],texCoords:[void 0,void 0]},v3:{vector:[void 0,void 0],texCoords:[void 0,void 0]}});return e}function r(t){var o,e={items:new Array,count:0};for(o=0;t>o;++o)e.items.push(void 0);return e}function s(t){var o,e={items:new Array,count:0};for(o=0;t>o;++o)e.items.push({vector:[void 0,void 0],texCoords:[void 0,void 0]});return e}function v(t){var o,e={items:new Array,count:0};for(o=0;t>o;++o)e.items.push([void 0,void 0]);return e}function c(){var t=s(30),o={};o[_.ENTRY]=r(20),o[_.EXIT]=r(20),o[_.CAP]=r(20);var e={vectors:t,lists:o};return e}function i(t,o){var e;for(e=0;e<o.vectors.count;++e)t.vectors.items[e].vector[0]=o.vectors.items[e].vector[0],t.vectors.items[e].vector[1]=o.vectors.items[e].vector[1],t.vectors.items[e].texCoords[0]=o.vectors.items[e].texCoords[0],t.vectors.items[e].texCoords[1]=o.vectors.items[e].texCoords[1],t.vectors.items[e].base=o.vectors.items[e].base;t.vectors.count=o.vectors.count,t.capCenter=o.capCenter}function n(t,o){return t[0]*o[0]+t[1]*o[1]}function a(t){return Math.sqrt(n(t,t))}function d(t,o){var e=a(o);return t[0]=o[0]/e,t[1]=o[1]/e,t}function u(t,o){return t[0]=-o[1],t[1]=o[0],t}function m(t,o){var e=t[0]*o[1]-t[1]*o[0];return e}function C(t,o){return t[0]=-o[0],t[1]=-o[1],t}function x(t,o,e){return t[0]=o[0]*e,t[1]=o[1]*e,t}function l(t,o,e){return t[0]=o[0]+e[0],t[1]=o[1]+e[1],t}function f(t){return Math.round(t*L)}function T(t,o){var e=n(t,o);return e>.999?0:-.999>e?Math.PI:Math.acos(e)}function E(t,o,e,r,s){if(0===r)return void(t.count=0);var v,c=a(o),i=x(D[0],o,1/c),n=x(D[1],e,1/c),d=T(i,n),u=(s?-1:1)*d/r,m=Math.cos(u),C=Math.sin(u),l=o[0],f=o[1];for(v=0;r-1>v;++v){var E=l,M=f;l=m*E-C*M,f=C*E+m*M,t.items[v][0]=l,t.items[v][1]=f}t.count=r-1}function M(t){var o,e=t.count,r=Math.floor(e/2);for(o=0;r>o;++o){var s=t.items[o];t.items[o]=t.items[e-o-1],t.items[e-o-1]=s}}function A(t,o,e){var r,s,v,c,i=o.vectors,n=o.lists[_.EXIT],a=e.vectors,d=e.lists[_.ENTRY];if(n.count===d.count+1)r=n.items,s=i.items,v=d.items,c=a.items;else if(d.count===n.count+1)r=d.items,s=a.items,v=n.items,c=i.items;else{if(n.count!==d.count)return console.error("Cannot bridge "+n.count+" to "+d.count+"."),void(t.count=0);r=d.items,s=a.items,v=n.items,c=i.items}var u=n.count+d.count-2;t.count=u,j[0]=r,j[1]=v,z[0]=s,z[1]=c;var m;for(m=0;u>m;++m){var C=t.items[m],x=(m+0)%2,l=Math.floor((m+0)/2),f=z[x][j[x][l]];C.v1.vector[0]=f.vector[0],C.v1.vector[1]=f.vector[1],C.v1.texCoords[0]=f.texCoords[0],C.v1.texCoords[1]=f.texCoords[1],C.v1.base=f.base;var T=(m+1)%2,E=Math.floor((m+1)/2),M=z[T][j[T][E]];C.v2.vector[0]=M.vector[0],C.v2.vector[1]=M.vector[1],C.v2.texCoords[0]=M.texCoords[0],C.v2.texCoords[1]=M.texCoords[1],C.v2.base=M.base;var A=(m+2)%2,h=Math.floor((m+2)/2),p=z[A][j[A][h]];C.v3.vector[0]=p.vector[0],C.v3.vector[1]=p.vector[1],C.v3.texCoords[0]=p.texCoords[0],C.v3.texCoords[1]=p.texCoords[1],C.v3.base=p.base}}function h(t,o){if(0===o.lists[_.CAP].count)return void(t.count=0);if(1===o.lists[_.CAP].count)return console.error("A single vector is not enough to define a pie."),void(t.count=0);t.count=o.lists[_.CAP].count-1;var e;for(e=0;e<t.count;++e){var r=t.items[e],s=o.lists[_.CAP].items[e],v=o.vectors.items[s];r.v1.vector[0]=v.vector[0],r.v1.vector[1]=v.vector[1],r.v1.texCoords[0]=v.texCoords[0],r.v1.texCoords[1]=v.texCoords[1],r.v1.base=v.base;var c=o.lists[_.CAP].items[e+1],i=o.vectors.items[c];r.v2.vector[0]=i.vector[0],r.v2.vector[1]=i.vector[1],r.v2.texCoords[0]=i.texCoords[0],r.v2.texCoords[1]=i.texCoords[1],r.v2.base=i.base;var n=o.capCenter,a=o.vectors.items[n];r.v3.vector[0]=a.vector[0],r.v3.vector[1]=a.vector[1],r.v3.texCoords[0]=a.texCoords[0],r.v3.texCoords[1]=a.texCoords[1],r.v3.base=a.base}}function p(t,o,e){P(t,o,e)}function I(t,o,e,r,s,v){void 0===v&&(v=0),P(t,o,e);var c=r===g.START?0:1,i=r===g.START?1:0;t.capCenter=t.vectors.count;var n=t.vectors.items[t.capCenter];n.vector[0]=0,n.vector[1]=0,n.texCoords[0]=w,n.texCoords[1]=w,++t.vectors.count,E(O,t.vectors.items[c].vector,t.vectors.items[i].vector,s,!1);var a=t.vectors.count,d=t.lists[_.CAP];d.items[0]=c;var u,m=t.vectors.items[c].texCoords[1],C=t.vectors.items[i].texCoords[1];for(u=0;u<O.count;++u){var x=v*(1-Math.abs(O.count/2-u)/(O.count/2)),l=m+u/(O.count-1)*(C-m),f=O.items[u],T=t.vectors.items[a+u];T.vector[0]=f[0],T.vector[1]=f[1],T.texCoords[0]=x,T.texCoords[1]=l,d.items[u+1]=a+u}d.items[O.count+1]=i,d.count=O.count+2,t.vectors.count=a+O.count}function R(t,o,e,r){P(t,o,e);var s=r===g.START?0:1,v=r===g.START?1:0,c=D[0],i=D[1],n=D[2],a=D[3],d=D[4],u=t.vectors.items[s].vector;c[0]=F*u[0]-k*u[1],c[1]=k*u[0]+F*u[1],x(a,c,B),i[0]=F*c[0]-k*c[1],i[1]=k*c[0]+F*c[1],n[0]=F*i[0]-k*i[1],n[1]=k*i[0]+F*i[1],x(d,n,B);var m=t.vectors.items[s];m.vector[0]=a[0],m.vector[1]=a[1];var C=t.vectors.items[v];C.vector[0]=d[0],C.vector[1]=d[1]}function P(t,o,e){var r=u(D[0],e),s=r,v=C(D[1],r),c=t.vectors.items[0];c.vector[0]=s[0],c.vector[1]=s[1],c.texCoords[0]=w,c.texCoords[1]=y;var i=t.vectors.items[1];i.vector[0]=v[0],i.vector[1]=v[1],i.texCoords[0]=w,i.texCoords[1]=J,t.vectors.count=2;var n=t.lists[_.ENTRY];n.items[0]=0,n.items[1]=1,n.count=2;var a=t.lists[_.EXIT];a.items[0]=0,a.items[1]=1,a.count=2,t.lists[_.CAP].count=0,t.capCenter=void 0}function b(t,o,e){var r=u(D[0],o),s=u(D[1],e),v=D[2];v[0]=r[0]+s[0],v[1]=r[1]+s[1];var c=d(D[3],v),i=n(c,r);c=x(D[4],c,1/i);var a=C(D[5],c),m=t.vectors.items[0];m.vector[0]=c[0],m.vector[1]=c[1],m.texCoords[0]=w,m.texCoords[1]=y;var l=t.vectors.items[1];l.vector[0]=a[0],l.vector[1]=a[1],l.texCoords[0]=w,l.texCoords[1]=J,t.vectors.count=2;var f=t.lists[_.ENTRY];f.items[0]=0,f.items[1]=1,f.count=2;var T=t.lists[_.EXIT];T.items[0]=0,T.items[1]=1,T.count=2,t.lists[_.CAP].count=0,t.capCenter=void 0}function Y(t,o,e,r){var s=r*r,v=m(o,e),c=v>0?[y,J]:[J,y],i=c[0],a=c[1],f=v>0?C(D[0],u(D[1],o)):u(D[2],o),T=v>0?C(D[3],u(D[4],e)):u(D[5],e),E=D[6];E[0]=f[0]+T[0],E[1]=f[1]+T[1];var A=d(D[7],E),h=C(D[8],A),p=n(A,f),I=m(A,f),R=Math.abs(I/p),P=1+R*R,b=q>P?[R,!1]:[Math.sqrt(q-1),!0],Y=b[0],N=b[1],S=s>P?[R,!1]:[Math.sqrt(s-1),!0],X=S[0],g=S[1];if(g&&N){var G=t.vectors.items[0];l(G.vector,C(D[9],f),x(D[10],C(D[11],o),Y)),G.texCoords[0]=w,G.texCoords[1]=i;var L=t.vectors.items[1];l(L.vector,C(D[12],T),x(D[13],e,Y)),L.texCoords[0]=w,L.texCoords[1]=i;var V=t.vectors.items[2];V.vector[0]=0,V.vector[1]=0,V.texCoords[0]=w,V.texCoords[1]=w;var O=t.vectors.items[3];l(O.vector,f,x(D[14],o,X)),O.texCoords[0]=w,O.texCoords[1]=a;var j=t.vectors.items[4];l(j.vector,T,x(D[15],C(D[16],e),X)),j.texCoords[0]=w,j.texCoords[1]=a,t.vectors.count=5;var z=t.lists[_.ENTRY];z.items[0]=0,z.items[1]=2,z.items[2]=3,z.count=3;var F=t.lists[_.EXIT];F.items[0]=1,F.items[1]=2,F.items[2]=4,F.count=3;var k=t.lists[_.CAP];k.items[0]=3,k.items[1]=4,k.count=2,t.capCenter=2}else if(!g&&N){var G=t.vectors.items[0];l(G.vector,C(D[9],f),x(D[10],C(D[11],o),Y)),G.texCoords[0]=w,G.texCoords[1]=i;var L=t.vectors.items[1];l(L.vector,C(D[12],T),x(D[13],e,Y)),L.texCoords[0]=w,L.texCoords[1]=i;var V=t.vectors.items[2];V.vector[0]=0,V.vector[1]=0,V.texCoords[0]=w,V.texCoords[1]=w;var O=t.vectors.items[3];x(O.vector,A,1/p),O.texCoords[0]=w,O.texCoords[1]=a,t.vectors.count=4;var z=t.lists[_.ENTRY];z.items[0]=0,z.items[1]=2,z.items[2]=3,z.count=3;var F=t.lists[_.EXIT];F.items[0]=1,F.items[1]=2,F.items[2]=3,F.count=3,t.lists[_.CAP].count=0,t.capCenter=void 0}else if(g&&!N){var G=t.vectors.items[0];x(G.vector,h,1/p),G.texCoords[0]=w,G.texCoords[1]=i;var L=t.vectors.items[1];L.vector[0]=0,L.vector[1]=0,L.texCoords[0]=w,L.texCoords[1]=w;var V=t.vectors.items[2];l(V.vector,f,x(D[9],o,X)),V.texCoords[0]=w,V.texCoords[1]=a;var O=t.vectors.items[3];l(O.vector,T,x(D[10],C(D[11],e),X)),O.texCoords[0]=w,O.texCoords[1]=a,t.vectors.count=4;var z=t.lists[_.ENTRY];z.items[0]=0,z.items[1]=1,z.items[2]=2,z.count=3;var F=t.lists[_.EXIT];F.items[0]=0,F.items[1]=1,F.items[2]=3,F.count=3;var k=t.lists[_.CAP];k.items[0]=2,k.items[1]=3,k.count=2,t.capCenter=1}else if(!g&&!N){var G=t.vectors.items[0];x(G.vector,h,1/p),G.texCoords[0]=w,G.texCoords[1]=i;var L=t.vectors.items[1];x(L.vector,A,1/p),L.texCoords[0]=w,L.texCoords[1]=a,t.vectors.count=2;var z=t.lists[_.ENTRY];z.items[0]=0,z.items[1]=1,z.count=2;var F=t.lists[_.EXIT];F.items[0]=0,F.items[1]=1,F.count=2,t.lists[_.CAP].count=0,t.capCenter=void 0}0>v&&(M(t.lists[_.ENTRY]),M(t.lists[_.EXIT]))}function N(t,o,e,r){var s=m(o,e),v=s>0?[y,J]:[J,y],c=v[0],i=v[1],a=s>0?C(D[0],u(D[1],o)):u(D[2],o),f=s>0?C(D[3],u(D[4],e)):u(D[5],e),T=D[6];T[0]=a[0]+f[0],T[1]=a[1]+f[1];var A=d(D[7],T),h=C(D[8],A),p=n(A,a),I=m(A,a),R=Math.abs(I/p),P=1+R*R,b=q>P?[R,!1]:[Math.sqrt(q-1),!0],Y=b[0],N=b[1];if(N){var S=t.vectors.items[0];S.vector[0]=a[0],S.vector[1]=a[1],S.texCoords[0]=w,S.texCoords[1]=i;var X=t.vectors.items[1];X.vector[0]=f[0],X.vector[1]=f[1],X.texCoords[0]=w,X.texCoords[1]=i;var g=t.vectors.items[2];l(g.vector,C(D[9],a),x(D[10],C(D[11],o),Y)),g.texCoords[0]=w,g.texCoords[1]=c;var G=t.vectors.items[3];l(G.vector,C(D[12],f),x(D[13],e,Y)),G.texCoords[0]=w,G.texCoords[1]=c;var L=t.vectors.items[4];L.vector[0]=0,L.vector[1]=0,L.texCoords[0]=w,L.texCoords[1]=w,t.vectors.count=5;var V=t.lists[_.ENTRY];V.items[0]=2,V.items[1]=4,V.items[2]=0,V.count=3;var j=t.lists[_.EXIT];j.items[0]=3,j.items[1]=4,j.items[2]=1,j.count=3,t.capCenter=4}else{var S=t.vectors.items[0];S.vector[0]=a[0],S.vector[1]=a[1],S.texCoords[0]=w,S.texCoords[1]=i;var X=t.vectors.items[1];X.vector[0]=f[0],X.vector[1]=f[1],X.texCoords[0]=w,X.texCoords[1]=i;var g=t.vectors.items[2];x(g.vector,h,1/p),g.texCoords[0]=w,g.texCoords[1]=c;var G=t.vectors.items[3];G.vector[0]=0,G.vector[1]=0,G.texCoords[0]=w,G.texCoords[1]=w,t.vectors.count=4;var V=t.lists[_.ENTRY];V.items[0]=2,V.items[1]=3,V.items[2]=0,V.count=3;var j=t.lists[_.EXIT];j.items[0]=2,j.items[1]=3,j.items[2]=1,j.count=3,t.capCenter=3}E(O,a,f,r,0>s);var z=t.vectors.count,F=t.lists[_.CAP];F.items[0]=0;var k;for(k=0;k<O.count;++k){var B=O.items[k],H=t.vectors.items[z+k];H.vector[0]=B[0],H.vector[1]=B[1],H.texCoords[0]=w,H.texCoords[1]=i,F.items[k+1]=z+k}F.items[O.count+1]=1,F.count=O.count+2,t.vectors.count=z+O.count,0>s&&(M(t.lists[_.ENTRY]),M(t.lists[_.EXIT]))}function S(t,o,e,r){var s=m(o,e),v=s>0?[y,J]:[J,y],c=v[0],i=v[1],n=s>0?C(D[0],u(D[1],o)):u(D[2],o),a=s>0?C(D[3],u(D[4],e)):u(D[5],e),d=t.vectors.items[0];d.vector[0]=n[0],d.vector[1]=n[1],d.texCoords[0]=w,d.texCoords[1]=i;var x=t.vectors.items[1];x.vector[0]=a[0],x.vector[1]=a[1],x.texCoords[0]=w,x.texCoords[1]=i;var l=t.vectors.items[2];C(l.vector,n),l.texCoords[0]=w,l.texCoords[1]=c;var f=t.vectors.items[3];C(f.vector,a),f.texCoords[0]=w,f.texCoords[1]=c;var T=t.vectors.items[4];T.vector[0]=0,T.vector[1]=0,T.texCoords[0]=w,T.texCoords[1]=w,t.vectors.count=5;var A=t.lists[_.ENTRY];A.items[0]=2,A.items[1]=0,A.count=2;var h=t.lists[_.EXIT];h.items[0]=3,h.items[1]=1,h.count=2,t.capCenter=4,E(O,n,a,r,0>s);var p=t.vectors.count,I=t.lists[_.CAP];I.items[0]=0;var R;for(R=0;R<O.count;++R){var P=O.items[R],b=t.vectors.items[p+R];b.vector[0]=P[0],b.vector[1]=P[1],b.texCoords[0]=w,b.texCoords[1]=i,I.items[R+1]=p+R}I.items[O.count+1]=1,I.count=O.count+2,t.vectors.count=p+O.count,0>s&&(M(t.lists[_.ENTRY]),M(t.lists[_.EXIT]))}function X(t,o,e){var r=u(D[0],o),s=u(D[1],e),v=t.vectors.items[0];v.vector[0]=r[0],v.vector[1]=r[1],v.texCoords[0]=w,v.texCoords[1]=y;var c=t.vectors.items[1];c.vector[0]=s[0],c.vector[1]=s[1],c.texCoords[0]=w,c.texCoords[1]=y;var i=t.vectors.items[2];C(i.vector,r),i.texCoords[0]=w,i.texCoords[1]=J;var n=t.vectors.items[3];C(n.vector,s),n.texCoords[0]=w,n.texCoords[1]=J,t.vectors.count=4;var a=t.lists[_.ENTRY];a.items[0]=0,a.items[1]=2,a.count=2;var d=t.lists[_.EXIT];d.items[0]=1,d.items[1]=3,d.count=2,t.capCenter=void 0}Object.defineProperty(o,"__esModule",{value:!0});var _;!function(t){t[t.ENTRY=1]="ENTRY",t[t.EXIT=2]="EXIT",t[t.CAP=3]="CAP"}(_=o.VectorRole||(o.VectorRole={}));var g;!function(t){t[t.START=1]="START",t[t.END=2]="END"}(g=o.CapPosition||(o.CapPosition={})),o.SYSTEM_MAG_LIMIT=3.8,o.MITER_SAFE_RADS=2*Math.acos(1/o.SYSTEM_MAG_LIMIT);var q=o.SYSTEM_MAG_LIMIT*o.SYSTEM_MAG_LIMIT,y=-1,J=1,w=0,G=16,L=G/(2*Math.PI);o.allocTriangles=e,o.allocExtrudeVectors=c,o.copyExtrudeVectors=i;var V,D=[];for(V=0;32>V;++V)D.push([void 0,void 0]);var O=v(G);o.length=a,o.normalize=d,o.getNumberOfSlices=f,o.getRads=T;var j=[void 0,void 0],z=[void 0,void 0];o.bridge=A,o.pie=h,o.buttCap=p,o.roundCap=I;var F=Math.cos(Math.PI/4),k=Math.sin(Math.PI/4),B=Math.sqrt(2);o.squareCap=R,o.fastMiterJoin=P,o.miterJoin=b,o.bevelJoin=Y,o.roundJoin=N,o.unitRoundJoin=S,o.rectJoin=X});
},
'esri/views/vectorTiles/style/StyleLayer':function(){
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

define(["require","exports","./StyleDefinition","./StyleProperty","./Filter"],function(t,i,e,o,n){Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function t(t,i,o){switch(this.type=t,this.id=i.id,this.source=i.source,this.sourceLayer=i["source-layer"],this.minzoom=i.minzoom,this.maxzoom=i.maxzoom,this.filter=i.filter,this.layout=i.layout,this.paint=i.paint,this.z=o,t){case 0:this._layoutDefinition=e.StyleDefinition.backgroundLayoutDefinition,this._paintDefinition=e.StyleDefinition.backgroundPaintDefinition;break;case 1:this._layoutDefinition=e.StyleDefinition.fillLayoutDefinition,this._paintDefinition=e.StyleDefinition.fillPaintDefinition;break;case 2:this._layoutDefinition=e.StyleDefinition.lineLayoutDefinition,this._paintDefinition=e.StyleDefinition.linePaintDefinition;break;case 3:this._layoutDefinition=e.StyleDefinition.symbolLayoutDefinition,this._paintDefinition=e.StyleDefinition.symbolPaintDefinition}this._layoutProperties=this._parseLayout(this.layout),this._paintProperties=this._parsePaint(this.paint)}return t.prototype.getFeatureFilter=function(){return void 0!==this._featureFilter?this._featureFilter:this._featureFilter=n.createFilter(this.filter)},t.prototype.hasLayoutProperty=function(t){var i=this._layoutProperties;if(i){var e=i[t];if(e)return!0}return!1},t.prototype.hasPaintProperty=function(t){var i=this._paintProperties;return i?void 0!==i[t]:!1},t.prototype.getLayoutValue=function(t,i){var e,o=this._layoutProperties;if(o){var n=o[t];n&&(e=n.getValue(i))}var a=this._layoutDefinition[t];return void 0===e&&(e=a["default"]),"enum"===a.type&&(e=a.values.indexOf(e)),e},t.prototype.getPaintValue=function(t,i){var e,o=this._paintProperties;if(o){var n=o[t];n&&(e=n.getValue(i))}var a=this._paintDefinition[t];return void 0===e&&(e=a["default"]),"enum"===a.type&&(e=a.values.indexOf(e)),e},t.prototype._parseLayout=function(t){var i={};for(var e in t)i[e]=new o(this._layoutDefinition[e],t[e]);return i},t.prototype._parsePaint=function(t){var i={};for(var e in t)i[e]=new o(this._paintDefinition[e],t[e]);return i},t}();i.StyleLayer=a;var r=function(){function t(t,i){this.cap=t.getLayoutValue("line-cap",i),this.join=t.getLayoutValue("line-join",i),this.miterLimit=t.getLayoutValue("line-miter-limit",i),this.roundLimit=t.getLayoutValue("line-round-limit",i)}return t}();i.LineLayout=r;var u=function(){function t(t,i,e){this.allowOverlap=t.getLayoutValue("icon-allow-overlap",i),this.ignorePlacement=t.getLayoutValue("icon-ignore-placement",i),this.optional=t.getLayoutValue("icon-optional",i),this.rotationAlignment=t.getLayoutValue("icon-rotation-alignment",i),this.size=t.getLayoutValue("icon-size",i),this.rotate=t.getLayoutValue("icon-rotate",i),this.padding=t.getLayoutValue("icon-padding",i),this.keepUpright=t.getLayoutValue("icon-keep-upright",i),this.offset=t.getLayoutValue("icon-offset",i),e&&1===this.rotationAlignment&&!t.hasLayoutProperty("icon-rotation-alignment")&&(this.rotationAlignment=0)}return t}();i.IconLayout=u;var l=function(){function t(t,i,e){this.allowOverlap=t.getLayoutValue("text-allow-overlap",i),this.ignorePlacement=t.getLayoutValue("text-ignore-placement",i),this.optional=t.getLayoutValue("text-optional",i),this.rotationAlignment=t.getLayoutValue("text-rotation-alignment",i),this.font=t.getLayoutValue("text-font",i),this.maxWidth=t.getLayoutValue("text-max-width",i),this.lineHeight=t.getLayoutValue("text-line-height",i),this.letterSpacing=t.getLayoutValue("text-letter-spacing",i),this.justify=t.getLayoutValue("text-justify",i),this.anchor=t.getLayoutValue("text-anchor",i),this.maxAngle=t.getLayoutValue("text-max-angle",i),this.size=t.getLayoutValue("text-size",i),this.rotate=t.getLayoutValue("text-rotate",i),this.padding=t.getLayoutValue("text-padding",i),this.keepUpright=t.getLayoutValue("text-keep-upright",i),this.transform=t.getLayoutValue("text-transform",i),this.offset=t.getLayoutValue("text-offset",i),e&&1===this.rotationAlignment&&!t.hasLayoutProperty("text-rotation-alignment")&&(this.rotationAlignment=0)}return t}();i.TextLayout=l});
},
'esri/views/vectorTiles/style/StyleDefinition':function(){
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

define(["require","exports"],function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e}();a.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],"default":"visible"}},a.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],"default":"visible"}},a.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],"default":"visible"},"line-cap":{type:"enum",values:["butt","round","square"],"default":"butt"},"line-join":{type:"enum",values:["bevel","round","miter"],"default":"miter"},"line-miter-limit":{type:"number","default":2},"line-round-limit":{type:"number","default":1.05}},a.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],"default":"visible"},"symbol-placement":{type:"enum",values:["point","line"],"default":"point"},"symbol-spacing":{type:"number",minimum:1,"default":250},"symbol-avoid-edges":{type:"boolean","default":!1},"icon-image":{type:"string"},"icon-allow-overlap":{type:"boolean","default":!1},"icon-ignore-placement":{type:"boolean","default":!1},"icon-optional":{type:"boolean","default":!1},"icon-rotation-alignment":{type:"enum",values:["map","viewport"],"default":"viewport"},"icon-size":{type:"number",minimum:0,"default":1},"icon-rotate":{type:"number","default":0},"icon-padding":{type:"number",minimum:0,"default":2},"icon-keep-upright":{type:"boolean","default":!0},"icon-offset":{type:"array",value:"number",length:2,"default":[0,0]},"text-field":{type:"string"},"text-rotation-alignment":{type:"enum",values:["map","viewport"],"default":"viewport"},"text-font":{type:"array",value:"string","default":["Open Sans Regular","Arial Unicode MS Regular"]},"text-size":{type:"number",minimum:0,"default":16},"text-max-width":{type:"number",minimum:0,"default":10},"text-line-height":{type:"number","default":1.2},"text-letter-spacing":{type:"number","default":0},"text-justify":{type:"enum",values:["left","center","right"],"default":"center"},"text-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],"default":"center"},"text-max-angle":{type:"number",minimum:0,"default":45},"text-rotate":{type:"number","default":0},"text-padding":{type:"number",minimum:0,"default":2},"text-keep-upright":{type:"boolean","default":!0},"text-transform":{type:"enum",values:["none","uppercase","lowercase"],"default":"none"},"text-offset":{type:"array",value:"number",length:2,"default":[0,0]},"text-allow-overlap":{type:"boolean","default":!1},"text-ignore-placement":{type:"boolean","default":!1},"text-optional":{type:"boolean","default":!1}},a.backgroundPaintDefinition={"background-opacity":{type:"number",minimum:0,maximum:1,"default":1},"background-color":{type:"color","default":[0,0,0,1]},"background-pattern":{type:"string"}},a.fillPaintDefinition={"fill-opacity":{type:"number",minimum:0,maximum:1,"default":1},"fill-antialias":{type:"boolean","default":!0},"fill-color":{type:"color","default":[0,0,0,1]},"fill-outline-color":{type:"color","default":[0,0,0,0]},"fill-translate":{type:"array",value:"number",length:2,"default":[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],"default":"map"},"fill-pattern":{type:"string"}},a.linePaintDefinition={"line-opacity":{type:"number",minimum:0,maximum:1,"default":1},"line-color":{type:"color","default":[0,0,0,1]},"line-translate":{type:"array",value:"number",length:2,"default":[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],"default":"map"},"line-width":{type:"number",minimum:0,"default":1},"line-gap-width":{type:"number",minimum:0,"default":0},"line-offset":{type:"number","default":0},"line-blur":{type:"number",minimum:0,"default":0},"line-dasharray":{type:"array",value:"number","default":[]},"line-pattern":{type:"string"}},a.symbolPaintDefinition={"icon-opacity":{type:"number",minimum:0,maximum:1,"default":1},"icon-color":{type:"color","default":[0,0,0,1]},"icon-halo-color":{type:"color","default":[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,"default":0},"icon-halo-blur":{type:"number",minimum:0,"default":0},"icon-translate":{type:"array",value:"number",length:2,"default":[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],"default":"map"},"text-opacity":{type:"number",minimum:0,maximum:1,"default":1},"text-color":{type:"color","default":[0,0,0,1]},"text-halo-color":{type:"color","default":[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,"default":0},"text-halo-blur":{type:"number",minimum:0,"default":0},"text-translate":{type:"array",value:"number",length:2,"default":[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],"default":"map"}},a.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,"default":1},"raster-hue-rotate":{type:"number","default":0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,"default":0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,"default":1},"raster-saturation":{type:"number",minimum:-1,maximum:1,"default":0},"raster-contrast":{type:"number",minimum:-1,maximum:1,"default":0},"raster-fade-duration":{type:"number",minimum:0,"default":300}},a.circlePaintDefinition={"circle-opacity":{type:"number",minimum:0,maximum:1,"default":1},"circle-radius":{type:"number",minimum:0,"default":5},"circle-color":{type:"color","default":[0,0,0,1]},"circle-blur":{type:"number",minimum:0,"default":0},"circle-translate":{type:"array",value:"number",length:2,"default":[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],"default":"map"}},t.StyleDefinition=a});
},
'esri/views/vectorTiles/style/StyleProperty':function(){
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

define(["require","exports","../../../Color","../GeometryUtils"],function(r,e,t,n){var o=function(){function r(e,t){var n;switch(e.type){case"number":n=!0;break;case"color":n=!0,t=r._parseColor(t);break;case"array":n="number"===e.value;break;default:n=!1}n?this.getValue=this._interpolate(t):this.getValue=this._piecewise(t)}return r.prototype._piecewise=function(r){var e=r.stops;return e?function(r){var t=e.length;if(0!==t){for(var n=0,o=0;t>o&&e[o][0]<=r;o++)n=o;return e[n][1]}}:function(){return r}},r.prototype._interpolate=function(r){var e=r.stops;if(e){var t=r.base||1;return function(r){for(var o,i,a=e.length,u=0;a>u;u++){var s=e[u];if(!(s[0]<=r)){i=s;break}o=s}if(o&&i){var f=i[0]-o[0],p=r-o[0],c=1===t?p/f:(Math.pow(t,p)-1)/(Math.pow(t,f)-1);if(Array.isArray(o[1])){for(var l=o[1],v=i[1],h=[],u=0;u<l.length;u++)h.push(n.interpolate(l[u],v[u],c));return h}return n.interpolate(o[1],i[1],c)}return o?o[1]:i?i[1]:void 0}}return function(){return r}},r._parseColor=function(e){if(Array.isArray(e))return e;if("string"==typeof e){var n=new t(e);if(n)return[n.r/255,n.g/255,n.b/255,n.a||1]}if(e&&e.stops)return e.stops=e.stops.map(function(e){return[e[0],r._parseColor(e[1])]}),e;throw new Error("Incorrect color definition "+e)},r}();return o});
},
'esri/views/vectorTiles/style/Filter':function(){
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

define(["require","exports"],function(e,t){var r=function(){function e(t,r,n){this._op=t,"$type"===r?(n instanceof Array?this._val=n.map(function(t){return e._types.indexOf(t)}):this._val=e._types.indexOf(n),this._op+=11):(this._key=r,this._val=n)}return e.prototype.filter=function(e){switch(this._op){case 0:return this._val;case 1:return e.values[this._key]===this._val;case 2:return e.values[this._key]!==this._val;case 3:return e.values[this._key]<this._val;case 4:return e.values[this._key]>this._val;case 5:return e.values[this._key]<=this._val;case 6:return e.values[this._key]>=this._val;case 7:return-1!==this._val.indexOf(e.values[this._key]);case 8:return-1===this._val.indexOf(e.values[this._key]);case 9:for(var t=0,r=this._val;t<r.length;t++){var n=r[t];if(n.filter(e))return!0}return!1;case 10:for(var s=0,i=this._val;s<i.length;s++){var n=i[s];if(!n.filter(e))return!1}return!0;case 11:for(var a=0,u=this._val;a<u.length;a++){var n=u[a];if(n.filter(e))return!1}return!0;case 12:return e.type===this._val;case 13:return e.type!==this._val;case 14:return e.type<this._val;case 15:return e.type>this._val;case 16:return e.type>=this._val;case 17:return e.type<=this._val;case 18:return-1!==this._val.indexOf(e.type);case 19:return-1===this._val.indexOf(e.type)}},e.createFilter=function(t){if(!t)return new e(0,void 0,!0);var r=t[0];if(t.length<=1)return new e(0,void 0,"any"!==r);switch(r){case"==":return new e(1,t[1],t[2]);case"!=":return new e(2,t[1],t[2]);case">":return new e(4,t[1],t[2]);case"<":return new e(3,t[1],t[2]);case">=":return new e(6,t[1],t[2]);case"<=":return new e(5,t[1],t[2]);case"in":return new e(7,t[1],t.slice(2));case"!in":return new e(8,t[1],t.slice(2));case"any":return new e(9,void 0,t.slice(1).map(e.createFilter.bind(this)));case"all":return new e(10,void 0,t.slice(1).map(e.createFilter.bind(this)));case"none":return new e(11,void 0,t.slice(1).map(e.createFilter.bind(this)));default:throw new Error("invalid operator: "+r)}},e}();return r._types=["Unknown","Point","LineString","Polygon"],r});
},
'esri/views/vectorTiles/SymbolBucket':function(){
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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./Bucket","./Geometry","./style/StyleLayer","./Placement","./GeometryUtils","./TextShaping","dojox/string/BidiEngine"],function(e,t,r,a,n,i,o,s,l,h,m){function c(e,t){return e.iconMosaicItem&&t.iconMosaicItem?e.iconMosaicItem.page===t.iconMosaicItem.page?0:e.iconMosaicItem.page<t.iconMosaicItem.page?-1:1:e.iconMosaicItem&&!t.iconMosaicItem?1:!e.iconMosaicItem&&t.iconMosaicItem?-1:0}var f=function(){function e(){}return e}(),x=function(){function e(e,t,r,a){this.line=t,this.shaping=e,this.iconMosaicItem=r,this.anchor=a}return e}(),p=(function(){function e(){}return e}(),function(e){function t(t,r,a,n,i,o,s,l){var h=e.call(this,t,r)||this;return h._markerRatio=1,h._markerMap=new Map,h._glyphMap=new Map,h._glyphBufferDataStorage=new Map,h._markerVertexBuffer=a,h._markerIndexBuffer=n,h._textVertexBuffer=i,h._textIndexBuffer=o,h._placementEngine=s,h._workerTileHandler=l,h}return r(t,e),Object.defineProperty(t.prototype,"markerPageMap",{get:function(){return this._markerMap},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"glyphsPageMap",{get:function(){return this._glyphMap},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textIndexStart",{get:function(){return this._textTriangleElementsStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textIndexCount",{get:function(){return this._textTriangleElementsNum},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sdfMarker",{get:function(){return!1},enumerable:!0,configurable:!0}),t.prototype.copy=function(e,r,a,n,i){var o=new t(this.layer,this.zoom,e,r,a,n,i,this._workerTileHandler);return o.layerIndex=this.layerIndex,o.layerExtent=this.layerExtent,o._markerVertexStart=e.index,o._markerTriangleElementsStart=r.index,o._textVertexStart=a.index,o._textTriangleElementsStart=n.index,o._markerTriangleElementsNum=0,o._textTriangleElementsNum=0,o._symbolInstances=this._symbolInstances,o._workerTileHandler=this._workerTileHandler,o._font=this._font,o._textLayout=this._textLayout,o._markerLayout=this._markerLayout,o._isLinePlacement=this._isLinePlacement,o._avoidEdges=this._avoidEdges,o},t.prototype.getResources=function(e,r,a){var n=this.layer,i=this.zoom;e&&e.setExtent(this.layerExtent);for(var o=n.getLayoutValue("icon-image",i),s=n.getLayoutValue("text-field",i),l=n.getLayoutValue("text-font",i),h=n.getLayoutValue("text-transform",i),m=[],c=0,x=this._features;c<x.length;c++){var p=x[c],u=p.getGeometry(e);if(u&&0!==u.length){var g=void 0;o&&(g=this._replaceKeys(o,p.values),g&&r.add(g));var d=void 0,y=!1;if(s){switch(d=this._replaceKeys(s,p.values),h){case 2:d=d.toLowerCase();break;case 1:d=d.toUpperCase()}if(t._bidiEngine.hasBidiChar(d)){var _=t._bidiEngine.checkContextual(d),v=void 0;v="rtl"===_?"IDNNN":"ICNNN",d=t._bidiEngine.bidiTransform(d,v,"VLYSN"),y=!0}var b=d.length;if(b>0){var I=a[l];I||(I=a[l]=new Set);for(var M=0;b>M;M++){var k=d.charCodeAt(M);I.add(k)}}}if(g||d){var E=new f;E.sprite=g,E.label=d,E.rtl=y,E.geometry=u,m.push(E)}}}this._symbolFeatures=m},t.prototype.processFeatures=function(e,r){e&&e.setExtent(this.layerExtent);var a,n=this.layer,i=this.zoom,m=8,f=24,p=this._isLinePlacement=1===n.getLayoutValue("symbol-placement",i),u=this._avoidEdges=n.getLayoutValue("symbol-avoid-edges",i)&&!p,g=n.getLayoutValue("symbol-spacing",i)*m,d=n.getLayoutValue("icon-image",i),y=n.getLayoutValue("text-field",i),_=this._workerTileHandler;d&&(this._markerLayout=new o.IconLayout(n,i,p),a=_.getSpriteItems());var v,b;if(y){var I=this._textLayout=new o.TextLayout(n,i,p),M=void 0;I.font&&I.font.length&&(M=I.font[0],this._font=M);var k=.5;switch(I.anchor){case 5:case 1:case 7:k=0;break;case 6:case 2:case 8:k=1}var E=.5;switch(I.anchor){case 5:case 3:case 6:E=0;break;case 7:case 4:case 8:E=1}var L=.5;switch(I.justify){case 0:L=0;break;case 2:L=1}var T=I.letterSpacing*f,z=p?0:I.maxWidth*f,S=I.lineHeight*f,w=[I.offset[0]*f,I.offset[1]*f];v=_.getGlyphItems(M),b=new h(v,z,S,T,w,k,E,L)}this._markerVertexStart=this._markerVertexBuffer.index,this._markerTriangleElementsStart=this._markerIndexBuffer.index,this._textVertexStart=this._textVertexBuffer.index,this._textTriangleElementsStart=this._textIndexBuffer.index,this._markerTriangleElementsNum=0,this._textTriangleElementsNum=0,this._markerMap.clear(),this._glyphMap.clear();var N=[];this._symbolInstances=N;var P=this._textLayout,A=1;P&&P.size&&(A=P.size/f);for(var V=4096,B=P?P.maxAngle*l.C_DEG_TO_RAD:0,C=P?P.size*m:0,F=0,G=this._symbolFeatures;F<G.length;F++){var D=G[F],H=void 0;D.sprite&&(H=a[D.sprite]);var j=void 0,Y=D.label,O=0;if(Y&&(j=b.getShaping(Y,D.rtl),j&&j.length>0)){for(var R=1e30,q=-1e30,K=0,U=j;K<U.length;K++){var W=U[K];R=Math.min(R,W.x),q=Math.max(q,W.x)}O=(q-R+2*f)*A*m}for(var J=0,Q=D.geometry;J<Q.length;J++){var X=Q[J],Z=void 0;if(p){if(j&&j.length>0&&P&&P.size){var $=P.size*m*(2+Math.min(2,4*Math.abs(P.offset[1])));t._smoothVertices(X,$)}Z=t._findAnchors(X,g,O)}else Z=[new s.Anchor(X[0].x,X[0].y)];for(var ee=0,te=Z;ee<te.length;ee++){var re=te[ee],ae=re.x<0||re.x>V||re.y<0||re.y>V;ae||p&&O>0&&0===P.rotationAlignment&&!t._honorsTextMaxAngle(X,re,O,B,C)||N.push(new x(j,X,H,re))}}}N.sort(c);for(var ne=0,ie=N;ne<ie.length;ne++){var oe=ie[ne];this._processFeature(oe,v,u)}this._addPlacedGlyphs()},t.prototype.updateSymbols=function(){this._markerVertexStart=this._markerVertexBuffer.index,this._markerTriangleElementsStart=this._markerIndexBuffer.index,this._textVertexStart=this._textVertexBuffer.index,this._textTriangleElementsStart=this._textIndexBuffer.index,this._markerTriangleElementsNum=0,this._textTriangleElementsNum=0,this._markerMap.clear(),this._glyphMap.clear();for(var e=this._workerTileHandler.getGlyphItems(this._font),t=this._avoidEdges,r=this._symbolInstances,a=0,n=r;a<n.length;a++){var i=n[a];this._processFeature(i,e,t)}this._addPlacedGlyphs()},t.prototype._replaceKeys=function(e,t){return e.replace(/{([^{}]+)}/g,function(e,r){return r in t?t[r]:""})},t.prototype._processFeature=function(e,t,r){var a=e.line,n=e.iconMosaicItem,o=e.shaping,s=e.anchor,h=8,m=this._markerLayout,c=m&&!!n,f=!0,x=1;if(c){var p=1/this._markerRatio,u=m.size/p;x=h*u,f=m.optional||!n}var g=this._textLayout,d=g&&o&&o.length>0,y=24,_=1,v=_,b=!0;d&&(_=g.size/y,v=h*_,b=g.optional||!o||0===o.length);var I,M=new i.Point(0,-17);if(c){if(I=this._placementEngine.getIconPlacement(s,n,x,a,m,r),I.footprint.minzoom===l.C_INFINITY&&!f)return;s.minzoom>I.footprint.minzoom&&(I.footprint.minzoom=s.minzoom)}var k;if(d&&(k=this._placementEngine.getTextPlacement(s,M,o,t,v,a,g,r))){if(k.footprint.minzoom===l.C_INFINITY&&!b)return;s.minzoom>k.footprint.minzoom&&(k.footprint.minzoom=s.minzoom)}if(!b&&!f||!f&&k&&k.footprint.minzoom!==l.C_INFINITY||!b&&I&&I.footprint.minzoom!==l.C_INFINITY){var E=Math.max(I.footprint.minzoom,k.footprint.minzoom);I.footprint.minzoom=E,k.footprint.minzoom=E}k&&k.footprint.minzoom!==l.C_INFINITY&&(g.ignorePlacement||this._placementEngine.add(k),this._storePlacedGlyphs(k.shapes,k.footprint.minzoom,this.zoom)),I&&I.footprint.minzoom!==l.C_INFINITY&&(m.ignorePlacement||this._placementEngine.add(I),this._addPlacedIcons(I.shapes,I.footprint.minzoom,this.zoom,n.page))},t.prototype._addPlacedIcons=function(e,t,r,a){for(var n=Math.max(r+l.log2(t),0),i=this._markerVertexBuffer,o=this._markerIndexBuffer,s=0,h=e;s<h.length;s++){var m=h[s],c=Math.max(r+l.log2(m.minzoom),n),f=Math.min(r+l.log2(m.maxzoom),25);if(!(c>=f)){var x=m.tl,p=m.tr,u=m.bl,g=m.br,d=m.mosaicRect,y=-m.labelAngle,_=m.anchor,v=i.index,b=d.x,I=d.y,M=b+d.width,k=I+d.height;i.add(_.x,_.y,x.x,x.y,b,I,y,c,f,n),i.add(_.x,_.y,p.x,p.y,M,I,y,c,f,n),i.add(_.x,_.y,u.x,u.y,b,k,y,c,f,n),i.add(_.x,_.y,g.x,g.y,M,k,y,c,f,n),o.add(v+0,v+1,v+2),o.add(v+1,v+2,v+3),this._markerMap.has(a)?this._markerMap.get(a)[1]+=6:this._markerMap.set(a,[this._markerTriangleElementsStart+this._markerTriangleElementsNum/3,6]),this._markerTriangleElementsNum+=6}}},t.prototype._addPlacedGlyphs=function(){var e=this,t=this._textVertexBuffer,r=this._textIndexBuffer;this._glyphBufferDataStorage.forEach(function(a,n){for(var i=0,o=a;i<o.length;i++){var s=o[i],l=t.index;t.add(s.glyphAnchor[0],s.glyphAnchor[1],s.tl[0],s.tl[1],s.xmin,s.ymin,s.labelAngle,s.minLod,s.maxLod,s.placementLod),t.add(s.glyphAnchor[0],s.glyphAnchor[1],s.tr[0],s.tr[1],s.xmax,s.ymin,s.labelAngle,s.minLod,s.maxLod,s.placementLod),t.add(s.glyphAnchor[0],s.glyphAnchor[1],s.bl[0],s.bl[1],s.xmin,s.ymax,s.labelAngle,s.minLod,s.maxLod,s.placementLod),t.add(s.glyphAnchor[0],s.glyphAnchor[1],s.br[0],s.br[1],s.xmax,s.ymax,s.labelAngle,s.minLod,s.maxLod,s.placementLod),r.add(l+0,l+1,l+2),r.add(l+1,l+2,l+3),e._glyphMap.has(n)?e._glyphMap.get(n)[1]+=6:e._glyphMap.set(n,[e._textTriangleElementsStart+e._textTriangleElementsNum/3,6]),e._textTriangleElementsNum+=6}}),this._glyphBufferDataStorage.clear()},t.prototype._storePlacedGlyphs=function(e,t,r){for(var a=Math.max(r+l.log2(t),0),n=0,i=e;n<i.length;n++){var o=i[n],s=Math.max(r+l.log2(o.minzoom),a),h=Math.min(r+l.log2(o.maxzoom),25);if(!(s>=h)){var m=o.tl,c=o.tr,f=o.bl,x=o.br,p=-o.labelAngle,u=o.anchor,g=o.mosaicRect;this._glyphBufferDataStorage.has(o.page)||this._glyphBufferDataStorage.set(o.page,[]);var d=this._glyphBufferDataStorage.get(o.page);d.push({glyphAnchor:[u.x,u.y],tl:[m.x,m.y],tr:[c.x,c.y],bl:[f.x,f.y],br:[x.x,x.y],xmin:g.x,ymin:g.y,xmax:g.x+g.width,ymax:g.y+g.height,labelAngle:p,minLod:s,maxLod:h,placementLod:a})}}},t._findAnchors=function(e,t,r){t+=r;for(var a=0,n=e.length-1,o=0;n>o;o++)a+=i.Point.distance(e[o],e[o+1]);var h=r||t;if(h*=.5,h>=a)return[];var m=h/a;t=a/Math.max(Math.round(a/t),1);for(var c=0,f=-t/2,x=[],p=e.length-1,o=0;p>o;o++){for(var u=e[o],g=e[o+1],d=g.x-u.x,y=g.y-u.y,_=Math.sqrt(d*d+y*y),v=void 0;c+_>f+t;){f+=t;var b=(f-c)/_,I=l.interpolate(u.x,g.x,b),M=l.interpolate(u.y,g.y,b);void 0===v&&(v=Math.atan2(y,d)),x.push(new s.Anchor(I,M,v,o,m))}c+=_}return x},t.deviation=function(e,t,r){var a=(t.x-e.x)*(r.x-t.x)+(t.y-e.y)*(r.y-t.y),n=(t.x-e.x)*(r.y-t.y)-(t.y-e.y)*(r.x-t.x);return Math.atan2(n,a)},t._honorsTextMaxAngle=function(e,t,r,a,n){for(var o=0,s=r/2,l=new i.Point(t.x,t.y),h=t.segment+1;o>-s;){if(--h,0>h)return!1;o-=i.Point.distance(e[h],l),l=e[h]}o+=i.Point.distance(e[h],e[h+1]);for(var m=[],c=0,f=e.length;s>o;){var x=e[h],p=h,u=void 0;do{if(++p,p===f)return!1;u=e[p]}while(u.isEqual(x));var g=p,d=void 0;do{if(++g,g===f)return!1;d=e[g]}while(d.isEqual(u));var y=this.deviation(x,u,d);for(m.push({deviation:y,distToAnchor:o}),c+=y;o-m[0].distToAnchor>n;)c-=m.shift().deviation;if(Math.abs(c)>a)return!1;o+=i.Point.distance(u,d),h=p}return!0},t._smoothVertices=function(e,t){var r=1e-6;if(!(0>=t)){var a=e.length;if(!(3>a)){var n=[],o=0;n.push(0);for(var s=1;a>s;s++)o+=i.Point.distance(e[s],e[s-1]),n.push(o);t=Math.min(t,.2*o);var l=[];l.push(e[0].x),l.push(e[0].y);var h=e[a-1].x,m=e[a-1].y,c=i.Point.sub(e[0],e[1]);c.normalize(),e[0].x+=t*c.x,e[0].y+=t*c.y,c.assignSub(e[a-1],e[a-2]),c.normalize(),e[a-1].x+=t*c.x,e[a-1].y+=t*c.y;for(var s=1;a>s;s++)n[s]+=t;n[a-1]+=t;for(var f=.5*t,s=1;a-1>s;s++){for(var x=0,p=0,u=0,g=s-1;g>=0&&!(n[g+1]<n[s]-f);g--){var d=f+n[g+1]-n[s],y=n[g+1]-n[g],_=n[s]-n[g]<f?1:d/y;if(Math.abs(_)<r)break;var v=_*_,b=_*d-.5*v*y,I=_*y/t,M=e[g+1],k=e[g].x-M.x,E=e[g].y-M.y;x+=I/b*(M.x*_*d+.5*v*(d*k-y*M.x)-v*_*y*k/3),p+=I/b*(M.y*_*d+.5*v*(d*E-y*M.y)-v*_*y*E/3),u+=I}for(var g=s+1;a>g&&!(n[g-1]>n[s]+f);g++){var d=f-n[g-1]+n[s],y=n[g]-n[g-1],_=n[g]-n[s]<f?1:d/y;if(Math.abs(_)<r)break;var v=_*_,b=_*d-.5*v*y,I=_*y/t,M=e[g-1],k=e[g].x-M.x,E=e[g].y-M.y;x+=I/b*(M.x*_*d+.5*v*(d*k-y*M.x)-v*_*y*k/3),p+=I/b*(M.y*_*d+.5*v*(d*E-y*M.y)-v*_*y*E/3),u+=I}l.push(x/u),l.push(p/u)}l.push(h),l.push(m);for(var s=0,g=0;a>s;s++)e[s].x=l[g++],e[s].y=l[g++]}}},t}(n));return p._bidiEngine=new m,p});
},
'esri/views/vectorTiles/Placement':function(){
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

define(["require","exports","./Geometry","./GeometryUtils","./Conflict"],function(t,e,n,i,o){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,n,i,o){void 0===n&&(n=0),void 0===i&&(i=-1),void 0===o&&(o=c),this.x=t,this.y=e,this.angle=n,this.segment=i,this.minzoom=o}return t}();e.Anchor=r;var a=function(){function t(t,e,n){this.glyph=t,this.x=e,this.y=n}return t}();e.ShapedGlyph=a;var l=function(){function t(t,e,n,o,r,a,l){void 0===r&&(r=!1),void 0===a&&(a=c),void 0===l&&(l=i.C_INFINITY),this.anchor=t,this.labelAngle=e,this.glyphAngle=n,this.page=o,this.upsideDown=r,this.minzoom=a,this.maxzoom=l}return t}(),h=function(){function t(t,e,n,i,o,r,a,l,h,s){this.tl=t,this.tr=e,this.bl=n,this.br=i,this.mosaicRect=o,this.labelAngle=r,this.anchor=a,this.minzoom=l,this.maxzoom=h,this.page=s}return t}();e.PlacedSymbol=h;var s=function(){function t(t,e){this.footprint=t,this.shapes=e}return t}();e.Placement=s;var c=.5,p=2,g=function(){function t(){this.mapAngle=0,this._conflictEngine=new o.ConflictEngine}return t.prototype.reset=function(){this._conflictEngine.reset()},t.prototype.setAngle=function(t){this.mapAngle=t,this._conflictEngine.setAngle(t)},t.prototype.getIconPlacement=function(t,e,r,a,l,p){var g=e.width/e.pixelRatio,m=e.height/e.pixelRatio,f=l.offset[0]-g/2,u=l.offset[1]-m/2,I=f+g,y=u+m,d=e.rect,x=f-2,_=u-2,v=x+d.width/e.pixelRatio,w=_+d.height/e.pixelRatio,N=new n.Point(x,_),P=new n.Point(v,w),A=new n.Point(x,w),E=new n.Point(v,_),T=l.rotate*i.C_DEG_TO_RAD,b=1===l.rotationAlignment;if(t.segment>=0&&!b&&(T+=t.angle),0!==T){var C=Math.cos(T),M=Math.sin(T);N.rotate(C,M),P.rotate(C,M),A.rotate(C,M),E.rotate(C,M)}var z=8,F=l.padding*z,G=new n.Point(t.x,t.y),Y=new o.Footprint(this.mapAngle,F,b);Y.addBox(G,new o.Box(f,u,I,y),r,T,c,i.C_INFINITY);var B=new h(N,E,A,P,d,0,G,c,i.C_INFINITY,0),O=new s(Y,[B]),R=c;return l.allowOverlap||(R=this._conflictEngine.getMinZoom(O.footprint,R,p,b)),Y.minzoom=R,O},t.prototype.getTextPlacement=function(t,e,r,a,g,m,f,u){for(var I,y=new n.Point(t.x,t.y),d=f.rotate*i.C_DEG_TO_RAD,x=0===f.rotationAlignment,_=f.keepUpright,v=c,w=!x,N=w?0:t.angle,P=t.segment>=0&&x,A=8,E=f.padding*A,T=new o.Footprint(this.mapAngle,E,w),b=[],C=4,M=!P,z=Number.POSITIVE_INFINITY,F=Number.NEGATIVE_INFINITY,G=z,Y=F,B=P?_:x&&_,O=[],R=0,D=r;R<D.length;R++){var q=D[R],S=a[q.glyph];if(S&&!S.rect.isEmpty){var V=S.rect,k=S.metrics,U=S.page;M&&(I&&I!==q.y&&(T.addBox(y,new o.Box(z,G,F,Y),g,d,c,i.C_INFINITY),z=Number.POSITIVE_INFINITY,F=Number.NEGATIVE_INFINITY,G=z,Y=F),I=q.y);var Z=[];if(P){var j=.5*S.metrics.width,H=(e.x+q.x+k.left-C+j)*g;if(v=this._placeGlyph(t,v,H,m,t.segment,1,U,Z),_&&(v=this._placeGlyph(t,v,H,m,t.segment,-1,U,Z)),v>=p)break}else Z.push(new l(y,N,N,U)),x&&_&&Z.push(new l(y,N+i.C_PI,N+i.C_PI,U,!0));for(var J=q.x+e.x+k.left,K=q.y+e.y-k.top,L=J+k.width,Q=K+k.height,W=new n.Point(J-C,K-C),X=new n.Point(W.x+V.width,W.y+V.height),$=new n.Point(W.x,X.y),tt=new n.Point(X.x,W.y),et=0,nt=Z;et<nt.length;et++){var it=nt[et],ot=W.clone(),rt=$.clone(),at=tt.clone(),lt=X.clone(),ht=K,st=Q,ct=it.glyphAngle+d;if(0!==ct){var pt=Math.cos(ct),gt=Math.sin(ct);ot.rotate(pt,gt),lt.rotate(pt,gt),rt.rotate(pt,gt),at.rotate(pt,gt)}b.push(new h(ot,at,rt,lt,V,it.labelAngle,it.anchor,it.minzoom,it.maxzoom,it.page)),(!B||this._legible(it.labelAngle))&&(M?(z>J&&(z=J),G>ht&&(G=ht),L>F&&(F=L),st>Y&&(Y=st)):it.minzoom<p&&T.addBox(it.anchor,new o.Box(J,ht,L,st),g,ct,it.minzoom,it.maxzoom)),O.push(it)}}}if(v>=p)return null;M&&T.addBox(y,new o.Box(z,G,F,Y),g,d,c,i.C_INFINITY);var mt=new s(T,b);return f.allowOverlap||(v=this._conflictEngine.getMinZoom(mt.footprint,v,u,w)),T.minzoom=v,mt},t.prototype.add=function(t){this._conflictEngine.add(t.footprint)},t.prototype._legible=function(t){var e=i.radToByte(t);return 65>e||e>=193},t.prototype._placeGlyph=function(t,e,o,r,a,h,s,c){var p=h,g=0>p?i.positiveMod(t.angle+i.C_PI,i.C_2PI):t.angle,m=this._legible(g),f=0;0>o&&(p*=-1,o*=-1,f=i.C_PI),p>0&&++a;var u=new n.Point(t.x,t.y),I=r[a],y=i.C_INFINITY;if(r.length<=a)return y;for(;;){var d=I.x-u.x,x=I.y-u.y,_=Math.sqrt(d*d+x*x),v=Math.max(o/_,e),w=d/_,N=x/_,P=i.positiveMod(Math.atan2(N,w)+f,i.C_2PI);if(c.push(new l(u,g,P,s,m,v,y)),e>=v)return v;u=I.clone();do{if(a+=p,r.length<=a||0>a)return v;I=r[a]}while(u.isEqual(I));var A=I.x-u.x,E=I.y-u.y,T=Math.sqrt(A*A+E*E);A*=_/T,E*=_/T,u.x-=A,u.y-=E,y=v}},t}();e.PlacementEngine=g});
},
'esri/views/vectorTiles/Conflict':function(){
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

define(["require","exports","./Geometry","./GeometryUtils"],function(r,o,n,t){Object.defineProperty(o,"__esModule",{value:!0});var e=function(){function r(r,o,n,t){this.left=r,this.top=o,this.right=n,this.bottom=t}return r.prototype.clone=function(){return new r(this.left,this.top,this.right,this.bottom)},r.prototype.move=function(r,o){this.left+=r,this.top+=o,this.right+=r,this.bottom+=o},r.prototype.rotate=function(r,o){var n=this.left,t=this.right,e=this.top,c=this.bottom,s=n*r-e*o,i=n*o+e*r,a=t*r-e*o,h=t*o+e*r,x=n*r-c*o,m=n*o+c*r,y=t*r-c*o,p=t*o+c*r;this.left=Math.min(s,a,x,y),this.top=Math.min(i,h,m,p),this.right=Math.max(s,a,x,y),this.bottom=Math.max(i,h,m,p)},r.overlaps=function(r,o){return r.right>o.left&&r.left<o.right&&r.bottom>o.top&&r.top<o.bottom},r}();o.Box=e;var c=function(){function r(r,o,n,t){this.anchor=r,this.corners=o,this.minzoom=n,this.maxzoom=t}return r.prototype.left=function(){return this.corners[0].x},r.prototype.right=function(){return this.corners[2].x},r.prototype.top=function(){return this.corners[1].y},r.prototype.bottom=function(){return this.corners[3].y},r}();o.Obstacle=c;var s=function(){function r(r,o,n){this.obstacles=[],this.mapAngle=r,this.padding=o,this.isScreenAligned=n,this.minzoom=i}return r.prototype.addBox=function(r,o,t,e,s,i){var a=o.left*t-this.padding,h=o.top*t-this.padding,x=o.right*t+this.padding,m=o.bottom*t+this.padding,y=[new n.Point(a,h),new n.Point(x,h),new n.Point(x,m),new n.Point(a,m)];if(0!==this.mapAngle){var p=Math.cos(this.mapAngle),f=Math.sin(this.mapAngle);r=r.clone(),r.rotate(p,f)}if(this.isScreenAligned||(e+=this.mapAngle),0!==e){var p=Math.cos(e),f=Math.sin(e);y[0].rotate(p,f),y[1].rotate(p,f),y[2].rotate(p,f),y[3].rotate(p,f);for(var l=0,u=1;4>u;u++)y[u].x<y[l].x?l=u:y[u].x===y[l].x&&y[u].y<y[l].y&&(l=u);if(l){for(var g=[],u=0;4>u;u++)g.push(y[(u+l)%4]);y=g}}this.obstacles.push(new c(r,y,s,i))},r}();o.Footprint=s;var i=.5,a=2,h=function(){function r(){this._grid=[]}return r.prototype.setAngle=function(r){this._angle=r,this._c=Math.cos(r),this._s=Math.sin(r)},r.prototype.reset=function(){this._angle=this._s=0,this._c=1,this._grid=[]},r.prototype.add=function(o){for(var n=this._grid,t=0,e=o.obstacles;t<e.length;t++)for(var c=e[t],s=c.anchor,i=r._gridClamp(Math.min(c.left()+s.x,s.x)),a=r._gridClamp(Math.max(c.right()+s.x,s.x)),h=r._gridClamp(Math.min(c.top()+s.y,s.y)),x=r._gridClamp(Math.max(c.bottom()+s.y,s.y)),m=h;x>=m;m++)for(var y=i;a>=y;y++){var p=n[16*m+y];p||(p=n[16*m+y]=[]),p.push(c)}},r.prototype.getMinZoom=function(o,n,e,c){if(0===o.obstacles.length)return t.C_INFINITY;for(var s=n,i=this._grid,h=0,x=o.obstacles;h<x.length;h++)for(var m=x[h],y=m.anchor,p=r._gridClamp(Math.min(m.left()+y.x,y.x)),f=r._gridClamp(Math.max(m.right()+y.x,y.x)),l=r._gridClamp(Math.min(m.top()+y.y,y.y)),u=r._gridClamp(Math.max(m.bottom()+y.y,y.y)),g=l;u>=g;g++)for(var v=p;f>=v;v++){var _=i[16*g+v];if(_)for(var d=0,b=_;d<b.length;d++){var M=b[d];if(!(m.minzoom>=M.maxzoom||M.minzoom>=m.maxzoom)&&(s=r._calcPlacementZoom(m,M,s),s>=a))return t.C_INFINITY}}return a>s?s:t.C_INFINITY},r._gridClamp=function(r){return t.clamp(r>>9,-7,8)},r._calcPlacementZoom=function(o,n,e){var c=n.anchor.x-o.anchor.x;if(0===c&&(o.right()<n.left()||n.right()<o.left()))return e;var s=n.anchor.y-o.anchor.y;if(0===s&&(o.bottom()<n.top()||n.bottom()<o.top()))return e;var i=t.C_INFINITY;if(0!==c){var a=c>0?o.right()-n.left():o.left()-n.right(),h=a/c;i>h&&(i=h);var x=c>0?r._calcExtZoomX(o,n,h):r._calcExtZoomX(n,o,h);i>x&&(i=x)}if(0!==s){var m=s>0?o.bottom()-n.top():o.top()-n.bottom(),y=m/s;i>y&&(i=y);var p=s>0?r._calcExtZoomY(o,n,y):r._calcExtZoomY(n,o,y);i>p&&(i=p)}return i<o.minzoom||i<n.minzoom?e:(i=Math.min(i,o.maxzoom,n.maxzoom),e>i&&(i=e),i)},r._calcExtZoomX=function(r,o,n){var t,e,c,s,i=r.anchor.y+r.corners[2].y/n,a=o.anchor.y+o.corners[0].y/n;if(a>i){var h=r.corners[2].x-r.corners[3].x,x=r.corners[2].y-r.corners[3].y,m=o.corners[1].x-o.corners[0].x,y=o.corners[1].y-o.corners[0].y,p=h*y-x*m;p>=0?r.anchor.y+r.corners[3].y/n<o.anchor.y+o.corners[0].y/n?(t=r.corners[3],e=o.corners[0],c=o.corners[1],s=1):(t=o.corners[0],e=r.corners[3],c=r.corners[2],s=-1):r.anchor.y+r.corners[2].y/n>o.anchor.y+o.corners[1].y/n?(t=r.corners[2],e=o.corners[0],c=o.corners[1],s=1):(t=o.corners[1],e=r.corners[3],c=r.corners[2],s=-1)}else{var h=r.corners[2].x-r.corners[1].x,x=r.corners[2].y-r.corners[1].y,m=o.corners[3].x-o.corners[0].x,y=o.corners[3].y-o.corners[0].y,p=h*y-x*m;0>p?r.anchor.y+r.corners[1].y/n>o.anchor.y+o.corners[0].y/n?(t=r.corners[1],e=o.corners[0],c=o.corners[3],s=1):(t=o.corners[0],e=r.corners[1],c=r.corners[2],s=-1):r.anchor.y+r.corners[2].y/n<o.anchor.y+o.corners[3].y/n?(t=r.corners[2],e=o.corners[0],c=o.corners[3],s=1):(t=o.corners[3],e=r.corners[1],c=r.corners[2],s=-1)}var f=c.x-e.x,l=c.y-e.y;return s*((t.y-e.y)*f-(t.x-e.x)*l)/((r.anchor.x-o.anchor.x)*l-(r.anchor.y-o.anchor.y)*f)},r._calcExtZoomY=function(r,o,n){var t,e,c,s,i=r.anchor.x+r.corners[3].x/n,a=o.anchor.x+o.corners[1].x/n;if(a>i){var h=r.corners[3].x-r.corners[2].x,x=r.corners[3].y-r.corners[2].y,m=o.corners[0].x-o.corners[1].x,y=o.corners[0].y-o.corners[1].y,p=h*y-x*m;0>p?r.anchor.x+r.corners[2].x/n<o.anchor.x+o.corners[1].x/n?(t=r.corners[2],e=o.corners[1],c=o.corners[0],s=1):(t=o.corners[1],e=r.corners[2],c=r.corners[3],s=-1):r.anchor.x+r.corners[3].x/n>o.anchor.x+o.corners[0].x/n?(t=r.corners[3],e=o.corners[1],c=o.corners[0],s=1):(t=o.corners[0],e=r.corners[2],c=r.corners[3],s=-1)}else{var h=r.corners[3].x-r.corners[0].x,x=r.corners[3].y-r.corners[0].y,m=o.corners[2].x-o.corners[1].x,y=o.corners[2].y-o.corners[1].y,p=h*y-x*m;p>0?r.anchor.x+r.corners[0].x/n>o.anchor.x+o.corners[1].x/n?(t=r.corners[0],e=o.corners[1],c=o.corners[2],s=1):(t=o.corners[1],e=r.corners[0],c=r.corners[3],s=-1):r.anchor.x+r.corners[3].x/n<o.anchor.x+o.corners[2].x/n?(t=r.corners[3],e=o.corners[1],c=o.corners[2],s=1):(t=o.corners[2],e=r.corners[0],c=r.corners[3],s=-1)}var f=c.x-e.x,l=c.y-e.y;return s*((t.y-e.y)*f-(t.x-e.x)*l)/((r.anchor.x-o.anchor.x)*l-(r.anchor.y-o.anchor.y)*f)},r}();o.ConflictEngine=h});
},
'esri/views/vectorTiles/TextShaping':function(){
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

define(["require","exports","./Placement"],function(t,i,h){var e=function(){function t(t,i,h,e,s,r,a,n){this._glyphItems=t,this._maxWidth=i,this._lineHeight=h,this._letterSpacing=e,this._offset=s,this._hAnchor=r,this._vAnchor=a,this._justify=n}return t.prototype.getShaping=function(t,i){for(var e=this._glyphItems,s=this._letterSpacing,r=this._offset[0],a=this._offset[1],n=[],f=t.length,o=0;f>o;o++){var p=t.charCodeAt(o),_=e[p];_&&(n.push(new h.ShapedGlyph(p,r,a)),r+=_.metrics.advance+s)}if(n.length>0){var c=this._maxWidth,y=this._lineHeight,l=this._justify,v=n.length,g=0,u=0,x=0;if(0!==c)for(var m=0,d=0,o=0;v>o;o++){var A=n[o];if(A.x-=d,i?A.y-=y*g:A.y+=y*g,A.x>c&&m>0){var I=n[m+1].x;x=Math.max(I,x);for(var S=m+1;o>=S;S++)i?n[S].y-=y:n[S].y+=y,n[S].x-=I;l&&this._applyJustification(n,u,m-1),u=m+1,m=0,d+=I,g++}32===A.glyph&&(m=o)}var j=n[v-1],J=j.x+this._glyphItems[j.glyph].metrics.advance;x=Math.max(x,J),l&&this._applyJustification(n,u,v-1);var H=(l-this._hAnchor)*x,M=(-this._vAnchor*(g+1)+.5)*y;i&&g&&(M+=g*y);for(var W=0,q=n;W<q.length;W++){var w=q[W];w.x+=H,w.y+=M}}return n},t.prototype._applyJustification=function(t,i,h){for(var e=t[h],s=this._glyphItems[e.glyph].metrics.advance,r=(e.x+s)*this._justify,a=i;h>=a;a++)t[a].x-=r},t}();return e});
},
'dojox/string/BidiEngine':function(){
define(["dojo/_base/lang", "dojo/_base/declare", "dojo/Stateful"],
  function(lang,declare,Stateful) {
	lang.getObject("string", true, dojox);

	var BidiEngine = declare("dojox.string.BidiEngine", Stateful, {
		// summary:
		//		This class provides a bidi transformation engine, i.e.
		//		functions for reordering and shaping bidi text.
		// description:
		//		Bidi stands for support for languages with a bidirectional script.
		//
		//		Usually Unicode Bidi Algorithm used by OS platform (and web browsers) is capable of properly
		//		transforming Bidi text and as a result it is adequately displayed on the screen.
		//		However, in some situations, Unicode Bidi Algorithm is not invoked or is not properly applied.
		//		This may occur in situation in which software responsible for rendering the text is not leveraging
		//		Unicode Bidi Algorithm implemented by OS (e.g. GFX renderers).
		//
		//		Bidi engine provided in this class implements Unicode Bidi Algorithm as specified at
		//		http://www.unicode.org/reports/tr9/.
		//
		//		For more information on basic Bidi concepts please read
		//		"Bidirectional script support - A primer" available from
		//		http://www.ibm.com/developerworks/websphere/library/techarticles/bidi/bidigen.html.
		//
		//		As of February 2011, Bidi engine has following limitations:
		//
		//		1. No support for following numeric shaping options:
		//			- H - Hindi,
		//			- C - Contextual,
		//			- N - Nominal.
		//		2. No support for following shaping options:
		//			- I - Initial shaping,
		//			- M - Middle shaping,
		//			- F - Final shaping,
		//			- B - Isolated shaping.
		//		3. No support for LRE/RLE/LRO/RLO/PDF (they are handled like neutrals).
		//		4. No support for Windows compatibility.
		//		5. No support for  insert/remove marks.
		//		6. No support for code pages.
		//

		// Input Bidi layout in which inputText is passed to the function.
		inputFormat: "ILYNN",

		// Output Bidi layout to which inputText should be transformed.
		outputFormat: "VLNNN",

		// Array, containing positions of each character from the source text in the resulting text.
		sourceToTarget: [],

		// Array, containing positions of each character from the resulting text in the source text.
		targetToSource: [],

		// Array, containing bidi level of each character from the source text
		levels: [],

		bidiTransform: function (/*String*/text, /*String*/formatIn, /*String*/formatOut) {
			// summary:
			//		Central public API for Bidi engine. Transforms the text according to formatIn, formatOut
			//		parameters. If formatIn or formatOut parametrs are not valid throws an exception.
			// inputText:
			//		Input text subject to application of Bidi transformation.
			// formatIn:
			//		Input Bidi layout in which inputText is passed to the function.
			// formatOut:
			//		Output Bidi layout to which inputText should be transformed.
			// description:
			//		Both formatIn and formatOut parameters are 5 letters long strings.
			//		For example - "ILYNN". Each letter is associated with specific attribute of Bidi layout.
			//		Possible and default values for each one of the letters are provided below:
			//
			//		First letter:
			//
			//		- Letter position/index:
			//			1
			//		- Letter meaning:
			//			Ordering Schema.
			//		- Possible values:
			//			- I - Implicit (Logical).
			//			- V - Visual.
			//		- Default value:
			//			I
			//
			//		Second letter:
			//
			//		- Letter position/index:
			//			2
			//		- Letter meaning:
			//			Orientation.
			//		- Possible values:
			//			- L - Left To Right.
			//			- R - Right To Left.
			//			- C - Contextual Left to Right.
			//			- D - Contextual Right to Left.
			//		- Default value:
			//			L
			//
			//		Third letter:
			//
			//		- Letter position/index:
			//			3
			//		- Letter meaning:
			//			Symmetric Swapping.
			//		- Possible values:
			//			- Y - Symmetric swapping is on.
			//			- N - Symmetric swapping is off.
			//		- Default value:
			//			Y
			//
			//		Fourth letter:
			//
			//		- Letter position/index:
			//			4
			//		- Letter meaning:
			//			Shaping.
			//		- Possible values:
			//			- S - Text is shaped.
			//			- N - Text is not shaped.
			//		- Default value:
			//			N
			//
			//		Fifth letter:
			//
			//		- Letter position/index:
			//			5
			//		- Letter meaning:
			//			Numeric Shaping.
			//		- Possible values:
			//			- N - Nominal.
			//		- Default value:
			//			N
			//
			//		The output of this function is original text (passed via first argument) transformed from
			//		input Bidi layout (second argument) to output Bidi layout (last argument).
			//
			//		Sample call:
			//	|	mytext = bidiTransform("HELLO WORLD", "ILYNN", "VLYNN");
			//		In this case, "HELLO WORLD" text is transformed from Logical - LTR to Visual - LTR Bidi layout
			//		with default values for symmetric swapping (Yes), shaping (Not shaped) and numeric shaping
			//		(Nominal).
			// returns: String
			//		Original text transformed from input Bidi layout (second argument)
			//		to output Bidi layout (last argument).
			//		Throws an exception if the bidi layout strings are not valid.
			// tags:
			//		public

			this.sourceToTarget = [];
			this.targetToSource = [];
			if (!text) {
				return "";
			}
			initMaps(this.sourceToTarget, this.targetToSource, text.length);
			if (!this.checkParameters(formatIn, formatOut)) {
				return text;
			}

			formatIn = this.inputFormat;
			formatOut = this.outputFormat;
			var result = text;
			var bdx = BDX;
			var orientIn = getOrientation(formatIn.charAt(1)),
				orientOut = getOrientation(formatOut.charAt(1)),
				osIn = (formatIn.charAt(0) === "I") ? "L" : formatIn.charAt(0),
				osOut = (formatOut.charAt(0) === "I") ? "L" : formatOut.charAt(0),
				inFormat = osIn + orientIn,
				outFormat = osOut + orientOut,
				swap = formatIn.charAt(2) + formatOut.charAt(2);

			bdx.defInFormat = inFormat;
			bdx.defOutFormat = outFormat;
			bdx.defSwap = swap;

			var stage1Text = doBidiReorder(text, inFormat, outFormat, swap, bdx),
				isRtl = false;

			if (formatOut.charAt(1) === "R") {
				isRtl = true;
			} else if (formatOut.charAt(1) === "C" || formatOut.charAt(1) === "D") {
				isRtl = this.checkContextual(stage1Text);
			}

			this.sourceToTarget = stMap;
			this.targetToSource = reverseMap(this.sourceToTarget);
			tsMap = this.targetToSource;

			if (formatIn.charAt(3) === formatOut.charAt(3)) {
				result = stage1Text;
			} else if (formatOut.charAt(3) === "S") {
				result = shape(isRtl, stage1Text, true);
			} else {  //formatOut.charAt(3) === "N"
				result = deshape(stage1Text, isRtl, true);
			}
			this.sourceToTarget = stMap;
			this.targetToSource = tsMap;
			this.levels = lvMap;
			return result;
		},

		_inputFormatSetter: function (format) {
			if (!validFormat.test(format)) {
				throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
			}
			this.inputFormat = format;
		},

		_outputFormatSetter: function (format) {
			if (!validFormat.test(format)) {
				throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
			}
			this.outputFormat = format;
		},

		checkParameters: function (/*String*/formatIn, /*String*/formatOut) {
			// summary:
			//		Checks layout parameters.
			// formatIn:
			//		Input Bidi layout in which inputText is passed to the function.
			// formatOut:
			//		Output Bidi layout to which inputText should be transformed.
			// description:
			//		Checks, that layout parameters are different and contain allowed values.
			//		Allowed values for format string are:
			//			- 1st letter: I, V
			//			- 2nd letter: L, R, C, D
			//			- 3rd letter: Y, N
			//			- 4th letter: S, N
			//			- 5th letter: N
			// returns: /*Boolean*/
			//		true - if layout parameters are valid.
			//		false - otherwise.
			// tags:
			//		private

			if (!formatIn) {
				formatIn = this.inputFormat;
			} else {
				this.set("inputFormat", formatIn);
			}
			if (!formatOut) {
				formatOut = this.outputFormat;
			} else {
				this.set("outputFormat", formatOut);
			}
			if (formatIn === formatOut) {
				return false;
			}
			return true;
		},

		checkContextual: function (/*String*/text) {
			// summary:
			//		Determine the base direction of a bidi text according
			//		to its first strong directional character.
			// text:
			//		The text to check.
			// returns: /*String*/
			//		"ltr" or "rtl" according to the first strong character.
			//		If there is no strong character, returns the value of the
			//		document dir property.
			// tags:
			//		public
			var dir = firstStrongDir(text);
			if (dir !== "ltr" && dir !== "rtl") {
				try {
					dir = document.dir.toLowerCase();
				} catch (e) {
				}
				if (dir !== "ltr" && dir !== "rtl") {
					dir = "ltr";
				}
			}
			return dir;
		},

		hasBidiChar: function (/*String*/text) {
			// summary:
			//		Return true if text contains RTL directed character.
			// text:
			//		The source string.
			// description:
			//		Searches for RTL directed character.
			//		Returns true if found, else returns false.
			// returns: /*Boolean*/
			//		true - if text has a RTL directed character.
			//		false - otherwise.
			// tags:
			//		public

		    return bidiChars.test(text);
		}
	});

	function doBidiReorder(/*String*/text, /*String*/inFormat,
				/*String*/outFormat, /*String*/swap, /*Object*/bdx) {
		// summary:
		//		Reorder the source text according to the bidi attributes
		//		of source and result.
		// text:
		//		The text to reorder.
		// inFormat:
		//		Ordering scheme and base direction of the source text.
		//		Can be "LLTR", "LRTL", "LCLR", "LCRL", "VLTR", "VRTL",
		//		"VCLR", "VCRL".
		//		The first letter is "L" for logical ordering scheme,
		//		"V" for visual ordering scheme.
		//		The other letters specify the base direction.
		//		"CLR" means contextual direction defaulting to LTR if
		//		there is no strong letter.
		//		"CRL" means contextual direction defaulting to RTL if
		//		there is no strong letter.
		//		The initial value is "LLTR", if none, the initial value is used.
		// outFormat:
		//		Required ordering scheme and base direction of the
		//		result. Has the same format as inFormat.
		//		If none, the initial value "VLTR" is used.
		// swap:
		//		Symmetric swapping attributes of source and result.
		//		The allowed values can be "YN", "NY", "YY" and "NN".
		//		The first letter reflects the symmetric swapping attribute
		//		of the source, the second letter that of the result.
		// bdx: Object
		//		Used for intermediate data storage
		// returns:
		//		Text reordered according to source and result attributes.

		var params = prepareReorderingParameters(text, {inFormat: inFormat, outFormat: outFormat, swap: swap}, bdx);
		if (params.inFormat === params.outFormat) {
			return text;
		}
		inFormat = params.inFormat;
		outFormat = params.outFormat;
		swap = params.swap;
		var inOrdering = inFormat.substring(0, 1),
		inOrientation = inFormat.substring(1, 4),
		outOrdering = outFormat.substring(0, 1),
		outOrientation = outFormat.substring(1, 4);
		bdx.inFormat = inFormat;
		bdx.outFormat = outFormat;
		bdx.swap = swap;
		if ((inOrdering === "L") && (outFormat === "VLTR")) { //core cases
			//cases: LLTR->VLTR, LRTL->VLTR
			if (inOrientation === "LTR") {
				bdx.dir = LTR;
				return doReorder(text, bdx);
			}
			if (inOrientation === "RTL") {
				bdx.dir = RTL;
				return doReorder(text, bdx);
			}
		}
		if ((inOrdering === "V") && (outOrdering === "V")) {
			//inOrientation != outOrientation
			//cases: VRTL->VLTR, VLTR->VRTL
			bdx.dir = inOrientation === "RTL"? RTL : LTR;
			return invertStr(text, bdx);
		}
		if ((inOrdering === "L") && (outFormat === "VRTL")) {
			//cases: LLTR->VRTL, LRTL->VRTL
			if (inOrientation === "LTR") {
				bdx.dir = LTR;
				text = doReorder(text, bdx);
			} else {
				//inOrientation == RTL
				bdx.dir = RTL;
				text = doReorder(text, bdx);
			}
			return invertStr(text);
		}
		if ((inFormat === "VLTR") && (outFormat === "LLTR")) {
			//case: VLTR->LLTR
			bdx.dir = LTR;
			return doReorder(text, bdx);
		}
		if ((inOrdering === "V") && (outOrdering === "L") && (inOrientation !== outOrientation)) {
			//cases: VLTR->LRTL, VRTL->LLTR
			text = invertStr(text);
			return (inOrientation === "RTL") ? doBidiReorder(text, "LLTR", "VLTR", swap, bdx) :
												doBidiReorder(text, "LRTL", "VRTL", swap, bdx);
		}
		if ((inFormat === "VRTL") && (outFormat === "LRTL")) {
			//case VRTL->LRTL
			return doBidiReorder(text, "LRTL", "VRTL", swap, bdx);
		}
		if ((inOrdering === "L") && (outOrdering === "L")) {
			//inOrientation != outOrientation
			//cases: LRTL->LLTR, LLTR->LRTL
			var saveSwap = bdx.swap;
			bdx.swap = saveSwap.substr(0, 1) + "N";
			if (inOrientation === "RTL") {
				//LRTL->LLTR
				bdx.dir = RTL;
				text = doReorder(text, bdx);
				bdx.swap = "N" + saveSwap.substr(1, 2);
				bdx.dir = LTR;
				text = doReorder(text, bdx);
			} else { //LLTR->LRTL
				bdx.dir = LTR;
				text = doReorder(text, bdx);
				bdx.swap = "N" + saveSwap.substr(1, 2);
				text = doBidiReorder(text, "VLTR", "LRTL", bdx.swap, bdx);
			}
			return text;
		}
	}

	function prepareReorderingParameters(/*String*/text, /*Object*/params, /*Object*/bdx) {
		// summary:
		//		Prepare reordering parameters
		// text:
		//		The text to reorder.
		// params:
		//      Object, containing reordering parameters:
		//         - inFormat: Ordering scheme and base direction of the source text.
		//         - outFormat: Required ordering scheme and base direction of the result.
		//         - swap: Symmetric swapping attributes of source and result.
		// bdx: Object
		//		Used for intermediate data storage
		// tags:
		//		private

		if (params.inFormat === undefined) {
			params.inFormat = bdx.defInFormat;
		}
		if (params.outFormat === undefined) {
			params.outFormat = bdx.defOutFormat;
		}
		if (params.swap === undefined) {
			params.swap = bdx.defSwap;
		}
		if (params.inFormat === params.outFormat) {
			return params;
		}
		var dir, inOrdering = params.inFormat.substring(0, 1),
		inOrientation = params.inFormat.substring(1, 4),
		outOrdering = params.outFormat.substring(0, 1),
		outOrientation = params.outFormat.substring(1, 4);
		if (inOrientation.charAt(0) === "C") {
			dir = firstStrongDir(text);
			if (dir === "ltr" || dir === "rtl") {
				inOrientation = dir.toUpperCase();
			} else {
				inOrientation = params.inFormat.charAt(2) === "L" ? "LTR" : "RTL";
			}
			params.inFormat = inOrdering + inOrientation;
		}
		if (outOrientation.charAt(0) === "C") {
			dir = firstStrongDir(text);
			if (dir === "rtl") {
				outOrientation = "RTL";
			} else if (dir === "ltr") {
				dir = lastStrongDir(text);
				outOrientation = dir.toUpperCase();
			} else {
				outOrientation = params.outFormat.charAt(2) === "L" ? "LTR" : "RTL";
			}
			params.outFormat = outOrdering + outOrientation;
		}
		return params;
	}

	function shape(/*boolean*/rtl, /*String*/text, /*boolean*/compress) {
		// summary:
		//		Shape the source text.
		// rtl:
		//		Flag indicating if the text is in RTL direction (logical
		//		direction for Arabic words).
		// text:
		//		The text to shape.
		// compress:
		//		A flag indicates to insert extra space after the lam alef compression
		//		to preserve the buffer size or not insert an extra space which will lead
		//		to decrease the buffer size. This option can be:
		//
		//		- true (default) to not insert extra space after compressing Lam+Alef into one character Lamalef
		//		- false to insert an extra space after compressed Lamalef to preserve the buffer size
		// returns:
		//		text shaped.
		// tags:
		//		private.

		if (text.length === 0) {
			return;
		}
		if (rtl === undefined) {
			rtl = true;
		}
		if (compress === undefined) {
			compress = true;
		}
		text = String(text);

		var str06 = text.split(""),
			Ix = 0,
			step = +1,
			nIEnd = str06.length;
		if (!rtl) {
			Ix = str06.length - 1;
			step = -1;
			nIEnd = 1;
		}
		var compressArray = doShape(str06, Ix, step, nIEnd, compress);
		var outBuf = "";
		for (var idx = 0; idx < str06.length; idx++) {
			if (!(compress && indexOf(compressArray, compressArray.length, idx) > -1)) {
				outBuf += str06[idx];
			} else {
				updateMap(tsMap, idx, !rtl, -1);
				stMap.splice(idx, 1);
			}
		}
		return outBuf;
	}

	function doShape(str06, Ix, step, nIEnd, compress) {
		// summary:
		//		Shape the source text.
		// str06:
		//		Array containing source text
		// Ix:
		//		Index of the first handled element
		// step:
		//		direction of the process
		// nIEnd:
		//		Index of the last handled element
		// compress:
		//		A flag indicates to insert extra space after the lam alef compression
		//		to preserve the buffer size or not insert an extra space which will lead
		//		to decrease the buffer size.
		// returns:
		//		Array, contained shaped text.
		// tags:
		//		private.

		var previousCursive = 0, compressArray = [], compressArrayIndx = 0;
		for (var index = Ix; index * step < nIEnd; index = index + step) {
			if (isArabicAlefbet(str06[index]) || isArabicDiacritics(str06[index])) {
				// Arabic letter Lam
				if (str06[index] === "\u0644" && isNextAlef(str06, (index + step), step, nIEnd)) {
					str06[index] = (previousCursive === 0) ?
							getLamAlefFE(str06[index + step], LamAlefInialTableFE) :
							getLamAlefFE(str06[index + step], LamAlefMedialTableFE);
					index += step;
					setAlefToSpace(str06, index, step, nIEnd);
					if (compress) {
						compressArray[compressArrayIndx] = index;
						compressArrayIndx++;
					}
					previousCursive = 0;
					continue;
				}
				var currentChr = str06[index];
				if (previousCursive === 1) {
					// if next is Arabic
					// Character is in medial form
					// else character is in final form
					str06[index] = (isNextArabic(str06, (index + step), step, nIEnd)) ?
						getMedialFormCharacterFE(str06[index]) : getFormCharacterFE(str06[index], FinalForm);
				} else {
					if (isNextArabic(str06, (index + step), step, nIEnd) === true) {
						//character is in Initial form
						str06[index] = getFormCharacterFE(str06[index], InitialForm);
					} else {
						str06[index] = getFormCharacterFE(str06[index], IsolatedForm);
					}
				}
				//exam if the current character is cursive
				if (!isArabicDiacritics(currentChr)) {
					previousCursive = 1;
				}
				if (isStandAlonCharacter(currentChr) === true) {
					previousCursive = 0;
				}
			} else {
				previousCursive = 0;
			}
		}
		return compressArray;
	}

	function firstStrongDir(/*String*/text) {
		// summary:
		//		Return the first strong character direction
		// text:
		//		The source string.
		// description:
		//		Searches for first "strong" character.
		//		Returns if strong character was found with the direction defined by this
		//		character, if no strong character was found returns an empty string.
		// returns: String
		//		"ltr" - if the first strong character is Latin.
		//		"rtl" - if the first strong character is RTL directed character.
		//		"" - if the strong character wasn't found.
		// tags:
		//		private

		var fdc = /[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(text);
		// if found return the direction that defined by the character
		return fdc ? (fdc[0] <= "z" ? "ltr" : "rtl") : "";
	}

	function lastStrongDir(text) {
		// summary:
		//		Return the last strong character direction
		// text:
		//		The source string.
		// description:
		//		Searches for first (from the end) "strong" character.
		//		Returns if strong character was found with the direction defined by this
		//		character, if no strong character was found returns an empty string.
		// tags:
		//		private
		var chars = text.split("");
		chars.reverse();
		return firstStrongDir(chars.join(""));
	}

	function deshape(/*String*/text, /*boolean*/rtl, /*boolean*/consumeNextSpace) {
		// summary:
		//		deshape the source text.
		// text:
		//		the text to be deshape.
		// rtl:
		//		flag indicating if the text is in RTL direction (logical
		//		direction for Arabic words).
		// consumeNextSpace:
		//		flag indicating whether to consume the space next to the
		//		the lam alef if there is a space followed the Lamalef character to preserve the buffer size.
		//		In case there is no space next to the lam alef the buffer size will be increased due to the
		//		expansion of the lam alef one character into lam+alef two characters
		// returns:
		//		text deshaped.
		if (text.length === 0) {
			return;
		}
		if (consumeNextSpace === undefined) {
			consumeNextSpace = true;
		}
		if (rtl === undefined) {
			rtl = true;
		}
		text = String(text);

		var outBuf = "", strFE = [];
		strFE = text.split("");
		for (var i = 0; i < text.length; i++) {
			var increase = false;
			if (strFE[i] >= "\uFE70" && strFE[i] < "\uFEFF") {
				var chNum = text.charCodeAt(i);
				if (strFE[i] >= "\uFEF5" && strFE[i] <= "\uFEFC") {
					//expand the LamAlef
					if (rtl) {
						//Lam + Alef
						if (i > 0 && consumeNextSpace && strFE[i - 1] === " ") {
							outBuf = outBuf.substring(0, outBuf.length - 1) + "\u0644";
						} else {
							outBuf += "\u0644";
							increase = true;
						}
						outBuf += AlefTable[(chNum - 65269) / 2];
					} else {
						outBuf += AlefTable[(chNum - 65269) / 2];
						outBuf += "\u0644";
						if (i + 1 < text.length && consumeNextSpace && strFE[i + 1] === " ") {
							i++;
						} else {
							increase = true;
						}
					}
					if (increase) {
						updateMap(tsMap, i, true, 1);
						stMap.splice(i, 0, stMap[i]);
					}
				} else {
					outBuf += FETo06Table[chNum - 65136];
				}
			} else {
				outBuf += strFE[i];
			}
		}
		return outBuf;
	}

	function doReorder(str, bdx) {
		// summary:
		//		Helper to the doBidiReorder. Manages the UBA.
		// str:
		//		the string to reorder.
		// bdx: Object
		//		Used for intermediate data storage
		// returns:
		//		text reordered according to source and result attributes.
		// tags:
		//		private
		var chars = str.split(""), levels = [];

		computeLevels(chars, levels, bdx);
		swapChars(chars, levels, bdx);
		invertLevel(2, chars, levels, bdx);
		invertLevel(1, chars, levels, bdx);
		lvMap = levels;
		return chars.join("");
	}

	function computeLevels(chars, levels, bdx) {
		var len = chars.length,
			impTab = bdx.dir ? impTabRtl : impTabLtr,
			prevState = null, newClass = null, newLevel = null, newState = 0,
			action = null, cond = null, condPos = -1, i = null, ix = null,
			types = [],
			classes = [];
		bdx.hiLevel = bdx.dir;
		bdx.lastArabic = false;
		bdx.hasUbatAl = false;
		bdx.hasUbatB = false;
		bdx.hasUbatS = false;
		for (i = 0; i < len; i++) {
			types[i] = getCharacterType(chars[i]);
		}
		for (ix = 0; ix < len; ix++) {
			prevState = newState;
			classes[ix] = newClass = getCharClass(chars, types, classes, ix, bdx);
			newState = impTab[prevState][newClass];
			action = newState & 0xF0;
			newState &= 0x0F;
			levels[ix] = newLevel = impTab[newState][ITIL];
			if (action > 0) {
				if (action === 0x10) {	// set conditional run to level 1
					for (i = condPos; i < ix; i++) {
						levels[i] = 1;
					}
					condPos = -1;
				} else {	// 0x20 confirm the conditional run
					condPos = -1;
				}
			}
			cond = impTab[newState][ITCOND];
			if (cond) {
				if (condPos === -1) {
					condPos = ix;
				}
			} else {	// unconditional level
				if (condPos > -1) {
					for (i = condPos; i < ix; i++) {
						levels[i] = newLevel;
					}
					condPos = -1;
				}
			}
			if (types[ix] === UBAT_B) {
				levels[ix] = 0;
			}
			bdx.hiLevel |= newLevel;
		}
		if (bdx.hasUbatS) {
			handleUbatS(types, levels, len, bdx);
		}
	}

	function handleUbatS(types, levels, len, bdx) {
		for (var i = 0; i < len; i++) {
			if (types[i] === UBAT_S) {
				levels[i] = bdx.dir;
				for (var j = i - 1; j >= 0; j--) {
					if (types[j] === UBAT_WS) {
						levels[j] = bdx.dir;
					} else {
						break;
					}
				}
			}
		}
	}

	function swapChars(chars, levels, bdx) {
		// summary:
		//		Swap characters with symmetrical mirroring as all kinds of parenthesis.
		//		(When needed).
		// chars:
		//		The source string as Array of characters.
		// levels:
		//		An array (like hash) of flags for each character in the source string,
		//		that defines if swapping should be applied on the following character.
		// bdx: Object
		//		Used for intermediate data storage
		// tags:
		//		private

		if (bdx.hiLevel === 0 || bdx.swap.substr(0, 1) === bdx.swap.substr(1, 2)) {
			return;
		}
		for (var i = 0; i < chars.length; i++) {
			if (levels[i] === 1) {
				chars[i] = getMirror(chars[i]);
			}
		}
	}

	function getCharacterType(ch) {
		// summary:
		//		Return the type of the character.
		// ch:
		//		The character to be checked.

		// description:
		//		Check the type of the character according to MasterTable,
		//		type = LTR, RTL, neutral,Arabic-Indic digit etc.
		// tags:
		//		private
		var uc = ch.charCodeAt(0),
			hi = MasterTable[uc >> 8];
		return (hi < TBBASE) ? hi : UnicodeTable[hi - TBBASE][uc & 0xFF];
	}

	function invertStr(str, bdx) {
		// summary:
		//		Return the reversed string.
		// str:
		//		The string to be reversed.
		// description:
		//		Reverse the string str.
		// tags:
		//		private
		var chars = str.split("");
		if (bdx) {
			var levels = [];
			computeLevels(chars, levels, bdx);
			lvMap = levels;
		}
		chars.reverse();
		stMap.reverse();
		return chars.join("");
	}

	function indexOf(cArray, cLength, idx) {
		for (var i = 0; i < cLength; i++) {
			if (cArray[i] === idx) {
				return i;
			}
		}
		return -1;
	}

	function isArabicAlefbet(c) {
		for (var i = 0; i < ArabicAlefBetIntervalsBegine.length; i++) {
			if (c >= ArabicAlefBetIntervalsBegine[i] && c <= ArabicAlefBetIntervalsEnd[i]) {
				return true;
			}
		}
		return false;
	}

	function isNextArabic(str06, index, step, nIEnd) {
		while (((index) * step) < nIEnd && isArabicDiacritics(str06[index])) {
			index += step;
		}
		if (((index) * step) < nIEnd && isArabicAlefbet(str06[index])) {
			return true;
		}
		return false;
	}

	function isNextAlef(str06, index, step, nIEnd) {
		while (((index) * step) < nIEnd && isArabicDiacritics(str06[index])) {
			index += step;
		}
		var c = " ";
		if (((index) * step) < nIEnd) {
			c = str06[index];
		} else {
			return false;
		}
		for (var i = 0; i < AlefTable.length; i++) {
			if (AlefTable[i] === c) {
				return true;
			}
		}
		return false;
	}

	function invertLevel(lev, chars, levels, bdx) {
		if (bdx.hiLevel < lev) {
			return;
		}
		if (lev === 1 && bdx.dir === RTL && !bdx.hasUbatB) {
			chars.reverse();
			stMap.reverse();
			return;
		}
		var len = chars.length, start = 0, end, lo, hi, tmp;
		while (start < len) {
			if (levels[start] >= lev) {
				end = start + 1;
				while (end < len && levels[end] >= lev) {
					end++;
				}
				for (lo = start, hi = end - 1 ; lo < hi; lo++, hi--) {
					tmp = chars[lo];
					chars[lo] = chars[hi];
					chars[hi] = tmp;
					tmp = stMap[lo];
					stMap[lo] = stMap[hi];
					stMap[hi] = tmp;
				}
				start = end;
			}
			start++;
		}
	}

	function getCharClass(chars, types, classes, ix, bdx) {
		// summary:
		//		Return the class if ix character in chars.
		// chars:
		//		The source string as Array of characters.
		// types:
		//		Array of types, for each character in chars.
		// classes:
		//		Array of classes that already been solved.
		// ix:
		//		the index of checked character.
		// bdx: Object
		//		Used for intermediate data storage
		// tags:
		//		private
		var cType = types[ix],
			results = {
				UBAT_L : function () { bdx.lastArabic = false; return UBAT_L; },
				UBAT_R : function () { bdx.lastArabic = false; return UBAT_R; },
				UBAT_ON : function () { return UBAT_ON; },
				UBAT_AN : function () { return UBAT_AN; },
				UBAT_EN : function () { return bdx.lastArabic ? UBAT_AN : UBAT_EN; },
				UBAT_AL : function () { bdx.lastArabic = true; bdx.hasUbatAl = true; return UBAT_R; },
				UBAT_WS : function () { return UBAT_ON; },
				UBAT_CS : function () {
										var wType, nType;
										if (ix < 1 || (ix + 1) >= types.length ||
											((wType = classes[ix - 1]) !== UBAT_EN && wType !== UBAT_AN) ||
											((nType = types[ix + 1]) !== UBAT_EN && nType !== UBAT_AN)) {
											return UBAT_ON;
										}
										if (bdx.lastArabic) {
											nType = UBAT_AN;
										}
										return nType === wType ? nType : UBAT_ON;
									},
				UBAT_ES : function () {
										var wType = ix > 0 ? classes[ix - 1] : UBAT_B;
										if (wType === UBAT_EN && (ix + 1) < types.length && types[ix + 1] === UBAT_EN) {
											return UBAT_EN;
										}
										return UBAT_ON;
									},
				UBAT_ET : function () {
										if (ix > 0 && classes[ix - 1] === UBAT_EN) {
											return UBAT_EN;
										}
										if (bdx.lastArabic) {
											return UBAT_ON;
										}
										var i = ix + 1,
											len = types.length;
										while (i < len && types[i] === UBAT_ET) {
											i++;
										}
										if (i < len && types[i] === UBAT_EN) {
											return UBAT_EN;
										}
										return UBAT_ON;
									},
				UBAT_NSM : function () {
										if (bdx.inFormat === "VLTR") {	// visual to implicit transformation
											var len = types.length,
												i = ix + 1;
											while (i < len && types[i] === UBAT_NSM) {
												i++;
											}
											if (i < len) {
												var c = chars[ix],
													rtlCandidate = (c >= 0x0591 && c <= 0x08FF) || c === 0xFB1E,
													wType = types[i];
												if (rtlCandidate && (wType === UBAT_R || wType === UBAT_AL)) {
													return UBAT_R;
												}
											}
										}
										if (ix < 1 || types[ix - 1] === UBAT_B) {
											return UBAT_ON;
										}
										return classes[ix - 1];
									},
				UBAT_B : function () { bdx.lastArabic = true; bdx.hasUbatB = true; return bdx.dir; },
				UBAT_S : function () { bdx.hasUbatS = true; return UBAT_ON; },
				UBAT_LRE : function () { bdx.lastArabic = false; return UBAT_ON; },
				UBAT_RLE : function () { bdx.lastArabic = false; return UBAT_ON; },
				UBAT_LRO : function () { bdx.lastArabic = false; return UBAT_ON; },
				UBAT_RLO : function () { bdx.lastArabic = false; return UBAT_ON; },
				UBAT_PDF : function () { bdx.lastArabic = false; return UBAT_ON; },
				UBAT_BN : function () { return UBAT_ON; }
			};
		return results[TYPES_NAMES[cType]]();
	}

	function getMirror(c) {
		// summary:
		//		Calculates the mirrored character of c
		// c:
		//		The character to be mirrored.
		// tags:
		//		private
		var mid, low = 0, high = SwapTable.length - 1;

		while (low <= high) {
			mid = Math.floor((low + high) / 2);
			if (c < SwapTable[mid][0]) {
				high = mid - 1;
			} else if (c > SwapTable[mid][0]) {
				low = mid + 1;
			} else {
				return SwapTable[mid][1];
			}
		}
		return c;
	}

	function isStandAlonCharacter(c) {
		for (var i = 0; i < StandAlonForm.length; i++) {
			if (StandAlonForm[i] === c) {
				return true;
			}
		}
		return false;
	}

	function getMedialFormCharacterFE(c) {
		for (var i = 0; i < BaseForm.length; i++) {
			if (c === BaseForm[i]) {
				return MedialForm[i];
			}
		}
		return c;
	}

	function getFormCharacterFE(/*char*/ c, /*char[]*/formArr) {
		for (var i = 0; i < BaseForm.length; i++) {
			if (c === BaseForm[i]) {
				return formArr[i];
			}
		}
		return c;
	}

	function isArabicDiacritics(c) {
		return	(c >= "\u064b" && c <= "\u0655") ? true : false;
	}

	function getOrientation(/*Char*/ oc) {
		if (oc === "L") {
			return "LTR";
		}
		if (oc === "R") {
			return "RTL";
		}
		if (oc === "C") {
			return "CLR";
		}
		if (oc === "D") {
			return "CRL";
		}
	}

	function setAlefToSpace(str06, index, step, nIEnd) {
		while (((index) * step) < nIEnd && isArabicDiacritics(str06[index])) {
			index += step;
		}
		if (((index) * step) < nIEnd) {
			str06[index] = " ";
			return true;
		}
		return false;
	}

	function getLamAlefFE(alef06, LamAlefForm) {
		for (var i = 0; i < AlefTable.length; i++) {
			if (alef06 === AlefTable[i]) {
				return LamAlefForm[i];
			}
		}
		return alef06;
	}

	function initMaps(map1, map2, length) {
		stMap = [];
		lvMap = [];
		for (var i = 0; i < length; i++) {
			map1[i] = i;
			map2[i] = i;
			stMap[i] = i;
		}
	}

	function reverseMap(sourceMap) {
		var map = new Array(sourceMap.length);
		for (var i = 0; i < sourceMap.length; i++) {
			map[sourceMap[i]] = i;
		}
		return map;
	}

	function updateMap(map, value, isGreater, update) {
		for (var i = 0; i < map.length; i++) {
			if (map[i] > value || (!isGreater && map[i] === value)) {
				map[i] += update;
			}
		}
	}

	var stMap = [];
	var tsMap = [];
	var lvMap = [];

	var	BDX = {
			dir: 0,
			defInFormat: "LLTR",
			defoutFormat: "VLTR",
			defSwap: "YN",
			inFormat: "LLTR",
			outFormat: "VLTR",
			swap: "YN",
			hiLevel: 0,
			lastArabic: false,
			hasUbatAl: false,
			hasBlockSep: false,
			hasSegSep: false
		};

	var ITIL = 5;

	var ITCOND = 6;

	var LTR = 0;

	var RTL = 1;

	var validFormat = /^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/;

	var bidiChars = /[\u0591-\u06ff\ufb1d-\ufefc]/;

	/****************************************************************************/
	/* Array in which directional characters are replaced by their symmetric.	*/
	/****************************************************************************/
	var SwapTable = [
		[ "\u0028", "\u0029" ],	/* Round brackets					*/
		[ "\u0029", "\u0028" ],
		[ "\u003C", "\u003E" ],	/* Less than/greater than			*/
		[ "\u003E", "\u003C" ],
		[ "\u005B", "\u005D" ],	/* Square brackets					*/
		[ "\u005D", "\u005B" ],
		[ "\u007B", "\u007D" ],	/* Curly brackets					*/
		[ "\u007D", "\u007B" ],
		[ "\u00AB", "\u00BB" ],	/* Double angle quotation marks		*/
		[ "\u00BB", "\u00AB" ],
		[ "\u2039", "\u203A" ],	/* single angle quotation mark		*/
		[ "\u203A", "\u2039" ],
		[ "\u207D", "\u207E" ],	/* Superscript parentheses			*/
		[ "\u207E", "\u207D" ],
		[ "\u208D", "\u208E" ],	/* Subscript parentheses			*/
		[ "\u208E", "\u208D" ],
		[ "\u2264", "\u2265" ],	/* Less/greater than or equal		*/
		[ "\u2265", "\u2264" ],
		[ "\u2329", "\u232A" ],	/* Angle brackets					*/
		[ "\u232A", "\u2329" ],
		[ "\uFE59", "\uFE5A" ],	/* Small round brackets				*/
		[ "\uFE5A", "\uFE59" ],
		[ "\uFE5B", "\uFE5C" ],	/* Small curly brackets				*/
		[ "\uFE5C", "\uFE5B" ],
		[ "\uFE5D", "\uFE5E" ],	/* Small tortoise shell brackets	*/
		[ "\uFE5E", "\uFE5D" ],
		[ "\uFE64", "\uFE65" ],	/* Small less than/greater than		*/
		[ "\uFE65", "\uFE64" ]
	];
	var AlefTable = ["\u0622", "\u0623", "\u0625", "\u0627"];

	var LamAlefInialTableFE = ["\ufef5", "\ufef7", "\ufef9", "\ufefb"];

	var LamAlefMedialTableFE = ["\ufef6", "\ufef8", "\ufefa", "\ufefc"];
	/**
	 * Arabic Characters in the base form
	 */
	var BaseForm = ["\u0627", "\u0628", "\u062A", "\u062B", "\u062C", "\u062D", "\u062E", "\u062F", "\u0630", "\u0631",
                    "\u0632", "\u0633", "\u0634", "\u0635", "\u0636", "\u0637", "\u0638", "\u0639", "\u063A", "\u0641",
                    "\u0642", "\u0643", "\u0644", "\u0645", "\u0646", "\u0647", "\u0648", "\u064A", "\u0625", "\u0623",
                    "\u0622", "\u0629", "\u0649", "\u0644", "\u0645", "\u0646", "\u0647", "\u0648", "\u064A", "\u0625",
                    "\u0623", "\u0622", "\u0629", "\u0649", "\u06CC", "\u0626", "\u0624"];

	/**
	 * Arabic shaped characters in Isolated form
	 */
	var IsolatedForm = ["\uFE8D", "\uFE8F", "\uFE95", "\uFE99", "\uFE9D", "\uFEA1", "\uFEA5", "\uFEA9", "\uFEAB",
                        "\uFEAD", "\uFEAF", "\uFEB1", "\uFEB5", "\uFEB9", "\uFEBD", "\uFEC1", "\uFEC5", "\uFEC9",
                        "\uFECD", "\uFED1", "\uFED5", "\uFED9", "\uFEDD", "\uFEE1", "\uFEE5", "\uFEE9", "\uFEED",
                        "\uFEF1", "\uFE87", "\uFE83", "\uFE81", "\uFE93", "\uFEEF", "\uFBFC", "\uFE89", "\uFE85",
                        "\uFE70", "\uFE72", "\uFE74", "\uFE76", "\uFE78", "\uFE7A", "\uFE7C", "\uFE7E", "\uFE80",
                        "\uFE89", "\uFE85"];

	/**
	 * Arabic shaped characters in Final form
	 */
	var FinalForm = ["\uFE8E", "\uFE90", "\uFE96", "\uFE9A", "\uFE9E", "\uFEA2", "\uFEA6", "\uFEAA", "\uFEAC", "\uFEAE",
                     "\uFEB0", "\uFEB2", "\uFEB6", "\uFEBA", "\uFEBE", "\uFEC2", "\uFEC6", "\uFECA", "\uFECE", "\uFED2",
                     "\uFED6", "\uFEDA", "\uFEDE", "\uFEE2", "\uFEE6", "\uFEEA", "\uFEEE", "\uFEF2", "\uFE88", "\uFE84",
                     "\uFE82", "\uFE94", "\uFEF0", "\uFBFD", "\uFE8A", "\uFE86", "\uFE70", "\uFE72", "\uFE74", "\uFE76",
                     "\uFE78", "\uFE7A", "\uFE7C", "\uFE7E", "\uFE80", "\uFE8A", "\uFE86"];

	/**
	 * Arabic shaped characters in Media form
	 */
	var MedialForm = ["\uFE8E", "\uFE92", "\uFE98", "\uFE9C", "\uFEA0", "\uFEA4", "\uFEA8", "\uFEAA", "\uFEAC",
                      "\uFEAE", "\uFEB0", "\uFEB4", "\uFEB8", "\uFEBC", "\uFEC0", "\uFEC4", "\uFEC8", "\uFECC",
                      "\uFED0", "\uFED4", "\uFED8", "\uFEDC", "\uFEE0", "\uFEE4", "\uFEE8", "\uFEEC", "\uFEEE",
                      "\uFEF4", "\uFE88", "\uFE84", "\uFE82", "\uFE94", "\uFEF0", "\uFBFF", "\uFE8C", "\uFE86",
                      "\uFE71", "\uFE72", "\uFE74", "\uFE77", "\uFE79", "\uFE7B", "\uFE7D", "\uFE7F", "\uFE80",
                      "\uFE8C", "\uFE86"];

	/**
	 * Arabic shaped characters in Initial form
	 */
	var InitialForm = ["\uFE8D", "\uFE91", "\uFE97", "\uFE9B", "\uFE9F", "\uFEA3", "\uFEA7", "\uFEA9", "\uFEAB",
                       "\uFEAD", "\uFEAF", "\uFEB3", "\uFEB7", "\uFEBB", "\uFEBF", "\uFEC3", "\uFEC7", "\uFECB",
                       "\uFECF", "\uFED3", "\uFED7", "\uFEDB", "\uFEDF", "\uFEE3", "\uFEE7", "\uFEEB", "\uFEED",
                       "\uFEF3", "\uFE87", "\uFE83", "\uFE81", "\uFE93", "\uFEEF", "\uFBFE", "\uFE8B", "\uFE85",
                       "\uFE70", "\uFE72", "\uFE74", "\uFE76", "\uFE78", "\uFE7A", "\uFE7C", "\uFE7E", "\uFE80",
                       "\uFE8B", "\uFE85"];

	/**
	 * Arabic characters that couldn't join to the next character
	 */
	var StandAlonForm = ["\u0621", "\u0622", "\u0623", "\u0624", "\u0625", "\u0627", "\u0629", "\u062F", "\u0630",
                         "\u0631", "\u0632", "\u0648", "\u0649"];

	var FETo06Table = ["\u064B", "\u064B", "\u064C", "\u061F", "\u064D", "\u061F", "\u064E", "\u064E", "\u064F",
                       "\u064F", "\u0650", "\u0650", "\u0651", "\u0651", "\u0652", "\u0652", "\u0621", "\u0622",
                       "\u0622", "\u0623", "\u0623", "\u0624", "\u0624", "\u0625", "\u0625", "\u0626", "\u0626",
                       "\u0626", "\u0626", "\u0627", "\u0627", "\u0628", "\u0628", "\u0628", "\u0628", "\u0629",
                       "\u0629", "\u062A", "\u062A", "\u062A", "\u062A", "\u062B", "\u062B", "\u062B", "\u062B",
                       "\u062C", "\u062C", "\u062C", "\u062c", "\u062D", "\u062D", "\u062D", "\u062D", "\u062E",
                       "\u062E", "\u062E", "\u062E", "\u062F", "\u062F", "\u0630", "\u0630", "\u0631", "\u0631",
                       "\u0632", "\u0632", "\u0633", "\u0633", "\u0633", "\u0633", "\u0634", "\u0634", "\u0634",
                       "\u0634", "\u0635", "\u0635", "\u0635", "\u0635", "\u0636", "\u0636", "\u0636", "\u0636",
                       "\u0637", "\u0637", "\u0637", "\u0637", "\u0638", "\u0638", "\u0638", "\u0638", "\u0639",
                       "\u0639", "\u0639", "\u0639", "\u063A", "\u063A", "\u063A", "\u063A", "\u0641", "\u0641",
                       "\u0641", "\u0641", "\u0642", "\u0642", "\u0642", "\u0642", "\u0643", "\u0643", "\u0643",
                       "\u0643", "\u0644", "\u0644", "\u0644", "\u0644", "\u0645", "\u0645", "\u0645", "\u0645",
                       "\u0646", "\u0646", "\u0646", "\u0646", "\u0647", "\u0647", "\u0647", "\u0647", "\u0648",
                       "\u0648", "\u0649", "\u0649", "\u064A", "\u064A", "\u064A", "\u064A", "\uFEF5", "\uFEF6",
                       "\uFEF7", "\uFEF8", "\uFEF9", "\uFEFA", "\uFEFB", "\uFEFC", "\u061F", "\u061F", "\u061F"];

	var ArabicAlefBetIntervalsBegine = ["\u0621", "\u0641"];

	var ArabicAlefBetIntervalsEnd = ["\u063A", "\u064a"];

	var	impTabLtr = [
	/*		L,		R,		EN,		AN,		N,		IL,		Cond */
		[	0,		3,		0,		1,		0,		0,		0	], /* 0 LTR text	*/
		[	0,		3,		0,		1,		2,		2,		0	], /* 1 LTR+AN		*/
		[	0,		3,		0,		0x11,	2,		0,		1	], /* 2 LTR+AN+N	*/
		[	0,		3,		5,		5,		4,		1,		0	], /* 3 RTL text	*/
		[	0,		3,		0x15,	0x15,	4,		0,		1	], /* 4 RTL cont	*/
		[	0,		3,		5,		5,		4,		2,		0	]  /* 5 RTL+EN/AN	*/
	];
	var impTabRtl = [
	/*		L,		R,		EN,		AN,		N,		IL,		Cond */
		[	2,		0,		1,		1,		0,		1,		0	], /* 0 RTL text	*/
		[	2,		0,		1,		1,		0,		2,		0	], /* 1 RTL+EN/AN	*/
		[	2,		0,		2,		1,		3,		2,		0	], /* 2 LTR text	*/
		[	2,		0,		2,		0x21,	3,		1,		1	]  /* 3 LTR+cont	*/
	];

	var UBAT_L	= 0; /* left to right				*/
	var UBAT_R	= 1; /* right to left				*/
	var UBAT_EN = 2; /* European digit				*/
	var UBAT_AN = 3; /* Arabic-Indic digit			*/
	var UBAT_ON = 4; /* neutral						*/
	var UBAT_B	= 5; /* block separator				*/
	var UBAT_S	= 6; /* segment separator			*/
	var UBAT_AL = 7; /* Arabic Letter				*/
	var UBAT_WS = 8; /* white space					*/
	var UBAT_CS = 9; /* common digit separator		*/
	var UBAT_ES = 10; /* European digit separator	*/
	var UBAT_ET = 11; /* European digit terminator	*/
	var UBAT_NSM = 12; /* Non Spacing Mark			*/
	var UBAT_LRE = 13; /* LRE						*/
	var UBAT_RLE = 14; /* RLE						*/
	var UBAT_PDF = 15; /* PDF						*/
	var UBAT_LRO = 16; /* LRO						*/
	var UBAT_RLO = 17; /* RLO						*/
	var UBAT_BN	= 18; /* Boundary Neutral			*/

	var TYPES_NAMES = [ "UBAT_L", "UBAT_R", "UBAT_EN", "UBAT_AN", "UBAT_ON", "UBAT_B", "UBAT_S", "UBAT_AL", "UBAT_WS",
						"UBAT_CS", "UBAT_ES", "UBAT_ET", "UBAT_NSM", "UBAT_LRE", "UBAT_RLE", "UBAT_PDF", "UBAT_LRO",
						"UBAT_RLO", "UBAT_BN" ];
	var TBBASE = 100;

	var TB00 = TBBASE + 0;
	var TB05 = TBBASE + 1;
	var TB06 = TBBASE + 2;
	var TB07 = TBBASE + 3;
	var TB20 = TBBASE + 4;
	var TBFB = TBBASE + 5;
	var TBFE = TBBASE + 6;
	var TBFF = TBBASE + 7;

	var L	= UBAT_L;
	var R	= UBAT_R;
	var EN	= UBAT_EN;
	var AN	= UBAT_AN;
	var ON	= UBAT_ON;
	var B	= UBAT_B;
	var S	= UBAT_S;
	var AL	= UBAT_AL;
	var WS	= UBAT_WS;
	var CS	= UBAT_CS;
	var ES	= UBAT_ES;
	var ET	= UBAT_ET;
	var NSM	= UBAT_NSM;
	var LRE	= UBAT_LRE;
	var RLE	= UBAT_RLE;
	var PDF	= UBAT_PDF;
	var LRO	= UBAT_LRO;
	var RLO	= UBAT_RLO;
	var BN	= UBAT_BN;

	var MasterTable = [
 /*******************************************************************************************************/
 /*     0     1     2     3     4     5     6     7     8     9     A     B     C     D     E     F     */
 /*******************************************************************************************************/
 /*0-*/ TB00, L,    L,    L,    L,    TB05, TB06, TB07, R,    L,    L,    L,    L,    L,    L,    L,
 /*1-*/ L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,
 /*2-*/ TB20, ON,   ON,   ON,   L,    ON,   L,    ON,   L,    ON,   ON,   ON,   L,    L,    ON,   ON,
 /*3-*/ L,    L,    L,    L,    L,    ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*4-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   L,    L,    ON,
 /*5-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*6-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*7-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*8-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*9-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   L,
 /*A-*/ L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    ON,   ON,   ON,
 /*B-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*C-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*D-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   L,    L,    ON,   ON,   L,    L,    ON,   ON,   L,
 /*E-*/ L,    ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*F-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   L,    L,    L,    TBFB, AL,   AL,   TBFE, TBFF
	];

	var UnicodeTable = [
        [ /*	Table 00: Unicode 00xx */
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  S,   B,   S,   WS,  B,   BN,  BN,
    /*1-*/  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  B,   B,   B,   S,
    /*2-*/  WS,  ON,  ON,  ET,  ET,  ET,  ON,  ON,  ON,  ON,  ON,  ES,  CS,  ES,  CS,  CS,
    /*3-*/  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  CS,  ON,  ON,  ON,  ON,  ON,
    /*4-*/  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*5-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  ON,
    /*6-*/  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*7-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  BN,
    /*8-*/  BN,  BN,  BN,  BN,  BN,  B,   BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,
    /*9-*/  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,
    /*A-*/  CS,  ON,  ET,  ET,  ET,  ET,  ON,  ON,  ON,  ON,  L,   ON,  ON,  BN,  ON,  ON,
    /*B-*/  ET,  ET,  EN,  EN,  ON,  L,   ON,  ON,  ON,  EN,  L,   ON,  ON,  ON,  ON,  ON,
    /*C-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*D-*/  L,   L,   L,   L,   L,   L,   L,   ON,  L,   L,   L,   L,   L,   L,   L,   L,
    /*E-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*F-*/  L,   L,   L,   L,   L,   L,   L,   ON,  L,   L,   L,   L,   L,   L,   L,   L
		],
		[ /*	Table 01: Unicode 05xx */
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*1-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*2-*/  L,   L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*3-*/  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*4-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*5-*/  L,   L,   L,   L,   L,   L,   L,   ON,  ON,  L,   L,   L,   L,   L,   L,   L,
    /*6-*/  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*7-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*8-*/  L,   L,   L,   L,   L,   L,   L,   L,   ON,  L,   ON,  ON,  ON,  ON,  ON,  ON,
    /*9-*/  ON,  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*A-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*B-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, R,   NSM,
    /*C-*/  R,   NSM, NSM, R,   NSM, NSM, R,   NSM, ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*D-*/  R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,
    /*E-*/  R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   ON,  ON,  ON,  ON,  ON,
    /*F-*/  R,   R,   R,   R,   R,   ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON
		],
		[ /*	Table 02: Unicode 06xx */
    /****************************************************************************************/
	/*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
	/****************************************************************************************/
    /*0-*/  AN,  AN,  AN,  AN,  ON,  ON,  ON,  ON,  AL,  ET,  ET,  AL,  CS,  AL,  ON,  ON,
    /*1-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, AL,  ON,  ON,  AL,  AL,
    /*2-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*3-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*4-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  NSM, NSM, NSM, NSM, NSM,
    /*5-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*6-*/  AN,  AN,  AN,  AN,  AN,  AN,  AN,  AN,  AN,  AN,  ET,  AN,  AN,  AL,  AL,  AL,
    /*7-*/  NSM, AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*8-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*9-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*A-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*B-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*C-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*D-*/  AL,  AL,  AL,  AL,  AL,  AL,  NSM, NSM, NSM, NSM, NSM, NSM, NSM, AN,  ON,  NSM,
    /*E-*/  NSM, NSM, NSM, NSM, NSM, AL,  AL,  NSM, NSM, ON,  NSM, NSM, NSM, NSM, AL,  AL,
    /*F-*/  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  AL,  AL,  AL,  AL,  AL,  AL
		],
		[	/*	Table	03:	Unicode	07xx	*/
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  ON,  AL,
    /*1-*/  AL,  NSM, AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*2-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*3-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*4-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, ON,  ON,  AL,  AL,  AL,
    /*5-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*6-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*7-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*8-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*9-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*A-*/  AL,  AL,  AL,  AL,  AL,  AL,  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*B-*/  NSM, AL,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*C-*/  R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,
    /*D-*/  R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,
    /*E-*/  R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   NSM, NSM, NSM, NSM, NSM,
    /*F-*/  NSM, NSM, NSM, NSM, R,   R,   ON,  ON,  ON,  ON,  R,   ON,  ON,  ON,  ON,  ON
		],
		[	/*	Table	04:	Unicode	20xx	*/
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  WS,  WS,  WS,  WS,  WS,  WS,  WS,  WS,  WS,  WS,  WS,  BN,  BN,  BN,  L,   R,
    /*1-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*2-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  WS,  B,   LRE, RLE, PDF, LRO, RLO, CS,
    /*3-*/  ET,  ET,  ET,  ET,  ET,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*4-*/  ON,  ON,  ON,  ON,  CS,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*5-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  WS,
    /*6-*/  BN,  BN,  BN,  BN,  BN,  ON,  ON,  ON,  ON,  ON,  BN,  BN,  BN,  BN,  BN,  BN,
    /*7-*/  EN,  L,   ON,  ON,  EN,  EN,  EN,  EN,  EN,  EN,  ES,  ES,  ON,  ON,  ON,  L,
    /*8-*/  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  ES,  ES,  ON,  ON,  ON,  ON,
    /*9-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,
    /*A-*/  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,
    /*B-*/  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ON,  ON,  ON,  ON,  ON,  ON,
    /*C-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*D-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*E-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*F-*/  NSM, ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON
		],
		[	/*	Table	05:	Unicode	FBxx	*/
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*1-*/  ON,  ON,  ON,  L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  ON,  R,   NSM, R,
    /*2-*/  R,   R,   R,   R,   R,   R,   R,   R,   R,   ES,  R,   R,   R,   R,   R,   R,
    /*3-*/  R,   R,   R,   R,   R,   R,   R,   ON,  R,   R,   R,   R,   R,   ON,  R,   ON,
    /*4-*/  R,   R,   ON,  R,   R,   ON,  R,   R,   R,   R,   R,   R,   R,   R,   R,   R,
    /*5-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*6-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*7-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*8-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*9-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*A-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*B-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*C-*/  AL,  AL,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*D-*/  ON,  ON,  ON,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*E-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*F-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL
		],
		[	/*	Table	06:	Unicode	FExx	*/
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*1-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*2-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*3-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*4-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*5-*/  CS,  ON,  CS,  ON,  ON,  CS,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ET,
    /*6-*/  ON,  ON,  ES,  ES,  ON,  ON,  ON,  ON,  ON,  ET,  ET,  ON,  ON,  ON,  ON,  ON,
    /*7-*/  AL,  AL,  AL,  AL,  AL,  ON,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*8-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*9-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*A-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*B-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*C-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*D-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*E-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*F-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  ON,  ON,  BN
		],
		[	/*	Table	07:	Unicode	FFxx	*/
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  ON,  ON,  ON,  ET,  ET,  ET,  ON,  ON,  ON,  ON,  ON,  ES,  CS,  ES,  CS,  CS,
    /*1-*/  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  CS,  ON,  ON,  ON,  ON,  ON,
    /*2-*/  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*3-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  ON,
    /*4-*/  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*5-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  ON,
    /*6-*/  ON,  ON,  ON,  ON,  ON,  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*7-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*8-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*9-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*A-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*B-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   ON,
    /*C-*/  ON,  ON,  L,   L,   L,   L,   L,   L,   ON,  ON,  L,   L,   L,   L,   L,   L,
    /*D-*/  ON,  ON,  L,   L,   L,   L,   L,   L,   ON,  ON,  L,   L,   L,   ON,  ON,  ON,
    /*E-*/  ET,  ET,  ON,  ON,  ON,  ET,  ET,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*F-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON
		]
	];

	return BidiEngine;
});

},
'esri/views/vectorTiles/TileClipper':function(){
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

define(["require","exports","./Geometry","./GeometryUtils"],function(i,t,s,h){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function i(i,t,s){this.ratio=i,this.x=t,this.y=s}return i}(),e=function(){function i(i,t,s){this.dz=i,this.yPos=t,this.xPos=s}return i.prototype.setExtent=function(i){this.finalRatio=4096/i*(1<<this.dz);var t=64;t/=this.finalRatio;var s=i>>this.dz;t>s&&(t=s),this.margin=t,this.xmin=s*this.xPos-t,this.ymin=s*this.yPos-t,this.xmax=this.xmin+s+2*t,this.ymax=this.ymin+s+2*t},i.prototype.reset=function(i){this.type=i,this._prevIsIn=!1,this.lines=[],this.line=null},i.prototype.moveTo=function(i,t){this._pushLine(),this._prevIsIn=this._isIn(i,t),this._moveTo(i,t,this._prevIsIn),this._prevPt=new s.Point(i,t),this._firstPt=new s.Point(i,t)},i.prototype.lineTo=function(i,t){var h,e,x,y,a,l,o,r,u=this._isIn(i,t);if(u)this._prevIsIn?this._lineTo(i,t,!0):(h=this._prevPt,e=new s.Point(i,t),x=this._intersect(e,h),this._lineTo(x.x,x.y,!0),this._lineTo(e.x,e.y,!0));else if(this._prevIsIn)e=this._prevPt,h=new s.Point(i,t),x=this._intersect(e,h),this._lineTo(x.x,x.y,!0),this._lineTo(h.x,h.y,!1);else{var p=this._prevPt,m=new s.Point(i,t);if(p.x<=this.xmin&&m.x<=this.xmin||p.x>=this.xmax&&m.x>=this.xmax||p.y<=this.ymin&&m.y<=this.ymin||p.y>=this.ymax&&m.y>=this.ymax)this._lineTo(m.x,m.y,!1);else{var f=[];if((p.x<this.xmin&&m.x>this.xmin||p.x>this.xmin&&m.x<this.xmin)&&(y=(this.xmin-p.x)/(m.x-p.x),r=p.y+y*(m.y-p.y),r<=this.ymin?l=!1:r>=this.ymax?l=!0:f.push(new n(y,this.xmin,r))),(p.x<this.xmax&&m.x>this.xmax||p.x>this.xmax&&m.x<this.xmax)&&(y=(this.xmax-p.x)/(m.x-p.x),r=p.y+y*(m.y-p.y),r<=this.ymin?l=!1:r>=this.ymax?l=!0:f.push(new n(y,this.xmax,r))),(p.y<this.ymin&&m.y>this.ymin||p.y>this.ymin&&m.y<this.ymin)&&(y=(this.ymin-p.y)/(m.y-p.y),o=p.x+y*(m.x-p.x),o<=this.xmin?a=!1:o>=this.xmax?a=!0:f.push(new n(y,o,this.ymin))),(p.y<this.ymax&&m.y>this.ymax||p.y>this.ymax&&m.y<this.ymax)&&(y=(this.ymax-p.y)/(m.y-p.y),o=p.x+y*(m.x-p.x),o<=this.xmin?a=!1:o>=this.xmax?a=!0:f.push(new n(y,o,this.ymax))),0===f.length)a?l?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):l?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(f.length>1&&f[0].ratio>f[1].ratio)this._lineTo(f[1].x,f[1].y,!0),this._lineTo(f[0].x,f[0].y,!0);else for(var _=0;_<f.length;_++)this._lineTo(f[_].x,f[_].y,!0);this._lineTo(m.x,m.y,!1)}}this._prevIsIn=u,this._prevPt=new s.Point(i,t)},i.prototype.close=function(){var i,t;if(this.line.length>0){i=this._firstPt,t=this._prevPt,(i.x!==t.x||i.y!==t.y)&&this.lineTo(i.x,i.y);var s=this.line,h=s.length;h>=4&&(s[0].x===s[1].x&&s[0].x===s[h-2].x||s[0].y===s[1].y&&s[0].y===s[h-2].y)&&(s.pop(),s[0].x=s[h-2].x,s[0].y=s[h-2].y)}},i.prototype.result=function(){return this._pushLine(),0===this.lines.length?null:(3===this.type&&y.simplify(this.margin*this.finalRatio,this.lines),this.lines)},i.prototype._isIn=function(i,t){return i>=this.xmin&&i<=this.xmax&&t>=this.ymin&&t<=this.ymax},i.prototype._intersect=function(i,t){var h,n;if(t.x>=this.xmin&&t.x<=this.xmax)n=t.y<=this.ymin?this.ymin:this.ymax,h=i.x+(n-i.y)/(t.y-i.y)*(t.x-i.x);else if(t.y>=this.ymin&&t.y<=this.ymax)h=t.x<=this.xmin?this.xmin:this.xmax,n=i.y+(h-i.x)/(t.x-i.x)*(t.y-i.y);else{n=t.y<=this.ymin?this.ymin:this.ymax,h=t.x<=this.xmin?this.xmin:this.xmax;var e=(h-i.x)/(t.x-i.x),x=(n-i.y)/(t.y-i.y);x>e?n=i.y+e*(t.y-i.y):h=i.x+x*(t.x-i.x)}return new s.Point(h,n)},i.prototype._pushLine=function(){this.line&&(1===this.type?this.line.length>0&&this.lines.push(this.line):2===this.type?this.line.length>1&&this.lines.push(this.line):3===this.type&&this.line.length>3&&this.lines.push(this.line)),this.line=[]},i.prototype._moveTo=function(i,t,h){3!==this.type?h&&(i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new s.Point(i,t))):(h||(i<this.xmin&&(i=this.xmin),i>this.xmax&&(i=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new s.Point(i,t)),this._is_h=!1,this._is_v=!1)},i.prototype._lineTo=function(i,t,h){var n,e;if(3!==this.type)if(h){if(i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(n=this.line[this.line.length-1],n.equals(i,t)))return;this.line.push(new s.Point(i,t))}else this.line&&this.line.length>0&&this._pushLine();else if(h||(i<this.xmin&&(i=this.xmin),i>this.xmax&&(i=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){n=this.line[this.line.length-1];var x=n.x===i,y=n.y===t;if(x&&y)return;this._is_h&&x?(n.x=i,n.y=t,e=this.line[this.line.length-2],this._is_h=e.x===i,this._is_v=e.y===t):this._is_v&&y?(n.x=i,n.y=t,e=this.line[this.line.length-2],this._is_h=e.x===i,this._is_v=e.y===t):(this.line.push(new s.Point(i,t)),this._is_h=x,this._is_v=y)}else this.line.push(new s.Point(i,t))},i}();t.TileClipper=e;var x=function(){function i(){}return i.prototype.setExtent=function(i){this._ratio=4096===i?1:4096/i},i.prototype.reset=function(i){this.type=i,this.lines=[],this.line=null},i.prototype.moveTo=function(i,t){this.line&&this.lines.push(this.line),this.line=[];var h=this._ratio;this.line.push(new s.Point(Math.round(i*h),Math.round(t*h)))},i.prototype.lineTo=function(i,t){var h=this._ratio;this.line.push(new s.Point(Math.round(i*h),Math.round(t*h)))},i.prototype.close=function(){var i=this.line;i&&!i[0].isEqual(i[i.length-1])&&i.push(i[0])},i.prototype.result=function(){return this.line&&this.lines.push(this.line),0===this.lines.length?null:(3===this.type&&1!==this._ratio&&y.simplify(64,this.lines),this.lines)},i}();t.SimpleBuilder=x;var y=function(){function i(){}return i.simplify=function(t,s){if(s){for(var h=-t,n=4096+t,e=-t,x=4096+t,y=[],a=[],l=s.length,o=0;l>o;++o){var r=s[o];if(r&&!(r.length<2))for(var u=r[0],p=void 0,m=r.length,f=1;m>f;++f)p=r[f],u.x===p.x&&(u.x<=h&&(u.y>p.y?(y.push(o),y.push(f),y.push(0),y.push(-1)):(a.push(o),a.push(f),a.push(0),a.push(-1))),u.x>=n&&(u.y<p.y?(y.push(o),y.push(f),y.push(1),y.push(-1)):(a.push(o),a.push(f),a.push(1),a.push(-1)))),u.y===p.y&&(u.y<=e&&(u.x<p.x?(y.push(o),y.push(f),y.push(2),y.push(-1)):(a.push(o),a.push(f),a.push(2),a.push(-1))),u.y>=x&&(u.x>p.x?(y.push(o),y.push(f),y.push(3),y.push(-1)):(a.push(o),a.push(f),a.push(3),a.push(-1)))),u=p}if(0!==y.length&&0!==a.length){i.fillParent(s,a,y),i.fillParent(s,y,a);var _=[];i.calcDeltas(_,a,y),i.calcDeltas(_,y,a),i.addDeltas(_,s)}}},i.fillParent=function(i,t,s){for(var n=s.length,e=t.length,x=0;e>x;x+=4){for(var y=t[x],a=t[x+1],l=t[x+2],o=i[y][a-1],r=i[y][a],u=8092,p=-1,m=0;n>m;m+=4)if(s[m+2]===l){var f=s[m],_=s[m+1],v=i[f][_-1],c=i[f][_];switch(l){case 0:case 1:if(h.between(o.y,v.y,c.y)&&h.between(r.y,v.y,c.y)){var g=Math.abs(c.y-v.y);u>g&&(u=g,p=m)}break;case 2:case 3:if(h.between(o.x,v.x,c.x)&&h.between(r.x,v.x,c.x)){var g=Math.abs(c.x-v.x);u>g&&(u=g,p=m)}}}t[x+3]=p}},i.calcDeltas=function(t,s,h){for(var n=s.length,e=0;n>e;e+=4){var x=[],y=i.calcDelta(e,s,h,x);t.push(s[e]),t.push(s[e+1]),t.push(s[e+2]),t.push(y)}},i.calcDelta=function(t,s,h,n){var e=s[t+3];if(-1===e)return 0;var x=n.length;return x>1&&n[x-2]===e?0:(n.push(e),i.calcDelta(e,h,s,n)+1)},i.addDeltas=function(i,t){for(var s=i.length,h=0,n=0;s>n;n+=4){var e=i[n+3];e>h&&(h=e)}for(var n=0;s>n;n+=4){var x=t[i[n]],y=i[n+1],e=h-i[n+3];switch(i[n+2]){case 0:x[y-1].x-=e,x[y].x-=e;break;case 1:x[y-1].x+=e,x[y].x+=e;break;case 2:x[y-1].y-=e,x[y].y-=e;break;case 3:x[y-1].y+=e,x[y].y+=e}}for(var a=t.length,l=0;a>l;++l){var x=t[l];!x||x.length<2||x[x.length-1].x!==x[0].x&&x[x.length-1].y!==x[0].y&&x.push(x[0])}},i}()});
},
'esri/views/vectorTiles/style/StyleRepository':function(){
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

define(["require","exports","./StyleLayer","dojo/has"],function(e,r,t,i){var a=function(){function e(r,t){if(this.styleJSON=r,this.version=parseFloat(r.version),this.sprite=t?t.spriteUrl:r.sprite,this.glyphs=t?t.glyphsUrl:r.glyphs,i("stable-symbol-rendering")){var a=(r.layers||[]).filter(function(e){return e.layout&&e.layout["text-font"]})[0];a&&(r.layers||[]).forEach(function(e){e.layout&&e.layout["text-font"]&&(e.layout["text-font"]=a.layout["text-font"])})}this.layers=(r.layers||[]).map(e._create),this._identifyRefLayers()}return e.prototype._identifyRefLayers=function(){for(var e=[],r=[],t=0,i=this.layers;t<i.length;t++){var a=i[t];if(1===a.type){var y=a.sourceLayer;y+="|"+JSON.stringify(a.minzoom),y+="|"+JSON.stringify(a.maxzoom),y+="|"+JSON.stringify(a.filter),e.push({key:y,layer:a})}if(2===a.type){var y=a.sourceLayer;y+="|"+JSON.stringify(a.minzoom),y+="|"+JSON.stringify(a.maxzoom),y+="|"+JSON.stringify(a.filter),y+="|"+JSON.stringify(a.layout["line-cap"]),y+="|"+JSON.stringify(a.layout["line-join"]),r.push({key:y,layer:a})}}this._assignRefLayers(e),this._assignRefLayers(r)},e.prototype._assignRefLayers=function(e){e.sort(function(e,r){return e.key<r.key?-1:e.key>r.key?1:0});for(var r,t,i=e.length,a=0;i>a;a++){var y=e[a];if(y.key===r)y.layer.refLayerId=t;else if(r=y.key,t=y.layer.id,1===y.layer.type&&!y.layer.hasPaintProperty("fill-outline-color"))for(var n=a+1;i>n;n++){var o=e[n];if(o.key!==r)break;if(o.layer.hasPaintProperty("fill-outline-color")){e[a]=o,e[n]=y,t=o.layer.id;break}}}},e._create=function(e,r,i){var a=1/(i.length+1),y=1-(1+r)*a;switch(e.type){case"background":return new t.StyleLayer(0,e,y);case"fill":return new t.StyleLayer(1,e,y);case"line":return new t.StyleLayer(2,e,y);case"symbol":return new t.StyleLayer(3,e,y);case"raster":throw new Error("Unsupported vector tile raster layer");case"circle":throw new Error("Unsupported vector tile circle layer")}throw new Error("Unknown vector tile layer")},e}();return a});
},
'*noref':1}});
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

define(["require","exports","dojo/Deferred","../../core/promiseUtils","./WorkerTile","./style/StyleRepository"],function(e,t,r,o,n,i){var s=function(){function e(){this._tiles=new Map,this._spriteInfo={},this._glyphInfo={}}return e.prototype.reset=function(){var e=new r;this._spriteInfo={},this._glyphInfo={};var t=this._tiles;return t.forEach(function(e){return e.setObsolete()}),t.clear(),e.resolve(),e.promise},e.prototype.getLayers=function(){return this._layers},e.prototype.setLayers=function(e){var t=new i(e);return this._layers=t.layers,o.resolve({data:""})},e.prototype.getTile=function(e,t){var r=this,i=e.key,s=n.pool.acquire();s.initialize(e.key,e.refKey,this,e.rotation);var l=e.cacheTile;return t.invoke("fetchTileData",e.refKey).then(function(e){return s.setDataAndParse(e.protobuff,t).then(function(e){return l&&6!==s.status&&r._tiles.set(i,s),e}).otherwise(function(e){return s.setObsolete(),n.pool.release(s),r._tiles["delete"](s.tileKey),o.reject(e)})}).otherwise(function(e){return s.setObsolete(),r._tiles.has(s.tileKey)&&r._tiles["delete"](s.tileKey),o.reject(e)}).always(function(e){return l||n.pool.release(s),e})},e.prototype.update=function(e){var t=this._tiles.get(e.key);return t?t.updateSymbols(e.rotation):o.reject()},e.prototype.destructTileData=function(e){return this._tiles.has(e.key)&&(n.pool.release(this._tiles.get(e.key)),this._tiles["delete"](e.key)),o.resolve()},e.prototype.fetchSprites=function(e,t){var r=[],n=this._spriteInfo;return e.forEach(function(e){var t=n[e];void 0===t&&r.push(e)}),0===r.length?o.resolve():t.invoke("getSprites",{sprites:r}).then(function(e){var t=e.spriteItems;for(var r in t){var o=t[r];n[r]=o}})},e.prototype.getSpriteItems=function(){return this._spriteInfo},e.prototype.fetchGlyphs=function(e,t,r,n){var i=[],s=this._glyphInfo[t];return s?r.forEach(function(e){var t=s[e];t||i.push(e)}):(s=this._glyphInfo[t]=[],r.forEach(function(e){return i.push(e)})),0===i.length?o.resolve():n.invoke("getGlyphs",{tileID:e,font:t,codePoints:i}).then(function(e){var t=e.glyphItems;for(var r in t)s[r]=t[r]})},e.prototype.getGlyphItems=function(e){return this._glyphInfo[e]},e}();return s});