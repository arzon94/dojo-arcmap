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

define(["require","exports","./Util","./gl-matrix"],function(t,e,i,r){function n(t,e){var i=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2],s=e[3]-t[3];return i*i+r*r+n*n+s*s}function s(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function o(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}var h=r.vec3d,a=r.vec4d,u=r.mat4d,p=function(){function t(t,e,i){this._viewUp=h.create(),this._viewForward=h.create(),this._viewRight=h.create(),this._viewport=a.create(),this._padding=a.create(),this._fov=55/180*Math.PI,this._near=0,this._far=1e3,this._viewDirty=!0,this._viewMatrix=u.create(),this._projectionDirty=!0,this._projectionMatrix=u.create(),this._viewInverseTransposeMatrixDirty=!0,this._viewInverseTransposeMatrix=null,this._frustumPlanesDirty=!0,this._frustumPlanes=[a.create(),a.create(),a.create(),a.create(),a.create(),a.create()],this._fullViewport=null,this.aboveGround=!0,this._eye=h.create(t),this._center=h.create(e),void 0!==i?this._up=h.create(i):this._up=h.create([0,0,1]),this._padding=a.create()}return Object.defineProperty(t.prototype,"eye",{get:function(){return this._eye},set:function(t){this._compareAndSetView(t,this._eye)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"center",{get:function(){return this._center},set:function(t){this._compareAndSetView(t,this._center)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"up",{get:function(){return this._up},set:function(t){this._compareAndSetView(t,this._up)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewMatrix",{get:function(){return this._ensureViewClean(),this._viewMatrix},set:function(t){u.set(t,this._viewMatrix),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0,this._frustumPlanesDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewForward",{get:function(){return this._ensureViewClean(),this._viewForward},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewUp",{get:function(){return this._ensureViewClean(),this._viewUp},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewRight",{get:function(){return this._ensureViewClean(),this._viewRight},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"near",{get:function(){return this._near},set:function(t){this._near!==t&&(this._near=t,this._projectionDirty=!0,this._frustumPlanesDirty=!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"far",{get:function(){return this._far},set:function(t){this._far!==t&&(this._far=t,this._projectionDirty=!0,this._frustumPlanesDirty=!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewport",{get:function(){return this._viewport},set:function(t){this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"x",{get:function(){return this._viewport[0]},set:function(t){t+=this._padding[3],this._viewport[0]!==t&&(this._viewport[0]=t,this._projectionDirty=!0,this._frustumPlanesDirty=!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._viewport[1]},set:function(t){t+=this._padding[2],this._viewport[1]!==t&&(this._viewport[1]=t,this._projectionDirty=!0,this._frustumPlanesDirty=!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._viewport[2]},set:function(t){t-=this._padding[1]+this._padding[3],this._viewport[2]!==t&&(this._viewport[2]=t,this._projectionDirty=!0,this._frustumPlanesDirty=!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._viewport[3]},set:function(t){t-=this._padding[0]+this._padding[2],this._viewport[3]!==t&&(this._viewport[3]=t,this._projectionDirty=!0,this._frustumPlanesDirty=!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullWidth",{get:function(){return this._viewport[2]+this._padding[1]+this._padding[3]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullHeight",{get:function(){return this._viewport[3]+this._padding[0]+this._padding[2]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullViewport",{get:function(){return this._fullViewport||(this._fullViewport=a.create()),this._fullViewport[0]=this._viewport[0]-this._padding[3],this._fullViewport[1]=this._viewport[1]-this._padding[2],this._fullViewport[2]=this.fullWidth,this._fullViewport[3]=this.fullHeight,this._fullViewport},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"aspect",{get:function(){return this.width/this.height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"padding",{get:function(){return this._padding},set:function(t){(this._padding[0]!==t[0]||this._padding[1]!==t[1]||this._padding[2]!==t[2]||this._padding[3]!==t[3])&&(this._viewport[0]+=t[3]-this._padding[3],this._viewport[1]+=t[2]-this._padding[2],this._viewport[2]-=t[1]+t[3]-(this._padding[1]+this._padding[3]),this._viewport[3]-=t[0]+t[2]-(this._padding[0]+this._padding[2]),a.set(t,this._padding),this._projectionDirty=!0,this._frustumPlanesDirty=!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"projectionMatrix",{get:function(){if(this._projectionDirty){var t=this.width,e=this.height,i=this.near*Math.tan(this.fovY/2),r=i*this.aspect;u.frustum(-r*(1+2*this._padding[3]/t),r*(1+2*this._padding[1]/t),-i*(1+2*this._padding[2]/e),i*(1+2*this._padding[0]/e),this.near,this.far,this._projectionMatrix),this._projectionDirty=!1}return this._projectionMatrix},set:function(t){u.set(t,this._projectionMatrix),this._projectionDirty=!1,this._frustumPlanesDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fov",{get:function(){return this._fov},set:function(t){this._fov=t,this._projectionDirty=!0,this._frustumPlanesDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fovX",{get:function(){return i.fovd2fovx(this._fov,this.width,this.height)},set:function(t){this._fov=i.fovx2fovd(t,this.width,this.height),this._projectionDirty=!0,this._frustumPlanesDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fovY",{get:function(){return i.fovd2fovy(this._fov,this.width,this.height)},set:function(t){this._fov=i.fovy2fovd(t,this.width,this.height),this._projectionDirty=!0,this._frustumPlanesDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"distance",{get:function(){return h.dist(this._center,this._eye)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"angleOfElevation",{get:function(){h.subtract(this._center,this._eye,c),h.normalize(c);var t=h.dot(this._center,c)/h.length(this._center);return Math.acos(i.clamp(t,-1,1))-.5*Math.PI},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"frustumPoints",{get:function(){return this.computeFrustumPoints()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"frustumPlanes",{get:function(){return this._frustumPlanesDirty&&(this._frustumPlanes=this._computeFrustumPlanes(this._frustumPlanes),this._frustumPlanesDirty=!1),this._frustumPlanes},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewInverseTransposeMatrix",{get:function(){return(this._viewInverseTransposeMatrixDirty||this._viewDirty)&&(this._viewInverseTransposeMatrix||(this._viewInverseTransposeMatrix=u.create()),u.inverse(this.viewMatrix,this._viewInverseTransposeMatrix),u.transpose(this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),this._viewInverseTransposeMatrix},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"perPixelRatio",{get:function(){return Math.tan(this.fovX/2)/this.width},enumerable:!0,configurable:!0}),t.prototype.copyFrom=function(t){return h.set(t._eye,this._eye),h.set(t._center,this._center),h.set(t._up,this._up),a.set(t._viewport,this._viewport),a.set(t._padding,this._padding),this._near=t._near,this._far=t._far,this._fov=t._fov,this.aboveGround=t.aboveGround,t._viewDirty?(this._viewDirty=!0,this._frustumPlanesDirty=!0):(u.set(t._viewMatrix,this._viewMatrix),h.set(t._viewRight,this._viewRight),h.set(t._viewUp,this._viewUp),h.set(t._viewForward,this._viewForward),this._viewDirty=!1),t._projectionDirty?(this._projectionDirty=!0,this._frustumPlanesDirty=!0):(u.set(t._projectionMatrix,this._projectionMatrix),this._projectionDirty=!1),this},t.prototype.copy=function(){var e=new t;return e.copyFrom(this),e},t.prototype.equals=function(t){return s(this._eye,t._eye)&&s(this._center,t._center)&&s(this._up,t._up)&&o(this._viewport,t._viewport)&&o(this._padding,t._padding)&&this._near===t._near&&this._far===t._far&&this._fov===t._fov},t.prototype.almostEquals=function(t,e){var i=h.dist(this.eye,this.center)*(e||5e-4),r=i*i;return h.dist2(t.eye,this.eye)<r&&h.dist2(t.center,this.center)<r&&Math.abs(t.fov-this.fov)<.001&&n(t.padding,this.padding)<.5},t.prototype.markViewDirty=function(){this._viewDirty=!0,this._frustumPlanesDirty=!0},t.prototype.computePixelSizeAt=function(t){var e=h.dist(t,this._eye);return 2*e*Math.tan(this.fovX/2)/this.width},t.prototype.computePixelSizeAtDist=function(t){return 2*t*Math.tan(this.fovX/2)/this.width},t.prototype.computeDistanceFromRadius=function(t,e){return t/Math.tan(Math.min(this.fovX,this.fovY)/(2*(e||1)))},t.prototype.copyFrustumPlanes=function(t){if(!t){t=new Array(6);for(var e=0;6>e;++e)t[e]=a.create()}for(var i=this.frustumPlanes,e=0;6>e;e++)a.set(i[e],t[e]);return t},t.prototype.computeFrustumPoints=function(t){if(!t){t=new Array(8);for(var e=0;8>e;++e)t[e]=h.create()}return i.matrix2frustum(this.viewMatrix,this.projectionMatrix,t),t},t.prototype.setGLViewport=function(t){var e=this.viewport,i=this.padding;t.setViewport(e[0]-i[3],e[1]-i[2],e[2]+i[1]+i[3],e[3]+i[0]+i[2])},t.prototype.applyProjection=function(t,e,r){void 0===r&&(r=!1),t!==_&&h.set(t,_),_[3]=1,r&&(e[2]=-_[2]),u.multiplyVec4(this.projectionMatrix,_),h.scale(_,1/Math.abs(_[3]));var n=this.fullViewport;return e[0]=i.lerp(0,n[0]+n[2],.5+.5*_[0]),e[1]=i.lerp(0,n[1]+n[3],.5+.5*_[1]),r||(e[2]=.5*(_[2]+1)),e},t.prototype.projectPoint=function(t,e,i){return void 0===i&&(i=!1),u.multiplyVec3(this.viewMatrix,t,_),this.applyProjection(_,e,i)},t.prototype.unprojectPoint=function(t,e,i){if(void 0===i&&(i=!1),i)return console.error("Camera.unprojectPoint() not yet implemented for linear Z"),null;if(u.multiply(this.projectionMatrix,this.viewMatrix,f),!u.inverse(f))return null;var r=this.fullViewport;return _[0]=2*(t[0]-r[0])/r[2]-1,_[1]=2*(t[1]-r[1])/r[3]-1,_[2]=2*t[2]-1,_[3]=1,u.multiplyVec4(f,_),0===_[3]?null:(e[0]=_[0]/_[3],e[1]=_[1]/_[3],e[2]=_[2]/_[3],e)},t.prototype.computeUpOnSphere=function(){h.subtract(this.center,this.eye,l);var t=h.length(this.center);1>t?h.set3(0,0,1,this.up):Math.abs(h.dot(l,this.center))>.9999*h.length(l)*t||(h.cross(l,this.center,this.up),h.cross(this.up,l,this.up),h.normalize(this.up))},t.prototype._compareAndSetView=function(t,e){s(t,e)||(h.set(t,e),this._viewDirty=!0,this._frustumPlanesDirty=!0)},t.prototype._computeFrustumPlanes=function(t){if(!t){t=new Array(6);for(var e=0;6>e;++e)t[e]=a.create()}return i.matrix2frustumPlanes(this.viewMatrix,this.projectionMatrix,t),t},t.prototype._ensureViewClean=function(){this._viewDirty&&(u.lookAt(this._eye,this._center,this._up,this._viewMatrix),h.set3(-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10],this._viewForward),h.set3(this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9],this._viewUp),h.set3(this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8],this._viewRight),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)},t}(),c=h.create(),_=a.create(),f=u.create(),l=h.create();return p});