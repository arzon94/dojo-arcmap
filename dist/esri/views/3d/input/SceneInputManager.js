//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/watchUtils ../../../core/Accessor ../../../core/HandleRegistry ../../../core/accessorSupport/decorators ../../input/InputManager ../../input/BrowserEventSource ../../input/ViewEvents ../../input/handlers/PreventContextMenu ./handlers/pinch/PinchNavigationGlobal ./handlers/pinch/PinchNavigationLocal ./handlers/DoubleClickZoom ./handlers/DragPan ./handlers/DragRotate ./handlers/DragZoom ./handlers/KeyPan ./handlers/MouseWheelZoom ./handlers/SingleKeyResetHeading ./handlers/SingleKeyResetTilt ./handlers/PointerDownCancelAnimation ./handlers/TwoFingerTilt ./NavigationHelper".split(" "),
function(d,E,l,b,g,m,n,c,p,q,r,t,u,v,w,h,e,x,y,z,A,B,C,D,k){d=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;return a._handles=new n,a}return l(b,c),b.prototype.initialize=function(){var a=this;this.viewEvents=new r.ViewEvents(this.view);this._handles.add([g.whenNot(this.view,"ready",function(){return a._disconnect()}),g.when(this.view,"ready",function(){return a._connect()})])},b.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null);this._disconnect()},
Object.defineProperty(b.prototype,"primaryDragAction",{get:function(){return this._get("primaryDragAction")},set:function(a){"pan"!==a&&"rotate"!==a||a===this._get("primaryDragAction")||(this._set("primaryDragAction",a),this._updateMode())},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"mode",{get:function(){return this._get("mode")},set:function(a){"default"!==a&&"pro"!==a||a===this._get("mode")||(this._set("mode",a),this._updateMode())},enumerable:!0,configurable:!0}),b.prototype._disconnect=
function(){this.viewEvents.disconnect();this._source&&(this._source.destroy(),this._source=null);this._inputManager&&(this._inputManager.destroy(),this._inputManager=null)},b.prototype._connect=function(){var a=this.view;this._source=new q.BrowserEventSource(this.view.canvas);var b=new p.InputManager(this._source);this._inputManager=b;b.installHandlers("prevent-context-menu",[new t.PreventContextMenu]);this._modeDragPan=new h.DragPan(a,"primary");this._modeDragRotate=new e.DragRotate(a,"secondary",
"center");this._modeDragZoom=new x.DragZoom(a,"tertiary");"global"===this.view.viewingMode?this._pinchNavigation=new u.PinchNavigationGlobal(a,new k.NavigationHelper(a.navigation.picker)):this._pinchNavigation=new v.PinchNavigationLocal(a,new k.NavigationHelper(a.navigation.picker));b.installHandlers("navigation",[new C.PointerDownCancelAnimation(a),new w.DoubleClickZoom(a),new y.KeyPan(a,{left:"ArrowLeft",right:"ArrowRight",forward:"ArrowUp",backward:"ArrowDown",up:"u",down:"j"}),new z.MouseWheelZoom(a),
new B.SingleKeyResetTilt(a,"p"),new A.SingleKeyResetHeading(a,"n"),this._pinchNavigation,new D.TwoFingerTilt(a),new e.DragRotate(a,"primary","eye",["b"]),new e.DragRotate(a,"secondary","center",["b"]),new h.DragPan(a,"tertiary",["b"]),this._modeDragPan,this._modeDragRotate,this._modeDragZoom]);this.viewEvents.connect(b);this._updateMode()},b.prototype._updateMode=function(){var a=this.primaryDragAction,a=f.get(this.mode).get(a);this._modeDragPan&&(this._modeDragPan.pointerType=a.pan);this._modeDragRotate&&
(this._modeDragRotate.pointerType=a.rotate);this._modeDragZoom&&(this._modeDragZoom.pointerType=a.zoom)},b}(c.declared(m));b([c.property()],d.prototype,"view",void 0);b([c.property({value:"pan"})],d.prototype,"primaryDragAction",null);b([c.property({value:"default"})],d.prototype,"mode",null);b([c.property({readOnly:!0,aliasOf:"_inputManager.latestPointerType"})],d.prototype,"latestPointerType",void 0);b([c.property()],d.prototype,"_inputManager",void 0);d=b([c.subclass("esri.views.3d.input.SceneInputManager")],
d);var f=new Map;b=new Map;c=new Map;return b.set("pan",{pan:"primary",rotate:"secondary",zoom:"tertiary"}),b.set("rotate",{pan:"secondary",rotate:"primary",zoom:"tertiary"}),c.set("pan",{pan:"primary",rotate:"tertiary",zoom:"secondary"}),c.set("rotate",{pan:"tertiary",rotate:"primary",zoom:"secondary"}),f.set("default",b),f.set("pro",c),d});