//>>built
define(["require","exports","dojo/_base/lang"],function(m,b,h){function k(a,e,d){if(a)for(var c=0;c<a.length;c++){var b=a[c],f=h.getObject(b,!1,e);(f=f&&"function"!=typeof f&&l(f,d))&&h.setObject(b,f.name,e)}}function l(a,b){if(null!=b){a=a.toLowerCase();for(var d=0;d<b.length;d++){var c=b[d];if(c&&c.name.toLowerCase()===a)return c}}return null}Object.defineProperty(b,"__esModule",{value:!0});b.fixRendererFields=function(a,e){if(null!=a&&null!=e){var d=0;for(a=Array.isArray(a)?a:[a];d<a.length;d++){var c=
a[d];if(k(b.rendererFields,c,e),c.visualVariables)for(var g=0,c=c.visualVariables;g<c.length;g++)k(b.visualVariableFields,c[g],e)}}};b.getField=l;b.rendererFields="field field2 field3 normalizationField rotationInfo.field proportionalSymbolInfo.field proportionalSymbolInfo.normalizationField colorInfo.field colorInfo.normalizationField".split(" ");b.visualVariableFields=["field","normalizationField"]});