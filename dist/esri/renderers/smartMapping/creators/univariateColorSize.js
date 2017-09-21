//>>built
define("require exports dojo/_base/lang ../../../core/lang ../../../core/promiseUtils ../../support/utils ./support/utils ./color ./size ../support/utils".split(" "),function(x,k,d,l,e,m,f,t,n,h){function u(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))return e.reject(f.createError("univariate-colorsize-visual-variables:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var b=d.mixin({},a);return b.layer=h.createLayerAdapter(b.layer),
b.layer?b.layer.load().then(function(){var a=h.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});return(a=f.verifyBasicFieldValidity(b.layer,a,"univariate-colorsize-visual-variables:invalid-parameters"))?e.reject(a):b}):e.reject(f.createError("univariate-colorsize-visual-variables:invalid-parameters","'layer' must be one of these types: "+p))}function q(a,b){a=d.mixin({},a);b=0===b?a.colorOptions:a.sizeOptions;return delete a.sizeOptions,delete a.colorOptions,
d.mixin(a,b)}function v(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))return e.reject(f.createError("univariate-colorsize-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var b=d.mixin({},a);return b.symbolType=b.symbolType||"2d",b.layer=h.createLayerAdapter(b.layer),b.layer?b.layer.load().then(function(){var a=h.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});
return(a=f.verifyBasicFieldValidity(b.layer,a,"univariate-colorsize-continuous-renderer:invalid-parameters"))?e.reject(a):b}):e.reject(f.createError("univariate-colorsize-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+p))}function w(a){a=d.mixin({},a);var b=a.sizeOptions;return delete a.sizeOptions,delete a.colorOptions,d.mixin(a,b)}function r(a){return u(a).then(function(a){var b;return t.createVisualVariable(q(a,0)).then(function(g){var c=q(a,1);return c.statistics=
g.statistics,b=g,n.createVisualVariables(c)}).then(function(a){var c=b.visualVariable,g=a.visualVariables,d=c.stops.length;return g.forEach(function(a){null!=a.minDataValue&&(a.minDataValue=c.stops[0].value,a.maxDataValue=c.stops[d-1].value)}),{basemapId:a.basemapId,statistics:b.statistics,defaultValuesUsed:b.defaultValuesUsed,color:{visualVariable:c,colorScheme:b.colorScheme},size:{visualVariables:g,sizeScheme:a.sizeScheme},authoringInfo:{type:"univariate-color-size",visualVariables:[l.clone(b.authoringInfo.visualVariables[0]),
l.clone(a.authoringInfo.visualVariables[0])]}}})})}Object.defineProperty(k,"__esModule",{value:!0});var p=h.supportedLayerTypes.join(", ");k.createVisualVariables=r;k.createContinuousRenderer=function(a){return v(a).then(function(a){var b;return n.createContinuousRenderer(w(a)).then(function(g){var c;c=d.mixin({},a);var e=c.symbolType,f=-1<e.indexOf("3d-volumetric");delete c.symbolType;delete c.defaultSymbolEnabled;c=(c.worldScale=f,f&&(c.sizeOptions=d.mixin({},c.sizeOptions),c.sizeOptions.axis="3d-volumetric-uniform"===
e?"all":"height"),c);return c.statistics=g.statistics,b=g,r(c)}).then(function(a){var c=b.renderer;return c.visualVariables=a.size.visualVariables.map(function(a){return m.cloneSizeVariable(a)}),c.visualVariables.push(m.cloneColorVariable(a.color.visualVariable)),c.authoringInfo=l.clone(a.authoringInfo),{renderer:c,statistics:b.statistics,defaultValuesUsed:b.defaultValuesUsed,color:a.color,size:a.size,basemapId:a.basemapId}})})}});