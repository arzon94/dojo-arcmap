//>>built
define("require exports dojo/_base/lang ../../../core/promiseUtils ./support/utils ../support/utils ../../../tasks/support/StatisticDefinition ../../../tasks/support/UniqueValueDefinition ../../../tasks/support/GenerateRendererParameters".split(" "),function(A,B,k,h,g,l,n,p,q){function r(b){if(!b||!b.layer||!b.field&&!b.valueExpression)return h.reject(g.createError("unique-values:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required"));var a=k.mixin({},b);return a.layer=
l.createLayerAdapter(a.layer),a.layer?a.layer.load().then(function(){var b=a.layer,c=l.getFieldsList({field:a.field,valueExpression:a.valueExpression});return(b=g.verifyBasicFieldValidity(b,c,"unique-values:invalid-parameters"))?h.reject(b):a}):h.reject(g.createError("unique-values:invalid-parameters","'layer' must be one of these types: "+t))}function u(b){var a=b.layer,d=b.field,c=b.sqlExpression,f="countOF"+(d||"Expr"),e=new n;e.statisticType="count";e.onStatisticField=c?"*":d;e.outStatisticFieldName=
f;return a.queryStatistics({sqlFormat:c?"standard":null,where:b.sqlWhere,outStatistics:[e],groupByFieldsForStatistics:[d||c]}).then(function(b){var c={},e=!1;return((b&&b.features).forEach(function(b){var a=b.attributes;b=g.getAttributeVal(a,f);a=d?g.getAttributeVal(a,d):g.getCustomExprVal(a,f);null===a&&0===b&&(e=!0);(null==a||"string"==typeof a&&""===k.trim(a))&&(a=null);null==c[a]?c[a]={count:b,data:a}:c[a].count+=b}),d&&e)?a.queryFeatureCount(d+" is NULL").then(function(b){return b=b||0,c["null"].count+=
b,{count:c}}).otherwise(function(b){return{count:c}}):{count:c}}).then(function(a){return m(b,a,v)})}function w(b){var a=b.layer,d=b.field,c=new p;c.attributeField=d;var f=new q;return f.classificationDefinition=c,a.generateRenderer(f).then(function(c){var e={},f=a.getField(d),g=-1<x.indexOf(f&&f.type);return c.uniqueValueInfos.forEach(function(b){var a=b.value;null!=a&&""!==a&&("string"!=typeof a||""!==k.trim(a)&&"\x3cnull\x3e"!==a.toLowerCase())||(a=null);null==e[a]?e[a]={count:b.count,data:g&&
a?Number(a):a}:e[a].count+=b.count}),m(b,{count:e},y)})}function m(b,a,d){var c=a.count;a=b.field;d=b.layer;d=(a?d.getField(a):null)&&d.getFieldDomain(a);a=[];b.returnAllCodedValues&&d&&"coded-value"===d.type&&d.codedValues.forEach(function(a){a=a.code;c.hasOwnProperty(a)||(c[a]={data:a,count:0})});for(var f in c)b=c[f],a.push({value:b.data,count:b.count});return{uniqueValueInfos:a}}function z(b){var a=b.layer,d=b.valueExpression&&(!b.sqlExpression||!a.supportsSQLExpression);return a.hasLocalSource||
b.features||d?h.reject(g.createError("unique-values:not-implemented","Client-side calculation is not implemented yet")):u(b).otherwise(function(a){return b.field?w(b):a})}var t=l.supportedLayerTypes.join(", "),x=["integer","small-integer","single","double"],v="service-query",y="service-generate-renderer";return function(b){return r(b).then(function(a){return z(a)})}});