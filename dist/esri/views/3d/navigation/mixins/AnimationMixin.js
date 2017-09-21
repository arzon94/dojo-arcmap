//>>built
define(["../../../../core/Accessor","dojo/on","dojo/_base/lang","../../animation/pointToPoint/Animation","../../../animation/easing"],function(k,l,m,d,n){d=d["default"];return k.createSubclass([],{declaredClass:"esri.views.3d.navigation.mixins.AnimationMixin",properties:{interpolation:{set:function(a){if("string"==typeof a){var b=this.interpolationTypes[a];if(!b)return void console.error("[AnimationMixin] Invalid interpolation type "+a);this._set("interpolation",new b(this))}else this._set("interpolation",
a)}},isAnimating:!1},initialize:function(){this._pointToPointAnimation=new d(this.view.viewingMode);this._targetCameraAnimated=this.cameras.current.copy();this.animationId=0},getDefaults:function(){return{interpolation:"linear"}},easeInOutInterpLinear:function(a,b,c,d,h,e,f){var g=f.dist(c,d);if(.1/this.renderUnitInMeters>g)return f.set(d,c),0;e=Math.min(e+a*h,Math.min(Math.sqrt(g*a),b));return f.set(f.lerp(c,d,Math.min(e/g*h,1)),c),e},step:function(a){this.inherited(arguments);var b=this.currentHasReachedTarget();
this._stepTimeAnimation(a/1E3,b);b&&this.pan.updateContinuous(a)},startAnimation:function(a,b){this.animationId++;this._startTimeAnimation(a,b);this.animationStarted()},_stepTimeAnimation:function(a,b){if(this.isAnimating){if(b)return void this.setCurrentToTarget(!0);b=this._pointToPointAnimation;b.step(a,this.cameras.current);b.finished?(this.isAnimating=!1,this._updateTargetCenterForElevationWhenIdle()||(this.isAnimating=!0,this.setCurrentToTarget(!0))):this.currentChanged()}},_startTimeAnimation:function(a,
b){this.isAnimating=!0;var c={};a&&a.internalUpdate?(c.apex=null,c.duration=.3,c.easing=n.outExpo):c.apex={maximumDistance:this.view.constraints.altitude.max/6};a=m.mixin(c,"object"==typeof a?a:null);this._pointToPointAnimation.update(this.cameras.current,b?this._targetCameraAnimated:this.cameras.target,a)},animationStarted:function(){l.emit(this,"animationStarted")},stop:function(){this.pan&&this.pan.continuous&&this.pan.continuous.stop();this.pan&&this.pan.momentum&&(this.pan.momentum=null);this.currentHasAlmostReachedTarget()?
this.currentReachedTarget(!1,!0):(this.cameras.target.copyFrom(this.cameras.current),this.targetAndCurrentChanged(!0))},currentReachedTarget:function(){this.inherited(arguments);this.isAnimating=!1}})});