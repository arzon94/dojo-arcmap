//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(a,e,f,g){Object.defineProperty(e,"__esModule",{value:!0});a=function(a){function d(h,b){var c=a.call(this,"esri.views.3d.input.handlers.MouseWheelZoom",!0)||this;return c.view=h,c.registerIncoming("mouse-wheel",b,function(a){return c._handleMouseWheel(a)}),c}return f(d,a),d.prototype._handleMouseWheel=function(a){var b=a.data;this.view.navigation.zoom.stepScreen(-1/60*b.deltaY,[b.x,this.view.height-
b.y]);a.stopPropagation()},d}(g.InputHandler);e.MouseWheelZoom=a});