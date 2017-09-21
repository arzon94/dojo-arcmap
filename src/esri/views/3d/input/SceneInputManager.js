// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/watchUtils","../../../core/Accessor","../../../core/HandleRegistry","../../../core/accessorSupport/decorators","../../input/InputManager","../../input/BrowserEventSource","../../input/ViewEvents","../../input/handlers/PreventContextMenu","./handlers/pinch/PinchNavigationGlobal","./handlers/pinch/PinchNavigationLocal","./handlers/DoubleClickZoom","./handlers/DragPan","./handlers/DragRotate","./handlers/DragZoom","./handlers/KeyPan","./handlers/MouseWheelZoom","./handlers/SingleKeyResetHeading","./handlers/SingleKeyResetTilt","./handlers/PointerDownCancelAnimation","./handlers/TwoFingerTilt","./NavigationHelper"],function(e,t,n,r,o,a,i,s,p,l,d,c,h,u,g,y,w,m,v,_,D,f,M,P,A){var b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new i,t}return n(t,e),t.prototype.initialize=function(){var e=this;this.viewEvents=new d.ViewEvents(this.view),this._handles.add([o.whenNot(this.view,"ready",function(){return e._disconnect()}),o.when(this.view,"ready",function(){return e._connect()})])},t.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null),this._disconnect()},Object.defineProperty(t.prototype,"primaryDragAction",{get:function(){return this._get("primaryDragAction")},set:function(e){"pan"!==e&&"rotate"!==e||e===this._get("primaryDragAction")||(this._set("primaryDragAction",e),this._updateMode())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mode",{get:function(){return this._get("mode")},set:function(e){"default"!==e&&"pro"!==e||e===this._get("mode")||(this._set("mode",e),this._updateMode())},enumerable:!0,configurable:!0}),t.prototype._disconnect=function(){this.viewEvents.disconnect(),this._source&&(this._source.destroy(),this._source=null),this._inputManager&&(this._inputManager.destroy(),this._inputManager=null)},t.prototype._connect=function(){var e=this.view,t=this.view.canvas;this._source=new l.BrowserEventSource(t);var n=new p.InputManager(this._source);this._inputManager=n,n.installHandlers("prevent-context-menu",[new c.PreventContextMenu]),this._modeDragPan=new y.DragPan(e,"primary"),this._modeDragRotate=new w.DragRotate(e,"secondary","center"),this._modeDragZoom=new m.DragZoom(e,"tertiary");var r={lookAround:"b",pan:{left:"ArrowLeft",right:"ArrowRight",forward:"ArrowUp",backward:"ArrowDown",up:"u",down:"j"},resetHeading:"n",resetTilt:"p"};"global"===this.view.viewingMode?this._pinchNavigation=new h.PinchNavigationGlobal(e,new A.NavigationHelper(e.navigation.picker)):this._pinchNavigation=new u.PinchNavigationLocal(e,new A.NavigationHelper(e.navigation.picker)),n.installHandlers("navigation",[new M.PointerDownCancelAnimation(e),new g.DoubleClickZoom(e),new v.KeyPan(e,r.pan),new _.MouseWheelZoom(e),new f.SingleKeyResetTilt(e,r.resetTilt),new D.SingleKeyResetHeading(e,r.resetHeading),this._pinchNavigation,new P.TwoFingerTilt(e),new w.DragRotate(e,"primary","eye",[r.lookAround]),new w.DragRotate(e,"secondary","center",[r.lookAround]),new y.DragPan(e,"tertiary",[r.lookAround]),this._modeDragPan,this._modeDragRotate,this._modeDragZoom]),this.viewEvents.connect(n),this._updateMode()},t.prototype._updateMode=function(){var e=this.mode,t=this.primaryDragAction,n=R.get(e).get(t);this._modeDragPan&&(this._modeDragPan.pointerType=n.pan),this._modeDragRotate&&(this._modeDragRotate.pointerType=n.rotate),this._modeDragZoom&&(this._modeDragZoom.pointerType=n.zoom)},t}(s.declared(a));r([s.property()],b.prototype,"view",void 0),r([s.property({value:"pan"})],b.prototype,"primaryDragAction",null),r([s.property({value:"default"})],b.prototype,"mode",null),r([s.property({readOnly:!0,aliasOf:"_inputManager.latestPointerType"})],b.prototype,"latestPointerType",void 0),r([s.property()],b.prototype,"_inputManager",void 0),b=r([s.subclass("esri.views.3d.input.SceneInputManager")],b);var R=new Map,T=new Map,H=new Map;return T.set("pan",{pan:"primary",rotate:"secondary",zoom:"tertiary"}),T.set("rotate",{pan:"secondary",rotate:"primary",zoom:"tertiary"}),H.set("pan",{pan:"primary",rotate:"tertiary",zoom:"secondary"}),H.set("rotate",{pan:"tertiary",rotate:"primary",zoom:"secondary"}),R.set("default",T),R.set("pro",H),b});