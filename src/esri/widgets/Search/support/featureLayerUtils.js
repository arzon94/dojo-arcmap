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

define(["require","exports","../../../core/Error","../../../core/lang","../../../core/promiseUtils","../../../geometry/support/scaleUtils","./geometryUtils"],function(e,r,t,n,i,u,a){function o(e){var r=e.exactMatch,n=void 0===r?!1:r,a=e.location,o=e.maxResults,s=e.spatialReference,v=e.source,p=e.sourceIndex,h=e.suggestResult,x=e.view,w=e.zoomScale,b=v.featureLayer,I=v.filter,R=x&&x.scale,P=l(v,x);return c(b).then(function(){var e=g(v),r=m(b,e);if(!r)return i.reject(new t("searchfeaturelayerutils:invalid-field","displayField is invalid."));var l=v.outFields||[e],c=f(l)||y(b,l);if(!c)return i.reject(new t("searchfeaturelayerutils:invalid-field","outField is invalid."));var S=b.createQuery(),E=v.searchQueryParams;if(E&&S.set(E),s){S.outSpatialReference=s;var O=u.getUnitValueForSR(s);O&&(S.maxAllowableOffset=O)}if(S.returnGeometry=!0,l&&(S.outFields=l),a)S.geometry=a;else if(h.key)S.objectIds=[parseInt(h.key,10)];else{var U=v.searchFields||[e],T=y(b,U);if(!T)return i.reject(new t("searchfeaturelayerutils:invalid-field","search field is invalid."));d(b)&&(S.num=o),P&&(S.geometry=P);var q=h.text.trim();if(!q)return i.resolve();var C=v.prefix,N=void 0===C?"":C,Q=v.suffix,V=void 0===Q?"":Q,k=F(""+N+q+V),A=j(k,b,U,I,n);if(!A)return i.resolve();S.where=A}return b.queryFeatures(S).then(function(r){return L(r,x,v,p,e,R,w)})})}function s(e){var r=e.source,n=e.spatialReference,u=e.view,a=e.suggestTerm,o=e.maxSuggestions,s=e.sourceIndex,v=r.featureLayer,p=r.filter,h=l(r,u);return c(v).then(function(){if(!d(v))return i.resolve();var e=g(r),u=r.searchFields||[e],l=[];r.suggestionTemplate?r.suggestionTemplate.replace(T,function(e,r){return l.push(r),e}):l.push(e);var c=-1!==l.indexOf(v.objectIdField);c||l.push(v.objectIdField);var x=m(v,e),w=f(l)||y(v,l),b=y(v,u);if(!x)return i.reject(new t("searchfeaturelayerutils:invalid-field","displayField is invalid."));if(!w)return i.reject(new t("searchfeaturelayerutils:invalid-field","outField is invalid."));if(!b)return i.reject(new t("searchfeaturelayerutils:invalid-field","search field is invalid."));var I=v.createQuery(),R=r.suggestQueryParams;R&&I.set(R),I.outSpatialReference=n,I.returnGeometry=!1,I.num=o,I.outFields=l,h&&(I.geometry=h);var P=a.trim();if(!P)return i.resolve();var E=r.prefix,L=void 0===E?"":E,O=r.suffix,U=void 0===O?"":O,q=F(""+L+P+U),C=j(q,v,u,p,!1);return C?(I.where=C,v.queryFeatures(I).then(function(t){return S(t,r,s,e)})):i.resolve()})}function l(e,r){var t=e.filter,n=e.searchExtent,i=e.withinViewEnabled,u=r.extent,a=t&&t.geometry,o=i&&u?u:void 0;return a||n||o}function f(e){return e&&1===e.length&&"*"===e[0]}function c(e){if(!e)return i.resolve();var r=e.loadStatus===O,t=r?e.load():e;return t.then(i.resolve).otherwise(i.reject)}function d(e){return e&&!!e.get("capabilities.query.supportsPagination")}function v(e){var r="";if(e){var t=e.fields;t.some(function(e){return"string"===e.type?(r=e.name,!0):void 0})}return r}function g(e){return e.displayField||e.featureLayer.displayField||v(e.featureLayer)}function y(e,r){return e&&r?r.every(function(r){return m(e,r)}):!1}function m(e,r){return!!e.getField(r)}function p(e){for(var r=0;r<e.length;r++)if(e.charCodeAt(r)>255)return!0;return!1}function h(e,r,t){var n=null,i=e.codedValues;return i&&i.some(function(e){var i=e.name,u=t?i:i.toLowerCase(),a=t?r:r.toLowerCase();return a===u?(n=e.code.toString(),!0):void 0}),n}function F(e){return e.replace(/\'/g,"''")}function x(e,r){var t=r&&r.where;return t?"("+e+") AND ("+t+")":e}function w(e,r,t,n,i){var u=r.type,a=r.name;if("string"===u||"date"===u){if(i)return x(a+" = "+t+"'"+e+"'",n);var o=e.toUpperCase();return x("UPPER("+a+") LIKE "+t+"'%"+o+"%'",n)}if("oid"===u||"small-integer"===u||"integer"===u||"single"===u||"double"===u){var s=parseFloat(e);return isNaN(s)?null:x(a+" = "+s,n)}return x(a+" = "+e,n)}function b(e,r){return e?" OR ("+r+")":"("+r+")"}function j(e,r,t,n,i){var u="";if(e){var a=U.test(r.url)&&p(e)?"N":"";t&&t.forEach(function(t){var o=r.getField(t),s=r.getFieldDomain(t),l=s&&"coded-value"===s.type?h(s,e,i):null,f=l||e||null;if(null!==f){var c=w(f,o,a,n,i);c&&(u+=b(u,c))}})}return u}function I(e,r){var t=null,n=e.codedValues;return n&&n.length&&n.some(function(e){return e.code===r?(t=e.name,!0):void 0}),t}function R(e,r,t,i){var u=e.layer,a=e.attributes,o=u.getFieldDomain(t);if(r)return n.substitute(a,r);if(t&&e.hasOwnProperty("attributes")&&a.hasOwnProperty(t)){var s=a[t];return o&&"coded-value"===o.type?I(o,s):s}return""}function P(e,r,t,n){var i=e.layer,u=e.attributes,a=i.objectIdField,o=u[a],s=R(e,r.suggestionTemplate,n,r);return{text:s,key:o,sourceIndex:t}}function S(e,r,t,n){return e.features.map(function(e){return P(e,r,t,n)})}function E(e,r,t,n,i,u,o){var s=e.clone(),l=R(e,t.searchTemplate,i,t),f=a.createExtentFromGeometry(s.geometry,r,u,o);return{extent:f,feature:s,name:l,sourceIndex:n}}function L(e,r,t,n,i,u,a){return e.features.map(function(e){return E(e,r,t,n,i,u,a)})}Object.defineProperty(r,"__esModule",{value:!0});var O="not-loaded",U=/https?:\/\/services.*\.arcgis\.com/i,T=/(?:\{([^}]+)\})/g;r.getResults=o,r.getSuggestions=s});