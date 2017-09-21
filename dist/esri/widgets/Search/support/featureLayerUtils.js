//>>built
define("require exports ../../../core/Error ../../../core/lang ../../../core/promiseUtils ../../../geometry/support/scaleUtils ./geometryUtils".split(" "),function(Q,u,x,E,k,F,G){function v(a,b){var c=a.filter,f=a.searchExtent;a=a.withinViewEnabled;b=b.extent;return c&&c.geometry||f||(a&&b?b:void 0)}function z(a){return a?(a.loadStatus===H?a.load():a).then(k.resolve).otherwise(k.reject):k.resolve()}function A(a){return a&&!!a.get("capabilities.query.supportsPagination")}function B(a){var b="";a&&
a.fields.some(function(a){return"string"===a.type?(b=a.name,!0):void 0});return b}function y(a,b){return a&&b?b.every(function(b){return!!a.getField(b)}):!1}function I(a){for(var b=0;b<a.length;b++)if(255<a.charCodeAt(b))return!0;return!1}function J(a,b,c){var f=null;a=a.codedValues;return a&&a.some(function(a){var g=a.name,g=c?g:g.toLowerCase();return(c?b:b.toLowerCase())===g?(f=a.code.toString(),!0):void 0}),f}function n(a,b){return(b=b&&b.where)?"("+a+") AND ("+b+")":a}function C(a,b,c,f,q){var g=
"";if(a){var d=K.test(b.url)&&I(a)?"N":"";c&&c.forEach(function(c){var e=b.getField(c);c=((c=b.getFieldDomain(c))&&"coded-value"===c.type?J(c,a,q):null)||a||null;if(null!==c){var l=e.type,e=e.name;"string"===l||"date"===l?q?e=n(e+" \x3d "+d+"'"+c+"'",f):(c=c.toUpperCase(),e=n("UPPER("+e+") LIKE "+d+"'%"+c+"%'",f)):"oid"===l||"small-integer"===l||"integer"===l||"single"===l||"double"===l?(c=parseFloat(c),e=isNaN(c)?null:n(e+" \x3d "+c,f)):e=n(e+" \x3d "+c,f);e&&(g+=g?" OR ("+e+")":"("+e+")")}})}return g}
function L(a,b){var c=null;a=a.codedValues;return a&&a.length&&a.some(function(a){return a.code===b?(c=a.name,!0):void 0}),c}function D(a,b,c,f){var q=a.attributes;f=a.layer.getFieldDomain(c);return b?E.substitute(q,b):c&&a.hasOwnProperty("attributes")&&q.hasOwnProperty(c)?(a=q[c],f&&"coded-value"===f.type?L(f,a):a):""}function M(a,b,c,f){return a.features.map(function(a){var g=a.attributes[a.layer.objectIdField];return{text:D(a,b.suggestionTemplate,f,b),key:g,sourceIndex:c}})}function N(a,b,c,f,
k,g,d){return a.features.map(function(a){var e=a.clone();a=D(a,c.searchTemplate,k,c);return{extent:G.createExtentFromGeometry(e.geometry,b,g,d),feature:e,name:a,sourceIndex:f}})}Object.defineProperty(u,"__esModule",{value:!0});var H="not-loaded",K=/https?:\/\/services.*\.arcgis\.com/i,O=/(?:\{([^}]+)\})/g;u.getResults=function(a){var b=a.exactMatch,c=void 0===b?!1:b,f=a.location,q=a.maxResults,g=a.spatialReference,d=a.source,n=a.sourceIndex,e=a.suggestResult,l=a.view,P=a.zoomScale,h=d.featureLayer,
m=d.filter,r=l&&l.scale,w=v(d,l);return z(h).then(function(){var a=d.displayField||d.featureLayer.displayField||B(d.featureLayer);if(!h.getField(a))return k.reject(new x("searchfeaturelayerutils:invalid-field","displayField is invalid."));var b=d.outFields||[a];if(!(b&&1===b.length&&"*"===b[0]||y(h,b)))return k.reject(new x("searchfeaturelayerutils:invalid-field","outField is invalid."));var p=h.createQuery(),t=d.searchQueryParams;if(t&&p.set(t),g)p.outSpatialReference=g,(t=F.getUnitValueForSR(g))&&
(p.maxAllowableOffset=t);if(p.returnGeometry=!0,b&&(p.outFields=b),f)p.geometry=f;else if(e.key)p.objectIds=[parseInt(e.key,10)];else{b=d.searchFields||[a];if(!y(h,b))return k.reject(new x("searchfeaturelayerutils:invalid-field","search field is invalid."));A(h)&&(p.num=q);w&&(p.geometry=w);t=e.text.trim();if(!t)return k.resolve();var u=d.prefix,v=d.suffix,t=(""+(void 0===u?"":u)+t+(void 0===v?"":v)).replace(/\'/g,"''"),b=C(t,h,b,m,c);if(!b)return k.resolve();p.where=b}return h.queryFeatures(p).then(function(b){return N(b,
l,d,n,a,r,P)})})};u.getSuggestions=function(a){var b=a.source,c=a.spatialReference,f=a.suggestTerm,q=a.maxSuggestions,g=a.sourceIndex,d=b.featureLayer,u=b.filter,e=v(b,a.view);return z(d).then(function(){if(!A(d))return k.resolve();var a=b.displayField||b.featureLayer.displayField||B(b.featureLayer),n=b.searchFields||[a],h=[];b.suggestionTemplate?b.suggestionTemplate.replace(O,function(a,b){return h.push(b),a}):h.push(a);-1!==h.indexOf(d.objectIdField)||h.push(d.objectIdField);var m=!!d.getField(a),
r=h&&1===h.length&&"*"===h[0]||y(d,h),w=y(d,n);if(!m)return k.reject(new x("searchfeaturelayerutils:invalid-field","displayField is invalid."));if(!r)return k.reject(new x("searchfeaturelayerutils:invalid-field","outField is invalid."));if(!w)return k.reject(new x("searchfeaturelayerutils:invalid-field","search field is invalid."));m=d.createQuery();(r=b.suggestQueryParams)&&m.set(r);m.outSpatialReference=c;m.returnGeometry=!1;m.num=q;m.outFields=h;e&&(m.geometry=e);r=f.trim();if(!r)return k.resolve();
var w=b.prefix,v=b.suffix,r=(""+(void 0===w?"":w)+r+(void 0===v?"":v)).replace(/\'/g,"''");return(n=C(r,d,n,u,!1))?(m.where=n,d.queryFeatures(m).then(function(c){return M(c,b,g,a)})):k.resolve()})}});