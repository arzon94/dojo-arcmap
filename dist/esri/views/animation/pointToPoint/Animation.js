//>>built
define("require exports ../easing ./Definition ./Settings ./apex/Path".split(" "),function(e,f,g,k,h,l){Object.defineProperty(f,"__esModule",{value:!0});var m={zoom:0,pan:0,rotate:0};e=function(){function d(a){this.createCamera=a;this.time=0;this.definition=new k.Definition(a);this.path=new l.Path}return d.prototype.update=function(a,b,c){this.definition.update(a,b,c);this.path.update(this.definition,c);this.time=this._applyTimeSettings(this.path.time,c);this.settings=c},d.prototype.cameraAt=function(a,
b){b||(b=this.createCamera());a=Math.min(Math.max(0,a),1);a=this.settings.easing?this.settings.easing(a,1E3*this.time):1<=this.time?g.inOutCoastQuad(a):g.outExpo(a);a=this.path.interpolateComponentsAt(a,m);return b.interpolate(this.definition.source,this.definition.target,a),b},d.prototype._applyTimeSettings=function(a,b){var c=null!=b.speedFactor?b.speedFactor:1;null!=b.duration?a=b.duration:null!=b.speedFactor&&(a/=c);return a=Math.min(Math.max(null!=b.minDuration?b.minDuration:h.defaultSettings.minDuration/
c,a),null!=b.maxDuration?b.maxDuration:h.defaultSettings.maxDuration/c)},d}();f.Animation=e;f["default"]=e});