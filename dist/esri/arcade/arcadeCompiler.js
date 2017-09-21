//>>built
define("require exports ../geometry/Polygon ../Graphic ../geometry/Polyline ../geometry/Point ../geometry/Extent ../geometry/Multipoint ../geometry/SpatialReference ./languageUtils ./treeAnalysis ./Dictionary ./Feature ./functions/date ./functions/string ./functions/maths ./functions/geometry ./functions/stats ./ImmutablePathArray ./ImmutablePointArray ../geometry/Geometry".split(" "),function(la,p,Q,R,S,T,U,V,W,c,h,r,y,X,Y,Z,aa,ba,C,ca,da){function m(b,a,d){try{return d(b,null,a)}catch(g){throw g;
}}function f(b,a){try{switch(a.type){case "EmptyStatement":return"lc.voidOperation";case "VariableDeclarator":return ea(b,a);case "VariableDeclaration":for(var d=[],g=0;g<a.declarations.length;g++)d.push(f(b,a.declarations[g]));return d.join("\n")+" \n lastStatement\x3d  lc.voidOperation; \n";case "BlockStatement":return K(b,a);case "FunctionDeclaration":var c=a.id.name.toLowerCase(),t={applicationCache:void 0===b.applicationCache?null:b.applicationCache,spatialReference:b.spatialReference,console:b.console,
symbols:b.symbols,localScope:{_SymbolsMap:{}},depthCounter:b.depthCounter+1,globalScope:b.globalScope};if(64<t.depthCounter)throw Error("Exceeded maximum function depth");for(var d="new lc.SizzleFunction( lang.functionDepthchecker(function() { var lastStatement \x3d lc.voidOperation; var lscope \x3d [];\n ",A=0;A<a.params.length;A++){var l=a.params[A].name.toLowerCase(),D=G(l,b);t.localScope._SymbolsMap[l]=D;d+="lscope['"+D+"']\x3darguments["+A.toString()+"];\n"}(d+=K(t,a.body)+"\n return lastStatement; }, runtimeCtx))",
d+="\n lastStatement \x3d lc.voidOperation; \n",void 0!==b.globalScope[c])?g="gscope['"+c+"']\x3d"+d:void 0!==b.globalScope._SymbolsMap[c]?g="gscope['"+b.globalScope._SymbolsMap[c]+"']\x3d"+d:(D=G(c,b),g=(b.globalScope._SymbolsMap[c]=D,"gscope['"+D+"']\x3d"+d));return g;case "ReturnStatement":var L;L=null===a.argument?"return lc.voidOperation;":"return "+f(b,a.argument)+";";return L;case "IfStatement":if("AssignmentExpression"===a.test.type||"UpdateExpression"===a.test.type)throw Error(h.nodeErrorMessage(a.test,
"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));var fa=f(b,a.test),m=B(b),v="var "+m+" \x3d "+fa+";\n if ("+m+" \x3d\x3d\x3d true) {\n"+M(b,a.consequent)+"\n }\n";return v+=null!==a.alternate?"else if ("+m+"\x3d\x3d\x3dfalse)   { \n"+M(b,a.alternate)+"}\n":"else if ("+m+"\x3d\x3d\x3dfalse) { \n lastStatement \x3d lc.voidOperation;\n }\n",v+="else { lang.error({type: '"+a.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION'); \n}\n";case "ExpressionStatement":return"AssignmentExpression"===a.expression.type?
"lastStatement \x3d lc.voidOperation; "+f(b,a.expression)+" \n ":"lastStatement \x3d "+f(b,a.expression)+";";case "AssignmentExpression":return ga(b,a);case "UpdateExpression":return ha(b,a);case "BreakStatement":return"break;";case "ContinueStatement":return"continue;";case "ForStatement":d="lastStatement \x3d lc.voidOperation; \n";null!==a.init&&(d+=f(b,a.init));var p=B(b),r=B(b);return d+="var "+p+" \x3d true;",d+="\n do { ",null!==a.update&&(d+=" if ("+p+"\x3d\x3d\x3dfalse) {\n "+f(b,a.update)+
"  \n}\n "+p+"\x3dfalse; \n"),null!==a.test&&(d+="var "+r+" \x3d "+f(b,a.test)+";",d+="if ("+r+"\x3d\x3d\x3dfalse) { break; } else if ("+r+"!\x3d\x3dtrue) { lang.error({type: '"+a.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION');   }\n"),d+=f(b,a.body),null!==a.update&&(d+="\n "+f(b,a.update)),d+="\n"+p+" \x3d true; \n} while(true);  lastStatement \x3d lc.voidOperation;";case "ForInStatement":var w=B(b),n=B(b),u=B(b),k="var "+w+" \x3d "+f(b,a.right)+";\n";"VariableDeclaration"===a.left.type&&
(k+=f(b,a.left));var x="VariableDeclaration"===a.left.type?a.left.declarations[0].id.name:a.left.name,x=x.toLowerCase(),d="";return null!==b.localScope&&(void 0!==b.localScope[x]?d="lscope['"+x+"']":void 0!==b.localScope._SymbolsMap[x]&&(d="lscope['"+b.localScope._SymbolsMap[x]+"']")),""===d&&(void 0!==b.globalScope[x]?d="gscope['"+x+"']":void 0!==b.globalScope._SymbolsMap[x]&&(d="gscope['"+b.globalScope._SymbolsMap[x]+"']")),k+="if ("+w+"\x3d\x3d\x3dnull) {  lastStatement \x3d lc.voidOperation; }\n ",
k+="else if (lc.isArray("+w+") || lc.isString("+w+")) {",k+="var "+n+"\x3d"+w+".length; \n",k+="for(var "+u+"\x3d0; "+u+"\x3c"+n+"; "+u+"++) {\n",k+=d+"\x3d"+u+";\n",k+=f(b,a.body),k+="\n}\n",k+=" lastStatement \x3d lc.voidOperation; \n",k+=" \n}\n",k+="else if (lc.isImmutableArray("+w+")) {",k+="var "+n+"\x3d"+w+".length(); \n",k+="for(var "+u+"\x3d0; "+u+"\x3c"+n+"; "+u+"++) {\n",k+=d+"\x3d"+u+";\n",k+=f(b,a.body),k+="\n}\n",k+=" lastStatement \x3d lc.voidOperation; \n",k+=" \n}\n",k+="else if (( "+
w+" instanceof lang.Dictionary) || ( "+w+" instanceof lang.Feature)) {",k+="var "+n+"\x3d"+w+".keys(); \n",k+="for(var "+u+"\x3d0; "+u+"\x3c"+n+".length; "+u+"++) {\n",k+=d+"\x3d"+n+"["+u+"];\n",k+=f(b,a.body),k+="\n}\n",k+=" lastStatement \x3d lc.voidOperation; \n",k+=" \n}\n",k+="else { lastStatement \x3d lc.voidOperation; } \n";case "Identifier":return ia(b,a);case "MemberExpression":var y;try{d=void 0,y=(d=!0===a.computed?f(b,a.property):"'"+a.property.name+"'","lang.member("+f(b,a.object)+","+
d+")")}catch(q){throw q;}return y;case "Literal":return null===a.value||void 0===a.value?"null":JSON.stringify(a.value);case "ThisExpression":throw Error(h.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTED"));case "CallExpression":try{if("Identifier"!==a.callee.type)throw Error(h.nodeErrorMessage(a,"RUNTIME","ONLYNODESSUPPORTED"));var z=a.callee.name.toLowerCase(),g="";if(null!==b.localScope&&(void 0!==b.localScope[z]?g="lscope['"+z+"']":void 0!==b.localScope._SymbolsMap[z]&&(g="lscope['"+b.localScope._SymbolsMap[z]+
"']")),""===g&&(void 0!==b.globalScope[z]?g="gscope['"+z+"']":void 0!==b.globalScope._SymbolsMap[z]&&(g="gscope['"+b.globalScope._SymbolsMap[z]+"']")),""!==g){c="[";for(t=0;t<a.arguments.length;t++)0<t&&(c+=", "),c+=f(b,a.arguments[t]);d=(c+="]","lang.callfunc("+g+","+c+",runtimeCtx)")}else throw Error(h.nodeErrorMessage(a,"RUNTIME","NOTFOUND"));}catch(q){throw q;}return d;case "UnaryExpression":var C;try{C="lang.unary("+f(b,a.argument)+",'"+a.operator+"')"}catch(q){throw q;}return C;case "BinaryExpression":var E;
try{E="lang.binary("+f(b,a.left)+","+f(b,a.right)+",'"+a.operator+"')"}catch(q){throw q;}return E;case "LogicalExpression":var F;try{if("AssignmentExpression"===a.left.type||"UpdateExpression"===a.left.type)throw Error(h.nodeErrorMessage(a.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type)throw Error(h.nodeErrorMessage(a.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("\x26\x26"===a.operator||"||"===a.operator)F=
"(lang.logicalCheck("+f(b,a.left)+") "+a.operator+" lang.logicalCheck("+f(b,a.right)+"))";else throw Error(h.nodeErrorMessage("LogicalExpression","RUNTIME","ONLYORORAND"));}catch(q){throw q;}return F;case "ConditionalExpression":throw Error(h.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTED"));case "ArrayExpression":try{d=[];for(g=0;g<a.elements.length;g++)"Literal"===a.elements[g].type?d.push(f(b,a.elements[g])):d.push("lang.aCheck("+f(b,a.elements[g])+",'ArrayExpression')");A="["+d.join(",")+"]"}catch(q){throw q;
}return A;case "ObjectExpression":d="lang.dictionary([";for(g=0;g<a.properties.length;g++){var H=a.properties[g],I="Identifier"===H.key.type?"'"+H.key.name+"'":f(b,H.key),J=f(b,H.value);0<g&&(d+=",");d+="lang.strCheck("+I+",'ObjectExpression'),lang.aCheck("+J+", 'ObjectExpression')"}return d+="])";case "Property":throw Error("Should not get here");case "Array":throw Error(h.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTED"));default:throw Error(h.nodeErrorMessage(a,"RUNTIME","UNREOGNISED"));}}catch(q){throw q;
}}function ha(b,a){var d=null,c="";if("MemberExpression"===a.argument.type)return d=f(b,a.argument.object),c=!0===a.argument.computed?f(b,a.argument.property):"'"+a.argument.property.name+"'","lang.memberupdate("+d+","+c+",'"+a.operator+"',"+a.prefix+")";if(d=a.argument.name.toLowerCase(),null!==b.localScope){if(void 0!==b.localScope[d])return"lang.update(lscope, '"+d+"','"+a.operator+"',"+a.prefix+")";if(void 0!==b.localScope._SymbolsMap[d])return"lang.update(lscope, '"+b.localScope._SymbolsMap[d]+
"','"+a.operator+"',"+a.prefix+")"}if(void 0!==b.globalScope[d])return"lang.update(gscope, '"+d+"','"+a.operator+"',"+a.prefix+")";if(void 0!==b.globalScope._SymbolsMap[d])return"lang.update(gscope, '"+b.globalScope._SymbolsMap[d]+"','"+a.operator+"',"+a.prefix+")";throw Error("Variable not recognised");}function ga(b,a){var d=f(b,a.right),c=null,e="";if("MemberExpression"===a.left.type)return c=f(b,a.left.object),e=!0===a.left.computed?f(b,a.left.property):"'"+a.left.property.name+"'","lang.assignmember("+
c+","+e+",'"+a.operator+"',"+d+");";if(c=a.left.name.toLowerCase(),null!==b.localScope){if(void 0!==b.localScope[c])return"lscope['"+c+"']\x3dlang.assign("+d+",'"+a.operator+"', lscope['"+c+"']); ";if(void 0!==b.localScope._SymbolsMap[c])return"lscope['"+b.localScope._SymbolsMap[c]+"']\x3dlang.assign("+d+",'"+a.operator+"', lscope['"+b.localScope._SymbolsMap[c]+"']); "}if(void 0!==b.globalScope[c])return"gscope['"+c+"']\x3dlang.assign("+d+",'"+a.operator+"', gscope['"+c+"']); ";if(void 0!==b.globalScope._SymbolsMap[c])return"gscope['"+
b.globalScope._SymbolsMap[c]+"']\x3dlang.assign("+d+",'"+a.operator+"', gscope['"+b.globalScope._SymbolsMap[c]+"']); ";throw Error("Variable not recognised");}function M(b,a){return"BlockStatement"===a.type?f(b,a):"ReturnStatement"===a.type?f(b,a):"BreakStatement"===a.type?f(b,a):"ContinueStatement"===a.type?f(b,a):"UpdateExpression"===a.type?"lastStatement \x3d "+f(b,a)+";":"ExpressionStatement"===a.type?f(b,a):"ObjectExpression"===a.type?"lastStatement \x3d "+f(b,a)+";":f(b,a)}function K(b,a){for(var d=
"",c=0;c<a.body.length;c++)d+="ReturnStatement"===a.body[c].type?f(b,a.body[c])+" \n":"BreakStatement"===a.body[c].type?f(b,a.body[c])+" \n":"ContinueStatement"===a.body[c].type?f(b,a.body[c])+" \n":"UpdateExpression"===a.body[c].type?"lastStatement \x3d "+f(b,a.body[c])+"; \n":"ObjectExpression"===a.body[c].type?"lastStatement \x3d "+f(b,a.body[c])+"; \n":f(b,a.body[c])+" \n";return d}function ea(b,a){var d=null===a.init?null:f(b,a.init);d===c.voidOperation&&(d=null);a=a.id.name.toLowerCase();if(null!==
b.localScope){if(void 0!==b.localScope[a])return"lscope['"+a+"']\x3d"+d+";";if(void 0!==b.localScope._SymbolsMap[a])return"lscope['"+b.localScope._SymbolsMap[a]+"']\x3d"+d+";";var g=G(a,b);return b.localScope._SymbolsMap[a]=g,"lscope['"+g+"']\x3d"+d+";"}if(void 0!==b.globalScope[a])return"gscope['"+a+"']\x3d"+d+";";if(void 0!==b.globalScope._SymbolsMap[a])return"gscope['"+b.globalScope._SymbolsMap[a]+"']\x3d"+d+";";g=G(a,b);return b.globalScope._SymbolsMap[a]=g,"gscope['"+g+"']\x3d"+d+";"}function ja(b,
a,d){switch(a=a.toLowerCase()){case "hasz":return b=b.hasZ,void 0===b?!1:b;case "hasm":return b=b.hasM,void 0===b?!1:b;case "spatialreference":return a=b.spatialReference._arcadeCacheId,void 0===a&&(d=!0,Object.freeze&&Object.isFrozen(b.spatialReference)&&(d=!1),d&&(v++,b.spatialReference._arcadeCacheId=v,a=v)),b=new r({wkt:b.spatialReference.wkt,wkid:b.spatialReference.wkid}),void 0!==a&&(b._arcadeCacheId="SPREF"+a.toString()),b}switch(b.type){case "extent":switch(a){case "xmin":case "xmax":case "ymin":case "ymax":case "zmin":case "zmax":case "mmin":case "mmax":return b=
b[a],void 0!==b?b:null;case "type":return"Extent"}break;case "polygon":switch(a){case "rings":return a=c.isVersion4?b.cache._arcadeCacheId:b.getCacheValue("_arcadeCacheId"),void 0===a&&(v++,a=v,c.isVersion4?b.cache._arcadeCacheId=a:b.setCacheValue("_arcadeCacheId",a)),b=new C(b.rings,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polygon"}break;case "point":switch(a){case "x":case "y":case "z":case "m":return void 0!==b[a]?b[a]:null;case "type":return"Point"}break;case "polyline":switch(a){case "paths":return a=
c.isVersion4?b.cache._arcadeCacheId:b.getCacheValue("_arcadeCacheId"),void 0===a&&(v++,a=v,c.isVersion4?b.cache._arcadeCacheId=a:b.setCacheValue("_arcadeCacheId",a)),b=new C(b.paths,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polyline"}break;case "multipoint":switch(a){case "points":return a=c.isVersion4?b.cache._arcadeCacheId:b.getCacheValue("_arcadeCacheId"),void 0===a&&(v++,a=v,c.isVersion4?b.cache._arcadeCacheId=a:b.setCacheValue("_arcadeCacheId",a)),b=new ca(b.points,b.spatialReference,
!0===b.hasZ,!0===b.hasM,a,1);case "type":return"Multipoint"}}throw Error(h.nodeErrorMessage(d,"RUNTIME","PROPERTYNOTFOUND"));}function ia(b,a){try{var d=a.name.toLowerCase();if(null!==b.localScope){if(void 0!==b.localScope[d])return"lscope['"+d+"']";if(void 0!==b.localScope._SymbolsMap[d])return"lscope['"+b.localScope._SymbolsMap[d]+"']"}if(void 0!==b.globalScope[d])return"gscope['"+d+"']";if(void 0!==b.globalScope._SymbolsMap[d])return"gscope['"+b.globalScope._SymbolsMap[d]+"']";throw Error(h.nodeErrorMessage(a,
"RUNTIME","VARIABLENOTFOUND"));}catch(g){throw g;}}function E(b){return null===b?"":c.isArray(b)?"Array":c.isImmutableArray(b)?"Array":c.isDate(b)?"Date":c.isString(b)?"String":c.isBoolean(b)?"Boolean":c.isNumber(b)?"Number":b instanceof r?"Dictionary":b instanceof y?"Feature":b instanceof T?"Point":b instanceof Q?"Polygon":b instanceof S?"Polyline":b instanceof V?"Multipoint":b instanceof U?"Extent":c.isFunctionParameter(b)?"Function":b===c.voidOperation?"":"number"==typeof b&&isNaN(b)?"Number":
"Unrecognised Type"}function F(b,a,d,g){try{if(c.equalityTest(a[d],g))return a[d+1];var e=a.length-d;return 1===e?a[d]:2===e?null:3===e?a[d+2]:F(b,a,d+2,g)}catch(t){throw t;}}function I(b,a,d,g){try{if(!0===g)return a[d+1];if(3===a.length-d)return a[d+2];var e=a[d+2];if(!1===c.isBoolean(e))throw Error("WHEN needs boolean test conditions");return I(b,a,d+2,e)}catch(t){throw t;}}function n(b,a){var d=b.length,c=Math.floor(d/2);if(0===d)a=[];else if(1===d)a=[b[0]];else{var e=n(b.slice(0,c),a);b=n(b.slice(c,
d),a);for(d=[];0<e.length||0<b.length;)0<e.length&&0<b.length?(c=a(e[0],b[0]),isNaN(c)&&(c=0),0>=c?(d.push(e[0]),e=e.slice(1)):(d.push(b[0]),b=b.slice(1))):0<e.length?(d.push(e[0]),e=e.slice(1)):0<b.length&&(d.push(b[0]),b=b.slice(1));a=d}return a}function G(b,a){return a.symbols.symbolCounter++,"_T"+a.symbols.symbolCounter.toString()}function B(b){return b.symbols.symbolCounter++,"_Tvar"+b.symbols.symbolCounter.toString()}function ka(b,a,d){var c={};b||(b={});d||(d={});c._SymbolsMap={};c.textformatting=
1;c.infinity=1;c.pi=1;for(var e in a)c[e]=1;for(e in d)c[e]=1;for(e in b)c[e]=1;return c}function J(b){console.log(b)}Object.defineProperty(p,"__esModule",{value:!0});var v=0,l={};X.registerFunctions(l,m);Y.registerFunctions(l,m);Z.registerFunctions(l,m);aa.registerFunctions(l,m);ba.registerFunctions(l,m);l["typeof"]=function(b,a){return m(b,a,function(b,a,e){c.pcCheck(e,1,1);b=E(e[0]);if("Unrecognised Type"===b)throw Error("Unrecognised Type");return b})};l.iif=function(b,a){try{return m(b,a,function(b,
a,e){if(c.pcCheck(e,3,3),!1===c.isBoolean(e[0]))throw Error("IF Function must have a boolean test condition");return e[0]?e[1]:e[2]})}catch(d){throw d;}};l.decode=function(b,a){try{return m(b,a,function(a,c,e){if(2>e.length)throw Error("Missing Parameters");if(2===e.length)return e[1];if(0===(e.length-1)%2)throw Error("Must have a default value result.");return F(b,e,1,e[0])})}catch(d){throw d;}};l.when=function(b,a){try{return m(b,a,function(a,g,e){if(3>e.length)throw Error("Missing Parameters");
if(0===e.length%2)throw Error("Must have a default value result.");a=e[0];if(!1===c.isBoolean(a))throw Error("WHEN needs boolean test conditions");return I(b,e,0,a)})}catch(d){throw d;}};l.top=function(b,a){return m(b,a,function(b,a,e){if(c.pcCheck(e,2,2),c.isArray(e[0]))return c.toNumber(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,c.toNumber(e[1]));if(c.isImmutableArray(e[0]))return c.toNumber(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,c.toNumber(e[1]));throw Error("Top cannot accept this parameter type");
})};l.first=function(b,a){return m(b,a,function(b,a,e){return c.pcCheck(e,1,1),c.isArray(e[0])?0===e[0].length?null:e[0][0]:c.isImmutableArray(e[0])?0===e[0].length()?null:e[0].get(0):null})};l.sort=function(b,a){return m(b,a,function(b,a,e){c.pcCheck(e,1,2);a=e[0];if(c.isImmutableArray(a)&&(a=a.toArray()),!1===c.isArray(a))throw Error("Illegal Argument");if(1<e.length){if(!1===c.isFunctionParameter(e[1]))throw Error("Illegal Argument");return a=n(a,function(a,d){return N.callfunc(e[1],[a,d],b)})}if(0===
a.length)return[];for(var d={},g=0;g<a.length;g++){var f=E(a[g]);""!==f&&(d[f]=!0)}if(!0===d.Array||!0===d.Dictionary||!0===d.Feature||!0===d.Point||!0===d.Polygon||!0===d.Polyline||!0===d.Multipoint||!0===d.Extent||!0===d.Function)return a.slice(0);var g=0,f="",h;for(h in d)g++,f=h;return a=1<g||"String"===f?n(a,function(a,b){if(null===a||void 0===a||a===c.voidOperation)return null===b||void 0===b||b===c.voidOperation?0:1;if(null===b||void 0===b||b===c.voidOperation)return-1;a=c.toString(a);b=c.toString(b);
return b>a?-1:a===b?0:1}):"Number"===f?n(a,function(a,b){return a-b}):"Boolean"===f?n(a,function(a,b){return a===b?0:b?-1:1}):"Date"===f?n(a,function(a,b){return b-a}):a.slice(0)})};for(var O in l)l[O]=new c.NativeFunction(l[O]);var P=function(){};P.prototype=l;p.functionHelper={fixSpatialReference:c.fixSpatialReference,parseArguments:function(b,a){for(var d=[],c=0;c<a.arguments.length;c++)d.push(f(b,a.arguments[c]));return d},standardFunction:m};p.executeScript=function(b,a,d){return b(a,d)};p.extractFieldLiterals=
function(b,a){return void 0===a&&(a=!1),h.findFieldLiterals(b,a)};p.validateScript=function(b,a){return h.validateScript(b,a,"simple")};p.referencesMember=function(b,a){return h.referencesMember(b,a)};p.referencesFunction=function(b,a){return h.referencesFunction(b,a)};var N={error:function(b,a,d){throw Error(h.nodeErrorMessage(b,a,d));},functionDepthchecker:function(b,a){return function(){if(a.depthCounte++,64<a.depthCounter)throw Error("Exceeded maximum function depth");var d=b.apply(this,arguments);
return a.depthCounte--,d}},aCheck:function(b,a){if(c.isFunctionParameter(b))throw Error(h.nodeErrorMessage({type:a},"RUNTIME","FUNCTIONCONTEXTILLEGAL"));return b===c.voidOperation?null:b},Dictionary:r,Feature:y,dictionary:function(b){for(var a={},d=0;d<b.length;d+=2){if(c.isFunctionParameter(b[d+1]))throw Error("Illegal Argument");if(!1===c.isString(b[d]))throw Error("Illegal Argument");b[d+1]===c.voidOperation?a[b[d].toString()]=null:a[b[d].toString()]=b[d+1]}b=new r(a);return b.immutable=!1,b},
strCheck:function(b,a){if(!1===c.isString(b))throw Error("Illegal Argument");return b},unary:function(b,a){if(c.isBoolean(b)){if("!"===a)return!b;if("-"===a)return-1*c.toNumber(b);if("+"===a)return 1*c.toNumber(b);throw Error(h.nodeErrorMessage({type:"UnaryExpression"},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));}if("-"===a)return-1*c.toNumber(b);if("+"===a)return 1*c.toNumber(b);throw Error(h.nodeErrorMessage({type:"UnaryExpression"},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));},logicalCheck:function(b){if(!1===
c.isBoolean(b))throw Error(h.nodeErrorMessage("LogicalExpression","RUNTIME","ONLYORORAND"));return b},logical:function(b,a,d){if(!c.isBoolean(b)||!c.isBoolean(a))throw Error(h.nodeErrorMessage("LogicalExpression","RUNTIME","ONLYORORAND"));switch(d){case "||":return b||a;case "\x26\x26":return b&&a;default:throw Error(h.nodeErrorMessage("LogicalExpression","RUNTIME","ONLYORORAND"));}},binary:function(b,a,d){switch(d){case "\x3d\x3d":return c.equalityTest(b,a);case "\x3d":return c.equalityTest(b,a);
case "!\x3d":return!c.equalityTest(b,a);case "\x3c":return c.greaterThanLessThan(b,a,d);case "\x3e":return c.greaterThanLessThan(b,a,d);case "\x3c\x3d":return c.greaterThanLessThan(b,a,d);case "\x3e\x3d":return c.greaterThanLessThan(b,a,d);case "+":return c.isString(b)||c.isString(a)?c.toString(b)+c.toString(a):c.toNumber(b)+c.toNumber(a);case "-":return c.toNumber(b)-c.toNumber(a);case "*":return c.toNumber(b)*c.toNumber(a);case "/":return c.toNumber(b)/c.toNumber(a);case "%":return c.toNumber(b)%
c.toNumber(a);default:throw Error(h.nodeErrorMessage({type:"BinaryExpression"},"RUNTIME","OPERATORNOTRECOGNISED"));}},assign:function(b,a,d){switch(a){case "\x3d":return b===c.voidOperation?null:b;case "/\x3d":return c.toNumber(d)/c.toNumber(b);case "*\x3d":return c.toNumber(d)*c.toNumber(b);case "-\x3d":return c.toNumber(d)-c.toNumber(b);case "+\x3d":return c.isString(d)||c.isString(b)?c.toString(d)+c.toString(b):c.toNumber(d)+c.toNumber(b);case "%\x3d":return c.toNumber(d)%c.toNumber(b);default:throw Error(h.nodeErrorMessage("AssignmentExpression",
"RUNTIME","OPERATORNOTRECOGNISED"));}},update:function(b,a,d,g){var e=c.toNumber(b[a]);return b[a]="++"===d?e+1:e-1,!1===g?e:"++"===d?e+1:e-1},memberupdate:function(b,a,d,g){var e;if(c.isArray(b)){if(!c.isNumber(a))throw Error("Invalid Parameter");if(0>a&&(a=b.length+a),0>a||a>=b.length)throw Error("Assignment outside of array bounds");e=c.toNumber(b[a]);b[a]="++"===d?e+1:e-1}else{if(b instanceof r){if(!1===c.isString(a))throw Error("Dictionary accessor must be a string");}else{if(!(b instanceof y))throw c.isImmutableArray(b)?
Error("Array is Immutable"):Error("Invalid Parameter");if(!1===c.isString(a))throw Error("Feature accessor must be a string");}if(!0!==b.hasField(a))throw Error("Invalid Parameter");e=c.toNumber(b.field(a));b.setField(a,"++"===d?e+1:e-1)}return!1===g?e:"++"===d?e+1:e-1},assignmember:function(b,a,d,g){if(c.isArray(b)){if(!c.isNumber(a))throw Error("Invalid Parameter");if(0>a&&(a=b.length+a),0>a||a>b.length)throw Error("Assignment outside of array bounds");if(a===b.length&&"\x3d"!==d)throw Error("Invalid Parameter");
b[a]=this.assign(g,d,b[a])}else{if(b instanceof r){if(!1===c.isString(a))throw Error("Dictionary accessor must be a string");}else{if(!(b instanceof y))throw c.isImmutableArray(b)?Error("Array is Immutable"):Error("Invalid Parameter");if(!1===c.isString(a))throw Error("Feature accessor must be a string");}if(!0===b.hasField(a))b.setField(a,this.assign(g,d,b.field(a)));else{if("\x3d"!==d)throw Error("Invalid Parameter");b.setField(a,this.assign(g,d,null))}}},member:function(b,a){if(null===b)throw Error(h.nodeErrorMessage("MemberExpression",
"RUNTIME","NOTFOUND"));if(b instanceof r||b instanceof y){if(c.isString(a))return b.field(a);throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"));}if(b instanceof da){if(c.isString(a))return ja(b,a,"MemberExpression");throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"));}if(c.isArray(b)){if(c.isNumber(a)&&isFinite(a)&&Math.floor(a)===a){if(0>a&&(a=b.length+a),a>=b.length||0>a)throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","OUTOFBOUNDS"));
return b[a]}throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"));}if(c.isString(b)){if(c.isNumber(a)&&isFinite(a)&&Math.floor(a)===a){if(0>a&&(a=b.length+a),a>=b.length||0>a)throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","OUTOFBOUNDS"));return b[a]}throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"));}if(c.isImmutableArray(b)&&c.isNumber(a)&&isFinite(a)&&Math.floor(a)===a){if(0>a&&(a=b.length()+a),a>=b.length()||0>a)throw Error(h.nodeErrorMessage("MemberExpression",
"RUNTIME","OUTOFBOUNDS"));return b.get(a)}throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"));},callfunc:function(b,a,d){return b instanceof c.NativeFunction?b.fn(d,a):b instanceof c.SizzleFunction?b.fn.apply(this,a):b.apply(this,a)}};p.compileScript=function(b,a){void 0===a&&(a=null);null===a&&(a={vars:{},customfunctions:{}});a={globalScope:ka(a.vars,l,a.customfunctions),localScope:null,console:J,symbols:{symbolCounter:0}};b=f(a,b.body[0].body);""===b&&(b="lc.voidOperation;");
a={lc:c,lang:N,postProcess:function(a){if(a instanceof c.ReturnResult&&(a=a.value),a instanceof c.ImplicitResult&&(a=a.value),a===c.voidOperation&&(a=null),a===c.breakResult)throw Error("Cannot return BREAK");if(a===c.continueResult)throw Error("Cannot return CONTINUE");if(c.isFunctionParameter(a))throw Error("Cannot return FUNCTION");return a},prepare:function(a,b){b||(b=new W(102100));var c=a.vars,d=a.customfunctions,f=new P;c||(c={});d||(d={});var g=new r({newline:"\n",tab:"\t",singlequote:"'",
doublequote:'"',forwardslash:"/",backwardslash:"\\"});g.immutable=!1;f._SymbolsMap={textformatting:1,infinity:1,pi:1};f.textformatting=g;f.infinity=Number.POSITIVE_INFINITY;f.pi=Math.PI;for(var h in d)f[h]=d[h],f._SymbolsMap[h]=1;for(h in c)f._SymbolsMap[h]=1,c[h]instanceof R?f[h]=new y(c[h]):f[h]=c[h];return{spatialReference:b,globalScope:f,localScope:null,console:a.console?a.console:J,symbols:{symbolCounter:0},depthCounter:1,applicationCache:void 0===a.applicationCache?null:a.applicationCache}}};
return(new Function("context","spatialReference","var runtimeCtx\x3dthis.prepare(context, spatialReference);\n var lc \x3d this.lc;  var lang \x3d this.lang; var gscope\x3druntimeCtx.globalScope; \n function mainBody() {\n var lastStatement\x3dlc.voidOperation;\n "+b+"\n return lastStatement; } \n return this.postProcess(mainBody());")).bind(a)}});