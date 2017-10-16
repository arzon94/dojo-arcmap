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

//  copyright

/**
             * Copyright information for the WMTS service.
             * This defaults to the value of the AccessConstraints property from the GetCapabilities request.
             *
             * @name copyright
             * @type {string}
             * @instance
             */

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../request","../core/HandleRegistry","../core/Collection","../core/promiseUtils","./Layer","./WebTileLayer","./mixins/OperationalLayer","./mixins/PortalLayer","./support/WMTSSublayer","./support/wmtsUtils"],function(e,r,t,i,a,o,s,n,l,p,u,c,y,d,m,f){function v(e,r){return e.map(function(e){var t=new m;return t.read(e,r),t})}var h={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},g=function(e){function r(r,t){var i=e.call(this)||this;return i._sublayersHandles=new n,i.copyright=null,i.customParameters=null,i.customLayerParameters=null,i.operationalLayerType="WMTS",i.resourceInfo=null,i.serviceMode="RESTful",i.sublayers=null,i.type="wmts",i.version="1.0.0",i.watch("activeLayer",function(e,r){r&&(r.layer=null),e&&(e.layer=i)},!0),i.watch("sublayers",function(e,r){r&&(r.forEach(function(e){e.layer=null}),i._sublayersHandles.removeAll(),i._sublayersHandles=null),e&&(e.forEach(function(e){e.layer=i}),i._sublayersHandles||(i._sublayersHandles=new n),i._sublayersHandles.add([e.on("after-add",function(e){var r=e.item;r.layer=i}),e.on("after-remove",function(e){var r=e.item;r.layer=null})]))},!0),i}return t(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?o.mixin({},{url:e},r):e},r.prototype.load=function(){var e=this;return"KVP"!==this.serviceMode&&"RESTful"!==this.serviceMode?void console.error("WMTS mode could only be 'KVP' or 'RESTful'"):(this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]}).then(function(){return e._fetchService()})),this)},Object.defineProperty(r.prototype,"activeLayer",{get:function(){return this._get("activeLayer")},set:function(e){this._set("activeLayer",e)},enumerable:!0,configurable:!0}),r.prototype.readActiveLayerFromService=function(e,r,t){var i,a=this;return this.activeLayer?r.layers.some(function(e){return e.id===a.activeLayer.id?(i=e,!0):!1}):(this.activeLayer=new m,i=r.layers[0]),this.activeLayer.read(i,t),this.activeLayer},r.prototype.readActiveLayerFromItemOrWebMap=function(e,r,t){return new m({id:r.wmtsInfo.layerIdentifier,tileMatrixSetId:r.wmtsInfo.tileMatrixSet})},r.prototype.readServiceMode=function(e,r,t){return r.templateUrl.indexOf("?")>-1?"KVP":"RESTful"},r.prototype.readSublayersFromService=function(e,r,t){var i=v(r.layers,t);return i},Object.defineProperty(r.prototype,"title",{get:function(){return"Layer"===this._get("title")?this.activeLayer.title:this._get("title")},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"url",{get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)},enumerable:!0,configurable:!0}),r.prototype.readUrlFromService=function(e,r,t){return r.tileUrl},r.prototype.readUrlFromItemOrWebMap=function(e,r,t){return r.wmtsInfo.url},r.prototype.createWebTileLayer=function(e){var r=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),t=this._getTileMatrixSetById(e.tileMatrixSetId),i=t.tileInfo,a=e.fullExtent,o={layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url};return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new c({fullExtent:a,urlTemplate:r,tileInfo:i,wmtsInfo:o})},r.prototype.fetchTile=function(e,r,t){var i=this.getTileUrl(e,r,t);return s(i,{responseType:"image"}).then(function(e){return e.data})},r.prototype.findSublayerById=function(e){return this.sublayers.find(function(r){return r.id===e})},r.prototype.getTileUrl=function(e,r,t){var i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),a=i.tileInfo.lods[e],o=a.levelValue?a.levelValue:String(a.level),s=this.resourceInfo?"":f.getTileUrlFromResourceUrls(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.styleId,e,r,t);if(!s){var n=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId);s=n.replace(/\{level\}/gi,o).replace(/\{row\}/gi,r).replace(/\{col\}/gi,t)}return s=this._appendCustomLayerParameters(s)},r.prototype.getUrlTemplate=function(e,r,t,i){var a="";if(!this.resourceInfo&&(a=f.getTileUrlTemplateFromResourceUrls(e,r,t,i)))return a;if("KVP"===this.serviceMode)a=this.url+"SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+t+"&TILEMATRIXSET="+r+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";else if("RESTful"===this.serviceMode){var o="";h[t.toLowerCase()]&&(o=h[t.toLowerCase()]),a=this.url+e+"/"+i+"/"+r+"/{level}/{row}/{col}"+o}return a},r.prototype._fetchService=function(){var e=this;return p.resolve().then(function(){if(e.resourceInfo)return"KVP"===e.resourceInfo.serviceMode&&(e.url+=e.url.indexOf("?")>-1?"":"?"),{ssl:!1,data:e.resourceInfo};var r=e._getCapabilitiesUrl(e.serviceMode);return s(r,{responseType:"text",callbackParamName:"callback"}).otherwise(function(t){var i="KVP"===e.serviceMode?"RESTful":"KVP";return r=e._getCapabilitiesUrl(i),s(r,{responseType:"text",callbackParamName:"callback"})})}).then(function(r){e.resourceInfo?r.data=f.parseResourceInfo(r.data):r.data=f.parseCapabilities(r.data,{serviceMode:e.serviceMode}),r.data&&e.read(r.data,{origin:"service"})})},r.prototype._getTileMatrixSetById=function(e){var r=this.findSublayerById(this.activeLayer.id),t=r.tileMatrixSets.find(function(r){return r.id===e});return t},r.prototype._appendCustomParameters=function(e){if(this.customParameters)for(var r in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(this.customParameters[r]);return e},r.prototype._appendCustomLayerParameters=function(e){if(this.customLayerParameters||this.customParameters){var r=o.clone(this.customParameters||{});o.mixin(r,this.customLayerParameters||{});for(var t in r)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(r[t])}return e},r.prototype._getCapabilitiesUrl=function(e){var r;return this.url=this.url.split("?")[0],"KVP"===e?(this.url+="?",r=this.url+"request=GetCapabilities&service=WMTS&version="+this.version):"RESTful"===e&&(r=this.url+"/"+this.version+"/WMTSCapabilities.xml"),r=this._appendCustomParameters(r)},r}(a.declared(u,y,d));return i([a.shared({"2d":"../views/2d/layers/WMTSLayerView2D"})],g.prototype,"viewModulePaths",void 0),i([a.property({type:m,dependsOn:["sublayers"]})],g.prototype,"activeLayer",null),i([a.reader("service","activeLayer",["layers"])],g.prototype,"readActiveLayerFromService",null),i([a.reader(["web-map","portal-item"],"activeLayer",["wmtsInfo"])],g.prototype,"readActiveLayerFromItemOrWebMap",null),i([a.property()],g.prototype,"copyright",void 0),i([a.property()],g.prototype,"customParameters",void 0),i([a.property()],g.prototype,"customLayerParameters",void 0),i([a.property()],g.prototype,"operationalLayerType",void 0),i([a.property()],g.prototype,"resourceInfo",void 0),i([a.property()],g.prototype,"serviceMode",void 0),i([a.reader(["portal-item","web-map"],"serviceMode",["templateUrl"])],g.prototype,"readServiceMode",null),i([a.property({type:l.ofType(m)})],g.prototype,"sublayers",void 0),i([a.reader("service","sublayers",["layers"])],g.prototype,"readSublayersFromService",null),i([a.property({dependsOn:["activeLayer"],json:{read:{source:"title"}}})],g.prototype,"title",null),i([a.property({json:{read:!1},readOnly:!0,value:"wmts"})],g.prototype,"type",void 0),i([a.property()],g.prototype,"url",null),i([a.reader("service","url",["tileUrl"])],g.prototype,"readUrlFromService",null),i([a.reader(["portal-item","web-map"],"url",["wmtsInfo"])],g.prototype,"readUrlFromItemOrWebMap",null),i([a.property()],g.prototype,"version",void 0),g=i([a.subclass("esri.layers.WMTSLayer")],g)});