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

define(["require","exports"],function(e,t){var i=4,o=function(){function e(t,i,o){this._context=null,this._glName=null,this._id=-1,this._desc=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._boundToUnits=new Set,this._context=t,this._desc={pixelFormat:i.pixelFormat,dataType:i.dataType,target:i.target?i.target:3553,samplingMode:i.samplingMode?i.samplingMode:9729,wrapMode:i.wrapMode?i.wrapMode:10497,maxAnisotropy:i.maxAnisotropy,flipped:void 0!==i.flipped?i.flipped:!1,hasMipmap:void 0!==i.hasMipmap?i.hasMipmap:!1,level:void 0!==i.level?i.level:0,unpackAlignment:i.unpackAlignment?i.unpackAlignment:4,width:i.width,height:i.height,preMultiplyAlpha:void 0!==i.preMultiplyAlpha?i.preMultiplyAlpha:!1},this._id=++e._nextId,this.setData(o)}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"descriptor",{get:function(){return this._desc},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){var e=this;if(this._context){if(this._glName){var t=this._context.gl;this._boundToUnits.forEach(function(t){e._context.bindTexture(null,t)}),t.deleteTexture(this._glName),this._glName=null}this._context=null}},e.prototype.resize=function(e,t){var i=this._desc;(i.width!==e||i.height!==t)&&(i.width=e,i.height=t,this.setData(null))},e.prototype.setData=function(t){var o=this._context.gl;this._glName||(this._glName=o.createTexture()),void 0===t&&(t=null),null===t&&(this._desc.width=this._desc.width||i,this._desc.height=this._desc.height||i);var a=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var n=this._desc;e._validateTexture(n),o.pixelStorei(o.UNPACK_ALIGNMENT,n.unpackAlignment),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,n.flipped?1:0),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.preMultiplyAlpha),t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?(n.width&&n.height&&console.assert(t.width===n.width&&t.height===n.height),o.texImage2D(o.TEXTURE_2D,n.level,n.pixelFormat,n.pixelFormat,n.dataType,t),void 0===this._desc.width&&(this._desc.width=t.width),void 0===this._desc.height&&(this._desc.height=t.height)):((null==n.width||null==n.height)&&console.error("Width and height must be specified!"),o.texImage2D(o.TEXTURE_2D,n.level,n.pixelFormat,n.width,n.height,0,n.pixelFormat,n.dataType,t)),n.hasMipmap&&this.generateMipmap(),e._applySamplingMode(o,this._desc),e._applyWrapMode(o,this._desc),e._applyAnisotropicFilteringParameters(this._context,this._desc),this._context.bindTexture(a,0)},e.prototype.updateData=function(e,t,i,o,a,n){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var s=this._context.gl,r=this._desc,p=this._context.getBoundTexture(0);this._context.bindTexture(this,0),(0>t||0>i||o>r.width||a>r.height||t+o>r.width||i+a>r.height)&&console.error("An attempt to update out of bounds of the texture!"),n instanceof ImageData||n instanceof HTMLImageElement||n instanceof HTMLCanvasElement||n instanceof HTMLVideoElement?(console.assert(n.width===o&&n.height===a),s.texSubImage2D(s.TEXTURE_2D,e,t,i,r.pixelFormat,r.dataType,n)):s.texSubImage2D(s.TEXTURE_2D,e,t,i,o,a,r.pixelFormat,r.dataType,n),this._context.bindTexture(p,0)},e.prototype.generateMipmap=function(){var t=this._desc;t.hasMipmap||(t.hasMipmap=!0,e._validateTexture(t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);var i=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var o=this._context.gl;o.generateMipmap(o.TEXTURE_2D),this._context.bindTexture(i,0)},e.prototype.setSamplingMode=function(t){t!==this._desc.samplingMode&&(this._desc.samplingMode=t,e._validateTexture(this._desc),this._samplingModeDirty=!0)},e.prototype.setWrapMode=function(t){t!==this._desc.wrapMode&&(this._desc.wrapMode=t,e._validateTexture(this._desc),this._wrapModeDirty=!0)},e.prototype.applyChanges=function(){var t=this._context.gl,i=this._desc;this._samplingModeDirty&&(e._applySamplingMode(t,i),this._samplingModeDirty=!1),this._wrapModeDirty&&(e._applyWrapMode(t,i),this._wrapModeDirty=!1)},e.prototype.setBoundToUnit=function(e,t){t?this._boundToUnits.add(e):this._boundToUnits["delete"](e)},e._isPowerOfTwo=function(e){return 0===(e&e-1)},e._validateTexture=function(t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");var i=e._isPowerOfTwo(t.width)&&e._isPowerOfTwo(t.height);i||(33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))},e._applySamplingMode=function(e,t){var i=t.samplingMode;9985===i||9987===i?i=9729:(9984===i||9986===i)&&(i=9728),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.samplingMode)},e._applyWrapMode=function(e,t){e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode)},e._applyAnisotropicFilteringParameters=function(e,t){if(null!=t.maxAnisotropy){var i=e.extensions.textureFilterAnisotropic;if(i){var o=e.gl;o.texParameterf(o.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY_EXT,t.maxAnisotropy)}}},e}();return o._nextId=0,o});