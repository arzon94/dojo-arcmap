//>>built
define(["require","exports","./Util"],function(d,e,b){return function(){function a(){this.shaders={}}return a.prototype.add=function(c,a){b.assert(null==this.shaders[c]);this.shaders[c]=a},a.prototype.get=function(a){return b.assert(void 0!==this.shaders[a]),this.shaders[a]},a}()});