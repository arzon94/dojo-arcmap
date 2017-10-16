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