//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ./Symbol3DLayer ./support/Symbol3DHalo ./support/materialUtils ../core/accessorSupport/decorators".split(" "),function(b,l,f,c,d,g,h,k,a){b=e=function(b){function a(a){a=b.call(this)||this;return a.font=null,a.halo=null,a.material=null,a.size=void 0,a.text=void 0,a.type="text",a}return f(a,b),a.prototype.writeFont=function(a,b){a&&(b.font=d.clone(a))},a.prototype.clone=function(){return new e({enabled:this.enabled,
elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),font:this.font&&d.clone(this.font),halo:this.halo&&d.clone(this.halo),material:this.material&&this.material.clone(),size:this.size,text:this.text})},a}(a.declared(g));c([a.property()],b.prototype,"font",void 0);c([a.writer("font")],b.prototype,"writeFont",null);c([a.property({type:h["default"],json:{write:!0}})],b.prototype,"halo",void 0);c([a.property()],b.prototype,"material",void 0);c([a.property(k.screenSizeProperty)],b.prototype,"size",
void 0);c([a.property({json:{write:!0}})],b.prototype,"text",void 0);c([a.property()],b.prototype,"type",void 0);b=e=c([a.subclass("esri.symbols.TextSymbol3DLayer")],b);var e;return b});