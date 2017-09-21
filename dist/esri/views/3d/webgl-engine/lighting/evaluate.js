//>>built
define(["require","exports","./SphericalHarmonics","../lib/LongVectorMath","../../lib/glMatrix"],function(p,k,m,l,n){Object.defineProperty(k,"__esModule",{value:!0});var a=n.vec3d;k.evaluateGroundTruth=function(b,d,f,c){var g=a.create(),e=a.create(),h=Math.max(-a.dot(d.direction,b),0);a.scale(d.intensity,h,e);a.add(g,e);for(h=0;h<f.length;h++){d=f[h];var k=Math.max(-a.dot(d.direction,b),0);a.scale(d.intensity,k,e);a.add(g,e)}for(b=0;b<c.length;b++)d=c[b],a.scale(d.intensity,Math.PI,e),a.add(g,e);
return g};k.evaluateSphericalHarmonics=function(b,d,f){var c=a.create(),g=a.create(),e=m.orderFromNumberOfCoefficients(f.r.length),h=Math.max(-a.dot(d.direction,b),0);a.scale(d.intensity,h,g);a.add(c,g);b=m.computeCoefficients(b,e);return c[0]+=l.dotProduct(b,f.r),c[1]+=l.dotProduct(b,f.g),c[2]+=l.dotProduct(b,f.b),c}});