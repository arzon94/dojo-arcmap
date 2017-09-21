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

define(["./ActionSpherical","../../mixins/PanMixin","../../../lib/glMatrix","../../../support/earthUtils","../../../support/mathUtils","../../../webgl-engine/lib/Util","../../ContinuousAction","../../NavigationConstants","../../../webgl-engine/lib/Camera","./Momentum"],function(t,e,i,a,n,s,r,o,h,u){var m=i.vec2d,c=i.vec3d,d=i.vec4d,l=i.mat4d,g=c.create(),p=c.create(),C=c.create(),_=c.create(),v=c.create(),P=c.create(),y=l.create(),R=o.Pan.Mode,f=o.Pan.Direction,A=o.Pan.Vertical,S=(o.Pan.Momentum,t.createSubclass([e],{declaredClass:"esri.views.3d.navigation.spherical.actions.PanSpherical",constructor:function(){this._panMode=0,this._plane=d.create(),this.momentum=null,this._momentumEstimator=new u.ScreenspaceMomentumEstimator(.05,500,12,.82),this._momentumDirection=c.create(),this.momentumEnabled=!0,this._momentumInitialCamera=new h,this.continuous=new r},begin:function(t,e){this.inherited(arguments),this._momentumEstimator.reset(),this.pickPointInScreen(t,this._navPickPoint)?this._navSphereRadius=c.length(this._navPickPoint):(this._navSphereRadius=c.length(this.targetCamera.center),this._navSphereRadius<.9*a.earthRadius&&(this._navSphereRadius=a.earthRadius),this.createPickRay(t,t,this.currentCamera.viewMatrix,g,p),c.subtract(p,this.currentCamera.eye),this.intersectManifold(this.currentCamera.eye,p,this._navSphereRadius-a.earthRadius,this._navPickPoint)||this.closestPointOnSphereSilhouette(this.currentCamera.eye,g,this._navSphereRadius,this._navPickPoint));var i=!1,n=this.renderCoordsHelper.getAltitude(this.currentCamera.eye);if(n<A.ELEVATION_THRESHOLD)if(this._navSphereRadius>c.length(this.currentCamera.eye))i=!0;else{c.normalize(c.subtract(this.targetCamera.eye,this._navPickPoint,C));var r=Math.abs(.5*Math.PI-Math.acos(c.dot(this._navPickPoint,C)/c.length(this._navPickPoint)));i=r<A.ANGLE_THRESHOLD}if(i)this._panMode=R.VERTICAL,c.normalize(c.subtract(this.targetCamera.eye,this.targetCamera.center,C)),this.updatePlane(this._navPickPoint,C);else{this._panMode=R.HORIZONTAL;var o=void 0===e?s.performance.now():e;o*=.001,this._momentumEstimator.add(t[0],t[1],this._navPickPoint,o)}m.set(t,this._dragLastPoint),m.set(t,this._dragBeginPoint),this._mouseDownCamera.copyFrom(this.targetCamera)},update:function(t,e){if(this._panMode===R.HORIZONTAL){if(this._navSphereRadius<=0)return;this.createPickRay(t,this._dragBeginPoint,this._mouseDownCamera.viewMatrix,g,p),c.subtract(p,this._mouseDownCamera.eye),this.intersectManifold(this._mouseDownCamera.eye,p,this._navSphereRadius-a.earthRadius,this._targetOnSphere)||this.closestPointOnSphereSilhouette(this._mouseDownCamera.eye,g,this._navSphereRadius,this._targetOnSphere),this.rotateCameraWithPointsOnSphere(this._navPickPoint,this._targetOnSphere,this._mouseDownCamera,this.targetCamera,this._navSphereRadius);var i=void 0===e?s.performance.now():e;i*=.001,this._momentumEstimator.add(t[0],t[1],this._targetOnSphere,i)}else{if(this.createPickRay(this._dragLastPoint,this._dragBeginPoint,this.currentCamera.viewMatrix,g,p),c.subtract(p,g),!s.rayPlane(g,p,this._plane,_))return;if(this.createPickRay(t,this._dragBeginPoint,this.currentCamera.viewMatrix,g,p),c.subtract(p,g),!s.rayPlane(g,p,this._plane,v))return;c.subtract(v,_),c.subtract(this.targetCamera.eye,v),c.subtract(this.targetCamera.center,v),m.set(t,this._dragLastPoint)}this.constrainTargetEyeByElevationAndMoveLookAt(),m.set(t,this._dragLastPoint),this.fixTargetUpVector(),this.targetAndCurrentChanged(),this.inherited(arguments)},end:function(t,e){this.update(t,e),this._panMode===R.HORIZONTAL&&this._initiateMomentumPanning(t,e),this._navSphereRadius=0,this.inherited(arguments)},_initiateMomentumPanning:function(t,e){if(this._navSphereRadius<=0)return this.setPoiAuto(t,!0),!1;if(this.update(t,e),this.momentumEnabled&&(this.momentum=this._momentumEstimator.evaluateMomentum()),this.momentum){var i=this.rotationFromPointsOnSphere(this.momentum.dataOldest,this.momentum.dataNewest,this._navSphereRadius,this._momentumDirection);return this._momentumInitialVelocity=i/this.momentum.dataTimeDelta,this._momentumElapsed=0,this._momentumInitialCamera.copyFrom(this.currentCamera),this.animationStarted(),!0}return this.currentReachedTarget(),!1},beginContinuous:function(t){var e=0===this.continuous.status;if(this.momentum=null,e&&(this.navigation.begin(this),this.active=!0,this.emit("begin")),this.inherited(arguments),this.setCurrentToTarget(),e&&c.set3(0,0,0,this.continuous.direction),!(this.continuous.status&t)){if(this.continuous.status|=t,t&(f.LEFT|f.RIGHT|f.FORWARD|f.BACKWARD))this._computePanAxis(t,P),c.add(this.continuous.direction,P);else{var i=this.continuous.status&(f.UP|f.DOWN);i===f.UP?this.continuous.radiusChange=1:i===f.DOWN?this.continuous.radiusChange=-1:this.continuous.radiusChange=0}this.continuous.velocity=this._computePanVelocity()}this.continuous.timer=0},updateContinuous:function(t){if(this.continuous){var e=0,i=null,a=!1;if(this.momentum){var n=.001*t;this._momentumElapsed+=n,e=this.momentum.valueFromInitialVelocity(this._momentumInitialVelocity,this._momentumElapsed),i=this._momentumDirection,l.identity(y),l.rotate(y,e,i),l.multiplyVec3(y,this._momentumInitialCamera.eye,this.targetCamera.eye),l.multiplyVec3(y,this._momentumInitialCamera.center,this.targetCamera.center),l.multiplyVec3(y,this._momentumInitialCamera.up,this.targetCamera.up),this.applyConstraints(this.targetCamera),this.constrainTargetEyeByElevationAndMoveLookAt(),this.fixTargetUpVector(),this.momentum.isFinished(this._momentumElapsed)?(this.momentum=null,this.setCurrentToTarget(!0,!1)):this.targetAndCurrentChanged()}else{e=this.continuous.step(t),i=this.continuous.direction,a=c.dot(this.continuous.direction,this.continuous.direction)>.01;var s=this.targetCamera;if(Math.abs(this.continuous.radiusChange)>0){var r=1+e*this.continuous.radiusChange,o=s.viewForward,h=c.normalize(s.center,p),u=c.dot(o,h);(u>-.999||this.continuous.radiusChange<0)&&c.scale(this.targetCamera.center,r),c.scale(this.targetCamera.eye,r),this.continuous.velocity=this._computePanVelocity(),a||(this.applyConstraints(this.targetCamera),this.constrainTargetEyeByElevationAndMoveLookAt(),this.fixTargetUpVector(),this.targetAndCurrentChanged())}}a&&(l.identity(y),l.rotate(y,e,i),l.multiplyVec3(y,this.targetCamera.eye),l.multiplyVec3(y,this.targetCamera.center),l.multiplyVec3(y,this.targetCamera.up),this.applyConstraints(this.targetCamera),this.constrainTargetEyeByElevationAndMoveLookAt(),this.fixTargetUpVector(),this.targetAndCurrentChanged()),this.emit("update")}},endContinuous:function(t){if(this.continuous.status&=~t,this.momentum=null,0===this.continuous.status)this.continuous.stop(),this.continuous.radiusChange=0,this.active=!1,this.emit("end"),this.navigation.end(this);else if(t&(f.LEFT|f.RIGHT|f.FORWARD|f.BACKWARD))this._computePanAxis(t,P),c.subtract(this.continuous.direction,P),c.length(this.continuous.direction)<.01&&c.set3(0,0,0,this.continuous.direction);else{var e=this.continuous.status&(f.UP|f.DOWN);e==f.UP?this.continuous.radiusChange=1:e==f.DOWN?this.continuous.radiusChange=-1:this.continuous.radiusChange=0}this.inherited(arguments)},_computePanAxis:function(t,e){c.subtract(this.targetCamera.center,this.targetCamera.eye,e),c.cross(e,this.targetCamera.up),(t===f.LEFT||t===f.RIGHT)&&(c.normalize(e),c.cross(e,this.targetCamera.center)),(t===f.RIGHT||t===f.FORWARD)&&c.negate(e),c.normalize(e)},_computePanVelocity:function(){var t=.5*Math.abs(c.length(this.targetCamera.eye)-a.earthRadius);return t=n.clamp(t,1,2*a.earthRadius),n.acos(1-t*t/(2*a.earthRadius*a.earthRadius))},updatePlane:function(t,e){d.set4(e[0],e[1],e[2],-c.dot(e,t),this._plane)}}));return S});