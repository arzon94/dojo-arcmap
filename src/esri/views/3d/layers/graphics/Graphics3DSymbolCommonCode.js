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

define(["require","exports","../../../../geometry/Point","../../../../symbols/callouts/calloutUtils","../../../../geometry/support/mathUtils","./graphicUtils","../../support/projectionUtils","../../lib/glMatrix","../../webgl-engine/lib/Object3D"],function(e,t,n,r,a,o,i,l,u){function c(e,t,n,r,a,o,i,l,c,s,f){var v=t?t.length:0,g=this._context.clippingExtent;if(T(e,B,this._context.elevationProvider.spatialReference),g&&!G(B,g))return null;T(e,B,this._context.renderSpatialReference);for(var h=this._context.localOriginFactory.getOrigin(B),p=!!s,E=new u({castShadow:!1,metadata:{layerId:l,graphicId:c,usesVerticalDistanceToGround:p},idHint:i}),x=0;v>x;x++){var y=r?r[x]:N;E.addGeometry(t[x],n[x],y,a,h,f)}var m=d(E,e,o,this._context.renderSpatialReference,this._context.elevationProvider);return{object:E,terrainElevation:m.terrainElevation}}function s(e,t,r){var a=e.elevationInfo,o=r.spatialReference;T(t,B,o),a.centerPointInElevationSR=new n({x:B[0],y:B[1],z:t.hasZ?B[2]:0,spatialReference:o})}function f(e){var t=e.paths[0],r=a.getPointOnPath(t,a.getPathLength(t)/2);return new n({x:r[0],y:r[1],z:r[2],spatialReference:e.spatialReference})}function v(e){return o.computeCentroid(e)}function g(e,t,n,r){var a=0,o=t.z||0,i=0,l=n.mode,u=n.offset||0;return"on-the-ground"===l?(i=e.getElevation(t,"ground")||0,a=i,r&&(r.verticalDistanceToGround=0,r.terrainElevation=i)):"relative-to-ground"===l?(i=e.getElevation(t,"ground")||0,a=u,null==n.featureExpression&&(a+=o),r&&(r.verticalDistanceToGround=a,r.terrainElevation=i),a+=i):"relative-to-scene"===l?(i=e.getElevation(t,"scene")||0,a=u,r&&(r.verticalDistanceToGround=a,r.terrainElevation=i),a+=i):"absolute-height"===l&&(a=o+u,r&&(i=e.getElevation(t,"ground")||0,r.verticalDistanceToGround=a-i,r.terrainElevation=i)),a}function h(e,t,n,r,a,o,i){var l=i.mode,u=i.offset,c=0,s=0,f=0;X.spatialReference=e.spatialReference,n*=3,a*=3;for(var v=0;o>v;++v)X.x=t[n+0],X.y=t[n+1],X.z=t[n+2],"on-the-ground"===l?(c=e.getElevation(X)||0,s=c,f+=c):"relative-to-ground"===l?(c=e.getElevation(X)||0,s=c+u,null==i.featureExpression&&(s+=X.z),f+=c):"relative-to-scene"===l?(c=e.getElevation(X,"scene")||0,s=c+u,f+=c):"absolute-height"===l&&(s=X.z+u),r[a+0]=t[n+0],r[a+1]=t[n+1],r[a+2]=s,n+=3,a+=3;return f/=o,{terrainElevation:f}}function d(e,t,n,r,a){var l,u=0;if(e.metadata.usesVerticalDistanceToGround)u=g(a,t,n,F),o.updateVertexAttributeAuxpos1w(e,F.verticalDistanceToGround),l=F.terrainElevation;else{var c="absolute-height"!==n.mode;u=g(a,t,n,c?F:null),c&&(l=F.terrainElevation)}var s=e.getObjectTransformation();B[0]=t.x,B[1]=t.y,B[2]=u;var f=i.computeLinearTransformation(t.spatialReference,B,s,r);return f?e.setObjectTransformation(s):console.warn("Could not locate symbol object properly, it might be misplaced"),{terrainElevation:l}}function p(e,t){return void 0===t&&(t=0),isFinite(e[t])?e[t]:null}function E(e){for(var t=0,n=e.length-1,r=0;n>r;r++)t+=e[r][0]*e[r+1][1]-e[r+1][0]*e[r][1];return t>=0}function x(e,t,n,r,a,o){r*=3;for(var i=0;a>i;++i){var l=e[t++];n[r++]=l[0],n[r++]=l[1],n[r++]=o?l[2]:0}return r/3}function y(e,t){for(var n=e.length,r=new Array(n),a=new Array(n),o=new Array(n),i=0,l=0,u=0,c=0,s=0;n>s;++s)c+=e[s].length;for(var f=new Float64Array(3*c),v=0,g=n-1;g>=0;g--){var h=e[g];if(E(h))r[i++]=h;else{for(var d=h.length,s=0;i>s;++s)d+=r[s].length;var p={index:v,pathLengths:new Array(i+1),count:d,holeIndices:new Array(i)};p.pathLengths[0]=h.length,h.length>0&&(o[u++]={index:v,count:h.length}),v=x(h,0,f,v,h.length,t);for(var y=0;i>y;++y){var m=r[y];p.holeIndices[y]=v,p.pathLengths[y+1]=m.length,m.length>0&&(o[u++]={index:v,count:m.length}),v=x(m,0,f,v,m.length,t)}i=0,p.count>0&&(a[l++]=p)}}for(var y=0;i>y;++y){var m=r[y];m.length>0&&(o[u++]={index:v,count:m.length}),v=x(m,0,f,v,m.length,t)}return n>l&&(a.length=l),n>u&&(o.length=u),{vertexData:f,polygons:a,outlines:o}}function m(e,t,n,r,a){t*=3,r*=3;for(var o=0;a>o;++o)n[r++]=e[t++],n[r++]=e[t++],n[r++]=e[t++]}function b(e,t,n,r){var a=Math.floor(t+(n-1)/2);r[0]=e[3*a+0],r[1]=e[3*a+1],r[2]=e[3*a+2]}function D(e,t,n,r){t*=3;for(var a=0;n>a;++a)e[t++]-=r[0],e[t++]-=r[1],e[t++]-=r[2]}function A(e,t,n,r){t*=3;for(var a=0;n>a;++a)e[t+2]=r,t+=3}function P(e,t,n,r){t*=3;for(var a=0;n>a;++a)e[t+2]+=r,t+=3}function w(e,t,n,r){t*=3;for(var a=0;n>a;++a)e[t+2]*=r,t+=3}function V(e,t,n){var r=[];t*=3;for(var a=0;n>a;++a)r.push([e[t++],e[t++],e[t++]]);return r}function O(e,t,n,r,a,o,l){i.bufferToBuffer(e,n,t,r,o,a,l)}function T(e,t,n){i.pointToVector(e,t,n)}function _(e,t,n,r,a,o){var i=a.spatialReference,l=y(e,t),u=l.vertexData,c=u.length/3,s=new Float64Array(u.length);n.equals(i)?m(u,0,s,0,u.length):O(u,0,n,s,0,i,c);var f=h(a,s,0,u,0,c,o);return i.equals(r)||O(u,0,i,u,0,r,c),{geometryData:l,vertexData:u,eleVertexData:s,terrainElevation:f.terrainElevation}}function R(e,t,n){var r=y(e,!1),a=r.vertexData,o=a.length/3;return t.equals(n)||i.bufferToBuffer(a,t,0,a,n,0,o),{geometryData:r,vertexData:a}}function j(e,t,n,r){r[0]=Number.MAX_VALUE,r[1]=Number.MAX_VALUE,r[2]=Number.MAX_VALUE,r[3]=-Number.MAX_VALUE,r[4]=-Number.MAX_VALUE,r[5]=-Number.MAX_VALUE,t*=3;for(var a=0;n>a;++a){var o=e[t++],i=e[t++],l=e[t++];o<r[0]&&(r[0]=o),i<r[1]&&(r[1]=i),l<r[2]&&(r[2]=l),o>r[3]&&(r[3]=o),i>r[4]&&(r[4]=i),l>r[5]&&(r[5]=l)}return r}function G(e,t){return!(e[0]>t[3]||e[0]<t[0]||e[1]>t[4]||e[1]<t[1])}function U(e,t){return!(t[0]>e[3]||t[3]<e[0]||t[1]>e[4]||t[4]<e[1])}function L(e,t){return t?!U(e,t):!1}function I(e){return"relative-to-ground"===e||"relative-to-scene"===e}function M(e){return"absolute-height"!==e}function z(e,t,n){return r.isCalloutSupport(n)&&n.hasVisibleVerticalOffset()?!1:"relative-to-ground"!==e.mode||0!==e.offset||t.hasZ&&!e.featureExpression?"relative-to-scene"===e.mode&&0===e.offset?!0:!1:!0}Object.defineProperty(t,"__esModule",{value:!0});var S=l.mat4d,C=l.vec3d,B=C.create(),N=S.identity(),X=new n({x:0,y:0,z:0,spatialReference:null});t.createStageObjectForPoint=c,t.extendPointGraphicElevationInfo=s,t.placePointOnPolyline=f,t.placePointOnPolygon=v,t.computeElevation=g,t.applyElevation=h,t.setObjectElevation=d,t.getSingleSizeDriver=p,t.isCounterClockwise=E,t.copyPointData=x,t.copyPathData=y,t.copyVertices=m,t.chooseOrigin=b,t.subtractCoordinates=D,t.setZ=A,t.offsetZ=P,t.scaleZ=w,t.flatArrayToArrayOfArrays=V,t.reproject=O,t.reprojectPoint=T,t.getGeometryVertexData3D=_,t.getGeometryVertexDataDraped=R,t.computeBoundingBox=j,t.pointInBox2D=G,t.boxesIntersect2D=U,t.boundingBoxClipped=L,t.needsElevationUpdates2D=I,t.needsElevationUpdates3D=M,t.needsOffsetAdjustment=z;var F={verticalDistanceToGround:0,terrainElevation:0}});