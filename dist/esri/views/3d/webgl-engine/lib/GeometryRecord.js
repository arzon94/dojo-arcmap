//>>built
define(["require","exports","./IdGen"],function(a,h,c){a=function(){function b(a,c,d,e,f,g){this.id=b._idGen.gen(a.getId());this.geometry=a;this.materials=c;this.transformation=d;this.instanceParameters=e;this.origin=f;this.customTransformation=g}return b.prototype.getId=function(){return this.id},b.prototype.getStaticTransformation=function(){return this.transformation},b.prototype.getShaderTransformation=function(){return this.customTransformation?this.customTransformation(this.transformation):
this.transformation},b}();return a._idGen=new c,a});