//>>built
define("require exports ./Renderer ./Camera ./Util ./gl-matrix ../materials/internal/TexOnlyGLMaterial ./ModelDirtyTypesTs ./RenderPass ./HighlightUtils ./ComponentUtils ../../../webgl/FramebufferObject ../../../webgl/VertexArrayObject ../../../webgl/BufferObject ../../../webgl/Util ../../../webgl/Texture ../lighting/Lightsources ../../../webgl/enums ./DefaultVertexBufferLayouts ./DefaultVertexAttributeLocations".split(" "),function(t,M,x,y,z,q,A,N,r,B,u,C,D,E,F,G,H,O,I,J){var v=q.vec3d,K=q.vec4d,
k=q.mat4d;t=function(){function b(a,c,f,d,b,e){var g=this;this._acquiredTextures={};this._clearColor=K.createFrom(0,0,0,0);this._id2origin={};this._uniqueIdx=0;this._rctx=a;this._canvas=c;this._programRep=f;this._materialRep=d;this._textureRep=b;this._modelDirtySet=e;this._renderer=new x(f,d,b,this._rctx,!0);this._renderer.onHasHighlightsChanged=function(a){g.onHasHighlightsChanged&&g.onHasHighlightsChanged(a)};this._renderer.setLighting({lights:[new H.AmbientLight(v.createFrom(1,1,1))],groundLightingFactor:1,
globalFactor:0})}return b.prototype.dispose=function(){for(var a in this._acquiredTextures)this._acquiredTextures[a].fbo.dispose(),this._textureRep.release(a);this._acquiredTextures=null;this._renderer.dispose();this._renderer=null},b.prototype.addRenderGeometries=function(a){var c=this;a.forEach(function(a){null==a.origin&&(a.origin=c.getOrigin(a.center,a.bsRadius));a.idx=c._uniqueIdx++});this._renderer.modify(a,[])},b.prototype.removeRenderGeometries=function(a){this._renderer.modify([],a)},b.prototype.updateRenderGeometries=
function(a,c){a=a.map(function(a){return{renderGeometry:a,updateType:c}});this._renderer.modify([],[],a,{})},b.prototype.updateRenderOrder=function(a){0<Object.keys(a).length&&this._renderer.modifyRenderOrder(a)},b.prototype.setBackgroundColor=function(a){this._clearColor=a},b.prototype.addRenderGeometryHighlight=function(a,c){var f=a.instanceParameters,d=B.generateHighlightId();return f.componentHighlights=u.addHighlight(f.componentHighlights,null,c,d),this.updateRenderGeometries([a],32),d},b.prototype.removeRenderGeometryHighlight=
function(a,c){var f=a.instanceParameters;f.componentHighlights=u.removeHighlight(f.componentHighlights,c);this.updateRenderGeometries([a],32)},b.prototype.isEmpty=function(){return this._renderer.isEmpty()},b.prototype.processDirtyMaterials=function(){var a=this._modelDirtySet.getDirtyMaterials();a&&this._renderer.modify([],[],[],a);this._modelDirtySet.clearDirtyMaterials()},Object.defineProperty(b.prototype,"hasHighlights",{get:function(){return this._renderer.hasHighlights},enumerable:!0,configurable:!0}),
b.prototype.draw=function(a,c){return this.drawPass(r.MATERIAL,a,c)},b.prototype.drawHighlights=function(a,c){return this.drawPass(r.MATERIAL_HIGHLIGHT,a,c)},b.prototype.drawPass=function(a,c,f){if(this.isEmpty()||(this.processDirtyMaterials(),a===r.MATERIAL_HIGHLIGHT&&!this.hasHighlights))return!1;var d,b=c.getId(),e=this._rctx,g=e.gl;if(this._acquiredTextures[b])d=this._acquiredTextures[b].fbo;else{d=this._textureRep.aquire(b).getGLTexture();d=C.createWithAttachments(this._rctx,d,{colorTarget:0,
depthStencilTarget:0});var l=Object.keys(this._acquiredTextures).length;this._acquiredTextures[b]={texture:c,fbo:d,idx:l}}c=f.width;l=f.height;d.width===c&&d.height===l||(d.resize(c,l),d.colorTexture.setSamplingMode(9729));h.near=1;h.far=1E4;e.bindFramebuffer(d);e.setDepthTestEnabled(!1);e.setBlendFunctionSeparate(770,771,1,771);e.setClearColor.apply(e,this._clearColor);e.clear(g.COLOR_BUFFER_BIT);this._renderer.setPixelRatio(f.pixelRatio||1);for(g=0;g<f.views.length;g++)d=f.views[g],h.viewport=d.viewport,
k.ortho(0,d.extent[2]-d.extent[0],0,d.extent[3]-d.extent[1],h.near,h.far,h.projectionMatrix),k.identity(h.viewMatrix),k.translate(h.viewMatrix,[-d.extent[0],-d.extent[1],0]),h.setGLViewport(this._rctx),L&&this._drawTestTexture(c,l,w[this._acquiredTextures[b].idx%w.length]),this._renderer.renderGeometryPass(a,h);return e.setDepthTestEnabled(!0),e.setBlendFunctionSeparate(770,771,1,771),e.bindFramebuffer(null),e.setViewport(0,0,this._canvas.width,this._canvas.height),!0},b.prototype._drawTestTexture=
function(a,c,b){var d=this._rctx,f=d.gl;if(!this._testPatternMat){for(var e=new Uint8Array(a*c*4),g=0,h=0;c>h;h++)for(var m=0;a>m;m++){var n=Math.floor(m/10),p=Math.floor(h/10);2>n||2>p||10*n>a-20||10*p>c-20?(e[g++]=255,e[g++]=255,e[g++]=255,e[g++]=255):(e[g++]=255,e[g++]=255,e[g++]=255,1&n&&1&p?e[g++]=1&m^1&h?0:255:e[g++]=1&n^1&p?0:128)}a=new G(d,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:a,height:c},e);this._testPatternMat=new A(this._programRep,a,[1,1,1,1],!0,f.ALWAYS);
this._testPatternBindParams={proj:k.identity(),view:k.identity(),nearFar:[-1,1],origin:[0,0,0]};f=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,-1,1,0,0,1,1,1,0,1,1]);this._quadVAO=new D(d,J.Default3D,{geometry:I.Pos3Tex},{geometry:E.createVertex(d,35044,f)})}this._testPatternMat.setColor([b[0],b[1],b[2],1]);this._testPatternMat.bind(d,this._testPatternBindParams);this._testPatternMat.bindView(d,this._testPatternBindParams);d.bindVAO(this._quadVAO);d.drawArrays(5,0,F.vertexCount(this._quadVAO,"geometry"));
this._testPatternMat.release(d)},b.prototype.getOrigin=function(a,c){var b=0;c=10*c/1E4;1<c&&(b=Math.ceil(z.logWithBase(c,2)));c=1E4*Math.pow(2,b);var d=Math.round(a[0]/c),h=Math.round(a[1]/c);a=Math.round(a[2]/c);var b=b+"_"+d+"_"+h+"_"+a,e=this._id2origin[b];return null==e&&(e={vec3:v.createFrom(d*c,h*c,a*c),id:b},this._id2origin[b]=e),e},b}();var L=!1,w=[[1,.5,.5],[.5,.5,1],[.5,1,.5]],h=new y;return t});