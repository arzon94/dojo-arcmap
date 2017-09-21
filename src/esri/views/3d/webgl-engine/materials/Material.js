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

define(["dojo/text!./Material.xml","./internal/MaterialUtil","../../../webgl/Program","../lib/ShaderVariations","../lib/Util","../lib/gl-matrix","../lib/RenderSlot","../lib/DefaultVertexAttributeLocations","../lib/DefaultVertexBufferLayouts","../../../webgl/Util","../../layers/graphics/graphicUtils"],function(e,t,i,r,n,a,s,o,l,d,v){function c(e,t){var i=t.vvSizeEnabled;t.vvSizeEnabled?(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)):i&&e.setUniform3fv("vvSizeValue",t.vvSizeValue),i&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),v.computeObjectRotation(t.vvSymbolRotation[2],t.vvSymbolRotation[0],t.vvSymbolRotation[1],b.identity(C)),e.setUniformMatrix3fv("vvSymbolRotation",b.toMat3(C,O))),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}function f(e,t){e.vvSizeEnabled=t.vvSizeEnabled,e.vvSizeMinSize=t.vvSizeMinSize,e.vvSizeMaxSize=t.vvSizeMaxSize,e.vvSizeOffset=t.vvSizeOffset,e.vvSizeFactor=t.vvSizeFactor,e.vvSizeValue=t.vvSizeValue,e.vvSymbolAnchor=t.vvSymbolAnchor,e.vvSymbolRotation=t.vvSymbolRotation}function u(e,t){return g.set(e,x),g.multiply(t,x)}var S,h=n.assert,p=a.vec3,g=a.vec4,m=a.mat3,b=a.mat4,x=g.create(),O=m.create(),C=b.create(),E=p.create(),P=p.create(),T=p.createFrom(0,0,1),D=p.create(),z=p.create(),V=p.create(),y=p.create(),A="material",I="material-depth",M="material-normal",N="material-highlight",F=function(e,i){t.basicMaterialConstructor(this,i),e=e||{},e.ambient=e.ambient||[.2,.2,.2],e.diffuse=e.diffuse||[.8,.8,.8],e.specular=e.specular||[0,0,0],e.externalColor=e.externalColor||[1,1,1,1],e.colorMixMode=e.colorMixMode||"multiply",e.shininess=e.shininess||10,e.opacity=void 0!==e.opacity?e.opacity:1,e.layerOpacity=void 0!==e.layerOpacity?e.layerOpacity:1,e.blendModeOneOne=e.blendModeOneOne||!1,e.inverseWindingOrder=e.inverseWindingOrder||!1,e.vertexColors=e.vertexColors||!1,e.symbolColors=e.symbolColors||!1,e.flipV=e.flipV||!1,e.doubleSided=e.doubleSided||!1,e.cullFace=e.cullFace||void 0,e.instanced=e.instanced||!1,this.instanced=!!e.instanced,e.groundNormalShading=e.groundNormalShading||!1,e.writeStencil=e.writeStencil||!1,e.textureId||(e.reflTextureId=void 0),e.receiveSSAO=void 0!==e.receiveSSAO?e.receiveSSAO:!0,e.castShadows=void 0!==e.castShadows?e.castShadows:!0,e.verticalOffset=e.verticalOffset||null,e.screenSizePerspective=e.screenSizePerspective||null,e.vvSizeEnabled=e.vvSizeEnabled||!1,e.vvSizeMinSize=e.vvSizeMinSize||[1,1,1],e.vvSizeMaxSize=e.vvSizeMaxSize||[100,100,100],e.vvSizeOffset=e.vvSizeOffset||[0,0,0],e.vvSizeFactor=e.vvSizeFactor||[1,1,1],e.vvSizeValue=e.vvSizeValue||[1,1,1],e.vvColorEnabled=e.vvColorEnabled||!1,e.vvColorValues=e.vvColorValues||[0,0,0,0,0,0,0,0],e.vvColorColors=e.vvColorColors||[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],e.vvSymbolAnchor=e.vvSymbolAnchor||[0,0,0],e.vvSymbolRotation=e.vvSymbolRotation||[0,0,0];var r;r=e.textureId?e.atlasRegions?"Pos3NormTexRegion":"Pos3NormTex":"Pos3Norm",e.vertexColors&&(r+="Col"),e.symbolColors&&(r+="Symcol");var n=l[r],a=null;e.instanced&&(a=[],d.addDescriptor(a,"model",16,5126,!1,1),d.addDescriptor(a,"modelNormal",16,5126,!1,1),e.instanced.indexOf("color")>-1&&d.addDescriptor(a,"instanceColor",4,5126,!1,1),e.instanced.indexOf("featureAttribute")>-1&&d.addDescriptor(a,"instanceFeatureAttribute",4,5126,!1,1));var s=this.isVisible.bind(this);this.isVisible=function(){return s()&&e.opacity>0&&e.layerOpacity>0},this.dispose=function(){},this.getParams=function(){return e},this.getParameterValues=function(){var t={ambient:e.ambient,diffuse:e.diffuse,specular:e.specular,externalColor:e.externalColor,colorMixMode:e.colorMixMode,shininess:e.shininess,opacity:e.opacity,layerOpacity:e.layerOpacity,transparent:e.transparent,polygonOffset:e.polygonOffset,reflectivity:e.reflectivity,atlasRegions:e.atlasRegions,flipV:e.flipV,doubleSided:e.doubleSided,cullFace:e.cullFace,writeStencil:e.writeStencil,receiveSSAO:e.receiveSSAO,castShadows:e.castShadows,verticalOffset:e.verticalOffset,screenSizePerspective:e.screenSizePerspective,vvSizeEnabled:e.vvSizeEnabled,vvSizeMinSize:e.vvSizeMinSize,vvSizeMaxSize:e.vvSizeMaxSize,vvSizeOffset:e.vvSizeOffset,vvSizeFactor:e.vvSizeFactor,vvSizeValue:e.vvSizeValue,vvColorEnabled:e.vvColorEnabled,vvColorValues:e.vvColorValues,vvColorColors:e.vvColorColors,groundNormalShading:e.groundNormalShading,vvSymbolAnchor:e.vvSymbolAnchor,vvSymbolRotation:e.vvSymbolRotation};return e.textureId&&(t.textureId=e.textureId,t.initTexture=e.initTexture),t},this.setParameterValues=function(t){for(var i in t)"textureId"===i&&h(e.textureId,"Can only change texture of material that already has a texture"),"castShadows"===i&&h(t.castShadows===e.castShadows,"Can not change shadow casting behavior."),e[i]=t[i];this.notifyDirty("matChanged")},this.getOutputAmount=function(e){var t=d.getStride(n)/4;return e*t},this.getVertexBufferLayout=function(){return n},this.getInstanceBufferLayout=function(){return a},this.fillInterleaved=function(e,i,r,a,s,o,l){t.fillInterleaved(e,i,r,a,n,s,o,l)},this.intersect=function(i,r,n,a,s,o,l,d){if(null!=e.verticalOffset){var v=a.camera;p.set3(n[12],n[13],n[14],V);var c=p.subtract(V,v.eye,y),f=p.length(c),u=p.scale(c,1/f),S=null,h=null;switch(a.viewingMode){case"global":h=p.normalize(V,D);break;case"local":h=p.set(T,D)}e.screenSizePerspective&&(S=p.dot(h,u));var g=t.verticalOffsetAtDistance(v,f,e.verticalOffset,S,e.screenSizePerspective);p.scale(h,g),m.multiplyVec3(a.transformInverseRotation,h,z),s=p.subtract(s,z,E),o=p.subtract(o,z,P)}t.intersectTriangleGeometry(i,r,n,a,s,o,l)},this.getGLMaterials=function(){return{color:U,depthShadowMap:e.castShadows?B:null,normal:H,depth:W,highlight:G}},this.getAllTextureIds=function(){var t=[];return e.textureId&&t.push(e.textureId),e.reflTextureId&&t.push(e.reflTextureId),t}};F.paramsFromOldConstructor=function(e,t,i,r,n,a,s,o,l,d,v,c,f){return{textureId:e,transparent:t,ambient:i,diffuse:r,specular:n,shininess:a,opacity:s,polygonOffset:o,initTexture:l,reflTextureId:d,reflectivity:v,flipV:c,doubleSided:f,cullFace:void 0}};var w=function(e){return e.cullFace?"none"!==e.cullFace:e.transparent?!1:!0},R=function(e,t){var i=e.gl,r=w(t);r?(e.setFaceCullingEnabled(!0),"front"===t.cullFace&&e.setCullFace(i.FRONT)):e.setFaceCullingEnabled(!1)},_=function(e,t){var i=e.gl,r=w(t);r?(e.setFaceCullingEnabled(!1),"front"===t.cullFace&&e.setCullFace(i.BACK)):e.setFaceCullingEnabled(!0)},L=function(e,t){return e?s.TRANSPARENT_MATERIAL:t?s.STENCIL_MATERIAL:s.OPAQUE_MATERIAL},U=function(e,i,r){t.basicGLMaterialConstructor(this,e);var n=t.copyParameters(e.getParams()),a=L(n.transparent,n.writeStencil);t.singleTextureGLMaterialConstructor(this,r,n);var s=t.aquireIfNotUndefined(n.reflTextureId,n.reflInitTexture,r);s&&(s=s.getGLTexture()),h(!(n.atlasRegions&&n.reflTextureId),"Atlas texture with reflection is not yet supported");var o=n.textureId?n.atlasRegions?"AtlasTextured":"Textured":"none";this.instanced=S&&n.instanced;var l,d=!!this.instanced&&this.instanced.indexOf("color")>-1,v=!S&&n.instanced&&n.instanced.indexOf("color")>-1,p=[[null,null],[null,null]],g=null;this._loadPrograms=function(){p[0][0]=this._loadProgram(!1,!1),p[1][0]=this._loadProgram(!0,!1),n.receiveSSAO?(p[0][1]=this._loadProgram(!1,!0),p[1][1]=this._loadProgram(!0,!0),l=p[0].concat(p[1])):(p[0][1]=p[0][0],p[1][1]=p[1][0],l=[p[0][0],p[1][0]])},this._loadProgram=function(e,t){return i.getShaderVariationsProgram(A,[o,!!n.reflTextureId,n.vertexColors,n.symbolColors,n.flipV,n.doubleSided,!!this.instanced,d,e,t,!!n.vvSizeEnabled,!!n.vvColorEnabled,null!=n.verticalOffset,null!=n.screenSizePerspective,n.groundNormalShading])},this._loadPrograms();var m="AtlasTextured"===o,b=this.dispose;this.dispose=function(){b(),t.releaseIfNotUndefined(n.reflTextureId,r)},this.beginSlot=function(e){return a===e},this.getProgram=function(){return g||p[0][0]},this.getAllPrograms=function(){return l},this.updateParameters=function(){var t=e.getParams();n.ambient=t.ambient,n.diffuse=t.diffuse,n.specular=t.specular,n.externalColor=t.externalColor,n.colorMixMode=t.colorMixMode,n.shininess=t.shininess,n.opacity=t.opacity,n.layerOpacity=t.layerOpacity,n.polygonOffset=t.polygonOffset,n.reflectivity=t.reflectivity,n.flipV=t.flipV,n.doubleSided=t.doubleSided,n.cullFace=t.cullFace,n.receiveSSAO=t.receiveSSAO,n.castShadows=t.castShadows,n.verticalOffset=t.verticalOffset,n.screenSizePerspective=t.screenSizePerspective,f(n,t),n.vvColorEnabled=t.vvColorEnabled,n.vvColorValues=t.vvColorValues,n.vvColorColors=t.vvColorColors,n.transparent!=t.transparent&&(a=L(t.transparent),n.transparent=t.transparent),n.groundNormalShading=t.groundNormalShading,n.initTexture=t.initTexture,this.updateTexture(t.textureId),t.atlasRegions&&(n.atlasRegions=t.atlasRegions),n.blendModeOneOne=t.blendModeOneOne,n.inverseWindingOrder=t.inverseWindingOrder,this._loadPrograms()},this.bind=function(e,i){var r=e.gl;g=p[i.shadowMappingEnabled?1:0][i.ssaoEnabled?1:0],e.bindProgram(g),g.setUniform3fv("ambient",n.ambient),g.setUniform3fv("diffuse",n.diffuse),g.setUniform3fv("specular",n.specular),g.setUniform4fv("externalColor",n.externalColor),g.setUniform1i("colorMixMode",t.colorMixModes[n.colorMixMode]),g.setUniform1f("shininess",n.shininess),g.setUniform1f("opacity",n.opacity),g.setUniform1f("layerOpacity",n.layerOpacity),t.bindVerticalOffset(n.verticalOffset,i,g),t.bindScreenSizePerspective(n.screenSizePerspective,g),c(g,n),this.bindTexture(e,g),m&&this.bindTextureSize(e,g),e.setBlendFunctionSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA),void 0!==s&&(g.setUniform1i("reflTex",1),e.bindTexture(s,1),g.setUniform1f("reflectivity",n.reflectivity)),n.inverseWindingOrder&&e.setFrontFace(r.CW),n.transparent?(e.setBlendingEnabled(!0),n.blendModeOneOne?(e.setBlendFunction(r.ONE,r.ONE),e.setDepthWriteEnabled(!1)):e.setBlendFunctionSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA)):e.setBlendingEnabled(!1),n.polygonOffset&&(e.setPolygonOffsetFillEnabled(!0),e.setPolygonOffset(2,2)),R(e,n),e.setDepthTestEnabled(!0)},this.release=function(e,t){var i=e.gl;e.setPolygonOffsetFillEnabled(!1),_(e,n),e.setBlendingEnabled(!1),e.setBlendFunctionSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA),e.setDepthWriteEnabled(!0),e.setFrontFace(i.CCW)},this.bindView=function(e,i){g=p[i.shadowMappingEnabled?1:0][i.ssaoEnabled?1:0];var r=i.origin;t.bindView(r,i.view,g),t.bindCamPos(r,i.viewInvTransp,g),i.shadowMappingEnabled&&i.shadowMap.bindView(g,r)},this.bindInstance=function(e,t){if(g.setUniformMatrix4fv("model",t.transformation),g.setUniformMatrix4fv("modelNormal",t.transformationNormal),t.instanceParameters&&v){var i=t.instanceParameters.color;i&&g.setUniform4fv("externalColor",u(i,n.externalColor))}},this.getDrawMode=function(e){var t=e.gl;return t.TRIANGLES}},W=function(e,i,r,n){t.basicGLMaterialConstructor(this,e);var a=t.copyParameters(e.getParams());this.instanced=S&&a.instanced;var s=d.hasAttribute(e.getVertexBufferLayout(),"uv0")?(a.atlasRegions,"Textured"):"none",o=i.getShaderVariationsProgram(I,[s,a.flipV,!!this.instanced,!!n,!!a.vvSizeEnabled,null!=a.verticalOffset,null!=a.screenSizePerspective]),l=L(a.transparent,a.writeStencil);t.singleTextureGLMaterialConstructor(this,r,a),this.beginSlot=function(e){return l===e},this.getProgram=function(){return o},this.updateParameters=function(){var t=e.getParams();a.initTexture=t.initTexture,a.cullFace=t.cullFace,a.inverseWindingOrder=t.inverseWindingOrder,a.flipV=t.flipV,f(a,t),this.updateTexture(t.textureId)},this.bind=function(e,i){var r=e.gl;e.bindProgram(o),o.setUniform2fv("nearFar",i.nearFar),a.inverseWindingOrder&&e.setFrontFace(r.CW),t.bindVerticalOffset(a.verticalOffset,i,o),t.bindScreenSizePerspective(a.screenSizePerspective,o),c(o,a),this.bindTexture(e,o),R(e,a),e.setDepthTestEnabled(!0)},this.release=function(e){var t=e.gl;_(e,a),a.inverseWindingOrder&&e.setFrontFace(t.CCW)},this.bindView=function(e,i){t.bindView(i.origin,i.view,o),a.screenSizePerspective&&t.bindCamPos(i.origin,i.viewInvTransp,o)},this.bindInstance=function(e,t){o.setUniformMatrix4fv("model",t.transformation)},this.getDrawMode=function(e){var t=e.gl;return t.TRIANGLES}},B=function(e,t,i){W.call(this,e,t,i,!0)},H=function(e,i,r){t.basicGLMaterialConstructor(this,e);var n=t.copyParameters(e.getParams()),a=d.hasAttribute(e.getVertexBufferLayout(),"uv0")?(n.atlasRegions,"Textured"):"none";this.instanced=S&&n.instanced;var s=i.getShaderVariationsProgram(M,[a,n.flipV,!!this.instanced,!!n.vvSizeEnabled,null!=n.verticalOffset,null!=n.screenSizePerspective]),o=L(n.transparent,n.writeStencil);t.singleTextureGLMaterialConstructor(this,r,n),this.beginSlot=function(e){return o===e},this.getProgram=function(){return s},this.updateParameters=function(){var t=e.getParams();n.initTexture=t.initTexture,n.cullFace=t.cullFace,n.inverseWindingOrder=t.inverseWindingOrder,n.flipV=t.flipV,f(n,t),this.updateTexture(t.textureId)},this.bind=function(e,i){var r=e.gl;e.bindProgram(s),this.bindTexture(e,s),s.setUniformMatrix4fv("viewNormal",i.viewInvTransp),t.bindVerticalOffset(n.verticalOffset,i,s),t.bindScreenSizePerspective(n.screenSizePerspective,s),c(s,n),R(e,n),n.inverseWindingOrder&&e.setFrontFace(r.CW),e.setDepthTestEnabled(!0)},this.release=function(e){var t=e.gl;_(e,n),n.inverseWindingOrder&&e.setFrontFace(t.CCW)},this.bindView=function(e,i){t.bindView(i.origin,i.view,s),n.screenSizePerspective&&t.bindCamPos(i.origin,i.viewInvTransp,s)},this.bindInstance=function(e,t){s.setUniformMatrix4fv("model",t.transformation),s.setUniformMatrix4fv("modelNormal",t.transformationNormal)},this.getDrawMode=function(e){var t=e.gl;return t.TRIANGLES}},G=function(e,i,r,n){t.basicGLMaterialConstructor(this,e);var a=t.copyParameters(e.getParams()),s=d.hasAttribute(e.getVertexBufferLayout(),"uv0")?(a.atlasRegions,"Textured"):"none";this.instanced=S&&a.instanced;var o=i.getShaderVariationsProgram(N,[s,a.flipV,!!this.instanced,!!a.vvSizeEnabled,null!=a.verticalOffset,null!=a.screenSizePerspective]),l=L(a.transparent,a.writeStencil);t.singleTextureGLMaterialConstructor(this,r,a),this.beginSlot=function(e){return l===e},this.getProgram=function(){return o},this.updateParameters=function(){var t=e.getParams();a.initTexture=t.initTexture,a.cullFace=t.cullFace,a.inverseWindingOrder=t.inverseWindingOrder,a.flipV=t.flipV,f(a,t),this.updateTexture(t.textureId)},this.bind=function(e,i){var r=e.gl;e.bindProgram(o),this.bindTexture(e,o),t.bindVerticalOffset(a.verticalOffset,i,o),t.bindScreenSizePerspective(a.screenSizePerspective,o),c(o,a),R(e,a),a.inverseWindingOrder&&e.setFrontFace(r.CW),e.setDepthTestEnabled(!0)},this.release=function(e){var t=e.gl;_(e,a),a.inverseWindingOrder&&e.setFrontFace(t.CW)},this.bindView=function(e,i){t.bindView(i.origin,i.view,o),a.screenSizePerspective&&t.bindCamPos(i.origin,i.viewInvTransp,o)},this.bindInstance=function(e,t){o.setUniformMatrix4fv("model",t.transformation),o.setUniformMatrix4fv("modelNormal",t.transformationNormal)},this.getDrawMode=function(e){var t=e.gl;return t.TRIANGLES}};return F.loadShaders=function(t,n,a,s){t._parse(e),S=s.extensions.angleInstancedArrays,s.extensions.shaderTextureLOD,s.extensions.standardDerivatives;var l=new r("phong",["vsPhong","fsPhong"],null,a,n,t,s);l.addNaryShaderSnippetSuffix([{value:"none",programNameSuffix:"",shaderSnippetSuffix:""},{value:"Textured"},{value:"AtlasTextured"}]),l.addBinaryShaderSnippetSuffix("Refl","Refl",[!1,!0]),l.addDefine("Color","VERTEXCOLORS"),l.addDefine("symbolColor","SYMBOLVERTEXCOLORS"),l.addDefine("FlipV","FLIPV"),l.addDefine("DoubleSided","DOUBLESIDED"),l.addDefine("Instanced","INSTANCED"),l.addDefine("InstColor","INSTANCEDCOLOR"),l.addDefine("ReceiveShadows","RECEIVE_SHADOWS"),l.addDefine("ReceiveSSAO","RECEIVE_SSAO"),l.addDefine("vvSize","VV_SIZE"),l.addDefine("vvColor","VV_COLOR"),l.addDefine("VerticalOffset","VERTICAL_OFFSET"),l.addDefine("screenSizePerspective","SCREEN_SIZE_PERSPECTIVE"),l.addDefine("groundNormalShading","GROUND_NORMAL_SHADING"),a.addShaderVariations(A,l);var d=new r("depth",["vsDepth","fsDepth"],null,a,n,t,s);d.addNaryShaderSnippetSuffix([{value:"none",programNameSuffix:"",shaderSnippetSuffix:""},{value:"Textured"},{value:"AtlasTextured"}]),d.addDefine("FlipV","FLIPV"),d.addDefine("Instanced","INSTANCED"),d.addDefine("ShadowMap","BIAS_SHADOWMAP"),d.addDefine("vvSize","VV_SIZE"),d.addDefine("VerticalOffset","VERTICAL_OFFSET"),d.addDefine("screenSizePerspective","SCREEN_SIZE_PERSPECTIVE"),a.addShaderVariations(I,d);var v=new r("normal",["vsNormal","fsNormal"],null,a,n,t,s);v.addNaryShaderSnippetSuffix([{value:"none",programNameSuffix:"",shaderSnippetSuffix:""},{value:"Textured"},{value:"AtlasTextured"}]),v.addDefine("FlipV","FLIPV"),v.addDefine("Instanced","INSTANCED"),v.addDefine("vvSize","VV_SIZE"),v.addDefine("VerticalOffset","VERTICAL_OFFSET"),v.addDefine("screenSizePerspective","SCREEN_SIZE_PERSPECTIVE"),a.addShaderVariations(M,v);var c=new r("highlight",["vsHighlight","fsHighlight"],null,a,n,t,s);c.addNaryShaderSnippetSuffix([{value:"none",programNameSuffix:"",shaderSnippetSuffix:""},{value:"Textured"},{value:"AtlasTextured"}]),c.addDefine("FlipV","FLIPV"),c.addDefine("Instanced","INSTANCED"),c.addDefine("vvSize","VV_SIZE"),c.addDefine("VerticalOffset","VERTICAL_OFFSET"),c.addDefine("screenSizePerspective","SCREEN_SIZE_PERSPECTIVE"),a.addShaderVariations(N,c);var f=new i(s,t.vsDepth,t.fsDepth,o.Default3D,["BIAS_SHADOWMAP 1"]),u=new i(s,t.vsDepthTextured,t.fsDepthTextured,o.Default3D,["BIAS_SHADOWMAP 1"]),h=new i(s,t.vsDepth,t.fsDepth,o.Default3D),p=new i(s,t.vsDepthTextured,t.fsDepthTextured,o.Default3D),g=new i(s,t.vsNormal,t.fsNormal,o.Default3D),m=new i(s,t.vsNormalTextured,t.fsNormalTextured,o.Default3D),b=new i(s,t.vsHighlight,t.fsHighlight,o.Default3D),x=new i(s,t.vsHighlightTextured,t.fsHighlightTextured,o.Default3D);a.add("depthShadowMap",f),a.add("depthTexturedShadowMap",u),a.add("depth",h),a.add("depthTextured",p),a.add("normal",g),a.add("normalTextured",m),a.add("highlight",b),a.add("highlightTextured",x),n.add("fsDepth",{source:t.fsDepth}),n.add("fsDepthTextured",{source:t.fsDepthTextured}),n.add("fsDepthShadowMap",{source:t.fsDepthShadowMap,defines:["BIAS_SHADOWMAP 1"]}),n.add("fsDepthTexturedShadowMap",{source:t.fsDepthTextured,defines:["BIAS_SHADOWMAP 1"]}),n.add("vsDepth",{source:t.vsDepth}),n.add("fsNormal",{source:t.fsNormal})},F});