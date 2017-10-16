require({cache:{
'url:esri/views/3d/webgl-engine/materials/LeafCardMaterial.xml':"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\n<snippets>\n\n<snippet name=\"vertexShaderLeafCard\">\n\t<![CDATA[\n  $vsprecisionf\n\n\tuniform mat4 proj;\n\tuniform mat4 view;\n\tuniform mat4 model;\n\tuniform mat4 modelNormal;\n\n\tuniform vec3 localOrigin;\n\n\tattribute vec3 $position;\n\tattribute vec4 $normal;\n\tattribute vec4 $uv0;\n\tvarying vec2 vtc;\n\tvarying vec3 vnormal;\n\tvarying float ambientLeaf;\n\n\tuniform float trafoScale;\n\tvarying vec3 vpos;\n\n\tvec2 rotate(vec2 pos, float angle) {\n\t\tfloat c = cos(angle);\n\t\tfloat s = sin(angle);\n\t\treturn vec2(c * pos.x - s * pos.y, s * pos.x + c * pos.y);\n\t}\n\n\tvoid main(void) {\n\n\t\tvpos = (model * vec4($position, 1.0)).xyz;\n\n\t\tvec3 pos = (view * model * vec4($position, 1.0)).xyz;\n\t\tvec2 uv01 = floor($uv0.xy);\n\t\tvec2 uv = $uv0.xy - uv01;\n\n   \t\tvec2 up = rotate(vec2(1,0), $uv0.z);\n   \t\tvec3 xDir =  vec3(up.x,up.y,0.0);\n   \t\tvec3 yDir =  vec3(-up.y,up.x,0.0);\n\n\t\tpos += xDir * (uv01.x - .5) * $uv0.w *trafoScale;\n\t\tpos += yDir * (uv01.y - .5) * $uv0.w *trafoScale;;\n\t\tvec4 pos4 = proj * vec4(pos, 1.0);\n\t\tgl_Position = pos4;\n\t\tvtc = uv;\n\t\tambientLeaf = normal.w;\n\t\tvnormal = normalize((modelNormal * vec4($normal.xyz, 1.0)).xyz);\n\t}\n]]>\n</snippet>\n\n<snippet name=\"fragmentShaderLeafCard\">\n<![CDATA[\n\t$fsprecisionf\n\n\tuniform vec3 camPos;\n\n\tuniform vec3 diffuse;\n\n\tuniform vec3 localOrigin;\n\n\tuniform sampler2D tex;\n\tvarying vec2 vtc;\n\tvarying vec3 vnormal;\n\tvarying float ambientLeaf;\n\n\tvarying vec3 vpos;\n\n\t$sceneLightingDefinitions\n\n\tvoid main() {\n\t\tvec4 texColor = texture2D(tex, vtc);\n\t\tif (texColor.a < .33) discard;\n\n\t\tvec3 normal = normalize(vnormal);\n\t\tvec3 albedo = diffuse * ambientLeaf * texColor.rgb;\n\n\t\tfloat ssao = 1.0;\n\n\t\t$sceneLightingAdditionalLightGlobal\n\n\t\tvec3 color = evaluateSceneLighting(normal, albedo, 1.0, 1.0 - ssao, additionalLight);\n\n\t\tgl_FragColor = vec4(color, texColor.a);\n\n\t}\n]]></snippet>\n\n\n<snippet name=\"vertexShaderLeafCardDepth\"><![CDATA[\n    $vsprecisionf\n\n   \tuniform mat4 proj;\n   \tuniform mat4 view;\n   \tuniform mat4 model;\n   \tuniform vec2 nearFar;\n\n   \tattribute vec3 $position;\n   \tattribute vec4 $uv0;\n\n   \tuniform float trafoScale;\n\n   \tvarying vec2 vtc;\n   \tvarying float depth;\n\n   \tvec2 rotate(vec2 pos, float angle) {\n   \t\tfloat c = cos(angle);\n   \t\tfloat s = sin(angle);\n   \t\treturn vec2(c * pos.x - s * pos.y, s * pos.x + c * pos.y);\n   \t}\n\n   \tvoid main(void) {\n   \t\tvec3 pos = (view * model * vec4($position, 1.0)).xyz;\n   \t\tvec2 uv01 = floor($uv0.xy);\n   \t\tvec2 uv = $uv0.xy - uv01;\n\n   \t\tvec2 up = rotate(vec2(1,0), $uv0.z);\n   \t\tvec3 xDir =  vec3(up.x,up.y,0.0);\n   \t\tvec3 yDir =  vec3(-up.y,up.x,0.0);\n\n   \t\tpos += xDir * (uv01.x - .5) * $uv0.w*trafoScale;\n   \t\tpos += yDir * (uv01.y - .5) * $uv0.w*trafoScale;\n   \t\tvec4 pos4 = proj * vec4(pos, 1.0);\n   \t\tgl_Position = pos4;\n   \t\tvtc = uv;\n\n   \t\tdepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);\n\n   \t}\n ]]></snippet>\n\n</snippets>\n"}});
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

