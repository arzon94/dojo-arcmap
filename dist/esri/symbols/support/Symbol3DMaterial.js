//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ./materialUtils ../../core/accessorSupport/decorators".split(" "),function(a,c,f,d,g,h,b){Object.defineProperty(c,"__esModule",{value:!0});a=e=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}return f(b,a),b.prototype.clone=function(){return new e({color:this.color?this.color.clone():null,colorMixMode:this.colorMixMode})},b}(b.declared(g));d([b.property(h.colorAndTransparencyProperty)],
a.prototype,"color",void 0);d([b.property({type:String,json:{read:!0,write:!0}})],a.prototype,"colorMixMode",void 0);a=e=d([b.subclass("esri.symbols.support.Symbol3DMaterial")],a);c.Symbol3DMaterial=a;c["default"]=a;var e});