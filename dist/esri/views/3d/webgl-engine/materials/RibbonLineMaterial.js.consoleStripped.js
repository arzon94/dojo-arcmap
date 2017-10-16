require({cache:{
'url:esri/views/3d/webgl-engine/materials/RibbonLineMaterial.xml':"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\n<snippets>\n\n<snippet name=\"vsRibbonLine\"><![CDATA[\n  $vsprecisionf\n\n\tuniform mat4 proj;\n\tuniform mat4 view;\n\tuniform mat4 model;\n\n\tuniform float extLineWidth;\n\tuniform float nearPlane;\n\n\tattribute vec3 $position;\n\tattribute vec2 $uv0;\n\tvarying vec2 vtc;\n\n\tattribute vec4 $color;\n\tvarying vec4 vColor;\n\n\tattribute float size;\n\n#ifndef WALL\n\tuniform float miterLimit;\n\tattribute vec3 $auxpos1;\n\tattribute vec3 $auxpos2;\n#endif\n\n#ifdef SCREENSCALE\n\tuniform vec2 screenSize;\n\t$toScreenCoords\n#define VECTYPE vec2\n#define ZEROVEC vec2(0.0, 0.0)\n#define PERPENDICULAR(v) vec2(v.y, -v.x);\n#define ISOUTSIDE (left.x * right.y - left.y * right.x)*$uv0.y > 0.0\n\n#else //ifdef SCREENSCALE\n\n#define VECTYPE vec3\n#define ZEROVEC vec3(0.0, 0.0, 0.0)\n// these macros are only valid for \"strip\" type lines:\n#define PERPENDICULAR(v) cross(up/*vec3(0.0, 1.0, 0.0)*/, v)\n#define ISOUTSIDE dot(cross(left, right), up/*vec3(0.0, 1.0, 0.0)*/)*$uv0.y < 0.0\n\n#endif //ifdef SCREENSCALE\n\n\tfloat interp(float ncp, vec4 a, vec4 b) {\n\t\treturn (-ncp - a.z) / (b.z - a.z);\n\t}\n\n#ifdef SCREENSCALE\n\n  void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next) {\n\t\tfloat vnp = nearPlane*0.99;\n\n\t\t//We have four vertices per point on the line. Start and end vertices\n\t\t//are treated differently --> d > 0, d < 0\n\t\tfloat d = abs($uv0.y) - 1.1;\n\n\t\t//current pos behind ncp --> we need to clip\n\t\tif(pos.z > -nearPlane) {\n\t\t\tif (d < 0.0) {\n\t\t\t\t//previous in front of ncp\n\t\t\t\tif(prev.z < -nearPlane) {\n\t\t\t\t\tpos = mix(prev, pos, interp(vnp, prev, pos));\n\t\t\t\t\tnext = pos;\n\t\t\t\t} else {\n\t\t\t\t  pos = vec4(0, 0, 0, 1);\n\t\t\t  }\n\t\t\t}\n\t\t\t//next in front of ncp\n\t\t\tif(d > 0.0) {\n\t\t\t\tif(next.z < -nearPlane) {\n\t\t\t\t\tpos = mix(pos, next, interp(vnp, pos, next));\n\t\t\t\t\tprev = pos;\n\t\t\t\t} else {\n\t\t\t\t\tpos = vec4(0, 0, 0, 1);\n\t\t\t\t}\n\t\t\t}\n\t\t}\telse {\n\t\t\t//current position visible\n\t\t\t//previous behind ncp\n\t\t\tif (prev.z > -nearPlane) {\n\t\t\t\tprev = mix(pos, prev, interp(vnp, pos, prev));\n\t\t\t}\n\t\t\t//next behind ncp\n\t\t\tif (next.z > -nearPlane) {\n\t\t\t\tnext = mix(next, pos, interp(vnp, next, pos));\n\t\t\t}\n\t\t}\n\n\t\tpos= proj * pos;\n\t\tpos.xy *= screenSize;\n\t\tpos /= pos.w;\n\n\t\tnext = proj * next;\n\t\tnext.xy *= screenSize;\n\t\tnext /= next.w;\n\n\t\tprev = proj * prev;\n\t\tprev.xy *= screenSize;\n\t\tprev /= prev.w;\n  }\n\n#endif // SCREENSCALE\n\n\tvoid main(void) {\n\n\tfloat lineWidth = extLineWidth + $size;\n\n#ifdef SCREENSCALE\n\n#if 0\n\t\tvec4 pos = toScreenCoords($position.xyz);\n\t\tvec2 left = (pos - toScreenCoords($auxpos1)).xy;\n\t\tvec2 right = (toScreenCoords($auxpos2) - pos).xy;\n#else\n\t\tvec4 pos  = view * vec4((model * vec4($position.xyz, 1.0)).xyz, 1.0);\n\t\tvec4 prev = view * vec4((model * vec4($auxpos1.xyz, 1.0)).xyz, 1.0);\n\t\tvec4 next = view * vec4((model * vec4($auxpos2.xyz, 1.0)).xyz, 1.0);\n\n\t\tclipAndTransform(pos, prev, next);\n\n\t\tvec2 left = (pos - prev).xy;\n\t\tvec2 right = (next - pos).xy;\n#endif\n\n#else // ifdef SCREENSCALE\n\t\tvec4 pos = vec4($position, 1.0);\n#ifndef WALL\n\t\tvec3 left = $position.xyz - $auxpos1;\n\t\tvec3 right = $auxpos2 - $position.xyz;\n\t\tvec3 up = normalize($position.xyz);\n#endif // ifndef WALL\n#endif // ifdef SCREENSCALE\n\n#ifdef WALL\n\t\tfloat displacementLen = lineWidth;\n\t\tvec3 displacementDir = normalize($position.xyz);//vec3(0.0, 1.0, 0.0);\n#else // ifdef WALL\n\n\t\tfloat leftLen = length(left);\n\t\tleft = (leftLen > 0.001) ? left/leftLen : ZEROVEC;\n\n\t\tfloat rightLen = length(right);\n\t\tright = (rightLen > 0.001) ? right/rightLen : ZEROVEC;\n\n\t\t// determine if vertex is on the \"outside or \"inside\" of the join\n\t\tbool isOutside = ISOUTSIDE;\n\n\t\t// compute miter join position first\n\t\tfloat displacementLen = lineWidth;\n\t\tVECTYPE displacementDir = normalize(left + right);\n\t\tdisplacementDir = PERPENDICULAR(displacementDir);\n\t\tif (leftLen > 0.001 && rightLen > 0.001) {\n\t\t\tfloat nDotSeg = dot(displacementDir, left);\n\t\t\tdisplacementLen /= length(nDotSeg*left - displacementDir);\n\n\t\t\t// limit displacement of inner vertices\n\t\t\tif (!isOutside)\n\t\t\t\tdisplacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));\n\t\t}\n\n\t\tif (isOutside && (displacementLen > miterLimit*lineWidth)) {\n\t\t\t// convert to bevel join if miterLimit is exceeded\n\t\t\tif (leftLen < 0.001)\n\t\t\t    displacementDir = right;\n\t\t\telse if (rightLen < 0.001)\n\t\t\t\tdisplacementDir = left;\n\t\t\telse\n\t\t\t\tdisplacementDir = (abs($uv0.y) - 1.1 < 0.0) ? left : right;\n\t\t\tdisplacementDir = normalize(displacementDir);\n\t\t\tdisplacementDir = PERPENDICULAR(displacementDir);\n\t\t\tdisplacementLen = lineWidth;\n\t\t}\n\n#endif // ifdef WALL\n\n#ifdef SCREENSCALE\n\t\tpos.xy += displacementDir * floor($uv0.y + 0.5) * displacementLen;\n\t\tpos.xy /= screenSize;\n#else\n\t\tpos.xyz += displacementDir * floor($uv0.y + 0.5) * displacementLen;\n\t\tpos = proj * view * model * pos;\n#endif\n\n\t\tvtc = $uv0;\n\t\tvColor = $color * 0.003921568627451; // = 1/255\n\t\tgl_Position = pos;\n\t}\n]]></snippet>\n\n<snippet name=\"fsRibbonLine\"><![CDATA[\n  $fsprecisionf\n\n\tuniform vec4 eColor;\n\tvarying vec4 vColor;\n\tvarying vec2 vtc;\n\n\tvoid main() {\n\t\tgl_FragColor = eColor * vColor;\n\t\t//gl_FragColor.a = 1;\n\t}\n]]></snippet>\n\n<snippet name=\"fsRibbonLineHighlight\"><![CDATA[\n\t$fsprecisionf\n\n\tvoid main() {\n\t\tgl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\t}\n]]></snippet>\n\n</snippets>\n"}});
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

