//>>built
define("../mixins/ConstraintsMixin ../../support/mathUtils ../../support/earthUtils ../../lib/glMatrix ../../constraints/SceneViewAltitudeConstraint ../../constraints/SceneViewTiltConstraint ../../webgl-engine/lib/Util".split(" "),function(l,g,k,q,p,n,r){var h=q.vec3d,m=h.create();return l.createSubclass({declaredClass:"esri.views.3d.navigation.spherical.ConstraintsSpherical",defaultConstraints:{tilt:new l.Tilt({min:function(){return g.deg2rad(n.MAX_DEFAULT)},max:g.makePiecewiseLinearFunction([[4E3,
g.deg2rad(n.MIN_DEFAULT)],[5E4,g.deg2rad(88)],[6E6,g.deg2rad(88)],[2E7,g.deg2rad(n.MAX_DEFAULT)]])}),altitude:new l.Altitude({min:function(){return p.MIN_DEFAULT},max:function(){return p.MAX_DEFAULT}}),collision:new l.Collision},initialize:function(){this.captainNemoAltitudeThreshold=2E4;this.captainNemoElevationThreshold=-500},limitAltitude:function(a,c,e,d){h.scale(e,a/d,m);h.subtract(c,m,m);var b=this.renderCoordsHelper.getAltitude(m),g=this.constraints.altitude.apply(this,b);if(1E-6<Math.abs(b-
g)){var f=h.length(c);c=h.dot(e,c)/(f*d);if(.9999<Math.abs(c))return a+(g-b);b=g+k.earthRadius;a=-2*f*c;f=a*a-4*(-(b*b)+f*f);if(0>f)return this.minPoiDist;f=Math.sqrt(f);return a>f?(a-f)/2:(f-a)/2}return a},limitTiltByAltitudeConstraints:function(a,c,e,d){var b;c=h.length(c);var l=c*c,f=e*e,m=Math.sqrt(l+f-2*c*e*Math.cos(Math.PI-a))-k.earthRadius,n=this.constraints.altitude.min(),p=this.constraints.altitude.max();if((void 0===d||0<d)&&n>m?b=n:(void 0===d||0>d)&&m>p&&(b=p),void 0!==b)a=b+k.earthRadius,
a=Math.PI-g.acos((-(a*a)+l+f)/(2*c*e));return a},distanceToSilhouette:function(a,c,e,d,b){b||(b={maxFarNearRatio:0,distance:0});a=h.dot(a.eye,a.eye);c=k.earthRadius*k.earthRadius;(b.maxFarNearRatio=this.maxFarNearRatio,this.isNemoMode(a,d))?(d=k.earthRadius+d,b.distance=Math.sqrt(a-d*d)):a>c?(b.maxFarNearRatio=g.clamp(2E4-(Math.log(Math.sqrt(a)-k.earthRadius)-7.983)/9.011*19E3,1E3,2E4),b.distance=Math.sqrt(a-c)):b.distance=this.maxFarNearRatio*this.minNearDistance;return b.distance*=1.2,b},isNemoMode:function(a,
c){var e=k.earthRadius+this.captainNemoAltitudeThreshold;return e*e>a&&c<this.captainNemoElevationThreshold},intersectManifold:function(a,c,e,d){return r.raySphereClosestPositive(a,c,k.earthRadius+e,d)},getFallbackCenterAlongViewDirection:function(a,c,e){var d=h.dot(a,a),b=k.earthRadius*k.earthRadius,d=d>b?Math.sqrt(d-b)/3:1;h.subtract(c,a,e);h.scale(e,d/h.length(e),e);h.add(e,a)}})});