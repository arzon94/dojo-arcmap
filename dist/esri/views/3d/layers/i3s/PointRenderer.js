//>>built
define("require exports ../../../webgl/Program ../../../webgl/VertexArrayObject ../../../webgl/BufferObject ../../webgl-engine/lib/RenderPass ../../../webgl/enums ../../webgl-engine/lib/gl-matrix ../../support/aaBoundingBox ../../support/orientedBoundingBox".split(" "),function(M,N,v,J,G,K,O,e,l,A){function H(b,a,d,f){return d.drawScreenSpace?d.fixedSize*a*f:d.drawFixedSize?d.fixedSize/2:0<d.screenMinSize?Math.max(d.screenMinSize*a*f,b/2):b/2}function I(b,a,d){return null==d&&(d=e.vec3d.create()),
d[0]=b.origin[0]+b.coordinates[3*a],d[1]=b.origin[1]+b.coordinates[3*a+1],d[2]=b.origin[2]+b.coordinates[3*a+2],d}var h={aPosition:0,aColor:1},L={positions:[{name:"aPosition",count:3,type:5126,offset:0,stride:12,normalized:!1}],colors:[{name:"aColor",count:3,type:5121,offset:0,stride:3,normalized:!0}]};return function(){function b(){this.didRender=!1;this.needsRender=!0;this.layerId="";this._useFixedSizes=!1;this._scaleFactor=1;this._minSizePx=0;this._useRealWorldSymbolSizes=!1;this._sizePx=this._size=
0;this._clipBox=l.create(l.POSITIVE_INFINITY);this._programScreen=this._programWorld=null;this.tempMatrix4=e.mat4.create();this.tempVec2=e.vec2.create();this.tempVec3=e.vec3.create();this.nodes=[]}return b.prototype.initializeRenderContext=function(a){this._programWorld=new v(a.rctx,"\n      precision highp float;\n\n      attribute vec3 aPosition;\n      attribute vec3 aColor;\n\n      uniform mat4 uModelViewMatrix;\n      uniform mat4 uProjectionMatrix;\n      uniform float uScreenMinSize;\n      uniform vec2 uPointScale;\n      uniform vec3 uClipMin;\n      uniform vec3 uClipMax;\n\n      varying vec3 vColor;\n      void main(void) {\n\n        // Move clipped points outside of clipspace\n        if (aPosition.x \x3c uClipMin.x || aPosition.y \x3c uClipMin.y || aPosition.z \x3c uClipMin.z ||\n            aPosition.x \x3e uClipMax.x || aPosition.y \x3e uClipMax.y || aPosition.z \x3e uClipMax.z) {\n          vColor \x3d vec3(0.0);\n          gl_Position \x3d vec4(0.0,0.0,0.0,2.0);\n          gl_PointSize \x3d 0.0;\n          return;\n        }\n\n        // Position in camera space\n        vec4 camera \x3d uModelViewMatrix * vec4(aPosition, 1.0);\n\n        float pointSize \x3d uPointScale.x;\n        float pointRadius \x3d 0.5 * pointSize;\n\n        #ifndef DRAW_SCREEN_SIZE\n          // Shift towards camera, to move rendered point out of terrain i.e. to\n          // the camera-facing end of the virtual point when considering it as a\n          // 3D sphere.\n          camera.xyz -\x3d normalize(camera.xyz) * pointRadius;\n        #endif\n\n        vec4 position \x3d uProjectionMatrix * camera;\n\n        // Calculate Size\n        #ifdef DRAW_SCREEN_SIZE\n          float screenPointSize \x3d pointSize;\n        #else\n          vec4 cameraOffset \x3d camera + vec4(0.0, pointRadius, 0.0, 0.0);\n          vec4 positionOffset \x3d uProjectionMatrix * cameraOffset;\n          float radius \x3d abs(positionOffset.y - position.y);\n\n          float viewHeight \x3d uPointScale.y;\n\n          // screen diameter \x3d (2 * r / w) * (h / 2)\n          float screenPointSize \x3d (radius / position.w) * viewHeight;\n        #endif\n\n        screenPointSize \x3d max(screenPointSize, uScreenMinSize);\n\n        gl_PointSize \x3d screenPointSize;\n        gl_Position \x3d position;\n\n        vColor \x3d aColor;\n      }\n    ",
"\n      #ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      #else\n      precision mediump float;\n      #endif\n\n      varying vec3 vColor;\n      void main(void) {\n\n        vec2 vOffset \x3d gl_PointCoord - vec2(0.5, 0.5);\n        float r2 \x3d dot(vOffset, vOffset);\n        if (r2 \x3e 0.25) {\n          discard;\n        }\n\n        gl_FragColor \x3d vec4(vColor, 1.0);\n      }\n    ",h,[]);this._programScreen=new v(a.rctx,"\n      precision highp float;\n\n      attribute vec3 aPosition;\n      attribute vec3 aColor;\n\n      uniform mat4 uModelViewMatrix;\n      uniform mat4 uProjectionMatrix;\n      uniform float uScreenMinSize;\n      uniform vec2 uPointScale;\n      uniform vec3 uClipMin;\n      uniform vec3 uClipMax;\n\n      varying vec3 vColor;\n      void main(void) {\n\n        // Move clipped points outside of clipspace\n        if (aPosition.x \x3c uClipMin.x || aPosition.y \x3c uClipMin.y || aPosition.z \x3c uClipMin.z ||\n            aPosition.x \x3e uClipMax.x || aPosition.y \x3e uClipMax.y || aPosition.z \x3e uClipMax.z) {\n          vColor \x3d vec3(0.0);\n          gl_Position \x3d vec4(0.0,0.0,0.0,2.0);\n          gl_PointSize \x3d 0.0;\n          return;\n        }\n\n        // Position in camera space\n        vec4 camera \x3d uModelViewMatrix * vec4(aPosition, 1.0);\n\n        float pointSize \x3d uPointScale.x;\n        float pointRadius \x3d 0.5 * pointSize;\n\n        #ifndef DRAW_SCREEN_SIZE\n          // Shift towards camera, to move rendered point out of terrain i.e. to\n          // the camera-facing end of the virtual point when considering it as a\n          // 3D sphere.\n          camera.xyz -\x3d normalize(camera.xyz) * pointRadius;\n        #endif\n\n        vec4 position \x3d uProjectionMatrix * camera;\n\n        // Calculate Size\n        #ifdef DRAW_SCREEN_SIZE\n          float screenPointSize \x3d pointSize;\n        #else\n          vec4 cameraOffset \x3d camera + vec4(0.0, pointRadius, 0.0, 0.0);\n          vec4 positionOffset \x3d uProjectionMatrix * cameraOffset;\n          float radius \x3d abs(positionOffset.y - position.y);\n\n          float viewHeight \x3d uPointScale.y;\n\n          // screen diameter \x3d (2 * r / w) * (h / 2)\n          float screenPointSize \x3d (radius / position.w) * viewHeight;\n        #endif\n\n        screenPointSize \x3d max(screenPointSize, uScreenMinSize);\n\n        gl_PointSize \x3d screenPointSize;\n        gl_Position \x3d position;\n\n        vColor \x3d aColor;\n      }\n    ",
"\n      #ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      #else\n      precision mediump float;\n      #endif\n\n      varying vec3 vColor;\n      void main(void) {\n\n        vec2 vOffset \x3d gl_PointCoord - vec2(0.5, 0.5);\n        float r2 \x3d dot(vOffset, vOffset);\n        if (r2 \x3e 0.25) {\n          discard;\n        }\n\n        gl_FragColor \x3d vec4(vColor, 1.0);\n      }\n    ",h,["DRAW_SCREEN_SIZE"]);this.needsRender=!0},b.prototype.uninitializeRenderContext=
function(a){this._programWorld&&this._programWorld.dispose();this._programScreen&&this._programScreen.dispose();this._programScreen=this._programWorld=null},b.prototype.intersect=function(a,d,f,c){var b=e.vec3d.create(),g=e.vec3d.create(),t=e.vec3d.create(),p=e.vec3d.create(),u=e.vec4d.create(),m=a.camera.perPixelRatio,w=this._getSizeParams();e.vec3d.subtract(f,d,g);var B=1/e.vec3d.length(g);e.vec3d.scale(g,B,g);e.vec3d.negate(g,t);e.vec4d.set4(g[0],g[1],g[2],-e.vec3d.dot(g,d),u);c={};f={};var C=
l.create(),D=l.create(this._clipBox);l.offset(D,-d[0],-d[1],-d[2],D);for(var h=0,v=this.nodes;h<v.length;h++){var k=v[h],F=k.splatSize*this._scaleFactor,x=w.drawScreenSpace?0:w.drawFixedSize?w.fixedSize/2:F/2,y=A.minimumDistancePlane(k.obb,u)-x,r=A.maximumDistancePlane(k.obb,u)-x,y=null!=c.dist&&null!=f.dist&&c.dist<y*B&&f.dist>r*B;if(!(0>r||y)&&(r=H(F,r,w,m),A.intersectLine(k.obb,d,g,r))){A.toAaBoundingBox(k.obb,C);l.offset(C,-d[0],-d[1],-d[2],C);y=!l.contains(D,C);e.vec3d.subtract(k.origin,d,p);
for(var q=0;q<k.pointCount;q++)if(b[0]=p[0]+k.coordinates[3*q],b[1]=p[1]+k.coordinates[3*q+1],b[2]=p[2]+k.coordinates[3*q+2],!y||l.containsPoint(D,b)){var n=e.vec3d.dot(b,g),E=0>n-x,z=e.vec3d.length2(b)-n*n;!E&&r*r>=z&&(E=H(F,n-x,w,m),E*E>=z&&(z=this.layerId+"/"+k.id+"/"+q,n=(n-x)*B,(null==c.dist||n<c.dist)&&(c.point=I(k,q,c.point),c.dist=n,c.normal=t,c.pointId=z,c.layerId=this.layerId),(null==f.dist||n>f.dist)&&(f.point=I(k,q,f.point),f.dist=n,f.normal=t,f.pointId=z,f.layerId=this.layerId)))}}}null!=
c.dist&&(b=a.getMinResult(),null==b.dist||c.dist<b.dist)&&(d={point:c.point,metadata:{pointId:c.pointId,layerId:c.layerId}},b.set(d,c.pointId,c.dist,c.normal,void 0),b.setIntersector("pointcloud"));null!=f.dist&&(a=a.getMaxResult(),null==a.dist||f.dist>a.dist)&&(d={point:f.point,metadata:{pointId:f.pointId,layerId:f.layerId}},a.set(d,f.pointId,f.dist,f.normal,void 0),a.setIntersector("pointcloud"))},b.prototype.render=function(a){if(a.pass!==K.MATERIAL)return!1;for(var d=a.rctx,b=0,c=this.nodes;b<
c.length;b++){var h=c[b];null==h.vao&&this._initNode(a,h)}b=this._getSizeParams();c=b.drawScreenSpace?this._programScreen:this._programWorld;if(null==c||0===this.nodes.length)return!0;var g=this._clipBox,t=!l.equals(g,l.POSITIVE_INFINITY,function(a,b){return a===b});t||(e.vec3.set3(-(1/0),-(1/0),-(1/0),this.tempVec3),c.setUniform3fv("uClipMin",this.tempVec3),e.vec3.set3(1/0,1/0,1/0,this.tempVec3),c.setUniform3fv("uClipMax",this.tempVec3));d.setDepthTestEnabled(!0);d.bindProgram(c);if(c.setUniformMatrix4fv("uProjectionMatrix",
a.camera.projectionMatrix),c.setUniform1f("uScreenMinSize",b.screenMinSize),this.tempVec2[1]=a.camera.fullHeight,b.drawFixedSize)this.tempVec2[0]=b.fixedSize,c.setUniform2fv("uPointScale",this.tempVec2);for(var p=0,u=this.nodes;p<u.length;p++){h=u[p];b.drawFixedSize||(this.tempVec2[0]=h.splatSize*this._scaleFactor,c.setUniform2fv("uPointScale",this.tempVec2));var m=h.origin;t&&(e.vec3.set3(g[0]-m[0],g[1]-m[1],g[2]-m[2],this.tempVec3),c.setUniform3fv("uClipMin",this.tempVec3),e.vec3.set3(g[3]-m[0],
g[4]-m[1],g[5]-m[2],this.tempVec3),c.setUniform3fv("uClipMax",this.tempVec3));e.mat4.identity(this.tempMatrix4);e.mat4.translate(this.tempMatrix4,m,this.tempMatrix4);e.mat4.multiply(a.camera.viewMatrix,this.tempMatrix4,this.tempMatrix4);c.setUniformMatrix4fv("uModelViewMatrix",this.tempMatrix4);d.bindVAO(h.vao);d.drawArrays(0,0,h.pointCount)}return!0},Object.defineProperty(b.prototype,"useFixedSizes",{get:function(){return this._useFixedSizes},set:function(a){this._useFixedSizes!==a&&(this._useFixedSizes=
a,this._requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"scaleFactor",{get:function(){return this._scaleFactor},set:function(a){this._scaleFactor!==a&&(this._scaleFactor=a,this._requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"minSizePx",{get:function(){return this._minSizePx},set:function(a){this._minSizePx!==a&&(this._minSizePx=a,this._requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"useRealWorldSymbolSizes",
{get:function(){return this._useRealWorldSymbolSizes},set:function(a){this._useRealWorldSymbolSizes!==a&&(this._useRealWorldSymbolSizes=a,this._requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"size",{get:function(){return this._size},set:function(a){this._size!==a&&(this._size=a,this._requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"sizePx",{get:function(){return this._sizePx},set:function(a){this._sizePx!==a&&(this._sizePx=a,
this._requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"clippingBox",{set:function(a){l.set(this._clipBox,a||l.POSITIVE_INFINITY)},enumerable:!0,configurable:!0}),b.prototype.addNode=function(a){this.nodes.push({id:a.id,splatSize:a.splatSize,obb:a.obb,origin:e.vec3.create(a.origin),coordinates:a.coordinates,pointCount:a.coordinates.length/3,rgb:a.rgb,vao:null});this._requestRender()},b.prototype.removeNode=function(a){this.nodes=this.nodes.filter(function(b){return b.id===
a&&b.vao&&(b.vao.dispose(!0),b.vao=null),b.id!==a});this._requestRender()},b.prototype.removeAll=function(){this.nodes.forEach(function(a){a.vao&&(a.vao.dispose(!0),a.vao=null)});this.nodes=[];this._requestRender()},b.prototype._initNode=function(a,b){a=a.rctx;b.vao=new J(a,h,L,{positions:G.createVertex(a,35044,b.coordinates),colors:G.createVertex(a,35044,b.rgb)})},b.prototype._requestRender=function(){this.didRender=!1;this.needsRender=!0},b.prototype._getSizeParams=function(){var a=this._useFixedSizes,
b=a&&!this._useRealWorldSymbolSizes,e=b?this._sizePx:this._size,c=this._minSizePx;return a&&(c=0),{drawScreenSpace:b,drawFixedSize:a,fixedSize:e,screenMinSize:c}},b}()});