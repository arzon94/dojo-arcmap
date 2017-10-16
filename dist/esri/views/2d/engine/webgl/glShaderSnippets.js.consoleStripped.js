require({cache:{
'url:esri/views/2d/engine/webgl/Shaders.xml':"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!--\n  Add your GLSL snippets to this file. You should start from\n  importing your old GLSL files. For instance, if you have a\n  file such as myShader.vs.glsl you should create a new <snippet name=\"myShaderVS\">\n  and then copy and paste the GLSL source as the content. You will then convert your\n  code to use the {@link esri/views/2d/engine/webgl/glShaderSnippets glShaderSnippets}\n  instance to access the GLSL code, instead of importing it directly with require(\"dojo/text!...\").\n-->\n<snippets>\n\n  <snippet name=\"foobarVS\">\n  </snippet>\n\n  <snippet name=\"foobarFS\">\n  </snippet>\n\n</snippets>\n\n",
'url:esri/views/2d/engine/webgl/bitblit.vs.glsl':"attribute vec2 a_pos;\nattribute vec2 a_tex;\n\nvarying mediump vec2 v_uv;\n\nvoid main(void) {\n  gl_Position = vec4(a_pos, 0.0, 1.0);\n  v_uv = a_tex;\n}\n",
'url:esri/views/2d/engine/webgl/bitblit.fs.glsl':"\tuniform lowp sampler2D u_tex;\n\tuniform lowp float u_opacity;\n\n\tvarying mediump vec2 v_uv;\n\n\tvoid main() {\n\t\tlowp vec4 color = texture2D(u_tex, v_uv);\n\n    // Note: output in pre-multiplied alpha for correct alpha compositing\n\t\tgl_FragColor = color *  u_opacity;\n\t}\n",
'url:esri/views/2d/engine/webgl/stencil.vs.glsl':"attribute vec2 a_pos;\n\nvoid main() {\n  gl_Position = vec4(a_pos, 0.0, 1.0);\n}\n",
'url:esri/views/2d/engine/webgl/stencil.fs.glsl':"void main() {\n  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}\n"}});
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

define(["require","exports","../../../webgl/ShaderSnippets","dojo/text!./Shaders.xml","dojo/text!./bitblit.vs.glsl","dojo/text!./bitblit.fs.glsl","dojo/text!./stencil.vs.glsl","dojo/text!./stencil.fs.glsl"],function(t,e,s,i,n,l,o,p){function r(t,e){b+='<snippet name="'+t+'"><![CDATA[',b+=e,b+="]]></snippet>"}var b="";b+='<?xml version="1.0" encoding="UTF-8"?>',b+="<snippets>",r("bitblitVS",n),r("bitblitFS",l),r("stencilVS",o),r("stencilFS",p),b+="</snippets>";var d=new s;return s.parse(b,d),s.parse(i,d),d});