require({cache:{
'url:esri/views/3d/webgl-engine/materials/ColorMaterial.xml':"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\n<snippets>\n\n<snippet name=\"vertexShaderColorMaterial\"><![CDATA[\n  $vsprecisionf\n\n\tuniform mat4 proj;\n\tuniform mat4 view;\n\tuniform mat4 model;\n\n\tattribute vec3 $position;\n\tattribute vec4 $color;\n\n\tvarying vec4 vColor;\n\n\tvoid main(void) {\n\t\tvColor = $color * 0.003921568627451; // = 1/255;\n\t\tgl_Position = proj * view * vec4((model * vec4($position, 1.0)).xyz, 1.0);\n\t}\n]]></snippet>\n\n<snippet name=\"fragmentShaderColorMaterial\"><![CDATA[\n\t$fsprecisionf\n\n\tuniform vec4 eColor;\n\tvarying vec4 vColor;\n\n\tvoid main() {\n\t\tgl_FragColor = vColor * eColor;\n\t}\n]]></snippet>\n</snippets>\n"}});
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

define(["dojo/_base/lang","dojo/text!./ColorMaterial.xml","./internal/MaterialUtil","../lib/RenderSlot","../lib/Util","../../../webgl/Program","../lib/DefaultVertexAttributeLocations","../lib/DefaultVertexBufferLayouts","../../../webgl/Util"],function(t,e,n,r,o,i,a,l,s){var f=!1,u=function(t,e){n.basicMaterialConstructor(this,e),t=t||{},t.color=t.color||[1,1,1,1],t.polygonOffset=t.polygonOffset||!1,t.vertexColors=t.vertexColors||!1;var r=l.Pos3Color;this.getParams=function(){return t},this.setColor=function(e){t.color=e,this.notifyDirty("matChanged")},this.getColor=function(){return t.color},this.setTransparent=function(e){t.transparent=e,this.notifyDirty("matChanged")},this.getTransparent=function(e){return t.transparent},this.dispose=function(){},this.getOutputAmount=function(t){var e=s.getStride(r)/4;return f?2*t*e:t*e},this.getVertexBufferLayout=function(){return r},this.fillInterleaved=function(t,e,i,a,l,u,g){if(n.fillInterleaved(t,e,i,a,r,l,u,g),f){var c=t.faces.indices[o.VertexAttrConstants.POSITION].length,d=s.getStride(r)/4;n.triangleVertexArrayToWireframeLines(l,u,c,d)}},this.intersect=n.intersectTriangleGeometry,this.getGLMaterials=function(){return{color:g,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:c}},this.getAllTextureIds=function(){return[]}},g=function(e,o,i){n.basicGLMaterialConstructor(this,e);var a=t.clone(e.getParams()),l=o.get("colorMaterial"),s=e.getColor();this.beginSlot=function(t){return t===(s[3]<1?r.TRANSPARENT_MATERIAL:r.OPAQUE_MATERIAL)},this.getProgram=function(){return l},this.updateParameters=function(){a.color=e.getColor(),a.transparent=e.getTransparent()},this.bind=function(t,e){t.bindProgram(l),l.setUniform4fv("eColor",a.color),t.setFaceCullingEnabled(!1),a.polygonOffset&&(t.setPolygonOffsetFillEnabled(!0),t.setPolygonOffset(1,1)),a.transparent&&(t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA)),t.setDepthTestEnabled(!0)},this.release=function(t){t.setPolygonOffsetFillEnabled(!1),a.transparent&&t.setBlendingEnabled(!1)},this.bindView=function(t,e){n.bindView(e.origin,e.view,l)},this.bindInstance=function(t,e){l.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var e=t.gl;return f?e.LINES:e.TRIANGLES}},c=function(e,o,i){n.basicGLMaterialConstructor(this,e);var a=t.clone(e.getParams()),l=o.get("colorMaterial"),s=[1,1,1,1];this.beginSlot=function(t){return t===(s[3]<1?r.TRANSPARENT_MATERIAL:r.OPAQUE_MATERIAL)},this.getProgram=function(){return l},this.updateParameters=function(){a.color=e.getColor(),a.transparent=e.getTransparent()},this.bind=function(t,e){t.bindProgram(l),l.setUniform4fv("eColor",a.color),t.setFaceCullingEnabled(!1),a.polygonOffset&&(t.setPolygonOffsetFillEnabled(!0),t.setPolygonOffset(1,1))},this.release=function(t){t.setPolygonOffsetFillEnabled(!1)},this.bindView=function(t,e){n.bindView(e.origin,e.view,l)},this.bindInstance=function(t,e){l.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var e=t.gl;return f?e.LINES:e.TRIANGLES}};return u.programs=null,u.loadShaders=function(t,n,r,o){t._parse(e);var l=new i(o,t.vertexShaderColorMaterial,t.fragmentShaderColorMaterial,a.Default3D);r.add("colorMaterial",l)},u});