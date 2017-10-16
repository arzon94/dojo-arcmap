//>>built
define("require exports ../geometry/Polygon ../Graphic ../geometry/Polyline ../geometry/Point ../geometry/Extent ../geometry/Multipoint ../geometry/SpatialReference ./languageUtils ./treeAnalysis ./Dictionary ./Feature ./functions/date ./functions/string ./functions/maths ./functions/geometry ./functions/stats ./ImmutablePathArray ./ImmutablePointArray ../geometry/Geometry".split(" "),function(la,p,Q,R,S,T,U,V,W,c,h,r,y,X,Y,Z,aa,ba,C,ca,da){function m(a,b,d){try{return d(a,null,b)}catch(g){throw g;
}}function f(a,b){try{switch(b.type){case "EmptyStatement":return"lc.voidOperation";case "VariableDeclarator":return ea(a,b);case "VariableDeclaration":for(var d=[],g=0;g<b.declarations.length;g++)d.push(f(a,b.declarations[g]));return d.join("\n")+" \n lastStatement\x3d  lc.voidOperation; \n";case "BlockStatement":return K(a,b);case "FunctionDeclaration":var c=b.id.name.toLowerCase(),t={applicationCache:void 0===a.applicationCache?null:a.applicationCache,spatialReference:a.spatialReference,console:a.console,
symbols:a.symbols,localScope:{_SymbolsMap:{}},depthCounter:a.depthCounter+1,globalScope:a.globalScope};if(64<t.depthCounter)throw Error("Exceeded maximum function depth");for(var d="new lc.SizzleFunction( lang.functionDepthchecker(function() { var lastStatement \x3d lc.voidOperation; var lscope \x3d [];\n ",A=0;A<b.params.length;A++){var l=b.params[A].name.toLowerCase(),D=G(l,a);t.localScope._SymbolsMap[l]=D;d+="lscope['"+D+"']\x3darguments["+A.toString()+"];\n"}(d+=K(t,b.body)+"\n return lastStatement; }, runtimeCtx))",
d+="\n lastStatement \x3d lc.voidOperation; \n",void 0!==a.globalScope[c])?g="gscope['"+c+"']\x3d"+d:void 0!==a.globalScope._SymbolsMap[c]?g="gscope['"+a.globalScope._SymbolsMap[c]+"']\x3d"+d:(D=G(c,a),g=(a.globalScope._SymbolsMap[c]=D,"gscope['"+D+"']\x3d"+d));return g;case "ReturnStatement":var L;L=null===b.argument?"return lc.voidOperation;":"return "+f(a,b.argument)+";";return L;case "IfStatement":if("AssignmentExpression"===b.test.type||"UpdateExpression"===b.test.type)throw Error(h.nodeErrorMessage(b.test,
"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));var fa=f(a,b.test),m=B(a),v="var "+m+" \x3d "+fa+";\n if ("+m+" \x3d\x3d\x3d true) {\n"+M(a,b.consequent)+"\n }\n";return v+=null!==b.alternate?"else if ("+m+"\x3d\x3d\x3dfalse)   { \n"+M(a,b.alternate)+"}\n":"else if ("+m+"\x3d\x3d\x3dfalse) { \n lastStatement \x3d lc.voidOperation;\n }\n",v+="else { lang.error({type: '"+b.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION'); \n}\n";case "ExpressionStatement":return"AssignmentExpression"===b.expression.type?
"lastStatement \x3d lc.voidOperation; "+f(a,b.expression)+" \n ":"lastStatement \x3d "+f(a,b.expression)+";";case "AssignmentExpression":return ga(a,b);case "UpdateExpression":return ha(a,b);case "BreakStatement":return"break;";case "ContinueStatement":return"continue;";case "ForStatement":d="lastStatement \x3d lc.voidOperation; \n";null!==b.init&&(d+=f(a,b.init));var p=B(a),r=B(a);return d+="var "+p+" \x3d true;",d+="\n do { ",null!==b.update&&(d+=" if ("+p+"\x3d\x3d\x3dfalse) {\n "+f(a,b.update)+
"  \n}\n "+p+"\x3dfalse; \n"),null!==b.test&&(d+="var "+r+" \x3d "+f(a,b.test)+";",d+="if ("+r+"\x3d\x3d\x3dfalse) { break; } else if ("+r+"!\x3d\x3dtrue) { lang.error({type: '"+b.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION');   }\n"),d+=f(a,b.body),null!==b.update&&(d+="\n "+f(a,b.update)),d+="\n"+p+" \x3d true; \n} while(true);  lastStatement \x3d lc.voidOperation;";case "ForInStatement":var w=B(a),n=B(a),u=B(a),k="var "+w+" \x3d "+f(a,b.right)+";\n";"VariableDeclaration"===b.left.type&&
(k+=f(a,b.left));var x="VariableDeclaration"===b.left.type?b.left.declarations[0].id.name:b.left.name,x=x.toLowerCase(),d="";return null!==a.localScope&&(void 0!==a.localScope[x]?d="lscope['"+x+"']":void 0!==a.localScope._SymbolsMap[x]&&(d="lscope['"+a.localScope._SymbolsMap[x]+"']")),""===d&&(void 0!==a.globalScope[x]?d="gscope['"+x+"']":void 0!==a.globalScope._SymbolsMap[x]&&(d="gscope['"+a.globalScope._SymbolsMap[x]+"']")),k+="if ("+w+"\x3d\x3d\x3dnull) {  lastStatement \x3d lc.voidOperation; }\n ",
k+="else if (lc.isArray("+w+") || lc.isString("+w+")) {",k+="var "+n+"\x3d"+w+".length; \n",k+="for(var "+u+"\x3d0; "+u+"\x3c"+n+"; "+u+"++) {\n",k+=d+"\x3d"+u+";\n",k+=f(a,b.body),k+="\n}\n",k+=" lastStatement \x3d lc.voidOperation; \n",k+=" \n}\n",k+="else if (lc.isImmutableArray("+w+")) {",k+="var "+n+"\x3d"+w+".length(); \n",k+="for(var "+u+"\x3d0; "+u+"\x3c"+n+"; "+u+"++) {\n",k+=d+"\x3d"+u+";\n",k+=f(a,b.body),k+="\n}\n",k+=" lastStatement \x3d lc.voidOperation; \n",k+=" \n}\n",k+="else if (( "+
w+" instanceof lang.Dictionary) || ( "+w+" instanceof lang.Feature)) {",k+="var "+n+"\x3d"+w+".keys(); \n",k+="for(var "+u+"\x3d0; "+u+"\x3c"+n+".length; "+u+"++) {\n",k+=d+"\x3d"+n+"["+u+"];\n",k+=f(a,b.body),k+="\n}\n",k+=" lastStatement \x3d lc.voidOperation; \n",k+=" \n}\n",k+="else { lastStatement \x3d lc.voidOperation; } \n";case "Identifier":return ia(a,b);case "MemberExpression":var y;try{d=void 0,y=(d=!0===b.computed?f(a,b.property):"'"+b.property.name+"'","lang.member("+f(a,b.object)+","+
d+")")}catch(q){throw q;}return y;case "Literal":return null===b.value||void 0===b.value?"null":JSON.stringify(b.value);case "ThisExpression":throw Error(h.nodeErrorMessage(b,"RUNTIME","NOTSUPPORTED"));case "CallExpression":try{if("Identifier"!==b.callee.type)throw Error(h.nodeErrorMessage(b,"RUNTIME","ONLYNODESSUPPORTED"));var z=b.callee.name.toLowerCase(),g="";if(null!==a.localScope&&(void 0!==a.localScope[z]?g="lscope['"+z+"']":void 0!==a.localScope._SymbolsMap[z]&&(g="lscope['"+a.localScope._SymbolsMap[z]+
"']")),""===g&&(void 0!==a.globalScope[z]?g="gscope['"+z+"']":void 0!==a.globalScope._SymbolsMap[z]&&(g="gscope['"+a.globalScope._SymbolsMap[z]+"']")),""!==g){c="[";for(t=0;t<b.arguments.length;t++)0<t&&(c+=", "),c+=f(a,b.arguments[t]);d=(c+="]","lang.callfunc("+g+","+c+",runtimeCtx)")}else throw Error(h.nodeErrorMessage(b,"RUNTIME","NOTFOUND"));}catch(q){throw q;}return d;case "UnaryExpression":var C;try{C="lang.unary("+f(a,b.argument)+",'"+b.operator+"')"}catch(q){throw q;}return C;case "BinaryExpression":var E;
try{E="lang.binary("+f(a,b.left)+","+f(a,b.right)+",'"+b.operator+"')"}catch(q){throw q;}return E;case "LogicalExpression":var F;try{if("AssignmentExpression"===b.left.type||"UpdateExpression"===b.left.type)throw Error(h.nodeErrorMessage(b.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===b.right.type||"UpdateExpression"===b.right.type)throw Error(h.nodeErrorMessage(b.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("\x26\x26"===b.operator||"||"===b.operator)F=
"(lang.logicalCheck("+f(a,b.left)+") "+b.operator+" lang.logicalCheck("+f(a,b.right)+"))";else throw Error(h.nodeErrorMessage("LogicalExpression","RUNTIME","ONLYORORAND"));}catch(q){throw q;}return F;case "ConditionalExpression":throw Error(h.nodeErrorMessage(b,"RUNTIME","NOTSUPPORTED"));case "ArrayExpression":try{d=[];for(g=0;g<b.elements.length;g++)"Literal"===b.elements[g].type?d.push(f(a,b.elements[g])):d.push("lang.aCheck("+f(a,b.elements[g])+",'ArrayExpression')");A="["+d.join(",")+"]"}catch(q){throw q;
}return A;case "ObjectExpression":d="lang.dictionary([";for(g=0;g<b.properties.length;g++){var H=b.properties[g],I="Identifier"===H.key.type?"'"+H.key.name+"'":f(a,H.key),J=f(a,H.value);0<g&&(d+=",");d+="lang.strCheck("+I+",'ObjectExpression'),lang.aCheck("+J+", 'ObjectExpression')"}return d+="])";case "Property":throw Error("Should not get here");case "Array":throw Error(h.nodeErrorMessage(b,"RUNTIME","NOTSUPPORTED"));default:throw Error(h.nodeErrorMessage(b,"RUNTIME","UNREOGNISED"));}}catch(q){throw q;
}}function ha(a,b){var d=null,c="";if("MemberExpression"===b.argument.type)return d=f(a,b.argument.object),c=!0===b.argument.computed?f(a,b.argument.property):"'"+b.argument.property.name+"'","lang.memberupdate("+d+","+c+",'"+b.operator+"',"+b.prefix+")";if(d=b.argument.name.toLowerCase(),null!==a.localScope){if(void 0!==a.localScope[d])return"lang.update(lscope, '"+d+"','"+b.operator+"',"+b.prefix+")";if(void 0!==a.localScope._SymbolsMap[d])return"lang.update(lscope, '"+a.localScope._SymbolsMap[d]+
"','"+b.operator+"',"+b.prefix+")"}if(void 0!==a.globalScope[d])return"lang.update(gscope, '"+d+"','"+b.operator+"',"+b.prefix+")";if(void 0!==a.globalScope._SymbolsMap[d])return"lang.update(gscope, '"+a.globalScope._SymbolsMap[d]+"','"+b.operator+"',"+b.prefix+")";throw Error("Variable not recognised");}function ga(a,b){var d=f(a,b.right),c=null,e="";if("MemberExpression"===b.left.type)return c=f(a,b.left.object),e=!0===b.left.computed?f(a,b.left.property):"'"+b.left.property.name+"'","lang.assignmember("+
c+","+e+",'"+b.operator+"',"+d+");";if(c=b.left.name.toLowerCase(),null!==a.localScope){if(void 0!==a.localScope[c])return"lscope['"+c+"']\x3dlang.assign("+d+",'"+b.operator+"', lscope['"+c+"']); ";if(void 0!==a.localScope._SymbolsMap[c])return"lscope['"+a.localScope._SymbolsMap[c]+"']\x3dlang.assign("+d+",'"+b.operator+"', lscope['"+a.localScope._SymbolsMap[c]+"']); "}if(void 0!==a.globalScope[c])return"gscope['"+c+"']\x3dlang.assign("+d+",'"+b.operator+"', gscope['"+c+"']); ";if(void 0!==a.globalScope._SymbolsMap[c])return"gscope['"+
a.globalScope._SymbolsMap[c]+"']\x3dlang.assign("+d+",'"+b.operator+"', gscope['"+a.globalScope._SymbolsMap[c]+"']); ";throw Error("Variable not recognised");}function M(a,b){return"BlockStatement"===b.type?f(a,b):"ReturnStatement"===b.type?f(a,b):"BreakStatement"===b.type?f(a,b):"ContinueStatement"===b.type?f(a,b):"UpdateExpression"===b.type?"lastStatement \x3d "+f(a,b)+";":"ExpressionStatement"===b.type?f(a,b):"ObjectExpression"===b.type?"lastStatement \x3d "+f(a,b)+";":f(a,b)}function K(a,b){for(var d=
"",c=0;c<b.body.length;c++)d+="ReturnStatement"===b.body[c].type?f(a,b.body[c])+" \n":"BreakStatement"===b.body[c].type?f(a,b.body[c])+" \n":"ContinueStatement"===b.body[c].type?f(a,b.body[c])+" \n":"UpdateExpression"===b.body[c].type?"lastStatement \x3d "+f(a,b.body[c])+"; \n":"ObjectExpression"===b.body[c].type?"lastStatement \x3d "+f(a,b.body[c])+"; \n":f(a,b.body[c])+" \n";return d}function ea(a,b){var d=null===b.init?null:f(a,b.init);d===c.voidOperation&&(d=null);b=b.id.name.toLowerCase();if(null!==
a.localScope){if(void 0!==a.localScope[b])return"lscope['"+b+"']\x3d"+d+";";if(void 0!==a.localScope._SymbolsMap[b])return"lscope['"+a.localScope._SymbolsMap[b]+"']\x3d"+d+";";var g=G(b,a);return a.localScope._SymbolsMap[b]=g,"lscope['"+g+"']\x3d"+d+";"}if(void 0!==a.globalScope[b])return"gscope['"+b+"']\x3d"+d+";";if(void 0!==a.globalScope._SymbolsMap[b])return"gscope['"+a.globalScope._SymbolsMap[b]+"']\x3d"+d+";";g=G(b,a);return a.globalScope._SymbolsMap[b]=g,"gscope['"+g+"']\x3d"+d+";"}function ja(a,
b,d){switch(b=b.toLowerCase()){case "hasz":return a=a.hasZ,void 0===a?!1:a;case "hasm":return a=a.hasM,void 0===a?!1:a;case "spatialreference":return b=a.spatialReference._arcadeCacheId,void 0===b&&(d=!0,Object.freeze&&Object.isFrozen(a.spatialReference)&&(d=!1),d&&(v++,a.spatialReference._arcadeCacheId=v,b=v)),a=new r({wkt:a.spatialReference.wkt,wkid:a.spatialReference.wkid}),void 0!==b&&(a._arcadeCacheId="SPREF"+b.toString()),a}switch(a.type){case "extent":switch(b){case "xmin":case "xmax":case "ymin":case "ymax":case "zmin":case "zmax":case "mmin":case "mmax":return a=
a[b],void 0!==a?a:null;case "type":return"Extent"}break;case "polygon":switch(b){case "rings":return b=c.isVersion4?a.cache._arcadeCacheId:a.getCacheValue("_arcadeCacheId"),void 0===b&&(v++,b=v,c.isVersion4?a.cache._arcadeCacheId=b:a.setCacheValue("_arcadeCacheId",b)),a=new C(a.rings,a.spatialReference,!0===a.hasZ,!0===a.hasM,b);case "type":return"Polygon"}break;case "point":switch(b){case "x":case "y":case "z":case "m":return void 0!==a[b]?a[b]:null;case "type":return"Point"}break;case "polyline":switch(b){case "paths":return b=
c.isVersion4?a.cache._arcadeCacheId:a.getCacheValue("_arcadeCacheId"),void 0===b&&(v++,b=v,c.isVersion4?a.cache._arcadeCacheId=b:a.setCacheValue("_arcadeCacheId",b)),a=new C(a.paths,a.spatialReference,!0===a.hasZ,!0===a.hasM,b);case "type":return"Polyline"}break;case "multipoint":switch(b){case "points":return b=c.isVersion4?a.cache._arcadeCacheId:a.getCacheValue("_arcadeCacheId"),void 0===b&&(v++,b=v,c.isVersion4?a.cache._arcadeCacheId=b:a.setCacheValue("_arcadeCacheId",b)),a=new ca(a.points,a.spatialReference,
!0===a.hasZ,!0===a.hasM,b,1);case "type":return"Multipoint"}}throw Error(h.nodeErrorMessage(d,"RUNTIME","PROPERTYNOTFOUND"));}function ia(a,b){try{var d=b.name.toLowerCase();if(null!==a.localScope){if(void 0!==a.localScope[d])return"lscope['"+d+"']";if(void 0!==a.localScope._SymbolsMap[d])return"lscope['"+a.localScope._SymbolsMap[d]+"']"}if(void 0!==a.globalScope[d])return"gscope['"+d+"']";if(void 0!==a.globalScope._SymbolsMap[d])return"gscope['"+a.globalScope._SymbolsMap[d]+"']";throw Error(h.nodeErrorMessage(b,
"RUNTIME","VARIABLENOTFOUND"));}catch(g){throw g;}}function E(a){return null===a?"":c.isArray(a)?"Array":c.isImmutableArray(a)?"Array":c.isDate(a)?"Date":c.isString(a)?"String":c.isBoolean(a)?"Boolean":c.isNumber(a)?"Number":a instanceof r?"Dictionary":a instanceof y?"Feature":a instanceof T?"Point":a instanceof Q?"Polygon":a instanceof S?"Polyline":a instanceof V?"Multipoint":a instanceof U?"Extent":c.isFunctionParameter(a)?"Function":a===c.voidOperation?"":"number"==typeof a&&isNaN(a)?"Number":
"Unrecognised Type"}function F(a,b,d,g){try{if(c.equalityTest(b[d],g))return b[d+1];var e=b.length-d;return 1===e?b[d]:2===e?null:3===e?b[d+2]:F(a,b,d+2,g)}catch(t){throw t;}}function I(a,b,d,g){try{if(!0===g)return b[d+1];if(3===b.length-d)return b[d+2];var e=b[d+2];if(!1===c.isBoolean(e))throw Error("WHEN needs boolean test conditions");return I(a,b,d+2,e)}catch(t){throw t;}}function n(a,b){var d=a.length,c=Math.floor(d/2);if(0===d)b=[];else if(1===d)b=[a[0]];else{var e=n(a.slice(0,c),b);a=n(a.slice(c,
d),b);for(d=[];0<e.length||0<a.length;)0<e.length&&0<a.length?(c=b(e[0],a[0]),isNaN(c)&&(c=0),0>=c?(d.push(e[0]),e=e.slice(1)):(d.push(a[0]),a=a.slice(1))):0<e.length?(d.push(e[0]),e=e.slice(1)):0<a.length&&(d.push(a[0]),a=a.slice(1));b=d}return b}function G(a,b){return b.symbols.symbolCounter++,"_T"+b.symbols.symbolCounter.toString()}function B(a){return a.symbols.symbolCounter++,"_Tvar"+a.symbols.symbolCounter.toString()}function ka(a,b,d){var c={};a||(a={});d||(d={});c._SymbolsMap={};c.textformatting=
1;c.infinity=1;c.pi=1;for(var e in b)c[e]=1;for(e in d)c[e]=1;for(e in a)c[e]=1;return c}function J(a){}Object.defineProperty(p,"__esModule",{value:!0});var v=0,l={};X.registerFunctions(l,m);Y.registerFunctions(l,m);Z.registerFunctions(l,m);aa.registerFunctions(l,m);ba.registerFunctions(l,m);l["typeof"]=function(a,b){return m(a,b,function(a,b,e){c.pcCheck(e,1,1);a=E(e[0]);if("Unrecognised Type"===a)throw Error("Unrecognised Type");return a})};l.iif=function(a,b){try{return m(a,b,function(a,b,e){if(c.pcCheck(e,
3,3),!1===c.isBoolean(e[0]))throw Error("IF Function must have a boolean test condition");return e[0]?e[1]:e[2]})}catch(d){throw d;}};l.decode=function(a,b){try{return m(a,b,function(b,c,e){if(2>e.length)throw Error("Missing Parameters");if(2===e.length)return e[1];if(0===(e.length-1)%2)throw Error("Must have a default value result.");return F(a,e,1,e[0])})}catch(d){throw d;}};l.when=function(a,b){try{return m(a,b,function(b,g,e){if(3>e.length)throw Error("Missing Parameters");if(0===e.length%2)throw Error("Must have a default value result.");
b=e[0];if(!1===c.isBoolean(b))throw Error("WHEN needs boolean test conditions");return I(a,e,0,b)})}catch(d){throw d;}};l.top=function(a,b){return m(a,b,function(b,a,e){if(c.pcCheck(e,2,2),c.isArray(e[0]))return c.toNumber(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,c.toNumber(e[1]));if(c.isImmutableArray(e[0]))return c.toNumber(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,c.toNumber(e[1]));throw Error("Top cannot accept this parameter type");})};l.first=function(a,b){return m(a,b,function(b,
a,e){return c.pcCheck(e,1,1),c.isArray(e[0])?0===e[0].length?null:e[0][0]:c.isImmutableArray(e[0])?0===e[0].length()?null:e[0].get(0):null})};l.sort=function(a,b){return m(a,b,function(b,a,e){c.pcCheck(e,1,2);a=e[0];if(c.isImmutableArray(a)&&(a=a.toArray()),!1===c.isArray(a))throw Error("Illegal Argument");if(1<e.length){if(!1===c.isFunctionParameter(e[1]))throw Error("Illegal Argument");return a=n(a,function(a,d){return N.callfunc(e[1],[a,d],b)})}if(0===a.length)return[];for(var d={},g=0;g<a.length;g++){var f=
E(a[g]);""!==f&&(d[f]=!0)}if(!0===d.Array||!0===d.Dictionary||!0===d.Feature||!0===d.Point||!0===d.Polygon||!0===d.Polyline||!0===d.Multipoint||!0===d.Extent||!0===d.Function)return a.slice(0);var g=0,f="",h;for(h in d)g++,f=h;return a=1<g||"String"===f?n(a,function(a,b){if(null===a||void 0===a||a===c.voidOperation)return null===b||void 0===b||b===c.voidOperation?0:1;if(null===b||void 0===b||b===c.voidOperation)return-1;a=c.toString(a);b=c.toString(b);return b>a?-1:a===b?0:1}):"Number"===f?n(a,function(a,
b){return a-b}):"Boolean"===f?n(a,function(a,b){return a===b?0:b?-1:1}):"Date"===f?n(a,function(a,b){return b-a}):a.slice(0)})};for(var O in l)l[O]=new c.NativeFunction(l[O]);var P=function(){};P.prototype=l;p.functionHelper={fixSpatialReference:c.fixSpatialReference,parseArguments:function(a,b){for(var d=[],c=0;c<b.arguments.length;c++)d.push(f(a,b.arguments[c]));return d},standardFunction:m};p.executeScript=function(a,b,d){return a(b,d)};p.extractFieldLiterals=function(a,b){return void 0===b&&(b=
!1),h.findFieldLiterals(a,b)};p.validateScript=function(a,b){return h.validateScript(a,b,"simple")};p.referencesMember=function(a,b){return h.referencesMember(a,b)};p.referencesFunction=function(a,b){return h.referencesFunction(a,b)};var N={error:function(a,b,d){throw Error(h.nodeErrorMessage(a,b,d));},functionDepthchecker:function(a,b){return function(){if(b.depthCounte++,64<b.depthCounter)throw Error("Exceeded maximum function depth");var d=a.apply(this,arguments);return b.depthCounte--,d}},aCheck:function(a,
b){if(c.isFunctionParameter(a))throw Error(h.nodeErrorMessage({type:b},"RUNTIME","FUNCTIONCONTEXTILLEGAL"));return a===c.voidOperation?null:a},Dictionary:r,Feature:y,dictionary:function(a){for(var b={},d=0;d<a.length;d+=2){if(c.isFunctionParameter(a[d+1]))throw Error("Illegal Argument");if(!1===c.isString(a[d]))throw Error("Illegal Argument");a[d+1]===c.voidOperation?b[a[d].toString()]=null:b[a[d].toString()]=a[d+1]}a=new r(b);return a.immutable=!1,a},strCheck:function(a,b){if(!1===c.isString(a))throw Error("Illegal Argument");
return a},unary:function(a,b){if(c.isBoolean(a)){if("!"===b)return!a;if("-"===b)return-1*c.toNumber(a);if("+"===b)return 1*c.toNumber(a);throw Error(h.nodeErrorMessage({type:"UnaryExpression"},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));}if("-"===b)return-1*c.toNumber(a);if("+"===b)return 1*c.toNumber(a);throw Error(h.nodeErrorMessage({type:"UnaryExpression"},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));},logicalCheck:function(a){if(!1===c.isBoolean(a))throw Error(h.nodeErrorMessage("LogicalExpression","RUNTIME",
"ONLYORORAND"));return a},logical:function(a,b,d){if(!c.isBoolean(a)||!c.isBoolean(b))throw Error(h.nodeErrorMessage("LogicalExpression","RUNTIME","ONLYORORAND"));switch(d){case "||":return a||b;case "\x26\x26":return a&&b;default:throw Error(h.nodeErrorMessage("LogicalExpression","RUNTIME","ONLYORORAND"));}},binary:function(a,b,d){switch(d){case "\x3d\x3d":return c.equalityTest(a,b);case "\x3d":return c.equalityTest(a,b);case "!\x3d":return!c.equalityTest(a,b);case "\x3c":return c.greaterThanLessThan(a,
b,d);case "\x3e":return c.greaterThanLessThan(a,b,d);case "\x3c\x3d":return c.greaterThanLessThan(a,b,d);case "\x3e\x3d":return c.greaterThanLessThan(a,b,d);case "+":return c.isString(a)||c.isString(b)?c.toString(a)+c.toString(b):c.toNumber(a)+c.toNumber(b);case "-":return c.toNumber(a)-c.toNumber(b);case "*":return c.toNumber(a)*c.toNumber(b);case "/":return c.toNumber(a)/c.toNumber(b);case "%":return c.toNumber(a)%c.toNumber(b);default:throw Error(h.nodeErrorMessage({type:"BinaryExpression"},"RUNTIME",
"OPERATORNOTRECOGNISED"));}},assign:function(a,b,d){switch(b){case "\x3d":return a===c.voidOperation?null:a;case "/\x3d":return c.toNumber(d)/c.toNumber(a);case "*\x3d":return c.toNumber(d)*c.toNumber(a);case "-\x3d":return c.toNumber(d)-c.toNumber(a);case "+\x3d":return c.isString(d)||c.isString(a)?c.toString(d)+c.toString(a):c.toNumber(d)+c.toNumber(a);case "%\x3d":return c.toNumber(d)%c.toNumber(a);default:throw Error(h.nodeErrorMessage("AssignmentExpression","RUNTIME","OPERATORNOTRECOGNISED"));
}},update:function(a,b,d,g){var e=c.toNumber(a[b]);return a[b]="++"===d?e+1:e-1,!1===g?e:"++"===d?e+1:e-1},memberupdate:function(a,b,d,g){var e;if(c.isArray(a)){if(!c.isNumber(b))throw Error("Invalid Parameter");if(0>b&&(b=a.length+b),0>b||b>=a.length)throw Error("Assignment outside of array bounds");e=c.toNumber(a[b]);a[b]="++"===d?e+1:e-1}else{if(a instanceof r){if(!1===c.isString(b))throw Error("Dictionary accessor must be a string");}else{if(!(a instanceof y))throw c.isImmutableArray(a)?Error("Array is Immutable"):
Error("Invalid Parameter");if(!1===c.isString(b))throw Error("Feature accessor must be a string");}if(!0!==a.hasField(b))throw Error("Invalid Parameter");e=c.toNumber(a.field(b));a.setField(b,"++"===d?e+1:e-1)}return!1===g?e:"++"===d?e+1:e-1},assignmember:function(a,b,d,g){if(c.isArray(a)){if(!c.isNumber(b))throw Error("Invalid Parameter");if(0>b&&(b=a.length+b),0>b||b>a.length)throw Error("Assignment outside of array bounds");if(b===a.length&&"\x3d"!==d)throw Error("Invalid Parameter");a[b]=this.assign(g,
d,a[b])}else{if(a instanceof r){if(!1===c.isString(b))throw Error("Dictionary accessor must be a string");}else{if(!(a instanceof y))throw c.isImmutableArray(a)?Error("Array is Immutable"):Error("Invalid Parameter");if(!1===c.isString(b))throw Error("Feature accessor must be a string");}if(!0===a.hasField(b))a.setField(b,this.assign(g,d,a.field(b)));else{if("\x3d"!==d)throw Error("Invalid Parameter");a.setField(b,this.assign(g,d,null))}}},member:function(a,b){if(null===a)throw Error(h.nodeErrorMessage("MemberExpression",
"RUNTIME","NOTFOUND"));if(a instanceof r||a instanceof y){if(c.isString(b))return a.field(b);throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"));}if(a instanceof da){if(c.isString(b))return ja(a,b,"MemberExpression");throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"));}if(c.isArray(a)){if(c.isNumber(b)&&isFinite(b)&&Math.floor(b)===b){if(0>b&&(b=a.length+b),b>=a.length||0>b)throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","OUTOFBOUNDS"));
return a[b]}throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"));}if(c.isString(a)){if(c.isNumber(b)&&isFinite(b)&&Math.floor(b)===b){if(0>b&&(b=a.length+b),b>=a.length||0>b)throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","OUTOFBOUNDS"));return a[b]}throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"));}if(c.isImmutableArray(a)&&c.isNumber(b)&&isFinite(b)&&Math.floor(b)===b){if(0>b&&(b=a.length()+b),b>=a.length()||0>b)throw Error(h.nodeErrorMessage("MemberExpression",
"RUNTIME","OUTOFBOUNDS"));return a.get(b)}throw Error(h.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"));},callfunc:function(a,b,d){return a instanceof c.NativeFunction?a.fn(d,b):a instanceof c.SizzleFunction?a.fn.apply(this,b):a.apply(this,b)}};p.compileScript=function(a,b){void 0===b&&(b=null);null===b&&(b={vars:{},customfunctions:{}});b={globalScope:ka(b.vars,l,b.customfunctions),localScope:null,console:J,symbols:{symbolCounter:0}};a=f(b,a.body[0].body);""===a&&(a="lc.voidOperation;");
b={lc:c,lang:N,postProcess:function(a){if(a instanceof c.ReturnResult&&(a=a.value),a instanceof c.ImplicitResult&&(a=a.value),a===c.voidOperation&&(a=null),a===c.breakResult)throw Error("Cannot return BREAK");if(a===c.continueResult)throw Error("Cannot return CONTINUE");if(c.isFunctionParameter(a))throw Error("Cannot return FUNCTION");return a},prepare:function(a,b){b||(b=new W(102100));var c=a.vars,d=a.customfunctions,f=new P;c||(c={});d||(d={});var g=new r({newline:"\n",tab:"\t",singlequote:"'",
doublequote:'"',forwardslash:"/",backwardslash:"\\"});g.immutable=!1;f._SymbolsMap={textformatting:1,infinity:1,pi:1};f.textformatting=g;f.infinity=Number.POSITIVE_INFINITY;f.pi=Math.PI;for(var h in d)f[h]=d[h],f._SymbolsMap[h]=1;for(h in c)f._SymbolsMap[h]=1,c[h]instanceof R?f[h]=new y(c[h]):f[h]=c[h];return{spatialReference:b,globalScope:f,localScope:null,console:a.console?a.console:J,symbols:{symbolCounter:0},depthCounter:1,applicationCache:void 0===a.applicationCache?null:a.applicationCache}}};
return(new Function("context","spatialReference","var runtimeCtx\x3dthis.prepare(context, spatialReference);\n var lc \x3d this.lc;  var lang \x3d this.lang; var gscope\x3druntimeCtx.globalScope; \n function mainBody() {\n var lastStatement\x3dlc.voidOperation;\n "+a+"\n return lastStatement; } \n return this.postProcess(mainBody());")).bind(b)}});