define(["dojo/_base/lang","dojo/text!./RibbonLineMaterial.xml","./internal/MaterialUtil","../lib/Util","../lib/gl-matrix","../lib/RenderSlot","../lib/ComponentUtils","../../../webgl/Program","../lib/DefaultVertexAttributeLocations","../lib/DefaultVertexBufferLayouts","../../../webgl/Util"],function(t,e,i,n,r,o,a,s,l,f,d){function c(t,e,i,n,r,o){var a=t.length/3,s=t[0],l=t[1],f=t[2],d=0;n&&(s=n[0]*s+n[4]*l+n[8]*f+n[12],l=n[1]*s+n[5]*l+n[9]*f+n[13],f=n[2]*s+n[6]*l+n[10]*f+n[14]);var c=s,m=l,u=f,b=t[3],h=t[4],g=t[5];n&&(b=n[0]*b+n[4]*h+n[8]*g+n[12],h=n[1]*b+n[5]*h+n[9]*g+n[13],g=n[2]*b+n[6]*h+n[10]*g+n[14]);for(var p=0;a>p;p++){var L=3*p;a-1>p&&(b=t[L+3],h=t[L+4],g=t[L+5],n&&(b=n[0]*b+n[4]*h+n[8]*g+n[12],h=n[1]*b+n[5]*h+n[9]*g+n[13],g=n[2]*b+n[6]*h+n[10]*g+n[14])),d+=Math.sqrt((c-s)*(c-s)+(m-l)*(m-l)+(u-f)*(u-f)),r[o++]=c,r[o++]=m,r[o++]=u,r[o++]=d,r[o++]=0===p?-1.2:-1,r[o++]=s,r[o++]=l,r[o++]=f,r[o++]=b,r[o++]=h,r[o++]=g,r[o++]=e[0],r[o++]=e[1],r[o++]=e[2],r[o++]=e[3],r[o++]=i[0],r[o++]=c,r[o++]=m,r[o++]=u,r[o++]=d,r[o++]=0===p?1.2:1,r[o++]=s,r[o++]=l,r[o++]=f,r[o++]=b,r[o++]=h,r[o++]=g,r[o++]=e[0],r[o++]=e[1],r[o++]=e[2],r[o++]=e[3],r[o++]=i[0],p>0&&a-1>p&&(r[o++]=c,r[o++]=m,r[o++]=u,r[o++]=d,r[o++]=-1.2,r[o++]=s,r[o++]=l,r[o++]=f,r[o++]=b,r[o++]=h,r[o++]=g,r[o++]=e[0],r[o++]=e[1],r[o++]=e[2],r[o++]=e[3],r[o++]=i[0],r[o++]=c,r[o++]=m,r[o++]=u,r[o++]=d,r[o++]=1.2,r[o++]=s,r[o++]=l,r[o++]=f,r[o++]=b,r[o++]=h,r[o++]=g,r[o++]=e[0],r[o++]=e[1],r[o++]=e[2],r[o++]=e[3],r[o++]=i[0]),s=c,l=m,f=u,c=b,m=h,u=g}}function m(t,e,i,n){for(var r,o,a,s=t.length/3,l=0,f=t[0],d=t[1],c=t[2],m=0;s>m;m++){var u=3*m;r=f,o=d,a=c,f=t[u],d=t[u+1],c=t[u+2],e&&(f=e[0]*f+e[4]*d+e[8]*c+e[12],d=e[1]*f+e[5]*d+e[9]*c+e[13],c=e[2]*f+e[6]*d+e[10]*c+e[14]),l+=Math.sqrt((f-r)*(f-r)+(d-o)*(d-o)+(c-a)*(c-a)),i[n++]=f,i[n++]=d,i[n++]=c,i[n++]=l,i[n++]=-1,i[n++]=f,i[n++]=d,i[n++]=c,i[n++]=l,i[n++]=1}}var u=[255,255,255,255],b=[0,0,0,0],h=r.vec3d,g=r.vec2d,p=r.mat4d,L=h.create(),v=h.create(),y=h.create(),w=h.create(),P=g.create(),A=g.create(),E=h.create(),R=h.create(),O=function(t,e){i.basicMaterialConstructor(this,e);var r=n.VertexAttrConstants;t=t||{},t.color=t.color||[1,1,1,1],t.width=t.width||0,t.type=t.type||"screen",t.join=t.join||"miter",t.miterLimit="miter"===t.join?t.miterLimit||5:t.miterLimit;var o="wall"===t.type?2:4,s=2,l=f.Pos3Tex;"wall"!==t.type&&(l=[{name:"position",count:3,type:5126,offset:0,stride:64,normalized:!1},{name:"uv0",count:2,type:5126,offset:12,stride:64,normalized:!1},{name:"auxpos1",count:3,type:5126,offset:20,stride:64,normalized:!1},{name:"auxpos2",count:3,type:5126,offset:32,stride:64,normalized:!1},{name:"color",count:4,type:5126,offset:44,stride:64,normalized:!1},{name:"size",count:1,type:5126,offset:60,stride:64,normalized:!1}]),this.canBeMerged=!1,this.getParams=function(){return t},this.getParameterValues=function(){var e={color:t.color,width:t.width,type:t.type,join:t.join,polygonOffset:t.polygonOffset};return"miter"===t.join&&(e.miterLimit=t.miterLimit),e},this.setParameterValues=function(e){for(var i in e)e.hasOwnProperty(i)&&(n.assert("type"!==i,"RibbonLineMaterial: type cannot be changed after creation"),t[i]=e[i]);this.notifyDirty("matChanged")},this.dispose=function(){},this.getOutputAmount=function(t){var e=t/2+1,i=(e-2)*o+2*s;return i*d.getStride(l)/4},this.getVertexBufferLayout=function(){return l},this.fillInterleaved=function(e,i,n,o,a,s){var l=e.vertexAttr[r.POSITION].data,f=e.vertexAttr[r.COLOR]?e.vertexAttr[r.COLOR].data:u,d=e.vertexAttr[r.SIZE]?e.vertexAttr[r.SIZE].data:b,h=e.faces&&e.faces.indices&&e.faces.indices.position;h&&h.length!=2*(l.length/3-1)&&console.warn("RibbonLineMaterial does not support indices"),"wall"===t.type?m(l,i,a,s):c(l,f,d,i,a,s)},this.intersect=function(e,i,o,s,l,f,d){if(s.isSelection&&!a.isAllHidden(i.componentVisibilities,e.data.componentOffsets)){for(var c,m,u,b=e.getData().getVertexAttr(r.position).position.data,g=e.getData().getVertexAttr(r.SIZE).size,O=g&&g.data[0],D=O+t.width,x=Number.MAX_VALUE,S=s.camera,U=s.point,_=0;_<b.length-5;_+=3){if(L[0]=b[_],L[1]=b[_+1],L[2]=b[_+2],p.multiplyVec3(o,L),v[0]=b[_+3],v[1]=b[_+4],v[2]=b[_+5],p.multiplyVec3(o,v),S.projectPoint(L,P),S.projectPoint(v,A),P[2]<0&&A[2]>0)h.subtract(L,v,y),c=S.frustumPlanes,m=-(h.dot(c[4],L)+c[4][3]),u=m/h.dot(y,c[4]),h.scale(y,u,y),h.add(L,y,L),S.projectPoint(L,P);else if(P[2]>0&&A[2]<0)h.subtract(v,L,y),c=S.frustumPlanes,m=-(h.dot(c[4],v)+c[4][3]),u=m/h.dot(y,c[4]),h.scale(y,u,y),h.add(v,y,v),S.projectPoint(v,A);else if(P[2]<0&&A[2]<0)continue;var M=n.projectVectorVector2D(P,A,U);x>M&&(x=M,h.set(L,E),h.set(v,R))}var j=4,C=s.p0,V=s.p1;if(D/2+j>x){var I=n.linelineDistance3D(E,R,C,V),N=Number.MAX_VALUE;if(I[0]){var T=I[2];h.subtract(T,C,w);var H=h.length(w);N=H/h.dist(C,V)}d(N,w)}}},this.getGLMaterials=function(){return{color:D,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:x}},this.getAllTextureIds=function(){return[]}},D=function(e,n){i.basicGLMaterialConstructor(this,e);var r=t.clone(e.getParams());r.miterLimit="miter"===r.join?r.miterLimit:0,delete r.join;var a=n.get("ribbonLine_"+r.type);this.updateParameters=function(){var t=e.getParams();r.polygonOffset=t.polygonOffset,r.color=t.color,r.width=t.width,r.miterLimit="miter"===t.join?t.miterLimit:0},this.beginSlot=function(t){return t===o.TRANSPARENT_MATERIAL},this.getProgram=function(){return a},this.bind=function(t,e){t.bindProgram(a),a.setUniform4fv("eColor",r.color),a.setUniform1f("miterLimit",r.miterLimit),a.setUniform1f("nearPlane",e.nearFar[0]),"screen"===r.type?(a.setUniform2fv("screenSize",[e.viewport[2],e.viewport[3]]),a.setUniform1f("extLineWidth",r.width*e.pixelRatio)):a.setUniform1f("extLineWidth",r.width),r.polygonOffset&&(t.setPolygonOffsetFillEnabled(!0),t.setPolygonOffset(0,-4)),t.setFaceCullingEnabled(!1),t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA),t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(r.color[3]>=1)},this.release=function(t){r.polygonOffset&&t.setPolygonOffsetFillEnabled(!1),t.setBlendingEnabled(!1),t.setDepthWriteEnabled(!0)},this.bindView=function(t,e){i.bindView(e.origin,e.view,a)},this.bindInstance=function(t,e){a.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var e=t.gl;return e.TRIANGLE_STRIP}},x=function(e,n){i.basicGLMaterialConstructor(this,e);var r=t.clone(e.getParams());r.miterLimit="miter"===r.join?r.miterLimit:0,delete r.join;var a=n.get("ribbonLineHighlight_"+r.type);this.updateParameters=function(){var t=e.getParams();r.polygonOffset=t.polygonOffset,r.color=t.color,r.width=t.width,r.miterLimit="miter"===t.join?t.miterLimit:0},this.beginSlot=function(t){return t===o.OPAQUE_MATERIAL},this.getProgram=function(){return a},this.bind=function(t,e){t.bindProgram(a),a.setUniform4fv("eColor",r.color),a.setUniform1f("miterLimit",r.miterLimit),a.setUniform1f("nearPlane",e.nearFar[0]),"screen"===r.type?(a.setUniform2fv("screenSize",[e.viewport[2],e.viewport[3]]),a.setUniform1f("extLineWidth",r.width*e.pixelRatio)):a.setUniform1f("extLineWidth",r.width),r.polygonOffset&&(t.setPolygonOffsetFillEnabled(!0),t.setPolygonOffset(0,-4)),t.setFaceCullingEnabled(!1),t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(r.color[3]>=1)},this.release=function(t){r.polygonOffset&&t.setPolygonOffsetFillEnabled(!1),t.setDepthWriteEnabled(!0)},this.bindView=function(t,e){i.bindView(e.origin,e.view,a)},this.bindInstance=function(t,e){a.setUniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){var e=t.gl;return e.TRIANGLE_STRIP}};return O.loadShaders=function(t,i,n,r){t._parse(e);var o=new s(r,t.vsRibbonLine,t.fsRibbonLine,l.Default3D,["SCREENSCALE"]),a=new s(r,t.vsRibbonLine,t.fsRibbonLineHighlight,l.Default3D,["SCREENSCALE"]),f=new s(r,t.vsRibbonLine,t.fsRibbonLine,l.Default3D),d=new s(r,t.vsRibbonLine,t.fsRibbonLineHighlight,l.Default3D),c=new s(r,t.vsRibbonLine,t.fsRibbonLine,l.Default3D,["WALL"]),m=new s(r,t.vsRibbonLine,t.fsRibbonLineHighlight,l.Default3D,["WALL"]);n.add("ribbonLine_screen",o),n.add("ribbonLineHighlight_screen",a),n.add("ribbonLine_strip",f),n.add("ribbonLineHighlight_strip",d),n.add("ribbonLine_wall",c),n.add("ribbonLineHighlight_wall",m)},O});