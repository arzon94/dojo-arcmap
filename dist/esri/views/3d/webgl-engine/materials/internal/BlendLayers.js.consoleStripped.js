require({cache:{
'url:esri/views/3d/webgl-engine/materials/internal/BlendLayers.xml':"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\n<snippets>\n\n<snippet name=\"vertexShaderBlendLayers\"><![CDATA[\n  $vsprecisionf\n\n\tattribute vec3 $position;\n\tattribute vec2 $uv0;\n\n\tuniform float scale;\n\tuniform vec2 offset;\n\n\tvarying vec2 uv;\n\n\tvoid main(void) {\n\t\tgl_Position = vec4($position, 1.0);\n\t\tuv = $uv0 * scale + offset;;\n\t}\n]]></snippet>\n\n<snippet name=\"fragmentShaderBlendLayers\"><![CDATA[\n  $fsprecisionf\n\n\tvarying vec2 uv;\n\n\tuniform sampler2D tex;\n\tuniform float opacity;\n\n\tvoid main() {\n\t\tvec4 color = texture2D(tex, uv);\n\n    // Note: output in pre-multiplied alpha for correct alpha compositing\n\t\tgl_FragColor = vec4(color.xyz, 1.0) * color.a * opacity;\n\t}\n]]></snippet>\n\n</snippets>\n"}});
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

define(["dojo/text!./BlendLayers.xml","../../../../webgl/Program","../../lib/DefaultVertexAttributeLocations"],function(e,r,a){var t={loadShaders:function(t,n,d,l){t._parse(e);var o=new r(l,t.vertexShaderBlendLayers,t.fragmentShaderBlendLayers,a.Default3D);d.add("blendLayers",o)}};return t});