//>>built
define(["require","exports","dojo/_base/lang","../../arcade/arcade","../../arcade/Dictionary"],function(n,c,k,e,l){function f(a){var b;try{b=a?e.parseScript(a):null}catch(d){b=null}return b}Object.defineProperty(c,"__esModule",{value:!0});var g=/^\$feature\./i,m={vars:{$feature:"any",$view:"any"}};c.createSyntaxTree=f;c.createFunction=function(a,b){b=b||k.clone(m);var d;a="string"==typeof a?f(a):a;try{d=a?e.compileScript(a,b):null}catch(h){d=null}return d};c.createExecContext=function(a,b){return{vars:{$feature:e.constructFeature(a),
$view:b&&b.view},spatialReference:b&&b.sr}};c.evalSyntaxTree=function(a,b){var d;try{d=e.executeScript(a,b,b.spatialReference)}catch(h){d=null}return d};c.executeFunction=function(a,b){var d;try{d=a?a(b,b.spatialReference):null}catch(h){d=null}return d};c.extractFieldNames=function(a){if(!a)return[];a="string"==typeof a?f(a):a;var b=[];return e.extractFieldLiterals(a).forEach(function(a){g.test(a)&&(a=a.replace(g,""),b.push(a))}),b.sort(),b.filter(function(a,c){return 0===c||b[c-1]!==a})};c.dependsOnView=
function(a){return e.referencesMember(a,"$view")};c.getViewInfo=function(a){return a&&a.viewingMode&&null!=a.scale&&a.spatialReference?{view:new l({viewingMode:a.viewingMode,scale:a.scale}),sr:a.spatialReference}:void 0}});