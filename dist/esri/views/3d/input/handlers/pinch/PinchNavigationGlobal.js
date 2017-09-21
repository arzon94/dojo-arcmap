//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../lib/glMatrix ../../util ./PinchNavigationBase ./MomentumNavigationGlobal".split(" "),function(r,n,u,a,t,v,w){Object.defineProperty(n,"__esModule",{value:!0});var m;!function(a){a[a.Horizontal=0]="Horizontal";a[a.Vertical=1]="Vertical"}(m=n.PanMode||(n.PanMode={}));var q=a.vec3d.create(),x=16/180*Math.PI;r=function(n){function p(c,f){var b=n.call(this,c,f)||this;return b.view=c,b._rotation={axis:a.vec3d.create(),valueSmooth:new t.ExponentialFalloff(.05)},
b._panning={axis:a.vec3d.create(),plane:{distance:0,normal:a.vec3d.create()},planarCenterScene:a.vec3d.create()},b._scaling={valueSmooth:new t.ExponentialFalloff(.05),centerScreen:a.vec2.create()},b._beginScenePoints={points:[],center:a.vec3d.create()},b._panMode=m.Horizontal,b._navigationSphereRadius=0,b._tmpN=a.vec3d.create(),b._tmp2d=a.vec2.create(),b._tmpPickPointScreen=a.vec2.create(),b._tmpPickPointScene=a.vec3d.create(),b._tmpCurrentPoints=[],b._tmpCurrentCenter=a.vec3d.create(),b._tmpD=a.vec3d.create(),
b._horizonPointScreen=a.vec3d.create(),b._horizonPointScene=a.vec3d.create(),b._momentumNavigation=new w.MomentumNavigationGlobal(b,f),b}return u(p,n),Object.defineProperty(p.prototype,"momentum",{get:function(){return this._momentumNavigation},enumerable:!0,configurable:!0}),p.prototype.onNavigationBegin=function(c){var f=this._tmpPickPointScreen,b=this._tmpPickPointScene,d=this._helper;this._rotation.valueSmooth.reset();this._scaling.valueSmooth.reset();a.vec2.set2(c.data.currentState.center.x,
this.view.height-c.data.currentState.center.y,f);d.picker.pickPointInScreen(f,b)?this._navigationSphereRadius=a.vec3d.length(b):(this._navigationSphereRadius=Math.max(a.vec3d.length(this.beginCamera.center),.9*d.earthUtils.earthRadius),this._helper.spherical.makeRenderCoordSpherePoint(this._navigationSphereRadius,this.beginCamera,f,b));this._panMode=m.Horizontal;3E4>this.view.renderCoordsHelper.getAltitude(this.beginCamera.eye)&&(this._navigationSphereRadius>a.vec3d.length(this.beginCamera.eye)?this._panMode=
m.Vertical:(a.vec3d.normalize(b,this._tmpN),Math.abs(.5*Math.PI-Math.acos(a.vec3d.dot(this.beginCamera.viewForward,this._tmpN)))<x&&(this._panMode=m.Vertical)));if(this._panMode===m.Horizontal)this._computeSpherePoints(c,"startEvent",this._navigationSphereRadius,this.beginCamera,this._beginScenePoints.points),d.spherical.computePointCenter(this._beginScenePoints.points,this._navigationSphereRadius,this._beginScenePoints.center);else{a.vec3d.set(this.beginCamera.viewForward,this._panning.plane.normal);
a.vec3d.normalize(this._panning.plane.normal);a.vec3d.negate(this._panning.plane.normal);var k=a.vec3d.dot(b,this._panning.plane.normal),e=this._horizonPointScreen;a.vec3d.set3(f[0],this.view.height,0,e);var h=this._horizonPointScene,g=a.vec3d.length(this.beginCamera.eye),l=this._navigationSphereRadius;this._helper.spherical.makeRenderCoordSpherePoint(l>g?g-100:l,this.beginCamera,e,h);this.beginCamera.projectPoint(h,e);f[1]=Math.min(f[1],.9*e[1]);d.picker.pickPointInScreen(f,b)&&(k=a.vec3d.dot(b,
this._panning.plane.normal));this._panning.plane.distance=k;a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,this._tmp2d);this._helper.planar.intersectPlaneFromScreenPoint(this._panning.plane,this.beginCamera,this._tmp2d,this._panning.planarCenterScene)}},p.prototype.onNavigationUpdate=function(c,f){var b=this._helper,d=c.data.pointers.length,k=1<d;if(this._panMode===m.Horizontal){var e=this._navigationSphereRadius;if(k){var h=c.data.startState.radius/c.data.currentState.radius,
g=.001875*Math.min(Math.max(c.data.currentState.radius,40),120);this._scaling.valueSmooth.gain=g;this._scaling.valueSmooth.update(h);b.spherical.applyZoom(e,this.view,f,this._scaling.valueSmooth.value);a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,this._scaling.centerScreen);this.momentum.addScaleValue(c.timestamp,this._scaling.valueSmooth.value)}h=this._tmpCurrentPoints;g=this._tmpCurrentCenter;this._computeSpherePoints(c,"currentEvent",e,f,h);b.spherical.computePointCenter(h,
e,g);var h=this._panning.axis,l=b.spherical.rotationFromPoints(e,this._beginScenePoints.center,g,h);b.applyRotation(f,q,h,l);l=this._tmp2d;if(a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,l),this.momentum.addPanValue(c.timestamp,l,g,h),k){k=this._rotation.axis;h=this._tmpCurrentPoints;a.vec3d.normalize(this._beginScenePoints.center,k);this._computeSpherePoints(c,"currentEvent",e,f,h);e=0;if(2===d)e=b.rotationFromPointsAroundAxis(h[0],this._beginScenePoints.points[0],
k);else{for(g=0;d>g;g++)e+=b.rotationFromPointsAroundAxis(h[g],this._beginScenePoints.points[g],k);e/=d}d=this._rotation.valueSmooth.value;e=b.normalizeRotationDelta(e-d);e=d+e;g=.00125*Math.min(Math.max(c.data.currentState.radius,40),120);this._rotation.valueSmooth.gain=g;this._rotation.valueSmooth.update(e);d=this._rotation.valueSmooth.value;this.momentum.addRotationValue(c.timestamp,d);b.applyRotation(f,q,k,d)}}else if(d=this._panning.plane,k&&(h=c.data.startState.radius/c.data.currentState.radius,
g=.001875*Math.min(Math.max(c.data.currentState.radius,40),120),this._scaling.valueSmooth.gain=g,this._scaling.valueSmooth.update(h),this.momentum.addScaleValue(c.timestamp,this._scaling.valueSmooth.value),this.momentum.setVerticalParameters(d,this._panning.planarCenterScene),b.planar.applyZoom(d,this.view,f,this._panning.planarCenterScene,this._scaling.valueSmooth.value)),g=this._tmpCurrentCenter,a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,this._tmp2d),
this._helper.planar.intersectPlaneFromScreenPoint(d,f,this._tmp2d,g),d=this._tmpD,a.vec3d.subtract(g,this._panning.planarCenterScene,d),a.vec3d.subtract(f.eye,d),a.vec3d.subtract(f.center,d),f.markViewDirty(),l=this._tmp2d,a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,l),this.momentum.addPanValue(c.timestamp,l,g,d),k)k=this._rotation.axis,a.vec3d.set(this._panning.planarCenterScene,k),e=c.data.currentState.angle,d=this._rotation.valueSmooth.value,e=b.normalizeRotationDelta(e-
d),e=d+e,g=.00125*Math.min(Math.max(c.data.currentState.radius,40),120),this._rotation.valueSmooth.gain=g,this._rotation.valueSmooth.update(e),d=this._rotation.valueSmooth.value,this.momentum.addRotationValue(c.timestamp,d),b.applyRotation(f,q,k,d);f.markViewDirty()},p.prototype.onNavigationEnd=function(a){this._panMode===m.Horizontal?this.momentum.setParameters(this._navigationSphereRadius,this._scaling.centerScreen,this._beginScenePoints.center,this._panMode):this.momentum.setParameters(this._navigationSphereRadius,
this._scaling.centerScreen,this._panning.planarCenterScene,this._panMode)},p.prototype._computeSpherePoints=function(c,f,b,d,k){k.length=c.data.pointers.length;for(var e=this._tmp2d,h=0;h<k.length;h++){var g=c.data.pointers[h];e[0]=g[f].x;e[1]=this.view.height-g[f].y;void 0===k[h]&&(k[h]=a.vec3d.create());this._helper.spherical.makeRenderCoordSpherePoint(b,d,e,k[h])}return k},p}(v.PinchNavigationBase);n.PinchNavigationGlobal=r});