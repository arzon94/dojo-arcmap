//>>built
define(["require","exports","./SphericalHarmonics","../../lib/glMatrix"],function(f,g,k,h){Object.defineProperty(g,"__esModule",{value:!0});var c=h.vec3d,e=h.vec4d,l=c.create();f=function(){function d(){this._renderLighting={main:{intensity:c.create(),direction:c.createFrom(1,0,0),castShadows:!1},sphericalHarmonics:{sh:{r:[0],g:[0],b:[0]}}};this._shOrder=2;this._oldDirection=c.create();this._oldSpecular=e.create();this._oldDiffuse=e.create();this._oldAmbient=e.create()}return d.prototype.setUniforms=
function(b,a){(void 0===a&&(a=!1),a||b.getDefine("GROUND_NORMAL_SHADING"))?b.setUniform1f("lightingFixedFactor",(1-this._info.groundLightingFactor)*(1-this._info.globalFactor)):b.setUniform1f("lightingFixedFactor",0);b.setUniform1f("lightingGlobalFactor",this._info.globalFactor);b.setUniform3fv("lightingMainDirection",this._renderLighting.main.direction);b.setUniform3fv("lightingMainIntensity",this._renderLighting.main.intensity);b.setUniform1f("ambientBoostFactor",.4);a=this._renderLighting.sphericalHarmonics.sh;
0===this._shOrder?b.setUniform3f("lightingAmbientSH0",a.r[0],a.g[0],a.b[0]):1===this._shOrder?(b.setUniform4f("lightingAmbientSH_R",a.r[0],a.r[1],a.r[2],a.r[3]),b.setUniform4f("lightingAmbientSH_G",a.g[0],a.g[1],a.g[2],a.g[3]),b.setUniform4f("lightingAmbientSH_B",a.b[0],a.b[1],a.b[2],a.b[3])):2===this._shOrder&&(b.setUniform3f("lightingAmbientSH0",a.r[0],a.g[0],a.b[0]),b.setUniform4f("lightingAmbientSH_R1",a.r[1],a.r[2],a.r[3],a.r[4]),b.setUniform4f("lightingAmbientSH_G1",a.g[1],a.g[2],a.g[3],a.g[4]),
b.setUniform4f("lightingAmbientSH_B1",a.b[1],a.b[2],a.b[3],a.b[4]),b.setUniform4f("lightingAmbientSH_R2",a.r[5],a.r[6],a.r[7],a.r[8]),b.setUniform4f("lightingAmbientSH_G2",a.g[5],a.g[6],a.g[7],a.g[8]),b.setUniform4f("lightingAmbientSH_B2",a.b[5],a.b[6],a.b[7],a.b[8]));b.setUniform3fv("lightDirection",this._oldDirection)},d.prototype.set=function(b){this._info=b;k.combineLights(b.lights,this._shOrder,this._renderLighting.main,this._renderLighting.sphericalHarmonics);c.negate(this._renderLighting.main.direction,
this._oldDirection);b=1/Math.PI;this._oldAmbient[0]=.282095*this._renderLighting.sphericalHarmonics.sh.r[0]*b;this._oldAmbient[1]=.282095*this._renderLighting.sphericalHarmonics.sh.g[0]*b;this._oldAmbient[2]=.282095*this._renderLighting.sphericalHarmonics.sh.b[0]*b;this._oldAmbient[3]=1;this._oldDiffuse[0]=this._renderLighting.main.intensity[0]*b;this._oldDiffuse[1]=this._renderLighting.main.intensity[1]*b;this._oldDiffuse[2]=this._renderLighting.main.intensity[2]*b;this._oldDiffuse[3]=1;b=c.set(this._oldDiffuse,
l);c.scale(b,.4*this._info.globalFactor);c.add(this._oldAmbient,b)},Object.defineProperty(d.prototype,"globalFactor",{get:function(){return this._info.globalFactor},enumerable:!0,configurable:!0}),d.prototype.getOld=function(){return{ambient:this._oldAmbient,diffuse:this._oldDiffuse,specular:this._oldSpecular,direction:this._oldDirection,helper:this}},d}();g.SceneLighting=f});