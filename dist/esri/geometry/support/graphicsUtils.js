//>>built
define(["require","exports","dojo/_base/array","../Extent"],function(l,e,h,k){Object.defineProperty(e,"__esModule",{value:!0});e.graphicsExtent=function(c){var b=c[0].geometry,d=b.extent,a=b;null===d&&(d=new k(a.x,a.y,a.x,a.y,b.spatialReference));for(var g=1;g<c.length;g++){var a=b=c[g].geometry,f=b.extent;null===f&&(f=new k(a.x,a.y,a.x,a.y,b.spatialReference));d=d.clone().union(f)}return 0>d.width&&0>d.height?null:d};e.getGeometries=function(c){return h.map(c,function(b){return b.geometry})};e._encodeGraphics=
function(c,b){var d=[];return h.forEach(c,function(a,c){a=a.toJSON();var f={};if(a.geometry){var e=b&&b[c];f.geometry=e&&e.toJSON()||a.geometry}a.attributes&&(f.attributes=a.attributes);d[c]=f}),d}});