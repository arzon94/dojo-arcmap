//>>built
define("require exports ./IdGen ./Util ./DDSUtil ./gl-matrix ../../../webgl/FramebufferObject ../../../webgl/Texture ../../../webgl/Util ../../../webgl/VertexArrayObject ../../../webgl/BufferObject ../../../webgl/enums ./DefaultVertexBufferLayouts ./DefaultVertexAttributeLocations".split(" "),function(l,B,q,k,n,r,t,m,u,v,w,C,x,y){function z(a,d,b,e,g,h,c){c=!1!==c;var f=new Image;f.onerror=function(){h(null);f.onerror=void 0;f.onload=void 0};f.onload=function(){if(k.assert(1<=f.width&&1<=f.height),
b.samplingMode=c?9987:9729,b.hasMipmap=c,k.isPowerOfTwo(f.width)&&k.isPowerOfTwo(f.height)){b.width=f.width;b.height=f.height;var d=new m(a,b,f)}else d=p(a,f,b,e,g);a.bindTexture(d);h(d);f.onerror=void 0;f.onload=void 0};f.src=d}function p(a,d,b,e,g){var h=k.nextHighestPowerOfTwo(d.width),c=k.nextHighestPowerOfTwo(d.height);k.assert(h!==d.width||c!==d.height);b.width=h;b.height=c;var f=new m(a,b),l=t.createWithAttachments(a,f,{colorTarget:0,depthStencilTarget:0});d=new m(a,{target:3553,pixelFormat:6408,
dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0,maxAnisotropy:8,preMultiplyAlpha:b.preMultiplyAlpha},d);if(a.bindFramebuffer(l),void 0===g)g=a.getViewport(),g=[g.x,g.y,g.width,g.height];a.setViewport(0,0,h,c);e=e.get("texOnly");h=A.identity();a.bindProgram(e);e.setUniformMatrix4fv("model",h);e.setUniformMatrix4fv("view",h);e.setUniformMatrix4fv("proj",h);e.setUniform4f("color",1,1,1,1);e.setUniform1i("tex",0);e=new v(a,y.Default3D,{geometry:x.Pos3Tex},{geometry:w.createVertex(a,35044,k.createQuadVertexUvBuffer())});
return a.bindTexture(d,0),a.bindVAO(e),a.setDepthTestEnabled(!1),a.setBlendingEnabled(!1),a.drawArrays(5,0,u.vertexCount(e,"geometry")),a.setDepthTestEnabled(!0),a.bindFramebuffer(null),a.setViewport(g[0],g[1],g[2],g[3]),e.dispose(!0),d.dispose(),a.bindFramebuffer(null),l.detachColorTexture(),l.dispose(),b.hasMipmap&&f.generateMipmap(),f}var A=r.mat4d;l=function(){function a(d,b,e){this.data=d;this.id=a.idGen.gen(b);this.unloadFunc=void 0;this.params=e||{};this.params.wrapClamp=this.params.wrapClamp||
!1;this.params.mipmap=!1!==this.params.mipmap;this.params.noUnpackFlip=this.params.noUnpackFlip||!1;this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1;this.estimatedTexMemRequiredMB=a.estimateTexMemRequiredMB(this.data,this.params)}return a.estimateTexMemRequiredMB=function(a,b){return null==a?0:a instanceof ArrayBuffer||a instanceof Uint8Array?a.byteLength/1E6:a instanceof Image||a instanceof ImageData||a instanceof HTMLCanvasElement?1.3*a.width*a.height*4/1E6:1.3*b.width*b.height*4/1E6||
0},a.prototype.getId=function(){return this.id},a.prototype.getEstimatedTexMemRequiredMB=function(){return this.estimatedTexMemRequiredMB},a.prototype.dispose=function(){this.data=void 0},a.prototype.deferredLoading=function(){return"string"==typeof this.data},a.prototype.getWidth=function(){return this.params.width},a.prototype.getHeight=function(){return this.params.height},a.prototype.initializeThroughUpload=function(d,b,e,g,h){var c=this.data;if(b.flipped=!this.params.noUnpackFlip,b.samplingMode=
this.params.mipmap?9987:9729,b.hasMipmap=this.params.mipmap,b.wrapMode=this.params.wrapClamp?33071:10497,b.preMultiplyAlpha=this.params.preMultiplyAlpha,"string"==typeof c)z(d,c,b,e,g,h,this.params.mipmap);else{if(c instanceof Image||c instanceof ImageData||c instanceof HTMLCanvasElement)this.params.width=c.width,this.params.height=c.height,!this.params.mipmap&&this.params.wrapClamp||k.isPowerOfTwo(c.width)&&k.isPowerOfTwo(c.height)?(b.width=c.width,b.height=c.height,b=new m(d,b,c)):b=p(d,c,b,e,g);
else if(c instanceof ArrayBuffer&&this.params.encoding===a.DDS_ENCODING)b=n.createDDSTexture(d,b,c,this.params.mipmap);else if(c instanceof Uint8Array&&this.params.encoding===a.DDS_ENCODING)b=n.createDDSTexture(d,b,c.buffer,this.params.mipmap);else if(c instanceof Uint8Array)k.assert(0<this.params.width&&0<this.params.height),b.pixelFormat=1===this.params.components?6409:6408,b.width=this.params.width,b.height=this.params.height,b=new m(d,b,c);else{if(null!==c)throw console.warn("Unsupported image data"),
Error("Unsupported image data");b=new m(d,b,null)}d.bindTexture(b);h(b)}this.data=void 0},a.prototype.setUnloadFunc=function(a){this.unloadFunc=a},a.prototype.unload=function(){void 0!==this.unloadFunc&&(this.unloadFunc(this.id),this.unloadFunc=void 0)},a}();return l.idGen=new q,l.DDS_ENCODING="image/vnd-ms.dds",l});