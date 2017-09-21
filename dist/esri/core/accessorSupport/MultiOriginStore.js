//>>built
define(["require","exports","./PropertyOrigin"],function(g,h,f){Object.defineProperty(h,"__esModule",{value:!0});g=function(){function e(){this._propertyOriginMap={};this._originStores=Array(f.OriginId.NUM);this._values={}}return e.prototype.get=function(a,b){return(b=void 0===b?this._values:this._originStores[b])?b[a]:void 0},e.prototype.keys=function(){return Object.keys(this._values)},e.prototype.set=function(a,b,c){void 0===c&&(c=f.OriginId.USER);var d=this._originStores[c];return(d||(d={},this._originStores[c]=
d),d[a]=b,!(a in this._values)||this._propertyOriginMap[a]<=c)?(d=this._values[a],this._values[a]=b,this._propertyOriginMap[a]=c,d!==b):!1},e.prototype.clear=function(a,b){void 0===b&&(b=f.OriginId.USER);var c=this._originStores[b];if(c){var d=c[a];if(delete c[a],a in this._values&&this._propertyOriginMap[a]===b)for(delete this._values[a],--b;0<=b;b--)if((c=this._originStores[b])&&a in c){this._values[a]=c[a];this._propertyOriginMap[a]=b;break}return d}},e.prototype.has=function(a,b){return(b=void 0===
b?this._values:this._originStores[b])?a in b:!1},e.prototype.revert=function(a,b){for(;0<b&&!this.has(a,b);)--b;var c=this._originStores[b],c=c&&c[a],d=this._values[a];return this._values[a]=c,this._propertyOriginMap[a]=b,d!==c},e.prototype.originOf=function(a,b){return this._propertyOriginMap[a]||f.OriginId.DEFAULTS},e.prototype.getAll=function(a){return this._originStores[a]},e}();h["default"]=g});