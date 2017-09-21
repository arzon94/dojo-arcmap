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

define(["require","exports","./gl-matrix"],function(t,r,e){function n(t,r){if(!t){var e=new Error("dummy");throw e.stack&&console.log(e.stack),new yt(r)}}function a(t,r){t||(console.log("Verify failed: "+r),console.log(new Error("dummy").stack))}function o(t){void 0===t&&(t=Float32Array);var r=new t(20);return r[0]=-1,r[1]=-1,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=-1,r[7]=0,r[8]=1,r[9]=0,r[10]=-1,r[11]=1,r[12]=0,r[13]=0,r[14]=1,r[15]=1,r[16]=1,r[17]=0,r[18]=1,r[19]=1,r}function c(t){return 0===(t&t-1)}function i(t,r,e){return t+(r-t)*e}function u(t,r,e){return r>t?r:t>e?e:t}function v(t,r){return void 0===t?r:t}function f(t){t=Math.floor(t);var r=(t>>16&255)/255,e=(t>>8&255)/255,n=(255&t)/255;return[r,e,n]}function d(t){var r=u(Math.round(255*t[0]),0,255),e=u(Math.round(255*t[1]),0,255),n=u(Math.round(255*t[2]),0,255);return"0x"+((r<<16)+(e<<8)+n).toString(16)}function s(t){var r=t.toString(16);return"00000000".substr(0,8-r.length)+r}function h(t){return t/180*Math.PI}function M(t){return 180*t/Math.PI}function l(t,r){var e=1.5*Math.PI-t,n=.5*Math.PI-r,a=Math.cos(e)*Math.sin(n),o=Math.cos(n),c=Math.sin(e)*Math.sin(n);return[a,o,c]}function m(t,r,n,a){var o=e.vec3d.dot(n,r);if(0===o)return!1;var c=-(e.vec3d.dot(n,t)+n[3])/o;return e.vec3d.add(t,e.vec3d.scale(r,c,a),a),!0}function g(t,r,n,a){var o=e.vec3d.dot(r,r),c=2*e.vec3d.dot(r,t),i=e.vec3d.dot(t,t)-n*n,u=c*c-4*o*i;if(0>u)return!1;var v=Math.sqrt(u),f=(-c-v)/(2*o),d=(-c+v)/(2*o);return(0>f||f>d&&d>0)&&(f=d),f>0?(e.vec3d.add(t,e.vec3d.scale(r,f,a),a),!0):!1}function p(t,r,n,a,o,c,i,u,v){void 0===v&&(v=e.vec3d.create());var f=1e-5,d=a[i]-n[c],s=a[i+1]-n[c+1],h=a[i+2]-n[c+2],M=o[u]-n[c],l=o[u+1]-n[c+1],m=o[u+2]-n[c+2],g=r[1]*m-l*r[2],p=r[2]*M-m*r[0],E=r[0]*l-M*r[1],w=d*g+s*p+h*E;if(w>-f&&f>w)return!1;var b=1/w,I=t[0]-n[c],y=t[1]-n[c+1],T=t[2]-n[c+2];if(v[1]=b*(I*g+y*p+T*E),v[1]<0||v[1]>1)return!1;var C=y*h-s*T,x=T*d-h*I,R=I*s-d*y;return v[2]=b*(r[0]*C+r[1]*x+r[2]*R),v[2]<0||v[1]+v[2]>1?!1:(v[0]=b*(M*C+l*x+m*R),!0)}function E(t,r,e,n){var a,o=(e[0]-t[0])/r[0],c=(n[0]-t[0])/r[0];o>c&&(a=o,o=c,c=a);var i=(e[1]-t[1])/r[1],u=(n[1]-t[1])/r[1];if(i>u&&(a=i,i=u,u=a),o>u||i>c)return!1;i>o&&(o=i),c>u&&(c=u);var v=(e[2]-t[2])/r[2],f=(n[2]-t[2])/r[2];return v>f&&(a=v,v=f,f=a),o>f||v>c?!1:(c>f&&(c=f),0>c?!1:!0)}function w(t,r,n,a,o,c){void 0===c&&(c=e.vec2d.create());var i=(a[o]-n[o])*(r[0]-t[0])-(a[0]-n[0])*(r[o]-t[o]),u=(a[0]-n[0])*(t[o]-n[o])-(a[o]-n[o])*(t[0]-n[0]);if(0===i)return!1;var v=u/i;return c[0]=t[0]+v*(r[0]-t[0]),c[1]=t[o]+v*(r[o]-t[o]),!0}function b(t,r,n){e.mat4d.multiply(r,t,ot),e.mat4d.inverse(ot);for(var a=0;8>a;++a)e.mat4d.multiplyVec4(ot,ct[a],it),e.vec3d.set3(it[0]/it[3],it[1]/it[3],it[2]/it[3],n[a])}function I(t,r,e,n){void 0===n&&(n=e,e=ut),b(t,r,e),y(e[4],e[0],e[3],n[0]),y(e[1],e[5],e[6],n[1]),y(e[4],e[5],e[1],n[2]),y(e[3],e[2],e[6],n[3]),y(e[0],e[1],e[2],n[4]),y(e[5],e[4],e[7],n[5])}function y(t,r,n,a){e.vec3d.subtract(t,r,vt),e.vec3d.subtract(n,r,ft),e.vec3d.cross(ft,vt,a),e.vec3d.normalize(a),a[3]=-e.vec3d.dot(a,t)}function T(t,r,a,o,c){c||(c=t),it[0]=t[0],it[1]=t[1],it[2]=t[2],it[3]=1,e.mat4d.multiplyVec4(r,it),c.length>2&&(c[2]=-it[2]),e.mat4d.multiplyVec4(a,it),n(0!==it[3]),c[0]=it[0]/it[3],c[1]=it[1]/it[3],c[2]=it[2]/it[3],c[0]=(.5*c[0]+.5)*o[2]+o[0],c[1]=(.5*c[1]+.5)*o[3]+o[1]}function C(t){return Math.atan((1-r.ECCENTRICITY_SQUARED)*Math.tan(t))}function x(t,e,n,a){var o=6378137,c=o/Math.sqrt(1-r.ECCENTRICITY_SQUARED*Math.pow(Math.sin(t),2)),i=Math.cos(t);a[0]=(c+n)*Math.cos(e)*i,a[1]=(c*(1-r.ECCENTRICITY_SQUARED)+n)*Math.sin(t),a[2]=-(c+n)*Math.sin(e)*i}function R(t,r){var n=e.vec3d.length(t);r[0]=Math.asin(u(t[1]/n,-1,1));var a=Math.cos(r[0]);r[1]=(t[2]<0?1:-1)*Math.acos(u(t[0]/(a*n),-1,1)),r[0]=M(r[0]),r[1]=M(r[1]),r[2]=n}function S(t,e){var n=6378137,a=t[0],o=-t[2],c=t[1],i=Math.sqrt(Math.pow(n,2)*(1-r.ECCENTRICITY_SQUARED)),u=Math.sqrt((Math.pow(n,2)-Math.pow(i,2))/Math.pow(i,2)),v=Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),f=Math.atan2(n*c,i*v),d=Math.atan2(o,a),s=Math.atan2(c+Math.pow(u,2)*i*Math.pow(Math.sin(f),3),v-r.ECCENTRICITY_SQUARED*n*Math.pow(Math.cos(f),3)),h=n/Math.sqrt(1-r.ECCENTRICITY_SQUARED*Math.pow(Math.sin(s),2)),M=v/Math.cos(s)-h+r.EARTH_RADIUS;e[0]=s,e[1]=d,e[2]=M}function A(t,r,n){var a=h(t[0]),o=h(t[1]);return x(a,o,r,dt),e.mat4d.translate(n,dt),e.mat4d.rotateY(n,.5*Math.PI+o),e.mat4d.rotateX(n,.5*Math.PI-a),n}function D(t,r){var e=t[r],n=t[r+1];return e+(n<<8)}function O(t,r){var e=t[r],n=t[r+1],a=t[r+2],o=t[r+3];return e+(n<<8)+(a<<16)+(o<<24)}function N(t,r,e){void 0!==r[t]&&(e[t]=r[t])}function U(t,r){var e={};if(void 0!==r)for(var n=0,a=t;n<a.length;n++){var o=a[n];e[r(o)]=o}else for(var c=0,i=t;c<i.length;c++){var o=i[c];e[o]=o}return e}function P(t){var r=[];for(var e in t)r.push(t[e]);return r}function q(t,r,e){if(void 0===e&&(e={}),e!==t)for(var n in t)e[n]=t[n];if(e!==r)for(var a in r)e[a]=r[a];return e}function F(t,r){var e={};for(var n in t)void 0===r[n]&&(e[n]=t[n]);return e}function _(t,r){var e={};for(var n in t)void 0!==r[n]&&(e[n]=t[n]);return e}function j(t){for(var r in t)return r}function V(t){return t[j(t)]}function L(t){for(var r in t)return!1;return!0}function Y(t,r){if(t.length!==r.length)return!1;for(var e=0,n=t.length;n>e;++e)if(t[e]!==r[e])return!1;return!0}function Q(t,r){var e=t.indexOf(r);return-1!==e?(t[e]=t[t.length-1],t.pop(),r):null}function k(t,r,e,a,o){var c=4*r;n(t.length===c*e,"buffer length must match image resolution");var i=document.createElement("canvas");i.width=r,i.height=e;for(var u=i.getContext("2d"),v=u.getImageData(0,0,r,e),f=v.data,d=0;e>d;++d)for(var s=d*c,h=(e-1-d)*c,M=0;c>M;++M)f[s++]=t[h++];return u.putImageData(v,0,0),i.toDataURL(a,o)}function z(t){return Math.round(100*t)/100}function B(t,r){return Math.log(t)/Math.log(r)}function G(t,r){t[12]=r[0],t[13]=r[1],t[14]=r[2]}function X(t,r,e,n){t[12]=r,t[13]=e,t[14]=n}function H(t,r){return void 0===r&&(r=e.vec3d.create()),r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function W(t,r){return t=e.mat4d.identity(t),G(t,r),t}function K(t,r,e){return 2*Math.atan(e*Math.tan(.5*t)/r)}function Z(t,r,e){return 2*Math.atan(r*Math.tan(.5*t)/e)}function J(t,r,e){return 2*Math.atan(Math.sqrt(r*r+e*e)*Math.tan(.5*t)/r)}function $(t,r,e){return 2*Math.atan(Math.sqrt(r*r+e*e)*Math.tan(.5*t)/e)}function tt(t,r,e){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(r*r+e*e))}function rt(t,r,e){return 2*Math.atan(e*Math.tan(.5*t)/Math.sqrt(r*r+e*e))}function et(t){--t;for(var r=1;32>r;r<<=1)t|=t>>r;return t+1}function nt(t,r,n,a){var o,c,i,u,v,f,d,s,h,M=1e-4,l=st,m=ht;if(l[0]=t[0]-n[0],l[1]=t[1]-n[1],l[2]=t[2]-n[2],m[0]=a[0]-n[0],m[1]=a[1]-n[1],m[2]=a[2]-n[2],Math.abs(m[0])<M&&Math.abs(m[1])<M&&Math.abs(m[2])<M)return[!1];var g=Mt;if(g[0]=r[0]-t[0],g[1]=r[1]-t[1],g[2]=r[2]-t[2],Math.abs(g[0])<M&&Math.abs(g[1])<M&&Math.abs(g[2])<M)return[!1];if(i=l[0]*m[0]+l[1]*m[1]+l[2]*m[2],u=m[0]*g[0]+m[1]*g[1]+m[2]*g[2],v=l[0]*g[0]+l[1]*g[1]+l[2]*g[2],f=m[0]*m[0]+m[1]*m[1]+m[2]*m[2],d=g[0]*g[0]+g[1]*g[1]+g[2]*g[2],h=d*f-u*u,Math.abs(h)<M)return[!1];s=i*u-v*f,o=s/h,c=(i+u*o)/f;var p=lt,E=mt;p[0]=t[0]+o*g[0],p[1]=t[1]+o*g[1],p[2]=t[2]+o*g[2],E[0]=n[0]+c*m[0],E[1]=n[1]+c*m[1],E[2]=n[2]+c*m[2];var w=e.vec3d.dist(p,E);return[!0,w,p,E]}function at(t,r,n){var a=wt,o=bt,c=It,i=Et,u=gt,v=pt;a[0]=r[0]-t[0],a[1]=r[1]-t[1],a[2]=0,o[0]=n[0]-t[0],o[1]=n[1]-t[1],o[2]=0,c[0]=n[0],c[1]=n[1],c[2]=0;var f=e.vec3d.dot(o,a),d=e.vec3d.length(a),s=d*d,h=f/s;i[0]=a[0]*h,i[1]=a[1]*h,u[0]=t[0]+i[0],u[1]=t[1]+i[1],e.vec3d.subtract(c,u,v);var M=e.vec3d.length(v),l=e.vec3d.length(o),m=e.vec3d.length(a),g=e.vec3d.length(i);return(g>l||g>m)&&(M=Number.MAX_VALUE),M}Object.defineProperty(r,"__esModule",{value:!0});var ot=e.mat4d.create(),ct=[e.vec4d.createFrom(-1,-1,-1,1),e.vec4d.createFrom(1,-1,-1,1),e.vec4d.createFrom(1,1,-1,1),e.vec4d.createFrom(-1,1,-1,1),e.vec4d.createFrom(-1,-1,1,1),e.vec4d.createFrom(1,-1,1,1),e.vec4d.createFrom(1,1,1,1),e.vec4d.createFrom(-1,1,1,1)],it=e.vec4d.create(),ut=[e.vec3d.create(),e.vec3d.create(),e.vec3d.create(),e.vec3d.create(),e.vec3d.create(),e.vec3d.create(),e.vec3d.create(),e.vec3d.create()],vt=e.vec3d.create(),ft=e.vec3d.create(),dt=e.vec3d.create(),st=e.vec3d.create(),ht=e.vec3d.create(),Mt=e.vec3d.create(),lt=e.vec3d.create(),mt=e.vec3d.create(),gt=e.vec3d.create(),pt=e.vec3d.create(),Et=e.vec3d.create(),wt=e.vec3d.create(),bt=e.vec3d.create(),It=e.vec3d.create(),yt=function(){function t(t){this.message=t}return t.prototype.toString=function(){return"AssertException: "+this.message},t}();r.AssertException=yt,r.EARTH_RADIUS=6378137,r.METER2FEET=3.28084,r.ECCENTRICITY_SQUARED=.0066943799901414,r.VertexAttrConstants={POSITION:"position",NORMAL:"normal",UV0:"uv0",AUXPOS1:"auxpos1",AUXPOS2:"auxpos2",COLOR:"color",SYMBOLCOLOR:"symbolColor",SIZE:"size",REGION:"region"},r.assert=n,r.verify=a,r.createQuadVertexUvBuffer=o,r.isPowerOfTwo=c,r.lerp=i,r.clamp=u,r.fallbackIfUndefined=v,r.hex2rgb=f,r.rgb2hex=d,r.dec2hex=s,r.deg2rad=h,r.rad2deg=M,r.azimuthElevationAngle2Direction=l,r.rayPlane=m,r.raySphereClosestPositive=g,r.rayTriangle3D=p,r.rayBoxTest=E,r.rayRay2D=w,r.matrix2frustum=b,r.matrix2frustumPlanes=I,r.point2plane=y,r.project=T,r.geodeticToGeocentricLatidude=C,r.latLon2positionWGS84Ellipsoid=x,r.pos2latLon=R,r.pos2latLonWGS84Ellipsoid=S,r.computeGlobeTransformation=A,r.readUInt16=D,r.readUInt32=O,r.setIfDefined=N,r.array2object=U,r.object2array=P,r.mergeObjects=q,r.subtractObjects=F,r.intersectObjects=_,r.getFirstObjectKey=j,r.getFirstObjectValue=V,r.objectEmpty=L,r.arraysEqual=Y,r.arrayRemove=Q,r.byteBuffer2base64image=k,r.cround=z,r.logWithBase=B,r.setMatrixTranslation=G,r.setMatrixTranslation3=X,r.getMatrixTranslation=H,r.createTranslationMatrix=W,r.fovx2fovy=K,r.fovy2fovx=Z,r.fovx2fovd=J,r.fovy2fovd=$,r.fovd2fovx=tt,r.fovd2fovy=rt,r.nextHighestPowerOfTwo=et,r.linelineDistance3D=nt,r.projectVectorVector2D=at;var Tt=function(){var t=window.performance||{};if(t){if(t.now)return function(){return t.now()};if(t.webkitNow)return function(){return t.webkitNow()};if(t.mozNow)return function(){return t.mozNow()};if(t.msNow)return function(){return t.msNow()};if(t.oNow)return function(){return t.oNow()}}var r;return r=t.timing&&t.timing.navigationStart?t.timing.navigationStart:Date.now(),function(){return Date.now()-r}}();r.performance={now:Tt}});