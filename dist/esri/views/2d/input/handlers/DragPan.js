//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support"],function(e,f,g,h,k){Object.defineProperty(f,"__esModule",{value:!0});e=function(e){function b(b,a,c){var d=e.call(this,"esri.views.2d.input.handlers.DragPan - "+a,!0)||this;return d.view=b,d.pointerType=a,d.registerIncoming("drag",c,function(a){return d._handleDrag(a)}),d.registerIncoming("pointer-down",function(a){return d.stopMomentumNavigation()}),d}return g(b,
e),b.prototype._handleDrag=function(b){var a=b.data,c=this.view.navigation;if(1<a.pointers.length||c.pinch.zoomMomentum||c.pinch.rotateMomentum)return void this.stopMomentumNavigation();if(k.eventMatchesPointerType(a.pointers[0].startEvent["native"],this.pointerType)){c=c.pan;switch(a.action){case "start":c.begin(this.view,a);break;case "update":c.update(this.view,a);break;case "end":c.end(this.view,a)}b.stopPropagation()}},b.prototype.stopMomentumNavigation=function(){this.view.navigation.pan.stopMomentumNavigation()},
b}(h.InputHandler);f.DragPan=e});