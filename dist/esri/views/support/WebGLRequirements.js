//>>built
define(["require","exports","../../core/Error","../../core/sniff"],function(e,d,b,c){Object.defineProperty(d,"__esModule",{value:!0});d.check=function(){var a=null;return c("esri-webgl")?c("esri-webgl-high-precision-fragment")?c("esri-webgl-vertex-shader-samplers")?c("esri-webgl-element-index-uint")||(a=new b("webgl:element-index-uint-required","WebGL support for uint vertex indices is required but not supported")):a=new b("webgl:vertex-shader-samplers-required","WebGL support for vertex shader samplers is required but not supported"):
a=new b("webgl:high-precision-fragment-required","WebGL support for high precision fragment shaders is required but not supported"):a=new b("webgl:required","WebGL is required but not supported"),a}});