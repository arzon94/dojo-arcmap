//>>built
define(["require","exports","../../../core/ObjectPool"],function(f,h,g){f=function(){function b(a,c,d,e){"string"==typeof a?(a=a.split("/"),c=a[1],d=a[2],e=a[3],this.level=+a[0],this.row=+c,this.col=+d,this.world=+e||0):a&&"object"==typeof a?(this.level=a.level||0,this.row=a.row||0,this.col=a.col||0,this.world=a.world||0):(this.level=+a||0,this.row=+c||0,this.col=+d||0,this.world=+e||0)}return b.from=function(a,c,d,e){return b.pool.acquire(a,c,d,e)},b.getId=function(a,c,d,e){return"object"==typeof a?
a.level+"/"+a.row+"/"+a.col+"/"+a.world:a+"/"+c+"/"+d+"/"+e},Object.defineProperty(b.prototype,"id",{get:function(){return b.getId(this)},enumerable:!0,configurable:!0}),b.prototype.equals=function(a){return this.level===a.level&&this.row===a.row&&this.col===a.col&&this.world===a.world},b.prototype.release=function(){this.world=this.col=this.row=this.level=0},b.prototype.set=function(a,c,d,e){var b=typeof a;"object"===b?(this.level=a.level||0,this.row=a.row||0,this.col=a.col||0,this.world=a.world||
0):"string"===b?(a=a.split("/"),c=a[1],d=a[2],e=a[3],this.level=parseFloat(a[0]),this.row=parseFloat(c),this.col=parseFloat(d),this.world=parseFloat(e)):(this.level=a,this.row=c,this.col=d,this.world=e);return this},b.prototype.toString=function(){return this.level+"/"+this.row+"/"+this.col+"/"+this.world},b}();return f.pool=new g(f,!0,null,25,50),f});