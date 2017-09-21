//>>built
define("require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/JSONSupport ./core/lang ./geometry/Point ./views/3d/support/mathUtils ./core/accessorSupport/decorators".split(" "),function(c,m,h,d,k,l,f,g,b){c=e=function(c){function b(a){a=c.call(this)||this;return a.position=null,a.heading=0,a.tilt=0,a.fov=55,a}return h(b,c),b.prototype.getDefaults=function(a){return a.position?void 0:{position:new f([0,0,0])}},b.prototype.normalizeCtorArgs=function(a,b,c,d){return a&&
"object"==typeof a&&("x"in a||Array.isArray(a))?(a={position:a},null!=b&&(a.heading=b),null!=c&&(a.tilt=c),null!=d&&(a.fov=d),a):a},b.prototype.equals=function(a){return a?this.tilt===a.tilt&&this.heading===a.heading&&this.fov===a.fov&&this.position.equals(a.position):!1},b.prototype.clone=function(){return new e({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})},b.prototype.toJSON=function(){var a={position:this.position.toJSON(),heading:this.heading,tilt:this.tilt};
return l.fixJson(a)},b}(b.declared(k));d([b.property({type:f})],c.prototype,"position",void 0);d([b.property(),b.cast(g.cyclicalDeg.normalize)],c.prototype,"heading",void 0);d([b.property(),b.cast(function(b){return g.clamp(b,-180,180)})],c.prototype,"tilt",void 0);d([b.property({json:{read:!1,write:!1}})],c.prototype,"fov",void 0);c=e=d([b.subclass("esri.Camera")],c);var e;return c});