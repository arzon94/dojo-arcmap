//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/assignHelper ../../libs/gl-matrix/mat2d ../../libs/gl-matrix/common ../../libs/gfx ../../viewpointUtils ../Container ./Projector ../cssUtils".split(" "),function(u,v,l,m,e,g,n,p,q,r,h){var t=e.identity(e.create());return function(f){function b(){var a=null!==f&&f.apply(this,arguments)||this;return a._transform=e.create(),a._projector=new r,a}return l(b,f),b.prototype.createElement=function(){var a=document.createElement("div");
return a.setAttribute("class","esri-display-object"),a},b.prototype.setElement=function(a){this.surface&&(this.surface.destroy(),this.surface=null);(this.element=a)&&(this.surface=n.createSurface(this.element,400,400))},b.prototype.doRender=function(a){var c=this.element.style;if(!this.visible)return void(c.display="none");c.display="block";c.opacity=""+this.opacity;var b=this._transform,d=a.state;if(a.stationary)p.getMatrix(b,d.center,d.size,d.resolution,g.toRadian(d.rotation),1),this.surface.setDimensions(d.size[0],
d.size[1]),this._projector.update(b,d.resolution),this.children.forEach(function(a){a.g&&a.g.setTransform(t)}),f.prototype.doRender.call(this,a);else{var k=e.invert(e.create(),b);e.multiply(k,d.transform,k);this.children.forEach(function(a){a.g&&a.g.setTransform(k)})}h.clip(c,d.clipRect);c.transform=h.cssMatrix3d(e.fromRotation(e.create(),g.toRadian(d.rotation)));this.surface.rawNode.style.transform=h.cssMatrix(e.fromRotation(e.create(),g.toRadian(-d.rotation)))},b.prototype.hitTest=function(a,b){if(!this.attached)return null;
var c=this.surface.rawNode,c=c.parentElement||c.parentNode;c.style.zIndex="9000";a=document.elementFromPoint(a,b);return(a=(c.style.zIndex="",a))&&a.gfxObject||null},b.prototype.prepareChildrenRenderParameters=function(a){return m({},a,{projector:this._projector,surface:this.surface})},b.prototype.beforeRenderChildren=function(a,b){this.surface.openBatch()},b.prototype.attachChild=function(a,b){return a.attach(b)},b.prototype.detachChild=function(a,b){return a.detach()},b.prototype.renderChild=function(a,
b){return a.processRender(b)},b.prototype.afterRenderChildren=function(a,b){this.surface.closeBatch()},b}(q)});