//>>built
define(["require","exports","../../../../core/lang"],function(d,e,c){return function(){function b(a){a?this.set(a):(this.mode=null,this.offset=0,this.featureExpression=null,this.hasOffsetAdjustment=!1)}return b.prototype.set=function(a){this.mode=a.mode;this.offset=a.offset;this.featureExpression=a.featureExpression?c.clone(a.featureExpression):null;this.hasOffsetAdjustment=a.hasOffsetAdjustment},b}()});