define(["dojo/text!./LeafCardMaterial.xml","./internal/MaterialUtil","../lib/Util","../lib/gl-matrix","../lib/RenderSlot","../../../webgl/Program","../lib/DefaultVertexAttributeLocations","../../../webgl/Util"],function(t,e,r,a,i,n,o,s){function u(){return b=(9301*b+49297)%233280,b/233280}var f=a.vec3,d=a.mat4,c=a.mat4d,l=function(t,a,i,n,o,l){function b(){return 2*u()-1}e.basicMaterialConstructor(this,l);var g=[{name:"position",count:3,type:5126,offset:0,stride:44,normalized:!1},{name:"normal",count:4,type:5126,offset:12,stride:44,normalized:!1},{name:"uv0",count:4,type:5126,offset:28,stride:44,normalized:!1}],M=s.getStride(g)/4,p=1,A=1,x=!0,S=!0,L=.8,D=.2,T=!0,U=.1;this.getAmbient=function(){return a},this.getDiffuse=function(){return i},this.getSpecular=function(){return n},this.getShininess=function(){return o},this.dispose=function(){},this.getTextureId=function(){return t},this.getOutputAmount=function(t){var e,r=0;for(e=0;t/6>e;e++)e%p===0&&(r+=6);for(t=r,r=0,e=0;t/6>e;e++)e%A===0&&(r+=6);return r*M},this.getVertexBufferLayout=function(){return g},this.reduce=function(t,e){for(var r=t.position,a=t.normal,i=t.uv0,n=[],o=[],s=[],u=0,f=0;f<r.length/6;f++)if(f%e===0)for(var d=0;6>d;d++)n[u]=r[6*f+d],o[u]=a[6*f+d],s[u]=i[6*f+d],u++;return{position:n,normal:o,uv0:s}},this.fillInterleaved=function(t,a,i,n,o,s){var l=e.fill,h=this.reduce(t.faces.indices,p);h=this.reduce(h,A);var m=this.getOutputAmount(t.faces.indices.position.length);r.assert(m===h.position.length*M);for(var v=h.position,g=h.normal,w=h.uv0,C=t.vertexAttr.position.data,V=t.vertexAttr.normal.data,I=t.vertexAttr.uv0.data,E=0,N=f.create(),y=v.length/6,P=s,R=f.createFrom(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),_=f.createFrom(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),G=0;y>G;++G){for(var q=f.create(),X=f.create(),k=[100,100,-100,-100],z=f.create(),F=0;6>F;++F){var B=6*G+F,O=3*v[B],j=3*g[B],H=2*w[B];q[0]+=C[O+0],q[1]+=C[O+1],q[2]+=C[O+2],X[0]+=V[j+0],X[1]+=V[j+1],X[2]+=V[j+2];var J=I[H+0],K=I[H+1];k[0]=Math.min(k[0],J),k[1]=Math.min(k[1],K),k[2]=Math.max(k[2],J),k[3]=Math.max(k[3],K),0===F&&f.set3(C[O+0],C[O+1],C[O+2],z)}q[0]/=6,q[1]/=6,q[2]/=6,X[0]/=6,X[1]/=6,X[2]/=6,T&&(q[0]+=b()*U,q[1]+=b()*U,q[2]+=b()*U),void 0!==a&&(c.multiplyVec3(a,z,z),c.multiplyVec3(a,q,q),c.multiplyVec3(i,X,X)),f.add(q,N,N),f.max(R,q,R),f.min(_,q,_);var Q=.01;k[0]+=Q,k[1]+=Q,k[2]-=Q,k[3]-=Q;for(var W=0;4>W;W++)k[W]=Math.min(k[W],.99999);var Y=x?2*u()*Math.PI:0,Z=1.41*f.dist(z,q);E+=Z,s+=l(q,0,o,s,void 0,3),s+=l(X,0,o,s,void 0,3),o[s++]=0,o[s++]=k[0],o[s++]=k[1],o[s++]=Y,o[s++]=Z,s+=l(q,0,o,s,void 0,3),s+=l(X,0,o,s,void 0,3),o[s++]=0,o[s++]=k[2]+1,o[s++]=k[1],o[s++]=Y,o[s++]=Z,s+=l(q,0,o,s,void 0,3),s+=l(X,0,o,s,void 0,3),o[s++]=0,o[s++]=k[2]+1,o[s++]=k[3]+1,o[s++]=Y,o[s++]=Z,s+=l(q,0,o,s,void 0,3),s+=l(X,0,o,s,void 0,3),o[s++]=0,o[s++]=k[2]+1,o[s++]=k[3]+1,o[s++]=Y,o[s++]=Z,s+=l(q,0,o,s,void 0,3),s+=l(X,0,o,s,void 0,3),o[s++]=0,o[s++]=k[0],o[s++]=k[3]+1,o[s++]=Y,o[s++]=Z,s+=l(q,0,o,s,void 0,3),s+=l(X,0,o,s,void 0,3),o[s++]=0,o[s++]=k[0],o[s++]=k[1],o[s++]=Y,o[s++]=Z}N[0]/=y,N[1]/=y,N[2]/=y;var $=f.create();f.add(R,_,$),f.scale($,.5,$);var tt=f.create();f.subtract(R,_,tt),tt[0]=Math.abs(tt[0])/2,tt[1]=Math.abs(tt[1])/2,tt[2]=Math.abs(tt[2])/2;var et=f.create(N),rt=R[1]-_[1];et[1]-=rt/3;var at=f.create(),it=f.create();C=f.create();var nt=[f.create(),f.create(),f.create(),f.create()],ot=[0,0,0,0],st=d.create();for(G=0;y>G;++G){f.set3(o[P],o[P+1],o[P+2],C),f.subtract(C,et,at),f.normalize(at,at),it=f.subtract(C,$,it),f.normalize(it,it);var ut=Math.abs(f.dot(it,[1,0,0])),ft=Math.abs(f.dot(it,[0,1,0])),dt=Math.abs(f.dot(it,[0,0,1])),ct=ut*Math.abs($[0]-C[0])/tt[0];for(ct+=ft*Math.abs($[1]-C[1])/tt[1],ct+=dt*Math.abs($[2]-C[2])/tt[2],F=0;4>F;F++)S?(d.identity(st),d.rotate(st,b()*L,[0,1,0],st),d.rotate(st,b()*L,[1,0,0],st),d.multiplyVec3(st,at,nt[F])):nt[F]=at,ot[F]=.5+.5*ct-b()*D;var lt=.8+.3*b();for(F=0;6>F;++F){var ht;switch(F){case 0:ht=0;break;case 1:ht=1;break;case 2:ht=2;break;case 3:ht=2;break;case 4:ht=3;break;case 5:ht=0}P+=3,P+=l(nt[ht],0,o,P,i,3),o[P++]=ot[ht],P+=3,o[P++]*=lt}}},this.intersect=function(){},this.getGLMaterials=function(){return{color:h,depthShadowMap:v,normal:void 0,depth:m,highlight:void 0}},this.getAllTextureIds=function(){return[t]}},h=function(t,r,a){e.basicGLMaterialConstructor(this,t);var n=i.TRANSPARENT_MATERIAL,o=r.get("leafCard");e.singleTextureGLMaterialConstructor(this,a,{textureId:t.getTextureId()}),this.beginSlot=function(t){return n===t},this.getProgram=function(){return o};var s=t.getAmbient(),u=t.getDiffuse(),f=t.getSpecular(),d=t.getShininess();this.bind=function(t,e){t.bindProgram(o),this.bindTexture(t,o),o.setUniform3fv("ambient",s),o.setUniform3fv("diffuse",u),o.setUniform3fv("specular",f),o.setUniform1f("shininess",d),o.setUniform1f("trafoScale",1),t.setBlendingEnabled(!1),t.setDepthTestEnabled(!0)},this.release=function(t){},this.bindView=function(t,r){e.bindView(r.origin,r.view,o),e.bindCamPos(r.origin,r.viewInvTransp,o)},this.bindInstance=function(t,e){o.setUniformMatrix4fv("model",e.transformation),o.setUniformMatrix4fv("modelNormal",e.transformationNormal);var r=e.transformation,a=Math.sqrt(r[0]*r[0]+r[4]*r[4]+r[8]*r[8]),i=Math.sqrt(r[1]*r[1]+r[5]*r[5]+r[9]*r[9]),n=Math.sqrt(r[2]*r[2]+r[6]*r[6]+r[10]*r[10]);o.setUniform1f("trafoScale",(a+i+n)/3)},this.getDrawMode=function(t){var e=t.gl;return e.TRIANGLES}},m=function(t,r,a,n){e.basicGLMaterialConstructor(this,t);var o=i.TRANSPARENT_MATERIAL,s=null==n?r.get("leafCardDepth"):r.get("leafCardDepthShadowMap");e.singleTextureGLMaterialConstructor(this,a,{textureId:t.getTextureId()}),this.beginSlot=function(t){return o===t},this.getProgram=function(){return s},this.bind=function(t,e){t.bindProgram(s),this.bindTexture(t,s),s.setUniform2fv("nearFar",e.nearFar)},this.release=function(t){},this.bindView=function(t,r){e.bindView(r.origin,r.view,s)},this.bindInstance=function(t,e){s.setUniformMatrix4fv("model",e.transformation);var r=e.transformation,a=Math.sqrt(r[0]*r[0]+r[4]*r[4]+r[8]*r[8]),i=Math.sqrt(r[1]*r[1]+r[5]*r[5]+r[9]*r[9]),n=Math.sqrt(r[2]*r[2]+r[6]*r[6]+r[10]*r[10]);s.setUniform1f("trafoScale",(a+i+n)/3)},this.getDrawMode=function(t){var e=t.gl;return e.TRIANGLES}},v=function(t,e,r){m.call(this,t,e,r,!0)};l.loadShaders=function(e,r,a,i){e._parse(t);var s=new n(i,e.vertexShaderLeafCard,e.fragmentShaderLeafCard,o.Default3D),u=r.get("fsDepthTextured"),f=r.get("fsDepthTexturedShadowMap"),d=new n(i,e.vertexShaderLeafCardDepth,u.source,o.Default3D,u.defines),c=new n(i,e.vertexShaderLeafCardDepth,f.source,o.Default3D,f.defines);a.add("leafCard",s),a.add("leafCardDepth",d),a.add("leafCardDepthShadowMap",c)};var b=1234;return l});