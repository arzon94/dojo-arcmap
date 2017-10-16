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

/*
     ** Copyright (c) 2012 The Khronos Group Inc.
     **
     ** Permission is hereby granted, free of charge, to any person obtaining a
     ** copy of this software and/or associated documentation files (the
     ** "Materials"), to deal in the Materials without restriction, including
     ** without limitation the rights to use, copy, modify, merge, publish,
     ** distribute, sublicense, and/or sell copies of the Materials, and to
     ** permit persons to whom the Materials are furnished to do so, subject to
     ** the following conditions:
     **
     ** The above copyright notice and this permission notice shall be included
     ** in all copies or substantial portions of the Materials.
     **
     ** THE MATERIALS ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     ** EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     ** MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
     ** IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
     ** CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
     ** TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
     ** MATERIALS OR THE USE OR OTHER DEALINGS IN THE MATERIALS.
     */

define([],function(){function e(e){if(null==d){d={},E={};for(var t in e)"number"==typeof e[t]&&(d[e[t]]=t,E[t]=e[t])}}function t(){if(null==d)throw"WebGLDebugUtils.init(ctx) not called"}function r(e){return t(),void 0!==d[e]}function n(e){t();var r=d[e];return void 0!==r?"gl."+r:"/*UNKNOWN WebGL ENUM*/ 0x"+e.toString(16)}function a(e,t,r,a){var o=g[e];if(void 0!==o){var o=o[t];if(void 0!==o&&o[r]){if("object"==typeof o[r]&&void 0!==o[r].enumBitwiseOr){for(var i=o[r].enumBitwiseOr,u=0,f=[],c=0;c<i.length;++c){var l=E[i[c]];0!==(a&l)&&(u|=l,f.push(n(l)))}return u===a?f.join(" | "):n(a)}return n(a)}}return null===a?"null":void 0===a?"undefined":a.toString()}function o(e,t){for(var r="",n=t.length,o=0;n>o;++o)r+=(0==o?"":", ")+a(e,n,o,t[o]);return r}function i(e,t,r){e.__defineGetter__(r,function(){return t[r]}),e.__defineSetter__(r,function(e){t[r]=e})}function u(t,r,o,f){function c(e,t){return function(){o&&o(t,arguments);var n=e[t].apply(e,arguments),a=f.getError();return 0!=a&&(l[a]=!0,r(a,t,arguments)),n}}f=f||t,e(t),r=r||function(e,t,r){for(var o="",i=r.length,u=0;i>u;++u)o+=(0==u?"":", ")+a(t,i,u,r[u]);s("WebGL error "+n(e)+" in "+t+"("+o+")")};var l={},g={};for(var d in t)if("function"==typeof t[d])if("getExtension"!=d)g[d]=c(t,d);else{var E=c(t,d);g[d]=function(){var e=E.apply(t,arguments);return u(e,r,o,f)}}else i(g,t,d);return g.getError=function(){for(var e in l)if(l.hasOwnProperty(e)&&l[e])return l[e]=!1,e;return t.NO_ERROR},g}function f(e){var t=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);for(var n=0;t>n;++n)e.disableVertexAttribArray(n),e.vertexAttribPointer(n,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(n,0);e.deleteBuffer(r);for(var a=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),n=0;a>n;++n)e.activeTexture(e.TEXTURE0+n),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null);for(e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1),e.colorMask(!0,!0,!0,!0),e.cullFace(e.BACK),e.depthFunc(e.LESS),e.depthMask(!0),e.depthRange(0,1),e.frontFace(e.CCW),e.hint(e.GENERATE_MIPMAP_HINT,e.DONT_CARE),e.lineWidth(1),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.UNPACK_COLORSPACE_CONVERSION_WEBGL&&e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.polygonOffset(0,0),e.sampleCoverage(1,!1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilMask(4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);e.getError(););}function c(e){function t(e){return"function"==typeof e?e:function(t){e.handleEvent(t)}}function r(e){var t=e.addEventListener;e.addEventListener=function(r,n,a){switch(r){case"webglcontextlost":S(n);break;case"webglcontextrestored":x(n);break;default:t.apply(e,arguments)}}}function n(){for(var e=Object.keys(A),t=0;t<e.length;++t)delete A[e]}function a(){++_,m||v==_&&e.loseContext()}function o(e,t){var r=e[t];return function(){if(a(),!m){var t=r.apply(e,arguments);return t}}}function u(){for(var e=0;e<T.length;++e){var t=T[e];t instanceof WebGLBuffer?s.deleteBuffer(t):t instanceof WebGLFramebuffer?s.deleteFramebuffer(t):t instanceof WebGLProgram?s.deleteProgram(t):t instanceof WebGLRenderbuffer?s.deleteRenderbuffer(t):t instanceof WebGLShader?s.deleteShader(t):t instanceof WebGLTexture&&s.deleteTexture(t)}}function c(e){return{statusMessage:e,preventDefault:function(){p=!0}}}function l(e){for(var t in e)"function"==typeof e[t]?g[t]=o(e,t):i(g,e,t);g.getError=function(){if(a(),!m)for(var e;e=s.getError();)A[e]=!0;for(var e in A)if(A[e])return delete A[e],e;return g.NO_ERROR};for(var r=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"],n=0;n<r.length;++n){var u=r[n];g[u]=function(t){return function(){if(a(),m)return null;var r=t.apply(e,arguments);return r.__webglDebugContextLostId__=b,T.push(r),r}}(e[u])}for(var f=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"],n=0;n<f.length;++n){var u=f[n];g[u]=function(t){return function(){return a(),m?null:t.apply(e,arguments)}}(g[u])}for(var c=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"],n=0;n<c.length;++n){var u=c[n];g[u]=function(t){return function(){return a(),m?!1:t.apply(e,arguments)}}(g[u])}return g.checkFramebufferStatus=function(t){return function(){return a(),m?g.FRAMEBUFFER_UNSUPPORTED:t.apply(e,arguments)}}(g.checkFramebufferStatus),g.getAttribLocation=function(t){return function(){return a(),m?-1:t.apply(e,arguments)}}(g.getAttribLocation),g.getVertexAttribOffset=function(t){return function(){return a(),m?0:t.apply(e,arguments)}}(g.getVertexAttribOffset),g.isContextLost=function(){return m},g}var s,g,d=[],E=[],g={},b=1,m=!1,T=[],v=0,_=0,p=!1,R=0,A={};e.getContext=function(t){return function(){var r=t.apply(e,arguments);if(r instanceof WebGLRenderingContext){if(r!=s){if(s)throw"got different context";s=r,g=l(s)}return g}return r}}(e.getContext);var S=function(e){d.push(t(e))},x=function(e){E.push(t(e))};return r(e),e.loseContext=function(){if(!m){for(m=!0,v=0,++b;s.getError(););n(),A[s.CONTEXT_LOST_WEBGL]=!0;var t=c("context lost"),r=d.slice();setTimeout(function(){for(var n=0;n<r.length;++n)r[n](t);R>=0&&setTimeout(function(){e.restoreContext()},R)},0)}},e.restoreContext=function(){m&&E.length&&setTimeout(function(){if(!p)throw"can not restore. webglcontestlost listener did not call event.preventDefault";u(),f(s),m=!1,_=0,p=!1;for(var e=E.slice(),t=c("context restored"),r=0;r<e.length;++r)e[r](t)},0)},e.loseContextInNCalls=function(e){if(m)throw"You can not ask a lost contet to be lost";v=_+e},e.getNumCalls=function(){return _},e.setRestoreTimeout=function(e){R=e},e}var l=function(e){window.console&&window.console.log&& 0 && window.console.log(e)},s=function(e){window.console&&window.console.error?window.console.error(e):l(e)},g={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},d=null,E=null;return{init:e,mightBeEnum:r,glEnumToString:n,glFunctionArgToString:a,glFunctionArgsToString:o,makeDebugContext:u,makeLostContextSimulatingCanvas:c,resetToInitialState:f}});