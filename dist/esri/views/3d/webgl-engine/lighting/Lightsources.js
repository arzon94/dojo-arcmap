//>>built
define(["require","exports","../../lib/glMatrix"],function(a,b,e){Object.defineProperty(b,"__esModule",{value:!0});var c=e.vec3d;a=function(){return function(d,a,b){void 0===d&&(d=c.create());void 0===a&&(a=c.createFrom(.57735,.57735,.57735));void 0===b&&(b=!0);this.intensity=d;this.direction=a;this.castShadows=b}}();b.MainLight=a;a=function(){return function(a,b){void 0===a&&(a=c.create());void 0===b&&(b=c.createFrom(.57735,.57735,.57735));this.intensity=c.create();this.direction=c.create();this.intensity=
a;this.direction=b}}();b.FillLight=a;a=function(){return function(a){void 0===a&&(a=c.create());this.intensity=a}}();b.AmbientLight=a;a=function(){return function(){this.sh={r:[0],g:[0],b:[0]}}}();b.SphericalHarmonicsLight=a});