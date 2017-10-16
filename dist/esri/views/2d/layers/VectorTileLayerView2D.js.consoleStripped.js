require({cache:{
'esri/views/2d/layers/LayerView2D':function(){
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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/watchUtils","../../layers/LayerView"],function(e,t,i,r,n,o,s){var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.attached=!1,t.moving=!1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.then(function(){e.requestUpdate()}),o.init(this,"suspended",function(t){e.container.visible=!t,!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),o.init(this,"fullOpacity",function(t){e.container.opacity=t},!0);var t=function(){this.notifyChange("rendering")}.bind(this);this.container.on("post-render",t),this.container.on("will-render",t)},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.updateRequested=!1,this.layer=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.isRendering()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){return this.isFulfilled()&&!this.isResolved()?void(this.updateRequested=!1):(this._set("updateParameters",e),void(this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))))},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return this.attached&&(this.moving||this.container.renderRequested)},t.prototype.canResume=function(){var e=this.inherited(arguments),t=this.layer;if(e&&null!=t.minScale&&null!=t.minScale){var i=this.view.scale,r=t.minScale,n=t.maxScale,o=!r,s=!n;!o&&r>=i&&(o=!0),!s&&i>=n&&(s=!0),e=o&&s}return e},t}(n.declared(s));return r([n.property()],p.prototype,"attached",void 0),r([n.property()],p.prototype,"container",void 0),r([n.property()],p.prototype,"moving",void 0),r([n.property({dependsOn:["moving"]})],p.prototype,"rendering",null),r([n.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],p.prototype,"suspended",void 0),r([n.property({readOnly:!0})],p.prototype,"updateParameters",void 0),r([n.property()],p.prototype,"updateRequested",void 0),r([n.property({dependsOn:["updateRequested","attached"]})],p.prototype,"updating",null),r([n.property()],p.prototype,"view",void 0),p=r([n.subclass("esri.views.2d.layers.LayerView2D")],p)});
},
'esri/views/layers/LayerView':function(){
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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/Evented","../../core/Identifiable","../../core/Promise","../../core/HandleRegistry","../../core/Logger"],function(e,r,t,i,n,o,l,p,s,a,u){var d=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.handles=new a,r.parent=null,r.view=null,r}return t(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.otherwise(function(r){if("layerview:create-error"!==r.name){var t=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";u.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+t+"')",r)}})},r.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(r.prototype,"layer",{get:function(){return this._get("layer")},set:function(e){this.handles.remove("layer"),e&&this.handles.add(e.on("refresh",this.refresh.bind(this)),"layer"),this._set("layer",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visible",{get:function(){return this.get("layer.visible")===!0},set:function(e){return void 0===e?void this._clearOverride("visible"):void this._override("visible",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),r.prototype.refresh=function(){},r.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},r.prototype.isUpdating=function(){return!1},r}(n.declared(o,l,p,s));return i([n.property({value:null})],d.prototype,"layer",null),i([n.property()],d.prototype,"parent",void 0),i([n.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],d.prototype,"suspended",null),i([n.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],d.prototype,"updating",null),i([n.property()],d.prototype,"view",void 0),i([n.property({dependsOn:["layer.visible"]})],d.prototype,"visible",null),i([n.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],d.prototype,"fullOpacity",null),d=i([n.subclass("esri.views.layers.LayerView")],d)});
},
'esri/views/2d/tiling/TileInfoViewPOT':function(){
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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","./TileKey","./TileInfoView"],function(e,r,o,l,t,n){var i=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),r.prototype.getTileParentId=function(e){var r=t.pool.acquire(e),o=0===r.level?null:t.getId(r.level-1,r.row>>1,r.col>>1,r.world);return t.pool.release(r),o},r.prototype.getTileIdAtParent=function(e,r){var o=t.pool.acquire(r),l=this._infoByLevel[o.level];if(e.resolution<l.resolution)throw t.pool.release(o),new Error("Cannot calculate parent tile. destination LOD's resolution "+e.resolution+" is not a parent resolution of "+l.resolution);if(e.resolution===l.resolution){var n=o.id;return t.pool.release(o),n}var i=o.level-e.level;if(0>i)throw t.pool.release(o),new Error("Wrong way...!");var u=t.getId(e.level,o.row>>i,o.col>>i,o.world);return t.pool.release(o),u},r}(n);return i});
},
'esri/views/2d/tiling/TileKey':function(){
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

define(["require","exports","../../../core/ObjectPool"],function(t,o,e){var l=function(){function t(t,o,e,l){if("string"==typeof t){var r=t.split("/"),i=r[0],s=r[1],h=r[2],n=r[3];this.level=+i,this.row=+s,this.col=+h,this.world=+n||0}else t&&"object"==typeof t?(this.level=t.level||0,this.row=t.row||0,this.col=t.col||0,this.world=t.world||0):(this.level=+t||0,this.row=+o||0,this.col=+e||0,this.world=+l||0)}return t.from=function(o,e,l,r){return t.pool.acquire(o,e,l,r)},t.getId=function(t,o,e,l){return"object"==typeof t?t.level+"/"+t.row+"/"+t.col+"/"+t.world:t+"/"+o+"/"+e+"/"+l},Object.defineProperty(t.prototype,"id",{get:function(){return t.getId(this)},enumerable:!0,configurable:!0}),t.prototype.equals=function(t){return this.level===t.level&&this.row===t.row&&this.col===t.col&&this.world===t.world},t.prototype.release=function(){this.level=0,this.row=0,this.col=0,this.world=0},t.prototype.set=function(t,o,e,l){var r=typeof t;if("object"===r)this.level=t.level||0,this.row=t.row||0,this.col=t.col||0,this.world=t.world||0;else if("string"===r){var i=t.split("/"),s=i[0],h=i[1],n=i[2],c=i[3];this.level=parseFloat(s),this.row=parseFloat(h),this.col=parseFloat(n),this.world=parseFloat(c)}else this.level=t,this.row=o,this.col=e,this.world=l;return this},t.prototype.toString=function(){return this.level+"/"+this.row+"/"+this.col+"/"+this.world},t}();return l.pool=new e(l,!0,null,25,50),l});
},
'esri/views/2d/tiling/TileInfoView':function(){
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

define(["require","exports","./LODInfo","./TileKey","./TileSpan","./TileCoverage"],function(o,e,t,r,n,l){var i=function(){function o(o,e,t,r,n,l,i,s){this.x=o,this.ymin=e,this.ymax=t,this.invM=r,this.leftAdjust=n,this.rightAdjust=l,this.leftBound=i,this.rightBound=s}return o.create=function(e,t){e[1]>t[1]&&(c=[t,e],e=c[0],t=c[1]);var r=e[0],n=e[1],l=t[0],i=t[1],s=l-r,a=i-n,u=0!==a?s/a:0,f=(Math.ceil(n)-n)*u,h=(Math.floor(n)-n)*u;return new o(r,Math.floor(n),Math.ceil(i),u,0>s?f:h,0>s?h:f,0>s?l:r,0>s?r:l);var c},o.prototype.incrRow=function(){this.x+=this.invM},o.prototype.getLeftCol=function(){return Math.max(this.x+this.leftAdjust,this.leftBound)},o.prototype.getRightCol=function(){return Math.min(this.x+this.rightAdjust,this.rightBound)},o}(),s=[[0,0],[0,0],[0,0],[0,0]],a=function(){function o(o,e){var r=this;this.tileInfo=o,this.fullExtent=e,this.scales=[],this._lodInfos=null,this._infoByScale={},this._infoByLevel={};var n=o.lods.slice();n.sort(function(o,e){return e.scale-o.scale});var l=this._lodInfos=n.map(function(r){return t.create(o,r,e)});n.forEach(function(o,e){r._infoByLevel[o.level]=l[e],r._infoByScale[o.scale]=l[e],r.scales[e]=o.scale},this),this._wrap=o.spatialReference.isWrappable}return o.prototype.getTileBounds=function(o,e){var t=this._infoByLevel[e.level];return t?t.getTileBounds(o,e):o},o.prototype.getTileCoords=function(o,e){var t=this._infoByLevel[e.level];return t?t.getTileCoords(o,e):o},o.prototype.getTileCoverage=function(o){var e,t,r,a=this.getClosestInfoForScale(o.scale),u=l.pool.acquire(a),f=this._wrap,h=+(1/0),c=-(1/0),p=u.spans;s[0][0]=s[0][1]=s[1][1]=s[3][0]=0,s[1][0]=s[2][0]=o.size[0],s[2][1]=s[3][1]=o.size[1];for(var v=0,d=s;v<d.length;v++){var g=d[v];o.toMap(g,g),g[0]=a.getColumnForX(g[0]),g[1]=a.getRowForY(g[1])}for(var m=[],y=3,w=0;4>w;w++)if(s[w][1]!==s[y][1]){var M=i.create(s[w],s[y]);h=Math.min(M.ymin,h),c=Math.max(M.ymax,c),void 0===m[M.ymin]&&(m[M.ymin]=[]),m[M.ymin].push(M),y=w}else y=w;if(null==h||null==c||c-h>100)return null;var C=[];for(e=h;c>e;){null!=m[e]&&(C=C.concat(m[e])),t=+(1/0),r=-(1/0);for(var w=C.length-1;w>=0;w--){var M=C[w];t=Math.min(t,M.getLeftCol()),r=Math.max(r,M.getRightCol())}if(t=Math.floor(t),r=Math.floor(r),e>=a.first[1]&&e<=a.last[1])if(f)if(a.size[0]<a.worldSize[0])for(var B=Math.floor(r/a.worldSize[0]),w=Math.floor(t/a.worldSize[0]);B>=w;w++)p.push(new n(e,Math.max(a.getFirstColumnForWorld(w),t),Math.min(a.getLastColumnForWorld(w),r)));else p.push(new n(e,t,r));else t>a.last[0]||r<a.first[0]||(t=Math.max(t,a.first[0]),r=Math.min(r,a.last[0]),p.push(new n(e,t,r)));e+=1;for(var w=C.length-1;w>=0;w--){var M=C[w];M.ymax>=e?M.incrRow():C.splice(w,1)}}return u},o.prototype.getTileIdAtParent=function(o,e){var t=r.pool.acquire(e),n=this._infoByLevel[t.level];if(o.resolution<n.resolution)throw new Error("Cannot calculate parent tile. destination LOD's resolution "+o.resolution+" is not a parent resolution of "+n.resolution);if(o.resolution===n.resolution)return t.id;var l=Math.floor(t.col*n.resolution/o.resolution+.01),i=Math.floor(t.row*n.resolution/o.resolution+.01);return r.getId(o.level,i,l,t.world)},o.prototype.getTileParentId=function(o){var e=r.pool.acquire(o),t=this._infoByLevel[e.level],n=this._lodInfos.indexOf(t)-1;if(0>n)return r.pool.release(e),null;var l=this._lodInfos[n],i=this.getTileIdAtParent(l,e);return r.pool.release(e),i},o.prototype.getTileResolution=function(o){var e=this._infoByLevel[o.level];return e?e.resolution:-1},o.prototype.getTileScale=function(o){var e=this._infoByLevel[o.level];return e?e.scale:-1},o.prototype.intersects=function(o,e){var t=r.pool.acquire(e),n=this._infoByLevel[t.level],l=o.lodInfo;if(l.resolution>n.resolution){var i=r.pool.acquire(this.getTileIdAtParent(l,t)),s=l.denormalizeCol(i.col,i.world),a=o.spans.some(function(o){return o.row===i.row&&o.colFrom<=s&&o.colTo>=s});return r.pool.release(t),r.pool.release(i),a}if(l.resolution<n.resolution){var u=o.spans.reduce(function(o,e){return o[0]=Math.min(o[0],e.row),o[1]=Math.max(o[1],e.row),o[2]=Math.min(o[2],e.colFrom),o[3]=Math.max(o[3],e.colTo),o},[+(1/0),-(1/0),+(1/0),-(1/0)]),f=u[0],h=u[1],c=u[2],p=u[3],v=n.denormalizeCol(t.col,t.world),d=l.getColumnForX(n.getXForColumn(v)),g=l.getRowForY(n.getYForRow(t.row)),m=l.getColumnForX(n.getXForColumn(v+1))-1,y=l.getRowForY(n.getYForRow(t.row+1))-1;return r.pool.release(t),!(d>p||c>m||g>h||f>y)}var w=l.denormalizeCol(t.col,t.world),M=o.spans.some(function(o){return o.row===t.row&&o.colFrom<=w&&o.colTo>=w});return r.pool.release(t),M},o.prototype.getClosestInfoForScale=function(o){var e=this.scales;return this._infoByScale[o]?this._infoByScale[o]:(o=e.reduce(function(e,t,r,n){return Math.abs(t-o)<Math.abs(e-o)?t:e},e[0]),this._infoByScale[o])},o}();return a});
},
'esri/views/2d/tiling/LODInfo':function(){
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

define(["require","exports","./TileKey","../../../geometry/support/spatialReferenceUtils"],function(o,t,r,i){function e(o,t){return[o,t]}function n(o,t,r){return o[0]=t,o[1]=r,o}function s(o,t,r,i,e){return o[0]=t,o[1]=r,o[2]=i,o[3]=e,o}var l=function(){function o(o,t,r,i,e,n,s,l,u,h,a,p){this.level=o,this.resolution=t,this.scale=r,this.origin=i,this.first=e,this.last=n,this.size=s,this.norm=l,this.worldStart=u,this.worldEnd=h,this.worldSize=a,this.wrap=p}return o.create=function(t,r,s){var l=i.getInfo(t.spatialReference),u=e(t.origin.x,t.origin.y),h=e(t.size[0]*r.resolution,t.size[1]*r.resolution),a=e(-(1/0),-(1/0)),p=e(+(1/0),+(1/0)),f=e(+(1/0),+(1/0));s&&(n(a,Math.max(0,Math.floor((s.xmin-u[0])/h[0])),Math.max(0,Math.floor((u[1]-s.ymax)/h[1]))),n(p,Math.max(0,Math.floor((s.xmax-u[0])/h[0])),Math.max(0,Math.floor((u[1]-s.ymin)/h[1]))),n(f,p[0]-a[0]+1,p[1]-a[1]+1));var c,m,g,w;return l?(c=e(Math.ceil(Math.round(2*l.origin[1]/r.resolution)/t.size[0]),f[1]),m=e(Math.floor((l.origin[0]-u[0])/h[0]),a[1]),g=e(c[0]-m[0]-1,p[1]),w=!0):(m=a,g=p,c=f,w=!1),new o(r.level,r.resolution,r.scale,u,a,p,f,h,m,g,c,w)},o.prototype.normalizeCol=function(o){if(!this.wrap)return o;var t=this.worldSize[0];return 0>o?t-1-Math.abs((o+1)%t):o%t},o.prototype.denormalizeCol=function(o,t){return this.wrap?this.worldSize[0]*t+o:o},o.prototype.getWorldForColumn=function(o){return this.wrap?Math.floor(o/this.worldSize[0]):0},o.prototype.getFirstColumnForWorld=function(o){return o*this.worldSize[0]+this.first[0]},o.prototype.getLastColumnForWorld=function(o){return o*this.worldSize[0]+this.first[0]+this.size[0]-1},o.prototype.getColumnForX=function(o){return(o-this.origin[0])/this.norm[0]},o.prototype.getXForColumn=function(o){return this.origin[0]+o*this.norm[0]},o.prototype.getRowForY=function(o){return(this.origin[1]-o)/this.norm[1]},o.prototype.getYForRow=function(o){return this.origin[1]-o*this.norm[1]},o.prototype.getTileBounds=function(o,t){var i=r.pool.acquire(t);return s(o,this.getXForColumn(this.denormalizeCol(i.col,i.world)),this.getYForRow(i.row+1),this.getXForColumn(this.denormalizeCol(i.col,i.world)+1),this.getYForRow(i.row)),r.pool.release(i),o},o.prototype.getTileCoords=function(o,t){var i=r.pool.acquire(t);return n(o,this.getXForColumn(this.denormalizeCol(i.col,i.world)),this.getYForRow(i.row)),r.pool.release(i),o},o}();return l});
},
'esri/views/2d/tiling/TileSpan':function(){
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

define(["require","exports","../../../core/ObjectPool"],function(o,r,e){var n=function(){function o(o,r,e){this.row=o,this.colFrom=r,this.colTo=e}return o}();return n.pool=new e(n,!0),n});
},
'esri/views/2d/tiling/TileCoverage':function(){
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

define(["require","exports","../../../core/ObjectPool","../../../core/ArrayPool","./TileSpan"],function(o,r,e,n,l){var t=function(){function o(o){this.lodInfo=o,this.spans=n.acquire()}return o.prototype.release=function(){for(var o=0,r=this.spans;o<r.length;o++){var e=r[o];l.pool.release(e)}n.release(this.spans)},o.prototype.forEach=function(o,r){var e=this,n=e.spans,l=e.lodInfo,t=l.level;if(0!==n.length)for(var a=0,s=n;a<s.length;a++)for(var i=s[a],c=i.row,f=i.colFrom,p=i.colTo,u=f;p>=u;u++)o.call(r,t,c,l.normalizeCol(u),l.getWorldForColumn(u))},o}();return t.pool=new e(t,!0),t});
},
'esri/views/2d/tiling/TileStrategy':function(){
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

define(["require","exports","../../../core/tsSupport/extendsHelper","./TileKey"],function(e,t,i,r){function l(e,t){e["delete"](t)}var a=new r(0,0,0,0),n=new Map,s=[],o=[],h=function(){function e(e){this._previousResolution=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.tileIndex=new Map,this.tiles=[],this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.cachePolicy&&(this.cachePolicy=e.cachePolicy)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,i=this.tileIndex,r=this.tileInfoView.getTileCoverage(e.state);if(r){var h=r.spans,c=r.lodInfo,u=c.level,f=e.state.resolution,d=!e.stationary&&f>this._previousResolution;this._previousResolution=f,this.tiles.length=0,n.clear();var p=0,v=0;if(h.length>0)for(var g=0,I=h;g<I.length;g++)for(var T=I[g],y=T.row,P=T.colFrom,w=T.colTo,x=P;w>=x;x++){p++;var _=a.set(u,y,c.normalizeCol(x),c.getWorldForColumn(x)).id;if(i.has(_)){var V=i.get(_);if(V.attached){n.set(_,V),v++;continue}V.attached||d||this._addParentTile(_,n)}else{var V=this.acquireTile(a);this.tileIndex.set(_,V),d||this._addParentTile(_,n)}}var k=v===p;o.length=0,s.length=0,i.forEach(function(e,i){if(a.set(i),!n.has(i)){var l=t.tileInfoView.intersects(r,a);!l||!d&&k?"purge"===t.cachePolicy?s.push(i):(a.level>u||!l)&&s.push(i):e.attached?o.push(i):d&&s.push(i)}});for(var m=0,q=o;m<q.length;m++){var _=q[m],V=i.get(_);V&&V.attached&&n.set(_,V)}for(var C=0,E=s;C<E.length;C++){var _=E[C],V=i.get(_);this.releaseTile(V),l(i,_)}n.forEach(function(e){return t.tiles.push(e)}),o.length=0,s.length=0,n.clear()}},e.prototype._addParentTile=function(e,t){for(var i=e,r=null;i=this.tileInfoView.getTileParentId(i);)if(this.tileIndex.has(i)&&(r=this.tileIndex.get(i),r&&r.attached)){t.has(r.key.id)||t.set(r.key.id,r);break}},e}();return h});
},
'esri/views/2d/tiling/TileQueue':function(){
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

define(["require","exports","../../../core/QueueProcessor"],function(e,t,r){function n(e,t){return e.length=0,t.forEach(function(t){return e.push(t)}),e}var o=new Set,u=[],i=new Map,s=function(){function e(e){var t=this;this.tileInfoView=e.tileInfoView,this._queue=new r({concurrency:6,process:e.process,peeker:function(e){return t._peek(e)}})}return Object.defineProperty(e.prototype,"length",{get:function(){return this._queue.length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._queue.clear()},e.prototype.find=function(e,t){return this._queue.find(e)},e.prototype.has=function(e){return this._queue.has(e)},e.prototype.pause=function(){return this._queue.pause()},e.prototype.push=function(e){return this._queue.push(e)},e.prototype.reset=function(){return this._queue.reset()},e.prototype.resume=function(){return this._queue.resume()},e.prototype._peek=function(e){var t=this;if(!this.state)return e[0];var r=this.tileInfoView,s=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY;e.forEach(function(e){var r=t.tileInfoView.getTileScale(e);i.has(r)||(i.set(r,[]),s=Math.max(r,s),a=Math.min(r,a)),i.get(r).push(e),o.add(r)});var c=this.state.scale;i.has(c)||(n(u,o),u.sort(),c=u.reduce(function(e,t,r,n){return Math.abs(t-c)<Math.abs(e-c)?t:e},u[0])),c=Math.min(c,s),c=Math.max(c,a);var h=i.get(c),p=r.getClosestInfoForScale(c),f=p.getColumnForX(this.state.center[0]),l=p.getRowForY(this.state.center[1]);return h.sort(function(e,t){var r=p.denormalizeCol(e.col,e.world),n=p.denormalizeCol(t.col,t.world);return Math.sqrt((f-r)*(f-r)+(l-e.row)*(l-e.row))-Math.sqrt((f-n)*(f-n)+(l-t.row)*(l-t.row))}),o.clear(),i.clear(),h[0]},e}();return s});
},
'esri/core/QueueProcessor':function(){
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

define(["require","exports","dojo/Deferred","./Queue"],function(e,s,t,i){function r(e){return e&&"function"==typeof e.then}var o={},n=function(){function e(e){this._apiPromises=new Map,this._resolvingPromises=new Map,this._isPaused=!1,this.concurrency=1,e.concurrency&&(this.concurrency=e.concurrency),this._queue=new i(e.peeker?{peeker:e.peeker}:void 0),this.process=e.process}return Object.defineProperty(e.prototype,"length",{get:function(){return this._resolvingPromises.size+this._queue.length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._queue.clear();var e=[];this._resolvingPromises.forEach(function(s){return e.push(s)}),this._resolvingPromises.clear(),e.forEach(function(e){return e.cancel()}),e.length=0,this._apiPromises.forEach(function(s){return e.push(s)}),this._apiPromises.clear(),e.forEach(function(e){return e.cancel()}),this._isPaused=!1},e.prototype.find=function(e,s){var t=this,i=void 0;return this._apiPromises.forEach(function(r,o){e.call(s,o)&&(i=t._apiPromises.get(o).promise)}),i},e.prototype.has=function(e){return this._apiPromises.has(e)},e.prototype.pause=function(){this._isPaused=!0},e.prototype.push=function(e){var s=this;if(this._apiPromises.has(e))return this._apiPromises.get(e).promise;var i=new t(function(t){s._resolvingPromises.has(e)?s._resolvingPromises.get(e).cancel(t):(s._remove(e),s._scheduleNext())});return this._add(e,i),this._scheduleNext(),i.promise},e.prototype.reset=function(){var e=[];this._resolvingPromises.forEach(function(s){return e.push(s)}),this._resolvingPromises.clear(),e.forEach(function(e){return e.cancel(o)})},e.prototype.resume=function(){this._isPaused=!1,this._scheduleNext()},e.prototype._scheduleNext=function(){this._isPaused||this._next()},e.prototype._next=function(){this._resolvingPromises.size!==this.concurrency&&this._process(this._queue.pop())},e.prototype._process=function(e){var s=this;if(null!=e){var t=this._apiPromises.get(e),i=this.process(e);r(i)?(this._resolvingPromises.set(e,i),i.then(function(i){t.resolve(i),s._remove(e),s._scheduleNext()},function(i){i===o?s._process(e):(t.reject(i),s._remove(e),s._scheduleNext())})):(t.resolve(i),this._remove(e),this._scheduleNext())}},e.prototype._add=function(e,s){this._apiPromises.set(e,s),this._queue.push(e)},e.prototype._remove=function(e){this._queue.remove(e),this._apiPromises["delete"](e),this._resolvingPromises["delete"](e)},e}();return n});
},
'esri/core/Queue':function(){
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

define(["require","exports"],function(t,e){var i=function(){function t(t){this._items=[],this._itemSet=new Set,this._peeker=function(t){return t[0]},this._length=0,t&&t.peeker&&(this._peeker=t.peeker)}return Object.defineProperty(t.prototype,"length",{get:function(){return this._length},enumerable:!0,configurable:!0}),t.prototype.clear=function(){this._itemSet.clear(),this._items.length=0,this._length=0},t.prototype.peek=function(){return 0!==this._length?this._peeker(this._items):void 0},t.prototype.push=function(t){this.contains(t)||this._add(t)},t.prototype.contains=function(t){return this._length>0&&this._itemSet.has(t)},t.prototype.pop=function(){if(0!==this._length){var t=this.peek();return this._remove(t),t}},t.prototype.remove=function(t){this.contains(t)&&this._remove(t)},t.prototype._add=function(t){this._items.push(t),this._itemSet.add(t),this._length++},t.prototype._remove=function(t){this._itemSet["delete"](t),this._items.splice(this._items.indexOf(t),1),this._length--},t}();return i});
},
'esri/views/vectorTiles/TileHandler':function(){
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

define(["require","exports","module","dojo/Deferred","dojo/promise/all","dojo/has","../../core/workers","../../core/promiseUtils","../../core/requireUtils","../../core/LRUCache","../../request","../2d/tiling/TileKey","./TileIndex","./SpriteMosaic","./SpriteSource","./GlyphMosaic","./GlyphSource","./VectorTileDisplayObject","./GeometryUtils"],function(e,t,i,o,n,r,s,a,l,c,u,h,p,d,y,_,f,g,v){var b=new c(10),m=function(){function t(e,t,i,o,n){void 0===o&&(o=!1),this.devicePixelRatio=i,this.allowUpdates=o,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null,this._tileIndex=null,this._updateQueue=new Map,this._ongoingRequests=new Map,this._vectorTileLayer=e,this._styleRepository=e.styleRepository,this._requestUpdate=t,this._tileInfoView=n}return t.prototype.destroy=function(){this.stop(),this._vectorTileLayer=this._requestUpdate=this._styleRepository=null,this._spriteMosaic&&(this._spriteMosaic.dispose(),this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic.dispose(),this._glyphMosaic=null)},Object.defineProperty(t.prototype,"initialized",{get:function(){return this._broadcastPromise&&this._broadcastPromise.isFulfilled()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"spriteMosaic",{get:function(){return this._spriteMosaic},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"glyphMosaic",{get:function(){return this._glyphMosaic},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ongoingRequestCount",{get:function(){return this._ongoingRequests.size},enumerable:!0,configurable:!0}),t.prototype.start=function(){var t=this;this.stop();var a=this._styleRepository,c=new y(a.sprite,this.devicePixelRatio);c.devicePixelRatio=this.devicePixelRatio;var u=c.load().then(function(){t._spriteMosaic=new d(1024,1024,250),t._spriteMosaic.setSpriteSource(c),r("stable-symbol-rendering")&&t._spriteMosaic.preloadSpriteItems()}),h=new f(a.glyphs);this._glyphMosaic=new _(1024,1024,h);var p=this._fetchTileMap(this._vectorTileLayer.tileIndexUrl),g=s.open(this,l.getAbsMid("./WorkerTileHandler",e,i)).then(function(e){t._connection=e}),v=new o(function(e){u.isFulfilled()||u.cancel(),p.isFulfilled()||p.cancel(),g.isFulfilled()||g.cancel()});return n([u,p,g]).then(function(e){n(t._connection.broadcast("setLayers",a.styleJSON)).then(function(){v.resolve()})}),this._broadcastPromise=v.promise,this._broadcastPromise},t.prototype.stop=function(){this._broadcastPromise&&!this._broadcastPromise.isFulfilled()&&this._broadcastPromise.cancel(),this._updateQueue.forEach(function(e){return e.cancel()}),this._ongoingRequests.forEach(function(e){return e.cancel()}),this._connection&&(this._connection.close(),this._connection=null)},t.prototype.updateTile=function(e,t){var i=this;if(!this.allowUpdates)return a.resolve(null);if(!this._broadcastPromise.isFulfilled()||!this._connection)return a.reject(new Error("no connection"));var o=Math.round(v.degToByte(t.state.rotation));if(e.rotation===o)return a.resolve(null);var n,r=e.key;return this._updateQueue.has(r.id)&&(n=this._updateQueue.get(r.id),n.cancel("cancel")),e.rotation=o,n=this._connection.invoke("update",{key:e.id,rotation:o},[],{id:e.workerID}).then(function(t){return e.updateSymbolData(t),t}).always(function(){i._updateQueue["delete"](r.id)}),this._updateQueue.set(e.id,n),n},t.prototype.getVectorTileWithLRC=function(e,t,i,o){var n=this;void 0===o&&(o=0);var r=new h(e,t,i,0),s=this.getRefKey(r),a=new g(r,s,this._vectorTileLayer.tileInfo,this._styleRepository,this._glyphMosaic,0);return this.getTileData(a.key,0).then(function(e){return a.setData(e.tileData,e.workerId,n._connection),a})},t.prototype.getTileData=function(e,t){var i=this;if(!this._broadcastPromise.isFulfilled()||!this._connection)return a.reject(new Error("no connection"));var o=this._tileIndex?this._tileIndex.dataKey(e):e;if(!o)return a.reject(new Error("no data"));var n=Math.round(v.degToByte(t));return this._getTileData(this._connection,e,o,n).then(function(e){return e&&e.tileData?{tileData:e.tileData,workerId:e.workerId,connection:i._connection}:a.reject("No data")})},t.prototype.getRefKey=function(e){return this._tileIndex?this._tileIndex.dataKey(e):e},t.prototype.fetchTileData=function(e){var t=h.pool.acquire(e),i=this._vectorTileLayer.getTileUrl(t.level,t.row,t.col);return h.pool.release(t),u(i,{callbackParamName:"callback",responseType:"array-buffer"}).then(function(e){return{data:{protobuff:e.data},buffers:[e.data]}})},t.prototype.getSprites=function(e){return a.resolve({data:{spriteItems:this._spriteMosaic.getSpriteItems(e.sprites)}})},t.prototype.getGlyphs=function(e){return this._glyphMosaic.getGlyphItems(e.tileID,e.font,e.codePoints).then(function(e){return{data:{glyphItems:e}}})},t.prototype.getStyleRepository=function(){return this._styleRepository},t.prototype.getTileIndex=function(){return this._tileIndex},t.prototype._getTileData=function(e,t,i,o){var n=this,r={id:null},s=this._ongoingRequests.get(t.id);return s?s:(s=this._connection.invoke("getTile",{key:t.id,refKey:i.id,rotation:o,cacheTile:this.allowUpdates},[],r).then(function(e){return n._ongoingRequests["delete"](t.id),{tileData:e,workerId:r.id}}).otherwise(function(e){return n._ongoingRequests["delete"](t.id),n._connection.invoke("destructTileData",{key:t.id},[],r),a.reject(e)}),this._ongoingRequests.set(t.id,s),s)},t.prototype._fetchTileMap=function(e){var t=this;return e?b.has(e)?(this._tileIndex=b.use(e),a.resolve()):u(e,{callbackParamName:"callback",responseType:"json"}).then(function(i){t._tileIndex=new p(i.data),b.insert(e,t._tileIndex)}):null},t}();return m});
},
'esri/core/workers':function(){
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

define(["require","exports","./workers/workers"],function(e,r,o){function n(e){for(var o in e)r.hasOwnProperty(o)||(r[o]=e[o])}Object.defineProperty(r,"__esModule",{value:!0}),n(o)});
},
'esri/core/workers/workers':function(){
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

define(["require","exports","dojo/Deferred","dojo/promise/all","../promiseUtils","./Connection","./JobProxy"],function(e,n,r,o,t,i,u){function a(e,n){if(x===!1){for(var r=0;m>r;++r){var o=new u(k,r,d);w.push(o),j.push(!1)}x=!0}return h(e).then(function(e){return s(n,e.id).then(function(){return e}).otherwise(function(e){return t.reject(e)})})}function f(){for(var e=0;e<w.length;e++)w[e].terminate();w=[],j=[],g=!1}function c(e){if(e)if(k[e.id]&&delete k[e.id],g)for(var n=0;n<w.length;n++)w[n].closeConnection(e.id);else{var r=y[e.id];r&&(r.promise.cancel(),delete y[e.id])}}function l(e,n,r,o,i){var u=null;if(o&&(u=o.id),null===u&&(u=C=(C+1)%w.length,!j[u]&&!w.some(function(e,n,r){return u=(u+1)%r.length,j[u]})))return t.reject(new Error("No worker available"));var a=w[u].invoke(e,n,r,i);return o&&(o.id=u),a}function v(e,n,r,o){for(var t=[],i=0;i<w.length;i++)j[i]&&t.push(w[i].invoke(e,n,r,o));return t}function s(e,n){for(var r=[],t=0;t<w.length;t++)r.push(w[t].openConnection(e,n));return o(r).then(function(e){})}function d(e){if(j[e]=!0,!g){var n=j.every(function(e){return e});if(n){for(var r in y){var o=k[r];o&&y[r].resolve(o)}y={},g=!0}}}function h(e){var n=b++,o=new i(e,n),t=new r;return k[n]=o,g?t.resolve(o):y[n]=t,t.promise}Object.defineProperty(n,"__esModule",{value:!0});var p=navigator.hardwareConcurrency||2,m=Math.max(p-1,2),g=!1,w=[],j=[],C=0,b=0,k={},y={},x=!1;n.open=a,n.terminate=f,n.closeConnection=c,n.invoke=l,n.broadcast=v});
},
'esri/core/workers/Connection':function(){
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

define(["require","exports","./workers"],function(t,n,o){var i=function(){function t(t,n){this.client=t,this.id=n}return t.prototype.invoke=function(t,n,i,e){return o.invoke(t,n,i,e,this.id)},t.prototype.broadcast=function(t,n,i){return o.broadcast(t,n,i,this.id)},t.prototype.close=function(){o.closeConnection(this)},t}();return i});
},
'esri/core/workers/JobProxy':function(){
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

define(["require","exports","dojo/_base/kernel","dojo/_base/lang","dojo/Deferred","../../kernel","../../config","../../request","../Logger","../urlUtils","./WorkerFallbackImpl"],function(e,t,o,r,n,i,s,a,c,d,l){function u(){if(!k){var e=void 0;try{e=new Worker(m)}catch(t){p.warn("Failed to create Worker. Fallback to execute module in main thread",event),e=new l}return f(e)}return w||(w=a(m,{responseType:"text"})),w.then(function(e){return new Worker(URL.createObjectURL(new Blob([e.data],{type:"text/javascript"})))}).otherwise(function(e){return p.warn("Failed to create Worker. Fallback to execute module in main thread",e),new l}).then(function(e){return f(e)})}function f(e){function t(n){if(n&&n.data&&n.data.type){var i=n.data.type;"<worker-loaded>"===i?g(e):"<worker-configured>"===i&&(e.removeEventListener("message",t),e.removeEventListener("error",o),r.resolve(e))}}function o(r){r.preventDefault(),e.removeEventListener("message",t),e.removeEventListener("error",o),p.warn("Failed to create Worker. Fallback to execute module in main thread",r),e=new l,e.addEventListener("message",t),e.addEventListener("error",o)}var r=new n;return e.addEventListener("message",t),e.addEventListener("error",o),r.promise}function g(e){var t;if(null!=s["default"]){var n=r.mixin({},s);delete n["default"],t=JSON.parse(JSON.stringify(n))}else t=JSON.parse(JSON.stringify(s));var i={async:!0,baseUrl:v,locale:o.locale,has:{},paths:{}};r.mixin(i,s.workers.loaderConfig),i.has=r.mixin({"esri-cors":1,"dojo-test-sniff":0,"config-deferredInstrumentation":0,"host-webworker":1},i.has),i.paths=r.mixin({esri:"../esri",dojo:"../dojo",dojox:"../dojox",dstore:"../dstore",moment:"../moment"},i.paths),e.postMessage({type:"<configure>",configure:{esriConfig:t,dojoConfig:i,loaderUrl:h}})}var p=c.getLogger("esri.core.workers"),m=d.normalize(e.toUrl("./worker.js")),h=d.makeAbsolute(e.toUrl("dojo/dojo.js")),v=d.makeAbsolute("../",h)+"/",k=!d.hasSameOrigin(m,location.href),w=null,b=function(){function e(e,t,o){var r=this;this.connections=e,this.index=t,this.workerInitCallback=o,this.msgCount=0,this.outgoingJobs={},this.incomingJobs={},this.incomingStaticJobs={},u().then(function(e){r.worker=e,r.worker.addEventListener("message",r.message.bind(r)),r.worker.addEventListener("error",function(e){e.preventDefault(),p.error(e)}),r.workerInitCallback(r.index)})}return e.prototype.terminate=function(){this.worker.terminate()},e.prototype.openConnection=function(e,t){return this.invoke("<open-connection>",{path:e},void 0,t)},e.prototype.closeConnection=function(e){this.invoke("<close-connection>",void 0,void 0,e)},e.prototype.invoke=function(e,t,o,r){var i=this,s=++this.msgCount,a=new n(function(e){i.worker.postMessage({type:"<cancel>",id:s,connection:r,data:{reason:e}}),i.outgoingJobs[s]&&delete i.outgoingJobs[s]});return this.outgoingJobs[s]=a,this.worker.postMessage({type:e,id:s,connection:r,data:t},o),a.promise},e.prototype.message=function(e){var t=this;if(e&&e.data){var o=e.data.type;if(o){var r=e.data,n=e.data.id;if("<response>"===o&&n){var s=this.outgoingJobs[n];if(!s)return;delete this.outgoingJobs[n],r.error?s.reject(r.error):s.resolve(r.data)}else if("<cancel>"===o&&n){var a=this.incomingJobs[n];if(a&&a.cancel(r.data.reason),r.staticMsg){var c=this.incomingStaticJobs[n];c&&c.cancel(r.data.reason)}}else if("<static-message>"===o){var d=r.staticMsg,l=i.workerMessages[d];if(!l||"function"!=typeof l)return void this.worker.postMessage({type:"<static-message>",staticMsg:d,id:n,error:d+" message type is not available on the kernel!"});var u=l.call(this,r.data);this.incomingStaticJobs[n]=u,u.then(function(e){t.worker.postMessage({type:"<static-message>",staticMsg:d,id:n,data:e.data},e.buffers)}).otherwise(function(e){e||(e="Error encountered at method"+d),e.dojoType&&"cancel"===e.dojoType||t.worker.postMessage({type:"<static-message>",staticMsg:d,id:n,error:e})}).always(function(){delete t.incomingStaticJobs[n]})}else{var f=r.connection,g=this.connections[f];if(!g)return;var p=g.client;if(!p)return;var m=p[o];if("function"==typeof m){var h=m.call(p,r.data);this.incomingJobs[n]=h,h.then(function(e){t.worker.postMessage({type:"<response>",id:n,connection:f,error:e.error,data:e.data},e.buffers)}).otherwise(function(e){e||(e="Error encountered at method"+o),e.dojoType&&"cancel"===e.dojoType||t.worker.postMessage({type:"<response>",id:n,connection:f,error:e})}).always(function(){delete t.incomingJobs[n]})}}}}},e}();return b});
},
'esri/core/workers/WorkerFallbackImpl':function(){
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

define(["require","exports"],function(e,t){var n=function(){return this}(),r=function(){function e(){var e=this,t=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(function(n){e[n]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t[n].apply(t,e)}})}return e}(),s=n.MutationObserver||n.WebKitMutationObserver,o=function(){var e;if(n.process&&n.process.nextTick)e=function(e){n.process.nextTick(e)};else if(n.Promise)e=function(e){n.Promise.resolve().then(e)};else if(s){var t=[],r=document.createElement("div"),o=new s(function(){for(;t.length>0;)t.shift()()});o.observe(r,{attributes:!0}),e=function(e){t.push(e),r.setAttribute("queueStatus","1")}}return e}(),i=function(){function t(){this._dispatcher=new r,this._connections={},this._outgoingStaticMessages={},this._isInitialized=!1,this._workerPostMessage({type:"<worker-loaded>"})}return t.prototype.terminate=function(){this._connections={}},Object.defineProperty(t.prototype,"onmessage",{get:function(){return this._onmessageHandler},set:function(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onerror",{get:function(){return this._onerrorHandler},set:function(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)},enumerable:!0,configurable:!0}),t.prototype.postMessage=function(e,t){var n=this;o(function(){n._workerMessageHandler(new MessageEvent("message",{data:e}))})},t.prototype.dispatchEvent=function(e){return this._dispatcher.dispatchEvent(e)},t.prototype.addEventListener=function(e,t,n){this._dispatcher.addEventListener(e,t,n)},t.prototype.removeEventListener=function(e,t,n){this._dispatcher.removeEventListener(e,t,n)},t.prototype._workerPostMessage=function(e,t){var n=this;o(function(){n.dispatchEvent(new MessageEvent("message",{data:e}))})},t.prototype._workerMessageHandler=function(t){var n=this,r=t.data;if(r){var s=r.connection,o=r.type;if("<configure>"===o)this._isInitialized||this._workerPostMessage({type:"<worker-configured>"});else if("<open-connection>"===o){var i=r.data.path,a=r.id;if(this._connections[s])return void this._workerPostMessage({type:"<response>",id:a,connection:s});e(["./WorkerConnection",i],function(e,t){n._connections[s]=new e(t,{postMessage:function(e,t){return n._workerPostMessage(e,t)}},s),n._workerPostMessage({type:"<response>",id:a,data:{connection:s},error:void 0})})}else if("<close-connection>"===o)this._connections[s]&&delete this._connections[s];else if("<static-message>"===o){var c=r.id;if(this._outgoingStaticMessages[c]){var u=this._outgoingStaticMessages[c];delete this._outgoingStaticMessages[c],r.error?u.reject(r.error):u.resolve(r.data)}}else if(o){var d=this._connections[s];d&&d.proxy.message(t)}}},t}();return i});
},
'esri/core/LRUCache':function(){
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

define(["require","exports"],function(e,t){var u=function(){function e(e){if(this._cache={},this._lruQueue=[],0>=e)throw new Error("LRU cache size must be bigger than zero!");this._maxSize=e}return e.prototype.has=function(e){return void 0!==this._cache[e]},e.prototype.insert=function(e,t){var u=this.use(e);return null!==u?void(this._cache[e]=t):(this._collect(),this._cache[e]=t,void this._lruQueue.unshift(e))},e.prototype.use=function(e){var t=this._cache[e];return t?(this._lruQueue.splice(this._lruQueue.indexOf(e),1),this._lruQueue.unshift(e),t):null},e.prototype.print=function(){for(var e=0,t=this._lruQueue;e<t.length;e++){var u=t[e]; 0 && console.log("key: "+u+", value: "+this._cache[u])}},e.prototype._collect=function(){if(!(this._lruQueue.length<this._maxSize)){var e=this._lruQueue.pop(),t=this._cache[e];t&&t.release&&t.release(),delete this._cache[e]}},e}();return u});
},
'esri/views/vectorTiles/TileIndex':function(){
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

define(["require","exports","../2d/tiling/TileKey"],function(e,r,t){var i=function(){function e(e){if(!("index"in e))throw new Error("The tilemap is missing the 'index' property.");this._tilemap=e.index}return e.prototype.dataKey=function(e){var r=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return null;for(var i=e;0!==i.level;)i=new t(i.level-1,i.row>>1,i.col>>1,i.world),r.push(i);var o,l,n=this._tilemap,a=r.pop();if(1===n)return a;for(;r.length;){o=r.pop();var f=a.level+1,h=2*a.row,c=2*a.col,p=[t.getId(f,h,c,o.world),t.getId(f,h,c+1,o.world),t.getId(f,h+1,c,o.world),t.getId(f,h+1,c+1,o.world)];if(l=p.indexOf(o.id),n){if(0===n[l]){a=null;break}if(1===n[l]){a=o;break}a=o,n=n[l]}}return a},e.prototype.forEach=function(e,r,t,i,o){this._callback=o,this._maxLevel=r+e,this._forEach(this._tilemap,r,t,i)},e.prototype._forEach=function(e,r,t,i){0!==e&&(this._callback(r,t,i),r!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],r+1,2*t,2*i),this._forEach(e[1],r+1,2*t,2*i+1),this._forEach(e[2],r+1,2*t+1,2*i),this._forEach(e[3],r+1,2*t+1,2*i+1)))},e}();return i});
},
'esri/views/vectorTiles/SpriteMosaic':function(){
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

define(["require","exports","./Rect","./GeometryUtils","./RectangleBinPack","../webgl/Texture"],function(t,i,e,s,h,a){var r=function(){function t(t,i,e){void 0===e&&(e=0),this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(0>=t||0>=i)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=t,this._pageHeight=i,e>0&&(this._maxItemSize=e),this._binPack=new h(t-4,i-4)}return t.prototype.getWidth=function(t){return t>=this._size.length?-1:this._size[t][0]},t.prototype.getHeight=function(t){return t>=this._size.length?-1:this._size[t][1]},t.prototype.setSpriteSource=function(t){if(this.dispose(),this.pixelRatio=t.devicePixelRatio,0===this._mosaicsData.length){this._binPack=new h(this._pageWidth-4,this._pageHeight-4);var i=Math.floor(this._pageWidth),e=Math.floor(this._pageHeight);this._mosaicsData[0]=new Uint32Array(i*e),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=t},t.prototype.getSpriteItem=function(t,i){void 0===i&&(i=!1);var e=this._mosaicRects[t];if(e)return e;if(!this._sprites||"loaded"!==this._sprites.loadStatus)return null;var s=this._sprites.getSpritePosition(t);if(!s||!s.width||!s.height||s.width<0||s.height<0)return null;var h=this._allocateImage(s.width,s.height),a=h[0],r=h[1],o=h[2];return a.width<=0?null:(e={rect:a,width:s.width,height:s.height,sdf:s.sdf,pixelRatio:s.pixelRatio,page:r},this._copy(a,s,r,o,i),this._mosaicRects[t]=e,e)},t.prototype.preloadSpriteItems=function(){for(var t=0,i=this._sprites.spriteNames;t<i.length;t++){var e=i[t];this.getSpriteItem(e,!0)}},t.prototype.getSpriteItems=function(t){for(var i={},e=0,s=t;e<s.length;e++){var h=s[e];i[h]=this.getSpriteItem(h)}return i},t.prototype.getMosaicItemPosition=function(t,i){var e=this.getSpriteItem(t,i),s=e&&e.rect;if(!s)return null;s.width=e.width,s.height=e.height;var h=e.width,a=e.height,r=2;return{size:[e.width,e.height],tl:[(s.x+r)/this._size[e.page][0],(s.y+r)/this._size[e.page][1]],br:[(s.x+r+h)/this._size[e.page][0],(s.y+r+a)/this._size[e.page][1]],page:e.page}},t.prototype.bind=function(t,i,e,s){void 0===e&&(e=0),void 0===s&&(s=0),this._textures[e]||(this._textures[e]=new a(t,{pixelFormat:6408,dataType:5121,width:this._size[e][0],height:this._size[e][1]},new Uint8Array(this._mosaicsData[e].buffer)));var h=this._textures[e];h.setSamplingMode(i),this._dirties[e]&&h.setData(new Uint8Array(this._mosaicsData[e].buffer)),t.bindTexture(h,s),this._dirties[e]=!1},t._copyBits=function(t,i,e,s,h,a,r,o,n,p,_){var g=s*i+e,u=o*a+r;if(_){u-=a;for(var c=-1;p>=c;c++,g=((c+p)%p+s)*i+e,u+=a)for(var d=-1;n>=d;d++)h[u+d]=t[g+(d+n)%n]}else for(var c=0;p>c;c++){for(var d=0;n>d;d++)h[u+d]=t[g+d];g+=i,u+=a}},t.prototype._copy=function(i,e,s,h,a){if(this._sprites&&"loaded"===this._sprites.loadStatus&&!(s>=this._mosaicsData.length)){var r=new Uint32Array(this._sprites.image.buffer),o=this._mosaicsData[s];o&&r||console.error("Source or target images are uninitialized!");var n=2;t._copyBits(r,this._sprites.width,e.x,e.y,o,h[0],i.x+n,i.y+n,e.width,e.height,a),this._dirties[s]=!0}},t.prototype._allocateImage=function(t,i){t+=2,i+=2;var a=Math.max(t,i);if(this._maxItemSize&&this._maxItemSize<a){var r=Math.pow(2,Math.ceil(s.log2(t))),o=Math.pow(2,Math.ceil(s.log2(i))),n=new e(0,0,t,i);return this._mosaicsData.push(new Uint32Array(r*o)),this._dirties.push(!0),this._size.push([r,o]),this._textures.push(void 0),[n,this._mosaicsData.length-1,[r,o]]}var p=t%4?4-t%4:4,_=i%4?4-i%4:4;1===p&&(p=5),1===_&&(_=5);var g=this._binPack.allocate(t+p,i+_);return g.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new h(this._pageWidth-4,this._pageHeight-4),this._allocateImage(t,i)):[g,this._currentPage,[this._pageWidth,this._pageHeight]]},t.prototype.dispose=function(){this._binPack=null,this._mosaicRects={};for(var t=0,i=this._textures;t<i.length;t++){var e=i[t];e&&e.dispose()}this._textures.length=0},t}();return r});
},
'esri/views/vectorTiles/Rect':function(){
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

define(["require","exports"],function(t,i){var e=function(){function t(t,i,e,n){void 0===t&&(t=0),void 0===i&&(i=0),void 0===e&&(e=0),void 0===n&&(n=0),this.x=t,this.y=i,this.width=e,this.height=n}return Object.defineProperty(t.prototype,"isEmpty",{get:function(){return this.width<=0||this.height<=0},enumerable:!0,configurable:!0}),t}();return e});
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
'esri/views/vectorTiles/RectangleBinPack':function(){
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

define(["require","exports","./Rect"],function(h,e,t){var i=function(){function h(h,e){this._width=0,this._height=0,this._free=[],this._width=h,this._height=e,this._free.push(new t(0,0,h,e))}return h.prototype.allocate=function(h,e){for(var i=null,r=-1,s=0;s<this._free.length;++s){var n=this._free[s];h<=n.width&&e<=n.height&&(null===i||n.y<=i.y&&n.x<=i.x)&&(i=n,r=s)}return null===i?new t:(this._free.splice(r,1),i.width<i.height?(i.width>h&&this._free.push(new t(i.x+h,i.y,i.width-h,e)),i.height>e&&this._free.push(new t(i.x,i.y+e,i.width,i.height-e))):(i.width>h&&this._free.push(new t(i.x+h,i.y,i.width-h,i.height)),i.height>e&&this._free.push(new t(i.x,i.y+e,h,i.height-e))),new t(i.x,i.y,h,e))},h.prototype.release=function(h){for(var e=0;e<this._free.length;++e){var t=this._free[e];if(t.y===h.y&&t.height===h.height&&t.x+t.width===h.x)t.width+=h.width;else if(t.x===h.x&&t.width===h.width&&t.y+t.height===h.y)t.height+=h.height;else if(h.y===t.y&&h.height===t.height&&h.x+h.width===t.x)t.x=h.x,t.width+=h.width;else{if(h.x!==t.x||h.width!==t.width||h.y+h.height!==t.y)continue;t.y=h.y,t.height+=h.height}this._free.splice(e,1),this.release(h)}this._free.push(h)},h}();return i});
},
'esri/views/vectorTiles/SpriteSource':function(){
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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","dojo/Deferred","dojo/promise/all","../../request","../../kernel","../../core/promiseUtils"],function(t,e,i,r,a,n,o,s,h){var d=function(){function t(t,e){this.baseURL=t,this.devicePixelRatio=e,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}return Object.defineProperty(t.prototype,"spriteNames",{get:function(){var t=[];for(var e in this._spritesData)t.push(e);return t.sort(),t},enumerable:!0,configurable:!0}),t.prototype.getSpritePosition=function(t){return this._spritesData[t]},t.prototype.load=function(){var t=this;return this.loadStatus="loading",this.baseURL?this._loadSprites().then(function(){return t.loadStatus="loaded",t}).otherwise(function(e){return t.loadStatus="failed",t}):h.resolve(this)},t.prototype._loadSprites=function(){var t=this;this._isRetina=this.devicePixelRatio>1.15?!0:!1;var e=this.baseURL,i=this._isRetina?"@2x":"",r=o(e+i+".json",{callbackParamName:"callback",responseType:"json"}).then(function(e){t._spritesData=e.data}),h=new a,d=new Image;d.crossOrigin="anonymous",d.onload=function(){d.onload=null,t.width=d.width,t.height=d.height;var e=document.createElement("canvas");e.width=d.width,e.height=d.height;var i=e.getContext("2d");i.drawImage(d,0,0,d.width,d.height);for(var r,a=i.getImageData(0,0,d.width,d.height),n=new Uint8Array(a.data),o=0;o<n.length;o+=4)r=n[o+3]/255,n[o]=n[o]*r,n[o+1]=n[o+1]*r,n[o+2]=n[o+2]*r;t.image=n,h.resolve()};var l=""+e+i+".png";if(s.id){var u=s.id.findCredential(l);u&&u.token&&(l+="?token="+u.token)}return d.src=l,n([r,h.promise])},t}();return d});
},
'esri/views/vectorTiles/GlyphMosaic':function(){
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

define(["require","exports","dojo/promise/all","dojo/has","./Rect","../webgl/Texture","./RectangleBinPack"],function(e,t,i,r,s,h,a){var n;r("stable-symbol-rendering")&&(n=new Set);var o=function(){function e(e,t,i){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,(0>=e||0>=t)&&console.error("Glyph mosaic width and height must be greater than zero!"),this.width=e,this.height=t,this._glyphSource=i,this._binPack=new a(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(void 0)}return e.prototype.getGlyphItems=function(e,t,h){for(var o=this,g=[],l=this._glyphSource,d=new Set,p=1/256,u=0,_=h;u<_.length;u++){var c=_[u],v=Math.floor(c*p);d.add(v)}var f=[];return d.forEach(function(e){if(256>=e){var i=t+e;if(o._rangePromises.has(i))f.push(o._rangePromises.get(i));else{var r=l.getRange(t,e).always(function(){o._rangePromises["delete"](i)});o._rangePromises.set(i,r),f.push(r)}}}),i(f).then(function(e){var i=o._glyphIndex[t];i||(i={},o._glyphIndex[t]=i);var p;if(r("stable-symbol-rendering")){n.clear();for(var u=0,_=h;u<_.length;u++){var c=_[u];n.add(c)}var v=[];d.forEach(function(e){v.push(e)}),v.sort(),p=[];for(var f=0,y=v;f<y.length;f++)for(var w=y[f],m=0;256>m;++m)p.push(256*w+m)}else p=h;for(var x=0,P=p;x<P.length;x++){var c=P[x],b=i[c];if(b)(!r("stable-symbol-rendering")||n.has(c))&&(g[c]={rect:b.rect,metrics:b.metrics,page:b.page});else{var D=l.getGlyph(t,c);if(D&&D.metrics){var I=D.metrics,k=void 0;if(0===I.width)k=new s(0,0,0,0);else{var S=3,G=I.width+2*S,A=I.height+2*S,E=G%4?4-G%4:4,M=A%4?4-A%4:4;1===E&&(E=5),1===M&&(M=5),k=o._binPack.allocate(G+E,A+M),k.isEmpty&&(o._dirties[o._currentPage]||(o._glyphData[o._currentPage]=null),o._currentPage=o._glyphData.length,o._glyphData.push(new Uint8Array(o.width*o.height)),o._dirties.push(!0),o._textures.push(void 0),o._binPack=new a(o.width-4,o.height-4),k=o._binPack.allocate(G+E,A+M));var R=o._glyphData[o._currentPage],T=D.bitmap,U=void 0,j=void 0;if(T)for(var z=0;A>z;z++){U=G*z,j=o.width*(k.y+z+1)+k.x;for(var q=0;G>q;q++)R[j+q+1]=T[U+q]}}i[c]={rect:k,metrics:I,tileIDs:null,page:o._currentPage},(!r("stable-symbol-rendering")||n.has(c))&&(g[c]={rect:k,metrics:I,page:o._currentPage}),o._dirties[o._currentPage]=!0}}}return g})},e.prototype.removeGlyphs=function(e){for(var t in this._glyphIndex){var i=this._glyphIndex[t];if(i){var r=void 0;for(var s in i)if(r=i[s],r.tileIDs["delete"](e),0===r.tileIDs.size){for(var h=this._glyphData[r.page],a=r.rect,n=void 0,o=void 0,g=0;g<a.height;g++)for(n=this.width*(a.y+g)+a.x,o=0;o<a.width;o++)h[n+o]=0;delete i[s],this._dirties[r.page]=!0}}}},e.prototype.bind=function(e,t,i,r){void 0===r&&(r=0),this._textures[i]||(this._textures[i]=new h(e,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var s=this._textures[i];s.setSamplingMode(t),this._dirties[i]&&s.setData(this._glyphData[i]),e.bindTexture(s,r),this._dirties[i]=!1},e.prototype.dispose=function(){this._binPack=null;for(var e=0,t=this._textures;e<t.length;e++){var i=t[e];i&&i.dispose()}this._textures.length=0},e}();return o});
},
'esri/views/vectorTiles/GlyphSource':function(){
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

define(["require","exports","../../core/promiseUtils","../../request","../../core/pbf"],function(t,e,a,r,n){var i=function(){function t(t){for(this._metrics=[],this._bitmaps=[];t.next();)switch(t.tag()){case 1:for(var e=t.getMessage();e.next();)switch(e.tag()){case 3:for(var a=e.getMessage(),r=void 0,n=void 0,i=void 0,s=void 0,o=void 0,c=void 0,g=void 0;a.next();)switch(a.tag()){case 1:r=a.getUInt32();break;case 2:n=a.getBytes();break;case 3:i=a.getUInt32();break;case 4:s=a.getUInt32();break;case 5:o=a.getSInt32();break;case 6:c=a.getSInt32();break;case 7:g=a.getUInt32();break;default:a.skip()}r&&(this._metrics[r]={width:i,height:s,left:o,top:c,advance:g},this._bitmaps[r]=n);break;default:e.skip()}break;default:t.skip()}}return t.prototype.getMetrics=function(t){return this._metrics[t]},t.prototype.getBitmap=function(t){return this._bitmaps[t]},t}(),s=function(){function t(){this._ranges=[]}return t.prototype.getRange=function(t){return this._ranges[t]},t.prototype.addRange=function(t,e){this._ranges[t]=e},t}(),o=function(){function t(t){this._glyphInfo={},this._baseURL=t}return t.prototype.getRange=function(t,e){var s=this._getFontStack(t),o=s.getRange(e);if(o)return a.resolve();var c=256*e,g=c+255,f=this._baseURL.replace("{fontstack}",t).replace("{range}",c+"-"+g);return r(f,{callbackParamName:"callback",responseType:"array-buffer"}).then(function(t){s.addRange(e,new i(new n(new Uint8Array(t.data),new DataView(t.data))))})},t.prototype.getGlyph=function(t,e){var a=this._getFontStack(t);if(a){var r=Math.floor(e/256);if(!(r>256)){var n=a.getRange(r);if(n)return{metrics:n.getMetrics(e),bitmap:n.getBitmap(e)}}}},t.prototype._getFontStack=function(t){var e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new s),e},t}();return o});
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
'esri/views/vectorTiles/VectorTileDisplayObject':function(){
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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/libs/gl-matrix/vec2","../../core/libs/gl-matrix/mat4","../../core/ObjectPool","../../geometry/support/spatialReferenceUtils","../webgl/BufferObject","../2d/engine/DisplayObject","../2d/tiling/TileKey","./RenderBucket"],function(e,t,r,i,s,a,n,l,o,f,u){var h=function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var a=e.call(this)||this;return a._renderBuckets=[],a._vectorTileData=null,a._symbolUpdateData=null,a.status=5,a.coords=[0,0],a.tileTransform={transform:Float32Array[16],displayCoord:Float32Array[2]},a.stencilData={mask:0,reference:0},a.status=0,a.tileTransform.transform=s.create(),a.tileTransform.displayCoord=i.create(),t.length>0&&(n=a.acquire).call.apply(n,[a].concat(t)),a;var n}return r(t,e),t.prototype.reset=function(){f.pool.release(this.key),this.key=null,this.refKey=null,this.coords[0]=0,this.coords[1]=0,this.width=0,this.height=0,this.resolution=null,this.rotation=0,this._vectorTileData=null,this.styleLayers=null,this._glyphsMosaic=null,this.workerID=null,this._connection=null,this.id=null,this.tileTransform.transform.fill(0),this.tileTransform.displayCoord.fill(0),this.stencilData.mask=0,this.stencilData.reference=0,this._renderBuckets.length=0,this._symbolUpdateData=null,this.status=0},t.prototype.acquire=function(e,t,r,i,s,a){this.key=e,this.refKey=t;var l=r.lods[e.level].resolution,o=r.size[0]*l,f=r.origin,u=e.col*o,h=e.row*o,c=r.spatialReference,d=c&&(c._isWrappable?c._isWrappable():c.isWrappable),x=0;if(d){var p=n.getInfo(c);x=p.valid[1]-p.valid[0]}var y=e.world*x,B=f.x+u+y,D=f.y-h;this.coords[0]=B,this.coords[1]=D,this.widthInPixels=r.size[1],this.coordRange=4096,this.resolution=l,this.rotation=a,this.styleLayers=i,this._glyphsMosaic=s,this.id=e.id,this.status=1},t.prototype.setData=function(e,t,r){this._vectorTileData=e,this.workerID=t,this._connection=r,this.status=3},t.prototype.updateSymbolData=function(e){e&&(this._symbolUpdateData=e,this.requestRender())},t.prototype.dispose=function(){this.polygonTrianglesVertexArrayObject&&(this.polygonTrianglesVertexArrayObject.dispose(),this.polygonTrianglesVertexArrayObject=null),this.polygonOutlineVertexArrayObject&&(this.polygonOutlineVertexArrayObject.dispose(),this.polygonOutlineVertexArrayObject=null),this.lineTrianglesVertexArrayObject&&(this.lineTrianglesVertexArrayObject.dispose(),this.lineTrianglesVertexArrayObject=null),this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null),this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),this.textVertexArrayObject=null),this.polygonTrianglesVertexBuffer&&(this.polygonTrianglesVertexBuffer.dispose(),this.polygonTrianglesVertexBuffer=null),this.polygonTrianglesIndexBuffer&&(this.polygonTrianglesIndexBuffer.dispose(),this.polygonTrianglesIndexBuffer=null),this.polygonOutlinesVertexBuffer&&(this.polygonOutlinesVertexBuffer.dispose(),this.polygonOutlinesVertexBuffer=null),this.polygonOutlinesIndexBuffer&&(this.polygonOutlinesIndexBuffer.dispose(),this.polygonOutlinesIndexBuffer=null),this.lineVertexBuffer&&(this.lineVertexBuffer.dispose(),this.lineVertexBuffer=null),this.lineTrianglesIndexBuffer&&(this.lineTrianglesIndexBuffer.dispose(),this.lineTrianglesIndexBuffer=null),this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null),this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null),this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null),this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=null),this.texture&&(this.texture.dispose(),this.texture=null),this._renderBuckets.length=0,this.status=7},t.prototype.attach=function(e){if(4===this.status)return!0;if(this.status=3,!this._vectorTileData)return!1;if(0===this._renderBuckets.length)for(var t=new Uint32Array(this._vectorTileData.bucketDataInfo),r=t.length,i=0;r>i;){var s=t[i],a=t[i+1];if(0===a){var n=new u.BackgroundRenderBucket;n.layerID=s,this._renderBuckets.push(n),i+=2}else if(1===a){var o=new u.FillRenderBucket;o.layerID=s,o.triangleElementStart=t[i+2],o.triangleElementCount=t[i+3],o.outlineElementStart=t[i+4],o.outlineElementCount=t[i+5],this._renderBuckets.push(o),i+=6}else if(2===a){var f=new u.LineRenderBucket;f.layerID=s,f.triangleElementStart=t[i+2],f.triangleElementCount=t[i+3],this._renderBuckets.push(f),i+=6}else if(3===a){var h=new u.SymbolRenderBucket;h.layerID=s,h.isSDF=0!==t[i+2];var c=t[i+3],d=i+4;if(c>0){d=i+4;for(var x=void 0,p=void 0,y=void 0,B=0;c>B;B++)x=t[d],p=t[d+1],y=t[d+2],h.markerPerPageElementsMap.set(x,[p,y]),d+=3}var D=d,g=t[D];if(g>0){D++;for(var x=void 0,p=void 0,y=void 0,B=0;g>B;B++)x=t[D],p=t[D+1],y=t[D+2],h.glyphPerPageElementsMap.set(x,[p,y]),D+=3}this._renderBuckets.push(h),i+=5+3*c+3*g}else console.error("Bad bucket type!")}for(var b=e.context,v=new Uint32Array(this._vectorTileData.bufferDataInfo),_=v.length,V=0,I=0;_>I;I+=2,V++){var k=v[I],T=v[I+1];if(!(0>=T||0===this._vectorTileData.bufferData[V].byteLength))switch(k){case 2:this.polygonTrianglesVertexBuffer?this.polygonTrianglesVertexBuffer.setData(this._vectorTileData.bufferData[V]):this.polygonTrianglesVertexBuffer=l.createVertex(b,35044,this._vectorTileData.bufferData[V]);break;case 6:this.polygonTrianglesIndexBuffer?this.polygonTrianglesIndexBuffer.setData(this._vectorTileData.bufferData[V]):this.polygonTrianglesIndexBuffer=l.createIndex(b,35044,this._vectorTileData.bufferData[V]);break;case 3:this.polygonOutlinesVertexBuffer?this.polygonOutlinesVertexBuffer.setData(this._vectorTileData.bufferData[V]):this.polygonOutlinesVertexBuffer=l.createVertex(b,35044,this._vectorTileData.bufferData[V]);break;case 7:this.polygonOutlinesIndexBuffer?this.polygonOutlinesIndexBuffer.setData(this._vectorTileData.bufferData[V]):this.polygonOutlinesIndexBuffer=l.createIndex(b,35044,this._vectorTileData.bufferData[V]);break;case 0:this.lineVertexBuffer?this.lineVertexBuffer.setData(this._vectorTileData.bufferData[V]):this.lineVertexBuffer=l.createVertex(b,35044,this._vectorTileData.bufferData[V]);break;case 8:this.lineTrianglesIndexBuffer?this.lineTrianglesIndexBuffer.setData(this._vectorTileData.bufferData[V]):this.lineTrianglesIndexBuffer=l.createIndex(b,35044,this._vectorTileData.bufferData[V]);break;case 4:this.iconVertexBuffer?this.iconVertexBuffer.setData(this._vectorTileData.bufferData[V]):this.iconVertexBuffer=l.createVertex(b,35044,this._vectorTileData.bufferData[V]);break;case 9:this.iconIndexBuffer?this.iconIndexBuffer.setData(this._vectorTileData.bufferData[V]):this.iconIndexBuffer=l.createIndex(b,35044,this._vectorTileData.bufferData[V]);break;case 5:this.textVertexBuffer?this.textVertexBuffer.setData(this._vectorTileData.bufferData[V]):this.textVertexBuffer=l.createVertex(b,35044,this._vectorTileData.bufferData[V]);break;case 10:this.textIndexBuffer?this.textIndexBuffer.setData(this._vectorTileData.bufferData[V]):this.textIndexBuffer=l.createIndex(b,35044,this._vectorTileData.bufferData[V])}}return this.status=4,!0},t.prototype.detach=function(t){-1!==this.workerID&&this._connection&&6!==this.status&&7!==this.status&&this._connection.broadcast("destructTileData",{key:this.id,worker:this.workerID},[]),this.dispose(),e.prototype.detach.call(this,t)},t.prototype.doRender=function(e){if(this.visible&&4===this.status){var t=e.context,r=e.renderer;if(t&&r){var i=e.drawphase;this._symbolUpdateData&&this._updateSymbolData(e),t.setStencilFunction(514,this.stencilData.reference,this.stencilData.mask);var s=this.styleLayers,a=void 0!==e.layerOpacity?e.layerOpacity:1;if(0!==a){var n,l=this._renderBuckets.length,o=0;if(0===i)for(o=l-1;o>=0;o--)n=this._renderBuckets[o],3!==n.type&&n.hasData()&&r.renderBucket(t,n,e.displayLevel,e.requiredLevel,i,this,s.layers[n.layerID],a);else for(o=0;l>o;o++)n=this._renderBuckets[o],n.hasData()&&r.renderBucket(t,n,e.displayLevel,e.requiredLevel,i,this,s.layers[n.layerID],a)}}}},t.prototype._updateSymbolData=function(e){var t=new Uint32Array(this._symbolUpdateData.bucketDataInfo),r=t.length;if(0===r)return this._symbolUpdateData=null,!0;if(e.budget.remaining<1||4!==this.status)return this.requestRender(),!1;for(var i=e.context,s=new Uint32Array(this._symbolUpdateData.bufferDataInfo),a=s.length,n=0,o=0;a>o;o+=2,n++){var f=s[o];switch(f){case 4:this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null),this.iconVertexBuffer=l.createVertex(i,35044,this._symbolUpdateData.bufferData[n]);break;case 9:this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null),this.iconIndexBuffer=l.createIndex(i,35044,this._symbolUpdateData.bufferData[n]);break;case 5:this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null),this.textVertexBuffer=l.createVertex(i,35044,this._symbolUpdateData.bufferData[n]);break;case 10:this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=null),this.textIndexBuffer=l.createIndex(i,35044,this._symbolUpdateData.bufferData[n])}}for(var h=this._renderBuckets.length,c=0;h>c;c++){var d=this._renderBuckets[c];if(d instanceof u.SymbolRenderBucket){var x=this._renderBuckets[c];x.markerPerPageElementsMap.clear(),x.glyphPerPageElementsMap.clear()}}for(var p,y,B=0;r>B;){var D=t[B];y=-1;for(var g=this._renderBuckets.length,c=0;g>c;c++)if(this._renderBuckets[c].layerID===D){y=c;break}p=this._renderBuckets[y],p||(p=new u.SymbolRenderBucket,p.layerID=D,p.isSDF=0!==t[B+2],this._renderBuckets.push(p));var b=t[B+3],v=B+4;if(b>0){v=B+4;for(var _=void 0,V=void 0,I=void 0,k=0;b>k;k++)_=t[v],V=t[v+1],I=t[v+2],p.markerPerPageElementsMap.set(_,[V,I]),v+=3}var T=v,m=t[T];if(m>0){T++;for(var _=void 0,V=void 0,I=void 0,k=0;m>k;k++)_=t[T],V=t[T+1],I=t[T+2],p.glyphPerPageElementsMap.set(_,[V,I]),T+=3}B+=5+3*b+3*m}return this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null),this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),this.textVertexArrayObject=null),this._symbolUpdateData=null,!0},t}(o);return h.pool=new a(h),h});
},
'esri/core/libs/gl-matrix/vec2':function(){
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

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE. */

define(["./common"],function(n){var t={};return t.create=function(){var t=new n.ARRAY_TYPE(2);return t[0]=0,t[1]=0,t},t.clone=function(t){var r=new n.ARRAY_TYPE(2);return r[0]=t[0],r[1]=t[1],r},t.fromValues=function(t,r){var u=new n.ARRAY_TYPE(2);return u[0]=t,u[1]=r,u},t.copy=function(n,t){return n[0]=t[0],n[1]=t[1],n},t.set=function(n,t,r){return n[0]=t,n[1]=r,n},t.add=function(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n},t.subtract=function(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n},t.sub=t.subtract,t.multiply=function(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n},t.mul=t.multiply,t.divide=function(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n},t.div=t.divide,t.ceil=function(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n},t.floor=function(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n},t.min=function(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n},t.max=function(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n},t.round=function(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n},t.scale=function(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n},t.scaleAndAdd=function(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n},t.distance=function(n,t){var r=t[0]-n[0],u=t[1]-n[1];return Math.sqrt(r*r+u*u)},t.dist=t.distance,t.squaredDistance=function(n,t){var r=t[0]-n[0],u=t[1]-n[1];return r*r+u*u},t.sqrDist=t.squaredDistance,t.length=function(n){var t=n[0],r=n[1];return Math.sqrt(t*t+r*r)},t.len=t.length,t.squaredLength=function(n){var t=n[0],r=n[1];return t*t+r*r},t.sqrLen=t.squaredLength,t.negate=function(n,t){return n[0]=-t[0],n[1]=-t[1],n},t.inverse=function(n,t){return n[0]=1/t[0],n[1]=1/t[1],n},t.normalize=function(n,t){var r=t[0],u=t[1],a=r*r+u*u;return a>0&&(a=1/Math.sqrt(a),n[0]=t[0]*a,n[1]=t[1]*a),n},t.dot=function(n,t){return n[0]*t[0]+n[1]*t[1]},t.cross=function(n,t,r){var u=t[0]*r[1]-t[1]*r[0];return n[0]=n[1]=0,n[2]=u,n},t.lerp=function(n,t,r,u){var a=t[0],e=t[1];return n[0]=a+u*(r[0]-a),n[1]=e+u*(r[1]-e),n},t.random=function(t,r){r=r||1;var u=2*n.RANDOM()*Math.PI;return t[0]=Math.cos(u)*r,t[1]=Math.sin(u)*r,t},t.transformMat2=function(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[2]*a,n[1]=r[1]*u+r[3]*a,n},t.transformMat2d=function(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[2]*a+r[4],n[1]=r[1]*u+r[3]*a+r[5],n},t.transformMat3=function(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[3]*a+r[6],n[1]=r[1]*u+r[4]*a+r[7],n},t.transformMat4=function(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[4]*a+r[12],n[1]=r[1]*u+r[5]*a+r[13],n},t.forEach=function(){var n=t.create();return function(t,r,u,a,e,o){var i,c;for(r||(r=2),u||(u=0),c=a?Math.min(a*r+u,t.length):t.length,i=u;c>i;i+=r)n[0]=t[i],n[1]=t[i+1],e(n,n,o),t[i]=n[0],t[i+1]=n[1];return t}}(),t.str=function(n){return"vec2("+n[0]+", "+n[1]+")"},t.exactEquals=function(n,t){return n[0]===t[0]&&n[1]===t[1]},t.equals=function(t,r){var u=t[0],a=t[1],e=r[0],o=r[1];return Math.abs(u-e)<=n.EPSILON*Math.max(1,Math.abs(u),Math.abs(e))&&Math.abs(a-o)<=n.EPSILON*Math.max(1,Math.abs(a),Math.abs(o))},t});
},
'esri/core/libs/gl-matrix/common':function(){
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

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE. */

define([],function(){var a={};a.EPSILON=1e-6,a.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,a.RANDOM=Math.random,a.ENABLE_SIMD=!1,a.SIMD_AVAILABLE=a.ARRAY_TYPE===Float32Array&&"SIMD"in this,a.USE_SIMD=a.ENABLE_SIMD&&a.SIMD_AVAILABLE,a.setMatrixArrayType=function(t){a.ARRAY_TYPE=t};var t=Math.PI/180;return a.toRadian=function(a){return a*t},a.equals=function(t,r){return Math.abs(t-r)<=a.EPSILON*Math.max(1,Math.abs(t),Math.abs(r))},a});
},
'esri/core/libs/gl-matrix/mat4':function(){
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

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE. */

define(["./common"],function(a){var t={scalar:{},SIMD:{}};return t.create=function(){var t=new a.ARRAY_TYPE(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.clone=function(t){var l=new a.ARRAY_TYPE(16);return l[0]=t[0],l[1]=t[1],l[2]=t[2],l[3]=t[3],l[4]=t[4],l[5]=t[5],l[6]=t[6],l[7]=t[7],l[8]=t[8],l[9]=t[9],l[10]=t[10],l[11]=t[11],l[12]=t[12],l[13]=t[13],l[14]=t[14],l[15]=t[15],l},t.copy=function(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a},t.fromValues=function(t,l,o,M,S,I,D,x,F,s,u,r,e,n,i,h){var m=new a.ARRAY_TYPE(16);return m[0]=t,m[1]=l,m[2]=o,m[3]=M,m[4]=S,m[5]=I,m[6]=D,m[7]=x,m[8]=F,m[9]=s,m[10]=u,m[11]=r,m[12]=e,m[13]=n,m[14]=i,m[15]=h,m},t.set=function(a,t,l,o,M,S,I,D,x,F,s,u,r,e,n,i,h){return a[0]=t,a[1]=l,a[2]=o,a[3]=M,a[4]=S,a[5]=I,a[6]=D,a[7]=x,a[8]=F,a[9]=s,a[10]=u,a[11]=r,a[12]=e,a[13]=n,a[14]=i,a[15]=h,a},t.identity=function(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},t.scalar.transpose=function(a,t){if(a===t){var l=t[1],o=t[2],M=t[3],S=t[6],I=t[7],D=t[11];a[1]=t[4],a[2]=t[8],a[3]=t[12],a[4]=l,a[6]=t[9],a[7]=t[13],a[8]=o,a[9]=S,a[11]=t[14],a[12]=M,a[13]=I,a[14]=D}else a[0]=t[0],a[1]=t[4],a[2]=t[8],a[3]=t[12],a[4]=t[1],a[5]=t[5],a[6]=t[9],a[7]=t[13],a[8]=t[2],a[9]=t[6],a[10]=t[10],a[11]=t[14],a[12]=t[3],a[13]=t[7],a[14]=t[11],a[15]=t[15];return a},t.SIMD.transpose=function(a,t){var l,o,M,S,I,D,x,F,s,u;return l=SIMD.Float32x4.load(t,0),o=SIMD.Float32x4.load(t,4),M=SIMD.Float32x4.load(t,8),S=SIMD.Float32x4.load(t,12),I=SIMD.Float32x4.shuffle(l,o,0,1,4,5),D=SIMD.Float32x4.shuffle(M,S,0,1,4,5),x=SIMD.Float32x4.shuffle(I,D,0,2,4,6),F=SIMD.Float32x4.shuffle(I,D,1,3,5,7),SIMD.Float32x4.store(a,0,x),SIMD.Float32x4.store(a,4,F),I=SIMD.Float32x4.shuffle(l,o,2,3,6,7),D=SIMD.Float32x4.shuffle(M,S,2,3,6,7),s=SIMD.Float32x4.shuffle(I,D,0,2,4,6),u=SIMD.Float32x4.shuffle(I,D,1,3,5,7),SIMD.Float32x4.store(a,8,s),SIMD.Float32x4.store(a,12,u),a},t.transpose=a.USE_SIMD?t.SIMD.transpose:t.scalar.transpose,t.scalar.invert=function(a,t){var l=t[0],o=t[1],M=t[2],S=t[3],I=t[4],D=t[5],x=t[6],F=t[7],s=t[8],u=t[9],r=t[10],e=t[11],n=t[12],i=t[13],h=t[14],m=t[15],d=l*D-o*I,z=l*x-M*I,f=l*F-S*I,c=o*x-M*D,b=o*F-S*D,w=M*F-S*x,v=s*i-u*n,p=s*h-r*n,E=s*m-e*n,P=u*h-r*i,O=u*m-e*i,L=r*m-e*h,N=d*L-z*O+f*P+c*E-b*p+w*v;return N?(N=1/N,a[0]=(D*L-x*O+F*P)*N,a[1]=(M*O-o*L-S*P)*N,a[2]=(i*w-h*b+m*c)*N,a[3]=(r*b-u*w-e*c)*N,a[4]=(x*E-I*L-F*p)*N,a[5]=(l*L-M*E+S*p)*N,a[6]=(h*f-n*w-m*z)*N,a[7]=(s*w-r*f+e*z)*N,a[8]=(I*O-D*E+F*v)*N,a[9]=(o*E-l*O-S*v)*N,a[10]=(n*b-i*f+m*d)*N,a[11]=(u*f-s*b-e*d)*N,a[12]=(D*p-I*P-x*v)*N,a[13]=(l*P-o*p+M*v)*N,a[14]=(i*z-n*c-h*d)*N,a[15]=(s*c-u*z+r*d)*N,a):null},t.SIMD.invert=function(a,t){var l,o,M,S,I,D,x,F,s,u,r=SIMD.Float32x4.load(t,0),e=SIMD.Float32x4.load(t,4),n=SIMD.Float32x4.load(t,8),i=SIMD.Float32x4.load(t,12);return I=SIMD.Float32x4.shuffle(r,e,0,1,4,5),o=SIMD.Float32x4.shuffle(n,i,0,1,4,5),l=SIMD.Float32x4.shuffle(I,o,0,2,4,6),o=SIMD.Float32x4.shuffle(o,I,1,3,5,7),I=SIMD.Float32x4.shuffle(r,e,2,3,6,7),S=SIMD.Float32x4.shuffle(n,i,2,3,6,7),M=SIMD.Float32x4.shuffle(I,S,0,2,4,6),S=SIMD.Float32x4.shuffle(S,I,1,3,5,7),I=SIMD.Float32x4.mul(M,S),I=SIMD.Float32x4.swizzle(I,1,0,3,2),D=SIMD.Float32x4.mul(o,I),x=SIMD.Float32x4.mul(l,I),I=SIMD.Float32x4.swizzle(I,2,3,0,1),D=SIMD.Float32x4.sub(SIMD.Float32x4.mul(o,I),D),x=SIMD.Float32x4.sub(SIMD.Float32x4.mul(l,I),x),x=SIMD.Float32x4.swizzle(x,2,3,0,1),I=SIMD.Float32x4.mul(o,M),I=SIMD.Float32x4.swizzle(I,1,0,3,2),D=SIMD.Float32x4.add(SIMD.Float32x4.mul(S,I),D),s=SIMD.Float32x4.mul(l,I),I=SIMD.Float32x4.swizzle(I,2,3,0,1),D=SIMD.Float32x4.sub(D,SIMD.Float32x4.mul(S,I)),s=SIMD.Float32x4.sub(SIMD.Float32x4.mul(l,I),s),s=SIMD.Float32x4.swizzle(s,2,3,0,1),I=SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(o,2,3,0,1),S),I=SIMD.Float32x4.swizzle(I,1,0,3,2),M=SIMD.Float32x4.swizzle(M,2,3,0,1),D=SIMD.Float32x4.add(SIMD.Float32x4.mul(M,I),D),F=SIMD.Float32x4.mul(l,I),I=SIMD.Float32x4.swizzle(I,2,3,0,1),D=SIMD.Float32x4.sub(D,SIMD.Float32x4.mul(M,I)),F=SIMD.Float32x4.sub(SIMD.Float32x4.mul(l,I),F),F=SIMD.Float32x4.swizzle(F,2,3,0,1),I=SIMD.Float32x4.mul(l,o),I=SIMD.Float32x4.swizzle(I,1,0,3,2),F=SIMD.Float32x4.add(SIMD.Float32x4.mul(S,I),F),s=SIMD.Float32x4.sub(SIMD.Float32x4.mul(M,I),s),I=SIMD.Float32x4.swizzle(I,2,3,0,1),F=SIMD.Float32x4.sub(SIMD.Float32x4.mul(S,I),F),s=SIMD.Float32x4.sub(s,SIMD.Float32x4.mul(M,I)),I=SIMD.Float32x4.mul(l,S),I=SIMD.Float32x4.swizzle(I,1,0,3,2),x=SIMD.Float32x4.sub(x,SIMD.Float32x4.mul(M,I)),F=SIMD.Float32x4.add(SIMD.Float32x4.mul(o,I),F),I=SIMD.Float32x4.swizzle(I,2,3,0,1),x=SIMD.Float32x4.add(SIMD.Float32x4.mul(M,I),x),F=SIMD.Float32x4.sub(F,SIMD.Float32x4.mul(o,I)),I=SIMD.Float32x4.mul(l,M),I=SIMD.Float32x4.swizzle(I,1,0,3,2),x=SIMD.Float32x4.add(SIMD.Float32x4.mul(S,I),x),s=SIMD.Float32x4.sub(s,SIMD.Float32x4.mul(o,I)),I=SIMD.Float32x4.swizzle(I,2,3,0,1),x=SIMD.Float32x4.sub(x,SIMD.Float32x4.mul(S,I)),s=SIMD.Float32x4.add(SIMD.Float32x4.mul(o,I),s),u=SIMD.Float32x4.mul(l,D),u=SIMD.Float32x4.add(SIMD.Float32x4.swizzle(u,2,3,0,1),u),u=SIMD.Float32x4.add(SIMD.Float32x4.swizzle(u,1,0,3,2),u),I=SIMD.Float32x4.reciprocalApproximation(u),u=SIMD.Float32x4.sub(SIMD.Float32x4.add(I,I),SIMD.Float32x4.mul(u,SIMD.Float32x4.mul(I,I))),(u=SIMD.Float32x4.swizzle(u,0,0,0,0))?(SIMD.Float32x4.store(a,0,SIMD.Float32x4.mul(u,D)),SIMD.Float32x4.store(a,4,SIMD.Float32x4.mul(u,x)),SIMD.Float32x4.store(a,8,SIMD.Float32x4.mul(u,F)),SIMD.Float32x4.store(a,12,SIMD.Float32x4.mul(u,s)),a):null},t.invert=a.USE_SIMD?t.SIMD.invert:t.scalar.invert,t.scalar.adjoint=function(a,t){var l=t[0],o=t[1],M=t[2],S=t[3],I=t[4],D=t[5],x=t[6],F=t[7],s=t[8],u=t[9],r=t[10],e=t[11],n=t[12],i=t[13],h=t[14],m=t[15];return a[0]=D*(r*m-e*h)-u*(x*m-F*h)+i*(x*e-F*r),a[1]=-(o*(r*m-e*h)-u*(M*m-S*h)+i*(M*e-S*r)),a[2]=o*(x*m-F*h)-D*(M*m-S*h)+i*(M*F-S*x),a[3]=-(o*(x*e-F*r)-D*(M*e-S*r)+u*(M*F-S*x)),a[4]=-(I*(r*m-e*h)-s*(x*m-F*h)+n*(x*e-F*r)),a[5]=l*(r*m-e*h)-s*(M*m-S*h)+n*(M*e-S*r),a[6]=-(l*(x*m-F*h)-I*(M*m-S*h)+n*(M*F-S*x)),a[7]=l*(x*e-F*r)-I*(M*e-S*r)+s*(M*F-S*x),a[8]=I*(u*m-e*i)-s*(D*m-F*i)+n*(D*e-F*u),a[9]=-(l*(u*m-e*i)-s*(o*m-S*i)+n*(o*e-S*u)),a[10]=l*(D*m-F*i)-I*(o*m-S*i)+n*(o*F-S*D),a[11]=-(l*(D*e-F*u)-I*(o*e-S*u)+s*(o*F-S*D)),a[12]=-(I*(u*h-r*i)-s*(D*h-x*i)+n*(D*r-x*u)),a[13]=l*(u*h-r*i)-s*(o*h-M*i)+n*(o*r-M*u),a[14]=-(l*(D*h-x*i)-I*(o*h-M*i)+n*(o*x-M*D)),a[15]=l*(D*r-x*u)-I*(o*r-M*u)+s*(o*x-M*D),a},t.SIMD.adjoint=function(a,t){var l,o,M,S,I,D,x,F,s,u,r,e,n,l=SIMD.Float32x4.load(t,0),o=SIMD.Float32x4.load(t,4),M=SIMD.Float32x4.load(t,8),S=SIMD.Float32x4.load(t,12);return s=SIMD.Float32x4.shuffle(l,o,0,1,4,5),D=SIMD.Float32x4.shuffle(M,S,0,1,4,5),I=SIMD.Float32x4.shuffle(s,D,0,2,4,6),D=SIMD.Float32x4.shuffle(D,s,1,3,5,7),s=SIMD.Float32x4.shuffle(l,o,2,3,6,7),F=SIMD.Float32x4.shuffle(M,S,2,3,6,7),x=SIMD.Float32x4.shuffle(s,F,0,2,4,6),F=SIMD.Float32x4.shuffle(F,s,1,3,5,7),s=SIMD.Float32x4.mul(x,F),s=SIMD.Float32x4.swizzle(s,1,0,3,2),u=SIMD.Float32x4.mul(D,s),r=SIMD.Float32x4.mul(I,s),s=SIMD.Float32x4.swizzle(s,2,3,0,1),u=SIMD.Float32x4.sub(SIMD.Float32x4.mul(D,s),u),r=SIMD.Float32x4.sub(SIMD.Float32x4.mul(I,s),r),r=SIMD.Float32x4.swizzle(r,2,3,0,1),s=SIMD.Float32x4.mul(D,x),s=SIMD.Float32x4.swizzle(s,1,0,3,2),u=SIMD.Float32x4.add(SIMD.Float32x4.mul(F,s),u),n=SIMD.Float32x4.mul(I,s),s=SIMD.Float32x4.swizzle(s,2,3,0,1),u=SIMD.Float32x4.sub(u,SIMD.Float32x4.mul(F,s)),n=SIMD.Float32x4.sub(SIMD.Float32x4.mul(I,s),n),n=SIMD.Float32x4.swizzle(n,2,3,0,1),s=SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(D,2,3,0,1),F),s=SIMD.Float32x4.swizzle(s,1,0,3,2),x=SIMD.Float32x4.swizzle(x,2,3,0,1),u=SIMD.Float32x4.add(SIMD.Float32x4.mul(x,s),u),e=SIMD.Float32x4.mul(I,s),s=SIMD.Float32x4.swizzle(s,2,3,0,1),u=SIMD.Float32x4.sub(u,SIMD.Float32x4.mul(x,s)),e=SIMD.Float32x4.sub(SIMD.Float32x4.mul(I,s),e),e=SIMD.Float32x4.swizzle(e,2,3,0,1),s=SIMD.Float32x4.mul(I,D),s=SIMD.Float32x4.swizzle(s,1,0,3,2),e=SIMD.Float32x4.add(SIMD.Float32x4.mul(F,s),e),n=SIMD.Float32x4.sub(SIMD.Float32x4.mul(x,s),n),s=SIMD.Float32x4.swizzle(s,2,3,0,1),e=SIMD.Float32x4.sub(SIMD.Float32x4.mul(F,s),e),n=SIMD.Float32x4.sub(n,SIMD.Float32x4.mul(x,s)),s=SIMD.Float32x4.mul(I,F),s=SIMD.Float32x4.swizzle(s,1,0,3,2),r=SIMD.Float32x4.sub(r,SIMD.Float32x4.mul(x,s)),e=SIMD.Float32x4.add(SIMD.Float32x4.mul(D,s),e),s=SIMD.Float32x4.swizzle(s,2,3,0,1),r=SIMD.Float32x4.add(SIMD.Float32x4.mul(x,s),r),e=SIMD.Float32x4.sub(e,SIMD.Float32x4.mul(D,s)),s=SIMD.Float32x4.mul(I,x),s=SIMD.Float32x4.swizzle(s,1,0,3,2),r=SIMD.Float32x4.add(SIMD.Float32x4.mul(F,s),r),n=SIMD.Float32x4.sub(n,SIMD.Float32x4.mul(D,s)),s=SIMD.Float32x4.swizzle(s,2,3,0,1),r=SIMD.Float32x4.sub(r,SIMD.Float32x4.mul(F,s)),n=SIMD.Float32x4.add(SIMD.Float32x4.mul(D,s),n),SIMD.Float32x4.store(a,0,u),SIMD.Float32x4.store(a,4,r),SIMD.Float32x4.store(a,8,e),SIMD.Float32x4.store(a,12,n),a},t.adjoint=a.USE_SIMD?t.SIMD.adjoint:t.scalar.adjoint,t.determinant=function(a){var t=a[0],l=a[1],o=a[2],M=a[3],S=a[4],I=a[5],D=a[6],x=a[7],F=a[8],s=a[9],u=a[10],r=a[11],e=a[12],n=a[13],i=a[14],h=a[15],m=t*I-l*S,d=t*D-o*S,z=t*x-M*S,f=l*D-o*I,c=l*x-M*I,b=o*x-M*D,w=F*n-s*e,v=F*i-u*e,p=F*h-r*e,E=s*i-u*n,P=s*h-r*n,O=u*h-r*i;return m*O-d*P+z*E+f*p-c*v+b*w},t.SIMD.multiply=function(a,t,l){var o=SIMD.Float32x4.load(t,0),M=SIMD.Float32x4.load(t,4),S=SIMD.Float32x4.load(t,8),I=SIMD.Float32x4.load(t,12),D=SIMD.Float32x4.load(l,0),x=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(D,0,0,0,0),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(D,1,1,1,1),M),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(D,2,2,2,2),S),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(D,3,3,3,3),I))));SIMD.Float32x4.store(a,0,x);var F=SIMD.Float32x4.load(l,4),s=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(F,0,0,0,0),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(F,1,1,1,1),M),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(F,2,2,2,2),S),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(F,3,3,3,3),I))));SIMD.Float32x4.store(a,4,s);var u=SIMD.Float32x4.load(l,8),r=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u,0,0,0,0),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u,1,1,1,1),M),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u,2,2,2,2),S),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u,3,3,3,3),I))));SIMD.Float32x4.store(a,8,r);var e=SIMD.Float32x4.load(l,12),n=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,0,0,0,0),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,1,1,1,1),M),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,2,2,2,2),S),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,3,3,3,3),I))));return SIMD.Float32x4.store(a,12,n),a},t.scalar.multiply=function(a,t,l){var o=t[0],M=t[1],S=t[2],I=t[3],D=t[4],x=t[5],F=t[6],s=t[7],u=t[8],r=t[9],e=t[10],n=t[11],i=t[12],h=t[13],m=t[14],d=t[15],z=l[0],f=l[1],c=l[2],b=l[3];return a[0]=z*o+f*D+c*u+b*i,a[1]=z*M+f*x+c*r+b*h,a[2]=z*S+f*F+c*e+b*m,a[3]=z*I+f*s+c*n+b*d,z=l[4],f=l[5],c=l[6],b=l[7],a[4]=z*o+f*D+c*u+b*i,a[5]=z*M+f*x+c*r+b*h,a[6]=z*S+f*F+c*e+b*m,a[7]=z*I+f*s+c*n+b*d,z=l[8],f=l[9],c=l[10],b=l[11],a[8]=z*o+f*D+c*u+b*i,a[9]=z*M+f*x+c*r+b*h,a[10]=z*S+f*F+c*e+b*m,a[11]=z*I+f*s+c*n+b*d,z=l[12],f=l[13],c=l[14],b=l[15],a[12]=z*o+f*D+c*u+b*i,a[13]=z*M+f*x+c*r+b*h,a[14]=z*S+f*F+c*e+b*m,a[15]=z*I+f*s+c*n+b*d,a},t.multiply=a.USE_SIMD?t.SIMD.multiply:t.scalar.multiply,t.mul=t.multiply,t.scalar.translate=function(a,t,l){var o,M,S,I,D,x,F,s,u,r,e,n,i=l[0],h=l[1],m=l[2];return t===a?(a[12]=t[0]*i+t[4]*h+t[8]*m+t[12],a[13]=t[1]*i+t[5]*h+t[9]*m+t[13],a[14]=t[2]*i+t[6]*h+t[10]*m+t[14],a[15]=t[3]*i+t[7]*h+t[11]*m+t[15]):(o=t[0],M=t[1],S=t[2],I=t[3],D=t[4],x=t[5],F=t[6],s=t[7],u=t[8],r=t[9],e=t[10],n=t[11],a[0]=o,a[1]=M,a[2]=S,a[3]=I,a[4]=D,a[5]=x,a[6]=F,a[7]=s,a[8]=u,a[9]=r,a[10]=e,a[11]=n,a[12]=o*i+D*h+u*m+t[12],a[13]=M*i+x*h+r*m+t[13],a[14]=S*i+F*h+e*m+t[14],a[15]=I*i+s*h+n*m+t[15]),a},t.SIMD.translate=function(a,t,l){var o=SIMD.Float32x4.load(t,0),M=SIMD.Float32x4.load(t,4),S=SIMD.Float32x4.load(t,8),I=SIMD.Float32x4.load(t,12),D=SIMD.Float32x4(l[0],l[1],l[2],0);t!==a&&(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11]),o=SIMD.Float32x4.mul(o,SIMD.Float32x4.swizzle(D,0,0,0,0)),M=SIMD.Float32x4.mul(M,SIMD.Float32x4.swizzle(D,1,1,1,1)),S=SIMD.Float32x4.mul(S,SIMD.Float32x4.swizzle(D,2,2,2,2));var x=SIMD.Float32x4.add(o,SIMD.Float32x4.add(M,SIMD.Float32x4.add(S,I)));return SIMD.Float32x4.store(a,12,x),a},t.translate=a.USE_SIMD?t.SIMD.translate:t.scalar.translate,t.scalar.scale=function(a,t,l){var o=l[0],M=l[1],S=l[2];return a[0]=t[0]*o,a[1]=t[1]*o,a[2]=t[2]*o,a[3]=t[3]*o,a[4]=t[4]*M,a[5]=t[5]*M,a[6]=t[6]*M,a[7]=t[7]*M,a[8]=t[8]*S,a[9]=t[9]*S,a[10]=t[10]*S,a[11]=t[11]*S,a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a},t.SIMD.scale=function(a,t,l){var o,M,S,I=SIMD.Float32x4(l[0],l[1],l[2],0);return o=SIMD.Float32x4.load(t,0),SIMD.Float32x4.store(a,0,SIMD.Float32x4.mul(o,SIMD.Float32x4.swizzle(I,0,0,0,0))),M=SIMD.Float32x4.load(t,4),SIMD.Float32x4.store(a,4,SIMD.Float32x4.mul(M,SIMD.Float32x4.swizzle(I,1,1,1,1))),S=SIMD.Float32x4.load(t,8),SIMD.Float32x4.store(a,8,SIMD.Float32x4.mul(S,SIMD.Float32x4.swizzle(I,2,2,2,2))),a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a},t.scale=a.USE_SIMD?t.SIMD.scale:t.scalar.scale,t.rotate=function(t,l,o,M){var S,I,D,x,F,s,u,r,e,n,i,h,m,d,z,f,c,b,w,v,p,E,P,O,L=M[0],N=M[1],R=M[2],q=Math.sqrt(L*L+N*N+R*R);return Math.abs(q)<a.EPSILON?null:(q=1/q,L*=q,N*=q,R*=q,S=Math.sin(o),I=Math.cos(o),D=1-I,x=l[0],F=l[1],s=l[2],u=l[3],r=l[4],e=l[5],n=l[6],i=l[7],h=l[8],m=l[9],d=l[10],z=l[11],f=L*L*D+I,c=N*L*D+R*S,b=R*L*D-N*S,w=L*N*D-R*S,v=N*N*D+I,p=R*N*D+L*S,E=L*R*D+N*S,P=N*R*D-L*S,O=R*R*D+I,t[0]=x*f+r*c+h*b,t[1]=F*f+e*c+m*b,t[2]=s*f+n*c+d*b,t[3]=u*f+i*c+z*b,t[4]=x*w+r*v+h*p,t[5]=F*w+e*v+m*p,t[6]=s*w+n*v+d*p,t[7]=u*w+i*v+z*p,t[8]=x*E+r*P+h*O,t[9]=F*E+e*P+m*O,t[10]=s*E+n*P+d*O,t[11]=u*E+i*P+z*O,l!==t&&(t[12]=l[12],t[13]=l[13],t[14]=l[14],t[15]=l[15]),t)},t.scalar.rotateX=function(a,t,l){var o=Math.sin(l),M=Math.cos(l),S=t[4],I=t[5],D=t[6],x=t[7],F=t[8],s=t[9],u=t[10],r=t[11];return t!==a&&(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[4]=S*M+F*o,a[5]=I*M+s*o,a[6]=D*M+u*o,a[7]=x*M+r*o,a[8]=F*M-S*o,a[9]=s*M-I*o,a[10]=u*M-D*o,a[11]=r*M-x*o,a},t.SIMD.rotateX=function(a,t,l){var o=SIMD.Float32x4.splat(Math.sin(l)),M=SIMD.Float32x4.splat(Math.cos(l));t!==a&&(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]);var S=SIMD.Float32x4.load(t,4),I=SIMD.Float32x4.load(t,8);return SIMD.Float32x4.store(a,4,SIMD.Float32x4.add(SIMD.Float32x4.mul(S,M),SIMD.Float32x4.mul(I,o))),SIMD.Float32x4.store(a,8,SIMD.Float32x4.sub(SIMD.Float32x4.mul(I,M),SIMD.Float32x4.mul(S,o))),a},t.rotateX=a.USE_SIMD?t.SIMD.rotateX:t.scalar.rotateX,t.scalar.rotateY=function(a,t,l){var o=Math.sin(l),M=Math.cos(l),S=t[0],I=t[1],D=t[2],x=t[3],F=t[8],s=t[9],u=t[10],r=t[11];return t!==a&&(a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[0]=S*M-F*o,a[1]=I*M-s*o,a[2]=D*M-u*o,a[3]=x*M-r*o,a[8]=S*o+F*M,a[9]=I*o+s*M,a[10]=D*o+u*M,a[11]=x*o+r*M,a},t.SIMD.rotateY=function(a,t,l){var o=SIMD.Float32x4.splat(Math.sin(l)),M=SIMD.Float32x4.splat(Math.cos(l));t!==a&&(a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]);var S=SIMD.Float32x4.load(t,0),I=SIMD.Float32x4.load(t,8);return SIMD.Float32x4.store(a,0,SIMD.Float32x4.sub(SIMD.Float32x4.mul(S,M),SIMD.Float32x4.mul(I,o))),SIMD.Float32x4.store(a,8,SIMD.Float32x4.add(SIMD.Float32x4.mul(S,o),SIMD.Float32x4.mul(I,M))),a},t.rotateY=a.USE_SIMD?t.SIMD.rotateY:t.scalar.rotateY,t.scalar.rotateZ=function(a,t,l){var o=Math.sin(l),M=Math.cos(l),S=t[0],I=t[1],D=t[2],x=t[3],F=t[4],s=t[5],u=t[6],r=t[7];return t!==a&&(a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[0]=S*M+F*o,a[1]=I*M+s*o,a[2]=D*M+u*o,a[3]=x*M+r*o,a[4]=F*M-S*o,a[5]=s*M-I*o,a[6]=u*M-D*o,a[7]=r*M-x*o,a},t.SIMD.rotateZ=function(a,t,l){var o=SIMD.Float32x4.splat(Math.sin(l)),M=SIMD.Float32x4.splat(Math.cos(l));t!==a&&(a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]);var S=SIMD.Float32x4.load(t,0),I=SIMD.Float32x4.load(t,4);return SIMD.Float32x4.store(a,0,SIMD.Float32x4.add(SIMD.Float32x4.mul(S,M),SIMD.Float32x4.mul(I,o))),SIMD.Float32x4.store(a,4,SIMD.Float32x4.sub(SIMD.Float32x4.mul(I,M),SIMD.Float32x4.mul(S,o))),a},t.rotateZ=a.USE_SIMD?t.SIMD.rotateZ:t.scalar.rotateZ,t.fromTranslation=function(a,t){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=t[0],a[13]=t[1],a[14]=t[2],a[15]=1,a},t.fromScaling=function(a,t){return a[0]=t[0],a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=t[1],a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=t[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},t.fromRotation=function(t,l,o){var M,S,I,D=o[0],x=o[1],F=o[2],s=Math.sqrt(D*D+x*x+F*F);return Math.abs(s)<a.EPSILON?null:(s=1/s,D*=s,x*=s,F*=s,M=Math.sin(l),S=Math.cos(l),I=1-S,t[0]=D*D*I+S,t[1]=x*D*I+F*M,t[2]=F*D*I-x*M,t[3]=0,t[4]=D*x*I-F*M,t[5]=x*x*I+S,t[6]=F*x*I+D*M,t[7]=0,t[8]=D*F*I+x*M,t[9]=x*F*I-D*M,t[10]=F*F*I+S,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},t.fromXRotation=function(a,t){var l=Math.sin(t),o=Math.cos(t);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=o,a[6]=l,a[7]=0,a[8]=0,a[9]=-l,a[10]=o,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},t.fromYRotation=function(a,t){var l=Math.sin(t),o=Math.cos(t);return a[0]=o,a[1]=0,a[2]=-l,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=l,a[9]=0,a[10]=o,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},t.fromZRotation=function(a,t){var l=Math.sin(t),o=Math.cos(t);return a[0]=o,a[1]=l,a[2]=0,a[3]=0,a[4]=-l,a[5]=o,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},t.fromRotationTranslation=function(a,t,l){var o=t[0],M=t[1],S=t[2],I=t[3],D=o+o,x=M+M,F=S+S,s=o*D,u=o*x,r=o*F,e=M*x,n=M*F,i=S*F,h=I*D,m=I*x,d=I*F;return a[0]=1-(e+i),a[1]=u+d,a[2]=r-m,a[3]=0,a[4]=u-d,a[5]=1-(s+i),a[6]=n+h,a[7]=0,a[8]=r+m,a[9]=n-h,a[10]=1-(s+e),a[11]=0,a[12]=l[0],a[13]=l[1],a[14]=l[2],a[15]=1,a},t.getTranslation=function(a,t){return a[0]=t[12],a[1]=t[13],a[2]=t[14],a},t.getRotation=function(a,t){var l=t[0]+t[5]+t[10],o=0;return l>0?(o=2*Math.sqrt(l+1),a[3]=.25*o,a[0]=(t[6]-t[9])/o,a[1]=(t[8]-t[2])/o,a[2]=(t[1]-t[4])/o):t[0]>t[5]&t[0]>t[10]?(o=2*Math.sqrt(1+t[0]-t[5]-t[10]),a[3]=(t[6]-t[9])/o,a[0]=.25*o,a[1]=(t[1]+t[4])/o,a[2]=(t[8]+t[2])/o):t[5]>t[10]?(o=2*Math.sqrt(1+t[5]-t[0]-t[10]),a[3]=(t[8]-t[2])/o,a[0]=(t[1]+t[4])/o,a[1]=.25*o,a[2]=(t[6]+t[9])/o):(o=2*Math.sqrt(1+t[10]-t[0]-t[5]),a[3]=(t[1]-t[4])/o,a[0]=(t[8]+t[2])/o,a[1]=(t[6]+t[9])/o,a[2]=.25*o),a},t.fromRotationTranslationScale=function(a,t,l,o){var M=t[0],S=t[1],I=t[2],D=t[3],x=M+M,F=S+S,s=I+I,u=M*x,r=M*F,e=M*s,n=S*F,i=S*s,h=I*s,m=D*x,d=D*F,z=D*s,f=o[0],c=o[1],b=o[2];return a[0]=(1-(n+h))*f,a[1]=(r+z)*f,a[2]=(e-d)*f,a[3]=0,a[4]=(r-z)*c,a[5]=(1-(u+h))*c,a[6]=(i+m)*c,a[7]=0,a[8]=(e+d)*b,a[9]=(i-m)*b,a[10]=(1-(u+n))*b,a[11]=0,a[12]=l[0],a[13]=l[1],a[14]=l[2],a[15]=1,a},t.fromRotationTranslationScaleOrigin=function(a,t,l,o,M){var S=t[0],I=t[1],D=t[2],x=t[3],F=S+S,s=I+I,u=D+D,r=S*F,e=S*s,n=S*u,i=I*s,h=I*u,m=D*u,d=x*F,z=x*s,f=x*u,c=o[0],b=o[1],w=o[2],v=M[0],p=M[1],E=M[2];return a[0]=(1-(i+m))*c,a[1]=(e+f)*c,a[2]=(n-z)*c,a[3]=0,a[4]=(e-f)*b,a[5]=(1-(r+m))*b,a[6]=(h+d)*b,a[7]=0,a[8]=(n+z)*w,a[9]=(h-d)*w,a[10]=(1-(r+i))*w,a[11]=0,a[12]=l[0]+v-(a[0]*v+a[4]*p+a[8]*E),a[13]=l[1]+p-(a[1]*v+a[5]*p+a[9]*E),a[14]=l[2]+E-(a[2]*v+a[6]*p+a[10]*E),a[15]=1,a},t.fromQuat=function(a,t){var l=t[0],o=t[1],M=t[2],S=t[3],I=l+l,D=o+o,x=M+M,F=l*I,s=o*I,u=o*D,r=M*I,e=M*D,n=M*x,i=S*I,h=S*D,m=S*x;return a[0]=1-u-n,a[1]=s+m,a[2]=r-h,a[3]=0,a[4]=s-m,a[5]=1-F-n,a[6]=e+i,a[7]=0,a[8]=r+h,a[9]=e-i,a[10]=1-F-u,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},t.frustum=function(a,t,l,o,M,S,I){var D=1/(l-t),x=1/(M-o),F=1/(S-I);return a[0]=2*S*D,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*S*x,a[6]=0,a[7]=0,a[8]=(l+t)*D,a[9]=(M+o)*x,a[10]=(I+S)*F,a[11]=-1,a[12]=0,a[13]=0,a[14]=I*S*2*F,a[15]=0,a},t.perspective=function(a,t,l,o,M){var S=1/Math.tan(t/2),I=1/(o-M);return a[0]=S/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=S,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=(M+o)*I,a[11]=-1,a[12]=0,a[13]=0,a[14]=2*M*o*I,a[15]=0,a},t.perspectiveFromFieldOfView=function(a,t,l,o){var M=Math.tan(t.upDegrees*Math.PI/180),S=Math.tan(t.downDegrees*Math.PI/180),I=Math.tan(t.leftDegrees*Math.PI/180),D=Math.tan(t.rightDegrees*Math.PI/180),x=2/(I+D),F=2/(M+S);return a[0]=x,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=F,a[6]=0,a[7]=0,a[8]=-((I-D)*x*.5),a[9]=(M-S)*F*.5,a[10]=o/(l-o),a[11]=-1,a[12]=0,a[13]=0,a[14]=o*l/(l-o),a[15]=0,a},t.ortho=function(a,t,l,o,M,S,I){var D=1/(t-l),x=1/(o-M),F=1/(S-I);return a[0]=-2*D,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=-2*x,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2*F,a[11]=0,a[12]=(t+l)*D,a[13]=(M+o)*x,a[14]=(I+S)*F,a[15]=1,a},t.lookAt=function(l,o,M,S){var I,D,x,F,s,u,r,e,n,i,h=o[0],m=o[1],d=o[2],z=S[0],f=S[1],c=S[2],b=M[0],w=M[1],v=M[2];return Math.abs(h-b)<a.EPSILON&&Math.abs(m-w)<a.EPSILON&&Math.abs(d-v)<a.EPSILON?t.identity(l):(r=h-b,e=m-w,n=d-v,i=1/Math.sqrt(r*r+e*e+n*n),r*=i,e*=i,n*=i,I=f*n-c*e,D=c*r-z*n,x=z*e-f*r,i=Math.sqrt(I*I+D*D+x*x),i?(i=1/i,I*=i,D*=i,x*=i):(I=0,D=0,x=0),F=e*x-n*D,s=n*I-r*x,u=r*D-e*I,i=Math.sqrt(F*F+s*s+u*u),i?(i=1/i,F*=i,s*=i,u*=i):(F=0,s=0,u=0),l[0]=I,l[1]=F,l[2]=r,l[3]=0,l[4]=D,l[5]=s,l[6]=e,l[7]=0,l[8]=x,l[9]=u,l[10]=n,l[11]=0,l[12]=-(I*h+D*m+x*d),l[13]=-(F*h+s*m+u*d),l[14]=-(r*h+e*m+n*d),l[15]=1,l)},t.str=function(a){return"mat4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+")"},t.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2)+Math.pow(a[9],2)+Math.pow(a[10],2)+Math.pow(a[11],2)+Math.pow(a[12],2)+Math.pow(a[13],2)+Math.pow(a[14],2)+Math.pow(a[15],2))},t.add=function(a,t,l){return a[0]=t[0]+l[0],a[1]=t[1]+l[1],a[2]=t[2]+l[2],a[3]=t[3]+l[3],a[4]=t[4]+l[4],a[5]=t[5]+l[5],a[6]=t[6]+l[6],a[7]=t[7]+l[7],a[8]=t[8]+l[8],a[9]=t[9]+l[9],a[10]=t[10]+l[10],a[11]=t[11]+l[11],a[12]=t[12]+l[12],a[13]=t[13]+l[13],a[14]=t[14]+l[14],a[15]=t[15]+l[15],a},t.subtract=function(a,t,l){return a[0]=t[0]-l[0],a[1]=t[1]-l[1],a[2]=t[2]-l[2],a[3]=t[3]-l[3],a[4]=t[4]-l[4],a[5]=t[5]-l[5],a[6]=t[6]-l[6],a[7]=t[7]-l[7],a[8]=t[8]-l[8],a[9]=t[9]-l[9],a[10]=t[10]-l[10],a[11]=t[11]-l[11],a[12]=t[12]-l[12],a[13]=t[13]-l[13],a[14]=t[14]-l[14],a[15]=t[15]-l[15],a},t.sub=t.subtract,t.multiplyScalar=function(a,t,l){return a[0]=t[0]*l,a[1]=t[1]*l,a[2]=t[2]*l,a[3]=t[3]*l,a[4]=t[4]*l,a[5]=t[5]*l,a[6]=t[6]*l,a[7]=t[7]*l,a[8]=t[8]*l,a[9]=t[9]*l,a[10]=t[10]*l,a[11]=t[11]*l,a[12]=t[12]*l,a[13]=t[13]*l,a[14]=t[14]*l,a[15]=t[15]*l,a},t.multiplyScalarAndAdd=function(a,t,l,o){return a[0]=t[0]+l[0]*o,a[1]=t[1]+l[1]*o,a[2]=t[2]+l[2]*o,a[3]=t[3]+l[3]*o,a[4]=t[4]+l[4]*o,a[5]=t[5]+l[5]*o,a[6]=t[6]+l[6]*o,a[7]=t[7]+l[7]*o,a[8]=t[8]+l[8]*o,a[9]=t[9]+l[9]*o,a[10]=t[10]+l[10]*o,a[11]=t[11]+l[11]*o,a[12]=t[12]+l[12]*o,a[13]=t[13]+l[13]*o,a[14]=t[14]+l[14]*o,a[15]=t[15]+l[15]*o,a},t.exactEquals=function(a,t){return a[0]===t[0]&&a[1]===t[1]&&a[2]===t[2]&&a[3]===t[3]&&a[4]===t[4]&&a[5]===t[5]&&a[6]===t[6]&&a[7]===t[7]&&a[8]===t[8]&&a[9]===t[9]&&a[10]===t[10]&&a[11]===t[11]&&a[12]===t[12]&&a[13]===t[13]&&a[14]===t[14]&&a[15]===t[15]},t.equals=function(t,l){var o=t[0],M=t[1],S=t[2],I=t[3],D=t[4],x=t[5],F=t[6],s=t[7],u=t[8],r=t[9],e=t[10],n=t[11],i=t[12],h=t[13],m=t[14],d=t[15],z=l[0],f=l[1],c=l[2],b=l[3],w=l[4],v=l[5],p=l[6],E=l[7],P=l[8],O=l[9],L=l[10],N=l[11],R=l[12],q=l[13],Y=l[14],_=l[15];return Math.abs(o-z)<=a.EPSILON*Math.max(1,Math.abs(o),Math.abs(z))&&Math.abs(M-f)<=a.EPSILON*Math.max(1,Math.abs(M),Math.abs(f))&&Math.abs(S-c)<=a.EPSILON*Math.max(1,Math.abs(S),Math.abs(c))&&Math.abs(I-b)<=a.EPSILON*Math.max(1,Math.abs(I),Math.abs(b))&&Math.abs(D-w)<=a.EPSILON*Math.max(1,Math.abs(D),Math.abs(w))&&Math.abs(x-v)<=a.EPSILON*Math.max(1,Math.abs(x),Math.abs(v))&&Math.abs(F-p)<=a.EPSILON*Math.max(1,Math.abs(F),Math.abs(p))&&Math.abs(s-E)<=a.EPSILON*Math.max(1,Math.abs(s),Math.abs(E))&&Math.abs(u-P)<=a.EPSILON*Math.max(1,Math.abs(u),Math.abs(P))&&Math.abs(r-O)<=a.EPSILON*Math.max(1,Math.abs(r),Math.abs(O))&&Math.abs(e-L)<=a.EPSILON*Math.max(1,Math.abs(e),Math.abs(L))&&Math.abs(n-N)<=a.EPSILON*Math.max(1,Math.abs(n),Math.abs(N))&&Math.abs(i-R)<=a.EPSILON*Math.max(1,Math.abs(i),Math.abs(R))&&Math.abs(h-q)<=a.EPSILON*Math.max(1,Math.abs(h),Math.abs(q))&&Math.abs(m-Y)<=a.EPSILON*Math.max(1,Math.abs(m),Math.abs(Y))&&Math.abs(d-_)<=a.EPSILON*Math.max(1,Math.abs(d),Math.abs(_))},t});
},
'esri/views/vectorTiles/RenderBucket':function(){
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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper"],function(t,e,n,r){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.type=t}return t}();e.RenderBucket=i;var u=function(t){function e(){var e=t.call(this,2)||this;return e.triangleElementStart=0,e.triangleElementCount=0,e.joinStart=0,e.joinCount=0,e}return n(e,t),e.prototype.hasData=function(){return this.triangleElementCount>0||this.joinCount>0},e}(i);e.LineRenderBucket=u;var a=function(t){function e(){var e=t.call(this,1)||this;return e.triangleElementStart=0,e.triangleElementCount=0,e.outlineElementStart=0,e.outlineElementCount=0,e}return n(e,t),e.prototype.hasData=function(){return this.triangleElementCount>0||this.outlineElementCount>0},e}(i);e.FillRenderBucket=a;var o=function(t){function e(){var e=t.call(this,3)||this;return e.markerPerPageElementsMap=new Map,e.glyphPerPageElementsMap=new Map,e.isSDF=!1,e}return n(e,t),e.prototype.hasData=function(){return this.markerPerPageElementsMap.size>0||this.glyphPerPageElementsMap.size>0},e}(i);e.SymbolRenderBucket=o;var l=function(t){function e(){return t.call(this,0)||this}return n(e,t),e.prototype.hasData=function(){return!0},e}(i);e.BackgroundRenderBucket=l});
},
'esri/views/vectorTiles/VectorTileContainer':function(){
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

define(["require","exports","../../core/tsSupport/extendsHelper","dojo/has","../../core/libs/gl-matrix/vec3","../../core/libs/gl-matrix/mat4","../2d/engine/Container","./renderers/Renderer","./GeometryUtils"],function(e,t,i,r,s,n,l,a,o){var d=function(e){function t(){var t=e.call(this)||this;return t.isInitialized=!1,t._displayWidth=0,t._displayHeight=0,t._tileCoordinateScale=s.create(),t._orientationVec=s.create(),t._displayScale=s.create(),t._orientationVec.set([0,0,1]),t._defaultTransform=n.create(),t}return i(t,e),t.prototype.initialize=function(e,t,i,r){this._renderer=new a,this._renderer.initialize(e,t),this._tileInfoView=r,this._tileInfo=i,this.isInitialized=!0},t.prototype.destroy=function(){this._renderer&&(this._renderer.dispose(),this._renderer=null)},t.prototype.prepareChildrenRenderParameters=function(e){var t=e.state;if(!t||!this._tileInfo||!this.isInitialized)return e;var i=e;return i.displayLevel=this._tileInfo.scaleToZoom(t.scale),i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.renderer=this._renderer,i},t.prototype.renderChildren=function(t){if(0!==this.children.length&&this.isInitialized&&t&&t.state){this.sortChildren(function(e,t){return e.key.level-t.key.level});for(var i=this.children.length,s=1;i>=s;s++){var n=this.children[s-1];n.attached&&(n.stencilData.reference=s,n.stencilData.mask=255)}this._updateTilesTransform(t.state,this._tileInfoView.getClosestInfoForScale(t.state.scale).level);var l=t.context;if(l.setDepthWriteEnabled(!0),this._renderer.setStateParams(t.state,t.devicePixelRatio,t.displayLevel),this._renderer.drawClippingMasks(l,this.children),l.setStencilWriteMask(0),l.setBlendFunctionSeparate(1,771,1,771),l.setStencilOp(7680,7680,7681),l.setDepthFunction(515),l.setBlendingEnabled(!1),l.setStencilTestEnabled(!0),l.setDepthTestEnabled(!0),l.setDepthWriteEnabled(!0),t.drawphase=0,e.prototype.renderChildren.call(this,t),l.setDepthWriteEnabled(!1),l.setBlendingEnabled(!0),t.drawphase=1,e.prototype.renderChildren.call(this,t),t.drawphase=2,e.prototype.renderChildren.call(this,t),l.setStencilTestEnabled(!1),l.setDepthTestEnabled(!1),r("esri-vector-tiles-debug"))for(var a=0,o=this.children;a<o.length;a++){var d=o[a];d.attached&&d.visible&&this._renderer.renderTileInfo(l,d)}this._renderer.needsRedraw()&&this.requestRender()}},t.prototype.removeAllChildren=function(){for(var t=0;t<this.children.length;t++){var i=this.children[t];i.dispose()}e.prototype.removeAllChildren.call(this)},t.prototype._updateTilesTransform=function(e,t){var i=1/e.width,r=1/e.height,s=[0,0];this._calculateRelativeViewProjMat(this._tileInfo.lods[t].resolution,e.resolution,e.rotation,this._tileInfo.size[1],4096,e.width,e.height,this._defaultTransform);for(var n=0,l=this.children;n<l.length;n++){var a=l[n];e.toScreen(s,a.coords),s[1]=e.height-s[1],a.tileTransform.displayCoord[0]=2*s[0]*i-1,a.tileTransform.displayCoord[1]=2*s[1]*r-1,a.key.level===t&&4096===a.coordRange?a.tileTransform.transform.set(this._defaultTransform):this._calculateRelativeViewProjMat(this._tileInfo.lods[a.key.level].resolution,e.resolution,e.rotation,this._tileInfo.size[1],a.coordRange,e.width,e.height,a.tileTransform.transform)}},t.prototype._calculateRelativeViewProjMat=function(e,t,i,r,s,l,a,d){var h=e/t,c=.125;512!==r&&4096!==s&&(c=r/s);var p=c*h;this._tileCoordinateScale.set([p,p,1]),(l!==this._displayWidth||a!==this._displayHeight)&&(this._displayScale.set([2/l,-2/a,1]),this._displayWidth=l,this._displayHeight=a),n.identity(d),n.scale(d,d,this._tileCoordinateScale),n.rotate(d,d,-i*o.C_DEG_TO_RAD,this._orientationVec),n.scale(d,d,this._displayScale),n.transpose(d,d)},t}(l);return d});
},
'esri/core/libs/gl-matrix/vec3':function(){
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

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE. */

define(["./common"],function(t){var n={};return n.create=function(){var n=new t.ARRAY_TYPE(3);return n[0]=0,n[1]=0,n[2]=0,n},n.clone=function(n){var r=new t.ARRAY_TYPE(3);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r},n.fromValues=function(n,r,a){var u=new t.ARRAY_TYPE(3);return u[0]=n,u[1]=r,u[2]=a,u},n.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t},n.set=function(t,n,r,a){return t[0]=n,t[1]=r,t[2]=a,t},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t},n.subtract=function(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t},n.sub=n.subtract,n.multiply=function(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t},n.mul=n.multiply,n.divide=function(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t},n.div=n.divide,n.ceil=function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},n.floor=function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},n.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t},n.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t},n.round=function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},n.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t},n.scaleAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t},n.distance=function(t,n){var r=n[0]-t[0],a=n[1]-t[1],u=n[2]-t[2];return Math.sqrt(r*r+a*a+u*u)},n.dist=n.distance,n.squaredDistance=function(t,n){var r=n[0]-t[0],a=n[1]-t[1],u=n[2]-t[2];return r*r+a*a+u*u},n.sqrDist=n.squaredDistance,n.length=function(t){var n=t[0],r=t[1],a=t[2];return Math.sqrt(n*n+r*r+a*a)},n.len=n.length,n.squaredLength=function(t){var n=t[0],r=t[1],a=t[2];return n*n+r*r+a*a},n.sqrLen=n.squaredLength,n.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},n.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},n.normalize=function(t,n){var r=n[0],a=n[1],u=n[2],e=r*r+a*a+u*u;return e>0&&(e=1/Math.sqrt(e),t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e),t},n.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]},n.cross=function(t,n,r){var a=n[0],u=n[1],e=n[2],o=r[0],i=r[1],c=r[2];return t[0]=u*c-e*i,t[1]=e*o-a*c,t[2]=a*i-u*o,t},n.lerp=function(t,n,r,a){var u=n[0],e=n[1],o=n[2];return t[0]=u+a*(r[0]-u),t[1]=e+a*(r[1]-e),t[2]=o+a*(r[2]-o),t},n.hermite=function(t,n,r,a,u,e){var o=e*e,i=o*(2*e-3)+1,c=o*(e-2)+e,s=o*(e-1),h=o*(3-2*e);return t[0]=n[0]*i+r[0]*c+a[0]*s+u[0]*h,t[1]=n[1]*i+r[1]*c+a[1]*s+u[1]*h,t[2]=n[2]*i+r[2]*c+a[2]*s+u[2]*h,t},n.bezier=function(t,n,r,a,u,e){var o=1-e,i=o*o,c=e*e,s=i*o,h=3*e*i,f=3*c*o,M=c*e;return t[0]=n[0]*s+r[0]*h+a[0]*f+u[0]*M,t[1]=n[1]*s+r[1]*h+a[1]*f+u[1]*M,t[2]=n[2]*s+r[2]*h+a[2]*f+u[2]*M,t},n.random=function(n,r){r=r||1;var a=2*t.RANDOM()*Math.PI,u=2*t.RANDOM()-1,e=Math.sqrt(1-u*u)*r;return n[0]=Math.cos(a)*e,n[1]=Math.sin(a)*e,n[2]=u*r,n},n.transformMat4=function(t,n,r){var a=n[0],u=n[1],e=n[2],o=r[3]*a+r[7]*u+r[11]*e+r[15];return o=o||1,t[0]=(r[0]*a+r[4]*u+r[8]*e+r[12])/o,t[1]=(r[1]*a+r[5]*u+r[9]*e+r[13])/o,t[2]=(r[2]*a+r[6]*u+r[10]*e+r[14])/o,t},n.transformMat3=function(t,n,r){var a=n[0],u=n[1],e=n[2];return t[0]=a*r[0]+u*r[3]+e*r[6],t[1]=a*r[1]+u*r[4]+e*r[7],t[2]=a*r[2]+u*r[5]+e*r[8],t},n.transformQuat=function(t,n,r){var a=n[0],u=n[1],e=n[2],o=r[0],i=r[1],c=r[2],s=r[3],h=s*a+i*e-c*u,f=s*u+c*a-o*e,M=s*e+o*u-i*a,l=-o*a-i*u-c*e;return t[0]=h*s+l*-o+f*-c-M*-i,t[1]=f*s+l*-i+M*-o-h*-c,t[2]=M*s+l*-c+h*-i-f*-o,t},n.rotateX=function(t,n,r,a){var u=[],e=[];return u[0]=n[0]-r[0],u[1]=n[1]-r[1],u[2]=n[2]-r[2],e[0]=u[0],e[1]=u[1]*Math.cos(a)-u[2]*Math.sin(a),e[2]=u[1]*Math.sin(a)+u[2]*Math.cos(a),t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t},n.rotateY=function(t,n,r,a){var u=[],e=[];return u[0]=n[0]-r[0],u[1]=n[1]-r[1],u[2]=n[2]-r[2],e[0]=u[2]*Math.sin(a)+u[0]*Math.cos(a),e[1]=u[1],e[2]=u[2]*Math.cos(a)-u[0]*Math.sin(a),t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t},n.rotateZ=function(t,n,r,a){var u=[],e=[];return u[0]=n[0]-r[0],u[1]=n[1]-r[1],u[2]=n[2]-r[2],e[0]=u[0]*Math.cos(a)-u[1]*Math.sin(a),e[1]=u[0]*Math.sin(a)+u[1]*Math.cos(a),e[2]=u[2],t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t},n.forEach=function(){var t=n.create();return function(n,r,a,u,e,o){var i,c;for(r||(r=3),a||(a=0),c=u?Math.min(u*r+a,n.length):n.length,i=a;c>i;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],e(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2];return n}}(),n.angle=function(t,r){var a=n.fromValues(t[0],t[1],t[2]),u=n.fromValues(r[0],r[1],r[2]);n.normalize(a,a),n.normalize(u,u);var e=n.dot(a,u);return e>1?0:Math.acos(e)},n.str=function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]},n.equals=function(n,r){var a=n[0],u=n[1],e=n[2],o=r[0],i=r[1],c=r[2];return Math.abs(a-o)<=t.EPSILON*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(u-i)<=t.EPSILON*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(e-c)<=t.EPSILON*Math.max(1,Math.abs(e),Math.abs(c))},n});
},
'esri/views/vectorTiles/renderers/Renderer':function(){
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

define(["require","exports","../../../core/libs/gl-matrix/mat4","../GeometryUtils","./BackgroundRenderer","./LineRenderer","./FillRenderer","./SymbolRenderer","./TileInfoRenderer","./FadeRecorder"],function(e,t,r,i,o,n,s,a,d,h){var _=function(){function e(){this._extrudeRotateVector=new Float32Array([0,0,1]),this._extrudeScaleVector=new Float32Array([1,1,1]),this._state={rotation:0,width:0,height:0},this._cachedWidth=0,this._cachedHeight=0,this._cachedRotation=0,this._pixelRatio=1}return e.prototype.initialize=function(e,t,r){void 0===r&&(r=!0),this._SpriteMosaic=e,this._glyphMosaic=t,this._ignoreSpeed=!r,this._backgroundRenderer=new o,this._lineRenderer=new n,this._fillRenderer=new s,this._symbolRenderer=new a,this._tileInfoRenderer=new d,this._fadeRecorder=new h.FadeRecorder(300),this._extrudeMatrix=new Float32Array(16),this._extrudeNoRotationMatrix=new Float32Array(16),this._backgroundColor=new Float32Array([1,0,0,1])},e.prototype.dispose=function(){this._backgroundRenderer&&(this._backgroundRenderer.dispose(),this._backgroundRenderer=null),this._lineRenderer&&(this._lineRenderer.dispose(),this._lineRenderer=null),this._fillRenderer&&(this._fillRenderer.dispose(),this._fillRenderer=null),this._symbolRenderer&&(this._symbolRenderer.dispose(),this._symbolRenderer=null),this._tileInfoRenderer&&(this._tileInfoRenderer.dispose(),this._tileInfoRenderer=null)},e.prototype.setStateParams=function(e,t,o){this._pixelRatio=t,this._fadeRecorder.recordLevel(o),this._state=e,(this._state.width!==this._cachedWidth||this._state.height!==this._cachedHeight||this._state.rotation!==this._cachedRotation)&&(this._extrudeScaleVector[0]=2/e.width,this._extrudeScaleVector[1]=-2/e.height,r.identity(this._extrudeMatrix),r.rotate(this._extrudeMatrix,this._extrudeMatrix,-e.rotation*i.C_DEG_TO_RAD,this._extrudeRotateVector),r.scale(this._extrudeMatrix,this._extrudeMatrix,this._extrudeScaleVector),r.transpose(this._extrudeMatrix,this._extrudeMatrix),r.identity(this._extrudeNoRotationMatrix),r.scale(this._extrudeNoRotationMatrix,this._extrudeNoRotationMatrix,this._extrudeScaleVector),r.transpose(this._extrudeNoRotationMatrix,this._extrudeNoRotationMatrix),this._cachedWidth=this._state.width,this._cachedHeight=this._state.height,this._cachedRotation=this._state.rotation)},e.prototype.drawClippingMasks=function(e,t){if(0!==t.length){e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(7680,7680,7681),e.setStencilWriteMask(255),e.setClearStencil(0);var r=e.gl;e.clear(r.STENCIL_BUFFER_BIT);for(var i=0,o=t;i<o.length;i++){var n=o[i];n.attached&&n.visible&&(e.setStencilFunctionSeparate(1032,519,n.stencilData.reference,n.stencilData.mask),this._backgroundRenderer.renderSolidColor(e,{u_matrix:n.tileTransform.transform,u_normalized_origin:n.tileTransform.displayCoord,u_coord_range:n.coordRange,u_depth:0,u_color:this._backgroundColor}))}e.setColorMask(!0,!0,!0,!0),e.setBlendingEnabled(!0)}},e.prototype.renderDebug=function(e,t){var r=t.key;this._backgroundColor.set([r.col%2,r.row%2,r.col%2===0&&r.row%2===0?1:0,.5]),this._backgroundRenderer.renderSolidColor(e,{u_matrix:t.tileTransform.transform,u_normalized_origin:t.tileTransform.displayCoord,u_coord_range:t.coordRange,u_depth:0,u_color:this._backgroundColor})},e.prototype.renderBucket=function(e,t,r,i,o,n,s,a){switch(t.type){case 0:2!==o&&this._renderBackground(e,r,o,n,s,a);break;case 1:2!==o&&this._renderFill(e,t,r,o,n,s,a);break;case 2:1===o&&this._renderLine(e,t,r,n,s,a);break;case 3:2===o&&this._renderSymbol(e,t,r,i,n,s,a)}},e.prototype.renderTileInfo=function(e,t){this._tileInfoRenderer.render(e,t)},e.prototype.needsRedraw=function(){return this._fadeRecorder.needsRedraw()},e.prototype._renderBackground=function(e,t,r,i,o,n){this._backgroundRenderer.render(e,t,r,i,o,this._SpriteMosaic,this._SpriteMosaic.pixelRatio,n)},e.prototype._renderLine=function(e,t,r,i,o,n){this._lineRenderer.render(e,t,r,this._state,i,o,this._SpriteMosaic,this._extrudeMatrix,this._SpriteMosaic.pixelRatio,n)},e.prototype._renderFill=function(e,t,r,i,o,n,s){this._fillRenderer.render(e,t,r,this._state.rotation,i,o,n,this._SpriteMosaic,this._extrudeMatrix,this._SpriteMosaic.pixelRatio,s)},e.prototype._renderSymbol=function(e,t,r,i,o,n,s){var a=!0;i===o.key.level&&(a=!1),e.setStencilTestEnabled(a),this._symbolRenderer.render(e,t,r,this._state.rotation,this._fadeRecorder.getFadeValues(this._ignoreSpeed),o,n,this._SpriteMosaic,this._glyphMosaic,this._extrudeMatrix,this._extrudeNoRotationMatrix,this._SpriteMosaic.pixelRatio,s)},e}();return _});
},
'esri/views/vectorTiles/renderers/BackgroundRenderer':function(){
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

define(["require","exports","../../../core/libs/gl-matrix/mat3","../../../core/libs/gl-matrix/vec4","../../webgl/Program","../../webgl/VertexArrayObject","../../webgl/BufferObject","./vtShaderSnippets"],function(r,t,i,e,o,a,s,n){var _=function(){function r(){this._patternMatrix=i.create(),this._color=e.create(),this._initialized=!1}return r.prototype.dispose=function(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._patternProgram&&(this._patternProgram.dispose(),this._patternProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null),this._patternVertexArrayObject&&(this._patternVertexArrayObject.dispose(),this._patternVertexArrayObject=null)},r.prototype.renderSolidColor=function(r,t){this._initialized||this._initialize(r),r.bindVAO(this._solidVertexArrayObject),r.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix4fv("u_transformMatrix",t.u_matrix),this._solidProgram.setUniform2fv("u_normalized_origin",t.u_normalized_origin),this._solidProgram.setUniform1f("u_coord_range",t.u_coord_range||4096),this._solidProgram.setUniform1f("u_depth",t.u_depth||0),this._solidProgram.setUniform4fv("u_color",t.u_color||new Float32Array([1,0,0,1])),r.drawArrays(5,0,4),r.bindVAO()},r.prototype.render=function(r,t,e,o,a,s,n,_){this._initialized||this._initialize(r);var l=a.getPaintValue("background-color",t),d=_*a.getPaintValue("background-opacity",t),m=a.getPaintValue("background-pattern",t),h=void 0!==m,f=l[3]*d,g=h||1>f;if((!g||0!==e)&&(g||1!==e)){if(h){r.bindVAO(this._patternVertexArrayObject),r.bindProgram(this._patternProgram);var p=s.getMosaicItemPosition(m,!0);if(!p)return;var u=512,c=o.coordRange/u,P=c/Math.pow(2,Math.floor(t)-o.key.level)/n;i.identity(this._patternMatrix);var b=1/(p.size[0]*P),y=1/(p.size[1]*P);this._patternMatrix[0]=b,this._patternMatrix[4]=y,s.bind(r,9729,0),this._patternProgram.setUniformMatrix4fv("u_transformMatrix",o.tileTransform.transform),this._patternProgram.setUniform2fv("u_normalized_origin",o.tileTransform.displayCoord),this._patternProgram.setUniform1f("u_depth",a.z),this._patternProgram.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix),this._patternProgram.setUniform1f("u_opacity",d),this._patternProgram.setUniform2f("u_pattern_tl",p.tl[0],p.tl[1]),this._patternProgram.setUniform2f("u_pattern_br",p.br[0],p.br[1]),this._patternProgram.setUniform1i("u_texture",0),r.drawArrays(5,0,4)}else this._color[0]=f*l[0],this._color[1]=f*l[1],this._color[2]=f*l[2],this._color[3]=f,r.bindVAO(this._solidVertexArrayObject),r.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix4fv("u_transformMatrix",o.tileTransform.transform),this._solidProgram.setUniform2fv("u_normalized_origin",o.tileTransform.displayCoord),this._solidProgram.setUniform1f("u_coord_range",o.coordRange),this._solidProgram.setUniform1f("u_depth",a.z||0),this._solidProgram.setUniform4fv("u_color",this._color),r.drawArrays(5,0,4);r.bindVAO()}},r.prototype._initialize=function(r){if(this._initialized)return!0;var t={a_pos:0},i=new o(r,n.backgroundVS,n.backgroundFS,t);if(!i)return!1;var e=new o(r,n.patternFillShaderVS,n.patternFillShaderFS,t);if(!e)return!1;var _={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},l=new Int8Array([0,0,1,0,0,1,1,1]),d=s.createVertex(r,35044,l),m=new a(r,t,_,{geometry:d}),h={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]};l=new Int16Array([0,0,4096,0,0,4096,4096,4096]);var f=s.createVertex(r,35044,l),g=new a(r,t,h,{geometry:f});return this._solidProgram=i,this._patternProgram=e,this._vertexAttributes=_,this._solidVertexArrayObject=m,this._patternVertexArrayObject=g,this._initialized=!0,!0},r}();return _});
},
'esri/core/libs/gl-matrix/mat3':function(){
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

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE. */

define(["./common"],function(t){var a={};return a.create=function(){var a=new t.ARRAY_TYPE(9);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a},a.fromMat4=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[4],t[4]=a[5],t[5]=a[6],t[6]=a[8],t[7]=a[9],t[8]=a[10],t},a.clone=function(a){var n=new t.ARRAY_TYPE(9);return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n},a.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t},a.fromValues=function(a,n,r,u,o,M,e,h,i){var s=new t.ARRAY_TYPE(9);return s[0]=a,s[1]=n,s[2]=r,s[3]=u,s[4]=o,s[5]=M,s[6]=e,s[7]=h,s[8]=i,s},a.set=function(t,a,n,r,u,o,M,e,h,i){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=o,t[5]=M,t[6]=e,t[7]=h,t[8]=i,t},a.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},a.transpose=function(t,a){if(t===a){var n=a[1],r=a[2],u=a[5];t[1]=a[3],t[2]=a[6],t[3]=n,t[5]=a[7],t[6]=r,t[7]=u}else t[0]=a[0],t[1]=a[3],t[2]=a[6],t[3]=a[1],t[4]=a[4],t[5]=a[7],t[6]=a[2],t[7]=a[5],t[8]=a[8];return t},a.invert=function(t,a){var n=a[0],r=a[1],u=a[2],o=a[3],M=a[4],e=a[5],h=a[6],i=a[7],s=a[8],c=s*M-e*i,f=-s*o+e*h,b=i*o-M*h,m=n*c+r*f+u*b;return m?(m=1/m,t[0]=c*m,t[1]=(-s*r+u*i)*m,t[2]=(e*r-u*M)*m,t[3]=f*m,t[4]=(s*n-u*h)*m,t[5]=(-e*n+u*o)*m,t[6]=b*m,t[7]=(-i*n+r*h)*m,t[8]=(M*n-r*o)*m,t):null},a.adjoint=function(t,a){var n=a[0],r=a[1],u=a[2],o=a[3],M=a[4],e=a[5],h=a[6],i=a[7],s=a[8];return t[0]=M*s-e*i,t[1]=u*i-r*s,t[2]=r*e-u*M,t[3]=e*h-o*s,t[4]=n*s-u*h,t[5]=u*o-n*e,t[6]=o*i-M*h,t[7]=r*h-n*i,t[8]=n*M-r*o,t},a.determinant=function(t){var a=t[0],n=t[1],r=t[2],u=t[3],o=t[4],M=t[5],e=t[6],h=t[7],i=t[8];return a*(i*o-M*h)+n*(-i*u+M*e)+r*(h*u-o*e)},a.multiply=function(t,a,n){var r=a[0],u=a[1],o=a[2],M=a[3],e=a[4],h=a[5],i=a[6],s=a[7],c=a[8],f=n[0],b=n[1],m=n[2],l=n[3],v=n[4],p=n[5],E=n[6],w=n[7],P=n[8];return t[0]=f*r+b*M+m*i,t[1]=f*u+b*e+m*s,t[2]=f*o+b*h+m*c,t[3]=l*r+v*M+p*i,t[4]=l*u+v*e+p*s,t[5]=l*o+v*h+p*c,t[6]=E*r+w*M+P*i,t[7]=E*u+w*e+P*s,t[8]=E*o+w*h+P*c,t},a.mul=a.multiply,a.translate=function(t,a,n){var r=a[0],u=a[1],o=a[2],M=a[3],e=a[4],h=a[5],i=a[6],s=a[7],c=a[8],f=n[0],b=n[1];return t[0]=r,t[1]=u,t[2]=o,t[3]=M,t[4]=e,t[5]=h,t[6]=f*r+b*M+i,t[7]=f*u+b*e+s,t[8]=f*o+b*h+c,t},a.rotate=function(t,a,n){var r=a[0],u=a[1],o=a[2],M=a[3],e=a[4],h=a[5],i=a[6],s=a[7],c=a[8],f=Math.sin(n),b=Math.cos(n);return t[0]=b*r+f*M,t[1]=b*u+f*e,t[2]=b*o+f*h,t[3]=b*M-f*r,t[4]=b*e-f*u,t[5]=b*h-f*o,t[6]=i,t[7]=s,t[8]=c,t},a.scale=function(t,a,n){var r=n[0],u=n[1];return t[0]=r*a[0],t[1]=r*a[1],t[2]=r*a[2],t[3]=u*a[3],t[4]=u*a[4],t[5]=u*a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t},a.fromTranslation=function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=a[0],t[7]=a[1],t[8]=1,t},a.fromRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=0,t[3]=-n,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},a.fromScaling=function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=a[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},a.fromMat2d=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=0,t[3]=a[2],t[4]=a[3],t[5]=0,t[6]=a[4],t[7]=a[5],t[8]=1,t},a.fromQuat=function(t,a){var n=a[0],r=a[1],u=a[2],o=a[3],M=n+n,e=r+r,h=u+u,i=n*M,s=r*M,c=r*e,f=u*M,b=u*e,m=u*h,l=o*M,v=o*e,p=o*h;return t[0]=1-c-m,t[3]=s-p,t[6]=f+v,t[1]=s+p,t[4]=1-i-m,t[7]=b-l,t[2]=f-v,t[5]=b+l,t[8]=1-i-c,t},a.normalFromMat4=function(t,a){var n=a[0],r=a[1],u=a[2],o=a[3],M=a[4],e=a[5],h=a[6],i=a[7],s=a[8],c=a[9],f=a[10],b=a[11],m=a[12],l=a[13],v=a[14],p=a[15],E=n*e-r*M,w=n*h-u*M,P=n*i-o*M,S=r*h-u*e,d=r*i-o*e,x=u*i-o*h,I=s*l-c*m,L=s*v-f*m,N=s*p-b*m,O=c*v-f*l,A=c*p-b*l,R=f*p-b*v,y=E*R-w*A+P*O+S*N-d*L+x*I;return y?(y=1/y,t[0]=(e*R-h*A+i*O)*y,t[1]=(h*N-M*R-i*L)*y,t[2]=(M*A-e*N+i*I)*y,t[3]=(u*A-r*R-o*O)*y,t[4]=(n*R-u*N+o*L)*y,t[5]=(r*N-n*A-o*I)*y,t[6]=(l*x-v*d+p*S)*y,t[7]=(v*P-m*x-p*w)*y,t[8]=(m*d-l*P+p*E)*y,t):null},a.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},a.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},a.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t},a.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t},a.sub=a.subtract,a.multiplyScalar=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t},a.multiplyScalarAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t[6]=a[6]+n[6]*r,t[7]=a[7]+n[7]*r,t[8]=a[8]+n[8]*r,t},a.exactEquals=function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]},a.equals=function(a,n){var r=a[0],u=a[1],o=a[2],M=a[3],e=a[4],h=a[5],i=a[6],s=a[7],c=a[8],f=n[0],b=n[1],m=n[2],l=n[3],v=n[4],p=n[5],E=a[6],w=n[7],P=n[8];return Math.abs(r-f)<=t.EPSILON*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-b)<=t.EPSILON*Math.max(1,Math.abs(u),Math.abs(b))&&Math.abs(o-m)<=t.EPSILON*Math.max(1,Math.abs(o),Math.abs(m))&&Math.abs(M-l)<=t.EPSILON*Math.max(1,Math.abs(M),Math.abs(l))&&Math.abs(e-v)<=t.EPSILON*Math.max(1,Math.abs(e),Math.abs(v))&&Math.abs(h-p)<=t.EPSILON*Math.max(1,Math.abs(h),Math.abs(p))&&Math.abs(i-E)<=t.EPSILON*Math.max(1,Math.abs(i),Math.abs(E))&&Math.abs(s-w)<=t.EPSILON*Math.max(1,Math.abs(s),Math.abs(w))&&Math.abs(c-P)<=t.EPSILON*Math.max(1,Math.abs(c),Math.abs(P))},a});
},
'esri/core/libs/gl-matrix/vec4':function(){
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

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE. */

define(["./common"],function(t){var n={};return n.create=function(){var n=new t.ARRAY_TYPE(4);return n[0]=0,n[1]=0,n[2]=0,n[3]=0,n},n.clone=function(n){var r=new t.ARRAY_TYPE(4);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r},n.fromValues=function(n,r,a,u){var e=new t.ARRAY_TYPE(4);return e[0]=n,e[1]=r,e[2]=a,e[3]=u,e},n.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},n.set=function(t,n,r,a,u){return t[0]=n,t[1]=r,t[2]=a,t[3]=u,t},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t},n.subtract=function(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t},n.sub=n.subtract,n.multiply=function(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t[3]=n[3]*r[3],t},n.mul=n.multiply,n.divide=function(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t[3]=n[3]/r[3],t},n.div=n.divide,n.ceil=function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},n.floor=function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},n.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t[3]=Math.min(n[3],r[3]),t},n.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t[3]=Math.max(n[3],r[3]),t},n.round=function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},n.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t},n.scaleAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t},n.distance=function(t,n){var r=n[0]-t[0],a=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return Math.sqrt(r*r+a*a+u*u+e*e)},n.dist=n.distance,n.squaredDistance=function(t,n){var r=n[0]-t[0],a=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return r*r+a*a+u*u+e*e},n.sqrDist=n.squaredDistance,n.length=function(t){var n=t[0],r=t[1],a=t[2],u=t[3];return Math.sqrt(n*n+r*r+a*a+u*u)},n.len=n.length,n.squaredLength=function(t){var n=t[0],r=t[1],a=t[2],u=t[3];return n*n+r*r+a*a+u*u},n.sqrLen=n.squaredLength,n.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},n.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},n.normalize=function(t,n){var r=n[0],a=n[1],u=n[2],e=n[3],i=r*r+a*a+u*u+e*e;return i>0&&(i=1/Math.sqrt(i),t[0]=r*i,t[1]=a*i,t[2]=u*i,t[3]=e*i),t},n.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]},n.lerp=function(t,n,r,a){var u=n[0],e=n[1],i=n[2],o=n[3];return t[0]=u+a*(r[0]-u),t[1]=e+a*(r[1]-e),t[2]=i+a*(r[2]-i),t[3]=o+a*(r[3]-o),t},n.random=function(r,a){return a=a||1,r[0]=t.RANDOM(),r[1]=t.RANDOM(),r[2]=t.RANDOM(),r[3]=t.RANDOM(),n.normalize(r,r),n.scale(r,r,a),r},n.transformMat4=function(t,n,r){var a=n[0],u=n[1],e=n[2],i=n[3];return t[0]=r[0]*a+r[4]*u+r[8]*e+r[12]*i,t[1]=r[1]*a+r[5]*u+r[9]*e+r[13]*i,t[2]=r[2]*a+r[6]*u+r[10]*e+r[14]*i,t[3]=r[3]*a+r[7]*u+r[11]*e+r[15]*i,t},n.transformQuat=function(t,n,r){var a=n[0],u=n[1],e=n[2],i=r[0],o=r[1],c=r[2],h=r[3],f=h*a+o*e-c*u,M=h*u+c*a-i*e,s=h*e+i*u-o*a,l=-i*a-o*u-c*e;return t[0]=f*h+l*-i+M*-c-s*-o,t[1]=M*h+l*-o+s*-i-f*-c,t[2]=s*h+l*-c+f*-o-M*-i,t[3]=n[3],t},n.forEach=function(){var t=n.create();return function(n,r,a,u,e,i){var o,c;for(r||(r=4),a||(a=0),c=u?Math.min(u*r+a,n.length):n.length,o=a;c>o;o+=r)t[0]=n[o],t[1]=n[o+1],t[2]=n[o+2],t[3]=n[o+3],e(t,t,i),n[o]=t[0],n[o+1]=t[1],n[o+2]=t[2],n[o+3]=t[3];return n}}(),n.str=function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]},n.equals=function(n,r){var a=n[0],u=n[1],e=n[2],i=n[3],o=r[0],c=r[1],h=r[2],f=r[3];return Math.abs(a-o)<=t.EPSILON*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(u-c)<=t.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(e-h)<=t.EPSILON*Math.max(1,Math.abs(e),Math.abs(h))&&Math.abs(i-f)<=t.EPSILON*Math.max(1,Math.abs(i),Math.abs(f))},n});
},
'esri/views/vectorTiles/renderers/vtShaderSnippets':function(){
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

define(["require","exports","../../webgl/ShaderSnippets","dojo/text!./Shaders.xml","dojo/text!./shaders/background.vs.glsl","dojo/text!./shaders/background.fs.glsl","dojo/text!./shaders/lineShader.vs.glsl","dojo/text!./shaders/lineShader.fs.glsl","dojo/text!./shaders/patternLineShader.vs.glsl","dojo/text!./shaders/patternLineShader.fs.glsl","dojo/text!./shaders/lineJoinShader.vs.glsl","dojo/text!./shaders/lineJoinShader.fs.glsl","dojo/text!./shaders/lineJoinQuadShader.vs.glsl","dojo/text!./shaders/lineJoinQuadShader.fs.glsl","dojo/text!./shaders/solidFillShader.vs.glsl","dojo/text!./shaders/solidFillShader.fs.glsl","dojo/text!./shaders/patternFillShader.vs.glsl","dojo/text!./shaders/patternFillShader.fs.glsl","dojo/text!./shaders/fillOutlineShader.vs.glsl","dojo/text!./shaders/fillOutlineShader.fs.glsl","dojo/text!./shaders/iconShader.vs.glsl","dojo/text!./shaders/iconShader.fs.glsl","dojo/text!./shaders/sdfShader.vs.glsl","dojo/text!./shaders/sdfShader.fs.glsl","dojo/text!./shaders/tileInfo.vs.glsl","dojo/text!./shaders/tileInfo.fs.glsl"],function(e,s,d,l,r,a,t,o,n,i,S,h,g,f,x,j,p,F,u,v,c,V,J,b,k,I){function L(e,s){O+='<snippet name="'+e+'"><![CDATA[',O+=s,O+="]]></snippet>"}var O="";O+='<?xml version="1.0" encoding="UTF-8"?>',O+="<snippets>",L("backgroundVS",r),L("backgroundFS",a),L("lineShaderVS",t),L("lineShaderFS",o),L("patternLineShaderVS",n),L("patternLineShaderFS",i),L("lineJoinShaderVS",S),L("lineJoinShaderFS",h),L("lineJoinQuadShaderVS",g),L("lineJoinQuadShaderFS",f),L("solidFillShaderVS",x),L("solidFillShaderFS",j),L("patternFillShaderVS",p),L("patternFillShaderFS",F),L("fillOutlineShaderVS",u),L("fillOutlineShaderFS",v),L("iconShaderVS",c),L("iconShaderFS",V),L("sdfShaderVS",J),L("sdfShaderFS",b),L("tileInfoVS",k),L("tileInfoFS",I),O+="</snippets>";var Q=new d;return d.parse(O,Q),d.parse(l,Q),Q});
},
'esri/views/vectorTiles/renderers/LineRenderer':function(){
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

define(["require","exports","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/vec4","../../../core/libs/gl-matrix/vec3","../../../core/libs/gl-matrix/vec2","../../webgl/Program","../../webgl/VertexArrayObject","../GeometryUtils","./vtShaderSnippets"],function(t,r,e,i,a,n,s,o,l,_){var f=function(){function t(){this._triangleAttributeLocations={a_pos:0,a_offsetAndNormal:1,a_accumulatedDistance:2},this._initialized=!1,this._viewProjMat=e.create(),this._offsetVector=a.create(),this._screenSize=n.create(),this._color=i.create(),this._dashArray=n.create()}return t.prototype.dispose=function(){this._triangleslProgram&&(this._triangleslProgram.dispose(),this._triangleslProgram=null),this._patternLineProgram&&(this._patternLineProgram.dispose(),this._patternLineProgram=null)},t.prototype.render=function(t,r,i,a,n,s,o,_,f,g){if(0!==r.triangleElementCount){this._initialized||this._initialize(t);var m=n.tileTransform.transform,h=512,u=n.coordRange/h,c=s.getPaintValue("line-translate",i);if(0!==c[0]||0!==c[1]){e.copy(this._viewProjMat,n.tileTransform.transform);var d=c[0],p=c[1],P=0,v=0,b=(1<<n.key.level)/Math.pow(2,i)*u,y=a.rotation,V=s.getPaintValue("line-translate-anchor",i);if(1===V){var x=Math.sin(l.C_DEG_TO_RAD*-y),A=Math.cos(l.C_DEG_TO_RAD*-y);P=b*(d*A-p*x),v=b*(d*x+p*A)}else P=b*d,v=b*p;this._offsetVector[0]=P,this._offsetVector[1]=v,this._offsetVector[2]=0,e.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),m=this._viewProjMat}var L=s.getPaintValue("line-pattern",i),U=void 0!==L,z=1/f,M=s.getPaintValue("line-blur",i)+z,w=s.getPaintValue("line-width",i),S=.5*(w+z),T=g*s.getPaintValue("line-opacity",i),O=s.getPaintValue("line-color",i),j=O[3]*T;this._color[0]=j*O[0],this._color[1]=j*O[1],this._color[2]=j*O[2],this._color[3]=j;var C=this._getTrianglesVAO(t,n);if(C){if(t.bindVAO(C),U){var D=o.getMosaicItemPosition(L,!0);D&&(o.bind(t,9729,D.page,1),t.bindProgram(this._patternLineProgram),this._patternLineProgram.setUniformMatrix4fv("u_transformMatrix",m),this._patternLineProgram.setUniformMatrix4fv("u_extrudeMatrix",_),this._patternLineProgram.setUniform2fv("u_normalized_origin",n.tileTransform.displayCoord),this._patternLineProgram.setUniform1f("u_depth",s.z),this._patternLineProgram.setUniform1f("u_lineHalfWidth",S),this._patternLineProgram.setUniform1f("u_blur",M),this._patternLineProgram.setUniform1f("u_opacity",T),this._patternLineProgram.setUniform2f("u_pattern_tl",D.tl[0],D.tl[1]),this._patternLineProgram.setUniform2f("u_pattern_br",D.br[0],D.br[1]),this._patternLineProgram.setUniform2f("u_spriteSize",u*D.size[0],D.size[1]),this._patternLineProgram.setUniform1i("u_texture",1))}else{var E=s.getPaintValue("line-dasharray",i);E.length<2&&(E=[1,-1]);var G=w*u;this._dashArray[0]=G*E[0],this._dashArray[1]=G*E[1],t.bindProgram(this._triangleslProgram),this._triangleslProgram.setUniformMatrix4fv("u_transformMatrix",m),this._triangleslProgram.setUniformMatrix4fv("u_extrudeMatrix",_),this._triangleslProgram.setUniform2fv("u_normalized_origin",n.tileTransform.displayCoord),this._triangleslProgram.setUniform1f("u_depth",s.z),this._triangleslProgram.setUniform4fv("u_color",this._color),this._triangleslProgram.setUniform1f("u_lineHalfWidth",S),this._triangleslProgram.setUniform2fv("u_dasharray",this._dashArray),this._triangleslProgram.setUniform1f("u_blur",M)}t.drawElements(4,r.triangleElementCount,5125,12*r.triangleElementStart),t.bindVAO()}}},t.prototype._initialize=function(t){if(this._initialized)return!0;var r=new s(t,_.lineShaderVS,_.lineShaderFS,this._triangleAttributeLocations),e={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:12,normalized:!1,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:4,stride:12,normalized:!1,divisor:0},{name:"a_accumulatedDistance",count:1,type:5122,offset:8,stride:12,normalized:!1,divisor:0}]},i=new s(t,_.patternLineShaderVS,_.patternLineShaderFS,this._triangleAttributeLocations);return this._triangleslProgram=r,this._patternLineProgram=i,this._trianglesVertexAttributes=e,this._initialized=!0,!0},t.prototype._getTrianglesVAO=function(t,r){if(r.lineTrianglesVertexArrayObject)return r.lineTrianglesVertexArrayObject;var e=r.lineVertexBuffer,i=r.lineTrianglesIndexBuffer;return e&&i?(r.lineTrianglesVertexArrayObject=new o(t,this._triangleAttributeLocations,this._trianglesVertexAttributes,{geometry:e},i),r.lineTrianglesVertexArrayObject):null},t}();return f});
},
'esri/views/vectorTiles/renderers/FillRenderer':function(){
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

define(["require","exports","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/mat3","../../../core/libs/gl-matrix/vec4","../../../core/libs/gl-matrix/vec3","../../webgl/Program","../../webgl/VertexArrayObject","../GeometryUtils","./vtShaderSnippets"],function(t,i,r,e,o,l,n,a,s,_){var f=1/65536,u=function(){function t(){this._outlineAttributeLocations={a_pos:0,a_offset:1,a_xnormal:2},this._fillAttributeLocations={a_pos:0},this._initialized=!1,this._viewProjMat=r.create(),this._offsetVector=l.create(),this._patternMatrix=e.create(),this._color=o.create(),this._outlineColor=o.create()}return t.prototype.dispose=function(){this._solidFillProgram&&(this._solidFillProgram.dispose(),this._solidFillProgram=null),this._patternFillProgram&&(this._patternFillProgram.dispose(),this._patternFillProgram=null),this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null)},t.prototype.render=function(t,i,o,l,n,a,_,u,m,h,g){if(0!==i.triangleElementCount){this._initialized||this._initialize(t);var d=_.getPaintValue("fill-pattern",o),p=void 0!==d;if(!p||0!==n){var c=_.getPaintValue("fill-antialias",o)&&!p,P=g*_.getPaintValue("fill-opacity",o),v=_.getPaintValue("fill-color",o),y=!1;if(!p){var x=v[3]*P;1===x&&0===n&&(y=!0),1>x&&1===n&&(y=!0)}if(y||0!==n){var V=a.tileTransform.transform,b=512,A=a.coordRange/b,O=_.getPaintValue("fill-translate",o);if(0!==O[0]||0!==O[1]){r.copy(this._viewProjMat,a.tileTransform.transform);var F=O[0],M=O[1],U=0,w=0,z=(1<<a.key.level)/Math.pow(2,o)*A,S=_.getPaintValue("fill-translate-anchor",o);if(1===S){var C=Math.sin(s.C_DEG_TO_RAD*-l),T=Math.cos(s.C_DEG_TO_RAD*-l);U=z*(F*T-M*C),w=z*(F*C+M*T)}else U=z*F,w=z*M;this._offsetVector[0]=U,this._offsetVector[1]=w,this._offsetVector[2]=0,r.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),V=this._viewProjMat}var j=this._getTrianglesVAO(t,a);if(j){if(p){if(1===n){var E=u.getMosaicItemPosition(d,!0);if(E){var L=512,B=a.coordRange/L,z=B/Math.pow(2,Math.round(o)-a.key.level)/h;e.identity(this._patternMatrix);var D=1/(E.size[0]*z),R=1/(E.size[1]*z);this._patternMatrix[0]=D,this._patternMatrix[4]=R,t.bindVAO(j),u.bind(t,9729,E.page,1),t.bindProgram(this._patternFillProgram),this._patternFillProgram.setUniformMatrix4fv("u_transformMatrix",V),this._patternFillProgram.setUniform2fv("u_normalized_origin",a.tileTransform.displayCoord),this._patternFillProgram.setUniform1f("u_depth",_.z),this._patternFillProgram.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix),this._patternFillProgram.setUniform1f("u_opacity",P),this._patternFillProgram.setUniform2f("u_pattern_tl",E.tl[0],E.tl[1]),this._patternFillProgram.setUniform2f("u_pattern_br",E.br[0],E.br[1]),this._patternFillProgram.setUniform1i("u_texture",1),t.drawElements(4,i.triangleElementCount,5125,12*i.triangleElementStart),t.bindVAO()}}}else if(y){var x=v[3]*P;this._color[0]=x*v[0],this._color[1]=x*v[1],this._color[2]=x*v[2],this._color[3]=x,t.bindVAO(j),t.bindProgram(this._solidFillProgram),this._solidFillProgram.setUniformMatrix4fv("u_transformMatrix",V),this._solidFillProgram.setUniform2fv("u_normalized_origin",a.tileTransform.displayCoord),this._solidFillProgram.setUniform1f("u_depth",_.z+f),this._solidFillProgram.setUniform4fv("u_color",this._color),t.drawElements(4,i.triangleElementCount,5125,12*i.triangleElementStart),t.bindVAO()}if(c&&i.outlineElementCount>0){if(1!==n)return;var G=_.getPaintValue("fill-outline-color",o);if(0===G[3]){if(1!==this._color[3])return;G=v}var I=.75/h,k=G[3]*P;this._outlineColor[0]=k*G[0],this._outlineColor[1]=k*G[1],this._outlineColor[2]=k*G[2],this._outlineColor[3]=k;var q=this._getOutlineVAO(t,a);if(!q)return;t.bindVAO(q),t.bindProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix4fv("u_transformMatrix",V),this._outlineProgram.setUniformMatrix4fv("u_extrudeMatrix",m),this._outlineProgram.setUniform2fv("u_normalized_origin",a.tileTransform.displayCoord),this._outlineProgram.setUniform1f("u_depth",_.z),this._outlineProgram.setUniform1f("u_outline_width",I),this._outlineProgram.setUniform4fv("u_color",this._outlineColor),t.drawElements(4,i.outlineElementCount,5125,12*i.outlineElementStart),t.bindVAO()}}}}}},t.prototype._initialize=function(t){if(this._initialized)return!0;var i={a_pos:0},r=new n(t,_.solidFillShaderVS,_.solidFillShaderFS,i);if(!r)return!1;var e={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]},o=new n(t,_.patternFillShaderVS,_.patternFillShaderFS,this._fillAttributeLocations);if(!o)return!1;var l=new n(t,_.fillOutlineShaderVS,_.fillOutlineShaderFS,this._outlineAttributeLocations),a={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:8,normalized:!1,divisor:0},{name:"a_offset",count:2,type:5120,offset:4,stride:8,normalized:!1,divisor:0},{name:"a_xnormal",count:2,type:5120,offset:6,stride:8,normalized:!1,divisor:0}]};return this._solidFillProgram=r,this._patternFillProgram=o,this._trianglesVertexAttributes=e,this._outlineProgram=l,this._outlineVertexAttributes=a,this._initialized=!0,!0},t.prototype._getTrianglesVAO=function(t,i){if(i.polygonTrianglesVertexArrayObject)return i.polygonTrianglesVertexArrayObject;var r=i.polygonTrianglesVertexBuffer,e=i.polygonTrianglesIndexBuffer;return r&&e?(i.polygonTrianglesVertexArrayObject=new a(t,this._fillAttributeLocations,this._trianglesVertexAttributes,{geometry:r},e),i.polygonTrianglesVertexArrayObject):null},t.prototype._getOutlineVAO=function(t,i){if(i.polygonOutlineVertexArrayObject)return i.polygonOutlineVertexArrayObject;var r=i.polygonOutlinesVertexBuffer,e=i.polygonOutlinesIndexBuffer;return r&&e?(i.polygonOutlineVertexArrayObject=new a(t,this._outlineAttributeLocations,this._outlineVertexAttributes,{geometry:r},e),i.polygonOutlineVertexArrayObject):null},t}();return u});
},
'esri/views/vectorTiles/renderers/SymbolRenderer':function(){
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

define(["require","exports","./IconRenderer","./SDFRenderer"],function(e,r,n,i){var s=function(){function e(){this._iconRenderer=new n,this._sdfRenderer=new i}return e.prototype.dispose=function(){this._iconRenderer&&(this._iconRenderer.dispose(),this._iconRenderer=null),this._sdfRenderer&&(this._sdfRenderer.dispose(),this._sdfRenderer=null)},e.prototype.render=function(e,r,n,i,s,t,d,o,h,R,c,f,p){r.hasData()&&(r.markerPerPageElementsMap.size>0&&(r.isSDF||this._iconRenderer.render(e,r,n,i,s,t,d,o,R,c,p)),r.glyphPerPageElementsMap.size>0&&this._sdfRenderer.render(e,r,n,i,s,t,d,h,R,c,f,p))},e}();return s});
},
'esri/views/vectorTiles/renderers/IconRenderer':function(){
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

define(["require","exports","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/vec3","../../webgl/Program","../../webgl/VertexArrayObject","../GeometryUtils","./vtShaderSnippets"],function(e,t,i,r,o,a,n,s){var c=function(){function e(){this._attributeLocations={a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3},this._spritesTextureSize=new Float32Array(2),this._initialized=!1,this._extrudeMat=i.create(),this._scaleVec=r.create()}return e.prototype.dispose=function(){this._iconProgram&&(this._iconProgram.dispose(),this._iconProgram=null)},e.prototype.render=function(e,t,r,o,a,s,c,_,f,m,u){var h=this;this._initialized||this._initialize(e);var l=u*c.getPaintValue("icon-opacity",r),d=c.getLayoutValue("icon-rotation-alignment",r);1===d&&(1!==c.getLayoutValue("symbol-placement",r)||c.hasLayoutProperty("icon-rotation-alignment")||(d=0));var g=0===d,p=c.getLayoutValue("icon-keep-upright",r)&&g,x=c.getLayoutValue("icon-size",r),y=n.degToByte(o);g?i.copy(this._extrudeMat,f):i.copy(this._extrudeMat,m),1!==x&&(this._scaleVec[0]=x,this._scaleVec[1]=x,this._scaleVec[2]=1,i.scale(this._extrudeMat,this._extrudeMat,this._scaleVec)),e.bindProgram(this._iconProgram);var v=this._getIconVAO(e,s);v&&(e.bindVAO(v),this._iconProgram.setUniformMatrix4fv("u_transformMatrix",s.tileTransform.transform),this._iconProgram.setUniformMatrix4fv("u_extrudeMatrix",this._extrudeMat),this._iconProgram.setUniform2fv("u_normalized_origin",s.tileTransform.displayCoord),this._iconProgram.setUniform1f("u_depth",c.z),this._iconProgram.setUniform1f("u_mapRotation",y),this._iconProgram.setUniform1f("u_keepUpright",p?1:0),this._iconProgram.setUniform1f("u_level",10*r),this._iconProgram.setUniform1f("u_fadeSpeed",10*a.fadeSpeed),this._iconProgram.setUniform1f("u_minfadeLevel",10*a.minfadeLevel),this._iconProgram.setUniform1f("u_maxfadeLevel",10*a.maxfadeLevel),this._iconProgram.setUniform1f("u_fadeChange",10*(r+a.fadeChange)),this._iconProgram.setUniform1f("u_opacity",l),this._iconProgram.setUniform1i("u_texture",1),t.markerPerPageElementsMap.forEach(function(t,i){h._spritesTextureSize[0]=_.getWidth(i)/4,h._spritesTextureSize[1]=_.getHeight(i)/4,h._iconProgram.setUniform2fv("u_mosaicSize",h._spritesTextureSize),_.bind(e,9729,i,1),e.drawElements(4,t[1],5125,12*t[0])}),e.bindVAO())},e.prototype._initialize=function(e){if(this._initialized)return!0;var t=new o(e,s.iconShaderVS,s.iconShaderFS,this._attributeLocations),i={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:16,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};return this._iconProgram=t,this._iconVertexAttributes=i,this._initialized=!0,!0},e.prototype._getIconVAO=function(e,t){if(t.iconVertexArrayObject)return t.iconVertexArrayObject;var i=t.iconVertexBuffer,r=t.iconIndexBuffer;return i&&r?(t.iconVertexArrayObject=new a(e,this._attributeLocations,this._iconVertexAttributes,{geometry:i},r),t.iconVertexArrayObject):null},e}();return c});
},
'esri/views/vectorTiles/renderers/SDFRenderer':function(){
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

define(["require","exports","dojo/has","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/vec4","../../../core/libs/gl-matrix/vec3","../../webgl/Program","../../webgl/VertexArrayObject","../GeometryUtils","./vtShaderSnippets"],function(t,e,r,i,o,a,s,f,n,d){var _=1/65536,l=function(){function t(){this._attributeLocations={a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3},this._initialized=!1,this._extrudeMat=i.create(),this._haloColor=o.create(),this._sdfColor=o.create(),this._scaleVec=a.create()}return t.prototype.dispose=function(){this._sdfProgram&&(this._sdfProgram.dispose(),this._sdfProgram=null)},t.prototype.render=function(t,e,o,a,s,f,d,l,m,h,u,g){var c=this;if(!r("esri-vector-tiles-avoid-text")){this._initialized||this._initialize(t);var x=24,p=d.getLayoutValue("text-size",o),v=p/x,P=n.degToByte(a),y=d.getLayoutValue("text-rotation-alignment",o);1===y&&(1!==d.getLayoutValue("symbol-placement",o)||d.hasLayoutProperty("text-rotation-alignment")||(y=0));var V=0===y,U=d.getLayoutValue("text-keep-upright",o)&&V,b=.1*x/p/u,z=.75,C=g*d.getPaintValue("text-opacity",o);this._glyphTextureSize||(this._glyphTextureSize=new Float32Array([l.width/4,l.height/4])),V?i.copy(this._extrudeMat,m):i.copy(this._extrudeMat,h),this._scaleVec[0]=v,this._scaleVec[1]=v,this._scaleVec[2]=1,i.scale(this._extrudeMat,this._extrudeMat,this._scaleVec),t.bindProgram(this._sdfProgram);var S=this._getSDFVAO(t,f);S&&(t.bindVAO(S),this._sdfProgram.setUniformMatrix4fv("u_transformMatrix",f.tileTransform.transform),this._sdfProgram.setUniformMatrix4fv("u_extrudeMatrix",this._extrudeMat),this._sdfProgram.setUniform2fv("u_normalized_origin",f.tileTransform.displayCoord),this._sdfProgram.setUniform1f("u_depth",d.z+_),this._sdfProgram.setUniform2fv("u_mosaicSize",this._glyphTextureSize),this._sdfProgram.setUniform1f("u_mapRotation",P),this._sdfProgram.setUniform1f("u_keepUpright",U?1:0),this._sdfProgram.setUniform1f("u_level",10*o),this._sdfProgram.setUniform1f("u_fadeSpeed",10*s.fadeSpeed),this._sdfProgram.setUniform1f("u_minfadeLevel",10*s.minfadeLevel),this._sdfProgram.setUniform1f("u_maxfadeLevel",10*s.maxfadeLevel),this._sdfProgram.setUniform1f("u_fadeChange",10*(o+s.fadeChange)),this._sdfProgram.setUniform1f("u_opacity",C),this._sdfProgram.setUniform1i("u_texture",0),e.glyphPerPageElementsMap.forEach(function(e,r){l.bind(t,9729,r,0);var i=d.getPaintValue("text-halo-color",o);if(i[3]>0){var a=i[3]*C;c._haloColor[0]=a*i[0],c._haloColor[1]=a*i[1],c._haloColor[2]=a*i[2],c._haloColor[3]=a;var s=8,f=b+d.getPaintValue("text-halo-blur",o)/v/s,n=z-d.getPaintValue("text-halo-width",o)/v/s;c._sdfProgram.setUniform4fv("u_color",c._haloColor),c._sdfProgram.setUniform1f("u_edgeDistance",n),c._sdfProgram.setUniform1f("u_edgeWidth",f),t.drawElements(4,e[1],5125,12*e[0])}var _=d.getPaintValue("text-color",o);if(_[3]>0){var m=_[3]*C;c._sdfColor[0]=m*_[0],c._sdfColor[1]=m*_[1],c._sdfColor[2]=m*_[2],c._sdfColor[3]=m,c._sdfProgram.setUniform4fv("u_color",c._sdfColor),c._sdfProgram.setUniform1f("u_edgeDistance",z),c._sdfProgram.setUniform1f("u_edgeWidth",b),t.drawElements(4,e[1],5125,12*e[0])}}),t.bindVAO())}},t.prototype._initialize=function(t){if(this._initialized)return!0;var e=new s(t,d.sdfShaderVS,d.sdfShaderFS,this._attributeLocations),r={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:16,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};return this._sdfProgram=e,this._sdfVertexAttributes=r,this._initialized=!0,!0},t.prototype._getSDFVAO=function(t,e){if(e.textVertexArrayObject)return e.textVertexArrayObject;var r=e.textVertexBuffer,i=e.textIndexBuffer;return r&&i?(e.textVertexArrayObject=new f(t,this._attributeLocations,this._sdfVertexAttributes,{geometry:r},i),e.textVertexArrayObject):null},t}();return l});
},
'esri/views/vectorTiles/renderers/TileInfoRenderer':function(){
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

define(["require","exports","../../webgl/Program","../../webgl/VertexArrayObject","../../webgl/BufferObject","../../webgl/Texture","../GeometryUtils","./vtShaderSnippets"],function(t,e,r,i,o,n,a,s){var l=function(){function t(){this._initialized=!1,this._maxWidth=0,this._color=new Float32Array([1,0,0,1])}return t.prototype.dispose=function(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null),this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null),this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null)},t.prototype.render=function(t,e){this._initialized||this._initialize(t),t.bindVAO(this._outlineVertexArrayObject),t.bindProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._outlineProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._outlineProgram.setUniform1f("u_coord_range",e.coordRange),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),t.setLineWidth(2),t.drawArrays(3,0,4),t.bindVAO();var r=this._getTexture(t,e);r&&(t.bindVAO(this._tileInfoVertexArrayObject),t.bindProgram(this._tileInfoProgram),t.bindTexture(r,0),this._tileInfoProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._tileInfoProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform1f("u_coord_ratio",e.coordRange/512),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",r.descriptor.width,r.descriptor.height),t.drawArrays(5,0,4),t.bindVAO())},t.prototype._initialize=function(t){if(this._initialized)return!0;var e={a_pos:0},n=new r(t,s.backgroundVS,s.backgroundFS,e),a=new r(t,s.tileInfoVS,s.tileInfoFS,e),l={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},_=new Int8Array([0,0,1,0,1,1,0,1]),h=o.createVertex(t,35044,_),f=new i(t,e,l,{geometry:h}),u=new Int8Array([0,0,1,0,0,1,1,1]),m=o.createVertex(t,35044,u),d=new i(t,e,l,{geometry:m});return this._outlineProgram=n,this._tileInfoProgram=a,this._vertexAttributes=l,this._outlineVertexArrayObject=f,this._tileInfoVertexArrayObject=d,this._initialized=!0,!0},t.prototype._getTexture=function(t,e){if(e.texture)return e.texture;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","256"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var r=e.key.id,i=this._canvas.getContext("2d");i.font="24px sans-serif",i.textAlign="left",i.textBaseline="middle";var o=i.measureText(r),s=Math.pow(2,Math.ceil(a.log2(o.width+2)));s>this._maxWidth&&(this._maxWidth=s);var l=32;return i.clearRect(0,0,this._maxWidth,l),i.fillStyle=e.key.level>e.refKey.level?"red":"blue",i.fillText(r,0,l/2),e.texture=new n(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728},this._canvas),e.texture},t}();return l});
},
'esri/views/vectorTiles/renderers/FadeRecorder':function(){
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

define(["require","exports","../../../core/now"],function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var l=(function(){function e(e,n){this.level=e,this.now=n}return e}(),function(){function e(e,n,t,l){this.fadeSpeed=e,this.minfadeLevel=n,this.maxfadeLevel=t,this.fadeChange=l}return e}());n.FadeProperties=l;var o=function(){function e(e){void 0===e&&(e=300),this._levelSnapshots=[],this._duration=e}return e.prototype.recordLevel=function(e){var n=t(),l=this._levelSnapshots;0===l.length&&(l.push({level:e,now:0}),l.push({level:e,now:0})),(2===l.length||l[0].level!==e)&&l.push({level:e,now:n})},e.prototype.needsRedraw=function(){if(0===this._levelSnapshots.length)return!1;for(var e=this._duration,n=this._levelSnapshots,t=n.length,l=n[t-1],o=-1;t>o+1&&n[o+1].now+e<l.now;)o++;for(0>o&&(o=0);t>o;o++)if(n[o].level!==l.level)return!0;return!1},e.prototype.getFadeValues=function(e){void 0===e&&(e=!1);for(var n=this._duration,l=t(),o=this._levelSnapshots;o.length>3&&o[1].now+n<l;)o.shift();o[1].now+n<l&&(o[0].level=o[1].level);var r=o[0].level,a=o[o.length-1],i=a.level,h=Math.min(r,i),v=Math.max(r,i),s=a.level-o[1].level,d=a.now-o[1].now,f=s/(d/n),u=(l-a.now)/n*f;return e?{fadeSpeed:0,minfadeLevel:h,maxfadeLevel:v,fadeChange:0}:{fadeSpeed:f,minfadeLevel:h,maxfadeLevel:v,fadeChange:u}},e}();n.FadeRecorder=o});
},
'url:esri/views/vectorTiles/renderers/Shaders.xml':"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!--\n  Add your GLSL snippets to this file. You should start from\n  importing your old GLSL files. For instance, if you have a\n  file such as myShader.vs.glsl you should create a new <snippet name=\"myShaderVS\">\n  and then copy and paste the GLSL source as the content. You will then convert your\n  code to use the {@link module:esri/views/vectorTiles/renderers/vtShaderSnippets vtShaderSnippets}\n  instance to access the GLSL code, instead of importing it directly with require(\"dojo/text!...\").\n-->\n<snippets>\n\n  <snippet name=\"foobarVS\">\n  </snippet>\n\n  <snippet name=\"foobarFS\">\n  </snippet>\n\n</snippets>\n\n",
'url:esri/views/vectorTiles/renderers/shaders/background.vs.glsl':"attribute vec2 a_pos;\n\nuniform highp mat4 u_transformMatrix;\nuniform mediump vec2 u_normalized_origin;\nuniform mediump float u_coord_range;\nuniform mediump float u_depth;\n\nvoid main() {\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(u_coord_range * a_pos, 0.0, 1.0);\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/background.fs.glsl':"uniform lowp vec4 u_color;\nvoid main() {\n  gl_FragColor = u_color;\n}",
'url:esri/views/vectorTiles/renderers/shaders/lineShader.vs.glsl':"/* The implementation of the renderer is based on the article and implementation of MB described here:\n* https://www.mapbox.com/blog/drawing-antialiased-lines/\n*/\n\nattribute vec2 a_pos;\nattribute vec4 a_offsetAndNormal;\nattribute float a_accumulatedDistance;\n\n// the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n// relative to the tile's upper left corner\n// the extrusion vector.\nuniform highp mat4 u_transformMatrix;\n// the extrude matrix which is responsible for the 'anti-zoom' as well as the rotation\nuniform highp mat4 u_extrudeMatrix;\n// u_normalized_origin is the tile's upper left corner given in normalized coordinates\nuniform highp vec2 u_normalized_origin;\n// the z of the layer. Given by the order of the layers in the style\nuniform mediump float u_depth;\n// the inset and outset of the line\nuniform mediump float u_lineHalfWidth;\n// the interpolated normal to the line. the information is packed into the two LSBs of the vertex coordinate\nvarying mediump vec2 v_normal;\n// the accumulated distance along the line. We need this information in order to render the dashes.\nvarying highp float v_accumulatedDistance;\n\nconst float scale = 1.0 / 31.0;\n\nvoid main()\n{\n  v_normal = a_offsetAndNormal.zw * scale;\n\n  // calculate the relative distance from the centerline to the edge of the line. Since offset is given in integers (for the\n  // sake of using less attribute memory, we need to scale it back to the original range of ~ 0: 1)\n  mediump vec2 dist = u_lineHalfWidth * a_offsetAndNormal.xy * scale;\n\n  // transform the vertex\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * vec4(dist, 0.0, 0.0);\n\n  // the accumulated distance will be used to calculate the dashes (or the no-data...)\n  v_accumulatedDistance = a_accumulatedDistance;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/lineShader.fs.glsl':"/* The implementation of the renderer is based on the article and implementation of MB described here:\n* https://www.mapbox.com/blog/drawing-antialiased-lines/\n*/\n\nuniform mediump float u_lineHalfWidth;\nuniform lowp vec4 u_color;\nuniform mediump vec2 u_dasharray;\nuniform lowp float u_blur;\n\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\n\nvoid main()\n{\n  // dist represent the distance of the fragment from the line. 1.0 or -1.0 will be the values on the edge of the line,\n  // and any value in between will be inside the line (the sign represent the direction - right or left).\n  // since u_linewidth.s (half line width) is represented in pixels, dist is also given in pixels\n  mediump float fragDist = length(v_normal) * u_lineHalfWidth;\n\n  // calculate the alpha given the difference between the line-width and the distance of the fragment from the center-line.\n  // We need to count for both sides of the line.\n  lowp float alpha = clamp( min(fragDist + u_blur + 1.0, u_lineHalfWidth - fragDist) / u_blur, 0.0, 1.0);\n\n  // now calculate the dashes given the accumulated distance of the line:\n  // start with calculating a normalized position along the line\n  lowp float dashPos =  mod(v_accumulatedDistance, u_dasharray.x + u_dasharray.y);\n\n  // calculate the contribution to the alpha of the dash part. It is provided by the shortest portion of the position along the dash.\n  // we must clamp since the value might be bigger than 1 or smaller than zero (when over a dash).\n  //   | <--- pos along the dash part\n  // -------_______-------_______\n  // when the dashPos is over the 'gap' part of the dash u_dasharray.x - dashPos is negative and therefore the alpha will\n  // get clamped to zero.\n  // when u_dasharray.x - dashPos is positive, or when dashPos is smaller than 1.0, it gives us a soft edge to each dash part.\n  // along the direction of the line.\n  lowp float dashAlpha = clamp( min(dashPos, u_dasharray.x - dashPos), 0.0, 1.0);\n\n  // if we don't have a no-data part to the dash then it is a solid line\n  dashAlpha = max(sign(-u_dasharray.y), dashAlpha); //sign(-u_dasharray.y) > 0.0 ? 1.0 : dashAlpha;\n  // finally multiply the fragment's alpha by the calculated dash-alpha\n  alpha *= dashAlpha;\n\n  // output the fragment color\n gl_FragColor = alpha * u_color;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/patternLineShader.vs.glsl':"attribute vec2 a_pos;\nattribute vec4 a_offsetAndNormal;\nattribute float a_accumulatedDistance;\n\n// the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n// relative to the tile's upper left corner\n// the extrusion vector.\nuniform highp mat4 u_transformMatrix;\n// the extrude matrix which is responsible for the 'anti-zoom' as well as the rotation\nuniform highp mat4 u_extrudeMatrix;\n// u_normalized_origin is the tile's upper left corner given in normalized coordinates\nuniform highp vec2 u_normalized_origin;\n// the z of the layer. Given by the order of the layers in the style\nuniform mediump float u_depth;\n// the inset and outset of the line\nuniform mediump float u_lineHalfWidth;\n// the interpolated normal to the line. the information is packed into the two LSBs of the vertex coordinate\nvarying mediump vec2 v_normal;\n// the accumulated distance along the line. We need this information in order to render the dashes.\nvarying highp float v_accumulatedDistance;\n\nconst float scale = 1.0 / 31.0;\n\nvoid main()\n{\n  v_normal = a_offsetAndNormal.zw * scale;\n\n  // calculate the relative distance from the centerline to the edge of the line. Since offset is given in integers (for the\n  // sake of using less attribute memory, we need to scale it back to the original range of ~ 0: 1)\n  // sake of using less attribute memory, we need to scale it back to the original range of ~ 0: 1)\n  mediump vec2 dist = u_lineHalfWidth * a_offsetAndNormal.xy * scale;\n\n  // transform the vertex\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * vec4(dist, 0.0, 0.0);\n\n  // the accumulated distance will be used to calculate the dashes (or the no-data...)\n  v_accumulatedDistance = a_accumulatedDistance;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/patternLineShader.fs.glsl':"uniform mediump float u_lineHalfWidth;\nuniform lowp float u_blur;\nuniform lowp float u_opacity;\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform mediump vec2 u_spriteSize;\nuniform sampler2D u_texture;\n\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\n\n// Horizontal scale is used to scale the horizontal texture coordinate v_normal.x before adding it as an offset to the\n// accumulated distance. Most vertices will have v_normal.x == 0, because the pattern must be sampled only depending on\n// the v_accumulatedDistance value. But tessellation at caps can have vertices with v_normal.x != 0, thus allowing to\n// \"keep moving\" for a few more pixel even when the line has ended or has not started yet.\nconst mediump float tileCoordRatio = 8.0;\n\nvoid main()\n{\n  // dist represent the distance of the fragment from the line. 1.0 or -1.0 will be the values on the edge of the line,\n  // and any value in between will be inside the line (the sign represent the direction - right or left).\n  // since u_linewidth.s (half line width) is represented in pixels, dist is also given in pixels\n  mediump float fragDist = length(v_normal) * u_lineHalfWidth;\n\n  // calculate the alpha given the difference between the line-width and the distance of the fragment from the center-line.\n  // We need to count for both sides of the line.\n  lowp float alpha = clamp( min(fragDist + u_blur + 1.0, u_lineHalfWidth - fragDist) / u_blur, 0.0, 1.0);\n  // add the line's opacity to the alpha\n  alpha *= u_opacity;\n\n  // we need to calculate the relative portion of the line texture along the line given the accumulated distance aliong the line\n  // The computed value should is anumber btween 0 and 1 which will later be used to interpolate btween the BR and TL values\n  mediump float relativeTexX = mod((v_accumulatedDistance + v_normal.x * u_lineHalfWidth * tileCoordRatio) / u_spriteSize.x, 1.0);\n\n  // in order to calculate the texture coordinates prependicular to the line (Y axis), we use the interpolated normal values\n  // which range from -1.0 to 1.0. On the line's centerline, the value of the interpolated normal is 0.0, however the relative\n  // texture value shpould be 0.5 (given that at the bottom of the line, the texture coordinate must be equal to 0.0)\n  // (TL) ---------------------------      --> left edge of line. Interpolatedf normal is 1.0\n  //              | -> linwe-width / 2\n  //      - - - - - - - - - - - - - -\n  //              | -> linwe-width / 2\n  //      ---------------------------- (BR)--> right edge of line. Interpolatedf normal is -1.0\n\n  mediump float relativeTexY = 0.5 + (v_normal.y * u_lineHalfWidth / (0.5 * u_spriteSize.y));\n\n  // claculate the actual texture coordinates by interpolating between the TL/BR pattern coordinates\n  mediump vec2 texCoord = mix(u_pattern_tl, u_pattern_br, vec2(relativeTexX, relativeTexY));\n\n  // get the color from the texture\n  lowp vec4 color = texture2D(u_texture, texCoord);\n\n  // 'un-premultiply' the color\n  lowp float inv_alpha = (1.0 / clamp(color.a, 0.00390625, 1.0));\n  // finally write the fragment value\n  gl_FragColor = alpha * color;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/lineJoinShader.vs.glsl':"attribute vec2 a_pos;\n\nuniform highp mat4 u_transformMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform highp float u_depth;\nuniform highp vec2 u_screen;\nuniform mediump float u_size;\nuniform mediump float u_pixelRatio;\n\nvarying mediump vec2 v_vertexPosition;\n\nvoid main()\n{\n  gl_PointSize = u_pixelRatio * u_size;\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0);\n\n  // calculate the vertex position in pixels (we need to add one in order to shift the origin from the center of the viewport)\n  v_vertexPosition = (gl_Position.xy + 1.0) * u_screen;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/lineJoinShader.fs.glsl':"uniform lowp vec4 u_color;\nuniform mediump float u_lineHalfWidth;\nuniform mediump float u_oneOverPixelRatio;\n\nvarying mediump vec2 v_vertexPosition;\n\nvoid main()\n{\n  // get the distance of the current fragment from the actual vertex\n  mediump float fragDist = length(v_vertexPosition - u_oneOverPixelRatio * gl_FragCoord.xy);\n\n  // rounding the quare: calculate the alpha given the difference between the line-width and the distance of the fragment\n  // from the center-line. We will end up with a nice round circle with a soft edge.\n  lowp float alpha = clamp(u_lineHalfWidth - fragDist, 0.0, 1.0);\n\n  // finally output the fragment color\n  gl_FragColor = alpha * u_color;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/lineJoinQuadShader.vs.glsl':"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\n\nuniform highp mat4 u_transformMatrix;\nuniform highp mat4 u_extrudeMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform highp float u_depth;\n// The width/height of the screen\nuniform mediump vec2 u_screen;\n// u_size is the diameter of the join in tile units\nuniform mediump float u_size;\n\nvarying mediump vec2 v_fragmentOffset;\n\nvoid main()\n{\n  // calculate the offset in pixels from the join's center to the vertex\n  highp vec2 dist = u_size * a_vertexOffset;\n\n  // calculate the position of the join's center in normalized coordinates\n  highp vec4 center_pos = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0);\n\n  // offset in normalized display units\n  highp vec4 vertex_offset = u_extrudeMatrix * vec4(dist, 0.0, 0.0);\n\n  // calculate the vertex offset in windows coordinates\n  v_fragmentOffset = u_screen * vertex_offset.xy;\n\n  // finally calculate the vertex position\n  gl_Position = center_pos + vertex_offset;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/lineJoinQuadShader.fs.glsl':"uniform lowp vec4 u_color;\nuniform mediump float u_lineHalfWidth;\n\nvarying mediump vec2 v_fragmentOffset;\n\nvoid main()\n{\n  // Calculate the antialiasing fade factor\n  lowp float alpha = clamp(u_lineHalfWidth * u_lineHalfWidth - dot(v_fragmentOffset, v_fragmentOffset), 0.0, 1.0);\n  //lowp float alpha  = 1.0 - smoothstep(u_lineHalfWidth - 0.25, u_lineHalfWidth + 0.25, dist);\n  // YF: if needed w can also use a smoothstep around the edge of the circle and use a single pixel or so as the edge width\n\n  // finally output the fragment color\n  gl_FragColor = alpha * u_color;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/solidFillShader.vs.glsl':"attribute vec2 a_pos;\n\nuniform highp mat4 u_transformMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform mediump float u_depth;\n\nvoid main()\n{\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0, 1.0);\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/solidFillShader.fs.glsl':"uniform lowp vec4 u_color;\nvoid main()\n{\n  gl_FragColor = u_color;\n}",
'url:esri/views/vectorTiles/renderers/shaders/patternFillShader.vs.glsl':"uniform highp mat4 u_transformMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform mediump float u_depth;\nuniform mediump mat3 u_pattern_matrix; // can we use meduim precision??\n\nattribute vec2 a_pos;\n\nvarying mediump vec2 v_tileTextureCoord;\n\nvoid main()\n{\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0);\n  // calculate the texture coordinates of the current vertex. It will of course get interpolated.\n  // The pattern matrix is a 3x3 scale matrix which 'tiles' the texture inside the tile, translating from tile coordinates\n  // (-4k to 8k -1) to texture coordinates.\n  v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/patternFillShader.fs.glsl':"uniform lowp float u_opacity;\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform sampler2D u_texture;\n\nvarying mediump vec2 v_tileTextureCoord;\n\nvoid main()\n{\n  // normalize the calculated texture coordinate such that it fits in the range of 0 to 1.\n  mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\n  // interpolate the image coordinate between the top-left and the bottom right to get the actual position to sample.\n  // after normalizing the position, we get a value ranging between 0 and 1 which refers to the entire texture, however\n  // we need to only sample from area that has our sprite in the mosaic.\n  mediump vec2 samplePos = mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n  // sample the sprite mosaic\n  lowp vec4 color = texture2D(u_texture, samplePos);\n  gl_FragColor = u_opacity * color;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/fillOutlineShader.vs.glsl':"attribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_xnormal;\n\nuniform highp mat4 u_transformMatrix;\nuniform highp mat4 u_extrudeMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform mediump float u_depth;\nuniform mediump float u_outline_width;\n\nvarying lowp vec2 v_normal;\n\nconst float scale = 1.0 / 15.0;\n\nvoid main()\n{\n  v_normal = a_xnormal;\n\n   // calculate the relative distance from the centerline to the edge of the line. Since offset is given in integers (for the\n    // sake of using less attribute memory, we need to scale it back to the original range of ~ 0: 1)\n  mediump vec4 dist = vec4(u_outline_width * a_offset * scale, 0.0, 0.0);\n\n  // Remove the texture normal bit of the position before scaling it with the\n  // model/view matrix. Add the extrusion vector *after* the model/view matrix\n  // because we're extruding the line in pixel space, regardless of the current\n  // tile's zoom level.\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * dist;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/fillOutlineShader.fs.glsl':"uniform lowp vec4 u_color;\nvarying mediump vec2 v_normal;\n\nvoid main()\n{\n  // Calculate the distance of the pixel from the line in pixels.\n  lowp float dist = abs(v_normal.y);\n\n  lowp float alpha = smoothstep(1.0, 0.0, dist);\n  gl_FragColor = alpha * u_color;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/iconShader.vs.glsl':"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_tex;\nattribute vec4 a_levelInfo;\n\n// the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n// relative to the tile's upper left corner\n// the extrusion vector.\nuniform highp mat4 u_transformMatrix;\n// the extrude matrix which is responsible for the 'anti-zoom' as well as the rotation\nuniform highp mat4 u_extrudeMatrix;\n// u_normalized_origin is the tile's upper left corner given in normalized coordinates\nuniform highp vec2 u_normalized_origin;\n// the size of the mosaic given in pixels\nuniform vec2 u_mosaicSize;\n// the z of the layer. Given by the order of the layers in the style\nuniform mediump float u_depth;\n// the map's rotation from the north\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\n// indicate whether the current set of iconst should be kept upright when the map is rotated\nuniform lowp float u_keepUpright;\n// the rate of the change in the opacity (fade) of the icons\nuniform mediump float u_fadeSpeed;\n// the low level we transition (to/from)\nuniform mediump float u_minfadeLevel;\n// the high level we transition (to/from)\nuniform mediump float u_maxfadeLevel;\n// the amount of fade given teh current time past the last recorded level\nuniform mediump float u_fadeChange;\n// the opacity of the layer given by the painter\nuniform mediump float u_opacity;\n// the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture\nvarying lowp vec2 v_tex;\n// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the\n// opacity of the layer given by the painter\nvarying lowp float v_transparency;\n\n// the vertex offsets are given in integers, therefore in order to maintain a reasonable precission we multiply the values\n// by 16 and then at the shader devide by the same number\nconst float offsetPrecision = 1.0 / 32.0;\n\nvoid main()\n{\n  mediump float a_labelMinLevel = a_levelInfo[0];\n  mediump float a_angle        = a_levelInfo[1];\n  mediump float a_minLevel    = a_levelInfo[2];\n  mediump float a_maxLevel    = a_levelInfo[3];\n\n  // if the given vertex should not be visible simply clip it by adding it a value that will push it outside the clipping plane\n  mediump float delta_z = 0.0;\n\n  // If the label rotates with the map, and if the rotated label is upside down, hide it\n  mediump float rotated = mod(a_angle - u_mapRotation, 256.0);\n  delta_z += (1.0 - step(u_keepUpright,0.0)) * step(65.0,rotated) * (1.0 - step(193.0,rotated)); //ie. z += (flip > 0) && (65 <= rotated) && (rotated < 193)\n\n  // u_level is the current service level adjusted for the change in font size\n  delta_z += 1.0 - step(a_minLevel, u_level); // Test if (level < minLevel)\n  delta_z += step(a_maxLevel, u_level); // Test if (maxLevel <= level)\n\n  // calculate the alpha given the change in the fade and the fade-speed\n  lowp float alpha = clamp((u_fadeChange - a_labelMinLevel) / u_fadeSpeed, 0.0, 1.0);\n\n  // if the speed is positive we are zooming in and therefore we need to 'fade-in'. Else we need to 'fade-out'\n  v_transparency = (u_fadeSpeed >= 0.0 ? alpha : 1.0 - alpha);\n\n  // now deal with the min/max fade-levels. If we exceeded the level we simply snap to 0 or 1\n  if (u_maxfadeLevel < a_labelMinLevel)\n  {\n      v_transparency = 0.0;\n  }\n  if (u_minfadeLevel >= a_labelMinLevel)\n  {\n      v_transparency = 1.0;\n  }\n\n  // if label had been faded out, clip it\n  delta_z += step(v_transparency, 0.0);\n\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * vec4(offsetPrecision * a_vertexOffset, delta_z, 0.0);\n  v_tex = a_tex.xy / u_mosaicSize;\n\n  v_transparency *= u_opacity;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/iconShader.fs.glsl':"uniform lowp sampler2D u_texture;\nvarying lowp vec2 v_tex;\nvarying lowp float v_transparency;\n\nvoid main()\n{\n  lowp vec4 color = texture2D(u_texture, v_tex);\n  gl_FragColor = v_transparency * color;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/sdfShader.vs.glsl':"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_tex;\nattribute vec4 a_levelInfo;\n\n// attribute bool a_visible; // --> a one bit controlling the visibility of the vertex\n\n// the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n// relative to the tile's upper left corner\n// the extrusion vector.\nuniform highp mat4 u_transformMatrix;\n// the extrude matrix which is responsible for the 'anti-zoom' as well as the rotation\nuniform highp mat4 u_extrudeMatrix;\n// u_normalized_origin is the tile's upper left corner given in normalized coordinates\nuniform highp vec2 u_normalized_origin;\n// the size of the mosaic given in pixels\nuniform vec2 u_mosaicSize;\n// the z of the layer. Given by the order of the layers in the style\nuniform mediump float u_depth;\n// the map's rotation from the north\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\n// indicate whether the current set of iconst should be kept upright when the map is rotated\nuniform lowp float u_keepUpright;\n// the rate of the change in the opacity (fade) of the icons\nuniform mediump float u_fadeSpeed;\n// the low level we transition (to/from)\nuniform mediump float u_minfadeLevel;\n// the high level we transition (to/from)\nuniform mediump float u_maxfadeLevel;\n// the amount of fade given teh current time past the last recorded level\nuniform mediump float u_fadeChange;\n// the opacity of the layer given by the painter\nuniform mediump float u_opacity;\n// the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture\nvarying lowp vec2 v_tex;\n// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the\n// opacity of the layer given by the painter\nvarying lowp float v_transparency;\n\n// the vertex offsets are given in integers, therefore in order to maintain a reasonable precission we multiply the values\n// by 16 and then at the shader devide by the same number\nconst float offsetPrecision = 1.0 / 32.0;\n\nvoid main()\n{\n  mediump float a_labelMinLevel = a_levelInfo[0];\n  mediump float a_angle        = a_levelInfo[1];\n  mediump float a_minLevel    = a_levelInfo[2];\n  mediump float a_maxLevel    = a_levelInfo[3];\n\n  // if the given vertex should not be visible simply clip it by adding it a value that will push it outside the clipping plane\n  mediump float delta_z = 0.0;\n\n  // TODO: force clipping the vertex in case that the vertex isn't visible\n  //delta_z += a_visible ? 0.0 : 1.0;\n\n  // If the label rotates with the map, and if the rotated label is upside down, hide it\n  mediump float rotated = mod(a_angle - u_mapRotation, 256.0);\n  delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(65.0, rotated) * (1.0 - step(193.0, rotated)); //ie. z += (flip > 0) && (65 <= rotated) && (rotated < 193)\n\n  // u_level is the current service level adjusted for the change in font size\n  delta_z += 1.0 - step(a_minLevel, u_level); // Test if (level < minLevel)\n  delta_z += step(a_maxLevel, u_level); // Test if (maxLevel <= level)\n\n  // calculate the alpha given the change in the fade and the fade-speed\n  lowp float alpha = clamp((u_fadeChange - a_labelMinLevel) / u_fadeSpeed, 0.0, 1.0);\n\n  // if the speed is positive we are zooming in and therefore we need to 'fade-in'. Else we need to 'fade-out'\n  v_transparency = (u_fadeSpeed >= 0.0 ? alpha : 1.0 - alpha);\n\n  // now deal with the min/max fade-levels. If we exceeded the level we simply snap to 0 or 1\n  if (u_maxfadeLevel < a_labelMinLevel)\n  {\n      v_transparency = 0.0;\n  }\n  if (u_minfadeLevel >= a_labelMinLevel)\n  {\n      v_transparency = 1.0;\n  }\n\n  // if label has been faded out, clip it\n  delta_z += step(v_transparency, 0.0);\n\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * vec4(offsetPrecision * a_vertexOffset, delta_z, 0.0);\n  v_tex = a_tex.xy / u_mosaicSize;\n\n  v_transparency *= u_opacity;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/sdfShader.fs.glsl':"uniform lowp sampler2D u_texture;\nuniform lowp vec4 u_color;\nuniform mediump float u_edgeDistance;\nuniform mediump float u_edgeWidth;\n\nvarying lowp vec2 v_tex;\nvarying lowp float v_transparency;\n\n// this is taken from http://www.valvesoftware.com/publications/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf\n// and https://www.mapbox.com/blog/text-signed-distance-fields/\n// http://metalbyexample.com/rendering-text-in-metal-with-signed-distance-fields/\n\nvoid main()\n{\n  // read the distance from the SDF texture\n  lowp float dist = texture2D(u_texture, v_tex).a;\n  // use a smooth-step in order to calculate the geometry of the shape given by the distance field\n  mediump float alpha = smoothstep(u_edgeDistance - u_edgeWidth, u_edgeDistance + u_edgeWidth, dist) * v_transparency;\n\n  gl_FragColor = alpha * u_color;\n\n// YF: this code allow having both a fill and an outline colors combined in a single pass\n//  lowp float geometryAlpha = smoothstep(0.75 - 0.21, 0.75 + 0.21, dist) * v_transparency;\n//  lowp vec4 geometryColor = vec4(u_color.rgb, geometryAlpha * u_color.a);\n//\n//  if (true) {\n//    lowp float haloAlpha = smoothstep(0.0 - 0.1, 0.0 + 0.1, dist) * v_transparency;\n//    lowp vec4 haloColor = vec4(1.0, 1.0, 1.0, 1.0);\n//    haloColor = vec4(haloColor.rgb, haloAlpha);\n//\n//    // calculate the composite color\n//    lowp float compositeAlpha = geometryColor.a + haloColor.a * (1.0 - geometryColor.a);\n//    lowp vec3 compositeColor = vec3(geometryColor) * geometryColor.a + vec3(haloColor) * haloColor.a * (1.0 - geometryColor.a);\n//    compositeColor /= compositeAlpha;\n//    gl_FragColor = vec4(compositeColor, compositeAlpha);\n//  }\n//  else {\n//    gl_FragColor = geometryColor;\n//  }\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/tileInfo.vs.glsl':"attribute vec2 a_pos;\n\nuniform highp mat4 u_transformMatrix;\nuniform mediump vec2 u_normalized_origin;\nuniform mediump float u_depth;\nuniform mediump float u_coord_ratio;\nuniform mediump vec2 u_delta; // in tile coordinates\nuniform mediump vec2 u_dimensions; // in tile coordinates\n\nvarying mediump vec2 v_tex;\n\nvoid main() {\n  mediump vec2 offests = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(offests, 0.0, 1.0);\n\n  v_tex = a_pos;\n}\n",
'url:esri/views/vectorTiles/renderers/shaders/tileInfo.fs.glsl':"uniform mediump sampler2D u_texture;\nvarying mediump vec2 v_tex;\n\nvoid main(void) {\n  lowp vec4 color = texture2D(u_texture, v_tex);\n  gl_FragColor = 0.75 * color;\n}\n",
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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/HandleRegistry","../../../core/promiseUtils","./LayerView2D","../engine/StageGL","../tiling/TileInfoViewPOT","../tiling/TileStrategy","../tiling/TileKey","../tiling/TileQueue","../../../views/vectorTiles/TileHandler","../../../views/vectorTiles/VectorTileContainer","../../../views/vectorTiles/VectorTileDisplayObject","../../support/screenshotUtils"],function(e,t,i,n,r,o,s,l,a,c,h,u,p,d,f,_,y){var v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new o,t._fetchQueue=null,t._tileRequests=new Map,t.container=new a,t}return i(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){if(this._vectorTileContainer&&this._vectorTileContainer.isInitialized){if(e.devicePixelRatio!==this._tileHandler.devicePixelRatio)return void this._start();this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();for(var t=this._vectorTileContainer.children,i=0,n=t;i<n.length;i++){var r=n[i];this._tileHandler.updateTile(r,e)}this.notifyChange("updating")}},t.prototype.attach=function(){this._start()},t.prototype.detach=function(){this._stop()},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.destroy=function(){this.container.dispose(),this._vectorTileContainer.destroy(),this._tileHandler.destroy()},t.prototype.takeScreenshot=function(e,t){return this.container?(e=y.adjustScreenshotSettings(e,t),this.container.takeScreenshot(e)):s.reject("Could not find an object capable of capturing screenshot!")},t.prototype.isUpdating=function(){var e=!0;return this._tileRequests.forEach(function(t){e=e&&t.isFulfilled()}),!e},t.prototype.acquireTile=function(e){var t=this,i=u.pool.acquire();i.set(e.level,e.row,e.col,e.world);var n=this._tileHandler.getRefKey(i),r=this.updateParameters.state.rotation,o=this._tileHandler.getStyleRepository(),s=this._tileHandler.glyphMosaic,l=_.pool.acquire(i,n,this.layer.tileInfo,o,s,r),a=this._fetchQueue.push(l.key).then(function(e){l.setData(e.tileData,e.workerId,e.connection),l.once("attach",function(){return t.requestUpdate()}),t._vectorTileContainer.addChild(l),t.notifyChange("updating")});return this._tileRequests.set(i.id,a),this.notifyChange("updating"),l},t.prototype.releaseTile=function(e){var t=e.key.id,i=this._tileRequests.get(t);i.isFulfilled()||i.cancel(),this._tileRequests["delete"](t),this._vectorTileContainer.removeChild(e),this.requestUpdate(),e.once("detach",function(){return _.pool.release(e)}),this.notifyChange("updating")},t.prototype._stop=function(){this._handles.removeAll(),this._tileStrategy&&this._tileStrategy.destroy(),this._vectorTileContainer&&(this._vectorTileContainer.removeAllChildren(),this.container.removeChild(this._vectorTileContainer)),this._tileHandler&&this._tileHandler.stop(),_.pool.prune(),this._vectorTileContainer=this._tileHandler=this._tileStrategy=this._tileInfoView=null},t.prototype._start=function(){var e=this;this._stop(),this._handles.add(this.watch("layer.currentStyleInfo",function(){return e.attach()})),this._vectorTileContainer=new f,this.container.addChild(this._vectorTileContainer),this._tileInfoView=new c(this.layer.tileInfo,this.layer.fullExtent),this._tileStrategy=new h({cachePolicy:"keep",acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this._fetchQueue=new p({tileInfoView:this._tileInfoView,process:function(t){return e._getTileData(t)}}),this._tileHandler=new d(this.layer,function(){return e.requestUpdate()},window.devicePixelRatio||1,!0,this._tileInfoView),this._tileHandler.start().then(function(){e._vectorTileContainer.initialize(e._tileHandler.spriteMosaic,e._tileHandler.glyphMosaic,e.layer.tileInfo,e._tileInfoView),e.requestUpdate()})},t.prototype._getTileData=function(e){return this._tileHandler.getTileData(e,this.updateParameters.state.rotation)},t}(r.declared(l));return v=n([r.subclass("esri.views.2d.layers.VectorTileLayerView2D")],v)});