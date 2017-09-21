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

define(["require","exports","dojo/string","../../../../core/Error","../../../../tasks/support/ClassBreaksDefinition","../../support/utils"],function(e,n,i,t,r,a){function o(e){return i.pad(e,2,"0")}function l(e,n){var i;return"date"===n||"number"===n?("number"===n&&(e=new Date(e)),i="TIMESTAMP'"+e.getUTCFullYear()+"-"+o(e.getUTCMonth()+1)+"-"+o(e.getUTCDate())+" "+o(e.getUTCHours())+":"+o(e.getUTCMinutes())+":"+o(e.getUTCSeconds())+"'"):i=e,i}function u(e,n){var i;if(n instanceof Date)i="date";else if("number"==typeof n)i="number";else if("string"==typeof n){var t=e.getField(n);"<now>"===n.toLowerCase()?i="":t&&t.type===E&&(i="field")}return i}function s(e,n,i,t){var r="("+l(i,u(e,i))+" - "+l(n,u(e,n))+")",a=L[t],o="/";1>a&&(a=1/a,o="*");var s=1===a?r:"("+r+" "+o+" "+a+")";return{sqlExpression:s,sqlWhere:null}}function f(e,n){return s(e,new Date(0),n,"milliseconds").sqlExpression}function d(e,n){var i=e.field,t=e.normalizationType,r=e.normalizationField,a=i;return"percent-of-total"===t?a="(("+i+" / "+n+") * 100)":"log"===t?a="(log("+i+") * "+M+")":"field"===t&&(a="("+i+" / "+r+")"),a}function c(e){var n,i=e.field,t=e.normalizationType,r=e.normalizationField;return"log"===t?n="(NOT "+i+" = 0)":"field"===t&&(n="(NOT "+r+" = 0)"),n}function m(e,n){var i=e.field,t=e.classificationMethod||N,a=e.normalizationType,o=e.normalizationField,l=new r;return l.classificationField=i,l.breakCount=n,l.classificationMethod=t,l.standardDeviationInterval="standard-deviation"===t?e.standardDeviationInterval||j:void 0,l.normalizationType=a,l.normalizationField="field"===a?o:void 0,l}function v(e,n){return new t(e,n)}function p(e,n,i){var t=null!=n?e+" >= "+n:"",r=null!=i?e+" <= "+i:"",a="";return a=t&&r?C(t,r):t||r,a?"("+a+")":""}function y(e,n,i,t){var r=null;return n?(n.name===e.objectIdField||-1===t.indexOf(n.type))&&(r=v(i,"'field' should be one of these types: "+t.join(","))):r=v(i,"'field' is not defined in the layer schema"),r}function g(e,n,i){var t;return n?(n.name===e.objectIdField||-1===x.indexOf(n.type))&&(t=v(i,"'field' should be one of these numeric types: "+x.join(","))):t=v(i,"'field' is not defined in the layer schema"),t}function h(e){var n="number"==typeof e?new Date(e):new Date,i=n.getUTCFullYear(),t=Date.UTC(i,0,1,12,0,0,0),r=Date.UTC(i,11,31,12,0,0,0);return"number"==typeof e&&(t>e&&(t=e),e>r&&(r=e)),[t,r]}function T(e){var n=e&&e.statistics;n||(n={});var i,t;if(null==n.min)if(e.isDate){var r=h();i=r[0],t=r[1]}else i=0,t=100;else if(n.min===n.max)if(e.isDate){var a=h(n.min);i=a[0],t=a[1]}else n.min<0?(i=2*n.min,t=0):n.min>0?(i=0,t=2*n.min):(i=0,t=100);return{min:null!=i?i:n.min,max:null!=t?t:n.max,defaultValuesUsed:null!=i||null!=t}}function b(e,n){var i;if(n=n.toLowerCase(),e)for(var t in e)if(t.toLowerCase()!==n){i=e[t];break}return i}function F(e,n){var i;if(n=n.toLowerCase(),e)for(var t in e)if(t.toLowerCase()===n){i=e[t];break}return i}function C(e,n){var i=e;return n&&(i=i?"("+i+") AND ("+n+")":n),i}function D(e){var n=e.normalizationType;return n||(e.normalizationField?n=I:null!=e.normalizationTotal&&(n=k)),n}function U(e,n,i){var t=a.getUnknownFields({layer:e,fields:n});if(t.length)return v(i,"Unknown fields: "+t.join(", ")+". You can only use fields defined in the layer schema");var r=w({layer:e,fields:n});return r.length?v(i,"Unsupported fields: "+r.join(", ")+". You can only use fields that can be fetched i.e. FieldUsageInfo.supportsLayerQuery must be true"):void 0}function w(e){var n=e.layer;return e.fields.filter(function(e){var i=n.getFieldUsageInfo(e);return!i||!i.supportsLayerQuery})}function z(e){return"number"==typeof e&&!isNaN(e)&&e!==1/0&&e!==-(1/0)}Object.defineProperty(n,"__esModule",{value:!0});var x=["integer","small-integer","single","double"],E="date",L={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},N="equal-interval",j=1,M=Math.LOG10E,k="percent-of-total",I="field";n.msSinceUnixEpochSQL=f,n.getFieldExpr=d,n.getSQLFilterForNormalization=c,n.createCBDefn=m,n.createError=v,n.getRangeExpr=p,n.verifyFieldType=y,n.verifyNumericField=g,n.getSuggestedDataRange=T,n.getCustomExprVal=b,n.getAttributeVal=F,n.mergeWhereClauses=C,n.getNormalizationType=D,n.verifyBasicFieldValidity=U,n.isValidNumber=z});