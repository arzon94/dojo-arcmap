//>>built
define(["require","exports","../lib/glMatrix"],function(l,e,f){function p(a){return Math.acos(1<a?1:-1>a?-1:a)}function q(a,c,b){return c>a?c:a>b?b:a}function n(a){for(var c in a){var b=a[c];b instanceof Function&&(a[c]=b.bind(a))}return a}Object.defineProperty(e,"__esModule",{value:!0});e.deg2rad=function(a){return a*Math.PI/180};e.rad2deg=function(a){return 180*a/Math.PI};e.asin=function(a){return Math.asin(1<a?1:-1>a?-1:a)};e.acos=p;e.log2=Math.log2||function(a){return Math.log(a)/Math.LN2};e.fovx2fovy=
function(a,c,b){return 2*Math.atan(b*Math.tan(.5*a)/c)};e.fovy2fovx=function(a,c,b){return 2*Math.atan(c*Math.tan(.5*a)/b)};e.lerp=function(a,c,b){return a+(c-a)*b};e.bilerp=function(a,c,b,d,e,f){a+=(c-a)*e;return a+(b+(d-b)*e-a)*f};e.slerp=function(a,c,b,d){void 0===d&&(d=a);var e=f.vec3d.length(a),r=f.vec3d.length(c),h=f.vec3d.dot(a,c)/e/r;.999999999999>h&&(f.vec3d.cross(a,c,g),f.mat4d.identity(k),f.mat4d.rotate(k,b*Math.acos(h),g),f.mat4d.multiplyVec3(k,a,d));return f.vec3d.scale(d,((1-b)*e+b*
r)/e),d};e.slerpOrLerp=function(a,c,b,d,e){var m=f.vec3d.length(a),h=f.vec3d.length(c);(f.vec3d.cross(a,c,g),f.vec3d.length(g)/m/h>e)?(c=Math.acos(f.vec3d.dot(a,c)/m/h),f.mat4d.identity(k),f.mat4d.rotate(k,b*c,g),f.mat4d.multiplyVec3(k,a,d),f.vec3d.scale(d,((1-b)*m+b*h)/m)):f.vec3d.lerp(a,c,b,d);return d};e.angle=function(a,c,b){a=f.vec3d.normalize(a,t);c=f.vec3d.normalize(c,u);var d=p(f.vec3d.dot(a,c));return b&&(a=f.vec3d.cross(a,c,g),0>f.vec3d.dot(a,b))?-d:d};e.clamp=q;e.isFinite=Number.isFinite||
function(a){return"number"==typeof a&&window.isFinite(a)};e.isNaN=Number.isNaN||function(a){return a!==a};e.makePiecewiseLinearFunction=function(a){var c=a.length;return function(b){var d=0;if(b<=a[0][0])return a[0][1];if(b>=a[c-1][0])return a[c-1][1];for(;b>a[d][0];)d++;var e=a[d][0];b=(e-b)/(e-a[d-1][0]);return b*a[d-1][1]+(1-b)*a[d][1]}};e.vectorEquals=function(a,c){if(null==a||null==c)return a!==c;if(a.length!==c.length)return!1;for(var b=0;b<a.length;b++)if(a[b]!==c[b])return!1;return!0};e.floatEqualRelative=
function(a,c,b){if(void 0===b&&(b=1E-6),e.isNaN(a)||e.isNaN(c))return!1;if(a===c)return!0;var d=Math.abs(a-c),f=Math.abs(a),g=Math.abs(c);if(0===a||0===c||1E-12>f&&1E-12>g){if(d>.01*b)return!1}else if(d/(f+g)>b)return!1;return!0};e.floatEqualAbsolute=function(a,c,b){return(void 0===b&&(b=1E-6),e.isNaN(a)||e.isNaN(c))?!1:b>=(a>c?a-c:c-a)};l=function(){function a(a,b){this.min=a;this.max=b;this.range=b-a}return a.prototype.ndiff=function(a,b){return void 0===b&&(b=0),Math.ceil((a-b)/this.range)*this.range+
b},a.prototype._normalize=function(a,b,d,e){return void 0===e&&(e=0),d-=e,a>d?d+=this.ndiff(a-d):d>b&&(d-=this.ndiff(d-b)),d+e},a.prototype.normalize=function(a,b){return this._normalize(this.min,this.max,a,b)},a.prototype.clamp=function(a,b){return void 0===b&&(b=0),q(a-b,this.min,this.max)+b},a.prototype.monotonic=function(a,b,d){return b>a?b:b+this.ndiff(a-b,d)},a.prototype.minimalMonotonic=function(a,b,d){return this._normalize(a,a+this.range,b,d)},a.prototype.center=function(a,b,d){return b=
this.monotonic(a,b,d),this.normalize((a+b)/2,d)},a.prototype.diff=function(a,b,d){return this.monotonic(a,b,d)-a},a.prototype.contains=function(a,b,d){return b=this.minimalMonotonic(a,b),d=this.minimalMonotonic(a,d),d>a&&b>d},a}();e.Cyclical=l;e.cyclical2PI=n(new l(0,2*Math.PI));e.cyclicalPI=n(new l(-Math.PI,Math.PI));e.cyclicalDeg=n(new l(0,360));var g=f.vec3d.create(),k=f.mat4d.create(),t=f.vec3d.create(),u=f.vec3d.create()});