//>>built
define(["require","exports","dojo/has"],function(m,c,k){function e(a,b){return b.isInstanceOf?b.isInstanceOf(a):b instanceof a}function f(a){return a&&a.constructor&&void 0!==a.constructor._meta}function g(a,b){return null!=b&&a&&!e(a,b)}function d(a,b){return 1===arguments.length?d.bind(null,a):(g(a,b)&&(l&&f(b)?console.warn("Assigning an instance of '"+(b.declaredClass||"unknown")+"' which is not a subclass of '"+(a.prototype&&a.prototype.declaredClass||"unknown")+"'"):b=new a(b)),b)}function h(a,
b){return 1===arguments.length?h.bind(null,a):b?Array.isArray(b)?b.map(d.bind(null,a)):[d(a,b)]:b}Object.defineProperty(c,"__esModule",{value:!0});var l=k("dojo-debug-messages");c.isInstanceOf=e;c.ensureDate=function(a){return null==a?a:new Date(a)};c.ensureBoolean=function(a){return!0===a||!1===a?a:!!a};c.ensureString=function(a){return null==a?a:a.toString()};c.ensureNumber=function(a){return null==a?a:parseFloat(a)};c.isClassedType=f;c.requiresType=g;c.ensureType=d;c.ensureArray=h;c["default"]=
d});